import Image from "next/image";
import { Globe, CheckCircle2, Building2, ShieldCheck, Clock, FileText } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import DocumentGuideSection from "@/components/sections/DocumentGuideSection";
import FAQSection from "@/components/sections/FAQSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import ServiceImage from "@/components/ui/ServiceImage";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

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
            <h3 className="font-serif text-5xl text-brand-gold mb-4">5+</h3>
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
            <div id="visa-luar-negeri" className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center scroll-mt-24">
              <ServiceImage src="/visa.png" alt="Visa Luar Negeri" />
              <div className="space-y-8">
                <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-4xl md:text-5xl text-foreground">Visa ke Luar Negeri</h3>
                <p className="text-foreground/70 leading-relaxed text-lg font-light">
                  Pengurusan visa turis dan bisnis untuk WNI yang akan bepergian ke berbagai negara.
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
            <div id="visa-wna" className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center scroll-mt-24">
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
            <div id="perizinan-perusahaan" className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center scroll-mt-24">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
                    <h3 className="font-medium text-xl text-foreground mb-2">Ahli & Berpengalaman</h3>
                    <p className="text-foreground/70 font-light">Tim kami terdiri dari praktisi legal dan spesialis imigrasi dengan pengalaman lebih dari 5 tahun.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl text-foreground mb-2">Proses Transparan</h3>
                    <p className="text-foreground/70 font-light">Status pengurusan dokumen dapat dipantau kapan saja. Tidak ada biaya tersembunyi.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl text-foreground mb-2">Cepat & Tepat Waktu</h3>
                    <p className="text-foreground/70 font-light">Komitmen SLA (Service Level Agreement) yang jelas untuk setiap layanan yang kami berikan.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Minimalist image without absolute overlap hacks or Unsplash */}
            <div className="w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-background relative">
              <Image src="/legal.png" alt="Legal" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
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
                <h3 className="font-medium text-xl text-foreground mb-3">{step.title}</h3>
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
