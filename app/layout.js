import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Md. Rasel Islam — React Native & Next.js Developer",
  description:
    "Portfolio of Md. Rasel Islam, a Frontend/Full-stack developer building cross-platform mobile apps with React Native & Expo, and modern web apps with Next.js, Node.js, Express and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased bg-ink text-text overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
