"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2019",
    title: "Berdiri",
    desc: "CV. Syabil Binar Amerta didirikan di Tangerang, Banten, dengan fokus awal pada layanan visa ke luar negeri."
  },
  {
    year: "2020",
    title: "Ekspansi Layanan",
    desc: "Mulai melayani pengurusan KITAS dan izin kerja untuk tenaga kerja asing (WNA) yang masuk ke Indonesia."
  },
  {
    year: "2022",
    title: "Perizinan Perusahaan",
    desc: "Memperluas layanan ke bidang legalitas dan perizinan perusahaan — NIB, Akta, dan SK Kemenkumham."
  },
  {
    year: "2024",
    title: "300+ Klien Puas",
    desc: "Telah melayani lebih dari 300 klien dari berbagai latar belakang, dari individu hingga perusahaan multinasional."
  },
  {
    year: "2025",
    title: "Terus Berkembang",
    desc: "Berkomitmen memberikan layanan terbaik dengan teknologi dan tim yang terus berkembang bersama kebutuhan klien."
  }
];

export default function AboutTimeline() {
  return (
    <section className="py-24 bg-background relative border-t border-foreground/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">PERJALANAN KAMI</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Dari Awal Hingga Sekarang</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] md:left-[50%] top-0 bottom-0 w-[2px] bg-foreground/10 -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center justify-between md:justify-normal ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Icon/Dot */}
                  <div className="absolute left-[39px] md:left-1/2 w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center font-serif font-bold text-background border-4 border-background -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    {item.year.slice(-2)}
                  </div>

                  {/* Empty space for desktop alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className="w-[calc(100%-80px)] md:w-[calc(50%-40px)] ml-auto md:ml-0 bg-white border border-foreground/10 p-6 rounded-2xl hover:bg-foreground/5 transition-colors duration-300 shadow-sm">
                    <div className="text-brand-gold font-bold mb-1">{item.year}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
