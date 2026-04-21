import { ui, defaultLang, type Lang, languages } from './ui';

const routeMap: Record<string, Record<Lang, string>> = {
  '': { fr: '', en: '' },
  publications: { fr: 'publications', en: 'publications' },
  liens: { fr: 'liens', en: 'links' },
  links: { fr: 'liens', en: 'links' },
  benchmark: { fr: 'benchmark', en: 'benchmark' },
  guide: { fr: 'guide', en: 'guide' },
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

export function getLocalePath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

export function getAlternateUrl(currentUrl: URL, targetLang: Lang): string {
  const segments = currentUrl.pathname.split('/').filter(Boolean);
  // segments[0] is the current lang prefix, segments[1] is the page name
  const pageName = segments[1] ?? '';
  const mapped = routeMap[pageName]?.[targetLang] ?? pageName;

  if (mapped === '') {
    return `/${targetLang}`;
  }
  return `/${targetLang}/${mapped}`;
}
