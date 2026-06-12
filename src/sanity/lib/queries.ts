import { groq } from "next-sanity";

// Semua artikel (untuk halaman /artikel)
export const allArtikelQuery = groq`
  *[_type == "artikel"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    author,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
  }
`;

// 3 artikel terbaru (untuk landing page)
export const latestArtikelQuery = groq`
  *[_type == "artikel"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    author,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
  }
`;

// Satu artikel berdasarkan slug (untuk /artikel/[slug])
export const artikelBySlugQuery = groq`
  *[_type == "artikel" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    author,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
    body,
  }
`;

// Semua slug (untuk generateStaticParams)
export const allArtikelSlugsQuery = groq`
  *[_type == "artikel" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// Artikel lainnya untuk sidebar (3 artikel terbaru, exclude slug saat ini)
export const relatedArtikelQuery = groq`
  *[_type == "artikel" && slug.current != $slug] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
  }
`;

// TypeScript types untuk data artikel dari Sanity
export type SanityArtikel = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  publishedAt: string;
  author: string;
  coverImage: string;
  coverImageAlt?: string;
  body?: unknown[];
};
