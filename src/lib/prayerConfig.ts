/**
 * Configuration centrale du calcul des horaires de prière.
 *
 * ⚠️ VALEURS PROVISOIRES DE DÉVELOPPEMENT — NE PAS CONSIDÉRER COMME
 *    OFFICIELLES. Le méthode de calcul et la méthode d'Asr devront être
 *    validées par le comité de la Mosquée d'Épernay avant mise en ligne.
 *
 * PROVISOIRE (Phase 0) :
 *   - calculationMethod = 'mwl'    (Muslim World League)  → provisoire
 *   - asrMethod         = 'standard' (école Shafi'i)     → provisoire
 *
 * CE FICHIER EST LE SEUL ENDROIT À MODIFIER pour changer la méthode de
 * calcul : toute la Phase 2 lira ces valeurs ici.
 * Aucune logique de calcul n'est implémentée à ce stade (voir Phase 2).
 */

/** Méthodes de calcul prises en charge par le futur moteur. */
export type CalculationMethod =
  | 'mwl' // Muslim World League        — PROVISOIRE
  | 'umm_al_qura' // Umm al-Qura, Makkah
  | 'egyptian' // Egyptian General Authority
  | 'karachi' // University of Islamic Sciences, Karachi
  | 'isna' // Islamic Society of North America
  | 'dubai' // Dubai
  | 'moonsighting'; // Moonsighting Committee

/** Méthodes d'Asr. */
export type AsrMethod = 'standard' | 'hanafi';

export interface PrayerConfig {
  /** Méthode de calcul des heures d'entrée. PROVISOIRE. */
  readonly calculationMethod: CalculationMethod;
  /** Méthode d'Asr. PROVISOIRE. */
  readonly asrMethod: AsrMethod;
  /** Fuseau horaire (confirmé : la France métropolitaine). */
  readonly timezone: string;
  /** Règle pour les hautes latitudes (~49°N). */
  readonly highLatitudeRule: 'middle_of_the_night' | 'seventh_of_the_night' | 'angle_based';
  /** Coordonnées de la mosquée — PLACEHOLDER (à fournir par le comité). */
  readonly latitude: number | null;
  readonly longitude: number | null;
}

export const prayerConfig: PrayerConfig = {
  calculationMethod: 'mwl', // ⚠️ PROVISOIRE — à valider par le comité
  asrMethod: 'standard', // ⚠️ PROVISOIRE — à valider par le comité
  timezone: 'Europe/Paris',
  highLatitudeRule: 'middle_of_the_night',
  latitude: null, // PLACEHOLDER — coordonnées officielles de l'édifice
  longitude: null, // PLACEHOLDER — coordonnées officielles de l'édifice
};
