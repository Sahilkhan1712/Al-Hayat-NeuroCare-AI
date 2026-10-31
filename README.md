# 🧠 Al_Hayat NeuroCare AI
### Premium AI-Powered Brain Health & 3D Visualization Platform
**Final-Year B.Tech CSE (AI & ML) Capstone Project**

---

## 🌟 Overview
**Al_Hayat NeuroCare AI** is a medical technology web application designed to bring realistic 3D neuroanatomy visualization together with clinical deep learning diagnostic models.

---

## 🔬 Core Highlights & Capabilities

### 1. 3D Anatomical Human Brain (Three.js & WebGL)
- **High-Fidelity Segmented Mesh:** 65 individually addressable anatomical structures derived from standard **BodyParts3D** atlases.
- **Accurate Anatomical Color Coding:**
  - **Frontal Lobe:** Glowing Pink / Red (`#ff2d75`)
  - **Parietal Lobe:** Electric Blue / Cyan (`#00e5ff`)
  - **Temporal Lobe:** Golden Yellow / Amber (`#ffb703`)
  - **Occipital Lobe:** Violet / Purple (`#a855f7`)
  - **Cerebellum:** Contrasting Pink / Magenta (`#f43f5e`)
  - **Brainstem:** Realistic Ivory / Bone (`#e2e8f0`)
  - **Limbic & Subcortical:** Deep Emerald / Teal (`#10b981`)
- **Physically Based Materials:** Custom `MeshPhysicalMaterial` with micro-sulcal normal bump maps, subsurface scattering transmission, and dynamic emissive glow.
- **Interactive Controls:**
  - Mouse drag 360° rotation (Three.js OrbitControls with smooth damping).
  - Scroll zoom and touch gesture support.
  - Multi-angle camera presets: **Anterior (Front)**, **Superior (Top-down)**, **Sagittal (Left & Right)**, **Posterior (Back)**, and **Isometric Perspective**.
  - **Exploded View / Layer Peeling:** Radial slider (0% to 100%) to expand cortical structures and reveal internal ventricles, hippocampus, and brainstem.
  - **Futuristic Medical Laser Scanner:** Vertical laser scanline plane with holographic radar crosshairs and circular glow.
  - **Shading Modes:** Reference Anatomical Lobes, Holographic MRI Glass, Synaptic Pulse Heatmap, and Clinical Pathology Lesion mode.
  - **Raycasting:** Real-time hover tooltips and click selection opening a detailed clinical inspector.

### 2. AI Scan Diagnostics Suite (Vision Transformer & ResNet-152)
- Multi-sequence MRI / CT scan analysis (T1-weighted, T2-FLAIR, DWI/ADC, CT Perfusion).
- **Grad-CAM Attention Heatmap:** Reveals convolutional discriminative focus on tumors, infarcts, and atrophy.
- **Lesion Volumetric Quantification ($cm^3$):** Calculates edema and lesion burden with confidence metrics (e.g., 98.7%).
- **Interactive 3D Sync:** "Map Pathology to 3D Brain" directly highlights corresponding territories in the 3D model.
- **Official Clinical Radiology Report:** Formatted clinical impressions with export/print preview.

### 3. Clinical Symptom Triage & Bayesian Localizer
- Interactive neurological symptom checklist (motor weakness, Broca expressive aphasia, Wernicke fluent aphasia, hemineglect, ataxia, episodic amnesia).
- Real-time syndromic inference (e.g. Acute MCA Stroke, Posterior Fossa Syndrome, Hippocampal Sclerosis).
- Project suspected functional focus onto the 3D brain model with a single click.

### 4. Real-Time Multi-Channel EEG Telemetry
- Live 6-channel EEG waveforms (Fp1-F7, C3-T3, P3-O1, Fp2-F8, C4-T4, P4-O2) in double banana montage.
- Real-time FFT spectral band power (Delta, Theta, Alpha, Beta, Gamma).
- Interactive **"Trigger Seizure Burst"** to simulate 3Hz epileptiform spike-and-wave paroxysms.

### 5. Neuro-Cognitive Assessment & Brain Age Estimator
- Machine Learning regression predicting biological **Brain Age vs Chronological Age** based on sleep architecture, cardiovascular fitness, and stress markers.
- Interactive **Stroop Color-Word Reaction Test** measuring prefrontal cortex (DLPFC) and anterior cingulate cognitive inhibitory control.

### 6. Synthesized Medical Audio Synthesizer
- Built-in Web Audio API feedback (subtle radar scan chirps, frequency tones, and alerts) with global mute control.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation & Launch

```bash
# Navigate to project directory
cd "neurocare-ai"

# Install dependencies (already installed)
npm install

# Start development server
npm run dev
```

Or from the workspace root:
```bash
npm run dev
```

Open your browser at:
`http://localhost:5173`

---

## 🛠 Tech Stack
- **Framework:** React 18 + Vite
- **3D Graphics:** Three.js (r170) + WebGL 2.0
- **3D Assets:** Segmented BodyParts3D GLB
- **Styling:** Tailwind CSS + Glassmorphism + Cyber-Clinical Dark Theme
- **Icons:** Lucide React
- **Audio:** Web Audio API Native Synthesizer
