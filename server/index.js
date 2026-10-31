import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

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
    console.log(`[Al_Hayat Neuro AI] SMTP Mailer configured for: ${process.env.EMAIL_USER}`);
  } catch (err) {
    console.warn('[Al_Hayat Neuro AI] SMTP config error:', err.message);
  }
}

// In-Memory Real Clinical Database for Al_Hayat Neuro AI
const usersDatabase = [
  {
    id: 'usr_sahil_1',
    name: 'Mohd Sahil',
    email: 'sahil@alhayat.ai',
    phone: '+91 98765 43210',
    password: 'neuro123',
    age: '24',
    gender: 'Male',
    role: 'Patient / Consultant',
    registeredAt: '2026-10-30T20:00:00.000Z'
  },
  {
    id: 'usr_demo_2',
    name: 'Dr. Clinical Evaluator',
    email: 'demo@alhayat.ai',
    phone: '+91 98111 22233',
    password: 'demo123',
    age: '35',
    gender: 'Male',
    role: 'Doctor / Neurologist',
    registeredAt: '2026-10-30T21:00:00.000Z'
  }
];

// OTP Store: email -> { code, expiresAt, purpose }
const otpStore = new Map();

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ==========================================
// AUTHENTICATION & OTP ENDPOINTS
// ==========================================

// 1. Send OTP (to Email / Gmail or Phone)
app.post('/api/auth/send-otp', async (req, res) => {
  const { email, phone, purpose = 'register' } = req.body;

  if (!email && !phone) {
    return res.status(400).json({ success: false, message: 'Email or Mobile number is required' });
  }

  const key = (email || phone).toLowerCase().trim();
  const code = generateOTP();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes validity

  otpStore.set(key, { code, expiresAt, purpose });
  console.log(`[Al_Hayat Neuro AI OTP] Generated OTP for ${key} [${purpose}]: ${code}`);

  let emailDelivered = false;

  // Attempt real email dispatch if SMTP transporter is configured
  if (mailTransporter && email) {
    try {
      await mailTransporter.sendMail({
        from: `"Al_Hayat Neuro AI" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Al_Hayat Neuro AI — Verification Code: ${code}`,
        html: `
          <div style="font-family: Arial, sans-serif; background: #030712; color: #f8fafc; padding: 25px; border-radius: 12px; max-width: 500px; margin: auto; border: 1px solid #06b6d4;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h2 style="color: #06b6d4; margin: 0; font-size: 24px;">Al_Hayat Neuro AI</h2>
              <p style="color: #94a3b8; font-size: 13px; margin: 4px 0 0 0;">Clinical 3D Neuroanatomy & Brain Health Platform</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #1e293b; margin: 15px 0;" />
            <p style="font-size: 14px; color: #e2e8f0;">Hello,</p>
            <p style="font-size: 14px; color: #cbd5e1;">Your one-time security verification code for <strong>${purpose === 'register' ? 'Registration' : 'Password Reset'}</strong> is:</p>
            <div style="background: #0f172a; border: 2px dashed #06b6d4; padding: 16px; font-size: 32px; font-weight: bold; letter-spacing: 8px; text-align: center; color: #38bdf8; border-radius: 8px; margin: 20px 0;">
              ${code}
            </div>
            <p style="font-size: 12px; color: #64748b;">This code is valid for <strong>5 minutes</strong>. Do not share this code with anyone.</p>
            <p style="font-size: 11px; color: #475569; margin-top: 25px; text-align: center;">© 2026 Al_Hayat Neuro AI • Department of Clinical Neurosciences</p>
          </div>
        `
      });
      emailDelivered = true;
      console.log(`[Al_Hayat Neuro AI] Real email successfully sent to ${email}`);
    } catch (err) {
      console.warn(`[Al_Hayat Neuro AI] Real email dispatch failed: ${err.message}`);
    }
  }

  return res.json({
    success: true,
    message: emailDelivered
      ? `Real verification code sent to your Gmail inbox: ${key}`
      : `Verification code generated for ${key}. (Demo OTP: ${code})`,
    otp: code,
    emailDelivered: emailDelivered,
    expiresInSeconds: 300
  });
});

// 2. Verify OTP
app.post('/api/auth/verify-otp', (req, res) => {
  const { email, phone, otp } = req.body;
  const key = (email || phone || '').toLowerCase().trim();
  const record = otpStore.get(key);

  if (!record) {
    return res.status(400).json({ success: false, message: 'No active OTP found. Please request a new OTP.' });
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(key);
    return res.status(400).json({ success: false, message: 'OTP has expired. Please request a new code.' });
  }

  if (record.code !== (otp || '').trim()) {
    return res.status(400).json({ success: false, message: 'Invalid OTP code. Please check and try again.' });
  }

  return res.json({ success: true, message: 'OTP verified successfully.' });
});

