import React, { useState } from 'react';
import {
  Brain,
  Bot,
  Flame,
  FileCheck,
  BookOpen,
  Volume2,
  VolumeX,
  Globe,
  HelpCircle,
  PhoneCall,
  Sparkles,
  User,
  LogOut,
  ChevronDown
} from 'lucide-react';
import { sound } from '../utils/audio';
import { voiceAssistant } from '../utils/voiceAssistant';
import { SUPPORTED_LANGUAGES } from '../utils/languageEngine';

export default function Navbar({
  activeTab,
  onSelectTab,
  onOpenHelp,
  selectedLanguage = 'en',
  onSelectLanguage,
  onTriggerEmergency,
  currentUser,
  onLogout
}) {
  const [muted, setMuted] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleMute = () => {
    const nextMute = !muted;
    setMuted(nextMute);
    sound.muted = nextMute;
    if (!nextMute) {
      sound.playClick();
    }
  };

  const currentLang = SUPPORTED_LANGUAGES.find(l => l.code === selectedLanguage) || SUPPORTED_LANGUAGES[0];

  // Clean navigation items with compact, professional labels
  const navItems = [
    { id: '3d_brain', label: '3D Brain & Doctor', icon: Brain, badge: 'Main' },
    { id: 'learning_center', label: 'Disease Library', icon: BookOpen },
    { id: 'migraine_clinic', label: 'Migraine Clinic', icon: Flame },
    { id: 'report_explainer', label: 'MRI / CT Explainer', icon: FileCheck }
  ];

  const handlePlayWelcomeVoice = () => {
    sound.playSelect();
    voiceAssistant.speakWelcome(true);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-cyan-500/20 bg-[#040711]/95 backdrop-blur-xl">
      {/* Red Flag Emergency Top Ribbon */}
      <div className="bg-red-950/70 border-b border-red-500/30 px-4 py-1 text-[11px] font-mono flex items-center justify-between text-red-200">
        <div className="flex items-center gap-2 truncate">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-ping flex-shrink-0" />
          <span className="truncate">EMERGENCY: Sudden face droop, arm weakness, or speech loss? Call 112 / 911 immediately.</span>
        </div>
        <button
          onClick={onTriggerEmergency}
          className="text-red-300 hover:text-white underline font-bold flex items-center gap-1 cursor-pointer flex-shrink-0 ml-2"
        >
          <span>FAST Stroke Checklist</span>
          <span>→</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand with Clean, Unclipped Dual-Hemisphere Brain Logo */}
        <div
          onClick={() => onSelectTab('3d_brain')}
          className="cursor-pointer flex items-center gap-2.5 flex-shrink-0 group select-none"
        >
          {/* High-Tech Glowing Dual-Hemisphere Brain Logo Icon */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0c1a3d] via-[#071129] to-[#040817] p-1 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] group-hover:border-cyan-400 transition-all flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 64 64" className="w-7 h-7 drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]">
              {/* Left Hemisphere (Biological Cerebral Cortex) */}
              <path
                d="M 30,10 C 22,10 14,16 14,24 C 14,28 16,31 18,34 C 15,37 14,42 16,46 C 18,50 23,54 30,54 Z"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 22,20 C 26,22 28,26 26,30 M 18,34 C 22,35 25,38 24,42 M 22,46 C 25,48 28,48 30,46"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.2"
                strokeLinecap="round"
              />

              {/* Right Hemisphere (Digital Neural Network AI Circuits) */}
              <path
                d="M 34,10 C 42,10 50,16 50,24 C 50,28 48,31 46,34 C 49,37 50,42 48,46 C 46,50 41,54 34,54 Z"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Neural Nodes & Circuit Lines */}
              <line x1="34" y1="20" x2="42" y2="20" stroke="#60a5fa" strokeWidth="2" />
              <line x1="42" y1="20" x2="44" y2="28" stroke="#60a5fa" strokeWidth="2" />
              <line x1="34" y1="32" x2="40" y2="32" stroke="#60a5fa" strokeWidth="2" />
              <line x1="34" y1="44" x2="44" y2="44" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="42" cy="20" r="2.2" fill="#38bdf8" />
              <circle cx="44" cy="28" r="1.8" fill="#93c5fd" />
              <circle cx="40" cy="32" r="2.2" fill="#06b6d4" />
              <circle cx="44" cy="44" r="2.2" fill="#60a5fa" />
              <circle cx="34" cy="10" r="1.8" fill="#38bdf8" />
              <circle cx="34" cy="54" r="1.8" fill="#3b82f6" />
            </svg>

            {/* Glowing Live AI Pulse Indicator */}
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 border-2 border-slate-900" />
            </span>
          </div>

          {/* Clean, Non-colliding Typography */}
          <div className="flex flex-col justify-center whitespace-nowrap">
            <div className="flex items-center gap-1.5 leading-tight">
              <span className="text-base sm:text-lg font-black tracking-tight text-white font-sans">
                Al_Hayat
              </span>
              <span className="text-base sm:text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 font-sans">
                NeuroCare AI
              </span>
            </div>
            <span className="text-[10px] font-mono text-cyan-300/90 flex items-center gap-1 font-semibold leading-tight mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>Hospital & 3D Anatomy</span>
            </span>
          </div>
        </div>

        {/* Navigation Bar (Hidden on small screens, flex on large) */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel p-1 rounded-xl bg-slate-950/80 border-slate-800 flex-shrink-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  onSelectTab(item.id);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/30 text-cyan-300 border border-cyan-500/40 font-bold shadow'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-900/50 text-cyan-200 border border-cyan-500/30">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Tools: Voice Welcome + Language + Audio + User Profile Dropdown */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Welcome Voice Trigger Button */}
          <button
            onClick={handlePlayWelcomeVoice}
            className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-pink-950/60 to-purple-950/60 border border-pink-500/40 hover:border-pink-400 text-pink-300 text-xs font-mono flex items-center gap-1.5 shadow transition-all cursor-pointer"
            title="Awaaz sunein: Aapka NeuroCare AI mein swagat hai"
          >
            <Volume2 className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span className="hidden sm:inline">Voice Welcome</span>
          </button>

          {/* Multilingual Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-2.5 py-1.5 rounded-xl glass-panel bg-slate-900 border-slate-700 hover:border-cyan-500/40 text-xs font-mono text-slate-200 flex items-center gap-1.5 transition-all cursor-pointer"
              title="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentLang.flag}</span>
              <span className="hidden sm:inline font-bold">{currentLang.name}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl glass-panel-glow bg-[#0a101f] border border-cyan-500/40 shadow-2xl py-2 z-50 animate-in zoom-in-95">
                <div className="px-3 py-1 text-[10px] font-mono uppercase text-slate-400 border-b border-slate-800">
                  Select Language / भाषा
                </div>
                <div className="max-h-60 overflow-y-auto scrollbar-thin py-1">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        sound.playClick();
                        onSelectLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors ${
                        selectedLanguage === lang.code ? 'text-cyan-400 font-bold bg-cyan-950/40' : 'text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">{lang.native}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Audio Mute */}
          <button
            onClick={toggleMute}
            className={`p-2 rounded-xl border text-xs transition-all cursor-pointer ${
              muted
                ? 'bg-slate-900 text-slate-500 border-slate-800'
                : 'bg-cyan-950/30 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
            }`}
            title={muted ? 'Unmute Audio FX' : 'Mute Medical Audio FX'}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* User Profile with Interactive Dropdown (Clicking Mohd Sahil opens Logout menu) */}
          {currentUser && (
            <div className="relative pl-1">
              <button
                onClick={() => {
                  sound.playClick();
                  setUserMenuOpen(!userMenuOpen);
                }}
                className="flex items-center gap-2 text-xs font-mono text-slate-200 bg-slate-900/90 hover:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700/80 hover:border-cyan-500/60 shadow-sm transition-all cursor-pointer"
                title="Click for Profile & Logout"
              >
                <div className="w-5 h-5 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                  {(currentUser.name || 'M')[0].toUpperCase()}
                </div>
                <span className="font-semibold text-white tracking-tight">{currentUser.name || 'Mohd Sahil'}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-cyan-400 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl glass-panel-glow bg-[#0a101f]/95 border border-cyan-500/40 shadow-2xl p-2 z-50 animate-in zoom-in-95 backdrop-blur-xl">
                  {/* User Profile Header */}
                  <div className="px-3 py-2 border-b border-slate-800/80">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{currentUser.name || 'Mohd Sahil'}</span>
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400 mt-0.5">
                      UHID: ALH-2026-9842
                    </div>
                    <div className="text-[9.5px] font-mono text-slate-400 mt-0.5">
                      {currentUser.email || 'mohd.sahil@alhayat.ai'}
                    </div>
                  </div>

                  {/* Logout Action */}
                  <div className="pt-1.5">
                    <button
                      onClick={() => {
                        sound.playSelect();
                        setUserMenuOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-mono font-bold text-red-400 hover:text-white hover:bg-red-600/90 border border-transparent hover:border-red-500 flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout (लॉगआउट)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Tab Scroller */}
      <div className="flex md:hidden items-center justify-between overflow-x-auto px-4 py-2 border-t border-slate-800 gap-1.5 scrollbar-none">
        <div className="flex items-center gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  onSelectTab(item.id);
                }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'text-slate-400 hover:bg-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
