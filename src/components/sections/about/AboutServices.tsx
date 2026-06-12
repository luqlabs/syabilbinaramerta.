"use client";

import { motion } from "framer-motion";
import { Globe, Users, Building2, CheckCircle2 } from "lucide-react";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Visa ke Luar Negeri",
    points: [
      "Visa Jepang, China, Schengen",
      "Visa Australia, Korea, UK, AS",
      "Visa Bisnis & Pelajar",
      "50+ negara tujuan"
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Imigrasi & Izin WNA",
    points: [
      "KITAS & KITAP",
      "Izin Kerja WNA (IMTA/TKA)",
      "Visa Investor (B211A)",
      "Konversi & Perpanjangan"
    ]
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Perizinan Perusahaan",
    points: [
      "Pendirian PT & CV",
      "NIB melalui OSS",
      "SK Kemenkumham",
      "Izin Usaha Sektoral"
    ]
  }
];

export default function AboutServices() {
  return (
    <section className="py-24 bg-background relative border-t border-foreground/5 overflow-hidden">
      <FloatingBubbles />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">LAYANAN KAMI</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Solusi Legalitas Terpadu</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`bg-white border border-foreground/10 aspect-square rounded-full p-8 md:p-12 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center shadow-sm group ${i === 1 ? 'md:mt-8' : i === 2 ? 'md:mt-16' : ''}`}
            >
              <div className="w-14 h-14 rounded-full bg-foreground/5 text-brand-gold flex items-center justify-center mb-6 border border-foreground/5 group-hover:bg-brand-gold/10 transition-colors flex-shrink-0">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <ul className="space-y-3 mt-auto w-full max-w-[200px]">
                {service.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-foreground/80 text-sm md:text-base text-left">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="leading-tight">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
