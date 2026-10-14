export const skillsData = {
  categories: [
    {
      id: "programming",
      name: "Core Programming",
      icon: "Code2",
      description: "Fundamental languages powering algorithmic problem-solving and computer science coursework.",
      skills: [
        {
          name: "C",
          level: "Comfortable",
          score: 80,
          highlight: "Procedural programming, pointers, memory management, and data structures.",
          badge: "C",
          color: "#55CFFF",
        },
        {
          name: "Java",
          level: "Comfortable",
          score: 75,
          highlight: "Object-oriented programming, class hierarchies, exception handling, and collections.",
          badge: "Java",
          color: "#F0BFFF",
        },
        {
          name: "Python",
          level: "Familiar",
          score: 70,
          highlight: "Scripting, algorithmic logic, data processing basics, and scientific computing.",
          badge: "Py",
          color: "#B9A7FF",
        },
      ],
    },
    {
      id: "web",
      name: "Web Development",
      icon: "Globe",
      description: "Front-end structure, responsive layouts, and interactive web interfaces.",
      skills: [
        {
          name: "HTML5",
          level: "Comfortable",
          score: 85,
          highlight: "Semantic markup, accessible DOM hierarchies, and modern web document standards.",
          badge: "HTML",
          color: "#EAF4FF",
        },
        {
          name: "CSS3 / Modern Styling",
          level: "Comfortable",
          score: 80,
          highlight: "Flexbox, CSS Grid, animations, responsive design, and glassmorphism styling.",
          badge: "CSS",
          color: "#55CFFF",
        },
        {
          name: "JavaScript (ES6+)",
          level: "Familiar",
          score: 65,
          highlight: "DOM manipulation, asynchronous fetching, modern array methods, and event handling.",
          badge: "JS",
          color: "#826BFF",
        },
        {
          name: "React & Three.js Exploration",
          level: "Learning",
          score: 55,
          highlight: "Component lifecycle, state hooks, 3D WebGL scene graphs, and interactive UI.",
          badge: "R3F",
          color: "#55CFFF",
        },
      ],
    },
    {
      id: "tools",
      name: "Tools & Workflow",
      icon: "Terminal",
      description: "Development environments, version control, and collaboration tools.",
      skills: [
        {
          name: "Git",
          level: "Familiar",
          score: 75,
          highlight: "Branching, staging, commit workflows, and version control hygiene.",
          badge: "Git",
          color: "#F0BFFF",
        },
        {
          name: "GitHub",
          level: "Comfortable",
          score: 80,
          highlight: "Remote repositories, markdown documentation, PRs, and project sharing.",
          badge: "GH",
          color: "#EAF4FF",
        },
        {
          name: "VS Code",
          level: "Comfortable",
          score: 85,
          highlight: "Configured extensions, integrated terminal, debugging workflows, and linting.",
          badge: "VSC",
          color: "#55CFFF",
        },
        {
          name: "Command Line / Terminal",
          level: "Familiar",
          score: 65,
          highlight: "Shell commands, file system navigation, package management, and basic scripting.",
          badge: "CLI",
          color: "#826BFF",
        },
      ],
    },
    {
      id: "creative",
      name: "Creative & Design Suite",
      icon: "Sparkles",
      description: "Visual design, layout composition, and multimedia authoring.",
      skills: [
        {
          name: "Adobe Photoshop",
          level: "Comfortable",
          score: 80,
          highlight: "Photo composition, digital artwork texturing, color correction, and mood boarding.",
          badge: "Ps",
          color: "#55CFFF",
        },
        {
          name: "Adobe Illustrator",
          level: "Familiar",
          score: 70,
          highlight: "Vector illustration, iconography, typography hierarchy, and branding assets.",
          badge: "Ai",
          color: "#F0BFFF",
        },
        {
          name: "Adobe Premiere Pro",
          level: "Familiar",
          score: 65,
          highlight: "Timeline video editing, audio synchronization, and showcase reels.",
          badge: "Pr",
          color: "#826BFF",
        },
        {
          name: "Adobe Firefly & Generative Tools",
          level: "Familiar",
          score: 75,
          highlight: "Prompt engineering, creative mood generation, and asset ideation.",
          badge: "Ff",
          color: "#B9A7FF",
        },
      ],
    },
  ],
  codeSnippet: `// Developer Room Console
class CreativeDeveloper {
  constructor(name = "Kripa Singh") {
    this.name = name;
    this.status = "Building & Exploring";
    this.coreLanguages = ["C", "Java", "Python"];
    this.webStack = ["HTML5", "CSS3", "JavaScript", "React"];
    this.creativeSuite = ["Photoshop", "Illustrator", "Premiere"];
  }

  manifesto() {
    return "Code is how I turn ideas into reality.";
  }
}

const me = new CreativeDeveloper();
console.log(me.manifesto());`
};
