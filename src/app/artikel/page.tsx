"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { allArtikelQuery, SanityArtikel } from "@/sanity/lib/queries";

export default function ArtikelPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [articles, setArticles] = useState<SanityArtikel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await client.fetch(allArtikelQuery);
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const categories = ["Semua", "Visa ke Luar Negeri", "Imigrasi WNA", "Perizinan Perusahaan"];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (article.excerpt && article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === "Semua" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="flex-grow flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">BLOG & TIPS</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Artikel & Panduan</h1>
          <p className="text-white/70 text-lg font-light mb-10 max-w-2xl mx-auto">
            Tips, panduan, dan informasi terkini seputar visa, imigrasi, dan perizinan perusahaan di Indonesia.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Cari artikel... contoh: 'Jepang', 'KITAS', 'NIB'"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-900 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <div className="border-b border-foreground/5 bg-white relative z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex overflow-x-auto hide-scrollbar gap-3 pb-4">
          <div className="flex gap-3 min-w-max mx-auto md:mx-0 lg:justify-center lg:w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors shrink-0 ${
                  activeCategory === category 
                    ? "bg-[#0f172a] text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="py-20 px-6 flex-grow">
        <div className="max-w-7xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              {isLoading ? (
                 <p className="text-foreground/50 text-xl">Memuat artikel...</p>
              ) : (
                <>
                  <p className="text-foreground/50 text-xl">Tidak ada artikel yang ditemukan.</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setActiveCategory("Semua"); }}
                    className="mt-4 text-brand-gold hover:underline"
                  >
                    Reset pencarian
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <AnimatePresence>
                {filteredArticles.map((article, i) => (
                  <Link href={`/artikel/${article.slug.current}`} key={article._id}>
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-foreground/5 group hover:shadow-xl transition-all cursor-pointer flex flex-col hover:-translate-y-2 h-full"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image 
                          src={article.coverImage} 
                          alt={article.coverImageAlt || article.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                        />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-gray-900">
                          {article.category}
                        </div>
                      </div>
                      
                      {/* Content Container */}
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="font-serif text-xl text-gray-900 mb-4 group-hover:text-brand-gold transition-colors leading-tight">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 flex-grow">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400 pt-6 border-t border-gray-100">
                          <span>5 menit baca</span>
                          <span>{new Date(article.publishedAt).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </AnimatePresence>
            </div>
          )}

          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-300">
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
