import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { latestArtikelQuery, SanityArtikel } from "@/sanity/lib/queries";
import ArticleCard from "@/components/ui/ArticleCard";

export default async function ArticlesSection() {
  let articles: SanityArtikel[] = [];
  try {
    articles = await client.fetch(latestArtikelQuery, {}, { next: { revalidate: 0 } });
  } catch {
    // Graceful fallback if Sanity is unreachable
    articles = [];
  }

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

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {articles.map((article, i) => (
              <ArticleCard key={article._id} article={article} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 mb-16 border border-dashed border-foreground/15 rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6m-1-7v3" />
              </svg>
            </div>
            <p className="font-serif text-2xl text-foreground/50 mb-2">Artikel Segera Hadir</p>
            <p className="text-foreground/40 text-sm font-light max-w-xs text-center">Tim kami sedang menyiapkan konten terbaik untuk Anda. Pantau terus halaman ini.</p>
          </div>
        )}

        <div className="text-center">
          <Link href="/artikel" className="inline-flex items-center space-x-2 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-300">
            <span>Lihat Semua Artikel</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
