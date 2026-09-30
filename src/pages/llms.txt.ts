import type { APIRoute } from "astro";
import { gegants } from "../utils/gegants";
import { socials } from "../components/Data/socials";
import { absoluteUrl } from "../utils/url";

const WIKIPEDIA_URL = "https://ca.wikipedia.org/wiki/Gegants_de_Sant_Just_Desvern";

export const GET: APIRoute = () => {
  const giantLines = gegants.map(
    (gegant) =>
      `- [${gegant.name}](${absoluteUrl(`/gegants/${gegant.slug}/`)}): ${gegant.summary} Any d’estrena: ${gegant.year}. Constructor: ${gegant.builder}.`
  );
  const linkLines = [
    ...socials.map((social) => `- [${social.label}](${social.href})`),
    `- [Wikipedia](${WIKIPEDIA_URL})`,
  ];

  const body = [
    "# Colla Gegantera de Sant Just Desvern",
    "",
    "> Colla gegantera de Sant Just Desvern (Baix Llobregat) que fa ballar gegants i capgrossos per tot el territori català des de 1984.",
    "",
    "La Colla Gegantera de Sant Just Desvern neix el 1984 i té la seu a Sant Just Desvern, al Baix Llobregat. Balla gegants i capgrossos en festes i trobades arreu de Catalunya.",
    "",
    "La colla busca portadors i grallers per continuar fent ballar els gegants. Per contactar-hi, escriviu a gegants@santjust.org.",
    "",
    `Web: ${absoluteUrl("/")}`,
    "",
    "## Gegants",
    "",
    ...giantLines,
    "",
    "## Enllaços",
    "",
    ...linkLines,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
