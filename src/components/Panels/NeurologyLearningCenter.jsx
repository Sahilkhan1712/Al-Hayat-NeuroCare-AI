import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Bookmark,
  ExternalLink,
  Brain,
  ShieldCheck,
  HelpCircle,
  FileText,
  AlertTriangle,
  ChevronRight,
  Filter,
  Sparkles,
  Layers,
  X
} from 'lucide-react';
import {
  DISEASE_CATEGORIES as LEGACY_CATEGORIES,
  NEUROLOGICAL_DISEASES as LEGACY_DISEASES
} from '../../data/neurologicalDiseaseDatabase';
import { ALL_VERIFIED_DISEASES, CATEGORY_METADATA } from '../../data/medicalKnowledgeRegistry';
import { sound } from '../../utils/audio';

// Unified Disease Normalizer
const UNIFIED_DISEASES = ALL_VERIFIED_DISEASES.map(d => ({
  id: d.disease_id,
  name: d.official_name,
  categoryId: d.category,
  simpleExplanation: d.simple_description,
  medicalDefinition: d.medical_description,
  affectedRegion: d.affected_system,
  commonSymptoms: d.symptoms || [],
  earlySigns: d.early_warning_signs ? d.early_warning_signs.join(' • ') : '',
  causes: d.possible_causes ? d.possible_causes.join(', ') : '',
  riskFactors: d.risk_factors ? d.risk_factors.join(', ') : '',
  tests: d.diagnostic_tests ? d.diagnostic_tests.join(' • ') : '',
  treatment: d.treatment_overview || '',
  medicines: d.medication_classes ? d.medication_classes.join(', ') : '',
  emergencyFlags: d.emergency_signs ? d.emergency_signs.join(' • ') : '',
  target3DNodes: d.target_3d_nodes || ['thalamus', 'cortex'],
  icd11Code: d.icd11_code || 'ICD-11 Verified',
  doctorSpecialty: d.doctor_specialty || 'Neurologist',
  references: d.references || [],
  sourceUrl: d.source_url || 'https://icd.who.int'
}));

const ACTIVE_CATEGORIES = Object.keys(CATEGORY_METADATA).map(k => ({
  id: k,
  label: CATEGORY_METADATA[k].label,
  icon: CATEGORY_METADATA[k].icon
}));

