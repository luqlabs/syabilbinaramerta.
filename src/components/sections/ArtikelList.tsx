"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { SanityArtikel } from "@/sanity/lib/queries";

const CATEGORIES = ["Semua", "Visa ke Luar Negeri", "Imigrasi WNA", "Perizinan Perusahaan"];

export default function ArtikelList({ articles }: { articles: SanityArtikel[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.excerpt && article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === "Semua" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Search Bar — dark continuation of hero */}
      <div className="bg-[#0f172a] px-6 pb-10">
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

      {/* Filter Categories */}
      <div className="border-b border-foreground/5 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex overflow-x-auto hide-scrollbar gap-3">
          <div className="flex gap-3 min-w-max mx-auto md:mx-0 lg:justify-center lg:w-full">
            {CATEGORIES.map((category) => (
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
              {articles.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6m-1-7v3" />
                    </svg>
                  </div>
                  <p className="font-serif text-2xl text-foreground/50 mb-2">Artikel Segera Hadir</p>
                  <p className="text-foreground/40 text-sm font-light max-w-xs text-center">Tim kami sedang menyiapkan konten terbaik untuk Anda.</p>
                </div>
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
                      transition={{ duration: 0.3, delay: i * 0.05 }}
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

                      {/* Content */}
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
    </>
  );
}
