import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Production lives under www.santjust.org/geganters. `astro dev` and the Vercel
// preview (gegants-sant-just.vercel.app) serve from the root. BASE_PATH
// overrides both.
const isDev = process.argv.includes("dev");
const isVercel = process.env.VERCEL === "1";
const base =
  process.env.BASE_PATH ?? (isDev || isVercel ? "/" : "/geganters");
const site =
  isVercel && process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://www.santjust.org";

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [tailwind(), sitemap()],
  image: {
    // Sharp service that crops (fit: cover) when width and height are both set.
    service: { entrypoint: "./src/utils/image-service.ts" },
  },
});
