"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, CheckCircle2, Building2, ShieldCheck, Clock, FileText } from "lucide-react";
import DestinationsSection from "@/components/sections/DestinationsSection";
import DocumentGuideSection from "@/components/sections/DocumentGuideSection";
import FAQSection from "@/components/sections/FAQSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        ref={containerRef}
        className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="/hero.png" 
            alt="CV Syabil Binar Amerta Hero" 
            fill 
            priority
            className="object-cover opacity-[0.15]"
          />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl text-foreground mb-6 leading-[1.1] tracking-tight">
              Solusi Lengkap <br />
              <span className="italic text-brand-gold">Visa & Perizinan</span> Bisnis Anda
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 font-light leading-relaxed"
          >
            Kami membantu individu dan perusahaan mengurus Visa ke luar negeri, Izin Tinggal & Kerja untuk ekspatriat, serta legalitas perusahaan dengan cepat, transparan, dan profesional.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="https://wa.me/6285813809878" target="_blank" rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center space-x-3 bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-gold hover:text-foreground transition-colors duration-300 group"
            >
              <span>Mulai Konsultasi</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('services');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
              className="inline-flex w-full sm:w-auto items-center justify-center space-x-3 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-foreground/5 transition-colors duration-300 cursor-pointer"
            >
              <span>Lihat Layanan</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 border-y border-foreground/5 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-foreground/10">
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <h3 className="font-serif text-5xl text-brand-gold mb-4">5.000+</h3>
            <p className="text-sm uppercase tracking-widest text-foreground/60">Visa Disetujui</p>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <h3 className="font-serif text-5xl text-brand-gold mb-4">98%</h3>
            <p className="text-sm uppercase tracking-widest text-foreground/60">Success Rate</p>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <h3 className="font-serif text-5xl text-brand-gold mb-4">10+</h3>
            <p className="text-sm uppercase tracking-widest text-foreground/60">Tahun Pengalaman</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-32 md:text-center max-w-3xl mx-auto">
            <p className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">LAYANAN UTAMA</p>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Solusi Legalitas Terpadu</h2>
            <p className="text-foreground/60 text-lg md:text-xl font-light">
              Kami menyediakan layanan end-to-end untuk kebutuhan imigrasi dan bisnis Anda.
            </p>
          </div>

          <div className="space-y-40">
            {/* Service 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <ServiceImage src="/visa.png" alt="Visa Luar Negeri" />
              <div className="space-y-8">
                <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-4xl md:text-5xl text-foreground">Visa ke Luar Negeri</h3>
                <p className="text-foreground/70 leading-relaxed text-lg font-light">
                  Pengurusan visa turis, bisnis, pelajar, hingga kerja untuk WNI yang akan bepergian ke berbagai negara.
                </p>
                <ul className="space-y-4 pt-4 border-t border-foreground/10">
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>Jepang, China, Korea</span></li>
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>Schengen & UK</span></li>
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>Amerika & Kanada</span></li>
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>Australia & New Zealand</span></li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="space-y-8 md:order-1 order-2">
                <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-4xl md:text-5xl text-foreground">Visa & Izin Kerja WNA</h3>
                <p className="text-foreground/70 leading-relaxed text-lg font-light">
                  Membantu ekspatriat dan investor asing untuk tinggal dan bekerja di Indonesia secara legal.
                </p>
                <ul className="space-y-4 pt-4 border-t border-foreground/10">
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>KITAS & KITAP</span></li>
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>Izin Kerja (IMTA)</span></li>
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>Visa Investor</span></li>
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>Multiple Entry Visa</span></li>
                </ul>
              </div>
              <div className="md:order-2 order-1">
                <ServiceImage src="/kitas.png" alt="Visa WNA" />
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <ServiceImage src="/legal.png" alt="Legalitas Perusahaan" />
              <div className="space-y-8">
                <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-4xl md:text-5xl text-foreground">Perizinan Perusahaan</h3>
                <p className="text-foreground/70 leading-relaxed text-lg font-light">
                  Jasa pendirian badan usaha dan pengurusan perizinan komersial bagi bisnis lokal maupun asing.
                </p>
                <ul className="space-y-4 pt-4 border-t border-foreground/10">
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>Pendirian PT & CV</span></li>
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>NIB & OSS</span></li>
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>SK Kemenkumham</span></li>
                  <li className="flex items-center space-x-4 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> <span>Izin Usaha Khusus</span></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 md:py-32 bg-brand-light border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">MENGAPA KAMI?</p>
              <h2 className="font-serif text-5xl text-foreground mb-6">Mitra Terpercaya untuk Dokumen Penting Anda</h2>
              <p className="text-foreground/70 text-lg font-light mb-12">
                Proses imigrasi dan legalitas bisnis seringkali rumit dan memakan waktu. Kami hadir untuk menyederhanakan birokrasi, memastikan setiap dokumen Anda diproses dengan benar sejak awal.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl text-foreground mb-2">Ahli & Berpengalaman</h4>
                    <p className="text-foreground/70 font-light">Tim kami terdiri dari praktisi legal dan spesialis imigrasi dengan pengalaman lebih dari 10 tahun.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl text-foreground mb-2">Proses Transparan</h4>
                    <p className="text-foreground/70 font-light">Status pengurusan dokumen dapat dipantau kapan saja. Tidak ada biaya tersembunyi.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl text-foreground mb-2">Cepat & Tepat Waktu</h4>
                    <p className="text-foreground/70 font-light">Komitmen SLA (Service Level Agreement) yang jelas untuk setiap layanan yang kami berikan.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-full min-h-[400px]">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/legal.png" alt="Legal" fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                <Image src="/hero.png" alt="Team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Steps Process */}
      <section id="process" className="py-16 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl text-foreground mb-4">Proses Sederhana 4 Langkah</h2>
            <p className="text-foreground/60 text-lg font-light">Kami membuat pengurusan dokumen menjadi sangat mudah.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-foreground/10 z-0"></div>

            {[
              { num: 1, title: "Konsultasi", desc: "Diskusikan kebutuhan Anda dengan tim konsultan kami secara gratis." },
              { num: 2, title: "Penyiapan Dokumen", desc: "Kami akan memberikan daftar checklist dokumen dan membantu pengisian form." },
              { num: 3, title: "Proses Aplikasi", desc: "Tim kami akan memproses aplikasi ke kedutaan atau instansi terkait." },
              { num: 4, title: "Selesai & Pengiriman", desc: "Visa atau dokumen izin Anda siap dan akan dikirimkan langsung ke alamat Anda." }
            ].map((step) => (
              <div key={step.num} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-foreground text-brand-gold flex items-center justify-center font-serif text-3xl mb-6 shadow-xl border-4 border-background transition-transform hover:scale-110 duration-300">
                  {step.num}
                </div>
                <h4 className="font-medium text-xl text-foreground mb-3">{step.title}</h4>
                <p className="text-foreground/60 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <DestinationsSection />

      {/* Document Guide Section */}
      <DocumentGuideSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Articles / Blog Section */}
      <ArticlesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

    </div>
  );
}

function ServiceImage({ src, alt }: { src: string, alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // Parallax subtle effect on the image container
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-foreground/5 rounded-md">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </motion.div>
    </div>
  );
}
