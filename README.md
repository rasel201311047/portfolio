# Rasel Islam — Portfolio

A fresh, unique portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Design concept

Since you build both mobile apps (React Native) and web apps (Next.js), the whole
site is themed like a developer's terminal switching between two build targets:

- Section labels use file-path style eyebrows (`~/about`, `~/projects`, ...)
- The hero's signature element is a device frame that morphs between a **phone**
  and a **browser window**, with a typed terminal line — literally showing
  "building for /mobile" and "building for /web".
- Palette: near-black ink background, signal blue + coral accents, Space Grotesk
  (headings) + Inter (body) + JetBrains Mono (labels/code).

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add your resume

Drop your PDF resume at `public/rasel-cv.pdf` (create the `public` folder if it
doesn't exist) — the "Resume" button in the hero already links to it.

## Edit your content

- `components/Projects.jsx` — your web dashboards & React Native apps (links included)
- `components/Skills.jsx` — your tech stack, grouped
- `components/About.jsx` — experience & education timeline
- `components/Contact.jsx` — contact form (already wired to Web3Forms with your access key)
- `components/Footer.jsx` — email & social links

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero config needed.
