"use client";
import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["JavaScript", "C", "C++", "PHP", "Python"],
  },
  {
    title: "Frontend",
    items: ["React Native", "Expo", "Next.js", "React.js"],
  },
  {
    title: "State & Data",
    items: ["RTK Query", "REST APIs"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "JWT (basic)"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "SQL Server"],
  },
  {
    title: "Core & Practice",
    items: ["OOP", "Data Structures & Algorithms", "Competitive Programming", "Git"],
  },
];

const marqueeItems = [
  "React Native", "Expo", "Next.js", "Node.js", "Express.js",
  "MongoDB", "RTK Query", "MySQL", "JavaScript", "REST APIs",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-edge overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <p className="font-mono text-sm text-signal mb-4">~/skills</p>
        <h2 className="font-display text-3xl sm:text-4xl mb-14 max-w-xl">
          The stack I reach for, and why it works.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-edge bg-surface p-6 hover:border-signal/50 transition-colors"
            >
              <h3 className="font-mono text-xs text-muted mb-4 uppercase tracking-wider">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-lg bg-surface2 border border-edge text-text/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-y border-edge py-5 bg-surface/50">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-marquee gap-10 pr-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-mono text-sm text-muted flex items-center gap-3">
                {item} <span className="text-signal">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
