// Web Audio API Procedural Ambient Sound & Interaction Chimes
class CosmicAudioController {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.ambientNodes = [];
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized && this.ctx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.isInitialized = true;
    } catch (e) {
      console.warn("Web Audio not supported", e);
    }
  }

  toggleSound() {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopAmbient();
    } else {
      this.startAmbient();
    }
    return !this.isMuted;
  }

  startAmbient() {
    if (this.isMuted || !this.ctx) return;
    this.stopAmbient();

    try {
      // Cosmic drone chords: peaceful frequencies in F minor / celestial pentatonic
      // F2 (87.31Hz), C3 (130.81Hz), Ab3 (207.65Hz), Eb4 (311.13Hz)
      const frequencies = [87.31, 130.81, 207.65, 311.13];

      frequencies.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Lowpass filter for warm, dreamy pad
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + idx * 80, this.ctx.currentTime);

        // LFO for subtle breathing movement
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(0.08 + idx * 0.03, this.ctx.currentTime);
        lfoGain.gain.setValueAtTime(15, this.ctx.currentTime);
        lfo.connect(filter.frequency);
        lfo.start();

        gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.025 / frequencies.length, this.ctx.currentTime + 3);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        this.ambientNodes.push({ osc, gain, filter, lfo });
      });
    } catch (err) {
      console.warn("Could not start ambient drone", err);
    }
  }

  stopAmbient() {
    this.ambientNodes.forEach(node => {
      try {
        if (node.gain && this.ctx) {
          node.gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
        }
        setTimeout(() => {
          try {
            node.osc.stop();
            node.osc.disconnect();
            if (node.lfo) node.lfo.stop();
          } catch (e) {}
        }, 1100);
      } catch (e) {}
    });
    this.ambientNodes = [];
  }

  playInteractChime(type = 'chime') {
    if (this.isMuted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const now = this.ctx.currentTime;

      if (type === 'discovery') {
        // Celestial discovery chord
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          const chordOsc = this.ctx.createOscillator();
          const chordGain = this.ctx.createGain();
          chordOsc.type = 'sine';
          chordOsc.frequency.setValueAtTime(freq, now + i * 0.08);
          chordGain.gain.setValueAtTime(0.001, now + i * 0.08);
          chordGain.gain.exponentialRampToValueAtTime(0.035, now + i * 0.08 + 0.05);
          chordGain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 1.2);
          chordOsc.connect(chordGain);
          chordGain.connect(this.ctx.destination);
          chordOsc.start(now + i * 0.08);
          chordOsc.stop(now + i * 0.08 + 1.3);
        });
        return;
      }

      // Default gentle click/hover chime
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.12);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) {}
  }
}

export const cosmicAudio = new CosmicAudioController();
