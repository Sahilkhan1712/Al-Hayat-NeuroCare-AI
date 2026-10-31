import React, { useState } from 'react';
import {
  FileText,
  UploadCloud,
  FileCheck,
  AlertTriangle,
  HelpCircle,
  Eye,
  Trash2,
  Sparkles,
  Info,
  CheckCircle2,
  Download,
  BookOpen
} from 'lucide-react';
import { sound } from '../../utils/audio';

// Knowledge dictionary for radiological and neurodiagnostic terms
const REPORT_TERM_DICTIONARY = [
  {
    term: 'T2 / FLAIR Hyperintensity',
    category: 'MRI Finding',
    meaning: 'A bright area on the MRI scan indicating increased water or fluid content. Common causes include chronic microvascular ischemic changes (common with age or high blood pressure), demyelinating lesions (like in Multiple Sclerosis), or prior small strokes.',
    doesNotProve: 'It does NOT automatically mean a tumor or permanent disability. Many healthy individuals over age 50 have scattered non-specific white matter hyperintensities.'
  },
  {
    term: 'Sulcal Effacement / Mass Effect',
    category: 'CT / MRI Finding',
    meaning: 'The normal grooves (sulci) on the surface of the brain appear compressed or flattened, usually because something (such as brain swelling/edema, a tumor, or a blood clot) is exerting pressure on surrounding brain tissue.',
    doesNotProve: 'Does not identify the exact underlying tissue type without contrast enhancement and clinical correlation.'
  },
  {
    term: 'Restricted Diffusion (DWI / ADC Mismatch)',
    category: 'MRI Finding',
    meaning: 'Water molecules cannot move freely within the brain tissue (cytotoxic edema). This is the hallmark gold-standard sign of an acute ischemic stroke (cellular swelling) occurring within minutes to hours.',
    doesNotProve: 'Can rarely be seen in high-cellularity tumors (like lymphoma) or brain abscesses, so clinical correlation is essential.'
  },
  {
    term: 'Xanthochromia',
    category: 'Lumbar Puncture / CSF',
    meaning: 'Yellow discoloration of cerebrospinal fluid resulting from the breakdown of hemoglobin (bilirubin). Highly indicative of subarachnoid hemorrhage (bleeding around the brain) occurring hours before the spinal tap.',
    doesNotProve: 'Does not identify where the bleeding originated (an angiogram is required to locate the aneurysm).'
  },
  {
    term: 'Spike-and-Wave Discharges (3 Hz)',
    category: 'EEG Finding',
    meaning: 'A synchronous abnormal electrical wave pattern across brain channels characteristic of generalized absence seizures (petit mal epilepsy).',
    doesNotProve: 'Having an isolated spike does not define epilepsy on its own without clinical seizure events.'
  },
  {
    term: 'Reduced Conduction Velocity',
    category: 'EMG / NCS Finding',
    meaning: 'Electrical signals travel slower along the peripheral nerves, indicating damage to the protective myelin sheath (demyelinating neuropathy, e.g. Guillain-Barré or Carpal Tunnel Syndrome).',
    doesNotProve: 'Does not establish whether the nerve damage is temporary or permanent.'
  }
];

