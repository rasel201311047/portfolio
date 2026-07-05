"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    when: "2024 — present",
    title: "React Native Developer",
    place: "Sparktech Agency (Betopia Group)",
    detail:
      "Shipping cross-platform apps — audiobook platforms, social apps and real-estate products — with React Native, Expo, RTK Query and Node/Express APIs.",
  },
  {
    when: "2024",
    title: "B.Sc. in CSE",
    place: "Varendra University",
    detail: "CGPA 3.83",
  },
  {
    when: "2018",
    title: "HSC",
    place: "Shah Mukhdum College, Rajshahi",
    detail: "GPA 4.25",
  },
  {
    when: "2016",
    title: "SSC",
    place: "Bargachi High School",
    detail: "GPA 5.00",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-edge">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <p className="font-mono text-sm text-signal mb-4">~/about</p>
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-display leading-relaxed text-text"
          >
            I turn ideas into clean, reliable products end to end — from a
            Figma frame to an API response. Comfortable moving between a
            React Native screen and an Express route in the same afternoon,
            and I care about the details: loading states, empty states,
            error handling, and code that the next developer can read.
          </motion.p>

          <div className="relative border-l border-edge pl-8 space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[2.35rem] top-1.5 w-2.5 h-2.5 rounded-full bg-signal" />
                <p className="font-mono text-xs text-muted">{item.when}</p>
                <h3 className="font-display text-lg mt-1">{item.title}</h3>
                <p className="text-sm text-signal/90">{item.place}</p>
                <p className="text-sm text-muted mt-1">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
