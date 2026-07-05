"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import DeviceMockup from "./DeviceMockup";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-grid bg-grid">
      <div className="absolute inset-0 bg-ink [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)] bg-grid pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-28 pb-16 grid lg:grid-cols-2 gap-14 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-signal mb-5">~/introduction</p>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight">
            Building things that live on <span className="text-gradient">phones</span> and{" "}
            <span className="text-gradient">browsers</span>.
          </h1>
          <p className="mt-6 text-muted max-w-lg text-base sm:text-lg">
            I&apos;m Md. Rasel Islam, a Frontend / Full-stack developer. I ship
            cross-platform mobile apps with React Native &amp; Expo, and fast,
            modern web apps with Next.js, Node.js, Express and MongoDB — currently
            building at Sparktech Agency (Betopia Group).
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-signal text-ink font-medium px-6 py-3 hover:bg-white transition-colors"
            >
              Start a project
              <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/rasel-cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-edge px-6 py-3 text-text hover:border-signal hover:text-signal transition-colors"
            >
              Resume <FiDownload />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 font-mono text-xs text-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal animate-pulse" /> available for freelance work
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DeviceMockup />
        </motion.div>
      </div>
    </section>
  );
}
