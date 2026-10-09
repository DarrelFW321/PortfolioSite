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
    bullets: ["self-service enterprise sign-in and account provisioning, built with C++ and gRPC.", "python tooling to test authentication and access changes across services."],
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
    bullets: ["open-source work on Slang, focused on texture queries and shader code generation.", "debugging differences between SPIR-V and WGSL backends, with regression tests to keep them consistent."],
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
    bullets: ["trace analysis and state validation to figure out where AI-agent workflows go wrong.", "turning failures into reproducible tests and replaying them in CI."],
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
    bullets: ["AI-assisted catalog descriptions, with business context and human review.", "data pipelines that help the strategy team evaluate spectrum acquisition opportunities."],
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
    bullets: ["GPU video processing for sports analytics, including CUDA preprocessing ahead of object detection.", "deployment and automation for video services running on AWS and Kubernetes."],
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
  bullets: ["a Vulkan renderer for ray-marched clouds, changing skies, and dynamic lighting.", "profiling and optimizing the GPU pipeline with adaptive ray marching and temporal reconstruction."],
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
    bullets: ["talk to an AI agent to redesign a scanned room and preview the changes in AR.", "built at Hack the North, with geometry checks to keep furniture clear of walls and doors."],
    tags: ["TypeScript", "React Native", "Swift", "Three.js"],
    liveLink: "https://dex-reality-editor.vercel.app/",
    link: "https://github.com/DarrelFW321/RealityEditor",
    image: "/images/dex.jpg",
    video: "/videos/dex.mp4",
  },
  {
    name: "Flux",
    date: "Feb – Mar 2026",
    type: "Compilers",
    bullets: ["a small language and compiler for numerical kernels, built in C++ with LLVM.", "a browser visualizer for exploring compiler stages and comparing generated code with C and NumPy."],
    tags: ["C++", "LLVM", "WebAssembly", "React"],
    liveLink: "https://darrelfw321.github.io/Flux/",
    link: "https://github.com/DarrelFW321/Flux",
    image: "/images/flux.png",
  },
  {
    name: "Aerix",
    type: "SaaS",
    bullets: ["turn a URL and a plain-english prompt into a reusable JSON API.", "cached browser plans that adapt when the source website changes."],
    tags: ["Next.js", "FastAPI", "Playwright", "PostgreSQL", "Gemini"],
    liveLink: "https://aerix5.com",
    liveLinkLabel: "aerix5.com",
    image: "/images/aerix.png",
  },
  {
    name: "RISC-V Web Emulator",
    type: "Systems",
    bullets: ["a RISC-V emulator that runs in the browser through WebAssembly.", "live register and memory views, used as a classroom tool at Waterloo."],
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
