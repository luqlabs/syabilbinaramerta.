"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, ShieldCheck } from "lucide-react";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Profesional & Berpengalaman",
    desc: "Tim kami terdiri dari para ahli yang berpengalaman di bidang imigrasi dan hukum bisnis Indonesia selama lebih dari 5 tahun."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Berorientasi pada Klien",
    desc: "Setiap klien mendapat perhatian penuh dan pendampingan personal dari awal hingga dokumen selesai dan diterima."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Tepat Waktu & Transparan",
    desc: "Kami memberikan estimasi waktu yang jelas dan selalu mengupdate perkembangan proses kepada klien secara berkala."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Tingkat Keberhasilan Tinggi",
    desc: "Dengan pengalaman ratusan kasus, tingkat keberhasilan pengajuan visa dan perizinan kami mencapai 98%."
  }
];

export default function AboutValues() {
  return (
    <section className="py-24 bg-background relative border-t border-foreground/5 overflow-hidden">
      <FloatingBubbles />
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-bold text-foreground/[0.02] whitespace-nowrap pointer-events-none select-none z-0">
        NILAI KAMI
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">NILAI KAMI</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Mengapa Klien Mempercayai Kami</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`bg-white border border-foreground/10 p-10 rounded-[40px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 shadow-sm group ${i % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                {val.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{val.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
