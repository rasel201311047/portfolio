import { FiGithub, FiLinkedin, FiFacebook, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-edge py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-mono text-sm text-muted">
          <FiMail /> rasel201311047@gmail.com
        </div>

        <p className="font-mono text-xs text-muted order-last sm:order-none">
          © {new Date().getFullYear()} Md. Rasel Islam — Dhaka, Bangladesh
        </p>

        <div className="flex items-center gap-5 text-text">
          <a href="https://github.com/rasel201311047" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-signal transition-colors">
            <FiGithub size={19} />
          </a>
          <a href="https://www.linkedin.com/in/rasel201311047/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-signal transition-colors">
            <FiLinkedin size={19} />
          </a>
          <a href="https://www.facebook.com/rasel.ahamed.927980/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-signal transition-colors">
            <FiFacebook size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
