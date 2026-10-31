import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BrainViewer from './components/Brain3D/BrainViewer';
import AnatomyInspector from './components/Panels/AnatomyInspector';
import AINeurologistChat from './components/Panels/AINeurologistChat';
import MigraineSpecialistModule from './components/Panels/MigraineSpecialistModule';
import MedicalReportExplainer from './components/Panels/MedicalReportExplainer';
import NeurologyLearningCenter from './components/Panels/NeurologyLearningCenter';
import EmergencyAlertSystem from './components/Panels/EmergencyAlertSystem';
import HelpModal from './components/HelpModal';
import AuthScreen from './components/Auth/AuthScreen';
import { LOBE_PALETTES } from './data/brainAnatomyData';
import { voiceAssistant } from './utils/voiceAssistant';
import {
  Brain,
  Layers,
  Sparkles,
  Activity,
  AlertTriangle,
  RotateCcw,
  Bot,
  Volume2,
  Maximize2,
  Minimize2,
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Stethoscope
} from 'lucide-react';
import { sound } from './utils/audio';

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('alhayat_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [activeTab, setActiveTab] = useState('3d_brain');
  const [selectedNode, setSelectedNode] = useState(null);
  const [highlightedNodes, setHighlightedNodes] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [helpOpen, setHelpOpen] = useState(false);
  const [cameraView, setCameraView] = useState('isometric');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [emergencyAlert, setEmergencyAlert] = useState(null);
  const [full3DMode, setFull3DMode] = useState(false);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('alhayat_user', JSON.stringify(user));
    } catch (e) {}

    // Pause slightly (1.4s) so UI and 3D brain load smoothly, then speak welcome!
    setTimeout(() => {
      voiceAssistant.speakWelcome(true);
    }, 1400);
  };

  const handleLogout = () => {
    sound.playClick();
    setCurrentUser(null);
    try {
      localStorage.removeItem('alhayat_user');
      sessionStorage.removeItem('alhayat_welcomed');
    } catch (e) {}
  };

  const handleClearFilters = () => {
    sound.playClick();
    setActiveFilter('all');
    setHighlightedNodes([]);
    setSelectedNode(null);
    setCameraView('isometric');
  };

  const handleDoctorSync = (nodes, targetCameraView) => {
    sound.playSelect();
    setHighlightedNodes(nodes || []);
    if (targetCameraView) {
      setCameraView(targetCameraView);
    }
  };

  const handleSelectDiseaseIn3D = (disease) => {
    sound.playSelect();
    setActiveTab('3d_brain');
    setHighlightedNodes(disease.target3DNodes || []);
    if (disease.target3DNodes?.some(n => n.includes('left'))) {
      setCameraView('leftSagittal');
    } else if (disease.target3DNodes?.some(n => n.includes('cerebell') || n.includes('occipital'))) {
      setCameraView('posterior');
    } else {
      setCameraView('isometric');
    }
  };

  const triggerDefaultEmergencyCheck = () => {
    sound.playAlert();
    setEmergencyAlert({
      type: 'STROKE_FAST',
      title: 'FAST STROKE CRITICAL CHECKLIST',
      urgency: 'TIME-CRITICAL EMERGENCY PROTOCOL',
      description: 'Agar mareez me Face droop, Arm weakness, ya Speech difficulty achanak aayi hai to turant 112 / 911 par call karein. Thrombolysis ka golden window 4.5 ghante ka hota hai.',
      instructions: [
        'DO NOT wait for any AI symptoms assessment.',
        'Call Emergency 112 (India) or 911 immediately.',
        'Keep patient calm with head elevated 30 degrees.',
        'Record the exact time symptoms started.'
      ],
      callNumber: '112',
      isCritical: true
    });
  };

  // If not logged in, display full-screen Login & Register Gateway
  if (!currentUser) {
    return <AuthScreen onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Clean Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenHelp={() => setHelpOpen(true)}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
        onTriggerEmergency={triggerDefaultEmergencyCheck}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* TAB 1: 3D HUMAN BRAIN & AI DOCTOR (SIMPLIFIED FLAGSHIP HERO) */}
        {activeTab === '3d_brain' && (
          <div className="space-y-4">
            {/* Lobe Filter Strip */}
            <div className="glass-panel px-4 py-3 rounded-2xl flex flex-wrap items-center justify-between gap-3 border-cyan-500/20">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Anatomical Lobes:
                </span>
              </div>

              {/* Lobe Filter Buttons */}
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveFilter('all');
                  }}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                    activeFilter === 'all'
                      ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.6)]'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700'
                  }`}
                >
                  All (65 Meshes)
                </button>

                {Object.values(LOBE_PALETTES).map((lobe) => (
                  <button
                    key={lobe.id}
                    onClick={() => {
                      sound.playClick();
                      setActiveFilter(lobe.id);
                    }}
                    className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 border ${
                      activeFilter === lobe.id
                        ? 'border-white font-bold text-white shadow-lg'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                    }`}
                    style={{
                      backgroundColor: activeFilter === lobe.id ? `${lobe.color}40` : undefined,
                      borderColor: activeFilter === lobe.id ? lobe.color : undefined
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: lobe.color }}
                    />
                    <span>{lobe.name.split(' ')[0]}</span>
                  </button>
                ))}

                {(activeFilter !== 'all' || selectedNode || highlightedNodes.length > 0) && (
                  <button
                    onClick={handleClearFilters}
                    className="p-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/50 text-red-400 text-xs transition-colors flex items-center gap-1"
                    title="Reset Lobe Filters & Highlights"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono">Reset</span>
                  </button>
                )}

                {/* Toggle Full 3D vs Split Doctor View */}
                <button
                  onClick={() => {
                    sound.playClick();
                    setFull3DMode(!full3DMode);
                  }}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1"
                  title="Toggle Full 3D View"
                >
                  {full3DMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  <span>{full3DMode ? 'Show Doctor' : 'Full 3D'}</span>
                </button>
              </div>
            </div>

            {/* Split Screen Stage: 3D Brain Viewer (Left) + AI Doctor Chat (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch min-h-[620px] lg:min-h-[720px]">
              {/* 3D Brain Canvas */}
              <div
                className={`transition-all duration-300 ${
                  full3DMode ? 'lg:col-span-12 h-full' : 'lg:col-span-6 h-full'
                }`}
              >
                <BrainViewer
                  selectedNode={selectedNode}
                  onSelectNode={(node) => setSelectedNode(node)}
                  highlightedNodes={highlightedNodes}
                  activeFilter={activeFilter}
                  cameraView={cameraView}
                />
              </div>

              {/* AI Doctor Chat (Or Selected Anatomy Inspector) */}
              {!full3DMode && (
                <div className="lg:col-span-6 h-full">
                  {selectedNode ? (
                    <AnatomyInspector
                      selectedNode={selectedNode}
                      onClose={() => setSelectedNode(null)}
                      onFocusRegion={() => {}}
                    />
                  ) : (
                    <AINeurologistChat
                      onSyncWithBrain={handleDoctorSync}
                      onSwitchTo3D={() => setFull3DMode(true)}
                      onTriggerEmergency={setEmergencyAlert}
                      currentUser={currentUser}
                      onLogout={handleLogout}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: NEUROLOGY DISEASE LIBRARY (13 CATEGORIES ENCYCLOPEDIA) */}
        {activeTab === 'learning_center' && (
          <NeurologyLearningCenter onSelectDiseaseIn3D={handleSelectDiseaseIn3D} />
        )}

        {/* TAB 3: MIGRAINE SPECIALIST & DIARY */}
        {activeTab === 'migraine_clinic' && (
          <MigraineSpecialistModule onSwitchTo3D={() => setActiveTab('3d_brain')} />
        )}

        {/* TAB 4: MEDICAL REPORT EXPLAINER */}
        {activeTab === 'report_explainer' && (
          <MedicalReportExplainer />
        )}
      </main>

      {/* Emergency Alert Modal */}
      <EmergencyAlertSystem
        alert={emergencyAlert}
        onDismiss={() => setEmergencyAlert(null)}
      />

      {/* Comprehensive Official Hospital Footer */}
      <footer className="glass-panel border-t border-cyan-500/20 bg-[#030612]/95 backdrop-blur-xl mt-auto pt-10 pb-6 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Col 1: Brand & Clinical Accreditations */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-white text-base tracking-tight font-sans">
                    Al_Hayat <span className="text-cyan-400">NeuroCare AI</span>
                  </h3>
                  <p className="text-[10px] font-mono text-cyan-300/80">Clinical 3D Diagnostic Hospital</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Real-time 3D neuroanatomical visualization engine, WHO ICD-11 symptom triage, and comprehensive digital neurologist consultation suite.
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-200">
                  ✓ NABH Accredited
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                  ✓ ISO 9001:2026
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/30 text-purple-300">
                  ✓ ICHD-3 Criteria
                </span>
              </div>
            </div>

            {/* Col 2: Clinical Specialties & OPD Wings */}
            <div className="space-y-3 font-sans">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-cyan-400" />
                <span>Clinical Specialties (विभाग)</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-500">›</span> Comprehensive Migraine & Cephalea Clinic
                </li>
                <li className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-500">›</span> Acute Stroke & Thrombolysis Rapid Response
                </li>
                <li className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-500">›</span> Vertigo & Vestibular Balance Rehabilitation
                </li>
                <li className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-500">›</span> Epilepsy & EEG Seizure Tele-Monitoring
                </li>
                <li className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-500">›</span> Parkinson's & Movement Disorders Lab
                </li>
                <li className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-500">›</span> Chronic Insomnia & Sleep Architecture Unit
                </li>
              </ul>
            </div>

            {/* Col 3: Emergency & Patient Helplines */}
            <div className="space-y-3 font-mono">
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                <span>Emergency & OPD Helplines</span>
              </h4>
              
              <div className="bg-red-950/40 border border-red-500/40 rounded-xl p-2.5 text-xs space-y-1">
                <div className="text-[10px] text-red-300 font-bold uppercase">24x7 Acute Neuro Emergency:</div>
                <div className="text-sm font-black text-white tracking-wider flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-red-400" />
                  <span>1800-200-NEURO (Toll Free)</span>
                </div>
                <div className="text-[10px] text-red-300">National Ambulance: 112 / 108</div>
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5">
                  <PhoneCall className="w-3 h-3 text-cyan-400" />
                  <span>OPD: +91 11-4920-8000 / +91 98765-43210</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-cyan-400" />
                  <span className="text-cyan-300">opd@alhayatneuro.ai</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <MapPin className="w-3 h-3 text-slate-500 flex-shrink-0" />
                  <span>Knowledge Park, OPD Block-A, New Delhi</span>
                </div>
              </div>
            </div>

            {/* Col 4: Quick Navigation & Clinical Tools */}
            <div className="space-y-3 font-mono">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Interactive Clinical Suite</span>
              </h4>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    sound.playSelect();
                    setActiveTab('3d_brain');
                  }}
                  className="w-full text-left px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-xs text-slate-200 transition-all flex items-center justify-between"
                >
                  <span>3D Human Brain Anatomy</span>
                  <span className="text-cyan-400">→</span>
                </button>

                <button
                  onClick={() => {
                    sound.playSelect();
                    setActiveTab('learning_center');
                  }}
                  className="w-full text-left px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-xs text-slate-200 transition-all flex items-center justify-between"
                >
                  <span>Disease Library (ICD-11)</span>
                  <span className="text-cyan-400">→</span>
                </button>

                <button
                  onClick={() => {
                    sound.playSelect();
                    setActiveTab('migraine_clinic');
                  }}
                  className="w-full text-left px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-xs text-slate-200 transition-all flex items-center justify-between"
                >
                  <span>Migraine Diary & Protocol</span>
                  <span className="text-cyan-400">→</span>
                </button>

                <button
                  onClick={() => {
                    sound.playSelect();
                    setHelpOpen(true);
                  }}
                  className="w-full text-left px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-xs text-slate-200 transition-all flex items-center justify-between"
                >
                  <span>Clinical Sources & Manual</span>
                  <span className="text-cyan-400">→</span>
                </button>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-slate-800/80 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
            <div>
              © 2026 Al_Hayat NeuroCare AI Hospital & Research Institute. All rights reserved.
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => voiceAssistant.speakWelcome(true)}
                className="hover:text-pink-400 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5 text-pink-400" />
                <span>Voice Welcome</span>
              </button>
              <span>•</span>
              <button
                onClick={() => setHelpOpen(true)}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Clinical Guidelines
              </button>
              <span>•</span>
              <span className="text-cyan-400">BodyParts3D Atlases Verified</span>
            </div>
          </div>

          {/* Medical Notice */}
          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[10.5px] text-slate-400 leading-relaxed font-sans">
            <strong className="text-cyan-400 font-mono uppercase mr-1">Medical Disclaimer:</strong>
            Al_Hayat NeuroCare AI provides digital neurological decision support and educational anatomical visualization based on published guidelines (ICHD-3 / ICD-11). It does not replace physical examination or emergency resuscitation. In acute cases of facial drooping, sudden speech loss, limb paralysis, or thunderclap headache, immediately call national emergency 112 / 108.
          </div>

        </div>
      </footer>

      {/* Clinical Help Modal */}
      <HelpModal isOpen={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  );
}
