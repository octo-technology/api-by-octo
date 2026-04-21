# API by OCTO - Site vitrine statique

## Contexte

OCTO Technology dispose d'un site existant (api-by-octo.octo.com) dédié à l'API Management : benchmark de solutions, publications, quiz d'aide au choix. Ce site vieillissant (HTML/CSS/JS pur, single-page) doit être reconstruit en conservant le contenu existant mais avec une architecture moderne, maintenable, et un design aligné sur l'identité visuelle OCTO.

**Source de contenu existante :** https://api-by-octo.octo.com/ (repo: https://github.com/octo-technology/api-by-octo)

## Objectif

Créer un site vitrine statique, bilingue (FR/EN), multi-pages, destiné à un public mixte (développeurs débutants, intermédiaires, architectes/tech leads). Le site présente l'expertise API d'OCTO à travers 4 sections principales + une publication mise en avant ("Culture API").

## Stack technique

- **SSG :** Astro (zero JS par défaut, content collections, scoped CSS)
- **CSS :** Vanilla avec custom properties OCTO, aucun framework CSS
- **JS :** Vanilla pour les composants interactifs (quiz, comparateur, accordéon)
- **i18n :** Routing par préfixe (/fr/, /en/) + fichier de traductions UI
- **Hébergement :** GitHub Pages via GitHub Actions
- **Données :** Markdown avec frontmatter structuré + JSON pour le quiz

## Direction artistique

Basée sur l'identité OCTO Technology (octo.com), sans copier le site principal.

### Tokens de design

| Token | Valeur | Usage |
|-------|--------|-------|
| `--octo-main` | `#0e2356` | Navy primaire (hero, header, textes) |
| `--octo-secondary` | `#00d2dd` | Cyan accent (CTAs, points décoratifs, highlights) |
| `--octo-grey` | `#8691aa` | Texte secondaire |
| `--octo-grey-light` | `#f5f6fa` | Fonds de cards, sections alternées |
| `--octo-red` | `#e60000` | Alertes (usage minimal) |
| `--octo-white` | `#ffffff` | Fond principal |

### Typographie

- **Police :** Outfit (Google Fonts), fallback Arial, Helvetica, sans-serif
- **Poids :** 300 (light), 400 (regular), 600 (semi-bold), 700 (bold), 800 (extra-bold)
- **Titres :** Uppercase, letter-spacing élargi, poids 700-800
- **Accent décoratif :** Point cyan après les titres (`.` en `--octo-secondary`)

### Style visuel

- Fond navy pour le hero et certaines sections d'accent
- Fond blanc pour le contenu principal
- Cards avec border-radius arrondis, fond `--octo-grey-light`
- Boutons pill (border-radius élevé) : primaire = cyan sur navy, secondaire = outline
- Style clean, aéré, professionnel

## Architecture du projet

```
api-by-octo-2/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.ico
│   └── assets/
│       ├── logo-octo.svg
│       ├── logo-octo-white.svg
│       ├── og-image.png
│       └── solutions/          # Logos des solutions APIM
├── src/
│   ├── content/
│   │   ├── config.ts           # Schémas des content collections
│   │   ├── solutions/
│   │   │   ├── fr/             # 1 fichier .md par solution (14 solutions)
│   │   │   └── en/
│   │   ├── publications/
│   │   │   ├── fr/
│   │   │   └── en/
│   │   └── links/
│   │       ├── fr/
│   │       └── en/
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
│   │   ├── index.astro         # Redirect → /fr/
│   │   ├── fr/
│   │   │   ├── index.astro
│   │   │   ├── publications.astro
│   │   │   ├── liens.astro
│   │   │   ├── benchmark.astro
│   │   │   └── guide.astro
│   │   └── en/
│   │       ├── index.astro
│   │       ├── publications.astro
│   │       ├── links.astro
│   │       ├── benchmark.astro
│   │       └── guide.astro
│   ├── styles/
│   │   ├── global.css          # Reset, variables, typographie
│   │   └── components.css      # Styles partagés (cards, grids, buttons)
│   ├── i18n/
│   │   ├── ui.ts               # Traductions interface (nav, boutons, labels)
│   │   └── utils.ts            # getLangFromUrl(), useTranslations()
│   └── data/
│       └── quiz-questions.json
└── .github/
    └── workflows/
        └── deploy.yml
```

