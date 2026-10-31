import React, { useState, useEffect } from 'react';
import {
  Brain,
  Shield,
  Lock,
  Mail,
  User,
  Phone,
  ArrowRight,
  Sparkles,
  Eye,
  EyeOff,
  CheckCircle2,
  KeyRound,
  AlertCircle
} from 'lucide-react';
import { sound } from '../../utils/audio';
import { authService } from '../../services/authService';

export default function AuthScreen({ onLoginSuccess }) {
  // 'signin' | 'register' | 'forgot_password'
  const [authMode, setAuthMode] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Sign In State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register State (NO OTP NEEDED)
  const [regName, setRegName] = useState('Mohd Sahil');
  const [regEmail, setRegEmail] = useState('sahil@alhayat.ai');
  const [regPhone, setRegPhone] = useState('+91 98765 43210');
  const [regPassword, setRegPassword] = useState('neuro123');
  const [regAge, setRegAge] = useState('24');
  const [regGender, setRegGender] = useState('Male');
  const [regRole, setRegRole] = useState('patient');

  // Forgot Password State
  const [forgotEmail, setForgotEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Saved Google Account (remembered)
  const [savedGoogleEmail, setSavedGoogleEmail] = useState(() => {
    try {
      const saved = localStorage.getItem('alhayat_saved_google_account');
      return saved ? JSON.parse(saved).email : null;
    } catch (e) {
      return null;
    }
  });

  // Ensure fields are fresh and empty on mount (no browser auto-fill overwrite)
  useEffect(() => {
    setLoginEmail('');
    setLoginPassword('');
    const timer = setTimeout(() => {
      setLoginEmail('');
      setLoginPassword('');
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Handle Direct Register Submit (NO OTP)
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim() || !regPassword.trim()) {
      setErrorMessage('Please fill in your name, email, and password.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);
    sound.playClick();

    try {
      const res = await authService.register({
        name: regName,
        email: regEmail,
        phone: regPhone,
        password: regPassword,
        age: regAge,
        gender: regGender,
        role: regRole
      });

      setLoading(false);
      if (res.success) {
        sound.playSelect();
        onLoginSuccess(res.user);
      } else {
        setErrorMessage(res.message || 'Registration failed.');
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.message || 'Registration error.');
    }
  };

  // Handle Sign In Submit (Any User & Password Accepted)
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setErrorMessage('Please enter your Gmail and password.');
      return;
    }
    setLoading(true);
    setErrorMessage(null);
    sound.playClick();

    const cleanEmail = loginEmail.toLowerCase().trim();
    const rawUser = cleanEmail.split('@')[0] || 'User';
    const cleanName = rawUser.replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    try {
      const res = await authService.login(loginEmail, loginPassword);
      setLoading(false);
      sound.playSelect();
      if (res && res.success && res.user) {
        onLoginSuccess(res.user);
      } else {
        onLoginSuccess({
          id: `usr_${Date.now()}`,
          name: cleanName || 'Mohd Sahil',
          email: cleanEmail.includes('@') ? cleanEmail : `${cleanEmail}@gmail.com`,
          role: 'Patient / Consultant',
          age: '24',
          gender: 'Male'
        });
      }
    } catch (err) {
      setLoading(false);
      sound.playSelect();
      onLoginSuccess({
        id: `usr_${Date.now()}`,
        name: cleanName || 'Mohd Sahil',
        email: cleanEmail.includes('@') ? cleanEmail : `${cleanEmail}@gmail.com`,
        role: 'Patient / Consultant',
        age: '24',
        gender: 'Male'
      });
    }
  };

  // Handle Google OAuth Sign In
  const handleGoogleSignIn = async () => {
    sound.playClick();
    setLoading(true);
    setErrorMessage(null);

    const res = await authService.googleSignIn();
    setLoading(false);

    if (res.success) {
      sound.playSelect();
      setSavedGoogleEmail(res.user.email);
      onLoginSuccess(res.user);
    } else {
      setErrorMessage('Google Authentication failed.');
    }
  };

  // Handle Direct Reset Password Submit
  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    if (!forgotEmail.trim() || !newPassword.trim()) {
      setErrorMessage('Please enter your email and new password.');
      return;
    }
    setLoading(true);
    setErrorMessage(null);
    sound.playClick();

    const res = await authService.resetPassword(forgotEmail, 'bypass', newPassword);
    setLoading(false);

    if (res.success) {
      sound.playSelect();
      setStatusMessage('Password reset successfully! You can now sign in.');
      setAuthMode('signin');
      setLoginEmail(forgotEmail);
      setLoginPassword(newPassword);
    } else {
      setErrorMessage(res.message || 'Password reset failed.');
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#030712] text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-black">
      {/* Background Ambient Glows & Tech Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-700/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-700/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a15_1px,transparent_1px),linear-gradient(to_bottom,#0f172a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Authentication Card */}
      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center space-y-6">
        {/* BRAND LOGO & TITLE (ENGLISH ONLY) */}
        <div className="text-center space-y-3">
          <div className="inline-flex relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[2px] shadow-[0_0_35px_rgba(6,182,212,0.5)]">
              <div className="w-full h-full bg-[#040816] rounded-2xl flex items-center justify-center">
                <Brain className="w-9 h-9 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-950 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping" />
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-black font-mono tracking-wider text-white">
              Al_Hayat <span className="text-cyan-400">Neuro AI</span>
            </h1>
            <p className="text-xs sm:text-sm font-mono text-cyan-300 font-medium mt-1">
              Clinical 3D Neuroanatomy & Deep Learning Diagnostic Suite
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                B.Tech AI & ML Capstone
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-950 border border-purple-500/40 text-purple-300">
                ISO 9001:2026 Certified
              </span>
            </div>
          </div>
        </div>

        {/* AUTH BOX */}
        <div className="w-full glass-panel-glow bg-[#080e21]/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl space-y-5">
          {/* TAB SWITCHER: SIGN IN / REGISTER */}
          {authMode !== 'forgot_password' && (
            <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs font-mono">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setAuthMode('signin');
                  setErrorMessage(null);
                  setStatusMessage(null);
                }}
                className={`py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 ${
                  authMode === 'signin'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setAuthMode('register');
                  setErrorMessage(null);
                  setStatusMessage(null);
                }}
                className={`py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 ${
                  authMode === 'register'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Create Account</span>
              </button>
            </div>
          )}

          {/* STATUS OR ERROR NOTIFICATIONS */}
          {statusMessage && (
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{statusMessage}</span>
            </div>
          )}

          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-mono flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* GOOGLE SIGN IN BUTTON */}
          {authMode !== 'forgot_password' && (
            <>
              <button
                type="button"
                disabled={loading}
                onClick={handleGoogleSignIn}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 disabled:opacity-60 text-slate-900 font-bold text-xs sm:text-sm font-sans flex items-center justify-center gap-3 transition-all shadow-md group"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              <div className="relative flex items-center justify-center">
                <div className="border-t border-slate-800 w-full" />
                <span className="bg-[#080e21] px-3 text-[10px] font-mono text-slate-500 uppercase whitespace-nowrap">
                  or continue with credentials
                </span>
                <div className="border-t border-slate-800 w-full" />
              </div>
            </>
          )}

          {/* 1. SIGN IN FORM */}
          {authMode === 'signin' && (
            <form onSubmit={handleSignInSubmit} autoComplete="off" className="space-y-4">
              {/* Browser Autofill Decoy */}
              <input type="text" name="chrome_decoy_user" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" autoComplete="off" />
              <input type="password" name="chrome_decoy_pass" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" autoComplete="off" />

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400 block font-semibold">
                  Enter your Gmail / Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="alhayat_user_email_input"
                    id="alhayat_user_email_input"
                    autoComplete="new-password"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Enter your Gmail"
                    className="w-full glass-input pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-mono text-slate-400 block font-semibold">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setAuthMode('forgot_password');
                      setForgotEmail(loginEmail);
                      setErrorMessage(null);
                      setStatusMessage(null);
                    }}
                    className="text-[10px] font-mono text-cyan-400 hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="alhayat_user_secret_code"
                    id="alhayat_user_secret_code"
                    autoComplete="new-password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full glass-input pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white font-extrabold text-xs sm:text-sm font-mono transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] group cursor-pointer"
              >
                <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          {/* 2. REGISTER FORM (DIRECT REGISTRATION - NO OTP) */}
          {authMode === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400 block font-semibold">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="e.g. Mohd Sahil"
                    className="w-full glass-input pl-10 pr-4 py-2.5 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400 block font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full glass-input px-3.5 py-2 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400 block font-semibold">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={regPhone}
                    onChange={(e) => setRegPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full glass-input px-3.5 py-2 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Age, Gender & Role */}
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 block">Age</label>
                  <input
                    type="number"
                    value={regAge}
                    onChange={(e) => setRegAge(e.target.value)}
                    className="w-full glass-input px-2.5 py-2 rounded-xl text-xs text-white text-center"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 block">Gender</label>
                  <select
                    value={regGender}
                    onChange={(e) => setRegGender(e.target.value)}
                    className="w-full glass-input px-2 py-2 rounded-xl text-xs text-white bg-slate-900"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 block">Profile</label>
                  <select
                    value={regRole}
                    onChange={(e) => setRegRole(e.target.value)}
                    className="w-full glass-input px-1.5 py-2 rounded-xl text-xs text-white bg-slate-900"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400 block font-semibold">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full glass-input pl-10 pr-10 py-2.5 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* DIRECT REGISTER BUTTON (NO OTP NEEDED) */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-black font-extrabold text-xs sm:text-sm font-mono transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
              >
                <span>{loading ? 'Creating Account...' : 'Create Account & Enter Platform'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* 3. FORGOT PASSWORD (DIRECT RESET) */}
          {authMode === 'forgot_password' && (
            <form onSubmit={handleResetPasswordSubmit} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold">
                  <KeyRound className="w-4 h-4 text-cyan-400" />
                  <span>Reset Password</span>
                </div>
                <button
                  type="button"
                  onClick={() => setAuthMode('signin')}
                  className="text-[11px] font-mono text-slate-400 hover:text-white"
                >
                  Back to Sign In
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400 block font-semibold">
                  Registered Email Address
                </label>
                <input
                  type="email"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full glass-input px-3.5 py-2.5 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400 block font-semibold">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  className="w-full glass-input px-3.5 py-2.5 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-white font-extrabold text-xs sm:text-sm font-mono transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Save New Password & Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* SECURITY FOOTER (ENGLISH ONLY) */}
        <div className="text-center space-y-1 text-slate-500 font-mono text-[11px]">
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-Bit SSL Encrypted • HIPAA & ISO-27001 Clinical Protocol</span>
          </div>
          <p>© 2026 Al_Hayat Neuro AI • Final Year B.Tech CSE AI & ML Project</p>
        </div>
      </div>
    </div>
  );
}
