"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function EZH2Mesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const { size, mouse } = useThree();

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.6, 1);
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !wireRef.current) return;
    const t = state.clock.elapsedTime;

    // Slow base rotation
    meshRef.current.rotation.y = t * 0.08;
    meshRef.current.rotation.x = Math.sin(t * 0.04) * 0.12;
    wireRef.current.rotation.y = t * 0.08;
    wireRef.current.rotation.x = Math.sin(t * 0.04) * 0.12;

    // Mouse parallax — subtle tilt toward cursor
    const targetX = (mouse.y * Math.PI) / 18;
    const targetY = (mouse.x * Math.PI) / 18;
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.04;
    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.04;
    wireRef.current.rotation.x = meshRef.current.rotation.x;
    wireRef.current.rotation.y = meshRef.current.rotation.y;

    // Gentle breathe
    const scale = 1 + Math.sin(t * 0.5) * 0.018;
    meshRef.current.scale.setScalar(scale);
    wireRef.current.scale.setScalar(scale * 1.006);
  });

  return (
    <group>
      {/* Solid inner mesh — deep teal, low opacity */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color="#002233"
          emissive="#001a2a"
          roughness={0.6}
          metalness={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Wireframe shell — cyan glow */}
      <mesh ref={wireRef} geometry={geometry}>
        <meshBasicMaterial
          color="#00C2FF"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Point light for the glow effect */}
      <pointLight color="#00C2FF" intensity={1.2} distance={8} />
    </group>
  );
}

export function ProteinMesh() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        filter: "drop-shadow(0 0 48px rgba(0,194,255,0.18))",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.15} />
        <directionalLight position={[4, 6, 3]} intensity={0.6} color="#ffffff" />
        <EZH2Mesh />
      </Canvas>
    </div>
  );
}