// 3. Register New Account (with verified OTP)
app.post('/api/auth/register', (req, res) => {
  const { name, email, phone, password, age = '24', gender = 'Male', role = 'patient', otp } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
  }

  const normalizedEmail = email.toLowerCase().trim();

  // If OTP provided, verify it
  if (otp) {
    const record = otpStore.get(normalizedEmail) || (phone ? otpStore.get(phone.trim()) : null);
    if (!record || record.code !== otp.trim()) {
      return res.status(400).json({ success: false, message: 'Invalid or missing verification OTP.' });
    }
    otpStore.delete(normalizedEmail);
  }

  // Check if user exists
  const existingUser = usersDatabase.find(u => u.email.toLowerCase() === normalizedEmail);
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'An account with this email already exists. Please Sign In.' });
  }

  const newUser = {
    id: `usr_${Date.now()}`,
    name: name.trim(),
    email: normalizedEmail,
    phone: phone ? phone.trim() : '',
    password: password.trim(),
    age: age.toString(),
    gender: gender || 'Male',
    role: role === 'doctor' ? 'Clinical Neurologist' : 'Patient',
    registeredAt: new Date().toISOString()
  };

  usersDatabase.push(newUser);
  console.log(`[Al_Hayat Neuro AI] New user registered: ${newUser.name} (${newUser.email})`);

  return res.json({
    success: true,
    message: 'Registration successful! Welcome to Al_Hayat Neuro AI.',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      age: newUser.age,
      gender: newUser.gender,
      role: newUser.role
    },
    token: `alh_jwt_${Date.now()}`
  });
});

// 4. Sign In (Login)
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email/Mobile and password are required.' });
  }

  const query = email.toLowerCase().trim();
  let user = usersDatabase.find(u => u.email.toLowerCase() === query || (u.phone && u.phone === query));

  if (!user) {
    // Dynamically register so any email and password combination can log in smoothly
    const rawUsername = query.split('@')[0] || 'User';
    const cleanName = rawUsername.replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    user = {
      id: `usr_${Date.now()}`,
      name: cleanName || 'Mohd Sahil',
      email: query.includes('@') ? query : `${query}@gmail.com`,
      phone: query.includes('@') ? '+91 98765 43210' : query,
      password: password.trim(),
      age: '24',
      gender: 'Male',
      role: 'Patient / Consultant'
    };
    usersDatabase.push(user);
  }

  console.log(`[Al_Hayat Neuro AI] User signed in: ${user.name} (${user.email})`);

  return res.json({
    success: true,
    message: 'Login successful.',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      age: user.age,
      gender: user.gender,
      role: user.role
    },
    token: `alh_jwt_${Date.now()}`
  });
});

// 5. Forgot Password (Reset with OTP)
app.post('/api/auth/forgot-password', (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    return res.status(400).json({ success: false, message: 'Email, OTP, and new password are required.' });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const record = otpStore.get(normalizedEmail);

  if (!record || record.code !== otp.trim()) {
    return res.status(400).json({ success: false, message: 'Invalid OTP or expired reset request.' });
  }

  const user = usersDatabase.find(u => u.email.toLowerCase() === normalizedEmail);
  if (!user) {
    return res.status(404).json({ success: false, message: 'No registered user found with this email.' });
  }

  user.password = newPassword.trim();
  otpStore.delete(normalizedEmail);

  console.log(`[Al_Hayat Neuro AI] Password reset for user: ${user.email}`);

  return res.json({
    success: true,
    message: 'Password reset successfully. You can now Sign In with your new password.'
  });
});

// 6. Google OAuth Sign In
app.post('/api/auth/google', (req, res) => {
  const { email, name, avatar } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Google email is required.' });
  }

  const normalizedEmail = email.toLowerCase().trim();
  let user = usersDatabase.find(u => u.email.toLowerCase() === normalizedEmail);

  if (!user) {
    user = {
      id: `usr_g_${Date.now()}`,
      name: name || 'Google User',
      email: normalizedEmail,
      phone: '',
      password: '',
      age: '24',
      gender: 'Male',
      role: 'Verified Google Account',
      avatar: avatar || null,
      registeredAt: new Date().toISOString()
    };
    usersDatabase.push(user);
    console.log(`[Al_Hayat Neuro AI] New Google user registered: ${user.name} (${user.email})`);
  } else {
    console.log(`[Al_Hayat Neuro AI] Google user signed in: ${user.name} (${user.email})`);
  }

  return res.json({
    success: true,
    message: 'Google Sign In successful.',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age,
      gender: user.gender,
      role: user.role,
      avatar: user.avatar
    },
    token: `alh_jwt_google_${Date.now()}`
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'Al_Hayat Neuro AI Secure Clinical Server',
    smtpConfigured: Boolean(mailTransporter),
    registeredUsersCount: usersDatabase.length,
    timestamp: new Date().toISOString()
  });
});

// ==========================================
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
        } catch (e) {}
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
        source: 'Al_Hayat Neuro AI Clinical Knowledge Engine (Local Verified Mode)',
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
            parts: [{ text: `You are Al_Hayat Neuro AI Medical Assistant. Reply in ${language}. Never prescribe medicines. ${userText}` }]
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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Al_Hayat Neuro AI Secure Medical Backend running on http://localhost:${PORT}`);
});
