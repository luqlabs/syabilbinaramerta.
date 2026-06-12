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
    estimate: "Estimasi proses: 5–10 hari kerja",
    bullets: [
      "Paspor asli (berlaku minimal 6 bulan, ada halaman kosong min. 2)",
      "Formulir aplikasi visa Jepang (diisi lengkap)",
      "Foto terbaru 4,5 x 4,5 cm (background putih, wajah 70–80%)",
      "KTP asli dan fotokopi",
      "Kartu Keluarga (KK)",
      "Akta kelahiran / akta nikah (jika relevan)",
      "Rekening koran 3 bulan terakhir (saldo minimal Rp 20 juta)",
      "Surat keterangan kerja / SIUP bagi wiraswasta",
      "Booking tiket pesawat pulang-pergi",
      "Booking hotel / bukti akomodasi"
    ],
    note: "Persyaratan di atas bersifat umum dan dapat berubah sewaktu-waktu sesuai kebijakan kedutaan. Konsultasikan kebutuhan Anda dengan tim kami untuk informasi terkini."
  },
  { 
    prefix: "EU", 
    title: "Schengen (Eropa)", 
    estimate: "Estimasi proses: 10–15 hari kerja", 
    bullets: [
      "Paspor asli (berlaku min. 3 bulan setelah tanggal kembali ke Indonesia)",
      "Formulir aplikasi visa Schengen",
      "Foto terbaru 3,5 x 4,5 cm (background putih)",
      "Asuransi perjalanan min. €30.000 (berlaku seluruh wilayah Schengen)",
      "Rekening koran 3–6 bulan terakhir (saldo mencukupi biaya perjalanan)",
      "Surat keterangan kerja / surat izin usaha",
      "Booking tiket pesawat pulang-pergi",
      "Booking hotel seluruh masa perjalanan",
      "Itinerary perjalanan detail",
      "KTP, KK, Akta kelahiran",
      "NPWP (jika ada)"
    ],
    note: "Persyaratan di atas bersifat umum dan dapat berubah sewaktu-waktu sesuai kebijakan kedutaan. Konsultasikan kebutuhan Anda dengan tim kami untuk informasi terkini."
  },
  { 
    prefix: "CN", 
    title: "China", 
    estimate: "Estimasi proses: 4–7 hari kerja", 
    bullets: [
      "Paspor asli (berlaku minimal 6 bulan)",
      "Formulir aplikasi visa China V.2013 (diisi online atau manual)",
      "Foto terbaru 3,3 x 4,8 cm (background putih)",
      "KTP fotokopi",
      "Rekening koran 3 bulan terakhir (saldo min. USD 1.000)",
      "Booking tiket pesawat pulang-pergi",
      "Booking hotel / surat undangan (jika dikunjungi teman/keluarga)",
      "Itinerary perjalanan",
      "Surat keterangan kerja / SIUP"
    ],
    note: "Persyaratan di atas bersifat umum dan dapat berubah sewaktu-waktu sesuai kebijakan kedutaan. Konsultasikan kebutuhan Anda dengan tim kami untuk informasi terkini."
  },
  { 
    prefix: "AU", 
    title: "Australia", 
    estimate: "Estimasi proses: 7–14 hari kerja", 
    bullets: [
      "Paspor asli (berlaku minimal 6 bulan)",
      "Akun ImmiAccount Australia (pendaftaran online)",
      "Foto digital (format JPEG, ukuran standar)",
      "Rekening koran 3–6 bulan (saldo mencukupi biaya tinggal di Australia)",
      "Surat keterangan kerja / SIUP",
      "Booking tiket pesawat pulang-pergi",
      "Bukti akomodasi (booking hotel atau surat undangan)",
      "Asuransi perjalanan",
      "KTP dan KK"
    ],
    note: "Persyaratan di atas bersifat umum dan dapat berubah sewaktu-waktu sesuai kebijakan kedutaan. Konsultasikan kebutuhan Anda dengan tim kami untuk informasi terkini."
  },
  { 
    prefix: "KR", 
    title: "Korea Selatan", 
    estimate: "Estimasi proses: 5–7 hari kerja", 
    bullets: [
      "Paspor asli (berlaku minimal 6 bulan)",
      "Formulir aplikasi visa Korea",
      "Foto terbaru 3,5 x 4,5 cm (background putih)",
      "KTP dan KK",
      "Rekening koran 3 bulan (saldo min. USD 3.000 untuk single entry)",
      "Surat keterangan kerja / surat izin usaha",
      "Booking tiket pesawat pulang-pergi",
      "Booking hotel / bukti akomodasi"
    ],
    note: "Persyaratan di atas bersifat umum dan dapat berubah sewaktu-waktu sesuai kebijakan kedutaan. Konsultasikan kebutuhan Anda dengan tim kami untuk informasi terkini."
  },
  { 
    prefix: "US", 
    title: "Amerika Serikat", 
    estimate: "Estimasi proses: 1–3 bulan (termasuk antrian interview)", 
    bullets: [
      "Paspor asli (berlaku minimal 6 bulan)",
      "Formulir DS-160 (diisi online di ceac.state.gov)",
      "Foto digital standar US visa",
      "Bukti keuangan kuat (rekening koran, aset, investasi)",
      "Bukti ikatan kuat dengan Indonesia (properti, keluarga, pekerjaan tetap)",
      "Surat keterangan kerja + slip gaji",
      "Booking tiket pesawat & hotel (sebagai referensi)",
      "Interview langsung di Kedubes/Konsulat AS",
      "KTP, KK, Akta kelahiran"
    ],
    note: "Persyaratan di atas bersifat umum dan dapat berubah sewaktu-waktu sesuai kebijakan kedutaan. Konsultasikan kebutuhan Anda dengan tim kami untuk informasi terkini."
  },
  { 
    prefix: "GB", 
    title: "Inggris (UK)", 
    estimate: "Estimasi proses: 3 minggu", 
    bullets: [
      "Paspor asli (berlaku selama masa tinggal di UK + 6 bulan)",
      "Formulir aplikasi online (UK Visas and Immigration)",
      "Foto digital standar UK visa",
      "Rekening koran 6 bulan terakhir",
      "Surat keterangan kerja / SIUP",
      "Booking tiket pesawat pulang-pergi",
      "Bukti akomodasi (hotel atau surat undangan)",
      "Perekaman sidik jari di VAC (Visa Application Centre)",
      "KTP, KK, Akta kelahiran"
    ],
    note: "Persyaratan di atas bersifat umum dan dapat berubah sewaktu-waktu sesuai kebijakan kedutaan. Konsultasikan kebutuhan Anda dengan tim kami untuk informasi terkini."
  },
  { 
    prefix: "CA", 
    title: "Kanada", 
    estimate: "Estimasi proses: 2–8 minggu", 
    bullets: [
      "Paspor asli (berlaku minimal 6 bulan)",
      "Formulir aplikasi online (IRCC Canada)",
      "Foto digital standar",
      "Rekening koran 6 bulan terakhir",
      "Surat keterangan kerja + slip gaji",
      "Bukti keuangan yang kuat",
      "Booking tiket pesawat & hotel",
      "Itinerary perjalanan",
      "Riwayat visa sebelumnya (jika ada visa US/UK/Schengen aktif, proses lebih mudah)"
    ],
    note: "Persyaratan di atas bersifat umum dan dapat berubah sewaktu-waktu sesuai kebijakan kedutaan. Konsultasikan kebutuhan Anda dengan tim kami untuk informasi terkini."
  }
];

