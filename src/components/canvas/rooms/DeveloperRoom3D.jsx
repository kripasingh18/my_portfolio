import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import InteractableBeacon from '../InteractableBeacon';

export default function DeveloperRoom3D({
  position = [2, 6.2, 0],
  onInteract,
  isActive = false,
}) {
  const screenRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (screenRef.current) {
      screenRef.current.material.opacity = 0.85 + Math.sin(t * 3) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Warm Ambient Coding Light */}
      <pointLight position={[0, 2.2, 0]} color="#8ECFFF" intensity={1.5} distance={8} />

      {/* SLEEK FUTURISTIC DESK (Minimalist soft white & glass) */}
      <group position={[0, 0.7, -0.8]}>
        {/* Desktop */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.8, 0.08, 1.2]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.4} roughness={0.2} />
        </mesh>
        {/* Glowing edge strip */}
        <mesh position={[0, 0, 0.61]}>
          <boxGeometry args={[2.8, 0.02, 0.02]} />
          <meshBasicMaterial color="#8ECFFF" />
        </mesh>
        {/* Desk legs */}
        <mesh position={[-1.1, -0.35, 0]}>
          <boxGeometry args={[0.2, 0.65, 0.9]} />
          <meshStandardMaterial color="#C7B7FF" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[1.1, -0.35, 0]}>
          <boxGeometry args={[0.2, 0.65, 0.9]} />
          <meshStandardMaterial color="#C7B7FF" metalness={0.5} roughness={0.3} />
        </mesh>

        {/* HOLOGRAPHIC CURVED CODING DISPLAY */}
        <group position={[0, 0.75, -0.1]}>
          <mesh ref={screenRef}>
            <planeGeometry args={[2.2, 1.1]} />
            <meshStandardMaterial
              color="#172650"
              emissive="#8ECFFF"
              emissiveIntensity={0.5}
              transparent
              opacity={0.85}
              side={2}
            />
          </mesh>
          <gridHelper
            args={[2.0, 10, '#8ECFFF', '#8067D9']}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, 0.01]}
          />
        </group>

        {/* Modern chair */}
        <group position={[0, -0.1, 1.0]} rotation={[0, Math.PI, 0]}>
          <mesh position={[0, 0.2, 0]}>
            <boxGeometry args={[0.65, 0.08, 0.6]} />
            <meshStandardMaterial color="#F2F5FF" roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.6, 0.25]}>
            <boxGeometry args={[0.6, 0.7, 0.06]} />
            <meshStandardMaterial color="#C7B7FF" roughness={0.3} />
          </mesh>
        </group>
      </group>

      {/* BEACONS */}
      <InteractableBeacon
        position={[0, 1.8, -0.8]}
        color="#8ECFFF"
        label="Technical Stack & Proficiencies"
        type="skills"
        onInteract={onInteract}
        visible={isActive}
      />

      <InteractableBeacon
        position={[-1.8, 1.2, 0.8]}
        color="#C7B7FF"
        label="GitHub Profile (@kripasingh18)"
        type="github"
        onInteract={onInteract}
        visible={isActive}
      />
    </group>
  );
}
