"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SanityArtikel } from "@/sanity/lib/queries";

interface ArticleCardProps {
  article: SanityArtikel;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <Link href={`/artikel/${article.slug.current}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
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
  );
}
