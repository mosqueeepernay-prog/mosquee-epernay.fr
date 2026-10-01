/**
 * Validation des données reçues d'un provider.
 *
 * Règle : on ne fait jamais confiance à la source. Toute valeur absente ou
 * mal formée entraîne le rejet du jeu de données complet (`null` → « --:-- »),
 * plutôt que l'affichage partiel d'heures douteuses.
 */

import { PRAYER_KEYS, type PrayerTimesData } from './types';

/** YYYY-MM-DD */
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
/** HH:MM (24 h) */
const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;

/** Vrai si la chaîne est une date réelle du calendrier (ex. 2026-02-30 rejeté). */
export function isValidDate(value: string): boolean {
  if (!DATE_PATTERN.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
  );
}

/** Vrai si la chaîne est une heure « HH:MM » valide (24 h). */
export function isValidTime(value: string): boolean {
  return TIME_PATTERN.test(value);
}

/** Vrai si le jeu de données est complet et bien formé. */
export function isValidPrayerTimesData(data: PrayerTimesData): boolean {
  if (!isValidDate(data.date)) return false;

  // Les 6 prières affichées sont obligatoires.
  for (const key of PRAYER_KEYS) {
    if (!isValidTime(data[key])) return false;
  }

  // Les champs optionnels, s'ils existent, doivent aussi être valides.
  if (data.imsak !== undefined && !isValidTime(data.imsak)) return false;
  if (data.jumua !== undefined && !isValidTime(data.jumua)) return false;
  if (data.iqama !== undefined) {
    for (const value of Object.values(data.iqama)) {
      if (value !== undefined && !isValidTime(value)) return false;
    }
  }

  return true;
}