const imigrasiDocs: GuideItem[] = [
  { 
    title: "KITAS (Kartu Izin Tinggal Terbatas)", 
    estimate: "Estimasi proses: 14–30 hari kerja", 
    desc: "Izin tinggal sementara bagi WNA yang bekerja, berinvestasi, atau menetap di Indonesia.",
    bullets: [
      "Paspor asli WNA (berlaku minimal 18 bulan)",
      "Foto terbaru (background merah, 4×6 cm)",
      "Surat sponsor dari perusahaan / pasangan / keluarga WNI",
      "Akta pendirian perusahaan sponsor (PT / CV)",
      "NPWP perusahaan sponsor",
      "Surat keterangan domisili perusahaan",
      "Izin usaha perusahaan (NIB / SIUP)",
      "Surat pernyataan dari WNA",
      "Tiket pulang-pergi ke negara asal (untuk konversi dari visa kunjungan)",
      "Bukti akomodasi / tempat tinggal di Indonesia"
    ]
  },
  { 
    title: "KITAP (Kartu Izin Tinggal Tetap)", 
    estimate: "Estimasi proses: 30–60 hari kerja", 
    desc: "Izin tinggal permanen bagi WNA yang telah memiliki KITAS selama minimal 5 tahun berturut-turut atau menikah dengan WNI.",
    bullets: [
      "Paspor asli WNA (berlaku minimal 18 bulan)",
      "KITAS aktif (minimal sudah 5 tahun, atau menikah dengan WNI)",
      "Foto terbaru (background merah)",
      "Surat sponsor (perusahaan atau pasangan WNI)",
      "Akta nikah yang dilegalisir (untuk KITAP suami/istri WNI)",
      "KTP pasangan WNI",
      "Kartu Keluarga (KK)",
      "NPWP WNA (jika bekerja)",
      "Surat tidak pernah melanggar hukum (SKCK dari kepolisian)",
      "Surat pernyataan dari WNA"
    ]
  },
  { 
    title: "Izin Kerja WNA (IMTA / Notifikasi TKA)", 
    estimate: "Estimasi proses: 7–14 hari kerja", 
    desc: "Izin resmi bagi WNA untuk bekerja di perusahaan Indonesia, diterbitkan oleh Kemnaker.",
    bullets: [
      "Paspor WNA (berlaku minimal 18 bulan)",
      "Foto WNA (4×6 cm, background merah)",
      "Ijazah / sertifikat keahlian WNA yang relevan",
      "CV / riwayat hidup WNA",
      "Surat perjanjian kerja (kontrak kerja) antara WNA dan perusahaan",
      "Akta perusahaan dan NIB",
      "NPWP perusahaan",
      "Struktur organisasi perusahaan (menunjukkan posisi WNA)",
      "Rencana penggunaan TKA (RPTKA) yang sudah disetujui",
      "Asuransi kesehatan WNA (BPJS atau asuransi swasta)"
    ]
  },
  { 
    title: "Visa Investor / Visa Bisnis (B211A)", 
    estimate: "Estimasi proses: 5–10 hari kerja", 
    desc: "Visa untuk WNA yang akan melakukan kegiatan investasi atau bisnis di Indonesia.",
    bullets: [
      "Paspor WNA (berlaku minimal 18 bulan)",
      "Foto terbaru",
      "Surat undangan dari mitra bisnis / perusahaan di Indonesia",
      "Bukti kegiatan bisnis / investasi (MOU, perjanjian, dll.)",
      "Rekening koran perusahaan asing (3 bulan terakhir)",
      "Profil perusahaan asing",
      "Itinerary kegiatan bisnis di Indonesia",
      "Asuransi perjalanan / kesehatan"
    ]
  }
];

