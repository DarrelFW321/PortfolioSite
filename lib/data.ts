export interface Experience {
  date: string;
  role: string;
  company: string;
  bullets: string[];
  tags: string[];
  current?: boolean;
  link?: string;
}

export interface Project {
  name: string;
  type: string;
  bullets: string[];
  tags: string[];
  link?: string;
  liveLink?: string;
  liveLinkLabel?: string;
  image?: string;
  date?: string;
  media?: { label: string; src: string; alt: string }[];
  video?: string;
}

export const experience: Experience[] = [
  {
    "date": "Sept 2026 – now",
    "role": "Software Engineering Intern",
    "company": "Carta",
    bullets: ["Built tools for customers to set up company sign-in and manage employee access.", "Created automated tests for sign-in and account updates across services."],
    "tags": [
      "C++",
      "Python",
      "gRPC",
      "PostgreSQL",
      "Redis"
    ],
    "current": true
  },
  {
    "date": "Feb 2025 – now",
    "role": "Graphics Compiler Contributor",
    "company": "NVIDIA Slang — Open Source",
    bullets: ["Contributed to Slang, an open-source compiler for GPU shaders.", "Improved how shaders read texture dimensions and tested the generated code across graphics targets."],
    "tags": [
      "C++",
      "Slang",
      "SPIR-V",
      "WGSL"
    ],
    "current": true,
    "link": "https://github.com/shader-slang/slang"
  },
  {
    "date": "May – Oct 2026",
    "role": "Machine Learning Systems Engineer",
    "company": "Wat.AI — TRACE",
    bullets: ["Built tools to identify where AI agents fail during multi-step tasks.", "Turned failures into repeatable tests to check fixes and catch recurring issues."],
    "tags": [
      "Python",
      "OpenTelemetry",
      "SQLite"
    ]
  },
  {
    "date": "Jan – May 2026",
    "role": "AI Software Engineer",
    "company": "Rogers Communications",
    bullets: ["Built an AI-assisted tool to draft and review descriptions for an internal data catalog.", "Combined regulatory and customer data to help the strategy team evaluate wireless spectrum opportunities."],
    "tags": [
      "Python",
      "Azure OpenAI",
      "FastAPI"
    ]
  },
  {
    "date": "May – Aug 2025",
    "role": "Software Engineer",
    "company": "Eon Media",
    bullets: ["Developed GPU processing to prepare sports video for object detection.", "Deployed video services on AWS and automated their build and release workflows."],
    "tags": [
      "C++",
      "CUDA",
      "Python",
      "AWS EKS"
    ]
  }
];

export const projects: Project[] = [
{
  "name": "Nimbus",
  "type": "Real-Time Volumetric Renderer",
  "date": "Mar – May 2026",
  bullets: ["Renders clouds and skies in real time, with changing weather and lighting.", "Reuses rendering work between frames to make detailed clouds faster to draw."],
  "tags": [
    "C++",
    "Vulkan",
    "GLSL",
    "HLSL",
    "RenderDoc"
  ],
  "link": "https://github.com/DarrelFW321/Nimbus",
  "image": "/images/nimbus-noon.png",
  "media": [
    {
      "label": "Still",
      "src": "/images/nimbus-noon.png",
      "alt": "Nimbus volumetric clouds above a sunlit mountain valley"
    },
    {
      "label": "Flythrough",
      "src": "/images/nimbus-flythrough.gif",
      "alt": "Nimbus camera flythrough over terrain and ray-marched clouds"
    },
    {
      "label": "Time of day",
      "src": "/images/nimbus-timeofday.gif",
      "alt": "Nimbus atmosphere and cloud lighting changing with the sun"
    },
    {
      "label": "Weather",
      "src": "/images/nimbus-weather.gif",
      "alt": "Nimbus cloud coverage changing with weather settings"
    }
  ]
},
  {
    name: "Dex",
    type: "Hack the North 2026",
    bullets: ["Uses voice commands to redesign scanned rooms and preview changes in augmented reality.", "Checks furniture placement for collisions and blocked doorways."],
    tags: ["TypeScript", "React Native", "Swift", "Three.js"],
    liveLink: "https://dex-reality-editor.vercel.app/",
    link: "https://github.com/DarrelFW321/RealityEditor",
    image: "/images/dex.jpg",
    video: "/videos/dex.mp4",
  },
  {
    name: "Flux",
    date: "Feb – Mar 2026",
    type: "Shader Compiler & Playground",
    bullets: ["A shader language and compiler for writing programs that run on the GPU.", "Includes a browser playground to edit shaders, preview visuals, and inspect the compiled code."],
    tags: ["C++", "SPIR-V", "WGSL", "WebGPU", "WebAssembly"],
    liveLink: "https://darrelfw321.github.io/Flux/",
    liveLinkLabel: "Live Playground",
    link: "https://github.com/DarrelFW321/Flux",
    image: "/images/flux-playground.png",
    media: [
      { label: "Still", src: "/images/flux-playground.png", alt: "Flux WebGPU playground with shader source, a live preview, and compiler output" },
      { label: "Demo", src: "/images/flux-demo.gif", alt: "Editing a Flux shader as the WebGPU preview, diagnostics, WGSL, SPIR-V, and IR update live" },
    ],
  },
  {
    name: "Aerix",
    type: "Web Data Extraction",
    bullets: ["Turns a website and a description of the data you need into a reusable API.", "Refreshes extracted data and adapts when the source website changes."],
    tags: ["Next.js", "FastAPI", "Playwright", "PostgreSQL", "Gemini"],
    liveLink: "https://aerix5.com",
    liveLinkLabel: "aerix5.com",
    image: "/images/aerix.png",
  },
  {
    name: "RISC-V Web Emulator",
    type: "Browser-Based Emulator",
    bullets: ["Runs RISC-V programs directly in the browser.", "Shows register and memory changes to help students understand how programs execute."],
    tags: ["C++", "WebAssembly", "JavaScript"],
    liveLink: "https://riscv-emulator-beta.vercel.app/",
    link: "https://github.com/DarrelFW321/riscv-emulator",
    image: "/images/riscv.png",
  },
];

export const contact = {
  email: "dfwihand@uwaterloo.ca",
  github: { label: "DarrelFW321", url: "https://github.com/DarrelFW321" },
  linkedin: { label: "Darrel Wihandi", url: "https://linkedin.com/in/darrel-wihandi" },
  resume: "/resume.pdf",
};
