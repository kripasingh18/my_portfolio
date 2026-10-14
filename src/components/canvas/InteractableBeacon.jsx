import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { cosmicAudio } from '../../utils/audio';

export default function InteractableBeacon({
  position = [0, 1.5, 0],
  color = '#55CFFF',
  label = 'Inspect',
  type = 'default',
  onInteract = () => {},
  visible = true,
}) {
  const [hovered, setHovered] = useState(false);
  const orbRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    if (!visible) return;
    const t = state.clock.getElapsedTime();
    if (orbRef.current) {
      orbRef.current.position.y = Math.sin(t * 2.5) * 0.1;
      orbRef.current.rotation.y += 0.02;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.015;
    }
  });

  if (!visible) return null;

  const handleClick = (e) => {
    e.stopPropagation();
    cosmicAudio.playInteractChime('chime');
    onInteract(type);
  };

  return (
    <group position={position}>
      {/* Ground Ring Indicator */}
      <mesh
        ref={ringRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.6, 0]}
      >
        <ringGeometry args={[0.25, 0.38, 24]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.9 : 0.45}
          side={2}
        />
      </mesh>

      {/* Floating Holographic Beacon Gem */}
      <group
        ref={orbRef}
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
        scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      >
        {/* Core Octahedron */}
        <mesh>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 1.4 : 0.7}
            roughness={0.15}
            metalness={0.8}
          />
        </mesh>

        {/* Outer Wireframe Cage */}
        <mesh scale={[1.35, 1.35, 1.35]}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshBasicMaterial
            color={hovered ? '#ffffff' : color}
            wireframe
            transparent
            opacity={hovered ? 0.8 : 0.4}
          />
        </mesh>

        {/* Floating Tooltip Label (rendered only on hover or proximity, never cluttering) */}
        {hovered && (
          <Html
            position={[0, 0.45, 0]}
            center
            distanceFactor={10}
            zIndexRange={[100, 0]}
          >
            <div
              onClick={handleClick}
              className="pointer-events-auto cursor-pointer select-none whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-xl bg-[#070B24]/90 text-[#EAF4FF] border border-[#55CFFF] backdrop-blur-md font-['Space_Grotesk'] tracking-wide"
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-ping"
                style={{ backgroundColor: color }}
              />
              <span>{label}</span>
            </div>
          </Html>
        )}
      </group>
    </group>
  );
}
