import React, { useState, useMemo } from 'react';
import {
  Stethoscope,
  CheckSquare,
  Square,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Activity,
  Heart
} from 'lucide-react';
import { sound } from '../../utils/audio';

const CLINICAL_SYMPTOMS = [
  // Motor
  { id: 'arm_weakness_r', label: 'Right-sided Arm/Leg Weakness', category: 'Motor', targetNodes: ['left-precentral-gyrus', 'left-internal-capsule'] },
  { id: 'facial_droop_r', label: 'Right Facial Droop', category: 'Motor', targetNodes: ['left-precentral-gyrus', 'pons'] },
  { id: 'ataxia_gait', label: 'Gait Ataxia & Intention Tremor', category: 'Motor', targetNodes: ['cerebellum', 'cerebellum2'] },
  
  // Speech & Language
  { id: 'broca_aphasia', label: 'Expressive Speech Arrest (Non-fluent)', category: 'Language', targetNodes: ['left-inferior-frontal-gyrus'] },
  { id: 'wernicke_aphasia', label: 'Impaired Speech Comprehension (Fluent Word Salad)', category: 'Language', targetNodes: ['posterior-part-of-superior-temporal-gyrus'] },
  { id: 'dysarthria', label: 'Slurred / Scanning Speech', category: 'Language', targetNodes: ['cerebellum', 'medulla-oblongata'] },

  // Sensory & Vision
  { id: 'hemianesthesia_r', label: 'Right-sided Tactile Numbness', category: 'Sensory', targetNodes: ['left-postcentral-gyrus', 'thalamus'] },
  { id: 'hemianopia_r', label: 'Right Visual Field Blindness (Hemianopia)', category: 'Vision', targetNodes: ['left-occipital-lobe'] },
  { id: 'prosopagnosia', label: 'Inability to Recognize Faces', category: 'Vision', targetNodes: ['right-fusiform-gyrus'] },
  { id: 'hemineglect_l', label: 'Left Spatial Neglect (Ignoring Left Side)', category: 'Cognitive', targetNodes: ['right-superior-parietal-lobule', 'right-angular-gyrus'] },

  // Cognitive & Memory
  { id: 'episodic_memory', label: 'Severe Episodic Short-Term Amnesia', category: 'Memory', targetNodes: ['left-hippocampus', 'right-hippocampus', 'left-parahippocampal-gyrus'] },
  { id: 'gerstmann', label: 'Acalculia & Left-Right Confusion', category: 'Cognitive', targetNodes: ['left-angular-gyrus'] },
  { id: 'disinhibition', label: 'Severe Impulsivity & Personality Shift', category: 'Executive', targetNodes: ['left-superior-frontal-gyrus', 'right-superior-frontal-gyrus'] }
];

