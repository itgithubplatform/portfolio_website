'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

// Animated Sphere Component with Glow
function AnimatedSphere({ position, color, speed, scale = 1 }: { position: [number, number, number], color: string, speed: number, scale?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.3;

            // Subtle floating motion
            meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 0.3;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[scale, 64, 64]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.6}
                    emissive={color}
                    emissiveIntensity={0.5}
                />
            </Sphere>
        </Float>
    );
}

// Enhanced Particle Field with Colors
function ParticleField() {
    const points = useRef<THREE.Points>(null);

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(3000 * 3);
        const colors = new Float32Array(3000 * 3);

        const colorPalette = [
            new THREE.Color('#8b5cf6'), // purple
            new THREE.Color('#ec4899'), // pink
            new THREE.Color('#3b82f6'), // blue
            new THREE.Color('#06b6d4'), // cyan
        ];

        for (let i = 0; i < 3000; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 60;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return [positions, colors];
    }, []);

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.x = state.clock.getElapsedTime() * 0.03;
            points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                vertexColors
                sizeAttenuation
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

// Geometric Shapes Component
function GeometricShapes() {
    const torusRef = useRef<THREE.Mesh>(null);
    const octahedronRef = useRef<THREE.Mesh>(null);
    const icosahedronRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (torusRef.current) {
            torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
            torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
        }
        if (octahedronRef.current) {
            octahedronRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            octahedronRef.current.rotation.z = state.clock.getElapsedTime() * 0.3;
        }
        if (icosahedronRef.current) {
            icosahedronRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
            icosahedronRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <>
            {/* Torus */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <mesh ref={torusRef} position={[-8, 3, -5]}>
                    <torusGeometry args={[1.5, 0.5, 16, 100]} />
                    <meshStandardMaterial
                        color="#ec4899"
                        wireframe
                        transparent
                        opacity={0.3}
                        emissive="#ec4899"
                        emissiveIntensity={0.2}
                    />
                </mesh>
            </Float>

            {/* Octahedron */}
            <Float speed={2} rotationIntensity={1.5} floatIntensity={3}>
                <mesh ref={octahedronRef} position={[8, -3, -5]}>
                    <octahedronGeometry args={[2]} />
                    <meshStandardMaterial
                        color="#3b82f6"
                        wireframe
                        transparent
                        opacity={0.3}
                        emissive="#3b82f6"
                        emissiveIntensity={0.2}
                    />
                </mesh>
            </Float>

            {/* Icosahedron */}
            <Float speed={1.8} rotationIntensity={2} floatIntensity={2.5}>
                <mesh ref={icosahedronRef} position={[0, 5, -8]}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial
                        color="#06b6d4"
                        wireframe
                        transparent
                        opacity={0.25}
                        emissive="#06b6d4"
                        emissiveIntensity={0.2}
                    />
                </mesh>
            </Float>
        </>
    );
}

// Rings Component
function AnimatedRings() {
    const ring1Ref = useRef<THREE.Mesh>(null);
    const ring2Ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ring1Ref.current) {
            ring1Ref.current.rotation.x = state.clock.getElapsedTime() * 0.5;
            ring1Ref.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.x = -state.clock.getElapsedTime() * 0.4;
            ring2Ref.current.rotation.z = state.clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <>
            <mesh ref={ring1Ref} position={[5, 2, -3]}>
                <torusGeometry args={[2, 0.1, 16, 100]} />
                <meshStandardMaterial
                    color="#8b5cf6"
                    transparent
                    opacity={0.4}
                    emissive="#8b5cf6"
                    emissiveIntensity={0.3}
                />
            </mesh>
            <mesh ref={ring2Ref} position={[-5, -2, -4]}>
                <torusGeometry args={[1.5, 0.08, 16, 100]} />
                <meshStandardMaterial
                    color="#ec4899"
                    transparent
                    opacity={0.4}
                    emissive="#ec4899"
                    emissiveIntensity={0.3}
                />
            </mesh>
        </>
    );
}

// Main 3D Scene
function Scene() {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
            <pointLight position={[0, 10, 5]} intensity={1} color="#3b82f6" />
            <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={1.2} color="#06b6d4" />

            {/* 3D Elements */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <ParticleField />

            {/* Animated Spheres */}
            <AnimatedSphere position={[-5, 2, -3]} color="#8b5cf6" speed={0.5} scale={1.2} />
            <AnimatedSphere position={[5, -2, -4]} color="#ec4899" speed={0.7} scale={1} />
            <AnimatedSphere position={[0, 0, -6]} color="#3b82f6" speed={0.6} scale={1.5} />
            <AnimatedSphere position={[-3, -3, -5]} color="#06b6d4" speed={0.8} scale={0.8} />

            {/* Geometric Shapes */}
            <GeometricShapes />

            {/* Animated Rings */}
            <AnimatedRings />

            {/* Controls - subtle auto-rotation */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.3}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </>
    );
}

// Loading Fallback
function LoadingFallback() {
    return (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        </div>
    );
}

// Main Component
export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 75 }}
                style={{ background: 'transparent' }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}
