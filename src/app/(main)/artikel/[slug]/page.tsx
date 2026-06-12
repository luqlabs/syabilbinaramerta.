import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { artikelBySlugQuery, allArtikelSlugsQuery, relatedArtikelQuery, SanityArtikel } from "@/sanity/lib/queries";

// Generate static routes at build time
export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(allArtikelSlugsQuery);
  return slugs;
}

// Custom components for Portable Text
const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: { url?: string }, alt?: string, caption?: string } }) => {
      return (
        <div className="relative w-full h-[300px] md:h-[400px] my-8 rounded-2xl overflow-hidden">
          <Image
            src={value.asset?.url || ""} // Need actual url builder if asset is just a ref
            alt={value.alt || "Article Image"}
            fill
            className="object-cover"
          />
          {value.caption && <div className="absolute bottom-0 w-full bg-black/60 text-white text-sm p-2 text-center">{value.caption}</div>}
        </div>
      )
    }
  }
};

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const article: SanityArtikel = await client.fetch(artikelBySlugQuery, { slug }, { next: { revalidate: 60 } });

  if (!article) {
    notFound();
  }

  // Get related articles
  const relatedArticles: SanityArtikel[] = await client.fetch(relatedArtikelQuery, { slug }, { next: { revalidate: 60 } });

  return (
    <main className="flex-grow flex flex-col">
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px]">
        {article.coverImage && (
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt || article.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for contrast */}
        
      </section>

      {/* Back Button - Fixed */}
      <div className="fixed top-6 left-6 md:left-12 z-50">
        <Link href="/artikel" className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors bg-white/80 hover:bg-white backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-foreground/5">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke semua artikel
        </Link>
      </div>

      {/* Main Content & Sidebar Wrapper */}
      <section className="py-16 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
            
            {/* Left: Article Content */}
            <div className="lg:flex-grow">
              <div className="max-w-4xl mx-auto lg:mx-0 bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-foreground/5">
                
                {/* Article Header */}
                <header className="mb-12 border-b border-foreground/10 pb-12">
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-foreground/60 mb-6">
                    <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full uppercase tracking-wider text-xs">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>5 menit baca</span>
                    <span>•</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</span>
                  </div>
                  
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
                    {article.title}
                  </h1>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold font-serif font-bold text-xl">
                      S
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Ditulis oleh</p>
                      <p className="text-sm text-foreground/60">{article.author}</p>
                    </div>
                  </div>
                </header>

                {/* Article Body with Tailwind Typography */}
                <article className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-brand-gold hover:prose-a:text-brand-gold/80 prose-img:rounded-2xl prose-img:shadow-lg w-full overflow-hidden">
                  <div className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 mb-10 italic border-l-4 border-brand-gold pl-6">
                    {article.excerpt}
                  </div>
                  
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {article.body && <PortableText value={article.body as any} components={portableTextComponents} />}
                </article>

                {/* WhatsApp CTA Box */}
                <div className="mt-16 bg-brand-light/50 border border-brand-gold/20 rounded-2xl p-8 text-center">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Butuh Bantuan Profesional?</h3>
                  <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
                    Tim CV. Syabil Binar Amerta siap membantu Anda. Konsultasi gratis, cepat, dan transparan.
                  </p>
                  <a 
                    href="https://wa.me/6281234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                  >
                    Konsultasi via WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Sidebar (Artikel Lainnya) */}
            <aside className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0 mt-8 lg:mt-0 order-last lg:order-none">
              <div className="sticky top-28">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Artikel Lainnya</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {relatedArticles.map((relArticle) => (
                    <Link href={`/artikel/${relArticle.slug.current}`} key={relArticle._id}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-foreground/5 group hover:shadow-xl transition-all cursor-pointer flex flex-col hover:-translate-y-1 h-full">
                        <div className="relative h-40 w-full overflow-hidden">
                          {relArticle.coverImage && (
                            <Image 
                              src={relArticle.coverImage} 
                              alt={relArticle.coverImageAlt || relArticle.title} 
                              fill 
                              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                            />
                          )}
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <div className="text-[10px] text-brand-gold font-bold uppercase tracking-wider mb-2">
                            {relArticle.category}
                          </div>
                          <h4 className="font-serif text-base text-foreground mb-2 group-hover:text-brand-gold transition-colors leading-tight line-clamp-3">
                            {relArticle.title}
                          </h4>
                          <div className="flex items-center justify-between text-[10px] text-foreground/50 mt-auto pt-3 border-t border-foreground/5">
                            <span>5 menit baca</span>
                            <span>{new Date(relArticle.publishedAt).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}
