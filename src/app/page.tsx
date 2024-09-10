"use client"
import { motion } from "framer-motion";
import ExperiencesSection from "./components/ExperiencesSection";
import HeaderSection from "./components/HeaderSection";
import NavbarSection from "./components/NavbarSection";

// Framer Motion animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-10">
      <NavbarSection />
      <motion.div
        className="container mt-24 lg:mt-36 py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Adjust how much of the section should be in view to trigger animation
        variants={sectionVariants}
      >
        <HeaderSection />
      </motion.div>

      {/* Wrapping ExperiencesSection in a motion.div for scroll animation */}
      <motion.div 
        className="container py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ExperiencesSection />
      </motion.div>
    </main>
  );
}
