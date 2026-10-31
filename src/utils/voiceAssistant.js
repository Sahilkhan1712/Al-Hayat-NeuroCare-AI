// Al_Hayat NeuroCare AI Voice & Speech Assistant
// Bulletproof Web Speech Synthesis + Web Audio Chime + Single Welcome Voice Guarantee

class VoiceAssistant {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.hasWelcomed = false;
    this.audioCtx = null;
    this.voices = [];
    this.isSpeaking = false;

    // Check session storage to strictly ensure only once per session
    if (typeof window !== 'undefined') {
      try {
        if (sessionStorage.getItem('alhayat_welcomed') === 'true') {
          this.hasWelcomed = true;
        }
      } catch (e) {}
    }

    if (this.synth) {
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (!this.synth) return;
    try {
      this.voices = this.synth.getVoices() || [];
    } catch (e) {
      console.warn('Voices fetch error:', e);
    }
  }

  // Ensure AudioContext is running
  getAudioContext() {
    try {
      if (typeof window === 'undefined') return null;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      if (!this.audioCtx) {
        this.audioCtx = new AudioCtx();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    } catch (e) {
      console.warn('AudioContext init error:', e);
      return null;
    }
  }

  // Play a pleasant medical chime so user gets immediate audible feedback
  playMedicalChime() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'sine';
      // Harmonic clinical medical chime (D5 -> A5)
      osc1.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc2.frequency.setValueAtTime(880.00, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.38);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.38);
      osc2.stop(ctx.currentTime + 0.38);
    } catch (e) {
      console.warn('Audio chime error:', e);
    }
  }

  // Find best available voice
  getBestVoice() {
    if (!this.synth) return { voice: null, lang: 'en-US', textType: 'romanized' };

    let voices = this.voices;
    if (!voices || voices.length === 0) {
      try {
        voices = this.synth.getVoices() || [];
        this.voices = voices;
      } catch (e) {}
    }

    if (!voices || voices.length === 0) {
      return { voice: null, lang: 'hi-IN', textType: 'romanized' };
    }

    // 1. Check for native Hindi voice (Google हिन्दी, Lekha, etc.)
    const hiVoice = voices.find(
      v => (v.lang && (v.lang.toLowerCase().includes('hi') || v.lang.toLowerCase().includes('hindi'))) ||
           (v.name && v.name.toLowerCase().includes('hindi'))
    );
    if (hiVoice) {
      return { voice: hiVoice, lang: 'hi-IN', textType: 'hindi' };
    }

    // 2. Check for Indian English voice (Rishi, Veena, en-IN)
    const inVoice = voices.find(
      v => (v.lang && v.lang.toLowerCase().includes('en-in')) ||
           (v.name && (v.name.toLowerCase().includes('india') || v.name.toLowerCase().includes('rishi') || v.name.toLowerCase().includes('veena')))
    );
    if (inVoice) {
      return { voice: inVoice, lang: 'en-IN', textType: 'romanized' };
    }

    // 3. Fallback to default or any English voice
    const defaultVoice = voices.find(v => v.default) || voices.find(v => v.lang.startsWith('en')) || voices[0];
    return { voice: defaultVoice, lang: defaultVoice?.lang || 'en-US', textType: 'romanized' };
  }

  // Speak Welcome Greeting EXACTLY ONCE on login/register:
  // "Namaste, aapka Al_Hayat NeuroCare AI mein swagat hai."
  speakWelcome(force = false) {
    if (!this.synth) return;
    if (this.hasWelcomed && !force) return;

    // Immediately mark as welcomed so it NEVER speaks again during this session
    this.hasWelcomed = true;
    try {
      sessionStorage.setItem('alhayat_welcomed', 'true');
    } catch (e) {}

    this.playMedicalChime();

    try {
      this.synth.cancel();
      if (this.synth.paused) {
        this.synth.resume();
      }

      const { voice, lang, textType } = this.getBestVoice();

      // Clean single greeting as requested
      const spokenText = textType === 'hindi'
        ? 'नमस्ते, आपका अल-हयात न्यूरो एआई में स्वागत है।'
        : 'Namaste, aapka Al Hayat NeuroCare AI mein swagat hai.';

      const utterance = new SpeechSynthesisUtterance(spokenText);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.volume = 1.0;

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = lang || 'en-US';
      }

      utterance.onstart = () => {
        this.isSpeaking = true;
      };

      utterance.onend = () => {
        this.isSpeaking = false;
      };

      utterance.onerror = () => {
        this.isSpeaking = false;
        // Fallback once if needed
        if (textType === 'hindi') {
          const fb = new SpeechSynthesisUtterance('Namaste, aapka Al Hayat NeuroCare AI mein swagat hai.');
          fb.rate = 0.95;
          this.synth.speak(fb);
        }
      };

      this.synth.speak(utterance);
    } catch (e) {
      console.warn('SpeechSynthesis speak failed:', e);
    }
  }

  // Speak any clinical diagnosis or message text (when user clicks Suniye)
  speakText(text, onEndCallback = null) {
    if (!this.synth || !text) return;

    this.playMedicalChime();

    try {
      this.synth.cancel();
      if (this.synth.paused) {
        this.synth.resume();
      }

      // Clean markdown, symbols, URLs
      const cleanText = text
        .replace(/[*_#`[\]()]/g, ' ')
        .replace(/https?:\/\/\S+/g, '')
        .replace(/([0-9]+)\. /g, 'Point $1: ')
        .replace(/\s+/g, ' ')
        .trim();

      const { voice, lang } = this.getBestVoice();
      const utterance = new SpeechSynthesisUtterance(cleanText);

      utterance.rate = 0.98;
      utterance.pitch = 1.02;
      utterance.volume = 1.0;

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = lang || 'en-US';
      }

      utterance.onstart = () => {
        this.isSpeaking = true;
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        if (onEndCallback) onEndCallback();
      };

      utterance.onerror = (e) => {
        console.warn('Speech error:', e);
        this.isSpeaking = false;
        if (onEndCallback) onEndCallback();
      };

      this.synth.speak(utterance);
    } catch (e) {
      console.warn('Speech error:', e);
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
    }
  }
}

export const voiceAssistant = new VoiceAssistant();
