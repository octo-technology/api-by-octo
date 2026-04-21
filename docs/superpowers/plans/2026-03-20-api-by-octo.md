# API by OCTO — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual (FR/EN) static showcase site for OCTO Technology's API expertise, featuring publications, links, an API Management benchmark of 14 solutions, and an interactive guide to choose a solution.

**Architecture:** Astro SSG with content collections (Markdown + frontmatter) for all data, vanilla CSS with OCTO design tokens, vanilla JS for interactive components (quiz, comparator, accordion). i18n via route prefixes (/fr/, /en/). Deployed to GitHub Pages via GitHub Actions.

**Tech Stack:** Astro 5.x, TypeScript, vanilla CSS, vanilla JS, GitHub Actions

**Spec:** `docs/superpowers/specs/2026-03-20-api-by-octo-design.md`

---

## File Structure

```
api-by-octo-2/
├── astro.config.mjs                    # Astro config with sitemap
├── package.json
├── tsconfig.json
├── .gitignore
├── public/
│   ├── favicon.ico
│   └── assets/
│       ├── logo-octo.svg               # OCTO logo dark
│       ├── logo-octo-white.svg         # OCTO logo white (for hero/footer)
│       └── og-image.png                # Open Graph default image
├── src/
│   ├── content.config.ts               # Content collection schemas (Astro 5)
│   ├── content/
│   │   ├── solutions/fr/*.md           # 14 solution files
│   │   ├── solutions/en/*.md           # 14 solution files
│   │   ├── publications/fr/*.md        # 4 refcards
│   │   ├── publications/en/*.md        # 4 refcards
│   │   ├── links/fr/*.md               # 9 link files
│   │   └── links/en/*.md               # 9 link files
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── HeroHome.astro
│   │   ├── FeaturedPublication.astro
│   │   ├── SectionCard.astro
│   │   ├── PublicationCard.astro
│   │   ├── LinkCard.astro
│   │   ├── SolutionCard.astro
│   │   ├── SolutionAccordion.astro
│   │   ├── RatingBar.astro
│   │   ├── Quiz.astro
│   │   └── Comparator.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── fr/index.astro
│   │   ├── fr/publications.astro
│   │   ├── fr/liens.astro
│   │   ├── fr/benchmark.astro
│   │   ├── fr/guide.astro
│   │   ├── en/index.astro
│   │   ├── en/publications.astro
│   │   ├── en/links.astro
│   │   ├── en/benchmark.astro
│   │   └── en/guide.astro
│   ├── styles/
│   │   ├── global.css
│   │   └── components.css
│   ├── i18n/
│   │   ├── ui.ts
│   │   └── utils.ts
│   └── data/
│       └── quiz-questions.json
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`
- Create: `public/` directory structure
- Create: `src/` directory skeleton

**Depends on:** Nothing

- [ ] **Step 1: Initialize Astro project**

```bash
npm create astro@latest . -- --template minimal --no-install --typescript strict
```

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install @astrojs/sitemap
```

- [ ] **Step 3: Configure Astro**

Replace `astro.config.mjs` with:

```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://api-by-octo.octo.com',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
```

- [ ] **Step 4: Create directory structure**

```bash
mkdir -p public/assets
mkdir -p src/{components,layouts,styles,i18n,data}
mkdir -p src/content/{solutions,publications,links}/{fr,en}
mkdir -p src/pages/{fr,en}
mkdir -p .github/workflows
```

- [ ] **Step 5: Create .gitignore**

```
node_modules/
dist/
.astro/
.DS_Store
.superpowers/
```

- [ ] **Step 6: Create placeholder SVG logos**

Create `public/assets/logo-octo.svg` — a simple OCTO placeholder (navy text):

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
  <text x="0" y="30" font-family="Arial, sans-serif" font-size="28" font-weight="800" fill="#0e2356">OCTO</text>
  <text x="105" y="30" font-family="Arial, sans-serif" font-size="12" font-weight="400" fill="#8691aa">Technology</text>
</svg>
```

Create `public/assets/logo-octo-white.svg` — same but white:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
  <text x="0" y="30" font-family="Arial, sans-serif" font-size="28" font-weight="800" fill="#ffffff">OCTO</text>
  <text x="105" y="30" font-family="Arial, sans-serif" font-size="12" font-weight="400" fill="rgba(255,255,255,0.7)">Technology</text>
</svg>
```

- [ ] **Step 7: Verify build**

```bash
npm run build
```

Expected: Build succeeds with empty site.

- [ ] **Step 8: Commit**

```bash
git add -A && git commit -m "chore: scaffold Astro project with directory structure"
```

---

## Task 2: Design Tokens & Global CSS

**Files:**
- Create: `src/styles/global.css`
- Create: `src/styles/components.css`

**Depends on:** Task 1

- [ ] **Step 1: Create global.css**

```css
/* ==========================================================================
   OCTO Design Tokens & Global Styles
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&display=swap');

/* --- Tokens --- */
:root {
  --octo-main: #0e2356;
  --octo-secondary: #00d2dd;
  --octo-grey: #8691aa;
  --octo-grey-light: #f5f6fa;
  --octo-red: #e60000;
  --octo-white: #ffffff;

  --font-family: 'Outfit', Arial, Helvetica, sans-serif;
  --font-light: 300;
  --font-regular: 400;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 5rem;

  --max-width: 1100px;
}

/* --- Reset --- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-family);
  font-size: 16px;
  line-height: 1.6;
  color: var(--octo-main);
  background-color: var(--octo-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

img, svg {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--octo-secondary);
  text-decoration: none;
  transition: opacity 0.2s;
}

a:hover {
  opacity: 0.8;
}

ul, ol {
  list-style: none;
}

/* --- Typography --- */
h1, h2, h3, h4 {
  font-weight: var(--font-bold);
  line-height: 1.2;
  letter-spacing: 0.5px;
}

h1 {
  font-size: 2.5rem;
  font-weight: var(--font-extrabold);
}

