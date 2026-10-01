/**
 * Interface provider — la seule porte d'entrée des horaires pour l'UI.
 *
 * Architecture (le composant ne connaît JAMAIS MAWAQIT directement) :
 *
 *   UI (PrayerTimesSection / page horaires)
 *        ↓
 *   getPrayerTimes()                  (ce fichier : sélection + garde-fous)
 *        ↓
 *   PrayerTimesProvider               (interface)
 *        ↓
 *   MawaqitProvider | Unavailable…    (implémentations concrètes)
 *
 * Un changement de source future (autre fournisseur, calcul local Phase 2)
 * n'ajoute qu'une implémentation : l'UI et le design ne changent pas.
 */

import { mawaqitConfig } from './mawaqit/config';
import { MawaqitProvider } from './mawaqit/provider';
import { mosqueLocalDate } from './date';
import type { PrayerTimesData } from './types';
import { isValidPrayerTimesData } from './validate';

export interface PrayerTimesProvider {
  /** Identifiant lisible de la source (journalisation / débogage). */
  readonly id: string;
  /** Horaires du jour (fuseau de la mosquée), ou `null` si indisponibles. */
  getToday(): Promise<PrayerTimesData | null>;
}

/**
 * Provider par défaut : aucune source officielle configurée → `null`.
 * Ce n'est PAS un provider d'heures fictives : il ne renvoie jamais de temps.
 */
export class UnavailablePrayerTimesProvider implements PrayerTimesProvider {
  readonly id = 'unavailable';

  async getToday(): Promise<PrayerTimesData | null> {
    return null;
  }
}

/**
 * Choisit la source active.
 *
 * MAWAQIT n'est activé que si — et seulement si — un endpoint officiel a été
 * fourni via `MAWAQIT_API_URL` (jamais inventé, jamais présent en dur).
 */
export function getPrayerTimesProvider(): PrayerTimesProvider {
  if (mawaqitConfig.apiUrl !== '') return new MawaqitProvider();
  return new UnavailablePrayerTimesProvider();
}

interface CacheEntry {
  readonly date: string;
  readonly data: PrayerTimesData | null;
  readonly at: number;
}

/** Cache mémoire : succès valides pour la journée, échecs 5 minutes. */
let cache: CacheEntry | null = null;
const FAILURE_TTL_MS = 5 * 60_000;

/**
 * Point d'entrée unique utilisé par les composants (page d'accueil ET page
 * /horaires-priere/) — une seule source de données pour tout le site.
 *
 * Garde-fous :
 *  - toute exception est attrapée → `null` (le site ne casse jamais) ;
 *  - données invalides (validate.ts) → `null` ;
 *  - données dont la date ≠ aujourd'hui à Europe/Paris → `null`
 *    (aucun horaire périmé ne peut être affiché).
 */
export async function getPrayerTimes(): Promise<PrayerTimesData | null> {
  try {
    const today = mosqueLocalDate();
    if (today === '') return null;

    if (cache !== null && cache.date === today) {
      const reusable = cache.data !== null || Date.now() - cache.at < FAILURE_TTL_MS;
      if (reusable) return cache.data;
    }

    const raw = await getPrayerTimesProvider().getToday();
    const data = raw !== null && raw.date === today && isValidPrayerTimesData(raw) ? raw : null;

    cache = { date: today, data, at: Date.now() };
    return data;
  } catch {
    return null;
  }
}
