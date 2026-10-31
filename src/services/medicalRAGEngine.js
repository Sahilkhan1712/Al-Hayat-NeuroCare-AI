// NeuroCare AI — Advanced Clinical Retrieval-Augmented Generation (RAG) & Multilingual Medical Engine
// Adheres strictly to WHO ICD-11, NINDS, NIMH, MedlinePlus, NHS, and ICHD-3 standards.
// Implements strict non-diagnostic patient safety, emergency triage, and traceable source verification.

import { ALL_VERIFIED_DISEASES, getDiseaseById } from '../data/medicalKnowledgeRegistry.js';

// Emergency Helplines
export const CRISIS_HOTLINES = {
  teleManas: { name: 'Tele-MANAS (Govt of India)', number: '14416 / 1800-891-4416', note: '24x7 Free & Confidential (20+ Languages)' },
  kiran: { name: 'KIRAN Mental Health Helpline', number: '1800-599-0019', note: '24x7 National Helpline' },
  lifeline988: { name: '988 Suicide & Crisis Lifeline', number: '988', note: '24x7 Free Support (US/Canada/International)' },
  nationalEmergency: { name: 'National Emergency Ambulance', number: '112 / 108', note: 'Immediate Emergency Medical Response' }
};

// 1. Multilingual Language Detection
export function detectLanguage(text) {
  if (!text || typeof text !== 'string') return 'en';
  const clean = text.trim();

  // Explicit language request in prompt (e.g. "in simple Hinglish")
  if (/\bhinglish\b/i.test(clean)) {
    return 'hinglish';
  }
  if (/\b(in hindi|hindi me|hindi mein)\b/i.test(clean)) {
    return 'hi';
  }
  if (/\b(in urdu|urdu me|urdu mein)\b/i.test(clean)) {
    return 'ur';
  }

  // Urdu script detection (Arabic range)
  if (/[\u0600-\u06FF]/.test(clean)) {
    return 'ur';
  }

  // Devanagari Hindi script
  if (/[\u0900-\u097F]/.test(clean)) {
    return 'hi';
  }

  // Bengali script
  if (/[\u0980-\u09FF]/.test(clean)) {
    return 'bn';
  }

  // Hinglish detection (Romanized conversational Hindi / Urdu words)
  const hinglishTokens = [
    'mujhe', 'mere', 'meri', 'mera', 'hoga', 'hogi', 'hota', 'hoti', 'hote', 'hai', 'hain',
    'dard', 'sar', 'sir', 'me', 'mein', 'kya', 'batao', 'batayein', 'samjhao', 'chubhan',
    'chubh', 'jaisa', 'jaisi', 'subah', 'se', 'ulti', 'chakkar', 'kamzori', 'aana', 'rehta',
    'lagta', 'ruk', 'ghabrahat', 'bechaini', 'neend', 'aankh', 'gardan', 'bimari', 'karein',
    'karen', 'bhi', 'tha', 'thi', 'the', 'suno', 'doctor', 'sahab'
  ];

  const lower = clean.toLowerCase();
  const words = lower.split(/[^a-zA-Z]+/);
  let hinglishCount = 0;
  for (const w of words) {
    if (hinglishTokens.includes(w)) {
      hinglishCount++;
    }
  }

  if (hinglishCount >= 2 || (words.length <= 5 && hinglishCount >= 1)) {
    return 'hinglish';
  }

  return 'en';
}

