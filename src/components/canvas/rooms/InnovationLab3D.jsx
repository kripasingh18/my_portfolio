import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import InteractableBeacon from '../InteractableBeacon';

export default function InnovationLab3D({
  position = [3, 1.2, 3],
  onInteract,
  isActive = false,
}) {
  const seabedRef = useRef();
  const sonarRing1Ref = useRef();
  const sonarRing2Ref = useRef();

  const { geometry, originalPositions } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(3.0, 3.0, 22, 22);
    const pos = geo.attributes.position;
    const orig = [];
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const dist = Math.sqrt(x * x + y * y);
      const z = Math.sin(x * 2.5) * 0.2 + Math.cos(y * 2.5) * 0.2 - (dist > 1.1 ? 0.22 : 0);
      pos.setZ(i, z);
      orig.push(z);
    }
    geo.computeVertexNormals();
    return { geometry: geo, originalPositions: orig };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (seabedRef.current) {
      const pos = seabedRef.current.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const wave = Math.sin(t * 1.8 + x * 2.2 + y * 1.8) * 0.05;
        pos.setZ(i, originalPositions[i] + wave);
      }
      pos.needsUpdate = true;
    }

    if (sonarRing1Ref.current) {
      const s1 = (t * 0.65) % 1;
      sonarRing1Ref.current.scale.set(s1 * 3.2 + 0.2, s1 * 3.2 + 0.2, 1);
      sonarRing1Ref.current.material.opacity = (1 - s1) * 0.7;
    }
    if (sonarRing2Ref.current) {
      const s2 = (t * 0.65 + 0.5) % 1;
      sonarRing2Ref.current.scale.set(s2 * 3.2 + 0.2, s2 * 3.2 + 0.2, 1);
      sonarRing2Ref.current.material.opacity = (1 - s2) * 0.7;
    }
  });

  return (
    <group position={position}>
      {/* Central Cyan Ambient Light */}
      <pointLight position={[0, 2.0, 0]} color="#8ECFFF" intensity={1.4} distance={7} />

      {/* CENTERPIECE: 3D HOLOGRAPHIC OCEAN SEABED (SONARIS PLATFORM) */}
      <group position={[0, 0.75, 0]}>
        {/* Pedestal */}
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[1.8, 2.0, 0.35, 32]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.4} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.16, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.65, 1.8, 32]} />
          <meshBasicMaterial color="#8ECFFF" side={2} />
        </mesh>

        {/* 3D Wireframe Bathymetric Seabed */}
        <mesh
          ref={seabedRef}
          geometry={geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.08, 0]}
        >
          <meshStandardMaterial
            color="#8067D9"
            emissive="#8ECFFF"
            emissiveIntensity={0.8}
            wireframe
            roughness={0.2}
          />
        </mesh>

        {/* Translucent water plane */}
        <mesh position={[0, 0.28, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.0, 3.0]} />
          <meshPhysicalMaterial
            color="#8ECFFF"
            transparent
            opacity={0.25}
            roughness={0.1}
            transmission={0.8}
          />
        </mesh>

        {/* Pulsing Sonar Rings */}
        <mesh ref={sonarRing1Ref} position={[0, 0.29, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.2, 0.25, 32]} />
          <meshBasicMaterial color="#8ECFFF" transparent opacity={0.7} side={2} />
        </mesh>
        <mesh ref={sonarRing2Ref} position={[0, 0.29, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.2, 0.25, 32]} />
          <meshBasicMaterial color="#8ECFFF" transparent opacity={0.7} side={2} />
        </mesh>

        <InteractableBeacon
          position={[0, 1.3, 0]}
          color="#8ECFFF"
          label="Project SONARIS Case Study"
          type="sonarisCaseStudy"
          onInteract={onInteract}
          visible={isActive}
        />
      </group>
    </group>
  );
}