h2 {
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

h3 {
  font-size: 1.25rem;
}

p {
  margin-bottom: var(--space-md);
}

/* Decorative cyan dot after headings */
.heading-dot::after {
  content: '.';
  color: var(--octo-secondary);
}

/* --- Utilities --- */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.section {
  padding: var(--space-2xl) 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

- [ ] **Step 2: Create components.css**

```css
/* ==========================================================================
   Shared Component Styles
   ========================================================================== */

/* --- Buttons --- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-family);
  font-size: 0.85rem;
  font-weight: var(--font-bold);
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--octo-secondary);
  color: var(--octo-main);
  border-color: var(--octo-secondary);
}

.btn-primary:hover {
  opacity: 0.9;
}

.btn-outline {
  background-color: transparent;
  color: var(--octo-white);
  border-color: rgba(255, 255, 255, 0.4);
}

.btn-outline:hover {
  border-color: var(--octo-white);
  color: var(--octo-white);
  opacity: 1;
}

.btn-outline-dark {
  background-color: transparent;
  color: var(--octo-main);
  border-color: var(--octo-main);
}

.btn-outline-dark:hover {
  background-color: var(--octo-main);
  color: var(--octo-white);
  opacity: 1;
}

/* --- Cards --- */
.card {
  background: var(--octo-grey-light);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(14, 35, 86, 0.1);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-lg);
}

/* --- Badges --- */
.badge {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
  font-size: 0.7rem;
  font-weight: var(--font-semibold);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.badge-cyan {
  background-color: rgba(0, 210, 221, 0.15);
  color: var(--octo-secondary);
}

.badge-navy {
  background-color: rgba(14, 35, 86, 0.1);
  color: var(--octo-main);
}

/* --- Tags --- */
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.tag {
  font-size: 0.75rem;
  color: var(--octo-grey);
  background: rgba(134, 145, 170, 0.1);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-pill);
}

/* --- Rating bars --- */
.rating-bar {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.rating-bar-label {
  flex: 0 0 140px;
  font-size: 0.85rem;
  color: var(--octo-grey);
}

.rating-bar-track {
  flex: 1;
  height: 8px;
  background: rgba(14, 35, 86, 0.1);
  border-radius: var(--radius-pill);
  overflow: hidden;
}

.rating-bar-fill {
  height: 100%;
  background: var(--octo-secondary);
  border-radius: var(--radius-pill);
  transition: width 0.4s ease;
}

/* --- Responsive --- */
@media (max-width: 768px) {
  h1 { font-size: 1.75rem; }
  h2 { font-size: 1.35rem; }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .container {
    padding: 0 var(--space-md);
  }

  .section {
    padding: var(--space-xl) 0;
  }
}
```

- [ ] **Step 3: Verify files created**

Check both files exist and are non-empty.

- [ ] **Step 4: Commit**

```bash
git add src/styles/ && git commit -m "style: add OCTO design tokens and shared component styles"
```

---

## Task 3: i18n System

**Files:**
- Create: `src/i18n/ui.ts`
- Create: `src/i18n/utils.ts`

**Depends on:** Task 1

- [ ] **Step 1: Create ui.ts with all UI translations**

```typescript
export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

export const ui: Record<Lang, Record<string, string>> = {
  fr: {
    // Nav
    'nav.publications': 'Publications',
    'nav.links': 'Liens',
    'nav.benchmark': 'Benchmark',
    'nav.guide': 'Guide',
    // Hero
    'hero.subtitle': 'OCTO TECHNOLOGY',
    'hero.title': "L'API Management",
    'hero.description':
      'Nos experts partagent leur vision, leurs retours d\'expérience et leurs outils pour maîtriser vos API.',
    'hero.cta.benchmark': 'Découvrir le benchmark',
    'hero.cta.guide': 'Choisir ma solution',
    // Section cards
    'section.publications.title': 'Publications',
    'section.publications.desc': 'Refcards & articles',
    'section.links.title': 'Liens',
    'section.links.desc': 'Blog & ressources',
    'section.benchmark.title': 'Benchmark',
    'section.benchmark.desc': '14 solutions comparées',
    'section.guide.title': 'Guide',
    'section.guide.desc': 'Choisir sa solution',
    // Featured
    'featured.label': 'À la une',
    // Publications page
    'publications.title': 'Nos publications autour des API',
    'publications.download': 'Télécharger',
    'publications.read': 'Lire',
    // Links page
    'links.title': 'Articles de blog & ressources',
    // Benchmark page
    'benchmark.title': 'API Management Solutions Overview',
    'benchmark.pros': 'Avantages',
    'benchmark.cons': 'Inconvénients',
    'benchmark.ratings': 'Évaluations',
    'benchmark.comingSoon': 'Contenu à venir',
    // Rating labels
    'rating.timeToMarket': 'Time to market',
    'rating.communaute': 'Communauté',
    'rating.cout': 'Coût',
    'rating.flexibilite': 'Flexibilité',
    'rating.securite': 'Sécurité',
    'rating.onPremise': 'On-premise',
    'rating.saas': 'SaaS',
    'rating.documentation': 'Documentation',
    // Guide page
    'guide.title': 'Comment choisir mon API Manager ?',
    'guide.intro':
      'Le choix d\'une solution d\'API Management dépend de nombreux critères : mode de déploiement, budget, niveau de maturité, écosystème existant... Ce guide vous aide à y voir plus clair.',
    'guide.quiz.title': 'Le Quiz',
    'guide.quiz.desc': 'Répondez à quelques questions pour identifier la solution la plus adaptée.',
    'guide.quiz.start': 'Commencer le quiz',
    'guide.quiz.next': 'Suivant',
    'guide.quiz.prev': 'Précédent',
    'guide.quiz.results': 'Vos résultats',
    'guide.quiz.restart': 'Recommencer',
    'guide.quiz.seeInBenchmark': 'Voir dans le benchmark',
    'guide.comparator.title': 'Le Comparateur',
    'guide.comparator.desc': 'Sélectionnez 2 ou 3 solutions pour les comparer côte à côte.',
    'guide.comparator.select': 'Choisir une solution...',
    // Footer
    'footer.legal': 'Mentions légales',
    'footer.contact': 'Contact',
    'footer.blog': 'Blog',
    'footer.tagline': 'There is a better way.',
  },
  en: {
    // Nav
    'nav.publications': 'Publications',
    'nav.links': 'Links',
    'nav.benchmark': 'Benchmark',
    'nav.guide': 'Guide',
    // Hero
    'hero.subtitle': 'OCTO TECHNOLOGY',
    'hero.title': 'API Management',
    'hero.description':
      'Our experts share their vision, experience and tools to help you master your APIs.',
    'hero.cta.benchmark': 'Explore the benchmark',
    'hero.cta.guide': 'Choose my solution',
    // Section cards
    'section.publications.title': 'Publications',
    'section.publications.desc': 'Refcards & articles',
    'section.links.title': 'Links',
    'section.links.desc': 'Blog & resources',
    'section.benchmark.title': 'Benchmark',
    'section.benchmark.desc': '14 solutions compared',
    'section.guide.title': 'Guide',
    'section.guide.desc': 'Choose your solution',
    // Featured
    'featured.label': 'Featured',
    // Publications page
    'publications.title': 'Our API publications',
    'publications.download': 'Download',
    'publications.read': 'Read',
    // Links page
    'links.title': 'Blog articles & resources',
    // Benchmark page
    'benchmark.title': 'API Management Solutions Overview',
    'benchmark.pros': 'Pros',
    'benchmark.cons': 'Cons',
    'benchmark.ratings': 'Ratings',
    'benchmark.comingSoon': 'Content coming soon',
    // Rating labels
    'rating.timeToMarket': 'Time to market',
    'rating.communaute': 'Community',
    'rating.cout': 'Cost',
    'rating.flexibilite': 'Flexibility',
    'rating.securite': 'Security',
    'rating.onPremise': 'On-premise',
    'rating.saas': 'SaaS',
    'rating.documentation': 'Documentation',
    // Guide page
    'guide.title': 'How to choose my API Manager?',
    'guide.intro':
      'Choosing an API Management solution depends on many criteria: deployment mode, budget, maturity level, existing ecosystem... This guide helps you navigate.',
    'guide.quiz.title': 'The Quiz',
    'guide.quiz.desc': 'Answer a few questions to identify the solution best suited to your needs.',
    'guide.quiz.start': 'Start the quiz',
    'guide.quiz.next': 'Next',
    'guide.quiz.prev': 'Previous',
    'guide.quiz.results': 'Your results',
    'guide.quiz.restart': 'Start over',
    'guide.quiz.seeInBenchmark': 'See in benchmark',
    'guide.comparator.title': 'The Comparator',
    'guide.comparator.desc': 'Select 2 or 3 solutions to compare them side by side.',
    'guide.comparator.select': 'Choose a solution...',
    // Footer
    'footer.legal': 'Legal notice',
    'footer.contact': 'Contact',
    'footer.blog': 'Blog',
    'footer.tagline': 'There is a better way.',
  },
} as const;
```

- [ ] **Step 2: Create utils.ts**

```typescript
import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

export function getLocalePath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

/**
 * Build the mirror URL for language switching.
 * /fr/benchmark → /en/benchmark
 * /en/links → /fr/liens
 */
const routeMap: Record<string, Record<Lang, string>> = {
  '': { fr: '', en: '' },
  publications: { fr: 'publications', en: 'publications' },
  liens: { fr: 'liens', en: 'links' },
  links: { fr: 'liens', en: 'links' },
  benchmark: { fr: 'benchmark', en: 'benchmark' },
  guide: { fr: 'guide', en: 'guide' },
};

export function getAlternateUrl(currentUrl: URL, targetLang: Lang): string {
  const segments = currentUrl.pathname.split('/').filter(Boolean);
  // segments: ['fr', 'benchmark'] or ['en', 'links']
  const pageName = segments[1] || '';
  const mapped = routeMap[pageName]?.[targetLang] ?? pageName;
  return `/${targetLang}/${mapped}`.replace(/\/+$/, '') || `/${targetLang}`;
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx astro check
```

Expected: No errors related to i18n files.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/ && git commit -m "feat: add i18n system with FR/EN translations and routing utils"
```

---

## Task 4: Base Layout, Header & Footer

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`
- Create: `src/components/LanguageSwitcher.astro`

**Depends on:** Task 2, Task 3

- [ ] **Step 1: Create LanguageSwitcher.astro**

```astro
---
import { languages, type Lang } from '../i18n/ui';
import { getLangFromUrl, getAlternateUrl } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const otherLangs = (Object.keys(languages) as Lang[]).filter((l) => l !== lang);
---

<nav class="lang-switcher" aria-label="Language">
  <span class="lang-switcher-current">{lang.toUpperCase()}</span>
  {otherLangs.map((l) => (
    <a href={getAlternateUrl(Astro.url, l)} class="lang-switcher-link">
      {l.toUpperCase()}
    </a>
  ))}
</nav>

<style>
  .lang-switcher {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .lang-switcher-current {
    color: var(--octo-secondary);
  }
  .lang-switcher-link {
    color: var(--octo-grey);
    text-decoration: none;
    transition: color 0.2s;
  }
  .lang-switcher-link:hover {
    color: var(--octo-secondary);
    opacity: 1;
  }
</style>
```

- [ ] **Step 2: Create Header.astro**

```astro
---
import LanguageSwitcher from './LanguageSwitcher.astro';
import { getLangFromUrl } from '../i18n/utils';
import { useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

const navLinks = [
  { label: t('nav.publications'), href: `/${lang}/publications` },
  { label: t('nav.links'), href: `/${lang}/${lang === 'fr' ? 'liens' : 'links'}` },
  { label: t('nav.benchmark'), href: `/${lang}/benchmark` },
  { label: t('nav.guide'), href: `/${lang}/guide` },
];
---

<header class="site-header">
  <div class="container header-inner">
    <a href={`/${lang}/`} class="header-logo" aria-label="API by OCTO — Accueil">
      <img src="/assets/logo-octo.svg" alt="OCTO Technology" width="140" height="28" />
      <span class="header-logo-label">API</span>
    </a>
    <button class="header-burger" id="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <nav class="header-nav" id="nav-menu" role="navigation" aria-label="Navigation principale">
      <ul class="header-nav-list">
        {navLinks.map((link) => (
          <li>
            <a href={link.href} class="header-nav-link">{link.label}</a>
          </li>
        ))}
      </ul>
      <LanguageSwitcher />
    </nav>
  </div>
</header>

<script>
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu?.classList.toggle('is-open');
  });
</script>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--octo-white);
    border-bottom: 1px solid var(--octo-grey-light);
  }
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
  }
  .header-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }
  .header-logo-label {
    font-size: 0.85rem;
    font-weight: 800;
    color: var(--octo-secondary);
    letter-spacing: 2px;
  }
  .header-nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .header-nav-list {
    display: flex;
    gap: 1.5rem;
  }
  .header-nav-link {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--octo-main);
    text-decoration: none;
    letter-spacing: 0.5px;
    transition: color 0.2s;
  }
  .header-nav-link:hover {
    color: var(--octo-secondary);
    opacity: 1;
  }
  .header-burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }
  .header-burger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--octo-main);
    transition: transform 0.2s;
  }

  @media (max-width: 768px) {
    .header-burger { display: flex; }
    .header-nav {
      display: none;
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      background: var(--octo-white);
      flex-direction: column;
      padding: 1.5rem;
      border-bottom: 1px solid var(--octo-grey-light);
      box-shadow: 0 4px 20px rgba(14, 35, 86, 0.08);
    }
    .header-nav.is-open { display: flex; }
    .header-nav-list {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
```

- [ ] **Step 3: Create Footer.astro**

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="/assets/logo-octo-white.svg" alt="OCTO Technology" width="140" height="28" />
        <p class="footer-tagline">{t('footer.tagline')}</p>
      </div>
      <nav class="footer-links" aria-label="Footer">
        <a href="https://www.octo.com/mentions-legales/" target="_blank" rel="noopener">{t('footer.legal')}</a>
        <a href="https://blog.octo.com" target="_blank" rel="noopener">{t('footer.blog')}</a>
        <a href="https://www.octo.com/contact/" target="_blank" rel="noopener">{t('footer.contact')}</a>
      </nav>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">OCTO Technology — Part of Accenture</p>
      <div class="footer-social">
        <a href="https://www.linkedin.com/company/octo-technology/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.47 2H3.53A1.45 1.45 0 002 3.47v17.06A1.45 1.45 0 003.47 22h17.06A1.45 1.45 0 0022 20.53V3.47A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.56 1.56 0 010 3.12zM18.91 18.74h-3v-4.26c0-1.08-.43-1.58-1.28-1.58-.93 0-1.44.53-1.44 1.58v4.26h-3v-9h3v1.2a3.2 3.2 0 012.76-1.52c1.76 0 2.96 1.08 2.96 3.32v6z"/></svg>
        </a>
        <a href="https://twitter.com/OCTOTechnology" target="_blank" rel="noopener" aria-label="Twitter">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    background: var(--octo-main);
    color: var(--octo-white);
    padding: var(--space-xl) 0 var(--space-lg);
    margin-top: auto;
  }
  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--space-lg);
    flex-wrap: wrap;
    gap: var(--space-lg);
  }
  .footer-tagline {
    color: var(--octo-secondary);
    font-weight: 600;
    font-size: 0.9rem;
    margin-top: var(--space-sm);
    margin-bottom: 0;
  }
  .footer-links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  .footer-links a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-links a:hover {
    color: var(--octo-secondary);
    opacity: 1;
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: var(--space-lg);
    flex-wrap: wrap;
    gap: var(--space-md);
  }
  .footer-copy {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }
  .footer-social {
    display: flex;
    gap: 1rem;
  }
  .footer-social a {
    color: rgba(255, 255, 255, 0.6);
    transition: color 0.2s;
  }
  .footer-social a:hover {
    color: var(--octo-secondary);
    opacity: 1;
  }
