/**
 * Adaptateur MAWAQIT → PrayerTimesData.
 *
 * ⚠️ LA FORME EXACTE DU PAYLOAD MAWAQIT N'A PAS ENCORE ÉTÉ COMMUNIQUÉE
 *    OFFICIELLEMENT. Cette implémentation est donc volontairement
 *    « fail-closed » (fermée par défaut) :
 *
 *    - elle n'invente ni endpoint, ni format documenté quelque part ;
 *    - elle accepte uniquement un objet (racine ou sous-objet courant)
 *      contenant les 6 clés de prière attendues, chaque heure devant être
 *      valide au format horaire ;
 *    - la date est OBLIGATOIRE : sans date valide du jour, tout est rejeté
 *      (protection contre les données périmées) ;
 *    - sinon → `null` → l'interface affiche « --:-- ».
 *
 * À ajuster UNIQUEMENT à partir de la documentation officielle fournie par
 * MAWAQIT (étape suivante de l'intégration).
 */

import type { IqamaKey, PrayerKey, PrayerTimesData } from '../types';
import { IQAMA_KEYS, PRAYER_KEYS } from '../types';
import { isValidDate } from '../validate';

/** Sous-objets courants testés à la racine (sans jamais être supposés valides). */
const CONTAINER_KEYS = ['times', 'prayerTimes', 'daily', 'data'] as const;

/** Vrai si la valeur est un objet JSON simple (pas un tableau, pas null). */
function asRecord(value: unknown): Record<string, unknown> | null {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

/** Normalise « 9:05 » / « 09:05 » → « 09:05 », ou `null` si invalide. */
function normalizeTime(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const match = /^([01]?\d|2[0-3]):([0-5]\d)$/.exec(value.trim());
  if (match === null) return null;
  return `${match[1].padStart(2, '0')}:${match[2]}`;
}

/** Trouve l'objet contenant les 6 clés de prière, ou `null`. */
function findContainer(root: Record<string, unknown>): Record<string, unknown> | null {
  const hasAllKeys = (candidate: Record<string, unknown>): boolean =>
    PRAYER_KEYS.every((key) => key in candidate);

  if (hasAllKeys(root)) return root;

  for (const containerKey of CONTAINER_KEYS) {
    const child = asRecord(root[containerKey]);
    if (child !== null && hasAllKeys(child)) return child;
  }
  return null;
}

/**
 * Convertit le payload officiel en `PrayerTimesData` validé, ou `null`.
 */
export function adaptMawaqitPayload(payload: unknown): PrayerTimesData | null {
  const root = asRecord(payload);
  if (root === null) return null;

  const container = findContainer(root);
  if (container === null) return null;

  // Les 6 prières obligatoires : toute heure absente ou invalide rejette tout.
  const values = {} as Record<PrayerKey, string>;
  for (const key of PRAYER_KEYS) {
    const time = normalizeTime(container[key]);
    if (time === null) return null;
    values[key] = time;
  }

  // Date obligatoire : on refuse d'afficher des horaires sans jour attesté.
  const rawDate = root.date ?? container.date;
  if (typeof rawDate !== 'string' || !isValidDate(rawDate)) return null;

  const data: PrayerTimesData = {
    date: rawDate,
    fajr: values.fajr,
    sunrise: values.sunrise,
    dhuhr: values.dhuhr,
    asr: values.asr,
    maghrib: values.maghrib,
    isha: values.isha,
  };

  // Champs optionnels : présents seulement si fournis et valides.
  const imsak = normalizeTime(container.imsak ?? root.imsak);
  if (imsak !== null) data.imsak = imsak;

  const jumua = normalizeTime(container.jumua ?? root.jumua);
  if (jumua !== null) data.jumua = jumua;

  const iqamaRecord = asRecord(container.iqama ?? root.iqama);
  if (iqamaRecord !== null) {
    const iqama: Partial<Record<IqamaKey, string>> = {};
    for (const key of IQAMA_KEYS) {
      const time = normalizeTime(iqamaRecord[key]);
      if (time !== null) iqama[key] = time;
    }
    if (Object.keys(iqama).length > 0) data.iqama = iqama;
  }

  return data;
}
