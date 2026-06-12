"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const waNumber = "6285813809878";
  const defaultMessage = "Halo! Saya ingin berkonsultasi mengenai layanan CV. Syabil Binar Amerta.";

  const handleOpenWa = () => {
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(defaultMessage)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-foreground/5"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                  <div className="scale-[0.4] origin-center">
                    <Logo className="!bg-transparent !p-0 shadow-none border-none !text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm">CV. Syabil Binar Amerta</h4>
                  <p className="text-xs text-white/90 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Online sekarang
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 bg-slate-50 min-h-[120px]">
              <div className="bg-white p-4 rounded-xl rounded-tl-sm shadow-sm border border-foreground/5 relative">
                <p className="text-sm text-foreground/80 leading-relaxed pb-4">
                  Halo! Selamat datang di CV. Syabil Binar Amerta. Ada yang bisa kami bantu? Konsultasi gratis, langsung dengan tim ahli kami.
                </p>
                <span className="text-[10px] text-foreground/40 absolute bottom-2 right-3">
                  Baru saja
                </span>
              </div>
            </div>

            {/* Action */}
            <div className="p-5 bg-white border-t border-foreground/5 text-center">
              <button 
                onClick={handleOpenWa}
                className="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors mb-3 shadow-lg shadow-[#25D366]/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.47,4.53A10.42,10.42,0,0,0,12,1.5,10.51,10.51,0,0,0,3,17.21L1.5,22.5,6.92,21A10.43,10.43,0,0,0,12,22.5h0A10.51,10.51,0,0,0,22.5,12,10.42,10.42,0,0,0,19.47,4.53Zm-7.47,16.2A8.72,8.72,0,0,1,7.56,19.5L7.2,19.29,4,20.14l.86-3.13L4.62,16.6A8.75,8.75,0,0,1,12,3.27,8.81,8.81,0,0,1,18.19,5.81,8.73,8.73,0,0,1,12,20.73ZM16.8,14.15c-.26-.13-1.56-.77-1.81-.86s-.42-.13-.6.13-.69.86-.85,1.05-.31.21-.57.08A7,7,0,0,1,10.9,13.2a7.7,7.7,0,0,1-1.42-1.78c-.16-.27,0-.41.11-.54s.26-.3.39-.46a1.76,1.76,0,0,0,.26-.43.46.46,0,0,0,0-.43c-.06-.13-.6-1.44-.82-1.97-.21-.52-.42-.45-.6-.46h-.51a1,1,0,0,0-.69.32,2.89,2.89,0,0,0-.89,2.15,5,5,0,0,0,1,2.65,11.2,11.2,0,0,0,4.42,3.91,14.71,14.71,0,0,0,1.48.55,3.58,3.58,0,0,0,1.64.1,2.7,2.7,0,0,0,1.78-1.25,2.18,2.18,0,0,0,.15-1.25C17.23,14.39,17.06,14.28,16.8,14.15Z" />
                </svg>
                Mulai Konsultasi Gratis
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-xs text-foreground/50 hover:text-foreground/80 transition-colors font-medium"
              >
                Tidak, terima kasih
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 focus:outline-none"
      >
        {isOpen ? <X className="w-6 h-6" /> : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M19.47,4.53A10.42,10.42,0,0,0,12,1.5,10.51,10.51,0,0,0,3,17.21L1.5,22.5,6.92,21A10.43,10.43,0,0,0,12,22.5h0A10.51,10.51,0,0,0,22.5,12,10.42,10.42,0,0,0,19.47,4.53Zm-7.47,16.2A8.72,8.72,0,0,1,7.56,19.5L7.2,19.29,4,20.14l.86-3.13L4.62,16.6A8.75,8.75,0,0,1,12,3.27,8.81,8.81,0,0,1,18.19,5.81,8.73,8.73,0,0,1,12,20.73ZM16.8,14.15c-.26-.13-1.56-.77-1.81-.86s-.42-.13-.6.13-.69.86-.85,1.05-.31.21-.57.08A7,7,0,0,1,10.9,13.2a7.7,7.7,0,0,1-1.42-1.78c-.16-.27,0-.41.11-.54s.26-.3.39-.46a1.76,1.76,0,0,0,.26-.43.46.46,0,0,0,0-.43c-.06-.13-.6-1.44-.82-1.97-.21-.52-.42-.45-.6-.46h-.51a1,1,0,0,0-.69.32,2.89,2.89,0,0,0-.89,2.15,5,5,0,0,0,1,2.65,11.2,11.2,0,0,0,4.42,3.91,14.71,14.71,0,0,0,1.48.55,3.58,3.58,0,0,0,1.64.1,2.7,2.7,0,0,0,1.78-1.25,2.18,2.18,0,0,0,.15-1.25C17.23,14.39,17.06,14.28,16.8,14.15Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