export default function NeurologyLearningCenter({ onSelectDiseaseIn3D }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    const saved = localStorage.getItem('neurocare_bookmarks');
    return saved ? JSON.parse(saved) : ['migraine-aura', 'parkinsons-disease'];
  });

  const toggleBookmark = (id) => {
    sound.playClick();
    setBookmarkedIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      localStorage.setItem('neurocare_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const filteredDiseases = UNIFIED_DISEASES.filter(d => {
    const matchesCat = selectedCategory === 'all' || d.categoryId === selectedCategory;
    const matchesSearch = !searchQuery.trim() || 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.simpleExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.commonSymptoms.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 border-cyan-500/30">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
              EVIDENCE-BASED NEUROLOGICAL ENCYCLOPEDIA
            </span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Neurology Learning Center & Medical Library
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Searchable, peer-reviewed knowledge base covering headache, cerebrovascular, cognitive, neuromuscular, and peripheral nervous system disorders.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search diseases, symptoms, or brain regions..."
            className="w-full glass-input pl-10 pr-4 py-2.5 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => {
            sound.playClick();
            setSelectedCategory('all');
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all border ${
            selectedCategory === 'all'
              ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.5)]'
              : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700'
          }`}
        >
          All Categories ({UNIFIED_DISEASES.length})
        </button>

        {ACTIVE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              sound.playClick();
              setSelectedCategory(cat.id);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all border flex items-center gap-1.5 ${
              selectedCategory === cat.id
                ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/60 font-bold shadow'
                : 'bg-slate-900/40 text-slate-400 border-slate-800/80 hover:text-slate-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Disease Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredDiseases.map((disease) => {
          const isBookmarked = bookmarkedIds.includes(disease.id);
          return (
            <div
              key={disease.id}
              className="glass-panel p-5 rounded-2xl border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group shadow-xl"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700 uppercase">
                    {disease.categoryId}
                  </span>

                  <button
                    onClick={() => toggleBookmark(disease.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isBookmarked ? 'text-pink-400 bg-pink-950/40' : 'text-slate-500 hover:text-slate-300'
                    }`}
                    title={isBookmarked ? 'Remove bookmark' : 'Bookmark disease'}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <h3 className="font-bold text-base text-white mt-2 group-hover:text-cyan-300 transition-colors">
                  {disease.name}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3">
                  {disease.simpleExplanation}
                </p>

                {/* Common symptoms pill list */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Key Clinical Signs:</span>
                  <div className="flex flex-wrap gap-1">
                    {disease.commonSymptoms.slice(0, 2).map((symp, i) => (
                      <span key={i} className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800 truncate max-w-full">
                        {symp.split(':')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <Brain className="w-3.5 h-3.5 text-cyan-400" />
                  <span>3D Mapped</span>
                </span>

                <button
                  onClick={() => {
                    sound.playSelect();
                    setSelectedDisease(disease);
                  }}
                  className="px-3 py-1.5 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 hover:text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-1 group/btn"
                >
                  <span>Full Profile</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 22-FIELD DETAILED DISEASE PROFILE MODAL */}
      {selectedDisease && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="glass-panel-glow bg-[#080d1a] max-w-3xl w-full p-6 sm:p-8 rounded-3xl border-cyan-500/40 shadow-2xl space-y-5 my-auto max-h-[92vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-700/80 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                    {selectedDisease.categoryId.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    WHO & NINDS Clinical Profile
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white">
                  {selectedDisease.name}
                </h2>
              </div>

              <button
                onClick={() => setSelectedDisease(null)}
                className="text-slate-400 hover:text-white p-2 rounded-xl bg-slate-900 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Summary Pill Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Affected Nervous System Region:</span>
                <span className="text-cyan-300 font-semibold">{selectedDisease.affectedRegion}</span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-2">
                {onSelectDiseaseIn3D && (
                  <button
                    onClick={() => {
                      sound.playSelect();
                      onSelectDiseaseIn3D(selectedDisease);
                      setSelectedDisease(null);
                    }}
                    className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5 shadow"
                  >
                    <Brain className="w-3.5 h-3.5" />
                    <span>View in 3D Brain</span>
                  </button>
                )}
              </div>
            </div>

            {/* Disease Sections (22 Fields) */}
            <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
              <div>
                <strong className="text-white block font-mono text-[11px] uppercase text-cyan-400 mb-1">
                  1. Simple Everyday Explanation:
                </strong>
                <p className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/80">
                  {selectedDisease.simpleExplanation}
                </p>
              </div>

              <div>
                <strong className="text-white block font-mono text-[11px] uppercase text-cyan-400 mb-1">
                  2. Formal Medical Definition:
                </strong>
                <p className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-200">
                  {selectedDisease.medicalDefinition}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/80">
                  <strong className="text-white block mb-1">Common Symptoms:</strong>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedDisease.commonSymptoms.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/80">
                  <strong className="text-white block mb-1">Less Common Symptoms:</strong>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedDisease.lessCommonSymptoms.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <strong className="text-white block font-mono text-[11px] uppercase text-cyan-400 mb-1">
                  Causes & Risk Factors:
                </strong>
                <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/80 space-y-1.5">
                  <div><span className="font-semibold text-white">Possible Causes: </span>{selectedDisease.possibleCauses}</div>
                  <div><span className="font-semibold text-white">Risk Factors: </span>{selectedDisease.riskFactors}</div>
                </div>
              </div>

              <div>
                <strong className="text-white block font-mono text-[11px] uppercase text-cyan-400 mb-1">
                  Diagnostic Tests & Investigations:
                </strong>
                <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/80 space-y-1.5">
                  <div><span className="font-semibold text-white">Clinical Evaluation: </span>{selectedDisease.evaluation}</div>
                  <div><span className="font-semibold text-white">Imaging & Tests: </span>{selectedDisease.diagnosticInvestigations}</div>
                </div>
              </div>

              <div>
                <strong className="text-white block font-mono text-[11px] uppercase text-cyan-400 mb-1">
                  Treatment Options & Pharmacotherapy Guidance:
                </strong>
                <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/80 space-y-2">
                  <div><span className="font-semibold text-white">Medical Management: </span>{selectedDisease.treatmentOptions}</div>
                  <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/30 text-cyan-200">
                    <span className="font-bold text-white block mb-0.5">Medicines (Categories & Precautions):</span>
                    {selectedDisease.medicinesExplanation}
                  </div>
                </div>
              </div>

              {/* Red Flags / Emergency Warnings */}
              <div className="bg-red-950/30 border border-red-500/40 p-3.5 rounded-xl text-red-200 space-y-1">
                <span className="font-bold text-red-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Emergency Warning Signs:</span>
                </span>
                <p>{selectedDisease.emergencyWarningSigns}</p>
              </div>

              {/* FAQs */}
              {selectedDisease.faqs && selectedDisease.faqs.length > 0 && (
                <div>
                  <strong className="text-white block font-mono text-[11px] uppercase text-cyan-400 mb-1.5">
                    Frequently Asked Questions:
                  </strong>
                  <div className="space-y-2">
                    {selectedDisease.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-slate-100 block">Q: {faq.q}</strong>
                        <p className="text-slate-300">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Clinical References */}
              <div className="pt-2 border-t border-slate-800">
                <strong className="text-slate-400 block font-mono text-[10px] uppercase mb-1">
                  Verified Medical References & Clinical Guidelines:
                </strong>
                <div className="flex flex-wrap gap-2">
                  {selectedDisease.trustedReferences.map((ref, idx) => (
                    <a
                      key={idx}
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 underline flex items-center gap-1"
                    >
                      <span>{ref.name} ({ref.date})</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
