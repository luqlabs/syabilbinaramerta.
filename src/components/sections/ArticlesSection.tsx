"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { latestArtikelQuery, SanityArtikel } from "@/sanity/lib/queries";

export default async function ArticlesSection() {
  const articles: SanityArtikel[] = await client.fetch(latestArtikelQuery, {}, { next: { revalidate: 60 } });
  return (
    <section className="py-32 bg-brand-light border-y border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <p className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">BLOG & TIPS</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Artikel & Panduan Terbaru</h2>
          <p className="text-foreground/70 text-lg font-light max-w-2xl mx-auto">
            Tips praktis seputar visa, imigrasi, dan perizinan perusahaan dari tim ahli kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, i) => (
            <Link href={`/artikel/${article.slug.current}`} key={article._id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-2xl overflow-hidden shadow-lg border border-foreground/5 group hover:shadow-xl transition-all cursor-pointer flex flex-col hover:-translate-y-2 h-full"
              >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={article.coverImage} 
                  alt={article.coverImageAlt || article.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-foreground">
                  {article.category}
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl text-foreground mb-4 group-hover:text-brand-gold transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-foreground/70 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-foreground/50 pt-6 border-t border-foreground/10">
                  <span>5 menit baca</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/artikel" className="inline-flex items-center space-x-2 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-300">
            <span>Lihat Semua Artikel</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
