# Podia UI — Frontend Practice

> Recreación del challenge de **Podia** de [Frontend Practice](https://www.frontendpractice.com/) migrado a **Astro 7** (SSG) con optimización de imágenes, Tailwind CSS v4 y despliegue automático a GitHub Pages.

![Preview](img/preview.png)

---

## 🚀 Demo en vivo

**<https://14bryanespinoza.github.io/podia/>**

---

## ✨ Características

- **Astro 7** — Static Site Generation (SSG), zero-JS por defecto
- **Tailwind CSS v4** — Configuración CSS-first con `@theme` y design tokens
- **astro-icon + Lucide** — Iconos SVG optimizados (tree-shaking automático)
- **Sharp** — Optimización de imágenes en build (AVIF, WebP, responsive srcset/sizes)
- **@astrojs/sitemap** — Generación automática de `sitemap.xml` + `robots.txt` para SEO
- **Font optimization** — Preconnect, preload, non-blocking CSS load (`font-display: swap`)
- **TypeScript strict** — Tipado completo en componentes y data
- **ESLint + Prettier** — Linting y formato unificado (con plugins Astro/Tailwind)
- **Husky + lint-staged** — Pre-commit hooks que evitan commits rotos
- **GitHub Pages via Actions** — Deploy automático en push a `main`

---

## 📁 Estructura del proyecto

```text
src/
├── components/          # Componentes reutilizables (Button, Link, Cards, ContainerText, Cite)
├── data/                # Datos estructurados (metadata, products, books, faq, gallery, affiliates, links, cite)
├── layouts/             # Layouts de página (Layout, Header, Hero, Products, Feature, Testimonial, Gallery, Affiliates, Faq, Footer)
├── pages/               # Rutas (index.astro)
└── styles/              # Estilos globales + design tokens (global.css)
public/
├── img/                 # Imágenes optimizadas por Astro (card1-8, wallpaper, favicon, etc.)
├── favicon.png          # Favicon servido en raíz (/favicon.png)
└── preview.png          # Imagen Open Graph / Twitter Card
```

---

## 🛠️ Comandos

```bash
# Instalar dependencias (pnpm)
pnpm install

# Desarrollo local (http://localhost:4321)
pnpm dev

# Build de producción (genera dist/)
pnpm build

# Preview del build local
pnpm preview

# Lint + formato
pnpm lint
pnpm format

# Type check
pnpm check

> **Node requerido:** ≥ 22.12 (configurado en `package.json` y workflow CI)
```

---

## 🌐 Despliegue

El sitio se publica automáticamente en **GitHub Pages** vía Actions al hacer push a `main`:

1. **Job `build`** — `withastro/action@v6` (Node 22) → `pnpm install` + `pnpm build` → sube `dist/` como artifact
2. **Job `deploy`** — `actions/deploy-pages@v4` → publica el artifact en el entorno `github-pages`

URL final: **<https://14bryanespinoza.github.io/podia/>**

> La base path está configurada en `astro.config.mjs`:

```js
{
  site: "https://14bryanespinoza.github.io/podia/",
  base: "/podia/",
  build: { assets: "assets" }
}
```

---

## 🧱 Componentes principales

| Componente            | Descripción                                         |
| --------------------- | --------------------------------------------------- |
| `Layout.astro`        | Shell HTML, metadata, fuentes, favicon, slots       |
| `Header.astro`        | Navbar responsive, logo (favicon), menú mobile      |
| `Hero.astro`          | Sección hero con fondo optimizado + CTA             |
| `Products.astro`      | Sección de tecnologías core                         |
| `Feature.astro`       | Sección de herramientas y mejores prácticas         |
| `Testimonial.astro`   | Historias de desarrolladores destacados             |
| `Gallery.astro`       | Galería de imágenes de proyectos de desarrolladores |
| `Affiliates.astro`    | Características clave ("Learn, Build, Grow")        |
| `Faq.astro`           | Preguntas frecuentes con detalles `<details>`       |
| `Footer.astro`        | Footer con links, copyright, redes                  |
| `Button.astro`        | Botón accesible (variant, size, asChild)            |
| `Link.astro`          | Enlace polimórfico (`as` prop) con skip link        |
| `ContainerText.astro` | Contenedor con título y descripción                 |
| `Cards.astro`         | Cuadros con icono, título y descripción (variantes) |
| `Cite.astro`          | Bloque quote/blockquote con autor                   |

---

## 📦 Datos (src/data/)

- **`metadata.ts`** — SEO, Open Graph, Twitter Card, canonical, preview image
- **`products.ts`** — Datos de las tecnologías core (HTML5, CSS3, JavaScript, Responsive Design)
- **`books.ts`** — Herramientas y mejores prácticas (Version Control, Build Tools, Package Managers, CSS Frameworks, Testing & Debugging, Performance Optimization)
- **`faq.ts`** — Preguntas frecuentes
- **`gallery.ts`** — Galería de imágenes de proyectos con metadata de Astro
- **`affiliates.ts`** — Características clave ("Learn at Your Own Pace", "Build Real-World Projects", "Join a Supportive Community")
- **`links.ts`** — Enlaces de navegación, redes, CTA
- **`cite.ts`** — Cita destacada con autor y trabajo

---

## ♿ Accesibilidad

- Skip link en `Header` para navegación por teclado
- Semántica HTML5 (`header`, `main`, `section`, `footer`, `nav`)
- `alt` descriptivos en todas las imágenes
- Contraste AA/AAA en tokens de color (Tailwind)
- `prefers-reduced-motion` respetado (desactiva animaciones)
- Focus visible en enlaces y botones

---

## ⚡ Performance

| Optimización               | Implementación                                               | Impacto                      |
| -------------------------- | ------------------------------------------------------------ | ---------------------------- |
| **Imágenes AVIF + WebP**   | `<Picture formats={['avif','webp']} layout="constrained" />` | -20-45% vs WebP solo         |
| **Responsive images**      | `srcset` + `sizes` automático via `layout="constrained"`     | Tamaño correcto por viewport |
| **Hero priority**          | `priority` prop (eager + sync + fetchpriority=high)          | LCP optimizado               |
| **Lazy loading**           | `loading="lazy"` + `decoding="async"` below-the-fold         | Ahorro ancho de banda        |
| **Font preconnect**        | `preconnect` a `fonts.googleapis.com` + `fonts.gstatic.com`  | -100-200ms DNS/TLS           |
| **Font preload**           | `preload` font regular 400 (más usada)                       | Descarga inmediata           |
| **Non-blocking CSS**       | `media="print" onload="this.media='all'"`                    | Sin bloqueo render           |
| **Font weights reducidos** | 4 pesos (400,500,700 + italic 400) vs 18 originales          | -78% requests fuente         |
| **Sitemap + robots**       | `@astrojs/sitemap` auto-generado                             | Indexación completa          |

---

## 🔧 Stack técnico

| Herramienta      | Versión | Uso                                           |
| ---------------- | ------- | --------------------------------------------- |
| Astro            | 7.x     | SSG, islas, optimización assets               |
| @astrojs/sitemap | 3.x     | Generación sitemap.xml + robots.txt           |
| Tailwind CSS     | 4.x     | Utility-first, design tokens                  |
| TypeScript       | 5.x     | Tipado estricto                               |
| ESLint           | 9.x     | Linting (plugin-astro, plugin-tailwind)       |
| Prettier         | 3.x     | Formato (plugin-astro, plugin-tailwind)       |
| Husky            | 9.x     | Git hooks                                     |
| lint-staged      | 17.x    | Lint/format solo en archivos staged           |
| Sharp            | 0.35.x  | Transformación imágenes en build (AVIF, WebP) |
| astro-icon       | 1.x     | Iconos SVG (Iconify + locales)                |

---

## 📝 Licencia

MIT — libre para uso personal y educativo.