## Pages

### Page d'accueil (/fr/, /en/)

1. **Hero centré** : fond navy, titre "L'API Management." en blanc, sous-titre descriptif, 2 CTAs pill (cyan primaire + outline secondaire)
2. **Publication à la une** : card large pour "Culture API" (configurable via `featured: true` dans le frontmatter). Image + titre + description + bouton télécharger. **Fallback** : si aucune publication n'a `featured: true`, cette section est masquée et la grille de navigation remonte directement sous le hero.
3. **Grille de navigation** : 4 cards (Publications, Benchmark, Liens, Guide) menant aux sections respectives. Fond `--octo-grey-light`, icône ou illustration simple.
4. **Footer** : liens légaux, réseaux sociaux OCTO, "There is a better way."

### Page Publications (/fr/publications, /en/publications)

Liste de cards des publications. Deux types :
- **Refcards** : image miniature + titre + description + bouton "Télécharger" (lien externe vers publication.octo.com)
- **Articles** : titre + description + source + lien externe

Pas de filtre côté client. Les refcards apparaissent en premier, puis les articles.

### Page Liens (/fr/liens, /en/links)

Liste de liens externes groupés par tags (design, sécurité, architecture...). Chaque lien = card avec titre, description courte, source (ex: "Blog OCTO"), et lien externe. Triés par date décroissante.

### Page Benchmark (/fr/benchmark, /en/benchmark)

Grille de cards des 14 solutions API Management. Chaque card affiche : logo, nom, vendor, badges (open source, SaaS, on-premise).

**Accordéon** : clic sur une card = expansion d'une section sous la card. Contenu : description complète, pros (liste), cons (liste), ratings (barres horizontales). Plusieurs accordéons peuvent être ouverts simultanément. Animation CSS `max-height`.

### Page Guide (/fr/guide, /en/guide)

Trois parties :
1. **Introduction** : texte éditorial sur les critères de choix d'une solution API Management
2. **Quiz interactif** : 5-7 questions à choix multiples. Les valeurs `scores` dans le JSON intègrent déjà la pondération (pas de poids séparé par question). Le résultat est calculé par somme simple des scores attribués, normalisé en pourcentage. Résultat = top 3 solutions recommandées avec score en %, lien vers la fiche benchmark. Bouton "Recommencer".
3. **Comparateur** : 2-3 `<select>` pour choisir les solutions. Affichage côte à côte : description, ratings (barres), pros/cons. Données injectées au build en `<script type="application/json">`.

## Content Collections

### Schema : solutions

```typescript
{
  name: string;              // "Apigee"
  slug: string;              // "apigee"
  logo: string;              // "/assets/solutions/apigee.svg"
  vendor: string;            // "Google"
  year: number;              // 2004
  openSource: boolean;
  deploymentModes: string[]; // ["saas", "on-premise", "hybrid"]
  category: string;          // "pure-player" | "esb-origin" | "cloud-native"
  website: string;
  ratings: {
    timeToMarket: number;    // 1-5
    communaute: number;
    cout: number;
    flexibilite: number;
    securite: number;
    onPremise: number;
    saas: number;
    documentation: number;
  };
  pros: string[];
  cons: string[];
}
// Body : description Markdown libre
```

### Schema : publications

```typescript
{
  title: string;
  type: "refcard" | "article";
  description: string;
  downloadUrl: string;        // Lien externe
  image?: string;
  date: Date;
  featured?: boolean;         // Pour la publication à la une
}
```

### Schema : links

```typescript
{
  title: string;
  url: string;
  source: string;             // "Blog OCTO", "GitHub", etc.
  description?: string;
  tags: string[];
  date: Date;
}
```