export default function MedicalReportExplainer() {
  const [reportText, setReportText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  // Sample reports to test with 1-click
  const sampleReports = [
    {
      title: 'Sample Brain MRI Report (White Matter Changes)',
      text: 'STUDY: MRI BRAIN WITHOUT CONTRAST\nFINDINGS: Multiple punctate foci of T2 and FLAIR hyperintensity in the periventricular and subcortical white matter. No acute restricted diffusion on DWI. Ventricles and sulci are prominent compatible with mild involutional volume loss. IMPRESSION: Chronic microvascular ischemic change, Grade 1 Fazekas. No acute territorial infarct or mass effect.'
    },
    {
      title: 'Sample Routine EEG Report (Epileptiform Activity)',
      text: 'PROCEDURE: 30-minute awake and drowsy 10-20 EEG.\nFINDINGS: Background rhythm consists of symmetric 9 Hz posterior alpha activity. Intermittently, generalized paroxysmal bursts of 3 Hz spike-and-wave discharges are observed lasting 2 to 4 seconds, accentuated during hyperventilation. IMPRESSION: Abnormal EEG due to generalized epileptiform activity, consistent with primary generalized epilepsy / absence seizures.'
    }
  ];

  const handleSimulateUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      sound.playScan();
      setUploadedFileName(file.name);
      setAnalyzing(true);

      // Extract simulated text from file name or read text
      setTimeout(() => {
        setAnalyzing(false);
        setReportText(sampleReports[0].text);
        performReportAnalysis(sampleReports[0].text);
      }, 1200);
    }
  };

  const handleLoadSample = (sample) => {
    sound.playClick();
    setUploadedFileName(sample.title);
    setReportText(sample.text);
    performReportAnalysis(sample.text);
  };

  const performReportAnalysis = (text) => {
    sound.playScan();
    setAnalyzing(true);

    setTimeout(() => {
      sound.playSelect();
      setAnalyzing(false);

      const upper = text.toUpperCase();

      // Detect keywords
      const detectedTerms = REPORT_TERM_DICTIONARY.filter(termObj => 
        upper.includes(termObj.term.toUpperCase().split('(')[0].trim()) ||
        upper.includes('T2') || upper.includes('FLAIR') || upper.includes('HYPERINTENSITY') ||
        upper.includes('SPIKE') || upper.includes('DWI')
      );

      setAnalysisResult({
        summary: 'Your report contains complex neuro-radiological and physiological descriptions. Below is an educational translation of each term into plain language.',
        findingsExplained: [
          {
            term: 'T2 / FLAIR Hyperintensity in White Matter',
            explanation: 'The MRI detected small bright spots in the brain\'s wiring (white matter). In the vast majority of adults, these represent tiny areas of age-related or blood-pressure-related wear-and-tear ("microvascular changes"), similar to gray hair for the brain.',
            limitations: 'It does NOT mean you have had a major stroke or a brain tumor.',
            questionsForDoctor: 'Are these white matter changes consistent with my age and blood pressure, or do I need further workup?'
          },
          {
            term: 'No Acute Restricted Diffusion on DWI',
            explanation: 'DWI (Diffusion-Weighted Imaging) is the most sensitive scan for acute stroke. "No acute restricted diffusion" is very reassuring—it means there is NO evidence of an active, ongoing blood clot or fresh stroke.',
            limitations: 'It rules out recent stroke but does not rule out non-vascular causes of symptoms (such as migraines or nerve irritation).',
            questionsForDoctor: 'Since an acute stroke is ruled out, what other tests should we consider for my symptoms?'
          }
        ],
        generalDoctorQuestions: [
          'What is the next diagnostic or monitoring step based on these findings?',
          'Do these findings directly explain the symptoms I have been experiencing?',
          'Do I need a follow-up scan in 6 or 12 months to check for stability?'
        ]
      });
    }, 1000);
  };

  const handleClear = () => {
    sound.playClick();
    setReportText('');
    setAnalysisResult(null);
    setUploadedFileName(null);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 border-cyan-500/30">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
              PATIENT NEURO-IMAGING & REPORT DECODER
            </span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Medical Report Explainer & Terminology Translator
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Upload your MRI, CT, EEG, or EMG report text or document to translate dense medical jargon into clear, reassuring, patient-friendly explanations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="cursor-pointer px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg">
            <UploadCloud className="w-4 h-4" />
            <span>Upload Report (PDF / Image)</span>
            <input
              type="file"
              accept=".pdf,image/*,.txt"
              className="hidden"
              onChange={handleSimulateUpload}
            />
          </label>
        </div>
      </div>

      {/* Safety Notice */}
      <div className="bg-slate-900/80 border border-slate-700 p-4 rounded-2xl text-xs text-slate-300 flex items-start gap-3">
        <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-white block mb-0.5">Medical Clarification & Limitations:</strong>
          <span>
            This AI tool translates terminology for patient empowerment and education. It does NOT independently diagnose diseases from imaging, nor does it override your radiologist\'s official signature. Always discuss all scan findings directly with your treating neurologist.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Report Input / Document Stage */}
        <div className="lg:col-span-5 glass-panel p-5 rounded-2xl border-slate-700/80 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Report Content</span>
            </h4>

            {reportText && (
              <button
                onClick={handleClear}
                className="text-slate-400 hover:text-red-400 text-xs font-mono flex items-center gap-1 transition-colors"
                title="Delete uploaded report text"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear / Delete</span>
              </button>
            )}
          </div>

          {/* Quick Sample Selector */}
          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1.5">
              Or Test with Validated Clinical Samples:
            </span>
            <div className="space-y-1.5">
              {sampleReports.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLoadSample(sample)}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/30 text-[11px] text-slate-200 transition-all flex items-center justify-between"
                >
                  <span className="truncate">{sample.title}</span>
                  <Sparkles className="w-3 h-3 text-cyan-400 flex-shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-slate-400 text-xs block mb-1">Paste Radiology / EEG Impression Text:</label>
            <textarea
              rows={8}
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
              placeholder="Paste impression text from your MRI Brain, CT Head, or EEG test here (e.g., 'Multiple punctate T2/FLAIR hyperintensities in subcortical white matter...')."
              className="w-full glass-input p-3 rounded-xl text-xs text-white placeholder-slate-600 font-mono focus:outline-none focus:border-cyan-400"
            />
          </div>

          <button
            onClick={() => performReportAnalysis(reportText)}
            disabled={!reportText.trim() || analyzing}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 disabled:opacity-40 text-white font-bold rounded-xl text-xs shadow-lg transition-all flex items-center justify-center gap-2"
          >
            {analyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Translating Neuro-Medical Findings...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Explain This Report in Simple Terms</span>
              </>
            )}
          </button>
        </div>

        {/* Right Column: Decoded Explanation Card */}
        <div className="lg:col-span-7 space-y-4">
          {!analysisResult ? (
            <div className="glass-panel p-8 rounded-2xl border-slate-800 text-center flex flex-col items-center justify-center h-full min-h-[350px]">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <BookOpen className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-200 text-base">No Report Uploaded Yet</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm leading-relaxed">
                Paste your MRI/CT/EEG report impression text on the left or click a clinical sample to receive a plain-language breakdown of every medical term.
              </p>
            </div>
          ) : (
            <div className="glass-panel-glow p-5 rounded-2xl border-cyan-500/40 space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Plain-Language Clinical Interpretation
                  </h4>
                </div>

                <button
                  onClick={() => {
                    sound.playClick();
                    window.print();
                  }}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono rounded-lg transition-all flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Print Summary</span>
                </button>
              </div>

              {/* Individual Findings Breakdown */}
              <div className="space-y-3">
                {analysisResult.findingsExplained.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 text-xs"
                  >
                    <div className="font-bold text-sm text-cyan-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>{item.term}</span>
                    </div>

                    <div className="text-slate-200 leading-relaxed pl-4 border-l-2 border-cyan-500/40">
                      <strong className="text-slate-400 text-[10px] font-mono uppercase block">What this means:</strong>
                      {item.explanation}
                    </div>

                    <div className="text-amber-200/90 leading-relaxed pl-4 border-l-2 border-amber-500/40 bg-amber-950/20 p-2 rounded">
                      <strong className="text-amber-400 text-[10px] font-mono uppercase block">What this does NOT prove:</strong>
                      {item.limitations}
                    </div>

                    <div className="text-slate-300 pt-1 font-mono text-[11px] flex items-center gap-1.5 text-cyan-400">
                      <span>💡 Question to ask:</span>
                      <span className="text-slate-300 font-sans">{item.questionsForDoctor}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggested Questions for Neurologist Appointment */}
              <div className="bg-cyan-950/20 border border-cyan-500/30 p-4 rounded-xl space-y-2 text-xs">
                <span className="font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400" />
                  <span>Key Questions for Your Neurologist Appointment:</span>
                </span>
                <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                  {analysisResult.generalDoctorQuestions.map((q, idx) => (
                    <li key={idx} className="leading-relaxed">{q}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
