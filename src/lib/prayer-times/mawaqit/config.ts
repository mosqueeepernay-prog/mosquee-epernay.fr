/**
 * Configuration MAWAQIT — Mosquée Abou Bakr, Épernay (mosque ID 11002).
 *
 * ⚠️ AUCUN ENDPOINT N'EST INVENTÉ. `apiUrl` et `widgetUrl` sont vides par
 *    défaut : tant que MAWAQIT ne communique pas officiellement ses accès,
 *    aucun appel réseau n'est effectué et l'interface affiche « --:-- ».
 *
 * Règles de sécurité :
 *  - jamais de clé / token en dur dans le code ni dans Git ;
 *  - `MAWAQIT_API_KEY` est un secret serveur : pas de préfixe PUBLIC_,
 *    jamais accessible depuis le navigateur ;
 *  - ce module ne doit être importé que depuis le frontmatter de composants
 *    Astro (rendu serveur / build), jamais depuis un <script> côté client.
 *
 * Variables (cf. .env.example, .env est ignoré par Git) :
 *  - MAWAQIT_MOSQUE_ID  : identifiant officiel (défaut : 11002)
 *  - MAWAQIT_API_URL    : endpoint officiel (vide tant que non fourni)
 *  - MAWAQIT_API_KEY    : secret éventuel (vide par défaut)
 *  - MAWAQIT_WIDGET_URL : URL du widget officiel (vide tant que non fournie)
 */

/** Retourne la première chaîne non vide parmi les candidats. */
function firstString(...candidates: unknown[]): string {
  for (const candidate of candidates) {
    if (typeof candidate === 'string' && candidate.trim() !== '') return candidate.trim();
  }
  return '';
}

/**
 * Lecture côté serveur (Cloudflare Pages / CI injectent les variables dans
 * process.env). `globalThis` est utilisé pour ne pas dépendre de @types/node.
 */
function fromProcess(name: string): string | undefined {
  const proc = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process;
  const value = proc?.env?.[name];
  return typeof value === 'string' ? value : undefined;
}

export interface MawaqitConfig {
  /** Identifiant officiel de la mosquée sur MAWAQIT. */
  readonly mosqueId: string;
  /** Endpoint officiel — VIDE tant que MAWAQIT n'en fournit aucun. */
  readonly apiUrl: string;
  /** Secret éventuel — serveur uniquement. */
  readonly apiKey: string;
  /** Widget officiel (repli) — VIDE tant qu'aucune URL officielle n'est fournie. */
  readonly widgetUrl: string;
  /** Fiche publique officielle de la mosquée (lien « Source : MAWAQIT »). */
  readonly publicPageUrl: string;
  /** Timeout des requêtes serveur, en millisecondes. */
  readonly timeoutMs: number;
}

export const mawaqitConfig: MawaqitConfig = {
  // Fiche « Mosquée Abou Bakr - Epernay » — identifiant confirmé par le comité.
  mosqueId:
    firstString(import.meta.env.MAWAQIT_MOSQUE_ID, fromProcess('MAWAQIT_MOSQUE_ID')) || '11002',
  // ⚠️ Vide = non configuré. On ne devine jamais d'URL.
  apiUrl: firstString(import.meta.env.MAWAQIT_API_URL, fromProcess('MAWAQIT_API_URL')),
  apiKey: firstString(import.meta.env.MAWAQIT_API_KEY, fromProcess('MAWAQIT_API_KEY')),
  widgetUrl: firstString(import.meta.env.MAWAQIT_WIDGET_URL, fromProcess('MAWAQIT_WIDGET_URL')),
  publicPageUrl: 'https://mawaqit.net/fr/m/mosquee-abou-bakr-epernay-51200-france-1',
  timeoutMs: 5000,
};
