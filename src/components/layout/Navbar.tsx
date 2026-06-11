import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link href="/" className="group scale-75 md:scale-90 origin-left hover:scale-[0.78] md:hover:scale-95 transition-transform duration-300">
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center space-x-10 text-sm font-medium tracking-wide">
          <Link href="#services" className="hover:text-brand-gold transition-colors">Layanan</Link>
          <Link href="#why-us" className="hover:text-brand-gold transition-colors">Keunggulan</Link>
          <Link href="#process" className="hover:text-brand-gold transition-colors">Proses</Link>
          <Link href="#about" className="hover:text-brand-gold transition-colors">Tentang Kami</Link>
          <Link href="#faq" className="hover:text-brand-gold transition-colors">FAQ</Link>
        </div>

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
    </nav>
  );
}
