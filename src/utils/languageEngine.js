// NeuroCare AI — Comprehensive Multilingual & Vernacular Clinical Translation Engine

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'hinglish', name: 'Hinglish', native: 'Hinglish (हिंदी)', flag: '🇮🇳' },
  { code: 'ur', name: 'Urdu', native: 'اردو', flag: '🇵🇰' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🇧🇩' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
];

// Core UI Translations
export const UI_TRANSLATIONS = {
  en: {
    appTitle: 'NeuroCare AI',
    subtitle: 'Clinical 3D Neuroanatomy & Deep Learning Diagnostic Suite',
    emergencyBanner: 'EMERGENCY ALERT: If experiencing sudden face drooping, arm weakness, or speech loss, call 112 / 911 immediately!',
    askDoctor: 'Consult AI Doctor',
    diagnose: 'Diagnose Symptoms',
    placeholder: "Describe your symptoms (e.g. 'sharp stabbing pain in left head since morning')...",
    show3D: 'Show in 3D Brain',
    prescription: 'Clinical Report',
    emergencyNotice: 'This platform supports medical education and doctor appointments. It does NOT replace emergency services or a qualified physician.',
    categories: 'Neurological Categories',
    allDiseases: 'Comprehensive Disease Library',
    searchPlaceholder: 'Search diseases, symptoms, or brain regions...',
    viewProfile: 'View Detailed Clinical Profile',
    disclaimerTitle: 'Medical Disclaimer',
    disclaimerText: 'NeuroCare AI is an educational and patient-support decision aid developed based on WHO and NINDS guidelines. It does not provide autonomous medical diagnosis or prescribe medications.'
  },
  hi: {
    appTitle: 'न्यूरोकेयर एआई (NeuroCare AI)',
    subtitle: 'क्लिनिकल 3डी न्यूरोएनाटॉमी एवं एआई मस्तिष्क स्वास्थ्य प्लेटफॉर्म',
    emergencyBanner: 'आपातकालीन चेतावनी: चेहरे का टेढ़ापन, हाथ में कमजोरी या बोली लड़खड़ाने पर तुरंत 112 / 108 पर कॉल करें!',
    askDoctor: 'एआई डॉक्टर से पूछें',
    diagnose: 'लक्षणों का विश्लेषण करें',
    placeholder: 'अपने लक्षण बताएं (जैसे: सुबह से सिर के बाईं तरफ एक बिंदु में सुई जैसा दर्द)...',
    show3D: '3D मस्तिष्क में देखें',
    prescription: 'डॉक्टर रिपोर्ट',
    emergencyNotice: 'यह प्लेटफॉर्म रोगी शिक्षा और डॉक्टर परामर्श में सहायता के लिए है। यह आपातकालीन सेवाओं का विकल्प नहीं है।',
    categories: 'न्यूरोलॉजिकल श्रेणियां',
    allDiseases: 'संपूर्ण न्यूरोलॉजी रोग ज्ञानकोष',
    searchPlaceholder: 'बीमारी, लक्षण या मस्तिष्क का हिस्सा खोजें...',
    viewProfile: 'विस्तृत क्लिनिकल विवरण देखें',
    disclaimerTitle: 'चिकित्सा अस्वीकरण',
    disclaimerText: 'न्यूरोकेयर एआई केवल स्वास्थ्य शिक्षा और न्यूरोलॉजिस्ट से मिलने की तैयारी के लिए है। यह डॉक्टर के व्यक्तिगत परामर्श का स्थान नहीं लेता है।'
  },
  hinglish: {
    appTitle: 'NeuroCare AI',
    subtitle: 'Clinical 3D Neuroanatomy & Deep Learning Diagnostic Suite',
    emergencyBanner: 'EMERGENCY ALERT: Agar chehra tedha ho, haath me kamzori ho ya bolne me dikkat ho, to turant 112 par call karein!',
    askDoctor: 'AI Doctor Se Baat Karein',
    diagnose: 'Symptom Diagnose Karein',
    placeholder: "Apne symptoms likhein (jaise: 'subah se left head me sui jaisi chubhan ho rhi hai')...",
    show3D: '3D Brain Me Dekhein',
    prescription: 'Clinical Report',
    emergencyNotice: 'Ye platform patient education aur doctor consultation ke support ke liye hai. Ye hospital emergency ka replacement nahi hai.',
    categories: 'Neurological Categories',
    allDiseases: 'Complete Disease Library',
    searchPlaceholder: 'Bimari, symptoms ya brain part search karein...',
    viewProfile: 'Full Clinical Details Dekhein',
    disclaimerTitle: 'Medical Disclaimer',
    disclaimerText: 'NeuroCare AI WHO aur NINDS guidelines par aadharit patient support tool hai. Ye kisi qualified doctor ka replacement nahi hai.'
  },
  ur: {
    appTitle: 'نیورو کیئر اے آئی (NeuroCare AI)',
    subtitle: 'کلینیکل تھری ڈی نیورو اناٹومی اور دماغی صحت کا پلیٹ فارم',
    emergencyBanner: 'ہنگامی انتباہ: چہرے کے جھکاؤ، بازو کی کمزوری یا بولنے میں دشواری کی صورت میں فوری طور پر 112 پر کال کریں!',
    askDoctor: 'اے آئی ڈاکٹر سے مشورہ کریں',
    diagnose: 'علامات کی تشخیص کریں',
    placeholder: 'اپنی علامات بیان کریں (مثلاً صبح سے سر کے بائیں جانب سوئی جیسا درد)...',
    show3D: 'تھری ڈی دماغ میں دیکھیں',
    prescription: 'ڈاکٹر کی رپورٹ',
    emergencyNotice: 'یہ پلیٹ فارم صرف مریض کی رہنمائی اور تعلیم کے لیے ہے۔',
    categories: 'نیورولوجیکل کیٹیگریز',
    allDiseases: 'امراض کی مکمل لائبریری',
    searchPlaceholder: 'بیماری یا علامات تلاش کریں...',
    viewProfile: 'تفصیلی پروفائل دیکھیں',
    disclaimerTitle: 'طبی دستبرداری',
    disclaimerText: 'یہ سسٹم کسی مستند نیورولوجسٹ کا متبادل نہیں ہے۔'
  },
  bn: {
    appTitle: 'নিউরোকেয়ার এআই (NeuroCare AI)',
    subtitle: 'ক্লিনিক্যাল 3D নিউরোঅ্যানাটমি এবং স্নায়ু স্বাস্থ্য প্ল্যাটফর্ম',
    emergencyBanner: 'জরুরী সতর্কতা: হঠাৎ মুখের অসাড়তা, হাতের দুর্বলতা বা কথা বলতে অসুবিধা হলে অবিলম্বে 112 ডায়াল করুন!',
    askDoctor: 'এআই ডাক্তারের সাথে কথা বলুন',
    diagnose: 'উপসর্গ বিশ্লেষণ করুন',
    placeholder: 'আপনার লক্ষণগুলি লিখুন (যেমন: সকাল থেকে মাথার বাম পাশে সূঁচ ফোটার মতো ব্যথা)...',
    show3D: '3D মস্তিষ্কে দেখুন',
    prescription: 'প্রেসক্রিপশন সারাংশ',
    emergencyNotice: 'এই প্ল্যাটফর্মটি রোগীর শিক্ষা এবং ডাক্তার পরামর্শের জন্য তৈরি।',
    categories: 'স্নায়বিক রোগ বিভাগ',
    allDiseases: 'সম্পূর্ণ রোগ লাইব্রেরি',
    searchPlaceholder: 'রোগ বা লক্ষণ অনুসন্ধান করুন...',
    viewProfile: 'সম্পূর্ণ বিবরণ দেখুন',
    disclaimerTitle: 'চিকিৎসা দাবিত্যাগ',
    disclaimerText: 'এটি কোনো চিকিৎসকের বিকল্প নয়।'
  },
  ta: {
    appTitle: 'நியூரோகேர் AI (NeuroCare AI)',
    subtitle: '3D மூளை உடற்கூறியல் மற்றும் நரம்பியல் சுகாதார தளம்',
    emergencyBanner: 'அவசர எச்சரிக்கை: முகம் ஒருபக்கமாக கோணினால் அல்லது கை பலவீனமடைந்தால் உடனடியாக 112 ஐ அழைக்கவும்!',
    askDoctor: 'AI மருத்துவரிடம் கேளுங்கள்',
    diagnose: 'அறிகுறிகளை ஆய்வு செய்',
    placeholder: 'உங்கள் அறிகுறிகளை விவரிக்கவும் (எ.கா. காலையில் இருந்து தலையின் இடது பக்கத்தில் வலி)...',
    show3D: '3D மூளையில் காண்க',
    prescription: 'மருத்துவ அறிக்கை',
    emergencyNotice: 'இது கல்வி நோக்கங்களுக்கானது மற்றும் தகுதிவாய்ந்த மருத்துவரை மாற்றாது.',
    categories: 'நரம்பியல் வகைகள்',
    allDiseases: 'முழுமையான நோய் தகவல்',
    searchPlaceholder: 'நோய்கள் அல்லது அறிகுறிகளைத் தேடுங்கள்...',
    viewProfile: 'முழு விவரங்களைக் காண்க',
    disclaimerTitle: 'மருத்துவ மறுப்பு',
    disclaimerText: 'இது ஒரு மருத்துவ பரிசோதனை அல்ல.'
  },
  mr: {
    appTitle: 'न्यूरोकेअर एआय (NeuroCare AI)',
    subtitle: 'क्लिनिकल 3D मेंदू शरीररचना आणि न्यूरोलॉजी प्लॅटफॉर्म',
    emergencyBanner: 'तातडीचा इशारा: चेहऱ्यावर तिरळेपणा किंवा हातामध्ये अशक्तपणा आल्यास त्वरित 112 वर कॉल करा!',
    askDoctor: 'AI डॉक्टरांचा सल्ला घ्या',
    diagnose: 'लक्षणे तपासा',
    placeholder: 'तुमची लक्षणे सांगा (उदा. सकाळपासून डोक्याच्या डाव्या बाजूला तीव्र वेदना)...',
    show3D: '3D मेंदूमध्ये पहा',
    prescription: 'क्लिनिकल रिपोर्ट',
    emergencyNotice: 'हा प्लॅटफॉर्म केवळ रुग्णांच्या मार्गदर्शनासाठी आहे.',
    categories: 'न्यूरोलॉजिकल विभाग',
    allDiseases: 'संपूर्ण आजार ज्ञानकोश',
    searchPlaceholder: 'आजार किंवा लक्षणे शोधा...',
    viewProfile: 'तपशीलवार माहिती पहा',
    disclaimerTitle: 'वैद्यकीय अस्वीकरण',
    disclaimerText: 'हा प्लॅटफॉर्म तज्ज्ञ डॉक्टरांचा पर्याय नाही.'
  }
};

