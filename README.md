# Gegants de Sant Just Desvern 🎭

Lloc web oficial de la **Colla Gegantera de Sant Just Desvern** (fundada l'any 1984 a Sant Just Desvern, Baix Llobregat).

El web presenta les figures històriques i actuals del poble (gegants i gegantons), el seu context històric, canals de contacte i xarxes socials.

[![Astro](https://img.shields.io/badge/Astro-4.x-FF5D01.svg?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Llicència: MIT](https://img.shields.io/badge/Llicència-MIT-yellow.svg)](LICENSE)

---

## ✨ Característiques

- **Fitxes dels gegants (`/gegants/[slug]`)**: Pàgines de detall per a cada figura (_Justa i Pastor_, _Gentil i Flor de Neu_, _L'Arrel_, _Montserratona_) amb la seva història, constructors (_El Ingenio_, _Manuel Casserres i Boix_) i referències documentades del Centre d’Estudis Santjustencs.
- **Carrusel dinàmic i multimèdia**: Capçalera interactiva amb passi de diapositives i recursos visuals optimitzats, acompanyats de transicions suaus de pàgina mitjançant Astro View Transitions.
- **Retall d'imatges automatitzat**: Pipeline d'imatges personalitzat amb [Sharp](https://sharp.pixelplumbing.com/) (`src/utils/image-service.ts`) per garantir un ajust i retall coherent de les fotografies.
- **SEO i integració amb IA**:
  - Dades estructurades amb Schema.org JSON-LD (`PerformingGroup` i `WebSite`).
  - Generació automàtica del mapa del lloc XML (`@astrojs/sitemap`).
  - Punt d'accés natiu [`/llms.txt`](src/pages/llms.txt.ts) preparat per a motors de cerca d'IA i agents rastrejadors.
- **Enrutament multientorn**: Configuració dinàmica a `astro.config.mjs` per servir el lloc des de l'arrel (`/`) en entorns locals i a Vercel, o bé sota el subdirectori municipal (`/geganters`) en producció.

---

## 🛠️ Tecnologies

- **Framework**: [Astro 4](https://astro.build/)
- **Estils**: [Tailwind CSS](https://tailwindcss.com/) amb tipografia decorativa mitjançant `@fontsource/dancing-script`
- **Llenguatge**: [TypeScript](https://www.typescriptlang.org/) amb verificació estricta via `@astrojs/check`
- **Tractament d'imatges**: [Sharp](https://sharp.pixelplumbing.com/)
- **Gestor de paquets**: [pnpm](https://pnpm.io/) (v9+)

---

## 📁 Estructura del projecte

```text
├── public/                 # Recursos estàtics (logotips, favicon, manifest)
├── src/
│   ├── assets/             # Imatges optimitzades locals (fotos dels gegants, portada)
│   ├── components/         # Components modulars d'Astro
│   │   ├── Data/           # Col·leccions de dades estructurades (gegants.json, socials.ts)
│   │   ├── Contacte.astro  # Secció de contacte
│   │   ├── Gegants.astro   # Graella i presentació de figures
│   │   ├── Inici.astro     # Portada i carrusel d'imatges
│   │   ├── Navbar.astro    # Barra de navegació
│   │   └── ...
│   ├── layouts/            # Estructura base HTML amb metadades SEO i ViewTransitions
│   ├── pages/              # Enrutament basat en fitxers
│   │   ├── index.astro     # Pàgina principal
│   │   ├── gegants/        # Ruta dinàmica per a cada gegant ([slug].astro)
│   │   └── llms.txt.ts     # Punt d'accés en text pla per a IA (/llms.txt)
│   ├── styles/             # Estils globals i directives de Tailwind
│   └── utils/              # Resolució d'URLs, servei d'imatges i gestió de dades
├── astro.config.mjs        # Configuració d'Astro i resolució del base path
└── tailwind.config.mjs     # Configuració de Tailwind CSS
```

---

## 🚀 Com començar

### Requisits previs

- **Node.js**: v18.17.1+ o v20+
- **pnpm**: v9.0+ (`corepack enable pnpm` o `npm install -g pnpm`)

### Instal·lació

Clona el repositori i instal·la les dependències:

```bash
git clone https://github.com/itzjoordi/gegants-sant-just.git
cd gegants-sant-just
pnpm install
```

### Comandes de desenvolupament i construcció

| Comanda              | Acció                                                                          |
| :------------------- | :----------------------------------------------------------------------------- |
| `pnpm run dev`       | Inicia el servidor de desenvolupament local a `http://localhost:4321/`         |
| `pnpm run build`     | Executa les comprovacions de tipus i genera la versió de producció a `./dist/` |
| `pnpm run preview`   | Previsualitza localment la versió compilada de producció                       |
| `pnpm run astro ...` | Executa utilitats de la CLI d'Astro (ex. `pnpm run astro check`)               |

---

## 🌐 Desplegament i entorns

El projecte gestiona dos entorns de desplegament definits a `astro.config.mjs`:

| Entorn                                     | Ruta base (`base`) | URL del lloc                           |
| :----------------------------------------- | :----------------- | :------------------------------------- |
| **Desenvolupament local** (`astro dev`)    | `/`                | `http://localhost:4321/`               |
| **Previsualització a Vercel** (`VERCEL=1`) | `/`                | `https://gegants-sant-just.vercel.app` |
| **Producció**                              | `/geganters`       | `https://www.santjust.org/geganters`   |

Per sobreescriure manualment la ruta base, es pot utilitzar la variable d'entorn `BASE_PATH`:

```bash
BASE_PATH=/ pnpm run build
```

---

## 📄 Llicència i crèdits

- Codi publicat sota la [Llicència MIT](LICENSE).
- Contingut històric i documentació cortesia del [Centre d’Estudis Santjustencs](https://centreestudissantjustencs.cat/) i la [Colla Gegantera de Sant Just Desvern](https://ca.wikipedia.org/wiki/Gegants_de_Sant_Just_Desvern).
