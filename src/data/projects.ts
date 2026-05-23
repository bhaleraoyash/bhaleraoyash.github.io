import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "data-viz",
    title: "Data Visualization of US City Temperatures",
    description:
      "Interactive visualization of temperature trends across US cities using R and D3.js. Explores seasonal patterns and climate variations through animated charts and geographic heatmaps.",
    imagePath: "/images/projects/dataViz.png",
    tags: ["R", "D3.js", "Data Visualization", "ggplot2"],
    githubUrl: "https://github.com/bhaleraoyash",
  },
  {
    id: "hog",
    title: "HOG Feature Descriptor",
    description:
      "Implementation of the Histogram of Oriented Gradients feature descriptor from scratch in Python, with KNN classification for pedestrian detection and object recognition tasks.",
    imagePath: "/images/projects/hog-cell.png",
    tags: ["Python", "Computer Vision", "NumPy", "KNN"],
    githubUrl: "https://github.com/bhaleraoyash",
  },
  {
    id: "covid-portal",
    title: "COVID-19 Donation Portal",
    description:
      "A Salesforce-powered donation management platform built with Lightning Web Components and Apex. Enables tracking of donations, donors, and distribution for COVID-19 relief efforts.",
    imagePath: "/images/projects/covid.png",
    tags: ["Salesforce", "Apex", "LWC", "SOQL"],
    githubUrl: "https://github.com/bhaleraoyash",
  },
];
