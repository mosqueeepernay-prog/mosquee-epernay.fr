/**
 * Infrastructure SEO : URLs absolues, canonical, hreflang, Open Graph.
 * Les métadonnées de contenu (title / description) viennent des dictionnaires.
 */

import type { Locale } from '../i18n/config';
import { ROUTES, type PageSlug } from '../i18n/routes';
import { SITE } from './site';

export interface AlternateLink {
  readonly lang: string;
  readonly href: string;
}

/** URL absolue à partir d'un chemin interne. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).href;
}

/**
 * URL canonique de la page courante.
 * Si le slug est résolu → chemin normalisé ; sinon → chemin brut (fallback).
 */
export function canonicalFor(locale: Locale, slug: PageSlug | null, pathname: string): string {
  const path = slug ? ROUTES[locale][slug] : pathname;
  return absoluteUrl(path);
}

/**
 * Liens hreflang FR / AR + x-default (FR) pour une page.
 * Retourne une liste vide tant que la page n'existe pas dans les deux locales.
 */
export function hreflangLinks(slug: PageSlug | null): AlternateLink[] {
  if (!slug) return [];
  const frUrl = absoluteUrl(ROUTES.fr[slug]);
  return [
    { lang: 'fr', href: frUrl },
    { lang: 'ar', href: absoluteUrl(ROUTES.ar[slug]) },
    { lang: 'x-default', href: frUrl },
  ];
}

/** Code Open Graph de la locale. */
export function ogLocale(locale: Locale): string {
  return locale === 'ar' ? 'ar_AR' : 'fr_FR';
}
