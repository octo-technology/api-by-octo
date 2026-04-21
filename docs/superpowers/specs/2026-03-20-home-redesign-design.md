# Home Page Redesign — Design Spec

**Date:** 2026-03-20
**Scope:** Redesign de la home page (`src/pages/fr/index.astro` + `src/pages/en/index.astro`)

## Contexte

La home page actuelle (hero générique + publication mise en avant + grille 4 cards) fait trop "template". L'objectif est de :
1. Donner plus de personnalité et d'impact visuel (direction **éditoriale / magazine**)
2. Mettre en avant **Culture API**, le nouveau livre blanc OCTO (lien externe : `https://publication.octo.com/culture-api`)

## Décisions de design

### Direction esthétique
- **Éditoriale / Magazine** : typographie serif pour les titres, mise en page asymétrique, hiérarchie forte
- Palette OCTO conservée : navy `#0e2356`, cyan `#00d2dd`, gris `#8691aa`, gris clair `#f5f6fa`, blanc `#ffffff`

### Typographie
- **Titres du hero** : font serif (Georgia comme fallback safe, Playfair Display comme upgrade potentiel via Google Fonts)
- **Corps / UI** : Outfit (inchangé)
- Le titre "Culture API." utilise le `.heading-dot` existant (point cyan)

### Architecture de la page

La page se compose de 2 sections :

#### 1. Hero — Culture API (fond navy)
- **Layout** : asymétrique, 2 colonnes sur desktop
- **Colonne gauche** :
  - Label : "Nouvelle publication" (cyan, uppercase, letter-spacing large)
  - Titre : "Culture" + "API." en serif, ~3rem, blanc
  - Description : "Changer de regard sur les API : de la technique à l'expérience développeur" (blanc 50% opacité)
  - CTA principal : bouton pill cyan "Télécharger" → lien vers `https://publication.octo.com/culture-api`
  - Mention secondaire : "PDF + liseuses" (texte discret)
- **Colonne droite** :
  - Couverture du livre (image réelle depuis `https://publication.octo.com/hubfs/Culture%20API/COUV_Culture_API.webp`)
  - Ombre portée prononcée, léger effet de spine (bord gauche plus sombre)
  - Points décoratifs cyan (subtils)
- **Fond** : navy uni + radial gradient très subtil (cyan 5% d'opacité)
- **Responsive** : passe en 1 colonne (texte → couverture → CTA) sous 768px

#### 2. Sections — Explorer nos ressources (fond gris clair)
- **Label** : "Explorer nos ressources" (gris, uppercase, letter-spacing)
- **Layout** : grille 2×2 de cards
- **Chaque card** :
  - Fond blanc, `border-radius: 12px`
  - Trait dégradé cyan→transparent en haut (3px)
  - Titre (Outfit bold), description (gris), flèche cyan `→`
  - Hover : `translateY(-4px)` + box-shadow (reprise du pattern `.card` existant)
- **Cards** :
  1. Publications → `/{lang}/publications`
  2. Benchmark → `/{lang}/benchmark`
  3. Liens utiles → `/{lang}/liens` (fr) / `/{lang}/links` (en)
  4. Guide interactif → `/{lang}/guide`
- **Responsive** : grille 1 colonne sous 768px

### Composants supprimés
- `FeaturedPublication.astro` : n'est plus utilisé sur la home (le hero Culture API le remplace). Le composant reste dans le code pour un éventuel usage ailleurs.

### Composants modifiés
- `HeroHome.astro` : refonte complète (layout asymétrique, contenu Culture API, typo serif)
- `SectionCard.astro` : ajout du trait dégradé en haut + flèche, fond blanc au lieu de gris clair

### Composants inchangés
- `BaseLayout.astro`, `Header.astro`, `Footer.astro`, `LanguageSwitcher.astro`

## Fichiers impactés

| Fichier | Action |
|---------|--------|
| `src/pages/fr/index.astro` | Retrait de `FeaturedPublication`, mise à jour structure |
| `src/pages/en/index.astro` | Idem |
| `src/components/HeroHome.astro` | Refonte complète |
| `src/components/SectionCard.astro` | Redesign (trait, flèche, fond blanc) |
| `src/styles/global.css` | Éventuel ajout Google Font Playfair Display |
| `src/i18n/ui.ts` | Nouvelles clés pour le hero Culture API (label, titre, description, CTA) |

## Hors scope
- Redesign du Header/Footer
- Pages internes (benchmark, guide, publications, liens)
- Ajout d'animations complexes (on reste sur transitions CSS simples)
- Responsive tablette (on gère desktop + mobile uniquement)
