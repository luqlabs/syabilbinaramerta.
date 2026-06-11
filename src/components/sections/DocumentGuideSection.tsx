"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";

type GuideItem = {
  title: string;
  estimate: string;
  desc?: string;
  bullets?: string[];
  note?: string;
  prefix?: string;
};

const visaCountries: GuideItem[] = [
  { 
    prefix: "JP", 
    title: "Jepang", 
    estimate: "Estimasi proses: 5-10 hari kerja",
    bullets: [
      "Paspor asli (berlaku minimal 6 bulan, ada halaman kosong min. 2)",
      "Formulir aplikasi visa Jepang (diisi lengkap)",
      "Foto terbaru 4,5 x 4,5 cm (background putih, wajah 70-80%)",
      "KTP asli dan fotokopi",
      "Kartu Keluarga (KK)",
      "Akta kelahiran / akta nikah (jika relevan)",
      "Rekening koran 3 bulan terakhir (saldo minimal Rp 20 juta)",
      "Surat keterangan kerja / SIUP bagi wiraswasta",
      "Booking tiket pesawat pulang-pergi",
      "Booking hotel / bukti akomodasi",
      "Itinerary perjalanan selama di Jepang"
    ],
    note: "Persyaratan di atas bersifat umum dan dapat berubah sewaktu-waktu sesuai kebijakan kedutaan. Konsultasikan kebutuhan Anda dengan tim kami untuk informasi terkini."
  },
  { prefix: "EU", title: "Schengen (Eropa)", estimate: "Estimasi proses: 10-15 hari kerja", desc: "Silakan hubungi kami untuk daftar persyaratan lengkap Schengen." },
  { prefix: "CN", title: "China", estimate: "Estimasi proses: 4-7 hari kerja", desc: "Silakan hubungi kami untuk daftar persyaratan lengkap China." },
  { prefix: "AU", title: "Australia", estimate: "Estimasi proses: 7-14 hari kerja", desc: "Silakan hubungi kami untuk daftar persyaratan lengkap Australia." },
  { prefix: "KR", title: "Korea Selatan", estimate: "Estimasi proses: 5-7 hari kerja", desc: "Silakan hubungi kami untuk daftar persyaratan lengkap Korea Selatan." },
  { prefix: "US", title: "Amerika Serikat", estimate: "Estimasi proses: 1-3 bulan (termasuk antrian interview)", desc: "Silakan hubungi kami untuk daftar persyaratan lengkap Amerika Serikat." },
  { prefix: "GB", title: "Inggris (UK)", estimate: "Estimasi proses: 3 minggu", desc: "Silakan hubungi kami untuk daftar persyaratan lengkap Inggris." },
  { prefix: "CA", title: "Kanada", estimate: "Estimasi proses: 2-8 minggu", desc: "Silakan hubungi kami untuk daftar persyaratan lengkap Kanada." },
];

const imigrasiDocs: GuideItem[] = [
  { title: "KITAS (Kartu Izin Tinggal Terbatas)", estimate: "Estimasi proses: 14-30 hari kerja", desc: "Izin tinggal sementara bagi WNA yang bekerja, berinvestasi, atau menetap di Indonesia." },
  { title: "KITAP (Kartu Izin Tinggal Tetap)", estimate: "Estimasi proses: 30-60 hari kerja", desc: "Izin tinggal permanen bagi WNA yang telah memiliki KITAS selama minimal 5 tahun berturut-turut atau menikah dengan WNI." },
  { title: "Izin Kerja WNA (IMTA / Notifikasi TKA)", estimate: "Estimasi proses: 7-14 hari kerja", desc: "Izin resmi bagi WNA untuk bekerja di perusahaan Indonesia, diterbitkan oleh Kemnaker." },
  { title: "Visa Investor / Visa Bisnis (B211A)", estimate: "Estimasi proses: 5-10 hari kerja", desc: "Visa untuk WNA yang akan melakukan kegiatan investasi atau bisnis di Indonesia." },
];

