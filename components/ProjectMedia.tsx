"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/lib/data";

export default function ProjectMedia({ name, media }: { name: string; media: NonNullable<Project["media"]> }) {
  const [selected, setSelected] = useState(0);
  const active = media[selected];

  return (
    <div className="project-gallery">
      <div className="project-image-wrap">
        <Image
          src={active.src}
          alt={active.alt}
          width={1920}
          height={1080}
          sizes="(max-width: 600px) 100vw, 680px"
          unoptimized={active.src.endsWith(".gif")}
          className="project-image"
        />
      </div>
      <div className="media-controls" role="group" aria-label={`${name} demos`}>
        {media.map((item, index) => (
          <button key={item.src} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>
            {index === 0 && selected !== 0 ? "Stop animation" : item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
