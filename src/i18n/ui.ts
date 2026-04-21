export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

export const ui: Record<Lang, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.publications': 'Publications',
    'nav.links': 'Liens',
    'nav.benchmark': 'Benchmark',
    'nav.guide': 'Guide',

    // Hero
    'hero.subtitle': 'OCTO TECHNOLOGY',
    'hero.title': "L'API Management",
    'hero.description':
      "Découvrez notre écosystème de ressources dédiées à l'API Management : publications, benchmark des solutions du marché, guide interactif et liens utiles.",
    'hero.cta.benchmark': 'Voir le benchmark',
    'hero.cta.guide': 'Lancer le guide',

    // Section cards
    'section.publications.title': 'Publications',
    'section.publications.desc':
      "Nos livres blancs et articles de référence sur l'API Management.",
    'section.links.title': 'Liens utiles',
    'section.links.desc':
      "Une sélection de ressources externes pour approfondir le sujet de l'API Management.",
    'section.benchmark.title': 'Benchmark',
    'section.benchmark.desc':
      "Comparatif détaillé des principales solutions d'API Management du marché.",
    'section.guide.title': 'Guide interactif',
    'section.guide.desc':
      'Un parcours guidé pour vous aider à choisir la solution adaptée à vos besoins.',

    // Featured
    'featured.label': 'À la une',

    // Publications page
    'publications.title': 'Publications',
    'publications.download': 'Télécharger',
    'publications.read': 'Lire',

    // Links page
    'links.title': 'Liens utiles',

    // Benchmark
    'benchmark.title': 'Benchmark',
    'benchmark.pros': 'Points forts',
    'benchmark.cons': 'Points faibles',
    'benchmark.ratings': 'Évaluations',
    'benchmark.comingSoon': 'Bientôt disponible',

    // Rating labels
    'rating.timeToMarket': 'Time to Market',
    'rating.communaute': 'Communauté',
    'rating.cout': 'Coût',
    'rating.flexibilite': 'Flexibilité',
    'rating.securite': 'Sécurité',
    'rating.onPremise': 'On-Premise',
    'rating.saas': 'SaaS',
    'rating.documentation': 'Documentation',

    // Guide
    'guide.title': 'Guide interactif',
    'guide.intro':
      "Répondez à quelques questions pour découvrir la solution d'API Management la plus adaptée à votre contexte.",
    'guide.quiz.title': 'Quiz',
    'guide.quiz.desc':
      'Répondez aux questions pour obtenir une recommandation personnalisée.',
    'guide.quiz.start': 'Commencer',
    'guide.quiz.next': 'Suivant',
    'guide.quiz.prev': 'Précédent',
    'guide.quiz.results': 'Voir les résultats',
    'guide.quiz.restart': 'Recommencer',
    'guide.quiz.seeInBenchmark': 'Voir dans le benchmark',
    'guide.comparator.title': 'Comparateur',
    'guide.comparator.desc':
      'Sélectionnez des solutions pour les comparer côte à côte.',
    'guide.comparator.select': 'Sélectionner des solutions',

    // Footer
    'footer.legal': 'Mentions légales',
    'footer.contact': 'Contact',
    'footer.blog': 'Blog OCTO',
    'footer.tagline': 'There is a better way.',
  },
  en: {
    // Navigation
    'nav.publications': 'Publications',
    'nav.links': 'Links',
    'nav.benchmark': 'Benchmark',
    'nav.guide': 'Guide',

    // Hero
    'hero.subtitle': 'OCTO TECHNOLOGY',
    'hero.title': 'API Management',
    'hero.description':
      'Explore our ecosystem of API Management resources: publications, market solution benchmarks, interactive guide, and curated links.',
    'hero.cta.benchmark': 'View benchmark',
    'hero.cta.guide': 'Start the guide',

    // Section cards
    'section.publications.title': 'Publications',
    'section.publications.desc':
      'Our white papers and reference articles on API Management.',
    'section.links.title': 'Useful links',
    'section.links.desc':
      'A curated selection of external resources to deepen your understanding of API Management.',
    'section.benchmark.title': 'Benchmark',
    'section.benchmark.desc':
      'A detailed comparison of the leading API Management solutions on the market.',
    'section.guide.title': 'Interactive guide',
    'section.guide.desc':
      'A guided walkthrough to help you choose the solution that fits your needs.',

    // Featured
    'featured.label': 'Featured',

    // Publications page
    'publications.title': 'Publications',
    'publications.download': 'Download',
    'publications.read': 'Read',

    // Links page
    'links.title': 'Useful links',

    // Benchmark
    'benchmark.title': 'Benchmark',
    'benchmark.pros': 'Pros',
    'benchmark.cons': 'Cons',
    'benchmark.ratings': 'Ratings',
    'benchmark.comingSoon': 'Coming soon',

    // Rating labels
    'rating.timeToMarket': 'Time to Market',
    'rating.communaute': 'Community',
    'rating.cout': 'Cost',
    'rating.flexibilite': 'Flexibility',
    'rating.securite': 'Security',
    'rating.onPremise': 'On-Premise',
    'rating.saas': 'SaaS',
    'rating.documentation': 'Documentation',

    // Guide
    'guide.title': 'Interactive guide',
    'guide.intro':
      'Answer a few questions to discover the API Management solution best suited to your context.',
    'guide.quiz.title': 'Quiz',
    'guide.quiz.desc':
      'Answer the questions to get a personalized recommendation.',
    'guide.quiz.start': 'Start',
    'guide.quiz.next': 'Next',
    'guide.quiz.prev': 'Previous',
    'guide.quiz.results': 'View results',
    'guide.quiz.restart': 'Restart',
    'guide.quiz.seeInBenchmark': 'View in benchmark',
    'guide.comparator.title': 'Comparator',
    'guide.comparator.desc':
      'Select solutions to compare them side by side.',
    'guide.comparator.select': 'Select solutions',

    // Footer
    'footer.legal': 'Legal notice',
    'footer.contact': 'Contact',
    'footer.blog': 'OCTO Blog',
    'footer.tagline': 'There is a better way.',
  },
};
