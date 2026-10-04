"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function GeometricShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  // useFrame runs on every single frame (not used)
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />

        <MeshDistortMaterial
          color="#18181b"
          wireframe={false}
          roughness={0.7}
          metalness={0.5}
          distort={0.5}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

export default function WireframeCanvas() {
  return (
    <div className="w-full h-100 md:h-150 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />

        <directionalLight position={[10, 10, 10]} intensity={20} color="#ef4444" />

        <pointLight position={[-10, -10, -10]} intensity={250} color="#ffffff" />

        <GeometricShape />
      </Canvas>
    </div>
  );
}
