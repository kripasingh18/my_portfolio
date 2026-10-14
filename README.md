# KRIPAVERSE — An Interactive 3D Cosmic Portfolio
> **A Journey Through My World** • Designed & Engineered for Kripa Singh

Welcome to **KRIPAVERSE**, an immersive real-time 3D web experience combining the atmosphere of a dreamy sci-fi exploration game, the comfort of a minimal futuristic home, and the functionality of a professional developer portfolio.

---

## 🌟 Visual Theme & Atmosphere
- **Cosmic Palette**: Deep midnight navy (`#070B24`), oceanic blue (`#101A4B`), electric sky cyan (`#55CFFF`), soft lavender (`#B9A7FF`), celestial violet (`#826BFF`), and cloud white (`#EAF4FF`).
- **Floating Cosmic Architecture**: Connected glass rotunda suspended over soft lavender clouds, ringed violet gas giant, drifting starlight motes, and transparent domed rooms.
- **Glassmorphism HUD**: Floating controls, scanline overlays, holographic indicators, and accessible contrast typography.

---

## 🏛️ Explorable Rooms & Features

| # | Room | Theme & Key Highlights |
|---|------|------------------------|
| **01** | **Landing Scene** | Cinematic distant overview of the cosmic villa, ringed planet, and "ENTER THE HOUSE" portal. |
| **02** | **Room Map / Central Rotunda** | Central glowing circular plaza with radial bridges leading to each room pod. |
| **03** | **Personal Room** | "My Calm Corner": Minimalist bed sanctuary, floating music player, sketchbook, star map, and personal journal. |
| **04** | **Developer Room** | "Build. Break. Improve.": Futuristic coding desk, holographic live code console, floating language tokens (C, Java, Python), and direct GitHub integration. |
| **05** | **Art Studio** | "Create. Express. Feel.": Art easel with glowing cosmic canvas, floating art frames, digital drawing tablet, and Adobe Creative Cloud suite (Photoshop, Illustrator, Premiere Pro, Firefly). |
| **06** | **Innovation Lab** | "Real Problems. Creative Solutions.": In-depth case study of project **SONARIS** (Ocean Monitoring & Sonar Analysis Platform) featuring a 3D animated bathymetric seabed and pulsing sonar radar. |
| **07** | **Achievements Gallery** | "Little Wins. Big Motivation.": Crystalline pedestals and light pillars displaying hackathons, certificates, and milestones. |
| **08** | **Contact Lounge** | "Let's Build Something Meaningful Together": Lounge sofa, coffee table with comm orb, direct email, LinkedIn, GitHub, and digital resume viewer. |

---

## 🎮 Navigation & Gameplay Controls

- **Desktop Movement**: Use **W A S D** or **Arrow Keys** to move across rooms.
- **Object Inspection**: Click on any floating **holographic gem / beacon** to open detailed portfolio information panels.
- **Quick Travel**: Use the top **Room Map** link or bottom room switcher bar to glide instantly to any destination.
- **Mobile Touch**: On-screen directional buttons and tap-to-explore cards.
- **2D Accessible Mode**: Toggle "2D OVERVIEW" in the header anytime for an instant, lightweight DOM-based reading experience.
- **Ambient Audio**: Optional Web Audio procedural cosmic synthesizer (muted by default; toggle on in header or landing overlay).
- **Gamification**: Real-time room discovery tracker (`X / 6 Rooms Discovered`), celebratory confetti, and a Room Discovery Journal.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core**: React 18, Vite 5, JavaScript (ES6+)
- **3D Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Styling**: Modern CSS3 variables, Glassmorphism, Responsive Flexbox & Grid
- **Icons & Effects**: Lucide React, Canvas Confetti
- **Audio**: Web Audio API (procedural harmonic drones, zero external audio asset dependencies)

---

## 📂 Project Structure & Editable Content

All personal content is separated into clean, modular data files so you can easily update your portfolio without touching 3D scene code:

```
src/
├── data/
│   ├── profile.js       # Bio, tagline, contact details, social links, journal
│   ├── skills.js        # Technical languages, proficiency ratings, code snippet
│   ├── projects.js      # Flagship SONARIS case study and secondary projects
│   ├── artworks.js      # Art gallery categories, tools used, and artwork entries
│   ├── achievements.js  # Hackathons, certifications, leadership, and milestones
│   └── rooms.js         # 3D room coordinates, metadata, and discovery badges
├── components/
│   ├── canvas/          # 3D Three.js scene, environment, house, beacons, camera rig
│   │   └── rooms/       # Individual 3D room pod components
│   └── ui/              # Responsive HUD, overlays, navigation, and modal dialogues
│       └── modals/      # Rich information modals for each room
└── utils/
    └── audio.js         # Procedural Web Audio API controller
```

---

## 🚀 Running Locally

1. Clone or navigate into the directory:
   ```bash
   cd my_portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
