import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    company: "JP Morgan & Chase",
    location: "Hyderabad , India",
    description:
      "I have started my corporate career here and learnt a lot. I am proud of myself as I was given a chance to work alone on a new project from scratch.",
    icon: React.createElement(CgWorkAlt),
    date: "May, 2018 - June, 2021",
  },
  {
    title: "Specialist Programmer",
    company: "Infosys McCamish",
    location: "Hyderabad , India",
    description:
      "I have never seen a application with such great architecture and got a chance to implement core concepts of Java. I have done many POC's of several concepts to integrate in a better way into the project. I have also lead 3 modules in the application.",
    icon: React.createElement(CgWorkAlt),
    date: "June, 2021 - October, 2022",
  },
  {
    title: "Senior Software Engineer",
    company: "Optum(United Health Group)",
    location: "Hyderabad , India",
    description:
      "I worked as a senior software engineer leading the project and developing the application team and helping team with digital transformation of legacy projects.",
    icon: React.createElement(CgWorkAlt),
    date: "October,2022 - March, 2024",
  },
  {
    title: "Senior Software Engineer",
    company: "Navistar",
    location: "United States",
    description:
      "I am currently working as a senior engineer. My stack includes Java, Angular. Currently leading a team of 3 junior developers. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "April, 2024 - Present",
  },
] as const;

export const skillsData = [
  "Java",
  "Spring Boot",
  "Microservices",
  "Scala",
  "Angular",
  "PostgreSQL",
  "Python",
  "Kafka",
  "Play",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "NGRX",
  "Bootstrap",
  "Material UI",
  "Jasmine",
  "Karma",
  "Jest",
  "Oracle SQL",
  "My SQL",
  "Maven",
  "Git",
  "Gitlab",
  "GitHub",
  "BitBucket",
  "Docker",
  "Kubernetes",
  "AWS",
  "CI/CD",
  "SVN",
  "Splunk",
  "SonarQube",
  "Swagger",
  "Confluence",
  "Figma",
  "Jenkins",
  "Cucumber",
  "Jaeger",
  "Kibana",
  "Postman",
] as const;
