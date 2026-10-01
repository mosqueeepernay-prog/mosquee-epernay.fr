import { DEFAULT_LOCALE, type Locale } from '../config';
import { fr, type Dictionary } from './fr';
import { ar } from './ar';

/** Retourne le dictionnaire complet de la locale demandée. */
export function getDictionary(locale: Locale): Dictionary {
  return locale === 'ar' ? ar : fr;
}

/** Locale opposée (FR ↔ AR). */
export function alternateLocale(locale: Locale): Locale {
  return locale === DEFAULT_LOCALE ? 'ar' : DEFAULT_LOCALE;
}

export type { Dictionary };
