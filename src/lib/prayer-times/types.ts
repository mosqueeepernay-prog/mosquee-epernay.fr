/**
 * Types partagés des horaires de prière.
 *
 * Ces types sont la frontière entre les sources de données (provider) et
 * l'interface (cartes existantes). Aucun composant n'importe un provider
 * concret : tout passe par `getPrayerTimes()` (voir provider.ts).
 */

/** Les 6 prières affichées sur les cartes, dans l'ordre d'affichage. */
export type PrayerKey = 'fajr' | 'sunrise' | 'dhuhr' | 'asr' | 'maghrib' | 'isha';

/** Prières disposant éventuellement d'une iqama (le lever du soleil n'en a pas). */
export type IqamaKey = Exclude<PrayerKey, 'sunrise'>;

/**
 * Jeu de données d'une journée.
 *
 * - `date`   : date locale de la mosquée au format YYYY-MM-DD (Europe/Paris).
 * - Heures   : format 24 h « HH:MM », fuseau de la mosquée.
 * - Optionnels (`imsak`, `jumua`, `iqama`) : jamais inventés — absents si la
 *   source officielle ne les fournit pas.
 */
export interface PrayerTimesData {
  date: string;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  imsak?: string;
  jumua?: string;
  iqama?: Partial<Record<IqamaKey, string>>;
}

/** Ordre d'affichage des cartes (identique FR / AR). */
export const PRAYER_KEYS = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'] as const;

/** Clés pouvant porter une iqama. */
export const IQAMA_KEYS = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'] as const;

/**
 * Prières candidates pour l'indicateur « prochaine prière ».
 * Le lever du soleil est exclu : ce n'est pas une prière.
 */
export const NEXT_PRAYER_KEYS = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'] as const;