</style>
```

- [ ] **Step 4: Create BaseLayout.astro**

```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { getLangFromUrl, getAlternateUrl } from '../i18n/utils';
import '../styles/global.css';
import '../styles/components.css';

interface Props {
  title: string;
  description: string;
  ogImage?: string;
}

const { title, description, ogImage = '/assets/og-image.png' } = Astro.props;
const lang = getLangFromUrl(Astro.url);
const canonicalUrl = new URL(Astro.url.pathname, Astro.site);
const alternateFr = new URL(getAlternateUrl(Astro.url, 'fr'), Astro.site);
const alternateEn = new URL(getAlternateUrl(Astro.url, 'en'), Astro.site);
---

<!doctype html>
<html lang={lang}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title} — API by OCTO</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalUrl} />
    <link rel="alternate" hreflang="fr" href={alternateFr} />
    <link rel="alternate" hreflang="en" href={alternateEn} />
    <link rel="icon" href="/favicon.ico" />
    <!-- Open Graph -->
    <meta property="og:title" content={`${title} — API by OCTO`} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={new URL(ogImage, Astro.site)} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content={lang === 'fr' ? 'fr_FR' : 'en_US'} />
  </head>
  <body>
    <Header />
    <main id="main" role="main">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

- [ ] **Step 5: Create root redirect page**

Create `src/pages/index.astro`:

```astro
---
return Astro.redirect('/fr/', 302);
---
```

- [ ] **Step 6: Create a minimal /fr/ page to verify layout**

Create `src/pages/fr/index.astro`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout title="Accueil" description="OCTO et l'API Management.">
  <section class="section">
    <div class="container">
      <h1>Placeholder — Homepage FR</h1>
    </div>
  </section>
</BaseLayout>
```

Create `src/pages/en/index.astro`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout title="Home" description="OCTO and API Management.">
  <section class="section">
    <div class="container">
      <h1>Placeholder — Homepage EN</h1>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 7: Verify build and dev server**

```bash
npm run build
```

Expected: Build succeeds, pages generated at `/fr/`, `/en/`, and root redirect.

- [ ] **Step 8: Commit**

```bash
git add -A && git commit -m "feat: add base layout with header, footer, language switcher and root redirect"
```

---

## Task 5: Content Collection Schemas

**Files:**
- Create: `src/content.config.ts`

**Depends on:** Task 1

- [ ] **Step 1: Create content.config.ts**

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/solutions' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    logo: z.string().optional(),
    vendor: z.string(),
    year: z.number(),
    openSource: z.boolean(),
    deploymentModes: z.array(z.enum(['saas', 'on-premise', 'hybrid'])),
    category: z.enum(['pure-player', 'esb-origin', 'cloud-native']),
    website: z.string().url(),
    lang: z.enum(['fr', 'en']),
    ratings: z.object({
      timeToMarket: z.number().min(1).max(5),
      communaute: z.number().min(1).max(5),
      cout: z.number().min(1).max(5),
      flexibilite: z.number().min(1).max(5),
      securite: z.number().min(1).max(5),
      onPremise: z.number().min(1).max(5),
      saas: z.number().min(1).max(5),
      documentation: z.number().min(1).max(5),
    }),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['refcard', 'article']),
    description: z.string(),
    downloadUrl: z.string().url(),
    image: z.string().optional(),
    date: z.coerce.date(),
    featured: z.boolean().optional().default(false),
    lang: z.enum(['fr', 'en']),
  }),
});

const links = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/links' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    source: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    lang: z.enum(['fr', 'en']),
  }),
});

export const collections = { solutions, publications, links };
```

Note: we add a `lang: z.enum(['fr', 'en'])` to each schema so pages can filter by language at build time. Each markdown file must include `lang: fr` or `lang: en` in its frontmatter.

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds (collections are empty, which is OK).

- [ ] **Step 3: Commit**

```bash
git add src/content.config.ts && git commit -m "feat: define content collection schemas for solutions, publications and links"
```

---

## Task 6: Content Migration — Solutions FR

**Files:**
- Create: 14 files in `src/content/solutions/fr/`

**Depends on:** Task 5

Each file follows this template (example for Apigee):

```markdown
---
name: "Apigee"
slug: "apigee"
vendor: "Google"
year: 2004
openSource: false
deploymentModes: ["saas"]
category: "pure-player"
website: "https://cloud.google.com/apigee"
lang: fr
ratings:
  timeToMarket: 4
  communaute: 4
  cout: 2
  flexibilite: 4
  securite: 3
  onPremise: 1
  saas: 5
  documentation: 4
pros:
  - "Le support Google autour du produit est efficace et agréable"
  - "Solution packagée mais developer-friendly (communauté et documentation sur internet)"
  - "Le produit est très flexible, car s'appuie sur un mécanisme de paramétrage XML de policies en point & click"
  - "Pertinence de l'offre en mode full SaaS"
  - "Pure player API, avec une bonne maturité : déploiement multi-tenant et multi-environnement"
cons:
  - "Le coût de la licence élevé par rapport aux autres solutions"
  - "Marketing de l'offre très orienté ESB avec un risque de vendor lock-in"
  - "Pas de mode hybride pour le moment: offre très orientée SaaS"
  - "Architecture assez monolithique"
  - "Maintenabilité du paramétrage des policies et de la programmation dans le produit"
---

Apigee est une plateforme d'API management orientée cloud, permettant de sécuriser et de manager des API, fondée en 2004 sous le nom de Sonoa Systems. Apigee a été rachetée par Google en 2016.
```

- [ ] **Step 1: Create all 14 FR solution files**

