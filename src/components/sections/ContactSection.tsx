"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, service, message } = formData;
    
    // Construct WhatsApp message
    const waNumber = "6285813809878";
    const text = `Halo tim CV Syabil Binar Amerta, saya ingin berkonsultasi.%0A%0A*Nama:* ${name}%0A*Nomor HP:* ${phone}%0A*Email:* ${email || '-'}%0A*Layanan:* ${service}%0A*Pesan:* ${message}`;
    
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info (Left) */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-5xl text-foreground mb-6">Hubungi Kami</h2>
              <p className="text-foreground/70 text-lg font-light leading-relaxed">
                Punya pertanyaan mengenai visa atau perizinan bisnis? Tim konsultan kami siap membantu Anda. Konsultasi awal bebas biaya.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0 text-foreground">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-foreground mb-1">Kantor Pusat</h4>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    Pondok Bahar D8 No. 10<br />
                    Tangerang, Banten<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0 text-foreground">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-foreground mb-1">Telepon & WhatsApp</h4>
                  <p className="text-foreground/70 font-light">
                    +62 858-1380-9878<br />
                    WhatsApp: 085813809878
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0 text-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-foreground mb-1">Email</h4>
                  <p className="text-foreground/70 font-light">
                    syabilbinaramerta@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0 text-foreground">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-foreground mb-1">Jam Operasional</h4>
                  <p className="text-foreground/70 font-light">
                    Senin - Jumat: 09:00 - 17:00 WIB<br />
                    Sabtu: 09:00 - 13:00 WIB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-foreground/5 relative"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-serif text-foreground mb-2">Kirim Pesan via WhatsApp</h3>
              <p className="text-foreground/60 text-sm font-light">Isi form di bawah, lalu pesan Anda akan otomatis terkirim ke WhatsApp kami.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-foreground/80 mb-2">Nama Lengkap <span className="text-red-500">*</span></label>
                <input 
                  type="text" name="name" required
                  value={formData.name} onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm text-foreground/80 mb-2">Email</label>
                <input 
                  type="email" name="email"
                  value={formData.email} onChange={handleChange}
                  placeholder="email@contoh.com"
                  className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm text-foreground/80 mb-2">Nomor Telepon / WhatsApp <span className="text-red-500">*</span></label>
                <input 
                  type="tel" name="phone" required
                  value={formData.phone} onChange={handleChange}
                  placeholder="0812..."
                  className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm text-foreground/80 mb-2">Layanan yang Dibutuhkan <span className="text-red-500">*</span></label>
                <select 
                  name="service" required
                  value={formData.service} onChange={handleChange}
                  className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light text-foreground appearance-none"
                >
                  <option value="" disabled>Pilih layanan...</option>
                  <option value="Visa Luar Negeri">Visa ke Luar Negeri</option>
                  <option value="KITAS / KITAP WNA">Visa & Izin Kerja WNA (KITAS/KITAP)</option>
                  <option value="Perizinan Perusahaan">Perizinan Perusahaan (PT/CV)</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-foreground/80 mb-2">Pesan</label>
                <textarea 
                  name="message" rows={4}
                  value={formData.message} onChange={handleChange}
                  placeholder="Ceritakan detail kebutuhan Anda..."
                  className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light text-foreground resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#25D366] text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#1ebd5a] transition-colors shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2"
              >
                <span>Kirim via WhatsApp</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
