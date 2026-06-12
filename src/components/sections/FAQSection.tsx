"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Tipe data ini sangat mudah dipetakan dari Headless CMS (Sanity, Contentful, dll)
type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

// Mock data sebagai placeholder sebelum API CMS disambungkan
const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Berapa lama proses pembuatan visa wisata?",
    answer: "Lama proses bervariasi tergantung negara tujuan. Umumnya memakan waktu 5-15 hari kerja setelah dokumen diserahkan ke kedutaan. Kami menyarankan Anda untuk memulai proses minimal 1 bulan sebelum jadwal keberangkatan."
  },
  {
    id: "faq-2",
    question: "Apakah pembayaran dilakukan di awal?",
    answer: "Untuk layanan visa, pembayaran jasa dan biaya embassy dibayarkan di awal. Untuk layanan perizinan perusahaan dan KITAS, pembayaran dapat dilakukan secara bertahap (DP dan pelunasan)."
  },
  {
    id: "faq-3",
    question: "Apakah ada jaminan visa pasti disetujui?",
    answer: "Keputusan persetujuan visa sepenuhnya adalah hak prerogatif kedutaan/konsulat negara terkait. Namun, kami memastikan seluruh dokumen Anda lengkap dan memenuhi syarat standar tertinggi untuk memaksimalkan peluang persetujuan. Tingkat keberhasilan klien kami adalah 98%."
  },
  {
    id: "faq-4",
    question: "Berapa biaya pengurusan pendirian PT?",
    answer: "Biaya pendirian PT bervariasi tergantung pada skala perusahaan dan izin tambahan yang dibutuhkan. Silakan hubungi tim kami untuk mendapatkan penawaran harga yang disesuaikan dengan kebutuhan bisnis Anda."
  }
];

function FAQAccordion({ 
  item, 
  isOpen, 
  onToggle 
}: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void; 
}) {
  return (
    <div className="border-b border-foreground/10 last:border-0">
      <button 
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <h4 className="font-medium text-lg text-foreground group-hover:text-brand-gold transition-colors">{item.question}</h4>
        <ChevronDown className={`w-5 h-5 text-foreground/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-foreground/70 font-light leading-relaxed pr-8">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Pertanyaan Umum</h2>
        </div>
        <div className="flex flex-col">
          {faqData.map((item) => (
            <FAQAccordion 
              key={item.id} 
              item={item} 
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
