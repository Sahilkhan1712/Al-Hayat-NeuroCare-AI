import React, { useEffect, useRef, useState } from 'react';
import {
  Activity,
  Play,
  Pause,
  AlertOctagon,
  Sparkles,
  Zap,
  Sliders,
  Radio,
  Volume2
} from 'lucide-react';
import { sound } from '../../utils/audio';

const CHANNELS = [
  { id: 'Fp1-F7', label: 'Fp1 - F7 (Left Anterior)', color: '#ff2d75' },
  { id: 'C3-T3', label: 'C3 - T3 (Left Central/Temporal)', color: '#ffb703' },
  { id: 'P3-O1', label: 'P3 - O1 (Left Parieto-Occipital)', color: '#00e5ff' },
  { id: 'Fp2-F8', label: 'Fp2 - F8 (Right Anterior)', color: '#ff2d75' },
  { id: 'C4-T4', label: 'C4 - T4 (Right Central/Temporal)', color: '#ffb703' },
  { id: 'P4-O2', label: 'P4 - O2 (Right Parieto-Occipital)', color: '#00e5ff' }
];

export default function EEGSimulator() {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(true);
  const [seizureActive, setSeizureActive] = useState(false);
  const [dominantBand, setDominantBand] = useState('Alpha (8 - 12 Hz)');
  const [cognitiveState, setCognitiveState] = useState('Relaxed Wakefulness / Alert');

  const seizureRef = useRef(false);
  seizureRef.current = seizureActive;

  const runningRef = useRef(true);
  runningRef.current = running;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let t = 0;
    const history = CHANNELS.map(() => new Array(canvas.width).fill(0));

    const render = () => {
      animId = requestAnimationFrame(render);
      if (!runningRef.current) return;

      const w = canvas.width;
      const h = canvas.height;
      const numCh = CHANNELS.length;
      const chHeight = h / numCh;

      ctx.fillStyle = 'rgba(5, 8, 17, 0.25)';
      ctx.fillRect(0, 0, w, h);

      t += 0.04;

      CHANNELS.forEach((ch, i) => {
        const baseY = chHeight * i + chHeight / 2;

        // Generate synthetic EEG potential (microvolts)
        let val = 0;
        if (seizureRef.current) {
          // Sharp spike-and-wave epileptiform complexes (3Hz paroxysmal burst)
          const spikePhase = Math.sin(t * 12) * 25;
          const slowWave = Math.sin(t * 3) * 15;
          val = spikePhase + slowWave + (Math.random() - 0.5) * 8;
        } else {
          // Normal Alpha / Beta mixture
          const alpha = Math.sin(t * 5.0 + i) * 10;
          const beta = Math.sin(t * 11.0 + i * 2) * 4;
          const theta = Math.sin(t * 2.2 + i * 3) * 6;
          const noise = (Math.random() - 0.5) * 3;
          val = alpha + beta + theta + noise;
        }

        // Shift history left
        history[i].shift();
        history[i].push(val);

        // Draw waveform
        ctx.beginPath();
        ctx.lineWidth = 1.6;
        ctx.strokeStyle = seizureRef.current ? '#ef4444' : ch.color;

        for (let x = 0; x < w; x++) {
          const y = baseY + history[i][x];
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Channel Label text
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillText(ch.label, 8, baseY - chHeight / 2 + 14);
      });
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleToggleSeizure = () => {
    const nextState = !seizureActive;
    setSeizureActive(nextState);
    if (nextState) {
      sound.playAlert();
      setDominantBand('Paroxysmal Spike-Wave (3 Hz)');
      setCognitiveState('EPILEPTIFORM ICTAL DISCHARGE');
    } else {
      sound.playClick();
      setDominantBand('Alpha (8 - 12 Hz)');
      setCognitiveState('Relaxed Wakefulness / Alert');
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 border-cyan-500/20">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
              10-20 ELECTRODE TELEMETRY SUITE
            </span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Real-Time Multi-Channel Electroencephalogram (EEG)
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Continuous biosignal telemetry tracking fronto-temporal, central, and occipital electrical field potentials with spectral decomposition.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              sound.playClick();
              setRunning(!running);
            }}
            className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-2 border border-slate-700"
          >
            {running ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-green-400" />}
            <span>{running ? 'Pause Trace' : 'Resume'}</span>
          </button>

          <button
            onClick={handleToggleSeizure}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg ${
              seizureActive
                ? 'bg-red-600 hover:bg-red-500 text-white animate-pulse'
                : 'bg-red-950/60 hover:bg-red-900/60 border border-red-500/40 text-red-300'
            }`}
          >
            <AlertOctagon className="w-4 h-4" />
            <span>{seizureActive ? 'Stop Seizure Burst' : 'Trigger Seizure Burst'}</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Waveform Display */}
      <div className="glass-panel p-5 rounded-2xl border-slate-700/80">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-white font-bold">MONTAGE: DOUBLE BANANA (BIPOLAR)</span>
            <span>SAMPLING RATE: 500 Hz</span>
          </div>
          <div className="text-cyan-400">
            TIME CONSTANT: 0.3s • NOTCH: 50/60 Hz
          </div>
        </div>

        <canvas
          ref={canvasRef}
          width={880}
          height={400}
          className="w-full h-80 rounded-xl bg-[#03060f] border border-slate-800"
        />

        {/* Real-time Spectral Decomposition Bands */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
          <div className="glass-panel p-3 rounded-xl border-slate-800">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Delta (0.5 - 4 Hz)</div>
            <div className="text-sm font-bold text-white mt-1">12.4%</div>
            <div className="w-full bg-slate-800 h-1 rounded mt-1.5 overflow-hidden">
              <div className="bg-purple-500 h-full w-[12%]" />
            </div>
          </div>
          <div className="glass-panel p-3 rounded-xl border-slate-800">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Theta (4 - 8 Hz)</div>
            <div className="text-sm font-bold text-white mt-1">18.6%</div>
            <div className="w-full bg-slate-800 h-1 rounded mt-1.5 overflow-hidden">
              <div className="bg-blue-500 h-full w-[19%]" />
            </div>
          </div>
          <div className="glass-panel p-3 rounded-xl border-slate-800">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Alpha (8 - 13 Hz)</div>
            <div className="text-sm font-bold text-cyan-400 mt-1">45.2% (DOM)</div>
            <div className="w-full bg-slate-800 h-1 rounded mt-1.5 overflow-hidden">
              <div className="bg-cyan-400 h-full w-[45%]" />
            </div>
          </div>
          <div className="glass-panel p-3 rounded-xl border-slate-800">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Beta (13 - 30 Hz)</div>
            <div className="text-sm font-bold text-white mt-1">16.8%</div>
            <div className="w-full bg-slate-800 h-1 rounded mt-1.5 overflow-hidden">
              <div className="bg-amber-400 h-full w-[17%]" />
            </div>
          </div>
          <div className="glass-panel p-3 rounded-xl border-slate-800 col-span-2 md:col-span-1">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Gamma (&gt;30 Hz)</div>
            <div className="text-sm font-bold text-white mt-1">7.0%</div>
            <div className="w-full bg-slate-800 h-1 rounded mt-1.5 overflow-hidden">
              <div className="bg-pink-500 h-full w-[7%]" />
            </div>
          </div>
        </div>

        {/* Cognitive & Pathological Status */}
        <div className={`mt-4 p-4 rounded-xl border flex items-center justify-between ${
          seizureActive
            ? 'bg-red-950/40 border-red-500/50 text-red-200'
            : 'bg-cyan-950/20 border-cyan-500/20 text-cyan-200'
        }`}>
          <div className="flex items-center gap-3">
            <Zap className={`w-5 h-5 ${seizureActive ? 'text-red-400 animate-bounce' : 'text-cyan-400'}`} />
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 block">Current Cortical State:</span>
              <span className="font-bold text-sm text-white">{cognitiveState}</span>
            </div>
          </div>

          <span className="text-xs font-mono font-semibold">
            {dominantBand}
          </span>
        </div>
      </div>
    </div>
  );
}