const legalitasDocs: GuideItem[] = [
  { title: "NIB (Nomor Induk Berusaha)", estimate: "Estimasi proses: 1-3 hari kerja", desc: "Identitas tunggal pelaku usaha yang wajib dimiliki semua jenis usaha di Indonesia, diterbitkan melalui OSS." },
  { title: "Akta Pendirian PT / CV (Notaris)", estimate: "Estimasi proses: 3-7 hari kerja", desc: "Dokumen hukum resmi yang menjadi dasar berdirinya perusahaan, dibuat oleh notaris berwenang." },
  { title: "SK Kemenkumham (Pengesahan PT)", estimate: "Estimasi proses: 7-14 hari kerja", desc: "Surat Keputusan pengesahan badan hukum PT dari Kementerian Hukum dan HAM RI." },
  { title: "Izin Usaha Sektoral (SIUP, Izin Khusus, dll.)", estimate: "Estimasi proses: 7-21 hari kerja", desc: "Izin operasional khusus sesuai bidang usaha, seperti izin perdagangan, jasa, atau industri tertentu." },
];

function Accordion({ item }: { item: GuideItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-foreground/10 rounded-xl mb-4 overflow-hidden bg-white/50 hover:bg-white transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-6">
          {item.prefix && <span className="font-serif text-xl text-brand-gold w-8">{item.prefix}</span>}
          <div>
            <h4 className="font-medium text-lg text-foreground">{item.title}</h4>
            <p className="text-sm text-foreground/60">{item.estimate}</p>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-foreground/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (item.desc || item.bullets) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-2 pl-[5.5rem] border-t border-foreground/5">
              {item.desc && <p className="text-foreground/70 font-light mb-4">{item.desc}</p>}
              
              {item.bullets && (
                <ul className="space-y-3 mb-6">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/70 font-light text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.note && (
                <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-lg p-4 text-brand-gold/90 text-sm font-light leading-relaxed">
                  {item.note}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DocumentGuideSection() {
  return (
    <section id="faq" className="py-32 bg-brand-light border-y border-foreground/5">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Visa Requirements */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">PANDUAN DOKUMEN</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Persyaratan Visa per Negara</h2>
            <p className="text-foreground/60 text-lg font-light">Berikut adalah dokumen umum yang dibutuhkan untuk pengajuan visa. Tim kami siap membantu melengkapi setiap persyaratan.</p>
          </div>
          <div className="space-y-4">
            {visaCountries.map((item, i) => <Accordion key={i} item={item} />)}
          </div>
        </div>

        {/* Imigrasi & Legalitas */}
        <div>
          <div className="text-center mb-12">
            <p className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">PANDUAN DOKUMEN</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Persyaratan Imigrasi & Perizinan Perusahaan</h2>
            <p className="text-foreground/60 text-lg font-light">Dokumen yang diperlukan untuk layanan KITAS, KITAP, izin kerja WNA, dan pendirian / perizinan usaha di Indonesia.</p>
          </div>
          
          <div className="mb-12">
            <h3 className="flex items-center gap-3 font-medium text-xl text-foreground mb-6">
              <span className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm">WNA</span>
              Visa & Izin Tinggal untuk Orang Asing (WNA)
            </h3>
            <div className="space-y-4">
              {imigrasiDocs.map((item, i) => <Accordion key={i} item={item} />)}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 font-medium text-xl text-foreground mb-6">
              <span className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm">PT</span>
              Perizinan Perusahaan & Legalitas Usaha
            </h3>
            <div className="space-y-4">
              {legalitasDocs.map((item, i) => <Accordion key={i} item={item} />)}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-foreground/70 mb-6">Ada pertanyaan tentang dokumen yang dibutuhkan? Hubungi kami langsung.</p>
          <a 
            href="https://wa.me/6285813809878" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#1ebd5a] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <span>Konsultasi Persyaratan via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
