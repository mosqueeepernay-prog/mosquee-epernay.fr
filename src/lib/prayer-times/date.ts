/**
 * Utilitaires de date/heure au fuseau de la mosquée (Europe/Paris).
 *
 * ⚠️ Les horaires de prière sont ceux de la mosquée d'Épernay, pas ceux de
 *    l'internaute. Un visiteur en Italie, en Algérie ou ailleurs doit voir
 *    le jour et les heures du fuseau `prayerConfig.timezone`.
 *
 *    On utilise donc toujours `Intl.DateTimeFormat` avec le fuseau explicite,
 *    jamais l'horloge locale du navigateur (`new Date()` seul ne suffit pas).
 *
 * Module sûr côté client : aucun secret, aucun appel réseau.
 */

import { prayerConfig } from '../prayerConfig';

/** Fuseau horaire de la mosquée — source unique : src/lib/prayerConfig.ts. */
export const MOSQUE_TIMEZONE = prayerConfig.timezone;

/**
 * Date du jour au fuseau de la mosquée, au format YYYY-MM-DD.
 * Retourne une chaîne vide si le fuseau est invalide (échec → pas de données).
 */
export function mosqueLocalDate(now: Date = new Date()): string {
  try {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: MOSQUE_TIMEZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(now);

    const year = parts.find((part) => part.type === 'year')?.value ?? '';
    const month = parts.find((part) => part.type === 'month')?.value ?? '';
    const day = parts.find((part) => part.type === 'day')?.value ?? '';

    if (year === '' || month === '' || day === '') return '';
    return `${year}-${month}-${day}`;
  } catch {
    return '';
  }
}

/**
 * Heure courante au fuseau de la mosquée, au format 24 h « HH:MM ».
 * Retourne une chaîne vide si le fuseau est invalide.
 */
export function mosqueLocalTime(now: Date = new Date()): string {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: MOSQUE_TIMEZONE,
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(now);

    const hour = parts.find((part) => part.type === 'hour')?.value ?? '';
    const minute = parts.find((part) => part.type === 'minute')?.value ?? '';

    if (hour === '' || minute === '') return '';
    return `${hour}:${minute}`;
  } catch {
    return '';
  }
}
