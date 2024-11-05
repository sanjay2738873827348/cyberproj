"use client";
import TdModule from "../components/TdModule";
import Hero from "../components/Hero";
import { CaroCaro } from "@/components/contentCaro";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Import ScrollTrigger plugin

// Register ScrollTrigger plugin

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".prot", { 
      opacity: 1,      
      duration: 1,     
      scrollTrigger: {
        trigger: ".prot",  
        start: "top 80%",  
        end: "bottom top",  
        scrub: 1,          
        markers: false,    
      },
    });
  });

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <br />
      <div className="opacity-0 prot">
        <Hero />
      </div>

      <CaroCaro />
      <TdModule />
    </div>
  );
}
