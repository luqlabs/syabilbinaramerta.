"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDarkBg = pathname?.startsWith("/artikel") && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Sembunyikan Navbar sepenuhnya di halaman detail artikel
  if (pathname?.startsWith("/artikel/")) {
    return null;
  }

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0A1128]/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link href="/" className="group scale-75 md:scale-90 origin-left hover:scale-[0.78] md:hover:scale-95 transition-transform duration-300">
          <Logo />
        </Link>

        <div className={`hidden lg:flex items-center space-x-10 text-sm font-medium tracking-wide ${isDarkBg ? "text-white/90" : "text-foreground"}`}>
          <Link href="/#services" className={`transition-colors cursor-pointer ${isDarkBg ? "hover:text-white" : "hover:text-brand-gold"}`}>Layanan</Link>
          <Link href="/#why-us" className={`transition-colors cursor-pointer ${isDarkBg ? "hover:text-white" : "hover:text-brand-gold"}`}>Keunggulan</Link>
          <Link href="/#process" className={`transition-colors cursor-pointer ${isDarkBg ? "hover:text-white" : "hover:text-brand-gold"}`}>Proses</Link>
          <Link href="/tentang-kami" className={`transition-colors cursor-pointer ${isDarkBg ? "hover:text-white" : "hover:text-brand-gold"}`}>Tentang Kami</Link>
          <Link href="/#faq" className={`transition-colors cursor-pointer ${isDarkBg ? "hover:text-white" : "hover:text-brand-gold"}`}>FAQ</Link>
        </div>

        <div className="hidden lg:flex items-center">
          <a 
            href="https://wa.me/6285813809878" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-foreground text-background px-6 py-3 rounded-full hover:bg-brand-gold hover:text-foreground transition-all duration-300 font-medium group"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Consult Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className={`w-6 h-6 ${isDarkBg ? "text-white" : "text-foreground"}`} />
        </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background z-[60] lg:hidden overflow-y-auto transition-transform duration-500 ease-[0.22,1,0.36,1] ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-6">
            <div className="scale-75 origin-left">
              <Logo />
            </div>
            <button 
              className="p-2 bg-foreground/5 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-grow flex flex-col justify-center px-8 space-y-8">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/#services" className="text-3xl font-serif text-foreground">Layanan</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/#why-us" className="text-3xl font-serif text-foreground">Keunggulan</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/#process" className="text-3xl font-serif text-foreground">Proses</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/tentang-kami" className="text-3xl font-serif text-foreground">Tentang Kami</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/artikel" className="text-3xl font-serif text-foreground">Artikel & Tips</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/#faq" className="text-3xl font-serif text-foreground">FAQ</Link>
          </div>

          {/* Mobile Footer */}
          <div className="p-8 pb-12">
            <a 
              href="https://wa.me/6285813809878" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-foreground text-background px-6 py-4 rounded-full font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>Hubungi Konsultan</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
