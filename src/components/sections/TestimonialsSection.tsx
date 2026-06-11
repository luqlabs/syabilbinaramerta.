"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Pengurusan Visa Schengen saya dibantu penuh dari awal sampai akhir. Tim CV. Syabil Binar Amerta sangat teliti dalam mengecek dokumen. Visa saya approved dalam waktu 5 hari!",
    name: "Budi Santoso",
    role: "Tourist"
  },
  {
    text: "Sangat terbantu untuk pengurusan KITAS direktur perusahaan kami. Prosesnya transparan dan kami selalu diupdate mengenai progressnya. Highly recommended!",
    name: "Sarah Wijaya",
    role: "HR Manager, Tech Corp"
  },
  {
    text: "Pendirian PT dan pengurusan NIB selesai lebih cepat dari estimasi. Sangat profesional dan responsif terhadap pertanyaan-pertanyaan kami yang awam soal legalitas.",
    name: "Andi Pratama",
    role: "Business Owner"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-background border-y border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Dipercaya oleh Klien Kami</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-brand-light p-8 rounded-2xl border border-foreground/5 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <p className="text-foreground/70 font-light italic leading-relaxed mb-8">"{item.text}"</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">{item.name}</h4>
                <p className="text-sm text-foreground/50">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