// 2. Emergency & Crisis Triage Detector
export function evaluateEmergencyTriage(text) {
  const lower = text.toLowerCase();

  // A. Mental health self-harm / suicide emergency
  const suicideTokens = [
    'suicide', 'kill myself', 'end my life', 'khudkushi', 'jaan dena', 'marna chahta',
    'marna chahti', 'aatmahatya', 'die by suicide', 'want to die', 'self harm', 'khud ko nuksan'
  ];
  if (suicideTokens.some(tok => lower.includes(tok)) || /خودکشی|مرنا چاہتا/.test(text)) {
    return {
      isEmergency: true,
      emergencyType: 'MENTAL_HEALTH_CRISIS',
      urgencyLabel: '🚨 IMMEDIATE CRISIS INTERVENTION REQUIRED',
      messageTitle: 'You Are Not Alone — Immediate Help is Available',
      helplines: [
        CRISIS_HOTLINES.teleManas,
        CRISIS_HOTLINES.kiran,
        CRISIS_HOTLINES.lifeline988,
        CRISIS_HOTLINES.nationalEmergency
      ],
      guidance: 'If you or someone you know is struggling with distressing thoughts or feelings of self-harm, please reach out to the 24x7 free and confidential crisis counselors right now. There are professionals ready to support you.'
    };
  }

  // B. Acute Stroke (FAST criteria)
  const strokeTokens = [
    'face droop', 'arm weak', 'slurred speech', 'sudden weakness', 'sudden paralysis',
    'chehra tedha', 'haath me achanak kamzori', 'bolne me dikkat', 'lakwa', 'falij',
    'stroke', 'fast criteria'
  ];
  if (strokeTokens.some(tok => lower.includes(tok)) || /فالج|چہرہ ٹیڑھا/.test(text)) {
    return {
      isEmergency: true,
      emergencyType: 'ACUTE_STROKE',
      urgencyLabel: '🚨 CRITICAL MEDICAL EMERGENCY: SUSPECTED ACUTE STROKE',
      messageTitle: 'Act FAST — Every Second Counts',
      helplines: [CRISIS_HOTLINES.nationalEmergency],
      guidance: 'Symptoms suggest possible acute cerebral ischemia or hemorrhage. Do NOT wait. Call 112 / 911 immediately. Thrombolysis is time-critical within 4.5 hours. Do NOT give aspirin, water, or food at home.'
    };
  }

  // C. Thunderclap Headache / Subarachnoid Hemorrhage
  const thunderclapTokens = [
    'thunderclap', 'worst headache of life', 'bomb phatne', 'sudden severe headache',
    '1 second me tez dard', 'explosive headache', 'sabse bhayanak sar dard'
  ];
  if (thunderclapTokens.some(tok => lower.includes(tok)) || /شدید ترین سر درد|اچانک شدید درد/.test(text)) {
    return {
      isEmergency: true,
      emergencyType: 'THUNDERCLAP_HEADACHE',
      urgencyLabel: '🚨 CRITICAL EMERGENCY: THUNDERCLAP HEADACHE (RULE OUT BRAIN BLEED)',
      messageTitle: 'Immediate Emergency Department Evaluation Required',
      helplines: [CRISIS_HOTLINES.nationalEmergency],
      guidance: 'A headache reaching maximum severity in under 1 minute requires an immediate emergency Non-contrast Head CT and clinical evaluation to rule out subarachnoid hemorrhage (ruptured aneurysm).'
    };
  }

  // D. Prolonged Seizure / Status Epilepticus
  const statusEpilepticusTokens = [
    'seizure > 5 min', 'seizure lasting 5 minutes', 'continuous seizure', '5 minute se lamba daura',
    'hosh nahi aaya aur dusra daura', 'non stop seizure'
  ];
  if (statusEpilepticusTokens.some(tok => lower.includes(tok))) {
    return {
      isEmergency: true,
      emergencyType: 'STATUS_EPILEPTICUS',
      urgencyLabel: '🚨 CRITICAL EMERGENCY: PROLONGED SEIZURE (STATUS EPILEPTICUS)',
      messageTitle: 'Call Emergency Ambulance (112 / 911) Immediately',
      helplines: [CRISIS_HOTLINES.nationalEmergency],
      guidance: 'Any continuous seizure lasting 5 minutes or longer will not stop on its own and risks permanent neuronal injury. Emergency medical intervention and IV medications are needed immediately.'
    };
  }

  return null;
}