### Quiz data (JSON)

```typescript
{
  fr: {
    questions: Array<{
      id: string;
      question: string;
      options: Array<{
        label: string;
        scores: Record<string, number>; // slug → score
      }>;
    }>;
  };
  en: { /* même structure */ };
}
```

## Composants interactifs

### Quiz (JS vanilla)

- Rendu côté serveur par Astro (structure HTML), hydraté par un `<script>` en bas du composant
- Navigation linéaire : question par question, bouton suivant/précédent
- Barre de progression visuelle
- Scoring : somme des scores par solution, normalisée en pourcentage
- Résultat : 3 cards avec nom de solution, score, lien vers le benchmark
- Bouton "Recommencer" qui reset l'état
- Aucune requête réseau, aucune persistance

### Comparateur (JS vanilla)

- 2-3 `<select>` alimentés par la liste des solutions (injectée au build)
- Au changement de sélection : mise à jour du tableau de comparaison
- Tableau : lignes = critères (ratings), colonnes = solutions sélectionnées
- Sous le tableau : pros/cons côte à côte
- Données complètes en JSON dans un `<script type="application/json">` invisible
- Le JS lit ce JSON et met à jour le DOM

### Accordéon benchmark (JS vanilla)

- `<details>` / `<summary>` natifs HTML enrichis en CSS
- Animation CSS pour l'ouverture/fermeture (smooth)
- Plusieurs accordéons ouverts simultanément (pas de fermeture automatique)
- Pas de dépendance, markup sémantique

## i18n

- **Routing** : `/fr/*` et `/en/*`. Le fichier `/pages/index.astro` fait un redirect 302 vers `/fr/`.
- **Contenu** : chaque collection a un sous-dossier `fr/` et `en/`. Les pages Astro filtrent par langue.
- **Interface** : `src/i18n/ui.ts` contient les traductions des labels, boutons, navigation.
- **Helpers** : `getLangFromUrl(url)` extrait la langue depuis l'URL, `useTranslations(lang)` retourne les traductions.
- **Switcher** : composant qui construit le lien miroir (même page, autre langue).
- **SEO** : balises `<link rel="alternate" hreflang="fr">` et `hreflang="en"` sur chaque page.

## SEO et performance

- `<title>` et `<meta description>` uniques par page et par langue
- Open Graph tags (og:title, og:description, og:image)
- Sitemap XML automatique via `@astrojs/sitemap`
- HTML sémantique (h1-h6, nav, main, article, section, footer)
- Zero JS côté client par défaut (Astro). JS uniquement sur benchmark (accordéon), guide (quiz + comparateur).
- Images : SVG pour les logos, formats optimisés pour les illustrations
- Cible : Lighthouse > 95 sur toutes les métriques

## CI/CD

GitHub Actions workflow :
1. Trigger : push sur `main`
2. `npm ci` + `npm run build`
3. Deploy du dossier `dist/` sur GitHub Pages
4. Domaine custom configurable (api-by-octo.octo.com)

## Contenu à migrer

Les 14 solutions sont reprises de l'ancien site avec leurs descriptions, pros et cons. Les notes (ratings) seront ajoutées manuellement car elles n'existent pas dans l'ancien site.

| Solution | Statut contenu |
|----------|---------------|
| 3scale | Complet |
| Apigee | Complet |
| AWS | Incomplet — créer la fiche avec une mention "Contenu à venir" dans la description, pros et cons vides |
| Axway | Complet |
| Broadcom | Complet |
| Gravitee | Complet |
| IBM | Complet |
| Kong | Complet |
| Microsoft | Complet |
| Mulesoft | Complet |
| Software AG | Complet |
| TIBCO Mashery | Complet |
| Tyk | Complet |
| WSO2 | Complet |

4 Refcards + 9 liens/articles à migrer. Publication "Culture API" à ajouter quand disponible (flag `featured: true`).
