import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { roomsData } from '../../data/rooms';

export default function CameraRig({
  currentScene = 'landing',
  movementInput = { x: 0, z: 0 },
}) {
  const { camera } = useThree();
  const targetCamPos = useRef(new THREE.Vector3(-12, 6.5, 36));
  const targetLookAt = useRef(new THREE.Vector3(6, 5.5, 0));
  const currentLookAt = useRef(new THREE.Vector3(6, 5.5, 0));
  const freeCamOffset = useRef(new THREE.Vector3(0, 0, 0));

  // Determine destination camera transform whenever currentScene changes
  useEffect(() => {
    freeCamOffset.current.set(0, 0, 0);

    if (currentScene === 'landing') {
      // Composition: House on center-right, left space open for typography
      targetCamPos.current.set(-12, 6.5, 36);
      targetLookAt.current.set(6, 5.5, 0);
    } else if (currentScene === 'hub') {
      // Elevated overview of the entire connected glass residence
      targetCamPos.current.set(0, 14, 28);
      targetLookAt.current.set(4, 5.0, 0);
    } else {
      const room = roomsData.find((r) => r.id === currentScene);
      if (room) {
        targetCamPos.current.set(...room.cameraPos);
        targetLookAt.current.set(...room.targetPos);
      }
    }
  }, [currentScene]);

  useFrame((state, delta) => {
    // Apply keyboard/touch movement inputs smoothly
    if (movementInput.x !== 0 || movementInput.z !== 0) {
      freeCamOffset.current.x += movementInput.x * delta * 5;
      freeCamOffset.current.z += movementInput.z * delta * 5;
      freeCamOffset.current.x = THREE.MathUtils.clamp(freeCamOffset.current.x, -3.5, 3.5);
      freeCamOffset.current.z = THREE.MathUtils.clamp(freeCamOffset.current.z, -3.5, 3.5);
    }

    // Subtle gentle cinematic breathing
    const t = state.clock.getElapsedTime();
    const swayY = Math.sin(t * 0.7) * 0.12;
    const swayX = Math.cos(t * 0.5) * 0.12;

    // Smooth Lerp Camera Position
    const desiredPos = new THREE.Vector3()
      .copy(targetCamPos.current)
      .add(freeCamOffset.current);
    desiredPos.y += swayY;
    desiredPos.x += swayX;

    const lerpSpeed = THREE.MathUtils.clamp(delta * 2.2, 0.01, 0.12);
    camera.position.lerp(desiredPos, lerpSpeed);

    // Smooth Lerp Camera LookAt target
    const desiredLook = new THREE.Vector3()
      .copy(targetLookAt.current)
      .add(new THREE.Vector3(freeCamOffset.current.x * 0.4, 0, freeCamOffset.current.z * 0.4));
    currentLookAt.current.lerp(desiredLook, lerpSpeed);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}
