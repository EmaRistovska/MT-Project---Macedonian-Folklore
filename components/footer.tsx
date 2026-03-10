"use client";

import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Истражи",
    links: [
      { label: "Фолклор", href: "#folklore" },
      { label: "Традиционална Музика и ора", href: "#music" },
      { label: "Традиционална Носија", href: "#costumes" },
      { label: "Tрадиции и Обичаи", href: "#customs" },
      { label: "Традиционална Храна", href: "#cuisine" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="group flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 transition-all group-hover:border-primary group-hover:bg-primary/10">
                <span className="text-xl font-semibold text-primary">М</span>
              </div>
              <span className="text-xl tracking-wider text-foreground">
                Македонија
              </span>
            </a>
            <p className="text-foreground/60 leading-relaxed mb-6 max-w-sm text-justify">
              Доживејте го богатото културно наследство на Македонија преку едно
              импресивно патување низ фолклор, музика, традиционални носии,
              обичаи и автентична кујна.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/60 transition-all hover:border-primary hover:text-primary hover:bg-primary/10"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-sm uppercase tracking-wider text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/60 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-foreground/40">
              © 2026 Macedonia Cultural Heritage. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-foreground/40 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-foreground/40 hover:text-primary transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-sm text-foreground/40 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-1/3 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
}
