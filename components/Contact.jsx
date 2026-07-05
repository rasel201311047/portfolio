"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "acb35c77-0810-4081-a54b-30962fcab46e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Message sent — I'll get back to you soon.");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (err) {
      setResult("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 border-t border-edge relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-signal/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 sm:px-10 relative">
        <p className="font-mono text-sm text-signal mb-4 text-center">~/contact</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-5xl text-center"
        >
          Have a project in mind?
        </motion.h2>
        <p className="text-muted text-center mt-4 max-w-lg mx-auto">
          Whether it's a mobile app in React Native or a full-stack web product —
          tell me what you're building and I'll get back within a day.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={onSubmit}
          className="mt-12 grid gap-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="rounded-xl bg-surface border border-edge px-5 py-3.5 outline-none focus:border-signal transition-colors placeholder:text-muted"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="rounded-xl bg-surface border border-edge px-5 py-3.5 outline-none focus:border-signal transition-colors placeholder:text-muted"
            />
          </div>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Tell me about your project..."
            className="rounded-xl bg-surface border border-edge px-5 py-4 outline-none focus:border-signal transition-colors placeholder:text-muted resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="justify-self-center inline-flex items-center gap-2 rounded-full bg-signal text-ink font-medium px-8 py-3.5 hover:bg-white transition-colors disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send message"} <FiSend />
          </button>
          {result && <p className="text-center text-sm text-muted">{result}</p>}
        </motion.form>
      </div>
    </section>
  );
}
