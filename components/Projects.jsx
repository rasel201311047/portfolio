"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineDeviceMobile, HiOutlineDesktopComputer } from "react-icons/hi";

const webProjects = [
  {
    name: "CrowedMatch Dashboard",
    path: "~/web/crowedmatch",
    url: "https://crowedmatch-dashboard.vercel.app/",
    desc: "Admin dashboard for managing matching operations, built with React, Node/Express, RTK Query and MongoDB.",
  },
  {
    name: "Ashely Dashboard",
    path: "~/web/ashely",
    url: "https://ashely-dashboard.vercel.app/signin",
    desc: "Business dashboard with authenticated flows, RTK Query data layer and a MongoDB-backed Express API.",
  },
  {
    name: "Bad Rush",
    path: "~/web/bad-rush",
    url: "https://bad-rush.vercel.app/",
    desc: "A React + Next.js web app focused on a fast, responsive user experience.",
  },
  {
    name: "Letimonie Rider Dashboard",
    path: "~/web/letimonie-rider",
    url: "https://letimonie-rider-dashboad.vercel.app/signin",
    desc: "Rider-facing operations dashboard for a delivery platform — React, Express and MongoDB.",
  },
];

const mobileProjects = [
  {
    name: "Araito",
    path: "~/mobile/araito",
    url: "https://drive.google.com/file/d/1j9YI2gHUxLEn5OmoEbo8ZcIs7mu5m1y5/view?usp=drive_link",
    desc: "React Native app built with Expo, RTK Query and an Express/MongoDB backend.",
  },
  {
    name: "Bible",
    path: "~/mobile/bible",
    url: "https://drive.google.com/file/d/1dZHMzmznhJypAEt2bPTLbiSN4lnuhuCm/view?usp=sharing",
    desc: "A reading-focused React Native app with offline-friendly navigation and clean UI.",
  },
  {
    name: "Popbom",
    path: "~/mobile/popbom",
    url: "https://drive.google.com/file/d/1vJzDQaA_2RC8gPXBJf1m_1pkO7mXv7T9/view?usp=drive_link",
    desc: "Cross-platform React Native application with RTK Query state management.",
  },
  {
    name: "Robbywork",
    path: "~/mobile/robbywork",
    url: "https://drive.google.com/file/d/1RX0xEvFt6-jkj8JHzPygvO_DcmisEiTb/view?usp=drive_link",
    desc: "A work/task-oriented mobile app powered by Node.js, Express and MongoDB.",
  },
  {
    name: "Saldo",
    path: "~/mobile/saldo",
    url: "https://drive.google.com/file/d/1uJrDbO3a8QhL9Q-YEaX8EKbpYOiqUMYl/view?usp=drive_link",
    desc: "A React Native app for tracking and managing everyday finances.",
  },
];

export default function Projects() {
  const [tab, setTab] = useState("web");
  const list = tab === "web" ? webProjects : mobileProjects;

  return (
    <section id="projects" className="py-28 border-t border-edge">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <p className="font-mono text-sm text-signal mb-4">~/projects</p>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl max-w-xl">
            Selected work, across web and mobile.
          </h2>

          <div className="flex rounded-full border border-edge p-1 bg-surface font-mono text-sm">
            <button
              onClick={() => setTab("web")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                tab === "web" ? "bg-signal text-ink" : "text-muted hover:text-text"
              }`}
            >
              <HiOutlineDesktopComputer /> web
            </button>
            <button
              onClick={() => setTab("mobile")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                tab === "mobile" ? "bg-signal text-ink" : "text-muted hover:text-text"
              }`}
            >
              <HiOutlineDeviceMobile /> mobile
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {list.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-edge bg-surface p-7 hover:border-signal/60 hover:-translate-y-1 transition-all duration-300"
              >
                <p className="font-mono text-xs text-muted mb-3">{p.path}</p>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <FiArrowUpRight className="shrink-0 mt-1 text-signal opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-sm text-muted mt-3 leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
