"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import dynamic from 'next/dynamic';
import { ErrorBoundary } from "react-error-boundary";
import React from "react";

const LaptopModel = () => {
  const { scene } = useGLTF('/models/laptop.glb'); // Ensure this path is correct

  return (
    <Canvas style={{ height: 900, width: 900 }}>
      <PerspectiveCamera makeDefault position={[5, 3, 5]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        minDistance={50}
        maxDistance={50}
        target={[0, 0, 0]}
      />
      <primitive object={scene} scale={0.8} />
    </Canvas>
  );
};

const DynamicLaptopModel = dynamic(() => Promise.resolve(LaptopModel), { ssr: false });

export default function App() {
  return (
    <ErrorBoundary fallback={<div>Failed to load 3D model.</div>}>
      <React.Suspense fallback={<div>Loading 3D model...</div>}>
        <DynamicLaptopModel />
      </React.Suspense>
    </ErrorBoundary>
  );
}

// Preload the model
useGLTF.preload("/models/laptop.glb");
