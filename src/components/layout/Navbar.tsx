"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "التخصصات", href: "#specializations" },
  { label: "كيف يعمل؟", href: "#how-it-works" },
  { label: "المعلمون", href: "#teachers" },
  { label: "الأسعار", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 glass-dark shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between" role="navigation" aria-label="القائمة الرئيسية">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="أكاديمية إبصار - الصفحة الرئيسية">
          <div className="relative w-10 h-10 flex-shrink-0">
            <div className="absolute inset-0 rounded-xl gradient-gold opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-black text-gray-900" aria-hidden="true">إ</span>
            </div>
            <div className="absolute inset-0 rounded-xl animate-pulse-gold opacity-0 group-hover:opacity-100" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-lg gradient-text-gold">إبصار</span>
            <span className="text-xs text-gray-400 font-medium">أكاديمية التميز</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/auth/login" className="btn btn-ghost text-sm py-2.5 px-5">
            تسجيل الدخول
          </Link>
          <Link href="/auth/register/student" className="btn btn-gold text-sm py-2.5 px-5">
            ابدأ مجاناً ✨
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-btn"
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="قائمة التنقل"
        aria-modal="true"
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-4 flex flex-col gap-2 border-t border-white/10 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
            <Link href="/auth/login" className="btn btn-ghost w-full justify-center">
              تسجيل الدخول
            </Link>
            <Link href="/auth/register/student" className="btn btn-gold w-full justify-center">
              ابدأ مجاناً ✨
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