// Automatic Language Detector based on text unicode ranges & keywords
export function detectLanguage(text) {
  if (!text || typeof text !== 'string') return 'en';
  
  // Devanagari script (Hindi, Marathi)
  if (/[\u0900-\u097F]/.test(text)) {
    // If Marathi specific words appear
    if (/\b(आहे|नाही|डोके|दुखणे|कसे|काय)\b/i.test(text)) return 'mr';
    return 'hi';
  }

  // Arabic / Urdu script
  if (/[\u0600-\u06FF]/.test(text)) return 'ur';

  // Bengali script
  if (/[\u0980-\u09FF]/.test(text)) return 'bn';

  // Tamil script
  if (/[\u0B80-\u0BFF]/.test(text)) return 'ta';

  // Telugu script
  if (/[\u0C00-\u0C7F]/.test(text)) return 'te';

  // Gujarati script
  if (/[\u0A80-\u0AFF]/.test(text)) return 'gu';

  // Kannada script
  if (/[\u0C80-\u0CFF]/.test(text)) return 'kn';

  // Malayalam script
  if (/[\u0D00-\u0D7F]/.test(text)) return 'ml';

  // Gurmukhi / Punjabi script
  if (/[\u0A00-\u0A7F]/.test(text)) return 'pa';

  // Hinglish detection (Latin characters with Hindi words)
  const hinglishTokens = [
    'kya', 'hai', 'hain', 'ho', 'rha', 'raha', 'rhi', 'rahi', 'dard', 'sar', 'sir', 
    'haath', 'pair', 'kamzor', 'kamzori', 'subah', 'se', 'chubhan', 'shui', 'sui',
    'chakkar', 'ulti', 'aankh', 'mujhe', 'mere', 'meri', 'kuch', 'batao', 'dikhayein'
  ];
  
  const words = text.toLowerCase().split(/\s+/);
  const matchCount = words.filter(w => hinglishTokens.includes(w)).length;
  if (matchCount >= 2 || (matchCount >= 1 && words.length <= 4)) {
    return 'hinglish';
  }

  return 'en';
}

// Translate text or fallback
export function getTranslation(lang, key) {
  const table = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;
  return table[key] || UI_TRANSLATIONS.en[key] || key;
}
