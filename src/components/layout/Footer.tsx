import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0b1120] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 lg:col-span-4 pr-0 lg:pr-12">
            <div className="mb-8 transform scale-90 origin-left">
              <Logo />
            </div>
            <p className="text-white/60 leading-relaxed font-light text-sm">
              Solusi Lengkap Visa & Perizinan Bisnis Anda. Konsultan terpercaya untuk pengurusan imigrasi dan legalitas korporasi di Indonesia.
            </p>
          </div>

          {/* Spacer for large screens */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Layanan */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-medium mb-6">Layanan</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li><Link href="/#visa-luar-negeri" className="hover:text-white transition-colors">Visa Turis & Bisnis</Link></li>
              <li><Link href="/#visa-wna" className="hover:text-white transition-colors">KITAS & IMTA</Link></li>
              <li><Link href="/#perizinan-perusahaan" className="hover:text-white transition-colors">Pendirian PT & CV</Link></li>
              <li><Link href="/#visa-wna" className="hover:text-white transition-colors">Visa Investor</Link></li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-lg font-medium mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li><Link href="/tentang-kami" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="/artikel" className="hover:text-white transition-colors">Artikel & Tips</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/60 font-light">
          <p>&copy; {new Date().getFullYear()} CV. Syabil Binar Amerta. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 drop-shadow-md">
                <circle cx="12" cy="12" r="12" fill="#1877F2"/>
                <path fill="white" d="M14.5 12h-2v7H10v-7H8.5v-2H10V8.5c0-1.4.9-2.2 2.1-2.2.6 0 1.1.1 1.3.1v1.5h-.9c-.7 0-.8.3-.8.8V10h2.2l-.3 2z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 drop-shadow-md">
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="12" fill="url(#ig-grad)"/>
                <g stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(5,5) scale(0.583)">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </g>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 drop-shadow-md">
                <circle cx="12" cy="12" r="12" fill="#0077b5"/>
                <path fill="white" d="M8.36 17H5.64V9.67h2.72V17zM7 8.35c-.87 0-1.57-.7-1.57-1.57s.7-1.57 1.57-1.57 1.57.7 1.57 1.57-.7 1.57-1.57 1.57zM18.36 17h-2.72v-3.56c0-.85-.02-1.95-1.19-1.95-1.19 0-1.37.93-1.37 1.89V17h-2.72V9.67h2.61v1h.04c.36-.69 1.25-1.42 2.58-1.42 2.76 0 3.27 1.82 3.27 4.18V17z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