Files to create with content migrated from the existing site (https://api-by-octo.octo.com/):

1. `src/content/solutions/fr/3scale.md`
2. `src/content/solutions/fr/apigee.md`
3. `src/content/solutions/fr/aws.md` (body: "Contenu à venir.", pros/cons: empty arrays)
4. `src/content/solutions/fr/axway.md`
5. `src/content/solutions/fr/broadcom.md`
6. `src/content/solutions/fr/gravitee.md`
7. `src/content/solutions/fr/ibm.md`
8. `src/content/solutions/fr/kong.md`
9. `src/content/solutions/fr/microsoft.md`
10. `src/content/solutions/fr/mulesoft.md`
11. `src/content/solutions/fr/software-ag.md`
12. `src/content/solutions/fr/tibco-mashery.md`
13. `src/content/solutions/fr/tyk.md`
14. `src/content/solutions/fr/wso2.md`

For each file:
- Copy the description from the existing site as the Markdown body
- Copy the pros and cons arrays from the existing site
- Set `ratings` values (1-5) based on the described strengths/weaknesses (these are new and must be estimated from the existing prose)
- Set `deploymentModes`, `category`, `openSource`, `vendor`, `year`, `website` from publicly available info
- Set `lang: fr`

For AWS specifically:
- `pros: []`, `cons: []`
- Body: `Contenu à venir.`
- Use reasonable defaults for ratings (all 3s)

- [ ] **Step 2: Verify build passes schema validation**

```bash
npm run build
```

Expected: Build succeeds. All 14 files pass the Zod schema.

- [ ] **Step 3: Commit**

```bash
git add src/content/solutions/fr/ && git commit -m "content: add 14 API Management solutions in French"
```

---

## Task 7: Content Migration — Solutions EN

**Files:**
- Create: 14 files in `src/content/solutions/en/`

**Depends on:** Task 5

Same structure as Task 6 but with `lang: en` and English translations of descriptions, pros, and cons. The frontmatter data (ratings, deploymentModes, etc.) is identical to FR.

- [ ] **Step 1: Create all 14 EN solution files**

Same list as Task 6, in `src/content/solutions/en/`. Translate descriptions and pros/cons to English.

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/content/solutions/en/ && git commit -m "content: add 14 API Management solutions in English"
```

---

## Task 8: Content Migration — Publications

**Files:**
- Create: 4 files in `src/content/publications/fr/`
- Create: 4 files in `src/content/publications/en/`

**Depends on:** Task 5

Publications to migrate (from existing site):

| Slug | Title (FR) | Type | Download URL |
|------|-----------|------|-------------|
| `refcard-api-design` | RESTful API Design | refcard | https://publication.octo.com/fr/telechargement-refcard-restful-api-design |
| `refcard-api-security` | API Security Principles | refcard | https://publication.octo.com/fr/telechargement-refcard-api-security-principles |
| `refcard-api-management` | API Management Essentials | refcard | https://publication.octo.com/fr/telechargement-refcard-api-management-essentials |
| `refcard-api-architecture` | API Architecture Strategy | refcard | https://publication.octo.com/fr/telechargement-refcard-api-architecture-strategy |

- [ ] **Step 1: Create 4 FR publication files**

Example `src/content/publications/fr/refcard-api-design.md`:

```markdown
---
title: "RESTful API Design"
type: "refcard"
description: "Les principes essentiels pour concevoir des API REST de qualité."
downloadUrl: "https://publication.octo.com/fr/telechargement-refcard-restful-api-design"
date: 2024-01-15
featured: false
lang: fr
---
```

Create all 4 files with appropriate descriptions.

- [ ] **Step 2: Create 4 EN publication files**

Same structure, `lang: en`, English descriptions.

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/content/publications/ && git commit -m "content: add 4 refcard publications in FR and EN"
```

---

## Task 9: Content Migration — Links

**Files:**
- Create: 9 files in `src/content/links/fr/`
- Create: 9 files in `src/content/links/en/`

**Depends on:** Task 5

Links to migrate (from existing site):

| Slug | Title (FR) | URL | Tags |
|------|-----------|-----|------|
| `designer-api-rest` | Designer une API REST | https://blog.octo.com/designer-une-api-rest | design, rest |
| `securiser-api-rest` | Sécuriser une API REST | https://blog.octo.com/securiser-une-api-rest-tout-ce-quil-faut-savoir | securite, rest |
| `choisir-plateforme-apim` | Choisir une plateforme d'API Management en 2025 | https://blog.octo.com/choisir-une-plateforme-d'api-management-en-2025--mon-guide-pour-s'y-retrouver | api-management |
| `strategie-architecture-api` | Stratégie d'architecture API | https://blog.octo.com/strategie-d-architecture-api | architecture |
| `api-hypermedia` | Transformez votre API Web en une API Hypermedia | https://blog.octo.com/transformez-votre-api-web-en-une-api-hypermedia | design, hypermedia |
| `developer-experience` | Réussir la Developer eXperience de son API web | https://blog.octo.com/reussir-la-developer-experience-de-son-api-web | dx, design |
| `put-ou-patch` | PUT ou PATCH : Quelle méthode adopter ? | https://blog.octo.com/should-i-put-or-should-i-patch | rest, design |
| `mcp-llm` | Model Context Protocol (MCP) | https://blog.octo.com/comprendre-le-model-context-protocol-(mcp)--connecter-les-llms-a-vos-donnees-et-outils | ia, mcp |
| `rest-api-cookbook` | The REST API cookbook | https://octo-woapi.github.io/cookbook/ | rest, design |

- [ ] **Step 1: Create 9 FR link files**

Example `src/content/links/fr/designer-api-rest.md`:

```markdown
---
title: "Designer une API REST"
url: "https://blog.octo.com/designer-une-api-rest"
source: "Blog OCTO"
description: "Les fondamentaux du design d'API REST."
tags: ["design", "rest"]
date: 2024-03-01
lang: fr
---
```

- [ ] **Step 2: Create 9 EN link files**

Same structure, `lang: en`, English titles and descriptions.

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/content/links/ && git commit -m "content: add 9 blog links and resources in FR and EN"
```

---

## Task 10: Homepage

**Files:**
- Create: `src/components/HeroHome.astro`
- Create: `src/components/FeaturedPublication.astro`
- Create: `src/components/SectionCard.astro`
- Modify: `src/pages/fr/index.astro`
- Modify: `src/pages/en/index.astro`

**Depends on:** Task 4, Task 5, Task 8

- [ ] **Step 1: Create HeroHome.astro**

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<section class="hero">
  <div class="container hero-inner">
    <span class="hero-subtitle">{t('hero.subtitle')}</span>
    <h1 class="hero-title">{t('hero.title')}<span class="hero-dot">.</span></h1>
    <p class="hero-desc">{t('hero.description')}</p>
    <div class="hero-ctas">
      <a href={`/${lang}/benchmark`} class="btn btn-primary">{t('hero.cta.benchmark')}</a>
      <a href={`/${lang}/guide`} class="btn btn-outline">{t('hero.cta.guide')}</a>
    </div>
  </div>
</section>

<style>
  .hero {
    background: var(--octo-main);
    padding: var(--space-2xl) 0;
    text-align: center;
  }
  .hero-inner {
    max-width: 700px;
  }
  .hero-subtitle {
    display: block;
    color: var(--octo-secondary);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: var(--space-md);
  }
  .hero-title {
    color: var(--octo-white);
    font-size: 3rem;
    font-weight: 800;
    text-transform: none;
    letter-spacing: 0;
  }
  .hero-dot {
    color: var(--octo-secondary);
  }
  .hero-desc {
    color: rgba(255, 255, 255, 0.65);
    font-size: 1.1rem;
    margin: var(--space-md) auto var(--space-lg);
    max-width: 500px;
  }
  .hero-ctas {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    .hero-title { font-size: 2rem; }
    .hero { padding: var(--space-xl) 0; }
  }
</style>
```

- [ ] **Step 2: Create FeaturedPublication.astro**

```astro
---
import { getCollection } from 'astro:content';
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

const allPubs = await getCollection('publications');
const featured = allPubs.find((p) => p.data.featured && p.data.lang === lang);
---

{featured && (
  <section class="featured section">
    <div class="container">
      <span class="featured-label">{t('featured.label')}</span>
      <div class="featured-card">
        {featured.data.image && (
          <img src={featured.data.image} alt={featured.data.title} class="featured-img" />
        )}
        <div class="featured-content">
          <h2 class="featured-title">{featured.data.title}</h2>
          <p class="featured-desc">{featured.data.description}</p>
          <a href={featured.data.downloadUrl} target="_blank" rel="noopener" class="btn btn-primary">
            {t('publications.download')}
          </a>
        </div>
      </div>
    </div>
  </section>
)}

<style>
  .featured-label {
    display: inline-block;
    background: var(--octo-secondary);
    color: var(--octo-main);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 0.3rem 0.8rem;
    border-radius: var(--radius-pill);
    margin-bottom: var(--space-md);
  }
  .featured-card {
    display: flex;
    gap: var(--space-xl);
    background: var(--octo-grey-light);
    border-radius: var(--radius-md);
    padding: var(--space-xl);
    align-items: center;
  }
  .featured-img {
    max-width: 200px;
    border-radius: var(--radius-sm);
  }
  .featured-title {
    text-transform: none;
    letter-spacing: 0;
    margin-bottom: var(--space-sm);
  }
  .featured-desc {
    color: var(--octo-grey);
  }
  @media (max-width: 768px) {
    .featured-card {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
```

- [ ] **Step 3: Create SectionCard.astro**

```astro
---
interface Props {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

const { title, description, href, icon } = Astro.props;
---

<a href={href} class="section-card card">
  {icon && <span class="section-card-icon">{icon}</span>}
  <h3 class="section-card-title">{title}</h3>
  <p class="section-card-desc">{description}</p>
</a>

<style>
  .section-card {
    display: block;
    text-decoration: none;
    color: var(--octo-main);
  }
  .section-card-icon {
    font-size: 1.5rem;
    margin-bottom: var(--space-sm);
    display: block;
  }
  .section-card-title {
    margin-bottom: var(--space-xs);
  }
  .section-card-desc {
    color: var(--octo-grey);
    font-size: 0.9rem;
    margin: 0;
  }
</style>
```

- [ ] **Step 4: Update fr/index.astro**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import HeroHome from '../../components/HeroHome.astro';
import FeaturedPublication from '../../components/FeaturedPublication.astro';
import SectionCard from '../../components/SectionCard.astro';
import { useTranslations } from '../../i18n/utils';

const t = useTranslations('fr');
---

<BaseLayout title="OCTO et l'API Management" description="Publications, benchmark, comparateur et guide pour choisir votre solution d'API Management.">
  <HeroHome />
  <FeaturedPublication />
  <section class="section">
    <div class="container">
      <div class="card-grid home-grid">
        <SectionCard title={t('section.publications.title')} description={t('section.publications.desc')} href="/fr/publications" />
        <SectionCard title={t('section.benchmark.title')} description={t('section.benchmark.desc')} href="/fr/benchmark" />
        <SectionCard title={t('section.links.title')} description={t('section.links.desc')} href="/fr/liens" />
        <SectionCard title={t('section.guide.title')} description={t('section.guide.desc')} href="/fr/guide" />
      </div>
    </div>
  </section>
</BaseLayout>

<style>
  .home-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    .home-grid { grid-template-columns: 1fr; }
  }
