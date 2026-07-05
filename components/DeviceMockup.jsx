"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  { cmd: "whoami", out: "rasel islam — react native + next.js developer" },
  { cmd: "ls ./stacks", out: "mobile/  web/  backend/  databases/" },
  { cmd: "./deploy --target mobile", out: "building for /mobile ..." },
  { cmd: "./deploy --target web", out: "building for /web ..." },
];

export default function DeviceMockup() {
  const [mode, setMode] = useState("mobile"); // mobile | web
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const current = lines[lineIndex].cmd;
    let i = 0;
    setTyped("");
    const typeTimer = setInterval(() => {
      i++;
      setTyped(current.slice(0, i));
      if (i >= current.length) clearInterval(typeTimer);
    }, 45);
    return () => clearInterval(typeTimer);
  }, [lineIndex]);

  useEffect(() => {
    const rotate = setTimeout(() => {
      setLineIndex((prev) => (prev + 1) % lines.length);
      setMode((prev) => (prev === "mobile" ? "web" : "mobile"));
    }, 3200);
    return () => clearTimeout(rotate);
  }, [lineIndex]);

  return (
    <div className="relative flex items-center justify-center h-[420px] sm:h-[480px] w-full">
      {/* ambient glow */}
      <div className="absolute w-72 h-72 bg-signal/20 blur-[100px] rounded-full" />
      <div className="absolute w-56 h-56 bg-coral/10 blur-[90px] rounded-full translate-x-16 translate-y-10" />

      <AnimatePresence mode="wait">
        {mode === "mobile" ? (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, rotateY: -30, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: 30, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-[220px] sm:w-[250px] h-[440px] sm:h-[480px] rounded-[2.2rem] border border-edge bg-surface shadow-2xl shadow-black/50 animate-float"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-ink rounded-b-xl" />
            <div className="absolute inset-2 rounded-[1.8rem] bg-surface2 overflow-hidden flex flex-col">
              <div className="px-4 pt-6 pb-2 text-[10px] font-mono text-muted flex justify-between">
                <span>09:41</span>
                <span>/mobile</span>
              </div>
              <div className="flex-1 px-4 py-3 font-mono text-[11px] leading-relaxed text-signal">
                <p className="text-muted">$ {typed}<span className="animate-blink">_</span></p>
                <p className="mt-2 text-text/80">{lines[lineIndex].out}</p>
              </div>
              <div className="px-4 pb-4 space-y-2">
                {["Expo Router", "RTK Query", "Push Notifications"].map((t) => (
                  <div key={t} className="rounded-lg border border-edge bg-ink/60 px-3 py-2 text-[11px] text-muted">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="web"
            initial={{ opacity: 0, rotateY: 30, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: -30, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-[300px] sm:w-[420px] h-[220px] sm:h-[280px] rounded-2xl border border-edge bg-surface shadow-2xl shadow-black/50 animate-float overflow-hidden"
          >
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-edge bg-surface2">
              <span className="w-2.5 h-2.5 rounded-full bg-coral/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-signal/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted/40" />
              <span className="ml-3 text-[10px] font-mono text-muted truncate">app.rasel.dev/web</span>
            </div>
            <div className="p-4 font-mono text-[11px] leading-relaxed text-signal h-full">
              <p className="text-muted">$ {typed}<span className="animate-blink">_</span></p>
              <p className="mt-2 text-text/80">{lines[lineIndex].out}</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {["Next.js", "Express API", "MongoDB"].map((t) => (
                  <div key={t} className="rounded-lg border border-edge bg-ink/60 px-2 py-2 text-[10px] text-muted text-center">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
