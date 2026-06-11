"use client";

import { motion } from "framer-motion";

const destinations = [
  "Jepang",
  "Amerika Serikat",
  "Schengen",
  "Australia",
  "Inggris (UK)",
  "China",
  "Korea Selatan",
  "Kanada"
];

export default function DestinationsSection() {
  return (
    <section className="py-32 bg-brand-dark text-background">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-serif text-5xl mb-6">Destinasi Populer</h2>
        <p className="text-background/70 text-lg font-light mb-16">
          Kami melayani pengurusan visa ke lebih dari 50+ negara.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 hover:border-white/30 transition-colors py-6 px-4 rounded-xl cursor-pointer"
            >
              <h4 className="font-medium">{dest}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
