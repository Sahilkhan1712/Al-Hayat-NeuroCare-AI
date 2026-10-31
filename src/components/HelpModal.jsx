import React from 'react';
import {
  Brain,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  MousePointer,
  RotateCw,
  X,
  Code
} from 'lucide-react';
import { sound } from '../utils/audio';

export default function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel-glow bg-[#080d1a] max-w-2xl w-full p-6 rounded-2xl border-cyan-500/40 shadow-2xl space-y-5 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b border-slate-700 pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                B.Tech CSE (AI & ML) Project Documentation
              </span>
              <h3 className="text-xl font-black text-white mt-0.5">
                NeuroCare AI System Architecture
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview */}
        <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
          <p>
            <strong className="text-white">NeuroCare AI</strong> is a clinical-grade neuroimaging, 3D anatomical visualization, and artificial intelligence diagnostic platform. It bridges high-resolution 3D neuroanatomy with real-time deep learning segmentation models.
          </p>
        </div>

        {/* 3D Model Technical Specifications */}
        <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase">
            <Layers className="w-4 h-4" />
            <span>3D Anatomical Mesh Specifications</span>
          </div>
          <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
            <li><strong className="text-white">Segmented Model:</strong> 65 individually addressable anatomical meshes from BodyParts3D atlases (both hemispheres, gyri, sulci, cerebellum, brainstem, ventricles, and subcortical nuclei).</li>
            <li><strong className="text-white">Color Calibration:</strong> Frontal (pink/red), Parietal (electric cyan/blue), Temporal (golden yellow/orange), Occipital (violet/purple), Cerebellum (contrasting pink/purple), Brainstem (realistic ivory/bone).</li>
            <li><strong className="text-white">Materials:</strong> Three.js MeshPhysicalMaterial with micro-sulcal normal bump maps, subsurface scattering transmission, and dynamic emissive glow.</li>
            <li><strong className="text-white">Exploded Layer View:</strong> Radially expands individual structures outward to allow inspection of deep limbic and ventricular anatomy.</li>
          </ul>
        </div>

        {/* AI & ML Models */}
        <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-300 uppercase">
            <Cpu className="w-4 h-4" />
            <span>AI Diagnostic & Vision Pipeline</span>
          </div>
          <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
            <li><strong className="text-white">Vision Backbone:</strong> Hybrid ResNet-152 and Vision Transformer (ViT-B/16) trained on multi-sequence neuroimaging (T1, T2-FLAIR, DWI, CT).</li>
            <li><strong className="text-white">Grad-CAM Interpretability:</strong> Generates visual attention heatmaps highlighting discriminative radiologic features (e.g. insular ribbon loss, necrotic cores).</li>
            <li><strong className="text-white">Bayesian Clinical Triage:</strong> Localizes functional syndromes (MCA stroke, cerebellar ataxia, Wernicke's aphasia) and synchronizes them directly onto the 3D model.</li>
          </ul>
        </div>

        {/* 3D Controls Guide */}
        <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-300 uppercase">
            <MousePointer className="w-4 h-4" />
            <span>Interactive 3D Navigation Gestures</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="p-2 bg-slate-950/60 rounded">
              <span className="font-mono text-cyan-400 font-bold">Left Drag:</span> Rotate 360°
            </div>
            <div className="p-2 bg-slate-950/60 rounded">
              <span className="font-mono text-cyan-400 font-bold">Scroll Wheel / Pinch:</span> Zoom In/Out
            </div>
            <div className="p-2 bg-slate-950/60 rounded">
              <span className="font-mono text-cyan-400 font-bold">Right Drag / Two-finger:</span> Pan Camera
            </div>
            <div className="p-2 bg-slate-950/60 rounded">
              <span className="font-mono text-cyan-400 font-bold">Left Click Region:</span> Open Clinical Inspector
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-500">
            Production Build • React 18 + Vite + Three.js
          </span>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl text-xs transition-all shadow-lg"
          >
            Close Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
