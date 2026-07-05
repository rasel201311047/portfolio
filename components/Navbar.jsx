"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";

const links = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-edge" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight">
          rasel<span className="text-signal">.</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted hover:text-signal transition-colors">
              ~/{l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-signal/40 text-signal px-4 py-1.5 hover:bg-signal hover:text-ink transition-colors"
          >
            hire me
          </a>
        </nav>

        <button className="md:hidden text-text" onClick={() => setOpen(true)} aria-label="Open menu">
          <HiOutlineMenuAlt4 size={24} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/95 backdrop-blur-md z-50 flex flex-col"
          >
            <div className="flex justify-end px-6 pt-5">
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <HiOutlineX size={26} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8 font-mono text-2xl">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="text-muted hover:text-signal"
                >
                  ~/{l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
