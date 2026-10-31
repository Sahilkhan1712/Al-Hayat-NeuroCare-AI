import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Bot,
  User,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Stethoscope,
  HeartPulse,
  Brain,
  CheckCircle,
  Clock,
  ShieldAlert,
  Volume2,
  VolumeX,
  FileText,
  Pill,
  ChevronRight,
  Download,
  Activity,
  HelpCircle,
  Check,
  UserCheck,
  LogOut,
  PhoneCall
} from 'lucide-react';
import { sound } from '../../utils/audio';
import { voiceAssistant } from '../../utils/voiceAssistant';
import { diagnosePatientInput } from '../../data/clinicalNeuroEngine';
import { generateRAGResponse } from '../../services/medicalRAGEngine';
import { checkEmergencyRedFlags } from './EmergencyAlertSystem';
import MedicalReportModal from './MedicalReportModal';

// Master Disease Category Options for Patient Chief Complaint
export const DISEASE_CATEGORY_OPTIONS = [
  {
    id: 'headache',
    title: 'सरदर्द एवं माइग्रेन (Headache & Migraine)',
    desc: 'आधे सिर में धक-धक दर्द, सुई चुभन (Ice-pick), तनाव, क्लस्टर, न्यमुलर सिरदर्द',
    icon: '🧠',
    badge: 'Migraine / Stabbing / Tension / Cluster'
  },
  {
    id: 'sleep',
    title: 'नींद की समस्या / अनिद्रा (Sleep & Insomnia)',
    desc: 'बिस्तर पर घंटों नींद न आना, रात में बार-बार टूटना, बेचैनी, पैर हिलाना (RLS)',
    icon: '😴',
    badge: 'Chronic Insomnia / Restless Legs'
  },
  {
    id: 'anxiety',
    title: 'पैनिक अटैक व घबराहट (Panic & Anxiety)',
    desc: 'अचानक दिल तेज धड़कना, सांस फूलना, अत्यधिक डर/बेचैनी, अनजाना डर, OCD',
    icon: '😰',
    badge: 'Panic Disorder / Severe Anxiety / OCD'
  },
  {
    id: 'stroke',
    title: 'ब्रेन स्ट्रोक / लकवा (Brain Stroke / Paralysis)',
    desc: 'चेहरा टेढ़ा होना, एक हाथ-पैर में अचानक कमजोरी, आवाज लड़खड़ाना (इमरजेंसी)',
    icon: '⚡',
    badge: 'FAST Emergency Triage'
  },
  {
    id: 'vertigo',
    title: 'चक्कर आना / संतुलन (Vertigo & Balance)',
    desc: 'कमरा घूमना, सिर चकराना, उल्टी जैसा लगना, चलने में लड़खड़ाहट, कान में सीटी',
    icon: '🌀',
    badge: 'BPPV / Vestibular / Meniere\'s'
  },
  {
    id: 'tremor',
    title: 'हाथ-पैर कांपना / कंपन (Tremor & Parkinson\'s)',
    desc: 'आराम करते समय हाथ कांपना, शरीर में अकड़न/धीमापन, पार्किंसंस रोग',
    icon: '🫨',
    badge: 'Parkinson\'s / Essential Tremor'
  },
  {
    id: 'neuropathy',
    title: 'नसों में जलन व सुन्नपन (Nerve Pain / Neuropathy)',
    desc: 'पैरों के तलवों में आग जैसी जलन, सुई चुभना, चेहरे में बिजली का झटका (Trigeminal)',
    icon: '⚡',
    badge: 'Diabetic Neuropathy / Trigeminal'
  },
  {
    id: 'memory',
    title: 'याददाश्त की कमी / डिमेंशिया (Memory & Dementia)',
    desc: 'बातें भूल जाना, रास्ते भूलना, कन्फ्यूजन, अल्जाइमर, दिमागी थकान',
    icon: '🧩',
    badge: 'Alzheimer\'s / Cognitive Decline'
  },
  {
    id: 'seizure',
    title: 'मिर्गी के दौरे / झटके (Seizures & Epilepsy)',
    desc: 'शरीर अकड़ना, झटके लगना, अचानक बेहोश या ब्लैंक हो जाना',
    icon: '🌊',
    badge: 'Epilepsy / Convulsive Disorder'
  }
];

