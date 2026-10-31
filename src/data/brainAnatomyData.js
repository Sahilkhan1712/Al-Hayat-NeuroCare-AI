// NeuroCare AI - Comprehensive Neuroanatomical & Clinical Knowledge Base

export const LOBE_PALETTES = {
  frontal: {
    id: 'frontal',
    name: 'Frontal Lobe',
    color: '#ff2d75', // Glowing pink/red
    emissive: '#ff0055',
    glowColor: 'rgba(255, 45, 117, 0.6)',
    description: 'Executive functioning, motor control, expressive language (Broca), reasoning, and emotional regulation.',
    brodmann: 'BA 4, 6, 8, 9, 10, 11, 44, 45, 46, 47',
    primaryNeurotransmitter: 'Dopamine, Acetylcholine',
  },
  parietal: {
    id: 'parietal',
    name: 'Parietal Lobe',
    color: '#00e5ff', // Electric blue / cyan
    emissive: '#0088cc',
    glowColor: 'rgba(0, 229, 255, 0.6)',
    description: 'Somatosensory processing (touch, proprioception, temperature), visuospatial awareness, and sensory integration.',
    brodmann: 'BA 1, 2, 3, 5, 7, 39, 40',
    primaryNeurotransmitter: 'Glutamate, GABA',
  },
  temporal: {
    id: 'temporal',
    name: 'Temporal Lobe',
    color: '#ffb703', // Golden yellow / orange
    emissive: '#d97706',
    glowColor: 'rgba(255, 183, 3, 0.6)',
    description: 'Auditory processing, receptive language comprehension (Wernicke), semantic memory, and emotional valence.',
    brodmann: 'BA 20, 21, 22, 37, 38, 41, 42',
    primaryNeurotransmitter: 'Serotonin, Glutamate',
  },
  occipital: {
    id: 'occipital',
    name: 'Occipital Lobe',
    color: '#a855f7', // Violet / purple
    emissive: '#7e22ce',
    glowColor: 'rgba(168, 85, 247, 0.6)',
    description: 'Primary visual reception (striate cortex) and visual association processing (motion, color, spatial frequency).',
    brodmann: 'BA 17 (V1), 18 (V2), 19 (V3/V4/V5)',
    primaryNeurotransmitter: 'GABA, Glutamate',
  },
  cerebellum: {
    id: 'cerebellum',
    name: 'Cerebellum',
    color: '#f43f5e', // Contrasting pink / purple / magenta
    emissive: '#be123c',
    glowColor: 'rgba(244, 63, 94, 0.6)',
    description: 'Coordination of voluntary motor movement, postural equilibrium, fine-motor calibration, and procedural learning.',
    brodmann: 'Cerebellar Purkinje & Granule layers',
    primaryNeurotransmitter: 'GABA (Purkinje cells), Glutamate (Granule cells)',
  },
  brainstem: {
    id: 'brainstem',
    name: 'Brainstem',
    color: '#e2e8f0', // Realistic anatomical bone / neural ivory
    emissive: '#94a3b8',
    glowColor: 'rgba(226, 232, 240, 0.5)',
    description: 'Vital autonomic regulatory center (respiration, cardiac rhythm, arterial pressure), cranial nerve nuclei, and reticular activating system.',
    brodmann: 'Reticular formation & Cranial nuclei III - XII',
    primaryNeurotransmitter: 'Norepinephrine (Locus coeruleus), Serotonin (Raphe nuclei)',
  },
  subcortical: {
    id: 'subcortical',
    name: 'Limbic & Subcortical',
    color: '#10b981', // Emerald / Teal deep core
    emissive: '#047857',
    glowColor: 'rgba(16, 185, 129, 0.6)',
    description: 'Deep neural networks mediating episodic memory formation (hippocampus), sensory relay (thalamus), and homeostatic neuroendocrine control.',
    brodmann: 'Archicortex, Subcortical nuclei',
    primaryNeurotransmitter: 'Dopamine, Acetylcholine, Oxytocin',
  }
};

