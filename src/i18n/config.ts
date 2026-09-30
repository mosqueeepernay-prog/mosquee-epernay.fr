/**
 * Configuration i18n — structure Phase 0.
 *
 * Français (fr) = langue par défaut, servie à la racine « / ».
 * Arabe   (ar) = servie sous « /ar/ », mise en page RTL.
 *
 * Les dictionnaires de traduction et les pages dédiées arrivent en Phase 1.
 */

export const LOCALES = ['fr', 'ar'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

export interface LocaleInfo {
  /** Valeur de l'attribut <html lang>. */
  readonly htmlLang: string;
  /** Valeur de l'attribut <html dir>. */
  readonly dir: 'ltr' | 'rtl';
  /** Libellé affiché dans le sélecteur de langue. */
  readonly label: string;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  fr: { htmlLang: 'fr', dir: 'ltr', label: 'Français' },
  ar: { htmlLang: 'ar', dir: 'rtl', label: 'العربية' },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
