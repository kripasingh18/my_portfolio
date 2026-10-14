import React, { useState, useEffect, useCallback } from 'react';
import CosmicCanvas from './components/canvas/CosmicCanvas';
import CosmicHeader from './components/ui/CosmicHeader';
import CosmicFooter from './components/ui/CosmicFooter';
import LandingOverlay from './components/ui/LandingOverlay';
import RoomMapNav from './components/ui/RoomMapNav';
import MobileControls from './components/ui/MobileControls';
import Fallback2DView from './components/ui/Fallback2DView';
import PersonalModal from './components/ui/modals/PersonalModal';
import DeveloperModal from './components/ui/modals/DeveloperModal';
import ArtStudioModal from './components/ui/modals/ArtStudioModal';
import SonarisModal from './components/ui/modals/SonarisModal';
import AchievementsModal from './components/ui/modals/AchievementsModal';
import ContactModal from './components/ui/modals/ContactModal';
import ResumeModal from './components/ui/ResumeModal';
import { roomsData } from './data/rooms';
import { cosmicAudio } from './utils/audio';

export default function App() {
  const [activeRoom, setActiveRoom] = useState('landing');
  const [is2DMode, setIs2DMode] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [movementInput, setMovementInput] = useState({ x: 0, z: 0 });
  const [activeModal, setActiveModal] = useState(null);

  // Keyboard navigation listener (WASD and Arrow keys)
  useEffect(() => {
    const keysPressed = new Set();

    const handleKeyDown = (e) => {
      // Do not capture movement if typing in a form input
      if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;

      const code = e.code;
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code)) {
        keysPressed.add(code);
        updateMovement();
      }

      // Quick key 'M' toggles the Room Map
      if (code === 'KeyM' && activeRoom !== 'landing') {
        setActiveRoom((prev) => (prev === 'hub' ? 'personal' : 'hub'));
      }

      // Escape closes open drawer
      if (code === 'Escape' && activeModal) {
        setActiveModal(null);
      }
    };

    const handleKeyUp = (e) => {
      keysPressed.delete(e.code);
      updateMovement();
    };

    const updateMovement = () => {
      let x = 0;
      let z = 0;
      if (keysPressed.has('KeyW') || keysPressed.has('ArrowUp')) z -= 1;
      if (keysPressed.has('KeyS') || keysPressed.has('ArrowDown')) z += 1;
      if (keysPressed.has('KeyA') || keysPressed.has('ArrowLeft')) x -= 1;
      if (keysPressed.has('KeyD') || keysPressed.has('ArrowRight')) x += 1;
      setMovementInput({ x, z });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [activeModal, activeRoom]);

  // Audio Toggle
  const handleToggleSound = useCallback(() => {
    const isNowPlaying = cosmicAudio.toggleSound();
    setIsMuted(!isNowPlaying);
  }, []);

  // Modal Handlers
  const handleInteractObject = useCallback((type) => {
    cosmicAudio.playInteractChime('chime');
    if (['music', 'journal', 'sketchbook'].includes(type)) {
      setActiveModal('personal');
    } else if (['skills', 'github'].includes(type)) {
      setActiveModal('developer');
    } else if (['gallery', 'adobeTools'].includes(type)) {
      setActiveModal('art');
    } else if (['sonarisCaseStudy', 'sonarData'].includes(type)) {
      setActiveModal('sonaris');
    } else if (['achievements'].includes(type)) {
      setActiveModal('achievements');
    } else if (['contact'].includes(type)) {
      setActiveModal('contact');
    } else if (['resume'].includes(type)) {
      setActiveModal('resume');
    }
  }, []);

  // Enter World handler from hero screen
  const handleEnterUniverse = useCallback(() => {
    cosmicAudio.playInteractChime('chime');
    setActiveRoom('personal');
  }, []);

  // Mobile virtual joystick handlers
  const handleMobileMoveStart = (dir) => {
    if (dir === 'up') setMovementInput({ x: 0, z: -1 });
    if (dir === 'down') setMovementInput({ x: 0, z: 1 });
    if (dir === 'left') setMovementInput({ x: -1, z: 0 });
    if (dir === 'right') setMovementInput({ x: 1, z: 0 });
  };

  const handleMobileMoveEnd = () => {
    setMovementInput({ x: 0, z: 0 });
  };

  return (
    <div className="relative w-full h-full min-h-screen bg-[#070B24] overflow-hidden select-none">
      {/* 2D Accessible Mode */}
      {is2DMode ? (
        <Fallback2DView
          onSwitchTo3D={() => setIs2DMode(false)}
          onOpenResume={() => setActiveModal('resume')}
        />
      ) : (
        <>
          {/* 3D Canvas Scene */}
          <CosmicCanvas
            activeRoom={activeRoom}
            onSelectRoom={setActiveRoom}
            onInteractObject={handleInteractObject}
            movementInput={movementInput}
          />

          {/* Minimal Floating Header */}
          <CosmicHeader
            activeRoom={activeRoom}
            onNavigate={(dest) => {
              cosmicAudio.playInteractChime('chime');
              setActiveRoom(dest);
            }}
            isMuted={isMuted}
            onToggleSound={handleToggleSound}
            onToggle2DMode={() => setIs2DMode(true)}
            is2DMode={false}
          />

          {/* Opening Hero Scene (Displaying ONLY requested brand, title, tagline and enter action) */}
          {activeRoom === 'landing' && (
            <LandingOverlay onEnterUniverse={handleEnterUniverse} />
          )}

          {/* Compact Non-Blocking Room Map Navigation */}
          <RoomMapNav
            activeRoom={activeRoom}
            onSelectRoom={(dest) => {
              cosmicAudio.playInteractChime('chime');
              setActiveRoom(dest);
            }}
          />

          {/* Mobile Directional Controls (shown only when in an active room) */}
          {activeRoom !== 'landing' && activeRoom !== 'hub' && (
            <MobileControls
              onMoveStart={handleMobileMoveStart}
              onMoveEnd={handleMobileMoveEnd}
            />
          )}

          {/* Minimal Cosmic Footer */}
          <CosmicFooter activeRoom={activeRoom} />
        </>
      )}

      {/* Non-Blocking Compact Information Side Drawers */}
      <PersonalModal
        isOpen={activeModal === 'personal'}
        onClose={() => setActiveModal(null)}
      />

      <DeveloperModal
        isOpen={activeModal === 'developer'}
        onClose={() => setActiveModal(null)}
      />

      <ArtStudioModal
        isOpen={activeModal === 'art'}
        onClose={() => setActiveModal(null)}
      />

      <SonarisModal
        isOpen={activeModal === 'sonaris'}
        onClose={() => setActiveModal(null)}
      />

      <AchievementsModal
        isOpen={activeModal === 'achievements'}
        onClose={() => setActiveModal(null)}
      />

      <ContactModal
        isOpen={activeModal === 'contact'}
        onClose={() => setActiveModal(null)}
        onOpenResume={() => setActiveModal('resume')}
      />

      <ResumeModal
        isOpen={activeModal === 'resume'}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
