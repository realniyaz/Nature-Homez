"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Key, ShieldCheck, Eye, RefreshCw, UserCheck, Smartphone, Lock, ArrowDown } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicyPage() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  useEffect(() => {
    document.body.style.overflow = "unset";
  }, []);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const privacyClauses = [
    {
      icon: <UserCheck className="text-luxury-gold" size={18} />,
      title: "1. Information We Securely Vette",
      excerpt: "Personal markers gathered through explicit, high-end advisory briefs.",
      desc: "We exclusively collect information directly authorized by your studio brief. This encompasses your full name, email coordinates, telephone metrics, targeted real estate investment tiers (e.g., ₹5 Cr to ₹20 Cr+), and specific geographical preferences across Delhi-NCR or Uttarakhand. We do not aggregate data blindly or procure external scrap lists."
    },
    {
      icon: <Smartphone className="text-luxury-gold" size={18} />,
      title: "2. The WhatsApp Communication Vector",
      excerpt: "Encrypted, on-demand transmission parameters for private itineraries.",
      desc: "When you interact with our direct conversion engine ('Share Details via WhatsApp'), your profile parameters are safely bundled into a readable, standard text string. This data is processed natively on your device before transmission. Once pushed into our secure workspace timeline (+91 98991 25794), the chat thread operates under end-to-end encryption frameworks protocols managed natively by WhatsApp."
    },
    {
      icon: <Lock className="text-luxury-gold" size={18} />,
      title: "3. Absolute Non-Disclosure Mandate",
      excerpt: "Your architectural intent is insulated from third-party broker exposure.",
      desc: "Nature Homez operates strictly as an independent boutique legacy advisory house. Your structural notes, private phone coordinates, and financial budgets are never bartered, shared, or exposed to external mass-market advertising pipelines. Access to your asset files is strictly limited to verified asset custodians on a need-to-know assignment basis."
    },
    {
      icon: <RefreshCw className="text-luxury-gold" size={18} />,
      title: "4. Your Fiduciary & Structural Controls",
      excerpt: "Absolute governance to alter, retract, or wipe your parameters instantly.",
      desc: "As a distinguished patron of our private house, you retain absolute authority over your records. You may request a complete erasure of your advisory brief, contact coordinates, and viewing logs at any moment by contacting us directly at contact.naturehomez@gmail.com. All requested parameter purges are completely executed within 24 operational hours."
    }
  ];

  return (
    <div className="w-full min-h-[100dvh] bg-nature-bg text-nature-dark selection:bg-luxury-gold/20 flex flex-col justify-between font-sans antialiased">
      
      {/* Global Fixed Navigation Bar Header */}
      <Navbar />

      {/* 1. HIGH-END EDITORIAL PRIVACY HERO BLOCK (Dark Mode Accent Anchor) */}
      <section className="w-full bg-[#15221B] text-white min-h-[65dvh] sm:min-h-[70dvh] pt-32 pb-16 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden border-b border-white/5">
        {/* Subtle geometric structural vector mapping coordinates */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15%" cy="30%" r="250" stroke="#C5A880" strokeWidth="1" fill="none" />
            <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#C5A880" strokeWidth="1" />
          </svg>
        </div>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
          {/* Hero Content Left Panel */}
          <div className="md:col-span-8 space-y-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-luxury-gold/30 bg-white/5 px-3.5 py-1 rounded-full w-fit"
            >
              <Key className="text-luxury-gold shrink-0" size={11} />
              <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-neutral-300 uppercase">Data Insulation</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide leading-tight"
            >
              The Private <br />
              <span className="italic text-luxury-gold font-normal">Insulation Charter.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xs sm:text-sm text-neutral-400 font-sans font-light leading-relaxed max-w-xl pt-2"
            >
              At Nature Homez, we treat your search parameters with the same uncompromised metrics assigned to our physical masonry. This framework defines our absolute technical commitment to protecting your digital footprint.
            </motion.p>
          </div>

          {/* Hero Metadata Right Panel (Luxury Details) */}
          <div className="md:col-span-4 flex flex-row md:flex-col justify-between md:justify-end items-end md:items-start border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 gap-4 font-sans text-[9px] font-bold tracking-[0.15em] uppercase text-neutral-400">
            <div className="space-y-1">
              <span className="text-luxury-gold block">Security Integrity</span>
              <span className="text-white leading-none block pt-0.5">Compliant • Vetted • Guarded</span>
            </div>
            
            <a 
              href="#privacy-matrix"
              className="flex items-center gap-2 text-white hover:text-luxury-gold transition-colors duration-300 group mt-auto cursor-pointer"
            >
              <span>Scroll to Clauses</span>
              <div className="h-7 w-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-luxury-gold transition-colors shrink-0">
                <ArrowDown size={11} className="animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 2. ACCORDION BLOCK (Light Background Transition Flow) */}
      <section id="privacy-matrix" className="w-full max-w-3xl mx-auto px-4 py-16 md:py-24 flex-1 relative z-10 block h-auto clear-both">
        <div className="space-y-4 w-full">
          {privacyClauses.map((clause, idx) => {
            const isSelected = openSection === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="bg-white rounded-2xl border border-neutral-200/50 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Trigger Row Control Header Button */}
                <button
                  onClick={() => toggleSection(idx)}
                  className={`w-full text-left px-5 py-4 flex items-start gap-4 cursor-pointer select-none transition-colors outline-hidden ${isSelected ? "bg-neutral-50/60" : "hover:bg-neutral-50/30"}`}
                >
                  <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-200/20 mt-0.5">
                    {clause.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="text-sm sm:text-base font-serif font-medium text-nature-dark tracking-wide">{clause.title}</h3>
                    <p className="text-[11px] sm:text-xs font-sans font-light text-neutral-400 mt-0.5 truncate">{clause.excerpt}</p>
                  </div>

                  <Eye 
                    size={16} 
                    className={`text-neutral-400 shrink-0 mt-1.5 transition-transform duration-500 ${isSelected ? "rotate-180 text-luxury-gold" : ""}`} 
                  />
                </button>

                {/* Silky Fluid Dropdown Animations Panels */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 pt-2 border-t border-neutral-100 font-sans text-xs sm:text-sm text-neutral-600 font-light leading-relaxed bg-white">
                        {clause.desc}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Global Corporate Studio Footer Block Component */}
      <Footer />

    </div>
  );
}