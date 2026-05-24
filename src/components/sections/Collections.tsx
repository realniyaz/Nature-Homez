"use client";

import React, { useState, useEffect } from "react";
// Fixed Bug: Replaced broken "react0" package string with correct framer-motion reference
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapPin, ArrowUpRight, Share2, X, MessageSquare } from "lucide-react";
import { propertiesData, Property } from "@/data/propertiesData";

export default function Collections() {
  const [filter, setFilter] = useState<"All" | "Delhi-NCR" | "Uttarakhand">("All");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const filteredProperties = propertiesData.filter(p => filter === "All" || p.region === filter);

  // Mobile UX Optimization: Lock body background scroll mechanics when modal drawer portal is active
  useEffect(() => {
    if (selectedProperty) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProperty]);

  const handleShare = (id: string) => {
    navigator.clipboard.writeText(`${window.location.origin}/#property-${id}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="collections" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-neutral-200/50 block h-auto clear-both">
      
      {/* Editorial Heading Panel */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-serif font-light tracking-tight text-nature-dark leading-tight"
          >
            Residences chosen <br />
            <span className="italic text-luxury-gold font-normal">with intention.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-3 text-xs sm:text-sm text-neutral-500 font-sans font-light leading-relaxed max-w-md"
          >
            Every estate in our portfolio is privately vetted — for provenance, light, air, and the quiet luxury that defines true sanctuary. 
          </motion.p>
        </div>

        {/* High-End Luxury Switcher Control (Mobile Smooth Scroll Responsive) */}
        <div className="glass-panel p-1 rounded-2xl flex items-center gap-1 w-full md:w-auto overflow-x-auto whitespace-nowrap scrollbar-none border border-neutral-300/40 shadow-xs">
          {(["All", "Delhi-NCR", "Uttarakhand"] as const).map((tab) => (
            <button
              key={tab} onClick={() => setFilter(tab)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 relative cursor-pointer select-none ${
                filter === tab ? "text-white" : "text-nature-dark/60 hover:text-nature-dark"
              }`}
            >
              {filter === tab && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-nature-dark rounded-xl -z-10 shadow-sm" />
              )}
              {tab === "All" ? "All Estates" : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Canvas Wrapper */}
      <motion.div 
        variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id} variants={cardVariants} layout
              className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/40 shadow-xs hover:shadow-lg transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Frame Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 shrink-0 w-full">
                <img
                  src={property.mainImage} alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Floating Location and Specs Badges */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/40 shadow-xs">
                  <span className="text-[9px] font-sans font-bold tracking-widest text-nature-dark uppercase">{property.type}</span>
                </div>
                <div className="absolute top-3 right-3 bg-nature-dark/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                  <span className="text-[9px] font-sans font-bold tracking-widest text-white uppercase">{property.region === "Delhi-NCR" ? "NCR" : "UK"}</span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1 text-white">
                  <MapPin size={13} className="text-luxury-gold shrink-0" />
                  <span className="text-xs font-sans font-medium tracking-wide drop-shadow-xs truncate max-w-[240px]">{property.location}</span>
                </div>
              </div>

              {/* Data Detail Content Segment */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-5">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-nature-dark tracking-wide">{property.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-sans font-light leading-relaxed line-clamp-2 min-h-[40px]">{property.tagline}</p>
                </div>

                {/* Dimensions Configuration Bar */}
                <div className="flex items-center justify-between border-y border-neutral-100 py-2.5 text-[11px] sm:text-xs font-sans font-medium text-neutral-400">
                  <span>{property.beds} Bed</span>
                  <div className="h-2.5 w-[1px] bg-neutral-200" />
                  <span>{property.baths} Bath</span>
                  <div className="h-2.5 w-[1px] bg-neutral-200" />
                  <span>{property.sqft.toLocaleString()} Sq.Ft</span>
                </div>

                {/* Action Conversion Horizon Bar */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[8px] font-sans font-bold text-neutral-400 tracking-wider uppercase leading-none">Price on Application</span>
                    <span className="text-lg sm:text-xl font-serif font-semibold text-nature-dark mt-0.5 truncate">₹{property.price}</span>
                  </div>

                  <button 
                    onClick={() => setSelectedProperty(property)}
                    className="inline-flex items-center gap-1.5 border border-nature-dark/10 hover:border-nature-dark bg-neutral-50 hover:bg-nature-dark text-nature-dark hover:text-white px-4 py-2.5 rounded-full text-[11px] sm:text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 group/btn cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
                  >
                    View Details
                    <ArrowUpRight size={13} className="text-luxury-gold transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* DYNAMIC DETAILS OVERLAY PORTAL SHEET */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-[100] flex items-center justify-end bg-black/70 backdrop-blur-sm p-0 sm:p-3">
            {/* Backdrop Dismissal Node */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProperty(null)} className="absolute inset-0" />

            {/* Main Interactive Presentation Slide Panel */}
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 200 }}
              className="relative w-full max-w-xl h-[100dvh] sm:h-[calc(100dvh-1.5rem)] bg-white sm:rounded-2xl shadow-2xl overflow-y-auto flex flex-col z-10 border border-neutral-200/50"
            >
              {/* Sticky Header Actions Strip */}
              <div className="sticky top-0 left-0 right-0 p-3 sm:p-4 bg-white/90 backdrop-blur-md border-b border-neutral-100 flex items-center justify-between z-30">
                <button 
                  onClick={() => handleShare(selectedProperty.id)}
                  className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-nature-dark transition-all duration-300 relative active:scale-95 cursor-pointer"
                  title="Copy Asset Profile URL"
                >
                  <Share2 size={16} />
                  {isCopied && (
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-nature-dark text-white text-[9px] font-sans px-2 py-1 rounded-md whitespace-nowrap shadow-md">Link Copied</span>
                  )}
                </button>
                
                <button 
                  onClick={() => setSelectedProperty(null)}
                  className="h-8 w-8 rounded-full bg-neutral-100 hover:bg-nature-dark text-nature-dark hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
                  aria-label="Close sheet"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Dynamic Presentation Gallery Body Canvas */}
              <div className="p-5 sm:p-6 space-y-6 flex-1">
                {/* Visual Image Grid Stack */}
                <div className="space-y-2.5">
                  <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-100 shadow-xs">
                    <img src={selectedProperty.mainImage} alt={selectedProperty.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {selectedProperty.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 shadow-xs">
                        <img src={imgUrl} alt={`Gallery frame snippet ${idx}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Architectural Copy */}
                <div className="space-y-2">
                  <span className="text-[9px] font-sans font-bold tracking-widest text-luxury-gold uppercase px-2.5 py-0.5 bg-luxury-gold/10 rounded-full border border-luxury-gold/20 w-fit block">{selectedProperty.badge}</span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-nature-dark tracking-wide pt-1">{selectedProperty.title}</h3>
                  <div className="flex items-center gap-1 text-neutral-400 text-xs font-sans">
                    <MapPin size={13} className="text-luxury-gold shrink-0" />
                    <span>{selectedProperty.location}</span>
                  </div>
                </div>

                {/* Performance Framework Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 border-y border-neutral-100 py-4 text-center font-sans">
                  <div className="flex flex-col"><span className="text-[10px] text-neutral-400 uppercase tracking-wider">Bedrooms</span><span className="text-sm font-bold text-nature-dark mt-0.5">{selectedProperty.beds} Beds</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-neutral-400 uppercase tracking-wider">Bathrooms</span><span className="text-sm font-bold text-nature-dark mt-0.5">{selectedProperty.baths} Baths</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-neutral-400 uppercase tracking-wider">Footprint</span><span className="text-sm font-bold text-nature-dark mt-0.5">{selectedProperty.sqft.toLocaleString()} sqft</span></div>
                </div>

                {/* Extended Editorial Narratives */}
                <div className="space-y-2">
                  <h4 className="text-[9px] font-sans font-bold tracking-widest text-neutral-400 uppercase border-b border-neutral-50 pb-1 w-fit">Architecture Narrative</h4>
                  <p className="text-neutral-600 font-sans font-light leading-relaxed text-xs sm:text-sm pt-1">{selectedProperty.description}</p>
                </div>

                {/* Vetted Features Spec Sheets */}
                <div className="space-y-3">
                  <h4 className="text-[9px] font-sans font-bold tracking-widest text-neutral-400 uppercase border-b border-neutral-50 pb-1 w-fit">Vetted Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProperty.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs font-sans text-nature-dark/90 bg-neutral-50 px-3 py-2 rounded-xl border border-neutral-100">
                        <div className="h-1 w-1 rounded-full bg-luxury-gold shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conversion Horizon Mobile Sticky Footer Strip */}
              <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-neutral-100 grid grid-cols-2 gap-3 z-30 shadow-2xl">
                {/* Premium WhatsApp Integration Channel */}
                <a
                  href={`https://wa.me/919899125794?text=Hello%20Nature%20Homez%2C%20I%20am%20interested%20in%20privately%20vetting%20the%20portfolio%20for%20${encodeURIComponent(selectedProperty.title)}%20located%20at%20${encodeURIComponent(selectedProperty.location)}.%20Please%20share%20the%20confidential%20itinerary.`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-semibold text-[11px] sm:text-xs tracking-wider uppercase py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-[0.98]"
                >
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Now
                </a>

                {/* Direct Document Anchor Section Forwarding Link */}
                <a
                  href="#private-viewing" onClick={() => setSelectedProperty(null)}
                  className="w-full bg-nature-dark hover:bg-nature-muted text-white font-sans font-semibold text-[11px] sm:text-xs tracking-wider uppercase py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-xs text-center cursor-pointer active:scale-[0.98]"
                >
                  <MessageSquare size={13} className="text-luxury-gold shrink-0" />
                  Contact Now
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}