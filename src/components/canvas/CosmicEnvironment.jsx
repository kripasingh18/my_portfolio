
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const COLORS = {
  sky: '#11152F',
  lavender: '#B9A7F8',
  blue: '#87CEFA',
  pink: '#F4B8D0',
  cloud: '#EAF4FF',
  distant: '#34385E',
};

export default function CosmicEnvironment() {
  const planetRef = useRef();
  const ringRef = useRef();
  const cloudsRef = useRef();

  const mistCount = 28;

  const mistData = useMemo(() => {
    return Array.from({ length: mistCount }, () => ({
      position: [
        (Math.random() - 0.5) * 55,
        Math.random() * 15 - 2,
        (Math.random() - 0.5) * 55,
      ],
      speed: 0.1 + Math.random() * 0.18,
      scale: 0.08 + Math.random() * 0.2,
      offset: Math.random() * Math.PI * 2,
      color: Math.random() > 0.5 ? COLORS.blue : COLORS.lavender,
    }));
  }, []);

  const cloudClusters = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => {
      const angle = (i / 24) * Math.PI * 2;
      const radius = 10 + Math.random() * 19;

      return {
        position: [
          Math.cos(angle) * radius + (Math.random() - 0.5) * 5,
          -5.5 - Math.random() * 2,
          Math.sin(angle) * radius + (Math.random() - 0.5) * 5,
        ],
        scale: [
          5 + Math.random() * 4,
          1.6 + Math.random() * 1.1,
          5 + Math.random() * 4,
        ],
        color:
          i % 4 === 0
            ? COLORS.pink
            : i % 4 === 1
            ? COLORS.lavender
            : COLORS.cloud,
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.008;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.004;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.003;
    }
  });

  return (
    <group>
      {/* Deep cosmic sky */}
      <mesh>
        <sphereGeometry args={[220, 48, 48]} />
        <meshBasicMaterial
          color={COLORS.sky}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* Subtle lavender atmospheric horizon */}
      <mesh position={[0, -8, 0]}>
        <cylinderGeometry args={[200, 200, 60, 64, 1, true]} />
        <meshBasicMaterial
          color={COLORS.lavender}
          side={THREE.BackSide}
          transparent
          opacity={0.10}
          depthWrite={false}
        />
      </mesh>

      {/* Very soft blush at the distant horizon */}
      <mesh position={[0, -15, 0]}>
        <cylinderGeometry args={[190, 190, 30, 64, 1, true]} />
        <meshBasicMaterial
          color={COLORS.pink}
          side={THREE.BackSide}
          transparent
          opacity={0.12}
          depthWrite={false}
        />
      </mesh>

      {/* Small, delicate starfield */}
      <Stars
        radius={160}
        depth={50}
        count={1800}
        factor={2.2}
        saturation={0.35}
        fade
        speed={0.25}
      />

      {/* Gentle lighting: pastel colors, lower intensity */}
      <ambientLight intensity={0.75} color={COLORS.lavender} />

      <directionalLight
        position={[30, 25, 20]}
        intensity={1.0}
        color={COLORS.pink}
      />

      <directionalLight
        position={[-25, 18, -15]}
        intensity={0.65}
        color={COLORS.blue}
      />

      <pointLight
        position={[5, 10, 5]}
        intensity={0.65}
        color={COLORS.cloud}
        distance={32}
        decay={2}
      />

      {/* Distant lavender-blue planet */}
      <group position={[42, 28, -72]}>
        <mesh ref={planetRef}>
          <sphereGeometry args={[19, 48, 48]} />
          <meshStandardMaterial
            color="#9DAEEB"
            emissive="#777CCB"
            emissiveIntensity={0.12}
            roughness={0.92}
            metalness={0.02}
          />
        </mesh>

        {/* Subtle atmospheric rim */}
        <mesh scale={[1.035, 1.035, 1.035]}>
          <sphereGeometry args={[19, 32, 32]} />
          <meshBasicMaterial
            color={COLORS.lavender}
            transparent
            opacity={0.12}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>

        {/* Fine, understated planetary ring */}
        <mesh
          ref={ringRef}
          rotation={[1.15, 0.35, 0.15]}
        >
          <ringGeometry args={[24, 34, 80]} />
          <meshBasicMaterial
            color={COLORS.blue}
            side={THREE.DoubleSide}
            transparent
            opacity={0.26}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Soft moon */}
      <group position={[-42, 25, -58]}>
        <mesh>
          <sphereGeometry args={[4.2, 32, 32]} />
          <meshStandardMaterial
            color={COLORS.cloud}
            emissive={COLORS.lavender}
            emissiveIntensity={0.22}
            roughness={0.85}
          />
        </mesh>

        <mesh scale={[1.18, 1.18, 1.18]}>
          <sphereGeometry args={[4.2, 24, 24]} />
          <meshBasicMaterial
            color={COLORS.blue}
            transparent
            opacity={0.10}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Soft cloud sea: fewer, smaller overlapping puffs */}
      <group ref={cloudsRef}>
        {cloudClusters.map((cloud, i) => (
          <mesh
            key={i}
            position={cloud.position}
            scale={cloud.scale}
          >
            <sphereGeometry args={[1, 20, 16]} />
            <meshStandardMaterial
              color={cloud.color}
              emissive={cloud.color}
              emissiveIntensity={0.035}
              transparent
              opacity={0.48}
              roughness={1}
              metalness={0}
              depthWrite={false}
            />
          </mesh>
        ))}

        {/* Soft cloud foundation */}
        <mesh
          position={[0, -8, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[180, 180]} />
          <meshBasicMaterial
            color="#7776B7"
            transparent
            opacity={0.10}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Gentle drifting particles */}
      {mistData.map((mist, i) => (
        <MistMote key={i} data={mist} />
      ))}
    </group>
  );
}

function MistMote({ data }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime() * data.speed + data.offset;

    meshRef.current.position.y =
      data.position[1] + Math.sin(t) * 0.7;

    meshRef.current.position.x =
      data.position[0] + Math.cos(t * 0.6) * 0.5;
  });

  return (
    <mesh
      ref={meshRef}
      position={data.position}
      scale={data.scale}
    >
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial
        color={data.color}
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </mesh>
  );
}
