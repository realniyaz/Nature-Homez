"use client";

import React from "react";
import { ArrowRight, Compass, Shield, Eye } from "lucide-react";

export default function AboutGlimpse() {
  const pillars = [
    {
      icon: <Shield size={16} className="text-luxury-gold" />,
      title: "Generational Provenance",
      desc: "We exclusively broker estates with ironclad titles and verified ecological preservation."
    },
    {
      icon: <Eye size={16} className="text-luxury-gold" />,
      title: "The Architectural Eye",
      desc: "Prioritizing glassmorphism, raw stone masonry, and structures that disappear into nature."
    }
  ];

  return (
    <section id="about-us" className="w-full bg-nature-bg text-nature-dark py-20 px-4 md:px-8 border-t border-neutral-200/60 block h-auto clear-both">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Layered Premium Image Canvas (Asymmetrical Layout) */}
        <div className="col-span-1 lg:col-span-5 relative order-2 lg:order-1 flex items-center justify-center py-6">
          {/* Main Structural Image */}
          <div className="w-10/12 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative bg-neutral-100 group">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="Premium Timber and Glass Villa Architecture" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-nature-dark/5 mix-blend-multiply" />
          </div>

          {/* Floating Nested Glass Card (The Apple/Minimalist Vibe) */}
          <div className="absolute bottom-0 right-2 md:-right-4 w-7/12 bg-white/70 backdrop-blur-xl p-5 rounded-2xl border border-white/60 shadow-xl hidden sm:block">
            <span className="text-[9px] font-sans font-bold tracking-widest uppercase text-luxury-gold block mb-1">Our Studio Focus</span>
            <p className="text-xs font-sans font-medium text-nature-dark/90 leading-relaxed">
              &ldquo;Architecture should not compete with surrounding horizons. It should frame them.&rdquo;
            </p>
          </div>
        </div>

        {/* Right Side: Deep Editorial Copy Block */}
        <div className="col-span-1 lg:col-span-7 space-y-8 order-1 lg:order-2">
          
          {/* Section Stamp Indicator */}
          <div className="inline-flex items-center gap-2 border border-nature-dark/10 bg-nature-dark/5 px-3.5 py-1 rounded-full">
            <Compass className="text-luxury-gold shrink-0" size={11} />
            <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-nature-dark/70 uppercase">Heritage & Vibe</span>
          </div>

          {/* High-End Serif Typographic Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-nature-dark leading-tight">
              We curate for those who map luxury in <span className="italic text-luxury-gold font-normal">moments of absolute quiet.</span>
            </h2>
            <div className="h-[1px] w-20 bg-luxury-gold/60 mt-2" />
          </div>

          {/* Narrative Statement */}
          <p className="text-sm md:text-base font-sans font-light text-neutral-600 leading-relaxed max-w-xl">
            Nature Homez was founded as an elite, by-appointment private real estate advisory house. We do not chase mass listings. Instead, our collectors engage us to scout, vet, and secure architectural sanctuaries across India&apos;s most demanding corporate hubs and profound wilderness ridges.
          </p>

          {/* Micro Value Pillars Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="space-y-1.5 border-l-2 border-luxury-gold/40 pl-4">
                <div className="flex items-center gap-2">
                  {pillar.icon}
                  <h4 className="text-xs font-sans font-bold tracking-wider text-nature-dark uppercase">{pillar.title}</h4>
                </div>
                <p className="text-xs font-sans font-light text-neutral-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Premium Conversion CTA Button linking to full About Us */}
          <div className="pt-4">
            <a 
              href="#about-us" 
              className="inline-flex items-center gap-3 bg-nature-dark hover:bg-nature-muted text-white font-sans font-semibold text-xs tracking-wider uppercase px-7 py-4 rounded-full transition-all duration-300 group shadow-lg cursor-pointer active:scale-[0.98]"
            >
              Discover Our Full Story
              <ArrowRight size={14} className="text-luxury-gold transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}