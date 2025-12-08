# 3D Animated Background Components

This directory contains two animated background components for the portfolio landing page.

## Components

### 1. AnimatedBackground (3D - Full Featured)
**File:** `animated-background.tsx`

A stunning 3D animated background using Three.js and React Three Fiber.

**Features:**
- ✨ Multiple floating distorted spheres with glow effects
- 🌟 3000+ colored particles with smooth rotation
- 🔷 Geometric wireframe shapes (torus, octahedron, icosahedron)
- 💫 Animated rings with emissive materials
- ⭐ Star field background
- 🎨 Dynamic lighting (ambient, point lights, spotlight)
- 🔄 Auto-rotating camera controls
- 🎭 Smooth animations and transitions

**Performance:**
- High GPU usage
- Best for modern devices
- Hardware acceleration enabled

**Usage:**
```tsx
import AnimatedBackground from '@/components/3d/animated-background';

<AnimatedBackground />
```

### 2. SimpleAnimatedBackground (Canvas - Lightweight)
**File:** `simple-animated-background.tsx`

A lightweight canvas-based animated background for better performance.

**Features:**
- 🎨 150 colored particles with smooth movement
- 🔗 Dynamic particle connections
- 🌈 Multiple color palette (purple, pink, blue, cyan)
- 📱 Responsive and mobile-friendly
- ⚡ Low resource usage

**Performance:**
- Low GPU usage
- Works on all devices
- CPU-based rendering

**Usage:**
```tsx
import SimpleAnimatedBackground from '@/components/3d/simple-animated-background';

<SimpleAnimatedBackground />
```

## Switching Between Backgrounds

To switch between the 3D and simple backgrounds, update the import in `hero.tsx`:

### For 3D Background (Current):
```tsx
const AnimatedBackground = dynamic(() => import('../3d/animated-background'), {
  ssr: false,
  loading: () => null,
});
```

### For Simple Background:
```tsx
const AnimatedBackground = dynamic(() => import('../3d/simple-animated-background'), {
  ssr: false,
  loading: () => null,
});
```

## Dependencies

### 3D Background:
- `three` - 3D graphics library
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber
- `@types/three` - TypeScript types for Three.js

### Simple Background:
- No external dependencies (uses native Canvas API)

## Customization

### 3D Background Colors:
Edit the color values in `animated-background.tsx`:
```tsx
<AnimatedSphere position={[-5, 2, -3]} color="#8b5cf6" speed={0.5} scale={1.2} />
```

### Particle Count:
Adjust in `ParticleField` component:
```tsx
const positions = new Float32Array(3000 * 3); // Change 3000 to desired count
```

### Simple Background:
Adjust particle count:
```tsx
const particleCount = 150; // Change to desired count
```

## Performance Tips

1. **For slower devices:** Use `simple-animated-background.tsx`
2. **Reduce particles:** Lower the particle count in either component
3. **Disable auto-rotate:** Set `autoRotate={false}` in OrbitControls
4. **Reduce spheres:** Comment out some AnimatedSphere components

## Browser Compatibility

### 3D Background:
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari (may have reduced performance)
- ⚠️ Mobile browsers (use simple version)

### Simple Background:
- ✅ All modern browsers
- ✅ Mobile browsers
- ✅ Older browsers with Canvas support
