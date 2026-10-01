/**
 * API publique des horaires de prière.
 *
 * Les composants importent UNIQUEMENT ce module :
 *
 *   import { getPrayerTimes } from '../../lib/prayer-times';
 *
 * ⚠️ Ne pas importer ce barrel depuis un <script> côté client : il transit
 *    par la config d'environnement (secrets serveur). Pour le client, importer
 *    le module ciblé `src/lib/prayer-times/date.ts` (aucun secret).
 */

export { getPrayerTimes, getPrayerTimesProvider, UnavailablePrayerTimesProvider } from './provider';
export type { PrayerTimesProvider } from './provider';

export { MOSQUE_TIMEZONE, mosqueLocalDate, mosqueLocalTime } from './date';

export { IQAMA_KEYS, NEXT_PRAYER_KEYS, PRAYER_KEYS } from './types';
export type { IqamaKey, PrayerKey, PrayerTimesData } from './types';

export { mawaqitConfig } from './mawaqit/config';
