"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position to transform navbar appearance dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -15, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.25, ease: "easeInOut" } }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 transition-all duration-500">
        <motion.nav 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-7xl mx-auto rounded-full px-4 py-2.5 md:px-6 md:py-3 flex items-center justify-between transition-all duration-500 border ${
            isScrolled 
              ? "bg-white/80 backdrop-blur-xl shadow-lg border-neutral-200/40 py-2 md:py-2.5 text-nature-dark" 
              : "bg-white/15 backdrop-blur-md border-white/10 text-white"
          }`}
        >
          {/* Custom Dynamic Vector Logo Block - Fixed: Linked to redirect home */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer select-none group focus:outline-hidden">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center border transition-all duration-500 shrink-0 ${
              isScrolled ? "bg-nature-dark border-nature-dark" : "bg-white/10 border-white/20 group-hover:border-luxury-gold/60"
            }`}>
              <svg className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 68C32 25 38 18 48 24C41 39 31 52 24 68" stroke="#C5A880" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M48 24L75 52L85 58" stroke="#C5A880" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M48 34V68" stroke="#C5A880" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M35 52H60" stroke="#C5A880" strokeWidth="2" strokeLinecap="round"/>
                <path d="M39 60H56" stroke="#C5A880" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="48" cy="46" r="32" stroke="#C5A880" strokeWidth="1" strokeDasharray="2 3" className="opacity-40"/>
                <path d="M68 45L74 36L80 45M71 53L74 42L77 53M74 36V65" stroke="#8FA499" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-base md:text-lg font-medium tracking-wide leading-none transition-colors duration-300 ${
                isScrolled ? "text-nature-dark" : "text-white"
              }`}>
                Nature Homez
              </span>
              <span className={`text-[8px] md:text-[9px] font-sans tracking-[0.25em] uppercase mt-0.5 transition-colors duration-300 ${
                isScrolled ? "text-nature-dark/60" : "text-white/60"
              }`}>
                Premium • Properties
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {[
              { label: "Collections", href: "/#collections" },
              { label: "Our Story", href: "/#about-glimpse" },
              { label: "The Framework", href: "/#the-experience" },
              { label: "Private Advisory", href: "/#private-viewing" }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-sans font-medium tracking-wide transition-colors relative group ${
                  isScrolled ? "text-nature-dark/80 hover:text-nature-dark" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions Block: CTA + Socials */}
          <div className="hidden md:flex items-center gap-5">
            <a 
              href={`https://wa.me/919899125794?text=${encodeURIComponent(
                "Hello Nature Homez, I am browsing your curated estates collection and would like to schedule a private advisory viewing itinerary."
              )}`}
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-xs font-sans font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 group active:scale-[0.98] cursor-pointer ${
                isScrolled 
                  ? "bg-nature-dark text-white border-nature-dark hover:bg-nature-muted shadow-sm" 
                  : "bg-white/10 text-white border-white/10 hover:bg-white hover:text-nature-dark"
              }`}
            >
              Schedule Viewing
              <div className="h-1.5 w-1.5 rounded-full bg-luxury-gold group-hover:bg-current transition-colors duration-300" />
            </a>

            <div className="flex items-center gap-3 border-l pl-4 border-neutral-300/40">
              {/* Instagram */}
              <a href="#" className={`transition-colors duration-300 ${isScrolled ? "text-nature-dark/60 hover:text-luxury-gold" : "text-white/60 hover:text-luxury-gold"}`} aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className={`transition-colors duration-300 ${isScrolled ? "text-nature-dark/60 hover:text-luxury-gold" : "text-white/60 hover:text-luxury-gold"}`} aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Navigation Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden h-9 w-9 flex items-center justify-center rounded-full transition-colors active:scale-95 ${
              isScrolled ? "bg-nature-dark/5 text-nature-dark" : "bg-white/10 text-white"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            variants={mobileMenuVariants} initial="hidden" animate="visible" exit="exit"
            className="fixed top-20 left-4 right-4 bg-white rounded-3xl p-5 flex flex-col gap-6 z-50 md:hidden border border-neutral-200/50 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {[
                { label: "Collections", href: "/#collections" },
                { label: "Our Story", href: "/#about-glimpse" },
                { label: "The Framework", href: "/#the-experience" },
                { label: "Private Advisory", href: "/#private-viewing" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-sans font-semibold text-nature-dark/90 py-3 px-3 rounded-xl active:bg-nature-dark/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="h-[1px] bg-neutral-200/60 w-full" />

            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-sans font-bold text-neutral-400 tracking-wider uppercase">Follow Architecture</span>
              <div className="flex items-center gap-4 text-nature-dark/60">
                <a href="#" className="hover:text-luxury-gold transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="hover:text-luxury-gold transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            <a 
              href={`https://wa.me/919899125794?text=${encodeURIComponent(
                "Hello Nature Homez, I am browsing your curated estates collection and would like to schedule a private advisory viewing itinerary."
              )}`}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-nature-dark text-white text-center py-4 rounded-full font-sans font-semibold text-xs tracking-wider uppercase active:scale-[0.99] transition-transform block shadow-md"
            >
              Schedule Viewing
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}