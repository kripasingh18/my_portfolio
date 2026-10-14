export const projectsData = [
  {
    id: "sonaris",
    title: "SONARIS",
    subtitle: "Ocean Monitoring & Sonar Analysis Platform",
    tagline: "Exploring the depths for a safer tomorrow.",
    featured: true,
    category: "Acoustic Computing & Ocean Tech",
    badge: "Flagship Innovation",
    accentColor: "#55CFFF",
    summary:
      "A specialized computational platform designed to process hydroacoustic signals, model underwater bathymetric contours, and detect submerged marine anomalies in noisy oceanic environments.",
    problem:
      "Ocean monitoring faces severe challenges: acoustic signals propagating through underwater thermoclines suffer from multipath scattering, ambient oceanic noise, and attenuation. Traditional sonar interpretation requires extensive human oversight, leading to delays in identifying underwater hazards, navigation obstacles, or anomalous marine shifts.",
    solution:
      "SONARIS introduces an integrated software pipeline that cleans acoustic telemetry streams through frequency filtering, renders real-time 3D bathymetric point-clouds and wireframe ocean floors, and flags acoustic anomalies for human researchers.",
    myContribution:
      "Conceptualized the project architecture as a CSE student researcher; programmed initial acoustic signal filtering scripts using Python; designed the interactive 3D bathymetric telemetry visualizer using WebGL/Three.js; and structured the platform's modular user interface.",
    techStack: [
      { name: "Python", role: "Signal filtering, NumPy array matrix transformation" },
      { name: "Three.js / WebGL", role: "Real-time 3D bathymetric wireframe & seabed rendering" },
      { name: "JavaScript / React", role: "Telemetry control dashboard and interactive HUD" },
      { name: "CSS3 Glassmorphism", role: "Futuristic sonar radar overlays & visual analytics" }
    ],
    sections: [
      {
        id: "data",
        title: "Sonar Data",
        icon: "Radio",
        content: "Ingests raw hydroacoustic pulse echoes and multi-beam echo sounder (MBES) feeds. Maps time-of-flight reflections into precise 3D depth coordinates.",
        metrics: "Simulated ping rate: 24Hz • Synthetic depth range: 0 - 2,500m"
      },
      {
        id: "analysis",
        title: "Analysis",
        icon: "LineChart",
        content: "Applies spectral filtering and baseline noise subtraction to isolate physical seabed geometry from biological ambient scattering and thermal noise.",
        metrics: "FFT noise reduction filters • Adaptive thresholding"
      },
      {
        id: "detection",
        title: "Detection",
        icon: "ShieldAlert",
        content: "Identifies geometric anomalies such as sudden bathymetric drop-offs, underwater trench formations, and submerged foreign structures.",
        metrics: "Real-time anomaly bounding markers & spatial coordinates"
      },
      {
        id: "impact",
        title: "Impact",
        icon: "Globe2",
        content: "Provides maritime researchers, conservationists, and safety teams with intuitive, interactive 3D spatial awareness without relying on expensive proprietary software.",
        metrics: "Open scientific computing • Accessible web-based visualization"
      }
    ],
    implementationStatus: {
      completed: [
        "Interactive 3D bathymetric mesh & wave-terrain simulation",
        "Sonar pulse radar animation & interactive point exploration",
        "Acoustic frequency filtering architecture & Python simulation scripts",
        "Responsive telemetry HUD with multi-channel data tabs"
      ],
      inProgress: [
        "Integration with live Open Oceanographic IoT sensor feeds",
        "Automated marine life acoustic signature classification"
      ],
      planned: [
        "Deep learning acoustic classification model for submerged debris",
        "Multi-agent autonomous underwater vehicle (AUV) telemetry sync"
      ]
    },
    links: {
      github: "https://github.com/kripasingh18", // Honest link to profile / repo repository
      githubLabel: "View on GitHub (Repository in Progress)",
      demoNote: "Interactive 3D simulation available right here in the Innovation Lab"
    }
  },
  {
    id: "kripaverse",
    title: "KRIPAVERSE",
    subtitle: "Interactive 3D Cosmic Portfolio & Personal House",
    tagline: "A dreamy journey through code, creativity, and aspirations.",
    featured: false,
    category: "Creative Web Development",
    badge: "Web Experience",
    accentColor: "#B9A7FF",
    summary:
      "A real-time 3D web experience built with Three.js and React that reimagines the traditional developer portfolio as a tranquil, explorable futuristic cosmic sanctuary floating among nebula clouds.",
    problem:
      "Conventional portfolio websites often feel impersonal, rigid, and indistinguishable from standard templates, failing to convey the developer's creative dimension, aesthetic sensibilities, or spatial thinking.",
    solution:
      "Designed an immersive 6-room architectural space home featuring thematic 3D interactives, responsive dual-mode exploration (first-person walk & direct 2D fast travel), and clean data-driven content management.",
    myContribution:
      "Sole developer and designer. Engineered 3D procedural environments, customized shaders, responsive HUD interfaces, and ambient Web Audio synthesizer.",
    techStack: [
      { name: "React", role: "Component architecture & state machine" },
      { name: "Three.js / R3F", role: "Procedural 3D cosmic home, lighting & camera transitions" },
      { name: "Drei", role: "3D helpers, billboard sprites & spatial audio" },
      { name: "Tailwind / CSS", role: "Responsive cosmic HUD & glassmorphism panels" }
    ],
    implementationStatus: {
      completed: [
        "6 connected thematic cosmic rooms with procedural 3D elements",
        "Dual exploration modes: full 3D interactive controls and 2D quick travel",
        "Interactive portfolio panels for skills, projects, art, and achievements",
        "Lightweight gamification room discovery system and progress tracker"
      ],
      inProgress: [
        "Additional 3D architectural details and room props",
        "Performance benchmarks across ultra-low-end mobile devices"
      ],
      planned: [
        "Custom GLTF model imports for personalized room trinkets"
      ]
    },
    links: {
      github: "https://github.com/kripasingh18",
      githubLabel: "View Source on GitHub"
    }
  },
  {
    id: "algo-visualizer",
    title: "Data Structure & Algorithm Playground",
    subtitle: "Interactive Computer Science Learning Environment",
    tagline: "Demystifying pointers, recursion, and graph traversals visually.",
    featured: false,
    category: "Academic & Systems",
    badge: "Student Project",
    accentColor: "#F0BFFF",
    summary:
      "An interactive web-based algorithm visualizer developed to study and demonstrate fundamental sorting routines, binary search trees, and graph traversal algorithms.",
    problem:
      "Abstract data structures such as balanced search trees and graph shortest-path traversals can be challenging to grasp from static textbook pseudocode alone.",
    solution:
      "Built a step-by-step interactive simulator that demonstrates memory pointer updates, node balancing rotations, and array comparisons in real-time.",
    myContribution:
      "Implemented core sorting logic in C and JavaScript, designed the animated step-by-step canvas display, and authored documentation for fellow classmates.",
    techStack: [
      { name: "C", role: "Initial algorithmic logic and memory profiling" },
      { name: "JavaScript", role: "Interactive DOM animation & step sequencer" },
      { name: "HTML5 / CSS3", role: "UI controls, speed sliders, and complexity charts" }
    ],
    implementationStatus: {
      completed: [
        "Bubble, Insertion, Merge, and Quick Sort visual step execution",
        "Time complexity breakdown and step counter"
      ],
      inProgress: [
        "Binary Search Tree insertion and deletion visualization"
      ],
      planned: [
        "Dijkstra and A* pathfinding grid"
      ]
    },
    links: {
      github: "https://github.com/kripasingh18",
      githubLabel: "View on GitHub"
    }
  }
];
