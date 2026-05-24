"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapPin, Home, Wallet, ArrowRight, Compass, ChevronDown } from "lucide-react";
import { searchFilters } from "@/data/heroData";

export default function Hero() {
  const [activeDropdown, setActiveDropdown] = useState<"location" | "property" | "budget" | null>(null);
  const [filters, setFilters] = useState({
    location: "Delhi-NCR",
    property: "Penthouse",
    budget: "5 — 10 Cr",
  });

  const widgetRef = useRef<HTMLDivElement>(null);

  // Close custom drop panels if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (type: "location" | "property" | "budget") => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  const selectValue = (type: "location" | "property" | "budget", value: string) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
    setActiveDropdown(null);
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const dropdownMenuVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.99 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: 6, scale: 0.99, transition: { duration: 0.15, ease: "easeIn" } }
  };

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-nature-dark px-4 pt-28 pb-6 md:px-8 md:pt-32 md:pb-8 flex flex-col justify-between">
      
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Glass Estate Architecture"
          className="h-full w-full object-cover brightness-[0.4] scale-105"
          style={{ animation: "panBackground 30s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nature-dark via-transparent to-nature-dark/40" />
      </div>

      {/* Main Hero Content Block */}
      <div className="w-full max-w-7xl mx-auto z-10 flex-1 flex flex-col justify-center py-10 md:py-20">
        <motion.div 
          custom={0} variants={fadeUpVariants} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 border border-luxury-gold/30 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit mb-5 md:mb-6"
        >
          <Compass className="text-luxury-gold shrink-0" size={13} />
          <span className="text-[9px] md:text-xs font-sans text-neutral-200 tracking-[0.2em] uppercase font-semibold">
            Delhi — NCR • Curated 2026
          </span>
        </motion.div>

        <motion.h1 
          custom={1} variants={fadeUpVariants} initial="hidden" animate="visible"
          className="text-4xl sm:text-5xl md:text-8xl text-white tracking-wide font-light leading-[1.1] md:leading-[1.05]"
        >
          Premium Properties. <br />
          <span className="italic font-serif text-luxury-gold font-normal">Pure Living.</span>
        </motion.h1>

        <motion.p 
          custom={2} variants={fadeUpVariants} initial="hidden" animate="visible"
          className="mt-5 md:mt-8 text-sm md:text-xl text-neutral-300 max-w-2xl font-sans font-light leading-relaxed tracking-wide"
        >
          A private collection of penthouses, glass-villas and Himalayan retreats — assembled for those who measure home in stillness, not square feet.
        </motion.p>
      </div>

      {/* Luxury Custom Concierge Filter Widget */}
      <motion.div 
        ref={widgetRef}
        custom={3} variants={fadeUpVariants} initial="hidden" animate="visible"
        className="w-full max-w-7xl mx-auto z-40 mb-2 md:mb-4 bg-white/95 backdrop-blur-xl p-2 md:p-3 rounded-[2rem] md:rounded-full border border-white/60 flex flex-col md:flex-row items-center gap-1 md:gap-3 shadow-2xl relative"
      >
        {/* Dropdown: Location */}
        <div className="w-full md:flex-1 relative">
          <button 
            onClick={() => toggleDropdown("location")}
            className={`w-full grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 rounded-2xl md:rounded-full text-left transition-colors cursor-pointer outline-hidden ${activeDropdown === "location" ? "bg-neutral-100" : "hover:bg-neutral-50/70"}`}
          >
            <div className="h-9 w-9 rounded-full bg-neutral-200/60 flex items-center justify-center text-nature-dark/60 shrink-0">
              <MapPin size={16} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] font-sans font-bold tracking-widest text-neutral-400 uppercase leading-none">Location</span>
              <span className="text-sm md:text-base font-sans font-semibold text-nature-dark mt-0.5 truncate">{filters.location}</span>
            </div>
            <ChevronDown size={16} className={`text-neutral-400 transition-transform duration-300 ${activeDropdown === "location" ? "rotate-180 text-luxury-gold" : ""}`} />
          </button>

          <AnimatePresence>
            {activeDropdown === "location" && (
              <motion.div 
                variants={dropdownMenuVariants} initial="hidden" animate="visible" exit="exit"
                className="absolute left-0 right-0 mt-2 bg-white rounded-2xl p-2 shadow-xl border border-neutral-200/50 z-50 md:max-w-xs"
              >
                {searchFilters.locations.map((loc) => (
                  <button
                    key={loc} onClick={() => selectValue("location", loc)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-sans font-medium transition-colors cursor-pointer flex items-center justify-between ${filters.location === loc ? "bg-nature-dark text-white" : "text-nature-dark hover:bg-neutral-50"}`}
                  >
                    {loc}
                    {filters.location === loc && <div className="h-1.5 w-1.5 rounded-full bg-luxury-gold" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:block h-8 w-[1px] bg-neutral-300/60" />

        {/* Dropdown: Property */}
        <div className="w-full md:flex-1 relative">
          <button 
            onClick={() => toggleDropdown("property")}
            className={`w-full grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 rounded-2xl md:rounded-full text-left transition-colors cursor-pointer outline-hidden ${activeDropdown === "property" ? "bg-neutral-100" : "hover:bg-neutral-50/70"}`}
          >
            <div className="h-9 w-9 rounded-full bg-neutral-200/60 flex items-center justify-center text-nature-dark/60 shrink-0">
              <Home size={15} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] font-sans font-bold tracking-widest text-neutral-400 uppercase leading-none">Property</span>
              <span className="text-sm md:text-base font-sans font-semibold text-nature-dark mt-0.5 truncate">{filters.property}</span>
            </div>
            <ChevronDown size={16} className={`text-neutral-400 transition-transform duration-300 ${activeDropdown === "property" ? "rotate-180 text-luxury-gold" : ""}`} />
          </button>

          <AnimatePresence>
            {activeDropdown === "property" && (
              <motion.div 
                variants={dropdownMenuVariants} initial="hidden" animate="visible" exit="exit"
                className="absolute left-0 right-0 mt-2 bg-white rounded-2xl p-2 shadow-xl border border-neutral-200/50 z-50 md:max-w-xs"
              >
                {searchFilters.propertyTypes.map((type) => (
                  <button
                    key={type} onClick={() => selectValue("property", type)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-sans font-medium transition-colors cursor-pointer flex items-center justify-between ${filters.property === type ? "bg-nature-dark text-white" : "text-nature-dark hover:bg-neutral-50"}`}
                  >
                    {type}
                    {filters.property === type && <div className="h-1.5 w-1.5 rounded-full bg-luxury-gold" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:block h-8 w-[1px] bg-neutral-300/60" />

        {/* Dropdown: Budget */}
        <div className="w-full md:flex-1 relative">
          <button 
            onClick={() => toggleDropdown("budget")}
            className={`w-full grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 rounded-2xl md:rounded-full text-left transition-colors cursor-pointer outline-hidden ${activeDropdown === "budget" ? "bg-neutral-100" : "hover:bg-neutral-50/70"}`}
          >
            <div className="h-9 w-9 rounded-full bg-neutral-200/60 flex items-center justify-center text-nature-dark/60 shrink-0">
              <Wallet size={15} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] font-sans font-bold tracking-widest text-neutral-400 uppercase leading-none">Budget</span>
              <span className="text-sm md:text-base font-sans font-semibold text-nature-dark mt-0.5 truncate">₹{filters.budget}</span>
            </div>
            <ChevronDown size={16} className={`text-neutral-400 transition-transform duration-300 ${activeDropdown === "budget" ? "rotate-180 text-luxury-gold" : ""}`} />
          </button>

          <AnimatePresence>
            {activeDropdown === "budget" && (
              <motion.div 
                variants={dropdownMenuVariants} initial="hidden" animate="visible" exit="exit"
                className="absolute left-0 right-0 mt-2 bg-white rounded-2xl p-2 shadow-xl border border-neutral-200/50 z-50 md:max-w-xs"
              >
                {searchFilters.budgets.map((b) => (
                  <button
                    key={b} onClick={() => selectValue("budget", b)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-sans font-medium transition-colors cursor-pointer flex items-center justify-between ${filters.budget === b ? "bg-nature-dark text-white" : "text-nature-dark hover:bg-neutral-50"}`}
                  >
                    ₹{b}
                    {filters.budget === b && <div className="h-1.5 w-1.5 rounded-full bg-luxury-gold" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <button className="w-full md:w-auto bg-nature-dark hover:bg-nature-muted text-white font-sans font-medium tracking-wide text-xs md:text-sm px-7 py-4 rounded-2xl md:rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer group active:scale-[0.99] shrink-0 mt-1 md:mt-0">
          Explore Collection
          <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform duration-300 text-luxury-gold" />
        </button>
      </motion.div>

      <style jsx global>{`
        @keyframes panBackground {
          0% { transform: scale(1.03) translate(0px, 0px); }
          100% { transform: scale(1.08) translate(-4px, -2px); }
        }
      `}</style>
    </section>
  );
}