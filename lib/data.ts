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
    desc: "self-service enterprise sso — c++ grpc apis for config crud, scim provisioning for user and group sync, and a python mock idp to test it all end to end. replaced a manual, staff-assisted setup.",
    tags: ["C++", "Python", "gRPC", "PostgreSQL", "Redis"],
    current: true,
  },
  {
    date: "May 2026 – now",
    role: "Machine Learning Systems Engineer",
    company: "Wat.AI — TRACE",
    desc: "agentic qa + observability for ai agents — runs them through realistic tool / rag workflows, verifies outcomes, isolates where the workflow became unrecoverable, and turns failures into regression tests. built at wat.ai w/ composio + magic hour. catching agents when they hallucinate.",
    tags: ["Python", "LangGraph", "OpenTelemetry", "SQLite"],
    current: true,
  },
  {
    date: "Feb 2025 – now",
    role: "Graphics Compiler Engineer",
    company: "NVIDIA — Open Source Contributor",
    desc: "open-source work on slang, nvidia's gpu shading language compiler — texture intrinsics and cross-backend validation tests across spir-v, hlsl, wgsl, and cuda.",
    tags: ["C++", "SPIR-V", "HLSL", "WGSL", "CUDA"],
    current: true,
    link: "https://github.com/shader-slang/slang",
  },
  {
    date: "Jan – May 2026",
    role: "ML / Gen AI Software Engineer",
    company: "Rogers Communications",
    desc: "genai metadata enrichment for an enterprise data catalog — rag + azure openai draft the descriptions, confidence scoring routes the shaky ones to human review. also built a spectrum acquisition pipeline for the strategy team.",
    tags: ["Python", "Azure OpenAI", "LangChain", "FastAPI"],
  },
  {
    date: "May – Aug 2025",
    role: "AI/ML Engineer & DevOps Intern",
    company: "Eon Media",
    desc: "gpu video analytics for live and archived sports footage on aws eks — yolo/deepsort tracking, ocr, and llm summaries. plus ci/cd and cloud infra automation for the inference workloads.",
    tags: ["Python", "AWS", "Kubernetes", "YOLO"],
  },
];

export const projects: Project[] = [
  {
    name: "Dex",
    type: "Hack the North 2026",
    desc: "voice-driven ai agent that redesigns lidar-scanned rooms and shows them in ar — on-device collision, clearance, and door-swing checks so edits actually fit. built at hack the north.",
    tags: ["TypeScript", "React Native", "Swift", "Three.js"],
    liveLink: "https://dex-reality-editor.vercel.app/",
    link: "https://github.com/DarrelFW321/RealityEditor",
    image: "/images/dex.jpg",
    video: "/videos/dex.mp4",
  },
  {
    name: "Flux",
    type: "Compilers",
    desc: "statically typed dsl for ml numerical kernels — lexer, parser, type checker, custom ir, optimization passes, and llvm codegen, benchmarked against c and numpy. compiles to wasm with a live in-browser pipeline visualizer.",
    tags: ["C++17", "LLVM", "WebAssembly", "React"],
    liveLink: "https://darrelfw321.github.io/Flux/",
    link: "https://github.com/DarrelFW321/Flux",
    image: "/images/flux.png",
  },
  {
    name: "Aerix",
    type: "SaaS",
    desc: "url + plain-english prompt → live json api. caches browser-navigation plans and rediscovers extraction paths when sites change, so endpoints don't break.",
    tags: ["Next.js", "FastAPI", "Playwright", "PostgreSQL", "Gemini"],
    liveLink: "https://aerix5.com",
    liveLinkLabel: "aerix5.com",
    image: "/images/aerix.png",
  },
  {
    name: "RISC-V Web Emulator",
    type: "Systems",
    desc: "browser-based risc-v emulator in c++/wasm with live register and memory views. adopted as a classroom tool at waterloo.",
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
