import React from 'react';
import {
  AlertTriangle,
  PhoneCall,
  ShieldAlert,
  Clock,
  Activity,
  HeartPulse,
  X,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { sound } from '../../utils/audio';

// Red Flag Evaluator
export function checkEmergencyRedFlags(text) {
  if (!text) return null;
  const t = text.toLowerCase();

  // 1. FAST Stroke Symptoms
  const hasFaceDroop = t.includes('chehra tedha') || t.includes('face droop') || t.includes('mouth twist') || t.includes('facial droop');
  const hasArmWeakness = (t.includes('haath') || t.includes('arm') || t.includes('leg') || t.includes('pair') || t.includes('one side')) && (t.includes('kamzor') || t.includes('weak') || t.includes('paralysis') || t.includes('paralysed') || t.includes('sunn'));
  const hasSpeechArrest = t.includes('bol nahi pa') || t.includes('speech arrest') || t.includes('slurred') || t.includes('lafz ladkhada') || t.includes('loss of speech');

  if (hasFaceDroop || hasArmWeakness || hasSpeechArrest) {
    return {
      type: 'STROKE_FAST',
      title: 'POSSIBLE ACUTE STROKE DETECTED (FAST PROTOCOL)',
      urgency: 'IMMEDIATE EMERGENCY CODE RED',
      description: 'Aapke bataye gaye symptoms (Face, Arm, ya Speech impairment) achanak Acute Brain Stroke ki taraf ishara kar rahe hain.',
      instructions: [
        'AI assessment ya online test ka intazaar BILKUL NA KAREIN.',
        'Turant Emergency Helpline 112 (India) ya 911 par call karein.',
        'Mareez ko kuch bhi khane ya peene ko na dein (choking ka khatra hota hai).',
        'Mareez ko shaant leta kar sir ko halka sa (30 degree) uthayein.',
        'Khoon patla karne wali koi bhi injection ya tablet bina CT scan ke na lein.'
      ],
      callNumber: '112',
      isCritical: true
    };
  }

  // 2. Thunderclap Headache / Subarachnoid Hemorrhage
  const isThunderclap = (t.includes('thunderclap') || t.includes('bomb phatne') || t.includes('explosive') || t.includes('worst headache') || t.includes('sabse tez dard') || t.includes('phat rha')) && (t.includes('achanak') || t.includes('sudden') || t.includes('seconds') || t.includes('minute'));
  if (isThunderclap) {
    return {
      type: 'THUNDERCLAP_HEADACHE',
      title: 'THUNDERCLAP HEADACHE EMERGENCY',
      urgency: 'HIGH CRITICAL RISK (SUSPECTED ANEURYSM / SAH)',
      description: 'Achanak 1 minute ke andar aane wala dimaag ka sabse tez dard (Worst Headache of Life) Subarachnoid Hemorrhage (aneurysm rupture) ho sakta hai.',
      instructions: [
        'Bina kisi deri ke Emergency Neuro-ICU wale hospital jayein.',
        'Immediate non-contrast Brain CT scan karwayein.',
        'Apne aap car ya bike chala kar na jayein, ambulance bulayein.'
      ],
      callNumber: '112',
      isCritical: true
    };
  }

  // 3. Meningitis Triad: Severe Headache + High Fever + Stiff Neck
  const hasFever = t.includes('bukhar') || t.includes('fever') || t.includes('taap');
  const hasStiffNeck = t.includes('gardan') || t.includes('neck') || t.includes('akad') || t.includes('stiff');
  const hasHeadache = t.includes('headache') || t.includes('sar dard') || t.includes('sir dard') || t.includes('pain');
  if (hasHeadache && hasFever && hasStiffNeck) {
    return {
      type: 'MENINGITIS_ALERT',
      title: 'SUSPECTED MENINGITIS / BRAIN INFECTION',
      urgency: 'ACUTE BACTERIAL/VIRAL INFECTION',
      description: 'Tez sar dard ke saath bukhar aur gardan me akad (chin touching chest blocked) Meningitis ka classical sign hai.',
      instructions: [
        'Turant hospital emergency pahuchein jahan Lumbar Puncture aur IV antibiotics shuru ho sakein.',
        'Roshni se bachne ke liye aankhon par patti ya andhera rakhein.'
      ],
      callNumber: '112',
      isCritical: true
    };
  }

  // 4. Status Epilepticus (Prolonged seizure or multiple seizures)
  const isSeizureProlonged = (t.includes('mirgi') || t.includes('daura') || t.includes('seizure') || t.includes('jhatke')) && (t.includes('5 minute') || t.includes('hosh nahi') || t.includes('bar bar') || t.includes('unconscious'));
  if (isSeizureProlonged) {
    return {
      type: 'STATUS_EPILEPTICUS',
      title: 'PROLONGED SEIZURE EMERGENCY (STATUS EPILEPTICUS)',
      urgency: 'CRITICAL RESPIRATORY & NEURONAL RISK',
      description: '5 minute se lamba chalne wala daura ya bina hosh aaye doosra daura aana brain hypoxia kar sakta hai.',
      instructions: [
        'Mareez ko karwat se leta dein (Recovery Position) taaki saans ki nali saaf rahe.',
        'Munh ke andar koi chammach, kapda ya ungli BILKUL NA DALEIN.',
        'Turant Emergency Ambulance 112 / 108 ko call karein.'
      ],
      callNumber: '112',
      isCritical: true
    };
  }

  // 5. Head Injury with Neurological Deterioration
  const isHeadInjury = (t.includes('chot') || t.includes('injury') || t.includes('accident') || t.includes('trauma')) && (t.includes('ulti') || t.includes('vomit') || t.includes('behosh') || t.includes('faint') || t.includes('confusion'));
  if (isHeadInjury) {
    return {
      type: 'TRAUMATIC_BRAIN_INJURY',
      title: 'ACUTE TRAUMATIC BRAIN INJURY (TBI) / EPIDURAL HEMATOMA RISK',
      urgency: 'SURGICAL TRAUMA EMERGENCY',
      description: 'Sir me chot lagne ke baad ulti hona ya behoshi Intracranial Hemorrhage ka nishana hai.',
      instructions: [
        'Gardan ko bilkul na hilayein (Cervical spine injury ka khatra).',
        'Immediate emergency trauma center jayein jahan CT scan available ho.'
      ],
      callNumber: '112',
      isCritical: true
    };
  }

  return null;
}

export default function EmergencyAlertSystem({
  alert,
  onDismiss
}) {
  if (!alert) return null;

  const title = alert.title || 'CRITICAL MEDICAL EMERGENCY (FAST PROTOCOL)';
  const urgency = alert.urgency || 'TIME-CRITICAL EMERGENCY PROTOCOL';
  const description = alert.description || alert.guidance || 'Achanak aayi sharirik kamzori ya lakwa stithi me turant 112 / 911 par call karein.';
  const callNumber = alert.callNumber || alert.phone || '112';
  const instructions = (Array.isArray(alert.instructions) && alert.instructions.length > 0)
    ? alert.instructions
    : [
        'AI assessment ya online test ka intazaar BILKUL NA KAREIN.',
        'Turant Emergency Helpline 112 (India) ya 911 par call karein.',
        'Mareez ko shaant leta kar sir ko halka sa (30 degree) uthayein.',
        'Mareez ko kuch bhi khane ya peene ko na dein (choking ka khatra hota hai).',
        'Record the exact time symptoms started (Golden Hour: 4.5 hours).'
      ];

  const isStroke = alert.type === 'STROKE_FAST' || /stroke|fast|lakwa|paralysis/i.test(title);

  return (
    <div className="fixed inset-0 z-50 bg-red-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in zoom-in-95 duration-200">
      <div className="bg-[#0f0407] border-2 border-red-500 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_0_60px_rgba(239,68,68,0.5)] space-y-5 text-white">
        {/* Urgent Header */}
        <div className="flex items-start justify-between gap-4 border-b border-red-900/60 pb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-xl animate-bounce">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase block">
                {urgency}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-0.5 leading-tight">
                {title}
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onDismiss();
            }}
            className="text-slate-400 hover:text-white p-2 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer"
            title="Dismiss only if in medical presence"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Primary Warning Notice */}
        <div className="bg-red-950/60 border border-red-500/50 p-4 rounded-2xl text-sm leading-relaxed text-red-100">
          <strong className="text-white block mb-1 text-base">⚠️ DO NOT WAIT FOR AN AI ASSESSMENT!</strong>
          <p>{description}</p>
        </div>

        {/* FAST Banner if Stroke */}
        {isStroke && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
            <div className="bg-red-900/40 p-2.5 rounded-xl border border-red-500/30">
              <span className="text-lg font-black text-red-400 block">F</span>
              <span className="text-white font-bold">Face Droop</span>
            </div>
            <div className="bg-red-900/40 p-2.5 rounded-xl border border-red-500/30">
              <span className="text-lg font-black text-red-400 block">A</span>
              <span className="text-white font-bold">Arm Weakness</span>
            </div>
            <div className="bg-red-900/40 p-2.5 rounded-xl border border-red-500/30">
              <span className="text-lg font-black text-red-400 block">S</span>
              <span className="text-white font-bold">Speech Slur</span>
            </div>
            <div className="bg-red-900/40 p-2.5 rounded-xl border border-red-500/30">
              <span className="text-lg font-black text-red-400 block">T</span>
              <span className="text-white font-bold">Time = 112</span>
            </div>
          </div>
        )}

        {/* Action Steps */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-red-300 uppercase tracking-wider">
            Immediate Critical Actions:
          </h4>
          <div className="space-y-1.5">
            {instructions.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-950/60 border border-slate-800 p-2.5 rounded-xl text-xs text-slate-200 flex items-start gap-2.5"
              >
                <span className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 font-mono font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call Emergency Services CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-400 text-center sm:text-left">
            In India: Call <span className="text-white font-bold text-sm">112 / 108</span> | Worldwide: <span className="text-white font-bold text-sm">911 / 999</span>
          </div>

          <a
            href={`tel:${callNumber}`}
            onClick={() => sound.playAlert()}
            className="w-full sm:w-auto px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-black rounded-2xl text-sm shadow-[0_0_25px_rgba(239,68,68,0.7)] flex items-center justify-center gap-2.5 transition-all uppercase tracking-wider cursor-pointer"
          >
            <PhoneCall className="w-5 h-5 animate-pulse" />
            <span>Call {callNumber} (Emergency) Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