</style>
```

- [ ] **Step 5: Update en/index.astro**

Same structure, using `useTranslations('en')` and English routes (`/en/links` instead of `/en/liens`).

- [ ] **Step 6: Verify build**

```bash
npm run build
```

Expected: Homepage renders with hero, optional featured section (hidden if no featured pub), and 4 section cards.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: build homepage with hero, featured publication and navigation grid"
```

---

## Task 11: Publications Page

**Files:**
- Create: `src/components/PublicationCard.astro`
- Create: `src/pages/fr/publications.astro`
- Create: `src/pages/en/publications.astro`

**Depends on:** Task 4, Task 5, Task 8

- [ ] **Step 1: Create PublicationCard.astro**

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

interface Props {
  title: string;
  description: string;
  type: 'refcard' | 'article';
  downloadUrl: string;
  image?: string;
}

const { title, description, type, downloadUrl, image } = Astro.props;
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<article class="pub-card card">
  {image && <img src={image} alt={title} class="pub-card-img" loading="lazy" />}
  <div class="pub-card-body">
    <span class="badge badge-cyan">{type}</span>
    <h3 class="pub-card-title">{title}</h3>
    <p class="pub-card-desc">{description}</p>
    <a href={downloadUrl} target="_blank" rel="noopener" class="btn btn-outline-dark">
      {type === 'refcard' ? t('publications.download') : t('publications.read')}
    </a>
  </div>
</article>

<style>
  .pub-card {
    display: flex;
    flex-direction: column;
  }
  .pub-card-img {
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-md);
    max-height: 160px;
    object-fit: cover;
  }
  .pub-card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .pub-card-title {
    margin: var(--space-sm) 0;
  }
  .pub-card-desc {
    color: var(--octo-grey);
    font-size: 0.9rem;
    flex: 1;
  }
</style>
```

- [ ] **Step 2: Create fr/publications.astro**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import PublicationCard from '../../components/PublicationCard.astro';
import { getCollection } from 'astro:content';
import { useTranslations } from '../../i18n/utils';

const t = useTranslations('fr');
const allPubs = await getCollection('publications');
const pubs = allPubs
  .filter((p) => p.data.lang === 'fr')
  .sort((a, b) => {
    // Refcards first, then articles
    if (a.data.type !== b.data.type) return a.data.type === 'refcard' ? -1 : 1;
    return b.data.date.getTime() - a.data.date.getTime();
  });
---

<BaseLayout title={t('publications.title')} description="Refcards et articles autour des API par OCTO Technology.">
  <section class="section">
    <div class="container">
      <h1 class="heading-dot">{t('publications.title')}</h1>
      <div class="card-grid" style="margin-top: var(--space-xl);">
        {pubs.map((pub) => (
          <PublicationCard
            title={pub.data.title}
            description={pub.data.description}
            type={pub.data.type}
            downloadUrl={pub.data.downloadUrl}
            image={pub.data.image}
          />
        ))}
      </div>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 3: Create en/publications.astro**

Same pattern, filter by `lang === 'en'`, use `useTranslations('en')`.

- [ ] **Step 4: Verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add publications page with refcard and article cards"
```

---

## Task 12: Links Page

**Files:**
- Create: `src/components/LinkCard.astro`
- Create: `src/pages/fr/liens.astro`
- Create: `src/pages/en/links.astro`

**Depends on:** Task 4, Task 5, Task 9

- [ ] **Step 1: Create LinkCard.astro**

```astro
---
interface Props {
  title: string;
  url: string;
  source: string;
  description?: string;
  tags: string[];
}

const { title, url, source, description, tags } = Astro.props;
---

<article class="link-card card">
  <div class="link-card-header">
    <span class="link-card-source">{source}</span>
    <svg class="link-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M7 17L17 7M17 7H7M17 7V17"/>
    </svg>
  </div>
  <a href={url} target="_blank" rel="noopener" class="link-card-title-link">
    <h3 class="link-card-title">{title}</h3>
  </a>
  {description && <p class="link-card-desc">{description}</p>}
  <div class="tag-list">
    {tags.map((tag) => <span class="tag">{tag}</span>)}
  </div>
</article>

<style>
  .link-card { position: relative; }
  .link-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-sm);
  }
  .link-card-source {
    font-size: 0.75rem;
    color: var(--octo-secondary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .link-card-arrow {
    color: var(--octo-grey);
    transition: transform 0.2s;
  }
  .link-card:hover .link-card-arrow {
    transform: translate(2px, -2px);
    color: var(--octo-secondary);
  }
  .link-card-title-link {
    text-decoration: none;
    color: var(--octo-main);
  }
  .link-card-title-link::after {
    content: '';
    position: absolute;
    inset: 0;
  }
  .link-card-desc {
    color: var(--octo-grey);
    font-size: 0.9rem;
  }
</style>
```

- [ ] **Step 2: Create fr/liens.astro**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import LinkCard from '../../components/LinkCard.astro';
import { getCollection } from 'astro:content';
import { useTranslations } from '../../i18n/utils';

const t = useTranslations('fr');
const allLinks = await getCollection('links');
const links = allLinks
  .filter((l) => l.data.lang === 'fr')
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
---

<BaseLayout title={t('links.title')} description="Articles de blog et ressources autour des API.">
  <section class="section">
    <div class="container">
      <h1 class="heading-dot">{t('links.title')}</h1>
      <div class="card-grid" style="margin-top: var(--space-xl);">
        {links.map((link) => (
          <LinkCard
            title={link.data.title}
            url={link.data.url}
            source={link.data.source}
            description={link.data.description}
            tags={link.data.tags}
          />
        ))}
      </div>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 3: Create en/links.astro**

Same, filter `lang === 'en'`, use `useTranslations('en')`.

- [ ] **Step 4: Verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add links page with tagged resource cards"
```

---

## Task 13: Benchmark Page

**Files:**
- Create: `src/components/SolutionCard.astro`
- Create: `src/components/SolutionAccordion.astro`
- Create: `src/components/RatingBar.astro`
- Create: `src/pages/fr/benchmark.astro`
- Create: `src/pages/en/benchmark.astro`

**Depends on:** Task 4, Task 5, Task 6 (or Task 7)

- [ ] **Step 1: Create RatingBar.astro**

```astro
---
interface Props {
  label: string;
  value: number; // 1-5
}

const { label, value } = Astro.props;
const percent = (value / 5) * 100;
---

<div class="rating-bar">
  <span class="rating-bar-label">{label}</span>
  <div class="rating-bar-track">
    <div class="rating-bar-fill" style={`width: ${percent}%`}></div>
  </div>
  <span class="rating-bar-value">{value}/5</span>
</div>

<style>
  .rating-bar-value {
    font-size: 0.8rem;
    color: var(--octo-grey);
    flex: 0 0 35px;
    text-align: right;
  }
</style>
```

- [ ] **Step 2: Create SolutionAccordion.astro**

```astro
---
import RatingBar from './RatingBar.astro';
import { getLangFromUrl, useTranslations } from '../i18n/utils';

interface Props {
  name: string;
  slug: string;
  vendor: string;
  year: number;
  openSource: boolean;
  deploymentModes: string[];
  description: string;
  ratings: Record<string, number>;
  pros: string[];
  cons: string[];
}

const { name, slug, vendor, year, openSource, deploymentModes, description, ratings, pros, cons } = Astro.props;
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

const ratingKeys = ['timeToMarket', 'communaute', 'cout', 'flexibilite', 'securite', 'onPremise', 'saas', 'documentation'];
---

