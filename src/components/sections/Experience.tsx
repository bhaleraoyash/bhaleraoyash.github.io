"use client";

import { m } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { containerVariants, itemVariants } from "@/lib/motion";
import { experiences } from "@/data/experience";
import type { Experience } from "@/types";

function ExperienceItem({ exp }: { exp: Experience }) {
  return (
    <m.div
      variants={itemVariants}
      className="relative pl-6 md:pl-8"
      style={{ borderLeft: "2px solid rgba(0,113,227,0.3)" }}
    >
      <div
        className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-[#0071e3]"
      />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#f5f5f7] leading-tight">
            {exp.role}
          </h3>
          <p className="text-base font-medium text-[#0071e3] mt-0.5">
            {exp.organization}
          </p>
        </div>
        <div className="text-left sm:text-right shrink-0">
          <p className="text-[#86868b] text-sm">{exp.period}</p>
          <p className="text-[#48484a] text-xs mt-0.5">{exp.location}</p>
        </div>
      </div>
    </m.div>
  );
}

export function Experience() {
  const work = experiences.filter((e) => e.type === "work");
  const edu = experiences.filter((e) => e.type === "education");

  return (
    <SectionWrapper id="experience">
      <div className="relative">
        <p className="absolute -top-8 left-0 text-[6rem] md:text-[10rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
          EXPERIENCE
        </p>

        <div className="mb-12">
          <p className="text-[#0071e3] text-sm font-semibold tracking-widest uppercase mb-3">Experience</p>
          <h2 className="section-title">Work &amp; <span>Education</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-6">Work</p>
            <m.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-8"
            >
              {work.map((exp) => <ExperienceItem key={exp.id} exp={exp} />)}
            </m.div>
          </div>

          <div>
            <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-6">Education</p>
            <m.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-8"
            >
              {edu.map((exp) => <ExperienceItem key={exp.id} exp={exp} />)}
            </m.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
