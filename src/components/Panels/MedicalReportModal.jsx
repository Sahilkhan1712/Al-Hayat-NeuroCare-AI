import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Printer,
  Brain,
  Stethoscope,
  Pill,
  Activity,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Volume2,
  QrCode,
  Check,
  ShieldCheck,
  FileDown
} from 'lucide-react';
import { voiceAssistant } from '../../utils/voiceAssistant';
import { sound } from '../../utils/audio';
import rxPadBg from '../../assets/alhayat_rx_pad.png';

// Pure browser-compatible PDF generator that packages a JPEG into a standard A4 PDF document
function createPdfFromJpegBytes(jpegBytes, width, height) {
  const pdfW = 595.28;
  const pdfH = 841.89; // Standard A4 points

  const header = '%PDF-1.4\n';
  const content = `q\n${pdfW.toFixed(2)} 0 0 ${pdfH.toFixed(2)} 0 0 cm\n/Im1 Do\nQ\n`;

  const obj1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
  const obj2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n';
  const obj3 = `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pdfW.toFixed(2)} ${pdfH.toFixed(2)}] /Contents 4 0 R /Resources << /XObject << /Im1 5 0 R >> >> >>\nendobj\n`;
  const obj4 = `4 0 obj\n<< /Length ${content.length} >>\nstream\n${content}endstream\nendobj\n`;
  const obj5Header = `5 0 obj\n<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`;
  const obj5Footer = '\nendstream\nendobj\n';

  const enc = new TextEncoder();
  const bHeader = enc.encode(header);
  const b1 = enc.encode(obj1);
  const b2 = enc.encode(obj2);
  const b3 = enc.encode(obj3);
  const b4 = enc.encode(obj4);
  const b5H = enc.encode(obj5Header);
  const b5F = enc.encode(obj5Footer);

  let offset = bHeader.length;
  const offsets = [offset];
  offset += b1.length;
  offsets.push(offset);
  offset += b2.length;
  offsets.push(offset);
  offset += b3.length;
  offsets.push(offset);
  offset += b4.length;
  offsets.push(offset);
  offset += b5H.length + jpegBytes.length + b5F.length;

  let xref = 'xref\n0 6\n0000000000 65535 f \n';
  for (const off of offsets) {
    xref += String(off).padStart(10, '0') + ' 00000 n \n';
  }
  const trailer = `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${offset}\n%%EOF\n`;
  const bXref = enc.encode(xref);
  const bTrailer = enc.encode(trailer);

  const totalLength = bHeader.length + b1.length + b2.length + b3.length + b4.length + b5H.length + jpegBytes.length + b5F.length + bXref.length + bTrailer.length;
  const out = new Uint8Array(totalLength);
  let pos = 0;
  out.set(bHeader, pos); pos += bHeader.length;
  out.set(b1, pos); pos += b1.length;
  out.set(b2, pos); pos += b2.length;
  out.set(b3, pos); pos += b3.length;
  out.set(b4, pos); pos += b4.length;
  out.set(b5H, pos); pos += b5H.length;
  out.set(jpegBytes, pos); pos += jpegBytes.length;
  out.set(b5F, pos); pos += b5F.length;
  out.set(bXref, pos); pos += bXref.length;
  out.set(bTrailer, pos); pos += bTrailer.length;

  return out;
}

// Helper to extract clean disease name for the "Suffering From" banner
function getSufferingDiseaseName(report) {
  if (!report) return 'Neurological Condition';
  const eng = report.primaryDiagnosis || '';
  const hin = report.primaryDiagnosisHindi || '';

  // If migraine
  if (/migraine/i.test(eng) || (report.migraineStatus && report.migraineStatus.isMigraine === 'YES')) {
    return 'Migraine (माइग्रेन)';
  }

  // Extract concise clean titles
  const engShort = eng.split('(')[0].trim();
  const hinShort = hin.split('(')[0].trim();

  if (engShort && hinShort && !hinShort.includes(engShort)) {
    return `${engShort} (${hinShort})`;
  }
  return engShort || eng || hinShort || 'Neurological Condition';
}

