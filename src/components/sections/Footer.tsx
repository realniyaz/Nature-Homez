"use client";

import React from "react";
import { ArrowUp, MapPin, Phone, Mail, Compass } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#15221B] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5 block h-auto clear-both relative z-10 font-sans">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* 1. TOP SECTION: Branding, Responsive Logo Image Frame, and Return Trigger */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-b border-white/10 pb-12 w-full">
          <div className="flex items-center gap-5">
            {/* Optimized Premium Image Container */}
            <div className="h-14 w-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-500 hover:border-luxury-gold/50 group cursor-pointer overflow-hidden p-2">
              <img 
                src="/nhlogo.jpeg" 
                alt="Nature Homez Corporate Logo" 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="space-y-1">
              <span className="font-serif text-xl md:text-2xl font-light tracking-wide block text-white">
                Nature Homez
              </span>
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase block text-neutral-400">
                Premium • Pure Living
              </span>
            </div>
          </div>

          {/* Elevated Scroll to Top Trigger */}
          <button 
            onClick={handleScrollToTop}
            className="group flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-neutral-400 hover:text-luxury-gold transition-colors duration-300 cursor-pointer self-end sm:self-auto"
          >
            <span>Return to Horizon</span>
            <div className="h-10 w-10 rounded-full border border-white/10 group-hover:border-luxury-gold flex items-center justify-center transition-all duration-300 shrink-0">
              <ArrowUp size={13} className="transform group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* 2. MIDDLE SECTION: Asymmetric Editorial Information Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-16 w-full">
          
          {/* Navigation Directory (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-luxury-gold uppercase border-b border-white/5 pb-2">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-light text-neutral-400">
              <li>
                <a href="#collections" className="hover:text-luxury-gold transition-colors duration-300 block py-0.5 relative w-fit group">
                  Vetted Collections
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-luxury-gold transition-colors duration-300 block py-0.5 relative w-fit group">
                  Our Story
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#the-experience" className="hover:text-luxury-gold transition-colors duration-300 block py-0.5 relative w-fit group">
                  The Framework
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#private-viewing" className="hover:text-luxury-gold transition-colors duration-300 block py-0.5 relative w-fit group">
                  Private Advisory
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          {/* Vetted Studio Address Hubs (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-luxury-gold uppercase border-b border-white/5 pb-2">
              Vetted Studios
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-light text-neutral-400">
              <div className="space-y-2">
                <span className="text-[9px] font-bold tracking-widest text-neutral-500 uppercase block">Urban Core</span>
                <p className="leading-relaxed flex items-start gap-2.5 hover:text-white transition-colors duration-300">
                  <MapPin size={13} className="text-luxury-gold shrink-0 mt-1" />
                  Golf Course Road, Gurugram
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-bold tracking-widest text-neutral-500 uppercase block">Himalayan Ridges</span>
                <p className="leading-relaxed flex items-start gap-2.5 hover:text-white transition-colors duration-300">
                  <MapPin size={13} className="text-luxury-gold shrink-0 mt-1" />
                  Mall Road, Mussoorie
                </p>
                <p className="leading-relaxed flex items-start gap-2.5 hover:text-white transition-colors duration-300 pt-1">
                  <MapPin size={13} className="text-luxury-gold shrink-0 mt-1" />
                  Bhimtal Lake, Nainital
                </p>
              </div>
            </div>
          </div>

          {/* Direct Private Communication Brackets (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-luxury-gold uppercase border-b border-white/5 pb-2">
              Direct Enquiries
            </h4>
            <div className="space-y-3.5 text-sm font-light text-neutral-400">
              <a href="tel:+919899125794" className="flex items-center gap-3 hover:text-white transition-colors duration-300 w-fit group">
                <div className="h-7 w-7 rounded-full bg-white/5 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-nature-dark transition-all duration-300 shrink-0">
                  <Phone size={12} />
                </div>
                <span className="font-medium tracking-wide text-white transition-colors group-hover:text-luxury-gold">+91 98991 25794</span>
              </a>
              <a href="mailto:contact.naturehomez@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors duration-300 w-fit group">
                <div className="h-7 w-7 rounded-full bg-white/5 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-nature-dark transition-all duration-300 shrink-0">
                  <Mail size={12} />
                </div>
                <span className="font-medium tracking-wide text-white transition-colors group-hover:text-luxury-gold break-all">contact.naturehomez@gmail.com</span>
              </a>
              <div className="pt-2 flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-neutral-500 uppercase">
                <Compass size={13} className="text-luxury-gold animate-spin" style={{ animationDuration: "12s" }} />
                <span>By Appointment Only</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. BOTTOM SECTION: Legal Metas and Parent Enterprise Link Alignment */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 w-full text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">
          
          <div className="order-3 md:order-1 text-center md:text-left tracking-normal normal-case font-light text-neutral-400 text-xs">
            <span>© {currentYear} Nature Homez. All Rights Reserved.</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 order-1 md:order-2">
            <a href="/disclaimer" className="hover:text-luxury-gold transition-colors duration-300">Disclaimer</a>
            <span className="text-white/10 hidden sm:block">|</span>
            <a href="/privacy-policy" className="hover:text-luxury-gold transition-colors duration-300">Privacy Policy</a>
            <span className="text-white/10 hidden sm:block">|</span>
            <a href="/terms-of-use" className="hover:text-luxury-gold transition-colors duration-300">Terms of Use</a>
          </div>

          {/* Refined Triarch Group Attribution */}
          <div className="order-2 md:order-3 text-center md:text-right text-xs tracking-wide normal-case font-light text-neutral-400">
            <span>Designed by </span>
            <a 
              href="https://triarchgroup.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-luxury-gold font-medium transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-luxury-gold"
            >
              Triarch Group
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}