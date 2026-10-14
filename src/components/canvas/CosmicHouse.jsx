import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import PersonalRoom3D from './rooms/PersonalRoom3D';
import DeveloperRoom3D from './rooms/DeveloperRoom3D';
import ArtStudio3D from './rooms/ArtStudio3D';
import InnovationLab3D from './rooms/InnovationLab3D';
import Achievements3D from './rooms/Achievements3D';
import ContactLounge3D from './rooms/ContactLounge3D';

export default function CosmicHouse({ activeRoom, onSelectRoom, onInteractObject }) {
  const haloRing1Ref = useRef();
  const haloRing2Ref = useRef();
  const portalRingsRef = useRef();
  const waterfallRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (haloRing1Ref.current) {
      haloRing1Ref.current.rotation.z += delta * 0.15;
    }
    if (haloRing2Ref.current) {
      haloRing2Ref.current.rotation.z -= delta * 0.1;
    }
    if (portalRingsRef.current) {
      portalRingsRef.current.rotation.z += delta * 0.2;
    }
    if (waterfallRef.current) {
      // Gentle UV/opacity shimmer for the waterfall
      waterfallRef.current.material.opacity = 0.45 + Math.sin(t * 3) * 0.08;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* =========================================================================
          1. THE SWEEPING FOREGROUND GLASS PROMENADE (S-Curve from foreground to house)
      ========================================================================= */}
      <group>
        {/* Curved pathway segments forming the iconic S-curve bridge */}
        {[
          { pos: [19, 0.2, 26], rot: [0, -0.65, 0], length: 11, width: 3.6 },
          { pos: [13, 0.5, 17], rot: [0, -0.4, 0], length: 10, width: 3.4 },
          { pos: [8, 0.8, 9], rot: [0, -0.15, 0], length: 9, width: 3.2 },
          { pos: [4, 1.1, 3], rot: [0, 0.1, 0], length: 6, width: 3.0 },
        ].map((seg, idx) => (
          <group key={idx} position={seg.pos} rotation={seg.rot}>
            {/* Reflective glass promenade deck */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[seg.width, 0.2, seg.length]} />
              <meshPhysicalMaterial
                color="#8C9DFF"
                transmission={0.65}
                roughness={0.15}
                metalness={0.3}
                transparent
                opacity={0.75}
              />
            </mesh>

            {/* Glowing Edge Ribbon Left */}
            <mesh position={[-seg.width / 2 + 0.05, 0.12, 0]}>
              <boxGeometry args={[0.08, 0.05, seg.length]} />
              <meshBasicMaterial color="#8ECFFF" />
            </mesh>

            {/* Glowing Edge Ribbon Right */}
            <mesh position={[seg.width / 2 - 0.05, 0.12, 0]}>
              <boxGeometry args={[0.08, 0.05, seg.length]} />
              <meshBasicMaterial color="#C7B7FF" />
            </mesh>

            {/* Bridge Support Pylons descending into clouds */}
            <mesh position={[0, -3.5, 0]}>
              <cylinderGeometry args={[0.4, 0.9, 7, 16]} />
              <meshStandardMaterial color="#2B3664" roughness={0.8} />
            </mesh>
          </group>
        ))}
      </group>

      {/* =========================================================================
          2. CENTRAL ENTRANCE ATRIUM & CONCENTRIC GLOWING PORTAL
      ========================================================================= */}
      <group position={[3, 1.2, 3]}>
        {/* Plaza base platform */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[4.5, 5.0, 0.4, 36]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.4} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[4.3, 36]} />
          <meshPhysicalMaterial
            color="#8ECFFF"
            roughness={0.1}
            metalness={0.4}
            transmission={0.6}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Concentric Portal Light Rings (The luminous archway in reference) */}
        <group ref={portalRingsRef} position={[0, 1.8, 1.5]}>
          <mesh rotation={[0, 0, 0]}>
            <torusGeometry args={[1.8, 0.06, 16, 48]} />
            <meshStandardMaterial color="#8ECFFF" emissive="#8ECFFF" emissiveIntensity={1.2} />
          </mesh>
          <mesh rotation={[0, 0, 0]}>
            <torusGeometry args={[1.4, 0.04, 16, 48]} />
            <meshStandardMaterial color="#C7B7FF" emissive="#C7B7FF" emissiveIntensity={1.2} />
          </mesh>
        </group>
      </group>

      {/* =========================================================================
          3. LOWER LEFT CANTILEVERED WING (Personal Sanctuary)
      ========================================================================= */}
      <group position={[-7, 2.8, 6]}>
        {/* Cantilevered circular floor slab */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[4.8, 5.2, 0.4, 32]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.3} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[4.6, 4.8, 48]} />
          <meshBasicMaterial color="#8ECFFF" side={2} />
        </mesh>

        {/* Sculptural Support Strut under the cantilever */}
        <mesh position={[2.5, -2.5, -1.5]} rotation={[0, 0, 0.5]}>
          <cylinderGeometry args={[0.5, 0.9, 6.5, 16]} />
          <meshStandardMaterial color="#F2F5FF" roughness={0.3} metalness={0.4} />
        </mesh>

        {/* Panoramic Curved Glass Walls */}
        <mesh position={[0, 1.8, 0]}>
          <cylinderGeometry args={[4.6, 4.6, 3.6, 32, 1, true, -Math.PI * 0.75, Math.PI * 1.5]} />
          <meshPhysicalMaterial
            color="#8ECFFF"
            transmission={0.88}
            roughness={0.06}
            thickness={0.5}
            transparent
            opacity={0.3}
            side={2}
          />
        </mesh>

        {/* Sculptural Curved Roof Canopy */}
        <mesh position={[0, 3.6, 0]}>
          <cylinderGeometry args={[4.6, 4.9, 0.35, 32]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.3} roughness={0.2} />
        </mesh>
        <mesh position={[0, 3.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[4.4, 4.7, 48]} />
          <meshBasicMaterial color="#C7B7FF" side={2} />
        </mesh>

        {/* Bonsai / Balcony Greenery on terrace */}
        <group position={[-3.6, 0.2, 1.8]}>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.4, 0.3, 0.4, 12]} />
            <meshStandardMaterial color="#F2F5FF" />
          </mesh>
          <mesh position={[0, 0.65, 0]}>
            <sphereGeometry args={[0.65, 10, 10]} />
            <meshStandardMaterial color="#2E5A44" roughness={0.8} />
          </mesh>
        </group>

        {/* LUMINOUS WATERFALL CASCADING DOWN TO CLOUDS */}
        <mesh ref={waterfallRef} position={[-2.8, -4.5, 3.2]}>
          <planeGeometry args={[2.2, 8.5]} />
          <meshPhysicalMaterial
            color="#8ECFFF"
            transmission={0.85}
            roughness={0.1}
            transparent
            opacity={0.48}
            side={2}
          />
        </mesh>
      </group>

      {/* =========================================================================
          4. LOWER RIGHT WING (Art Studio & Contact Lounge)
      ========================================================================= */}
      <group position={[13, 2.5, 3]}>
        {/* Cantilevered curved deck */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[5.0, 5.4, 0.4, 32]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.3} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[4.8, 5.0, 48]} />
          <meshBasicMaterial color="#C7B7FF" side={2} />
        </mesh>

        {/* Curved Glass Enclosure */}
        <mesh position={[0, 1.8, 0]}>
          <cylinderGeometry args={[4.7, 4.7, 3.6, 32, 1, true, -Math.PI * 0.4, Math.PI * 1.4]} />
          <meshPhysicalMaterial
            color="#C7B7FF"
            transmission={0.88}
            roughness={0.06}
            thickness={0.5}
            transparent
            opacity={0.3}
            side={2}
          />
        </mesh>

        {/* Sculptural Roof Canopy */}
        <mesh position={[0, 3.6, 0]}>
          <cylinderGeometry args={[4.7, 5.1, 0.35, 32]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.3} roughness={0.2} />
        </mesh>

        {/* CELESTIAL TELESCOPE ON BALCONY (Matching reference image) */}
        <group position={[3.6, 0.2, 2.2]} rotation={[0, -0.8, 0.35]}>
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 1.2, 8]} />
            <meshStandardMaterial color="#C7B7FF" metalness={0.8} />
          </mesh>
          <mesh position={[0, 1.1, 0]} rotation={[0, 0, 0.4]}>
            <cylinderGeometry args={[0.09, 0.14, 1.1, 16]} />
            <meshStandardMaterial color="#8ECFFF" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      </group>

      {/* =========================================================================
          5. MIDDLE TIER (Developer Studio)
      ========================================================================= */}
      <group position={[2, 6.2, 0]}>
        {/* Tier deck */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[4.4, 4.8, 0.4, 32]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.3} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[4.2, 4.4, 48]} />
          <meshBasicMaterial color="#8ECFFF" side={2} />
        </mesh>

        {/* Panoramic Glass Pod */}
        <mesh position={[0, 1.8, 0]}>
          <cylinderGeometry args={[4.2, 4.2, 3.6, 32, 1, true]} />
          <meshPhysicalMaterial
            color="#8ECFFF"
            transmission={0.88}
            roughness={0.06}
            thickness={0.5}
            transparent
            opacity={0.32}
            side={2}
          />
        </mesh>

        {/* Middle Tier Roof Canopy */}
        <mesh position={[0, 3.6, 0]}>
          <cylinderGeometry args={[4.2, 4.6, 0.35, 32]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.3} roughness={0.2} />
        </mesh>
        <mesh position={[0, 3.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[4.0, 4.3, 48]} />
          <meshBasicMaterial color="#8ECFFF" side={2} />
        </mesh>

        {/* Balcony Potted Bonsai */}
        <group position={[-3.2, 0.2, 1.4]}>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.35, 0.25, 0.35, 12]} />
            <meshStandardMaterial color="#F2F5FF" />
          </mesh>
          <mesh position={[0, 0.6, 0]}>
            <sphereGeometry args={[0.55, 10, 10]} />
            <meshStandardMaterial color="#2E5A44" roughness={0.8} />
          </mesh>
        </group>
      </group>

      {/* =========================================================================
          6. UPPER TIER & CROWN GLASS SPIRE (Achievements Gallery)
      ========================================================================= */}
      <group position={[5, 9.8, -2]}>
        {/* Observation pavilion deck */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[3.4, 3.8, 0.35, 32]} />
          <meshStandardMaterial color="#F2F5FF" metalness={0.4} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3.2, 3.4, 36]} />
          <meshBasicMaterial color="#C7B7FF" side={2} />
        </mesh>

        {/* Glass Dome */}
        <mesh position={[0, 1.6, 0]}>
          <sphereGeometry args={[3.2, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
          <meshPhysicalMaterial
            color="#C7B7FF"
            transmission={0.85}
            roughness={0.08}
            transparent
            opacity={0.35}
            side={2}
          />
        </mesh>

        {/* FLOATING HALO RING 1 (Upper Spire) */}
        <mesh ref={haloRing1Ref} position={[0, 2.5, 0]} rotation={[0.25, 0, 0]}>
          <torusGeometry args={[4.4, 0.08, 16, 48]} />
          <meshStandardMaterial color="#8ECFFF" emissive="#8ECFFF" emissiveIntensity={1.3} />
        </mesh>

        {/* FLOATING HALO RING 2 (Slightly higher) */}
        <mesh ref={haloRing2Ref} position={[0, 4.2, 0]} rotation={[-0.2, 0, 0]}>
          <torusGeometry args={[3.2, 0.06, 16, 48]} />
          <meshStandardMaterial color="#C7B7FF" emissive="#C7B7FF" emissiveIntensity={1.3} />
        </mesh>

        {/* ICONIC GRAND FUTURISTIC GLASS SPIRE (Reaching to the stars) */}
        <group position={[0, 3.5, 0]}>
          {/* Spire Base */}
          <mesh position={[0, 2, 0]}>
            <cylinderGeometry args={[0.3, 0.8, 4.5, 16]} />
            <meshStandardMaterial color="#F2F5FF" metalness={0.7} roughness={0.2} />
          </mesh>
          {/* Glass Spire Needle */}
          <mesh position={[0, 6.5, 0]}>
            <coneGeometry args={[0.35, 6, 16]} />
            <meshPhysicalMaterial
              color="#8ECFFF"
              transmission={0.85}
              roughness={0.05}
              transparent
              opacity={0.8}
            />
          </mesh>
          {/* Spire Tip Beacon */}
          <pointLight position={[0, 9.6, 0]} color="#F2F5FF" intensity={1.8} distance={15} />
        </group>
      </group>

      {/* =========================================================================
          7. THE SIX INTERACTIVE ROOMS NESTED WITHIN THIS ARCHITECTURE
      ========================================================================= */}
      <PersonalRoom3D
        position={[-7, 2.8, 6]}
        isActive={activeRoom === 'personal'}
        onInteract={onInteractObject}
      />
      <DeveloperRoom3D
        position={[2, 6.2, 0]}
        isActive={activeRoom === 'developer'}
        onInteract={onInteractObject}
      />
      <ArtStudio3D
        position={[13, 2.5, 3]}
        isActive={activeRoom === 'art'}
        onInteract={onInteractObject}
      />
      <InnovationLab3D
        position={[3, 1.2, 3]}
        isActive={activeRoom === 'innovation'}
        onInteract={onInteractObject}
      />
      <Achievements3D
        position={[5, 9.8, -2]}
        isActive={activeRoom === 'achievements'}
        onInteract={onInteractObject}
      />
      <ContactLounge3D
        position={[11, 2.0, 11]}
        isActive={activeRoom === 'contact'}
        onInteract={onInteractObject}
      />
    </group>
  );
}
