import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-background/90 backdrop-blur-sm fixed top-0 z-50 border-b border-foreground/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl font-bold text-foreground leading-tight">
            SYABIL BINAR
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/70">
            Amerta
          </span>
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