// Targeted Clinical Questions for Each Category
export const CATEGORY_INTERVIEW_QUESTIONS = {
  headache: [
    {
      id: 'headache_loc',
      question: 'Dard sar ke kis hisse me ho raha hai?',
      options: [
        'Baayein taraf aadhe sir me (Left side Unilateral Migraine)',
        'Daayein taraf aadhe sir me (Right side Unilateral Migraine)',
        'Ek specific point / Kanpatti par (Ice-pick Stabbing)',
        'Dono taraf maathe aur gardan me (Tension / Band-like)'
      ]
    },
    {
      id: 'headache_char',
      question: 'Dard kis tarah ka mehsoos hota hai?',
      options: [
        'Dhak-dhak (Pulsating / Throbbing) karta hua teekha dard',
        'Sui chubhne jaisa (Sharp Ice-pick jabs)',
        'Bhaari dabav / Tight helmet band jaisa',
        'Aankh ke peeche tez jalan / aag jaisa (Cluster)'
      ]
    },
    {
      id: 'headache_assoc',
      question: 'Kya ulti, tez roshni/aawaz se chidh, ya aankhon ke aage chamak (Aura) aati hai?',
      options: [
        'Haan, ulti/matli, tez roshni aur aawaz chubhti hai (Classic Migraine)',
        'Aankhon ke aage chamkili zigzag roshni ya dhundhla-pan (Migraine with Visual Aura)',
        'Aankh se paani, aakhein laal aur naak band hona (Cluster Headache)',
        'Gardan me akad aur kandhe me khinchav (Tension Headache)',
        'Nahi, aisi koi aur pareshani nahi hai'
      ]
    },
    {
      id: 'headache_dur',
      question: 'Yeh dard kitne samay rehta hai aur kya chalne-phirne se badhta hai?',
      options: [
        'Kai ghanto se (4-72 ghante), chalne ya jhukne par dhak-dhak badhta hai (Migraine)',
        'Sirf kuch seconds aakar achanak ruk jata hai (Ice-pick Headache)',
        'Kayi dino ya hafto se roz halka-halka bana rehta hai (Chronic Tension)'
      ]
    }
  ],

  sleep: [
    {
      id: 'sleep_nature',
      question: 'Neend me kis tarah ki mukhya pareshani hoti hai?',
      options: [
        'Bistar par ghanto neend nahi aati (Onset Insomnia)',
        'Raat ko 2-3 baje neend toot jati hai fir aati nahi (Maintenance)',
        'Sone ke waqt pairon me bechaini / hilane ka man karta hai (Restless Legs)',
        'Din bhar bohot zyada neend aur susti rehti hai (Hypersomnia)'
      ]
    },
    {
      id: 'sleep_duration',
      question: 'Yeh takleef kitne samay se chal rahi hai?',
      options: [
        'Haal hi me kuch dino se (Stress ya badalte routine se)',
        '1 se 3 mahine se lagatar bani hui hai',
        '3 mahine se zyada samay se (Chronic Insomnia)'
      ]
    },
    {
      id: 'sleep_associated',
      question: 'Raat me ya agle din inme se kya mehsus hota hai?',
      options: [
        'Raat bhar dimaag me chinta aur bechain vichar chalte hain',
        'Agle din sar bhaari, thakan aur chidchidapan rehta hai',
        'Raat me tez kharrate (Snoring) ya saans rukne ka ehsaas',
        'Bas neend nahi aati, baaki sab theek hai'
      ]
    }
  ],

  anxiety: [
    {
      id: 'anxiety_sensation',
      question: 'Ghabrahat ya panic ke dauran kya mehsus hota hai?',
      options: [
        'Dil bohot tez dhadakta hai (Palpitations) aur paseena aata hai',
        'Saans lene me dikkat hoti hai ya dum ghut raha hai',
        'Achanak haath-pair kaanpte hain aur chakkar aata hai',
        'Har waqt dimaag me bechaini aur anjaana darr bana rehta hai'
      ]
    },
    {
      id: 'anxiety_pattern',
      question: 'Yeh ghabrahat kitni der tak rehti hai?',
      options: [
        'Achanak 10-20 minute ke liye tez daura aata hai (Panic Attack)',
        'Poora din dheemi-dheemi bechaini aur chinta bani rehti hai',
        'Bheed me ya akele hone par achanak badh jati hai'
      ]
    },
    {
      id: 'anxiety_fear',
      question: 'Kya is dauran dil ka daura (Heart Attack) aane jaisa darr lagta hai?',
      options: [
        'Haan, lagta hai dil ruk jayega ya kuch bura hoga',
        'Nahi, sirf mansik tanav aur ghabrahat rehti hai',
        'Baar-baar cheezein check karne ya hath dhone ka man karta hai (OCD)'
      ]
    }
  ],

  stroke: [
    {
      id: 'stroke_fast',
      question: '🚨 FAST Stroke Check: Sharir me achanak kya kamzori aayi hai?',
      options: [
        'Chehra ek taraf jhuk / tedha ho gaya hai (Face Droop)',
        'Ek taraf ka haath ya pair achanak uth nahi raha (Arm Weakness)',
        'Bolne me ladkhadahat ya aawaz saaf nahi nikal rahi (Speech Slur)',
        'Aankhon ke aage achanak andhera ya dhundhla-pan chhana'
      ]
    },
    {
      id: 'stroke_time',
      question: 'Yeh lakshan kitni der pehle shuru hue?',
      options: [
        'Pichhle 1-3 ghante ke andar (CRITICAL Golden Hour)',
        'Aaj subah so kar uthne par mehsus hua',
        'Kayi dino se dheere-dheere kamzori badh rahi hai'
      ]
    },
    {
      id: 'stroke_history',
      question: 'Kya mariz ko pehle se High BP, Sugar ya Heart ki bimari hai?',
      options: [
        'Haan, High Blood Pressure ki bimari hai',
        'Haan, Diabetes (Sugar) ki samasya hai',
        'Nahi, aisi koi bimari nahi hai'
      ]
    }
  ],

  vertigo: [
    {
      id: 'vertigo_type',
      question: 'Chakkar kis tarah ka mehsoos hota hai?',
      options: [
        'Karwat badalne ya sar hilane par poora kamra ghoomta hai (BPPV)',
        'Sar me halkapan aur behosh hone jaisa lagta hai (Lightheadedness)',
        'Chalte waqt shareer ka santulan bigadta hai (Imbalance / Ataxia)',
        'Kaan me seeti (Tinnitus) aur ulti ke sath tez chakkar'
      ]
    },
    {
      id: 'vertigo_dur',
      question: 'Chakkar ka daura kitni der tak rehta hai?',
      options: [
        'Sirf 30 second se 1 minute (sar move karne par)',
        'Kayi ghanto tak lagatar kamra ghoomta rehta hai',
        'Lagatar kayi dino se halka-halka chakkar bana hua hai'
      ]
    },
    {
      id: 'vertigo_ear',
      question: 'Kya chakkar ke sath kaan me bhari-pan ya sunayi kam de raha hai?',
      options: [
        'Haan, kaan me seeti bajti hai aur bhari lagta hai',
        'Nahi, kaan me koi dikkat nahi hai'
      ]
    }
  ],

  tremor: [
    {
      id: 'tremor_when',
      question: 'Haath ya sharir me kampan (shaking) kab zyada hoti hai?',
      options: [
        'Jab haath aaram se rakha ho (Rest Tremor / Parkinson\'s)',
        'Chai peete ya koi cheez pakadne par (Action / Essential Tremor)',
        'Ghabrahat ya gusse me dono haath kaanpte hain'
      ]
    },
    {
      id: 'tremor_assoc',
      question: 'Kya sharir me inme se koi badlav bhi mehsus ho raha hai?',
      options: [
        'Shareer me akad (Stiffness) aur chalne me dheemapan (Slow movement)',
        'Chhote kadam lekar chalna aur balance bigadna',
        'Sirf haath kaanpte hain, baaki chaal theek hai'
      ]
    },
    {
      id: 'tremor_timeline',
      question: 'Yeh kampan kitne samay se notice ki ja rahi hai?',
      options: [
        'Pichhle kuch hafto se shuru hui hai',
        '6 mahine se 1 saal se dheere-dheere badh rahi hai',
        'Kayi saalo se parivaar me doosro ko bhi aisi problem rahi hai'
      ]
    }
  ],

  neuropathy: [
    {
      id: 'neuropathy_sensation',
      question: 'Naso me kis tarah ki takleef ho rahi hai?',
      options: [
        'Pairon ke talwo me aag jaisi jalan aur sunn-pan (Diabetic Neuropathy)',
        'Chehre me ek taraf achanak bijli ke tez jhatke jaisa dard (Trigeminal)',
        'Kamar se hokar pair ke peeche tak kheenchnewala dard (Sciatica)',
        'Ungliyo aur pairo me sui chubhne ya tingling jaisa'
      ]
    },
    {
      id: 'neuropathy_history',
      question: 'Aapki health history me inme se kya shamil hai?',
      options: [
        'Mujhe Diabetes (Sugar) ki shikayat hai',
        'Vitamin B12 ya thyroid ki kami batayi gayi hai',
        'Kamar / Spine me slip disc ya chot lagi thi',
        'Koi bimari nahi hai, achanak takleef shuru hui'
      ]
    },
    {
      id: 'neuropathy_chappal',
      question: 'Kya chalte waqt chappal nikal jane ka ehsaas nahi hota?',
      options: [
        'Haan, talwe itne sunn hain ki chappal ka pata nahi chalta',
        'Nahi, sirf jalan aur dard hota hai, sunn nahi hai'
      ]
    }
  ],

  memory: [
    {
      id: 'memory_type',
      question: 'Yaadash me kis tarah ki samasya aa rahi hai?',
      options: [
        'Haal hi ki baatein ya cheezein rakh kar bhool jana (Short-term loss)',
        'Jaane-pehchane raaste ya tareekh-din bhool jana (Disorientation)',
        'Sahi shabd yaad na aana aur baat karne me atkna',
        'Daily routine ke aam kaam karne me confusion hona'
      ]
    },
    {
      id: 'memory_dur',
      question: 'Yeh samasya kab se dekhne ko mil rahi hai?',
      options: [
        'Pichhle 6 mahine se 1 saal se dheere-dheere badh rahi hai',
        'Haal hi me kisi bimaari ya tanav ke baad achanak hui',
        'Kayi saalo se hai par ab zyada pareshani ho rahi hai'
      ]
    },
    {
      id: 'memory_behavior',
      question: 'Kya vyavhaar (behavior) ya mood me bhi badlav aaya hai?',
      options: [
        'Haan, chidchidapan, darr ya achanak gussa badh gaya hai',
        'Nahi, vyavhaar theek hai bas baatein bhool jate hain'
      ]
    }
  ],

  seizure: [
    {
      id: 'seizure_type',
      question: 'Jhatke ya daure ke dauran kya hota hai?',
      options: [
        'Poora sharir akadna aur haath-pair me tez jhatke (Generalized Tonic-Clonic)',
        'Achanak kuch seconds ke liye blank ho jana (Absence Seizure)',
        'Ek haath ya chehre me phadphadahat hona (Focal Seizure)',
        'Daure ke baad behoshi ya gehri neend aana'
      ]
    },
    {
      id: 'seizure_freq',
      question: 'Yeh jhatke kitni baar aa chuke hain?',
      options: [
        'Pehli baar zindagi me aaya hai (First unprovoked seizure)',
        'Pehle bhi 2 ya usse zyada baar aa chuke hain',
        'Neend ki kami ya tez light dekhne par aate hain'
      ]
    },
    {
      id: 'seizure_aura',
      question: 'Kya daura aane se pehle ajeeb aawaz, khushboo ya ajeeb ehsaas (Aura) hota hai?',
      options: [
        'Haan, daure se pehle pet me ghabrahat ya ajeeb mehsus hota hai',
        'Nahi, bina kisi chetavni ke achanak daura aata hai'
      ]
    }
  ]
};

