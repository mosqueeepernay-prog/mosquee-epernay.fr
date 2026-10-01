/**
 * Client HTTP du flux OFFICIEL MAWAQIT.
 *
 * - Utilise uniquement la valeur fournie par `MAWAQIT_API_URL` : aucune URL
 *   n'est construite, aucun endpoint n'est deviné, aucun scraping.
 * - Échec réseau, timeout, HTTP invalide ou JSON invalide → `null`
 *   (le site continue de fonctionner avec « --:-- »).
 */

import { mawaqitConfig } from './config';

/**
 * Récupère le payload officiel du jour, ou `null` en cas d'échec.
 *
 * Retourne `unknown` : la forme du payload n'est validée que par l'adaptateur
 * (voir adapter.ts), jamais supposée ici.
 */
export async function fetchOfficialPayload(): Promise<unknown> {
  // Pas d'endpoint officiel configuré → aucun appel réseau.
  if (mawaqitConfig.apiUrl === '') return null;

  try {
    const headers: Record<string, string> = { Accept: 'application/json' };
    if (mawaqitConfig.apiKey !== '') {
      // ⚠️ Format d'authentification à confirmer selon la documentation
      //    officielle MAWAQIT (le secret reste strictement serveur).
      headers.Authorization = `Bearer ${mawaqitConfig.apiKey}`;
    }

    const response = await fetch(mawaqitConfig.apiUrl, {
      method: 'GET',
      headers,
      cache: 'no-store',
      signal: AbortSignal.timeout(mawaqitConfig.timeoutMs),
    });

    if (!response.ok) return null;
    return (await response.json()) as unknown;
  } catch {
    // Réseau indisponible, timeout, JSON invalide… : on ne casse jamais le site.
    return null;
  }
}
