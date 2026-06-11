export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
        <div>
          <h2 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
            Let's Make It <br />
            <span className="text-brand-gold italic">Happen.</span>
          </h2>
          <p className="max-w-md text-background/80 text-lg">
            Boutique consulting firm specialized in Expat Visas, KITAS, and Corporate Legalities in Indonesia.
          </p>
        </div>
        
        <div className="flex flex-col md:items-end justify-end space-y-4">
          <p className="text-lg">
            <span className="block text-background/50 text-sm uppercase tracking-wider mb-1">Email Us</span>
            <a href="mailto:Fuadrenfu@gmail.com" className="hover:text-brand-gold transition-colors">
              Fuadrenfu@gmail.com
            </a>
          </p>
          <p className="text-lg md:text-right">
            <span className="block text-background/50 text-sm uppercase tracking-wider mb-1">Call Us</span>
            <a href="https://wa.me/6285813809878" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
              +62 858 1380 9878
            </a>
          </p>
          <p className="text-background/70 pt-8 md:text-right max-w-sm">
            Pondok Bahar D8 No. 10, Karang Tengah<br />
            Kota Tangerang 15158, Indonesia
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between text-sm text-background/50">
        <p>&copy; {new Date().getFullYear()} CV. Syabil Binar Amerta. All rights reserved.</p>
        <div className="space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
