"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const destinations = [
  { name: "Jepang", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop" },
  { name: "Amerika Serikat", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop" },
  { name: "Schengen Area", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop" },
  { name: "Australia", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop" },
  { name: "Inggris (UK)", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop" },
  { name: "Korea Selatan", img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1200&auto=format&fit=crop" },
  { name: "Kanada", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop" },
];

export default function DestinationsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Gunakan interpolasi angka murni untuk menghindari bug string parsing di Framer Motion
  const trackProgress = useTransform(scrollYProgress, [0, 0.85], [0, 100]);
  const trackX = useTransform(trackProgress, (val) => `calc(-${val}% + ${val}vw)`);
  
  const cardsXProgress = useTransform(scrollYProgress, [0.85, 1], [0, -150]);
  const cardsX = useTransform(cardsXProgress, (val) => `${val}vw`);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-[#0A1128]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Decorative Background Text */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
           <span className="font-serif text-[18vw] text-white/5 whitespace-nowrap font-bold select-none">
              WORLDWIDE
           </span>
        </div>

        {/* Top Header Information */}
        <div className="absolute top-24 md:top-32 text-center z-10 w-full px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-4">
            Destinasi Pilihan
          </h2>
          <p className="text-white/70 text-sm md:text-base font-medium tracking-wide max-w-xl mx-auto flex items-center justify-center gap-2">
            <span>Scroll ke bawah untuk mengikuti perjalanan</span>
            <motion.span 
              animate={{ y: [0, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ↓
            </motion.span>
          </p>
        </div>

        {/* MAIN HORIZONTAL TRACK */}
        <motion.div style={{ x: trackX }} className="flex items-center z-20 mt-40 md:mt-36 w-max">
          
          {/* Start Padding (pushes plane offscreen right initially) */}
          <div className="w-[100vw] shrink-0"></div>

          {/* CARDS & PLANE CONTAINER (Continues moving left after track stops) */}
          <motion.div style={{ x: cardsX }} className="flex items-center shrink-0">
            
            {/* The Realistic Airplane (Overlaying the rope) */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[300px] md:w-[600px] h-[200px] md:h-[400px] shrink-0 z-20"
            >
              <Image src="/Boing_remove_background-removebg-preview.png" alt="Real Airplane" fill sizes="(max-width: 768px) 300px, 600px" className="object-contain relative z-20 drop-shadow-2xl" />
            </motion.div>

            {/* Rope to first card (-ml pulls it UNDER the plane so they unify) */}
            <div className="w-40 md:w-[500px] h-[3px] bg-white/30 border-b-[3px] border-dashed border-white/80 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.5)] -ml-16 md:-ml-40 relative z-10"></div>

            {/* Cards and Ropes */}
            {destinations.map((dest, i) => (
              <div key={i} className="flex items-center shrink-0">
                {/* The Banner Card */}
                <div className="relative w-[75vw] md:w-[400px] h-[50vh] md:h-[400px] rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] group border border-white/20 bg-brand-dark/50">
                  <Image 
                    src={dest.img} 
                    alt={dest.name} 
                    fill
                    className="object-cover brightness-[0.7] group-hover:brightness-110 group-hover:scale-105 transition-all duration-[1.5s] ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/95 via-[#0A1128]/30 to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                    <span className="text-white/70 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-3 block drop-shadow-md">Negara Tujuan</span>
                    <h3 className="font-serif text-3xl md:text-5xl text-white font-medium drop-shadow-lg">{dest.name}</h3>
                  </div>
                </div>

                {/* Rope connecting to next card (Only if NOT the last card) */}
                {i < destinations.length - 1 && (
                  <div className="w-20 md:w-48 h-[3px] bg-white/30 border-b-[3px] border-dashed border-white/80 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.5)] relative z-10"></div>
                )}
              </div>
            ))}

            {/* LAST SPECIAL ROPE THAT REACHES THE TEXT */}
            {/* It has a width of 28vw (on desktop) and negative right margin so it perfectly stretches just under the word "Kami" on the left side of the text block */}
            <div className="w-[30vw] md:w-[28vw] h-[3px] bg-white/30 border-b-[3px] border-dashed border-white/80 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.5)] -mr-[30vw] md:-mr-[28vw] relative z-0"></div>
          </motion.div>

          {/* FINAL FLOATING TEXT (Stops dead in the center when track stops) */}
          <div className="w-[100vw] shrink-0 flex justify-center items-center px-6 relative z-10">
            <h2 className="font-serif text-4xl md:text-7xl font-medium text-center text-white leading-tight max-w-4xl drop-shadow-2xl">
              Kami melayani pengurusan visa ke lebih dari <br/>
              <span className="text-[#516cf0] italic">50+ negara</span> di seluruh dunia.
            </h2>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
