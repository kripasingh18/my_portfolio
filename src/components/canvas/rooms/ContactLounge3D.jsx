import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import InteractableBeacon from '../InteractableBeacon';

export default function ContactLounge3D({
  position = [11, 2.0, 11],
  onInteract,
  isActive = false,
}) {
  const commOrbRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (commOrbRef.current) {
      commOrbRef.current.position.y = 1.15 + Math.sin(t * 2) * 0.06;
      commOrbRef.current.rotation.y += delta * 1.2;
    }
  });

  return (
    <group position={position}>
      {/* Warm Ambient Glow */}
      <pointLight position={[0, 2.0, 0]} color="#F2F5FF" intensity={1.4} distance={7} />

      {/* CURVED FUTURISTIC LOUNGE SOFA (Soft White & Lavender Cushioning) */}
      <group position={[0, 0.35, 1.1]} rotation={[0, Math.PI, 0]}>
        <mesh>
          <cylinderGeometry args={[1.8, 1.8, 0.3, 24, 1, false, -Math.PI * 0.5, Math.PI]} />
          <meshStandardMaterial color="#F2F5FF" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[1.85, 1.85, 0.45, 24, 1, true, -Math.PI * 0.5, Math.PI]} />
          <meshStandardMaterial color="#C7B7FF" roughness={0.4} side={2} />
        </mesh>
      </group>

      {/* COFFEE TABLE WITH FLOATING COMM ORB */}
      <group position={[0, 0.35, -0.2]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.9, 0.18, 24]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.6} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 24]} />
          <meshBasicMaterial color="#8ECFFF" transparent opacity={0.6} />
        </mesh>

        <group ref={commOrbRef}>
          <mesh>
            <sphereGeometry args={[0.22, 24, 24]} />
            <meshStandardMaterial color="#8ECFFF" emissive="#C7B7FF" emissiveIntensity={0.8} metalness={0.8} />
          </mesh>
        </group>

        <InteractableBeacon
          position={[0, 1.1, 0]}
          color="#8ECFFF"
          label="Connect with Kripa"
          type="contact"
          onInteract={onInteract}
          visible={isActive}
        />
      </group>
    </group>
  );
}
