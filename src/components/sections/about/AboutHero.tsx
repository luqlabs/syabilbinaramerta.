"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-16">
      {/* Background Graphic to match landing page */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/hero.png" 
          alt="Background" 
          fill 
          priority
          className="object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm text-sm font-bold tracking-widest text-brand-gold uppercase mb-6"
        >
          PROFIL PERUSAHAAN
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8"
        >
          Tentang CV. Syabil Binar Amerta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
        >
          Konsultan visa dan perizinan terpercaya di Tangerang yang telah membantu ratusan individu dan perusahaan mengurus dokumen legalitas mereka dengan cepat, tepat, dan transparan.
        </motion.p>
      </div>
    </section>
  );
}