<details class="solution-accordion" id={`solution-${slug}`}>
  <summary class="solution-header">
    <div class="solution-header-left">
      <h3 class="solution-name">{name}</h3>
      <span class="solution-vendor">{vendor} — {year}</span>
    </div>
    <div class="solution-badges">
      {openSource && <span class="badge badge-cyan">Open Source</span>}
      {deploymentModes.map((mode) => <span class="badge badge-navy">{mode}</span>)}
    </div>
    <svg class="solution-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
  </summary>
  <div class="solution-body">
    <p class="solution-desc">{description}</p>

    {pros.length > 0 && (
      <div class="solution-section">
        <h4>{t('benchmark.pros')}</h4>
        <ul class="solution-list solution-pros">
          {pros.map((p) => <li>{p}</li>)}
        </ul>
      </div>
    )}

    {cons.length > 0 && (
      <div class="solution-section">
        <h4>{t('benchmark.cons')}</h4>
        <ul class="solution-list solution-cons">
          {cons.map((c) => <li>{c}</li>)}
        </ul>
      </div>
    )}

    {(pros.length === 0 && cons.length === 0) && (
      <p class="solution-coming-soon">{t('benchmark.comingSoon')}</p>
    )}

    <div class="solution-section">
      <h4>{t('benchmark.ratings')}</h4>
      <div class="solution-ratings">
        {ratingKeys.map((key) => (
          <RatingBar label={t(`rating.${key}`)} value={ratings[key]} />
        ))}
      </div>
    </div>
  </div>
</details>

<style>
  .solution-accordion {
    border-radius: var(--radius-md);
    background: var(--octo-grey-light);
    margin-bottom: var(--space-md);
    overflow: hidden;
  }
  .solution-header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-lg);
    cursor: pointer;
    list-style: none;
    user-select: none;
  }
  .solution-header::-webkit-details-marker { display: none; }
  .solution-header-left { flex: 1; }
  .solution-name { margin: 0; font-size: 1.1rem; text-transform: none; letter-spacing: 0; }
  .solution-vendor { font-size: 0.8rem; color: var(--octo-grey); }
  .solution-badges { display: flex; gap: var(--space-xs); flex-wrap: wrap; }
  .solution-chevron {
    transition: transform 0.3s;
    color: var(--octo-grey);
    flex-shrink: 0;
  }
  details[open] .solution-chevron { transform: rotate(180deg); }
  .solution-body {
    padding: 0 var(--space-lg) var(--space-lg);
    border-top: 1px solid rgba(14, 35, 86, 0.08);
  }
  .solution-desc {
    margin-bottom: var(--space-lg);
    color: var(--octo-grey);
  }
  .solution-section {
    margin-bottom: var(--space-lg);
  }
  .solution-section h4 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: var(--space-sm);
    color: var(--octo-main);
  }
  .solution-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }
  .solution-list li {
    position: relative;
    padding-left: 1.2rem;
    font-size: 0.9rem;
    color: var(--octo-main);
  }
  .solution-list li::before {
    position: absolute;
    left: 0;
  }
  .solution-pros li::before { content: '+'; color: var(--octo-secondary); font-weight: 700; }
  .solution-cons li::before { content: '−'; color: var(--octo-red); font-weight: 700; }
  .solution-coming-soon {
    color: var(--octo-grey);
    font-style: italic;
  }
  .solution-ratings {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    max-width: 500px;
  }
  @media (max-width: 768px) {
    .solution-header { flex-wrap: wrap; }
    .solution-badges { width: 100%; margin-top: var(--space-sm); }
  }
</style>
```

- [ ] **Step 3: Create fr/benchmark.astro**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import SolutionAccordion from '../../components/SolutionAccordion.astro';
import { getCollection } from 'astro:content';
import { useTranslations } from '../../i18n/utils';

const t = useTranslations('fr');
const allSolutions = await getCollection('solutions');
const solutions = allSolutions
  .filter((s) => s.data.lang === 'fr')
  .sort((a, b) => a.data.name.localeCompare(b.data.name));
---

<BaseLayout title={t('benchmark.title')} description="Comparatif des solutions d'API Management : 3scale, Apigee, Kong, Gravitee et plus.">
  <section class="section">
    <div class="container">
      <h1 class="heading-dot">{t('benchmark.title')}</h1>
      <div class="benchmark-list" style="margin-top: var(--space-xl);">
        {solutions.map(async (sol) => {
          const { Content } = await sol.render();
          return (
            <SolutionAccordion
              name={sol.data.name}
              slug={sol.data.slug}
              vendor={sol.data.vendor}
              year={sol.data.year}
              openSource={sol.data.openSource}
              deploymentModes={sol.data.deploymentModes}
              description={sol.body || ''}
              ratings={sol.data.ratings}
              pros={sol.data.pros}
              cons={sol.data.cons}
            />
          );
        })}
      </div>
    </div>
  </section>
</BaseLayout>
```

Note: passing `sol.body` (raw markdown string) as description. If rendered HTML is preferred, use `<Content />` inside the accordion instead. For simplicity we use the raw body as plain text here. Adjust in implementation if needed.

- [ ] **Step 4: Create en/benchmark.astro**

Same pattern, filter `lang === 'en'`.

