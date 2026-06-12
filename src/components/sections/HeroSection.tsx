"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <Image 
          src="/hero.png" 
          alt="Corporate Building" 
          fill 
          priority
          className="object-cover opacity-[0.15]"
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl text-foreground mb-6 leading-[1.1] tracking-tight">
            Solusi Lengkap <br />
            <span className="italic text-brand-gold">Visa & Perizinan</span> Bisnis Anda
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 font-light leading-relaxed"
        >
          Kami membantu individu dan perusahaan mengurus Visa ke luar negeri, Izin Tinggal & Kerja untuk ekspatriat, serta legalitas perusahaan dengan cepat, transparan, dan profesional.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a 
            href="https://wa.me/6285813809878" target="_blank" rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center space-x-3 bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-gold hover:text-foreground transition-colors duration-300 group"
          >
            <span>Mulai Konsultasi</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('services');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="inline-flex w-full sm:w-auto items-center justify-center space-x-3 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-foreground/5 transition-colors duration-300 cursor-pointer"
          >
            <span>Lihat Layanan</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
