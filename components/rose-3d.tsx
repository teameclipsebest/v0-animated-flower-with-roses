'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Rose3DModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Create a stylized rose using cones and spheres */}
      
      {/* Stem */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 3, 8]} />
        <meshStandardMaterial color="#2d5016" />
      </mesh>

      {/* Petals - layered spheres */}
      {Array.from({ length: 5 }).map((_, layer) => (
        <group key={layer} position={[0, 0.8 - layer * 0.3, 0]}>
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i / 6) * Math.PI * 2;
            const radius = 0.4 + layer * 0.1;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            return (
              <mesh key={i} position={[x, 0, z]}>
                <sphereGeometry args={[0.2 + layer * 0.05, 16, 16]} />
                <meshStandardMaterial 
                  color={`hsl(${348}, ${85 - layer * 5}%, ${58 + layer * 3}%)`}
                  emissive={`hsl(${348}, 100%, 50%)`}
                  emissiveIntensity={0.1 + layer * 0.02}
                />
              </mesh>
            );
          })}
        </group>
      ))}

      {/* Center rose bud */}
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial 
          color="hsl(348, 86%, 55%)"
          emissive="hsl(348, 100%, 50%)"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Leaves */}
      {[1, -1].map((side) => (
        <mesh key={side} position={[side * 0.5, -0.5, 0]} rotation={[0, 0, side * 0.3]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#3d7c1f" />
        </mesh>
      ))}

      {/* Light source */}
      <pointLight position={[2, 2, 2]} intensity={1} color="#fff" />
      <pointLight position={[-2, 1, -2]} intensity={0.5} color="#ff69b4" />
      <ambientLight intensity={0.6} />
    </group>
  );
}

export default function Rose3D() {
  return (
    <div className="w-full h-80 rounded-xl overflow-hidden border border-border/50 bg-card/50">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        className="w-full h-full"
      >
        <Rose3DModel />
        <OrbitControls autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
