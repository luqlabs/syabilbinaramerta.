import { defineField, defineType } from "sanity";

export const artikelType = defineType({
  name: "artikel",
  title: "Artikel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul Artikel",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(120),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "URL artikel. Klik 'Generate' untuk otomatis dari judul.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Ringkasan",
      type: "text",
      rows: 3,
      description: "Ringkasan pendek artikel (tampil di kartu & SEO).",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Visa ke Luar Negeri", value: "Visa ke Luar Negeri" },
          { title: "Imigrasi WNA", value: "Imigrasi WNA" },
          { title: "Perizinan Perusahaan", value: "Perizinan Perusahaan" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Gambar Sampul",
      type: "image",
      description: "Gambar utama artikel. Rekomendasi ukuran: 1200x630px.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Teks Alternatif (Alt Text)",
          description: "Deskripsi gambar untuk SEO & aksesibilitas.",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Tanggal Terbit",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Penulis",
      type: "string",
      initialValue: "Tim CV. Syabil Binar Amerta",
    }),
    defineField({
      name: "body",
      title: "Isi Artikel",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Judul (H2)", value: "h2" },
            { title: "Sub-Judul (H3)", value: "h3" },
            { title: "Kutipan", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Buka di tab baru?",
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Teks Alternatif",
            },
            {
              name: "caption",
              type: "string",
              title: "Keterangan Gambar",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "coverImage",
      date: "publishedAt",
    },
    prepare({ title, category, media, date }) {
      return {
        title,
        subtitle: `${category} • ${date ? new Date(date).toLocaleDateString("id-ID") : "Draft"}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Terbaru",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
