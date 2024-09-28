"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";

export default function LaptopModel() {
  const { scene } = useGLTF("/models/laptop.glb");

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
}

useGLTF.preload("/models/laptop.glb");