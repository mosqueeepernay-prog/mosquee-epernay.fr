/**
 * Routes : source unique de vérité pour les chemins FR et AR.
 * FR = langue par défaut à la racine « / » ; AR = sous « /ar/ » (RTL).
 */

import { DEFAULT_LOCALE, type Locale } from './config';

export const PAGE_SLUGS = [
  'home',
  'horaires-priere',
  'la-mosquee',
  'ecole-coranique',
  'activites',
  'actualites',
  'dons',
  'contact',
] as const;

export type PageSlug = (typeof PAGE_SLUGS)[number];

/** Chemin de chaque page, par locale. */
export const ROUTES: Record<Locale, Record<PageSlug, string>> = {
  fr: {
    home: '/',
    'horaires-priere': '/horaires-priere/',
    'la-mosquee': '/la-mosquee/',
    'ecole-coranique': '/ecole-coranique/',
    activites: '/activites/',
    actualites: '/actualites/',
    dons: '/dons/',
    contact: '/contact/',
  },
  ar: {
    home: '/ar/',
    'horaires-priere': '/ar/horaires-priere/',
    'la-mosquee': '/ar/la-mosquee/',
    'ecole-coranique': '/ar/ecole-coranique/',
    activites: '/ar/activites/',
    actualites: '/ar/actualites/',
    dons: '/ar/dons/',
    contact: '/ar/contact/',
  },
};

/** Normalise un chemin : pas de double slash, slash final conservé pour la racine. */
function normalize(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/**
 * Déduit la locale et la page à partir du chemin courant.
 * Utilisé par BaseLayout pour générer lang/dir, canonical et hreflang.
 */
export function resolveRoute(pathname: string): {
  locale: Locale;
  slug: PageSlug | null;
} {
  const path = normalize(pathname);
  const isArabic = path === '/ar' || path.startsWith('/ar/');
  const locale: Locale = isArabic ? 'ar' : DEFAULT_LOCALE;

  // Retire le préfixe '/ar' : '/ar/horaires-priere' → '/horaires-priere'
  const stripPrefix = (value: string): string => {
    if (!isArabic || !value.startsWith('/ar')) return value;
    const rest = value.slice(3);
    return rest === '' ? '/' : rest;
  };

  const basePath = stripPrefix(path);
  const slug =
    PAGE_SLUGS.find(
      (candidate) => stripPrefix(normalize(ROUTES[locale][candidate])) === basePath,
    ) ?? null;

  return { locale, slug };
}

/** Chemin complet d'une page pour une locale donnée. */
export function pathFor(locale: Locale, slug: PageSlug): string {
  return ROUTES[locale][slug];
}

/** Pages principales, dans l'ordre de la navigation. */
export const NAV_ORDER: readonly PageSlug[] = PAGE_SLUGS;
