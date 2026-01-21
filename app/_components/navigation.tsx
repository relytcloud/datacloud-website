"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import memorylakeLogo from "@/public/memorylake.svg";
import powerdrillLogo from "@/public/powerdrill.svg";
import relytLogo from "@/public/relyt.svg";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Powerdrill", href: "#powerdrill", logo: powerdrillLogo.src },
    { label: "MemoryLake", href: "#memory-lake", logo: memorylakeLogo.src },
    { label: "Relyt", href: "#relyt", logo: relytLogo.src },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-transform duration-300 md:bg-linear-to-b md:bg-transparent md:from-black/50 md:to-transparent ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className={`container mx-auto px-4 sm:px-6 lg:px-8 ${isMobileMenuOpen ? "bg-black" : "bg-transparent"}`}
      >
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div className="shrink-0">
            <a href="/">
              <Image
                alt="DATACLOUD"
                className="h-6 w-auto"
                height={24}
                priority
                src="/datacloud-logo.svg"
                width={145}
              />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                className="inline-flex items-center gap-1 text-sm text-white/90 transition-colors duration-200 hover:text-white lg:text-base"
                href={item.href}
                key={item.label}
              >
                <Image
                  alt={item.label}
                  height={24}
                  src={item.logo}
                  width={24}
                />
                {item.label}
              </a>
            ))}
          </div>
          <button
            aria-label="Toggle menu"
            className="text-white focus:outline-none md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <title>Toggle menu</title>
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="animate-fade-in pb-4 md:hidden">
            <div className="flex flex-col space-y-4 border-white/10 border-t pt-4">
              {navItems.map((item) => (
                <a
                  className="text-base text-white/90 transition-colors duration-200 hover:text-white"
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