const legalitasDocs: GuideItem[] = [
  { 
    title: "NIB (Nomor Induk Berusaha)", 
    estimate: "Estimasi proses: 1–3 hari kerja", 
    desc: "Identitas tunggal pelaku usaha yang wajib dimiliki semua jenis usaha di Indonesia, diterbitkan melalui OSS.",
    bullets: [
      "KTP pendiri / penanggung jawab usaha",
      "NPWP pribadi pendiri",
      "Nomor telepon dan email aktif",
      "Akta pendirian perusahaan (jika sudah berbadan hukum)",
      "Data KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) yang sesuai bidang usaha",
      "Alamat usaha / domisili tempat usaha",
      "Modal usaha (jumlah yang akan dicantumkan)"
    ]
  },
  { 
    title: "Akta Pendirian PT / CV (Notaris)", 
    estimate: "Estimasi proses: 3–7 hari kerja", 
    desc: "Dokumen hukum resmi yang menjadi dasar berdirinya perusahaan, dibuat oleh notaris berwenang.",
    bullets: [
      "KTP seluruh pendiri / pemegang saham",
      "KK seluruh pendiri",
      "NPWP pribadi seluruh pendiri",
      "Foto 3×4 seluruh pendiri",
      "Nama perusahaan yang akan digunakan (3 pilihan)",
      "Alamat lengkap kantor / domisili usaha",
      "Bidang usaha (KBLI)",
      "Besaran modal dasar dan modal disetor",
      "Struktur kepemilikan saham (persentase masing-masing pendiri)",
      "Susunan direksi dan komisaris"
    ]
  },
  { 
    title: "SK Kemenkumham (Pengesahan PT)", 
    estimate: "Estimasi proses: 7–14 hari kerja", 
    desc: "Surat Keputusan pengesahan badan hukum PT dari Kementerian Hukum dan HAM RI.",
    bullets: [
      "Akta pendirian PT yang sudah ditandatangani notaris",
      "Bukti setor modal ke rekening PT (minimal 25% dari modal disetor)",
      "NPWP PT (bisa diurus bersamaan)",
      "Surat pernyataan dari notaris",
      "Data lengkap direksi dan komisaris (KTP + NPWP)",
      "Alamat kantor yang sah",
      "Dokumen pendukung dari notaris"
    ]
  },
  { 
    title: "Izin Usaha Sektoral (SIUP, Izin Khusus, dll.)", 
    estimate: "Estimasi proses: 7–21 hari kerja", 
    desc: "Izin operasional khusus sesuai bidang usaha, seperti izin perdagangan, jasa, atau industri tertentu.",
    bullets: [
      "NIB yang sudah terbit",
      "Akta pendirian perusahaan + SK Kemenkumham",
      "NPWP perusahaan",
      "KTP direktur / penanggung jawab",
      "Surat keterangan domisili usaha (dari kelurahan/kecamatan)",
      "Foto kantor / tempat usaha",
      "Deskripsi kegiatan usaha",
      "Dokumen teknis sesuai jenis izin (misal: izin lingkungan, HO, dll.)"
    ]
  }
];

