import React, { useState } from 'react';
import {
  Activity,
  Scan,
  AlertCircle,
  CheckCircle2,
  FileText,
  UploadCloud,
  ChevronRight,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldAlert,
  Sliders,
  Eye,
  Download
} from 'lucide-react';
import { CLINICAL_PATHOLOGIES } from '../../data/brainAnatomyData';
import { sound } from '../../utils/audio';

export default function AIDiagnostics({
  activePathology,
  onSelectPathology,
  onSwitchTo3D
}) {
  const [selectedCase, setSelectedCase] = useState(CLINICAL_PATHOLOGIES[0]);
  const [analyzing, setAnalyzing] = useState(false);
  const [showGradCam, setShowGradCam] = useState(true);
  const [scanModality, setScanModality] = useState('MRI_T2_FLAIR');
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [uploadedScanName, setUploadedScanName] = useState(null);

  const handleSelectCase = (pathology) => {
    sound.playClick();
    setSelectedCase(pathology);
    setUploadedScanName(null);
    onSelectPathology(pathology);
  };

  const handleSimulateCustomUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      sound.playScan();
      setAnalyzing(true);
      setUploadedScanName(file.name);
      setTimeout(() => {
        setAnalyzing(false);
        sound.playSelect();
        // Match or select glioblastoma or custom
        setSelectedCase(CLINICAL_PATHOLOGIES[1]);
        onSelectPathology(CLINICAL_PATHOLOGIES[1]);
      }, 1500);
    }
  };

  const handleTriggerAnalysis = () => {
    sound.playScan();
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      sound.playSelect();
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 border-cyan-500/20">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
              NEUROVISION DEEP LEARNING DIAGNOSTIC SUITE
            </span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Neuro-Radiology AI Scan Segmentation
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Convolutional & Vision Transformer (ViT) ensemble trained on 84,000+ multi-sequence MRI/CT neuroimaging datasets with automated lesion volumetric quantification.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="cursor-pointer px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl text-xs font-semibold text-slate-200 transition-all flex items-center gap-2 shadow-lg">
            <UploadCloud className="w-4 h-4 text-cyan-400" />
            <span>Upload Scan (DICOM / PNG)</span>
            <input
              type="file"
              accept="image/*,.dcm"
              className="hidden"
              onChange={handleSimulateCustomUpload}
            />
          </label>
        </div>
      </div>

      {/* Main Grid: Scan Viewport + Clinical Case Selectors */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Clinical Case Selector List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-slate-400">
              Validated Clinical Cases
            </h4>
            <span className="text-[11px] font-mono text-cyan-400">5 Protocols</span>
          </div>

          <div className="space-y-2">
            {CLINICAL_PATHOLOGIES.map((patho) => {
              const isSelected = selectedCase?.id === patho.id;
              return (
                <div
                  key={patho.id}
                  onClick={() => handleSelectCase(patho)}
                  className={`cursor-pointer p-4 rounded-xl transition-all border ${
                    isSelected
                      ? 'glass-panel-glow border-cyan-400/60 bg-cyan-950/30 shadow-xl'
                      : 'glass-panel border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {patho.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        patho.severity.includes('CRITICAL')
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : patho.severity.includes('HIGH')
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {patho.severity}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-white mt-2 leading-snug">
                    {patho.title}
                  </h4>

                  <div className="mt-2 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                    <span className="font-mono text-[11px]">Vol: {patho.lesionVolume}</span>
                    <span className="font-mono text-[11px] text-cyan-400 font-semibold">
                      AI Conf: {patho.confidenceScore}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: AI Scan Viewer & Telemetry Dashboard */}
        <div className="lg:col-span-8 space-y-4">
          {/* Scan Visualizer Card */}
          <div className="glass-panel p-5 rounded-2xl border-slate-700/80">
            {/* Viewport Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Scan className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  MULTI-PLANAR RECONSTRUCTION
                </span>
                {uploadedScanName && (
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-900/40 text-cyan-300 rounded border border-cyan-500/30">
                    CUSTOM: {uploadedScanName}
                  </span>
                )}
              </div>

              {/* Modality Selector */}
              <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-700">
                {['MRI_T2_FLAIR', 'MRI_T1_CONTRAST', 'DWI_ADC', 'CT_PERFUSION'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => {
                      sound.playClick();
                      setScanModality(mode);
                    }}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-lg transition-all ${
                      scanModality === mode
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {mode.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Scan Image Simulation Stage */}
            <div className="relative mt-4 w-full h-80 rounded-xl bg-slate-950 overflow-hidden flex items-center justify-center border border-slate-800 shadow-inner group">
              {/* Synthetic Medical Scan Background Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

              {/* Synthetic Axial Slice Brain Canvas Illustration */}
              <div className="relative w-64 h-64 rounded-full border-4 border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 shadow-2xl flex items-center justify-center">
                {/* Hemisphere Sulci lines */}
                <div className="absolute w-[2px] h-52 bg-slate-600/40" />
                <div className="absolute w-44 h-44 rounded-full border border-dashed border-slate-700/50 opacity-60" />

                {/* Simulated Pathological Lesion / Grad-CAM Heatmap Overlay */}
                {showGradCam && (
                  <div
                    className="absolute w-24 h-24 rounded-full blur-xl animate-pulse"
                    style={{
                      backgroundColor: selectedCase.colorHighlight || '#ef4444',
                      opacity: 0.65,
                      transform: selectedCase.id.includes('mca')
                        ? 'translate(-35px, -20px)'
                        : selectedCase.id.includes('glio')
                        ? 'translate(40px, -30px)'
                        : selectedCase.id.includes('alzheimer')
                        ? 'translate(0px, 15px) scale(0.8)'
                        : 'translate(20px, 30px)'
                    }}
                  />
                )}

                {/* Lesion Bounding Contour Ring */}
                <div
                  className="absolute w-20 h-20 rounded-full border-2 border-red-400 border-dashed animate-spin transition-all"
                  style={{
                    animationDuration: '14s',
                    transform: selectedCase.id.includes('mca')
                      ? 'translate(-35px, -20px)'
                      : selectedCase.id.includes('glio')
                      ? 'translate(40px, -30px)'
                      : selectedCase.id.includes('alzheimer')
                      ? 'translate(0px, 15px) scale(0.8)'
                      : 'translate(20px, 30px)'
                  }}
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-[9px] font-mono bg-red-600 text-white px-1.5 py-0.2 rounded shadow">
                    ROI-1
                  </div>
                </div>

                {/* Scan Telemetry Text Overlays */}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-cyan-400">
                  FOV: 220mm<br />
                  SLICE: 24/48<br />
                  TE: 92ms • TR: 4800ms
                </div>
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-400 text-right">
                  SEQ: {scanModality}<br />
                  MATRIX: 512x512<br />
                  RES: 0.43mm
                </div>
              </div>

              {/* Scanning Laser Line when analyzing */}
              {analyzing && <div className="scanner-beam" />}

              {/* Analyzing Badge */}
              {analyzing && (
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm flex flex-col items-center justify-center">
                  <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-2" />
                  <span className="text-xs font-mono font-semibold text-cyan-300">
                    NEURAL SEGMENTATION IN PROGRESS...
                  </span>
                </div>
              )}
            </div>

            {/* Viewport Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    sound.playClick();
                    setShowGradCam(!showGradCam);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                    showGradCam
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Grad-CAM Activation Map</span>
                </button>

                <button
                  onClick={handleTriggerAnalysis}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition-all"
                >
                  Re-Run Inference
                </button>
              </div>

              {/* Link to 3D Model Button */}
              <button
                onClick={() => {
                  sound.playSelect();
                  onSelectPathology(selectedCase);
                  if (onSwitchTo3D) onSwitchTo3D();
                }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-90 text-white rounded-xl text-xs font-bold shadow-lg transition-all flex items-center gap-2 group"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                <span>Map Pathology to 3D Brain</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* AI Diagnostic Report Card */}
          <div className="glass-panel p-5 rounded-2xl border-slate-700/80 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Automated Radiologic Findings
                </h4>
              </div>
              <button
                onClick={() => {
                  sound.playSelect();
                  setReportModalOpen(true);
                }}
                className="text-xs text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Generate Official Report</span>
              </button>
            </div>

            {/* Findings Text */}
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-2">
              <div className="text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-white">Imaging Biomarkers: </span>
                {selectedCase.imagingSign}
              </div>
              <div className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                <span className="font-semibold text-white">Clinical Presentation: </span>
                {selectedCase.clinicalPresentation}
              </div>
              <div className="text-xs text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 p-2.5 rounded-lg mt-2 leading-relaxed">
                <span className="font-semibold text-white">AI Recommendation: </span>
                {selectedCase.aiRecommendation}
              </div>
            </div>

            {/* Quantitative Metrics Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="glass-panel p-3 rounded-xl border-slate-700/50">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Detection Confidence</span>
                <div className="text-lg font-bold text-cyan-400 mt-1">
                  {selectedCase.confidenceScore}%
                </div>
              </div>
              <div className="glass-panel p-3 rounded-xl border-slate-700/50">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Lesion Quantification</span>
                <div className="text-lg font-bold text-white mt-1">
                  {selectedCase.lesionVolume}
                </div>
              </div>
              <div className="glass-panel p-3 rounded-xl border-slate-700/50">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Model Architecture</span>
                <div className="text-xs font-mono font-bold text-purple-400 mt-1 truncate">
                  ResNet152-ViT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Clinical Report Modal */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel-glow bg-[#0a101f] max-w-2xl w-full p-6 rounded-2xl border-cyan-500/40 shadow-2xl space-y-5 animate-in zoom-in-95">
            <div className="flex items-start justify-between border-b border-slate-700 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                  NEUROCARE AI • DEPARTMENT OF NEURORADIOLOGY
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Automated Clinical Imaging Diagnostic Report
                </h3>
              </div>
              <button
                onClick={() => setReportModalOpen(false)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 font-mono">
              <div className="grid grid-cols-2 gap-2 p-3 bg-slate-900 rounded-lg">
                <div>PATIENT ID: <span className="text-white">NC-2026-8841</span></div>
                <div>EXAM DATE: <span className="text-white">OCTOBER 30, 2026</span></div>
                <div>STUDY: <span className="text-white">BRAIN MRI MULTI-PARAMETRIC</span></div>
                <div>AI ENGINE: <span className="text-cyan-400">NeuroVision v4.2 Deep ViT</span></div>
              </div>

              <div>
                <span className="text-slate-400 font-bold block mb-1">FINDINGS:</span>
                <p className="bg-slate-900/60 p-3 rounded border border-slate-800 text-slate-200 leading-relaxed font-sans">
                  {selectedCase.imagingSign}
                </p>
              </div>

              <div>
                <span className="text-slate-400 font-bold block mb-1">IMPRESSION & SEVERITY:</span>
                <div className="p-3 bg-red-950/30 border border-red-500/30 rounded text-red-300 font-bold">
                  {selectedCase.title} — {selectedCase.severity} (Confidence: {selectedCase.confidenceScore}%)
                </div>
              </div>

              <div>
                <span className="text-slate-400 font-bold block mb-1">TREATMENT & INTERVENTION GUIDANCE:</span>
                <p className="bg-cyan-950/20 p-3 rounded border border-cyan-500/30 text-cyan-200 font-sans leading-relaxed">
                  {selectedCase.aiRecommendation}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <span className="text-[10px] font-mono text-slate-500">
                Digital Signature: Verified by NeuroCare AI Board System
              </span>
              <button
                onClick={() => {
                  sound.playClick();
                  window.print();
                }}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export / Print PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
