import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import InteractableBeacon from '../InteractableBeacon';

export default function ArtStudio3D({
  position = [13, 2.5, 3],
  onInteract,
  isActive = false,
}) {
  const canvasRef = useRef();

  useFrame((state, delta) => {
    if (canvasRef.current) {
      canvasRef.current.material.emissiveIntensity = 0.65 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Warm Lavender Ambient Glow */}
      <pointLight position={[0, 2.2, 0]} color="#F2C9ED" intensity={1.4} distance={8} />

      {/* ART EASEL WITH GLOWING COSMIC CANVAS */}
      <group position={[-0.8, 1.1, -0.6]} rotation={[0, 0.4, 0]}>
        <mesh position={[-0.38, -0.2, -0.08]} rotation={[0.15, 0, -0.08]}>
          <cylinderGeometry args={[0.025, 0.025, 2.0, 8]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.7} />
        </mesh>
        <mesh position={[0.38, -0.2, -0.08]} rotation={[0.15, 0, 0.08]}>
          <cylinderGeometry args={[0.025, 0.025, 2.0, 8]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.7} />
        </mesh>
        <mesh position={[0, -0.2, -0.38]} rotation={[-0.2, 0, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 2.0, 8]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.7} />
        </mesh>

        {/* Canvas */}
        <mesh ref={canvasRef} position={[0, 0.32, 0]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[1.4, 1.0, 0.04]} />
          <meshStandardMaterial
            color="#8067D9"
            emissive="#C7B7FF"
            emissiveIntensity={0.65}
            roughness={0.3}
          />
        </mesh>

        <InteractableBeacon
          position={[0, 1.1, 0]}
          color="#F2C9ED"
          label="Artwork Gallery & Visuals"
          type="gallery"
          onInteract={onInteract}
          visible={isActive}
        />
      </group>

      {/* WORKTABLE WITH DIGITAL PEN TABLET */}
      <group position={[1.5, 0.6, 0.8]} rotation={[0, -0.6, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 0.08, 1.0]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.5} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.06, 0]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[1.0, 0.03, 0.7]} />
          <meshStandardMaterial color="#172650" roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.08, 0]} rotation={[-0.2, 0, 0]}>
          <planeGeometry args={[0.85, 0.55]} />
          <meshBasicMaterial color="#8ECFFF" transparent opacity={0.6} />
        </mesh>

        <InteractableBeacon
          position={[0, 0.75, 0]}
          color="#8ECFFF"
          label="Design Suite (Photoshop, Illustrator)"
          type="adobeTools"
          onInteract={onInteract}
          visible={isActive}
        />
      </group>
    </group>
  );
}
