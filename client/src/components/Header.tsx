/**
 * Header Component
 * Dark Luxury Design: Features DJ PapiCakez branding with gold accents
 * Navigation with smooth hover effects and elegant typography
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Mixes", href: "#mixes" },
    { label: "Merch", href: "#merch" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/30 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/dj-logo.png"
            alt="DJ PapiCakez"
            className="h-12 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-accent">DJ PapiCakez</h1>
            <p className="text-xs text-muted-foreground">Official Showcase</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105">
          Shop Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-accent transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border/30 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 mt-2">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
