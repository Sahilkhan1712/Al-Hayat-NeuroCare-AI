// NeuroCare AI — Comprehensive Neurological Disease Knowledge Base
// Based on peer-reviewed clinical guidelines, WHO, NINDS/NIH, Mayo Clinic, and NHS references.

export const DISEASE_CATEGORIES = [
  { id: 'headache', name: 'A. Headache Disorders', icon: 'Flame', color: '#ff2d75' },
  { id: 'brain', name: 'B. Brain Disorders & Tumors', icon: 'Brain', color: '#00e5ff' },
  { id: 'stroke', name: 'C. Stroke & Vascular Disorders', icon: 'Activity', color: '#ef4444' },
  { id: 'epilepsy', name: 'D. Seizures & Epilepsy', icon: 'Zap', color: '#a855f7' },
  { id: 'movement', name: 'E. Movement Disorders', icon: 'Move', color: '#ffb703' },
  { id: 'cognitive', name: 'F. Memory & Cognitive Disorders', icon: 'BookOpen', color: '#10b981' },
  { id: 'nerve', name: 'G. Nerve & Peripheral Nervous System', icon: 'GitBranch', color: '#38bdf8' },
  { id: 'spine', name: 'H. Spinal Cord & Spine Disorders', icon: 'Layers', color: '#6366f1' },
  { id: 'neurodevelopmental', name: 'I. Neurodevelopmental Conditions', icon: 'Users', color: '#ec4899' },
  { id: 'neuromuscular', name: 'J. Neuromuscular Disorders', icon: 'Shield', color: '#f59e0b' },
  { id: 'sleep', name: 'K. Sleep-Related Neurological Conditions', icon: 'Moon', color: '#8b5cf6' },
  { id: 'infections', name: 'L. Brain Infections & Inflammatory Disorders', icon: 'AlertTriangle', color: '#f43f5e' },
  { id: 'other', name: 'M. Other Neurological Conditions & Trauma', icon: 'HeartPulse', color: '#14b8a6' }
];

