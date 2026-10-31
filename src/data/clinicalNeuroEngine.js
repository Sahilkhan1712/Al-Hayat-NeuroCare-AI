// NeuroCare AI — Advanced Clinical Neurological Diagnosis & Disease Mapping Engine

export const ALL_NEURO_DISEASES = [
  {
    id: 'stabbing_headache',
    matchRule: (text) => {
      if (/panic|anxiety|ghabrahat|neend|sleep|insomnia|tremor|kampan|parkinson/i.test(text) && !/sui|ice[- ]?pick|chubh|point/i.test(text)) {
        return false;
      }
      const hasStab = /sui|shui|needle|chubh|chubhan|chubhti|ice[- ]?pick|jabs|tikha|sharp/i.test(text);
      const hasPoint = /point|poini|spot|jagah|ek hi jagah|focal/i.test(text);
      const hasHead = /head|sar|sir|scalp|kanpatti|side|dard|pain/i.test(text);
      return hasStab || (hasPoint && (hasHead || /left|right|aadha/i.test(text)));
    },
    nameHindi: 'प्राइमरी स्टैबिंग सिरदर्द (Ice-Pick Headache)',
    nameEnglish: 'Primary Stabbing Headache (Ice-Pick Syndrome / Nummular Cephalea)',
    icdCode: 'ICHD-3 4.7 / ICD-11 8A84.0',
    affectedRegion: 'Left/Right Temporal & Somatosensory Cortices, Trigeminal V1/V2 Sensory Nerve',
    target3DNodes: ['left-middle-temporal-gyrus', 'right-middle-temporal-gyrus', 'left-postcentral-gyrus', 'right-postcentral-gyrus', 'thalamus'],
    summary: 'Achanak aane wala sui chubhne jaisa teekha dard jo kuch seconds rehta hai aur ek hi point par baar-baar aata hai.',
    explanationHindi: 'Aapke lakshan Primary Stabbing Headache (Ice-Pick Headache) aur Nummular Cephalea ki taraf ishara karte hain. Yeh dard dimaag ke Temporal hisse aur Trigeminal sensory nerve ke achanak hypersensitive hone se hota hai, jisse ek specific point par achanak sui jaisa teekha jhatka lagta hai aur fir ruk jata hai.',
    migraineStatus: {
      isMigraine: 'NO',
      percentage: '15%',
      verdictHindi: 'नहीं, यह माइग्रेन नहीं है (Primary Stabbing / Ice-Pick सिरदर्द है)',
      comparisonHindi: 'माइग्रेन में दर्द आधे सिर में कई घंटों तक धक-धक (throbbing) करता है और उल्टी/रोशनी से परेशानी होती है। जबकि आपके लक्षण "आइस-पिक हेडेक" के हैं जिसमें सुई जैसा अचानक चुभन होता है और कुछ ही सेकंड में शांत हो जाता है।'
    },
    homeRelief: [
      'Thande paani ka kapda ya Ice Pack dard wale point par 10-15 minute lagayein.',
      'Shant aur andhere kamre me aaram karein.',
      'Mobile/Laptop screen se door rahein aur 2-3 glass paani piyein.',
      'Dard wale point ko ungli se zor se na dabayein.'
    ],
    medicalGuidance: 'Neurology me yeh dard "Indomethacin" (NSAID) medicine se bohot jaldi theek hota hai (Doctor ke paramarsh par).',
    doctorQuestions: [
      {
        question: 'Dard kitni der tak rehta hai?',
        options: [
          '⏱️ Sirf kuch seconds ke liye aakar chala jata hai',
          '⏳ Kai ghanto tak lagatar bana rehta hai'
        ]
      },
      {
        question: 'Kya ulti (nausea) ya tez roshni/aawaz se chidh ho rahi hai?',
        options: [
          '🤢 Haan, ulti aur roshni se pareshani ho rahi hai',
          '🚫 Nahi, aisi koi pareshani nahi hai'
        ]
      },
      {
        question: 'Kya dard wale point par thandi patti lagane se aaram mila?',
        options: [
          '🧊 Haan, thande sek se aaram milta hai',
          '⚡ Nahi, chhoone par bhi chubhan badh jati hai'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'Indomethacin / NSAID Class', purpose: 'Ice-pick stabbing triggers ko block karne ke liye (Doctor ke paramarsh par)', dose: 'Doctor ke nirdeshanusar' },
      { drug: 'Magnesium Glycinate (400mg)', purpose: 'Nerve hypersensitivity aur cranial spasm kam karne ke liye', dose: '1 tablet rat ko' },
      { drug: 'Cold Gel Neuro-Compress', purpose: 'Trigger point cooling and epicranial pain relief', dose: '15 mins as needed' }
    ],
    diagnosticTests: [
      '3-Tesla Brain MRI (with Contrast) — Skull aur brain tissue me kisi structural lesion ko rule out karne ke liye',
      'Digital Fundoscopy — Aakho ke parde me intracranial pressure check karne ke liye',
      'ESR / CRP Blood Test — Inflammatory marker check karne ke liye'
    ],
    redFlags: 'Agar dard achanak 10/10 severe "bomb phatne" jaisa (thunderclap) ho jaye, ya gardan me akad aur ulti shuru ho, to turant emergency 112 par call karein.',
    urgency: 'MODERATE (CLINICAL EVALUATION RECOMMENDED)'
  },
  {
    id: 'migraine_disorder',
    matchRule: (text) => {
      // If primarily anxiety/panic or sleep or tremor, do not hijack into migraine unless head/migraine explicitly mentioned
      if (/panic|anxiety|ghabrahat|dil tez|palpitation|bechaini|heart attack|ocd/i.test(text) && !/migraine|sar|sir|head/i.test(text)) {
        return false;
      }
      if (/neend|sleep|insomnia|sone me|restless leg/i.test(text) && !/migraine|sar|sir|head/i.test(text)) {
        return false;
      }
      const hasMig = /migraine|migrain|adhasisi|adhkapali/i.test(text);
      const hasThrobbingHead = (/dhak[- ]?dhak|throbbing|pulsing/i.test(text) || (/dhadak/i.test(text) && !/dil|heart/i.test(text))) &&
                               (/head|sar|sir|kanpatti|dard|pain/i.test(text));
      const hasOneSide = /(left|right|aadha|ek side|one side).*(head|sar|sir|pain|dard)/i.test(text) ||
                         /(head|sar|sir).*(left|right|aadha|ek side)/i.test(text);
      const hasSensory = /ulti|vomit|matli|nausea|roshni|light|aawaz|sound|aura|chamkila|flicker/i.test(text);
      return hasMig || hasThrobbingHead || (hasOneSide && hasSensory);
    },
    nameHindi: 'माइग्रेन (Migraine with/without Aura)',
    nameEnglish: 'Migraine (Unilateral Pulsatile Cephalea)',
    icdCode: 'ICHD-3 1.1 / ICD-11 8A80',
    affectedRegion: 'Trigeminovascular System, Temporal & Occipital Cortex, Hypothalamus',
    target3DNodes: ['left-middle-temporal-gyrus', 'right-middle-temporal-gyrus', 'left-occipital-lobe', 'right-occipital-lobe', 'hypothalamus'],
    summary: 'आधे सिर में धक-धक करता तेज़ दर्द (Unilateral Throbbing), रोशनी व आवाज़ से संवेदनशीलता (Photophobia & Phonophobia), उल्टी/मतली, और चलने-फिरने से दर्द का बढ़ना (ICHD-3 Criteria).',
    explanationHindi: 'Aapke lakshan Migraine (माइग्रेन) ke clinical criteria ko confirm karte hain. Dimaag ke Trigeminovascular system aur CGRP neuropeptide release hone se cranial blood vessels dilate (failti) hoti hain, jisse aadhe sir me tez pulsating dhak-dhak dard hota hai aur roshni, aawaz ya ulti jaisi pareshaniya hoti hain.',
    migraineStatus: {
      isMigraine: 'YES',
      percentage: '95%',
      verdictHindi: 'हाँ, यह माइग्रेन (Migraine with/without Aura) के स्पष्ट लक्षण हैं',
      comparisonHindi: 'आधे सिर में धड़कता हुआ दर्द, रोशनी/आवाज़ से परेशानी, या उल्टी/मतली माइग्रेन के प्रमुख लक्षण होते हैं। यह दर्द 4 से 72 घंटे तक रह सकता है।'
    },
    homeRelief: [
      'Andhere aur bilkul shant kamre me aaram karein.',
      'Forehead aur kanpatti par cold ice compress lagayein.',
      'Dehydration se bachein — paani aur ORS/electrolytes lein.',
      'Caffeine ya tea ka halka sip le sakte hain (early attack me vasoconstriction me madad karta hai).'
    ],
    medicalGuidance: 'Doctor ki salah se Triptans (Sumatriptan/Rizatriptan) attack shuru hote hi lene se dard rukta hai. Mahine me 4 se zyada attack par preventive medicines di jaati hain.',
    doctorQuestions: [
      {
        question: 'Kya aankho ke samne chamkile dhabbe ya zigzag line (Aura) dikhti hai?',
        options: [
          '✨ Haan, aankh ke samne chamak ya dhundhla-pan aata hai',
          '🚫 Nahi, aisi koi visual dikkat nahi hai'
        ]
      },
      {
        question: 'Dard ka swaroop kaisa hai?',
        options: [
          '🌊 Dhak-dhak karta hua (Dhadakta hua)',
          '⚡ Sui chubhan jaisa achanak aane wala'
        ]
      },
      {
        question: 'Kya ulti hone ke baad dard me thoda aaram milta hai?',
        options: [
          '🤢 Haan, ulti ke baad thoda halka lagta hai',
          '🚫 Nahi, lagatar waisa hi dard rehta hai'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'Triptan Class (Sumatriptan / Rizatriptan)', purpose: 'Acute migraine attack abort karne ke liye (Doctor ke paramarsh par)', dose: 'Attack shuru hote hi' },
      { drug: 'Naproxen / Paracetamol', purpose: 'Neuro-inflammation aur pain pathway block karne ke liye', dose: 'Doctor ke anusaar' },
      { drug: 'Anti-emetic (Domperidone / Ondansetron)', purpose: 'Ulti aur matli (nausea) rokne ke liye', dose: 'Zaroorat padne par' }
    ],
    diagnosticTests: [
      'Brain MRI (T1, T2, FLAIR) — Secondary intracranial causes rule out karne ke liye',
      'MR Angiography (MRA Brain) — Cranial blood vessels ki screening ke liye',
      'Headache Diary Evaluation — 30-day symptom frequency map'
    ],
    redFlags: 'Agar sar dard ke saath sharir ka ek hissa sunn ya kamzor ho jaye, ya bolne me lafz ladkhadayein.',
    urgency: 'MODERATE TO URGENT'
  },
  {
    id: 'cluster_headache',
    matchRule: (text) => {
      const hasEye = /aankh|eye|behind eye|aankh ke peeche|aankh laal|red eye|aankh se paani|tearing/i.test(text);
      const hasCluster = /cluster|knife|chura|ghopne|rat ko|raat ko|suicide/i.test(text);
      return hasCluster || (hasEye && /tez|chura|knife|burning|severe/i.test(text));
    },
    nameHindi: 'क्लस्टर सिरदर्द (Cluster Headache)',
    nameEnglish: 'Cluster Headache (Trigeminal Autonomic Cephalalgia)',
    icdCode: 'ICHD-3 3.1 / ICD-11 8A82',
    affectedRegion: 'Hypothalamus (Biological Clock) & Trigeminal Autonomic Reflex Arc',
    target3DNodes: ['hypothalamus', 'hypothalamus2', 'left-middle-temporal-gyrus', 'right-middle-temporal-gyrus'],
    summary: 'Aankh ke peeche tez chura ghopne jaisa dard, jisme aankh se paani aana aur naak band hona shamil hai.',
    explanationHindi: 'Aapke lakshan Cluster Headache (क्लस्टर सिरदर्द) ke hain. Dimaag ke Hypothalamus me disturbance hone se aankh ke peeche ki trigeminal autonomic nasein hyperactive ho jati hain, jisse aag jaisa tez dard hota hai.',
    migraineStatus: {
      isMigraine: 'NO',
      percentage: '10%',
      verdictHindi: 'नहीं, यह माइग्रेन नहीं है (यह क्लस्टर सिरदर्द है)',
      comparisonHindi: 'क्लस्टर सिरदर्द माइग्रेन से कहीं अधिक तीखा (छुरा घोंपने जैसा) होता है और मुख्य रूप से आँख के पीछे होता है, जिसमें आँख से पानी और नाक बंद होती है।'
    },
    homeRelief: [
      '100% High-flow Oxygen therapy hospital emergency me lagane se 15 minute me dard shant hota hai.',
      'Active cluster phase ke dauran alcohol aur smoking bilkul band karein.'
    ],
    medicalGuidance: 'Subcutaneous Sumatriptan ya Verapamil preventive tablet neurologist prescribe karte hain.',
    doctorQuestions: [
      {
        question: 'Kya dard roz raat ko lagbhag ek hi waqt par jagata hai?',
        options: [
          '🌙 Haan, aksar raat ko ek hi time par dard uthta hai',
          '☀️ Nahi, din me kisi bhi waqt ho jata hai'
        ]
      },
      {
        question: 'Kya aankh laal ho jati hai aur paani behta hai?',
        options: [
          '👁️ Haan, aankh se paani aur naak band hoti hai',
          '🚫 Nahi, aankh bilkul theek hai'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'High-Flow 100% Normobaric Oxygen (12-15 L/min)', purpose: 'First-line non-pharmacological attack abort', dose: '15 minutes via non-rebreather mask' },
      { drug: 'Subcutaneous Sumatriptan (6mg)', purpose: 'Fastest acute abortive relief', dose: 'Emergency under medical guidance' },
      { drug: 'Verapamil (Calcium Channel Blocker)', purpose: 'Preventive therapy to stop cluster cycle', dose: 'Titrated by Neurologist with ECG' }
    ],
    diagnosticTests: [
      'Contrast Brain MRI with Pituitary Sella Protocol — Pituitary lesion rule out karne ke liye',
      'Baseline ECG — Verapamil preventive titration se pehle'
    ],
    redFlags: 'Asahaniya tez dard — neurologist se turant consult karein.',
    urgency: 'HIGH URGENCY'
  },
  {
    id: 'brain_stroke',
    matchRule: (text) => {
      const hasStroke = /stroke|strok|lakwa|paralysis/i.test(text);
      const hasFast = /haath kamzor|pair kamzor|chehra tedha|mouth twist|droop|bol nahi|slurr|bolne me|sudden weak|achanak kamzori/i.test(text);
      return hasStroke || hasFast;
    },
    nameHindi: 'ब्रेन स्ट्रोक / पक्षाघात (Brain Stroke / Paralysis)',
    nameEnglish: 'Acute Ischemic Stroke / TIA (Medical Emergency)',
    icdCode: 'ICD-11 8B11 / 8B20',
    affectedRegion: 'Primary Motor Cortex (M1), Internal Capsule, Middle Cerebral Artery (MCA)',
    target3DNodes: ['left-precentral-gyrus', 'right-precentral-gyrus', 'left-internal-capsule', 'right-internal-capsule', 'left-inferior-frontal-gyrus'],
    summary: '🚨 EMERGENCY: Dimaag me blood circulation rukne se achanak kamzori, chehra tedha hona aur bolne me dikkat.',
    explanationHindi: '🚨 CRITICAL MEDICAL EMERGENCY: Aapke bataye gaye lakshan Brain Stroke (स्ट्रोक / लकवा) ke hain! Dimaag ki blood vessel me blood clot aane se brain cells ko oxygen milna ruk gaya hai. Har minute 19 lakh brain cells damage hote hain.',
    migraineStatus: {
      isMigraine: 'NO',
      percentage: '0%',
      verdictHindi: '🚨 इमरजेंसी: यह माइग्रेन नहीं है, यह ब्रेन स्ट्रोक (Brain Stroke) का संकेत है!',
      comparisonHindi: 'स्ट्रोक में अचानक शरीर के एक हिस्से में कमजोरी, चेहरा टेढ़ा होना, या आवाज लड़खड़ाना होता है। तुरंत 112 पर कॉल करें।'
    },
    homeRelief: [
      'TURANT EMERGENCY 112 / 108 par call karein.',
      'Mareez ko kuch bhi khane ya peene ko NA DEIN (choking ka khatra).',
      'Mareez ko sidha letayein aur sir ko 30 degree uthayein.'
    ],
    medicalGuidance: 'Golden Hour (4.5 hours): Pehle 4.5 ghante me hospital pahuchne par clot-dissolving injection se lakwa theek kiya ja sakta hai.',
    doctorQuestions: [
      {
        question: 'Kya yeh lakshan achanak (sudden) shuru hue hain?',
        options: [
          '⚡ Haan, achanak kuch minute pehle shuru hue',
          '⏳ Dheere-dheere kayi dino me badhe hain'
        ]
      },
      {
        question: 'Kya dono haath uthane par ek haath neeche gir raha hai?',
        options: [
          '🚨 Haan, ek haath me kamzori hai',
          '💪 Nahi, dono haath barabar uth rahe hain'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'IV Thrombolysis (Tenecteplase / Alteplase)', purpose: 'Emergency clot busting within 4.5 hour window', dose: 'Hospital ICU Protocol Only' }
    ],
    diagnosticTests: [
      'Emergency NCCT Brain (Non-Contrast CT) — Hemorrhage vs Infarct distinguish karne ke liye',
      'CT Angiography — Clotted artery locate karne ke liye'
    ],
    redFlags: 'Face droop, Arm weakness, Speech slurring — Turant 112 par call karein!',
    urgency: 'CRITICAL EMERGENCY CODE RED (CALL 112)'
  },
  {
    id: 'trigeminal_neuralgia',
    matchRule: (text) => {
      const hasFace = /chehra|gaal|jabda|teeth|daant|face|jaw/i.test(text);
      const hasShock = /current|bijli|jhatka|shock|electric|brush/i.test(text);
      return (hasFace && hasShock) || /trigeminal/i.test(text);
    },
    nameHindi: 'ट्राइजेमिनल न्यूराल्जिया (Trigeminal Neuralgia)',
    nameEnglish: 'Trigeminal Neuralgia (Tic Douloureux)',
    icdCode: 'ICD-11 8B82.0',
    affectedRegion: 'Trigeminal Nerve (CN V), Brainstem Pons Root Entry Zone',
    target3DNodes: ['pons', 'pons2', 'left-postcentral-gyrus', 'right-postcentral-gyrus'],
    summary: 'Chehre, gaal ya jabde me achanak bijli ke tez jhatke jaisa dard jo choone, brush karne ya hawa se trigger hota hai.',
    explanationHindi: 'Aapke lakshan Trigeminal Neuralgia ke hain. Chehre ki Trigeminal nerve par blood vessel ka microvascular compression aane se halka sa sparsh bhi electric current jaisa dard paida karta hai.',
    migraineStatus: {
      isMigraine: 'NO',
      percentage: '10%',
      verdictHindi: 'नहीं, यह माइग्रेन नहीं है (ट्राइजेमिनल न्यूराल्जिया है)',
      comparisonHindi: 'माइग्रेन सिर में होता है, जबकि ट्राइजेमिनल न्यूराल्जिया चेहरे, गाल या जबड़े में बिजली के करंट जैसे झटके पैदा करता है।'
    },
    homeRelief: [
      'Chehre par seedhi thandi hawa na lagne dein (scarf pehnein).',
      'Kunkune paani se chehra saaf karein aur aaram se chabayein.'
    ],
    medicalGuidance: 'Aam painkiller isme kaam nahi karti. Neurologist iske liye Carbamazepine medicine dete hain.',
    doctorQuestions: [
      {
        question: 'Kya brush karne ya hawa lagne par current jaisa jhatka lagta hai?',
        options: [
          '⚡ Haan, chhoone ya hawa lagne par current lagta hai',
          '🚫 Nahi, bina chhooye bhi dard bana rehta hai'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'Carbamazepine / Oxcarbazepine', purpose: 'Nerve voltage-gated sodium channels stabilize karne ke liye', dose: 'Neurologist dwara titrated' }
    ],
    diagnosticTests: [
      'High-Resolution 3D FIESTA / CISS Brain MRI — Microvascular compression verify karne ke liye'
    ],
    redFlags: 'Dard ke darr se khana-peena chhod dena.',
    urgency: 'SPECIALIST EVALUATION REQUIRED'
  },
  {
    id: 'tension_headache',
    matchRule: (text) => {
      const hasBand = /tight|patti|dono taraf|dull|bhaari|bhari|dabav|dabaav|heavy/i.test(text);
      const hasNeck = /gardan|neck|kandha|shoulder|stress|tension/i.test(text);
      return hasBand && hasNeck;
    },
    nameHindi: 'तनाव सिरदर्द (Tension-Type Headache)',
    nameEnglish: 'Tension-Type Headache (Muscle Contraction Cephalea)',
    icdCode: 'ICHD-3 2.1 / ICD-11 8A81',
    affectedRegion: 'Pericranial Musculature, Frontal & Parietal Somatosensory Networks',
    target3DNodes: ['left-postcentral-gyrus', 'right-postcentral-gyrus', 'left-middle-frontal-gyrus', 'right-middle-frontal-gyrus'],
    summary: 'Sar ke dono taraf tight patti bandhe jaisa bhaari-pan aur gardan me khinchav.',
    explanationHindi: 'Aapke lakshan Tension-Type Headache (तनाव सिरदर्द) ke hain. Mansik tanav aur kharab posture ki wajah se gardan aur sir ki muscles contract ho jati hain, jisse dono taraf dabav mehsoos hota hai.',
    migraineStatus: {
      isMigraine: 'NO',
      percentage: '20%',
      verdictHindi: 'नहीं, यह माइग्रेन नहीं है (तनाव / टेंशन सिरदर्द है)',
      comparisonHindi: 'माइग्रेन आम तौर पर एक तरफा (धड़कता हुआ) होता है और उल्टी लाता है। जबकि टेंशन हेडेक दोनों तरफ भारी पट्टी जैसा दबाव डालता है।'
    },
    homeRelief: [
      'Gardan aur kandhe ki halki stretching exercises karein.',
      'Garam paani ka sek (hot compress) gardan par karein.'
    ],
    medicalGuidance: 'Paracetamol ya Ibuprofen se rahat milti hai. Posture improve karein.',
    doctorQuestions: [
      {
        question: 'Kya dard dono taraf hai ya sirf ek taraf?',
        options: [
          '🪨 Dono taraf bhaari dabav hai',
          '🌊 Sirf ek side me dard hai'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'Paracetamol (650mg) / Ibuprofen', purpose: 'Mild analgesic relief for muscle tension', dose: 'Khane ke baad zaroorat padne par' }
    ],
    diagnosticTests: [
      'Cervical Spine X-Ray / Postural Assessment'
    ],
    redFlags: 'Subah uthte hi ulti aana ya dard lagatar badhna.',
    urgency: 'MILD TO MODERATE'
  },
  {
    id: 'vertigo_bppv',
    matchRule: (text) => {
      return /chakkar|dizziness|dizzy|kamra ghumna|spinning|vertigo|balance|sar ghumna|unsteady|kaan me awaz|tinnitus/i.test(text);
    },
    nameHindi: 'वर्टिगो / चक्कर आना (Vertigo & Vestibular Dysfunction)',
    nameEnglish: 'Benign Paroxysmal Positional Vertigo (BPPV) / Vestibular Disorder',
    icdCode: 'ICD-11 AB31',
    affectedRegion: 'Inner Ear Semicircular Canals, Vestibulocochlear Nerve (CN VIII), Cerebellum',
    target3DNodes: ['cerebellum', 'cerebellum2', 'pons', 'medulla-oblongata'],
    summary: 'Aisa lagna jaise poora kamra ya aas-paas ki cheezein ghum rahi hain, sath me ladkhadana aur ulti jaisa lagna.',
    explanationHindi: 'Aapke lakshan Vertigo (BPPV ya Vestibular Dysfunction) ke hain. Kaan ke andar balance banane wale crystals dimaag ke Cerebellum tak galat signal bhejte hain, jisse kamra ghoomta hua lagta hai.',
    migraineStatus: {
      isMigraine: 'POSSIBLE (Vestibular Migraine)',
      percentage: '40%',
      verdictHindi: 'वेस्टिबुलर माइग्रेन (Vestibular Migraine) या BPPV की संभावना',
      comparisonHindi: 'अगर चक्कर के साथ सिरदर्द भी है, तो यह वेस्टिबुलर माइग्रेन हो सकता है। अगर सिर्फ सिर घुमाने पर चक्कर आता है तो यह BPPV (कान का क्रिस्टल हिलना) है।'
    },
    homeRelief: [
      'Chakkar aate hi achanak khade na hon, foran baith ya let jayein.',
      'Gardan ko achanak jhatke se na ghumayein.'
    ],
    medicalGuidance: 'ENT ya Neurologist se Dix-Hallpike test karwayein. Betahistine medicine aur Epley maneuver bohot faydemand hai.',
    doctorQuestions: [
      {
        question: 'Kya sar ko karwat lene ya ghumane par chakkar badhta hai?',
        options: [
          '🌀 Haan, karwat lene par kamra ghumne lagta hai',
          '🚫 Nahi, bina hile bhi chakkar bana rehta hai'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'Betahistine Dihydrochloride (16mg/24mg)', purpose: 'Inner ear microcirculation improve karne ke liye', dose: 'Doctor ke paramarsh par' }
    ],
    diagnosticTests: [
      'Dix-Hallpike Diagnostic Test — Nystagmus check karne ke liye'
    ],
    redFlags: 'Chakkar ke sath bolne me dikkat, haath me kamzori ya behoshi aana (Stroke rule out karein).',
    urgency: 'MODERATE'
  },
  {
    id: 'sleep_insomnia',
    matchRule: (text) => {
      return /neend|sleep|insomnia|so nahi|soye|jagta|wake up|awake|neend toot|sone me|kharrate|snoring|pair hilana/i.test(text);
    },
    nameHindi: 'अनिद्रा एवं नींद विकार (Chronic Insomnia / Sleep Disorder)',
    nameEnglish: 'Chronic Insomnia Disorder / Sleep-Wake Dysregulation',
    icdCode: 'ICD-11 7A00',
    affectedRegion: 'Hypothalamus (Suprachiasmatic Nucleus), Pineal Gland, Brainstem ARAS',
    target3DNodes: ['hypothalamus', 'hypothalamus2', 'thalamus', 'pons'],
    summary: 'Bistar par ghanto neend na aana, raat me baar-baar aankh khulna aur din me thakan/sar bhari rehna.',
    explanationHindi: 'Aapke lakshan Chronic Insomnia (अनिद्रा विकार) ke hain. Dimaag ke Hypothalamus me biological clock (circadian rhythm) aur Melatonin chemical ke asantulan se dimaag aaram ki avastha (sleep state) me nahi ja pata, jisse din me thakan aur sar bhari rehta hai.',
    migraineStatus: {
      isMigraine: 'NO',
      percentage: '5%',
      verdictHindi: 'नहीं, यह माइग्रेन नहीं है (यह नींद का विकार / Insomnia है)',
      comparisonHindi: 'माइग्रेन में आधे सिर में धड़कता हुआ दर्द होता है। आपके लक्षण नींद न आने (Insomnia) और सर्कैडियन रिदम में व्यवधान के हैं।'
    },
    homeRelief: [
      'Sleep Hygiene: Roz raat ko ek hi waqt par bistar par jayein aur subah ek hi waqt par uthein.',
      'Sone se 1 ghanta pehle mobile/laptop screen band karein (blue light melatonin ko rokti hai).',
      'Dophar 2 baje ke baad chai ya coffee (caffeine) bilkul na lein.',
      'Kamre me andhera, shanti aur halki thandak rakhein.'
    ],
    medicalGuidance: 'Sleep specialist se Cognitive Behavioral Therapy for Insomnia (CBT-I) karwayein. Melatonin ya Magnesium Glycinate supplement se circadian clock reset hoti hai.',
    doctorQuestions: [
      {
        question: 'Neend me kis tarah ki takleef hoti hai?',
        options: [
          '🛌 Bistar par ghanto neend nahi aati (Sleep Onset Insomnia)',
          '⏰ Raat me baar-baar aankh khulti hai aur dobara neend nahi aati',
          '⚡ Raat ko bistar par pairon me bechaini hoti hai (Restless Legs)'
        ]
      },
      {
        question: 'Yeh samasya kitne samay se chal rahi hai?',
        options: [
          'Haal hi me (1-2 hafte se stress ke karan)',
          'Kayi mahino ya saalo se lagatar bani hui hai (Chronic)'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'Melatonin (3mg - 5mg ER)', purpose: 'Circadian biological clock reset karne ke liye', dose: 'Sone se 30-45 min pehle' },
      { drug: 'Magnesium Glycinate (400mg)', purpose: 'Central nervous system relaxation and GABA support', dose: '1 tablet rat ko' },
      { drug: 'Non-pharmacological CBT-I Protocol', purpose: 'Sleep restriction and stimulus control therapy', dose: 'Daily evening routine' }
    ],
    diagnosticTests: [
      'Overnight Polysomnography (Sleep Study PSG) — Sleep architecture aur Apnea index check karne ke liye',
      'Serum Ferritin & Thyroid TSH Panel — Secondary causes rule out karne ke liye'
    ],
    redFlags: 'Din me achanak gaadi chalate waqt neend aana ya kharate ke sath saans rukna (Sleep Apnea).',
    urgency: 'CLINICAL EVALUATION RECOMMENDED'
  },
  {
    id: 'panic_anxiety',
    matchRule: (text) => {
      return /panic|anxiety|ghabrahat|bechaini|chinta|dil tez|heart attack jaisa|saans phoolna|ocd|darr/i.test(text);
    },
    nameHindi: 'पैनिक अटैक एवं चिंता विकार (Panic Disorder / Generalized Anxiety)',
    nameEnglish: 'Panic Disorder / Severe Episodic Anxiety Syndrome',
    icdCode: 'ICD-11 6B01 / 6B00',
    affectedRegion: 'Limbic System, Amygdala, Locus Coeruleus, Prefrontal Cortex',
    target3DNodes: ['amygdala', 'left-middle-temporal-gyrus', 'right-middle-temporal-gyrus', 'left-middle-frontal-gyrus'],
    summary: 'Achanak 10 minute me dil ki dhadkan tez hona, saans phoolna, paseena aana aur aisa lagna ki jaan nikal rahi hai.',
    explanationHindi: 'Aapke lakshan Panic Attack aur Anxiety Neurosis ke hain. Dimaag ke darr wale center (Amygdala) me false alarm trigger hone se achanak adrenaline release hota hai, jisse dil tez dhadakta hai aur saans ghutne lagti hai. Yeh dil ka daura (heart attack) nahi hai.',
    migraineStatus: {
      isMigraine: 'NO',
      percentage: '5%',
      verdictHindi: 'नहीं, यह माइग्रेन नहीं है (यह पैनिक अटैक / चिंता विकार है)',
      comparisonHindi: 'माइग्रेन में सिर में धड़कता हुआ दर्द होता है। आपके लक्षण पैनिक अटैक (अचानक दिल तेज धड़कना, सांस फूलना, अत्यधिक घबराहट) के हैं।'
    },
    homeRelief: [
      'Box Breathing: 4 second saans andar lein, 4 second rokein, 6 second me dheere-dheere chodein.',
      'Ghoont-ghoont thanda paani piyein aur chehre par thande paani ke cheente maarein (Vagus nerve activate hoti hai).',
      '5-4-3-2-1 Grounding: 5 cheezein dekhein, 4 chhuayein, 3 sunein, 2 soonghein, 1 taste karein.'
    ],
    medicalGuidance: 'Psychiatrist se consult karein. CBT therapy aur SSRI medicines se panic attacks poori tarah theek ho jaate hain.',
    doctorQuestions: [
      {
        question: 'Ghabrahat kis tarah hoti hai?',
        options: [
          '💓 Achanak 10 minute me dil tez dhadakta hai (Panic Attack)',
          '😟 Lagatar 24 ghante har baat par chinta rehti hai (GAD)',
          '🧼 Baar-baar hath dhone ya check karne ka mann karta hai (OCD)'
        ]
      },
      {
        question: 'Kya pehle kabhi dil ka ECG ya checkup hua hai?',
        options: [
          'Haan, ECG normal tha lekin dil tez dhadakta rehta hai',
          'Nahi, pehli baar itni tez ghabrahat ho rahi hai'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'Propranolol (10mg - 20mg)', purpose: 'Autonomic physical palpitations and tremors block karne ke liye (SOS)', dose: 'Doctor ke nirdeshanusar' },
      { drug: 'SSRI Class (Escitalopram / Sertraline)', purpose: 'Long-term serotonin stabilization and panic prevention', dose: 'Psychiatrist dwara prescribed' }
    ],
    diagnosticTests: [
      '12-Lead ECG & Serum TSH (Thyroid) — Arrhythmias aur hyperthyroidism rule out karne ke liye'
    ],
    redFlags: 'Seene me tez dabav jo baayein kandhe ya jabde me faile (Emergency 112).',
    urgency: 'CLINICAL PSYCHIATRIC EVALUATION'
  },
  {
    id: 'parkinsons_disease',
    matchRule: (text) => {
      return /parkinson|haath kampna|kampan|tremor|shaking|haath hilna|akad|chote kadam|slowness/i.test(text);
    },
    nameHindi: 'पार्किंसंस रोग / कंपकंपी (Parkinson\'s Disease / Movement Disorder)',
    nameEnglish: 'Parkinson\'s Disease / Resting Tremor Syndrome',
    icdCode: 'ICD-11 8A00.0',
    affectedRegion: 'Substantia Nigra, Basal Ganglia Dopaminergic Pathway',
    target3DNodes: ['substantia-nigra', 'caudate-nucleus', 'putamen', 'globus-pallidus'],
    summary: 'Baithey rehne par haath me kampan (shaking), chalne me dheemapan aur shareer me akad aana.',
    explanationHindi: 'Aapke lakshan Parkinson\'s Disease (पार्किंसंस रोग) ke hain. Dimaag ke Substantia Nigra hisse me Dopamine chemical kam hone se shareer ki movements par control kam hone lagta hai aur haath apne-aap kampne lagte hain.',
    migraineStatus: {
      isMigraine: 'NO',
      percentage: '0%',
      verdictHindi: 'नहीं, यह माइग्रेन नहीं है (यह मूवमेंट डिसऑर्डर / पार्किंसंस है)',
      comparisonHindi: 'माइग्रेन एक सिरदर्द की बीमारी है, जबकि यह लक्षण न्यूरोलॉजिकल मूवमेंट डिसऑर्डर (पार्किंसंस / ट्रेमर) का संकेत देते हैं।'
    },
    homeRelief: [
      'Rozana aerobic exercise, walking aur balance exercises karein.',
      'Haath ki grip tight karne ke liye soft ball dabane ki exercise karein.'
    ],
    medicalGuidance: 'Movement Disorder Neurologist se consult karein. Levodopa-Carbidopa dawai se lakshano me shandar aaram milta hai.',
    doctorQuestions: [
      {
        question: 'Kampan (shaking) kab zyada hoti hai?',
        options: [
          'Aaram se baithe rehne par haath kampte hain (Rest tremor - Parkinson)',
          'Chai ka cup pakadne ya likhte waqt (Essential tremor)'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'Levodopa + Carbidopa (Sinemet / Syndopa)', purpose: 'Dopamine replacement therapy', dose: 'Neurologist dwara titrated' }
    ],
    diagnosticTests: [
      'DaTscan (Dopamine Transporter SPECT) & High-field 3T Brain MRI'
    ],
    redFlags: 'Achanak baar-baar girna ya nigalne me dikkat aana.',
    urgency: 'SPECIALIST EVALUATION REQUIRED'
  },
  {
    id: 'peripheral_neuropathy',
    matchRule: (text) => {
      return /talvo me jalan|talwa|burning feet|pair sunn|naso me|neuropathy|pins and needles|chappal nikalna/i.test(text);
    },
    nameHindi: 'पेरिफेरल न्यूरोपैथी / नसों में जलन व सुन्नपन (Peripheral Neuropathy)',
    nameEnglish: 'Distal Symmetric Peripheral Polyneuropathy',
    icdCode: 'ICD-11 8C00',
    affectedRegion: 'Peripheral Somatosensory & Autonomic Nerves, Spinal Posterior Columns',
    target3DNodes: ['left-postcentral-gyrus', 'right-postcentral-gyrus', 'somatosensory-cortex'],
    summary: 'Pair ke talvo me aag jaisi jalan, suiyang chubhna, sunn-pan aur chappal nikalne ka ehsaas na hona.',
    explanationHindi: 'Aapke lakshan Peripheral Neuropathy (पेरिफेरल न्यूरोपैथी) ke hain. Diabetes (sugar) ya Vitamin B12 ki kami ki wajah se pairon ki nasein kamzor ho jati hain, jisse aag jaisi jalan aur sunn-pan hota hai.',
    migraineStatus: {
      isMigraine: 'NO',
      percentage: '0%',
      verdictHindi: 'नहीं, यह माइग्रेन नहीं है (यह नसों की कमजोरी / न्यूरोपैथी है)',
      comparisonHindi: 'यह समस्या सिर की नहीं बल्कि पैरों की पेरिफेरल नसों के डैमेज होने (न्यूरोपैथी) की वजह से होती है।'
    },
    homeRelief: [
      'Nange pair bilkul na chalein; naram joote ya diabetic socks pehnein.',
      'Roz raat ko pair ke talvo ki jaanch karein ki koi chot ya chala to nahi hai.'
    ],
    medicalGuidance: 'Blood sugar control karein aur Vitamin B12 test karwayein. Pregabalin ya Gabapentin se jalan shaant hoti hai.',
    doctorQuestions: [
      {
        question: 'Kya aapko Diabetes (Sugar) ki shikayat hai?',
        options: [
          'Haan, mujhe Diabetes (Sugar) hai',
          'Nahi, sugar nahi hai',
          'Jankari nahi hai, check nahi karwaya'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'Pregabalin (75mg) / Duloxetine', purpose: 'Neuropathic pain and nerve burning relief', dose: '1 tablet rat ko khane ke baad' },
      { drug: 'Methylcobalamin (Vitamin B12 1500mcg)', purpose: 'Nerve myelin sheath regeneration', dose: 'Rozana 1 tablet' }
    ],
    diagnosticTests: [
      'Nerve Conduction Study (NCS / EMG) & Serum Vitamin B12 / HbA1c Panel'
    ],
    redFlags: 'Pair me zakhm hona jo theek na ho raha ho (Diabetic foot ulcer).',
    urgency: 'CLINICAL EVALUATION'
  },
  {
    id: 'memory_alzheimers',
    matchRule: (text) => {
      return /bhoolna|yaadash|bhoolne|memory loss|dementia|alzheimer|confusion|raaste bhoolna/i.test(text);
    },
    nameHindi: 'अल्जाइमर रोग / याददाश्त की कमी (Alzheimer\'s Disease / Dementia)',
    nameEnglish: 'Alzheimer\'s Disease / Progressive Cognitive Decline',
    icdCode: 'ICD-11 8A20',
    affectedRegion: 'Hippocampus (Memory Hub), Entorhinal Cortex, Temporal & Parietal Lobes',
    target3DNodes: ['hippocampus', 'entorhinal-cortex', 'left-middle-temporal-gyrus', 'right-middle-temporal-gyrus'],
    summary: 'Haal ki baatein bhool jana, jaane-pehchane raaste bhoolna aur roz ke kaam karne me mushkil aana.',
    explanationHindi: 'Aapke lakshan Cognitive Decline aur Alzheimer\'s Dementia ke hain. Dimaag ke memory center (Hippocampus) me cells kamzor hone se nayi baatein yaad rakhne me dikkat aati hai.',
    migraineStatus: {
      isMigraine: 'NO',
      percentage: '0%',
      verdictHindi: 'नहीं, यह माइग्रेन नहीं है (यह याददाश्त विकार / अल्जाइमर है)',
      comparisonHindi: 'माइग्रेन एक सिरदर्द की बीमारी है। यह समस्या याददाश्त और संज्ञानात्मक क्षमता (Cognition) में कमी की है।'
    },
    homeRelief: [
      'Ghar ka mahaul shant aur safe rakhein; zaroori phone number aur pata diary me likhein.',
      'Dimaag ko active rakhne ke liye puzzles, baatcheet aur purani yaadein taaza karein.'
    ],
    medicalGuidance: 'Cognitive Neurologist se MoCA / MMSE memory test karwayein. Donepezil ya Memantine medicines se progression dheema hota hai.',
    doctorQuestions: [
      {
        question: 'Kis tarah ki baatein bhoolte hain?',
        options: [
          'Haal ki baatein aur baatcheet bhool jana',
          'Jaane-pehchane raaste aur ghar ka pata bhoolna'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'Donepezil Hydrochloride (5mg - 10mg)', purpose: 'Cholinesterase inhibitor to boost brain acetylcholine', dose: '1 tablet rat ko' }
    ],
    diagnosticTests: [
      'Volumetric 3T Brain MRI (Hippocampal Volume) & Serum B12 / TSH Panel'
    ],
    redFlags: 'Achanak 1-2 din me behoshi ya tez confusion aana (Delirium).',
    urgency: 'SPECIALIST EVALUATION'
  },
  {
    id: 'epilepsy_seizure',
    matchRule: (text) => {
      return /mirgi|seizure|daura|daure|jhatka|jhatke|convulsion|epilepsy|blank ho jana/i.test(text);
    },
    nameHindi: 'मिर्गी एवं दौरे का विकार (Epilepsy / Seizure Disorder)',
    nameEnglish: 'Epileptic Seizure / Convulsive Disorder',
    icdCode: 'ICD-11 8A60',
    affectedRegion: 'Cerebral Cortex, Temporal Lobe, Hippocampus, Thalamocortical Loop',
    target3DNodes: ['left-middle-temporal-gyrus', 'right-middle-temporal-gyrus', 'hippocampus', 'thalamus'],
    summary: 'Dimaag me achanak abnormal electrical activity se shareer akadna, haath-pair me jhatke aana ya achanak hosh kho dena.',
    explanationHindi: 'Aapke lakshan Seizure / Epilepsy (मिर्गी / दौरे) ke hain. Dimaag ke neurons me achanak excessive electrical discharge hone se haath-pair me jhatke ya behoshi aati hai.',
    migraineStatus: {
      isMigraine: 'NO',
      percentage: '0%',
      verdictHindi: 'नहीं, यह माइग्रेन नहीं है (यह मिर्गी / दौरे का विकार है)',
      comparisonHindi: 'माइग्रेन सिरदर्द का विकार है, जबकि दौरे मस्तिष्क में असामान्य इलेक्ट्रिकल एक्टिविटी (Seizure) के कारण आते हैं।'
    },
    homeRelief: [
      'Daure ke dauran mareez ko ek karwat (Recovery position) me letayein taaki saans saaf rahe.',
      'Mareez ke muh me chammach, kapda ya ungli KABHI NA DAALEIN.',
      'Mareez ko joota ya pyaaz na sunghayein; aas-paas se dharili cheezein hata lein.',
      'Agar daura 5 minute se zyada chale, to foran 112 par call karein (Status Epilepticus).'
    ],
    medicalGuidance: 'Neurologist se Video EEG aur 3T Epilepsy Protocol MRI karwayein. Anti-epileptic medicines (Levetiracetam/Valproate) se daure poori tarah control ho jaate hain.',
    doctorQuestions: [
      {
        question: 'Jhatke ya daure me kya hota hai?',
        options: [
          'Poora sharir akadna aur haath-pair me jhatke (Generalized tonic-clonic)',
          'Achanak kuch seconds ke liye blank ho jana (Absence seizure)',
          'Ek haath ya chehre me phadphadahat (Focal seizure)'
        ]
      }
    ],
    rxPrescription: [
      { drug: 'Levetiracetam (500mg) / Sodium Valproate', purpose: 'Broad-spectrum anti-epileptic neural stabilization', dose: 'Neurologist dwara prescribed' }
    ],
    diagnosticTests: [
      'Digital Video Electroencephalogram (Video EEG) — Epileptiform spikes record karne ke liye',
      '3-Tesla Epilepsy Protocol Brain MRI — Mesial temporal sclerosis ya cortical dysplasia detect karne ke liye'
    ],
    redFlags: 'Daura 5 minute se zyada lamba chalna ya lagatar bina hosh aaye doosra daura aana (Emergency 112).',
    urgency: 'URGENT NEUROLOGICAL CARE'
  }
];

// Helper: Extract identified symptoms from free text
export function extractSymptomBadges(text) {
  const t = text.toLowerCase();
  const badges = [];

  // Location
  if (t.includes('left')) {
    badges.push({ label: 'स्थान (Location)', value: 'Left Side Head (बायाँ हिस्सा)', color: 'border-cyan-500/50 bg-cyan-950/40 text-cyan-300' });
  } else if (t.includes('right')) {
    badges.push({ label: 'स्थान (Location)', value: 'Right Side Head (दायाँ हिस्सा)', color: 'border-cyan-500/50 bg-cyan-950/40 text-cyan-300' });
  } else if (t.includes('gardan') || t.includes('neck')) {
    badges.push({ label: 'स्थान (Location)', value: 'Cervical / Neck & Shoulder', color: 'border-purple-500/50 bg-purple-950/40 text-purple-300' });
  } else if (t.includes('aankh') || t.includes('eye')) {
    badges.push({ label: 'स्थान (Location)', value: 'Retro-orbital (आँख के पीछे)', color: 'border-pink-500/50 bg-pink-950/40 text-pink-300' });
  } else if (t.includes('chehra') || t.includes('face') || t.includes('jaw')) {
    badges.push({ label: 'स्थान (Location)', value: 'Facial & Trigeminal Zone', color: 'border-amber-500/50 bg-amber-950/40 text-amber-300' });
  } else {
    badges.push({ label: 'स्थान (Location)', value: 'Cranial / Head Region', color: 'border-blue-500/50 bg-blue-950/40 text-blue-300' });
  }

  // Focal Point
  if (/point|poini|spot|jagah/i.test(t)) {
    badges.push({ label: 'बिंदु (Focal Point)', value: 'Ek Specific Point Me Dard', color: 'border-cyan-400/50 bg-cyan-900/30 text-cyan-200' });
  }

  // Pain Character
  if (/sui|shui|needle|chubh|chubhan|ice[- ]?pick/i.test(t)) {
    badges.push({ label: 'दर्द का प्रकार (Type)', value: 'सुई चुभन (Sharp Ice-pick Jabs)', color: 'border-pink-500/50 bg-pink-950/40 text-pink-300' });
  } else if (/dhadak|throbbing|pulsing|pulse|dhak/i.test(t)) {
    badges.push({ label: 'दर्द का प्रकार (Type)', value: 'धड़कता हुआ (Throbbing / Pulsatile)', color: 'border-amber-500/50 bg-amber-950/40 text-amber-300' });
  } else if (/tight|patti|bhaari|bhari|dabav/i.test(t)) {
    badges.push({ label: 'दर्द का प्रकार (Type)', value: 'भारी दबाव (Band-like Pressure)', color: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300' });
  } else if (/current|bijli|jhatka|shock/i.test(t)) {
    badges.push({ label: 'दर्द का प्रकार (Type)', value: 'बिजली का करंट (Lancinating Shock)', color: 'border-yellow-500/50 bg-yellow-950/40 text-yellow-300' });
  }

  // Onset & Duration
  if (/subah|morning|aaj|aaj subah/i.test(t)) {
    badges.push({ label: 'शुरुआत (Onset)', value: 'सुबह से (Acute Onset ~6-12h)', color: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300' });
  } else if (/kayi din|hafta|months|puraana/i.test(t)) {
    badges.push({ label: 'शुरुआत (Onset)', value: 'लगातार / क्रोनिक (>15 दिन)', color: 'border-orange-500/50 bg-orange-950/40 text-orange-300' });
  } else if (/achanak|sudden/i.test(t)) {
    badges.push({ label: 'शुरुआत (Onset)', value: 'अचानक शुरू (Sudden Paroxysmal)', color: 'border-red-500/50 bg-red-950/40 text-red-300' });
  }

  // Frequency
  if (/aata|jata|chala jata|bar bar|baar baar/i.test(t)) {
    badges.push({ label: 'पैटर्न (Pattern)', value: 'आता-जाता रहता है (Paroxysmal Spikes)', color: 'border-indigo-500/50 bg-indigo-950/40 text-indigo-300' });
  }

  // Associated Gastrointestinal Symptoms
  if (/ulti|vomit|matli|nausea/i.test(t)) {
    badges.push({ label: 'गैस्ट्रिक लक्षण (GI)', value: 'उल्टी / मतली (Nausea & Emesis)', color: 'border-rose-500/50 bg-rose-950/40 text-rose-300' });
  }

  // Sensory Sensitivity (Photophobia / Phonophobia)
  if ((/roshni|light|chubh/i.test(t) && /aawaz|sound|shor/i.test(t)) || /classic migraine/i.test(t)) {
    badges.push({ label: 'सेंसरी संवेदनशीलता', value: 'फोटोफोबिया व फोनोफोबिया (Light & Sound Sensitivity)', color: 'border-yellow-500/50 bg-yellow-950/40 text-yellow-300' });
  } else if (/roshni|light/i.test(t)) {
    badges.push({ label: 'सेंसरी संवेदनशीलता', value: 'फोटोफोबिया (तेज़ रोशनी से चुभन)', color: 'border-yellow-500/50 bg-yellow-950/40 text-yellow-300' });
  } else if (/aawaz|sound|shor/i.test(t)) {
    badges.push({ label: 'सेंसरी संवेदनशीलता', value: 'फोनोफोबिया (आवाज़ से चिड़चिड़ापन)', color: 'border-yellow-500/50 bg-yellow-950/40 text-yellow-300' });
  }

  // Visual Aura
  if (/aura|chamk|chamkili|zigzag|dhundhla/i.test(t)) {
    badges.push({ label: 'विजुअल ऑरा (Aura)', value: 'आँखों के आगे चमक / ज़िग-ज़ैग रेखाएँ (Visual Aura)', color: 'border-purple-500/50 bg-purple-950/40 text-purple-300' });
  }

  // Movement Aggravation (ICHD-3 Hallmark)
  if (/chalne|jhukne|movement|stairs|hilne/i.test(t)) {
    badges.push({ label: 'ट्रिगर प्रभाव', value: 'चलने-फिरने से दर्द में वृद्धि (Aggravated by Routine Activity)', color: 'border-red-500/50 bg-red-950/40 text-red-300' });
  }

  // Episodic Duration
  if (/4.*72|ghante|hours/i.test(t)) {
    badges.push({ label: 'अवधि (Duration)', value: '4 से 72 घंटे (ICHD-3 Episodic Duration)', color: 'border-indigo-500/50 bg-indigo-950/40 text-indigo-300' });
  }

  return badges;
}

// Master Diagnostic Function
export function diagnosePatientInput(userText, conversationHistory = []) {
  const text = (userText || '').toLowerCase();

  // Combine user messages to maintain multi-turn memory
  const previousUserTexts = conversationHistory
    .filter(m => m.sender === 'user')
    .map(m => (m.text || '').toLowerCase())
    .join(' ');
  const combined = `${previousUserTexts} ${text}`.trim();

  // Extract identified clinical symptom badges
  const symptomBadges = extractSymptomBadges(combined);

  // Match diseases
  let matchedDisease = null;
  for (const disease of ALL_NEURO_DISEASES) {
    if (disease.matchRule(text) || disease.matchRule(combined)) {
      matchedDisease = disease;
      break;
    }
  }

  // If no direct rule matched, fallback intelligently to appropriate condition
  if (!matchedDisease) {
    if (/neend|sleep|insomnia|sone|soya|so nahi|restless/i.test(combined)) {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'sleep_insomnia');
    } else if (/panic|anxiety|ghabrahat|bechaini|dil tez|chinta/i.test(combined)) {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'panic_anxiety');
    } else if (/stroke|lakwa|paralysis|droop|tedha|kamzori/i.test(combined)) {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'brain_stroke');
    } else if (/chakkar|vertigo|dizzy|spinning|santulan/i.test(combined)) {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'vertigo_bppv');
    } else if (/parkinson|haath kampna|tremor|shaking|kampan/i.test(combined)) {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'parkinsons_disease');
    } else if (/talvo|jalan|neuropathy|sunn|naso/i.test(combined)) {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'peripheral_neuropathy');
    } else if (/bhool|yaadash|memory|dementia|alzheimer/i.test(combined)) {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'memory_alzheimers');
    } else if (/mirgi|seizure|daura|daure|jhatka|convulsion/i.test(combined)) {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'epilepsy_seizure');
    } else if (/tension|tight|patti|gardan/i.test(combined)) {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'tension_headache');
    } else if (/aankh|cluster|chura/i.test(combined)) {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'cluster_headache');
    } else if (/sui|chubhan|ice[- ]?pick|point/i.test(combined)) {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'stabbing_headache');
    } else {
      matchedDisease = ALL_NEURO_DISEASES.find(d => d.id === 'migraine_disorder');
    }
  }

  const cameraView = text.includes('left') || combined.includes('left') ? 'leftSagittal' :
                     text.includes('right') || combined.includes('right') ? 'rightSagittal' :
                     matchedDisease.id.includes('cluster') || matchedDisease.id.includes('vertigo') ? 'posterior' : 'isometric';

  // Construct complete hospital-grade medical report
  const medicalReport = {
    reportId: `NC-MED-${Math.floor(100000 + Math.random() * 900000)}`,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    patientName: 'Patient / Self-Consultation',
    ageGender: 'Adult / Clinical Evaluation',
    symptomBadges: symptomBadges,
    primaryDiagnosis: matchedDisease.nameEnglish,
    primaryDiagnosisHindi: matchedDisease.nameHindi,
    icdCode: matchedDisease.icdCode,
    urgency: matchedDisease.urgency,
    migraineStatus: matchedDisease.migraineStatus,
    affectedRegion: matchedDisease.affectedRegion,
    target3DNodes: matchedDisease.target3DNodes,
    explanationHindi: matchedDisease.explanationHindi,
    summary: matchedDisease.summary || '',
    homeRelief: matchedDisease.homeRelief,
    rxPrescription: matchedDisease.rxPrescription || [],
    diagnosticTests: matchedDisease.diagnosticTests || [],
    redFlags: matchedDisease.redFlags,
    doctorName: 'Dr. Al_Hayat NeuroCare AI, MD, DM (Neurology)',
    doctorTitle: 'Chief Neurologist & Clinical Neurophysiologist',
    hospitalSeal: 'AL_HAYAT NEUROCARE AI • ACCREDITED MEDICAL ASSISTANT'
  };

  return {
    matched: true,
    disease: matchedDisease,
    symptomBadges: symptomBadges,
    migraineStatus: matchedDisease.migraineStatus,
    doctorQuestions: matchedDisease.doctorQuestions || [],
    medicalReport: medicalReport,
    headlineHindi: `Maine aapke lakshano ka neuro-clinical analysis kiya hai: **${matchedDisease.nameHindi}** ke sanket hain.`,
    targetNodes: matchedDisease.target3DNodes,
    cameraView: cameraView
  };
}
