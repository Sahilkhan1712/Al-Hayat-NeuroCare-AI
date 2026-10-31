import React, { useState } from 'react';
import {
  User,
  Calendar,
  Bookmark,
  FileText,
  Clock,
  Download,
  Trash2,
  ShieldCheck,
  Heart,
  Activity,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
  FileCheck
} from 'lucide-react';
import { sound } from '../../utils/audio';

export default function PatientDashboard({ onSwitchTab }) {
  // Saved data from local storage
  const [headacheLogs] = useState(() => {
    const s = localStorage.getItem('neurocare_headache_logs');
    return s ? JSON.parse(s) : [];
  });

  const [bookmarkedIds] = useState(() => {
    const s = localStorage.getItem('neurocare_bookmarks');
    return s ? JSON.parse(s) : ['migraine-aura', 'parkinsons-disease'];
  });

  // Doctor Consultation Form State
  const [patientName, setPatientName] = useState('Patient Self-Report');
  const [chiefComplaint, setChiefComplaint] = useState('Recurrent unilateral throbbing headache with light sensitivity');
  const [duration, setDuration] = useState('Last 3 weeks, approx 2 episodes per week');
  const [medsList, setMedsList] = useState('OTC Paracetamol (occasional relief)');
  const [knownConditions, setKnownConditions] = useState('Mild hypertension (diet controlled)');
  const [userQuestions, setUserQuestions] = useState([
    'Could these headaches be an atypical migraine variant?',
    'Should I undergo a contrast-enhanced Brain MRI to rule out secondary causes?',
    'What daily preventive lifestyle steps can help reduce the frequency?'
  ]);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [showExportModal, setShowExportModal] = useState(false);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;
    sound.playClick();
    setUserQuestions([...userQuestions, newQuestionText.trim()]);
    setNewQuestionText('');
  };

  const handleClearAllData = () => {
    if (window.confirm('Are you sure you want to delete all stored health logs, bookmarks, and consultation notes from this device?')) {
      sound.playAlert();
      localStorage.removeItem('neurocare_headache_logs');
      localStorage.removeItem('neurocare_bookmarks');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 border-cyan-500/30">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
              PATIENT NEURO-HEALTH DASHBOARD & DOCTOR PREPARATION
            </span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Personal Health Records & Clinical Appointment Prep
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Review your tracked headache diary, saved medical profiles, and generate an official, structured consultation brief for your next neurologist visit.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowExportModal(true)}
            className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-white font-bold rounded-xl text-xs shadow-lg transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Generate Doctor Consultation PDF</span>
          </button>
        </div>
      </div>

      {/* Grid: Overview Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-4 rounded-2xl border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Tracked Headache Episodes</span>
          <div className="text-2xl font-black text-white">{headacheLogs.length}</div>
          <span className="text-[11px] text-pink-400 block">Active Headache Diary</span>
        </div>

        <div className="glass-panel p-4 rounded-2xl border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Bookmarked Disease Guides</span>
          <div className="text-2xl font-black text-cyan-400">{bookmarkedIds.length}</div>
          <span className="text-[11px] text-cyan-300 block">Saved in Library</span>
        </div>

        <div className="glass-panel p-4 rounded-2xl border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Emergency Protocol</span>
          <div className="text-lg font-bold text-red-400 mt-1 flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4" />
            <span>Dial 112 / 108</span>
          </div>
          <span className="text-[10px] text-slate-400 block">Emergency services ready</span>
        </div>

        <div className="glass-panel p-4 rounded-2xl border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Privacy & Data Control</span>
          <button
            onClick={handleClearAllData}
            className="text-xs text-red-400 hover:text-red-300 font-mono flex items-center gap-1 mt-1 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear My Health Data</span>
          </button>
          <span className="text-[10px] text-slate-500 block">Zero unconsented tracking</span>
        </div>
      </div>

      {/* Structured Neurologist Consultation Brief Builder */}
      <div className="glass-panel p-6 rounded-2xl border-slate-700/80 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="font-bold text-white text-base">
                Neurologist Consultation Preparation Brief
              </h3>
              <p className="text-xs text-slate-400">
                Doctors have limited appointment time. Presenting a structured summary ensures nothing is overlooked.
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
            Exportable Format
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="text-slate-400 block mb-1">Chief Complaint & Primary Symptoms:</label>
            <textarea
              rows={3}
              value={chiefComplaint}
              onChange={(e) => setChiefComplaint(e.target.value)}
              className="w-full glass-input p-3 rounded-xl text-xs text-white"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">Onset, Duration & Frequency of Episodes:</label>
            <textarea
              rows={3}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full glass-input p-3 rounded-xl text-xs text-white"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">Current Medicines / Supplements Taken:</label>
            <input
              type="text"
              value={medsList}
              onChange={(e) => setMedsList(e.target.value)}
              className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">Past Medical History (BP, Diabetes, Migraine):</label>
            <input
              type="text"
              value={knownConditions}
              onChange={(e) => setKnownConditions(e.target.value)}
              className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white"
            />
          </div>
        </div>

        {/* Questions for Doctor */}
        <div className="pt-2 border-t border-slate-800 space-y-2.5">
          <label className="text-slate-300 font-bold text-xs block">
            Questions Prepared to Ask Your Neurologist:
          </label>
          <div className="space-y-1.5">
            {userQuestions.map((q, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200 flex items-center justify-between"
              >
                <span>{q}</span>
                <button
                  onClick={() => setUserQuestions(userQuestions.filter((_, i) => i !== idx))}
                  className="text-slate-500 hover:text-red-400 p-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <form onSubmit={handleAddQuestion} className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
              placeholder="Add another question to ask your doctor..."
              className="flex-1 glass-input px-3 py-2 rounded-xl text-xs text-white placeholder-slate-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl"
            >
              Add Question
            </button>
          </form>
        </div>
      </div>

      {/* Export / Print Preview Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel-glow bg-[#080d1a] max-w-2xl w-full p-6 sm:p-8 rounded-3xl border-cyan-500/40 shadow-2xl space-y-5">
            <div className="flex items-start justify-between border-b border-slate-700 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                  NEUROCARE AI • PATIENT PRE-CONSULTATION SUMMARY
                </span>
                <h3 className="text-xl font-black text-white mt-0.5">
                  Neurologist Appointment Brief
                </h3>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="text-slate-400 hover:text-white font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 font-sans">
              <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-red-200 text-[11px]">
                <strong>NOTICE TO CLINICIAN:</strong> This document contains patient self-reported symptom history and questions assembled using the NeuroCare AI educational assistant. It is NOT a clinical diagnosis.
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div><strong className="text-white">Chief Complaint: </strong>{chiefComplaint}</div>
                <div><strong className="text-white">Timeline & Frequency: </strong>{duration}</div>
                <div><strong className="text-white">Current Medicines: </strong>{medsList}</div>
                <div><strong className="text-white">Past Medical History: </strong>{knownConditions}</div>
              </div>

              <div>
                <strong className="text-cyan-400 block mb-1">Questions Prepared by Patient:</strong>
                <ul className="list-disc list-inside space-y-1 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  {userQuestions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500">
                Exported from NeuroCare AI Patient Portal
              </span>
              <button
                onClick={() => {
                  sound.playClick();
                  window.print();
                }}
                className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Print or Save as PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
