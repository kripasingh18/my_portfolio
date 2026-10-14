import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import InteractableBeacon from '../InteractableBeacon';

export default function Achievements3D({
  position = [5, 9.8, -2],
  onInteract,
  isActive = false,
}) {
  const trophy1Ref = useRef();
  const trophy2Ref = useRef();
  const trophy3Ref = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (trophy1Ref.current) {
      trophy1Ref.current.rotation.y += delta * 0.9;
      trophy1Ref.current.position.y = 1.15 + Math.sin(t * 2) * 0.06;
    }
    if (trophy2Ref.current) {
      trophy2Ref.current.rotation.y += delta * 1.1;
      trophy2Ref.current.position.y = 1.35 + Math.sin(t * 2 + 1) * 0.06;
    }
    if (trophy3Ref.current) {
      trophy3Ref.current.rotation.y += delta * 0.8;
      trophy3Ref.current.position.y = 1.15 + Math.sin(t * 2 + 2) * 0.06;
    }
  });

  return (
    <group position={position}>
      {/* Crown Ambient Light */}
      <pointLight position={[0, 2.0, 0]} color="#C7B7FF" intensity={1.5} distance={8} />

      {/* THREE GLOWING CRYSTALLINE PEDESTALS */}
      <group position={[-1.2, 0.2, -0.6]}>
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[0.32, 0.38, 0.7, 24]} />
          <meshStandardMaterial color="#F2F5FF" roughness={0.3} metalness={0.5} />
        </mesh>
        <mesh ref={trophy1Ref}>
          <octahedronGeometry args={[0.26, 0]} />
          <meshStandardMaterial color="#8ECFFF" emissive="#8ECFFF" emissiveIntensity={0.8} metalness={0.9} />
        </mesh>
      </group>

      <group position={[0, 0.2, -0.9]}>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.36, 0.42, 1.0, 24]} />
          <meshStandardMaterial color="#F2F5FF" roughness={0.3} metalness={0.5} />
        </mesh>
        <mesh ref={trophy2Ref}>
          <icosahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color="#C7B7FF" emissive="#C7B7FF" emissiveIntensity={0.9} metalness={0.8} />
        </mesh>
      </group>

      <group position={[1.2, 0.2, -0.6]}>
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[0.32, 0.38, 0.7, 24]} />
          <meshStandardMaterial color="#F2F5FF" roughness={0.3} metalness={0.5} />
        </mesh>
        <mesh ref={trophy3Ref}>
          <dodecahedronGeometry args={[0.26, 0]} />
          <meshStandardMaterial color="#F2C9ED" emissive="#F2C9ED" emissiveIntensity={0.7} metalness={0.9} />
        </mesh>
      </group>

      <InteractableBeacon
        position={[0, 1.8, -0.6]}
        color="#C7B7FF"
        label="Honors & Verified Credentials"
        type="achievements"
        onInteract={onInteract}
        visible={isActive}
      />
    </group>
  );
}
