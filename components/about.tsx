"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in Computer Science in 2018, I started my
        career as a software engineer with JP Morgan & Chase. While
        working over the years, I got opportunity to work in multiple domains
        such as Banking, Finance, Insurance and Health. I have also worked on multiple
        POCs for my business clients using multiple tech stack.I also mentored
        junior developers and get them upto speed and guide them with best
        practices of development. My core stack is Java, Scala, Angular and PostgreSQL.
        I am also familiar with React and TypeScript.
        I am always looking to learn new technologies. I am currently looking
        for a full-time position as a senior software developer.
      </p>

      <p>
        When I'm not coding, I enjoy playing Table Tennis, Cricket, Pickle ball.
        I also enjoy learning new things. I am a automatic maniac and love to drive.
      </p>
    </motion.section>
  );
}
