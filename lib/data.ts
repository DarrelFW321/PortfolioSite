export interface Experience {
  date: string;
  role: string;
  company: string;
  desc: string;
  tags: string[];
  current?: boolean;
  link?: string;
}

export interface Project {
  name: string;
  type: string;
  desc: string;
  tags: string[];
  link?: string;
  liveLink?: string;
  liveLinkLabel?: string;
  image?: string;
  video?: string;
}

export const experience: Experience[] = [
  {
    date: "Sept 2026 – now",
    role: "Software Engineering Intern",
    company: "Carta",
    desc: "Self-service enterprise SSO with C++ gRPC APIs and SCIM provisioning, replacing staff-assisted setup.",
    tags: ["C++", "Python", "gRPC", "PostgreSQL", "Redis"],
    current: true,
  },
  {
    date: "May 2026 – now",
    role: "Machine Learning Systems Engineer",
    company: "Wat.AI — TRACE",
    desc: "Reliability framework that pinpoints failures in multi-step AI agent workflows and turns them into reproducible test cases.",
    tags: ["Python", "LangGraph", "OpenTelemetry", "SQLite"],
    current: true,
  },
  {
    date: "Feb 2025 – now",
    role: "Graphics Compiler Engineer",
    company: "NVIDIA — Open Source Contributor",
    desc: "Texture intrinsics and cross-backend validation tests in the Slang GPU shading compiler across SPIR-V, HLSL, WGSL, and CUDA.",
    tags: ["C++", "SPIR-V", "HLSL", "WGSL", "CUDA"],
    current: true,
    link: "https://github.com/shader-slang/slang",
  },
  {
    date: "Jan – May 2026",
    role: "ML / Gen AI Software Engineer",
    company: "Rogers Communications",
    desc: "AI metadata enrichment platform with RAG and human review, plus a spectrum acquisition pipeline for the strategy team.",
    tags: ["Python", "Azure OpenAI", "LangChain", "FastAPI"],
  },
  {
    date: "May – Aug 2025",
    role: "AI/ML Engineer & DevOps Intern",
    company: "Eon Media",
    desc: "GPU video analytics pipelines on AWS EKS for live sports footage (YOLO/DeepSort, OCR, LLMs), plus CI/CD and cloud infrastructure automation.",
    tags: ["Python", "AWS", "Kubernetes", "YOLO"],
  },
];

export const projects: Project[] = [
  {
    name: "Dex",
    type: "Hack the North 2026",
    desc: "AI agent that redesigns LiDAR-scanned rooms from voice commands and shows them in AR, with on-device collision and clearance validation.",
    tags: ["TypeScript", "React Native", "Swift", "Three.js"],
    liveLink: "https://dex-reality-editor.vercel.app/",
    link: "https://github.com/DarrelFW321/RealityEditor",
    image: "/images/dex.jpg",
    video: "/videos/dex.mp4",
  },
  {
    name: "Flux",
    type: "Compilers",
    desc: "Statically typed DSL for ML numerical kernels — lexer, parser, type checker, custom IR, optimization passes, and LLVM codegen, benchmarked against C and NumPy. Runs in the browser via WebAssembly with a live pipeline visualizer.",
    tags: ["C++17", "LLVM", "WebAssembly", "React"],
    liveLink: "https://darrelfw321.github.io/Flux/",
    link: "https://github.com/DarrelFW321/Flux",
    image: "/images/flux.png",
  },
  {
    name: "Aerix",
    type: "SaaS",
    desc: "Turns a URL and a plain-English prompt into a live JSON API. Caches browser-navigation plans and rediscovers extraction paths when sites change.",
    tags: ["Next.js", "FastAPI", "Playwright", "PostgreSQL", "Gemini"],
    liveLink: "https://aerix5.com",
    liveLinkLabel: "aerix5.com",
    image: "/images/aerix.png",
  },
  {
    name: "RISC-V Web Emulator",
    type: "Systems",
    desc: "Browser-based RISC-V emulator in C++/WASM with live register and memory views. Adopted as a classroom tool at Waterloo.",
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
