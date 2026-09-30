/**
 * Configuration centrale du site.
 *
 * ⚠️ IMPORTANT — AUCUNE information officielle de la mosquée n'est encore
 * fournie. Tous les champs marqués « PLACEHOLDER » doivent être remplacés
 * par les données validées par le comité de la Mosquée d'Épernay.
 *
 * NE PAS inventer : adresse, téléphone, e-mail, nom d'association, SIRET,
 * horaires, réseaux sociaux, logo, photos.
 */

export interface SiteConfig {
  /** Nom du site (fourni par le projet). */
  readonly name: string;
  /** Nom du site en arabe — PLACEHOLDER (à confirmer par le comité). */
  readonly nameAr: string;
  /** URL de production. */
  readonly url: string;

  /** PLACEHOLDER — adresse postale officielle à fournir. */
  readonly address: {
    readonly street: string;
    readonly postalCode: string;
    readonly city: string;
    readonly country: string;
  };

  /** PLACEHOLDER — coordonnées GPS de l'édifice à fournir. */
  readonly geo: {
    readonly latitude: number | null;
    readonly longitude: number | null;
  };

  /** PLACEHOLDER — contacts officiels à fournir. */
  readonly contact: {
    readonly phone: string;
    readonly email: string;
  };

  /** PLACEHOLDER — mentions légales de l'association à fournir. */
  readonly legal: {
    readonly associationName: string;
    readonly siret: string;
  };

  /** PLACEHOLDER — comptes officiels à fournir (aucun inventé). */
  readonly socials: readonly string[];
}

export const SITE: SiteConfig = {
  name: "Mosquée d'Épernay",
  nameAr: '', // PLACEHOLDER : nom officiel en arabe à confirmer
  url: 'https://mosquee-epernay.fr',

  address: {
    street: '', // PLACEHOLDER
    postalCode: '', // PLACEHOLDER
    city: '', // PLACEHOLDER
    country: '', // PLACEHOLDER
  },

  geo: {
    latitude: null, // PLACEHOLDER
    longitude: null, // PLACEHOLDER
  },

  contact: {
    phone: '', // PLACEHOLDER
    email: '', // PLACEHOLDER
  },

  legal: {
    associationName: '', // PLACEHOLDER
    siret: '', // PLACEHOLDER
  },

  socials: [], // PLACEHOLDER : aucun réseau social inventé
};
