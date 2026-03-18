import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const [path, hash] = href.split('#');
    navigate(path || '/');
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  };

  const handleReportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    navigate("/radar");
    setTimeout(() => {
      const form = document.getElementById("formulario");
      if (form) {
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const links = [
    { href: "/radar#o-que-recebe", label: "O que é o Radar?" },
    { href: "/radar#para-quem", label: "Para quem é?" },
    { href: "/radar#faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto relative flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <img src="/logo-radar-da-nuvem.png" alt="Radar da Nuvem" className="h-10" />
        </Link>

        <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/radar"
          onClick={handleReportClick}
          className="hidden md:inline-flex items-center justify-center rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Ver Report
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/radar"
            onClick={handleReportClick}
            className="block w-full text-center rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white"
          >
            Ver Report
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
