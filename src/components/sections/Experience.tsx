"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, ShieldCheck, Layers, Award } from "lucide-react";

export default function Experience() {
  const metricData = [
    { value: "120+", label: "Curated Estates", desc: "Privately vetted luxury sanctuaries" },
    { value: "₹1,800 Cr", label: "Portfolio Value", desc: "Entrusted high-net-worth assets" },
    { value: "18 Yrs", label: "Private Advisory", desc: "Uncompromised real estate lineage" },
    { value: "2 Regions", label: "NCR & Uttarakhand", desc: "Urban luxury to mountain stillness" }
  ];

  return (
    <section id="the-experience" className="w-full bg-nature-dark text-white px-4 py-12 md:py-20 block clear-both h-auto">
      <div className="w-full max-w-7xl mx-auto block h-auto">
        
        {/* 1. Header Stamp Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 block">
          <div className="inline-flex items-center gap-2 border border-luxury-gold/30 bg-white/5 px-3.5 py-1 rounded-full mb-3">
            <Compass className="text-luxury-gold shrink-0" size={11} />
            <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-neutral-300 uppercase">The Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide leading-tight mt-1">
            Two worlds. <span className="italic text-luxury-gold font-normal">One sanctuary.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-sans font-light leading-relaxed">
            From the glass towers of Gurugram to the cedar-shaded ridges of Mussoorie, Nature Homez curates the rare estates that bridge ambition and stillness.
          </p>
        </div>

        {/* 2. Seamless Editorial Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-6">
          {/* Card Module: Delhi-NCR */}
          <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 p-6 md:p-8 flex flex-col justify-between aspect-[16/10] sm:aspect-video lg:aspect-auto lg:min-h-[320px]">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80" 
                alt="Urban Luxury Skyscrapers" 
                className="w-full h-full object-cover opacity-25 brightness-[0.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-dark via-nature-dark/30 to-transparent" />
            </div>
            <div className="relative z-10">
              <span className="text-[9px] font-sans font-bold tracking-[0.15em] text-luxury-gold uppercase px-2.5 py-0.5 bg-luxury-gold/10 rounded-full border border-luxury-gold/20">Delhi — NCR</span>
              <h3 className="text-2xl font-serif mt-3 font-medium tracking-wide">Urban Luxury</h3>
              <p className="mt-1.5 text-xs text-neutral-300 font-sans font-light max-w-sm leading-relaxed">
                Skyline penthouses, championship-view villas and private-elevator residences in the country&apos;s most coveted addresses.
              </p>
            </div>
            <div className="relative z-10 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-sans font-semibold tracking-wider text-neutral-400 uppercase">
              <span>Gurugram • New Delhi • Noida</span>
              <div className="h-1.5 w-1.5 rounded-full bg-luxury-gold" />
            </div>
          </div>

          {/* Card Module: Uttarakhand */}
          <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 p-6 md:p-8 flex flex-col justify-between aspect-[16/10] sm:aspect-video lg:aspect-auto lg:min-h-[320px]">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" 
                alt="Serene Himalayan Ridges" 
                className="w-full h-full object-cover opacity-25 brightness-[0.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-dark via-nature-dark/40 to-transparent" />
            </div>
            <div className="relative z-10">
              <span className="text-[9px] font-sans font-bold tracking-[0.15em] text-luxury-gold uppercase px-2.5 py-0.5 bg-luxury-gold/10 rounded-full border border-luxury-gold/20">Uttarakhand</span>
              <h3 className="text-2xl font-serif mt-3 font-medium tracking-wide">Serene Retreats</h3>
              <p className="mt-1.5 text-xs text-neutral-300 font-sans font-light max-w-sm leading-relaxed">
                Stone-and-cedar estates set amongst deodars and pine engineered for silence, sunlight and unobstructed Himalayan horizons.
              </p>
            </div>
            <div className="relative z-10 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-sans font-semibold tracking-wider text-neutral-400 uppercase">
              <span>Mussoorie • Bhimtal • Nainital</span>
              <div className="h-1.5 w-1.5 rounded-full bg-[#8FA499]" />
            </div>
          </div>
        </div>

        {/* 3. Sleek Premium Performance Stats Panel */}
        <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-4 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center block mb-12">
          {metricData.map((stat, idx) => (
            <div key={idx} className="flex flex-col justify-center py-2 border-neutral-800 lg:border-r last:border-r-0">
              <span className="text-2xl md:text-3xl font-serif font-bold text-luxury-gold tracking-wide">{stat.value}</span>
              <span className="text-[9px] font-sans font-bold tracking-widest uppercase text-neutral-200 mt-1">{stat.label}</span>
              <span className="text-[10px] font-sans font-light text-neutral-500 mt-0.5 leading-tight">{stat.desc}</span>
            </div>
          ))}
        </div>

        {/* 4. Fine Narrative Pillars Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-t border-white/5 pt-10 w-full block">
          <div className="lg:pr-4 flex flex-col justify-center">
            <h4 className="text-[9px] font-sans font-bold tracking-widest text-luxury-gold uppercase">The Nature Homez Standard</h4>
            <h3 className="text-xl md:text-2xl font-serif mt-1 font-light leading-snug">Vetted meticulously. Vouchsafed completely.</h3>
            <p className="mt-2 text-[11px] font-sans font-light leading-relaxed text-neutral-400">
              Our architectural house functions less as a listing aggregator and more as a private portfolio custodian. We curate exclusively for capital legacy and sensory sanctuary.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <ShieldCheck className="text-luxury-gold" size={18} />, title: "Vetted Provenance", desc: "Every plot, penthouse, and chalet undergoes rigorous title clearance, structural assessment, and micro-climate verification before joining our collection." },
              { icon: <Layers className="text-luxury-gold" size={18} />, title: "Architectural Integrity", desc: "We prioritize properties featuring progressive low-impact engineering, massive thermal glass facades, and organic regional material palettes." },
              { icon: <Award className="text-luxury-gold" size={18} />, title: "Discreet Private Advisory", desc: "From private site exposure itineraries to legal escrow mapping and post-acquisition asset administration, your peace of mind is unconditionally guarded." }
            ].map((item, index) => (
              <div key={index} className="space-y-2 bg-white/[0.01] p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300 flex flex-col">
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  {item.icon}
                </div>
                <h4 className="text-sm font-serif font-medium tracking-wide pt-0.5 text-neutral-100">{item.title}</h4>
                <p className="text-[11px] font-sans font-light text-neutral-400 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}