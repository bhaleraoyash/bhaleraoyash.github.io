"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { languages, frameworks, tools } from "@/data/skills";

const row1 = [...languages, ...frameworks];
const row2 = [...tools, ...languages.slice(0, 3)];

function MarqueeRow({ items, reverse = false }: { items: { label: string }[]; reverse?: boolean }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-2">
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee${reverse ? "Reverse" : ""} 30s linear infinite`,
        }}
      >
        {doubled.map((skill, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-5 py-2.5 rounded-full border border-white/[0.08] bg-[#1c1c1e]/60 backdrop-blur-sm"
          >
            <span className="text-[#86868b] text-sm font-medium whitespace-nowrap">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills" className="overflow-hidden">
      <div className="relative">
        <p className="absolute -top-8 left-0 text-[8rem] md:text-[12rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
          SKILLS
        </p>

        <div className="mb-12">
          <p className="text-[#0071e3] text-sm font-semibold tracking-widest uppercase mb-3">Skills</p>
          <h2 className="section-title">Tech <span>Stack</span></h2>
        </div>
      </div>

      {/* Marquee strips — full bleed past container */}
      <div className="-mx-6 md:-mx-12">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </SectionWrapper>
  );
}