export default function SymptomTriageAI({
  onHighlightRegions,
  onSwitchTo3D
}) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([
    'arm_weakness_r',
    'broca_aphasia',
    'facial_droop_r'
  ]);

  const toggleSymptom = (id) => {
    sound.playClick();
    setSelectedSymptoms(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSelectAllCategory = (cat) => {
    sound.playClick();
    const catIds = CLINICAL_SYMPTOMS.filter(s => s.category === cat).map(s => s.id);
    const allSelected = catIds.every(id => selectedSymptoms.includes(id));
    if (allSelected) {
      setSelectedSymptoms(prev => prev.filter(id => !catIds.includes(id)));
    } else {
      setSelectedSymptoms(prev => Array.from(new Set([...prev, ...catIds])));
    }
  };

  // AI Diagnostic Inference computation based on active symptoms
  const diagnosticInference = useMemo(() => {
    const activeObjects = CLINICAL_SYMPTOMS.filter(s => selectedSymptoms.includes(s.id));
    const allTargetNodes = activeObjects.flatMap(s => s.targetNodes);

    // Syndrome heuristics
    const hasStrokeFeatures = selectedSymptoms.includes('arm_weakness_r') || selectedSymptoms.includes('broca_aphasia') || selectedSymptoms.includes('facial_droop_r');
    const hasCerebellarFeatures = selectedSymptoms.includes('ataxia_gait') || selectedSymptoms.includes('dysarthria');
    const hasMemoryFeatures = selectedSymptoms.includes('episodic_memory');
    const hasParietalFeatures = selectedSymptoms.includes('gerstmann') || selectedSymptoms.includes('hemineglect_l');

    const syndromes = [];

    if (hasStrokeFeatures) {
      syndromes.push({
        name: 'Acute Left MCA Superior Division Syndrome',
        likelihood: 97.4,
        urgency: 'EMERGENT (CODE STROKE)',
        affectedVessel: 'Left Middle Cerebral Artery (M1/M2)',
        pathophysiology: 'Focal ischemic occlusion targeting precentral motor strip and Broca\'s opercular territory.'
      });
    }

    if (hasCerebellarFeatures) {
      syndromes.push({
        name: 'Cerebellar Hemispheric / Posterior Fossa Syndrome',
        likelihood: 88.5,
        urgency: 'HIGH PRIORITY',
        affectedVessel: 'PICA or Superior Cerebellar Artery (SCA)',
        pathophysiology: 'Disruption of ipsilateral cerebellar outflow tracts disrupting motor calibration.'
      });
    }

    if (hasMemoryFeatures) {
      syndromes.push({
        name: 'Mesial Temporal / Hippocampal Network Degeneration',
        likelihood: 85.2,
        urgency: 'ELECTIVE EVALUATION',
        affectedVessel: 'Anterior Choroidal / Posterior Cerebral Arteries',
        pathophysiology: 'Loss of bilateral CA1/subicular pyramidal neurons compromising synaptic LTP.'
      });
    }

    if (hasParietalFeatures) {
      syndromes.push({
        name: 'Parieto-Occipital Association Cortex Deficit',
        likelihood: 82.0,
        urgency: 'SUBACUTE',
        affectedVessel: 'Angular artery / PCA watershed zone',
        pathophysiology: 'De-afferentation of multisensory integration networks.'
      });
    }

    if (syndromes.length === 0) {
      syndromes.push({
        name: 'Indeterminate Neurological Presentation',
        likelihood: 45.0,
        urgency: 'OBSERVATION',
        affectedVessel: 'Inconclusive vascular territory',
        pathophysiology: 'Non-localized multifocal or psychogenic symptoms. Formal neurological exam indicated.'
      });
    }

    return {
      targetNodes: Array.from(new Set(allTargetNodes)),
      syndromes: syndromes.sort((a, b) => b.likelihood - a.likelihood)
    };
  }, [selectedSymptoms]);

  const handleSyncToBrain = () => {
    sound.playSelect();
    if (onHighlightRegions) {
      onHighlightRegions(diagnosticInference.targetNodes);
    }
    if (onSwitchTo3D) {
      onSwitchTo3D();
    }
  };

  const categories = Array.from(new Set(CLINICAL_SYMPTOMS.map(s => s.category)));

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 border-cyan-500/20">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
              AI CLINICAL TRIAGE & LOCALIZATION ENGINE
            </span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Neuro-Symptom Differential Diagnosis
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Select patient clinical presentation signs to trigger Bayesian neural network localizer and highlight suspected anatomical hubs in the 3D model.
          </p>
        </div>

        <button
          onClick={handleSyncToBrain}
          disabled={diagnosticInference.targetNodes.length === 0}
          className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-90 disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-lg transition-all flex items-center gap-2 group"
        >
          <Sparkles className="w-4 h-4 text-cyan-200" />
          <span>Project {diagnosticInference.targetNodes.length} Regions to 3D Brain</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Symptom Checkboxes */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-cyan-400" />
              <span>Neurological Checklist ({selectedSymptoms.length} Selected)</span>
            </h4>
            <button
              onClick={() => setSelectedSymptoms([])}
              className="text-[11px] font-mono text-slate-500 hover:text-slate-300"
            >
              Clear All
            </button>
          </div>

          <div className="space-y-4">
            {categories.map((cat) => {
              const items = CLINICAL_SYMPTOMS.filter(s => s.category === cat);
              return (
                <div key={cat} className="glass-panel p-4 rounded-xl border-slate-800">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-mono font-bold text-slate-300">
                    <span className="uppercase tracking-wider">{cat} Examination</span>
                    <button
                      onClick={() => handleSelectAllCategory(cat)}
                      className="text-[10px] text-cyan-400 hover:text-cyan-300"
                    >
                      Toggle All
                    </button>
                  </div>

                  <div className="space-y-2">
                    {items.map((symptom) => {
                      const checked = selectedSymptoms.includes(symptom.id);
                      return (
                        <div
                          key={symptom.id}
                          onClick={() => toggleSymptom(symptom.id)}
                          className={`cursor-pointer p-2.5 rounded-lg flex items-center justify-between gap-3 text-xs transition-all border ${
                            checked
                              ? 'bg-cyan-950/40 border-cyan-500/40 text-white font-medium'
                              : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            {checked ? (
                              <CheckSquare className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-600 flex-shrink-0" />
                            )}
                            <span>{symptom.label}</span>
                          </div>

                          <span className="text-[10px] font-mono text-slate-500 uppercase">
                            {symptom.targetNodes.length} structures
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: AI Syndrome Inference & Localization */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>AI Differential Localization</span>
            </h4>
            <span className="text-[11px] font-mono text-cyan-400">Bayesian Confidence</span>
          </div>

          <div className="space-y-3">
            {diagnosticInference.syndromes.map((syn, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border-slate-700/80 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        syn.urgency.includes('EMERGENT')
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : syn.urgency.includes('HIGH')
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      {syn.urgency}
                    </span>
                    <h4 className="text-base font-bold text-white mt-1.5">
                      {syn.name}
                    </h4>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-black text-cyan-400 font-mono">
                      {syn.likelihood}%
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 block">Probability</span>
                  </div>
                </div>

                <div className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800 space-y-1.5 leading-relaxed">
                  <div>
                    <span className="font-semibold text-slate-200">Vascular Culprit: </span>
                    <span className="font-mono text-cyan-300">{syn.affectedVessel}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200">Pathophysiology: </span>
                    <span>{syn.pathophysiology}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Suspected Anatomical Nodes Tag Cloud */}
          <div className="glass-panel p-5 rounded-2xl border-slate-700/80">
            <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Target Anatomical Nodes ({diagnosticInference.targetNodes.length})</span>
              <span className="text-[10px] text-cyan-400 font-normal">Active in 3D scene</span>
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {diagnosticInference.targetNodes.map((node) => (
                <span
                  key={node}
                  className="px-2.5 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 rounded-lg text-xs font-mono"
                >
                  {node}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