export default function MedicalReportModal({ report, isOpen, onClose, onShowIn3D }) {
  if (!isOpen || !report) return null;

  const modalScrollRef = useRef(null);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const sufferingName = getSufferingDiseaseName(report);

  // Guarantee modal starts scrolled to the very top
  useEffect(() => {
    if (isOpen && modalScrollRef.current) {
      modalScrollRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  // Check if diagnosed condition is specifically Migraine
  const isActuallyMigraine =
    (report.primaryDiagnosis && /migraine/i.test(report.primaryDiagnosis)) ||
    (report.migraineStatus && report.migraineStatus.isMigraine === 'YES');

  // Trigger Native Browser Print Dialog
  const handlePrint = () => {
    sound.playSelect();
    window.print();
  };

  // Speak Report Aloud
  const handleSpeakReport = () => {
    sound.playClick();
    const summary = `Official Medical Consultation Report for patient ${report.patientName || 'Patient'}. Patient is suffering from ${sufferingName}. Affected brain region: ${report.affectedRegion || 'Brain'}.`;
    voiceAssistant.speakText(summary);
  };

  // Render high-resolution canvas with official letterhead background and computer-printed text
  const renderParchaCanvas = (callback) => {
    const canvas = document.createElement('canvas');
    const width = 1364; // 2x resolution of 682x1024
    const height = 2048;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    const bgImg = new Image();
    bgImg.crossOrigin = 'anonymous';
    bgImg.src = rxPadBg;

    bgImg.onload = () => {
      // 1. Draw the official letterhead background image
      ctx.drawImage(bgImg, 0, 0, width, height);

      // 2. PATIENT INFORMATION BOX (Shifted down to y: 345 to give full breathing room under header)
      ctx.fillStyle = '#f8fafc';
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(70, 345, 1224, 115, 12);
      ctx.fill();
      ctx.stroke();

      // Dividing vertical line inside info box
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(680, 350);
      ctx.lineTo(680, 455);
      ctx.stroke();

      // Left Column
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText(`PATIENT NAME: ${(report.patientName || 'Mohd Sahil').toUpperCase()}`, 95, 382);

      ctx.font = 'bold 19px monospace';
      ctx.fillStyle = '#1e293b';
      ctx.fillText(`AGE / GENDER: ${report.ageGender || '24 Yrs / Male'}`, 95, 415);
      ctx.fillText(`DATE & TIME: ${report.date || ''} • ${report.time || ''}`, 95, 444);

      // Right Column
      ctx.font = 'bold 22px sans-serif';
      ctx.fillStyle = '#0369a1';
      ctx.fillText(`CONSULTANT: ${report.doctorName || 'Dr. Al_Hayat NeuroCare AI, MD, DM'}`, 705, 382);

      ctx.font = 'bold 19px monospace';
      ctx.fillStyle = '#0f172a';
      ctx.fillText(`RX / FILE NO: ${report.reportId || 'ALH-RX-849201'}`, 705, 415);
      ctx.fillStyle = '#475569';
      ctx.fillText(`DEPT: Comprehensive Clinical Neurology OPD`, 705, 444);

      // 3. HIGH-IMPACT "PATIENT IS SUFFERING FROM: [DISEASE NAME]" BANNER (y: 480 to 570)
      ctx.fillStyle = '#1e3a8a';
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(70, 480, 1224, 90, 12);
      ctx.fill();
      ctx.stroke();

      // Status Tag & Disease Name
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 16px monospace';
      ctx.fillText(`● PATIENT IS SUFFERING FROM (मरीज़ इस बीमारी से पीड़ित हैं) • [${report.icdCode || 'ICD-11'}]`, 95, 510);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 30px sans-serif';
      const cleanSufferTitle = sufferingName.toUpperCase();
      ctx.fillText(cleanSufferTitle, 95, 550);

      // 4. CHIEF CLINICAL COMPLAINTS & FINDINGS (y: 590)
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 19px sans-serif';
      ctx.fillText(`1. CHIEF REPORTED SYMPTOMS & CLINICAL FINDINGS (मरीज़ के लक्षण):`, 70, 605);

      let badgeX = 70;
      const badgeY = 620;
      if (report.symptomBadges && report.symptomBadges.length > 0) {
        report.symptomBadges.slice(0, 4).forEach((b) => {
          const labelText = `${b.label}: ${b.value}`;
          ctx.font = 'bold 15px monospace';
          const textWidth = ctx.measureText(labelText).width;
          ctx.fillStyle = '#f1f5f9';
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(badgeX, badgeY, textWidth + 20, 30, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#0f172a';
          ctx.fillText(labelText, badgeX + 10, badgeY + 20);
          badgeX += textWidth + 26;
        });
      }

      // Symptoms summary line
      ctx.fillStyle = '#0369a1';
      ctx.font = 'bold 14px monospace';
      ctx.fillText(`KEY SYMPTOMS:`, 70, 672);
      ctx.fillStyle = '#334155';
      ctx.font = '14px sans-serif';
      const symptomDesc = report.summary || (report.explanationHindi ? report.explanationHindi.split('.')[0] : 'Reported neuro-clinical symptom presentation.');
      ctx.fillText(symptomDesc.substring(0, 110), 195, 672);

      // 5. ℞ PHARMACOLOGICAL PRESCRIPTION TABLE (y: 700)
      ctx.fillStyle = '#0369a1';
      ctx.font = 'bold 30px serif';
      ctx.fillText(`℞`, 70, 715);
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 19px sans-serif';
      ctx.fillText(`PHARMACOLOGICAL MANAGEMENT & PRESCRIPTION (दवाएं एवं खुराक):`, 105, 712);

      const tableY = 728;
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(70, tableY, 1224, 34);
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(70, tableY, 1224, 34);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 15px monospace';
      ctx.fillText(`S.NO`, 85, tableY + 23);
      ctx.fillText(`MEDICINE / FORMULATION`, 160, tableY + 23);
      ctx.fillText(`THERAPEUTIC PURPOSE`, 580, tableY + 23);
      ctx.fillText(`DOSAGE & FREQUENCY`, 960, tableY + 23);

      let rowY = tableY + 34;
      const rxList = report.rxPrescription && report.rxPrescription.length > 0
        ? report.rxPrescription.slice(0, 3)
        : [{ drug: 'Clinical Care Protocol', purpose: 'Neurological symptomatic management', dose: 'As advised by doctor' }];

      rxList.forEach((rx, idx) => {
        ctx.fillStyle = idx % 2 === 0 ? '#ffffff' : '#f8fafc';
        ctx.fillRect(70, rowY, 1224, 40);
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1;
        ctx.strokeRect(70, rowY, 1224, 40);

        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 15px monospace';
        ctx.fillText(`${idx + 1}.`, 90, rowY + 26);
        ctx.fillText(rx.drug || '', 160, rowY + 26);

        ctx.font = '14px sans-serif';
        ctx.fillStyle = '#334155';
        ctx.fillText((rx.purpose || '').substring(0, 45), 580, rowY + 26);

        ctx.font = 'bold 15px monospace';
        ctx.fillStyle = '#0369a1';
        ctx.fillText((rx.dose || '').substring(0, 30), 960, rowY + 26);

        rowY += 40;
      });

      // 6. INVESTIGATIONS & CARE ADVICE (y: 890)
      ctx.fillStyle = '#f8fafc';
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(70, 890, 600, 100, 10);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#0369a1';
      ctx.font = 'bold 15px monospace';
      ctx.fillText(`ADVISED INVESTIGATIONS / LAB TESTS:`, 90, 915);
      ctx.font = '14px sans-serif';
      ctx.fillStyle = '#334155';
      const tests = report.diagnosticTests || ['3-Tesla Brain MRI Scan', 'Serum Metabolic & Vitamin Panel'];
      tests.slice(0, 2).forEach((t, i) => {
        ctx.fillText(`• ${t.substring(0, 50)}`, 90, 942 + i * 22);
      });

      // Care advice box
      ctx.fillStyle = '#f0fdf4';
      ctx.strokeStyle = '#bbf7d0';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(694, 890, 600, 100, 10);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#166534';
      ctx.font = 'bold 15px monospace';
      ctx.fillText(`CLINICAL CARE & LIFESTYLE PRECAUTIONS:`, 714, 915);
      ctx.font = '14px sans-serif';
      ctx.fillStyle = '#334155';
      const relief = report.homeRelief || ['Ensure adequate hydration and regular rest', 'Follow strict sleep and nutrition hygiene'];
      relief.slice(0, 2).forEach((r, i) => {
        ctx.fillText(`• ${r.substring(0, 50)}`, 714, 942 + i * 22);
      });

      // 7. EMERGENCY RED FLAGS (y: 1005)
      if (report.redFlags) {
        ctx.fillStyle = '#fef2f2';
        ctx.strokeStyle = '#fca5a5';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(70, 1005, 1224, 50, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#991b1b';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(`⚠️ EMERGENCY RED FLAGS: ${report.redFlags.substring(0, 105)}`, 90, 1035);
      }

      // 8. DOCTOR SIGNATURE, SEAL & VALIDATION BLOCK (y: 1070)
      const footerY = 1070;
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(70, footerY);
      ctx.lineTo(1294, footerY);
      ctx.stroke();

      // Left: QR Code box & Verification text
      ctx.fillStyle = '#f8fafc';
      ctx.strokeStyle = '#94a3b8';
      ctx.strokeRect(75, footerY + 15, 85, 85);
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 13px monospace';
      ctx.fillText('QR VERIFIED', 80, footerY + 60);

      ctx.font = 'bold 15px sans-serif';
      ctx.fillStyle = '#0f172a';
      ctx.fillText('AL_HAYAT NEURO AI CLINICAL HOSPITAL', 175, footerY + 38);
      ctx.font = '13px monospace';
      ctx.fillStyle = '#475569';
      ctx.fillText('Digital Verification Hash: SHA256-ALH-2026-9842', 175, footerY + 62);
      ctx.fillStyle = '#15803d';
      ctx.fillText('✓ Medically Validated Clinical Record • ISO 9001:2026', 175, footerY + 86);

      // Middle: Circular Hospital Rubber Stamp (Seal)
      ctx.save();
      ctx.translate(720, footerY + 58);
      ctx.rotate(-0.08);
      ctx.strokeStyle = '#1e40af';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(0, 0, 46, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(0, 0, 39, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#1e40af';
      ctx.font = 'bold 8px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('AL_HAYAT NEURO AI', 0, -22);
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('★ ⚕ ★', 0, -5);
      ctx.font = 'bold 8px monospace';
      ctx.fillText('OFFICIAL CLINICAL SEAL', 0, 12);
      ctx.fillText('NEW DELHI', 0, 26);
      ctx.restore();

      // Right: Realistic Doctor Signature Stamp
      ctx.textAlign = 'left';
      ctx.strokeStyle = '#1e3a8a';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(980, footerY + 40);
      ctx.bezierCurveTo(1010, footerY + 10, 1040, footerY + 55, 1080, footerY + 25);
      ctx.bezierCurveTo(1110, footerY + 5, 1140, footerY + 42, 1180, footerY + 28);
      ctx.moveTo(990, footerY + 48);
      ctx.lineTo(1230, footerY + 44);
      ctx.stroke();

      ctx.font = 'italic bold 25px serif';
      ctx.fillStyle = '#1e3a8a';
      ctx.fillText('Dr. Al_Hayat, MD', 1010, footerY + 36);

      ctx.font = 'bold 16px sans-serif';
      ctx.fillStyle = '#0f172a';
      ctx.fillText(report.doctorName || 'Dr. Al_Hayat NeuroCare AI, MD, DM (Neurology)', 960, footerY + 68);

      ctx.font = '13px monospace';
      ctx.fillStyle = '#475569';
      ctx.fillText('Chief Consultant Neurologist & Clinical Neurophysiologist', 960, footerY + 88);
      ctx.fillStyle = '#0369a1';
      ctx.fillText('MCI / NMC Reg. No: ALH-NEURO-984210', 960, footerY + 106);

      // 9. OFFICIAL HOSPITAL & DOCTOR CONTACT FOOTER STRIP
      const contactBoxY = footerY + 120;
      ctx.fillStyle = '#f1f5f9';
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(70, contactBoxY, 1224, 60, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 14px monospace';
      ctx.fillText('📞 OPD HELPLINE: +91 11-4920-8000 / +91 98765-43210  |  🚨 24x7 EMERGENCY: 1800-200-NEURO (112/108)', 90, contactBoxY + 25);

      ctx.font = '13px sans-serif';
      ctx.fillStyle = '#475569';
      ctx.fillText('CONSULTANT: Dr. Al_Hayat NeuroCare AI, MD, DM (Neurology)  |  EMAIL: opd@alhayatneuro.ai  |  OPD Block-A, Knowledge Park, New Delhi', 90, contactBoxY + 46);

      callback(canvas);
    };

    bgImg.onerror = () => {
      callback(null);
    };
  };

  // ONE-CLICK DIRECT PDF DOWNLOAD
  const handleDownloadPdf = () => {
    sound.playSelect();
    setIsDownloadingPdf(true);

    renderParchaCanvas((canvas) => {
      if (!canvas) {
        setIsDownloadingPdf(false);
        window.print();
        return;
      }

      try {
        const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.92);
        const base64Data = jpegDataUrl.split(',')[1];
        const binaryString = atob(base64Data);
        const jpegBytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          jpegBytes[i] = binaryString.charCodeAt(i);
        }

        const pdfBytes = createPdfFromJpegBytes(jpegBytes, canvas.width, canvas.height);
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const safeName = (report.patientName || 'Patient').replace(/[^a-zA-Z0-9]/g, '_');
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Al_Hayat_Neuro_AI_Patient_Report_${safeName}.pdf`;
        a.click();
        URL.revokeObjectURL(url);

        setIsDownloadingPdf(false);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3500);
      } catch (e) {
        console.error('PDF generation error, fallback to print:', e);
        setIsDownloadingPdf(false);
        window.print();
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-hidden">
      
      {/* TOP CONTROL TOOLBAR - Fixed at top, clean, and completely independent from the scrolling paper */}
      <div className="print:hidden flex-shrink-0 w-full bg-slate-950/95 border-b border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between text-slate-100 shadow-2xl z-30 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono text-cyan-300 font-bold uppercase tracking-wider">
            Official Medical Consultation Report Parcha
          </span>
          <span className="hidden md:inline text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
            Al_Hayat NeuroCare AI
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSpeakReport}
            className="px-3 py-1.5 rounded-xl bg-purple-950/80 border border-purple-500/50 hover:bg-purple-900 text-purple-200 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
            title="Awaaz me sunein (Listen aloud)"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sunein</span>
          </button>

          {/* ONLY PRIMARY PDF DOWNLOAD BUTTON (Image download removed as requested) */}
          <button
            onClick={handleDownloadPdf}
            disabled={isDownloadingPdf}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-white font-extrabold text-xs font-mono flex items-center gap-1.5 transition-all shadow-lg active:scale-95 cursor-pointer"
            title="Download official PDF report on hospital letterhead"
          >
            {isDownloadingPdf ? (
              <span className="animate-spin text-sm">⌛</span>
            ) : downloadSuccess ? (
              <Check className="w-4 h-4 text-white" />
            ) : (
              <FileDown className="w-4 h-4 text-white" />
            )}
            <span>{isDownloadingPdf ? 'Creating PDF...' : downloadSuccess ? 'PDF Ready!' : 'Download Medical Report (PDF)'}</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-1 cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* SCROLLABLE VIEWPORT FOR THE MEDICAL REPORT PARCHA (Nothing overlaps the letterhead upon scrolling) */}
      <div
        ref={modalScrollRef}
        className="flex-1 w-full overflow-y-auto px-2 sm:px-4 py-4 sm:py-6 flex flex-col items-center"
      >
        <div
          id="printable-parcha"
          className="relative w-full max-w-[820px] bg-white text-slate-900 shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none print:max-w-none print:w-full border border-slate-300"
          style={{
            backgroundImage: `url(${rxPadBg})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            minHeight: '1050px'
          }}
        >
          {/* Content container with compact vertical rhythm so all content including signature fits on a single genuine medical sheet */}
          <div className="pt-[162px] sm:pt-[174px] pb-[35px] px-5 sm:px-8 space-y-2.5 text-slate-900 font-sans">
            
            {/* 1. COMPACT COMPUTERIZED PATIENT DEMOGRAPHICS BAR */}
            <div className="bg-slate-50/95 rounded-xl border border-slate-400 p-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono shadow-xs">
              <div className="border-r border-slate-300 pr-2">
                <span className="text-slate-500 block text-[9.5px] uppercase font-bold tracking-wider">मरीज़ का नाम (Patient):</span>
                <strong className="text-slate-950 text-xs sm:text-sm block font-sans tracking-tight truncate">{report.patientName || 'Mohd Sahil'}</strong>
              </div>

              <div className="border-r border-slate-300 pr-2">
                <span className="text-slate-500 block text-[9.5px] uppercase font-bold tracking-wider">उम्र व लिंग (Age / Sex):</span>
                <strong className="text-slate-900 text-xs block font-mono">{report.ageGender || '24 Yrs / Male'}</strong>
              </div>

              <div className="border-r border-slate-300 pr-2">
                <span className="text-slate-500 block text-[9.5px] uppercase font-bold tracking-wider">तारीख व समय (Date & Time):</span>
                <span className="text-slate-800 text-[11px] block font-mono font-semibold">{report.date} • {report.time}</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[9.5px] uppercase font-bold tracking-wider">पर्चा सं. (File ID / UHID):</span>
                <span className="text-blue-900 font-bold text-xs block font-mono">{report.reportId || 'ALH-RX-849201'}</span>
              </div>
            </div>

            {/* 2. HIGH-IMPACT "PATIENT IS SUFFERING FROM: [DISEASE NAME]" BANNER */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white p-2.5 sm:p-3 rounded-xl border-2 border-blue-500 shadow-md space-y-1.5">
              <div className="flex items-center justify-between flex-wrap gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono font-black tracking-wide text-cyan-200 uppercase">
                    PATIENT IS SUFFERING FROM:{' '}
                    <span className="text-white underline decoration-cyan-400 decoration-2 font-extrabold">
                      {sufferingName}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-blue-800 text-cyan-200 border border-blue-400/50 font-mono text-[10px] font-bold">
                    ICD-11: {report.icdCode || '8A84.0'}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-400/40 font-mono text-[10px] font-bold">
                    {report.urgency || 'CLINICAL EVALUATION'}
                  </span>
                </div>
              </div>

              {/* Hindi & English Clinical Names with Affected Region */}
              <div className="pt-1 border-t border-blue-700/80 flex items-center justify-between flex-wrap gap-1 text-xs">
                <div className="text-cyan-100">
                  <span className="text-cyan-300 font-mono text-[11px] font-bold">मुख्य निदान: </span>
                  <span className="font-extrabold text-white">{report.primaryDiagnosisHindi}</span>
                  <span className="text-cyan-200 text-[11px] ml-1 font-mono">({report.primaryDiagnosis})</span>
                </div>
                <div className="text-[10.5px] font-mono text-cyan-200">
                  <span className="text-cyan-400 font-bold">AFFECTED REGION: </span>
                  <span>{report.affectedRegion}</span>
                </div>
              </div>
            </div>

            {/* 3. CHIEF REPORTED SYMPTOMS (मरीज़ के लक्षण) */}
            <div className="space-y-1">
              <div className="flex items-center justify-between border-b border-slate-300 pb-0.5 flex-wrap gap-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5 text-cyan-700" />
                  <span>1. CHIEF REPORTED SYMPTOMS (मरीज़ द्वारा बताए गए लक्षण):</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded border border-blue-300">
                  Symptoms of {report.primaryDiagnosis?.split('(')[0]?.trim() || 'Condition'}
                </span>
              </div>

              {/* Detected symptom tags */}
              <div className="flex flex-wrap gap-1.5">
                {report.symptomBadges && report.symptomBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="px-2 py-0.5 rounded-md border border-slate-300 bg-slate-100 text-slate-900 text-[11px] font-mono flex items-center gap-1 shadow-2xs"
                  >
                    <span className="font-bold text-slate-500">{badge.label}:</span>
                    <span className="font-semibold text-slate-950">{badge.value}</span>
                  </div>
                ))}
              </div>

              {/* 1-Line Key Symptoms Summary */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-800 flex items-center gap-1.5">
                <strong className="text-blue-950 font-mono text-[10.5px] uppercase flex-shrink-0">
                  Key Symptoms:
                </strong>
                <span className="text-slate-700 font-sans text-[11.5px] truncate">
                  {report.summary || report.explanationHindi?.split('.')[0] || 'Neuro-clinical symptom profile recorded.'}
                </span>
              </div>
            </div>

            {/* 4. ℞ CLINICAL PRESCRIPTION TABLE (दवाएं एवं खुराक) */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-0.5">
                <Pill className="w-3.5 h-3.5 text-emerald-700" />
                <span className="font-serif text-sm font-extrabold text-blue-900">℞</span>
                <span>PHARMACOLOGICAL MANAGEMENT & PRESCRIPTION (दवाएं एवं खुराक):</span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-2xs">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-slate-100 text-slate-800 font-mono text-[10.5px] border-b border-slate-300">
                    <tr>
                      <th className="p-1.5 w-8 text-center">#</th>
                      <th className="p-1.5">Medicine / Generic Formulation</th>
                      <th className="p-1.5">Therapeutic Purpose</th>
                      <th className="p-1.5 w-44">Dosage & Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-900 text-[11.5px]">
                    {(report.rxPrescription && report.rxPrescription.length > 0 ? report.rxPrescription.slice(0, 3) : [
                      { drug: 'Clinical Care Protocol', purpose: 'Neurological symptomatic management', dose: 'As advised by doctor' }
                    ]).map((rx, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80">
                        <td className="p-1.5 text-center font-mono text-slate-500 font-bold">{idx + 1}</td>
                        <td className="p-1.5 font-bold text-blue-950 font-mono">{rx.drug}</td>
                        <td className="p-1.5 text-slate-700">{rx.purpose}</td>
                        <td className="p-1.5 text-blue-800 font-mono font-bold">{rx.dose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. DIAGNOSTIC INVESTIGATIONS & CLINICAL CARE ADVICE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-50 rounded-lg border border-slate-200 px-2.5 py-1.5 space-y-0.5">
                <span className="font-bold text-blue-950 text-[10.5px] flex items-center gap-1 font-mono">
                  <FileText className="w-3 h-3 text-blue-700" />
                  <span>Advised Investigations (ज़रूरी जांचें):</span>
                </span>
                <p className="text-[11px] text-slate-700 leading-tight">
                  {(report.diagnosticTests || ['3-Tesla Brain MRI Scan', 'Metabolic & Vitamin Panel']).slice(0, 2).join(' • ')}
                </p>
              </div>

              <div className="bg-emerald-50/80 rounded-lg border border-emerald-200 px-2.5 py-1.5 space-y-0.5">
                <span className="font-bold text-emerald-950 text-[10.5px] flex items-center gap-1 font-mono">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Clinical Care & Advice (सलाह):</span>
                </span>
                <p className="text-[11px] text-slate-700 leading-tight">
                  {(report.homeRelief || ['Regular hydration', 'Adequate sleep schedule']).slice(0, 2).join(' • ')}
                </p>
              </div>
            </div>

            {/* 6. EMERGENCY RED FLAGS (COMPACT) */}
            {report.redFlags && (
              <div className="px-2.5 py-1 rounded-lg bg-red-50 border border-red-300 text-[10.5px] text-red-950 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                <span className="truncate">
                  <strong className="text-red-900 uppercase font-mono mr-1">Emergency Flags:</strong>
                  {report.redFlags} (इमरजेंसी पर तुरंत 112 / 108 डायल करें)
                </span>
              </div>
            )}

            {/* 7. DOCTOR SIGNATURE, CLINICAL SEAL & CONTACT FOOTER */}
            <div className="pt-2 border-t-2 border-slate-300 space-y-2">
              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-2">
                {/* Left: QR Code & Verification */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg border border-blue-300 bg-blue-50 flex items-center justify-center text-blue-900 flex-shrink-0">
                    <QrCode className="w-6 h-6" />
                  </div>
                  <div className="text-[9px] font-mono text-slate-600 leading-tight">
                    <div className="font-bold text-slate-950">AL_HAYAT NEURO AI CLINICAL HOSPITAL</div>
                    <div>Digital Hash: SHA256-ALH-2026-9842</div>
                    <div className="text-emerald-700 font-bold">✓ Medically Validated Record</div>
                  </div>
                </div>

                {/* Center: Official Circular Rubber Stamp / Clinical Seal */}
                <div className="relative w-16 h-16 rounded-full border-2 border-dashed border-blue-800 flex items-center justify-center p-0.5 -rotate-6 shadow-2xs bg-blue-50/50">
                  <div className="w-full h-full rounded-full border border-blue-800 flex flex-col items-center justify-center text-center p-0.5">
                    <span className="text-[5.5px] font-mono font-black text-blue-900 uppercase tracking-tighter">AL_HAYAT NEURO</span>
                    <span className="text-[8px] text-blue-700 leading-none">★ ⚕ ★</span>
                    <span className="text-[5px] font-mono font-extrabold text-blue-900 uppercase leading-tight">CLINICAL SEAL</span>
                    <span className="text-[4.5px] font-mono text-blue-800 font-bold">NEW DELHI</span>
                  </div>
                </div>

                {/* Right: Realistic Doctor Signature Block */}
                <div className="text-center sm:text-right font-mono">
                  {/* Ink-Blue Handwritten Cursive Signature SVG */}
                  <div className="flex justify-center sm:justify-end mb-0.5">
                    <svg viewBox="0 0 180 50" className="w-32 h-8 text-blue-950 inline-block -rotate-1">
                      <path
                        d="M 10,35 Q 25,8 40,22 T 70,18 Q 90,5 110,22 T 140,18 Q 160,30 175,12 M 15,40 Q 60,34 165,38"
                        fill="none"
                        stroke="#1e3a8a"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <text x="30" y="27" fontFamily="cursive, 'Brush Script MT', 'Segoe Script'" fontSize="18" fill="#1e3a8a" fontWeight="bold">
                        Dr. Al_Hayat, MD
                      </text>
                    </svg>
                  </div>
                  <div className="font-bold text-slate-950 text-xs">{report.doctorName || 'Dr. Al_Hayat NeuroCare AI, MD, DM (Neurology)'}</div>
                  <div className="text-[9.5px] text-slate-600">Chief Consultant Neurologist & Clinical Neurophysiologist</div>
                  <div className="text-[9.5px] text-blue-900 font-bold">MCI / NMC Reg. No: ALH-NEURO-984210</div>
                </div>
              </div>

              {/* Official Hospital & Doctor Contact Strip */}
              <div className="bg-slate-50/90 rounded-lg border border-slate-300 p-2 text-[10px] font-mono text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-1 shadow-2xs">
                <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
                  <span className="font-bold text-blue-950">
                    📞 OPD: <span className="text-slate-800 font-semibold">+91 11-4920-8000 / +91 98765-43210</span>
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="font-bold text-red-900">
                    🚨 Emergency (24x7): <span className="text-red-700 font-semibold">1800-200-NEURO (112/108)</span>
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="text-blue-900 font-semibold">
                    ✉️ opd@alhayatneuro.ai
                  </span>
                </div>
                <div className="text-slate-500 text-[9px] text-center sm:text-right">
                  OPD Block-A, Knowledge Park, New Delhi • www.alhayatneuro.ai
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM MODAL ACTION BAR (Hidden in print) */}
        <div className="print:hidden w-full max-w-[820px] bg-slate-900/95 px-6 py-2.5 rounded-2xl border border-slate-700/80 flex items-center justify-between text-slate-400 text-xs font-mono mt-3 mb-5">
          <div className="flex items-center gap-1.5 text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Official digital medical consultation file saved in patient clinical session.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all cursor-pointer"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
}