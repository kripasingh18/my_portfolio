import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CosmicEnvironment from './CosmicEnvironment';
import CosmicHouse from './CosmicHouse';
import CameraRig from './CameraRig';

export default function CosmicCanvas({
  activeRoom = 'landing',
  onSelectRoom,
  onInteractObject,
  movementInput,
}) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <Canvas
        camera={{ position: [-12, 6.5, 36], fov: 50, near: 0.1, far: 500 }}
        dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#172650', 1);
        }}
      >
        <Suspense fallback={null}>
          <CosmicEnvironment />
          <CosmicHouse
            activeRoom={activeRoom}
            onSelectRoom={onSelectRoom}
            onInteractObject={onInteractObject}
          />
          <CameraRig
            currentScene={activeRoom}
            movementInput={movementInput}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
