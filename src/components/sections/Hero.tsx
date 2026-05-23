"use client";

import { m } from "framer-motion";
import { Mail, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { personal } from "@/data/personal";
import { heroStaggerVariants, heroChildVariants, heroNameVariants } from "@/lib/motion";

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "github") return <FaGithub size={20} />;
  if (platform === "linkedin") return <FaLinkedinIn size={20} />;
  if (platform === "instagram") return <FaInstagram size={20} />;
  if (platform === "email") return <Mail size={20} />;
  return null;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const [firstName, lastName] = personal.name.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full animate-pulse-glow"
          style={{
            background: "radial-gradient(ellipse, rgba(0,113,227,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full animate-float"
          style={{
            background: "radial-gradient(ellipse, rgba(0,113,227,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full animate-float-delayed"
          style={{
            background: "radial-gradient(ellipse, rgba(120,80,255,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <m.div
        variants={heroStaggerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-12"
      >
        {/* Greeting */}
        <m.p
          variants={heroChildVariants}
          className="text-[#86868b] text-lg md:text-xl font-medium tracking-[0.2em] uppercase mb-6"
        >
          {personal.greeting}
        </m.p>

        {/* Name — gradient, two lines */}
        <m.h1
          variants={heroNameVariants}
          className="font-bold tracking-tight leading-none mb-2"
          style={{ fontSize: "clamp(4.5rem, 10vw, 9rem)" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #0071e3 0%, #f5f5f7 45%, #0071e3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
            }}
          >
            {firstName}
          </span>
          <span
            style={{
              background: "linear-gradient(135deg, #f5f5f7 0%, #0071e3 55%, #f5f5f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
            }}
          >
            {lastName}
          </span>
        </m.h1>

        {/* Role — static, clean */}
        <m.p
          variants={heroChildVariants}
          className="text-[#86868b] text-xl md:text-2xl font-light tracking-wide mb-3"
        >
          Software Engineer
        </m.p>

        {/* Divider */}
        <m.div
          variants={heroChildVariants}
          className="w-16 h-px bg-[#0071e3]/50 mx-auto mb-8"
        />

        {/* Social links */}
        <m.div
          variants={heroChildVariants}
          className="flex items-center justify-center gap-4 mb-10"
        >
          {personal.social.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target={link.platform !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/[0.08] text-[#86868b] hover:text-[#f5f5f7] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
            >
              <SocialIcon platform={link.platform} />
            </a>
          ))}
        </m.div>

        {/* CTAs */}
        <m.div
          variants={heroChildVariants}
          className="flex items-center justify-center"
        >
          <a
            href="/resume/yash-bhalerao-resume.pdf"
            download
            className="h-14 px-10 rounded-full text-base font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95 flex items-center gap-2"
            style={{ background: "#0071e3" }}
          >
            Download Resume
          </a>
        </m.div>
      </m.div>
      {/* Scroll indicator */}
      <m.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[#48484a] text-xs tracking-widest uppercase">Scroll</span>
        <m.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-[#48484a]" />
        </m.div>
      </m.div>
    </section>
  );
}
