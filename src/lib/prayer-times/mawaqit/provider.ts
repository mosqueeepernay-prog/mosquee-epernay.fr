/**
 * Provider MAWAQIT — Mosquée Abou Bakr, Épernay (mosque ID 11002).
 *
 * Source officielle (solution A/B de l'intégration). Le flux exact étant à
 * recevoir de MAWAQIT, ce provider reste silencieux tant que `MAWAQIT_API_URL`
 * est vide : aucun appel réseau, aucune heure affichée (« --:-- »).
 */

import type { PrayerTimesProvider } from '../provider';
import type { PrayerTimesData } from '../types';
import { adaptMawaqitPayload } from './adapter';
import { fetchOfficialPayload } from './client';
import { mawaqitConfig } from './config';

export class MawaqitProvider implements PrayerTimesProvider {
  readonly id = 'mawaqit';

  async getToday(): Promise<PrayerTimesData | null> {
    // Pas d'endpoint officiel → pas de requête, jamais d'URL devinée.
    if (mawaqitConfig.apiUrl === '') return null;

    const payload = await fetchOfficialPayload();
    if (payload === null) return null;

    // L'adaptateur valide et peut renvoyer null : aucune donnée douteuse.
    return adaptMawaqitPayload(payload);
  }
}
