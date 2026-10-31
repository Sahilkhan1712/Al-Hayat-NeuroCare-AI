import React from 'react';
import {
  Brain,
  Activity,
  Layers,
  HeartPulse,
  AlertTriangle,
  Stethoscope,
  X,
  Share2,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { sound } from '../../utils/audio';

export default function AnatomyInspector({
  selectedNode,
  onClose,
  onFocusRegion
}) {
  if (!selectedNode) {
    return (
      <div className="glass-panel p-5 rounded-2xl text-center flex flex-col items-center justify-center h-full min-h-[300px]">
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 animate-pulse">
          <Brain className="w-7 h-7" />
        </div>
        <h4 className="text-base font-bold text-slate-200">No Region Selected</h4>
        <p className="text-xs text-slate-400 mt-1.5 max-w-[240px] leading-relaxed">
          Hover or click on any anatomical structure in the 3D Brain to inspect its neural functions, blood supply, and clinical pathology.
        </p>
        <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1.5 rounded-xl">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive 3D Raycasting Active</span>
        </div>
      </div>
    );
  }

  const { name, lobe, structure } = selectedNode;
  const functions = structure?.functions || [lobe.description];
  const clinicalNotes = structure?.clinicalNotes || 'Focal lesions impact higher-order cognitive and sensorimotor networks governed by this region.';
  const bloodSupply = structure?.bloodSupply || 'Branches of Internal Carotid and Vertebrobasilar arterial networks.';

  return (
    <div className="glass-panel-glow p-5 rounded-2xl flex flex-col h-full overflow-y-auto border-cyan-500/30 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-700/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-3 h-3 rounded-full shadow-lg"
              style={{ backgroundColor: lobe.color, boxShadow: `0 0 10px ${lobe.color}` }}
            />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-cyan-300">
              {lobe.name} • {structure?.hemisphere || 'Cerebral'}
            </span>
          </div>
          <h3 className="text-lg font-extrabold text-white leading-tight">
            {name}
          </h3>
        </div>

        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          title="Close Inspector"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Summary Pill Bar */}
      <div className="grid grid-cols-2 gap-2 my-3">
        <div className="bg-slate-900/60 border border-slate-700/50 p-2.5 rounded-xl">
          <span className="text-[10px] font-mono text-slate-400 uppercase block">Brodmann Map</span>
          <span className="text-xs font-semibold text-slate-100 mt-0.5 block truncate">
            {lobe.brodmann || 'Neocortical'}
          </span>
        </div>
        <div className="bg-slate-900/60 border border-slate-700/50 p-2.5 rounded-xl">
          <span className="text-[10px] font-mono text-slate-400 uppercase block">Neurochemistry</span>
          <span className="text-xs font-semibold text-cyan-300 mt-0.5 block truncate">
            {lobe.primaryNeurotransmitter?.split(',')[0] || 'Glutamate / GABA'}
          </span>
        </div>
      </div>

      {/* Primary Neural Functions */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
          <Activity className="w-3.5 h-3.5" />
          <span>Primary Functional Networks</span>
        </div>
        <div className="space-y-1.5">
          {functions.map((func, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-800/80 p-2 rounded-lg text-xs text-slate-200 flex items-start gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
              <span>{func}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Pathology Significance */}
      <div className="space-y-2 mb-4 bg-red-950/20 border border-red-500/20 p-3 rounded-xl">
        <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-red-400 uppercase tracking-wider">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Clinical Lesion Consequences</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {clinicalNotes}
        </p>
      </div>

      {/* Vascular Supply */}
      <div className="space-y-2 mb-4 bg-slate-900/50 border border-slate-800 p-3 rounded-xl">
        <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
          <HeartPulse className="w-3.5 h-3.5" />
          <span>Arterial Blood Supply</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-mono">
          {bloodSupply}
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-auto pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
        <div className="text-[10px] font-mono text-slate-500">
          ID: <span className="text-slate-400">{selectedNode.id}</span>
        </div>
        <button
          onClick={() => {
            sound.playSelect();
            if (onFocusRegion) onFocusRegion(selectedNode);
          }}
          className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg text-xs font-semibold shadow-lg transition-all flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sync Focus</span>
        </button>
      </div>
    </div>
  );
}
