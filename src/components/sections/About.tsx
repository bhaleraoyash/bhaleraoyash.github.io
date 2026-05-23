"use client";

import { m } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { containerVariants, itemVariants } from "@/lib/motion";
import { personal } from "@/data/personal";

const stats = [
  { value: "SWE", label: "MarketAxess" },
  { value: "MS CS", label: "NYU Tandon '23" },
  { value: "NYC", label: "New York City" },
  { value: "4+", label: "Years Experience" },
];

export function About() {
  return (
    <SectionWrapper id="about">
      {/* Watermark */}
      <div className="relative">
        <p className="absolute -top-8 left-0 text-[8rem] md:text-[12rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
          ABOUT
        </p>

        <div className="mb-12">
          <p className="text-[#0071e3] text-sm font-semibold tracking-widest uppercase mb-3">About</p>
          <h2 className="section-title">My <span>Story</span></h2>
        </div>

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          style={{
            gridTemplateAreas: `
              "bio bio stat1 stat2"
              "bio bio stat3 stat4"
            `,
          }}
        >
          {/* Bio — large tile */}
          <m.div
            variants={itemVariants}
            className="glass-card p-7 md:p-8 col-span-2 row-span-2 flex flex-col justify-between min-h-[240px]"
            style={{ gridArea: "bio" }}
          >
            <p className="text-[#86868b] text-base md:text-lg leading-relaxed">
              {personal.bio}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0071e3]" />
              <span className="text-[#86868b] text-sm">Open to opportunities</span>
            </div>
          </m.div>

          {/* Stat tiles */}
          {stats.map((stat) => (
            <m.div
              key={stat.value}
              variants={itemVariants}
              className="glass-card p-5 flex flex-col justify-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-[#f5f5f7] leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-[#86868b] text-xs md:text-sm">{stat.label}</p>
            </m.div>
          ))}

        </m.div>
      </div>
    </SectionWrapper>
  );
}
