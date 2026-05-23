import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "swe-marketaxess",
    organization: "MarketAxess",
    role: "Software Engineer",
    period: "Jan 2024 – Present",
    location: "New York, NY",
    bullets: [
      "Expanded Emerging Markets platform to 4 new regions and integrated a new trading venue, driving 20% user adoption growth by owning the full trading lifecycle across UI and Trading API",
      "Built a self-service trade data report generation feature with on-demand UI triggers and automated scheduled delivery, directly enabling onboarding of a new institutional client with 20–30 users",
      "Addressed tech debt by consolidating 6–7 redundant trading protocols into 2 unified protocols, reducing code duplication and accelerating future feature development",
      "Mentored 4 interns across 2 summer cohorts on migrating TCP communication to Kafka messaging and introducing distributed tracing with spans visualized via Grafana",
      "Developed and maintained 30+ C# automation scripts, reducing regression testing time while expanding feature coverage across critical trading workflows",
    ],
    type: "work",
  },
  {
    id: "ase-marketaxess",
    organization: "MarketAxess",
    role: "Associate Software Engineer",
    period: "Jun 2023 – Dec 2023",
    location: "New York, NY",
    bullets: [
      "Onboarded onto a complex FIX-based fixed income trading platform, contributing to Live Markets and Trading API feature development",
      "Launched support for 3 new trading protocols on the Live Markets platform",
    ],
    type: "work",
  },
  {
    id: "intern-marketaxess",
    organization: "MarketAxess",
    role: "Software Engineer Intern",
    period: "Jun 2022 – Aug 2022",
    location: "New York, NY",
    bullets: [
      "Built a mock Node.js backend server with a modernized React UI using AG-Grid to simulate RFQ bond flows, enabling 20+ developers to recreate and debug Single and List trades",
      "Eliminated randomization by enabling file uploads and scraping ~1GB HAR files for payload/response data, achieving 100% scraper accuracy",
      "Wrote a SQL script to clone users and assign bond trading permissions, reducing setup time from 1 week to ~1 hour",
    ],
    type: "work",
  },
  {
    id: "salesforce-cloudwerx",
    organization: "Cloudwerx",
    role: "Salesforce Developer",
    period: "Nov 2020 – Jul 2021",
    location: "Pune, India",
    bullets: [
      "Built a backend-driven onboarding platform with workflow automation, cutting processing time from 1 week to 1 day and boosting satisfaction by 80%",
      "Integrated REST APIs with Google Drive/Calendar, automating secure scheduling and document workflows, reducing turnaround time by 60%",
      "Developed a multi-page workflow system serving 1,000+ customers, improving efficiency and participation by 20%",
    ],
    type: "work",
  },
  {
    id: "edu-nyu",
    organization: "New York University",
    role: "MS, Computer Science",
    period: "Sep 2021 – May 2023",
    location: "New York, NY",
    bullets: [
      "Tandon School of Engineering",
    ],
    type: "education",
  },
  {
    id: "edu-pune",
    organization: "University of Pune",
    role: "BE, Information Technology",
    period: "Aug 2016 – May 2020",
    location: "Pune, India",
    bullets: [],
    type: "education",
  },
];
