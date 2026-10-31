import express from 'express';
import { connectDB } from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import rateLimit from 'express-rate-limit';
import User from './models/User.js';
import Otp from './models/Otp.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configure Nodemailer Transporter if credentials are provided in .env
let mailTransporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  try {
    mailTransporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    console.log(`[Al_Hayat NeuroCare AI] SMTP Mailer configured for: ${process.env.EMAIL_USER}`);
  } catch (err) {
    console.warn('[Al_Hayat NeuroCare AI] SMTP config error:', err.message);
  }
}


// SECURE AUTH V2 — MongoDB, hashed OTP, bcrypt and JWT
const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false
});

const normalizeEmail = value => String(value || '').trim().toLowerCase();
const hashOtp = value => crypto.createHash('sha256').update(value).digest('hex');

function createToken(user) {
  if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not configured');
  return jwt.sign(
    { sub: user._id.toString(), email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
}

function publicUser(user) {
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    phone: user.phone || '',
    age: user.age || '',
    gender: user.gender || '',
    role: user.role,
    avatar: user.avatar || ''
  };
}

// Send a real email OTP. Never return or log the OTP.
app.post('/api/auth/send-otp', otpLimiter, async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const purpose = req.body.purpose || 'register';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, message: 'Enter a valid email address.' });
    }
    if (!['register', 'reset'].includes(purpose)) {
      return res.status(400).json({ success: false, message: 'Invalid OTP purpose.' });
    }
    if (!mailTransporter) {
      return res.status(503).json({ success: false, message: 'Email service is not configured.' });
    }

    const existing = await User.findOne({ email });
    if (purpose === 'register' && existing) {
      return res.status(409).json({ success: false, message: 'Account already exists. Please sign in.' });
    }
    if (purpose === 'reset' && !existing) {
      return res.status(404).json({ success: false, message: 'No account found with this email.' });
    }

    const code = crypto.randomInt(100000, 1000000).toString();
    await Otp.deleteMany({ identifier: email, purpose });

    await Otp.create({
      identifier: email,
      codeHash: hashOtp(code),
      purpose,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      attempts: 0,
      verified: false
    });

    try {
      await mailTransporter.sendMail({
        from: `"Al_Hayat NeuroCare AI" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Al_Hayat NeuroCare AI — Verification Code',
        html: `<div style="font-family:Arial;background:#030712;color:#f8fafc;padding:25px;border-radius:12px"><h2 style="color:#06b6d4">Al_Hayat NeuroCare AI</h2><p>Your ${purpose === 'register' ? 'registration' : 'password reset'} verification code is:</p><div style="font-size:32px;letter-spacing:8px;color:#38bdf8;font-weight:bold">${code}</div><p>This code expires in 5 minutes. Do not share it.</p></div>`
      });
    } catch (mailError) {
      await Otp.deleteMany({ identifier: email, purpose });
      console.error('OTP EMAIL ERROR:', {
        message: mailError.message,
        code: mailError.code,
        command: mailError.command,
        responseCode: mailError.responseCode
      });
      return res.status(502).json({ success: false, message: 'Could not send email. Please try again.' });
    }

    return res.json({
      success: true,
      message: `Verification code sent to ${email}.`,
      expiresInSeconds: 300
    });
  } catch (error) {
    console.error('Send OTP error:', error.message);
    return res.status(500).json({ success: false, message: 'Unable to send verification code.' });
  }
});

// Verify OTP. Verification is tied to email and purpose.
app.post('/api/auth/verify-otp', otpLimiter, async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const otp = String(req.body.otp || '').trim();
    const purpose = req.body.purpose || 'register';

    if (!email || !/^\d{6}$/.test(otp) || !['register', 'reset'].includes(purpose)) {
      return res.status(400).json({ success: false, message: 'Enter the 6-digit code.' });
    }

    const record = await Otp.findOne({ identifier: email, purpose }).sort({ createdAt: -1 });
    if (!record || record.expiresAt <= new Date()) {
      return res.status(400).json({ success: false, message: 'Code expired or not found. Request a new code.' });
    }
    if (record.verified) {
      return res.json({ success: true, message: 'Email already verified.' });
    }
    if (record.attempts >= 5) {
      await Otp.deleteOne({ _id: record._id });
      return res.status(429).json({ success: false, message: 'Too many incorrect attempts. Request a new code.' });
    }

    if (record.codeHash !== hashOtp(otp)) {
      record.attempts += 1;
      await record.save();
      return res.status(400).json({ success: false, message: 'Incorrect verification code.' });
    }

    record.verified = true;
    await record.save();
    return res.json({ success: true, message: 'Email verified successfully.' });
  } catch (error) {
    console.error('Verify OTP error:', error.message);
    return res.status(500).json({ success: false, message: 'Unable to verify code.' });
  }
});

// Register only after verified email OTP.
app.post('/api/auth/register', authLimiter, async (req, res) => {
  try {
    const { name, phone, password, age, gender } = req.body;
    const email = normalizeEmail(req.body.email);

    if (!name?.trim() || !email || !password || String(password).length < 8) {
      return res.status(400).json({ success: false, message: 'Name, valid email and password (minimum 8 characters) are required.' });
    }

    const verification = await Otp.findOne({
      identifier: email,
      purpose: 'register',
      verified: true,
      expiresAt: { $gt: new Date() }
    });

    if (!verification) {
      return res.status(403).json({ success: false, message: 'Please verify your email OTP before registering.' });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({
      name: name.trim(),
      email,
      phone: phone?.trim() || undefined,
      passwordHash,
      age: age ? String(age) : '',
      gender: gender || '',
      role: 'Patient'
    });

    await Otp.deleteMany({ identifier: email, purpose: 'register' });

    return res.status(201).json({
      success: true,
      message: 'Registration successful.',
      user: publicUser(user),
      token: createToken(user)
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ success: false, message: 'An account with this email or phone already exists.' });
    }
    console.error('Registration error:', error.message);
    return res.status(500).json({ success: false, message: 'Registration failed. Please try again.' });
  }
});

// Login only for existing accounts with matching password.
app.post('/api/auth/login', authLimiter, async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const password = String(req.body.password || '');

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email }).select('+passwordHash');
    if (!user || !user.passwordHash || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    return res.json({
      success: true,
      message: 'Login successful.',
      user: publicUser(user),
      token: createToken(user)
    });
  } catch (error) {
    console.error('Login error:', error.message);
    return res.status(500).json({ success: false, message: 'Login failed. Please try again.' });
  }
});

// Password reset requires a verified reset-purpose OTP.
app.post('/api/auth/forgot-password', authLimiter, async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const newPassword = String(req.body.newPassword || '');

    if (!email || newPassword.length < 8) {
      return res.status(400).json({ success: false, message: 'Valid email and password (minimum 8 characters) are required.' });
    }

    const verification = await Otp.findOne({
      identifier: email,
      purpose: 'reset',
      verified: true,
      expiresAt: { $gt: new Date() }
    });

    if (!verification) {
      return res.status(403).json({ success: false, message: 'Please verify your password reset OTP first.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'Account not found.' });
    }

    user.passwordHash = await bcrypt.hash(newPassword, 12);
    await user.save();
    await Otp.deleteMany({ identifier: email, purpose: 'reset' });

    return res.json({ success: true, message: 'Password reset successfully. You can now sign in.' });
  } catch (error) {
    console.error('Password reset error:', error.message);
    return res.status(500).json({ success: false, message: 'Password reset failed.' });
  }
});

// Google login is disabled until real Google ID-token verification is configured.
app.post('/api/auth/google', authLimiter, (req, res) => {
  return res.status(501).json({
    success: false,
    message: 'Google sign-in is not configured yet. Please use email and password.'
  });
});

// Health check
app.get('/api/health', async (req, res) => {
  try {
    const registeredUsersCount = await User.countDocuments();
    return res.json({
      status: 'ONLINE',
      service: 'Al_Hayat NeuroCare AI Secure Medical Server',
      smtpConfigured: Boolean(mailTransporter),
      registeredUsersCount,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return res.status(503).json({ status: 'DEGRADED', message: 'Database health check failed.' });
  }
});

// CLINICAL MEDICAL KNOWLEDGE BASE ENDPOINTS
// ==========================================

// Helper: Read all disease files from data/ directory
function getAllDiseasesFromDisk() {
  const baseDir = path.resolve(process.cwd(), 'data');
  const results = [];
  if (!fs.existsSync(baseDir)) return results;

  const categories = fs.readdirSync(baseDir);
  for (const cat of categories) {
    const catPath = path.join(baseDir, cat);
    if (fs.statSync(catPath).isDirectory() && !['medical-glossary', 'emergency-guidelines', 'references'].includes(cat)) {
      const files = fs.readdirSync(catPath).filter(f => f.endsWith('.json'));
      for (const file of files) {
        try {
          const content = JSON.parse(fs.readFileSync(path.join(catPath, file), 'utf-8'));
          results.push(content);
        } catch (e) { }
      }
    }
  }
  return results;
}

// 1. Get all verified diseases
app.get('/api/kb/diseases', (req, res) => {
  const diseases = getAllDiseasesFromDisk();
  res.json({
    success: true,
    totalCount: diseases.length,
    diseases
  });
});

// 2. Search knowledge base
app.get('/api/kb/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase().trim();
  const diseases = getAllDiseasesFromDisk();
  if (!q) {
    return res.json({ success: true, count: diseases.length, results: diseases });
  }

  const results = diseases.filter(d =>
    d.official_name.toLowerCase().includes(q) ||
    (d.alternative_names && d.alternative_names.some(a => a.toLowerCase().includes(q))) ||
    d.simple_description.toLowerCase().includes(q) ||
    (d.symptoms && d.symptoms.some(s => s.toLowerCase().includes(q))) ||
    (d.search_keywords && d.search_keywords.some(k => k.toLowerCase().includes(q)))
  );

  res.json({
    success: true,
    query: q,
    count: results.length,
    results
  });
});

// 3. Get single disease by ID
app.get('/api/kb/disease/:id', (req, res) => {
  const { id } = req.params;
  const diseases = getAllDiseasesFromDisk();
  const found = diseases.find(d => d.disease_id === id);
  if (!found) {
    return res.status(404).json({ success: false, message: 'Disease profile not found' });
  }
  res.json({ success: true, disease: found });
});

// 4. Get Medical Glossary
app.get('/api/kb/glossary', (req, res) => {
  const filePath = path.resolve(process.cwd(), 'data/medical-glossary/neurology-glossary.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return res.json({ success: true, glossary: data });
  }
  res.status(404).json({ success: false, message: 'Glossary not found' });
});

// 5. Get Emergency Protocols
app.get('/api/kb/emergency-protocols', (req, res) => {
  const filePath = path.resolve(process.cwd(), 'data/emergency-guidelines/emergency-protocols.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return res.json({ success: true, protocols: data });
  }
  res.status(404).json({ success: false, message: 'Emergency protocols not found' });
});

// 6. Get References Index
app.get('/api/kb/references', (req, res) => {
  const filePath = path.resolve(process.cwd(), 'data/references/sources-index.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return res.json({ success: true, references: data });
  }
  res.status(404).json({ success: false, message: 'References index not found' });
});

// Secure Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { language = 'en', userText } = req.body;
    const apiKey = process.env.NEUROCARE_AI_API_KEY || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.json({
        isDemoMode: true,
        source: 'Al_Hayat NeuroCare AI Clinical Knowledge Engine (Local Verified Mode)',
        notice: 'Operating in verified offline clinical neurology mode.',
        reply: null
      });
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: `You are Al_Hayat NeuroCare AI Medical Assistant. Reply in ${language}. Never prescribe medicines. ${userText}` }]
          }
        ]
      })
    });

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    return res.json({
      isDemoMode: false,
      source: 'Cloud LLM Medical Endpoint',
      reply: replyText
    });
  } catch (error) {
    console.error('Server AI Chat error:', error);
    return res.status(500).json({
      error: 'Internal medical proxy error',
      isDemoMode: true
    });
  }
});

connectDB()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Al_Hayat NeuroCare AI Secure Medical Backend running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Backend startup failed:', error.message);
    process.exit(1);
  });
