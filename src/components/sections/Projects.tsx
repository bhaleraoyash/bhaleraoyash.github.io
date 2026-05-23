"use client";

import { m } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { containerVariants, itemVariants } from "@/lib/motion";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <m.div
      variants={itemVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card overflow-hidden flex flex-col group h-full"
      style={{ padding: 0 }}
    >
      <div className="relative h-44 shrink-0 bg-[#1c1c1e] overflow-hidden">
        <img
          src={project.imagePath}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-[#f5f5f7] leading-snug">{project.title}</h3>
          <div className="flex items-center gap-3 shrink-0">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="text-[#86868b] hover:text-[#f5f5f7] transition-colors">
                <FaGithub size={17} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="text-[#0071e3] hover:text-[#0077ed] transition-colors">
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>
        <p className="text-[#86868b] text-sm leading-relaxed">{project.description}</p>
      </div>
    </m.div>
  );
}

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="relative">
        <p className="absolute -top-8 left-0 text-[7rem] md:text-[11rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
          PROJECTS
        </p>

        <div className="mb-12">
          <p className="text-[#0071e3] text-sm font-semibold tracking-widest uppercase mb-3">Projects</p>
          <h2 className="section-title">My <span>Work</span></h2>
        </div>

        <div className="relative">
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="flex items-stretch gap-5 overflow-x-auto pb-2 -mb-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {projects.map((p) => (
              <div key={p.id} className="snap-start shrink-0 w-[85vw] sm:w-[360px] lg:w-[400px]">
                <ProjectCard project={p} />
              </div>
            ))}
          </m.div>
          {/* Fade hint — signals more content to the right */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </SectionWrapper>
  );
}
