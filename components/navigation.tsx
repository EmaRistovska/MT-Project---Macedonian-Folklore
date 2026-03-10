"use client";

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Фолклор", href: "#folklore" },
  { label: "Музика", href: "#music" },
  { label: "Носија", href: "#costumes" },
  { label: "Обичаи", href: "#customs" },
  { label: "Храна", href: "#cuisine" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-background/70"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 transition-all group-hover:border-primary group-hover:bg-primary/10">
            <span className="text-lg font-semibold text-primary">М</span>
          </div>
          <span className="text-lg tracking-wider font-bold text-primary">
            Македонија
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative py-2 text-sm uppercase tracking-wider font-bold text-foreground/70 transition-colors hover:text-primary"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
