import type { LocalImageService } from "astro";
import sharpService from "astro/assets/services/sharp";

// Astro 4's built-in sharp service ignores `height` when `width` is set, so it
// never crops. This wrapper keeps everything else and adds a cover crop when
// both dimensions are requested (used for the 1200x630 Open Graph images).
const service: LocalImageService = {
  ...sharpService,
  async transform(inputBuffer, transformOptions, config) {
    const { width, height } = transformOptions;
    if (!width || !height || transformOptions.format === "svg") {
      return sharpService.transform(inputBuffer, transformOptions, config);
    }
    const sharp = (await import("sharp")).default;
    const quality =
      typeof transformOptions.quality === "string" ||
      typeof transformOptions.quality === "number"
        ? Number(transformOptions.quality)
        : undefined;
    const pipeline = sharp(inputBuffer, { failOnError: false })
      .rotate()
      .resize({
        width: Math.round(width),
        height: Math.round(height),
        fit: "cover",
        position: "attention",
      });
    if (transformOptions.format) {
      pipeline.toFormat(transformOptions.format as keyof import("sharp").FormatEnum, {
        quality: Number.isFinite(quality) ? quality : undefined,
      });
    }
    const { data, info } = await pipeline.toBuffer({ resolveWithObject: true });
    return { data, format: info.format as never };
  },
};

export default service;