- [ ] **Step 5: Verify build**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat: add benchmark page with accordion solution cards and rating bars"
```

---

## Task 14: Quiz Component & Data

**Files:**
- Create: `src/data/quiz-questions.json`
- Create: `src/components/Quiz.astro`

**Depends on:** Task 4, Task 3

- [ ] **Step 1: Create quiz-questions.json**

```json
{
  "fr": {
    "questions": [
      {
        "id": "deployment",
        "question": "Quel mode de déploiement privilégiez-vous ?",
        "options": [
          { "label": "Full SaaS (cloud managé)", "scores": { "apigee": 3, "microsoft": 3, "tyk": 2, "tibco-mashery": 2 } },
          { "label": "On-premise (sur vos serveurs)", "scores": { "kong": 3, "gravitee": 3, "wso2": 3, "axway": 2, "ibm": 2 } },
          { "label": "Hybride (mix des deux)", "scores": { "3scale": 3, "kong": 2, "tyk": 2, "broadcom": 2 } }
        ]
      },
      {
        "id": "budget",
        "question": "Quel est votre budget pour la solution ?",
        "options": [
          { "label": "Limité — open source de préférence", "scores": { "kong": 3, "gravitee": 3, "3scale": 3, "tyk": 2, "wso2": 2 } },
          { "label": "Modéré — licence raisonnable", "scores": { "tyk": 3, "3scale": 2, "gravitee": 2, "microsoft": 2 } },
          { "label": "Conséquent — pas de contrainte", "scores": { "apigee": 3, "ibm": 2, "mulesoft": 2, "axway": 2, "kong": 1 } }
        ]
      },
      {
        "id": "ecosystem",
        "question": "Quel est votre écosystème technologique principal ?",
        "options": [
          { "label": "Google Cloud", "scores": { "apigee": 3 } },
          { "label": "AWS", "scores": { "aws": 3, "kong": 2, "tyk": 1 } },
          { "label": "Azure / Microsoft", "scores": { "microsoft": 3 } },
          { "label": "Red Hat / OpenShift", "scores": { "3scale": 3 } },
          { "label": "Agnostique / multi-cloud", "scores": { "kong": 3, "gravitee": 3, "tyk": 2, "wso2": 2 } }
        ]
      },
      {
        "id": "maturity",
        "question": "Quel est votre niveau de maturité en API Management ?",
        "options": [
          { "label": "Débutant — première mise en place", "scores": { "tyk": 3, "gravitee": 3, "kong": 2 } },
          { "label": "Intermédiaire — quelques API en production", "scores": { "kong": 3, "3scale": 2, "apigee": 2, "gravitee": 2 } },
          { "label": "Avancé — plateforme API mature", "scores": { "apigee": 3, "kong": 3, "ibm": 2, "axway": 2 } }
        ]
      },
      {
        "id": "priority",
        "question": "Quelle est votre priorité principale ?",
        "options": [
          { "label": "Time to market rapide", "scores": { "tyk": 3, "gravitee": 3, "3scale": 2, "kong": 2 } },
          { "label": "Flexibilité et personnalisation", "scores": { "kong": 3, "apigee": 3, "3scale": 2 } },
          { "label": "Support éditeur solide", "scores": { "apigee": 3, "ibm": 3, "microsoft": 2, "axway": 2 } },
          { "label": "Communauté et open source", "scores": { "kong": 3, "gravitee": 3, "3scale": 2, "wso2": 2, "tyk": 2 } }
        ]
      }
    ]
  },
  "en": {
    "questions": [
      {
        "id": "deployment",
        "question": "What deployment mode do you prefer?",
        "options": [
          { "label": "Full SaaS (managed cloud)", "scores": { "apigee": 3, "microsoft": 3, "tyk": 2, "tibco-mashery": 2 } },
          { "label": "On-premise (your servers)", "scores": { "kong": 3, "gravitee": 3, "wso2": 3, "axway": 2, "ibm": 2 } },
          { "label": "Hybrid (mix of both)", "scores": { "3scale": 3, "kong": 2, "tyk": 2, "broadcom": 2 } }
        ]
      },
      {
        "id": "budget",
        "question": "What is your budget for the solution?",
        "options": [
          { "label": "Limited — open source preferred", "scores": { "kong": 3, "gravitee": 3, "3scale": 3, "tyk": 2, "wso2": 2 } },
          { "label": "Moderate — reasonable licensing", "scores": { "tyk": 3, "3scale": 2, "gravitee": 2, "microsoft": 2 } },
          { "label": "Substantial — no constraints", "scores": { "apigee": 3, "ibm": 2, "mulesoft": 2, "axway": 2, "kong": 1 } }
        ]
      },
      {
        "id": "ecosystem",
        "question": "What is your main technology ecosystem?",
        "options": [
          { "label": "Google Cloud", "scores": { "apigee": 3 } },
          { "label": "AWS", "scores": { "aws": 3, "kong": 2, "tyk": 1 } },
          { "label": "Azure / Microsoft", "scores": { "microsoft": 3 } },
          { "label": "Red Hat / OpenShift", "scores": { "3scale": 3 } },
          { "label": "Agnostic / multi-cloud", "scores": { "kong": 3, "gravitee": 3, "tyk": 2, "wso2": 2 } }
        ]
      },
      {
        "id": "maturity",
        "question": "What is your API Management maturity level?",
        "options": [
          { "label": "Beginner — first implementation", "scores": { "tyk": 3, "gravitee": 3, "kong": 2 } },
          { "label": "Intermediate — some APIs in production", "scores": { "kong": 3, "3scale": 2, "apigee": 2, "gravitee": 2 } },
          { "label": "Advanced — mature API platform", "scores": { "apigee": 3, "kong": 3, "ibm": 2, "axway": 2 } }
        ]
      },
      {
        "id": "priority",
        "question": "What is your main priority?",
        "options": [
          { "label": "Fast time to market", "scores": { "tyk": 3, "gravitee": 3, "3scale": 2, "kong": 2 } },
          { "label": "Flexibility and customization", "scores": { "kong": 3, "apigee": 3, "3scale": 2 } },
          { "label": "Solid vendor support", "scores": { "apigee": 3, "ibm": 3, "microsoft": 2, "axway": 2 } },
          { "label": "Community and open source", "scores": { "kong": 3, "gravitee": 3, "3scale": 2, "wso2": 2, "tyk": 2 } }
        ]
      }
    ]
  }
}
```

- [ ] **Step 2: Create Quiz.astro**

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';
import quizData from '../data/quiz-questions.json';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const questions = quizData[lang].questions;
---

<div class="quiz" id="quiz-container" data-lang={lang} data-benchmark-url={`/${lang}/benchmark`}>
  <h2 class="heading-dot">{t('guide.quiz.title')}</h2>
  <p class="quiz-desc">{t('guide.quiz.desc')}</p>

  <!-- Progress -->
  <div class="quiz-progress" id="quiz-progress">
    <div class="quiz-progress-fill" id="quiz-progress-fill"></div>
  </div>

  <!-- Questions -->
  <div id="quiz-questions">
    {questions.map((q, i) => (
      <div class="quiz-question" data-index={i} data-question-id={q.id} style={i > 0 ? 'display:none' : ''}>
        <h3 class="quiz-question-title">{q.question}</h3>
        <div class="quiz-options">
          {q.options.map((opt, j) => (
            <button class="quiz-option" data-scores={JSON.stringify(opt.scores)} data-index={j}>
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>

  <!-- Navigation -->
  <div class="quiz-nav" id="quiz-nav">
    <button class="btn btn-outline-dark" id="quiz-prev" style="display:none">{t('guide.quiz.prev')}</button>
    <button class="btn btn-primary" id="quiz-next" style="display:none">{t('guide.quiz.next')}</button>
  </div>

  <!-- Results -->
  <div id="quiz-results" style="display:none">
    <h3>{t('guide.quiz.results')}</h3>
    <div id="quiz-results-list" class="card-grid"></div>
    <button class="btn btn-outline-dark" id="quiz-restart" style="margin-top:var(--space-lg)">{t('guide.quiz.restart')}</button>
  </div>
</div>

<script>
  const container = document.getElementById('quiz-container')!;
  const lang = container.dataset.lang!;
  const benchmarkUrl = container.dataset.benchmarkUrl!;
  const questions = container.querySelectorAll('.quiz-question');
  const progressFill = document.getElementById('quiz-progress-fill')!;
  const prevBtn = document.getElementById('quiz-prev')!;
  const nextBtn = document.getElementById('quiz-next')!;
  const resultsDiv = document.getElementById('quiz-results')!;
  const resultsList = document.getElementById('quiz-results-list')!;
  const restartBtn = document.getElementById('quiz-restart')!;
  const navDiv = document.getElementById('quiz-nav')!;
  const progressDiv = document.getElementById('quiz-progress')!;

  let current = 0;
  const answers: Record<string, Record<string, number>> = {};

  function updateUI() {
    questions.forEach((q, i) => {
      (q as HTMLElement).style.display = i === current ? '' : 'none';
    });
    prevBtn.style.display = current > 0 ? '' : 'none';
    nextBtn.style.display = answers[questions[current].getAttribute('data-question-id')!] ? '' : 'none';
    progressFill.style.width = `${((current + 1) / questions.length) * 100}%`;
  }

  container.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('.quiz-option') as HTMLElement | null;
    if (!btn) return;
    const questionEl = btn.closest('.quiz-question')!;
    const qId = questionEl.getAttribute('data-question-id')!;
    // Deselect others
    questionEl.querySelectorAll('.quiz-option').forEach((o) => o.classList.remove('selected'));
    btn.classList.add('selected');
    answers[qId] = JSON.parse(btn.dataset.scores!);
    nextBtn.style.display = '';
  });

  nextBtn.addEventListener('click', () => {
    if (current < questions.length - 1) {
      current++;
      updateUI();
    } else {
      showResults();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (current > 0) { current--; updateUI(); }
  });

  restartBtn.addEventListener('click', () => {
    current = 0;
    Object.keys(answers).forEach((k) => delete answers[k]);
    container.querySelectorAll('.quiz-option').forEach((o) => o.classList.remove('selected'));
    resultsDiv.style.display = 'none';
    navDiv.style.display = '';
    progressDiv.style.display = '';
    document.getElementById('quiz-questions')!.style.display = '';
    updateUI();
  });

  function showResults() {
    const totals: Record<string, number> = {};
    Object.values(answers).forEach((scores) => {
      Object.entries(scores).forEach(([slug, score]) => {
        totals[slug] = (totals[slug] || 0) + score;
      });
    });

    const maxPossible = Object.values(answers).reduce((sum, scores) => {
      return sum + Math.max(...Object.values(scores));
    }, 0);

    const sorted = Object.entries(totals)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

    const seeLabel = lang === 'fr' ? 'Voir dans le benchmark' : 'See in benchmark';

    resultsList.innerHTML = sorted
      .map(([slug, score]) => {
        const pct = Math.round((score / maxPossible) * 100);
        return `<div class="card" style="text-align:center;padding:var(--space-lg)">
          <h3 style="text-transform:none;letter-spacing:0;margin-bottom:var(--space-sm)">${slug}</h3>
          <div style="font-size:2rem;font-weight:800;color:var(--octo-secondary)">${pct}%</div>
          <a href="${benchmarkUrl}#solution-${slug}" class="btn btn-outline-dark" style="margin-top:var(--space-md)">${seeLabel}</a>
        </div>`;
      })
      .join('');

    document.getElementById('quiz-questions')!.style.display = 'none';
    navDiv.style.display = 'none';
    progressDiv.style.display = 'none';
    resultsDiv.style.display = '';
  }

  updateUI();
</script>

<style>
  .quiz { margin-bottom: var(--space-2xl); }
  .quiz-desc { color: var(--octo-grey); margin-bottom: var(--space-lg); }
  .quiz-progress {
    height: 4px;
    background: var(--octo-grey-light);
    border-radius: var(--radius-pill);
    margin-bottom: var(--space-xl);
    overflow: hidden;
  }
  .quiz-progress-fill {
    height: 100%;
    background: var(--octo-secondary);
    border-radius: var(--radius-pill);
    transition: width 0.3s;
  }
  .quiz-question-title {
    text-transform: none;
    letter-spacing: 0;
    margin-bottom: var(--space-lg);
  }
  .quiz-options {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  .quiz-option {
    display: block;
    width: 100%;
    text-align: left;
    padding: var(--space-md) var(--space-lg);
    background: var(--octo-grey-light);
    border: 2px solid transparent;
    border-radius: var(--radius-md);
    font-family: var(--font-family);
    font-size: 0.95rem;
    color: var(--octo-main);
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
  }
  .quiz-option:hover { border-color: var(--octo-secondary); }
  .quiz-option.selected {
    border-color: var(--octo-secondary);
    background: rgba(0, 210, 221, 0.08);
  }
  .quiz-nav {
    display: flex;
    justify-content: space-between;
    margin-top: var(--space-lg);
  }
</style>
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/data/ src/components/Quiz.astro && git commit -m "feat: add interactive quiz component with scoring system"
```

---

## Task 15: Comparator Component

**Files:**
- Create: `src/components/Comparator.astro`

**Depends on:** Task 3, Task 5, Task 6 (or Task 7)

- [ ] **Step 1: Create Comparator.astro**

