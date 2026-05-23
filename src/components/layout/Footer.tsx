import { personal } from "@/data/personal";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          {personal.social.map((link) => {
            let icon;
            if (link.platform === "github") icon = <FaGithub size={18} />;
            else if (link.platform === "linkedin") icon = <FaLinkedinIn size={18} />;
            else if (link.platform === "instagram") icon = <FaInstagram size={18} />;
            else if (link.platform === "email") icon = <Mail size={18} />;
            else return null;

            return (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[#86868b] hover:text-[#f5f5f7] transition-colors"
              >
                {icon}
              </a>
            );
          })}
        </div>
        <p className="text-[#48484a] text-sm">
          Designed &amp; built by Yash Bhalerao
        </p>
      </div>
    </footer>
  );
}
