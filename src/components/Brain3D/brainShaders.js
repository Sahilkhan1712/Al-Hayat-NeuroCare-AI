import * as THREE from 'three';

// Generates a procedural high-frequency micro-texture for realistic biological cortex gyri & sulci relief
export function createCortexNormalMap() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Fill with base normal (flat Z = 128, 128, 255)
  ctx.fillStyle = '#8080ff';
  ctx.fillRect(0, 0, 512, 512);

  // Perlin-like noise simulation using concentric radial gradient noise
  for (let i = 0; i < 400; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = 8 + Math.random() * 24;
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    const intensity = Math.floor(10 + Math.random() * 30);
    grad.addColorStop(0, `rgba(${128 + intensity}, ${128 - intensity}, 255, 0.4)`);
    grad.addColorStop(1, 'rgba(128, 128, 255, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  return texture;
}

// Generates an animated medical scanline shader material for the horizontal laser scanner plane
export function createScanPlane() {
  const geometry = new THREE.PlaneGeometry(5.5, 5.5, 32, 32);
  
  // Custom glowing laser grid shader
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0x00f0ff) },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        // Distance from center
        float dist = distance(vUv, vec2(0.5));
        if (dist > 0.5) discard;
        
        // Circular ring glow at edge
        float ring = smoothstep(0.48, 0.5, dist) * (1.0 - smoothstep(0.5, 0.52, dist));
        
        // Fine medical grid lines
        float gridX = step(0.96, fract(vUv.x * 30.0));
        float gridY = step(0.96, fract(vUv.y * 30.0));
        float grid = max(gridX, gridY) * 0.4;
        
        // Center radar crosshair
        float axisX = 1.0 - smoothstep(0.002, 0.006, abs(vUv.x - 0.5));
        float axisY = 1.0 - smoothstep(0.002, 0.006, abs(vUv.y - 0.5));
        float crosshair = max(axisX, axisY) * 0.6;
        
        // Alpha falloff
        float alpha = (ring * 1.5 + grid + crosshair + 0.06) * (1.0 - dist * 1.6);
        
        gl_FragColor = vec4(uColor, clamp(alpha, 0.0, 0.85));
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  return mesh;
}

// Procedural floating neural particles
export function createNeuralParticles(count = 600, radius = 3.2) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  const basePalette = [
    new THREE.Color(0x00f0ff), // Cyan
    new THREE.Color(0xff2d75), // Pink/Red
    new THREE.Color(0xffb703), // Golden amber
    new THREE.Color(0xa855f7), // Violet
    new THREE.Color(0x38bdf8), // Sky blue
  ];

  for (let i = 0; i < count; i++) {
    // Distributed on and inside spherical shell
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = radius * (0.8 + Math.random() * 0.7);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const c = basePalette[Math.floor(Math.random() * basePalette.length)];
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;

    sizes[i] = 1.5 + Math.random() * 3.5;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  // Particle Canvas Sprite
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.3, 'rgba(0, 240, 255, 0.8)');
  grad.addColorStop(0.8, 'rgba(0, 240, 255, 0.15)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);

  const spriteTexture = new THREE.CanvasTexture(canvas);

  const material = new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    map: spriteTexture,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  return new THREE.Points(geometry, material);
}

// Concentric Holographic Calibration Rings
export function createHolographicRings() {
  const group = new THREE.Group();

  const ringsConfig = [
    { radius: 2.7, tube: 0.008, color: 0x00f0ff, opacity: 0.45, rotX: Math.PI / 2 + 0.15, rotY: 0.1 },
    { radius: 3.1, tube: 0.006, color: 0x38bdf8, opacity: 0.35, rotX: Math.PI / 2 - 0.25, rotY: -0.15 },
    { radius: 3.5, tube: 0.010, color: 0xa855f7, opacity: 0.25, rotX: Math.PI / 2, rotY: 0.3 },
  ];

  ringsConfig.forEach((cfg) => {
    const geom = new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 120);
    const mat = new THREE.MeshBasicMaterial({
      color: cfg.color,
      transparent: true,
      opacity: cfg.opacity,
      blending: THREE.AdditiveBlending
    });
    const ring = new THREE.Mesh(geom, mat);
    ring.rotation.x = cfg.rotX;
    ring.rotation.y = cfg.rotY;
    group.add(ring);
  });

  return group;
}
