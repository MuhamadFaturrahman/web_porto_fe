"use client"
import { motion } from "framer-motion";
import ExperiencesSection from "./components/ExperiencesSection";
import HeaderSection from "./components/HeaderSection";
import NavbarSection from "./components/NavbarSection";
import SkillsSection from "./components/SkillsSection";

// Framer Motion animation variants for sections
const sectionVariantsTB = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const sectionVariantsBT = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-10">
      <NavbarSection />
      <motion.div
        className="container mt-24 lg:mt-36 pt-4 pb-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Adjust how much of the section should be in view to trigger animation
        variants={sectionVariantsTB}
      >
        <HeaderSection />
      </motion.div>

      {/* Wrapping ExperiencesSection in a motion.div for scroll animation */}
      <motion.div 
        className="container py-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariantsBT}
      >
        <ExperiencesSection />
      </motion.div>

      <motion.div 
        className="container py-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariantsBT}
      >
        <SkillsSection />
      </motion.div>
    </main>
  );
}
