"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="py-24 bg-white text-foreground relative border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="space-y-4 pt-12"
              >
                <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-lg">
                  <Image 
                    src="/legal.png" 
                    alt="Legal" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-lg">
                  <Image 
                    src="/kitas.png" 
                    alt="Passport" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full z-0" />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col h-full justify-center"
            >
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-foreground mb-4">Visi Kami</h3>
                <p className="text-foreground/80 text-lg leading-relaxed">Menjadi konsultan visa dan perizinan terdepan di Indonesia yang dikenal atas integritas, keahlian, dan komitmen penuh terhadap kepuasan setiap klien — memastikan setiap proses legalitas berjalan lancar tanpa hambatan.</p>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Misi Kami</h3>
                <ul className="space-y-4">
                  {[
                    "Memberikan layanan konsultasi yang jujur, transparan, dan profesional",
                    "Menyederhanakan proses birokrasi yang rumit menjadi mudah dipahami klien",
                    "Memastikan setiap dokumen diproses dengan benar sejak pertama kali",
                    "Mendampingi klien dari awal hingga dokumen selesai dan diterima",
                    "Terus meningkatkan keahlian tim sesuai perkembangan regulasi terkini"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-foreground/80 text-lg">
                      <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