function Accordion({ 
  item, 
  isOpen, 
  onToggle 
}: { 
  item: GuideItem; 
  isOpen: boolean; 
  onToggle: () => void; 
}) {
  return (
    <div className="border border-foreground/10 rounded-xl mb-4 overflow-hidden bg-white/50 hover:bg-white transition-colors">
      <button 
        onClick={onToggle}
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
  const [openVisaId, setOpenVisaId] = useState<string | null>(null);
  const [openImigrasiId, setOpenImigrasiId] = useState<string | null>(null);
  const [openLegalitasId, setOpenLegalitasId] = useState<string | null>(null);

  return (
    <section id="guide" className="py-32 bg-brand-light border-y border-foreground/5">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Visa Requirements */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">PANDUAN DOKUMEN</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Persyaratan Visa per Negara</h2>
            <p className="text-foreground/60 text-lg font-light">Berikut adalah dokumen umum yang dibutuhkan untuk pengajuan visa. Tim kami siap membantu melengkapi setiap persyaratan.</p>
          </div>
          <div className="space-y-4">
            {visaCountries.map((item, i) => (
              <Accordion 
                key={i} 
                item={item} 
                isOpen={openVisaId === item.title}
                onToggle={() => setOpenVisaId(openVisaId === item.title ? null : item.title)}
              />
            ))}
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
              {imigrasiDocs.map((item, i) => (
                <Accordion 
                  key={i} 
                  item={item} 
                  isOpen={openImigrasiId === item.title}
                  onToggle={() => setOpenImigrasiId(openImigrasiId === item.title ? null : item.title)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 font-medium text-xl text-foreground mb-6">
              <span className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm">PT</span>
              Perizinan Perusahaan & Legalitas Usaha
            </h3>
            <div className="space-y-4">
              {legalitasDocs.map((item, i) => (
                <Accordion 
                  key={i} 
                  item={item} 
                  isOpen={openLegalitasId === item.title}
                  onToggle={() => setOpenLegalitasId(openLegalitasId === item.title ? null : item.title)}
                />
              ))}
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
