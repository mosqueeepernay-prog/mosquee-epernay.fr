# Mosquée d'Épernay — mosquee-epernay.fr

Site officiel de la Mosquée d'Épernay (France).

> **Statut : Phase 0 — architecture uniquement.**
> Aucune information officielle de la mosquée n'est encore intégrée.
> Toutes les données manquantes sont marquées `PLACEHOLDER` et ne doivent
> **jamais** être inventées (adresse, téléphone, horaires, dons, logo, etc.).

---

## Stack technique

| Couche        | Technologie                                                      |
| ------------- | ---------------------------------------------------------------- |
| Framework     | [Astro 7](https://astro.build) (statique, zéro JS par défaut)    |
| UI            | React 19 en « islands » (interactivité uniquement où nécessaire) |
| Langage       | TypeScript 5 (mode strict)                                       |
| Styles        | Tailwind CSS 4 (via `@tailwindcss/vite`)                         |
| Lint / Format | ESLint 9 (flat config) + Prettier                                |
| CI            | GitHub Actions (`.github/workflows/ci.yml`)                      |

**Aucune autre dépendance runtime n'est installée.**

## Commandes

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement
npm run build      # build de production dans dist/
npm run preview    # prévisualiser le build
npm run check      # vérification des types (astro check)
npm run lint       # ESLint
npm run format     # Prettier (écriture)
npm run format:check # Prettier (vérification)
```

> Windows / PowerShell : utiliser `npm.cmd` si `npm.ps1` est bloqué par la
> politique d'exécution.

## Locales / i18n

- **Français (fr)** : langue par défaut → `/`
- **Arabe (ar)** : `/ar/`, mise en page **RTL** (`dir="rtl"`)

Configuration : `src/i18n/config.ts`. Les dictionnaires et pages arabe arrivent
en Phase 1.

## Horaires de prière

`src/lib/prayerConfig.ts` est le **seul fichier de configuration** du calcul
(methodes et Asr y sont centralisées).

> ⚠️ Valeurs **provisoires de développement** : `mwl` (Muslim World League) +
> `standard` (Asr Shafi'i). À valider par le comité de la mosquée avant
> mise en ligne. Les coordonnées GPS sont laissées `null` (PLACEHOLDER).
> Aucune logique de calcul n'est encore implémentée (Phase 2).

## Structure du projet

```
src/
├── assets/            # images, logo, polices (Phase 1+)
├── components/        # composants réutilisables (Phase 1+)
├── content/           # contenu Markdown : actualités, activités (Phase 3)
├── i18n/              # configuration des locales
├── layouts/           # BaseLayout (head, header, footer)
├── lib/               # site.ts, prayerConfig.ts, utilitaires
├── pages/             # routes Astro (/, /ar/…)
├── styles/            # global.css (jetons Tailwind 4)
└── types/             # types partagés (Phase 1+)
public/                # fichiers statiques (robots.txt, …)
.github/workflows/     # CI
```

## Conventions

- **Pas d'invention de contenu** : toute donnée non fournie reste `PLACEHOLDER`.
- Composants : PascalCase ; utilitaires/lib : camelCase ; CSS : Tailwind.
- Commits : [Conventional Commits](https://www.conventionalcommits.org).
- Accessibilité : sémantique HTML, `:focus-visible`, `prefers-reduced-motion`,
  lien d'évitement (`skip-link`), contrastes ≥ 4.5:1.

## Roadmap

| Phase | Contenu                                                           | Statut      |
| ----- | ----------------------------------------------------------------- | ----------- |
| 0     | Astro + TS + React + Tailwind + ESLint/Prettier + CI + BaseLayout | ✅ en cours |
| 1     | i18n complet, header/footer, 9 sections FR + AR (RTL)             | ⬜          |
| 2     | Module horaires de prière (SSG, compte à rebours, ICS)            | ⬜          |
| 3     | Page d'accueil complète + contenu réel                            | ⬜          |
| 4     | SEO (JSON-LD, sitemap, hreflang), a11y & performance              | ⬜          |
| 5     | Déploiement (Cloudflare Pages) + DNS                              | ⬜          |

## Licence / propriété

Propriété de l'association gestionnaire de la Mosquée d'Épernay
(informations légales PLACEHOLDER, à compléter).
