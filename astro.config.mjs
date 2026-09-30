import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Production lives under www.santjust.org/geganters; `astro dev` serves from the
// root so the site can be tested locally at http://localhost:4321/.
const isDev = process.argv.includes("dev");

// https://astro.build/config
export default defineConfig({
  site: "https://www.santjust.org",
  base: isDev ? "/" : "/geganters",
  integrations: [tailwind(), sitemap()],
  image: {
    // Sharp service that crops (fit: cover) when width and height are both set.
    service: { entrypoint: "./src/utils/image-service.ts" },
  },
});
