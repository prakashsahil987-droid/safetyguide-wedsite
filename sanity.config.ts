import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "safeguide",
  title: "SafeGuide CMS",

  projectId,
  dataset,

  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("SafeGuide Content")
          .items([
            S.listItem()
              .title("📝 All Articles")
              .child(S.documentTypeList("article").title("All Articles")),
            S.divider(),
            S.listItem()
              .title("🏦 Banking Safety")
              .child(
                S.documentTypeList("article")
                  .title("Banking Articles")
                  .filter('_type == "article" && category == "banking"')
              ),
            S.listItem()
              .title("📲 UPI Safety")
              .child(
                S.documentTypeList("article")
                  .title("UPI Articles")
                  .filter('_type == "article" && category == "upi"')
              ),
            S.listItem()
              .title("✈️ Travel Safety")
              .child(
                S.documentTypeList("article")
                  .title("Travel Articles")
                  .filter('_type == "article" && category == "travel"')
              ),
            S.listItem()
              .title("🔍 Lost Items")
              .child(
                S.documentTypeList("article")
                  .title("Lost Items Articles")
                  .filter('_type == "article" && category == "lost-items"')
              ),
            S.listItem()
              .title("🛡️ Online Safety")
              .child(
                S.documentTypeList("article")
                  .title("Online Safety Articles")
                  .filter('_type == "article" && category == "online-safety"')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
