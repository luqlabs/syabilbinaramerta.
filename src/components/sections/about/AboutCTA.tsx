"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-24 bg-foreground relative border-t border-background/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-background mb-6">Siap Mulai Konsultasi?</h2>
          <p className="text-background/80 text-lg mb-10 max-w-2xl mx-auto">
            Tim CV. Syabil Binar Amerta siap membantu Anda. Konsultasi pertama gratis, tanpa komitmen.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://wa.me/6285813809878" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#1ebd5a] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.47,4.53A10.42,10.42,0,0,0,12,1.5,10.51,10.51,0,0,0,3,17.21L1.5,22.5,6.92,21A10.43,10.43,0,0,0,12,22.5h0A10.51,10.51,0,0,0,22.5,12,10.42,10.42,0,0,0,19.47,4.53Zm-7.47,16.2A8.72,8.72,0,0,1,7.56,19.5L7.2,19.29,4,20.14l.86-3.13L4.62,16.6A8.75,8.75,0,0,1,12,3.27,8.81,8.81,0,0,1,18.19,5.81,8.73,8.73,0,0,1,12,20.73ZM16.8,14.15c-.26-.13-1.56-.77-1.81-.86s-.42-.13-.6.13-.69.86-.85,1.05-.31.21-.57.08A7,7,0,0,1,10.9,13.2a7.7,7.7,0,0,1-1.42-1.78c-.16-.27,0-.41.11-.54s.26-.3.39-.46a1.76,1.76,0,0,0,.26-.43.46.46,0,0,0,0-.43c-.06-.13-.6-1.44-.82-1.97-.21-.52-.42-.45-.6-.46h-.51a1,1,0,0,0-.69.32,2.89,2.89,0,0,0-.89,2.15,5,5,0,0,0,1,2.65,11.2,11.2,0,0,0,4.42,3.91,14.71,14.71,0,0,0,1.48.55,3.58,3.58,0,0,0,1.64.1,2.7,2.7,0,0,0,1.78-1.25,2.18,2.18,0,0,0,.15-1.25C17.23,14.39,17.06,14.28,16.8,14.15Z" />
              </svg>
              <span>Hubungi via WhatsApp</span>
            </a>
            <Link 
              href="/#services"
              className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-background/20 text-background px-8 py-4 rounded-full text-lg font-medium hover:bg-background/5 transition-colors"
            >
              Lihat Layanan Kami
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