// Automatic Category Classifier for Free-Text Inputs
export function detectProblemCategory(text) {
  const t = (text || '').toLowerCase();
  if (/neend|nind|sleep|insomnia|so nahi|soye|sone|sota|jagta|wake up|restless|kharrate/i.test(t)) {
    return 'sleep';
  }
  if (/panic|anxiety|ghabra|bechain|dil tez|chinta|heart attack|darr|ocd/i.test(t)) {
    return 'anxiety';
  }
  if (/bhool|bhol|memory|yaad|dementia|alzheimer|confusion/i.test(t)) {
    return 'memory';
  }
  if (/stroke|lakwa|paralysis|droop|tedha|achanak kamzor|bolne me|ladkhada/i.test(t)) {
    return 'stroke';
  }
  if (/chakkar|chakar|vertigo|dizzy|spinning|ghum|ghoom|balance|santulan|tinnitus/i.test(t)) {
    return 'vertigo';
  }
  if (/kamp|kaamp|tremor|shaking|haath hil|pair hil|parkinson|akad|stiffness/i.test(t)) {
    return 'tremor';
  }
  if (/jalan|burning|neuropathy|sunn|talv|talw|naso|nasein|current|bijli|trigeminal|sciatica/i.test(t)) {
    return 'neuropathy';
  }
  if (/mirgi|seizure|daur|jhatk|convulsion|epilepsy/i.test(t)) {
    return 'seizure';
  }
  return 'headache';
}

