"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, MapPin, Wallet, FileText, ArrowRight, ShieldCheck, PhoneCall, MailCheck } from "lucide-react";

export default function PrivateViewing() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "Delhi-NCR",
    budget: "5 — 10 Cr",
    notes: ""
  });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct premium formatted message for WhatsApp string transmission
    const baseText = `Hello Nature Homez, I am requesting a Private Advisory Consultation.\n\n` +
                     `• Name: ${formData.fullName}\n` +
                     `• Email: ${formData.email}\n` +
                     `• Contact: ${formData.phone}\n` +
                     `• Region of Interest: ${formData.location}\n` +
                     `• Targeted Budget: ₹${formData.budget}\n` +
                     `• Private Brief: ${formData.notes || "None provided."}`;
                     
    const encodedMessage = encodeURIComponent(baseText);
    
    // Launch secure corporate communication api thread
    window.open(`https://wa.me/919899125794?text=${encodedMessage}`, "_blank");
    setFormSubmitted(true);
  };

  return (
    <section id="private-viewing" className="w-full bg-nature-bg text-nature-dark py-16 md:py-24 px-4 md:px-8 border-t border-neutral-200/60 block h-auto clear-both">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Concierge Studios & Direct Communication Handles */}
        <div className="col-span-1 lg:col-span-5 space-y-10 lg:sticky lg:top-32">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 border border-nature-dark/10 bg-nature-dark/5 px-3.5 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-luxury-gold" />
              <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-nature-dark/70 uppercase">Private Advisory Portal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide leading-tight">
              Connect with our <br />
              <span className="italic text-luxury-gold font-normal">Private House.</span>
            </h2>
            <p className="text-xs sm:text-sm font-sans font-light text-neutral-500 leading-relaxed max-w-sm">
              Our regional advisors operate by-appointment entirely around your scheduling parameters—discreet, meticulous, and completely unhurried.
            </p>
          </div>

          {/* Institutional Contact Coordinates Block */}
          <div className="space-y-5 border-y border-neutral-200/60 py-6 max-w-md">
            <div className="flex items-center gap-4 group">
              <div className="h-9 w-9 rounded-full bg-nature-dark/5 flex items-center justify-center text-luxury-gold shrink-0 border border-neutral-200/40 group-hover:bg-nature-dark group-hover:text-white transition-colors duration-300">
                <PhoneCall size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-sans font-bold tracking-widest text-neutral-400 uppercase leading-none">Concierge Hotline</span>
                <a href="tel:+919899125794" className="text-sm font-sans font-semibold text-nature-dark mt-1 hover:text-luxury-gold transition-colors">+91 9899125794</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="h-9 w-9 rounded-full bg-nature-dark/5 flex items-center justify-center text-luxury-gold shrink-0 border border-neutral-200/40 group-hover:bg-nature-dark group-hover:text-white transition-colors duration-300">
                <MailCheck size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-sans font-bold tracking-widest text-neutral-400 uppercase leading-none">Secure Communication</span>
                <a href="mailto:contact.naturehomez@gmail.com" className="text-sm font-sans font-semibold text-nature-dark mt-1 hover:text-luxury-gold transition-colors">contact.naturehomez@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Social Media Vectors Integration */}
          <div className="space-y-3 pt-2">
            <h4 className="text-[9px] font-sans font-bold tracking-widest text-neutral-400 uppercase">Follow Portfolio Architecture</h4>
            <div className="flex items-center gap-4 text-nature-dark/60">
              {/* Instagram */}
              <a href="#" className="p-2.5 rounded-full border border-neutral-200 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300 bg-white shadow-xs active:scale-95" aria-label="Instagram Profile">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="p-2.5 rounded-full border border-neutral-200 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300 bg-white shadow-xs active:scale-95" aria-label="LinkedIn Profile">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="p-2.5 rounded-full border border-neutral-200 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300 bg-white shadow-xs active:scale-95" aria-label="Facebook Profile">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: High-End Advisory Inquiry Sheet Form */}
        <div className="col-span-1 lg:col-span-7 bg-white rounded-[2.5rem] p-6 md:p-12 border border-neutral-200/50 shadow-2xl relative overflow-hidden h-auto">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-luxury-gold via-luxury-gold/40 to-transparent" />
          
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form 
                key="contact-form" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
                onSubmit={handleWhatsAppRedirect} className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Input Element: Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-400 block">Full Name</label>
                    <div className="relative border-b border-neutral-200 focus-within:border-luxury-gold transition-colors pb-1 flex items-center gap-3">
                      <User size={15} className="text-neutral-300 shrink-0" />
                      <input 
                        type="text" required placeholder="Aarav Mehta" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full font-sans text-sm font-medium text-nature-dark placeholder-neutral-300 bg-transparent outline-hidden py-1 border-none focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Input Element: Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-400 block">Email Address</label>
                    <div className="relative border-b border-neutral-200 focus-within:border-luxury-gold transition-colors pb-1 flex items-center gap-3">
                      <Mail size={15} className="text-neutral-300 shrink-0" />
                      <input 
                        type="email" required placeholder="you@residence.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full font-sans text-sm font-medium text-nature-dark placeholder-neutral-300 bg-transparent outline-hidden py-1 border-none focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Input Element: Contact Number */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-400 block">Phone Number</label>
                    <div className="relative border-b border-neutral-200 focus-within:border-luxury-gold transition-colors pb-1 flex items-center gap-3">
                      <Phone size={15} className="text-neutral-300 shrink-0" />
                      <input 
                        type="tel" required placeholder="+91 98765 XXXXX" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full font-sans text-sm font-medium text-nature-dark placeholder-neutral-300 bg-transparent outline-hidden py-1 border-none focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Selector Element: Preferred Region Location */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-400 block">Preferred Location</label>
                    <div className="relative border-b border-neutral-200 focus-within:border-luxury-gold transition-colors pb-1 flex items-center gap-3">
                      <MapPin size={15} className="text-neutral-300 shrink-0" />
                      <select 
                        value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full font-sans text-sm font-medium text-nature-dark bg-transparent outline-hidden py-1 border-none cursor-pointer appearance-none focus:ring-0"
                      >
                        <option value="Delhi-NCR">Delhi-NCR</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                      </select>
                    </div>
                  </div>

                  {/* Selector Element: Budget Target Tier */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-400 block">Budget Tier</label>
                    <div className="relative border-b border-neutral-200 focus-within:border-luxury-gold transition-colors pb-1 flex items-center gap-3">
                      <Wallet size={15} className="text-neutral-300 shrink-0" />
                      <select 
                        value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full font-sans text-sm font-medium text-nature-dark bg-transparent outline-hidden py-1 border-none cursor-pointer appearance-none focus:ring-0"
                      >
                        <option value="less than 5 Cr">less than 5 Cr</option>
                        <option value="5 — 10 Cr">₹5 — 10 Cr</option>
                        <option value="10 — 20 Cr">₹10 — 20 Cr</option>
                        <option value="20 Cr+">₹20 Cr+</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* Textarea Input Element: Advisory Note Brief */}
                <div className="space-y-1.5 pt-2">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-400 block">A Note For Our Advisors</label>
                  <div className="relative border-b border-neutral-200 focus-within:border-luxury-gold transition-colors pb-1 flex items-start gap-3">
                    <FileText size={15} className="text-neutral-300 shrink-0 mt-1.5" />
                    <textarea 
                      rows={2} placeholder="Tell us about your ideal residence, layout timeline, or privacy concerns..." value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full font-sans text-sm font-medium text-nature-dark placeholder-neutral-300 bg-transparent outline-hidden py-1 border-none resize-none focus:ring-0"
                    />
                  </div>
                </div>

                {/* Direct High-Converting Premium WhatsApp CTA Action */}
                <div className="pt-4 space-y-4">
                  <button 
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-semibold text-xs tracking-wider uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-md cursor-pointer active:scale-[0.99]"
                  >
                    {/* Brand WhatsApp Vector Grid Logo Element */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Share Details via WhatsApp
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[9px] font-sans font-bold tracking-widest text-neutral-400 uppercase text-center pt-1">
                    <span>Strictly Confidential • Instant Connection</span>
                  </div>
                </div>
              </motion.form>
            ) : (
              /* Success Confirmation Banner State Card */
              <motion.div 
                key="success-card" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6 flex flex-col items-center justify-center h-full"
              >
                <div className="h-16 w-16 bg-luxury-gold/10 rounded-full flex items-center justify-center text-luxury-gold border border-luxury-gold/20 animate-bounce">
                  <ShieldCheck size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-nature-dark tracking-wide">Brief Shared Successfully</h3>
                  <p className="text-xs font-sans font-light text-neutral-500 max-w-sm leading-relaxed mx-auto">
                    Your luxury portfolio parameters have been securely compiled and pushed through to our active secure WhatsApp registry.
                  </p>
                </div>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-widest uppercase text-nature-dark hover:text-luxury-gold transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Edit Brief Parameters
                  <ArrowRight size={12} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}