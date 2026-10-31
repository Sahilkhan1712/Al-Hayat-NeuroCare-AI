// Authoritative Clinical Medical Knowledge Registry for NeuroCare AI
// Source-grounded adhering strictly to WHO ICD-11, NINDS, NIMH, MedlinePlus, NHS, and ICHD-3

export const ALL_VERIFIED_DISEASES = [
  {
    "disease_id": "migraine-without-aura",
    "official_name": "Migraine without aura",
    "alternative_names": [
      "Common migraine",
      "Hemicrania",
      "Adhasisi",
      "Adhkapali"
    ],
    "category": "headache",
    "subcategory": "Primary headache disorders",
    "icd11_code": "8A80.0",
    "simple_description": "A recurrent throbbing headache that usually affects one side of the head, worsens with movement, and is often accompanied by nausea, vomiting, and sensitivity to light and sound.",
    "medical_description": "A neurovascular headache disorder characterized by recurrent attacks lasting 4 to 72 hours, typically unilateral, pulsating, of moderate to severe intensity, aggravated by routine physical activity, and associated with nausea, vomiting, photophobia, and phonophobia, without preceding aura symptoms.",
    "affected_system": "Trigeminovascular system, cranial blood vessels, and brainstem pain-modulating pathways.",
    "symptoms": [
      "Moderate to severe throbbing or pulsating head pain",
      "Pain typically on one side of the head (unilateral), though can be bilateral",
      "Nausea and sometimes vomiting",
      "Extreme sensitivity to light (photophobia)",
      "Extreme sensitivity to sound (phonophobia)",
      "Worsening of pain with physical exertion (walking, climbing stairs)",
      "Fatigue, neck stiffness, and irritability during attack"
    ],
    "early_warning_signs": [
      "Prodrome 24-48 hours before pain: frequent yawning, food cravings, mood swings, neck stiffness, fluid retention"
    ],
    "possible_causes": [
      "Activation of the trigeminovascular system causing neurogenic inflammation and arterial vasodilation",
      "Release of calcitonin gene-related peptide (CGRP) and substance P",
      "Genetic predisposition affecting cortical excitability"
    ],
    "risk_factors": [
      "Female sex (3 times higher in females after puberty)",
      "Family history of migraine",
      "Hormonal fluctuations (menstrual cycle, estrogen drop)",
      "High psychological stress, sleep deprivation, or skipping meals",
      "Certain sensory triggers (flickering lights, strong perfumes, weather changes)"
    ],
    "disease_types": [
      "Episodic migraine without aura (< 15 headache days per month)",
      "Menstrually related migraine without aura"
    ],
    "clinical_evaluation": "Diagnosed clinically based on ICHD-3 criteria (at least 5 attacks lasting 4-72 hours with characteristic features). Neurological physical examination is normal.",
    "diagnostic_tests": [
      "Magnetic Resonance Imaging (3T Brain MRI) - Recommended only if 'red flags' (SNOOP criteria) or abnormal focal neurological examination are present to exclude secondary pathology",
      "Non-contrast Head CT - If acute sudden onset to rule out intracranial hemorrhage"
    ],
    "treatment_overview": "Stratified acute therapy based on attack severity. Mild to moderate attacks treated with NSAIDs; moderate to severe attacks with 5-HT1B/1D receptor agonists (triptans) or oral CGRP receptor antagonists (gepants). Preventive therapy if >= 4 headache days/month.",
    "medication_classes": [
      "Triptans (Sumatriptan, Rizatriptan, Zolmitriptan) - Selective 5-HT1B/1D agonists",
      "NSAIDs (Ibuprofen, Naproxen sodium) & Paracetamol",
      "CGRP Receptor Antagonists / Gepants (Rimegepant, Ubrogepant)",
      "Anti-emetics (Metoclopramide, Domperidone) for nausea",
      "Preventive classes: Beta-blockers (Propranolol), Antiepileptics (Topiramate), CGRP monoclonal antibodies"
    ],
    "precautions": [
      "Avoid overusing acute pain medications (> 10 days/month for triptans) to prevent medication-overuse headache",
      "Maintain consistent sleep schedule and regular hydration",
      "Do not consume known food triggers (aged cheeses, MSG, nitrates, excess caffeine)"
    ],
    "prevention": [
      "Maintain a migraine diary tracking triggers and timing",
      "Practice stress-reduction techniques (mindfulness, progressive muscle relaxation)",
      "Stay well-hydrated and avoid skipping meals"
    ],
    "complications": [
      "Status migrainosus (debilitating migraine attack lasting > 72 hours)",
      "Medication-overuse headache (rebound headache)",
      "Transformation into chronic migraine"
    ],
    "emergency_signs": [
      "Sudden explosive thunderclap headache reaching maximum intensity in < 1 minute",
      "Accompanying high fever, stiff neck, confusion, or rash",
      "New neurological deficit: unilateral weakness, numbness, facial droop, or speech loss"
    ],
    "doctor_specialty": "Neurologist / Headache Specialist",
    "faqs": [
      {
        "question": "Is migraine just a severe headache?",
        "answer": "No. Migraine is a complex neurological disorder involving nerve signaling, blood vessel reactivity, and brain chemical releases like CGRP, accompanied by systemic symptoms like nausea and sensory hypersensitivity."
      },
      {
        "question": "When should medication be taken?",
        "answer": "Acute abortive medications (such as triptans or NSAIDs) are most effective when taken right at the onset of the mild headache phase, rather than waiting for the pain to become severe."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A80.0 Migraine without aura",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Migraine Information Page",
        "source": "National Institute of Neurological Disorders and Stroke (NINDS)",
        "url": "https://www.ninds.nih.gov/health-information/disorders/migraine"
      },
      {
        "title": "The International Classification of Headache Disorders 3rd edition (ICHD-3)",
        "source": "International Headache Society (IHS)",
        "url": "https://ichd-3.org/1-migraine/1-1-migraine-without-aura/"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/migraine",
    "multilingual": {
      "hi": {
        "name": "माइग्रेन बिना ऑरा (Migraine without aura)",
        "summary": "सिर के एक हिस्से में धड़कने वाला तेज़ दर्द जो 4 से 72 घंटे तक रहता है, साथ ही उल्टी, रोशनी और आवाज़ से परेशानी होती है।",
        "advice": "अंधेरे शांत कमरे में आराम करें, माथे पर ठंडी पट्टी रखें और डॉक्टर द्वारा बताई गई माइग्रेन रोधी दवा लें।"
      },
      "hinglish": {
        "name": "Migraine (Adhasisi / Pulsating One-sided Headache)",
        "summary": "Aadhe sar me tez dhak-dhak karta hua dard jo ghanto bana rehta hai aur ulti ya roshni se pareshani deta hai.",
        "advice": "Andhere kamre me rest karein, cold pack lagayein aur dehydration se bachein."
      },
      "ur": {
        "name": "مائیگرین / آدھے سر کا درد",
        "summary": "سر کے ایک طرف تیز دھڑکتا ہوا درد جو متلی، قے اور روشنی و آواز کی حساسیت کے ساتھ آتا ہے۔",
        "advice": "اندھیرے اور پرسکون کمرے میں آرام کریں اور مناسب پانی پیئیں۔"
      }
    },
    "target_3d_nodes": [
      "left-middle-temporal-gyrus",
      "right-middle-temporal-gyrus",
      "left-occipital-lobe",
      "right-occipital-lobe",
      "hypothalamus"
    ],
    "search_keywords": [
      "migraine",
      "adhasisi",
      "adhkapali",
      "aadha sar dard",
      "throbbing head pain",
      "pulsating headache",
      "dhadakta dard",
      "ulti aur sar dard",
      "one sided head pain"
    ]
  },
  {
    "disease_id": "migraine-with-aura",
    "official_name": "Migraine with aura",
    "alternative_names": [
      "Classic migraine",
      "Ophthalmic migraine",
      "Complicated migraine"
    ],
    "category": "headache",
    "subcategory": "Primary headache disorders",
    "icd11_code": "8A80.1",
    "simple_description": "A type of migraine preceded or accompanied by temporary sensory disturbances, most commonly visual changes like flashing lights, zigzag patterns, or blind spots, followed by throbbing head pain.",
    "medical_description": "Recurrent attacks of fully reversible neurological symptoms (aura) that usually develop gradually over 5-20 minutes and last fewer than 60 minutes, caused by cortical spreading depression, followed within 60 minutes by a migraine headache.",
    "affected_system": "Cerebral cortex (occipital and parietal lobes) and trigeminovascular pathways.",
    "symptoms": [
      "Visual aura (90% of cases): scintillating scotoma, shimmering zigzag lines (fortification spectra), blind spots",
      "Sensory aura: unilateral numbness or tingling pins-and-needles creeping up hand and face",
      "Speech/language aura: transient word-finding difficulty or mild dysphasia",
      "Followed by unilateral or bilateral pulsating headache, nausea, and photophobia"
    ],
    "early_warning_signs": [
      "Gradual onset of shimmering visual disturbances expanding across the visual field over 15 to 30 minutes"
    ],
    "possible_causes": [
      "Cortical spreading depression (CSD): a self-propagating wave of cellular depolarization across cerebral cortical neurons and glia",
      "Subsequent neurogenic inflammation and trigeminal sensitization"
    ],
    "risk_factors": [
      "Family history of classic migraine",
      "Female sex and fluctuating estrogen levels",
      "Use of combined oral contraceptive pills (contraindicated in migraine with aura due to ischemic stroke risk)"
    ],
    "disease_types": [
      "Migraine with typical aura (visual, sensory, or speech)",
      "Migraine with brainstem aura",
      "Hemiplegic migraine (motor weakness present)",
      "Retinal migraine (monocular visual disturbance)"
    ],
    "clinical_evaluation": "Careful neurological history confirming gradual spread (> 5 min) and resolution (< 60 min) of symptoms to distinguish from acute ischemic stroke / TIA (which have abrupt sudden onset).",
    "diagnostic_tests": [
      "Brain MRI with DWI (Diffusion-Weighted Imaging) - Essential on first presentation to definitively rule out acute ischemic stroke or intracranial lesion",
      "MRA or CTA of head and neck if vascular malformation suspected"
    ],
    "treatment_overview": "Abortive triptans should be taken at the onset of the *headache* phase (not during the aura phase). Preventive therapy with beta-blockers, lamotrigine (effective specifically for aura), or CGRP inhibitors.",
    "medication_classes": [
      "Acute headache phase: Triptans, NSAIDs, Gepants",
      "Aura-specific prevention: Lamotrigine, Topiramate, Flunarizine, Magnesium"
    ],
    "precautions": [
      "Absolute contraindication for estrogen-containing contraceptives or HRT due to heightened thrombotic stroke risk",
      "Stop smoking immediately"
    ],
    "prevention": [
      "Consistent daily sleep patterns, hydration, and avoidance of flickering strobe lights or screen glare",
      "Daily preventive magnesium glycinate (400-600 mg)"
    ],
    "complications": [
      "Migrainous infarction (ischemic stroke developing in territory of aura)",
      "Status migrainosus",
      "Migraine-triggered seizure (migralepsy)"
    ],
    "emergency_signs": [
      "Aura symptoms that start suddenly within seconds (rather than gradual minutes)",
      "Weakness or paralysis of one side of the body (motor symptoms)",
      "Aura lasting longer than 60 minutes without returning to baseline"
    ],
    "doctor_specialty": "Neurologist / Neuro-ophthalmologist",
    "faqs": [
      {
        "question": "Can I have aura without a headache?",
        "answer": "Yes. This is termed 'Typical aura without headache' (formerly acephalgic migraine), where visual flashing or sensory tingling occurs for 20-30 minutes without subsequent head pain."
      },
      {
        "question": "Why is estrogen contraindicated?",
        "answer": "Because migraine with aura slightly increases baseline risk of ischemic stroke, and estrogen-containing oral contraceptives multiply this thrombotic risk significantly."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A80.1 Migraine with aura",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Migraine with Aura Overview",
        "source": "Mayo Clinic / NINDS",
        "url": "https://www.ninds.nih.gov/health-information/disorders/migraine"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/migraine",
    "multilingual": {
      "hi": {
        "name": "माइग्रेन विथ ऑरा (Migraine with aura)",
        "summary": "सिरदर्द से ठीक पहले आंखों के सामने चमक, ज़िगज़ैग रेखाएं या हाथ में झनझनाहट महसूस होना, जिसके बाद तेज धड़कने वाला सिरदर्द होता है।",
        "advice": "जब ऑरा दिखे तो तुरंत वाहन चलाना या स्क्रीन देखना बंद करें और शांत अंधेरे कमरे में लेट जाएं।"
      },
      "hinglish": {
        "name": "Migraine with Aura (Visual flashes ke sath sar dard)",
        "summary": "Sar dard shuru hone se 20-30 min pehle aakho ke aage chamkile dhabbe ya zigzag line dikhna fir tez dard hona.",
        "advice": "Screen se door rahein aur doctor se prescription lein."
      },
      "ur": {
        "name": "مائیگرین مع اورا (بصری علامات کے ساتھ)",
        "summary": "سر درد سے پہلے آنکھوں کے سامنے چمکدار لکیریں یا اندھا پن ظاہر ہونا اور پھر شدید درد کا آغاز۔",
        "advice": "علامات شروع ہوتے ہی پرسکون ماحول میں آرام کریں۔"
      }
    },
    "target_3d_nodes": [
      "left-occipital-lobe",
      "right-occipital-lobe",
      "left-middle-temporal-gyrus",
      "right-middle-temporal-gyrus",
      "visual-cortex"
    ],
    "search_keywords": [
      "migraine with aura",
      "visual aura",
      "aankh ke samne chamak",
      "zigzag line in eye",
      "scintillating scotoma",
      "aura headache"
    ]
  },
  {
    "disease_id": "primary-stabbing-headache",
    "official_name": "Primary stabbing headache",
    "alternative_names": [
      "Ice-pick headache",
      "Ophthalmodynia periodica",
      "Jabs and jolts syndrome"
    ],
    "category": "headache",
    "subcategory": "Other primary headache disorders",
    "icd11_code": "8A84.0",
    "simple_description": "Extremely brief, sharp, needle-like or ice-pick stabbing pains in the head that last only a few seconds, occurring unpredictably in one or multiple spots without nausea or autonomic symptoms.",
    "medical_description": "Transient, sharp, lancinating jabs of head pain that occur spontaneously, lasting typically from a fraction of a second up to a few seconds, localized to the distribution of the first division of the trigeminal nerve (ophthalmic branch V1) or parietal/temporal scalp, with no autonomic symptoms and normal neuroimaging. Highly responsive to indomethacin.",
    "affected_system": "Trigeminal nerve sensory root (V1 division), epicranial nerve endings, and thalamocortical sensory pathways.",
    "symptoms": [
      "Sudden, ultra-sharp, stabbing pain like a needle, nail, or ice-pick poking into the skull",
      "Duration strictly very brief (typically 1 to 3 seconds, rarely up to 10 seconds)",
      "Single jab or irregular volleys of stabs occurring throughout the day",
      "Can occur in a single spot or wander to different regions of the scalp",
      "Absence of autonomic signs (no tearing, no runny nose, no redness in eyes)",
      "Absence of nausea, vomiting, photophobia, or phonophobia"
    ],
    "early_warning_signs": [
      "None; stabs strike completely spontaneously without warning or prodrome"
    ],
    "possible_causes": [
      "Focal episodic hyper-excitability of epicranial terminal sensory nerve branches (trigeminal and occipital nerve endings)",
      "Spontaneous paroxysmal central sensory disinhibition"
    ],
    "risk_factors": [
      "Co-existing history of migraine or cluster headache (stabbing headache is common in migraineurs)",
      "Female predominance",
      "Fatigue and emotional stress"
    ],
    "disease_types": [
      "Idiopathic primary stabbing headache",
      "Fixed-site primary stabbing headache (requiring structural imaging to rule out local pathology)"
    ],
    "clinical_evaluation": "Clinical diagnosis according to ICHD-3 criteria 4.7. Complete neurological examination is completely normal. Palpation of scalp may occasionally reveal localized cutaneous tenderness.",
    "diagnostic_tests": [
      "3T Brain MRI with cranial nerve protocol - Required if stabs occur strictly in a single fixed location to rule out structural intracranial lesion, meningioma, or vascular malformation"
    ],
    "treatment_overview": "Reassurance is the cornerstone because individual stabs last only seconds. If frequent or debilitating, Indomethacin is the gold-standard therapeutic agent.",
    "medication_classes": [
      "Indomethacin (NSAID) - Distinctively effective diagnostic and therapeutic agent",
      "Melatonin (3 to 12 mg at bedtime) - Well-tolerated non-NSAID alternative",
      "Gabapentin or Celecoxib for refractory cases"
    ],
    "precautions": [
      "Do not confuse with trigeminal neuralgia (which affects V2/V3 lower face and is triggered by chewing/touching)",
      "Do not confuse with migraine (which is pulsating and lasts hours with nausea)"
    ],
    "prevention": [
      "Regular sleep schedule and hydration",
      "Indomethacin prophylaxis when attack frequency is high"
    ],
    "complications": [
      "High anxiety and fear of serious brain disease due to the startling sharpness of the pain"
    ],
    "emergency_signs": [
      "Pain that becomes continuous rather than lasting seconds",
      "Accompanied by facial numbness, double vision, or limb weakness",
      "Associated with high fever or altered consciousness"
    ],
    "doctor_specialty": "Neurologist / Headache Specialist",
    "faqs": [
      {
        "question": "Is an ice-pick headache a sign of a brain tumor?",
        "answer": "Almost never. Primary stabbing headache is a benign primary disorder. However, if the stabbing occurs strictly in one single fixed point repeatedly, a neurologist will order an MRI to rule out any underlying structural cause."
      },
      {
        "question": "How is it different from Migraine?",
        "answer": "Ice-pick pain lasts only 1 to 3 seconds like a sudden needle poke. Migraine lasts 4 to 72 hours, is throbbing, and is accompanied by nausea and light sensitivity."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A84.0 Primary stabbing headache",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "ICHD-3: 4.7 Primary stabbing headache",
        "source": "International Headache Society",
        "url": "https://ichd-3.org/other-primary-headache-disorders/4-7-primary-stabbing-headache/"
      }
    ],
    "source_url": "https://ichd-3.org/other-primary-headache-disorders/4-7-primary-stabbing-headache/",
    "multilingual": {
      "hi": {
        "name": "प्राइमरी स्टैबिंग सिरदर्द (Ice-Pick Headache)",
        "summary": "सिर में अचानक सुई या कील चुभने जैसा बहुत तेज़ दर्द जो सिर्फ 1 से 3 सेकंड रहता है और फिर गायब हो जाता है।",
        "advice": "घबराएं नहीं, यह दर्द कुछ सेकंड में शांत हो जाता है। यदि यह दिन में बार-बार हो तो न्यूरोलॉजिस्ट से इंडोमेथासिन दवा के लिए परामर्श लें।"
      },
      "hinglish": {
        "name": "Ice-Pick Headache (Sui chubhan jaisa tez dard)",
        "summary": "Sir me achanak sui jaisa teekha jhatka lagna jo sirf 1-3 seconds rehta hai aur bina ulti ke hota hai.",
        "advice": "Ghabrayein nahi, yeh migraine nahi hai. Local ice pack lagayein aur neurologist se milen."
      },
      "ur": {
        "name": "پرائمری سٹیبنگ سر درد (سوئی جیسی چبھن)",
        "summary": "سر میں اچانک سوئی چبھنے جیسا شدید درد جو صرف چند سیکنڈ رہتا ہے اور خود بخود ختم ہو جاتا ہے۔",
        "advice": "یہ عام طور پر خطرناک نہیں ہوتا، پرسکون رہیں اور ڈاکٹر سے رجوع کریں۔"
      }
    },
    "target_3d_nodes": [
      "left-middle-temporal-gyrus",
      "right-middle-temporal-gyrus",
      "left-postcentral-gyrus",
      "right-postcentral-gyrus",
      "thalamus"
    ],
    "search_keywords": [
      "ice-pick headache",
      "stabbing headache",
      "sui chubhan",
      "needle pain head",
      "jabs and jolts",
      "ek point me dard",
      "sharp brief pain head"
    ]
  },
  {
    "disease_id": "cluster-headache",
    "official_name": "Cluster headache",
    "alternative_names": [
      "Trigeminal autonomic cephalalgia (TAC)",
      "Histamine headache",
      "Suicide headache"
    ],
    "category": "headache",
    "subcategory": "Trigeminal autonomic cephalalgias",
    "icd11_code": "8A82.0",
    "simple_description": "An excruciatingly severe, piercing headache strictly around or behind one eye, lasting 15 to 180 minutes, accompanied by eye redness, tearing, and a blocked nose on the same side, recurring in clusters.",
    "medical_description": "A severe strictly unilateral primary neurovascular headache classified among the trigeminal autonomic cephalalgias. Attacks last 15-180 minutes and occur from once every other day up to 8 times per day, accompanied by prominent ipsilateral cranial parasympathetic autonomic symptoms and physical restlessness or agitation.",
    "affected_system": "Hypothalamus (circadian pacemaker), trigeminovascular system, and cranial parasympathetic autonomic pathways (sphenopalatine ganglion).",
    "symptoms": [
      "Excruciating, drilling, burning or piercing pain centered in or around one eye (orbital/supraorbital)",
      "Strictly unilateral (always on the same side during a cluster period)",
      "Ipsilateral eye tearing (lacrimation) and redness (conjunctival injection)",
      "Ipsilateral nasal congestion or clear runny nose (rhinorrhea)",
      "Eyelid drooping (ptosis) and pupil constriction (miosis) on the painful side",
      "Marked physical restlessness, pacing the room or rocking (unlike migraine where patients lie still)"
    ],
    "early_warning_signs": [
      "Mild discomfort, fullness, or shadowy ache around the eye starting 10-15 minutes prior"
    ],
    "possible_causes": [
      "Hypothalamic activation triggering the trigeminal-autonomic reflex",
      "Disruption of circadian biologic clock rhythmicity"
    ],
    "risk_factors": [
      "Male sex (3 to 4 times more prevalent in men)",
      "Heavy cigarette smoking and alcohol consumption (alcohol almost invariably triggers an attack during a cluster bout)",
      "Age 20 to 50 years"
    ],
    "disease_types": [
      "Episodic cluster headache (bouts lasting 2 weeks to 3 months separated by remissions of >= 3 months)",
      "Chronic cluster headache (attacks continuing for > 1 year without remission or with remissions < 3 months)"
    ],
    "clinical_evaluation": "Strict diagnostic criteria based on attack duration, frequency, autonomic features, and observed motor agitation. Physical exam during attack shows Horner-like signs.",
    "diagnostic_tests": [
      "High-resolution 3T Brain MRI with pituitary and cavernous sinus protocol - Mandatory in all patients to exclude secondary structural lesions (pituitary adenoma, carotid dissection, cavernous sinus pathology)"
    ],
    "treatment_overview": "Dual strategy: Rapid abortive therapy with 100% high-flow normobaric oxygen or subcutaneous sumatriptan. Transitional bridging (oral corticosteroids or greater occipital nerve block) plus maintenance preventive therapy with Verapamil.",
    "medication_classes": [
      "Acute abortive: 100% Normobaric Oxygen (12-15 L/min via non-rebreather mask for 15-20 min)",
      "Subcutaneous Sumatriptan (6 mg) or Intranasal Zolmitriptan (5-10 mg)",
      "Preventive first-line: Verapamil (high dose, monitored with serial ECG for PR interval)",
      "Lithium carbonate, Topiramate, Galcanezumab (CGRP antibody approved for episodic cluster)"
    ],
    "precautions": [
      "Strict abstinence from alcohol during active cluster periods",
      "Avoid daytime naps which frequently provoke attacks",
      "Do not give oral analgesics or opioids (they take 45+ minutes to absorb and are completely ineffective for cluster attacks)"
    ],
    "prevention": [
      "Daily maintenance verapamil under cardiologist/neurologist supervision",
      "Greater occipital nerve (GON) block with steroid and local anesthetic for rapid temporary suppression"
    ],
    "complications": [
      "Severe psychological distress, depression, and high risk of suicide during bouts due to intolerable pain intensity"
    ],
    "emergency_signs": [
      "First presentation of severe orbital pain without prior history (must rule out acute glaucoma or carotid artery dissection)",
      "Sudden thunderclap onset or persistent Horner's syndrome outside of attacks"
    ],
    "doctor_specialty": "Neurologist / Headache Subspecialist",
    "faqs": [
      {
        "question": "Why is pure oxygen used?",
        "answer": "Inhaling 100% oxygen at 12 to 15 liters per minute via a non-rebreather mask causes cerebral vasoconstriction and dampens trigeminal-parasympathetic activity, terminating an attack within 10 to 15 minutes without medication side effects."
      },
      {
        "question": "Can regular painkillers help?",
        "answer": "No. Standard oral painkillers (like paracetamol or ibuprofen) are too slow to absorb and lack efficacy for the intense neuro-autonomic mechanisms of cluster headache."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A82.0 Cluster headache",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Cluster Headache Overview",
        "source": "NINDS / MedlinePlus",
        "url": "https://www.ninds.nih.gov/health-information/disorders/headache"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/headache",
    "multilingual": {
      "hi": {
        "name": "क्लस्टर सिरदर्द (Cluster headache)",
        "summary": "एक आंख के पीछे होने वाला असहनीय, तेज जलन या ड्रिलिंग जैसा दर्द जिसके साथ उसी आंख से पानी, लाली और नाक बंद हो जाती है।",
        "advice": "अटैक के समय 100% शुद्ध ऑक्सीजन मास्क द्वारा लेना सबसे असरदार उपाय है। तुरंत न्यूरोलॉजिस्ट से मिलें।"
      },
      "hinglish": {
        "name": "Cluster Headache (Aankh ke peeche tez aag jaisa dard)",
        "summary": "Ek aakh ke peeche aag jaisa dard hona jisme aakh laal ho jaye aur paani nikle, 15-180 minute tak rehta hai.",
        "advice": "Normal painkiller kaam nahi karti. High-flow oxygen aur Verapamil therapy ke liye doctor se sampark karein."
      },
      "ur": {
        "name": "کلسٹر سر درد (آنکھ کے پیچھے شدید درد)",
        "summary": "ایک آنکھ کے گرد انتہائی شدید درد جس کے ساتھ آنکھ کا سرخ ہونا، پانی آنا اور ناک بند ہونا شامل ہے۔",
        "advice": "خالص آکسیجن کا استعمال اور نیورولوجسٹ کا مشورہ لازمی ہے۔"
      }
    },
    "target_3d_nodes": [
      "hypothalamus",
      "left-middle-temporal-gyrus",
      "right-middle-temporal-gyrus",
      "trigeminal-nerve"
    ],
    "search_keywords": [
      "cluster headache",
      "aankh ke peeche dard",
      "eye pain and tearing",
      "suicide headache",
      "histamine headache",
      "one eye piercing pain"
    ]
  },
  {
    "disease_id": "tension-type-headache",
    "official_name": "Tension-type headache",
    "alternative_names": [
      "Stress headache",
      "Band-like headache",
      "Muscle contraction headache"
    ],
    "category": "headache",
    "subcategory": "Primary headache disorders",
    "icd11_code": "8A81",
    "simple_description": "The most common type of headache, feeling like a constant dull ache or tight band pressing around both sides of the head, usually caused by stress, posture, or muscle tension.",
    "medical_description": "A primary headache disorder characterized by bilateral, pressing or tightening (non-pulsating) pain of mild to moderate intensity. It is not aggravated by routine physical activity, and lacks nausea, with at most one of photophobia or phonophobia present.",
    "affected_system": "Pericranial myofascial tissues, peripheral nociceptive afferents, and central pain processing mechanisms.",
    "symptoms": [
      "Dull, aching, non-throbbing pain across forehead, temples, or back of head",
      "Sensation of a tight rubber band or vice gripping the skull",
      "Bilateral distribution (both sides of the head)",
      "Tenderness in neck, shoulder, and scalp muscles upon palpation",
      "Mild to moderate intensity that does not prevent daily tasks",
      "Absence of nausea or vomiting"
    ],
    "early_warning_signs": [
      "Gradual tightening in the neck and shoulders after prolonged desk work or stress"
    ],
    "possible_causes": [
      "Heightened pericranial myofascial nociception",
      "Sensitization of central nociceptive neurons in chronic forms",
      "Sustained muscle contraction, poor posture, and emotional strain"
    ],
    "risk_factors": [
      "Mental or emotional stress and anxiety",
      "Prolonged computer or mobile screen use with poor ergonomic posture",
      "Sleep deprivation and eye strain",
      "Dehydration and missed meals"
    ],
    "disease_types": [
      "Infrequent episodic tension-type headache (< 1 day/month)",
      "Frequent episodic tension-type headache (1-14 days/month)",
      "Chronic tension-type headache (>= 15 days/month for > 3 months)"
    ],
    "clinical_evaluation": "Clinical diagnosis based on ICHD-3 criteria. Neurological examination is completely normal aside from pericranial muscle tenderness on manual palpation.",
    "diagnostic_tests": [
      "Neuroimaging (CT/MRI) is typically NOT indicated unless red flags or abnormal neurological signs exist"
    ],
    "treatment_overview": "Simple analgesics (Paracetamol, Ibuprofen, Naproxen) for episodic attacks. For chronic tension headache, low-dose Amitriptyline is the primary evidence-based prophylaxis, combined with physical therapy and stress management.",
    "medication_classes": [
      "Acute: Paracetamol (Acetaminophen), NSAIDs (Ibuprofen, Naproxen, Aspirin)",
      "Chronic prophylaxis: Tricyclic antidepressants (Amitriptyline 10-50 mg nocte), Mirtazapine"
    ],
    "precautions": [
      "Avoid taking simple analgesics on more than 14 days per month to prevent Medication-Overuse Headache",
      "Do not use opioids or combination sedatives"
    ],
    "prevention": [
      "Maintain ergonomic desk setup with monitor at eye level",
      "Practice progressive relaxation exercises and neck stretches",
      "Ensure regular 7-8 hours sleep and adequate hydration"
    ],
    "complications": [
      "Chronification leading to chronic tension-type headache and analgesic overuse"
    ],
    "emergency_signs": [
      "Headache that is sudden and explosive (thunderclap)",
      "Associated with new neurological deficits, stiff neck, or fever"
    ],
    "doctor_specialty": "General Physician / Neurologist",
    "faqs": [
      {
        "question": "How can I tell Tension headache from Migraine?",
        "answer": "Tension headache feels like a tight dull band on *both* sides of the head and is not worsened by walking. Migraine is usually on *one* side, throbs with your heartbeat, and causes nausea or extreme light sensitivity."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A81 Tension-type headache",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Tension Headache",
        "source": "NHS UK",
        "url": "https://www.nhs.uk/conditions/tension-headaches/"
      }
    ],
    "source_url": "https://www.nhs.uk/conditions/tension-headaches/",
    "multilingual": {
      "hi": {
        "name": "टेंशन सिरदर्द (Tension-type headache)",
        "summary": "सिर के दोनों तरफ पट्टी बंधे होने जैसा भारी दबाव और धीमा दर्द जो तनाव, गर्दन में खिंचाव या नींद की कमी से होता है।",
        "advice": "गर्दन की स्ट्रेचिंग करें, स्क्रीन से ब्रेक लें, पानी पिएं और तनाव कम करने के उपाय अपनाएं।"
      },
      "hinglish": {
        "name": "Tension Headache (Sar me tight patti bandha jaisa dard)",
        "summary": "Dono taraf bhari dabav mehsoos hona, ulti nahi aati, stress ya computer screen se badhta hai.",
        "advice": "Rest karein, posture theek karein aur paracetamol le sakte hain."
      },
      "ur": {
        "name": "ٹینشن سر درد (دباؤ والا سر درد)",
        "summary": "سر کے دونوں طرف پٹی بندھے ہونے جیسا دباؤ اور کھچاؤ جو تھکن اور ذہنی دباؤ سے پیدا ہوتا ہے۔",
        "advice": "آرام کریں اور گردن کے پٹھوں کی ورزش کریں۔"
      }
    },
    "target_3d_nodes": [
      "frontal-lobe",
      "parietal-lobe",
      "occipital-lobe"
    ],
    "search_keywords": [
      "tension headache",
      "band like pain",
      "heavy head",
      "dono taraf dard",
      "sar me dabav",
      "stress headache",
      "tight head"
    ]
  },
  {
    "disease_id": "nummular-headache",
    "official_name": "Nummular headache",
    "alternative_names": [
      "Coin-shaped headache",
      "Nummular cephalea"
    ],
    "category": "headache",
    "subcategory": "Other primary headache disorders",
    "icd11_code": "8A84.1",
    "simple_description": "A rare, persistent or intermittent head pain strictly confined to a coin-sized rounded or elliptical area of the scalp, usually without spreading.",
    "medical_description": "A primary headache disorder characterized by head pain exclusively felt in a sharply contoured, rounded or elliptical area, typically 2 to 6 cm in diameter, that remains unchanged in size and shape over time. Accompanied by local sensory dysfunction (hypesthesia, hyperalgesia, allodynia).",
    "affected_system": "Epicranial terminal nerve branches in a circumscribed scalp zone.",
    "symptoms": [
      "Pain confined strictly to a coin-shaped area (2 to 6 cm across) on the scalp",
      "Pain may be mild to moderate, continuous or intermittent",
      "Localized sensitivity, tingling, or numbness within the coin area",
      "Absence of nausea, vomiting, or autonomic symptoms",
      "The location never changes shape or migrates"
    ],
    "early_warning_signs": [
      "Localized mild tenderness in a circular patch on the scalp"
    ],
    "possible_causes": [
      "Focal dysfunction or entrapment of terminal sensory epicranial nerve twigs"
    ],
    "risk_factors": [
      "Female predominance",
      "History of autoimmune conditions"
    ],
    "disease_types": [
      "Episodic nummular headache",
      "Continuous nummular headache"
    ],
    "clinical_evaluation": "Inspection and palpation of the scalp zone, demonstrating distinct hyperesthesia/allodynia within the circular border.",
    "diagnostic_tests": [
      "3T Brain and skull MRI - Necessary to rule out localized skull bone lesions, osteoma, myeloma, or focal pachymeningitis"
    ],
    "treatment_overview": "Local subcutaneous anesthetic block (e.g. bupivacaine) or topical lidocaine/capsaicin patches. Systemic treatment with Gabapentin or Botulinum toxin type A injections into the coin site.",
    "medication_classes": [
      "Local nerve blocks (Lidocaine / Bupivacaine)",
      "Neuropathic agents (Gabapentin, Pregabalin)",
      "OnabotulinumtoxinA local injection"
    ],
    "precautions": [
      "Avoid aggressive rubbing or pressing on the tender spot"
    ],
    "prevention": [
      "Protect the scalp spot from cold drafts or mechanical trauma"
    ],
    "complications": [
      "Chronic local scalp allodynia"
    ],
    "emergency_signs": [
      "Rapid enlargement of the painful area or development of a visible lump or ulceration"
    ],
    "doctor_specialty": "Neurologist",
    "faqs": [
      {
        "question": "Does nummular headache spread to the whole head?",
        "answer": "No. By medical definition, nummular headache remains strictly within its circumscribed coin-shaped boundary."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A84.1 Nummular headache",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "ICHD-3: 4.8 Nummular headache",
        "source": "International Headache Society",
        "url": "https://ichd-3.org/other-primary-headache-disorders/4-8-nummular-headache/"
      }
    ],
    "source_url": "https://ichd-3.org/other-primary-headache-disorders/4-8-nummular-headache/",
    "multilingual": {
      "hi": {
        "name": "न्यूमुलर सिरदर्द (Nummular / Coin-shaped headache)",
        "summary": "सिर में सिक्के के आकार के एक छोटे गोल हिस्से में सीमित दर्द जो अपनी जगह से फैलता नहीं है।",
        "advice": "इस बिंदु को बार-बार न दबाएं और न्यूरोलॉजिस्ट से लोकल नर्व ब्लॉक या दवा की सलाह लें।"
      },
      "hinglish": {
        "name": "Nummular Headache (Coin shape ka focal head pain)",
        "summary": "Sir ke ek chote gol sikke jaise point par lagatar ya ruk-ruk kar dard hona.",
        "advice": "MRI karwayein aur doctor se nerve block ka mashwara karein."
      },
      "ur": {
        "name": "نیومولر سر درد (سکے کی شکل کا درد)",
        "summary": "سر کے ایک محدود گول دائرے میں درد جو پھیلتا نہیں ہے۔",
        "advice": "نیورولوجسٹ سے معائنہ کروائیں۔"
      }
    },
    "target_3d_nodes": [
      "parietal-lobe",
      "somatosensory-cortex"
    ],
    "search_keywords": [
      "nummular headache",
      "coin shaped pain",
      "round spot head pain",
      "sikke jaisa dard",
      "fixed spot headache"
    ]
  },
  {
    "disease_id": "medication-overuse-headache",
    "official_name": "Medication-overuse headache",
    "alternative_names": [
      "Rebound headache",
      "Analgesic rebound",
      "MOH"
    ],
    "category": "headache",
    "subcategory": "Secondary headache disorders",
    "icd11_code": "8A85.0",
    "simple_description": "A persistent daily headache caused by frequent, regular use of acute pain relievers or migraine medications for headaches, creating a vicious cycle of rebound pain.",
    "medical_description": "Headache occurring on 15 or more days per month in a patient with a pre-existing primary headache disorder, developing as a consequence of regular overuse of acute or symptomatic headache medication (>= 10 days/month for triptans, opioids, or combination analgesics; or >= 15 days/month for simple analgesics) for more than 3 months.",
    "affected_system": "Central pain modulation, descending serotonergic pathways, and trigeminal sensitization.",
    "symptoms": [
      "Daily or near-daily dull, throbbing, or mixed-character headache present upon waking",
      "Headache temporarily improves with painkillers, only to return worse as the dose wears off",
      "Gradual increase in medication consumption over months",
      "Associated restlessness, anxiety, asthenia, and poor sleep quality"
    ],
    "early_warning_signs": [
      "Needing painkiller tablets more than 2 to 3 days every single week"
    ],
    "possible_causes": [
      "Receptor down-regulation and central sensitization caused by repetitive intermittent drug exposure",
      "Alterations in endocannabinoid and endogenous opioid systems"
    ],
    "risk_factors": [
      "Pre-existing migraine or tension-type headache",
      "Use of combination analgesics containing caffeine, codeine, or butalbital",
      "High psychological stress and sleep disturbance"
    ],
    "disease_types": [
      "Triptan-overuse headache (>= 10 days/month)",
      "Simple analgesic-overuse headache (Paracetamol/NSAIDs >= 15 days/month)",
      "Combination analgesic-overuse headache (>= 10 days/month)",
      "Opioid-overuse headache (>= 10 days/month)"
    ],
    "clinical_evaluation": "Detailed chronological drug diary showing frequency, dose, and days per month of all prescription and over-the-counter pain medications.",
    "diagnostic_tests": [
      "Rule out secondary structural etiologies with Brain MRI if atypical features exist"
    ],
    "treatment_overview": "Structured withdrawal of the overused acute medication under neurological guidance, initiation of effective preventive therapy (e.g. Topiramate, Amitriptyline, or CGRP monoclonal antibodies), and patient education.",
    "medication_classes": [
      "Preventive bridging: Corticosteroid taper (Prednisone 60 mg tapered over 10 days) or Greater Occipital Nerve block during withdrawal",
      "Maintenance prevention: Topiramate, OnabotulinumtoxinA, CGRP mAbs (Erenumab, Fremanezumab)",
      "Non-overused rescue alternatives (limited strictly to <= 2 days/week)"
    ],
    "precautions": [
      "Do NOT increase analgesic doses when headaches become more frequent; it perpetuates the cycle",
      "Strict limit on acute headache medications to no more than 2 days per week"
    ],
    "prevention": [
      "Start non-analgesic preventive medication early if headaches occur > 4 days/month",
      "Avoid multi-ingredient analgesics containing caffeine and codeine"
    ],
    "complications": [
      "Refractory chronic daily headache",
      "Gastric ulceration or renal impairment from chronic NSAID overuse",
      "Opioid dependence syndrome"
    ],
    "emergency_signs": [
      "Severe withdrawal symptoms including seizures or acute delirium (especially with butalbital or opioid withdrawal)"
    ],
    "doctor_specialty": "Neurologist / Headache Clinic Specialist",
    "faqs": [
      {
        "question": "Can regular painkillers actually cause more headaches?",
        "answer": "Yes. When taken more than 10 to 15 days a month, pain relievers reset the brain's pain threshold, causing a rebound headache every time the drug wears off."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A85.0 Medication-overuse headache",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Medication Overuse Headaches",
        "source": "MedlinePlus / NINDS",
        "url": "https://medlineplus.gov/ency/article/000783.htm"
      }
    ],
    "source_url": "https://medlineplus.gov/ency/article/000783.htm",
    "multilingual": {
      "hi": {
        "name": "दवा के अधिक उपयोग से सिरदर्द (Medication-overuse headache)",
        "summary": "पेनकिलर या माइग्रेन की दवाएं बहुत ज्यादा लेने से होने वाला रोजाना का रिबाउंड सिरदर्द।",
        "advice": "दवा का सेवन खुद से न बढ़ाएं। न्यूरोलॉजिस्ट की देखरेख में पेनकिलर कम करके प्रिवेंटिव दवा शुरू करें।"
      },
      "hinglish": {
        "name": "Medication Overuse Headache (Rebound sar dard)",
        "summary": "Roz-roz painkiller khane se dimaag aadi ho jata hai aur dava ka asar khatam hote hi dobara dard shuru ho jata hai.",
        "advice": "Painkillers band karein aur doctor se preventive treatment lein."
      },
      "ur": {
        "name": "ادویات کے زیادہ استعمال سے سر درد",
        "summary": "درد کش ادویات کے روزانہ استعمال کی وجہ سے ہونے والا مستقل سر درد۔",
        "advice": "نیورولوجسٹ کے مشورے سے درد کش ادویات کو بتدریج کم کریں۔"
      }
    },
    "target_3d_nodes": [
      "thalamus",
      "frontal-lobe",
      "brainstem"
    ],
    "search_keywords": [
      "medication overuse headache",
      "rebound headache",
      "roz painkiller khane se dard",
      "analgesic rebound",
      "daily headache"
    ]
  },
  {
    "disease_id": "acute-ischemic-stroke",
    "official_name": "Acute ischemic stroke",
    "alternative_names": [
      "Cerebral infarction",
      "Brain attack",
      "Falij",
      "Lakwa"
    ],
    "category": "stroke",
    "subcategory": "Cerebrovascular diseases",
    "icd11_code": "8B11",
    "simple_description": "A life-threatening medical emergency where a blood clot blocks blood flow and oxygen to a part of the brain, causing sudden facial drooping, arm weakness, or difficulty speaking.",
    "medical_description": "An acute neurological deficit resulting from focal cerebral, spinal, or retinal infarction caused by thrombotic or embolic occlusion of a cerebral artery, persisting for >= 24 hours or until death, or with neuroimaging evidence of acute infarction.",
    "affected_system": "Cerebral arterial circulation (Middle, Anterior, Posterior cerebral arteries or vertebrobasilar territory) and cortical/subcortical neurons.",
    "symptoms": [
      "Sudden numbness or weakness of the face, arm, or leg, especially on one side of the body (hemiparesis)",
      "Sudden confusion, difficulty speaking, or understanding speech (aphasia / dysarthria)",
      "Sudden vision impairment in one or both eyes (hemianopia / amaurosis fugax)",
      "Sudden trouble walking, loss of balance, or coordination (ataxia)",
      "Sudden severe headache with no known cause"
    ],
    "early_warning_signs": [
      "Transient Ischemic Attack (TIA): brief warning episodes of weakness or speech slurring resolving within minutes"
    ],
    "possible_causes": [
      "Large artery atherosclerosis with acute in-situ thrombosis",
      "Cardioembolism (e.g. from Atrial Fibrillation, prosthetic valve, or dilated cardiomyopathy)",
      "Small vessel occlusive disease (lacunar infarction)",
      "Arterial dissection (carotid or vertebral artery)"
    ],
    "risk_factors": [
      "Hypertension (single most important modifiable risk factor)",
      "Diabetes mellitus and dyslipidemia",
      "Atrial fibrillation and cardiovascular disease",
      "Cigarette smoking and physical inactivity",
      "Older age (> 55 years) and family history of stroke"
    ],
    "disease_types": [
      "Large vessel atherothrombotic stroke (TOAST 1)",
      "Cardioembolic stroke (TOAST 2)",
      "Small vessel lacunar stroke (TOAST 3)",
      "Stroke of other determined etiology (TOAST 4)",
      "Cryptogenic stroke (TOAST 5)"
    ],
    "clinical_evaluation": "Emergent FAST triage (Face, Arm, Speech, Time), National Institutes of Health Stroke Scale (NIHSS) scoring, capillary blood glucose (to exclude hypoglycemia mimic), emergent non-contrast CT.",
    "diagnostic_tests": [
      "Immediate Non-contrast Brain CT - Mandatory within 20 minutes of arrival to distinguish ischemic stroke from intracerebral hemorrhage",
      "Brain MRI with DWI (Diffusion-Weighted Imaging) - Gold standard for identifying acute hyperacute infarction within minutes",
      "CTA or MRA of head and neck - Identify large vessel occlusion (LVO) eligible for mechanical thrombectomy",
      "12-Lead ECG and telemetry - Screen for atrial fibrillation",
      "Transthoracic / Transesophageal Echocardiogram - Identify cardiac sources of emboli"
    ],
    "treatment_overview": "TIME-CRITICAL EMERGENCY PROTOCOL: Intravenous thrombolysis (Alteplase / Tenecteplase) within 4.5 hours of symptom onset ('last known well'). Mechanical endovascular thrombectomy for large vessel occlusions within 6 to 24 hours. Subsequent secondary prevention with antiplatelets, statins, and antihypertensives.",
    "medication_classes": [
      "Hyperacute thrombolytic: IV Tenecteplase (0.25 mg/kg) or Alteplase (0.9 mg/kg)",
      "Antiplatelet therapy: Aspirin (160-300 mg) started within 24-48h (after excluding hemorrhage)",
      "Dual antiplatelet therapy (DAPT: Aspirin + Clopidogrel) for minor stroke (NIHSS <= 3) for 21 days",
      "High-intensity statins: Atorvastatin (80 mg) or Rosuvastatin (40 mg)",
      "Anticoagulation (DOACs: Apixaban, Dabigatran) for atrial fibrillation"
    ],
    "precautions": [
      "DO NOT administer aspirin or blood thinners at home before a hospital CT scan has ruled out brain bleeding!",
      "DO NOT lower high blood pressure acutely at home unless directed by stroke physician (permissive hypertension maintains penumbra perfusion)"
    ],
    "prevention": [
      "Aggressive blood pressure control (< 130/80 mmHg)",
      "Strict glycemic control in diabetes and smoking cessation",
      "Oral anticoagulation for diagnosed atrial fibrillation"
    ],
    "complications": [
      "Hemorrhagic transformation of ischemic infarct",
      "Malignant cerebral edema and brain herniation",
      "Post-stroke aspiration pneumonia, deep vein thrombosis, depression"
    ],
    "emergency_signs": [
      "🚨 CRITICAL EMERGENCY: Call 112 / 911 immediately upon noticing ANY of: Face drooping, Arm weakness, Slurred speech (FAST)"
    ],
    "doctor_specialty": "Vascular Neurologist / Neuro-interventionalist / Emergency Medicine",
    "faqs": [
      {
        "question": "What does FAST mean in stroke?",
        "answer": "F: Face drooping (one side smile drops), A: Arm weakness (arm drifts downward when raised), S: Speech difficulty (slurred or confused words), T: Time to call emergency (112 / 911) immediately without waiting!"
      },
      {
        "question": "Why is time so critical in stroke?",
        "answer": "In ischemic stroke, approximately 1.9 million brain neurons die every single minute of delay. Thrombolysis is only safe and effective within the first 4.5 hours."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8B11 Ischemic stroke",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Stroke Information Page",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/stroke"
      },
      {
        "title": "Guidelines for the Early Management of Patients With Acute Ischemic Stroke",
        "source": "American Heart Association / American Stroke Association",
        "url": "https://www.ahajournals.org/doi/10.1161/STR.0000000000000211"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/stroke",
    "multilingual": {
      "hi": {
        "name": "एक्यूट इस्केमिक स्ट्रोक / लकवा (Acute Ischemic Stroke)",
        "summary": "मस्तिष्क की नस में खून का थक्का जमने से रक्त प्रवाह रुक जाना। चेहरा टेढ़ा होना, एक तरफ हाथ में कमजोरी और बोली लड़खड़ाना इसके मुख्य लक्षण हैं।",
        "advice": "🚨 तत्काल आपातकाल! तुरंत 112 / 108 पर कॉल करें और मरीज को तुरंत स्ट्रोक-रेडी अस्पताल ले जाएं। घर पर कोई दवा न दें।"
      },
      "hinglish": {
        "name": "Acute Ischemic Stroke (Lakwa / Paralysis / Brain Attack)",
        "summary": "Dimaag ki blood vessel block hone se sudden achanak haath-pair kamzor hona, chehra tedha hona aur bolne me dikkat aana.",
        "advice": "🚨 EMERGENCY: Har minute me 19 lakh neurons marte hain. Turant 112 par call karein aur 4.5 ghante ke andar CT scan karwayein."
      },
      "ur": {
        "name": "فالج / دماغی شریان کا بند ہونا (Ischemic Stroke)",
        "summary": "دماغ کی نالی میں لوتھڑا بننے سے خون کی سپلائی رک جانا، چہرے کا ٹیڑھا ہونا اور جسم کے ایک حصے کی کمزوری۔",
        "advice": "فوری ایمرجنسی! بلا تاخیر 112 پر کال کریں اور ہسپتال لے جائیں۔"
      }
    },
    "target_3d_nodes": [
      "middle-cerebral-artery",
      "left-precentral-gyrus",
      "right-precentral-gyrus",
      "internal-capsule",
      "broca-area"
    ],
    "search_keywords": [
      "stroke",
      "lakwa",
      "falij",
      "paralysis",
      "face drooping",
      "arm weakness",
      "sudden speech loss",
      "ischemic stroke",
      "fast checklist"
    ]
  },
  {
    "disease_id": "subarachnoid-hemorrhage",
    "official_name": "Subarachnoid hemorrhage",
    "alternative_names": [
      "Aneurysmal SAH",
      "Thunderclap intracranial bleed",
      "Ruptured brain aneurysm"
    ],
    "category": "stroke",
    "subcategory": "Cerebrovascular diseases",
    "icd11_code": "8B01",
    "simple_description": "A critical, life-threatening emergency where a ruptured blood vessel causes bleeding into the space surrounding the brain, presenting as an instantaneous, explosive 'worst headache of life'.",
    "medical_description": "Extravasation of arterial blood into the subarachnoid space between the arachnoid and pia mater, most commonly (85%) caused by the rupture of an intracranial saccular (berry) aneurysm on the circle of Willis. Characterized by sudden peak headache intensity in seconds (thunderclap headache), meningism, and neurological collapse.",
    "affected_system": "Subarachnoid cisterns, circle of Willis arterial vasculature, and intracranial pressure dynamics.",
    "symptoms": [
      "Instantaneous, explosive thunderclap headache reaching 10/10 maximum severity in seconds ('bomb exploding in the head')",
      "Neck stiffness and pain (nuchal rigidity / meningismus)",
      "Photophobia and excruciating eye pain",
      "Transient or prolonged loss of consciousness at ictus",
      "Sudden projectile nausea and vomiting",
      "Seizures or focal neurological deficits (e.g. oculomotor third nerve palsy with blown pupil)"
    ],
    "early_warning_signs": [
      "Sentinel headache: a minor warning leak headache occurring days to weeks prior to major rupture"
    ],
    "possible_causes": [
      "Rupture of intracranial saccular berry aneurysm (85%)",
      "Arteriovenous malformation (AVM) rupture",
      "Non-aneurysmal perimesencephalic hemorrhage",
      "Cranial trauma"
    ],
    "risk_factors": [
      "Chronic arterial hypertension and heavy cigarette smoking",
      "Excessive alcohol consumption",
      "Polycystic kidney disease (ADPKD) or family history of intracranial aneurysms",
      "Connective tissue disorders (Marfan syndrome, Ehlers-Danlos syndrome type IV)"
    ],
    "disease_types": [
      "Aneurysmal subarachnoid hemorrhage",
      "Non-aneurysmal perimesencephalic subarachnoid hemorrhage",
      "Traumatic subarachnoid hemorrhage"
    ],
    "clinical_evaluation": "Hunt and Hess clinical grading scale, World Federation of Neurosurgical Societies (WFNS) score, urgent non-contrast head CT.",
    "diagnostic_tests": [
      "Emergent Non-contrast Head CT - 98-100% sensitivity if performed within 6 hours of headache onset",
      "Lumbar Puncture (LP) - MANDATORY if CT is negative or equivocal and thunderclap headache occurred > 6 hours prior; shows elevated opening pressure and xanthochromia (spectrophotometry)",
      "Digital Subtraction Angiography (DSA) / CTA - Gold standard to pinpoint the exact aneurysm location and architecture for urgent repair"
    ],
    "treatment_overview": "CRITICAL EMERGENCY ADMISSION TO NEURO-ICU: Airway stabilization, strict blood pressure control (SBP < 140 mmHg prior to aneurysm securing), urgent surgical clipping or endovascular coiling within 24 hours to prevent rebleeding. Nimodipine (60 mg every 4 hours for 21 days) to prevent delayed cerebral ischemia from vasospasm.",
    "medication_classes": [
      "Vasospasm prophylaxis: Nimodipine (oral calcium channel blocker, 60 mg q4h x 21 days)",
      "Antihypertensives (IV Labetalol, Nicardipine) to titrate BP before obliteration",
      "Analgesia and anti-emetics",
      "Anticonvulsant prophylaxis (Levetiracetam) during acute phase"
    ],
    "precautions": [
      "NEVER discharge a patient with sudden explosive thunderclap headache based on a normal physical exam alone without CT and LP",
      "Avoid sedation until neurological status is established"
    ],
    "prevention": [
      "Screening MRA in first-degree relatives of patients with >= 2 family members with aneurysmal SAH",
      "Strict blood pressure management and cessation of smoking"
    ],
    "complications": [
      "Early aneurysm rebleeding (70% mortality if rebleeds)",
      "Delayed cerebral ischemia (DCI) and cerebral vasospasm (days 4 to 14)",
      "Acute obstructive or communicating hydrocephalus (requiring external ventricular drain)",
      "Hyponatremia (cerebral salt wasting syndrome)"
    ],
    "emergency_signs": [
      "🚨 CRITICAL EMERGENCY: Any sudden explosive headache reaching peak severity in seconds requires immediate ambulance transfer (112 / 911) to emergency neurosurgery center."
    ],
    "doctor_specialty": "Neurosurgeon / Neurocritical Care Specialist / Vascular Neurologist",
    "faqs": [
      {
        "question": "What is a thunderclap headache?",
        "answer": "It is a headache that strikes like a sudden clap of thunder, reaching maximum unbearable pain within seconds to 1 minute. It is an absolute medical red flag for brain bleeding (subarachnoid hemorrhage) until proven otherwise."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8B01 Subarachnoid hemorrhage",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Subarachnoid Hemorrhage Information",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/subarachnoid-hemorrhage"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/subarachnoid-hemorrhage",
    "multilingual": {
      "hi": {
        "name": "सबअरेकनॉइड हैमरेज (Subarachnoid hemorrhage / मस्तिष्कीय रक्तस्राव)",
        "summary": "मस्तिष्क की नस (एन्यूरिज्म) फटने से अचानक होने वाला 'जिंदगी का सबसे भयानक सिरदर्द' (थंडरक्लैप)। साथ में गर्दन में अकड़न और बेहोशी हो सकती है।",
        "advice": "🚨 तत्काल मेडिकल इमरजेंसी! तुरंत 112 / 108 पर कॉल करें और इमरजेंसी न्यूरोसर्जरी वार्ड जाएं।"
      },
      "hinglish": {
        "name": "Subarachnoid Hemorrhage (Achanak bomb jaisa phatne wala sar dard)",
        "summary": "Dimaag ki nas phatne se 1 second me hone wala sabse tez sar dard, gardan me akad aur ulti aana.",
        "advice": "🚨 TURANT EMERGENCY JAYEIN! Yeh brain bleeding ka sign hai, turant CT scan aur surgery lagti hai."
      },
      "ur": {
        "name": "سب اریکنوئڈ ہیمرج (دماغ میں اچانک شدید خون کا بہاؤ)",
        "summary": "دماغ کی رگ پھٹنے کی وجہ سے چند سیکنڈ میں شدید ترین سر درد، الٹی اور گردن کا اکڑ جانا۔",
        "advice": "انتہائی ہنگامی صورتحال! فوراً ایمرجنسی میں رابطہ کریں۔"
      }
    },
    "target_3d_nodes": [
      "circle-of-willis",
      "basilar-artery",
      "anterior-communicating-artery",
      "subarachnoid-space"
    ],
    "search_keywords": [
      "thunderclap headache",
      "subarachnoid hemorrhage",
      "bomb phatne jaisa dard",
      "worst headache of life",
      "aneurysm bleed",
      "gardan me akad aur tez sar dard"
    ]
  },
  {
    "disease_id": "generalized-tonic-clonic-seizure",
    "official_name": "Generalized tonic-clonic seizure",
    "alternative_names": [
      "Grand mal seizure",
      "Convulsion",
      "Mirgi ka daura"
    ],
    "category": "epilepsy",
    "subcategory": "Epileptic disorders",
    "icd11_code": "8A60",
    "simple_description": "A major seizure involving the entire brain, causing sudden loss of consciousness, body stiffening (tonic phase), followed by violent rhythmic jerking of arms and legs (clonic phase).",
    "medical_description": "A generalized epileptic seizure characterized by bilateral, symmetrical motor involvement without focal onset. It proceeds through an initial tonic phase (generalized sustained muscular contraction, ictal cry, cyanosis) lasting 10-20 seconds, followed by a clonic phase (synchronous rhythmic jerking) lasting 30-90 seconds, followed by postictal stupor and confusion.",
    "affected_system": "Bilateral cerebral cortices, thalamocortical networks, and brainstem reticular activating system.",
    "symptoms": [
      "Sudden unexpected loss of consciousness and collapse",
      "Tonic phase: stiffening of entire body, back arching, upward eye deviation, jaw clamping (tongue biting)",
      "Ictal cry caused by forced exhalation through closed vocal cords",
      "Clonic phase: violent rhythmic jerking of all four limbs, frothing at the mouth",
      "Urinary or fecal incontinence",
      "Postictal phase: deep flaccid coma transitioning to confusion, severe headache, muscle soreness"
    ],
    "early_warning_signs": [
      "In primary generalized epilepsy: often no warning aura; in focal seizure with secondary generalization, an initial focal sensory or epigastric sensation precedes"
    ],
    "possible_causes": [
      "Genetic idiopathic generalized epilepsy (channelopathies affecting GABA or sodium channels)",
      "Structural brain lesions (stroke, trauma, brain tumor)",
      "Infections (meningitis, encephalitis)",
      "Metabolic/toxic disturbances (severe hyponatremia, hypoglycemia, alcohol withdrawal)"
    ],
    "risk_factors": [
      "Sleep deprivation and high psychological stress",
      "Missed doses of antiepileptic medications",
      "Alcohol intoxication or withdrawal",
      "Flickering strobe lights (photosensitive epilepsy)"
    ],
    "disease_types": [
      "Primary generalized tonic-clonic seizure",
      "Focal-to-bilateral tonic-clonic seizure (secondary generalization)"
    ],
    "clinical_evaluation": "Comprehensive eyewitness account of the event sequence, detailed neurological examination, serum electrolytes, glucose, toxicology screen.",
    "diagnostic_tests": [
      "Standard and Sleep-Deprived Electroencephalogram (EEG) - Evaluates generalized spike-and-wave or polyspike discharges",
      "3T Brain MRI (Epilepsy Protocol) - High-resolution coronal T2 and FLAIR to identify mesial temporal sclerosis, focal cortical dysplasia, or cavernoma"
    ],
    "treatment_overview": "First-aid during seizure: Protect head, turn patient onto side (recovery position) to prevent aspiration, DO NOT put objects in mouth, DO NOT restrain. Medical maintenance with antiepileptic drugs (AEDs) to maintain seizure freedom.",
    "medication_classes": [
      "Broad-spectrum Antiepileptic Drugs (AEDs): Levetiracetam, Sodium Valproate (caution in females of childbearing potential), Lamotrigine, Topiramate, Brivaracetam",
      "Emergency rescue benzodiazepines: Midazolam buccal/nasal spray, Lorazepam IV, Diazepam rectal gel"
    ],
    "precautions": [
      "NEVER place a spoon, finger, or cloth in the mouth during a seizure (causes tooth fracture or airway obstruction)",
      "Do not restrain the jerking limbs",
      "Observe driving restrictions mandated by local law (typically 6-12 months seizure-free)"
    ],
    "prevention": [
      "Strict adherence to daily prescribed antiepileptic medications without skipping doses",
      "Maintain regular sleep hygiene and avoid alcohol bingeing"
    ],
    "complications": [
      "Status epilepticus (continuous seizure > 5 minutes - medical emergency)",
      "Sudden Unexpected Death in Epilepsy (SUDEP)",
      "Aspiration pneumonia and head trauma"
    ],
    "emergency_signs": [
      "🚨 CRITICAL EMERGENCY: Call 112 / 911 immediately if: Seizure lasts > 5 minutes, second seizure begins without waking, person does not breathe or remains unresponsive, seizure occurs in water, or significant injury occurs."
    ],
    "doctor_specialty": "Epileptologist / Neurologist",
    "faqs": [
      {
        "question": "What should I do if someone has a seizure near me?",
        "answer": "1. Keep calm. 2. Clear sharp objects away and cushion their head. 3. Turn them gently onto their side (recovery position) so saliva drains freely. 4. Time the seizure. 5. NEVER put anything inside their mouth. 6. Call 112 if it lasts more than 5 minutes."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A60 Epilepsy and seizures",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Epilepsies and Seizures",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/epilepsy-and-seizures"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/epilepsy-and-seizures",
    "multilingual": {
      "hi": {
        "name": "जनरलाइज्ड टॉनिक-क्लोनिक सीज़र / मिर्गी का दौरा (Grand Mal Seizure)",
        "summary": "पूरे शरीर में अचानक अकड़न और झटके आना, मुंह से झाग निकलना और बेहोश हो जाना।",
        "advice": "दौरे के समय मरीज को करवट दिलाएं ताकि लार बाहर निकले। मुंह में चम्मच या जूता कभी न लगाएं। 5 मिनट से ज्यादा होने पर तुरंत 112 बुलाएं।"
      },
      "hinglish": {
        "name": "Mirgi ka Daura / Tonic-Clonic Seizure",
        "summary": "Achanak behosh hokar girna, shareer akadna aur haath-pair me tez jhatke aana.",
        "advice": "Patient ko side karwat dilayein, gale ka collar dhila karein aur muh me kuch na daalein. Turant hospital le jayein agar 5 min se lamba chale."
      },
      "ur": {
        "name": "مرگی کا دورہ (Tonic-Clonic Seizure)",
        "summary": "اچانک بے ہوش ہو جانا، جسم کا اکڑنا اور ہاتھ پاؤں میں شدید جھٹکے لگنا۔",
        "advice": "مریض کو کروٹ کے بل لٹائیں تاکہ سانس کی نالی بند نہ ہو۔ منہ میں کوئی چیز نہ ڈالیں۔"
      }
    },
    "target_3d_nodes": [
      "thalamus",
      "frontal-lobe",
      "parietal-lobe",
      "motor-cortex",
      "hippocampus"
    ],
    "search_keywords": [
      "mirgi ka daura",
      "seizure",
      "convulsion",
      "grand mal",
      "jhatke aana",
      "epilepsy",
      "loss of consciousness fit"
    ]
  },
  {
    "disease_id": "status-epilepticus",
    "official_name": "Status epilepticus",
    "alternative_names": [
      "Continuous seizure",
      "Prolonged epileptic fit"
    ],
    "category": "epilepsy",
    "subcategory": "Epileptic disorders",
    "icd11_code": "8A68",
    "simple_description": "A life-threatening medical emergency where a seizure lasts longer than 5 minutes, or multiple seizures occur without the person regaining consciousness in between.",
    "medical_description": "A condition resulting either from the failure of the mechanisms responsible for seizure termination or from the initiation of mechanisms that lead to abnormally prolonged seizures (after time point t1: 5 minutes for convulsive status epilepticus). Can cause long-term consequences including neuronal death and alteration of neuronal networks after time point t2: 30 minutes.",
    "affected_system": "Widespread cortical and subcortical neuronal networks, systemic autonomic cardiovascular, respiratory, and metabolic homeostasis.",
    "symptoms": [
      "Continuous tonic-clonic convulsions lasting >= 5 minutes",
      "Or consecutive seizures without recovery of baseline consciousness between episodes",
      "Cyanosis, irregular respiratory pattern, severe hyperthermia",
      "Hyperglycemia initially followed by hypoglycemia, severe lactic acidosis",
      "Rhabdomyolysis and cardiac arrhythmias"
    ],
    "early_warning_signs": [
      "A standard seizure that does not spontaneously stop within the typical 1 to 2 minutes"
    ],
    "possible_causes": [
      "Abrupt cessation or non-adherence to antiepileptic medications in patients with epilepsy",
      "Acute ischemic or hemorrhagic stroke",
      "Central nervous system infection (meningitis, encephalitis)",
      "Severe metabolic derangement (hyponatremia, hypocalcemia, hepatic encephalopathy)",
      "Drug toxicity or alcohol withdrawal"
    ],
    "risk_factors": [
      "Known epilepsy with medication changes",
      "Recent neurotrauma or neurosurgery",
      "Systemic sepsis and high fever in susceptible patients"
    ],
    "disease_types": [
      "Convulsive status epilepticus (CSE - highest immediate mortality)",
      "Non-convulsive status epilepticus (NCSE - subtle twitching, persistent coma/confusion)",
      "Refractory status epilepticus (RSE - continuing despite first- and second-line AEDs)",
      "Super-refractory status epilepticus (SRSE - persisting >= 24h of general anesthesia)"
    ],
    "clinical_evaluation": "Simultaneous rapid assessment of ABCs (Airway, Breathing, Circulation), fingerstick blood glucose, venous blood gas, immediate antiepileptic pharmacological escalation protocol.",
    "diagnostic_tests": [
      "Continuous Video-EEG Monitoring - Mandatory to confirm termination of electrographic seizure activity (especially when motor signs cease but brain continues seizing)",
      "Emergency Non-contrast Head CT - Identify acute intracranial hemorrhage, mass lesion, or midline shift",
      "Lumbar puncture (once stabilized) if infection suspected"
    ],
    "treatment_overview": "CRITICAL PROTOCOLIZED EMERGENCY ESCALATION: 0-5 min: Oxygen, IV access, check glucose. 5-10 min (First-line): IV Lorazepam (4 mg) or IM Midazolam (10 mg). 10-25 min (Second-line): IV Levetiracetam (60 mg/kg), Fosphenytoin (20 mg PE/kg), or Sodium Valproate (40 mg/kg). > 20-40 min (Third-line Refractory): Endotracheal intubation, continuous anesthetic infusion (Propofol or Midazolam) in Neuro-ICU to achieve burst suppression.",
    "medication_classes": [
      "First-line Benzodiazepines: IV Lorazepam, IM Midazolam, IV Diazepam",
      "Second-line IV Antiepileptics: IV Levetiracetam, IV Fosphenytoin, IV Sodium Valproate",
      "Third-line General Anesthetics: IV Propofol, IV Midazolam, IV Ketamine"
    ],
    "precautions": [
      "NEVER adopt a 'wait and see' approach if a seizure exceeds 5 minutes",
      "Prepare for immediate endotracheal intubation if aggressive benzodiazepine doses cause respiratory depression"
    ],
    "prevention": [
      "Strict compliance with daily antiepileptic medications",
      "Home availability of rescue intranasal midazolam or buccal diazepam for high-risk patients"
    ],
    "complications": [
      "Permanent excitotoxic brain damage (hippocampal neuronal necrosis)",
      "Multi-organ failure, rhabdomyolysis, acute kidney injury",
      "Neurogenic pulmonary edema and death (mortality 15-20%)"
    ],
    "emergency_signs": [
      "🚨 CRITICAL EMERGENCY: Call 112 / 911 immediately if any seizure exceeds 5 minutes duration."
    ],
    "doctor_specialty": "Neurocritical Care Specialist / Emergency Physician / Epileptologist",
    "faqs": [
      {
        "question": "At what minute does a seizure become life-threatening?",
        "answer": "At 5 minutes. Most normal seizures stop on their own within 90 seconds. If it reaches 5 minutes, the brain's internal stopping mechanisms have failed and permanent brain injury begins after 30 minutes without emergency intervention."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A68 Status epilepticus",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Treatment of Convulsive Status Epilepticus in Children and Adults",
        "source": "American Epilepsy Society (AES)",
        "url": "https://www.aesnet.org/clinical-care/clinical-guidance/status-epilepticus-guideline"
      }
    ],
    "source_url": "https://www.aesnet.org/clinical-care/clinical-guidance/status-epilepticus-guideline",
    "multilingual": {
      "hi": {
        "name": "स्टेटस एपिलेप्टिकस / लगातार दौरा (Status Epilepticus)",
        "summary": "जीवन के लिए बेहद खतरनाक आपातकाल जहां मिर्गी का दौरा 5 मिनट से अधिक समय तक लगातार चलता रहता है या बिना होश आए बार-बार आता है।",
        "advice": "🚨 तुरंत 112 पर कॉल करें! यह जानलेवा स्थिति है जिसमें तुरंत आईसीयू में नसों द्वारा दवाएं और ऑक्सीजन दी जाती है।"
      },
      "hinglish": {
        "name": "Status Epilepticus (5 minute se lamba daura)",
        "summary": "5 minute se lamba daura chalna ya baar-baar behosh hokar jhatke aana. Dimaag ke cells marne lagte hain.",
        "advice": "🚨 FORAN EMERGENCY CALL KAREIN! Har second keemti hai, turant hospital le jayein."
      },
      "ur": {
        "name": "سٹیٹس ایپی لیپٹیکس (مسلسل دورہ)",
        "summary": "پانچ منٹ سے زیادہ دیر تک جاری رہنے والا دورہ جو جان لیوا ہو سکتا ہے۔",
        "advice": "فوری طور پر ایمبولینس بلائیں اور انتہائی نگہداشت کے شعبے سے رجوع کریں۔"
      }
    },
    "target_3d_nodes": [
      "thalamus",
      "hippocampus",
      "frontal-lobe",
      "brainstem"
    ],
    "search_keywords": [
      "status epilepticus",
      "continuous seizure",
      "5 minute se lamba daura",
      "prolonged fit",
      "non stop seizure"
    ]
  },
  {
    "disease_id": "parkinson-disease",
    "official_name": "Parkinson disease",
    "alternative_names": [
      "Idiopathic Parkinsonism",
      "Paralysis agitans",
      "Kampavata"
    ],
    "category": "neurology",
    "subcategory": "Movement disorders",
    "icd11_code": "8A00.0",
    "simple_description": "A progressive brain disorder that causes unintended or uncontrollable movements, such as shaking in the hands (tremor), slowness of movement (bradykinesia), and stiffness (rigidity).",
    "medical_description": "A chronic, progressive neurodegenerative movement disorder characterized by the profound loss of pigmented dopaminergic neurons in the substantia nigra pars compacta and the presence of intracellular Lewy bodies containing aggregated alpha-synuclein. Diagnosed clinically by the presence of bradykinesia combined with rest tremor, muscular rigidity, or both.",
    "affected_system": "Basal ganglia dopaminergic nigrostriatal pathway, substantia nigra pars compacta, striatum (caudate and putamen).",
    "symptoms": [
      "Resting tremor: rhythmic 4-6 Hz 'pill-rolling' tremor starting unilaterally in one hand or foot, decreasing with intentional movement",
      "Bradykinesia: progressive slowness of movement, small handwriting (micrographia), reduced arm swing while walking",
      "Muscular rigidity: 'lead-pipe' or 'cogwheel' resistance to passive joint movement",
      "Postural instability: balance impairment, shuffling gait, festination, and freezing of gait (FOG)",
      "Non-motor symptoms: loss of smell (anosmia), REM sleep behavior disorder, severe constipation, depression, mask-like facial expression (hypomimia)"
    ],
    "early_warning_signs": [
      "Early prodromal signs years before motor onset: acting out vivid dreams in sleep (RBD), chronic constipation, loss of smell, unilateral slight hand shake"
    ],
    "possible_causes": [
      "Misfolding and pathological aggregation of alpha-synuclein protein into Lewy bodies",
      "Selective degeneration of dopaminergic neurons in the substantia nigra pars compacta",
      "Mitochondrial dysfunction and oxidative stress (genetic mutations in SNCA, LRRK2, PRKN, PINK1, GBA)"
    ],
    "risk_factors": [
      "Advancing age (most important factor; typical onset > 60 years)",
      "Male sex (1.5 to 2 times higher risk)",
      "Environmental pesticide exposure (e.g. Paraquat, Rotenone) and rural living",
      "Family history of Parkinson's disease"
    ],
    "disease_types": [
      "Idiopathic Parkinson's disease (IPD - 85% of cases)",
      "Early-onset Parkinson's disease (onset < 50 years, often genetic)",
      "Atypical Parkinsonian syndromes (PSP, MSA, CBD - poor response to levodopa)"
    ],
    "clinical_evaluation": "Movement Disorder Society (MDS) clinical diagnostic criteria. Examination assesses finger tapping, hand movements, pronation-supination, leg agility, rigidity, resting/postural tremor, and pull test for postural stability.",
    "diagnostic_tests": [
      "Dopamine Transporter SPECT / PET Scan (DaTscan) - Shows significant reduction in striatal dopamine transporter uptake, differentiating Parkinsonism from essential tremor",
      "High-field 3T Brain MRI - Typically normal in idiopathic PD; essential to rule out multi-infarct state, normal pressure hydrocephalus, or atypical parkinsonism ('hummingbird sign' in PSP or 'hot cross bun sign' in MSA)",
      "Levodopa Challenge Test - Robust motor improvement confirms dopaminergic responsiveness"
    ],
    "treatment_overview": "Symptomatic pharmacological dopamine replacement is the mainstay. Levodopa combined with a dopa-decarboxylase inhibitor (Carbidopa) remains the gold standard. For advanced disease with motor fluctuations, Deep Brain Stimulation (DBS) of the subthalamic nucleus (STN) or globus pallidus internus (GPi) provides profound relief.",
    "medication_classes": [
      "Dopamine Precursor: Levodopa + Carbidopa (Sinemet / Syndopa)",
      "Dopamine Receptor Agonists: Pramipexole, Ropinirole, Rotigotine transdermal patch",
      "MAO-B Inhibitors: Rasagiline, Selegiline, Safinamide",
      "COMT Inhibitors: Entacapone, Opicapone (extends levodopa bioavailability)",
      "NMDA Receptor Antagonist: Amantadine (useful for levodopa-induced dyskinesias)"
    ],
    "precautions": [
      "Avoid high-protein meals at the exact same time as Levodopa doses (neutral amino acids compete for intestinal absorption and blood-brain barrier transport)",
      "DO NOT stop Levodopa abruptly (risk of Parkinsonism-Hyperpyrexia Syndrome, mimicking neuroleptic malignant syndrome)"
    ],
    "prevention": [
      "Regular vigorous physical exercise and neuro-rehabilitation (aerobic exercise, Tai Chi, boxing drills show neuroprotective benefits)",
      "Avoid exposure to industrial pesticides and well water without filtration"
    ],
    "complications": [
      "Motor fluctuations ('wearing-off' phenomenon and 'on-off' fluctuations)",
      "Levodopa-induced peak-dose choreiform dyskinesias",
      "Parkinson's disease dementia (PDD) in advanced stages (after > 10-15 years)",
      "Orthostatic hypotension, swallowing difficulty (dysphagia), and aspiration pneumonia"
    ],
    "emergency_signs": [
      "Acute severe stiffness with high fever and altered mental state (Parkinsonism-Hyperpyrexia crisis)",
      "Sudden severe falls or inability to swallow medications"
    ],
    "doctor_specialty": "Movement Disorder Neurologist",
    "faqs": [
      {
        "question": "Does Parkinson's always start with hand shaking?",
        "answer": "No. Approximately 20-30% of patients have the 'akinetic-rigid' form, where slowness of movement and muscle stiffness are prominent without an obvious resting tremor."
      },
      {
        "question": "Can exercise slow down Parkinson's?",
        "answer": "Yes! Rigorous clinical research shows that regular cardiovascular and balance exercises (such as brisk walking, cycling, and dance) stimulate brain-derived neurotrophic factor (BDNF) and help maintain mobility."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A00.0 Parkinson disease",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Parkinson's Disease Information Page",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease"
      },
      {
        "title": "MDS Clinical Diagnostic Criteria for Parkinson's Disease",
        "source": "International Parkinson and Movement Disorder Society",
        "url": "https://www.movementdisorders.org/MDS/Resources/Movement-Disorders-Journal/Special-Issues/Clinical-Diagnostic-Criteria-for-Parkinsons-Disease.htm"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease",
    "multilingual": {
      "hi": {
        "name": "पार्किंसंस रोग (Parkinson's Disease)",
        "summary": "मस्तिष्क में डोपामाइन की कमी से होने वाली बीमारी जिससे हाथ में कंपन (कंपकंपी), चलने में धीमापन, मांसपेशियों में जकड़न और संतुलन में कमी आती है।",
        "advice": "दवा का नियमित समय पर सेवन करें और रोजाना फिजियोथेरेपी व बैलेंस एक्सरसाइज करें। प्रोटीन युक्त भोजन दवा के साथ न लें।"
      },
      "hinglish": {
        "name": "Parkinson's Disease (Haath kampna aur chalne me dheemapan)",
        "summary": "Dimaag ke Substantia Nigra me Dopamine chemical kam hone se haath kampna, body akadna aur chote-chote kadam chalna.",
        "advice": "Levodopa medicine time par lein aur rozana exercise/walking karein. Movement disorder doctor se consult karein."
      },
      "ur": {
        "name": "پارکنسنز کی بیماری (رعشہ)",
        "summary": "دماغ میں ڈوپامائن کی کمی کی وجہ سے ہاتھوں کا کانپنا، پٹھوں کا اکڑاؤ اور حرکات میں سستی۔",
        "advice": "باقاعدگی سے ادویات کا استعمال کریں اور فزیوتھراپی جاری رکھیں۔"
      }
    },
    "target_3d_nodes": [
      "substantia-nigra",
      "caudate-nucleus",
      "putamen",
      "globus-pallidus",
      "subthalamic-nucleus"
    ],
    "search_keywords": [
      "parkinsons",
      "haath kaapna",
      "tremor in hand",
      "slowness of movement",
      "bradykinesia",
      "pill rolling tremor",
      "kampan",
      "shaking palsy"
    ]
  },
  {
    "disease_id": "alzheimer-disease",
    "official_name": "Alzheimer disease",
    "alternative_names": [
      "Alzheimer's dementia",
      "Primary degenerative dementia",
      "Bhoolne ki bimari"
    ],
    "category": "neurology",
    "subcategory": "Neurodegenerative and cognitive disorders",
    "icd11_code": "8A20",
    "simple_description": "The most common form of dementia, causing progressive memory loss, confusion, and difficulty with thinking, problem-solving, and everyday tasks.",
    "medical_description": "A progressive, irreversible neurodegenerative disorder characterized neuropathologically by the extracellular deposition of amyloid-beta (Abeta42) peptide into senile plaques and the intracellular accumulation of hyperphosphorylated tau protein into neurofibrillary tangles. Clinically marked by insidious onset and gradual progressive deterioration in episodic memory, executive function, orientation, visuospatial skills, and language.",
    "affected_system": "Entorhinal cortex, hippocampus, temporal lobes, parietal-temporal association cortices, and cholinergic projection networks.",
    "symptoms": [
      "Progressive episodic memory impairment: forgetting recent conversations, misplacing items in unusual places, repeating questions",
      "Disorientation to time, day, and familiar surroundings (getting lost in known neighborhoods)",
      "Executive dysfunction: difficulty managing finances, paying bills, or following multi-step cooking recipes",
      "Language difficulties (anomia): struggling to find common words, substituting inappropriate terms",
      "Visuospatial deficits: difficulty judging distances, recognizing familiar faces (prosopagnosia in later stages)",
      "Neuropsychiatric changes: apathy, withdrawal, suspicion, paranoia, wandering, sleep-wake cycle inversion"
    ],
    "early_warning_signs": [
      "Mild Cognitive Impairment (MCI): measurable memory decline greater than expected for normal age, but still capable of independent daily living"
    ],
    "possible_causes": [
      "Amyloid cascade hypothesis: abnormal cleavage of Amyloid Precursor Protein (APP) yielding toxic Abeta42 oligomers",
      "Tau hyperphosphorylation leading to microtubule destabilization and neurofibrillary tangle formation",
      "Neuroinflammation, microglial dysfunction, synaptic loss, and profound central cholinergic deficits"
    ],
    "risk_factors": [
      "Age (exponential increase after age 65; affects ~30% over age 85)",
      "Apolipoprotein E (APOE) epsilon4 allele (strongest genetic risk factor)",
      "Midlife cardiovascular risk factors: untreated hypertension, diabetes, obesity, smoking",
      "History of traumatic brain injury (TBI) and lower educational attainment"
    ],
    "disease_types": [
      "Late-onset Alzheimer's disease (LOAD - onset >= 65 years, > 95% of cases)",
      "Early-onset Alzheimer's disease (EOAD - onset < 65 years; often autosomal dominant mutations in APP, PSEN1, or PSEN2)",
      "Atypical variants: Posterior Cortical Atrophy (PCA), Logopenic progressive aphasia"
    ],
    "clinical_evaluation": "Comprehensive cognitive battery (Mini-Mental State Examination - MMSE, Montreal Cognitive Assessment - MoCA), Clinical Dementia Rating (CDR) scale, collateral history from family member.",
    "diagnostic_tests": [
      "Volumetric 3T Brain MRI - Demonstrates bilateral hippocampal and medial temporal lobe atrophy (MTA scale), and parietal atrophy",
      "Amyloid PET / Tau PET Imaging - Visualizes cortical amyloid plaque deposition in vivo",
      "CSF Biomarkers (Lumbar Puncture) - Low Abeta42, elevated phosphorylated-tau (p-tau181) and total-tau",
      "Blood-based Biomarkers (Plasma p-tau217) - High diagnostic accuracy for Alzheimer's pathology",
      "Screening blood panel: Vitamin B12, TSH, Folate, RPR to exclude reversible mimics"
    ],
    "treatment_overview": "Comprehensive multidisciplinary approach combining symptom-modifying drugs, disease-modifying anti-amyloid monoclonal antibodies (for early MCI/mild dementia), cognitive stimulation, and caregiver support.",
    "medication_classes": [
      "Cholinesterase Inhibitors (Mild to Moderate): Donepezil (5-10 mg daily), Rivastigmine (oral/patch), Galantamine",
      "NMDA Receptor Antagonist (Moderate to Severe): Memantine (10-20 mg daily) - neuroprotective against glutamate excitotoxicity",
      "Disease-Modifying Monoclonal Antibodies: Lecanemab, Donanemab (clears amyloid plaques, requiring strict MRI surveillance for ARIA side effects)",
      "Non-pharmacological sensory and environmental adaptations"
    ],
    "precautions": [
      "AVOID medications with strong anticholinergic properties (e.g. sedating antihistamines, tricyclic antidepressants, bladder antispasmodics) which worsen confusion and accelerate cognitive decline",
      "Ensure home safety (remove loose rugs, install stove shut-off sensors, monitor driving safety)"
    ],
    "prevention": [
      "Lancet Commission 14 modifiable risk factors: manage midlife hypertension, treat hearing loss with hearing aids, maintain social engagement, regular exercise, Mediterranean-DASH diet"
    ],
    "complications": [
      "Complete loss of independent activities of daily living (bathing, dressing, feeding)",
      "Severe dysphagia, aspiration pneumonia, immobility, pressure ulcers, and sepsis"
    ],
    "emergency_signs": [
      "Sudden acute deterioration over hours or days (delirium, usually triggered by urinary tract infection, pneumonia, or electrolyte disturbance, requiring emergency hospital admission)"
    ],
    "doctor_specialty": "Behavioral Neurologist / Geriatric Psychiatrist / Cognitive Specialist",
    "faqs": [
      {
        "question": "Is normal aging the same as Alzheimer's?",
        "answer": "No. Occasional minor forgetfulness (like forgetting where you put your keys but finding them later) is normal. Alzheimer's causes forgetting recent events entirely, getting lost in familiar places, and losing the ability to perform basic tasks."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A20 Alzheimer disease",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Alzheimer's Disease Fact Sheet",
        "source": "National Institute on Aging (NIA) / NIH",
        "url": "https://www.nia.nih.gov/health/alzheimers-and-dementia/alzheimers-disease-fact-sheet"
      }
    ],
    "source_url": "https://www.nia.nih.gov/health/alzheimers-and-dementia/alzheimers-disease-fact-sheet",
    "multilingual": {
      "hi": {
        "name": "अल्जाइमर रोग / डिमेंशिया (Alzheimer's Disease)",
        "summary": "याददाश्त और सोचने-समझने की क्षमता का धीरे-धीरे कम होना। हाल की बातें भूलना, रास्ते भूलना और रोजमर्रा के काम करने में असमर्थ होना इसके लक्षण हैं।",
        "advice": "मरीज के साथ धैर्य रखें, दिनचर्या को व्यवस्थित रखें और न्यूरोलॉजिस्ट से याददाश्त की दवाएं (Donepezil/Memantine) शुरू करवाएं।"
      },
      "hinglish": {
        "name": "Alzheimer's Disease (Bhoolne ki bimari / Dementia)",
        "summary": "Dimaag ke memory center (Hippocampus) me plaques jamne se nayi baatein bhoolna, raaste bhoolna aur confuse hona.",
        "advice": "Patient ko safe environment dein, cognitive exercises karwayein aur specialist se consult karein."
      },
      "ur": {
        "name": "الزائمر کی بیماری (یادداشت کی کمزوری)",
        "summary": "یادداشت اور سوچنے سمجھنے کی صلاحیت کا بتدریج ختم ہونا۔ حالیہ واقعات کا بھول جانا۔",
        "advice": "مریض کی دیکھ بھال میں صبر سے کام لیں اور ڈاکٹر کی تجویز کردہ ادویات باقاعدگی سے دیں۔"
      }
    },
    "target_3d_nodes": [
      "hippocampus",
      "entorhinal-cortex",
      "temporal-lobe",
      "parietal-lobe",
      "cholinergic-system"
    ],
    "search_keywords": [
      "alzheimer",
      "dementia",
      "bhoolne ki bimari",
      "memory loss",
      "confusion",
      "forgetting names and faces",
      "cognitive decline"
    ]
  },
  {
    "disease_id": "bacterial-meningitis",
    "official_name": "Bacterial meningitis",
    "alternative_names": [
      "Acute purulent meningitis",
      "Spinal meningitis",
      "Dimaagi bukhar"
    ],
    "category": "brain-disorders",
    "subcategory": "Central nervous system infections",
    "icd11_code": "1D01",
    "simple_description": "A life-threatening, acute bacterial infection of the protective membranes covering the brain and spinal cord, presenting with high fever, severe stiff neck, and confusion.",
    "medical_description": "An acute, fulminant purulent infection of the subarachnoid space and leptomeninges (arachnoid and pia mater) caused by pyogenic bacteria (Streptococcus pneumoniae, Neisseria meningitidis, Listeria monocytogenes). Characterized by the rapid onset of the classic triad: fever, nuchal rigidity, and altered mental status.",
    "affected_system": "Leptomeninges (pia-arachnoid), cerebrospinal fluid (CSF), intracranial vascular endothelial barriers.",
    "symptoms": [
      "Severe, relentless, generalized bursting headache",
      "High fever (> 38.5 C / 101.3 F) with chills and rigors",
      "Neck stiffness (nuchal rigidity): inability to flex the chin to the chest passively",
      "Altered mental status: confusion, drowsiness, delirium progressing to coma",
      "Extreme photophobia and nausea/projectile vomiting",
      "Non-blanching petechial or purpuric skin rash (hallmark of Neisseria meningitidis meningococcemia)",
      "Positive meningeal signs: Kernig's sign and Brudzinski's sign"
    ],
    "early_warning_signs": [
      "Rapid deterioration from a seemingly routine flu-like illness to intense neck pain and confusion within 12 to 24 hours"
    ],
    "possible_causes": [
      "Streptococcus pneumoniae (pneumococcus - most common in adults)",
      "Neisseria meningitidis (meningococcus - epidemic in adolescents and crowded settings)",
      "Listeria monocytogenes (in elderly, neonates, and immunocompromised)",
      "Haemophilus influenzae type b (Hib - reduced by vaccination)"
    ],
    "risk_factors": [
      "Lack of vaccination (Pneumococcal, Meningococcal, Hib)",
      "Asplenia or complement deficiencies",
      "Sinusitis, otitis media, or mastoiditis with direct cranial spread",
      "Recent neurosurgery or skull base cerebrospinal fluid leak"
    ],
    "disease_types": [
      "Community-acquired bacterial meningitis",
      "Nosocomial / post-neurosurgical bacterial meningitis",
      "Meningococcal meningitis with septicemia (Waterhouse-Friderichsen syndrome)"
    ],
    "clinical_evaluation": "Rapid emergency clinical assessment for signs of elevated intracranial pressure, papilledema, focal deficits, and immediate blood cultures prior to emergent antibiotic administration.",
    "diagnostic_tests": [
      "Emergent Lumbar Puncture (LP) - Definitive test: CSF shows marked pleocytosis (typically 1,000-10,000 WBC/microL with > 80% neutrophils), elevated opening pressure (> 200 mmH2O), high protein (> 100 mg/dL), and markedly low glucose (CSF/serum glucose ratio < 0.4)",
      "CSF Gram stain and Multiplex PCR panel (Meningitis/Encephalitis array) - Rapid pathogen identification within 1-2 hours",
      "Blood cultures x 2 sets immediately",
      "Emergency Non-contrast Head CT prior to LP ONLY if: new focal neurological deficit, new seizures, immunocompromise, or papilledema (to prevent brain herniation)"
    ],
    "treatment_overview": "CRITICAL MEDICAL EMERGENCY: Empiric broad-spectrum intravenous bactericidal antibiotics MUST be initiated within 30-60 minutes of presentation. DO NOT delay antibiotics for lumbar puncture or CT scan if delay will occur! Adjunctive IV Dexamethasone (10 mg) administered immediately before or with the first dose of antibiotics reduces mortality and sensorineural hearing loss in pneumococcal meningitis.",
    "medication_classes": [
      "Empiric IV Antibiotics (Adults < 50): IV Ceftriaxone (2 g q12h) + IV Vancomycin (15-20 mg/kg q8-12h)",
      "Empiric IV Antibiotics (Adults >= 50 or Immunocompromised): Add IV Ampicillin (2 g q4h) to cover Listeria",
      "Adjunctive anti-inflammatory: IV Dexamethasone (10 mg q6h for 4 days, continued if pneumococcus confirmed)",
      "Supportive Neuro-ICU care with targeted osmotic therapy (Mannitol / Hypertonic saline) for raised ICP"
    ],
    "precautions": [
      "NEVER delay the administration of antibiotics to wait for a CT scan or lumbar puncture; early antibiotics are the single greatest predictor of survival",
      "Enforce droplet isolation for suspected meningococcal disease for first 24h of therapy"
    ],
    "prevention": [
      "Routine vaccination with Meningococcal conjugate (MenACWY / MenB), Pneumococcal (PCV20 / PPSV23), and Hib vaccines",
      "Post-exposure chemoprophylaxis (single-dose oral Ciprofloxacin or Rifampin) for close contacts of meningococcal cases"
    ],
    "complications": [
      "Permanent sensorineural hearing loss (most common long-term morbidity)",
      "Cerebral edema, brain herniation, and death (overall mortality 15-25%)",
      "Cerebral venous sinus thrombosis, hydrocephalus, and persistent cognitive deficits"
    ],
    "emergency_signs": [
      "🚨 CRITICAL EMERGENCY: Call 112 / 911 immediately if someone has high fever, severe stiff neck, and confusion or purple skin spots."
    ],
    "doctor_specialty": "Infectious Disease Specialist / Neurocritical Care / Emergency Medicine",
    "faqs": [
      {
        "question": "What is the classic triad of meningitis?",
        "answer": "Fever, Stiff neck (inability to touch chin to chest), and Altered mental status (confusion or lethargy). If all three or even two are present with a severe headache, it is an absolute emergency."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 1D01 Bacterial meningitis",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Meningitis Overview",
        "source": "WHO Fact Sheet / CDC",
        "url": "https://www.who.int/news-room/fact-sheets/detail/meningitis"
      }
    ],
    "source_url": "https://www.who.int/news-room/fact-sheets/detail/meningitis",
    "multilingual": {
      "hi": {
        "name": "बैक्टीरियल मेनिनजाइटिस / दिमागी बुखार (Bacterial Meningitis)",
        "summary": "मस्तिष्क की झिल्लियों में गंभीर जीवाणु संक्रमण। तेज बुखार, गर्दन में भयानक अकड़न, तेज सिरदर्द और बेहोशी इसके मुख्य लक्षण हैं।",
        "advice": "🚨 तत्काल मेडिकल इमरजेंसी! तुरंत 112 / 108 पर कॉल करें और इमरजेंसी अस्पताल जाएं। बिना देरी किए एंटीबायोटिक्स जरूरी होती हैं।"
      },
      "hinglish": {
        "name": "Bacterial Meningitis (Dimaagi Bukhar / Gardan me akad)",
        "summary": "Dimaag ki jhilliyo me bacterial infection jisse tez bukhar, gardan akadna aur behoshi aati hai.",
        "advice": "🚨 LIFE-THREATENING EMERGENCY: Turant ambulance bulayein aur emergency ICU le jayein."
      },
      "ur": {
        "name": "بیکٹیریل گردن توڑ بخار (Meningitis)",
        "summary": "دماغ اور حرام مغز کی جھلیوں میں شدید انفیکشن، تیز بخار، گردن کی سختی اور بے ہوشی۔",
        "advice": "فوری ہسپتال لے جائیں، یہ جان لیوا حالت ہو سکتی ہے اور فوری اینٹی بائیوٹکس درکار ہوتی ہیں۔"
      }
    },
    "target_3d_nodes": [
      "meninges",
      "subarachnoid-space",
      "cortex",
      "ventricles"
    ],
    "search_keywords": [
      "meningitis",
      "dimaagi bukhar",
      "stiff neck and fever",
      "gardan me akad",
      "neck rigidity",
      "bacterial meningitis",
      "severe headache with fever"
    ]
  },
  {
    "disease_id": "trigeminal-neuralgia",
    "official_name": "Trigeminal neuralgia",
    "alternative_names": [
      "Tic douloureux",
      "Trigeminal pain syndrome",
      "Chehre ki bijli jaisi chubhan"
    ],
    "category": "nerve-disorders",
    "subcategory": "Cranial neuropathies",
    "icd11_code": "8B82.0",
    "simple_description": "A chronic, intensely painful condition affecting the trigeminal nerve, causing sudden, excruciating electric-shock-like pains in the jaw, teeth, cheek, or lips, triggered by light touch.",
    "medical_description": "A severe paroxysmal facial pain disorder characterized by recurrent, sudden, unilateral, brief, electric-shock-like, stabbing pains strictly limited to the distribution of one or more divisions of the fifth cranial (trigeminal) nerve (most commonly maxillary V2 or mandibular V3). Pain is triggered by innocuous tactile stimuli to the face.",
    "affected_system": "Trigeminal nerve (CN V), sensory root entry zone at the pons, trigeminal spinal nucleus.",
    "symptoms": [
      "Excruciating, paroxysmal, lancinating pain described as an electric shock, stabbing, or lightning bolt in the face",
      "Pain lasts from a fraction of a second to 2 minutes, followed by a refractory period",
      "Strictly unilateral (right side slightly more common)",
      "Triggered by trivial activities: light touch, washing face, brushing teeth, chewing, shaving, talking, or a cold breeze",
      "Pain distribution: cheek, jaw, gums, teeth, lips, or rarely forehead"
    ],
    "early_warning_signs": [
      "Initial pre-trigeminal neuralgia: dull aching or burning twinges in the jaw or tooth that get mistaken for dental issues"
    ],
    "possible_causes": [
      "Classical trigeminal neuralgia (80-90%): neurovascular compression of the trigeminal nerve root entry zone by an aberrant arterial loop (most commonly Superior Cerebellar Artery - SCA), leading to focal focal demyelination and ephaptic cross-talk between fibers",
      "Secondary trigeminal neuralgia: demyelinating plaque of Multiple Sclerosis at root entry zone, or cerebellopontine angle tumor (acoustic neuroma, meningioma)",
      "Idiopathic (no vascular contact or lesion identified)"
    ],
    "risk_factors": [
      "Age > 50 years",
      "Female sex (1.5 times more common in women)",
      "Underlying Multiple Sclerosis (trigeminal neuralgia in young patients < 40 or bilateral suggests MS)"
    ],
    "disease_types": [
      "Classical trigeminal neuralgia (neurovascular compression demonstrated on MRI)",
      "Secondary trigeminal neuralgia (due to MS plaque or CPA tumor)",
      "Idiopathic trigeminal neuralgia"
    ],
    "clinical_evaluation": "Clinical diagnosis based on ICHD-3 criteria. Standard neurological cranial nerve exam is typically completely normal in classical TN; any objective sensory deficit (numbness) suggests secondary etiology.",
    "diagnostic_tests": [
      "High-resolution 3T Brain MRI with CISS / FIESTA (Constructive Interference in Steady State) and 3D TOF MRA - Essential to visualize neurovascular conflict at the root entry zone and rule out MS plaques or CPA mass lesions"
    ],
    "treatment_overview": "First-line pharmacological treatment is oral voltage-gated sodium channel blockers (Carbamazepine or Oxcarbazepine). For patients with inadequate relief or intolerable drug side effects, Microvascular Decompression (MVD / Jannetta procedure) is the surgical treatment of choice offering high rates of long-term cure. Stereotactic radiosurgery (Gamma Knife) and percutaneous balloon compression are minimally invasive alternatives.",
    "medication_classes": [
      "First-line Sodium Channel Blockers: Carbamazepine (Tegretol - 200-1200 mg/day, monitoring CBC and LFTs), Oxcarbazepine (Trileptal - 600-1800 mg/day, monitoring serum sodium)",
      "Second-line Add-on agents: Baclofen (GABA-B agonist), Lamotrigine, Gabapentin, Pregabalin"
    ],
    "precautions": [
      "DO NOT undergo unnecessary tooth extractions! Patients frequently consult dentists first and extract healthy teeth because pain mimics severe toothache",
      "Monitor serum sodium on Oxcarbazepine/Carbamazepine due to risk of hyponatremia"
    ],
    "prevention": [
      "Protect face from direct cold winds with a scarf during winter",
      "Use soft-bristled toothbrush and lukewarm water to avoid triggering attacks"
    ],
    "complications": [
      "Extreme weight loss and dehydration due to terror of chewing or drinking",
      "Severe depressive disorder and high suicide risk ('suicide disease') due to excruciating pain intensity"
    ],
    "emergency_signs": [
      "Status trigeminus: continuous, unremitting paroxysms of pain preventing any oral intake, requiring urgent hospital admission for IV Fosphenytoin or Lidocaine infusion"
    ],
    "doctor_specialty": "Neurologist / Functional Neurosurgeon",
    "faqs": [
      {
        "question": "Can regular painkillers like paracetamol help trigeminal neuralgia?",
        "answer": "No. Standard painkillers, NSAIDs, and even opioids are largely ineffective because this is electrical nerve pain caused by demyelinated nerve root compression. Anti-seizure medications that stabilize nerve membranes (like Carbamazepine) are required."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8B82.0 Trigeminal neuralgia",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Trigeminal Neuralgia Fact Sheet",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/trigeminal-neuralgia"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/trigeminal-neuralgia",
    "multilingual": {
      "hi": {
        "name": "ट्राइजेमिनल न्यूराल्जिया (Trigeminal Neuralgia / चेहरे में बिजली जैसा झटका)",
        "summary": "चेहरे, जबड़े या दांतों में अचानक बिजली के करंट जैसा असहनीय झटका लगना जो छूने, बोलने, ब्रश करने या हवा लगने से शुरू हो जाता है।",
        "advice": "दांत उखड़वाने की गलती न करें। न्यूरोलॉजिस्ट से कार्बामाज़ेपिन दवा या माइक्रोवैस्कुलर डीकंप्रेशन (MVD) सर्जरी का परामर्श लें।"
      },
      "hinglish": {
        "name": "Trigeminal Neuralgia (Face me current jaisa jhatka)",
        "summary": "Chehre ya daant me achanak current jaisa tez dard hona jo brush karne ya gaal chhoone par trigger hota hai.",
        "advice": "General painkiller kaam nahi karti. Neurologist se Carbamazepine dawai aur MRI scan karwayein."
      },
      "ur": {
        "name": "ٹرائی جیمینل نیورالجیا (چہرے پر کرنٹ جیسا درد)",
        "summary": "چہرے کی رگ پر دباؤ کی وجہ سے اچانک بجلی کے جھٹکے جیسا شدید درد جو چھونے یا چبانے سے بڑھ جاتا ہے۔",
        "advice": "عام درد کش ادویات فائدہ نہیں دیتیں۔ نیورولوجسٹ سے باقاعدہ علاج کروائیں۔"
      }
    },
    "target_3d_nodes": [
      "trigeminal-nerve",
      "pons",
      "sensory-root",
      "superior-cerebellar-artery"
    ],
    "search_keywords": [
      "trigeminal neuralgia",
      "chehre me current",
      "electric shock face pain",
      "daant me current",
      "tic douloureux",
      "jaw shock pain"
    ]
  },
  {
    "disease_id": "bell-palsy",
    "official_name": "Bell palsy",
    "alternative_names": [
      "Idiopathic facial palsy",
      "Facial nerve paralysis",
      "Chehre ka achanak tedha hona"
    ],
    "category": "nerve-disorders",
    "subcategory": "Cranial neuropathies",
    "icd11_code": "8B88.0",
    "simple_description": "A sudden, temporary weakness or paralysis of the muscles on one side of the face, causing one half of the face to droop, the eye to stay open, and the mouth to pull.",
    "medical_description": "An acute, isolated, unilateral peripheral lower motor neuron paralysis of the seventh cranial (facial) nerve, of unknown etiology, developing within 72 hours. Characteristically involves BOTH the upper and lower face (forehead wrinkling is lost, distinguishing it from an upper motor neuron stroke lesion where the forehead is spared due to bilateral cortical innervation).",
    "affected_system": "Facial nerve (CN VII) within the fallopian (facial) canal in the temporal bone.",
    "symptoms": [
      "Sudden unilateral facial weakness/paralysis developing over 24-72 hours",
      "Inability to close the eye on the affected side (lagophthalmos), leading to eye drying",
      "Loss of forehead wrinkling on the affected side (hallmark of lower motor neuron CN VII palsy)",
      "Drooping of the corner of the mouth, drooling, and difficulty chewing",
      "Loss of taste sensation on the anterior two-thirds of the tongue (chorda tympani involvement)",
      "Increased sensitivity to sound in the ear on that side (hyperacusis due to stapedius muscle paresis)",
      "Mild ache behind or around the ear (mastoid area) preceding or accompanying onset"
    ],
    "early_warning_signs": [
      "Mild discomfort or numbness behind the ear or altered taste sensation 12-24 hours prior to muscle weakness"
    ],
    "possible_causes": [
      "Reactivation of Herpes Simplex Virus type 1 (HSV-1) or Varicella Zoster Virus (VZV) in the geniculate ganglion",
      "Secondary edema and inflammation causing mechanical entrapment/compression of the facial nerve within the narrow bony fallopian canal"
    ],
    "risk_factors": [
      "Diabetes mellitus (4-fold higher risk)",
      "Pregnancy (especially the third trimester and first postpartum week)",
      "Recent upper respiratory viral infection",
      "Severe hypertension"
    ],
    "disease_types": [
      "Idiopathic Bell's palsy (most common)",
      "Ramsay Hunt syndrome (VZV reactivation with painful vesicles in external ear canal and severe vertigo - worse prognosis, requires high-dose antivirals)"
    ],
    "clinical_evaluation": "House-Brackmann facial nerve grading scale (Grade I normal to Grade VI total paralysis). Critical clinical check: ask patient to raise eyebrows and frown. If forehead moves symmetrically while lower face is weak, suspect STROKE; if forehead does NOT move at all on weak side, indicates BELL'S PALSY.",
    "diagnostic_tests": [
      "Clinical diagnosis: Neuroimaging is NOT required on typical presentation",
      "Brain MRI with contrast (internal auditory canal protocol) - Indicated if: no recovery after 3-4 months, recurrent paralysis, or involvement of other cranial nerves (to exclude schwannoma or parotid neoplasm)",
      "Electroneurography (ENoG) and Electromyography (EMG) - Assesses axonal degeneration in complete paralysis after day 10-14"
    ],
    "treatment_overview": "CRITICAL TIME WINDOW: Oral corticosteroids (Prednisolone) MUST be initiated within 72 hours of symptom onset to significantly enhance complete recovery rate. Eye protection is paramount: daytime lubricating artificial tears every 1-2 hours and nightly eye ointment with taping the eyelid shut to prevent exposure keratopathy and permanent corneal ulceration.",
    "medication_classes": [
      "Oral Corticosteroids: Prednisolone (50-60 mg daily for 5-7 days, followed by a 5-day taper; initiated within 72h)",
      "Antivirals (Valacyclovir 1000 mg tid or Acyclovir) - Frequently added to steroids for severe paralysis (House-Brackmann Grade IV-VI)",
      "Ophthalmic lubrication: Preservative-free artificial tear eye drops and lubricating carbomer gel at night"
    ],
    "precautions": [
      "CRITICAL: Protect the cornea! If the eye cannot close completely, the cornea will dry, scratch, ulcerate, and cause permanent blindness if not lubricated and taped shut at night",
      "Do not delay starting steroids beyond 72 hours; efficacy drops drastically"
    ],
    "prevention": [
      "No specific primary prevention; prompt treatment within 72 hours prevents long-term nerve damage",
      "Gentle facial muscle physical therapy and biofeedback exercises once nerve recovery begins"
    ],
    "complications": [
      "Permanent partial facial asymmetry / weakness (~15-20% of cases)",
      "Corneal abrasion and ulceration",
      "Aberrant nerve regeneration / synkinesis (e.g. eye closes when smiling, or 'crocodile tears' - tearing while eating)"
    ],
    "emergency_signs": [
      "Weakness accompanied by arm/leg weakness, slurred speech, or double vision (indicates brain stroke, not Bell's palsy)"
    ],
    "doctor_specialty": "Neurologist / Otolaryngologist (ENT)",
    "faqs": [
      {
        "question": "How do doctors tell Bell's palsy apart from a Stroke?",
        "answer": "In Bell's palsy, the *entire* side of the face including the forehead is paralyzed (the patient cannot wrinkle their forehead or close their eye). In a brain stroke, the forehead muscles are usually spared (the patient can still wrinkle both sides of their forehead) and arm/leg weakness is often present."
      },
      {
        "question": "Will my face return to normal?",
        "answer": "Yes, approximately 80-85% of people recover completely within 3 weeks to 3 months, especially when treated with oral steroids within the first 72 hours."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8B88.0 Bell palsy",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Bell's Palsy Fact Sheet",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/bells-palsy"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/bells-palsy",
    "multilingual": {
      "hi": {
        "name": "बेल्स पाल्सी (Bell's Palsy / चेहरे का पक्षाघात)",
        "summary": "चेहरे की नस (Facial Nerve) में सूजन आने से चेहरे के आधे हिस्से का अचानक लटक जाना, आंख का पूरा बंद न होना और मुंह का टेढ़ा होना।",
        "advice": "72 घंटे के भीतर डॉक्टर से स्टेरॉयड दवा शुरू करवाएं। आंख सूखने से बचाने के लिए आई-ड्रॉप डालें और रात को आंख पर टेप लगाकर सोएं।"
      },
      "hinglish": {
        "name": "Bell's Palsy (Chehra achanak tedha hona / Facial Palsy)",
        "summary": "7th cranial nerve me sujan se ek taraf ka chehra dhalakna aur aakh band na hona. Stroke me forehead hilta hai, isme pura aada chehra band ho jata hai.",
        "advice": "72 hours ke andar Prednisolone shuru karein aur aakh me drop daalein. 85% mareez poori tarah theek ho jaate hain."
      },
      "ur": {
        "name": "بیلز پالسی (چہرے کا لقوہ)",
        "summary": "چہرے کی رگ میں سوزش کی وجہ سے چہرے کا ایک رخ کمزور ہو جانا اور آنکھ بند نہ ہونا۔",
        "advice": "شروع کے 72 گھنٹوں میں سٹیرائڈز کا استعمال اور آنکھ کی حفاظت انتہائی ضروری ہے۔"
      }
    },
    "target_3d_nodes": [
      "facial-nerve",
      "pons",
      "stylomastoid-foramen",
      "motor-cortex"
    ],
    "search_keywords": [
      "bells palsy",
      "chehra tedha hona",
      "facial nerve paralysis",
      "face drooping eye open",
      "chehre ka lakwa",
      "lagophthalmos",
      "forehead weakness"
    ]
  },
  {
    "disease_id": "multiple-sclerosis",
    "official_name": "Multiple sclerosis",
    "alternative_names": [
      "MS",
      "Disseminated sclerosis",
      "Demyelinating CNS disease"
    ],
    "category": "spinal-disorders",
    "subcategory": "Central nervous system demyelinating diseases",
    "icd11_code": "8A40",
    "simple_description": "A chronic autoimmune disease where the immune system mistakenly attacks the protective myelin sheath covering nerve fibers in the brain, optic nerves, and spinal cord, causing vision loss, weakness, and numbness.",
    "medical_description": "A chronic, inflammatory, immune-mediated demyelinating and neurodegenerative disease of the central nervous system. Characterized pathologically by multifocal perivenular demyelinating plaques, axonal transection, and reactive astrocytic gliosis disseminated in space and time throughout the brain, optic nerves, and spinal cord.",
    "affected_system": "Central nervous system myelin sheaths, oligodendrocytes, optic nerves, spinal cord white matter columns, and periventricular white matter.",
    "symptoms": [
      "Optic neuritis: sudden or subacute painful unilateral vision loss with impaired color vision (dyschromatopsia)",
      "Sensory symptoms: numbness, tingling (paresthesia), burning, or band-like tightness around torso ('MS hug')",
      "Lhermitte's sign: an electric-shock sensation running down the spine and into the limbs upon neck flexion",
      "Uhthoff's phenomenon: transient worsening of neurological symptoms when body temperature rises (hot shower, fever, exercise)",
      "Motor weakness and spasticity: stiffness and heavy legs making walking difficult",
      "Cerebellar ataxia: intention tremor, balance unsteadiness, scanning speech, and nystagmus (Charcot's triad)",
      "Overwhelming chronic fatigue and neurogenic bladder dysfunction (urgency, incontinence, retention)"
    ],
    "early_warning_signs": [
      "Clinically Isolated Syndrome (CIS): a single monophasic neurological episode (e.g. optic neuritis or transverse myelitis) lasting > 24 hours"
    ],
    "possible_causes": [
      "Autoreactive CD4+ and CD8+ T lymphocytes and B cells crossing the blood-brain barrier and attacking myelin basic protein and oligodendrocytes",
      "Epstein-Barr Virus (EBV) infection (virtually 100% seropositive prior to MS development; molecular mimicry)",
      "Genetic susceptibility (HLA-DRB1*15:01 haplotype)"
    ],
    "risk_factors": [
      "Female sex (3 times higher incidence in women)",
      "Age of onset typically 20 to 45 years",
      "Low Vitamin D levels and low sunlight exposure (latitudinal gradient: higher in northern temperate climates)",
      "Cigarette smoking and childhood obesity"
    ],
    "disease_types": [
      "Relapsing-Remitting MS (RRMS - 85% at onset: distinct attacks with full or partial recovery)",
      "Secondary Progressive MS (SPMS - gradual progression of disability following initial relapsing-remitting course)",
      "Primary Progressive MS (PPMS - ~15%: continuous worsening from onset without distinct relapses)"
    ],
    "clinical_evaluation": "Revised 2017 McDonald Criteria: requires objective demonstration of dissemination in space (DIS) and dissemination in time (DIT) of CNS lesions.",
    "diagnostic_tests": [
      "3T Brain and Total Spine MRI with Gadolinium contrast - Gold standard: demonstrates hyperintense T2/FLAIR lesions in characteristic periventricular (Dawson's fingers), juxtacortical/cortical, infratentorial, and spinal cord locations; active lesions show ring or nodular gadolinium enhancement",
      "Lumbar Puncture (CSF analysis) - Demonstration of CSF-specific Oligoclonal Bands (OCBs >= 2 bands not present in serum) and elevated IgG index",
      "Visual Evoked Potentials (VEP) - Delayed P100 wave latency indicating demyelination of the optic nerve"
    ],
    "treatment_overview": "Three-pillar management: 1. Acute Relapse Treatment: High-dose intravenous Methylprednisolone (1000 mg daily for 3-5 days). 2. Disease-Modifying Therapies (DMTs): Initiated early to prevent relapses and long-term disability accumulation. 3. Symptomatic management (Baclofen for spasticity, Modafinil/Amantadine for fatigue).",
    "medication_classes": [
      "High-Efficacy DMTs: Anti-CD20 Monoclonal Antibodies (Ocrelizumab, Ofatumumab), Natalizumab (alpha4-integrin blocker; requires JC virus monitoring to prevent PML), Alemtuzumab",
      "Oral DMTs: S1P Receptor Modulators (Fingolimod, Siponimod), Cladribine, Dimethyl fumarate, Teriflunomide",
      "Platform Injectable DMTs: Interferon-beta (1a and 1b), Glatiramer acetate",
      "Acute relapse: IV Methylprednisolone (1 g/day x 3-5 days) or Plasma Exchange (PLEX) for steroid-refractory relapses"
    ],
    "precautions": [
      "Patients on Natalizumab must have regular JC virus antibody index testing to prevent progressive multifocal leukoencephalopathy (PML)",
      "Avoid hot baths or overheating which temporarily worsens symptoms (Uhthoff's phenomenon)"
    ],
    "prevention": [
      "Maintain adequate serum Vitamin D3 levels (> 40-50 ng/mL)",
      "Strict cessation of smoking (smoking accelerates transition to secondary progressive MS)",
      "Early initiation of high-efficacy DMT halts disability progression"
    ],
    "complications": [
      "Permanent paraparesis or quadriparesis requiring wheelchair mobility",
      "Neurogenic bladder leading to recurrent urosepsis",
      "Cognitive impairment (processing speed deficits in 40-60%) and severe clinical depression"
    ],
    "emergency_signs": [
      "Rapidly ascending spinal cord deficit causing acute paraplegia or loss of bowel/bladder sensation (acute myelitis requiring immediate high-dose IV steroids)"
    ],
    "doctor_specialty": "Neuro-immunologist / Multiple Sclerosis Specialist",
    "faqs": [
      {
        "question": "Does having Multiple Sclerosis mean I will end up in a wheelchair?",
        "answer": "Not anymore. With modern early high-efficacy disease-modifying therapies (DMTs), the majority of MS patients diagnosed today lead active, independent, ambulatory lives for decades."
      },
      {
        "question": "What is the 'MS hug'?",
        "answer": "The MS hug is a tight, girdle-like squeezing sensation around the chest or abdomen, caused by inflammatory demyelination in the thoracic spinal cord sensory pathways."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A40 Multiple sclerosis",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Multiple Sclerosis Information Page",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/multiple-sclerosis"
      },
      {
        "title": "Diagnosis of multiple sclerosis: 2017 revisions of the McDonald criteria",
        "source": "The Lancet Neurology",
        "url": "https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(17)30470-2/fulltext"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/multiple-sclerosis",
    "multilingual": {
      "hi": {
        "name": "मल्टीपल स्केलेरोसिस (Multiple Sclerosis / एमएस)",
        "summary": "शरीर की रोग प्रतिरोधक प्रणाली (इम्यून सिस्टम) द्वारा मस्तिष्क और रीढ़ की हड्डी की नसों की परत (माइलिन) को नुकसान पहुंचाना। आंखों से धुंधला दिखना, झनझनाहट और चलने में कमजोरी इसके लक्षण हैं।",
        "advice": "शुरुआती दौर में ही न्यूरोलॉजिस्ट से रोग-संशोधक दवाएं (DMT) शुरू करवाएं। गर्म पानी से नहाने या अधिक गर्मी से बचें।"
      },
      "hinglish": {
        "name": "Multiple Sclerosis (Nerve Myelin damage bimari)",
        "summary": "Immune system dimaag aur spinal cord ke myelin ko attack karta hai jisse aakh ki roshni kam hona, jhanjhanahat aur chalne me ladkhadahat hoti hai.",
        "advice": "Early diagnosis aur DMT injections/tablets disability ko rokte hain. MRI Brain aur Spine karwayein."
      },
      "ur": {
        "name": "ملٹیپل سکلیروسیس (اعصابی جھلی کی سوزش)",
        "summary": "مدافعتی نظام کا دماغ اور ریڑھ کی ہڈی کے اعصاب کی حفاظتی تہہ پر حملہ، بینائی کی خرابی اور پٹھوں کی کمزوری۔",
        "advice": "فوری طور پر نیورولوجسٹ سے جدید ادویات (DMT) کا آغاز کروائیں۔"
      }
    },
    "target_3d_nodes": [
      "corpus-callosum",
      "periventricular-white-matter",
      "optic-nerve",
      "cervical-spinal-cord",
      "brainstem"
    ],
    "search_keywords": [
      "multiple sclerosis",
      "ms",
      "demyelination",
      "optic neuritis",
      "aakh me dard aur dhundhla dikhna",
      "lhermitte sign",
      "ms hug",
      "spasticity"
    ]
  },
  {
    "disease_id": "sciatica-lumbar-radiculopathy",
    "official_name": "Sciatica / Lumbar radiculopathy",
    "alternative_names": [
      "Lumbar disc herniation",
      "Sciatic nerve compression",
      "Raq-un-Nasa"
    ],
    "category": "spinal-disorders",
    "subcategory": "Spinal nerve root disorders",
    "icd11_code": "FA84.1",
    "simple_description": "Sharp, burning, or shooting pain that radiates from the lower back through the buttock and down the back of the leg, caused by a pinched lumbar nerve root.",
    "medical_description": "A clinical syndrome characterized by pain radiating along the dermatomal distribution of the sciatic nerve (lumbar and sacral nerve roots L4, L5, or S1), extending past the knee into the calf and foot, typically accompanied by paresthesia, sensory deficits, motor weakness (foot drop), or diminished tendon reflexes.",
    "affected_system": "Lumbosacral nerve roots (L4, L5, S1) and the sciatic nerve trunk.",
    "symptoms": [
      "Unilateral sharp, electric, burning, or stabbing pain shooting from lower back/buttock down the back or side of the thigh, calf, and into the foot",
      "Pain typically worse than lower back pain itself",
      "Aggravated by coughing, sneezing, bending forward, or prolonged sitting",
      "Numbness, tingling, or 'pins and needles' in the dermatomal distribution (L5 top of foot, S1 sole of foot)",
      "Motor weakness: difficulty walking on heels (L5 foot drop) or difficulty walking on toes (S1 weakness)",
      "Depressed or absent Achilles tendon reflex (S1 radiculopathy)"
    ],
    "early_warning_signs": [
      "Localized low back ache transitioning over days into pain traveling down into the gluteal region"
    ],
    "possible_causes": [
      "Lumbar intervertebral disc herniation (protrusion or extrusion compressing nerve root at L4-L5 or L5-S1 - 90% of cases)",
      "Lumbar spinal stenosis and facet joint arthropathy",
      "Spondylolisthesis (vertebral slippage)",
      "Piriformis syndrome (compression of sciatic nerve by piriformis muscle)"
    ],
    "risk_factors": [
      "Age 30 to 50 years",
      "Sedentary desk lifestyle with poor posture or occupations involving heavy lifting/twisting",
      "Obesity and smoking (accelerates disc degeneration)",
      "Diabetes mellitus"
    ],
    "disease_types": [
      "Acute sciatica (< 6 weeks)",
      "Chronic lumbar radiculopathy (> 12 weeks)",
      "Cauda Equina Syndrome (SURGICAL EMERGENCY: massive central disc herniation compressing multiple lumbosacral roots)"
    ],
    "clinical_evaluation": "Straight Leg Raise (Lasègue's sign): radiating pain below the knee between 30 and 70 degrees elevation has high sensitivity; Crossed Straight Leg Raise has high specificity. Assessment of myotomes, dermatomes, and reflexes.",
    "diagnostic_tests": [
      "High-field 3T Lumbar Spine MRI - Diagnostic gold standard: delineates disc herniation size, nerve root impingement, and spinal canal stenosis",
      "Electromyography (EMG) and Nerve Conduction Studies (NCS) - Confirms active denervation and chronicity after 3-4 weeks"
    ],
    "treatment_overview": "Conservative therapy resolves > 80% within 6 to 8 weeks: short relative rest (avoid prolonged bed rest), active physiotherapy, NSAIDs, neuropathic analgesia. Fluoroscopically guided epidural steroid injection for persistent severe pain. Surgical lumbar microdiscectomy indicated for progressive motor deficit (foot drop) or failure of conservative care > 6-12 weeks.",
    "medication_classes": [
      "First-line anti-inflammatory: NSAIDs (Naproxen, Ibuprofen, Etoricoxib) for short courses",
      "Neuropathic pain modulators: Pregabalin (75-300 mg/day) or Gabapentin (300-1800 mg/day)",
      "Muscle relaxants (Thiocolchicoside, Baclofen) for acute spasm",
      "Fluoroscopic transforaminal epidural steroid injection (Dexamethasone/Triamcinolone)"
    ],
    "precautions": [
      "AVOID prolonged strict bed rest (> 2 days); early gentle ambulation and core mobility promote faster healing",
      "Avoid heavy deadlifting, slouching in soft couches, or sudden twisting while bent"
    ],
    "prevention": [
      "Core muscle strengthening (McKenna / McGill Big 3 exercises)",
      "Proper ergonomic lumbar support and correct lifting mechanics (bend knees, not waist)",
      "Maintain healthy body weight"
    ],
    "complications": [
      "Permanent motor deficit (chronic foot drop requiring ankle-foot orthosis)",
      "Chronic neuropathic lumbar radicular pain syndrome",
      "Cauda equina syndrome"
    ],
    "emergency_signs": [
      "🚨 CRITICAL SURGICAL EMERGENCY (Cauda Equina Syndrome): Call 112 / 911 or go to emergency immediately if you develop: 1. Numbness in groin, buttocks, or genitals ('saddle anesthesia'), 2. Loss of control over bladder or bowel (incontinence or inability to urinate), 3. Rapidly worsening weakness in both legs."
    ],
    "doctor_specialty": "Spine Neurologist / Neurosurgeon / Physical Medicine and Rehabilitation",
    "faqs": [
      {
        "question": "What is Cauda Equina Syndrome and why is it an emergency?",
        "answer": "It happens when a large disc herniation crushes the cluster of nerve roots at the base of the spinal cord. It causes numbness between the legs (saddle area) and loss of bladder/bowel control. Emergency spine surgery is required within 24 to 48 hours to prevent permanent paralysis and lifelong incontinence."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: FA84.1 Radiculopathy of lumbar region",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Sciatica Information",
        "source": "MedlinePlus / NINDS",
        "url": "https://medlineplus.gov/sciatica.html"
      }
    ],
    "source_url": "https://medlineplus.gov/sciatica.html",
    "multilingual": {
      "hi": {
        "name": "साइटिका / कमर से पैर में जाने वाला दर्द (Sciatica / Lumbar Radiculopathy)",
        "summary": "कमर की नस (Sciatic nerve) दबने से कूल्हे से लेकर जांघ और पैर के पंजे तक करंट जैसा तेज दर्द, झनझनाहट या पैर में कमजोरी होना।",
        "advice": "लगातार बिस्तर पर लेटे न रहें, हल्की चाल रखें और फिजियोथेरेपी करें। यदि पेशाब रुक जाए या सुन्नपन आए तो तुरंत इमरजेंसी जाएं।"
      },
      "hinglish": {
        "name": "Sciatica (Kamar se pair me shooting pain)",
        "summary": "Kamar me L4-L5 disc dabne se buttock se lekar poore pair ke talve tak aag jaisa dard aur sunn-pan hona.",
        "advice": "Bed rest na karein, MRI Lumbar Spine karwayein. Saddle numbness ya urine rukne par turant emergency surgery lagti hai."
      },
      "ur": {
        "name": "عرق النسا (سائیٹیکا / کمر سے پاؤں کا درد)",
        "summary": "کمر کے مہرے کے ہلنے سے اعصاب کا دب جانا اور کولہے سے لے کر پاؤں تک شدید درد اور سن پن۔",
        "advice": "زیادہ دیر بستر پر نہ رہیں، ہلکی واک اور فزیوتھراپی کریں۔ پیشاب میں رکاوٹ کی صورت میں فوری ایمرجنسی رجوع کریں۔"
      }
    },
    "target_3d_nodes": [
      "lumbar-spine",
      "cauda-equina",
      "sciatic-nerve",
      "somatosensory-cortex"
    ],
    "search_keywords": [
      "sciatica",
      "kamar se pair me dard",
      "shooting pain down leg",
      "pinched nerve back",
      "disc slip",
      "lumbar radiculopathy",
      "foot drop"
    ]
  },
  {
    "disease_id": "amyotrophic-lateral-sclerosis",
    "official_name": "Amyotrophic lateral sclerosis",
    "alternative_names": [
      "ALS",
      "Motor neuron disease (MND)",
      "Lou Gehrig's disease"
    ],
    "category": "neuromuscular",
    "subcategory": "Motor neuron diseases",
    "icd11_code": "8B60.0",
    "simple_description": "A progressive, fatal neurodegenerative disease that attacks both upper and lower motor nerve cells controlling voluntary muscles, leading to muscle wasting, weakness, and loss of ability to walk, speak, swallow, and breathe.",
    "medical_description": "A rapidly progressive, fatal neurodegenerative disorder characterized by the simultaneous degeneration of both upper motor neurons (corticospinal and corticobulbar tracts) and lower motor neurons (anterior horns of the spinal cord and motor cranial nerve nuclei). Leads to combined signs of spasticity and hyperreflexia alongside progressive muscular atrophy, profound weakness, and fasciculations.",
    "affected_system": "Primary motor cortex, corticospinal tract, spinal anterior horn cells, brainstem motor nuclei (hypoglossal, vagal, trigeminal).",
    "symptoms": [
      "Asymmetric progressive muscle weakness and wasting (atrophy) starting in a hand (clumsiness, dropping keys) or foot (foot drop)",
      "Visible muscle twitching under the skin (fasciculations) and severe muscle cramps",
      "Bulbar symptoms: progressive slurring of speech (dysarthria), nasal voice, and difficulty swallowing (dysphagia)",
      "Hyperreflexia (brisk deep tendon reflexes) and extensor plantar responses (positive Babinski sign)",
      "Pseudobulbar affect: uncontrollable, involuntary bouts of crying or laughing incongruent with mood",
      "Normal sensation, normal bladder/bowel sphincter control, and normal eye movements (spared until end stage)",
      "Late stage: progressive respiratory insufficiency (orthopnea, morning headaches, dyspnea on exertion)"
    ],
    "early_warning_signs": [
      "Subtle weakness in one hand (difficulty turning a key, buttoning a shirt) or unexplained frequent tripping over toes"
    ],
    "possible_causes": [
      "TDP-43 proteinopathy: pathological cytoplasmic accumulation and aggregation of hyperphosphorylated TDP-43 (in > 97% of ALS cases)",
      "Genetic mutations (10-15% familial ALS): C9orf72 hexanucleotide repeat expansion (most common), SOD1, TARDBP, FUS",
      "Glutamate excitotoxicity (failure of astroglial EAAT2 reuptake) and oxidative stress"
    ],
    "risk_factors": [
      "Age (peak onset 55 to 75 years)",
      "Male sex (1.5 times more frequent in men)",
      "Family history of ALS or frontotemporal dementia (FTD)",
      "Military service and heavy physical labor (statistical associations under active study)"
    ],
    "disease_types": [
      "Spinal-onset ALS (~70% of cases: limb weakness)",
      "Bulbar-onset ALS (~25-30% of cases: speech and swallowing difficulties first; faster progression)",
      "Familial ALS (10-15%) vs Sporadic ALS (85-90%)",
      "ALS with Frontotemporal Dementia (ALS-FTD, ~15%)"
    ],
    "clinical_evaluation": "Gold Coast / Revised El Escorial Criteria: requiring simultaneous objective upper motor neuron (UMN) and lower motor neuron (LMN) signs in multiple anatomical regions, progressive course, and exclusion of mimics.",
    "diagnostic_tests": [
      "Electromyography (EMG) and Nerve Conduction Studies (NCS) - Essential test: shows widespread active denervation (fibrillation potentials, positive sharp waves, fasciculation potentials) and chronic reinnervation across multiple body segments",
      "3T Brain and Total Spine MRI - Rules out cervical compressive myelopathy, radiculopathy, or structural brainstem lesions; may show corticospinal tract T2/FLAIR hyperintensity ('motor band sign')",
      "Blood panel: Serum creatine kinase (mildly elevated), serum neurofilament light chain (NfL - valuable biomarker of rapid axonal loss)",
      "Pulmonary function tests (Forced Vital Capacity - FVC, and sniff nasal inspiratory pressure - SNIP)"
    ],
    "treatment_overview": "Comprehensive multidisciplinary ALS clinic care extending survival and quality of life. Disease-modifying medications (Riluzole, Edaravone). Proactive respiratory support with early Non-Invasive Ventilation (NIV / BiPAP) when FVC drops < 80% (extends survival longer than any drug). Nutritional support with Percutaneous Endoscopic Gastrostomy (PEG) feeding tube before severe weight loss occurs.",
    "medication_classes": [
      "Glutamate Release Inhibitor: Riluzole (50 mg twice daily - prolongs median survival by 2-3 months)",
      "Free Radical Scavenger: Edaravone (IV or oral suspension - slows functional motor decline)",
      "Symptomatic management: Dextromethorphan + Quinidine (Nuedexta) for pseudobulbar crying/laughing, Baclofen/Tizanidine for spasticity, Glycopyrrolate/Scopolamine or salivary gland botulinum toxin for drooling (sialorrhea)"
    ],
    "precautions": [
      "DO NOT administer high-flow oxygen without ventilation support in advanced ALS (causes dangerous hypercapnic respiratory arrest due to loss of hypoxic respiratory drive)",
      "Avoid aspiration: modify food textures to soft purees and thicken liquids early"
    ],
    "prevention": [
      "No established primary prevention; genetic testing and counseling for families carrying C9orf72 or SOD1 mutations (Tofersen antisense oligonucleotide therapy approved for SOD1-ALS)"
    ],
    "complications": [
      "Respiratory failure due to diaphragmatic paralysis (primary cause of death)",
      "Aspiration pneumonia and severe malnutrition",
      "Deep vein thrombosis and pressure injuries from immobility"
    ],
    "emergency_signs": [
      "Severe respiratory distress, inability to breathe lying flat (orthopnea), acute choking episodes"
    ],
    "doctor_specialty": "Neuromuscular Neurologist / Multidisciplinary ALS Center",
    "faqs": [
      {
        "question": "Is ALS the same as Multiple Sclerosis (MS)?",
        "answer": "No. MS is an autoimmune disease of the nerve insulation (myelin) that causes sensory loss, vision changes, and relapses, and is generally manageable for decades. ALS is a motor neuron degeneration that specifically affects voluntary muscle strength without affecting sensation or vision."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8B60.0 Motor neuron disease (ALS)",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Amyotrophic Lateral Sclerosis (ALS) Fact Sheet",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/amyotrophic-lateral-sclerosis-als"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/amyotrophic-lateral-sclerosis-als",
    "multilingual": {
      "hi": {
        "name": "एएलएस / मोटर न्यूरॉन डिजीज (Amyotrophic Lateral Sclerosis)",
        "summary": "मांसपेशियों को नियंत्रित करने वाली नसों (Motor Neurons) की गंभीर बीमारी, जिससे हाथ-पैरों में कमजोरी, बोलने और निगलने में कठिनाई और सांस लेने में परेशानी होती है।",
        "advice": "शुरुआती दौर में ही न्यूरोमस्कुलर स्पेशलिस्ट से मिलें। समय पर BiPAP वेंटिलेशन और फिजियोथेरेपी बहुत मददगार होती है।"
      },
      "hinglish": {
        "name": "ALS (Motor Neuron Disease / Lou Gehrig's)",
        "summary": "Motor neurons degenerate hone se voluntary muscles kamzor aur patli ho jati hain. Sensation aur dimaag bilkul normal rehta hai.",
        "advice": "Multidisciplinary clinic me Riluzole dawai, breathing exercises aur BiPAP support lein."
      },
      "ur": {
        "name": "موٹر نیوران ڈیزیز / اے ایل ایس (ALS)",
        "summary": "حرکتی اعصاب کی کمزوری جس سے پٹھے کمزور ہو جاتے ہیں، بولنے، نگلنے اور سانس لینے میں دشواری پیش آتی ہے۔",
        "advice": "نیورولوجسٹ اور جدید سانس کی معاونت (BiPAP) کا بروقت استعمال ضروری ہے۔"
      }
    },
    "target_3d_nodes": [
      "precentral-gyrus",
      "motor-cortex",
      "corticospinal-tract",
      "brainstem-motor-nuclei"
    ],
    "search_keywords": [
      "als",
      "motor neuron disease",
      "mnd",
      "lou gehrig",
      "muscle wasting",
      "fasciculations",
      "muscle twitching weakness",
      "difficulty swallowing and speaking"
    ]
  },
  {
    "disease_id": "myasthenia-gravis",
    "official_name": "Myasthenia gravis",
    "alternative_names": [
      "MG",
      "Autoimmune neuromuscular junction disorder",
      "Palko ka girna aur thakan"
    ],
    "category": "neuromuscular",
    "subcategory": "Neuromuscular junction disorders",
    "icd11_code": "8C60",
    "simple_description": "An autoimmune disorder where antibodies block communication between nerves and muscles, causing muscle weakness and fatigue that worsens with activity and improves with rest.",
    "medical_description": "An acquired autoimmune disorder of the neuromuscular junction characterized by pathogenic autoantibodies directed against postsynaptic components of the motor endplate, most commonly the nicotinic acetylcholine receptor (AChR, 80-85%), muscle-specific kinase (MuSK, 5-7%), or LRP4. Clinically hallmarks fluctuating, fatigable skeletal muscle weakness with diurnal variation (worse in the evening or after exertion).",
    "affected_system": "Postsynaptic motor endplate membrane of voluntary skeletal muscles, extraocular muscles, bulbar muscles, and thymus gland.",
    "symptoms": [
      "Fluctuating, fatigable muscle weakness that worsens as the day progresses or with repetitive use, and temporarily recovers with rest",
      "Ocular symptoms (> 50% presentation, > 85% involved): asymmetric drooping of the eyelids (ptosis) and double vision (diplopia)",
      "Bulbar muscle fatigue: difficulty chewing tough foods ('jaw fatigue'), nasal slurred speech with prolonged talking, swallowing difficulty (dysphagia)",
      "Facial muscle weakness: 'snarling smile' (transverse smile) and difficulty whistling or puffing cheeks",
      "Neck extensor weakness: 'dropped head syndrome'",
      "Proximal limb weakness: difficulty climbing stairs, combing hair, or lifting arms overhead"
    ],
    "early_warning_signs": [
      "Drooping of one or both eyelids or double vision that appears in the evening after working, disappearing by morning"
    ],
    "possible_causes": [
      "Circulating IgG antibodies (IgG1 and IgG3) binding to acetylcholine receptors (AChR), activating the complement cascade, causing membrane attack complex (MAC) destruction of postsynaptic junctional folds",
      "Thymic pathology: follicular hyperplasia of the thymus (65%) or thymoma (10-15%) driving autoreactive T/B cell clones"
    ],
    "risk_factors": [
      "Young women (peak incidence in 20s and 30s) and older men (peak incidence in 60s and 70s)",
      "Other autoimmune disorders (thyroid disease, rheumatoid arthritis, lupus)",
      "Certain medications that impair neuromuscular transmission (aminoglycosides, fluoroquinolones, beta-blockers, statins, magnesium)"
    ],
    "disease_types": [
      "Ocular Myasthenia Gravis (restricted strictly to extraocular and levator muscles for > 2 years)",
      "Generalized Myasthenia Gravis (mild, moderate, or severe involvement of bulbar, limb, or respiratory muscles)",
      "Anti-MuSK Myasthenia (predominantly bulbar, facial, and neck weakness; no thymic pathology)",
      "Myasthenic Crisis (respiratory muscle weakness requiring invasive or non-invasive mechanical ventilation)"
    ],
    "clinical_evaluation": "Quantitative Myasthenia Gravis (QMG) score. Bedside clinical tests: Simpson test (sustained upward gaze for 60 seconds provokes ptosis), Ice Pack test (ice pack placed on ptotic eyelid for 2 minutes causes temporary improvement in lid opening >= 2 mm due to decreased acetylcholinesterase activity).",
    "diagnostic_tests": [
      "Serological Autoantibody Testing - Anti-AChR binding, blocking, and modulating antibodies (positive in 85% generalized MG); if negative, test for Anti-MuSK and Anti-LRP4",
      "Repetitive Nerve Stimulation (RNS) - Shows decremental compound muscle action potential (CMAP) response (> 10% decrement at 3 Hz stimulation)",
      "Single-Fiber Electromyography (SFEMG) - Most sensitive diagnostic test (> 95% sensitivity), demonstrating increased jitter and impulse blocking",
      "Chest CT with contrast - MANDATORY in all patients to detect thymoma or thymic hyperplasia"
    ],
    "treatment_overview": "Four-pronged therapeutic strategy: 1. Symptomatic enhancement of acetylcholine: Acetylcholinesterase inhibitors (Pyridostigmine). 2. Immunosuppressive therapy: Corticosteroids (Prednisolone) and steroid-sparing agents (Azathioprine, Mycophenolate mofetil, Tacrolimus). 3. Thymectomy (surgical removal of the thymus gland): Indicated for all patients with thymoma, and strongly recommended in non-thymomatous generalized AChR-positive MG aged 18-50 (significantly reduces medication requirements). 4. Rapid rescue therapy for crisis: Plasmapheresis (PLEX) or Intravenous Immunoglobulin (IVIG). Targeted biologics (FcRn inhibitors - Efgartigimod; Complement inhibitors - Eculizumab, Ravulizumab).",
    "medication_classes": [
      "Cholinesterase Inhibitor: Pyridostigmine bromide (Mestinon - 60 mg tablets 3-5 times daily)",
      "Immunosuppressants: Prednisolone (tapered slowly), Azathioprine (2-3 mg/kg/day), Mycophenolate mofetil",
      "Targeted Biologics: Efgartigimod (anti-FcRn), Ravulizumab / Eculizumab (C5 complement inhibitor)",
      "Rescue crisis therapies: IVIG (2 g/kg over 2-5 days) or Plasma Exchange (5-7 exchanges)"
    ],
    "precautions": [
      "AVOID medications that exacerbate MG: Fluoroquinolones (Ciprofloxacin), Macrolides (Azithromycin), Aminoglycosides, Beta-blockers, Magnesium infusions, and muscle relaxants",
      "Watch out for Cholinergic Crisis (overdose of Pyridostigmine causing excessive secretions, abdominal cramps, diarrhea, and muscle fasciculations/weakness, mimicking myasthenic worsening)"
    ],
    "prevention": [
      "Prompt treatment of systemic infections (infections are the #1 trigger for myasthenic crisis)",
      "Thymectomy in appropriate patients induces long-term remission"
    ],
    "complications": [
      "Myasthenic Crisis: severe diaphragmatic and intercostal weakness leading to respiratory failure (requires urgent ICU intubation)",
      "Aspiration pneumonia from severe dysphagia"
    ],
    "emergency_signs": [
      "🚨 CRITICAL EMERGENCY (Myasthenic Crisis): Sudden severe shortness of breath, inability to count past 10 in a single breath, or severe inability to swallow saliva"
    ],
    "doctor_specialty": "Neuromuscular Neurologist",
    "faqs": [
      {
        "question": "What is the Ice Pack test?",
        "answer": "It is a simple bedside test where an ice pack wrapped in cloth is placed over a drooping eyelid for 2 minutes. The cold temperature slows down the enzyme that breaks down acetylcholine, so if the eyelid visibly lifts and opens much better, it strongly points to Myasthenia Gravis."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8C60 Myasthenia gravis",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Myasthenia Gravis Fact Sheet",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/myasthenia-gravis"
      },
      {
        "title": "International Consensus Guidance for Management of Myasthenia Gravis",
        "source": "Neurology Journal",
        "url": "https://www.neurology.org/doi/10.1212/WNL.0000000000011124"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/myasthenia-gravis",
    "multilingual": {
      "hi": {
        "name": "मायस्थेनिया ग्रेविस (Myasthenia Gravis)",
        "summary": "मांसपेशियों और नसों के जोड़ (Neuromuscular Junction) की ऑटोइम्यून बीमारी, जिससे पलकें झुकना (Ptosis), दो-दो दिखना (Double vision) और शाम के समय मांसपेशियों में अत्यधिक थकान होती है।",
        "advice": "शाम को थकान बढ़ने पर आराम करें। सांस लेने या निगलने में तकलीफ होने पर तुरंत इमरजेंसी अस्पताल जाएं। कुछ एंटीबायोटिक्स (जैसे सिप्रोफ्लोक्सासिन) से बचें।"
      },
      "hinglish": {
        "name": "Myasthenia Gravis (Palko ka dhalakna aur body fatigue)",
        "summary": "Nerve-muscle signal block hone se aakh ki palke girna, do dikhna aur kaam karne se kamzori badhna jo aaram karne se theek hoti hai.",
        "advice": "Pyridostigmine (Mestinon) dawai time par lein, Chest CT scan karwayein aur breathing problem par turant ICU jayein."
      },
      "ur": {
        "name": "مائستھینیا گریوس (پٹھوں کی تھکن کی بیماری)",
        "summary": "پٹھوں اور اعصاب کے رابطے میں خرابی کی وجہ سے پلکوں کا جھک جانا، بینائی کا دھندلا پن اور معمولی کام کے بعد شدید کمزوری۔",
        "advice": "فوری طور پر نیورولوجسٹ سے ادویات لیں اور سانس کی دشواری کی صورت میں فوری ایمرجنسی رجوع کریں۔"
      }
    },
    "target_3d_nodes": [
      "neuromuscular-junction",
      "thymus-gland",
      "cranial-nerves",
      "motor-endplate"
    ],
    "search_keywords": [
      "myasthenia gravis",
      "palke girna",
      "ptosis",
      "double vision",
      "diplopia",
      "muscle fatigue resting recovery",
      "mestinon",
      "myasthenic crisis"
    ]
  },
  {
    "disease_id": "narcolepsy",
    "official_name": "Narcolepsy",
    "alternative_names": [
      "Hypersomnia of central origin",
      "Cataplexy syndrome",
      "Neend ki bimari"
    ],
    "category": "sleep-disorders",
    "subcategory": "Central disorders of hypersomnolence",
    "icd11_code": "7A20",
    "simple_description": "A chronic neurological sleep disorder where the brain cannot regulate normal sleep-wake cycles, causing overwhelming daytime sleepiness and sudden episodes of falling asleep or muscle weakness triggered by emotion.",
    "medical_description": "A central disorder of hypersomnolence caused by the selective autoimmune destruction of approximately 70,000 hypocretin/orexin-producing neurons in the posterolateral hypothalamus. Clinically characterized by the classic pentad: excessive daytime sleepiness (EDS), cataplexy (sudden bilateral loss of muscle tone triggered by strong emotions), sleep paralysis, hypnagogic/hypnopompic hallucinations, and disrupted nocturnal sleep.",
    "affected_system": "Hypothalamus (lateral hypothalamic hypocretin/orexin neuronal network), locus coeruleus, tuberomammillary nucleus, and REM sleep-regulating brainstem centers.",
    "symptoms": [
      "Excessive Daytime Sleepiness (EDS): irresistible daily sleep attacks occurring regardless of adequate nocturnal sleep, often falling asleep mid-conversation or eating",
      "Cataplexy (in Type 1): sudden bilateral brief loss of muscle tone provoked by positive emotions (laughter, joking, surprise) without loss of consciousness (jaw slacking, knees buckling, head dropping)",
      "Sleep paralysis: complete inability to move or speak for 1-2 minutes upon falling asleep or waking up",
      "Hypnagogic and hypnopompic hallucinations: vivid, often terrifying dream-like sensory hallucinations when falling asleep or awakening",
      "Fragmented nocturnal sleep with frequent awakenings"
    ],
    "early_warning_signs": [
      "Unexplained extreme sleepiness during school or work leading to accidental naps, accompanied by momentary facial twitching or knee buckling during laughter"
    ],
    "possible_causes": [
      "Selective autoimmune destruction of hypothalamic hypocretin (orexin) neuropeptide-producing neurons",
      "Strong genetic predisposition: HLA-DQB1*06:02 allele present in > 95% of Type 1 narcolepsy patients"
    ],
    "risk_factors": [
      "Age of onset typically in adolescence or young adulthood (peaks at age 15 and 35)",
      "HLA-DQB1*06:02 carrier status",
      "Environmental triggers: H1N1 influenza infection or post-infectious immune stimulation"
    ],
    "disease_types": [
      "Narcolepsy Type 1 (NT1 - with cataplexy and CSF hypocretin-1 deficiency <= 110 pg/mL)",
      "Narcolepsy Type 2 (NT2 - without cataplexy, normal hypocretin levels; isolated hypersomnia)",
      "Secondary narcolepsy (due to hypothalamic structural lesions, tumors, or sarcoidosis)"
    ],
    "clinical_evaluation": "Epworth Sleepiness Scale (ESS > 10/24), detailed sleep log and actigraphy for >= 2 weeks, clinical history of emotional muscle buckling.",
    "diagnostic_tests": [
      "Overnight Polysomnography (PSG) followed immediately by Daytime Multiple Sleep Latency Test (MSLT) - Mandatory diagnostic standard: MSLT shows mean sleep latency <= 8 minutes and >= 2 Sleep-Onset REM Periods (SOREMPs)",
      "CSF Hypocretin-1 (Orexin-A) measurement via Lumbar Puncture - Gold standard: levels <= 110 pg/mL (or < 1/3 of normal control mean) definitively confirms Narcolepsy Type 1"
    ],
    "treatment_overview": "Comprehensive approach combining scheduled 15-20 minute daytime naps, wake-promoting stimulants for daytime sleepiness, and REM-suppressing medications for cataplexy and sleep paralysis.",
    "medication_classes": [
      "First-line Wake-Promoting Agents: Modafinil (100-400 mg/day) or Armodafinil (non-amphetamine selective dopamine reuptake inhibitors)",
      "Histamine H3 Receptor Inverse Agonist: Pitolisant (Wakix)",
      "Dopamine/Norepinephrine Reuptake Inhibitor: Solriamfetol (Sunosi)",
      "Oxybate Salts (Sodium oxybate / Calcium-magnesium-potassium-sodium oxybates - Xyrem/Xywav) - Gold standard for treating both cataplexy and fragmented nocturnal sleep",
      "Antidepressants for Cataplexy: Venlafaxine, Fluoxetine, Clomipramine (suppresses REM intrusion)"
    ],
    "precautions": [
      "DO NOT drive or operate dangerous machinery when untreated or feeling a sleep attack coming on",
      "Schedule strictly planned 15-minute daytime naps at lunch and late afternoon"
    ],
    "prevention": [
      "Strict sleep hygiene: consistent nocturnal bedtimes and wake times 7 days a week",
      "Avoid heavy carbohydrate-rich meals during daytime which worsen sleepiness"
    ],
    "complications": [
      "Severe motor vehicle collisions and workplace machinery accidents",
      "Occupational disability, depression, and social isolation due to misconceptions of 'laziness'"
    ],
    "emergency_signs": [
      "Sudden loss of tone while swimming or driving resulting in trauma or near-drowning"
    ],
    "doctor_specialty": "Sleep Medicine Specialist / Neurologist",
    "faqs": [
      {
        "question": "What is Cataplexy in simple terms?",
        "answer": "Cataplexy is when a strong emotion—most commonly laughing at a funny joke or feeling surprised—triggers an instant temporary loss of muscle strength, causing your knees to give way or your jaw to drop for a few seconds, while remaining completely awake and conscious."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 7A20 Narcolepsy",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Narcolepsy Fact Sheet",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/narcolepsy"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/narcolepsy",
    "multilingual": {
      "hi": {
        "name": "नार्कोलेप्सी (Narcolepsy / अत्यधिक नींद का विकार)",
        "summary": "मस्तिष्क के नींद नियंत्रण केंद्र (Hypothalamus) में हाइपोक्रेटिन की कमी, जिससे दिन में कभी भी अचानक गहरी नींद के झटके आना और हंसने या भावना पर मांसपेशियों का कमजोर होना (Cataplexy) होता है।",
        "advice": "ड्राइविंग करने से बचें। दिन में 15-20 मिनट की छोटी नैप (झपकी) लें और स्लीप स्पेशलिस्ट से वेक-प्रोमोटिंग दवाएं (Modafinil) लें।"
      },
      "hinglish": {
        "name": "Narcolepsy (Achanak din me neend aana aur Cataplexy)",
        "summary": "Dimaag me Orexin chemical kam hone se din me achanak neend ke daure aana aur hasne par ghutne mudna.",
        "advice": "Sleep study (PSG/MSLT) karwayein aur Modafinil dawai lein. Daytime short naps bohot helpful hoti hain."
      },
      "ur": {
        "name": "نارکولپسی (دن کے وقت اچانک شدید نیند)",
        "summary": "دماغ کے نیند کے نظام میں خرابی، دن میں اچانک سو جانا اور ہنسنے یا خوشی پر پٹھوں کا ڈھیلا پڑ جانا۔",
        "advice": "گاڑی چلانے سے گریز کریں اور نیند کے ماہر ڈاکٹر سے رجوع کریں۔"
      }
    },
    "target_3d_nodes": [
      "hypothalamus",
      "locus-coeruleus",
      "brainstem",
      "thalamus"
    ],
    "search_keywords": [
      "narcolepsy",
      "din me achanak neend aana",
      "cataplexy",
      "sleep attacks",
      "hasne par kamzori",
      "sleep paralysis",
      "modafinil"
    ]
  },
  {
    "disease_id": "generalized-anxiety-disorder",
    "official_name": "Generalized anxiety disorder",
    "alternative_names": [
      "GAD",
      "Chronic anxiety neurosis",
      "Chinta aur ghabrahat ka rog"
    ],
    "category": "mental-health",
    "subcategory": "Anxiety and fear-related disorders",
    "icd11_code": "6B00",
    "simple_description": "A persistent mental health condition characterized by excessive, uncontrollable worry and anxiety about everyday matters, accompanied by physical restlessness, muscle tension, and rapid heartbeat.",
    "medical_description": "An anxiety disorder characterized by general, persistent anxiety and excessive, intrusive, disproportionate worry (apprehensive expectation) across multiple domains of everyday life (such as family, health, finances, work). The symptoms persist for at least several months and are accompanied by motor tension (restlessness, trembling, inability to relax) and autonomic hyperactivity (palpitations, sweating, dry mouth, sleep disturbance).",
    "affected_system": "Limbic system (amygdala hyper-reactivity, prefrontal cortex hypofunction, anterior cingulate cortex) and hypothalamic-pituitary-adrenal (HPA) neuroendocrine axis.",
    "symptoms": [
      "Excessive, uncontrollable worry occurring on more days than not about a variety of everyday life situations",
      "Physical restlessness, feeling keyed-up, on edge, or unable to sit still",
      "Persistent muscle tension, aching shoulders, neck tightness, or tension headaches",
      "Autonomic symptoms: rapid heart rate (palpitations), trembling, shortness of breath, stomach churn, frequent urination",
      "Fatigability and difficulty concentrating or mind going blank",
      "Sleep disturbance: difficulty falling or staying asleep, or restless unsatisfying sleep"
    ],
    "early_warning_signs": [
      "Gradually escalating difficulty controlling worries about routine daily responsibilities, causing irritability and insomnia"
    ],
    "possible_causes": [
      "Dysregulation of central neurotransmitter systems: gamma-aminobutyric acid (GABA-A receptor hypofunction), serotonin (5-HT), and norepinephrine",
      "Hyperactive amygdala responses coupled with decreased top-down inhibitory control from the ventromedial prefrontal cortex",
      "Chronic environmental stressors and genetic heritability (~30%)"
    ],
    "risk_factors": [
      "Female sex (twice as prevalent in women)",
      "Family history of anxiety or depressive disorders",
      "Childhood adversity, trauma, or prolonged psychological stress",
      "High neuroticism personality trait"
    ],
    "disease_types": [
      "Generalized anxiety disorder without panic attacks",
      "GAD comorbid with Major Depressive Disorder (very common clinical presentation)"
    ],
    "clinical_evaluation": "Comprehensive psychiatric clinical interview utilizing validated scales (Generalized Anxiety Disorder 7-item scale - GAD-7 score >= 10 indicates moderate-to-severe anxiety). Physical exam and blood tests to exclude medical mimics (hyperthyroidism, pheochromocytoma, caffeine toxicity).",
    "diagnostic_tests": [
      "Serum Thyroid Stimulating Hormone (TSH) and Free T4 - Mandatory to rule out hyperthyroidism",
      "Complete blood count, serum electrolytes, fasting blood glucose",
      "12-Lead ECG - Evaluates palpitations and rules out cardiac arrhythmias before psychotropic prescribing"
    ],
    "treatment_overview": "Evidence-based dual approach: First-line psychotherapy: Cognitive Behavioral Therapy (CBT - focused on cognitive restructuring and exposure). First-line pharmacotherapy: Selective Serotonin Reuptake Inhibitors (SSRIs) or Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs). Short-term rescue with beta-blockers (Propranolol) for autonomic somatic symptoms. Non-benzodiazepine anxiolytics (Buspirone).",
    "medication_classes": [
      "First-line SSRIs: Escitalopram (10-20 mg daily), Sertraline (50-200 mg daily), Paroxetine",
      "First-line SNRIs: Venlafaxine XR (75-225 mg daily), Duloxetine",
      "Somatic Autonomic Blocker: Propranolol (10-40 mg as needed for physical tremors/palpitations)",
      "5-HT1A Partial Agonist: Buspirone (15-60 mg/day; non-sedating, no dependency risk)",
      "Gabapentinoid: Pregabalin (approved in Europe/UK for GAD)"
    ],
    "precautions": [
      "AVOID long-term continuous Benzodiazepines (Alprazolam, Clonazepam) due to rapid tolerance, physiological dependence, and cognitive dulling",
      "Avoid excessive caffeine, energy drinks, and recreational stimulants which trigger autonomic panic symptoms"
    ],
    "prevention": [
      "Daily aerobic exercise and regular diaphragmatic breathing techniques (4-7-8 breathing)",
      "Mindfulness-Based Stress Reduction (MBSR) and consistent sleep hygiene"
    ],
    "complications": [
      "Development of secondary Major Depressive Disorder and demoralization",
      "Self-medication with alcohol or sedatives (substance use disorder)",
      "Impaired occupational performance and marital/social distress"
    ],
    "emergency_signs": [
      "Acute thoughts of self-harm or suicide. Immediately contact 24x7 crisis helplines: Tele-MANAS (14416 / 1800-891-4416), Kiran (1800-599-0019), or 988 Lifeline."
    ],
    "doctor_specialty": "Psychiatrist / Clinical Psychologist",
    "faqs": [
      {
        "question": "Can anxiety cause real physical symptoms in the body?",
        "answer": "Yes, absolutely! The brain's anxiety centers release adrenaline and cortisol, triggering real physiological physical changes: racing heart, shortness of breath, trembling, muscle cramps, digestive distress, and headaches."
      },
      {
        "question": "Are anxiety medicines addictive?",
        "answer": "First-line modern medicines like SSRIs (Escitalopram, Sertraline) and Buspirone are NOT addictive and do not cause dependence. Only older sedatives called benzodiazepines (like Alprazolam) carry a risk of habit formation if misused."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 6B00 Generalized anxiety disorder",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Generalized Anxiety Disorder: When Worry Gets Out of Control",
        "source": "National Institute of Mental Health (NIMH)",
        "url": "https://www.nimh.nih.gov/health/publications/generalized-anxiety-disorder-gad"
      }
    ],
    "source_url": "https://www.nimh.nih.gov/health/publications/generalized-anxiety-disorder-gad",
    "multilingual": {
      "hi": {
        "name": "सामान्यीकृत चिंता विकार (Generalized Anxiety Disorder / घबराहट का रोग)",
        "summary": "हर समय अत्यधिक चिंता, घबराहट, दिल की धड़कन तेज होना, मांसपेशियों में तनाव और बेचैनी रहना जो खुद से नियंत्रित न हो सके।",
        "advice": "यह एक चिकित्सीय स्थिति है जिसका इलाज संभव है। मनोचिकित्सक (Psychiatrist) से परामर्श लें और सीबीटी थेरेपी व सुरक्षित दवाएं शुरू करें।"
      },
      "hinglish": {
        "name": "Generalized Anxiety Disorder (Excessive Chinta aur Ghabrahat)",
        "summary": "Choti-choti baato par be-wajah ghabrahat hona, dil tez dhadakna, haath kampna aur dimaag shant na hona.",
        "advice": "Deep breathing exercise karein, caffeine kam karein aur psychiatrist ya psychologist se CBT therapy lein."
      },
      "ur": {
        "name": "جنرلائزڈ اینزائٹی ڈس آرڈر (شدید بے چینی اور گھبراہٹ)",
        "summary": "مستقل اور بے قابو پریشانی، دل کا تیز دھڑکنا، پٹھوں کا کھچاؤ اور بے خوابی۔",
        "advice": "یہ قابل علاج حالت ہے۔ ماہر نفسیات سے مشورہ کریں اور باقاعدہ علاج حاصل کریں۔"
      }
    },
    "target_3d_nodes": [
      "amygdala",
      "prefrontal-cortex",
      "hippocampus",
      "anterior-cingulate-cortex"
    ],
    "search_keywords": [
      "anxiety",
      "ghabrahat",
      "bechaini",
      "chinta",
      "palpitations and worry",
      "dil tez dhadakna",
      "panic",
      "gad"
    ]
  },
  {
    "disease_id": "panic-disorder",
    "official_name": "Panic disorder",
    "alternative_names": [
      "Episodic paroxysmal anxiety",
      "Panic attack syndrome",
      "Achanak dil ghabrana"
    ],
    "category": "mental-health",
    "subcategory": "Anxiety and fear-related disorders",
    "icd11_code": "6B01",
    "simple_description": "A condition characterized by recurrent, unexpected panic attacks—sudden surges of overwhelming fear and physical distress (racing heart, chest tightness, suffocation) peaking within minutes, often with a fear of dying or having a heart attack.",
    "medical_description": "An anxiety disorder characterized by recurrent unexpected panic attacks that are not restricted to particular stimuli or situations. A panic attack is an abrupt surge of intense fear or intense discomfort that reaches a peak within a few minutes, during which symptoms such as palpitations, chest pain, choking sensations, dizziness, depersonalization/derealization, and fear of impending doom or dying occur. Followed by persistent concern (>= 1 month) about having further attacks or their consequences.",
    "affected_system": "Brainstem autonomic control centers (locus coeruleus noradrenergic hyperactivation, parabrachial nucleus) and limbic fear circuitry (amygdala).",
    "symptoms": [
      "Sudden abrupt surge of intense terror reaching a peak within 10 minutes",
      "Pounding heart, racing pulse (tachycardia), or forceful palpitations",
      "Chest pain, tightness, or pressure (frequently mimicking an acute heart attack / angina)",
      "Shortness of breath, feeling smothered, or hyperventilation sensations",
      "Trembling, shaking, sweating, chills, or sudden hot flushes",
      "Dizziness, lightheadedness, unsteadiness, or feeling faint",
      "Feelings of unreality (derealization) or being detached from oneself (depersonalization)",
      "Overwhelming fear of losing control, 'going crazy', or dying on the spot"
    ],
    "early_warning_signs": [
      "Sudden unprovoked surge of adrenaline and pounding heart in routine situations (driving, shopping, or relaxing at home)"
    ],
    "possible_causes": [
      "Hypersensitivity of the brainstem 'suffocation false alarm' system (Klein's hypothesis) and hypersensitive central chemoreceptors (CO2 sensitivity)",
      "Abrupt paroxysmal discharge of norepinephrine from the locus coeruleus",
      "Catastrophic cognitive misinterpretation of benign bodily sensations (e.g. interpreting a normal skipped heartbeat as an imminent fatal cardiac arrest)"
    ],
    "risk_factors": [
      "Female sex (twice as common in women)",
      "Adverse childhood experiences and history of separation anxiety",
      "Family history of panic disorder",
      "Heavy smoking, caffeine overuse, or illicit stimulants"
    ],
    "disease_types": [
      "Panic disorder without agoraphobia",
      "Panic disorder with agoraphobia (avoidance of places where escape might be difficult, such as crowded markets, buses, or elevators)"
    ],
    "clinical_evaluation": "Structured psychiatric clinical interview. Essential medical evaluation: 12-lead ECG, cardiac enzymes if high risk, TSH, to safely exclude cardiac ischemia, supraventricular tachycardia (SVT), or endocrine causes.",
    "diagnostic_tests": [
      "12-Lead Electrocardiogram (ECG) - Critical to rule out cardiac arrhythmias (e.g. Paroxysmal SVT, Wolff-Parkinson-White, Long QT)",
      "Echocardiogram or 24-hour Holter monitoring if palpitations are recurrent",
      "Serum TSH, Free T4, and capillary blood glucose"
    ],
    "treatment_overview": "Highly treatable condition: First-line psychotherapy is Panic-Focused Cognitive Behavioral Therapy (CBT - interoceptive exposure exercises where patients safely experience dizziness and rapid breathing to break catastrophic fears). First-line pharmacotherapy: SSRIs or SNRIs taken daily to prevent future attacks.",
    "medication_classes": [
      "First-line Maintenance SSRIs: Sertraline (50-150 mg), Escitalopram (10-20 mg), Fluoxetine",
      "First-line SNRIs: Venlafaxine XR (75-225 mg)",
      "Autonomic blunter for acute physical surges: Propranolol (10-20 mg)",
      "Time-limited acute bridging: Clonazepam / Lorazepam (strictly short-term for 2-3 weeks only while SSRI takes effect)"
    ],
    "precautions": [
      "DO NOT breathe into a paper bag during hyperventilation (outdated practice that can cause dangerous hypoxia if patient is having asthma or pulmonary embolism instead)",
      "Avoid running to emergency rooms repeatedly once cardiac evaluation has confirmed a structurally normal heart"
    ],
    "prevention": [
      "Practice slow belly (diaphragmatic) breathing: inhale 4 seconds through nose, hold 4 seconds, exhale 6 seconds through mouth",
      "Cut out energy drinks, strong coffee, and nicotine"
    ],
    "complications": [
      "Development of severe agoraphobia (becoming homebound)",
      "Frequent emergency room visits and unnecessary repeated cardiac catheterizations",
      "Secondary depression and substance misuse"
    ],
    "emergency_signs": [
      "First-time chest pain accompanied by radiation to left jaw/arm, diaphoresis, or in patients > 40 with cardiac risk factors (requires emergency 112 / 911 evaluation to rule out acute myocardial infarction before assuming panic attack)"
    ],
    "doctor_specialty": "Psychiatrist / Clinical Psychologist",
    "faqs": [
      {
        "question": "Can a panic attack kill you or stop your heart?",
        "answer": "No. Although a panic attack feels terrifying and like you are having a fatal heart attack or suffocating, the physical surge of adrenaline cannot stop a healthy heart. Attacks peak within 10 minutes and subside as adrenaline naturally breaks down."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 6B01 Panic disorder",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Panic Disorder: When Fear Overwhelms",
        "source": "NIMH / NIH",
        "url": "https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms"
      }
    ],
    "source_url": "https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms",
    "multilingual": {
      "hi": {
        "name": "पैनिक डिसऑर्डर / पैनिक अटैक (Panic Disorder)",
        "summary": "अचानक दिल की धड़कन बहुत तेज होना, सीने में भारीपन, सांस फूलना, हाथ-पैर कांपना और ऐसा लगना कि जान जा रही है या हार्ट अटैक आ रहा है, जो 10 मिनट में अपने चरम पर पहुंच जाता है।",
        "advice": "गहरी और धीमी सांस लें (पेट से सांस लें)। यह पैनिक अटैक है, हार्ट अटैक नहीं। एक बार ईसीजी कराने के बाद मनोचिकित्सक से सीबीटी और दवा का इलाज करवाएं।"
      },
      "hinglish": {
        "name": "Panic Attack (Achanak dil tez dhadakna aur maut ka darr)",
        "summary": "Bina kisi wajah achanak 10 minute me dil ki dhadkan tez hona, paseena aana, saans ghutna aur lagna ki dil ka daura pad gaya.",
        "advice": "Slow breathing karein, paani piyein aur yaad rakhein panic attack se jaan nahi jaati. Psychiatrist se SSRI medicine lein."
      },
      "ur": {
        "name": "پینک ڈس آرڈر (گھبراہٹ کا شدید دورہ)",
        "summary": "اچانک دل کا تیز دھڑکنا، سینے میں گھٹن، سانس کا رکنا اور موت کا شدید خوف۔",
        "advice": "آہستہ آہستہ گہرے سانس لیں اور ماہر نفسیات سے علاج حاصل کریں۔"
      }
    },
    "target_3d_nodes": [
      "amygdala",
      "locus-coeruleus",
      "hypothalamus",
      "insula"
    ],
    "search_keywords": [
      "panic attack",
      "panic disorder",
      "dil tez dhadakna",
      "saans ghutna",
      "sudden fear of dying",
      "chest tightness panic",
      "ghabrahat ka daura"
    ]
  },
  {
    "disease_id": "major-depressive-disorder",
    "official_name": "Major depressive disorder",
    "alternative_names": [
      "Clinical depression",
      "Unipolar depression",
      "Afsurdagi / Tanav"
    ],
    "category": "mental-health",
    "subcategory": "Depressive disorders",
    "icd11_code": "6A70",
    "simple_description": "A serious medical mood disorder that causes persistent feelings of sadness, emptiness, loss of interest in activities, fatigue, and difficulty carrying on everyday life for weeks or months.",
    "medical_description": "A common and serious mood disorder characterized by a persistent depressed mood or a profound loss of interest or pleasure in nearly all activities (anhedonia) for at least two consecutive weeks. Accompanied by significant cognitive, neurovegetative, and psychomotor symptoms including changes in appetite or weight, insomnia or hypersomnia, psychomotor agitation or retardation, severe fatigue, feelings of worthlessness or excessive guilt, diminished concentration, and recurrent suicidal ideation.",
    "affected_system": "Subgenual anterior cingulate cortex (Brodmann area 25), dorsolateral prefrontal cortex, hippocampus, monoaminergic neurotransmitter networks (serotonin, norepinephrine, dopamine).",
    "symptoms": [
      "Persistent sad, empty, irritable, or hopeless mood lasting most of the day, nearly every day",
      "Marked loss of interest or pleasure in all or almost all activities (anhedonia)",
      "Significant unintended weight loss or gain, or decrease/increase in appetite",
      "Insomnia (especially early morning awakening) or excessive sleeping (hypersomnia)",
      "Profound loss of physical energy and debilitating fatigue doing minor tasks",
      "Feelings of worthlessness, self-reproach, or inappropriate excessive guilt",
      "Difficulty thinking, concentrating, remembering, or making simple decisions",
      "Recurrent thoughts of death, suicidal ideation, or suicide attempts"
    ],
    "early_warning_signs": [
      "Gradual withdrawal from friends, ignoring phone calls, loss of motivation for hobbies, and sleeping poorly for > 10-14 days"
    ],
    "possible_causes": [
      "Monoamine deficiency and neuroplasticity failure: decreased Brain-Derived Neurotrophic Factor (BDNF) causing hippocampal synaptic shrinkage",
      "Dysregulation of the hypothalamic-pituitary-adrenal (HPA) axis with chronic hypercortisolemia and neuroinflammation",
      "Interaction between genetic vulnerability and severe life stress (bereavement, trauma, relationship breakdown)"
    ],
    "risk_factors": [
      "Female sex (1.7 to 2 times higher lifetime prevalence)",
      "Family history of depressive illness or bipolar disorder",
      "Chronic debilitating medical illnesses (stroke, Parkinson's, chronic pain, cancer)",
      "History of childhood physical, emotional, or sexual abuse"
    ],
    "disease_types": [
      "Single episode major depressive disorder",
      "Recurrent major depressive disorder",
      "Depression with psychotic features (delusions of ruin, guilt, or auditory hallucinations)",
      "Peripartum depression (postpartum depression)",
      "Seasonal affective disorder (SAD)"
    ],
    "clinical_evaluation": "Standardized clinical psychiatric assessment (Patient Health Questionnaire-9 - PHQ-9 score >= 10 indicates moderate-to-severe depression; Columbia-Suicide Severity Rating Scale - C-SSRS for suicide risk). Physical examination and lab tests to exclude hypothyroidism, Vitamin B12/D deficiency, and anemia.",
    "diagnostic_tests": [
      "Serum TSH (Thyroid Stimulating Hormone) - Rule out secondary hypothyroidism",
      "Serum Vitamin B12, Vitamin D, and Complete Blood Count (CBC)",
      "Screen for bipolar disorder (MDQ scale) before prescribing antidepressants to avoid triggering mania"
    ],
    "treatment_overview": "Comprehensive evidence-based stepped-care model: Mild to moderate: Cognitive Behavioral Therapy (CBT) or Interpersonal Psychotherapy (IPT). Moderate to severe: Combination of psychotherapy plus antidepressant medication (SSRIs/SNRIs). Treatment-resistant depression: Ketamine/Esketamine nasal spray, Electroconvulsive Therapy (ECT - gold standard for severe life-threatening psychotic depression), or Repetitive Transcranial Magnetic Stimulation (rTMS).",
    "medication_classes": [
      "First-line SSRIs: Escitalopram (10-20 mg), Sertraline (50-200 mg), Fluoxetine (20-60 mg)",
      "First-line SNRIs: Venlafaxine XR (75-225 mg), Duloxetine (30-60 mg - excellent for comorbid neuropathic pain)",
      "Atypical Antidepressants: Bupropion (NDRI - energizing, no sexual side effects or weight gain), Mirtazapine (NaSSA - promotes sleep and appetite)",
      "NMDA Receptor Antagonist: Intranasal Esketamine (Spravato) for treatment-resistant depression"
    ],
    "precautions": [
      "BLACK BOX WARNING: Close monitoring of adolescents and young adults (< 25 years) during the first 2-4 weeks of starting antidepressants for any emergence of suicidal ideation",
      "Antidepressants require 2 to 6 weeks of continuous daily use to demonstrate clinical efficacy; do not stop abruptly"
    ],
    "prevention": [
      "Regular cardiovascular exercise (proven antidepressant effect equivalent to monotherapy in mild depression)",
      "Maintenance psychotherapy to prevent recurrent depressive episodes",
      "Strong social support systems and healthy sleep-wake rhythms"
    ],
    "complications": [
      "Suicide and self-harm (15% lifetime mortality in untreated severe depression)",
      "Complete occupational and social disability",
      "Cardiovascular morbidity and increased risk of dementia"
    ],
    "emergency_signs": [
      "🚨 CRITICAL CRISIS: Active suicidal thoughts, plans, or suicide attempts. Immediately reach out to 24x7 crisis lifelines: Tele-MANAS (14416 / 1800-891-4416 in India), Kiran (1800-599-0019), 988 Suicide & Crisis Lifeline (US/International), or call 112 / 911."
    ],
    "doctor_specialty": "Psychiatrist / Clinical Psychologist",
    "faqs": [
      {
        "question": "Is depression just a personal weakness or bad mood?",
        "answer": "No. Major depression is a genuine, biologically grounded medical illness involving alterations in brain circuitry, neurotransmitters, and neuroplasticity. It cannot be overcome simply by 'trying harder' or 'snapping out of it', but it responds very well to medical treatment."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 6A70 Single episode depressive disorder",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Depression Information",
        "source": "National Institute of Mental Health (NIMH)",
        "url": "https://www.nimh.nih.gov/health/topics/depression"
      }
    ],
    "source_url": "https://www.nimh.nih.gov/health/topics/depression",
    "multilingual": {
      "hi": {
        "name": "मेजर डिप्रेशिव डिसऑर्डर / डिप्रेशन (Major Depression)",
        "summary": "लगातार उदासी, किसी भी काम में मन न लगना (उदासीनता), अत्यधिक थकान, नींद न आना और जीवन के प्रति निराशा महसूस होना जो 2 सप्ताह से अधिक रहे।",
        "advice": "यह कमजोरी नहीं बल्कि एक चिकित्सीय बीमारी है। मनोचिकित्सक से परामर्श लें। यदि मन में खुद को नुकसान पहुंचाने के विचार आएं तो तुरंत टेली-मानस (14416) या 112 पर बात करें।"
      },
      "hinglish": {
        "name": "Major Depression (Depression / Gehra Tanav)",
        "summary": "Lagatar 2 hafte se zyada udasi, kamzori, rona aana, kisi kaam me dil na lagna aur jeene ki umeed khatam lagna.",
        "advice": "Psychiatrist se consult karein. Crisis helpline Tele-MANAS: 14416 par turant 24 ghante free baat kar sakte hain."
      },
      "ur": {
        "name": "شدید ڈپریشن / افسردگی (Depression)",
        "summary": "مسلسل اداسی، مایوسی، کسی کام میں دل نہ لگنا اور زندگی سے بیزاری۔",
        "advice": "یہ قابل علاج بیماری ہے۔ فوراً ماہر نفسیات سے رجوع کریں۔ مدد کے لیے ہیلپ لائن 14416 پر رابطہ کریں۔"
      }
    },
    "target_3d_nodes": [
      "subgenual-cingulate-cortex",
      "hippocampus",
      "dorsolateral-prefrontal-cortex",
      "amygdala"
    ],
    "search_keywords": [
      "depression",
      "udasi",
      "depression symptoms",
      "anhedonia",
      "loss of interest",
      "feeling hopeless",
      "suicidal thoughts",
      "tanav"
    ]
  },
  {
    "disease_id": "transient-ischemic-attack",
    "official_name": "Transient ischemic attack",
    "alternative_names": [
      "TIA",
      "Mini-stroke",
      "Chhota lakwa"
    ],
    "category": "stroke",
    "subcategory": "Cerebrovascular diseases",
    "icd11_code": "8B20",
    "simple_description": "A temporary blockage of blood flow to the brain that causes stroke-like symptoms (weakness, numbness, slurred speech) that resolve completely within minutes to hours, but acts as a major warning sign of an impending full stroke.",
    "medical_description": "A transient episode of neurological dysfunction caused by focal brain, spinal cord, or retinal ischemia, without acute infarction on neuroimaging (tissue-based definition). Typically lasts < 1 hour, with full clinical resolution.",
    "affected_system": "Cerebral and retinal microvasculature, carotids, and vertebrobasilar territory.",
    "symptoms": [
      "Sudden temporary weakness or numbness in face, arm, or leg (typically unilateral)",
      "Temporary difficulty speaking or slurring words (transient dysarthria / dysphasia)",
      "Sudden temporary loss of vision in one eye ('amaurosis fugax' / dark curtain falling over eye)",
      "Temporary loss of balance or coordination"
    ],
    "early_warning_signs": [
      "Brief transient episodes of hand weakness or word slurring lasting 5 to 15 minutes"
    ],
    "possible_causes": [
      "Micro-emboli originating from carotid atheroma or cardiac source",
      "Small vessel lipohyalinosis"
    ],
    "risk_factors": [
      "Hypertension, diabetes, smoking, atrial fibrillation, carotid stenosis"
    ],
    "disease_types": [
      "Carotid territory TIA",
      "Vertebrobasilar territory TIA"
    ],
    "clinical_evaluation": "ABCD2 Score: Age >= 60 (1), BP >= 140/90 (1), Clinical features (unilateral weakness 2, speech only 1), Duration (>= 60 min 2, 10-59 min 1), Diabetes (1). Score >= 4 indicates high short-term stroke risk requiring urgent hospitalization.",
    "diagnostic_tests": [
      "Emergency Brain MRI with DWI - To confirm absence of acute infarction",
      "Carotid Duplex Ultrasound / CTA neck - Evaluate for severe carotid stenosis requiring urgent carotid endarterectomy",
      "Continuous ECG monitoring for atrial fibrillation"
    ],
    "treatment_overview": "URGENT SECONDARY STROKE PREVENTION: Immediate Dual Antiplatelet Therapy (DAPT: Aspirin + Clopidogrel for 21 days for high-risk TIA ABCD2 >= 4), high-intensity statin, blood pressure optimization. Carotid endarterectomy within 7-14 days if symptomatic 70-99% carotid stenosis.",
    "medication_classes": [
      "Dual Antiplatelet: Aspirin (300 mg load, then 75-100 mg) + Clopidogrel (300 mg load, then 75 mg) for 21 days",
      "Statin: Atorvastatin 80 mg daily",
      "Anticoagulation: Apixaban / Dabigatran if atrial fibrillation identified"
    ],
    "precautions": [
      "NEVER ignore symptoms just because they vanished; 1 in 5 patients suffer a massive stroke within 90 days of an untreated TIA"
    ],
    "prevention": [
      "Aggressive blood pressure control (< 130/80 mmHg), smoking cessation, Mediterranean diet"
    ],
    "complications": [
      "Subsequent completed ischemic stroke with permanent disability (highest risk within first 48 hours)"
    ],
    "emergency_signs": [
      "🚨 EMERGENCY: Even if symptoms have already resolved, call 112 / 911 or visit emergency immediately for rapid TIA workup."
    ],
    "doctor_specialty": "Vascular Neurologist / Stroke Specialist",
    "faqs": [
      {
        "question": "If my weakness went away after 10 minutes, do I still need to go to the hospital?",
        "answer": "YES! A TIA is a critical medical emergency. Up to 10% of people have a major, permanent stroke within 48 hours of a TIA. Urgent evaluation can prevent a full stroke."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8B20 Transient ischemic attack",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "TIA (Transient Ischemic Attack)",
        "source": "American Stroke Association",
        "url": "https://www.stroke.org/en/about-stroke/types-of-stroke/tia-transient-ischemic-attack"
      }
    ],
    "source_url": "https://www.stroke.org/en/about-stroke/types-of-stroke/tia-transient-ischemic-attack",
    "multilingual": {
      "hi": {
        "name": "ट्रांजिएंट इस्केमिक अटैक / मिनी स्ट्रोक (TIA)",
        "summary": "मस्तिष्क में कुछ मिनटों के लिए खून की सप्लाई रुकना जिससे चेहरे या हाथ में कमजोरी आती है और फिर खुद ठीक हो जाती है। यह बड़े स्ट्रोक की गंभीर पूर्व-चेतावनी है।",
        "advice": "लक्षण ठीक होने के बाद भी तुरंत 112 बुलाएं या इमरजेंसी जाएं। यह आने वाले बड़े लकवे की चेतावनी है।"
      },
      "hinglish": {
        "name": "Transient Ischemic Attack (Mini Stroke)",
        "summary": "Kuch minutes ke liye haath sunn hona ya bolne me dikkat aana fir khud theek ho jana. Yeh massive stroke ka warning sign hai.",
        "advice": "Theek hone ke baad bhi turant hospital jakar Carotid scan aur MRI karwayein."
      },
      "ur": {
        "name": "عارضی فالج (منی سٹروک / TIA)",
        "summary": "چند منٹوں کے لیے خون کی سپلائی کا رکنا اور علامات کا خود بخود غائب ہو جانا، جو بڑے فالج کا پیش خیمہ ہو سکتا ہے۔",
        "advice": "علامات ٹھیک ہونے کے باوجود فوری ہسپتال رجوع کریں۔"
      }
    },
    "target_3d_nodes": [
      "internal-carotid-artery",
      "middle-cerebral-artery",
      "motor-cortex"
    ],
    "search_keywords": [
      "tia",
      "mini stroke",
      "chhota lakwa",
      "temporary weakness",
      "transient ischemic attack",
      "brief speech slurring"
    ]
  },
  {
    "disease_id": "focal-seizure",
    "official_name": "Focal seizure",
    "alternative_names": [
      "Partial seizure",
      "Focal onset aware / impaired awareness seizure",
      "Aadhe shareer ka jhatka"
    ],
    "category": "epilepsy",
    "subcategory": "Epileptic disorders",
    "icd11_code": "8A62",
    "simple_description": "A seizure that starts in one specific area or network of one side of the brain, causing localized muscle jerking, unusual sensory feelings, or altered awareness.",
    "medical_description": "A seizure whose onset is conceptualized as being originating within networks limited to one cerebral hemisphere. Classified by the ILAE into Focal Aware Seizures (awareness intact) and Focal Impaired Awareness Seizures (consciousness blunted or lost during the event), with motor or non-motor onset, and potential progression to bilateral tonic-clonic.",
    "affected_system": "Focal cortical networks (temporal lobe 60%, frontal lobe 20%, parietal, or occipital).",
    "symptoms": [
      "Focal motor twitching or jerking of one hand, arm, or corner of mouth (Jacksonian march)",
      "Sensory sensations: sudden burning, tingling, flashing lights, or buzzing sounds",
      "Autonomic / Psychic sensations: sudden rising epigastric sensation ('rollercoaster feeling in stomach'), intense déjà vu, or unexplained fear",
      "Automatisms: repetitive involuntary smacking of lips, chewing, swallowing, or fumbling with clothes",
      "Blunted responsiveness or staring blankly for 30-120 seconds"
    ],
    "early_warning_signs": [
      "Focal aura (rising stomach sensation, sudden metallic taste, or strong déjà vu)"
    ],
    "possible_causes": [
      "Mesial temporal sclerosis, focal cortical dysplasia, cavernous hemangioma, post-stroke glial scar"
    ],
    "risk_factors": [
      "History of complicated febrile seizures in infancy, head trauma, stroke, CNS infection"
    ],
    "disease_types": [
      "Focal aware seizure (simple partial)",
      "Focal impaired awareness seizure (complex partial)",
      "Focal to bilateral tonic-clonic"
    ],
    "clinical_evaluation": "Detailed description of initial semiology, routine and prolonged video-EEG monitoring.",
    "diagnostic_tests": [
      "High-resolution 3T Epilepsy Protocol Brain MRI (thin 1 mm coronal T2 and FLAIR through the hippocampi) - Detects hippocampal sclerosis and subtle cortical dysplasias",
      "Prolonged Video-EEG Monitoring - Localizes focal interictal epileptiform discharges (spikes and sharp waves)"
    ],
    "treatment_overview": "Pharmacological monotherapy with sodium channel blocking antiepileptics. For drug-resistant focal epilepsy (failure of 2 appropriate AED trials), evaluate for curative epilepsy surgery (anterior temporal lobectomy, laser interstitial thermal therapy, or responsive neurostimulation).",
    "medication_classes": [
      "First-line Focal AEDs: Carbamazepine, Oxcarbazepine, Lamotrigine, Levetiracetam, Lacosamide",
      "Second-line / Add-on: Brivaracetam, Topiramate, Zonisamide"
    ],
    "precautions": [
      "Avoid abrupt cessation of antiepileptic therapy; adhere strictly to driving laws"
    ],
    "prevention": [
      "Consistent sleep schedules and avoidance of excessive alcohol"
    ],
    "complications": [
      "Secondary generalization into bilateral convulsive seizures, SUDEP"
    ],
    "emergency_signs": [
      "Seizure activity persisting > 5 minutes or progressing to bilateral convulsive status epilepticus"
    ],
    "doctor_specialty": "Epileptologist / Comprehensive Epilepsy Center",
    "faqs": [
      {
        "question": "Can a person stay awake during a seizure?",
        "answer": "Yes. In a 'Focal Aware Seizure', the person remains completely conscious, experiencing twitching in one hand, strange smells, or intense déjà vu without passing out."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8A62 Focal onset seizures",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Focal Seizures Overview",
        "source": "Epilepsy Foundation / ILAE",
        "url": "https://www.epilepsy.com/what-is-epilepsy/seizure-types/focal-onset-seizures"
      }
    ],
    "source_url": "https://www.epilepsy.com/what-is-epilepsy/seizure-types/focal-onset-seizures",
    "multilingual": {
      "hi": {
        "name": "फोकल सीज़र / आंशिक दौरा (Focal Seizure)",
        "summary": "मस्तिष्क के एक हिस्से से शुरू होने वाला दौरा जिसमें एक हाथ का फड़कना, मुंह चलाना (लिप स्मैकिंग), अजीब गंध या पेट में अजीब सनसनी महसूस होती है।",
        "advice": "दौरे का समय नोट करें। न्यूरोलॉजिस्ट से एमआरआई एपिलेप्सी प्रोटोकॉल और ईईजी करवाएं।"
      },
      "hinglish": {
        "name": "Focal Seizure (Dimaag ke ek hisse ka daura)",
        "summary": "Ek haath me jhatke aana, achanak déjà vu ya pet me ajeeb sensation aana. Hosh pura ya aadha reh sakta hai.",
        "advice": "Oxcarbazepine ya Levetiracetam dawai regular lein aur 3T MRI karwayein."
      },
      "ur": {
        "name": "فوکل سیزر (محدود دورہ)",
        "summary": "دماغ کے کسی ایک حصے سے شروع ہونے والا دورہ جس میں ہاتھ کی کپکپاہٹ یا عجیب احساسات شامل ہیں۔",
        "advice": "نیورولوجسٹ سے باقاعدہ ای ای جی اور ایم آر آئی کروائیں۔"
      }
    },
    "target_3d_nodes": [
      "temporal-lobe",
      "hippocampus",
      "frontal-lobe",
      "motor-cortex"
    ],
    "search_keywords": [
      "focal seizure",
      "partial seizure",
      "deja vu seizure",
      "lip smacking",
      "hand twitching fit",
      "epilepsy protocol mri"
    ]
  },
  {
    "disease_id": "peripheral-neuropathy",
    "official_name": "Peripheral neuropathy",
    "alternative_names": [
      "Polyneuropathy",
      "Peripheral nerve damage",
      "Haath-pair me sunn-pan aur jalan"
    ],
    "category": "nerve-disorders",
    "subcategory": "Peripheral nerve disorders",
    "icd11_code": "8C00",
    "simple_description": "Damage to the peripheral nerves outside the brain and spinal cord, causing chronic burning pain, numbness, tingling, and muscle weakness, typically starting in the feet and hands.",
    "medical_description": "A diffuse symmetrical or multifocal disorder of the peripheral nervous system affecting sensory, motor, or autonomic fibers. Characteristically presents in a length-dependent 'glove-and-stocking' distribution affecting the longest distal axons first.",
    "affected_system": "Peripheral somatic sensory, motor, and autonomic nerve fibers and Schwann cell myelin sheaths.",
    "symptoms": [
      "Gradual onset of numbness, prickling, or tingling (paresthesia) starting in feet or toes and spreading upward",
      "Burning, freezing, electric, or throbbing pain, often worsening at night",
      "Extreme sensitivity to light touch (allodynia: even bedsheets cause pain)",
      "Sensory ataxia: lack of coordination and falling in the dark due to loss of position sense (proprioception)",
      "Muscle weakness, foot drop, or muscle cramping in advanced stages",
      "Autonomic signs: dry feet, orthostatic dizziness, gastrointestinal dysmotility"
    ],
    "early_warning_signs": [
      "Tingling or burning sensations on the soles of the feet after walking or at bedtime"
    ],
    "possible_causes": [
      "Diabetes mellitus (diabetic polyneuropathy - #1 worldwide cause)",
      "Vitamin B12 deficiency and chronic alcohol toxicity",
      "Chemotherapy-induced peripheral neuropathy (CIPN: taxanes, platinums, vincristine)",
      "Autoimmune (CIDP, Sjögren's, vasculitis), hypothyroidism, renal failure"
    ],
    "risk_factors": [
      "Poorly controlled diabetes, chronic alcoholism, nutritional deficiencies, older age"
    ],
    "disease_types": [
      "Distal symmetric sensorimotor polyneuropathy",
      "Small-fiber neuropathy",
      "Mononeuropathy multiplex"
    ],
    "clinical_evaluation": "10-gram Semmes-Weinstein monofilament testing, 128-Hz tuning fork vibration testing, pinprick and temperature testing, Romberg sign.",
    "diagnostic_tests": [
      "Nerve Conduction Studies (NCS) and Electromyography (EMG) - Distinguishes axonal from demyelinating neuropathy",
      "Screening blood panel: HbA1c, Fasting glucose, Serum Vitamin B12, Methylmalonic acid, TSH, Serum protein electrophoresis with immunofixation (SPEP/IFE to rule out paraproteinemic neuropathy)",
      "Skin punch biopsy with Intraepidermal Nerve Fiber Density (IENFD) - Diagnostic for small-fiber neuropathy"
    ],
    "treatment_overview": "Treat the underlying etiology (strict glycemic control in diabetes, Vitamin B12 replenishment, cessation of alcohol). Pharmacological management of neuropathic pain with gabapentinoids, SNRIs, or tricyclic antidepressants. Meticulous daily foot care to prevent undetected diabetic ulcers.",
    "medication_classes": [
      "First-line Gabapentinoids: Pregabalin (75-300 mg daily), Gabapentin (300-1800 mg daily)",
      "First-line SNRIs: Duloxetine (60-120 mg daily - FDA approved for diabetic neuropathy)",
      "Tricyclic Antidepressants: Amitriptyline, Nortriptyline (10-50 mg nocte)",
      "Topical therapies: Capsaicin 8% dermal patch, Lidocaine 5% patch"
    ],
    "precautions": [
      "Inspect feet daily with a mirror for cuts, blisters, or calluses; wear wide protective footwear"
    ],
    "prevention": [
      "Tight blood sugar management (HbA1c < 7.0%), avoidance of heavy alcohol, B-vitamin supplementation"
    ],
    "complications": [
      "Unnoticed foot ulceration leading to osteomyelitis and lower extremity amputation",
      "Charcot neuroarthropathy"
    ],
    "emergency_signs": [
      "Rapidly progressive ascending weakness spreading over days (indicative of Guillain-Barré Syndrome)"
    ],
    "doctor_specialty": "Neuromuscular Neurologist / Endocrinologist",
    "faqs": [
      {
        "question": "Can damaged peripheral nerves heal?",
        "answer": "Yes, peripheral nerves can regenerate slowly (about 1 mm per day) if the underlying cause (such as high blood sugar or vitamin deficiency) is corrected early before the nerve cells die completely."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 8C00 Polyneuropathy",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Peripheral Neuropathy Fact Sheet",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy",
    "multilingual": {
      "hi": {
        "name": "पेरिफेरल न्यूरोपैथी / नसों की कमजोरी (Peripheral Neuropathy)",
        "summary": "हाथों और पैरों की नसों में खराबी जिससे तलवों में जलन, सुई चुभने जैसी झनझनाहट, सुन्नपन और कमजोरी होती है (डायबिटीज इसका मुख्य कारण है)।",
        "advice": "डायबिटीज को नियंत्रित रखें, विटामिन B12 चेक करवाएं और रोजाना पैरों की जांच करें। न्यूरोलॉजिस्ट से प्रीगाबेलिन या डुलॉक्सेटीन दवा लें।"
      },
      "hinglish": {
        "name": "Peripheral Neuropathy (Pair ke talvo me jalan aur sunn-pan)",
        "summary": "Sugar ya B12 ki kami se pair me aag jaisi jalan, jhanjhanahat aur chappal nikalne ka pata na chalna.",
        "advice": "Sugar control karein, nange pair na chalein aur Pregabalin dawai lein."
      },
      "ur": {
        "name": "پیریفیرل نیوروپیتھی (اعصابی کمزوری اور جلن)",
        "summary": "ہاتھوں اور پیروں کے اعصاب کی کمزوری، جلن، سن پن اور سوئیاں چبھنے کا احساس۔",
        "advice": "شوگر کا سخت کنٹرول رکھیں اور پاؤں کی روزانہ دیکھ بھال کریں۔"
      }
    },
    "target_3d_nodes": [
      "peripheral-nerves",
      "somatosensory-cortex",
      "spinal-cord"
    ],
    "search_keywords": [
      "neuropathy",
      "talvo me jalan",
      "pair sunn hona",
      "peripheral neuropathy",
      "diabetic nerve pain",
      "pins and needles feet",
      "burning feet"
    ]
  },
  {
    "disease_id": "bipolar-type-1-disorder",
    "official_name": "Bipolar type I disorder",
    "alternative_names": [
      "Manic-depressive illness",
      "Bipolar affective disorder",
      "Mood swings disorder"
    ],
    "category": "mental-health",
    "subcategory": "Bipolar and related disorders",
    "icd11_code": "6A60",
    "simple_description": "A serious mental health condition characterized by extreme mood swings, oscillating between periods of intense high energy, euphoria, and impulsivity (mania) and deep sadness and hopelessness (depression).",
    "medical_description": "A severe episodic mood disorder defined by the occurrence of at least one manic episode (an abnormally and persistently elevated, expansive, or irritable mood, and abnormally and persistently increased activity or energy, lasting at least 1 week or requiring immediate hospitalization). Typically alternates with major depressive episodes.",
    "affected_system": "Fronto-limbic emotional regulation network, amygdala, ventral striatum reward pathways, circadian rhythm pacemakers.",
    "symptoms": [
      "Manic episode: decreased need for sleep (feeling fully rested after 2-3 hours), grandiosity or inflated self-esteem",
      "Pressured, rapid, unstoppable speech and flight of ideas (racing thoughts)",
      "High distractibility, hyper-sexuality, reckless excessive spending or risky financial ventures",
      "Depressive episode: profound sadness, anhedonia, severe fatigue, feelings of worthlessness, and suicidal thoughts",
      "Psychotic features during severe mania: grandiose delusions (believing one has divine powers or extreme wealth)"
    ],
    "early_warning_signs": [
      "Sudden drop in sleep to 2-3 hours while feeling energized, accompanied by ambitious grand plans and rapid speech"
    ],
    "possible_causes": [
      "High genetic heritability (60-80% heritability index; CACNA1C, ANK3 genes)",
      "Neurotransmitter receptor dysregulation (dopamine, glutamate, intracellular signaling cascades)",
      "Circadian rhythm disruption"
    ],
    "risk_factors": [
      "Family history of bipolar disorder or schizophrenia",
      "Severe emotional trauma or disruption of sleep-wake schedules"
    ],
    "disease_types": [
      "Bipolar I disorder (requires >= 1 full manic episode)",
      "Bipolar II disorder (hypomania + major depression; never full mania)",
      "Cyclothymic disorder"
    ],
    "clinical_evaluation": "Careful psychiatric clinical interview, Mood Disorder Questionnaire (MDQ), screening for secondary mania (substance use, steroids, Wilson's disease).",
    "diagnostic_tests": [
      "Clinical psychiatric diagnosis; blood panel (TSH, electrolytes, toxicology screen, copper/ceruloplasmin if young to exclude Wilson's disease)",
      "Baseline renal and thyroid function tests prior to initiating Lithium"
    ],
    "treatment_overview": "Long-term maintenance mood-stabilizing pharmacotherapy is essential to prevent recurrent episodes. Lithium is the gold-standard mood stabilizer with proven anti-suicide efficacy. Atypical antipsychotics for acute mania. Antidepressant monotherapy is STRICTLY CONTRAINDICATED because it can precipitate a manic switch or rapid cycling.",
    "medication_classes": [
      "Gold-standard Mood Stabilizer: Lithium Carbonate (requires therapeutic serum level monitoring: 0.6-1.0 mEq/L)",
      "Anticonvulsant Mood Stabilizers: Sodium Valproate / Divalproex, Lamotrigine (specifically for bipolar depression), Carbamazepine",
      "Second-Generation Atypical Antipsychotics: Quetiapine, Olanzapine, Aripiprazole, Lurasidone, Cariprazine"
    ],
    "precautions": [
      "NEVER take standard antidepressants alone without a mood stabilizer; it can trigger severe manic psychosis",
      "Maintain consistent hydration and salt intake when on Lithium to avoid toxic lithium accumulation"
    ],
    "prevention": [
      "Consistent sleep-wake schedule (sleep loss is the primary trigger for manic relapse)",
      "Lifelong adherence to mood stabilizers"
    ],
    "complications": [
      "Severe financial bankruptcy, legal problems, high lifetime suicide rate (15-20 times general population)"
    ],
    "emergency_signs": [
      "🚨 CRISIS: Acute manic psychosis, extreme exhaustion from days without sleep, or active suicidal plans. Call Tele-MANAS (14416 / 1800-891-4416) or 112 / 911."
    ],
    "doctor_specialty": "Psychiatrist",
    "faqs": [
      {
        "question": "Can bipolar disorder be treated without medication?",
        "answer": "No. Bipolar I disorder is a biological brain condition requiring medical mood stabilizers (like Lithium or Valproate) to protect the brain from manic and depressive episodes. Psychotherapy is an essential partner to medication, not a replacement."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 6A60 Bipolar type I disorder",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Bipolar Disorder Information",
        "source": "NIMH / NIH",
        "url": "https://www.nimh.nih.gov/health/topics/bipolar-disorder"
      }
    ],
    "source_url": "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
    "multilingual": {
      "hi": {
        "name": "बाइपोलर टाइप-1 विकार (Bipolar I Disorder)",
        "summary": "मूड में भारी उतार-चढ़ाव: कभी अत्यधिक ऊर्जा, बिना नींद के काम करना और बड़बोलापन (मेनिया), तो कभी गहरी उदासी और निराशा (डिप्रेशन)।",
        "advice": "बिना मूड-स्टेबलाइजर दवा के अकेले एंटीडिप्रेसेंट न लें। मनोचिकित्सक से लिथियम या अन्य दवाओं से नियमित उपचार कराएं।"
      },
      "hinglish": {
        "name": "Bipolar Disorder (Extreme Mood Swings / Mania aur Depression)",
        "summary": "Kabhi bina soye din-raat excited rehna aur paise udana (Mania), fir achanak gehre depression me chale jana.",
        "advice": "Psychiatrist se regular Lithium/Mood stabilizer lein aur sleep routine fix rakhein."
      },
      "ur": {
        "name": "بائی پولر ڈس آرڈر (موڈ کا شدید اتار چڑھاؤ)",
        "summary": "کبھی ضرورت سے زیادہ خوشی اور توانائی (مینیا) اور کبھی شدید مایوسی اور اداسی (ڈپریشن) کے دورے۔",
        "advice": "ماہر نفسیات سے باقاعدہ موڈ سٹیبلائزرز کا علاج جاری رکھیں۔"
      }
    },
    "target_3d_nodes": [
      "ventral-striatum",
      "amygdala",
      "prefrontal-cortex",
      "anterior-cingulate-cortex"
    ],
    "search_keywords": [
      "bipolar",
      "bipolar disorder",
      "mania",
      "mood swings",
      "manic depression",
      "neend na aana aur energy",
      "bipolar 1"
    ]
  },
  {
    "disease_id": "obsessive-compulsive-disorder",
    "official_name": "Obsessive-compulsive disorder",
    "alternative_names": [
      "OCD",
      "Obsessive neurosis",
      "Baar-baar hath dhone ki bimari"
    ],
    "category": "mental-health",
    "subcategory": "Obsessive-compulsive and related disorders",
    "icd11_code": "6B20",
    "simple_description": "A chronic mental health condition where a person experiences uncontrollable, recurring thoughts (obsessions) and feels compelled to repeat specific behaviors or routines (compulsions) over and over to relieve anxiety.",
    "medical_description": "A condition characterized by the persistent presence of obsessions, compulsions, or commonly both. Obsessions are repetitive, unwanted, intrusive thoughts, urges, or images that cause marked distress. Compulsions are repetitive behaviors or mental acts that the person feels driven to perform according to rigid rules to prevent anxiety or a dreaded event, consuming > 1 hour per day and impairing functioning.",
    "affected_system": "Cortico-striato-thalamo-cortical (CSTC) neurocircuitry, orbitofrontal cortex, caudate nucleus, and serotonergic pathways.",
    "symptoms": [
      "Contamination obsessions: intense fear of germs, dirt, or toxins leading to excessive hand washing (until raw) or hours of cleaning",
      "Doubt obsessions: intrusive doubts leading to compulsive checking (door locks, gas stove, electrical appliances checked dozens of times)",
      "Symmetry and ordering compulsions: needing items arranged in exact alignment or symmetry",
      "Unwanted taboo intrusive thoughts (aggressive, sexual, or religious blasphemy) causing immense personal distress",
      "Mental compulsions: silently repeating words, counting in patterns, or praying repetitively to neutralize distress"
    ],
    "early_warning_signs": [
      "Gradually escalating rituals that start taking more than 30 minutes a day, causing lateness and anxiety"
    ],
    "possible_causes": [
      "Hyperactivity of the orbitofrontal-striatal circuit (brain's error-detection system gets stuck 'on')",
      "Serotonin and glutamate dysregulation",
      "Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal Infections (PANDAS)"
    ],
    "risk_factors": [
      "Family history of OCD or tic disorders",
      "Childhood trauma or perfectionistic rigid upbringing"
    ],
    "disease_types": [
      "Contamination/Cleaning",
      "Doubt/Checking",
      "Symmetry/Ordering",
      "Intrusive Taboo Thoughts (Pure-O)"
    ],
    "clinical_evaluation": "Yale-Brown Obsessive Compulsive Scale (Y-BOCS: score 16-23 moderate, 24-31 severe, 32-40 extreme). Medical history to rule out Tourette syndrome or neurological basal ganglia lesions.",
    "diagnostic_tests": [
      "Clinical psychiatric diagnostic evaluation"
    ],
    "treatment_overview": "Gold-standard dual therapy: 1. Specialized Psychotherapy: Exposure and Response Prevention (ERP - a specific CBT modality where patient faces the fear without doing the ritual). 2. High-dose Pharmacotherapy: SSRIs (often required at higher doses than used for depression, e.g. Fluoxetine 60-80 mg, Sertraline 200 mg). Clomipramine (tricyclic with strong serotonergic action) for refractory cases.",
    "medication_classes": [
      "First-line High-Dose SSRIs: Fluoxetine (40-80 mg), Sertraline (150-200 mg), Fluvoxamine (150-300 mg), Paroxetine",
      "Potent Serotonergic Tricyclic: Clomipramine (100-250 mg)",
      "Augmentation Atypical Antipsychotics: Low-dose Aripiprazole or Risperidone for refractory cases"
    ],
    "precautions": [
      "Family members must avoid participating in reassurance rituals (reassurance temporarily relieves anxiety but reinforces the OCD cycle long-term)"
    ],
    "prevention": [
      "Early CBT and ERP intervention in children with emerging rituals prevents chronic CSTC circuit reinforcement"
    ],
    "complications": [
      "Severe skin breakdown from chemical cleaning agents",
      "Complete social isolation and inability to leave home"
    ],
    "emergency_signs": [
      "Severe demoralization and active suicidal ideation from exhausting intrusive thoughts"
    ],
    "doctor_specialty": "Psychiatrist / Specialized CBT Psychologist",
    "faqs": [
      {
        "question": "Is OCD just about being neat and organized?",
        "answer": "No. Liking neatness is personality. Real OCD is an agonizing, exhausting condition where terrifying intrusive thoughts cause severe panic that can only be temporarily silenced by performing repetitive rituals."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 6B20 Obsessive-compulsive disorder",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Obsessive-Compulsive Disorder",
        "source": "NIMH / NIH",
        "url": "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd"
      }
    ],
    "source_url": "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd",
    "multilingual": {
      "hi": {
        "name": "ऑब्सेसिव-कंपल्सिव डिसऑर्डर (OCD / बार-बार हाथ धोने या ताला चेक करने की बीमारी)",
        "summary": "दिमाग में बार-बार अवांछित विचार (वहम) आना और घबराहट शांत करने के लिए बार-बार हाथ धोना, ताले चेक करना या चीजों को गिनना।",
        "advice": "यह वहम नहीं बल्कि न्यूरोलॉजिकल बीमारी है। सीबीटी की ईआरपी (Exposure and Response Prevention) थेरेपी और दवाओं से यह ठीक होती है।"
      },
      "hinglish": {
        "name": "OCD (Obsessive Compulsive Disorder / Baar-baar check karna)",
        "summary": "Dimaag me gande vichar ya darr aana aur baar-baar hath dhona, lock check karna ya safai karna.",
        "advice": "ERP therapy aur SSRI dawai bohot effective hoti hain. Specialist psychiatrist se consult karein."
      },
      "ur": {
        "name": "او سی ڈی (وسوسے اور بار بار دہرانے کی بیماری)",
        "summary": "بار بار ناپسندیدہ خیالات کا آنا اور تسلی کے لیے بار بار ہاتھ دھونا یا تالے چیک کرنا۔",
        "advice": "یہ ایک قابل علاج بیماری ہے۔ ماہر نفسیات سے تھراپی اور ادویات حاصل کریں۔"
      }
    },
    "target_3d_nodes": [
      "orbitofrontal-cortex",
      "caudate-nucleus",
      "anterior-cingulate-cortex",
      "thalamus"
    ],
    "search_keywords": [
      "ocd",
      "baar baar hath dhona",
      "obsessive compulsive disorder",
      "checking lock repeatedly",
      "contamination fear",
      "intrusive thoughts"
    ]
  },
  {
    "disease_id": "post-traumatic-stress-disorder",
    "official_name": "Post-traumatic stress disorder",
    "alternative_names": [
      "PTSD",
      "Trauma stress syndrome",
      "Sadme ka asar"
    ],
    "category": "mental-health",
    "subcategory": "Disorders specifically associated with stress",
    "icd11_code": "6B40",
    "simple_description": "A mental health condition triggered by experiencing or witnessing a terrifying or traumatic event, causing recurrent flashbacks, severe nightmares, emotional numbness, and hypervigilance.",
    "medical_description": "A disorder that may develop following exposure to an extremely threatening or horrific event or series of events. Characterized by three core element clusters: 1. Re-experiencing the traumatic event in the present (intrusive memories, flashbacks, or nightmares), 2. Deliberate avoidance of thoughts, memories, people, or situations reminiscent of the event, and 3. Persistent perceptions of heightened current threat (hypervigilance, exaggerated startle response). Symptoms must persist for at least several weeks and cause significant functional impairment.",
    "affected_system": "Amygdala hyper-responsiveness, ventromedial prefrontal cortex hypoactivity, reduced hippocampal volume, and dysregulated locus coeruleus noradrenergic signaling.",
    "symptoms": [
      "Vivid intrusive flashbacks where the patient feels or acts as if the traumatic event is recurring right now",
      "Recurrent distressing dreams and nightmares directly related to the trauma",
      "Marked avoidance of external reminders (conversations, locations, sights, smells) associated with the event",
      "Hypervigilance: constantly scanning the environment for danger, easily startled by sudden sounds",
      "Irritability, anger outbursts, sleep disturbance, and emotional detachment from loved ones"
    ],
    "early_warning_signs": [
      "Persistent intense horror, sleep terrors, and avoidance lasting > 1 month after a traumatic incident"
    ],
    "possible_causes": [
      "Failure of fear extinction learning and memory reconsolidation following extreme neurotrauma",
      "Genetic susceptibility to stress sensitization"
    ],
    "risk_factors": [
      "Severity and interpersonal nature of trauma (e.g. violent assault, war combat, severe accidents)",
      "Pre-existing mental health vulnerabilities",
      "Lack of post-trauma social support"
    ],
    "disease_types": [
      "Standard PTSD",
      "Complex PTSD (CPTSD - severe prolonged repeated trauma with disturbances in self-organization)",
      "PTSD with dissociative symptoms"
    ],
    "clinical_evaluation": "Clinician-Administered PTSD Scale for DSM-5 / ICD-11 (CAPS-5), PCL-5 self-report questionnaire, thorough suicide risk assessment.",
    "diagnostic_tests": [
      "Clinical diagnostic psychiatric interview"
    ],
    "treatment_overview": "First-line treatments are trauma-focused psychotherapies: Trauma-Focused Cognitive Behavioral Therapy (TF-CBT) and Eye Movement Desensitization and Reprocessing (EMDR). First-line pharmacotherapy: SSRIs (Sertraline, Paroxetine). Prazosin (alpha-1 adrenergic antagonist) is uniquely effective for trauma-related nightmares.",
    "medication_classes": [
      "First-line SSRIs: Sertraline (50-200 mg daily), Paroxetine (20-50 mg daily), Venlafaxine",
      "Nightmare / Autonomic Blocker: Prazosin (1-10 mg nocte - blocks central alpha-1 receptors)",
      "AVOID Benzodiazepines (contraindicated in PTSD as they hinder fear extinction and worsen recovery)"
    ],
    "precautions": [
      "Benzodiazepines are CONTRAINDICATED in PTSD; they prevent psychological processing and increase dependence risk",
      "Screen for self-harm"
    ],
    "prevention": [
      "Early psychological first aid following acute disaster or trauma (debriefing is not recommended, supportive containment is)"
    ],
    "complications": [
      "Substance use disorders (self-medicating with alcohol), severe major depression, high suicide risk"
    ],
    "emergency_signs": [
      "Active suicidal ideation or severe dissociative state. Call Tele-MANAS (14416 / 1800-891-4416) or 112 / 911."
    ],
    "doctor_specialty": "Psychiatrist / Trauma-Informed Clinical Psychologist",
    "faqs": [
      {
        "question": "Can therapy help PTSD years after the event?",
        "answer": "Yes. Evidence-based therapies like EMDR and Trauma-Focused CBT are proven to significantly reduce symptoms even decades after the original trauma occurred."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 6B40 Post traumatic stress disorder",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Post-Traumatic Stress Disorder",
        "source": "NIMH / NIH",
        "url": "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd"
      }
    ],
    "source_url": "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
    "multilingual": {
      "hi": {
        "name": "पोस्ट-ट्रॉमेटिक स्ट्रेस डिसऑर्डर (PTSD / सदमे का तनाव)",
        "summary": "किसी भयानक हादसे या सदमे के बाद बार-बार डरावनी यादें आना (फ़्लैशबैक), बुरे सपने, अत्यधिक घबराहट और हादसे से जुड़ी जगहों से बचना।",
        "advice": "यह कमजोरी नहीं बल्कि सदमे का जैविक असर है। ट्रॉमा थेरेपी (EMDR / CBT) और मनोचिकित्सक से परामर्श लें।"
      },
      "hinglish": {
        "name": "PTSD (Post-Traumatic Stress Disorder / Trauma ka asar)",
        "summary": "Kisi purane hadse ya trauma ke baad baar-baar flashbacks aana, darr lagna aur achanak aawaz par chownk jana.",
        "advice": "Trauma specialist se EMDR therapy aur SSRI dawai lein. Helpline Tele-MANAS (14416) par 24x7 help le sakte hain."
      },
      "ur": {
        "name": "پی ٹی ایس ڈی (صدمے کے بعد کا ذہنی دباؤ)",
        "summary": "کسی خوفناک واقعے کے بعد بار بار اسی واقعے کے مناظر کا ذہن میں آنا اور مستقل خوف و بے چینی۔",
        "advice": "ماہر نفسیات سے باقاعدہ تھراپی (EMDR) اور ادویات حاصل کریں۔"
      }
    },
    "target_3d_nodes": [
      "amygdala",
      "hippocampus",
      "medial-prefrontal-cortex"
    ],
    "search_keywords": [
      "ptsd",
      "trauma",
      "sadma",
      "flashbacks",
      "post traumatic stress",
      "nightmares trauma",
      "hypervigilance"
    ]
  },
  {
    "disease_id": "schizophrenia",
    "official_name": "Schizophrenia",
    "alternative_names": [
      "Psychotic disorder",
      "Dementia praecox",
      "Zeheni bemari"
    ],
    "category": "mental-health",
    "subcategory": "Schizophrenia or other primary psychotic disorders",
    "icd11_code": "6A20",
    "simple_description": "A severe chronic brain disorder characterized by disruptions in thinking, perception, and emotional responsiveness, causing people to hear voices or believe things that are not real (hallucinations and delusions).",
    "medical_description": "A severe neurodevelopmental psychiatric disorder characterized by significant impairments in reality testing and alterations in behavior. Defined by positive symptoms (persistent delusions, hallucinations, disorganized thinking/speech, grossly disorganized behavior) and negative symptoms (blunted affect, avolition, alogia, asociality) persisting for at least 1 month, leading to social/occupational decline.",
    "affected_system": "Mesolimbic dopamine pathway (hyperactivity causing positive symptoms) and mesocortical dopamine pathway (hypofunction causing negative/cognitive symptoms), prefrontal cortex, temporal lobes.",
    "symptoms": [
      "Auditory hallucinations: hearing voices running a commentary or conversing with each other when nobody is there",
      "Delusions: firmly held false beliefs resistant to counter-argument (e.g. persecutory delusions: believing one is spied upon or poisoned)",
      "Disorganized thinking and speech (derailment, loose associations, neologisms)",
      "Negative symptoms: emotional flatness (blunted affect), lack of motivation (avolition), severe social withdrawal",
      "Cognitive deficits: impaired working memory and executive attention"
    ],
    "early_warning_signs": [
      "Prodromal phase: gradual drop in academic/work performance, social withdrawal, suspiciousness, and odd perceptual experiences in late adolescence"
    ],
    "possible_causes": [
      "Complex polygenic architecture (heritability ~80%, involving dopamine D2 receptors, C4 complement gene, NMDA receptor hypofunction)",
      "Obstetric complications, maternal immune activation, cannabis use in adolescence"
    ],
    "risk_factors": [
      "First-degree relative with schizophrenia (10-fold increased risk)",
      "Heavy adolescent cannabis abuse",
      "Urban upbringing, advanced paternal age"
    ],
    "disease_types": [
      "First-episode schizophrenia",
      "Multiple-episode schizophrenia",
      "Schizophrenia with persistent psychotic symptoms"
    ],
    "clinical_evaluation": "Positive and Negative Syndrome Scale (PANSS), thorough medical workup to exclude secondary psychosis (autoimmune anti-NMDA receptor encephalitis, Wilson's disease, temporal lobe epilepsy, substance-induced psychosis).",
    "diagnostic_tests": [
      "Clinical psychiatric diagnostic interview",
      "Brain MRI - Demonstrates cortical thinning, lateral ventricular enlargement (ventriculomegaly), and reduced grey matter volume",
      "Screening blood panel: toxicology screen, TSH, autoimmune encephalitis panel (anti-NMDA antibodies if acute bizarre onset in young female)"
    ],
    "treatment_overview": "Comprehensive lifelong bio-psycho-social management. Antipsychotic medications are the foundational biological therapy (D2 dopamine receptor antagonism). Second-generation atypical antipsychotics are preferred due to lower extrapyramidal side effects. Clozapine is the gold-standard therapy for treatment-resistant schizophrenia (requires strict CBC monitoring for agranulocytosis). Cognitive Remediation, Assertive Community Treatment (ACT), and family psychoeducation.",
    "medication_classes": [
      "Second-Generation Antipsychotics: Risperidone, Olanzapine, Aripiprazole, Paliperidone (available as long-acting injectables - LAI for adherence)",
      "Gold-Standard Treatment-Resistant Antipsychotic: Clozapine (mandatory weekly/monthly absolute neutrophil count monitoring)",
      "Long-Acting Injectable (LAI) Formulations: Paliperidone palmitate (monthly or 3-monthly depot), Aripiprazole depot"
    ],
    "precautions": [
      "NEVER stop antipsychotics abruptly without psychiatric guidance (relapse rate without medication is > 70% within 1 year)",
      "Regular monitoring of metabolic parameters (weight, lipids, HbA1c)"
    ],
    "prevention": [
      "Avoid recreational cannabis in vulnerable teenagers with family history of psychosis",
      "Early intervention services (EIS) during first-episode psychosis drastically improve long-term prognosis"
    ],
    "complications": [
      "Substance misuse, severe self-neglect, suicide (~5-10% lifetime mortality, often early in disease course)"
    ],
    "emergency_signs": [
      "🚨 CRISIS: Severe acute agitation, command auditory hallucinations instructing harm, or catatonia. Emergency hospital admission via 112 / 911 or Tele-MANAS (14416)."
    ],
    "doctor_specialty": "Psychiatrist / Early Psychosis Intervention Team",
    "faqs": [
      {
        "question": "Is schizophrenia a 'split personality'?",
        "answer": "No. That is a common myth. Schizophrenia does not mean multiple personalities. It means a 'split from reality' where the brain struggles to distinguish real sensory inputs from internal thoughts."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 6A20 Schizophrenia",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Schizophrenia Information",
        "source": "NIMH / NIH",
        "url": "https://www.nimh.nih.gov/health/topics/schizophrenia"
      }
    ],
    "source_url": "https://www.nimh.nih.gov/health/topics/schizophrenia",
    "multilingual": {
      "hi": {
        "name": "सिज़ोफ्रेनिया / मनोविदलता (Schizophrenia)",
        "summary": "एक गंभीर मानसिक बीमारी जिसमें मरीज को कानों में ऐसी आवाजें सुनाई देती हैं जो असल में नहीं होतीं (आभास) और वहम या शक होने लगता है कि कोई उसे नुकसान पहुंचा रहा है।",
        "advice": "यह कोई भूत-प्रेत या जादू नहीं बल्कि दिमाग का रासायनिक विकार है। तुरंत मनोचिकित्सक से एंटीसाइकोटिक दवा शुरू करवाएं।"
      },
      "hinglish": {
        "name": "Schizophrenia (Aawazein sunai dena aur veham hona)",
        "summary": "Kaan me aisi aawazein aana jo baaki logo ko nahi aati, ajeeb veham hona aur logo se kat jana. Antipsychotic dawai se theek hota hai.",
        "advice": "Dawai regular lein aur psychiatrist se milen. Andhavishwas me waqt barbad na karein."
      },
      "ur": {
        "name": "شیزوفرینیا (ذہنی توازن کی خرابی)",
        "summary": "دماغی بیماری جس میں مریض کو غیبی آوازیں سنائی دیتی ہیں، شک اور فہم کی خرابی پیدا ہوتی ہے۔",
        "advice": "یہ جادو نہیں بلکہ دماغی بیماری ہے۔ فوراً ماہر نفسیات سے علاج کروائیں۔"
      }
    },
    "target_3d_nodes": [
      "mesolimbic-pathway",
      "prefrontal-cortex",
      "thalamus",
      "temporal-lobe"
    ],
    "search_keywords": [
      "schizophrenia",
      "aawazein aana",
      "hearing voices",
      "delusions",
      "hallucinations",
      "paranoia",
      "psychosis",
      "veham"
    ]
  },
  {
    "disease_id": "autism-spectrum-disorder",
    "official_name": "Autism spectrum disorder",
    "alternative_names": [
      "ASD",
      "Autism",
      "Neurodivergence"
    ],
    "category": "neurodevelopmental",
    "subcategory": "Neurodevelopmental disorders",
    "icd11_code": "6A02",
    "simple_description": "A lifelong neurodevelopmental condition that affects how a person communicates, interacts with others, experiences their sensory environment, and learns.",
    "medical_description": "A neurodevelopmental disorder characterized by persistent deficits in the ability to initiate and sustain reciprocal social interaction and social communication, accompanied by restricted, repetitive, and inflexible patterns of behavior, interests, or activities. Symptoms emerge during the developmental period and cause significant impairment in personal, family, social, educational, or occupational functioning.",
    "affected_system": "Cortical microcircuitry, synaptic pruning mechanisms, amygdala-prefrontal connectivity, and social brain network.",
    "symptoms": [
      "Persistent differences in social communication: difficulty with reciprocal back-and-forth conversation, understanding non-verbal body language, or maintaining eye contact",
      "Differences in developing and understanding peer relationships",
      "Restricted, repetitive motor movements: hand flapping, rocking, spinning, or echolalia (repeating words)",
      "Insistence on sameness: extreme distress with small changes in routine or transitions",
      "Highly restricted, fixated special interests of abnormal intensity or focus",
      "Sensory hyper- or hypo-reactivity: extreme distress to loud noises, fluorescent lights, clothing tags, or seeking intense sensory input"
    ],
    "early_warning_signs": [
      "By 12-18 months: lack of pointing, not responding to name when called, absence of warm shared facial expressions, delayed speech development"
    ],
    "possible_causes": [
      "Complex polygenic heritability (heritability ~80%, involving synaptic adhesion genes like NLGN, NRXN, SHANK3)",
      "Advanced parental age, preterm birth"
    ],
    "risk_factors": [
      "Sibling with autism (20% recurrence risk)",
      "Extreme prematurity (< 26 weeks gestation)",
      "Associated genetic syndromes (Fragile X, Tuberous Sclerosis)"
    ],
    "disease_types": [
      "Autism spectrum disorder without disorder of intellectual development and with mild or no impairment of functional language (formerly Asperger syndrome)",
      "Autism spectrum disorder with disorder of intellectual development and impaired language"
    ],
    "clinical_evaluation": "Gold-standard multidisciplinary assessment: Autism Diagnostic Observation Schedule (ADOS-2) and Autism Diagnostic Interview-Revised (ADI-R).",
    "diagnostic_tests": [
      "Clinical diagnostic evaluation; chromosomal microarray (CMA) and fragile X genetic testing"
    ],
    "treatment_overview": "Individualized developmental and behavioral support started as early as possible. Applied Behavior Analysis (ABA) / Naturalistic Developmental Behavioral Interventions (NDBI), Speech-Language Therapy, Occupational Therapy (sensory integration). Medications (Aripiprazole, Risperidone) are used only for severe irritability or aggression, not for core social traits.",
    "medication_classes": [
      "Atypical Antipsychotics (Risperidone, Aripiprazole - FDA approved for severe irritability in ASD)",
      "Melatonin for frequent sleep onset insomnia"
    ],
    "precautions": [
      "AVOID non-evidence-based dangerous pseudo-treatments (e.g. chelation therapy, hyperbaric oxygen, miracle mineral solution - MMS)"
    ],
    "prevention": [
      "Vaccines do NOT cause autism (rigorously debunked by dozens of global epidemiological studies encompassing millions of children)"
    ],
    "complications": [
      "High rates of comorbid anxiety, depression, and ADHD in adolescents and adults",
      "Sensory overload meltdowns"
    ],
    "emergency_signs": [
      "Severe acute self-injurious behavior (head banging) or wandering/elopement into traffic or water bodies"
    ],
    "doctor_specialty": "Developmental Pediatrician / Child Neurologist / Child Psychiatrist",
    "faqs": [
      {
        "question": "Do vaccines cause autism?",
        "answer": "NO. Dozens of massive, independent global scientific studies involving millions of children over 25 years have conclusively proven that vaccines (including MMR) do NOT cause autism."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 6A02 Autism spectrum disorder",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Autism Spectrum Disorder",
        "source": "NIMH / NIH",
        "url": "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd"
      }
    ],
    "source_url": "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    "multilingual": {
      "hi": {
        "name": "ऑटिज्म स्पेक्ट्रम डिसऑर्डर (Autism / एएसडी)",
        "summary": "एक न्यूरोडेवलपमेंटल स्थिति जिसमें बच्चे को बातचीत करने, नजरें मिलाने, दूसरों से घुलने-मिलने में कठिनाई और एक ही काम को बार-बार दोहराने की आदत होती है।",
        "advice": "शुरुआती उम्र में ही स्पीच थेरेपी, ऑक्यूपेशनल थेरेपी और बिहेवियरल सपोर्ट शुरू कराएं। टीके ऑटिज्म का कारण नहीं होते।"
      },
      "hinglish": {
        "name": "Autism Spectrum Disorder (ASD)",
        "summary": "Social interaction aur communication me difference, eye contact na karna aur routine change hone par pareshan hona.",
        "advice": "Early intervention se bohot improvement aata hai. Speech therapy aur occupational therapy lagwayein."
      },
      "ur": {
        "name": "آٹزم سپیکٹرم ڈس آرڈر (آٹزم)",
        "summary": "بچوں میں بات چیت، سماجی میل جول اور رویوں میں مختلف انداز کا ہونا۔",
        "advice": "ابتدائی عمر میں ہی سپیچ تھراپی اور ماہر اطفال سے تربیت شروع کروائیں۔"
      }
    },
    "target_3d_nodes": [
      "prefrontal-cortex",
      "amygdala",
      "temporal-lobe",
      "cerebellum"
    ],
    "search_keywords": [
      "autism",
      "asd",
      "autism spectrum",
      "eye contact nahi karna",
      "child not speaking",
      "repetitive behavior",
      "sensory overload"
    ]
  },
  {
    "disease_id": "adhd",
    "official_name": "Attention deficit hyperactivity disorder",
    "alternative_names": [
      "ADHD",
      "Hyperkinetic disorder",
      "Dhyan na lagna aur chanchalta"
    ],
    "category": "neurodevelopmental",
    "subcategory": "Neurodevelopmental disorders",
    "icd11_code": "6A05",
    "simple_description": "A neurodevelopmental condition characterized by a persistent pattern of inattention (trouble focusing), hyperactivity (excessive restlessness), and impulsivity that interferes with daily functioning.",
    "medical_description": "A persistent pattern of inattention and/or hyperactivity-impulsivity that has a direct negative impact on academic, occupational, or social functioning. Symptoms emerge prior to age 12, persist for >= 6 months, and manifest across two or more settings (e.g. home and school/work).",
    "affected_system": "Prefrontal cortex executive control networks, basal ganglia, and frontostriatal dopamine and norepinephrine signaling.",
    "symptoms": [
      "Inattention: making careless mistakes, difficulty sustaining attention on tasks, struggling to follow multi-step instructions, chronic disorganization",
      "Forgetfulness in daily activities (losing keys, phone, forgetting appointments)",
      "Hyperactivity: fidgeting with hands or feet, squirming in seat, feeling inwardly restless (in adults), talking excessively",
      "Impulsivity: blurting out answers before questions are finished, difficulty waiting turns, interrupting conversations",
      "Executive dysfunction: severe chronic procrastination and difficulty estimating time ('time blindness')"
    ],
    "early_warning_signs": [
      "Consistently struggling with sustained attention and impulse control in classroom and home compared to same-age peers"
    ],
    "possible_causes": [
      "High heritability (~75-80%; involving dopamine transporter SLC6A3 and receptor DRD4 genes)",
      "Delayed maturation of prefrontal cortical thickness"
    ],
    "risk_factors": [
      "Family history of ADHD, maternal smoking or alcohol during pregnancy, very low birth weight"
    ],
    "disease_types": [
      "ADHD predominantly inattentive presentation",
      "ADHD predominantly hyperactive/impulsive presentation",
      "ADHD combined presentation"
    ],
    "clinical_evaluation": "Vanderbilt ADHD Diagnostic Rating Scale / Conners Scale (completed by parents and teachers), Adult ADHD Self-Report Scale (ASRS v1.1).",
    "diagnostic_tests": [
      "Comprehensive developmental and psychological clinical assessment"
    ],
    "treatment_overview": "Multimodal therapy combining behavioral interventions and pharmacotherapy. Psychostimulants (Methylphenidate, Amphetamines) are the most effective first-line medical treatment with response rates > 70-80%. Non-stimulants (Atomoxetine, Guanfacine, Clonidine) are effective alternatives.",
    "medication_classes": [
      "First-line Stimulants: Methylphenidate (Ritalin / Concerta extended-release), Lisdexamfetamine / Mixed Amphetamine Salts",
      "Non-stimulants: Atomoxetine (selective norepinephrine reuptake inhibitor), Guanfacine ER (alpha-2A adrenergic agonist)"
    ],
    "precautions": [
      "Monitor blood pressure, heart rate, and growth/weight regularly while on stimulant medications"
    ],
    "prevention": [
      "Structured organizational routines, clear visual timers, broken-down checklists"
    ],
    "complications": [
      "Academic underachievement, occupational instability, increased risk of accidental injuries, comorbid anxiety/depression"
    ],
    "emergency_signs": [
      "Severe acute emotional dysregulation or impulsive dangerous behaviors"
    ],
    "doctor_specialty": "Child and Adolescent Psychiatrist / Developmental Pediatrician / Adult ADHD Specialist",
    "faqs": [
      {
        "question": "Can adults have ADHD?",
        "answer": "Yes. While physical hyperactivity often decreases with age, inattention, disorganization, chronic procrastination, and restlessness frequently continue into adulthood."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 6A05 Attention deficit hyperactivity disorder",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Attention-Deficit/Hyperactivity Disorder",
        "source": "NIMH / NIH",
        "url": "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd"
      }
    ],
    "source_url": "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd",
    "multilingual": {
      "hi": {
        "name": "एडीएचडी / ध्यान की कमी और अतिसक्रियता (ADHD)",
        "summary": "एक जगह ध्यान केंद्रित न कर पाना, अत्यधिक चंचलता (हाथ-पैर हिलाना) और बिना सोचे-समझे उतावलेपन में काम करना।",
        "advice": "यह आलस नहीं बल्कि मस्तिष्क के डोपामाइन पाथवे का विकार है। बिहेवियर थेरेपी और डॉक्टर द्वारा दी जाने वाली दवाओं से सुधार होता है।"
      },
      "hinglish": {
        "name": "ADHD (Attention Deficit Hyperactivity Disorder)",
        "summary": "Padhai ya kaam me dhyan na lagna, baar-baar cheezein bhoolna, restless hona aur time management me fail hona.",
        "advice": "Specialist psychiatrist se consult karein. Methylphenidate ya Atomoxetine aur behavioral coaching bohot helpful hai."
      },
      "ur": {
        "name": "اے ڈی ایچ ڈی (توجہ کی کمی اور غیر معمولی تیزی)",
        "summary": "توجہ مرکوز کرنے میں دشواری، ضرورت سے زیادہ بے چینی اور جلد بازی کا مظاہرہ۔",
        "advice": "یہ ایک قابل علاج کیفیت ہے۔ ماہر نفسیات سے مشورہ کریں۔"
      }
    },
    "target_3d_nodes": [
      "prefrontal-cortex",
      "caudate-nucleus",
      "anterior-cingulate-cortex"
    ],
    "search_keywords": [
      "adhd",
      "dhyan na lagna",
      "hyperactivity",
      "inattention",
      "lack of focus",
      "restless child",
      "adult adhd"
    ]
  },
  {
    "disease_id": "restless-legs-syndrome",
    "official_name": "Restless legs syndrome",
    "alternative_names": [
      "RLS",
      "Willis-Ekbom disease (WED)",
      "Pair me bechaini"
    ],
    "category": "sleep-disorders",
    "subcategory": "Sleep-related movement disorders",
    "icd11_code": "7A80",
    "simple_description": "A neurological condition causing an irresistible urge to move the legs, usually accompanied by crawling, pulling, or creeping sensations, worsening at night and relieved by movement.",
    "medical_description": "A sensorimotor disorder characterized by an irresistible urge to move the legs, usually accompanied by uncomfortable paresthesias. Characterized by 4 essential diagnostic criteria: 1. Urge to move legs with unpleasant sensations, 2. Begins or worsens during periods of rest or inactivity, 3. Partially or totally relieved by movement (walking, stretching), and 4. Worse or exclusively occurs in the evening or night.",
    "affected_system": "Central dopaminergic pathways (diencephalospinal tract) and central nervous system iron metabolism.",
    "symptoms": [
      "An irresistible urge to move the legs, described as crawling, itching, pulling, bubbling, or aching deep inside the calves or thighs",
      "Symptoms strike when sitting still in the evening (watching TV, car rides) or lying in bed trying to sleep",
      "Immediate temporary relief upon getting up, pacing the floor, stretching, or shaking the legs",
      "Severe sleep-onset insomnia and chronic sleep disruption",
      "Periodic Limb Movements of Sleep (PLMS: involuntary rhythmic foot/leg kicks during sleep in > 80% of RLS patients)"
    ],
    "early_warning_signs": [
      "Uncomfortable leg restlessness appearing only when trying to relax in bed at night"
    ],
    "possible_causes": [
      "Brain iron deficiency (substantia nigra iron deficiency leading to post-synaptic dopamine receptor dysfunction)",
      "Genetic heritability (MEIS1, BTBD9, MAP2K5 genes)"
    ],
    "risk_factors": [
      "Low serum ferritin / iron deficiency",
      "Pregnancy (especially third trimester)",
      "End-stage renal disease (uremic RLS)",
      "Use of dopamine antagonists, antihistamines, or SSRIs"
    ],
    "disease_types": [
      "Primary idiopathic RLS",
      "Secondary RLS (iron deficiency, pregnancy, renal failure, neuropathy)"
    ],
    "clinical_evaluation": "International Restless Legs Syndrome Study Group (IRLSSG) 5 essential criteria.",
    "diagnostic_tests": [
      "Serum Ferritin and Total Iron Binding Capacity (TIBC) - MANDATORY: Target serum ferritin must be >= 75-100 ng/mL in RLS patients",
      "Renal function tests (BUN, Creatinine) and fasting blood glucose",
      "Overnight Polysomnography (PSG) - If periodic limb movements of sleep or sleep apnea need quantification"
    ],
    "treatment_overview": "First-line intervention is iron replenishment if serum ferritin is < 75 mcg/L (oral iron with Vitamin C on empty stomach, or IV Ferric Carboxymaltose if severe). First-line pharmacological management has shifted from dopamine agonists to Alpha-2-delta ligands (Pregabalin / Gabapentin) to completely avoid 'Augmentation' (a severe paradoxical worsening caused by long-term dopamine agonists).",
    "medication_classes": [
      "Iron Therapy: Oral Ferrous Sulfate / Bisglycinate with Vitamin C, or IV Iron infusion (Ferric Carboxymaltose)",
      "First-line Alpha-2-Delta Ligands: Pregabalin (50-200 mg taken 2h before bed), Gabapentin enacarbil / Gabapentin",
      "Dopamine Agonists (Pramipexole, Ropinirole, Rotigotine patch - strictly low doses; high risk of augmentation)",
      "Low-dose opioids for severe refractory RLS"
    ],
    "precautions": [
      "CAUTION with long-term Pramipexole/Ropinirole: can cause AUGMENTATION, where leg symptoms start earlier in the afternoon, spread to the arms, and become more intense",
      "Avoid over-the-counter sedating antihistamines (Diphenhydramine) which severely aggravate RLS"
    ],
    "prevention": [
      "Avoid caffeine and alcohol before bed; engage in light evening leg stretches and warm baths"
    ],
    "complications": [
      "Severe chronic insomnia, depression, daytime exhaustion"
    ],
    "emergency_signs": [
      "Severe refractory insomnia driving acute depressive crisis"
    ],
    "doctor_specialty": "Sleep Medicine Specialist / Neurologist",
    "faqs": [
      {
        "question": "Why do my legs feel like bugs are crawling only at night?",
        "answer": "Restless Legs Syndrome has a strong circadian rhythm; dopamine levels naturally drop in the evening, triggering uncomfortable sensations deep in the leg muscles that can only be relieved by moving them."
      }
    ],
    "references": [
      {
        "title": "ICD-11 MMS: 7A80 Restless legs syndrome",
        "source": "World Health Organization",
        "url": "https://icd.who.int/browse/2024-01/mms/en#1073860098"
      },
      {
        "title": "Restless Legs Syndrome Fact Sheet",
        "source": "NINDS / NIH",
        "url": "https://www.ninds.nih.gov/health-information/disorders/restless-legs-syndrome"
      }
    ],
    "source_url": "https://www.ninds.nih.gov/health-information/disorders/restless-legs-syndrome",
    "multilingual": {
      "hi": {
        "name": "रेस्टलेस लेग्स सिंड्रोम (Restless Legs Syndrome / पैरों में बेचैनी)",
        "summary": "रात को बिस्तर पर लेटते ही पैरों में अजीब बेचैनी, कीड़े रेंगने जैसा अहसास और पैर हिलाने की तीव्र इच्छा होना, जो पैर हिलाने या चलने से ही शांत होती है।",
        "advice": "सीरम फेरिटिन (आयरन) टेस्ट करवाएं। कैफीन बंद करें और शाम को पैरों की हल्की स्ट्रेचिंग करें। प्रीगाबेलिन या गैबापेंटिन दवा से बहुत आराम मिलता है।"
      },
      "hinglish": {
        "name": "Restless Legs Syndrome (Raat ko pair hilane ka rog)",
        "summary": "Raat ko bistar par pair me bechaini hona aur lagna ki pair chalaye bina aaram nahi milega. Iron ki kami se juda hota hai.",
        "advice": "Ferritin test karwayein aur sleep doctor se Pregabalin dawai lein."
      },
      "ur": {
        "name": "ریسٹ لیس لیگز سنڈروم (ٹانگوں کی بے چینی)",
        "summary": "رات کے وقت بستر پر ٹانگوں میں بے چینی اور انہیں مسلسل حرکت دینے کی شدید خواہش۔",
        "advice": "خون میں آئرن کا ٹیسٹ کروائیں اور ماہر نیند سے رجوع کریں۔"
      }
    },
    "target_3d_nodes": [
      "substantia-nigra",
      "spinal-cord",
      "somatosensory-cortex"
    ],
    "search_keywords": [
      "restless legs",
      "rls",
      "pair me bechaini",
      "moving legs at night",
      "urge to move legs",
      "willis ekbom",
      "crawling feeling in legs"
    ]
  }
];


export const CATEGORY_METADATA = {
  "headache": { "label": "Headache Disorders", "icon": "Flame", "icdChapter": "08 Diseases of the nervous system" },
  "stroke": { "label": "Stroke & Cerebrovascular", "icon": "AlertTriangle", "icdChapter": "08 Diseases of the nervous system" },
  "epilepsy": { "label": "Epilepsy & Seizures", "icon": "Activity", "icdChapter": "08 Diseases of the nervous system" },
  "brain-disorders": { "label": "Brain Infections & Tumors", "icon": "Brain", "icdChapter": "01 Infections / 02 Neoplasms" },
  "neurology": { "label": "Movement & Neurodegenerative", "icon": "Layers", "icdChapter": "08 Diseases of the nervous system" },
  "nerve-disorders": { "label": "Peripheral Nerve Disorders", "icon": "Zap", "icdChapter": "08 Diseases of the nervous system" },
  "spinal-disorders": { "label": "Spinal & Demyelinating", "icon": "ShieldCheck", "icdChapter": "08 / 21 Musculoskeletal" },
  "neuromuscular": { "label": "Neuromuscular Diseases", "icon": "Activity", "icdChapter": "08 Diseases of the nervous system" },
  "sleep-disorders": { "label": "Sleep-Wake Disorders", "icon": "Moon", "icdChapter": "07 Sleep-wake disorders" },
  "mental-health": { "label": "Mental Health & Mood", "icon": "HeartHandshake", "icdChapter": "06 Mental, behavioural disorders" }
};

export const getDiseaseById = (id) => {
  return ALL_VERIFIED_DISEASES.find(d => d.disease_id === id) || null;
};

export const getDiseasesByCategory = (category) => {
  return ALL_VERIFIED_DISEASES.filter(d => d.category === category);
};