// Node-by-node mapping for all 65 GLB nodes
export const ANATOMICAL_STRUCTURES = {
  // Cerebellum
  'cerebellum': {
    name: 'Left Cerebellar Hemisphere',
    lobe: 'cerebellum',
    hemisphere: 'Left',
    functions: ['Ipsilateral limb coordination', 'Motor planning', 'Proprioceptive fine tuning'],
    clinicalNotes: 'Lesions cause left-sided ataxia, dysmetria, intention tremor, and dysdiadochokinesia.',
    bloodSupply: 'PICA, AICA, Superior Cerebellar Artery (SCA)'
  },
  'cerebellum2': {
    name: 'Right Cerebellar Hemisphere',
    lobe: 'cerebellum',
    hemisphere: 'Right',
    functions: ['Ipsilateral limb coordination', 'Postural stability', 'Procedural motor memory'],
    clinicalNotes: 'Right cerebellar infarct presents with rightward gait deviation and kinetic tremor.',
    bloodSupply: 'PICA, AICA, Superior Cerebellar Artery (SCA)'
  },

  // Brainstem
  'medulla-oblongata': {
    name: 'Medulla Oblongata (Left)',
    lobe: 'brainstem',
    hemisphere: 'Left',
    functions: ['Autonomic cardiac center', 'Respiratory rhythmicity', 'Vomiting and vasomotor reflex'],
    clinicalNotes: 'Lateral medullary syndrome (Wallenberg syndrome) via PICA occlusion.',
    bloodSupply: 'Vertebral artery, Anterior spinal artery, PICA'
  },
  'medulla-oblongata2': {
    name: 'Medulla Oblongata (Right)',
    lobe: 'brainstem',
    hemisphere: 'Right',
    functions: ['Cardiovascular control', 'Respiratory modulation', 'Pyramidal tract decussation'],
    clinicalNotes: 'Critical herniation site in elevated intracranial pressure (tonsillar herniation).',
    bloodSupply: 'Vertebral artery, Anterior spinal artery'
  },
  'pons': {
    name: 'Pons (Left)',
    lobe: 'brainstem',
    hemisphere: 'Left',
    functions: ['Cerebellar bridge', 'Cranial nerves V, VI, VII, VIII origin', 'Pneumotaxic center'],
    clinicalNotes: 'Pontine stroke can lead to Locked-in syndrome or Millard-Gubler syndrome.',
    bloodSupply: 'Basilar artery pontine branches'
  },
  'pons2': {
    name: 'Pons (Right)',
    lobe: 'brainstem',
    hemisphere: 'Right',
    functions: ['Sleep architecture (REM generation)', 'Vestibular signal transmission', 'Facial innervation'],
    clinicalNotes: 'Central pontine myelinolysis occurs with rapid sodium correction.',
    bloodSupply: 'Basilar artery'
  },
  'midbrain': {
    name: 'Midbrain (Left Mesencephalon)',
    lobe: 'brainstem',
    hemisphere: 'Left',
    functions: ['Substantia nigra dopamine output', 'Oculomotor nerve (CN III) control', 'Arousal'],
    clinicalNotes: 'Loss of dopaminergic neurons in substantia nigra causes Parkinsonian resting tremor.',
    bloodSupply: 'Posterior Cerebral Artery (PCA), Basilar tip'
  },
  'midbrain2': {
    name: 'Midbrain (Right Mesencephalon)',
    lobe: 'brainstem',
    hemisphere: 'Right',
    functions: ['Cerebral peduncle corticospinal conduit', 'Visual and auditory reflex relays', 'Red nucleus motor calibration'],
    clinicalNotes: 'Weber syndrome produces ipsilateral third nerve palsy with contralateral hemiparesis.',
    bloodSupply: 'Basilar tip, PCA'
  },
  'superior-colliculus': {
    name: 'Left Superior Colliculus',
    lobe: 'brainstem',
    hemisphere: 'Left',
    functions: ['Saccadic eye movement orientation', 'Multisensory gaze reflex'],
    clinicalNotes: 'Part of tectal plate, affected in Parinaud syndrome (dorsal midbrain syndrome).',
    bloodSupply: 'Quadrigeminal artery'
  },
  'left-superior-colliculus': {
    name: 'Left Superior Colliculus',
    lobe: 'brainstem',
    hemisphere: 'Left',
    functions: ['Visual tracking reflex', 'Tectospinal orienting reflexes'],
    clinicalNotes: 'Involved in conjugate vertical gaze paralysis.',
    bloodSupply: 'Quadrigeminal artery'
  },
  'right-superior-colliculus': {
    name: 'Right Superior Colliculus',
    lobe: 'brainstem',
    hemisphere: 'Right',
    functions: ['Visual tracking reflex', 'Saccadic gaze coordination'],
    clinicalNotes: 'Tectal glioma target structure.',
    bloodSupply: 'Quadrigeminal artery'
  },
  'inferior-colliculus': {
    name: 'Left Inferior Colliculus',
    lobe: 'brainstem',
    hemisphere: 'Left',
    functions: ['Auditory pathway relay', 'Sound localization in space'],
    clinicalNotes: 'Relays acoustic signals from lateral lemniscus to medial geniculate body.',
    bloodSupply: 'Superior cerebellar artery'
  },
  'right-inferior-colliculus': {
    name: 'Right Inferior Colliculus',
    lobe: 'brainstem',
    hemisphere: 'Right',
    functions: ['Auditory frequency discrimination', 'Binaural sound timing'],
    clinicalNotes: 'Crucial for auditory brainstem response (ABR wave V).',
    bloodSupply: 'Superior cerebellar artery'
  },

  // Frontal Lobe
  'left-superior-frontal-gyrus': {
    name: 'Left Superior Frontal Gyrus',
    lobe: 'frontal',
    hemisphere: 'Left',
    functions: ['Working memory execution', 'Self-awareness and introspection', 'Cognitive rule switching'],
    clinicalNotes: 'Hypoactivity observed in major depressive disorder and negative schizophrenic symptoms.',
    bloodSupply: 'Anterior Cerebral Artery (ACA)'
  },
  'right-superior-frontal-gyrus': {
    name: 'Right Superior Frontal Gyrus',
    lobe: 'frontal',
    hemisphere: 'Right',
    functions: ['Inhibitory control', 'Sustained attention', 'Spatial working memory'],
    clinicalNotes: 'Right prefrontal lesions cause behavioral disinhibition and impulsivity.',
    bloodSupply: 'Anterior Cerebral Artery (ACA)'
  },
  'left-middle-frontal-gyrus': {
    name: 'Left Middle Frontal Gyrus (DLPFC)',
    lobe: 'frontal',
    hemisphere: 'Left',
    functions: ['Dorsolateral Prefrontal Cortex (DLPFC)', 'Strategic decision making', 'Abstract problem solving'],
    clinicalNotes: 'Key target for Transcranial Magnetic Stimulation (rTMS) in treatment-resistant depression.',
    bloodSupply: 'Middle Cerebral Artery (MCA - Superior branch)'
  },
  'right-middle-frontal-gyrus': {
    name: 'Right Middle Frontal Gyrus (DLPFC)',
    lobe: 'frontal',
    hemisphere: 'Right',
    functions: ['Attention reorienting', 'Conflict monitoring', 'Contingency management'],
    clinicalNotes: 'Impaired in ADHD and frontotemporal dementia syndromes.',
    bloodSupply: 'Middle Cerebral Artery (MCA)'
  },
  'left-inferior-frontal-gyrus': {
    name: 'Left Inferior Frontal Gyrus (Broca\'s Area)',
    lobe: 'frontal',
    hemisphere: 'Left',
    functions: ['Expressive motor speech production', 'Grammatical processing (Pars opercularis & triangularis)', 'Phonological retrieval'],
    clinicalNotes: 'Ischemic infarct results in Broca\'s expressive aphasia (non-fluent telegraphic speech with preserved comprehension).',
    bloodSupply: 'MCA Superior Division (Prefrontal artery)'
  },
  'right-inferior-frontal-gyrus': {
    name: 'Right Inferior Frontal Gyrus',
    lobe: 'frontal',
    hemisphere: 'Right',
    functions: ['Motor and behavioral response inhibition (Stop signal task)', 'Prosody expression in speech'],
    clinicalNotes: 'Damage leads to motor impulsiveness and loss of affective vocal intonation.',
    bloodSupply: 'MCA Superior Division'
  },
  'left-precentral-gyrus': {
    name: 'Left Precentral Gyrus (Primary Motor Cortex - M1)',
    lobe: 'frontal',
    hemisphere: 'Left',
    functions: ['Primary somatomotor control (Motor homunculus)', 'Voluntary control of right-sided limbs and face'],
    clinicalNotes: 'Infarct results in contralateral (right) hemiplegia and upper motor neuron signs (hyperreflexia, Babinski).',
    bloodSupply: 'MCA (arm/face region) & ACA (leg/foot region)'
  },
  'right-precentral-gyrus': {
    name: 'Right Precentral Gyrus (Primary Motor Cortex - M1)',
    lobe: 'frontal',
    hemisphere: 'Right',
    functions: ['Primary somatomotor output for left side of body', 'Execution of voluntary muscle movements'],
    clinicalNotes: 'Lesions cause contralateral (left) spastic paresis.',
    bloodSupply: 'MCA & ACA'
  },

  // Parietal Lobe
  'left-postcentral-gyrus': {
    name: 'Left Postcentral Gyrus (Primary Somatosensory Cortex - S1)',
    lobe: 'parietal',
    hemisphere: 'Left',
    functions: ['Sensory homunculus (contralateral right side)', 'Tactile discrimination', 'Vibration and proprioception'],
    clinicalNotes: 'Contralateral hemianesthesia, loss of two-point discrimination and astereognosis.',
    bloodSupply: 'MCA & ACA cortical branches'
  },
  'right-postcentral-gyrus': {
    name: 'Right Postcentral Gyrus (Primary Somatosensory Cortex - S1)',
    lobe: 'parietal',
    hemisphere: 'Right',
    functions: ['Sensory receptive area for left side of the body', 'Nociception and thermal localization'],
    clinicalNotes: 'Damage impairs tactile localization and stereognosis on left side.',
    bloodSupply: 'MCA & ACA'
  },
  'left-superior-parietal-lobule': {
    name: 'Left Superior Parietal Lobule',
    lobe: 'parietal',
    hemisphere: 'Left',
    functions: ['Sensorimotor integration', 'Visuomotor reaching', 'Spatial coordinate manipulation'],
    clinicalNotes: 'Bilateral lesions cause Balint syndrome (optic ataxia, ocular apraxia, simultanagnosia).',
    bloodSupply: 'MCA & PCA'
  },
  'right-superior-parietal-lobule': {
    name: 'Right Superior Parietal Lobule',
    lobe: 'parietal',
    hemisphere: 'Right',
    functions: ['3D spatial orientation', 'Egocentric spatial processing', 'Mental rotation tasks'],
    clinicalNotes: 'Contributes to severe contralateral hemispatial neglect if damaged.',
    bloodSupply: 'MCA'
  },
  'left-angular-gyrus': {
    name: 'Left Angular Gyrus (Brodmann Area 39)',
    lobe: 'parietal',
    hemisphere: 'Left',
    functions: ['Calculation and arithmetic', 'Reading and writing translation', 'Finger recognition'],
    clinicalNotes: 'Classic site of Gerstmann syndrome: agraphia, acalculia, finger agnosia, left-right disorientation.',
    bloodSupply: 'MCA Angular branch'
  },
  'right-angular-gyrus': {
    name: 'Right Angular Gyrus',
    lobe: 'parietal',
    hemisphere: 'Right',
    functions: ['Visuospatial attention orientation', 'Out-of-body perceptual integration', 'Theory of mind processing'],
    clinicalNotes: 'Electrical stimulation can induce temporary out-of-body experiences (OBE).',
    bloodSupply: 'MCA'
  },
  'left-supramarginal-gyrus': {
    name: 'Left Supramarginal Gyrus (Brodmann Area 40)',
    lobe: 'parietal',
    hemisphere: 'Left',
    functions: ['Phonological store of verbal working memory', 'Praxis and tool use sequencing'],
    clinicalNotes: 'Lesions produce ideomotor apraxia and conduction aphasia.',
    bloodSupply: 'MCA'
  },
  'right-supramarginal-gyrus': {
    name: 'Right Supramarginal Gyrus',
    lobe: 'parietal',
    hemisphere: 'Right',
    functions: ['Empathy appraisal (distinguishing self from others)', 'Spatial attention anchoring'],
    clinicalNotes: 'Key hub preventing egocentric bias in emotional judgements.',
    bloodSupply: 'MCA'
  },

  // Temporal Lobe
  'left-middle-temporal-gyrus': {
    name: 'Left Middle Temporal Gyrus',
    lobe: 'temporal',
    hemisphere: 'Left',
    functions: ['Lexical semantic comprehension', 'Distance calculation during motion', 'Sentence integration'],
    clinicalNotes: 'Atrophy found in semantic dementia variant of primary progressive aphasia.',
    bloodSupply: 'MCA Inferior Division'
  },
  'right-middle-temporal-gyrus': {
    name: 'Right Middle Temporal Gyrus',
    lobe: 'temporal',
    hemisphere: 'Right',
    functions: ['Non-verbal semantic knowledge', 'Audio-visual environmental sound recognition'],
    clinicalNotes: 'Associated with auditory affective decoding deficits.',
    bloodSupply: 'MCA Inferior Division'
  },
  'left-inferior-temporal-gyrus': {
    name: 'Left Inferior Temporal Gyrus',
    lobe: 'temporal',
    hemisphere: 'Left',
    functions: ['Visual object recognition (Ventral stream "What" pathway)', 'Orthographic word recognition'],
    clinicalNotes: 'Lesions cause visual object agnosia (inability to name seen items).',
    bloodSupply: 'PCA & MCA'
  },
  'right-inferior-temporal-gyrus': {
    name: 'Right Inferior Temporal Gyrus',
    lobe: 'temporal',
    hemisphere: 'Right',
    functions: ['Visual category representation', 'Complex shape recognition'],
    clinicalNotes: 'Vulnerable in traumatic temporal lobe contusions.',
    bloodSupply: 'PCA'
  },
  'posterior-part-of-superior-temporal-gyrus': {
    name: 'Wernicke\'s Area (Posterior Superior Temporal Gyrus)',
    lobe: 'temporal',
    hemisphere: 'Left',
    functions: ['Spoken speech comprehension', 'Semantic decoding', 'Phonemic discrimination'],
    clinicalNotes: 'Wernicke\'s fluent aphasia: fluid but meaningless speech ("word salad"), severely impaired comprehension.',
    bloodSupply: 'MCA Inferior trunk'
  },
  'subdivision-of-superior-temporal-gyrus': {
    name: 'Primary Auditory Cortex (Heschl\'s Gyrus)',
    lobe: 'temporal',
    hemisphere: 'Bilateral',
    functions: ['Tonotopic pitch frequency representation', 'Early auditory signal processing'],
    clinicalNotes: 'Cortical deafness occurs with rare bilateral ischemic events.',
    bloodSupply: 'MCA'
  },
  'left-fusiform-gyrus': {
    name: 'Left Fusiform Gyrus (Visual Word Form Area)',
    lobe: 'temporal',
    hemisphere: 'Left',
    functions: ['Visual Word Form Area (VWFA)', 'Fluent reading letter recognition'],
    clinicalNotes: 'Damage causes pure alexia without agraphia (inability to read printed words).',
    bloodSupply: 'PCA'
  },
  'right-fusiform-gyrus': {
    name: 'Right Fusiform Gyrus (Fusiform Face Area - FFA)',
    lobe: 'temporal',
    hemisphere: 'Right',
    functions: ['Holistic facial recognition (FFA)', 'Expert visual category identification'],
    clinicalNotes: 'Infarct leads to prosopagnosia (inability to recognize familiar faces).',
    bloodSupply: 'PCA'
  },
  'left-parahippocampal-gyrus': {
    name: 'Left Parahippocampal Gyrus',
    lobe: 'temporal',
    hemisphere: 'Left',
    functions: ['Episodic memory encoding bridge to hippocampus', 'Contextual scene association'],
    clinicalNotes: 'Early neurofibrillary tangle accumulation in Alzheimer\'s disease (Braak stage I-II).',
    bloodSupply: 'PCA Anterior temporal branch'
  },
  'right-parahippocampal-gyrus': {
    name: 'Right Parahippocampal Gyrus (Parahippocampal Place Area - PPA)',
    lobe: 'temporal',
    hemisphere: 'Right',
    functions: ['Parahippocampal Place Area (PPA)', 'Environmental scene recognition and topography'],
    clinicalNotes: 'Lesions cause environmental topographical disorientation.',
    bloodSupply: 'PCA'
  },

  // Occipital Lobe
  'left-occipital-lobe': {
    name: 'Left Occipital Lobe (Cortex Visualis)',
    lobe: 'occipital',
    hemisphere: 'Left',
    functions: ['Primary visual cortex (V1) for right visual hemifield', 'Retinotopic orientation columns', 'Edge and contrast detection'],
    clinicalNotes: 'PCA occlusion causes right homonymous hemianopia with macular sparing (collateral MCA supply to occipital pole).',
    bloodSupply: 'PCA Calcarine artery'
  },
  'right-occipital-lobe': {
    name: 'Right Occipital Lobe (Cortex Visualis)',
    lobe: 'occipital',
    hemisphere: 'Right',
    functions: ['Primary visual cortex (V1) for left visual hemifield', 'Binocular disparity (depth perception)', 'Visual color processing (V4)'],
    clinicalNotes: 'Right PCA stroke causes left homonymous hemianopia and potential visual hemi-achromatopsia.',
    bloodSupply: 'PCA Calcarine artery'
  },

  // Limbic & Subcortical
  'left-hippocampus': {
    name: 'Left Hippocampus (Cornu Ammonis)',
    lobe: 'subcortical',
    hemisphere: 'Left',
    functions: ['Verbal episodic memory consolidation', 'Long-term potentiation (LTP) synaptic plasticity', 'Spatial mapping'],
    clinicalNotes: 'Prominent atrophy is pathognomonic biomarker for early Alzheimer\'s Disease; primary focus for mesial temporal lobe epilepsy.',
    bloodSupply: 'Anterior Choroidal Artery, PCA'
  },
  'right-hippocampus': {
    name: 'Right Hippocampus',
    lobe: 'subcortical',
    hemisphere: 'Right',
    functions: ['Visuospatial episodic memory', 'Topographical cognitive maps', 'Emotional memory gating'],
    clinicalNotes: 'Selective sclerosis leads to spatial navigation amnesia and hippocampal sharp wave-ripple seizures.',
    bloodSupply: 'Anterior Choroidal Artery, PCA'
  },
  'thalamus': {
    name: 'Left Thalamus',
    lobe: 'subcortical',
    hemisphere: 'Left',
    functions: ['Major sensory relay hub (except olfaction)', 'Cortico-thalamic synchrony', 'Sleep spindle generation'],
    clinicalNotes: 'Dejerine-Roussy syndrome: chronic intractable contralateral central thalamic neuropathic pain.',
    bloodSupply: 'Thalamoperforating and Thalamogeniculate branches of PCA'
  },
  'thalamus-1': {
    name: 'Right Thalamus',
    lobe: 'subcortical',
    hemisphere: 'Right',
    functions: ['Sensory routing to somatosensory and visual cortex', 'Motor circuit loop through basal ganglia'],
    clinicalNotes: 'Thalamic hemorrhage causes sensorimotor hemiparesis and acute altered consciousness.',
    bloodSupply: 'PCA branches'
  },
  'hypothalamus': {
    name: 'Hypothalamus (Left)',
    lobe: 'subcortical',
    hemisphere: 'Left',
    functions: ['Circadian pacemaking (Suprachiasmatic nucleus)', 'Thermoregulation, hunger, thirst', 'Autonomic nervous control'],
    clinicalNotes: 'Syndrome of inappropriate ADH secretion (SIADH) and neuroendocrine dysregulation.',
    bloodSupply: 'Circle of Willis (PCoA & ACA)'
  },
  'hypothalamus2': {
    name: 'Hypothalamus (Right)',
    lobe: 'subcortical',
    hemisphere: 'Right',
    functions: ['HPA stress axis hormonal gating (CRH)', 'Temperature homeostasis', 'Appetite leptin/ghrelin signaling'],
    clinicalNotes: 'Craniopharyngioma pressure produces hypothalamic obesity and panhypopituitarism.',
    bloodSupply: 'Circle of Willis perforators'
  },
  'pituitary-gland': {
    name: 'Pituitary Gland (Hypophysis)',
    lobe: 'subcortical',
    hemisphere: 'Central',
    functions: ['Master endocrine secretion (GH, ACTH, TSH, LH, FSH, Prolactin)', 'Posterior release of Oxytocin and Vasopressin'],
    clinicalNotes: 'Pituitary adenoma compresses optic chiasm causing bitemporal hemianopsia ("tunnel vision").',
    bloodSupply: 'Superior and inferior hypophyseal arteries'
  },
  'pineal-body': {
    name: 'Pineal Gland (Epiphysis)',
    lobe: 'subcortical',
    hemisphere: 'Central',
    functions: ['Melatonin synthesis and secretion', 'Circadian circadian entrainment'],
    clinicalNotes: 'Pineal gland calcification visible on CT; pinealoma causes upward gaze palsy (Parinaud syndrome).',
    bloodSupply: 'Posterior choroidal artery'
  },
  'habenula': {
    name: 'Habenular Nuclei',
    lobe: 'subcortical',
    hemisphere: 'Central',
    functions: ['Negative reward prediction error signal', 'Inhibition of dopamine neurons upon disappointment'],
    clinicalNotes: 'Hyperactive habenular circuits strongly implicated in clinical anhedonia and treatment-resistant depression.',
    bloodSupply: 'Thalamoperforating arteries'
  },
  'left-insula': {
    name: 'Left Insular Cortex',
    lobe: 'subcortical',
    hemisphere: 'Left',
    functions: ['Interoception (sensing heartbeat, gut sensations)', 'Gustatory taste cortex', 'Emotional empathy and subjective feelings'],
    clinicalNotes: 'Insular stroke increases arrhythmia risk through disrupted autonomic cardiac control.',
    bloodSupply: 'MCA M2 branches'
  },
  'right-insula': {
    name: 'Right Insular Cortex',
    lobe: 'subcortical',
    hemisphere: 'Right',
    functions: ['Body ownership awareness', 'Pain perception processing', 'Sympathetic cardiac dominance'],
    clinicalNotes: 'Right insular infarct strongly correlated with sudden cardiac death via sympathovagal imbalance.',
    bloodSupply: 'MCA M2 branches'
  },
  'left-cingulate-gyrus': {
    name: 'Left Cingulate Gyrus',
    lobe: 'subcortical',
    hemisphere: 'Left',
    functions: ['Anterior cingulate (ACC) conflict monitoring', 'Pain emotional unpleasantness', 'Default Mode Network hub'],
    clinicalNotes: 'Target for surgical anterior cingulotomy in severe refractory OCD and chronic intractable pain.',
    bloodSupply: 'Anterior Cerebral Artery (Pericallosal branch)'
  },
  'right-cingulate-gyrus': {
    name: 'Right Cingulate Gyrus',
    lobe: 'subcortical',
    hemisphere: 'Right',
    functions: ['Error detection and performance monitoring', 'Autonomic emotional responses'],
    clinicalNotes: 'Akinetic mutism with bilateral anterior cingulate gyrus damage.',
    bloodSupply: 'Anterior Cerebral Artery'
  },
  'left-internal-capsule': {
    name: 'Left Internal Capsule',
    lobe: 'subcortical',
    hemisphere: 'Left',
    functions: ['Dense white matter highway connecting cortex to spinal cord (Corticospinal tract in posterior limb)'],
    clinicalNotes: 'Lacunar infarct (pure motor stroke) produces profound complete contralateral hemiparesis without cortical signs.',
    bloodSupply: 'Lenticulostriate arteries (MCA) & Anterior choroidal artery'
  },
  'right-internal-capsule': {
    name: 'Right Internal Capsule',
    lobe: 'subcortical',
    hemisphere: 'Right',
    functions: ['Conduction of motor and sensory projection fibers between thalamus, basal ganglia, and cerebral cortex'],
    clinicalNotes: 'Classic site for hypertensive Charcot-Bouchard microaneurysm rupture causing deep intracerebral hemorrhage.',
    bloodSupply: 'Lenticulostriate arteries'
  },
  'left-lateral-ventricle': {
    name: 'Left Lateral Ventricle',
    lobe: 'subcortical',
    hemisphere: 'Left',
    functions: ['Cerebrospinal fluid (CSF) reservoir and circulation', 'Brain cushion and metabolic waste clearing'],
    clinicalNotes: 'Ventricular enlargement (ventriculomegaly) observed in Normal Pressure Hydrocephalus (NPH) and Alzheimer\'s.',
    bloodSupply: 'Choroid plexus branches'
  },
  'right-lateral-ventricle': {
    name: 'Right Lateral Ventricle',
    lobe: 'subcortical',
    hemisphere: 'Right',
    functions: ['CSF cushioning and fluid exchange', 'Glymphatic waste drainage pathway'],
    clinicalNotes: 'Hydrocephalus obstructive tumor may cause acute intracranial hypertension.',
    bloodSupply: 'Choroid plexus'
  },
  'third-ventricle': {
    name: 'Third Ventricle',
    lobe: 'subcortical',
    hemisphere: 'Central',
    functions: ['Medial CSF chamber between thalami', 'Communicates via Cerebral Aqueduct of Sylvius'],
    clinicalNotes: 'Colloid cyst of the third ventricle can cause sudden acute lethal obstructive hydrocephalus.',
    bloodSupply: 'Choroidal vessels'
  },
  'fourth-ventricle': {
    name: 'Fourth Ventricle',
    lobe: 'subcortical',
    hemisphere: 'Central',
    functions: ['Dorsal brainstem CSF space', 'Drains CSF into subarachnoid space via foramina of Luschka and Magendie'],
    clinicalNotes: 'Ependymoma and medulloblastoma of posterior fossa obstruct fourth ventricle CSF outflow.',
    bloodSupply: 'PICA & AICA branches'
  },
  'choroid-plexus-of-cerebral-hemisphere': {
    name: 'Choroid Plexus',
    lobe: 'subcortical',
    hemisphere: 'Left',
    functions: ['Active CSF synthesis (~500 mL/day)', 'Blood-CSF biochemical barrier maintenance'],
    clinicalNotes: 'Choroid plexus papilloma causes hypersecretory communicating hydrocephalus.',
    bloodSupply: 'Anterior and posterior choroidal arteries'
  },
  'choroid-plexus-of-cerebral-hemisphere-1': {
    name: 'Choroid Plexus',
    lobe: 'subcortical',
    hemisphere: 'Right',
    functions: ['Active CSF synthesis and micronutrient transport to brain parenchyma'],
    clinicalNotes: 'Choroid calcifications common on unenhanced head CT.',
    bloodSupply: 'Choroidal arteries'
  },
  'white-matter-of-left-cerebral-hemisphere': {
    name: 'Left Cerebral White Matter Tracts',
    lobe: 'subcortical',
    hemisphere: 'Left',
    functions: ['Myelinated axon fiber tracts facilitating ultra-rapid inter-hemispheric and intra-hemispheric communication'],
    clinicalNotes: 'Target of demyelination in Multiple Sclerosis; leukoaraiosis in microvascular ischemic disease.',
    bloodSupply: 'Deep penetrating arterioles'
  },
  'white-matter-of-right-cerebral-hemisphere': {
    name: 'Right Cerebral White Matter Tracts',
    lobe: 'subcortical',
    hemisphere: 'Right',
    functions: ['Long-range association and projection fiber bundle pathways (superior longitudinal fasciculus, corpus callosum)'],
    clinicalNotes: 'Diffuse axonal injury (DAI) in high-velocity deceleration trauma.',
    bloodSupply: 'Deep penetrating arterioles'
  },
  'segment-of-gyrus-of-cerebral-hemisphere': {
    name: 'Cerebral Cortical Gyral Architecture',
    lobe: 'frontal',
    hemisphere: 'Left',
    functions: ['High-density neocortical 6-layered laminae processing'],
    clinicalNotes: 'Sulcal effacement indicates acute cerebral edema.',
    bloodSupply: 'Pial arterial network'
  },
  'segment-of-gyrus-of-cerebral-hemisphere-1': {
    name: 'Cerebral Cortical Gyral Architecture',
    lobe: 'frontal',
    hemisphere: 'Right',
    functions: ['Neocortical columnar integration'],
    clinicalNotes: 'Cortical dysplasia causes pharmacoresistant focal epilepsy.',
    bloodSupply: 'Pial arterial network'
  }
};

