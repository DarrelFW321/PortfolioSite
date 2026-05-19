export interface Experience {
  date: string;
  role: string;
  company: string;
  desc: string;
  tags: string[];
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
  active?: boolean;
  image?: string;
}

export const experience: Experience[] = [
  {
    date: "Jan – May 2026",
    role: "ML / Gen AI Software Engineer",
    company: "Rogers Communications",
    desc: "RAG pipeline + Azure OpenAI to auto-generate metadata descriptions across Rogers' 4M-asset data catalog, cutting authoring time 67%.",
    tags: ["Python", "Azure OpenAI", "LangChain", "FastAPI", "React", "RAG"],
  },
  {
    date: "May – Aug 2025",
    role: "AI/ML Engineer & DevOps Intern",
    company: "Eon Media",
    desc: "GPU video analytics pipelines on AWS EKS with YOLO/DeepSort and LLMs; automated CI/CD cutting deployment overhead 50%.",
    tags: ["Python", "AWS EKS", "Kubernetes", "YOLO", "DeepSort"],
  },
  {
    date: "Feb 2025 – now",
    role: "Graphics Compiler Engineer",
    company: "Khronos Group / Nvidia — Open Source",
    desc: "Implementing texture intrinsics and validation tests in the Slang GPU shading compiler across SPIR-V, HLSL, WGSL, and CUDA.",
    tags: ["C++", "SPIR-V", "HLSL", "WGSL", "CUDA"],
    link: "https://github.com/shader-slang/slang",
  },
];

export const projects: Project[] = [
  {
    name: "Flux",
    type: "Compilers · WebAssembly",
    desc: "Statically typed DSL for ML numerical kernels with a full compiler pipeline — lexer, parser, AST, FluxIR, MIR optimization passes (constant folding, loop fusion, DCE), and LLVM-backed native codegen. Frontend compiled to WASM via Emscripten for live in-browser pipeline visualization.",
    tags: ["C++17", "LLVM", "WebAssembly", "React", "FastAPI"],
    liveLink: "https://darrelfw321.github.io/Flux/",
    liveLinkLabel: "Live Demo",
    active: true,
    image: "/images/flux.png",
  },
  {
    name: "Aerix",
    type: "SaaS · Web Scraping",
    desc: "Turns a URL + plain-English prompt into a live structured JSON endpoint. Self-healing scraper validated across 1,000+ endpoints; early signups acquired.",
    tags: ["Next.js", "FastAPI", "Playwright", "PostgreSQL", "Redis", "Gemini", "Docker"],
    liveLink: "https://aerix5.com",
    liveLinkLabel: "aerix5.com",
    active: true,
    image: "/images/aerix.png",
  },
  {
    name: "RISC-V Web Emulator",
    type: "Systems · WebAssembly",
    desc: "Browser-based RISC-V emulator in C++/WASM with real-time register and memory visualization. Adopted as a classroom tool at Waterloo.",
    tags: ["C++", "WebAssembly", "JavaScript"],
    liveLink: "https://riscv-emulator-beta.vercel.app/",
    liveLinkLabel: "Live Demo",
    active: true,
    image: "/images/riscv.png",
  },
];

export const skills: Record<string, string[]> = {
  "AI / ML": ["LangChain", "RAG", "Azure OpenAI", "LLM Fine-tuning", "YOLO", "Qdrant", "LoRA", "Ollama"],
  Languages: ["Python", "TypeScript", "C++", "JavaScript", "Java", "HLSL", "SQL"],
  Frameworks: ["FastAPI", "Next.js", "React", "Flask", "Node.js", "WebAssembly"],
  Infra: ["AWS", "Kubernetes", "Docker", "PostgreSQL", "Redis", "Azure"],
};

export const contact = {
  email: "dfwihand@uwaterloo.ca",
  github: { label: "DarrelFW321", url: "https://github.com/DarrelFW321" },
  linkedin: { label: "Darrel Wihandi", url: "https://linkedin.com/in/darrel-wihandi" },
};
