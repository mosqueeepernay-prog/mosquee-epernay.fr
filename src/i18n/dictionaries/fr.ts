/**
 * Dictionnaire FR — langue par défaut.
 *
 * ⚠️ Les textes marqués « provisoire » sont des contenus de développement :
 *    ils doivent être validés par le comité de la Mosquée d'Épernay.
 *    Aucune donnée officielle (adresse, téléphone, horaires, dons…) n'est
 *    inventée : tout est exprimé en placeholders.
 */

export const fr = {
  site: {
    name: "Mosquée d'Épernay",
    // Traduction de travail — nom officiel en arabe à confirmer par le comité.
    nameAr: 'مسجد إبرناي',
    tagline: 'Site officiel',
  },

  a11y: {
    skipToContent: 'Aller au contenu principal',
    mainNav: 'Navigation principale',
    mobileNav: 'Navigation mobile',
    footerNav: 'Navigation de pied de page',
    breadcrumb: 'Fil d’Ariane',
    langSwitcher: 'Changer de langue',
    logoPlaceholder: 'Emplacement du logo officiel',
  },

  header: {
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    menu: 'Menu',
  },

  lang: {
    fr: 'Français',
    ar: 'العربية',
  },

  nav: {
    home: 'Accueil',
    'horaires-priere': 'Horaires de prière',
    'la-mosquee': 'La mosquée',
    'ecole-coranique': 'École coranique',
    activites: 'Activités',
    actualites: 'Actualités',
    dons: 'Dons',
    contact: 'Contact',
  },

  common: {
    badgeDev: 'Placeholder',
    placeholderHint: 'À remplacer par les informations officielles validées par le comité.',
    comingSoon: 'Bientôt disponible',
    learnMore: 'En savoir plus',
    timePlaceholder: '--:--',
    datePlaceholder: '—',
    phase2: 'Phase 2 : calcul automatique des horaires de prière.',
    phase4: 'Phase 4 : intégration de la carte.',
  },

  banner: {
    label: 'Annonce',
    text: 'Site en cours de développement — les informations officielles seront publiées après validation par le comité.',
  },

  home: {
    hero: {
      badge: 'Site officiel',
      title: "Mosquée d'Épernay",
      // Texte provisoire — à valider par le comité.
      subtitle: 'Un lieu de prière, d’apprentissage et de vie communautaire.',
      ctaPrayer: 'Horaires de prière',
      ctaDonation: 'Faire un don',
      visual: 'Photo de la mosquée (à fournir)',
    },
    prayer: {
      title: 'Horaires de prière',
      subtitle: 'Aujourd’hui',
      note: 'Les horaires officiels seront affichés ici, avec la prochaine prière et le compte à rebours.',
      next: 'Prochaine prière',
      allTimes: 'Voir tous les horaires',
      prayers: ['Fajr', 'Lever du soleil', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'],
    },
    friday: {
      title: 'Prière du vendredi',
      time: 'Heure de la prière',
      hint: 'Khutba et horaires du vendredi à confirmer par le comité.',
    },
    announcements: {
      title: 'Actualités et annonces',
      empty: 'Aucune annonce publiée pour le moment.',
      link: 'Toutes les actualités',
      cardTitle: 'Titre de l’annonce (placeholder)',
      cardText:
        'Résumé de l’annonce à venir. Aucune information officielle publiée pour le moment.',
    },
    activities: {
      title: 'Activités à venir',
      empty: 'Aucune activité publiée pour le moment.',
      link: 'Toutes les activités',
      cardTitle: 'Titre de l’activité (placeholder)',
      cardText: 'Description de l’activité à venir. Détails à confirmer par le comité.',
    },
    school: {
      title: 'École coranique',
      // Texte provisoire — à valider par le comité.
      text: 'Inscriptions, horaires et enseignements de l’école coranique seront détaillés ici.',
      link: 'Découvrir l’école',
      visual: 'Photo de l’école (à fournir)',
    },
    donation: {
      title: 'Soutenez la mosquée',
      // Texte provisoire — aucune donnée bancaire réelle.
      text: 'Les moyens de don officiels (virement, dons en ligne) seront publiés après validation du comité.',
      iban: 'IBAN à fournir',
      cta: 'Faire un don',
      note: 'Aucun moyen de paiement n’est actif sur cette version.',
    },
    contact: {
      title: 'Contact et localisation',
      address: 'Adresse à fournir',
      phone: 'Téléphone à fournir',
      email: 'E-mail à fournir',
      map: 'Carte à intégrer (Google Maps ou OpenStreetMap)',
      link: 'Nous contacter',
    },
  },

  pages: {
    home: {
      title: "Mosquée d'Épernay — Site officiel",
      description:
        'Site officiel de la Mosquée d’Épernay : horaires de prière, école coranique, activités, actualités et dons.',
      h1: "Mosquée d'Épernay",
      intro: '',
      blocks: [] as string[],
    },
    'horaires-priere': {
      title: 'Horaires de prière · Mosquée d’Épernay',
      description:
        'Horaires de prière quotidiens, prière du vendredi et calendrier religieux de la Mosquée d’Épernay.',
      h1: 'Horaires de prière',
      intro:
        'Retrouvez ici les horaires de prière, la prière du vendredi et le calendrier religieux. Les horaires officiels seront affichés après validation par le comité.',
      blocks: [
        'Prière du jour',
        'Prochaines prières',
        'Grille du mois',
        'Prière du vendredi',
        'Export calendrier (.ics)',
      ],
    },
    'la-mosquee': {
      title: 'La mosquée · Mosquée d’Épernay',
      description:
        'Présentation de la Mosquée d’Épernay : projet, vie communautaire et informations.',
      h1: 'La mosquée',
      intro:
        'Découvrez la Mosquée d’Épernay : sa présentation, ses projets et la vie de sa communauté. Contenu à venir après validation par le comité.',
      blocks: ['Présentation', 'Projet et histoire', 'Galerie de photos', 'Équipe et bénévoles'],
    },
    'ecole-coranique': {
      title: 'École coranique · Mosquée d’Épernay',
      description:
        'École coranique de la Mosquée d’Épernay : programme, horaires des cours et inscriptions.',
      h1: 'École coranique',
      intro:
        'Informations sur l’école coranique : programme, horaires des cours et modalités d’inscription. Détails à confirmer par le comité.',
      blocks: [
        'Programme et niveaux',
        'Horaires des cours',
        'Inscriptions',
        'Organisation générale',
      ],
    },
    activites: {
      title: 'Activités · Mosquée d’Épernay',
      description: 'Conférences, cours, ateliers et événements de la Mosquée d’Épernay.',
      h1: 'Activités',
      intro:
        'Conférences, cours, ateliers et événements : retrouvez ici les activités de la mosquée. Calendrier à compléter après validation par le comité.',
      blocks: ['Calendrier des activités', 'Cours et ateliers', 'Événements spéciaux'],
    },
    actualites: {
      title: 'Actualités · Mosquée d’Épernay',
      description: 'Actualités et annonces officielles de la Mosquée d’Épernay.',
      h1: 'Actualités et annonces',
      intro:
        'Les annonces officielles et les actualités de la Mosquée d’Épernay seront publiées ici.',
      blocks: ['Dernières annonces', 'Archives', 'Annonces importantes'],
    },
    dons: {
      title: 'Dons · Mosquée d’Épernay',
      description:
        'Soutenir les projets de la Mosquée d’Épernay : informations de don officielles.',
      h1: 'Dons',
      intro:
        'Soutenez les projets de la mosquée. Aucun moyen de don n’est actif pour le moment : les informations officielles seront publiées après validation du comité.',
      blocks: [
        'Présentation des dons',
        'Dons par virement',
        'Dons en ligne',
        'Informations fiscales',
      ],
    },
    contact: {
      title: 'Contact · Mosquée d’Épernay',
      description: 'Contacter la Mosquée d’Épernay : coordonnées, formulaire et plan d’accès.',
      h1: 'Contact',
      intro:
        'Une question ? Retrouvez ici les coordonnées, le formulaire de contact et le plan d’accès. Les informations de contact officielles sont à fournir par le comité.',
      blocks: ['Formulaire de contact', 'Coordonnées', 'Horaires d’accueil', 'Plan d’accès'],
    },
  },

  footer: {
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    socialTitle: 'Réseaux sociaux',
    legalTitle: 'Informations légales',
    contactPlaceholder: 'Adresse, téléphone et e-mail à fournir par le comité.',
    socialPlaceholder: 'Comptes officiels à fournir — aucun renseigné pour le moment.',
    legalPlaceholder: 'Nom de l’association, SIRET et mentions légales à fournir.',
    rights: 'Tous droits réservés.',
    builtNote: 'Site en cours de développement.',
  },
};

export type Dictionary = typeof fr;
