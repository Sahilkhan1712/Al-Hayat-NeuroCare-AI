import React, { useState, useEffect } from 'react';
import {
  Flame,
  Calendar,
  Clock,
  Sliders,
  AlertCircle,
  BarChart2,
  Download,
  PlusCircle,
  Trash2,
  Sparkles,
  Info,
  Droplets,
  Moon,
  Coffee,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { sound } from '../../utils/audio';

const MIGRAINE_SUBTYPES = [
  {
    name: 'Migraine without Aura (Common Migraine)',
    freq: '70-75% of patients',
    desc: 'Recurrent throbbing unilateral or bilateral pain lasting 4-72 hours, aggravated by physical activity, accompanied by nausea, vomiting, photophobia, and phonophobia.'
  },
  {
    name: 'Migraine with Aura (Classic Migraine)',
    freq: '25-30% of patients',
    desc: 'Headache preceded or accompanied by reversible neurological symptoms, most commonly visual disturbances (scintillating scotomas, zigzag lines, blind spots) lasting 5-60 minutes.'
  },
  {
    name: 'Chronic Migraine',
    freq: '2-3% of general population',
    desc: 'Headaches occurring on 15 or more days per month for more than 3 months, with at least 8 of those days meeting criteria for a migraine attack.'
  },
  {
    name: 'Vestibular Migraine',
    freq: 'Leading cause of recurrent vertigo',
    desc: 'Episodes of severe dizziness, vertigo (room spinning), unsteadiness, and motion sickness, which may or may not occur concurrently with head pain.'
  },
  {
    name: 'Menstrual Migraine',
    freq: 'Affects up to 60% of women with migraine',
    desc: 'Attacks that regularly occur in close temporal relationship with the onset of menstruation (Day -2 to +3), triggered by the rapid drop in circulating estrogen levels.'
  },
  {
    name: 'Hemiplegic Migraine',
    freq: 'Rare genetic variant',
    desc: 'Migraine with aura that includes temporary motor weakness or paralysis on one side of the body (motor aura), which can mimic an acute stroke.'
  }
];

const COMMON_TRIGGERS = [
  'Stress / Anxiety',
  'Lack of Sleep / Irregular Sleep',
  'Skipped Meals / Fasting',
  'Dehydration',
  'Bright / Flickering Lights',
  'Aged Cheeses / Tyramine',
  'Caffeine (Excess or Withdrawal)',
  'Weather / Barometric Changes',
  'Alcohol / Red Wine',
  'Hormonal Changes / Menstruation'
];

export default function MigraineSpecialistModule({ onSwitchTo3D }) {
  const [activeTab, setActiveTab] = useState('diary'); // 'diary', 'subtypes', 'triggers', 'education'
  
  // Headache Diary State
  const [logs, setLogs] = useState(() => {
    const saved = localStorage.getItem('neurocare_headache_logs');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: 1,
        date: '2026-10-28',
        intensity: 8,
        durationHours: 6,
        location: 'Left Temple & Eye',
        aura: true,
        triggers: ['Lack of Sleep', 'Stress'],
        medicinesTaken: 'Prescribed Triptan (1 dose)',
        notes: 'Flickering lights in left eye before pain started.'
      },
      {
        id: 2,
        date: '2026-10-24',
        intensity: 5,
        durationHours: 3,
        location: 'Right Forehead',
        aura: false,
        triggers: ['Skipped Meals', 'Dehydration'],
        medicinesTaken: 'OTC Analgesic',
        notes: 'Work deadline, skipped lunch.'
      }
    ];
  });

  // New Log Form State
  const [formDate, setFormDate] = useState(new Date().toISOString().split('T')[0]);
  const [formIntensity, setFormIntensity] = useState(6);
  const [formDuration, setFormDuration] = useState(4);
  const [formLocation, setFormLocation] = useState('Left Temple');
  const [formAura, setFormAura] = useState(false);
  const [formTriggers, setFormTriggers] = useState(['Stress / Anxiety']);
  const [formMeds, setFormMeds] = useState('');
  const [formNotes, setFormNotes] = useState('');

  useEffect(() => {
    localStorage.setItem('neurocare_headache_logs', JSON.stringify(logs));
  }, [logs]);

  const handleAddLog = (e) => {
    e.preventDefault();
    sound.playSelect();

    const newEntry = {
      id: Date.now(),
      date: formDate,
      intensity: Number(formIntensity),
      durationHours: Number(formDuration),
      location: formLocation,
      aura: formAura,
      triggers: formTriggers,
      medicinesTaken: formMeds || 'None',
      notes: formNotes
    };

    setLogs([newEntry, ...logs]);
    setFormNotes('');
    setFormMeds('');
  };

  const handleDeleteLog = (id) => {
    sound.playClick();
    setLogs(logs.filter(l => l.id !== id));
  };

  const toggleTrigger = (trig) => {
    sound.playClick();
    setFormTriggers(prev =>
      prev.includes(trig) ? prev.filter(t => t !== trig) : [...prev, trig]
    );
  };

  // Medication Overuse Headache (MOH) warning calculator
  const monthlyLogsCount = logs.length;
  const isMOHRisk = monthlyLogsCount >= 10;

  // Average intensity
  const avgIntensity = logs.length > 0
    ? (logs.reduce((acc, l) => acc + l.intensity, 0) / logs.length).toFixed(1)
    : 0;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 border-pink-500/30">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-pink-300 uppercase">
              MIGRAINE SPECIALIST & HEADACHE DISORDERS CLINIC
            </span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Comprehensive Migraine Management & Tracker
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Evidence-based educational tools, International Headache Society (IHS) classification, personalized trigger identification, and exportable consultation diary.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('diary');
            }}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
              activeTab === 'diary'
                ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Headache Diary ({logs.length})
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('subtypes');
            }}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
              activeTab === 'subtypes'
                ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Migraine Types
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('education');
            }}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
              activeTab === 'education'
                ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Aura & Science
          </button>
        </div>
      </div>

      {/* Medication Overuse Headache Warning Banner */}
      {isMOHRisk && (
        <div className="bg-amber-950/40 border border-amber-500/50 p-4 rounded-2xl flex items-start gap-3 text-amber-200 text-xs animate-pulse">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300 font-bold block text-sm">
              ⚠️ MEDICATION-OVERUSE HEADACHE (MOH) CAUTION:
            </strong>
            <span>
              Aapne is mahine 10 se zyaada headache episodes ya painkillers log kiye hain. Jab painkillers (NSAIDs, Triptans) mahine me 10-15 din se zyaada liye jaate hain, to wo khud naye rebound headaches trigger karne lagte hain. Kripya apne neurologist se daily preventive medicines ke baare me consult karein.
            </span>
          </div>
        </div>
      )}

      {/* TAB 1: HEADACHE DIARY & LOGGING */}
      {activeTab === 'diary' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Log New Attack Form */}
          <div className="lg:col-span-5 glass-panel p-5 rounded-2xl border-slate-700/80 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Log Headache Episode</span>
              <PlusCircle className="w-4 h-4 text-pink-400" />
            </h4>

            <form onSubmit={handleAddLog} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Date of Episode:</label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full glass-input px-3 py-2 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Duration (Hours):</label>
                  <input
                    type="number"
                    min="0.5"
                    max="72"
                    step="0.5"
                    value={formDuration}
                    onChange={(e) => setFormDuration(e.target.value)}
                    className="w-full glass-input px-3 py-2 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              {/* Intensity Slider */}
              <div>
                <div className="flex justify-between items-center text-slate-300 mb-1">
                  <span>Pain Severity (Visual Analog Scale 1-10):</span>
                  <span className={`font-mono font-bold px-2 py-0.5 rounded ${
                    formIntensity >= 7 ? 'bg-red-500/20 text-red-400' : formIntensity >= 4 ? 'bg-amber-500/20 text-amber-400' : 'bg-green-500/20 text-green-400'
                  }`}>
                    {formIntensity} / 10
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formIntensity}
                  onChange={(e) => setFormIntensity(e.target.value)}
                  className="w-full accent-pink-500"
                />
              </div>

              {/* Location & Aura Checkbox */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Pain Location:</label>
                  <select
                    value={formLocation}
                    onChange={(e) => setFormLocation(e.target.value)}
                    className="w-full glass-input px-3 py-2 rounded-xl text-xs text-white bg-slate-900"
                  >
                    <option value="Left Temple">Left Temple / One-sided</option>
                    <option value="Right Temple">Right Temple / One-sided</option>
                    <option value="Behind Eye">Behind One Eye</option>
                    <option value="Bilateral Forehead">Both Sides Forehead</option>
                    <option value="Back of Head / Neck">Back of Head / Occipital</option>
                  </select>
                </div>

                <div className="flex items-center pt-5">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-200">
                    <input
                      type="checkbox"
                      checked={formAura}
                      onChange={(e) => setFormAura(e.target.checked)}
                      className="accent-pink-500 w-4 h-4 rounded"
                    />
                    <span>Visual / Sensory Aura present?</span>
                  </label>
                </div>
              </div>

              {/* Suspected Triggers Chips */}
              <div>
                <label className="text-slate-400 block mb-1.5">Identified Triggers:</label>
                <div className="flex flex-wrap gap-1.5">
                  {COMMON_TRIGGERS.map((trig) => {
                    const isSelected = formTriggers.includes(trig);
                    return (
                      <button
                        type="button"
                        key={trig}
                        onClick={() => toggleTrigger(trig)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all border ${
                          isSelected
                            ? 'bg-pink-500/20 text-pink-300 border-pink-500/40 font-bold'
                            : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {trig}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Medicines Taken (if any):</label>
                <input
                  type="text"
                  placeholder="e.g. Sumatriptan 50mg, Naproxen, Paracetamol..."
                  value={formMeds}
                  onChange={(e) => setFormMeds(e.target.value)}
                  className="w-full glass-input px-3 py-2 rounded-xl text-xs text-white placeholder-slate-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 text-white font-bold rounded-xl text-xs shadow-lg transition-all"
              >
                Save Attack to Diary
              </button>
            </form>
          </div>

          {/* Right Column: Diary Logs & Pattern Statistics */}
          <div className="lg:col-span-7 space-y-4">
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="glass-panel p-3.5 rounded-xl border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Recorded Attacks</span>
                <div className="text-xl font-bold text-white mt-0.5">{logs.length}</div>
              </div>
              <div className="glass-panel p-3.5 rounded-xl border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Avg Pain Intensity</span>
                <div className="text-xl font-bold text-pink-400 mt-0.5">{avgIntensity} / 10</div>
              </div>
              <div className="glass-panel p-3.5 rounded-xl border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Aura Incidence</span>
                <div className="text-xl font-bold text-cyan-400 mt-0.5">
                  {logs.length > 0 ? Math.round((logs.filter(l => l.aura).length / logs.length) * 100) : 0}%
                </div>
              </div>
            </div>

            {/* List of Entries */}
            <div className="glass-panel p-4 rounded-2xl border-slate-700/80 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-pink-400" />
                  <span>Headache Attack History</span>
                </h4>

                <button
                  onClick={() => {
                    sound.playClick();
                    window.print();
                  }}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono rounded-lg transition-all flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5 text-pink-400" />
                  <span>Export History</span>
                </button>
              </div>

              {logs.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-500">
                  No headache episodes logged yet. Record an episode using the form on the left.
                </div>
              ) : (
                <div className="space-y-2.5 max-h-[460px] overflow-y-auto scrollbar-thin pr-1">
                  {logs.map((log) => (
                    <div
                      key={log.id}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-2 text-xs"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-white font-bold text-sm">{log.date}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                            log.intensity >= 7 ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'
                          }`}>
                            Severity: {log.intensity}/10
                          </span>
                          {log.aura && (
                            <span className="px-2 py-0.5 rounded bg-cyan-900/40 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                              + Aura
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => handleDeleteLog(log.id)}
                          className="text-slate-500 hover:text-red-400 transition-colors p-1"
                          title="Delete entry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 font-mono">
                        <div>Duration: <span className="text-slate-100">{log.durationHours} hours</span></div>
                        <div>Location: <span className="text-slate-100">{log.location}</span></div>
                      </div>

                      {log.triggers && log.triggers.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {log.triggers.map((t, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-slate-800 text-slate-300 text-[9px] font-mono rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      {log.medicinesTaken && (
                        <div className="text-[11px] text-pink-300 font-mono pt-1 border-t border-slate-800/60">
                          Meds: {log.medicinesTaken}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MIGRAINE SUBTYPES */}
      {activeTab === 'subtypes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MIGRAINE_SUBTYPES.map((sub, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border-slate-800 hover:border-pink-500/40 transition-all space-y-2.5"
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-950/60 border border-pink-500/30 text-pink-300">
                  {sub.freq}
                </span>
              </div>
              <h4 className="font-bold text-sm text-white">{sub.name}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{sub.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: AURA & CORTICAL SPREADING DEPRESSION EDUCATION */}
      {activeTab === 'education' && (
        <div className="glass-panel p-6 rounded-2xl border-slate-700/80 space-y-5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <h3 className="text-lg font-bold text-white">
              The Science of Migraine Aura: Cortical Spreading Depression (CSD)
            </h3>
          </div>

          <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-sans">
            <p>
              Aura is not an eye problem — it is an electrical event inside the brain. In approximately 25-30% of migraineurs, a wave of intense electrical depolarization followed by sustained neuronal suppression moves slowly across the <strong>Occipital Cortex (visual processing center)</strong> at a speed of 2 to 5 millimeters per minute.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                <strong className="text-white block">1. Visual Aura (Most Common)</strong>
                <p className="text-slate-400 text-[11px]">
                  Scintillating scotomas, fortification spectra (jagged geometric borders like medieval fortresses), shimmering blind spots, or tunnel vision.
                </p>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                <strong className="text-white block">2. Sensory Aura</strong>
                <p className="text-slate-400 text-[11px]">
                  Pins-and-needles sensation (paresthesia) beginning in the fingertips, slowly marching up the arm to the face and tongue.
                </p>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                <strong className="text-white block">3. Language / Dysphasic Aura</strong>
                <p className="text-slate-400 text-[11px]">
                  Transient difficulty finding words, slurred speech, or reading impairment that resolves as the headache phase starts.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
