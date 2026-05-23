"use client";

import { m } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUpVariants } from "@/lib/motion";
import { Download, FileText } from "lucide-react";

const RESUME_PATH = "/resume/yash-bhalerao-resume.pdf";

export function Resume() {
  return (
    <SectionWrapper id="resume">
      <div className="mb-12">
        <p className="text-[#0071e3] text-sm font-semibold tracking-widest uppercase mb-3">
          Resume
        </p>
        <h2 className="section-title">My <span>Resume</span></h2>
      </div>

      <m.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 h-14 w-60 rounded-full text-base font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{ background: "#0071e3" }}
        >
          <FileText size={18} />
          View Resume
        </a>
        <a
          href={RESUME_PATH}
          download="Yash_Bhalerao_Resume.pdf"
          className="flex items-center justify-center gap-2 h-14 w-60 rounded-full text-base font-semibold text-[#f5f5f7] border border-white/[0.15] hover:bg-white/[0.05] hover:border-white/25 transition-all duration-200"
          style={{ background: "#1c1c1e" }}
        >
          <Download size={18} />
          Download Resume
        </a>
      </m.div>
    </SectionWrapper>
  );
}
