import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import InteractableBeacon from '../InteractableBeacon';

export default function PersonalRoom3D({
  position = [-7, 2.8, 6],
  onInteract,
  isActive = false,
}) {
  const musicDiscRef = useRef();

  useFrame((state, delta) => {
    if (musicDiscRef.current) {
      musicDiscRef.current.rotation.y += delta * 1.5;
    }
  });

  return (
    <group position={position}>
      {/* Warm Ambient Room Glow */}
      <pointLight position={[0, 2.2, 0]} color="#F2C9ED" intensity={1.4} distance={8} />

      {/* MINIMALIST BED (Matching the cozy bedroom in the reference image) */}
      <group position={[0, 0.25, -1.2]}>
        {/* Bed Frame */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.8, 0.3, 2.1]} />
          <meshStandardMaterial color="#F2F5FF" roughness={0.3} />
        </mesh>
        {/* Mattress */}
        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[2.6, 0.25, 1.9]} />
          <meshStandardMaterial color="#EAF4FF" roughness={0.7} />
        </mesh>
        {/* Lavender Pillows */}
        <mesh position={[-0.65, 0.42, -0.55]}>
          <boxGeometry args={[0.75, 0.16, 0.4]} />
          <meshStandardMaterial color="#C7B7FF" roughness={0.6} />
        </mesh>
        <mesh position={[0.65, 0.42, -0.55]}>
          <boxGeometry args={[0.75, 0.16, 0.4]} />
          <meshStandardMaterial color="#C7B7FF" roughness={0.6} />
        </mesh>
        {/* Bed under-glow */}
        <pointLight position={[0, 0.1, 0]} color="#8ECFFF" intensity={0.9} distance={3} />
      </group>

      {/* FLOATING MUSIC PLAYER (Near bed) */}
      <group position={[-2.2, 1.2, 0.5]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.38, 0.38, 0.06, 24]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.7} roughness={0.2} />
        </mesh>
        <mesh ref={musicDiscRef} position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.02, 24]} />
          <meshStandardMaterial color="#8ECFFF" emissive="#8ECFFF" emissiveIntensity={0.8} metalness={0.8} />
        </mesh>
        <InteractableBeacon
          position={[0, 0.55, 0]}
          color="#8ECFFF"
          label="Music & Ambient Soundscapes"
          type="music"
          onInteract={onInteract}
          visible={isActive}
        />
      </group>

      {/* PERSONAL JOURNAL ON SLEEK STAND */}
      <group position={[2.0, 1.0, -0.5]} rotation={[0, -0.4, 0]}>
        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[0.25, 0.3, 0.9, 16]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.5} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.12, 0]}>
          <boxGeometry args={[0.42, 0.04, 0.3]} />
          <meshStandardMaterial color="#C7B7FF" metalness={0.4} />
        </mesh>
        <InteractableBeacon
          position={[0, 0.55, 0]}
          color="#C7B7FF"
          label="Personal Story & Journal"
          type="journal"
          onInteract={onInteract}
          visible={isActive}
        />
      </group>

      {/* CREATIVE SKETCHBOOK */}
      <group position={[-1.8, 1.0, -1.8]} rotation={[0, 0.5, 0]}>
        <InteractableBeacon
          position={[0, 0.55, 0]}
          color="#F2C9ED"
          label="Creative Sketchbook & Ideas"
          type="sketchbook"
          onInteract={onInteract}
          visible={isActive}
        />
      </group>
    </group>
  );
}
