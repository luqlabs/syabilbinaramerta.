import { client } from "@/sanity/lib/client";
import { allArtikelQuery, SanityArtikel } from "@/sanity/lib/queries";
import ArtikelList from "@/components/sections/ArtikelList";

export const metadata = {
  title: "Artikel & Panduan | CV. Syabil Binar Amerta",
  description: "Tips, panduan, dan informasi terkini seputar visa, imigrasi, dan perizinan perusahaan.",
};

export const dynamic = "force-dynamic";

export default async function ArtikelPage() {
  let articles: SanityArtikel[] = [];
  try {
    articles = await client.fetch(allArtikelQuery, {}, { next: { revalidate: 0 } });
  } catch {
    articles = [];
  }

  return (
    <main className="flex-grow flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">BLOG & TIPS</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Artikel & Panduan</h1>
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto">
            Tips, panduan, dan informasi terkini seputar visa, imigrasi, dan perizinan perusahaan di Indonesia.
          </p>
        </div>
      </section>

      {/* Search + Filter + Grid — Client Component */}
      <ArtikelList articles={articles} />
    </main>
  );
}
