import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "syabil-binar-amerta",
  title: "CV. Syabil Binar Amerta — CMS",

  projectId: "u3iy60jg",
  dataset: "syabilbinaramerta",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Konten Website")
          .items([
            S.listItem()
              .title("📝 Artikel & Tips")
              .child(S.documentTypeList("artikel").title("Semua Artikel")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