// 3. Information Retrieval (IR) Engine
export function retrieveMedicalInformation(userQuery) {
  if (!userQuery || typeof userQuery !== 'string') {
    return { matchedDiseases: [], bestMatch: null, matchScore: 0 };
  }

  const queryLower = userQuery.toLowerCase();
  const queryTokens = queryLower.split(/[^a-zA-Z0-9\u0600-\u06FF\u0900-\u097F]+/).filter(Boolean);

  // Scoring every verified disease in knowledge registry
  const scored = ALL_VERIFIED_DISEASES.map(disease => {
    let score = 0;

    // A. Direct official name or alternative name match
    if (queryLower.includes(disease.official_name.toLowerCase())) {
      score += 150;
    }
    for (const alt of disease.alternative_names) {
      if (queryLower.includes(alt.toLowerCase())) {
        score += 80;
      }
    }

    // B. Search keywords match
    if (disease.search_keywords) {
      for (const kw of disease.search_keywords) {
        if (queryLower.includes(kw.toLowerCase())) {
          score += 45;
        }
      }
    }

    // C. Vernacular / Multilingual keyword matches
    if (disease.multilingual) {
      for (const lang of Object.keys(disease.multilingual)) {
        const trans = disease.multilingual[lang];
        if (trans.name && queryLower.includes(trans.name.toLowerCase())) {
          score += 60;
        }
        if (trans.summary) {
          const transTokens = trans.summary.toLowerCase().split(/\s+/);
          for (const qt of queryTokens) {
            if (qt.length >= 3 && transTokens.includes(qt)) {
              score += 10;
            }
          }
        }
      }
    }

    // D. Symptoms match
    for (const sym of disease.symptoms) {
      const symLower = sym.toLowerCase();
      for (const qt of queryTokens) {
        if (qt.length >= 4 && symLower.includes(qt)) {
          score += 8;
        }
      }
    }

    // E. Specific Differential & Intent Rules
    // Direct Migraine Query
    if (/\bmigraine|migrain|adhasisi|adhkapali\b/i.test(queryLower)) {
      if (disease.disease_id === 'migraine-without-aura') score += 250;
      if (disease.disease_id === 'migraine-with-aura') score += 200;
    }

    // Direct Stroke Query
    if (/\b(stroke|lakwa|falij|brain attack)\b/i.test(queryLower)) {
      if (disease.disease_id === 'acute-ischemic-stroke') score += 250;
    }

    // Left side head pain (unilateral cephalea) without limb weakness
    if (/left side (head|sar|sir)|sar ke baayein/i.test(queryLower) && !/arm|haath|speech|bolne/i.test(queryLower)) {
      if (disease.disease_id === 'migraine-without-aura') score += 180;
      if (disease.disease_id === 'primary-stabbing-headache') score += 80;
    }

    // If user says "sui chubhan" or "ice-pick" or "needle"
    if (/sui|needle|ice[- ]?pick|chubh|jabs/i.test(queryLower)) {
      if (disease.disease_id === 'primary-stabbing-headache') score += 300;
      if (disease.disease_id.includes('migraine')) score -= 50;
    }

    // If user asks about Alzheimer's
    if (/alzheimer|bhoolne|dementia|memory loss/i.test(queryLower)) {
      if (disease.disease_id === 'alzheimer-disease') score += 300;
    }

    // If user asks about Parkinson's
    if (/parkinson|haath kaapna|tremor|kampan|shaking/i.test(queryLower)) {
      if (disease.disease_id === 'parkinson-disease') score += 300;
    }

    // If user asks about Anxiety / Panic
    if (/anxiety|ghabrahat|chinta|panic|dil tez/i.test(queryLower)) {
      if (disease.disease_id === 'generalized-anxiety-disorder') score += 200;
      if (disease.disease_id === 'panic-disorder') score += 180;
    }

    // If user asks in Urdu for headache
    if (/سر میں درد|مائیگرین|آدھے سر کا درد/.test(queryLower)) {
      if (disease.disease_id === 'migraine-without-aura') score += 250;
      if (disease.disease_id === 'tension-type-headache') score += 150;
    }

    return { disease, score };
  });

  // Sort descending
  scored.sort((a, b) => b.score - a.score);

  const matched = scored.filter(s => s.score > 20).map(s => s.disease);
  const bestMatch = matched.length > 0 ? matched[0] : null;
  const matchScore = scored.length > 0 ? scored[0].score : 0;

  return {
    matchedDiseases: matched.slice(0, 3),
    bestMatch,
    matchScore
  };
}

// 4. RAG Source-Grounded Generator
// Synthesizes a safe, educational, source-backed explanation in the patient's language
export function generateRAGResponse(userQuery, userLangOverride = null) {
  const detectedLang = userLangOverride || detectLanguage(userQuery);
  const emergencyCheck = evaluateEmergencyTriage(userQuery);
  const retrieval = retrieveMedicalInformation(userQuery);
  const bestDisease = retrieval.bestMatch;

  return {
    query: userQuery,
    language: detectedLang,
    emergencyTriage: emergencyCheck,
    retrievedDisease: bestDisease,
    allMatches: retrieval.matchedDiseases,
    hasMatch: Boolean(bestDisease),
    formattedResponse: renderMultilingualExplanation(userQuery, detectedLang, bestDisease, emergencyCheck)
  };
}

