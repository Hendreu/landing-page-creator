import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(270_50%_12%)] border-t border-white/10 py-8 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-sm text-purple-200/60">© 2026 Samax</span>
        <a
          href="https://www.linkedin.com/company/samaxio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-purple-200/60 hover:text-purple-200 transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