// Clinical Conditions for AI Diagnostic Simulation & 3D Correlation
export const CLINICAL_PATHOLOGIES = [
  {
    id: 'ischemic-stroke-mca',
    title: 'Acute Ischemic Stroke (Left MCA Territory)',
    category: 'Cerebrovascular',
    affectedNodes: [
      'left-inferior-frontal-gyrus',
      'left-precentral-gyrus',
      'left-postcentral-gyrus',
      'left-internal-capsule',
      'posterior-part-of-superior-temporal-gyrus'
    ],
    primaryLobe: 'frontal',
    severity: 'CRITICAL / CODE STROKE',
    confidenceScore: 98.7,
    lesionVolume: '42.8 cm³',
    imagingSign: 'Loss of insular ribbon, MCA hyperdense sign, diffusion restriction on DWI (low ADC)',
    clinicalPresentation: 'Acute onset right-sided hemiplegia, facial droop, global aphasia, right visual field deficit. Onset 2.5 hours ago.',
    aiRecommendation: 'Immediate IV Tenecteplase / Alteplase consideration (within 4.5h window). Prepare for urgent endovascular thrombectomy (EVT).',
    colorHighlight: '#ef4444' // Emergency Red
  },
  {
    id: 'glioblastoma-multiforme',
    title: 'Glioblastoma Multiforme (WHO Grade IV)',
    category: 'Neuro-Oncology',
    affectedNodes: [
      'right-middle-frontal-gyrus',
      'right-superior-frontal-gyrus',
      'right-cingulate-gyrus'
    ],
    primaryLobe: 'frontal',
    severity: 'HIGH SEVERITY',
    confidenceScore: 96.4,
    lesionVolume: '31.2 cm³',
    imagingSign: 'Heterogeneous ring-enhancing mass with central necrotic core and prominent peritumoral vasogenic edema, midline shift 4.2mm',
    clinicalPresentation: 'Subacute progressive morning headaches, progressive left-sided motor weakness, personality blunting and apathy.',
    aiRecommendation: 'Urgent neurosurgical stereotactic craniotomy for maximal safe resection followed by Stupp Protocol (Temozolomide + Radiotherapy).',
    colorHighlight: '#e11d48'
  },
  {
    id: 'alzheimers-hippocampal-atrophy',
    title: 'Early-Onset Alzheimer\'s Disease (Hippocampal Sclerosis)',
    category: 'Neurodegenerative',
    affectedNodes: [
      'left-hippocampus',
      'right-hippocampus',
      'left-parahippocampal-gyrus',
      'right-parahippocampal-gyrus',
      'left-lateral-ventricle',
      'right-lateral-ventricle'
    ],
    primaryLobe: 'subcortical',
    severity: 'MODERATE CHRONIC',
    confidenceScore: 94.2,
    lesionVolume: 'Bilateral MTA Score 3/4',
    imagingSign: 'Volumetric T1 MRI demonstrates severe bilateral hippocampal and entorhinal atrophy with compensatory ex-vacuo temporal horn ventricular dilation.',
    clinicalPresentation: 'Progressive short-term episodic memory loss (MMSE: 21/30), word-finding difficulties, spatial disorientation in familiar environments.',
    aiRecommendation: 'Initiate Acetylcholinesterase inhibitor (Donepezil 10mg) + NMDA receptor antagonist (Memantine). Order CSF amyloid beta/tau biomarker panel.',
    colorHighlight: '#f59e0b'
  },
  {
    id: 'multiple-sclerosis-demyelination',
    title: 'Relapsing-Remitting Multiple Sclerosis (RRMS)',
    category: 'Neuro-Immunology',
    affectedNodes: [
      'white-matter-of-left-cerebral-hemisphere',
      'white-matter-of-right-cerebral-hemisphere',
      'left-internal-capsule',
      'pons'
    ],
    primaryLobe: 'subcortical',
    severity: 'ACTIVE INFLAMMATORY',
    confidenceScore: 97.1,
    lesionVolume: '14.6 cm³ across 8 lesions',
    imagingSign: 'FLAIR hyperintense ovoid lesions perpendicular to lateral ventricles (Dawson\'s Fingers); gadolinium-enhancing active plaques indicating blood-brain barrier breakdown.',
    clinicalPresentation: 'Subacute left optic neuritis (pain with eye movement, blurred vision), Lhermitte sign (electric shock sensation down spine on neck flexion), lower limb ataxia.',
    aiRecommendation: 'High-dose IV Methylprednisolone pulse therapy (1000 mg/day for 5 days). Initiate Disease-Modifying Therapy (Ocrelizumab or Natalizumab).',
    colorHighlight: '#38bdf8'
  },
  {
    id: 'temporal-lobe-epilepsy',
    title: 'Mesial Temporal Sclerosis (Drug-Resistant TLE)',
    category: 'Epileptology',
    affectedNodes: [
      'left-hippocampus',
      'left-middle-temporal-gyrus',
      'left-inferior-temporal-gyrus'
    ],
    primaryLobe: 'temporal',
    severity: 'REFRACTORY',
    confidenceScore: 93.8,
    lesionVolume: 'Focal 4.1 cm³',
    imagingSign: 'T2/FLAIR hyperintensity and volume loss within the left hippocampal head/body with loss of normal internal digitations.',
    clinicalPresentation: 'Focal seizures with impaired awareness preceded by epigastric rising aura and olfactory hallucinations, followed by postictal confusion and expressive dysphasia.',
    aiRecommendation: 'Video-EEG continuous monitoring confirmation. Evaluate for Stereotactic Laser Interstitial Thermal Therapy (LITT) or selective amygdalohippocampectomy.',
    colorHighlight: '#a855f7'
  }
];

// Helper to get lobe info for any GLB node name
export function getNodeLobe(nodeName) {
  const norm = nodeName.toLowerCase();
  
  if (ANATOMICAL_STRUCTURES[norm]) {
    const lobeId = ANATOMICAL_STRUCTURES[norm].lobe;
    return LOBE_PALETTES[lobeId];
  }

  // Fallback regex matching
  if (norm.includes('frontal')) return LOBE_PALETTES.frontal;
  if (norm.includes('parietal')) return LOBE_PALETTES.parietal;
  if (norm.includes('temporal')) return LOBE_PALETTES.temporal;
  if (norm.includes('occipital')) return LOBE_PALETTES.occipital;
  if (norm.includes('cerebell')) return LOBE_PALETTES.cerebellum;
  if (norm.includes('pons') || norm.includes('medulla') || norm.includes('midbrain') || norm.includes('colliculus')) {
    return LOBE_PALETTES.brainstem;
  }
  return LOBE_PALETTES.subcortical;
}