// 5. Medical Formatter (Strict Safety Distinction)
function renderMultilingualExplanation(query, lang, disease, emergency) {
  // If emergency triage flagged
  if (emergency) {
    if (lang === 'hi') {
      return `⚠️ **आपातकालीन चेतावनी (Emergency Alert):**\n` +
        `**${emergency.urgencyLabel}**\n\n` +
        `${emergency.guidance}\n\n` +
        `📞 **तत्काल सहायता नंबर:**\n` +
        emergency.helplines.map(h => `- **${h.name}:** ${h.number} (${h.note})`).join('\n') +
        `\n\n*कृपया तुरंत आपातकालीन सेवाओं (112 / 108) से संपर्क करें।*`;
    } else if (lang === 'hinglish') {
      return `⚠️ **CRITICAL EMERGENCY ALERT:**\n` +
        `**${emergency.urgencyLabel}**\n\n` +
        `${emergency.guidance}\n\n` +
        `📞 **Immediate Emergency Helplines:**\n` +
        emergency.helplines.map(h => `- **${h.name}:** ${h.number} (${h.note})`).join('\n') +
        `\n\n*Kripya bina deri kiye turant 112 par call karein ya emergency department jayein.*`;
    } else if (lang === 'ur') {
      return `⚠️ **ہنگامی طبی انتباہ (Emergency Alert):**\n` +
        `**${emergency.urgencyLabel}**\n\n` +
        `${emergency.guidance}\n\n` +
        `📞 **فوری رابطے کے نمبر:**\n` +
        emergency.helplines.map(h => `- **${h.name}:** ${h.number} (${h.note})`).join('\n') +
        `\n\n*براہ کرم فوری طور پر ایمرجنسی خدمات (112) سے رابطہ کریں۔*`;
    } else {
      return `⚠️ **EMERGENCY WARNING:**\n` +
        `**${emergency.urgencyLabel}**\n\n` +
        `${emergency.guidance}\n\n` +
        `📞 **Immediate 24x7 Helplines:**\n` +
        emergency.helplines.map(h => `- **${h.name}:** ${h.number} (${h.note})`).join('\n') +
        `\n\n*Please seek immediate medical emergency care without delay.*`;
    }
  }

  // If a verified disease was retrieved
  if (disease) {
    const multi = disease.multilingual?.[lang] || disease.multilingual?.en || {};
    const diseaseName = multi.name || disease.official_name;
    const diseaseSummary = multi.summary || disease.simple_description;
    const diseaseAdvice = multi.advice || disease.treatment_overview;
    const icdCode = disease.icd11_code || 'Under review';
    const primaryRef = disease.references?.[0] || { title: 'WHO ICD-11', url: disease.source_url };

    if (lang === 'hi') {
      return `### 📋 क्लिनिकल सूचना एवं स्वास्थ्य मार्गदर्शन\n\n` +
        `**1. आपके द्वारा बताए गए लक्षण (Reported Symptoms):**\n` +
        `> "${query}"\n\n` +
        `**2. संभावित चिकित्सीय संदर्भ (Possible Clinical Consideration):**\n` +
        `यह लक्षण **${diseaseName}** (ICD-11 कोड: \`${icdCode}\`) की ओर संकेत कर सकते हैं।\n\n` +
        `**3. आसान भाषा में समझें (Simple Explanation):**\n` +
        `${diseaseSummary}\n\n` +
        `**4. प्रमुख लक्षण (Key Symptoms):**\n` +
        disease.symptoms.slice(0, 4).map(s => `- ${s}`).join('\n') + `\n\n` +
        `**5. डॉक्टर की सलाह एवं प्राथमिक देखभाल (Clinical Guidance):**\n` +
        `${diseaseAdvice}\n\n` +
        `**6. विशेषज्ञ परामर्श (Recommended Specialist):**\n` +
        `इस स्थिति के लिए **${disease.doctor_specialty}** से व्यक्तिगत क्लिनिकल जांच करवाना आवश्यक है।\n\n` +
        `---\n` +
        `📌 *सत्यापित स्रोत (Verified Source):* [${primaryRef.title}](${primaryRef.url}) • *अंतिम सत्यापन:* ${disease.last_verified_at}\n` +
        `*अस्वीकरण: यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है। यह डॉक्टर के व्यक्तिगत परामर्श या औपचारिक निदान का विकल्प नहीं है।*`;
    }

    if (lang === 'hinglish') {
      return `### 📋 Clinical Health Information & Guidance\n\n` +
        `**1. Patient Reported Symptoms:**\n` +
        `> "${query}"\n\n` +
        `**2. Possible Medical Consideration:**\n` +
        `Aapke bataye gaye lakshan **${diseaseName}** (ICD-11 Code: \`${icdCode}\`) se match karte hain.\n\n` +
        `**3. Simple Hinglish Explanation:**\n` +
        `${diseaseSummary}\n\n` +
        `**4. Common Symptoms:**\n` +
        disease.symptoms.slice(0, 4).map(s => `- ${s}`).join('\n') + `\n\n` +
        `**5. Primary Guidance & Home Care:**\n` +
        `${diseaseAdvice}\n\n` +
        `**6. Recommended Doctor:**\n` +
        `Proper diagnosis aur examination ke liye ek **${disease.doctor_specialty}** se consult karein.\n\n` +
        `---\n` +
        `📌 *Verified Medical Source:* [${primaryRef.title}](${primaryRef.url}) • *Last Verified:* ${disease.last_verified_at}\n` +
        `*Medical Disclaimer: Yeh automated informational guidance hai, formal hospital prescription ya definitive diagnosis nahi.*`;
    }

    if (lang === 'ur') {
      return `### 📋 طبی رہنمائی اور معلوماتی خلاصہ\n\n` +
        `**1. مریض کی بیان کردہ علامات:**\n` +
        `> "${query}"\n\n` +
        `**2. ممکنہ طبی کیفیت (Possible Condition):**\n` +
        `یہ علامات **${diseaseName}** (ICD-11 کوڈ: \`${icdCode}\`) سے مطابقت رکھتی ہیں۔\n\n` +
        `**3. آسان الفاظ میں وضاحت:**\n` +
        `${diseaseSummary}\n\n` +
        `**4. اہم علامات:**\n` +
        disease.symptoms.slice(0, 4).map(s => `- ${s}`).join('\n') + `\n\n` +
        `**5. ماہر ڈاکٹر کا مشورہ:**\n` +
        `مکمل معائنے کے لیے **${disease.doctor_specialty}** سے رجوع فرمائیں۔\n\n` +
        `---\n` +
        `📌 *تصدیق شدہ ذریعہ:* [${primaryRef.title}](${primaryRef.url}) • *آخری تصدیق:* ${disease.last_verified_at}\n` +
        `*طبی دستبرداری: یہ معلومات صرف تعلیمی مقصد کے لیے ہیں اور ڈاکٹر کے ذاتی معائنے کا متبادل نہیں ہیں۔*`;
    }

    // Default English
    return `### 📋 Clinical Health Information & Assessment\n\n` +
      `**1. Patient-Reported Symptoms:**\n` +
      `> "${query}"\n\n` +
      `**2. Possible Medical Consideration:**\n` +
      `The presentation aligns with **${disease.official_name}** (ICD-11 Code: \`${icdCode}\`).\n\n` +
      `**3. Simple Clinical Explanation:**\n` +
      `${disease.simple_description}\n\n` +
      `**4. Key Clinical Characteristics:**\n` +
      disease.symptoms.slice(0, 4).map(s => `- ${s}`).join('\n') + `\n\n` +
      `**5. Clinical Guidance & Management Overview:**\n` +
      `${disease.treatment_overview}\n\n` +
      `**6. Recommended Medical Specialist:**\n` +
      `Consultation with a **${disease.doctor_specialty}** is recommended for objective clinical evaluation and imaging.\n\n` +
      `---\n` +
      `📌 *Verified Source:* [${primaryRef.title}](${primaryRef.url}) • *Last Verified:* ${disease.last_verified_at}\n` +
      `*Medical Safety Notice: This system provides verified medical education and decision support. It does not provide a definitive diagnosis or replace an in-person physician examination.*`;
  }

  // Fallback if no specific disease was matched
  if (lang === 'hi') {
    return `नमस्ते! आपके प्रश्न ("${query}") के आधार पर, किसी विशिष्ट बीमारी की पुष्टि के लिए अतिरिक्त लक्षणों की आवश्यकता है। कृपया बताएं कि यह समस्या कितने समय से है और इसके साथ अन्य क्या लक्षण हैं। किसी भी अचानक नए तंत्रिका संबंधी लक्षण (जैसे चेहरे का टेढ़ापन, कमजोरी या बोलने में रुकावट) के लिए तुरंत डॉक्टर से संपर्क करें।`;
  } else if (lang === 'hinglish') {
    return `Namaste! Aapke bataye gaye sawal ("${query}") ke clinical evaluation ke liye aur information zaroori hai. Kripya batayein ki dard ya pareshani kitne samay se hai aur kahan mehsoos ho rahi hai. Kisi bhi sudden severe weakness ya thunderclap headache ke liye turant doctor se consult karein.`;
  } else if (lang === 'ur') {
    return `آپ کے سوال ("${query}") کے لیے مزید تفصیلی علامات درکار ہیں۔ براہ کرم درد یا تکلیف کے وقت اور نوعیت کی وضاحت فرمائیں۔`;
  } else {
    return `Based on your query ("${query}"), additional symptom details (such as onset, duration, location, and associated signs) are recommended for a closer educational review. If you are experiencing sudden severe weakness, speech impairment, or an explosive headache, seek immediate emergency medical care.`;
  }
}