export default function AINeurologistChat({
  onSyncWithBrain,
  onSwitchTo3D,
  onTriggerEmergency,
  currentUser,
  onLogout
}) {
  // Patient details state
  const [patientName, setPatientName] = useState(currentUser?.name || 'Mohd Sahil');
  const [patientAge, setPatientAge] = useState(currentUser?.age || '24');
  const [patientGender, setPatientGender] = useState(currentUser?.gender || 'Male');
  const [isPatientConfirmed, setIsPatientConfirmed] = useState(false);

  // Clinical interview step tracking
  // 0: Initial Name/Age confirmation
  // 1: Primary Complaint Category selection
  // 2: Answering Category-Specific Targeted Questions (One by One)
  // 5: Final Diagnosis & Report Generated
  const [consultationStep, setConsultationStep] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const [categoryQuestionIdx, setCategoryQuestionIdx] = useState(0);
  const [collectedSymptoms, setCollectedSymptoms] = useState([]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Namaste! Main Al_Hayat NeuroCare AI Neurologist hoon. Consultation shuru karne ke liye, kripya apna **Naam (Name)** aur **Umar (Age)** confirm karein taaki aapki official medical file taiyar ho sake:`,
      time: 'Just now',
      isDemographicsStep: true
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [lastDiagnosis, setLastDiagnosis] = useState(null);
  const [lastMedicalReport, setLastMedicalReport] = useState(null);
  const [activeReportModal, setActiveReportModal] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const isFirstRender = useRef(true);

  const scrollToBottom = (behavior = 'smooth') => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior
      });
    }
  };

  useEffect(() => {
    // Prevent browser window from scrolling down on initial component mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = 0;
      }
      return;
    }
    scrollToBottom('smooth');
  }, [messages, isTyping]);

  // Step 1: Confirm Demographics
  const handleConfirmDemographics = () => {
    sound.playClick();
    setIsPatientConfirmed(true);
    setConsultationStep(1);

    const confirmMsg = {
      id: Date.now(),
      sender: 'user',
      text: `Patient Name: ${patientName}, Age: ${patientAge} Yrs (${patientGender})`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, confirmMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      sound.playSelect();
      const doctorWelcome = {
        id: Date.now() + 1,
        sender: 'ai',
        text: `Dhanyawad **${patientName}** ji (Umar: **${patientAge} saal**). Aapka clinical profile open kar diya gaya hai.\n\n**Aap aaj kis bimaari ya takleef ke liye aaye hain?**\n(Neeche diye gaye vikalpon me se apni samasya chunein ya apni takleef likh kar batayein):`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isPrimaryComplaintStep: true
      };
      setMessages(prev => [...prev, doctorWelcome]);
    }, 600);
  };

  // Run final clinical diagnosis
  const generateFinalDiagnosis = (allSymptoms) => {
    setIsTyping(true);

    setTimeout(() => {
      sound.playScan();
      const categoryHint = activeCategory ? `${activeCategory} ` : '';
      const fullText = `${categoryHint}${allSymptoms.join(' ')}`;
      const result = diagnosePatientInput(fullText, messages);
      const diag = result.disease;

      // Enrich report with confirmed patient details
      const enrichedReport = {
        ...result.medicalReport,
        patientName: patientName,
        ageGender: `${patientAge} Yrs / ${patientGender}`,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
      };

      const finalReply = {
        id: Date.now() + 1,
        sender: 'ai',
        text: `Dhanyawad **${patientName}** ji! Maine aapke sabhi jawabo ka clinical analysis kar liya hai. Aapki official Medical Report & Prescription sheet taiyar hai:`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        diagnosis: diag,
        symptomBadges: result.symptomBadges,
        migraineStatus: result.migraineStatus,
        medicalReport: enrichedReport,
        cameraView: result.cameraView
      };

      setIsTyping(false);
      setMessages(prev => [...prev, finalReply]);
      setLastDiagnosis(diag);
      setLastMedicalReport(enrichedReport);
      sound.playSelect();

      // Automatically sync to 3D Brain Viewer
      if (onSyncWithBrain && result.targetNodes) {
        onSyncWithBrain(result.targetNodes, result.cameraView);
      }
    }, 850);
  };

  // Main message / option click handler
  const handleSendMessage = (textToSend = null) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    sound.playClick();

    // Check if user is clicking a disease category card
    const isCategorySelection = DISEASE_CATEGORY_OPTIONS.some(c => c.id === text);

    // STEP 1: Choosing Primary Disease Category (or directly clicking a category card)
    if (isCategorySelection || consultationStep === 1) {
      const matchedCategoryObj = DISEASE_CATEGORY_OPTIONS.find(c => c.id === text) ||
                                 DISEASE_CATEGORY_OPTIONS.find(c => c.id === detectProblemCategory(text)) ||
                                 DISEASE_CATEGORY_OPTIONS[0];
      const catId = matchedCategoryObj.id;

      // Post user's selected category message
      const userMsg = {
        id: Date.now(),
        sender: 'user',
        text: `${matchedCategoryObj.icon} ${matchedCategoryObj.title}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, userMsg]);
      setInputVal('');

      const updatedSymptoms = [...collectedSymptoms, text];
      setCollectedSymptoms(updatedSymptoms);

      setActiveCategory(catId);
      setCategoryQuestionIdx(0);
      setConsultationStep(2);

      const questions = CATEGORY_INTERVIEW_QUESTIONS[catId] || CATEGORY_INTERVIEW_QUESTIONS['headache'];
      const firstQ = questions[0];

      // Auto-focus 3D Brain to category-relevant nodes
      if (onSyncWithBrain) {
        if (catId === 'stroke') {
          onSyncWithBrain(['left-precentral-gyrus', 'right-precentral-gyrus', 'left-internal-capsule', 'right-internal-capsule', 'left-inferior-frontal-gyrus'], 'leftSagittal');
        } else if (catId === 'vertigo') {
          onSyncWithBrain(['cerebellum', 'cerebellum2', 'pons', 'medulla-oblongata'], 'posterior');
        } else if (catId === 'tremor') {
          onSyncWithBrain(['substantia-nigra', 'caudate-nucleus', 'putamen', 'globus-pallidus'], 'isometric');
        } else if (catId === 'headache') {
          onSyncWithBrain(['left-middle-temporal-gyrus', 'right-middle-temporal-gyrus', 'left-occipital-lobe', 'right-occipital-lobe'], 'leftSagittal');
        }
      }

      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        sound.playSelect();

        const strokeNotice = catId === 'stroke'
          ? `🚨 **FAST CRITICAL STROKE TRIAGE PROTOCOL ACTIVATED**\n\n` +
            `*Agar mareez me Face droop (chehra jhukna), Arm weakness (haath/pair kamzor hona), ya Speech slur (bolne me dikkat) pichhle 4.5 ghante ke andar achanak aayi hai toh yeh acute Brain Stroke ho sakta hai. Turant **112 / 108** par call karein!*\n\n`
          : '';

        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'ai',
            text: `${strokeNotice}Maine aapki samasya note kar li hai: **${matchedCategoryObj.title}**.\n\nIski sahi clinical jaanch aur official medical report taiyar karne ke liye main aapse kuch zaroori sawal ek-ek karke puchunga:\n\n**Dr. Question 1: ${firstQ.question}**`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            questionOptions: firstQ.options,
            isStrokeEmergencyNotice: catId === 'stroke'
          }
        ]);
      }, 500);
      return;
    }

    // STEP 2+: Answering Category-Specific Targeted Questions (One by One)
    if (consultationStep >= 2 && consultationStep < 5) {
      const userMsg = {
        id: Date.now(),
        sender: 'user',
        text: text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, userMsg]);
      setInputVal('');

      const updatedSymptoms = [...collectedSymptoms, text];
      setCollectedSymptoms(updatedSymptoms);

      const currentCat = activeCategory || detectProblemCategory(text) || 'headache';
      const questions = CATEGORY_INTERVIEW_QUESTIONS[currentCat] || CATEGORY_INTERVIEW_QUESTIONS['headache'];
      const nextIdx = categoryQuestionIdx + 1;

      if (nextIdx < questions.length) {
        setCategoryQuestionIdx(nextIdx);
        const nextQ = questions[nextIdx];
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          sound.playSelect();
          setMessages(prev => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'ai',
              text: `**Dr. Question ${nextIdx + 1}:** ${nextQ.question}`,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              questionOptions: nextQ.options
            }
          ]);
        }, 500);
      } else {
        // All targeted questions completed! Proceed to final clinical report
        setConsultationStep(5);
        generateFinalDiagnosis(updatedSymptoms);
      }
      return;
    }

    // Check emergency & RAG retrieval for free text
    const ragResult = generateRAGResponse(text);

    // If emergency flagged, trigger urgent clinical warning
    if (ragResult.emergencyTriage) {
      if (onTriggerEmergency) {
        onTriggerEmergency({
          type: 'STROKE_FAST',
          title: ragResult.emergencyTriage.urgencyLabel || 'CRITICAL MEDICAL EMERGENCY: SUSPECTED ACUTE STROKE',
          urgency: 'TIME-CRITICAL EMERGENCY PROTOCOL (CALL 112)',
          description: ragResult.emergencyTriage.guidance || 'Acute cerebral ischemia or hemorrhage suspected. Do not wait for AI test.',
          instructions: [
            'AI assessment ya online test ka intazaar BILKUL NA KAREIN.',
            'Turant Emergency Helpline 112 (India) ya 911 par call karein.',
            'Mareez ko shaant leta kar sir ko halka sa (30 degree) uthayein.',
            'Mareez ko kuch bhi khane ya peene ko na dein (choking ka khatra hota hai).',
            'Record the exact time symptoms started (Golden Hour: 4.5 hours).'
          ],
          callNumber: '112',
          isCritical: true
        });
      }
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        sound.playAlert();
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'ai',
            text: ragResult.formattedResponse,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isEmergencyAlert: true
          }
        ]);
      }, 400);
      return;
    }

    // If user asked a direct knowledge base question (e.g. "What are the signs of stroke?", "Parkinson's kya hota hai?", "Explain Alzheimer's", etc.)
    const isDirectKnowledgeQuery = ragResult.hasMatch && (
      ragResult.matchScore >= 120 ||
      /kya hoti|kya hota|kya hai|batao|explain|what is|signs of|symptoms of|samjhao|سمجھائیں/i.test(text)
    );

    if (isDirectKnowledgeQuery) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        sound.playSelect();
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'ai',
            text: ragResult.formattedResponse,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            diseaseData: ragResult.retrievedDisease
          }
        ]);
        if (onSyncWithBrain && ragResult.retrievedDisease?.target_3d_nodes) {
          onSyncWithBrain(ragResult.retrievedDisease.target_3d_nodes);
        }
      }, 500);
      return;
    }

    // Display user text in chat
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');

    const updatedSymptoms = [...collectedSymptoms, text];
    setCollectedSymptoms(updatedSymptoms);

    // If already in final stage (consultationStep >= 5), update evaluation with new symptom input
    if (consultationStep >= 5) {
      generateFinalDiagnosis(updatedSymptoms);
    }
  };

  const handleVoiceRead = (text) => {
    sound.playClick();
    if (isSpeaking) {
      voiceAssistant.stop();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      voiceAssistant.speakText(text, () => setIsSpeaking(false));
    }
  };

  const handleTrigger3DView = (targetNodes, view = 'isometric') => {
    sound.playSelect();
    if (onSyncWithBrain && targetNodes) {
      onSyncWithBrain(targetNodes, view);
    }
    if (onSwitchTo3D) {
      onSwitchTo3D();
    }
  };

  return (
    <div className="glass-panel p-3 sm:p-5 rounded-2xl sm:rounded-3xl border-cyan-500/30 flex flex-col h-[560px] sm:h-[650px] lg:h-[720px] shadow-2xl relative bg-[#060b18]/90">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <Stethoscope className="w-5 h-5 animate-pulse" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-white text-base tracking-wide">
                Al_Hayat NeuroCare AI Doctor
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-semibold">
                Live Consultant
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              मरीज़: <span className="text-cyan-300 font-semibold">{patientName}</span> ({patientAge} Yrs) • Step-by-Step Triage
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {lastMedicalReport && (
            <button
              onClick={() => {
                sound.playSelect();
                setActiveReportModal(lastMedicalReport);
              }}
              className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-black font-extrabold rounded-xl text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all flex items-center gap-1.5 animate-pulse"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>अपनी मेडिकल रिपोर्ट देखें</span>
            </button>
          )}

          {lastDiagnosis && (
            <button
              onClick={() => handleTrigger3DView(lastDiagnosis.target3DNodes)}
              className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-white rounded-xl text-xs font-bold shadow-lg transition-all flex items-center gap-1.5"
            >
              <Brain className="w-3.5 h-3.5 text-cyan-200" />
              <span className="hidden sm:inline">3D Brain</span>
            </button>
          )}
        </div>
      </div>

      {/* Chat Messages Body */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-4 my-2 scrollbar-thin">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {/* Avatar */}
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                msg.sender === 'ai'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow'
                  : 'bg-blue-600 text-white shadow'
              }`}
            >
              {msg.sender === 'ai' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
            </div>

            {/* Message Bubble */}
            <div
              className={`max-w-[94%] sm:max-w-[88%] rounded-2xl p-4 text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white shadow-lg rounded-tr-sm'
                  : 'glass-panel bg-slate-900/95 border border-slate-700/80 text-slate-200 rounded-tl-sm space-y-3.5 shadow-xl'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="font-medium text-sm text-white whitespace-pre-line">{msg.text}</div>
                {msg.sender === 'ai' && (
                  <button
                    onClick={() => handleVoiceRead(msg.diagnosis ? `${msg.text}. ${msg.diagnosis.explanationHindi}` : msg.text)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 flex-shrink-0 transition-colors"
                    title="Awaaz me sunein (Listen Aloud)"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-cyan-400 hover:text-white" />
                  </button>
                )}
              </div>

              {/* STEP 1: INITIAL PATIENT DETAILS CONFIRMATION (मरीज़ के पूछने से पहले ही डॉक्टर पूछेगा) */}
              {msg.isDemographicsStep && !isPatientConfirmed && (
                <div className="bg-slate-950/90 border border-cyan-500/40 p-4 rounded-xl space-y-3 my-2 shadow">
                  <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold">
                    <UserCheck className="w-4 h-4 text-cyan-400" />
                    <span>Patient Details Confirmation (मरीज़ का नाम और उम्र):</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400 block mb-1">Patient Full Name (नाम):</label>
                      <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="e.g. Mohd Sahil"
                        className="w-full glass-input px-3 py-2 rounded-lg text-xs text-white focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono text-slate-400 block mb-1">Age / उम्र (Years):</label>
                      <input
                        type="number"
                        value={patientAge}
                        onChange={(e) => setPatientAge(e.target.value)}
                        placeholder="24"
                        className="w-full glass-input px-3 py-2 rounded-lg text-xs text-white text-center focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleConfirmDemographics}
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow"
                  >
                    <Check className="w-4 h-4" />
                    <span>Confirm & Start Step-by-Step Doctor Consultation →</span>
                  </button>
                </div>
              )}

              {/* STEP 2: PRIMARY COMPLAINT CATEGORY CARDS */}
              {msg.isPrimaryComplaintStep && consultationStep === 1 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 flex-wrap gap-1">
                    <span className="text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span>Aap kis bimari / takleef ke liye aaye hain? (Select Category):</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                      9 Specialised Triage Modules
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {DISEASE_CATEGORY_OPTIONS.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleSendMessage(cat.id)}
                        className="text-left p-3 rounded-2xl bg-slate-950/90 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-400 text-slate-200 hover:text-white transition-all flex flex-col justify-between group shadow-md hover:shadow-[0_0_18px_rgba(6,182,212,0.25)] relative overflow-hidden active:scale-[0.98]"
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="text-2xl p-1.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 group-hover:border-cyan-500/40 transition-transform flex-shrink-0">
                            {cat.icon}
                          </span>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                              {cat.title}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                              {cat.desc}
                            </div>
                          </div>
                        </div>
                        <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 font-semibold truncate max-w-[180px]">
                            {cat.badge}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-[11px] text-slate-300 flex items-center gap-2">
                    <span className="text-cyan-400 text-base">💡</span>
                    <span>
                      <strong className="text-white">Quick Tip:</strong> Upar kisi bhi card par click karein ya neeche chat box me seedhe likhkar batayein (jaise: <em className="text-cyan-300 font-mono">"mujhe neend nhi aati"</em>, <em className="text-cyan-300 font-mono">"dil tez dhadak raha hai"</em>, <em className="text-cyan-300 font-mono">"aadhe sar me dard hai"</em>).
                    </span>
                  </div>
                </div>
              )}

              {/* STROKE FAST URGENT ACTION BAR */}
              {msg.isStrokeEmergencyNotice && (
                <div className="bg-red-950/70 border border-red-500/50 p-3 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-red-200">
                  <div className="text-xs">
                    <strong className="text-white block font-mono">⚠️ GOLDEN HOUR PROTOCOL (4.5 HRS)</strong>
                    <span>Agar achanak lakwa ya kamzori aayi hai, toh turant 112 par call karein.</span>
                  </div>
                  <button
                    onClick={() => onTriggerEmergency && onTriggerEmergency({
                      type: 'STROKE_FAST',
                      title: 'FAST STROKE CRITICAL CHECKLIST',
                      urgency: 'TIME-CRITICAL EMERGENCY PROTOCOL (CALL 112)',
                      description: 'Agar mareez me Face droop, Arm weakness, ya Speech difficulty achanak aayi hai to turant 112 / 911 par call karein. Thrombolysis ka golden window 4.5 ghante ka hota hai.',
                      instructions: [
                        'DO NOT wait for any AI symptoms assessment.',
                        'Call Emergency 112 (India) or 911 immediately.',
                        'Keep patient calm with head elevated 30 degrees.',
                        'Record the exact time symptoms started.'
                      ],
                      callNumber: '112',
                      isCritical: true
                    })}
                    className="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.5)] cursor-pointer flex-shrink-0"
                  >
                    <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
                    <span>Emergency Modal / 112</span>
                  </button>
                </div>
              )}

              {/* STEP 3: INTERACTIVE QUESTION OPTIONS */}
              {msg.questionOptions && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {msg.questionOptions.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleSendMessage(opt)}
                      className="px-3 py-2 rounded-xl bg-slate-950 hover:bg-cyan-950 border border-slate-700/80 hover:border-cyan-400 text-slate-200 hover:text-white text-xs font-mono transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 4: VISUALLY HIGHLIGHTED SYMPTOM BADGES */}
              {msg.symptomBadges && msg.symptomBadges.length > 0 && (
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>पहचाने गए लक्षण (Detected Symptoms):</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {msg.symptomBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${badge.color}`}
                      >
                        <span className="font-bold opacity-80">{badge.label}:</span>
                        <span className="font-semibold">{badge.value}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: DEDICATED MIGRAINE EVALUATION BOX (Only shown if diagnosed as Migraine) */}
              {msg.migraineStatus && msg.migraineStatus.isMigraine === 'YES' && (
                <div className="p-3.5 rounded-xl border space-y-1.5 bg-purple-950/40 border-purple-500/40">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <span className="font-bold text-xs flex items-center gap-1.5 text-white">
                      <span>🧠 माइग्रेन जांच (Migraine Assessment):</span>
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border bg-purple-900/80 text-purple-200 border-purple-400">
                      {msg.migraineStatus.verdictHindi} ({msg.migraineStatus.percentage})
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {msg.migraineStatus.comparisonHindi}
                  </p>
                </div>
              )}

              {/* STEP 6: CLINICAL DIAGNOSIS & REMEDIES CARD */}
              {msg.diagnosis && (
                <div className="bg-slate-950/95 p-4 rounded-xl border border-slate-800 space-y-3 font-sans">
                  {/* Disease Title */}
                  <div className="border-l-4 border-cyan-400 pl-3">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                      मुख्य बीमारी (Primary Diagnosis):
                    </span>
                    <div className="text-base sm:text-lg font-extrabold text-cyan-300">
                      {msg.diagnosis.nameHindi}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {msg.diagnosis.nameEnglish} ({msg.diagnosis.icdCode})
                    </div>
                  </div>

                  {/* Lobe info */}
                  <div className="text-[11px] text-slate-300 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-start gap-2">
                    <Brain className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">दिमाग का प्रभावित हिस्सा (Affected Brain Anatomy):</span>
                      <span className="text-cyan-300 font-mono text-[11px]">{msg.diagnosis.affectedRegion}</span>
                    </div>
                  </div>

                  {/* Root cause */}
                  <div className="text-xs text-slate-200 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <strong className="text-cyan-400 block font-mono text-[10px] uppercase mb-1">
                      कारण और विवरण (Root Cause):
                    </strong>
                    {msg.diagnosis.explanationHindi}
                  </div>

                  {/* Home Relief Steps */}
                  {msg.diagnosis.homeRelief && (
                    <div className="bg-emerald-950/20 border border-emerald-500/30 p-3 rounded-lg space-y-1.5">
                      <span className="font-bold text-emerald-300 text-xs flex items-center gap-1.5 font-mono">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>घर पर तुरंत क्या करें (Immediate Relief):</span>
                      </span>
                      <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                        {msg.diagnosis.homeRelief.map((step, idx) => (
                          <li key={idx} className="leading-relaxed">{step}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Red flags */}
                  {msg.diagnosis.redFlags && (
                    <div className="text-xs text-amber-200 bg-amber-950/30 border border-amber-500/30 p-2.5 rounded-lg leading-relaxed flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-400 block mb-0.5 font-mono uppercase">खतरे के लक्षण (Emergency Red Flags):</strong>
                        <span>{msg.diagnosis.redFlags}</span>
                      </div>
                    </div>
                  )}

                  {/* Action Bar */}
                  <div className="pt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800">
                    {msg.medicalReport && (
                      <button
                        onClick={() => {
                          sound.playSelect();
                          setActiveReportModal(msg.medicalReport);
                        }}
                        className="px-3.5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-black font-extrabold rounded-xl text-xs font-mono shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all flex items-center gap-1.5"
                      >
                        <FileText className="w-4 h-4" />
                        <span>📋 अपनी मेडिकल रिपोर्ट देखें (View Report & Rx)</span>
                      </button>
                    )}

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleVoiceRead(`${msg.diagnosis.nameHindi}. ${msg.diagnosis.explanationHindi}`)}
                        className="px-2.5 py-1.5 rounded-lg bg-purple-950/50 hover:bg-purple-900/60 text-purple-300 border border-purple-500/40 text-xs font-mono flex items-center gap-1 transition-all"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-purple-400" />
                        <span>Suniye</span>
                      </button>

                      <button
                        onClick={() => handleTrigger3DView(msg.diagnosis.target3DNodes, msg.cameraView)}
                        className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                        <span>3D Brain →</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className={`text-[9px] font-mono mt-1 ${msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-500'}`}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="glass-panel px-4 py-2.5 rounded-2xl text-xs text-cyan-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono">Dr. Al_Hayat evaluating symptoms & recording clinical file...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="flex items-center gap-2 pt-2 border-t border-slate-800"
      >
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={isPatientConfirmed ? "Doctor ke sawal ka jawab dein ya lakshan likhein..." : "Apna naam aur umar confirm karein..."}
          className="flex-1 glass-input px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        />

        <button
          type="submit"
          disabled={!inputVal.trim() || isTyping}
          className="px-3.5 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg flex-shrink-0"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>

      {/* Full Official Medical Report Modal on White Paper */}
      <MedicalReportModal
        report={activeReportModal}
        isOpen={!!activeReportModal}
        onClose={() => setActiveReportModal(null)}
        onShowIn3D={(nodes) => handleTrigger3DView(nodes)}
      />
    </div>
  );
}
