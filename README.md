# Majosol - Site Association V0 MVP

Version statique MVP du site vitrine de l'association Majosol (Meyzieu). Cette version permet de présenter le concept à l'administration avant de développer les fonctionnalités complètes.

## 🎯 Version actuelle : V0 (MVP Statique)

Cette version est **entièrement statique** :

- Pas de base de données
- Pas d'authentification
- Pas d'upload
- Contenu dans fichiers JSON
- Déploiement instantané sur Vercel

## 📋 Fonctionnalités

### Pages publiques

- ✅ **Accueil** : Hero, dernières actualités, événements à venir
- ✅ **Qui sommes-nous** : Historique, mission, valeurs
- ✅ **Galerie** : Photos d'événements avec filtrage par catégorie
- ✅ **Actualités** : Liste et détail des articles
- ✅ **Contact** : Formulaire avec validation (message de confirmation uniquement)

### Contenu

- Articles dans `data/articles.json` (4 articles d'exemple)
- Photos dans `data/photos.json` (8 photos d'exemple)
- Événements dans `data/events.json` (3 événements à venir)

## 🚀 Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build pour production (génère /out)
pnpm build
```

## 📁 Structure

```
site-association/
├── app/                    # Pages Next.js
│   ├── page.tsx           # Accueil
│   ├── about/
│   ├── gallery/
│   ├── news/
│   └── contact/
├── components/
│   └── ui/                # Composants shadcn/ui
├── data/                  # Données statiques JSON
│   ├── articles.json
│   ├── photos.json
│   └── events.json
├── lib/
│   ├── data.ts           # Fonctions pour lire les données
│   └── utils.ts
└── public/
    └── images/           # Images (à ajouter)
```

## 🎨 Personnalisation

### Modifier le contenu

**Articles** : Éditer `data/articles.json`
**Photos** : Éditer `data/photos.json` et ajouter les images dans `public/images/gallery/`
**Événements** : Éditer `data/events.json`

### Ajouter des images

1. Placer les images dans `public/images/gallery/`
2. Mettre à jour `data/photos.json` avec les URLs (`/images/gallery/nom-image.jpg`)

## 🚀 Déploiement Vercel (Gratuit)

**📖 Guide complet** : Voir [DEPLOY.md](./DEPLOY.md) pour les instructions détaillées.

### Déploiement rapide

1. **Pousser le code sur GitHub**
2. **Aller sur [vercel.com](https://vercel.com)** et se connecter avec GitHub
3. **Importer le repository** - Vercel détecte automatiquement Next.js
4. **Cliquer sur "Deploy"** - C'est tout !

### Configuration automatique

Vercel détecte automatiquement :

- ✅ Framework : Next.js
- ✅ Build Command : `npm run build`
- ✅ Output Directory : `.next` (géré automatiquement)
- ✅ Export statique : Détecté depuis `next.config.ts`

### Variables d'environnement (optionnel)

Dans Vercel Dashboard > Settings > Environment Variables :

```
NEXT_PUBLIC_SITE_URL=https://votre-projet.vercel.app
```

**Plan gratuit Vercel** : Déploiements illimités, domaine personnalisé gratuit, SSL automatique, CDN global.

## 📝 Prochaines versions

Voir `VERSIONS.md` pour le plan d'évolution :

- **V1** : Admin - Gestion du contenu (base de données, authentification)
- **V2** : Utilisateurs - Espace membres et services

## 🛠️ Technologies

- **Next.js 15** : Framework React avec export statique
- **TypeScript** : Typage statique
- **Tailwind CSS** : Styling
- **shadcn/ui** : Composants UI
- **React Hook Form + Zod** : Formulaires et validation

## 📄 Licence

MIT
