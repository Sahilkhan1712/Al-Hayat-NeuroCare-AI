# 🧠 Al_Hayat NeuroCare AI

### Premium AI-Powered Brain Health & 3D Neuroanatomy Visualization Platform

<p align="center">
  <img src="https://img.shields.io/badge/AI-Powered-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Three.js-3D%20Visualization-black?style=for-the-badge&logo=threedotjs" />
  <img src="https://img.shields.io/badge/Vite-Fast%20Build-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</p>

<p align="center">
  <strong>An Intelligent Healthcare Experience Powered by Artificial Intelligence, Deep Learning & Interactive 3D Technology.</strong>
</p>

<p align="center">
  <a href="https://al-hayat-neurocare-ai.vercel.app/">
    <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-Visit_Website-16A34A?style=for-the-badge" alt="Live Demo"/>
  </a>
  &nbsp;
  <a href="#-installation-and-setup">
    <img src="https://img.shields.io/badge/⚡_GET_STARTED-Installation-6D28D9?style=for-the-badge" alt="Get Started"/>
  </a>
</p>

---

## 🌐 Live Application

**Experience Al_Hayat NeuroCare AI live:**

🔗 https://al-hayat-neurocare-ai.vercel.app/

Explore an interactive brain visualization platform combining modern healthcare technology, AI-powered analysis concepts, and immersive 3D experiences.

---

## 📌 Project Overview

**Al_Hayat NeuroCare AI** is an advanced AI-powered healthcare web application developed as a Final-Year B.Tech Computer Science Engineering (AI & ML) Capstone Project.

The platform combines realistic 3D neuroanatomical visualization, intelligent neurological assessment, medical imaging analysis workflows, EEG signal visualization, and cognitive assessment tools.

Its primary objective is to make complex neurological concepts easier to explore through an interactive, technology-driven healthcare experience.

---

## ✨ Core Features

### 1. 🧠 Interactive 3D Human Brain Visualization

An immersive 3D brain visualization system powered by **Three.js and WebGL**.

- 65 individually addressable anatomical structures.
- Anatomical segmentation based on BodyParts3D atlas assets.
- Realistic Physically Based Rendering (PBR) materials.
- Interactive 360° brain rotation.
- Smooth zoom and touch gesture controls.
- Multiple anatomical camera perspectives.
- Exploded view and anatomical layer exploration.
- Interactive hover tooltips and click-based structure selection.
- Futuristic medical laser scanning effects.

**Anatomical Color Coding**

| Brain Structure | Color |
|---|---|
| Frontal Lobe | `#ff2d75` |
| Parietal Lobe | `#00e5ff` |
| Temporal Lobe | `#ffb703` |
| Occipital Lobe | `#a855f7` |
| Cerebellum | `#f43f5e` |
| Brainstem | `#e2e8f0` |
| Limbic & Subcortical | `#10b981` |

**Visualization Modes**
- Reference Anatomical Lobes
- Holographic MRI Glass
- Synaptic Pulse Heatmap
- Clinical Pathology Lesion Mode

### 2. 🔬 AI Medical Scan Diagnostics Suite

An AI-oriented medical imaging analysis module designed around modern computer vision architectures.

**Key Capabilities:**
- MRI and CT imaging workflows.
- T1-weighted and T2-FLAIR scan support.
- DWI/ADC and CT Perfusion analysis workflows.
- Vision Transformer and ResNet-152 architecture integration.
- Grad-CAM attention heatmap visualization.
- Lesion volumetric quantification concepts.
- Confidence score visualization.
- Pathology-to-3D-brain mapping.
- Structured clinical report generation.
- Report preview, printing and export workflows.

### 3. 🩺 Neurological Symptom Assessment & Triage

An interactive neurological symptom assessment module.

**Assessment Categories:**
- Motor weakness
- Broca's expressive aphasia
- Wernicke's fluent aphasia
- Hemineglect
- Ataxia
- Episodic amnesia

**Features:**
- Interactive neurological symptom checklist.
- Bayesian localization concepts.
- Syndromic inference workflows.
- Suspected functional brain region visualization.
- Interactive mapping of neurological symptoms to 3D anatomy.

### 4. 📈 Real-Time EEG Telemetry Visualization

An interactive EEG monitoring and signal visualization module.

