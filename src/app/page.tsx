import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Collections from "@/components/sections/Collections";
import AboutGlimpse from "@/components/sections/AboutGlimpse";
import Experience from "@/components/sections/Experience";
import PrivateViewing from "@/components/sections/PrivateViewing";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="w-full relative bg-nature-bg overflow-x-hidden">
      <Navbar />
      
      <div className="w-full flex flex-col items-stretch relative">
        <Hero />
        <Collections />
        
        <Experience />
        <AboutGlimpse />
        <PrivateViewing/>
        <Footer/>
      </div>
    </div>
  );
}