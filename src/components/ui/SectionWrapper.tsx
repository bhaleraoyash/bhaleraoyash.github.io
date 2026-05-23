"use client";

import { m } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <m.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-6xl mx-auto px-6 md:px-12"
      >
        {children}
      </m.div>
    </section>
  );
}
