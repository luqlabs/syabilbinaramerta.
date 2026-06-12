import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { articlesData, Article, ContentBlock } from "@/data/articles";

// Generate static routes at build time
export function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

// Function to render rich text blocks
function renderContent(blocks: ContentBlock[]) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return <p key={index} className="mb-6 leading-relaxed text-foreground/80">{block.text}</p>;
      case "h2":
        return <h2 key={index} className="font-serif text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">{block.text}</h2>;
      case "h3":
        return <h3 key={index} className="font-serif text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">{block.text}</h3>;
      case "list":
        return (
          <ul key={index} className="list-disc pl-6 mb-8 space-y-3 text-foreground/80">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get 3 related articles (excluding the current one)
  const relatedArticles = articlesData
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <main className="flex-grow flex flex-col">
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px]">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
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
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.publishedAt}</span>
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
                  
                  {renderContent(article.content)}
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
                    <Link href={`/artikel/${relArticle.slug}`} key={relArticle.id}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-foreground/5 group hover:shadow-xl transition-all cursor-pointer flex flex-col hover:-translate-y-1 h-full">
                        <div className="relative h-40 w-full overflow-hidden">
                          <Image 
                            src={relArticle.imageUrl} 
                            alt={relArticle.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                          />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <div className="text-[10px] text-brand-gold font-bold uppercase tracking-wider mb-2">
                            {relArticle.category}
                          </div>
                          <h4 className="font-serif text-base text-foreground mb-2 group-hover:text-brand-gold transition-colors leading-tight line-clamp-3">
                            {relArticle.title}
                          </h4>
                          <div className="flex items-center justify-between text-[10px] text-foreground/50 mt-auto pt-3 border-t border-foreground/5">
                            <span>{relArticle.readTime}</span>
                            <span>{relArticle.publishedAt}</span>
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