**Features:**
- Six-channel EEG waveform visualization.
- Double Banana montage.
- Real-time FFT spectral visualization.
- Delta, Theta, Alpha, Beta and Gamma frequency bands.
- Simulated epileptiform spike-and-wave activity.
- Interactive seizure burst simulation.

### 5. 🧩 Neuro-Cognitive Assessment & Brain Age Estimator

A cognitive assessment module exploring brain health and neurological performance.

**Features:**
- Brain age estimation concepts.
- Chronological age vs biological brain age comparison.
- Sleep architecture parameters.
- Cardiovascular fitness indicators.
- Stress-related assessment parameters.
- Interactive Stroop Color-Word Reaction Test.
- Cognitive inhibition assessment concepts.

### 6. 🔊 Medical Audio Synthesizer

An integrated audio feedback experience powered by the Web Audio API.

- Medical radar scanning sounds.
- Frequency-based audio tones.
- Interactive alert sounds.
- Global mute/unmute controls.

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React 18 |
| Build Tool | Vite |
| 3D Graphics | Three.js |
| Rendering | WebGL 2.0 |
| 3D Assets | BodyParts3D GLB |
| Styling | Tailwind CSS |
| UI Design | Glassmorphism & Dark Clinical Theme |
| Icons | Lucide React |
| Audio | Web Audio API |
| Deployment | Vercel |

---

## 🏗️ Application Architecture

The platform brings together multiple technology layers:

```text
Al_Hayat NeuroCare AI
│
├── React Frontend
│   ├── Interactive Dashboard
│   ├── 3D Brain Visualization
│   ├── MRI / CT Analysis Interface
│   ├── Neurological Assessment
│   ├── EEG Monitoring
│   └── Cognitive Assessment
│
├── 3D Visualization Engine
│   ├── Three.js
│   ├── WebGL Rendering
│   ├── Anatomical GLB Models
│   └── Interactive Raycasting
│
├── AI / ML Modules
│   ├── Vision Transformer
│   ├── ResNet-152
│   ├── Grad-CAM
│   └── Brain Age Estimation
│
└── Audio Engine
    └── Web Audio API
```

---

## 🚀 Installation and Setup

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to Project Directory

```bash
cd neurocare-ai
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

```text
http://localhost:5173
```

---

## 🎯 Project Objectives

- Develop an interactive 3D neurological visualization platform.
- Explore AI-assisted medical imaging analysis.
- Simplify neurological anatomy through immersive visualization.
- Demonstrate machine learning applications in healthcare.
- Visualize EEG signals and neurological activity.
- Explore cognitive assessment and brain health indicators.
- Build a modern, responsive and accessible healthcare interface.

---

## 🔮 Future Enhancements

- Integration of clinically validated AI diagnostic models.
- Secure patient authentication and medical records.
- Backend-powered medical imaging processing.
- Advanced 3D MRI reconstruction.
- Real-time doctor-patient consultation.
- Secure appointment and prescription management.
- Advanced neurological data analytics.
- Improved mobile and tablet experience.

---

## ⚠️ Medical Disclaimer

Al_Hayat NeuroCare AI is an educational and technology demonstration project.

Its AI visualization, simulated EEG signals, symptom assessment and imaging workflows must not be considered validated medical diagnoses. The application is not a substitute for professional medical advice, clinical evaluation or emergency medical care.

Actual clinical deployment requires appropriate medical validation, regulatory compliance and qualified healthcare professional supervision.

---

## 👨‍💻 Developer

**Developed as a Final-Year B.Tech Capstone Project**

**Domain:** Computer Science & Engineering – Artificial Intelligence and Machine Learning

**Project:** Al_Hayat NeuroCare AI

**Focus Areas:** Artificial Intelligence | Machine Learning | Healthcare Technology | 3D Visualization | Deep Learning

---

<p align="center">
  <strong>🧠 Al_Hayat NeuroCare AI</strong>
  <br/>
  <i>Bridging Artificial Intelligence, Neuroscience & Next-Generation Healthcare.</i>
  <br/><br/>
  <a href="https://al-hayat-neurocare-ai.vercel.app/">
    <img src="https://img.shields.io/badge/🌐_EXPLORE_LIVE_PROJECT-Visit_Al_Hayat_NeuroCare_AI-16A34A?style=for-the-badge" />
  </a>
  <br/><br/>
  ⭐ If you find this project interesting, consider giving it a star on GitHub!
</p>
