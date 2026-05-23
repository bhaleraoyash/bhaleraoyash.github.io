export interface SocialLink {
  platform: "github" | "linkedin" | "instagram" | "email";
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  greeting: string;
  typewriterStrings: string[];
  tagline: string;
  bio: string;
  location: string;
  email: string;
  social: SocialLink[];
}

export interface Skill {
  label: string;
  category: "language" | "framework" | "tool";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  type: "work" | "education";
}