```astro
---
import { getCollection } from 'astro:content';
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

const allSolutions = await getCollection('solutions');
const solutions = allSolutions
  .filter((s) => s.data.lang === lang)
  .sort((a, b) => a.data.name.localeCompare(b.data.name));

// Inject all solution data as JSON for client-side use
const solutionData = solutions.map((s) => ({
  slug: s.data.slug,
  name: s.data.name,
  vendor: s.data.vendor,
  ratings: s.data.ratings,
  pros: s.data.pros,
  cons: s.data.cons,
}));

const ratingLabels: Record<string, string> = {};
['timeToMarket', 'communaute', 'cout', 'flexibilite', 'securite', 'onPremise', 'saas', 'documentation'].forEach((key) => {
  ratingLabels[key] = t(`rating.${key}`);
});
---

<div class="comparator" id="comparator">
  <h2 class="heading-dot">{t('guide.comparator.title')}</h2>
  <p class="comparator-desc">{t('guide.comparator.desc')}</p>

  <div class="comparator-selectors">
    <select class="comparator-select" id="comp-select-1">
      <option value="">{t('guide.comparator.select')}</option>
      {solutions.map((s) => <option value={s.data.slug}>{s.data.name}</option>)}
    </select>
    <select class="comparator-select" id="comp-select-2">
      <option value="">{t('guide.comparator.select')}</option>
      {solutions.map((s) => <option value={s.data.slug}>{s.data.name}</option>)}
    </select>
    <select class="comparator-select" id="comp-select-3">
      <option value="">{t('guide.comparator.select')}</option>
      {solutions.map((s) => <option value={s.data.slug}>{s.data.name}</option>)}
    </select>
  </div>

  <div id="comparator-output"></div>

  <script type="application/json" id="comparator-data">
    {JSON.stringify({ solutions: solutionData, ratingLabels })}
  </script>
</div>

<script>
  const data = JSON.parse(document.getElementById('comparator-data')!.textContent!);
  const solutions: Record<string, any> = {};
  data.solutions.forEach((s: any) => { solutions[s.slug] = s; });

  const selects = [
    document.getElementById('comp-select-1') as HTMLSelectElement,
    document.getElementById('comp-select-2') as HTMLSelectElement,
    document.getElementById('comp-select-3') as HTMLSelectElement,
  ];

  const output = document.getElementById('comparator-output')!;

  function render() {
    const selected = selects.map((s) => s.value).filter(Boolean);
    if (selected.length < 2) {
      output.innerHTML = '';
      return;
    }

    const sols = selected.map((slug) => solutions[slug]).filter(Boolean);
    const ratingKeys = Object.keys(data.ratingLabels);

    let html = `<table class="comp-table">
      <thead><tr><th></th>${sols.map((s: any) => `<th>${s.name}</th>`).join('')}</tr></thead>
      <tbody>`;

    ratingKeys.forEach((key: string) => {
      html += `<tr><td class="comp-label">${data.ratingLabels[key]}</td>`;
      sols.forEach((s: any) => {
        const val = s.ratings[key];
        const pct = (val / 5) * 100;
        html += `<td><div class="rating-bar-track"><div class="rating-bar-fill" style="width:${pct}%"></div></div><span class="comp-val">${val}/5</span></td>`;
      });
      html += `</tr>`;
    });

    html += `</tbody></table>`;

    // Pros / Cons
    html += `<div class="comp-details" style="display:grid;grid-template-columns:repeat(${sols.length},1fr);gap:var(--space-lg);margin-top:var(--space-xl)">`;
    sols.forEach((s: any) => {
      html += `<div>
        <h4 style="margin-bottom:var(--space-md)">${s.name}</h4>
        ${s.pros.length ? `<p style="font-weight:700;color:var(--octo-secondary);font-size:0.8rem;text-transform:uppercase;letter-spacing:1px">Pros</p><ul class="solution-list solution-pros">${s.pros.map((p: string) => `<li>${p}</li>`).join('')}</ul>` : ''}
        ${s.cons.length ? `<p style="font-weight:700;color:var(--octo-red);font-size:0.8rem;text-transform:uppercase;letter-spacing:1px;margin-top:var(--space-md)">Cons</p><ul class="solution-list solution-cons">${s.cons.map((c: string) => `<li>${c}</li>`).join('')}</ul>` : ''}
      </div>`;
    });
    html += `</div>`;

    output.innerHTML = html;
  }

  selects.forEach((s) => s.addEventListener('change', render));
</script>

<style>
  .comparator { margin-top: var(--space-2xl); }
  .comparator-desc { color: var(--octo-grey); margin-bottom: var(--space-lg); }
  .comparator-selectors {
    display: flex;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
    flex-wrap: wrap;
  }
  .comparator-select {
    flex: 1;
    min-width: 200px;
    padding: 0.75rem 1rem;
    border: 2px solid var(--octo-grey-light);
    border-radius: var(--radius-md);
    font-family: var(--font-family);
    font-size: 0.9rem;
    color: var(--octo-main);
    background: var(--octo-white);
    cursor: pointer;
    transition: border-color 0.2s;
  }
  .comparator-select:focus {
    outline: none;
    border-color: var(--octo-secondary);
  }
  .comp-table {
    width: 100%;
    border-collapse: collapse;
  }
  .comp-table th {
    text-align: center;
    padding: var(--space-sm) var(--space-md);
    font-size: 0.9rem;
    border-bottom: 2px solid var(--octo-grey-light);
  }
  .comp-table td {
    padding: var(--space-sm) var(--space-md);
    border-bottom: 1px solid var(--octo-grey-light);
  }
  .comp-label {
    font-size: 0.85rem;
    color: var(--octo-grey);
    white-space: nowrap;
  }
  .comp-val {
    font-size: 0.75rem;
    color: var(--octo-grey);
    display: block;
    text-align: right;
    margin-top: 2px;
  }
  @media (max-width: 768px) {
    .comp-table { font-size: 0.8rem; }
    .comparator-selectors { flex-direction: column; }
  }
</style>
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Comparator.astro && git commit -m "feat: add interactive comparator component with side-by-side view"
```

---

## Task 16: Guide Page (assembly)

**Files:**
- Create: `src/pages/fr/guide.astro`
- Create: `src/pages/en/guide.astro`

**Depends on:** Task 14, Task 15, Task 4

- [ ] **Step 1: Create fr/guide.astro**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Quiz from '../../components/Quiz.astro';
import Comparator from '../../components/Comparator.astro';
import { useTranslations } from '../../i18n/utils';

const t = useTranslations('fr');
---

<BaseLayout title={t('guide.title')} description="Quiz et comparateur pour choisir votre solution d'API Management.">
  <section class="section">
    <div class="container">
      <h1 class="heading-dot">{t('guide.title')}</h1>
      <p class="guide-intro">{t('guide.intro')}</p>
    </div>
  </section>

  <section class="section" style="background: var(--octo-grey-light);">
    <div class="container">
      <Quiz />
    </div>
  </section>

  <section class="section">
    <div class="container">
      <Comparator />
    </div>
  </section>
</BaseLayout>

<style>
  .guide-intro {
    color: var(--octo-grey);
    font-size: 1.1rem;
    max-width: 700px;
    margin-top: var(--space-lg);
  }
</style>
```

- [ ] **Step 2: Create en/guide.astro**

Same pattern with `useTranslations('en')`.

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/*/guide.astro && git commit -m "feat: add guide page assembling quiz and comparator"
```

---

## Task 17: GitHub Actions CI/CD

**Files:**
- Create: `.github/workflows/deploy.yml`

**Depends on:** Task 1

- [ ] **Step 1: Create deploy.yml**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Commit**

```bash
git add .github/ && git commit -m "ci: add GitHub Actions workflow for Pages deployment"
```

---

## Task 18: Final Build Verification

**Files:** None (verification only)

**Depends on:** All previous tasks

- [ ] **Step 1: Full build**

```bash
npm run build
```

Expected: Build succeeds with no errors, no warnings. All pages generated in `dist/`.

- [ ] **Step 2: Verify generated pages**

```bash
find dist -name '*.html' | sort
```

Expected output should include:
- `dist/index.html` (redirect)
- `dist/fr/index.html`
- `dist/fr/publications/index.html`
- `dist/fr/liens/index.html`
- `dist/fr/benchmark/index.html`
- `dist/fr/guide/index.html`
- `dist/en/index.html`
- `dist/en/publications/index.html`
- `dist/en/links/index.html`
- `dist/en/benchmark/index.html`
- `dist/en/guide/index.html`
- `dist/sitemap-0.xml`

- [ ] **Step 3: Test dev server**

```bash
npm run dev
```

Manually verify:
- Homepage loads at localhost:4321/fr/
- Language switcher works (FR ↔ EN)
- All 4 navigation cards link correctly
- Benchmark page shows 14 solutions, accordions open/close
- Guide page quiz works (select answers, see results)
- Guide page comparator works (select 2+ solutions, table appears)
- Publications and links pages render correctly
- Mobile responsive (resize browser)

- [ ] **Step 4: Final commit if any fixes needed**

```bash
git add -A && git commit -m "fix: final polish and build verification"
```

---

## Parallelization Notes

The following tasks can be run **in parallel** by independent subagents:

| Parallel Group | Tasks | Prerequisite |
|----------------|-------|-------------|
| A — Content | Task 6, Task 7, Task 8, Task 9 | Task 5 |
| B — Pages | Task 11, Task 12 | Task 4 + content |
| C — Interactive | Task 14, Task 15 | Task 3 + Task 5 |
| D — Infra | Task 17 | Task 1 |

**Critical path:** Task 1 → Task 2 + Task 3 + Task 5 → Task 4 → Task 10 → Tasks 11-16 → Task 18
