import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://hdfmy.ir",
  base: "/",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: "github-dark" }
  }
});
