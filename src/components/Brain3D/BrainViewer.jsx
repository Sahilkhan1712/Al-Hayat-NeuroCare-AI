import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {
  LOBE_PALETTES,
  ANATOMICAL_STRUCTURES,
  getNodeLobe
} from '../../data/brainAnatomyData';
import {
  createCortexNormalMap,
  createScanPlane,
  createNeuralParticles,
  createHolographicRings
} from './brainShaders';
import { sound } from '../../utils/audio';
import {
  RotateCw,
  Eye,
  Layers,
  ZoomIn,
  ZoomOut,
  RefreshCw,
  Sliders,
  Scan,
  Compass,
  Sparkles,
  Info
} from 'lucide-react';

export default function BrainViewer({
  selectedNode,
  onSelectNode,
  highlightedNodes = [],
  activePathology = null,
  activeFilter = 'all', // 'all', 'frontal', 'parietal', etc.
  cameraView = null
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const brainGroupRef = useRef(null);
  const meshMapRef = useRef(new Map());
  const scanPlaneRef = useRef(null);
  const ringsRef = useRef(null);
  const particlesRef = useRef(null);
  const animFrameIdRef = useRef(null);

  // UI state
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [rotateSpeed, setRotateSpeed] = useState(0.8);
  const [scannerActive, setScannerActive] = useState(true);
  const [shadingMode, setShadingMode] = useState('anatomical'); // 'anatomical', 'xray', 'neural', 'pathology'
  const [explosionAmount, setExplosionAmount] = useState(0); // 0 to 1
  const [hoveredInfo, setHoveredInfo] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Camera presets
  const setCameraView = (view) => {
    sound.playClick();
    if (!cameraRef.current || !controlsRef.current) return;
    const controls = controlsRef.current;
    const camera = cameraRef.current;

    const views = {
      isometric: { pos: [3.2, 2.2, 4.2], target: [0, 0, 0] },
      anterior: { pos: [0, 0.4, 5.0], target: [0, 0, 0] }, // Frontal face view
      posterior: { pos: [0, 0.4, -5.0], target: [0, 0, 0] }, // Occipital view
      superior: { pos: [0, 5.2, 0.1], target: [0, 0, 0] }, // Top-down
      leftSagittal: { pos: [-5.0, 0.3, 0], target: [0, 0, 0] }, // Left side
      rightSagittal: { pos: [5.0, 0.3, 0], target: [0, 0, 0] } // Right side
    };

    const targetView = views[view] || views.isometric;

    // Smooth animation to view
    const startPos = camera.position.clone();
    const endPos = new THREE.Vector3(...targetView.pos);
    const startTarget = controls.target.clone();
    const endTarget = new THREE.Vector3(...targetView.target);

    let progress = 0;
    const duration = 600; // ms
    const startTime = performance.now();

    const animateTransition = (currentTime) => {
      const elapsed = currentTime - startTime;
      progress = Math.min(elapsed / duration, 1.0);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      camera.position.lerpVectors(startPos, endPos, ease);
      controls.target.lerpVectors(startTarget, endTarget, ease);
      controls.update();

      if (progress < 1.0) {
        requestAnimationFrame(animateTransition);
      }
    };
    requestAnimationFrame(animateTransition);
  };

  // Reset camera view
  const handleResetCamera = () => {
    setCameraView('isometric');
  };

  // External camera view triggers (e.g. from AI Doctor chat)
  useEffect(() => {
    if (cameraView) {
      setCameraView(cameraView);
    }
  }, [cameraView]);

  // Update exploded view offsets
  useEffect(() => {
    if (!meshMapRef.current) return;
    meshMapRef.current.forEach((data) => {
      if (data.mesh && data.origPos && data.radialVec) {
        data.mesh.position.copy(data.origPos).addScaledVector(data.radialVec, explosionAmount * 0.9);
      }
    });
  }, [explosionAmount]);

  // Update materials when shading mode, selection, highlights, or filters change
  const updateMaterials = useCallback(() => {
    if (!meshMapRef.current) return;
    const time = performance.now() * 0.002;

    meshMapRef.current.forEach((data, nodeName) => {
      const { mesh, lobe, structure } = data;
      if (!mesh || !mesh.material) return;

      const isSelected = selectedNode && (selectedNode.id === nodeName || selectedNode.name === nodeName);
      const isHighlighted = highlightedNodes.some(n => n.toLowerCase() === nodeName.toLowerCase());
      const isPathologyNode = activePathology && activePathology.affectedNodes.some(n => n.toLowerCase() === nodeName.toLowerCase());
      const matchesFilter = activeFilter === 'all' || lobe.id === activeFilter;

      // Handle visibility based on filter
      if (!matchesFilter && activeFilter !== 'all') {
        mesh.material.opacity = 0.15;
        mesh.material.transparent = true;
        mesh.material.roughness = 0.8;
        return;
      }

      if (shadingMode === 'anatomical') {
        // High fidelity anatomical lobe coloration
        mesh.material.transparent = false;
        mesh.material.opacity = 1.0;
        mesh.material.wireframe = false;

        if (isSelected) {
          mesh.material.color.setHex(0xffffff);
          mesh.material.emissive.set(lobe.emissive);
          mesh.material.emissiveIntensity = 1.2;
          mesh.material.roughness = 0.1;
        } else if (isHighlighted || isPathologyNode) {
          const highlightHex = activePathology ? 0xef4444 : 0x00f0ff;
          mesh.material.color.setHex(highlightHex);
          mesh.material.emissive.setHex(highlightHex);
          mesh.material.emissiveIntensity = 0.85;
          mesh.material.roughness = 0.2;
        } else {
          mesh.material.color.set(lobe.color);
          mesh.material.emissive.set(lobe.emissive);
          mesh.material.emissiveIntensity = lobe.id === 'brainstem' ? 0.15 : 0.45;
          mesh.material.roughness = lobe.id === 'brainstem' ? 0.35 : 0.22;
        }
      } else if (shadingMode === 'xray') {
        // Holographic MRI Glass Mode
        mesh.material.transparent = true;
        mesh.material.opacity = isSelected || isHighlighted ? 0.85 : 0.35;
        mesh.material.wireframe = false;
        mesh.material.color.set(isSelected ? 0x00f0ff : 0x0284c7);
        mesh.material.emissive.set(isSelected ? 0x00f0ff : 0x0369a1);
        mesh.material.emissiveIntensity = isSelected ? 1.0 : 0.4;
      } else if (shadingMode === 'neural') {
        // Pulsing synaptic neural activity mode
        const pulse = Math.sin(time * 3.0 + data.origPos.length() * 4.0) * 0.5 + 0.5;
        mesh.material.transparent = false;
        mesh.material.opacity = 1.0;
        mesh.material.wireframe = false;
        
        const baseColor = new THREE.Color(lobe.color);
        const hotColor = new THREE.Color(0xffffff);
        mesh.material.color.lerpColors(baseColor, hotColor, pulse * 0.6);
        mesh.material.emissive.set(lobe.emissive);
        mesh.material.emissiveIntensity = 0.2 + pulse * 0.8;
      } else if (shadingMode === 'pathology') {
        // Focus strictly on pathological lesions, dim others
        mesh.material.wireframe = false;
        if (isPathologyNode || isHighlighted) {
          mesh.material.transparent = false;
          mesh.material.opacity = 1.0;
          mesh.material.color.setHex(0xef4444);
          mesh.material.emissive.setHex(0xdc2626);
          mesh.material.emissiveIntensity = 1.1;
        } else {
          mesh.material.transparent = true;
          mesh.material.opacity = 0.2;
          mesh.material.color.setHex(0x1e293b);
          mesh.material.emissive.setHex(0x0f172a);
          mesh.material.emissiveIntensity = 0.1;
        }
      }
    });
  }, [selectedNode, highlightedNodes, activePathology, activeFilter, shadingMode]);

  useEffect(() => {
    updateMaterials();
  }, [updateMaterials]);

  // Main Three.js Scene Setup & Model Loading
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x040711);
    scene.fog = new THREE.FogExp2(0x040711, 0.05);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(3.2, 2.2, 4.2);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 2.0;
    controls.maxDistance = 9.0;
    controls.maxPolarAngle = Math.PI - 0.1;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    // 5. Lighting Suite
    // Ambient soft fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Key Light (Clean Medical White)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    // Cyan Clinical Rim Light
    const cyanRim = new THREE.DirectionalLight(0x00f0ff, 3.2);
    cyanRim.position.set(-6, 3, -4);
    scene.add(cyanRim);

    // Magenta Aesthetic Rim Light
    const magentaRim = new THREE.DirectionalLight(0xff2d75, 2.8);
    magentaRim.position.set(4, -3, -5);
    scene.add(magentaRim);

    // Warm Front Accent
    const warmFront = new THREE.PointLight(0xffd166, 1.6, 10);
    warmFront.position.set(0, -2, 4);
    scene.add(warmFront);

    // 6. Holographic Calibration Rings & Neural Particle Cloud
    const rings = createHolographicRings();
    scene.add(rings);
    ringsRef.current = rings;

    const particles = createNeuralParticles(700, 3.4);
    scene.add(particles);
    particlesRef.current = particles;

    // 7. Scanning Laser Plane
    const scanPlane = createScanPlane();
    scene.add(scanPlane);
    scanPlaneRef.current = scanPlane;

    // 8. Normal map texture for biological sulci/gyri bump
    const cortexNormal = createCortexNormalMap();

    // 9. Load Brain GLB Model
    const brainGroup = new THREE.Group();
    brainGroupRef.current = brainGroup;
    scene.add(brainGroup);

    const loader = new GLTFLoader();
    loader.load(
      '/models/brain.glb',
      (gltf) => {
        const root = gltf.scene;

        // Calculate original bounding box before transform
        const rawBox = new THREE.Box3().setFromObject(root);
        const rawCenter = rawBox.getCenter(new THREE.Vector3());
        const rawSize = rawBox.getSize(new THREE.Vector3());
        const maxDim = Math.max(rawSize.x, rawSize.y, rawSize.z);

        // Center original geometry at (0, 0, 0)
        root.position.x = -rawCenter.x;
        root.position.y = -rawCenter.y;
        root.position.z = -rawCenter.z;

        // Wrap inside container to rotate BodyParts3D coordinates to standard Three.js
        // BodyParts3D: Z is cranial (up), -Y is anterior (frontal)
        // Rotating -Math.PI / 2 on X maps:
        // +Z -> +Y (Up)
        // -Y -> +Z (Frontal faces camera)
        const orientedContainer = new THREE.Group();
        orientedContainer.rotation.x = -Math.PI / 2;
        orientedContainer.add(root);

        // Scale to a prominent size in view
        const targetScale = 3.8 / maxDim;
        orientedContainer.scale.setScalar(targetScale);

        brainGroup.add(orientedContainer);

        // Traverse all meshes and assign custom physically-based materials with distinct lobe colors
        root.traverse((child) => {
          if (child.isMesh) {
            const nodeName = child.name || child.parent?.name || 'unknown';
            const lobe = getNodeLobe(nodeName);
            const structure = ANATOMICAL_STRUCTURES[nodeName.toLowerCase()];

            // Physically Based Material with subsurface transmission & roughness
            const mat = new THREE.MeshPhysicalMaterial({
              color: new THREE.Color(lobe.color),
              emissive: new THREE.Color(lobe.emissive),
              emissiveIntensity: lobe.id === 'brainstem' ? 0.15 : 0.45,
              roughness: lobe.id === 'brainstem' ? 0.35 : 0.22,
              metalness: 0.1,
              clearcoat: 0.65,
              clearcoatRoughness: 0.2,
              transmission: 0.12,
              thickness: 0.4,
              normalMap: cortexNormal,
              normalScale: new THREE.Vector2(0.35, 0.35)
            });

            child.material = mat;
            child.castShadow = true;
            child.receiveShadow = true;

            // Compute radial expansion vector for exploded view
            child.geometry.computeBoundingBox();
            const childBox = child.geometry.boundingBox;
            const childCenter = childBox.getCenter(new THREE.Vector3());
            const worldCenter = childCenter.clone().applyMatrix4(child.matrixWorld);
            const radialVec = worldCenter.clone().normalize();

            // Store in map
            meshMapRef.current.set(nodeName, {
              mesh: child,
              nodeName,
              lobe,
              structure,
              origPos: child.position.clone(),
              radialVec: radialVec
            });
          }
        });

        setLoading(false);
        setLoadProgress(100);
        sound.playSelect();
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          const pct = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadProgress(pct);
        }
      },
      (error) => {
        console.error('Error loading brain model:', error);
        setLoading(false);
      }
    );

    // 10. Raycasting for Mouse Interaction (Hover & Click)
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const handlePointerMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      setMousePos({ x: e.clientX, y: e.clientY });

      // Raycast against all brain meshes
      raycaster.setFromCamera(pointer, camera);
      const meshes = Array.from(meshMapRef.current.values()).map(v => v.mesh).filter(Boolean);
      const intersects = raycaster.intersectObjects(meshes, false);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const nodeName = hit.name;
        const info = meshMapRef.current.get(nodeName);
        if (info) {
          setHoveredInfo({
            id: nodeName,
            name: info.structure?.name || nodeName.replace(/-/g, ' ').toUpperCase(),
            lobe: info.lobe,
            hemisphere: info.structure?.hemisphere || 'Cerebral',
            functionSummary: info.structure?.functions?.[0] || info.lobe.description
          });
          document.body.style.cursor = 'pointer';
          return;
        }
      }
      setHoveredInfo(null);
      document.body.style.cursor = 'default';
    };

    const handlePointerDown = (e) => {
      // Don't trigger if clicking UI buttons
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;

      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const meshes = Array.from(meshMapRef.current.values()).map(v => v.mesh).filter(Boolean);
      const intersects = raycaster.intersectObjects(meshes, false);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const nodeName = hit.name;
        const info = meshMapRef.current.get(nodeName);
        if (info && onSelectNode) {
          sound.playSelect();
          onSelectNode({
            id: nodeName,
            name: info.structure?.name || nodeName.replace(/-/g, ' ').toUpperCase(),
            lobe: info.lobe,
            structure: info.structure
          });
        }
      }
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousemove', handlePointerMove);
    domElement.addEventListener('click', handlePointerDown);

    // 11. Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 12. Animation Loop
    let clock = new THREE.Clock();
    let scanDirection = 1;
    let scanY = -1.6;

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Controls damping update
      controls.update();

      // Auto rotation
      if (autoRotate && brainGroupRef.current) {
        brainGroupRef.current.rotation.y += delta * 0.25 * rotateSpeed;
      }

      // Rotate holographic rings
      if (ringsRef.current) {
        ringsRef.current.rotation.y = elapsed * 0.08;
        ringsRef.current.rotation.z = Math.sin(elapsed * 0.2) * 0.1;
      }

      // Rotate neural particle dust
      if (particlesRef.current) {
        particlesRef.current.rotation.y = -elapsed * 0.04;
      }

      // Animate laser scanner plane
      if (scanPlaneRef.current) {
        if (scannerActive) {
          scanPlaneRef.current.visible = true;
          scanY += delta * 0.9 * scanDirection;
          if (scanY > 1.8) {
            scanY = 1.8;
            scanDirection = -1;
          } else if (scanY < -1.8) {
            scanY = -1.8;
            scanDirection = 1;
          }
          scanPlaneRef.current.position.y = scanY;
          if (scanPlaneRef.current.material.uniforms?.uTime) {
            scanPlaneRef.current.material.uniforms.uTime.value = elapsed;
          }
        } else {
          scanPlaneRef.current.visible = false;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousemove', handlePointerMove);
      domElement.removeEventListener('click', handlePointerDown);

      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement.parentNode) {
          rendererRef.current.domElement.parentNode.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, [autoRotate, rotateSpeed, scannerActive, onSelectNode]);

  return (
    <div className="relative w-full h-full min-h-[550px] lg:min-h-[720px] rounded-2xl overflow-hidden glass-panel select-none">
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Loading Screen Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-[#040711]/90 backdrop-blur-md flex flex-col items-center justify-center z-50">
          <div className="relative w-28 h-28 mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 animate-ping" />
            <div className="absolute inset-2 rounded-full border-2 border-t-cyan-400 border-r-pink-500 border-b-purple-500 border-l-transparent animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-4xl">
              🧠
            </div>
          </div>
          <h3 className="text-xl font-bold tracking-wider text-slate-100 flex items-center gap-2">
            INITIALIZING 3D NEURAL MESH
          </h3>
          <p className="text-xs text-cyan-400 font-mono mt-1 tracking-widest uppercase">
            BodyParts3D Atlases • 65 Segmented Structures
          </p>
          <div className="w-64 h-1.5 bg-slate-800 rounded-full mt-5 overflow-hidden border border-slate-700">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="text-xs text-slate-400 font-mono mt-2">{loadProgress}% Synchronized</span>
        </div>
      )}

      {/* Holographic HUD Top Header */}
      <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none z-10">
        <div className="flex items-center gap-3">
          <div className="glass-panel px-3.5 py-1.5 rounded-xl flex items-center gap-2 border-cyan-500/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300">
              3D BRAIN ANATOMY ENGINE
            </span>
          </div>

          <div className="hidden sm:flex glass-panel px-3 py-1.5 rounded-xl items-center gap-2 text-xs font-mono text-slate-400 border-slate-700/50">
            <span className="text-slate-500">SHADING:</span>
            <span className="text-white font-medium uppercase tracking-wider">{shadingMode}</span>
          </div>
        </div>

        {/* View Camera Presets Bar */}
        <div className="pointer-events-auto flex items-center gap-1.5 glass-panel p-1 rounded-xl bg-slate-900/80 border-slate-700/60 shadow-xl">
          <button
            onClick={() => setCameraView('anterior')}
            className="px-2.5 py-1 text-[11px] font-mono rounded-lg hover:bg-cyan-500/20 hover:text-cyan-300 transition-all text-slate-300"
            title="Frontal Anterior View"
          >
            Anterior
          </button>
          <button
            onClick={() => setCameraView('superior')}
            className="px-2.5 py-1 text-[11px] font-mono rounded-lg hover:bg-cyan-500/20 hover:text-cyan-300 transition-all text-slate-300"
            title="Superior Top-Down View"
          >
            Superior
          </button>
          <button
            onClick={() => setCameraView('leftSagittal')}
            className="px-2.5 py-1 text-[11px] font-mono rounded-lg hover:bg-cyan-500/20 hover:text-cyan-300 transition-all text-slate-300"
            title="Left Lateral Sagittal View"
          >
            Sagittal (L)
          </button>
          <button
            onClick={() => setCameraView('rightSagittal')}
            className="px-2.5 py-1 text-[11px] font-mono rounded-lg hover:bg-cyan-500/20 hover:text-cyan-300 transition-all text-slate-300"
            title="Right Lateral Sagittal View"
          >
            Sagittal (R)
          </button>
          <button
            onClick={() => setCameraView('posterior')}
            className="px-2.5 py-1 text-[11px] font-mono rounded-lg hover:bg-cyan-500/20 hover:text-cyan-300 transition-all text-slate-300"
            title="Posterior Occipital View"
          >
            Posterior
          </button>
          <button
            onClick={handleResetCamera}
            className="p-1.5 text-xs rounded-lg hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-200 transition-all"
            title="Reset to Isometric Perspective"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Anatomical Color Legend (Reference Match) */}
      <div className="absolute top-16 left-4 pointer-events-auto z-10 hidden md:block">
        <div className="glass-panel p-3 rounded-xl max-w-[210px] space-y-2 border-slate-700/60 shadow-2xl">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Anatomical Reference</span>
            <Sparkles className="w-3 h-3 text-cyan-400" />
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff2d75] shadow-[0_0_8px_#ff2d75]" />
              <span className="text-slate-200 text-[11px]">Frontal: Pink/Red</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
              <span className="text-slate-200 text-[11px]">Parietal: Cyan/Blue</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ffb703] shadow-[0_0_8px_#ffb703]" />
              <span className="text-slate-200 text-[11px]">Temporal: Amber/Gold</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7]" />
              <span className="text-slate-200 text-[11px]">Occipital: Violet/Purple</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#f43f5e] shadow-[0_0_8px_#f43f5e]" />
              <span className="text-slate-200 text-[11px]">Cerebellum: Magenta</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#e2e8f0] shadow-[0_0_8px_#e2e8f0]" />
              <span className="text-slate-200 text-[11px]">Brainstem: Realistic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Dynamic Hover Tooltip Following Cursor */}
      {hoveredInfo && (
        <div
          className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-full mb-3"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y - 12}px`
          }}
        >
          <div className="glass-panel-glow px-3.5 py-2 rounded-xl text-left shadow-2xl border-cyan-400/50 max-w-xs animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: hoveredInfo.lobe.color }}
              />
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300">
                {hoveredInfo.lobe.name} • {hoveredInfo.hemisphere}
              </span>
            </div>
            <div className="font-bold text-sm text-white leading-tight">
              {hoveredInfo.name}
            </div>
            <div className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed">
              {hoveredInfo.functionSummary}
            </div>
            <div className="mt-1.5 text-[9px] font-mono text-cyan-400/80 flex items-center gap-1">
              <span>Click to inspect clinical details</span>
              <span>→</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none z-10">
        {/* Left: Shading Modes */}
        <div className="pointer-events-auto flex items-center gap-1 glass-panel p-1 rounded-xl bg-slate-900/80 border-slate-700/60 shadow-xl">
          <button
            onClick={() => {
              sound.playClick();
              setShadingMode('anatomical');
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              shadingMode === 'anatomical'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Anatomical</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setShadingMode('xray');
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              shadingMode === 'xray'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>MRI Glass</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setShadingMode('neural');
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              shadingMode === 'neural'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <ZapIcon />
            <span>Synaptic</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setShadingMode('pathology');
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              shadingMode === 'pathology'
                ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span>Pathology</span>
          </button>
        </div>

        {/* Center: Exploded View Slider */}
        <div className="pointer-events-auto flex items-center gap-2.5 glass-panel px-3.5 py-1.5 rounded-xl bg-slate-900/80 border-slate-700/60 shadow-xl">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-mono text-slate-300">Explode:</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.02"
            value={explosionAmount}
            onChange={(e) => setExplosionAmount(parseFloat(e.target.value))}
            className="w-24 md:w-32 accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <span className="text-xs font-mono text-cyan-400 w-8 text-right">
            {Math.round(explosionAmount * 100)}%
          </span>
        </div>

        {/* Right: Quick Action Toggles */}
        <div className="pointer-events-auto flex items-center gap-1.5 glass-panel p-1 rounded-xl bg-slate-900/80 border-slate-700/60 shadow-xl">
          {/* Laser Scanner Toggle */}
          <button
            onClick={() => {
              sound.playScan();
              setScannerActive(!scannerActive);
            }}
            className={`p-2 rounded-lg text-xs transition-all flex items-center gap-1.5 ${
              scannerActive
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
            title="Toggle Laser Scanline Beam"
          >
            <Scan className="w-4 h-4" />
            <span className="text-xs font-mono hidden sm:inline">Laser Scan</span>
          </button>

          {/* Auto Rotation Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setAutoRotate(!autoRotate);
            }}
            className={`p-2 rounded-lg text-xs transition-all flex items-center gap-1.5 ${
              autoRotate
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
            title="Toggle Auto Rotation"
          >
            <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            <span className="text-xs font-mono hidden sm:inline">Orbit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ZapIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