export const NEUROLOGICAL_DISEASES = [
  // ==========================================
  // CATEGORY A: HEADACHE DISORDERS
  // ==========================================
  {
    id: 'migraine-aura',
    categoryId: 'headache',
    name: 'Migraine with and without Aura',
    simpleExplanation: 'A complex neurological condition causing recurrent moderate-to-severe throbbing headaches, often accompanied by nausea, sensitivity to light/sound, and visual disturbances (aura).',
    medicalDefinition: 'A primary neurovascular disorder characterized by recurrent attacks of unilateral pulsatile cephalalgia lasting 4–72 hours, aggravated by routine physical activity, and associated with photophobia, phonophobia, and autonomic dysfunction.',
    affectedRegion: 'Trigeminovascular system, Occipital cortex (Cortical Spreading Depression), and Hypothalamus',
    target3DNodes: ['left-middle-temporal-gyrus', 'right-middle-temporal-gyrus', 'left-occipital-lobe', 'right-occipital-lobe', 'thalamus', 'hypothalamus'],
    commonSymptoms: [
      'Unilateral (one-sided) throbbing or pulsating head pain',
      'Extreme sensitivity to light (photophobia) and sound (phonophobia)',
      'Nausea and vomiting',
      'Visual aura: zigzag patterns, flickering lights, or scotoma (blind spots) lasting 20-60 minutes before pain'
    ],
    lessCommonSymptoms: [
      'Sensory aura: numbness or tingling in the face or fingers',
      'Dysphasic aura: temporary difficulty finding words',
      'Allodynia: scalp tenderness from even light touching or hair brushing',
      'Yawning, neck stiffness, and food cravings hours before the attack (prodrome)'
    ],
    earlyWarningSigns: 'Prodrome symptoms (fatigue, mood changes, neck stiffness, frequent yawning) occurring 24-48 hours before pain onset.',
    possibleCauses: 'Cortical Spreading Depression (a wave of depolarization moving across the cerebral cortex), activation of the trigeminovascular system, and release of inflammatory neuropeptides like Calcitonin Gene-Related Peptide (CGRP).',
    riskFactors: 'Family history (70% genetic heritability), female sex (3x more common in women due to estrogen fluctuations), chronic stress, irregular sleep patterns, skipping meals, caffeine withdrawal.',
    typesAndStages: 'Four phases: Prodrome (warning phase) -> Aura (visual/sensory disturbances in 25-30% of patients) -> Headache phase (4-72 hours) -> Postdrome ("migraine hangover", fatigue, brain fog for 24-48 hours). Subtypes: Episodic (<15 days/month) vs Chronic (≥15 days/month for >3 months).',
    evaluation: 'Clinical diagnosis based on the International Classification of Headache Disorders (ICHD-3) criteria. Comprehensive neurological exam to rule out secondary causes.',
    diagnosticInvestigations: 'Brain MRI (T1, T2, FLAIR) to exclude structural lesions or vascular malformations. MR Angiography (MRA) if atypical features exist.',
    relevantTests: 'Brain MRI, CT Head (in emergency to rule out hemorrhage), ESR/CRP (to rule out temporal arteritis in patients over 50).',
    treatmentOptions: 'Two-tier strategy: Acute abortive therapy (taken at first sign of headache to abort the attack) and Preventive therapy (taken daily to reduce frequency and intensity).',
    medicinesExplanation: 'Categories: 1) Triptans (Sumatriptan, Rizatriptan) - 5-HT1B/1D receptor agonists constricting cranial vessels; 2) CGRP antagonists (Gepants like Rimegepant); 3) Preventive agents: Beta-blockers (Propranolol), Anticonvulsants (Topiramate), CGRP monoclonal antibodies (Erenumab, Galcanezumab). Important precautions: Triptans are contraindicated in uncontrolled hypertension or coronary artery disease. Prescription must be supervised by a physician.',
    lifestyleAndRehab: 'Maintain consistent sleep-wake cycles, stay hydrated (2.5L daily), eat regular meals, keep a headache diary, practice cognitive behavioral therapy (CBT) and progressive muscle relaxation.',
    possibleComplications: 'Status migrainosus (debilitating attack lasting >72 hours), Medication-Overuse Headache (rebound headaches from frequent analgesic use), Migrainous infarction (rare ischemic stroke during aura).',
    preventionAndRiskReduction: 'Identify and avoid individualized triggers (aged cheese, artificial sweeteners, nitrates, alcohol, bright strobe lighting, sleep deprivation). Regular aerobic exercise.',
    whenToConsultNeurologist: 'If headaches occur more than 4 days a month, if over-the-counter medicines stop working, or if aura symptoms last longer than 60 minutes.',
    emergencyWarningSigns: 'SNOOP4 red flags: Sudden "thunderclap" headache reaching maximum intensity in <1 minute, headache accompanied by fever, stiff neck, confusion, new weakness, or vision loss.',
    faqs: [
      { q: 'Is migraine just a bad headache?', a: 'No, migraine is a complex neurological disorder involving altered brain electrical activity, blood vessels, and neurotransmitters throughout the entire nervous system.' },
      { q: 'Can children get migraines?', a: 'Yes. In pediatric patients, migraines often present with abdominal pain, cyclic vomiting, and dizziness rather than typical one-sided head pain.' },
      { q: 'Why do painkillers make my migraine worse over time?', a: 'Taking analgesics or triptans more than 10-15 days a month causes the nervous system to become hypersensitized, leading to Medication-Overuse Headache (MOH).' }
    ],
    trustedReferences: [
      { name: 'NINDS Migraine Information Page', url: 'https://www.ninds.nih.gov/health-information/disorders/migraine', date: '2025' },
      { name: 'American Headache Society (AHS) Guidelines', url: 'https://americanheadachesociety.org', date: '2024' },
      { name: 'WHO Headache Disorders Fact Sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/headache-disorders', date: '2024' }
    ]
  },
  {
    id: 'cluster-headache',
    categoryId: 'headache',
    name: 'Cluster Headache',
    simpleExplanation: 'One of the most intensely painful headache disorders, causing excruciating, sharp, piercing pain strictly around one eye or temple in cyclical periods (clusters).',
    medicalDefinition: 'A trigeminal autonomic cephalalgia (TAC) characterized by severe, strictly unilateral orbital, supraorbital, or temporal pain lasting 15–180 minutes, accompanied by prominent ipsilateral cranial autonomic symptoms.',
    affectedRegion: 'Hypothalamus (circadian pacemaker) and the Trigeminal-Autonomic Reflex Arc',
    target3DNodes: ['hypothalamus', 'hypothalamus2', 'left-middle-temporal-gyrus', 'right-middle-temporal-gyrus', 'thalamus'],
    commonSymptoms: [
      'Excruciating, searing, knife-like pain focused deep behind one eye or temple',
      'Ipsilateral eye redness (conjunctival injection) and tearing (lacrimation)',
      'Nasal congestion or runny nose on the pain side',
      'Eyelid drooping (ptosis) and pupil constriction (miosis)',
      'Severe physical restlessness and agitation (inability to sit still or lie down)'
    ],
    lessCommonSymptoms: [
      'Forehead and facial sweating on the affected side',
      'Ear fullness or redness',
      'Facial flushing or pallor'
    ],
    earlyWarningSigns: 'Vague discomfort or mild aching pressure around the eye a few minutes before the explosive attack begins.',
    possibleCauses: 'Hypothalamic dysregulation of the biological clock and circadian rhythm, leading to episodic activation of the trigeminal nerve and parasympathetic cranial outflow.',
    riskFactors: 'Male sex (2-3 times more common in men), age 20-50, heavy cigarette smoking, alcohol consumption (especially during active cluster bouts), family history.',
    typesAndStages: 'Episodic Cluster Headache (attacks occur in cluster periods lasting weeks to months separated by pain-free remission periods >3 months) and Chronic Cluster Headache (attacks recur for >1 year without remission or with remissions <3 months).',
    evaluation: 'Detailed clinical history based on ICHD-3 criteria. Complete cranial nerve exam.',
    diagnosticInvestigations: 'Brain MRI with and without contrast, including dedicated pituitary and cavernous sinus imaging, to rule out secondary lesions (e.g., pituitary adenoma, aneurysm).',
    relevantTests: 'Contrast Brain MRI, MR Angiography (MRA) of intracranial and extracranial vessels.',
    treatmentOptions: 'High-flow 100% oxygen therapy (via non-rebreather mask at 12-15 L/min for 15-20 min), subcutaneous Sumatriptan, and preventive prophylaxis.',
    medicinesExplanation: 'Acute: Subcutaneous or intranasal Sumatriptan/Zolmitriptan (oral medications are too slow for cluster attacks). Preventive: Verapamil (calcium channel blocker, first-line with periodic ECG monitoring), Corticosteroids (Prednisone taper as temporary bridge), Lithium, and Galcanezumab (CGRP antibody).',
    lifestyleAndRehab: 'Strict avoidance of alcohol and nitroglycerin-containing compounds during active cluster periods. Regular sleep scheduling. No afternoon naps during bouts.',
    possibleComplications: 'Severe psychiatric distress and high suicide risk due to unbearable pain ("suicide headaches"). Medication toxicity from frequent analgesic use.',
    preventionAndRiskReduction: 'Strict smoking cessation, avoiding alcohol during active clusters, and prompt initiation of preventive therapy at the start of a cluster cycle.',
    whenToConsultNeurologist: 'Any unilateral headache with eye watering and nasal congestion requires immediate neurological diagnosis for specialized treatment.',
    emergencyWarningSigns: 'Sudden onset headache peaking immediately (thunderclap), new neurological deficits, or headache after age 50.',
    faqs: [
      { q: 'Why does cluster headache occur at the same time every day?', a: 'Because it originates in the hypothalamus, the brain\'s circadian biological clock, attacks frequently strike at precise clock times, especially during REM sleep at 1:00 AM to 3:00 AM.' },
      { q: 'Can regular painkillers treat cluster headaches?', a: 'No. Standard OTC painkillers (paracetamol, ibuprofen) take 30-60 minutes to work, whereas a cluster attack reaches maximum agony in 5-10 minutes and often ends before oral pills can take effect.' }
    ],
    trustedReferences: [
      { name: 'NINDS Cluster Headache Guide', url: 'https://www.ninds.nih.gov/health-information/disorders/cluster-headache', date: '2025' },
      { name: 'Mayo Clinic - Cluster Headache', url: 'https://www.mayoclinic.org/diseases-conditions/cluster-headache', date: '2024' }
    ]
  },
  {
    id: 'tension-headache',
    categoryId: 'headache',
    name: 'Tension-Type Headache',
    simpleExplanation: 'The most common type of headache, characterized by a dull, aching band of pressure wrapping tightly around the forehead, temples, or back of the head.',
    medicalDefinition: 'A primary headache disorder of non-pulsatile, mild-to-moderate bilateral pain, not aggravated by routine physical activity, and lacking prominent migraine features such as nausea or vomiting.',
    affectedRegion: 'Pericranial myofascial tissues, neck musculature, and central pain modulation pathways',
    target3DNodes: ['left-postcentral-gyrus', 'right-postcentral-gyrus', 'left-middle-frontal-gyrus', 'right-middle-frontal-gyrus'],
    commonSymptoms: [
      'Dull, constant aching pressure like a tight band or vise around the head',
      'Bilateral location (both sides of the forehead, temples, or back of the head)',
      'Tenderness in the scalp, neck, and shoulder muscles',
      'Mild sensitivity to light OR sound (rarely both)'
    ],
    lessCommonSymptoms: [
      'Difficulty falling asleep due to neck tightness',
      'Mild generalized fatigue and concentration difficulty'
    ],
    earlyWarningSigns: 'Gradual build-up of neck stiffness and shoulder tightness after prolonged desk work or emotional stress.',
    possibleCauses: 'In episodic tension headaches: pericranial muscle contraction and myofascial trigger points. In chronic tension headaches: central sensitization where pain processing circuits in the brain become over-sensitive.',
    riskFactors: 'Chronic psychological stress, poor ergonomic posture, prolonged screen time, sleep disturbances, teeth grinding (bruxism), eye strain.',
    typesAndStages: 'Infrequent episodic (<1 day/month), Frequent episodic (1-14 days/month for >3 months), and Chronic (≥15 days/month for >3 months).',
    evaluation: 'Clinical history and physical examination demonstrating pericranial muscle tenderness without focal neurological abnormalities.',
    diagnosticInvestigations: 'Neuroimaging (MRI or CT) is generally not required unless red flags (abnormal exam, sudden onset, focal signs) are present.',
    relevantTests: 'Physical exam of cervical spine and temporomandibular joint (TMJ). Eye examination to rule out refractory errors.',
    treatmentOptions: 'Acute treatment with simple analgesics; preventive pharmacotherapy; physical therapy, posture correction, and biofeedback for chronic cases.',
    medicinesExplanation: 'Acute: Simple analgesics (NSAIDs like Ibuprofen, Naproxen, or Acetaminophen). Combined formulations containing caffeine. Avoid opioids. Preventive: Amitriptyline (tricyclic antidepressant, first-line for chronic tension headache) or Mirtazapine.',
    lifestyleAndRehab: 'Ergonomic workstation setup, regular screen breaks (20-20-20 rule), cervical spine stretching exercises, stress reduction practices, massage therapy.',
    possibleComplications: 'Medication-overuse headache from taking daily OTC analgesics; transformation from episodic into daily chronic headache.',
    preventionAndRiskReduction: 'Regular physical activity, maintaining good posture, stress management, consistent sleep schedule, and avoiding excessive caffeine.',
    whenToConsultNeurologist: 'If headaches occur more than twice a week, if pain requires daily painkillers, or if headache pattern suddenly changes.',
    emergencyWarningSigns: 'Sudden onset severe headache, accompanying fever, weakness, confusion, or visual impairment.',
    faqs: [
      { q: 'How is a tension headache different from a migraine?', a: 'Tension headaches are dull, band-like, bilateral, and do NOT worsen with walking or climbing stairs. Migraines are throbbing, often unilateral, accompanied by severe nausea and worsen with activity.' },
      { q: 'Can stress directly cause headaches?', a: 'Yes. Stress triggers prolonged contraction of scalp, neck, and shoulder muscles and alters pain neurotransmitters in the central nervous system.' }
    ],
    trustedReferences: [
      { name: 'MedlinePlus - Tension Headache', url: 'https://medlineplus.gov/ency/article/000797.htm', date: '2025' },
      { name: 'NHS - Tension Headaches', url: 'https://www.nhs.uk/conditions/tension-headaches/', date: '2024' }
    ]
  },
  {
    id: 'thunderclap-headache',
    categoryId: 'headache',
    name: 'Thunderclap Headache (Emergency Red Flag)',
    simpleExplanation: 'An explosive, extraordinarily severe headache that strikes like a clap of thunder, reaching maximum agony in less than 60 seconds. It is a medical emergency requiring immediate 911/112 care.',
    medicalDefinition: 'A hyperacute, severe headache peaking within one minute of onset, frequently signifying acute vascular catastrophe such as subarachnoid hemorrhage, arterial dissection, or reversible cerebral vasoconstriction syndrome (RCVS).',
    affectedRegion: 'Subarachnoid space, cerebral vasculature, Circle of Willis, and meninges',
    target3DNodes: ['cerebellum', 'midbrain', 'medulla-oblongata', 'pons', 'left-middle-temporal-gyrus', 'right-middle-temporal-gyrus'],
    commonSymptoms: [
      'Explosive, sudden onset pain reaching peak intensity in under 60 seconds ("worst headache of my life")',
      'Neck stiffness and pain (meningismus)',
      'Sudden nausea and forceful vomiting',
      'Confusion, altered mental state, or brief loss of consciousness'
    ],
    lessCommonSymptoms: [
      'Seizures',
      'Sudden focal neurological deficits (drooping eyelid, pupil dilation, limb weakness)',
      'Back pain radiating down the spine'
    ],
    earlyWarningSigns: 'Often none; can occasionally be preceded by smaller "sentinel" warning headaches in the preceding days from micro-leaks of an intracranial aneurysm.',
    possibleCauses: 'Ruptured intracranial cerebral aneurysm (Subarachnoid Hemorrhage - SAH), Reversible Cerebral Vasoconstriction Syndrome (RCVS), Cervical artery dissection (carotid or vertebral), Cerebral Venous Sinus Thrombosis (CVST), Pituitary apoplexy, Intracerebral hemorrhage.',
    riskFactors: 'Uncontrolled hypertension, heavy smoking, cocaine or sympathomimetic drug use, family history of aneurysms or polycystic kidney disease (ADPKD).',
    typesAndStages: 'Emergency presentation classified by underlying pathology (Aneurysmal SAH vs Non-aneurysmal perimesencephalic hemorrhage vs RCVS vs Spontaneous intracranial hypotension).',
    evaluation: 'Urgent emergency triage: Immediate non-contrast head CT within 6 hours. If CT is normal, mandatory lumbar puncture (LP) to detect cerebrospinal fluid xanthochromia.',
    diagnosticInvestigations: 'Immediate non-contrast Head CT (high sensitivity in first 6 hours), Lumbar Puncture (CSF analysis for red blood cells and spectrophotometric xanthochromia), CT Angiography (CTA) or Catheter Digital Subtraction Angiography (DSA).',
    relevantTests: 'CT Head non-contrast, Lumbar Puncture, CTA Head & Neck, Brain MRI/MRA.',
    treatmentOptions: 'Immediate emergency neurosurgical / neurointerventional management. Blood pressure control, nimodipine to prevent vasospasm, and endovascular coiling or surgical clipping for ruptured aneurysms.',
    medicinesExplanation: 'IV Nimodipine (calcium channel blocker for vasospasm prevention in SAH), anti-emetics, analgesia, reversal of anticoagulants. Strict critical care management in Neuro-ICU.',
    lifestyleAndRehab: 'Long-term blood pressure control, strict smoking cessation, neuro-rehabilitation following vascular events.',
    possibleComplications: 'Rebleeding, cerebral vasospasm with secondary ischemic infarction, hydrocephalus, permanent neurological disability, or mortality.',
    preventionAndRiskReduction: 'Strict management of hypertension, avoiding smoking and stimulant drugs, screening for intracranial aneurysms if two or more first-degree relatives have aneurysms.',
    whenToConsultNeurologist: 'THIS IS A MEDICAL EMERGENCY. DO NOT BOOK AN OUTPATIENT APPOINTMENT. CALL 112 / 911 IMMEDIATELY.',
    emergencyWarningSigns: 'ANY sudden headache peaking in under 60 seconds is an emergency until proven otherwise.',
    faqs: [
      { q: 'Why is thunderclap headache called a medical emergency?', a: 'Because in up to 25% of cases, it is caused by a ruptured brain aneurysm (subarachnoid hemorrhage), which carries a 50% mortality rate if not treated immediately.' },
      { q: 'Can a CT scan miss a thunderclap headache cause?', a: 'A head CT is over 98% sensitive in the first 6 hours, but sensitivity drops over time. That is why a lumbar puncture (spinal tap) is mandatory if the CT is negative.' }
    ],
    trustedReferences: [
      { name: 'NINDS Subarachnoid Hemorrhage Information', url: 'https://www.ninds.nih.gov/health-information/disorders/subarachnoid-hemorrhage', date: '2025' },
      { name: 'American Heart Association (AHA/ASA) Guidelines for Aneurysmal SAH', url: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000436', date: '2023' }
    ]
  },

  // ==========================================
  // CATEGORY B: BRAIN DISORDERS & TUMORS
  // ==========================================
  {
    id: 'brain-tumor',
    categoryId: 'brain',
    name: 'Brain Tumors (Primary & Metastatic)',
    simpleExplanation: 'An abnormal growth of cells within the brain tissue or surrounding membranes that can exert pressure on surrounding neural structures and cause progressive neurological symptoms.',
    medicalDefinition: 'Intracranial neoplasms originating within neural parenchyma (primary: e.g., Glioblastoma, Astrocytoma, Meningioma) or disseminating hematogenously from systemic malignancies (metastatic: e.g., lung, breast, melanoma).',
    affectedRegion: 'Variable depending on tumor location: Frontal, Temporal, Parietal, Occipital, Posterior fossa, or Cerebellum',
    target3DNodes: ['left-middle-frontal-gyrus', 'right-middle-frontal-gyrus', 'left-middle-temporal-gyrus', 'right-middle-temporal-gyrus', 'cerebellum', 'cerebellum2'],
    commonSymptoms: [
      'Progressive, persistent headache that is worse in the morning or awakens the patient from sleep',
      'New-onset seizures in an adult with no prior seizure history',
      'Progressive weakness, numbness, or loss of coordination in one limb or one side of the body',
      'Cognitive or personality changes, apathy, memory decline, or behavioral shifts'
    ],
    lessCommonSymptoms: [
      'Visual field disturbances or double vision (diplopia)',
      'Language difficulties (difficulty understanding or finding words)',
      'Hearing loss or tinnitus (in vestibular schwannomas)',
      'Endocrine dysfunction (in pituitary tumors)'
    ],
    earlyWarningSigns: 'A new type of progressive headache worsening with coughing, bending forward, or straining (Valsalva maneuvers).',
    possibleCauses: 'Genetic mutations (TP53, IDH1/IDH2, EGFR amplification, 1p/19q codeletion) leading to uncontrolled cell proliferation. Metastatic spread from primary tumors in lung, breast, colon, or kidney.',
    riskFactors: 'Prior exposure to ionizing cranial radiation, rare genetic syndromes (Neurofibromatosis Type 1 and 2, Li-Fraumeni syndrome, Von Hippel-Lindau disease), advanced age.',
    typesAndStages: 'WHO Grading System (Grades 1 to 4): Grade 1 (benign, slow-growing, e.g., Pilocytic astrocytoma); Grade 2 (low-grade, e.g., diffuse astrocytoma); Grade 3 (anaplastic, malignant); Grade 4 (highly aggressive, glioblastoma multiforme - central necrosis, microvascular proliferation).',
    evaluation: 'Comprehensive neurological exam followed by contrast-enhanced multi-sequence MRI Brain with spectroscopy and perfusion.',
    diagnosticInvestigations: 'MRI Brain with and without IV Gadolinium (T1, T2, FLAIR, DWI, Perfusion-weighted, and MR Spectroscopy), CT Head (identifies calcifications and acute hemorrhage), Stereotactic biopsy or surgical resection for histological and molecular neuropathology.',
    relevantTests: 'Contrast Brain MRI, MR Spectroscopy (elevated choline/creatine ratio, reduced NAA), Whole-body PET-CT (for metastatic search), Lumbar Puncture (for cytology in leptomeningeal disease).',
    treatmentOptions: 'Multidisciplinary approach: Maximal safe neurosurgical resection, Stereotactic Radiosurgery (Gamma Knife / CyberKnife), External Beam Radiotherapy, Chemotherapy, and Tumor Treating Fields (TTF).',
    medicinesExplanation: '1) Dexamethasone (corticosteroid) to rapidly reduce peritumoral vasogenic edema; 2) Anti-seizure medications (Levetiracetam) for seizure prophylaxis/treatment; 3) Chemotherapy: Alkylating agents (Temozolomide - Stupp Protocol for Glioblastoma) combined with radiation.',
    lifestyleAndRehab: 'Physical therapy, occupational therapy, speech and language therapy, cognitive rehabilitation, nutritional support, palliative supportive care.',
    possibleComplications: 'Herniation syndromes (subfalcine, uncal, tonsillar) from elevated intracranial pressure; venous thromboembolism; treatment-related radionecrosis.',
    preventionAndRiskReduction: 'Minimizing exposure to unnecessary ionizing radiation. No proven lifestyle modifications for primary brain tumors; general cancer prevention for metastatic tumors.',
    whenToConsultNeurologist: 'Any new-onset adult seizure, progressive one-sided weakness, or persistent headache accompanied by nausea warrants prompt neuro-oncological evaluation.',
    emergencyWarningSigns: 'Sudden loss of consciousness, repetitive seizures without regaining consciousness (status epilepticus), sudden pupillary asymmetry, or signs of brain herniation.',
    faqs: [
      { q: 'Are all brain tumors cancerous?', a: 'No. Approximately two-thirds of primary brain tumors (such as meningiomas and schwannomas) are benign or low-grade, though they may still require treatment if they compress vital brain structures.' },
      { q: 'What is Glioblastoma (GBM)?', a: 'Glioblastoma is the most common and aggressive primary malignant brain tumor in adults (WHO Grade 4), requiring combined surgery, radiation, and chemotherapy.' }
    ],
    trustedReferences: [
      { name: 'NINDS Brain and Spinal Tumors Guide', url: 'https://www.ninds.nih.gov/health-information/disorders/brain-and-spinal-tumors', date: '2025' },
      { name: 'National Brain Tumor Society (NBTS)', url: 'https://braintumor.org', date: '2024' },
      { name: 'WHO Classification of Tumors of the Central Nervous System', url: 'https://www.who.int', date: '2021/2024' }
    ]
  },
  {
    id: 'meningitis',
    categoryId: 'infections',
    name: 'Meningitis (Bacterial, Viral & Fungal)',
    simpleExplanation: 'An acute, potentially life-threatening infection and inflammation of the protective membranes (meninges) that cover the brain and spinal cord.',
    medicalDefinition: 'Inflammatory infiltration of the leptomeninges and cerebrospinal fluid (CSF) in the subarachnoid space, caused by bacterial, viral, fungal, or non-infectious etiologies.',
    affectedRegion: 'Leptomeninges (pia mater and arachnoid mater), subarachnoid space, and ventricular system',
    target3DNodes: ['left-lateral-ventricle', 'right-lateral-ventricle', 'third-ventricle', 'fourth-ventricle', 'cerebellum'],
    commonSymptoms: [
      'High sudden fever with severe chills',
      'Severe, throbbing, generalized headache',
      'Nuchal rigidity (marked neck stiffness: chin cannot touch chest)',
      'Altered mental status, confusion, drowsiness, or difficulty waking up'
    ],
    lessCommonSymptoms: [
      'Photophobia (extreme sensitivity to bright light)',
      'Petechial or purpuric skin rash (classic for Neisseria meningitidis / meningococcal disease)',
      'Seizures',
      'Positive Kernig and Brudzinski signs on physical exam'
    ],
    earlyWarningSigns: 'Flu-like symptoms rapidly progressing to excruciating headache, neck stiffness, and confusion within 12-24 hours.',
    possibleCauses: 'Bacterial: Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae, Listeria monocytogenes (in elderly/infants). Viral: Enteroviruses, Herpes simplex virus (HSV-2), Varicella zoster. Fungal: Cryptococcus neoformans (in immunocompromised).',
    riskFactors: 'Lack of vaccination (Meningococcal, Pneumococcal, Hib), crowded living conditions (dormitories, military barracks), immunosuppression (HIV, splenectomy, chemotherapy), skull fractures.',
    typesAndStages: 'Acute bacterial meningitis (medical emergency with high mortality), Aseptic/Viral meningitis (generally less severe, self-limiting), Chronic/Fungal meningitis, Tuberculosis meningitis.',
    evaluation: 'Immediate emergency clinical evaluation. Lumbar puncture (LP) is the definitive diagnostic procedure; blood cultures should be drawn immediately without delaying empiric antibiotics.',
    diagnosticInvestigations: 'Lumbar Puncture (CSF opening pressure, white cell count with differential, protein, glucose, Gram stain, bacterial culture, PCR panel), Blood cultures x2, Non-contrast CT Head before LP if focal deficits or altered mental status are present.',
    relevantTests: 'CSF analysis (Gram stain, PCR BioFire panel, protein, glucose), Blood cultures, CBC, Procalcitonin, Head CT.',
    treatmentOptions: 'EMERGENCY: Immediate intravenous broad-spectrum bactericidal antibiotics and corticosteroids started within 1 hour of arrival.',
    medicinesExplanation: 'Empiric Bacterial Protocol: IV Ceftriaxone (or Cefotaxime) + IV Vancomycin (+ IV Ampicillin if Listeria is suspected in patients >50 or immunocompromised). IV Dexamethasone given with or before the first dose of antibiotics to reduce neurological hearing loss and cerebral edema. Antiviral: IV Acyclovir if HSV encephalitis is suspected.',
    lifestyleAndRehab: 'Hearing evaluation following recovery (sensorineural hearing loss is a common complication). Neuro-rehabilitation for cognitive or motor deficits.',
    possibleComplications: 'Sensorineural hearing loss (most common sequela), hydrocephalus, cerebral edema, focal neurological deficits, septic shock, disseminated intravascular coagulation (DIC).',
    preventionAndRiskReduction: 'Vaccination (Meningococcal conjugate MenACWY and MenB, Pneumococcal PCV, Hib). Chemoprophylaxis (Rifampin or Ciprofloxacin) for close household contacts of meningococcal cases.',
    whenToConsultNeurologist: 'EMERGENCY. Any patient presenting with high fever, neck stiffness, and confusion requires immediate 911/112 hospitalization.',
    emergencyWarningSigns: 'Rapidly spreading purple rash (purpura fulminans), unresponsiveness, or seizures with fever.',
    faqs: [
      { q: 'Is bacterial meningitis contagious?', a: 'Yes. Bacteria like Neisseria meningitidis spread through respiratory droplets and saliva (coughing, kissing). Close contacts require preventive prophylactic antibiotics.' },
      { q: 'What is the glass test for meningitis rash?', a: 'Pressing a clear drinking glass firmly against the purple/red rash: if the spots do NOT fade under pressure (non-blanching rash), it indicates a medical emergency.' }
    ],
    trustedReferences: [
      { name: 'CDC Meningitis Guidelines', url: 'https://www.cdc.gov/meningitis/index.html', date: '2024' },
      { name: 'WHO Meningitis Fact Sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/meningitis', date: '2024' },
      { name: 'NINDS Meningitis and Encephalitis Information', url: 'https://www.ninds.nih.gov/health-information/disorders/meningitis-and-encephalitis', date: '2025' }
    ]
  },

  // ==========================================
  // CATEGORY C: STROKE & VASCULAR DISORDERS
  // ==========================================
  {
    id: 'ischemic-stroke',
    categoryId: 'stroke',
    name: 'Acute Ischemic Stroke & TIA',
    simpleExplanation: 'A life-threatening medical emergency where a blood clot blocks an artery supplying blood to the brain, starving brain cells of oxygen and causing rapid cell death unless treated immediately.',
    medicalDefinition: 'An acute focal neurological deficit of vascular origin lasting >24 hours or with neuroimaging evidence of acute cerebral infarction, caused by arterial occlusion due to thrombosis, thromboembolism, or systemic hypoperfusion.',
    affectedRegion: 'Vascular territories of Middle Cerebral Artery (MCA), Anterior Cerebral Artery (ACA), or Posterior Cerebral Artery (PCA)',
    target3DNodes: ['left-precentral-gyrus', 'right-precentral-gyrus', 'left-inferior-frontal-gyrus', 'left-internal-capsule', 'right-internal-capsule', 'posterior-part-of-superior-temporal-gyrus'],
    commonSymptoms: [
      'F: Facial drooping (one side of the face is numb or droops when smiling)',
      'A: Arm weakness (sudden weakness or numbness in one arm/leg, drift when raised)',
      'S: Speech difficulty (slurred speech, inability to speak, or difficulty understanding language)',
      'T: Time to call emergency services (112 / 911) immediately'
    ],
    lessCommonSymptoms: [
      'Sudden loss of vision in one eye (amaurosis fugax) or half of the visual field (hemianopia)',
      'Sudden severe dizziness, loss of balance, or inability to walk without a known cause',
      'Sudden confusion, spatial neglect, or severe headache'
    ],
    earlyWarningSigns: 'Transient Ischemic Attack (TIA or "mini-stroke"): temporary stroke symptoms lasting minutes to hours that completely resolve, serving as a critical warning before a full stroke.',
    possibleCauses: 'Large artery atherosclerosis (carotid stenosis), cardioembolism (Atrial Fibrillation, mural thrombi), small vessel occlusion (lacunar stroke from hypertension/diabetes), cryptogenic stroke, or arterial dissection.',
    riskFactors: 'Hypertension (leading risk factor), Atrial Fibrillation, diabetes mellitus, smoking, hyperlipidemia, obesity, sedentary lifestyle, previous TIA, obstructive sleep apnea.',
    typesAndStages: 'Classified by TOAST criteria: 1) Large-artery atherosclerosis; 2) Cardioembolism; 3) Small-vessel occlusion (lacune); 4) Stroke of other determined etiology (dissection, vasculitis); 5) Stroke of undetermined etiology.',
    evaluation: 'Urgent CODE STROKE emergency triage: Immediate non-contrast Head CT or MRI to exclude hemorrhage, followed by CT Angiography / CT Perfusion.',
    diagnosticInvestigations: 'Non-contrast Head CT (rules out hemorrhage), MRI Brain with Diffusion-Weighted Imaging (DWI) - highly sensitive for acute infarction within minutes; CT/MR Angiography of head and neck; Echocardiogram and 24-48h Holter monitoring.',
    relevantTests: 'Head CT non-contrast, MRI DWI/ADC, CTA/CTP, ECG, Blood glucose, Coagulation panel (PT/INR, PTT), Lipid profile, HbA1c.',
    treatmentOptions: 'Time-critical revascularization: Intravenous thrombolysis with Tenecteplase / Alteplase (within 4.5 hours of symptom onset) and Mechanical Thrombectomy (EVT) for large vessel occlusions (within 6 to 24 hours).',
    medicinesExplanation: 'Acute: IV Alteplase / Tenecteplase (fibrinolytic clot-busting agent). Secondary Prevention: Antiplatelet therapy (Aspirin, Clopidogrel), Anticoagulation (DOACs like Apixaban/Rivaroxaban for atrial fibrillation), High-intensity statin (Atorvastatin 80mg), and Antihypertensives.',
    lifestyleAndRehab: 'Multi-disciplinary stroke rehabilitation: physical therapy, occupational therapy, speech therapy, swallowing assessment, DASH/Mediterranean diet, smoking cessation.',
    possibleComplications: 'Hemorrhagic transformation of infarct, cerebral edema and herniation (malignant MCA syndrome requiring decompressive craniectomy), post-stroke depression, aspiration pneumonia, deep vein thrombosis.',
    preventionAndRiskReduction: '80% of strokes are preventable: optimal blood pressure control (<130/80 mmHg), anticoagulation for atrial fibrillation, smoking cessation, cholesterol management, 150 min/week moderate exercise.',
    whenToConsultNeurologist: 'THIS IS A MEDICAL EMERGENCY. CALL 112 / 911 IMMEDIATELY. "TIME IS BRAIN" - 1.9 million neurons die every minute an artery remains blocked.',
    emergencyWarningSigns: 'FAST signs: Face droop, Arm weakness, Speech difficulty, sudden vision loss or loss of balance.',
    faqs: [
      { q: 'What is the "golden window" for stroke treatment?', a: 'Intravenous clot-busting drugs (Tenecteplase/Alteplase) must be given within 4.5 hours of symptom onset. Mechanical thrombectomy can be performed up to 24 hours in selected patients with salvageable brain tissue.' },
      { q: 'Is a TIA dangerous if the symptoms went away?', a: 'Yes! A TIA is a major medical emergency. Nearly 1 in 5 people who suffer a TIA will suffer a full, disabling stroke within 90 days, with the highest risk in the first 48 hours.' }
    ],
    trustedReferences: [
      { name: 'American Heart Association / American Stroke Association Guidelines', url: 'https://www.stroke.org', date: '2024' },
      { name: 'NINDS Stroke Information Page', url: 'https://www.ninds.nih.gov/health-information/disorders/stroke', date: '2025' },
      { name: 'WHO Stroke Guidance', url: 'https://www.who.int/health-topics/cardiovascular-diseases', date: '2024' }
    ]
  },

  // ==========================================
  // CATEGORY D: SEIZURE & EPILEPSY DISORDERS
  // ==========================================
  {
    id: 'epilepsy-disorders',
    categoryId: 'epilepsy',
    name: 'Epilepsy & Seizure Disorders',
    simpleExplanation: 'A chronic neurological condition where abnormal bursts of electrical activity in the brain trigger recurrent, unprovoked seizures causing jerking movements, temporary confusion, or loss of awareness.',
    medicalDefinition: 'A disease of the brain defined by: 1) At least two unprovoked seizures occurring >24 hours apart; 2) One unprovoked seizure with a >60% probability of further seizures over the next 10 years; or 3) Diagnosis of an epilepsy syndrome (ILAE 2017 definition).',
    affectedRegion: 'Cerebral cortex, Hippocampus, Mesial temporal lobe, or generalized thalamocortical networks',
    target3DNodes: ['left-hippocampus', 'right-hippocampus', 'left-middle-temporal-gyrus', 'right-middle-temporal-gyrus', 'thalamus', 'thalamus-1'],
    commonSymptoms: [
      'Generalized Tonic-Clonic: sudden cry, body stiffening (tonic phase) followed by rhythmic jerking (clonic phase) and loss of consciousness',
      'Focal Seizure with Impaired Awareness: staring blankly, repetitive lip smacking, chewing, fumbling with hands',
      'Absence Seizure (Petit Mal): brief 5-10 second episodes of staring into space with immediate recovery (common in children)',
      'Postictal state: confusion, headache, extreme fatigue, and muscle soreness after the seizure'
    ],
    lessCommonSymptoms: [
      'Myoclonic jerks: brief shock-like muscle twitches without loss of consciousness',
      'Atonic seizures ("drop attacks"): sudden loss of muscle tone causing falls',
      'Sensory aura: rising stomach sensation (epigastric aura), strange smells (burnt rubber), déjà vu, or visual sparkles'
    ],
    earlyWarningSigns: 'Aura symptoms (rising epigastric warmth, sudden intense fear, olfactory/taste hallucinations) occurring seconds to minutes before a focal seizure spreads.',
    possibleCauses: 'Structural (stroke, traumatic brain injury, hippocampal sclerosis, cortical dysplasia), Genetic (channelopathies), Infectious (neurocysticercosis, meningitis), Metabolic, Immune (autoimmune encephalitis), or Unknown (idiopathic).',
    riskFactors: 'Prior brain injury, stroke, brain infections, family history of epilepsy, prolonged febrile seizures in childhood, Alzheimer\'s disease.',
    typesAndStages: 'ILAE Classification: Focal Onset (Aware vs Impaired Awareness, Motor vs Non-motor), Generalized Onset (Motor: tonic-clonic, atonic; Non-motor: absence), and Unknown Onset. Status Epilepticus: prolonged seizure lasting >5 minutes (medical emergency).',
    evaluation: 'Detailed witness description of the event. Video-EEG monitoring, High-resolution 3T Epilepsy Protocol MRI, and neurological examination.',
    diagnosticInvestigations: 'Electroencephalogram (EEG: routine, sleep-deprived, or continuous video-EEG monitoring to identify epileptiform spikes and sharp waves), High-resolution 3 Tesla MRI Brain with coronal oblique T2/FLAIR cuts perpendicular to long axis of hippocampus.',
    relevantTests: 'Routine & Sleep-deprived EEG, 3T MRI Epilepsy Protocol, Blood electrolytes, Calcium, Magnesium, Liver/Renal panel, Toxicology.',
    treatmentOptions: 'Anti-seizure medications (ASMs / AEDs), Epilepsy surgery (resective surgery, laser interstitial thermal therapy - LITT), Neurostimulation (Vagus Nerve Stimulation - VNS, Responsive Neurostimulation - RNS), Ketogenic dietary therapy.',
    medicinesExplanation: 'Anti-Seizure Medications (ASMs): 1) Broad-spectrum: Levetiracetam, Lamotrigine, Valproate (contraindicated in women of childbearing potential due to teratogenicity), Topiramate; 2) Narrow-spectrum for focal seizures: Carbamazepine, Oxcarbazepine, Lacosamide. Emergency rescue: Buccal Midazolam, Rectal Diazepam, or IV Lorazepam for prolonged seizures.',
    lifestyleAndRehab: 'Strict medication adherence (skipping doses is the #1 trigger for breakthrough seizures), consistent sleep schedule, avoiding alcohol and recreational drugs, seizure safety precautions (shower instead of bath, swimming only with direct supervision).',
    possibleComplications: 'Status Epilepticus (seizure >5 minutes causing brain hypoxia), Sudden Unexpected Death in Epilepsy (SUDEP), trauma and fractures from falls, aspiration pneumonia.',
    preventionAndRiskReduction: 'Helmet use to prevent head trauma, prompt treatment of high fevers in infants, controlling vascular risk factors to prevent stroke-induced epilepsy.',
    whenToConsultNeurologist: 'Any first-time seizure requires prompt neurological evaluation and EEG testing. Patients with ongoing seizures despite one medication should be evaluated at a specialized Comprehensive Epilepsy Center.',
    emergencyWarningSigns: 'Seizure lasting longer than 5 minutes, second seizure occurring before regaining consciousness, breathing difficulty, seizure occurring in water, or patient remains unresponsive.',
    faqs: [
      { q: 'What is the correct first aid during a seizure?', a: 'Keep calm, turn the person gently onto their side (recovery position) to keep the airway clear, protect their head with something soft, time the seizure. NEVER put anything inside their mouth and NEVER restrain their limbs.' },
      { q: 'Can epilepsy be cured?', a: 'Around 70% of individuals can achieve complete seizure freedom with the right medication. In selected patients with focal lesions (like mesial temporal sclerosis), epilepsy surgery can provide a definitive cure.' }
    ],
    trustedReferences: [
      { name: 'International League Against Epilepsy (ILAE)', url: 'https://www.ilae.org', date: '2024' },
      { name: 'Epilepsy Foundation', url: 'https://www.epilepsy.com', date: '2025' },
      { name: 'NINDS Epilepsy Information Page', url: 'https://www.ninds.nih.gov/health-information/disorders/epilepsy', date: '2025' }
    ]
  },

  // ==========================================
  // CATEGORY E: MOVEMENT DISORDERS
  // ==========================================
  {
    id: 'parkinsons-disease',
    categoryId: 'movement',
    name: 'Parkinson\'s Disease',
    simpleExplanation: 'A progressive neurodegenerative disorder caused by the loss of dopamine-producing brain cells, leading to resting tremors, muscle stiffness, slow movements, and balance problems.',
    medicalDefinition: 'A progressive synucleinopathy characterized by the pathological accumulation of alpha-synuclein into Lewy bodies and progressive degeneration of dopaminergic neurons in the Substantia Nigra pars compacta.',
    affectedRegion: 'Substantia Nigra (Basal Ganglia circuitry), striatum, and autonomic brainstem nuclei',
    target3DNodes: ['midbrain', 'midbrain2', 'thalamus', 'thalamus-1', 'left-middle-frontal-gyrus', 'right-middle-frontal-gyrus'],
    commonSymptoms: [
      'Resting Tremor: rhythmic pill-rolling tremor in one hand, thumb, or leg at rest (disappears during purposeful action)',
      'Bradykinesia: slowness of voluntary movement, difficulty initiating steps, reduced arm swing when walking',
      'Rigidity: stiffness and resistance to passive limb movement ("cogwheel rigidity")',
      'Postural Instability: impaired balance leading to falls, shuffling gait with short, hurried steps (festinating gait)'
    ],
    lessCommonSymptoms: [
      'Micrographia: handwriting progressively becomes abnormally small and cramped',
      'Masked facies (hypomimia): reduced facial expression and blinking',
      'Hypophonia: soft, low-volume, monotone voice',
      'Freezing of gait: feet feel "glued" to the floor when turning or walking through doorways'
    ],
    earlyWarningSigns: 'Non-motor prodromal signs appearing years before tremors: loss of sense of smell (anosmia), REM Sleep Behavior Disorder (acting out violent dreams), chronic constipation, and mild depression.',
    possibleCauses: 'Progressive death of neuromelanin-containing dopaminergic neurons in the substantia nigra pars compacta. Misfolded alpha-synuclein aggregates (Lewy bodies). Genetic mutations (LRRK2, SNCA, GBA, PRKN) in 10-15% of cases; complex gene-environment interaction in the remainder.',
    riskFactors: 'Age over 60, male sex (1.5x higher risk), exposure to pesticides/herbicides (paraquat, rotenone), family history, well water consumption.',
    typesAndStages: 'Hoehn and Yahr Staging: Stage 1 (unilateral symptoms); Stage 2 (bilateral involvement without balance impairment); Stage 3 (mild-moderate bilateral disease, postural instability, physically independent); Stage 4 (severe disability, able to walk/stand unassisted); Stage 5 (wheelchair-bound or bedridden unless assisted).',
    evaluation: 'Clinical diagnosis based on Movement Disorder Society (MDS) criteria demonstrating bradykinesia plus either rest tremor or rigidity. Substantial motor improvement with levodopa trial.',
    diagnosticInvestigations: 'Brain MRI (typically normal in early idiopathic PD, helps rule out atypical parkinsonism, normal pressure hydrocephalus, or vascular stroke). DaTscan (SPECT scan with I-123 Ioflupane showing dopaminergic transporter deficit in the striatum).',
    relevantTests: 'Clinical MDS-UPDRS scoring, DaTscan (dopamine transporter SPECT), 3T Brain MRI, Autonomic testing, Smell identification test (UPSIT).',
    treatmentOptions: 'Dopaminergic replacement therapy, physical therapy, speech therapy (Lee Silverman Voice Treatment - LSVT), and Deep Brain Stimulation (DBS) for motor fluctuations.',
    medicinesExplanation: '1) Levodopa/Carbidopa (gold standard dopamine precursor); 2) Dopamine Agonists (Pramipexole, Ropinirole); 3) MAO-B inhibitors (Rasagiline, Selegiline); 4) COMT inhibitors (Entacapone) to prolong levodopa action; 5) Amantadine (for levodopa-induced dyskinesias). Important caution: Abruptly stopping levodopa can trigger life-threatening Parkinsonism-Hyperpyrexia syndrome.',
    lifestyleAndRehab: 'Intense regular aerobic exercise (cycling, boxing, dance/tango shown to promote neuroplasticity), fall prevention home modifications, swallowing exercises.',
    possibleComplications: 'Motor fluctuations ("on/off" periods) and dyskinesias (involuntary writhing movements) after years of levodopa; Parkinson\'s Disease Dementia (PDD); autonomic orthostatic hypotension; hallucinations.',
    preventionAndRiskReduction: 'Caffeine consumption and regular lifelong physical exercise are epidemiologically associated with a reduced risk of Parkinson\'s disease.',
    whenToConsultNeurologist: 'Any resting hand tremor, unexplained slowness of movement, or persistent gait changes warrants evaluation by a movement disorder specialist.',
    emergencyWarningSigns: 'Sudden inability to move or swallow, severe falls with head trauma, acute confusion, or high fever with extreme muscle rigidity.',
    faqs: [
      { q: 'Is Parkinson\'s disease fatal?', a: 'Parkinson\'s disease itself is not directly fatal, but advanced complications such as swallowing difficulties leading to aspiration pneumonia or falls with fractures can be life-threatening.' },
      { q: 'What is Deep Brain Stimulation (DBS)?', a: 'DBS is an advanced surgical procedure where electrodes are implanted into the Subthalamic Nucleus (STN) or Globus Pallidus to deliver electrical pulses, dramatically reducing tremors and motor fluctuations.' }
    ],
    trustedReferences: [
      { name: 'Movement Disorder Society (MDS) Clinical Diagnostic Criteria', url: 'https://www.movementdisorders.org', date: '2024' },
      { name: 'Parkinson\'s Foundation', url: 'https://www.parkinson.org', date: '2025' },
      { name: 'NINDS Parkinson\'s Disease Information', url: 'https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease', date: '2025' }
    ]
  },

  // ==========================================
  // CATEGORY F: MEMORY & COGNITIVE DISORDERS
  // ==========================================
  {
    id: 'alzheimers-disease',
    categoryId: 'cognitive',
    name: 'Alzheimer\'s Disease & Dementia',
    simpleExplanation: 'The most common cause of dementia, characterized by the progressive accumulation of abnormal protein plaques in the brain that gradually destroy memory, thinking, and daily independence.',
    medicalDefinition: 'A progressive neurodegenerative disorder histopathologically defined by extracellular beta-amyloid senile plaques and intracellular hyperphosphorylated tau neurofibrillary tangles, leading to widespread synaptic loss and cortical atrophy.',
    affectedRegion: 'Entorhinal cortex, Hippocampus, Temporoparietal association cortex, and Nucleus Basalis of Meynert',
    target3DNodes: ['left-hippocampus', 'right-hippocampus', 'left-parahippocampal-gyrus', 'right-parahippocampal-gyrus', 'left-lateral-ventricle', 'right-lateral-ventricle'],
    commonSymptoms: [
      'Short-term episodic memory loss: forgetting recently learned information, conversations, or appointments',
      'Asking the same questions repeatedly',
      'Difficulty planning, managing finances, or solving simple daily problems',
      'Getting lost in familiar neighborhood environments (topographical disorientation)',
      'Losing track of dates, seasons, and the passage of time'
    ],
    lessCommonSymptoms: [
      'Difficulty finding the right words (anomia) or following a conversation',
      'Misplacing items in bizarre places (e.g., wallet inside the refrigerator)',
      'Changes in personality, uncharacteristic suspicion, paranoia, agitation, or apathy',
      'Poor judgment (e.g., falling victim to financial scams, neglecting personal hygiene)'
    ],
    earlyWarningSigns: 'Mild Cognitive Impairment (MCI): measurable decline in short-term memory that is noticeable to family members but does not yet significantly interfere with daily independent activities.',
    possibleCauses: 'Amyloid cascade hypothesis: abnormal cleavage of Amyloid Precursor Protein (APP) into neurotoxic Beta-Amyloid (Aβ42) peptide plaques, triggering Tau hyperphosphorylation, neurofibrillary tangle formation, neuroinflammation, and progressive cholinergic neuron loss.',
    riskFactors: 'Advancing age (strongest risk factor, 1 in 3 seniors over 85), Apolipoprotein E epsilon 4 (APOE-ε4) allele, cardiovascular risk factors (hypertension, diabetes, midlife obesity), history of traumatic brain injury, low cognitive reserve.',
    typesAndStages: 'Preclinical Alzheimer\'s -> Mild Cognitive Impairment (MCI) -> Mild Dementia (independent with assistance) -> Moderate Dementia (requires help with dressing/bathing, wandering risk) -> Severe Dementia (complete loss of verbal communication and bedridden).',
    evaluation: 'Standardized cognitive testing (Mini-Mental State Exam - MMSE, Montreal Cognitive Assessment - MoCA), comprehensive clinical history from a caregiver, and biomarker neuroimaging.',
    diagnosticInvestigations: 'Volumetric Brain MRI (quantifying medial temporal lobe atrophy - Scheltens MTA scale), Amyloid and Tau PET imaging, CSF biomarker analysis (Aβ42/Aβ40 ratio, phosphorylated tau, total tau), blood-based biomarkers (p-tau217, p-tau181).',
    relevantTests: 'Volumetric 3T Brain MRI, Amyloid-PET, Plasma p-tau217 blood test, Lumbar puncture CSF analysis, Neuropsychological battery, Vitamin B12, TSH, Syphilis serology.',
    treatmentOptions: 'Cholinesterase inhibitors, NMDA receptor antagonist, disease-modifying anti-amyloid monoclonal antibodies, cognitive stimulation, and caregiver support.',
    medicinesExplanation: 'Symptomatic: 1) Acetylcholinesterase Inhibitors (Donepezil, Rivastigmine, Galantamine) boosting acetylcholine levels; 2) NMDA receptor antagonist (Memantine) protecting against glutamate excitotoxicity in moderate-severe stages. Disease-Modifying: Amyloid-clearing monoclonal antibodies (Lecanemab, Donanemab) for early-stage Alzheimer\'s with regular MRI monitoring for Amyloid-Related Imaging Abnormalities (ARIA).',
    lifestyleAndRehab: 'MIND / Mediterranean diet, regular aerobic exercise, cognitive stimulation (puzzles, reading, learning new skills), hearing loss correction, structured daily routines, and home safety adaptations.',
    possibleComplications: 'Severe loss of independence, malnutrition, aspiration pneumonia, severe falls, wandering and getting lost, caregiver burnout.',
    preventionAndRiskReduction: 'Lancet Commission estimates up to 40% of dementias could be prevented or delayed by addressing 12 modifiable risk factors: managing blood pressure, treating hearing loss, avoiding smoking, managing diabetes, preventing head injury, and staying socially active.',
    whenToConsultNeurologist: 'When memory loss interferes with daily activities, when repetitive questioning becomes frequent, or when confusion with time and place occurs.',
    emergencyWarningSigns: 'Sudden acute worsening of confusion over hours or days (indicates Delirium, often triggered by a urinary tract infection or metabolic disturbance), acute hallucinations, or wandering into dangerous environments.',
    faqs: [
      { q: 'Is Alzheimer\'s disease an inevitable part of normal aging?', a: 'No! Normal aging involves mild slowing of information retrieval, but Alzheimer\'s is a distinct neurodegenerative disease that destroys brain architecture.' },
      { q: 'What is the new blood test for Alzheimer\'s?', a: 'New blood tests measuring phosphorylated tau (p-tau217) can now detect Alzheimer\'s pathology with over 90% accuracy, matching the accuracy of expensive PET scans and lumbar punctures.' }
    ],
    trustedReferences: [
      { name: 'Alzheimer\'s Association Facts and Figures', url: 'https://www.alz.org', date: '2024' },
      { name: 'National Institute on Aging (NIA/NIH)', url: 'https://www.nia.nih.gov/health/alzheimers', date: '2025' },
      { name: 'Lancet Commission on Dementia Prevention, Intervention, and Care', url: 'https://www.thelancet.com', date: '2024' }
    ]
  },

  // ==========================================
  // CATEGORY G: NERVE & PERIPHERAL NERVOUS SYSTEM
  // ==========================================
  {
    id: 'peripheral-neuropathy',
    categoryId: 'nerve',
    name: 'Peripheral & Diabetic Neuropathy',
    simpleExplanation: 'Damage to the peripheral nerves outside the brain and spinal cord, causing numbness, burning tingling, and stabbing pain, typically beginning in the feet and hands ("stocking-glove" pattern).',
    medicalDefinition: 'A disorder of the peripheral nervous system characterized by axonal degeneration or demyelination of sensory, motor, or autonomic nerve fibers, predominantly presenting as distal symmetrical polyneuropathy.',
    affectedRegion: 'Distal peripheral sensory and motor axons (sciatic, peroneal, tibial, median, and ulnar nerves)',
    target3DNodes: ['left-postcentral-gyrus', 'right-postcentral-gyrus', 'medulla-oblongata', 'pons'],
    commonSymptoms: [
      'Gradual onset of numbness, prickling, or tingling in the feet or hands ("pins and needles")',
      'Burning, freezing, or lancinating electric shock-like nerve pain, worse at night',
      'Extreme sensitivity to touch (allodynia: even bedsheets resting on feet cause pain)',
      'Feeling as if wearing an invisible sock or glove'
    ],
    lessCommonSymptoms: [
      'Loss of balance and unsteadiness in the dark (due to lost proprioceptive position sense in feet)',
      'Muscle weakness and foot drop (tripping over own toes)',
      'Autonomic neuropathy: dizziness when standing (orthostatic hypotension), delayed stomach emptying (gastroparesis), abnormal sweating'
    ],
    earlyWarningSigns: 'Mild tingling or loss of vibration sense in the big toes detected during routine diabetic foot checkups.',
    possibleCauses: 'Diabetes mellitus (most common cause: chronic hyperglycemia causing microvascular sorbitol accumulation and oxidative stress), Vitamin B12 deficiency, chronic alcohol abuse, chemotherapy (taxanes, platinum compounds), autoimmune diseases (Sjögren\'s, lupus), kidney disease, thyroid dysfunction.',
    riskFactors: 'Poorly controlled blood glucose (HbA1c >7%), long duration of diabetes, heavy alcohol use, strict vegan diet without B12 supplementation, exposure to heavy metals or chemotherapy.',
    typesAndStages: 'Sensory polyneuropathy, Motor neuropathy, Autonomic neuropathy, Mononeuropathy (e.g., Carpal Tunnel Syndrome), Mononeuropathy multiplex, Radiculopathy.',
    evaluation: 'Comprehensive neurological examination evaluating light touch, pinprick, temperature, vibration (128Hz tuning fork), ankle reflexes, and gait.',
    diagnosticInvestigations: 'Nerve Conduction Studies (NCS) and Electromyography (EMG) to differentiate axonal vs demyelinating neuropathy and determine large fiber involvement. Skin biopsy for Intraepidermal Nerve Fiber Density (IENFD) for small-fiber neuropathy.',
    relevantTests: 'EMG/NCS, Fasting blood glucose & HbA1c, Serum Vitamin B12 & Methylmalonic Acid (MMA), TSH, Serum Protein Electrophoresis with immunofixation (SPEP/IFE), Renal & Liver function panel.',
    treatmentOptions: 'Rigorous management of underlying cause (e.g. strict glycemic control in diabetes); neuropathic pain pharmacotherapy; physical therapy; daily foot inspection.',
    medicinesExplanation: 'Neuropathic Pain Pharmacotherapy (does not reverse nerve damage, manages pain): 1) Gabapentinoids (Pregabalin, Gabapentin); 2) SNRIs (Duloxetine); 3) Tricyclic antidepressants (Amitriptyline); 4) Topical agents (Capsaicin 8% patch, Lidocaine 5% patch). Regular opioids are generally avoided due to dependence and lack of long-term efficacy.',
    lifestyleAndRehab: 'Daily foot examination for blisters, cuts, or ulcers (insensate feet can develop unnoticed sores leading to infection); well-fitting orthopedic diabetic shoes; avoiding walking barefoot; smoking cessation.',
    possibleComplications: 'Diabetic foot ulcers, osteomyelitis (bone infection), Charcot neuroarthropathy, severe gangrene requiring lower limb amputation, recurrent falls.',
    preventionAndRiskReduction: 'Strict glycemic control (HbA1c target <7%) prevents or halts progression in 60% of diabetic neuropathy cases. Avoiding excessive alcohol. B12 supplementation for vegans.',
    whenToConsultNeurologist: 'When tingling, burning, or numbness begins to spread above the ankles, when balance is affected, or if unexplained foot weakness develops.',
    emergencyWarningSigns: 'Rapidly ascending numbness and weakness moving up the legs to the chest within days (indicative of Guillain-Barré Syndrome), or an infected painless foot ulcer with fever.',
    faqs: [
      { q: 'Can damaged peripheral nerves heal?', a: 'Peripheral nerves can regenerate very slowly (approx. 1 mm per day) if the underlying cause (like vitamin deficiency or high blood sugar) is corrected early, but chronic long-standing nerve damage is often permanent.' },
      { q: 'Why is nerve pain worse at night in bed?', a: 'At night, there are fewer sensory distractions, and temperature changes in bed can trigger hyperactive damaged nerve fibers to fire pain signals.' }
    ],
    trustedReferences: [
      { name: 'NINDS Peripheral Neuropathy Fact Sheet', url: 'https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy', date: '2025' },
      { name: 'American Diabetes Association (ADA) Neuropathy Guidelines', url: 'https://diabetesjournals.org', date: '2024' },
      { name: 'Mayo Clinic - Peripheral Neuropathy', url: 'https://www.mayoclinic.org/diseases-conditions/peripheral-neuropathy', date: '2024' }
    ]
  },
  {
    id: 'trigeminal-neuralgia',
    categoryId: 'nerve',
    name: 'Trigeminal Neuralgia',
    simpleExplanation: 'An agonizing nerve disorder causing sudden, explosive, electric shock-like facial pain triggered by light touches such as brushing teeth, washing the face, or chewing.',
    medicalDefinition: 'A severe neuropathic facial pain disorder characterized by recurrent unilateral brief electric shock-like paroxysmal pains in the distribution of one or more divisions of the fifth cranial (trigeminal) nerve.',
    affectedRegion: 'Trigeminal nerve (Cranial Nerve V), root entry zone at the pons, and spinal trigeminal nucleus',
    target3DNodes: ['pons', 'pons2', 'left-postcentral-gyrus', 'right-postcentral-gyrus', 'thalamus'],
    commonSymptoms: [
      'Intense, sharp, stabbing, electric shock-like facial pain lasting from a fraction of a second up to two minutes',
      'Pain strictly confined to one side of the face (most often the cheek, jaw, lips, or teeth - V2/V3 divisions)',
      'Triggered by benign, non-painful stimuli: brushing teeth, washing face, applying makeup, chewing, smiling, or a cold breeze',
      'Pain-free refractory intervals between paroxysms'
    ],
    lessCommonSymptoms: [
      'A constant background dull aching or burning pain (Trigeminal Neuralgia Type 2 / atypical)',
      'Facial muscle spasms (tic douloureux) during peak pain paroxysms'
    ],
    earlyWarningSigns: 'Mild twinges of electric sensation or toothache-like discomfort that leads to multiple unnecessary dental extractions before correct diagnosis.',
    possibleCauses: 'Classical: neurovascular compression of the trigeminal nerve root entry zone by an aberrant arterial loop (most commonly the Superior Cerebellar Artery - SCA), causing focal demyelination and ephaptic cross-talk. Secondary: Multiple Sclerosis demyelinating plaque in the pons, or cerebellopontine angle tumor (acoustic neuroma, meningioma).',
    riskFactors: 'Age over 50, female sex (more common in women), history of Multiple Sclerosis, hypertension.',
    typesAndStages: 'Classical Trigeminal Neuralgia (neurovascular compression proven on MRI), Secondary Trigeminal Neuralgia (MS, tumor), Idiopathic Trigeminal Neuralgia (no clear lesion). Type 1 (>50% paroxysmal pain) vs Type 2 (>50% constant background burning pain).',
    evaluation: 'Detailed clinical history matching ICHD-3 criteria. Quantitative sensory testing. High-resolution MRI with constructive interference in steady state (CISS / FIESTA) sequences.',
    diagnosticInvestigations: 'High-resolution 3D T2 FIESTA / CISS Brain MRI dedicated to posterior fossa and cerebellopontine angle to visualize neurovascular conflict at the trigeminal root entry zone.',
    relevantTests: '3T FIESTA/CISS Brain MRI, Trigeminal Reflex Testing (blink reflex), Dental evaluation to rule out odontogenic causes.',
    treatmentOptions: 'First-line medical therapy with voltage-gated sodium channel blockers; Microvascular Decompression (MVD) neurosurgery; Stereotactic Radiosurgery (Gamma Knife); Percutaneous rhizotomy.',
    medicinesExplanation: 'First-line: Carbamazepine (gold standard; requires sodium monitoring and HLA-B*1502 genetic testing in Asian populations for Stevens-Johnson syndrome risk) or Oxcarbazepine. Second-line add-ons: Baclofen, Lamotrigine, Gabapentin. Standard analgesics and opioids are ineffective for trigeminal neuralgia.',
    lifestyleAndRehab: 'Identifying and gently avoiding specific trigger points on the face. Using lukewarm water to wash face and mouth; chewing on the unaffected side; protecting face from cold wind with a scarf.',
    possibleComplications: 'Severe malnutrition and dehydration (patients become terrified to eat or drink); profound depression and suicidal ideation; facial numbness or anesthesia dolorosa following surgical ablation.',
    preventionAndRiskReduction: 'No proven prevention for classical neurovascular compression. Early surgical decompression offers long-term pain relief in refractory cases.',
    whenToConsultNeurologist: 'Any unilateral electric shock-like facial pain, especially if triggered by light touch or chewing, warrants prompt neurological diagnosis.',
    emergencyWarningSigns: 'Severe inability to eat or drink for consecutive days leading to dehydration, or sudden vision changes.',
    faqs: [
      { q: 'Why do patients often visit dentists first for Trigeminal Neuralgia?', a: 'Because the trigeminal nerve innervates the upper and lower teeth and jaw (V2 and V3 branches), the agonizing pain frequently feels like an acute tooth abscess, leading to unnecessary root canals and tooth extractions.' },
      { q: 'What is Microvascular Decompression (MVD)?', a: 'MVD is a highly successful neurosurgical procedure (Jannetta procedure) where a neurosurgeon opens behind the ear, identifies the compressing artery, and places a tiny Teflon felt pad between the blood vessel and the trigeminal nerve, curing the pain without causing facial numbness.' }
    ],
    trustedReferences: [
      { name: 'NINDS Trigeminal Neuralgia Information Page', url: 'https://www.ninds.nih.gov/health-information/disorders/trigeminal-neuralgia', date: '2025' },
      { name: 'Facial Pain Association (FPA)', url: 'https://www.facepain.org', date: '2024' },
      { name: 'AAN-EAN Guidelines on Trigeminal Neuralgia Management', url: 'https://www.neurology.org', date: '2023' }
    ]
  },

  // ==========================================
  // CATEGORY H: SPINAL CORD & MULTIPLE SCLEROSIS
  // ==========================================
  {
    id: 'multiple-sclerosis',
    categoryId: 'spine',
    name: 'Multiple Sclerosis (MS)',
    simpleExplanation: 'An autoimmune disease where the body\'s immune system mistakenly attacks the protective myelin sheath covering nerve fibers in the brain and spinal cord, disrupting communication between the brain and body.',
    medicalDefinition: 'A chronic, immune-mediated inflammatory and neurodegenerative disease of the central nervous system characterized by multifocal demyelination, axonal transection, and reactive astrocytic gliosis disseminated in space and time.',
    affectedRegion: 'Periventricular white matter, optic nerves, brainstem, cerebellum, and spinal cord',
    target3DNodes: ['white-matter-of-left-cerebral-hemisphere', 'white-matter-of-right-cerebral-hemisphere', 'left-internal-capsule', 'right-internal-capsule', 'pons', 'pons2', 'cerebellum'],
    commonSymptoms: [
      'Optic Neuritis: sudden painful loss of vision or blurred vision in one eye, washed-out color vision (dyschromatopsia)',
      'Lhermitte\'s sign: electric shock sensation traveling down the spine into the limbs upon bending the neck forward',
      'Paresthesia: numbness, tingling, or "tight band" squeezing around the chest or abdomen ("MS hug")',
      'Limb weakness, muscle stiffness, and spasticity',
      'Ataxia, tremor, and balance difficulties'
    ],
    lessCommonSymptoms: [
      'Uhthoff\'s phenomenon: temporary worsening of neurological symptoms when body temperature rises (hot shower, fever, exercise)',
      'Neurogenic bladder and bowel dysfunction (urgency, incontinence, retention)',
      'Severe cognitive processing slowing and overwhelming pathological fatigue',
      'Internuclear Ophthalmoplegia (INO): impaired horizontal conjugate eye movement'
    ],
    earlyWarningSigns: 'A single acute neurological episode lasting >24 hours (Clinically Isolated Syndrome - CIS), such as unilateral optic neuritis or numbness in one leg that slowly resolves.',
    possibleCauses: 'Autoimmune attack orchestrated by autoreactive CD4+ and CD8+ T lymphocytes and B cells crossing the blood-brain barrier and attacking myelin basic protein and oligodendrocytes.',
    riskFactors: 'Epstein-Barr Virus (EBV) infection (nearly universal prerequisite), female sex (3:1 ratio), geographic latitude (higher rates further from the equator), Vitamin D deficiency, smoking, HLA-DRB1*15:01 genetic risk allele.',
    typesAndStages: '1) Relapsing-Remitting MS (RRMS - 85% of cases at onset: distinct acute relapses with partial or complete recovery); 2) Secondary Progressive MS (SPMS: gradual progressive worsening with or without relapses); 3) Primary Progressive MS (PPMS - 10-15%: continuous progression from onset).',
    evaluation: 'Revised McDonald Criteria (2017) requiring demonstration of dissemination of demyelinating lesions in space (DIS) and time (DIT) clinically or on MRI.',
    diagnosticInvestigations: 'MRI Brain and Spinal Cord with and without Gadolinium (T1, T2, FLAIR: demonstrates Dawson\'s fingers - ovoid lesions perpendicular to lateral ventricles; active gadolinium-enhancing lesions). Lumbar puncture for CSF analysis.',
    relevantTests: 'Contrast Brain & Spine MRI, CSF analysis (Oligoclonal Bands - OCBs and IgG index), Visual Evoked Potentials (VEP), Serum Aquaporin-4 (AQP4) and MOG antibodies (to exclude Neuromyelitis Optica spectrum disorder).',
    treatmentOptions: '1) Acute relapse management (high-dose IV corticosteroids); 2) Disease-Modifying Therapies (DMTs) to prevent relapses and slow disability accumulation; 3) Symptomatic therapy (spasticity, fatigue, bladder).',
    medicinesExplanation: 'Acute Relapses: IV Methylprednisolone (1000 mg/day for 3-5 days). Disease-Modifying Therapies (DMTs): Highly effective monoclonal antibodies: Ocrelizumab, Ofatumumab (anti-CD20 B-cell depleters), Natalizumab (alpha-4 integrin blocker), Alemtuzumab; Oral agents: Fingolimod, Siponimod (S1P receptor modulators), Dimethyl fumarate, Teriflunomide; Injectables: Interferon-beta, Glatiramer acetate. Symptomatic: Baclofen / Tizanidine for spasticity.',
    lifestyleAndRehab: 'Vitamin D3 supplementation, aerobic exercise and aquatic therapy in cool water, avoiding heat exposure, comprehensive neuro-rehabilitation, smoking cessation.',
    possibleComplications: 'Progressive permanent physical disability, wheelchair dependence, cognitive impairment, recurrent urinary tract infections, severe depression.',
    preventionAndRiskReduction: 'Maintaining adequate Vitamin D levels in youth, avoiding smoking, and early diagnosis and prompt high-efficacy DMT treatment to preserve long-term brain volume.',
    whenToConsultNeurologist: 'Any episode of sudden vision loss in one eye, unexplained limb weakness, or persistent numbness lasting more than 24 hours warrants prompt evaluation by an MS specialist.',
    emergencyWarningSigns: 'Acute severe paraparesis (inability to move both legs), sudden complete urinary retention, or rapidly descending spinal cord deficit.',
    faqs: [
      { q: 'Is Multiple Sclerosis a fatal disease?', a: 'MS is generally not a fatal condition; life expectancy is reduced by only about 5-7 years, and modern high-efficacy disease-modifying therapies allow most patients to live full, active lives.' },
      { q: 'What are "Dawson\'s Fingers" on an MRI?', a: 'Dawson\'s fingers are classic inflammatory demyelinating plaques seen on sagittal FLAIR MRI radiating perpendicularly from the corpus callosum and lateral ventricles along deep medullary venules.' }
    ],
    trustedReferences: [
      { name: 'National Multiple Sclerosis Society', url: 'https://www.nationalmssociety.org', date: '2025' },
      { name: 'NINDS Multiple Sclerosis Information Page', url: 'https://www.ninds.nih.gov/health-information/disorders/multiple-sclerosis', date: '2025' },
      { name: 'McDonald Criteria for Diagnosis of Multiple Sclerosis (Lancet Neurology)', url: 'https://www.thelancet.com', date: '2018/2024' }
    ]
  }
];

// Helper to look up disease by ID or fuzzy name match
export function getDiseaseById(id) {
  return NEUROLOGICAL_DISEASES.find(d => d.id === id);
}

export function searchDiseases(query) {
  const q = query.toLowerCase().trim();
  if (!q) return NEUROLOGICAL_DISEASES;

  return NEUROLOGICAL_DISEASES.filter(d => 
    d.name.toLowerCase().includes(q) ||
    d.simpleExplanation.toLowerCase().includes(q) ||
    d.commonSymptoms.some(s => s.toLowerCase().includes(q)) ||
    d.categoryId.toLowerCase().includes(q) ||
    d.affectedRegion.toLowerCase().includes(q)
  );
}
