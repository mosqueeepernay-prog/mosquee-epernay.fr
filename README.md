# Mosquée d'Épernay — mosquee-epernay.fr

Site officiel de la Mosquée d'Épernay (France).

> **Statut : Phase 1 — coquille bilingue (FR / AR).**
> Les sections sont en place, avec des **placeholders visibles** : aucune
> information officielle de la mosquée n'est encore fournie (adresse,
> téléphone, horaires, dons, logo, photos…). Tout est marqué `PLACEHOLDER`
> et ne doit **jamais** être inventé.

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

Routes (8 pages × 2 locales) : `/`, `/horaires-priere/`, `/la-mosquee/`,
`/ecole-coranique/`, `/activites/`, `/actualites/`, `/dons/`, `/contact/` et
leurs équivalents sous `/ar/`.

Configuration : `src/i18n/config.ts` (locales) + `src/i18n/routes.ts` (routes).
Dictionnaires FR/AR : `src/i18n/dictionaries/` (typage strict : toute clé
manquante en arabe est une erreur TypeScript). Le sélecteur de langue relie
chaque page à son équivalent, et `src/lib/seo.ts` génère canonical +
`hreflang` (`fr`, `ar`, `x-default`) + Open Graph.

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
├── components/
│   ├── home/          # sections de la page d'accueil (placeholders)
│   ├── layout/        # Header, Footer, Logo, LangSwitcher
│   └── shared/        # Button, Card, Heading, Section, Breadcrumbs…
├── i18n/              # config, routes, dictionnaires fr/ar
├── layouts/           # BaseLayout (SEO), PageLayout (pages internes)
├── lib/               # site.ts, prayerConfig.ts, seo.ts
├── pages/             # routes Astro (/, /horaires-priere/, /ar/…)
└── styles/            # global.css (jetons Tailwind 4)
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
| 0     | Astro + TS + React + Tailwind + ESLint/Prettier + CI + BaseLayout | ✅          |
| 1     | i18n complet, header/footer, sections FR + AR (RTL)               | ✅ en cours |
| 2     | Module horaires de prière (SSG, compte à rebours, ICS)            | ⬜          |
| 3     | Page d'accueil complète + contenu réel                            | ⬜          |
| 4     | SEO (JSON-LD, sitemap, hreflang), a11y & performance              | ⬜          |
| 5     | Déploiement (Cloudflare Pages) + DNS                              | ⬜          |

## Licence / propriété

Propriété de l'association gestionnaire de la Mosquée d'Épernay
(informations légales PLACEHOLDER, à compléter).
