import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://h02s.github.io",
  base: "/",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: "github-dark" }
  }
});