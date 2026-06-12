"use client";

import { motion } from "framer-motion";

const destinations = [
  { name: "Jepang" },
  { name: "Amerika Serikat" },
  { name: "Schengen" },
  { name: "Australia" },
  { name: "Inggris (UK)" },
  { name: "China" },
  { name: "Korea Selatan" },
  { name: "Kanada" },
];

export default function DestinationsSection() {
  return (
    <section className="py-24 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-medium text-white mb-4"
        >
          Destinasi Populer
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-lg md:text-xl font-light mb-16"
        >
          Kami melayani pengurusan visa ke lebih dari 50+ negara.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-6 px-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
            >
              <h3 className="text-white font-medium text-sm md:text-base">
                {dest.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
