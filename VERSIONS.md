# Plan d'évolution du site association

Documentation des 3 versions du projet avec leurs fonctionnalités et stack technique.

---

## 📋 Vue d'ensemble

| Version | Objectif | Durée estimée | Statut |
|---------|----------|---------------|--------|
| **V0** | MVP statique - Présentation à l'administration | 1-2 jours | 🚧 En cours |
| **V1** | Admin - Gestion du contenu par l'association | 1-2 semaines | ⏳ À venir |
| **V2** | Utilisateurs - Espace membres et services | 2-3 semaines | ⏳ À venir |

---

## 🎯 V0 : MVP Statique (Version actuelle)

### Objectif
Créer une version statique rapidement déployable pour présenter le concept à l'administration de l'association. Pas de backend, pas de base de données.

### Stack technique

```
Frontend:
- Next.js 15 (export statique)
- TypeScript strict
- Tailwind CSS
- shadcn/ui (composants essentiels)
- Lucide React (icônes)

Pas de backend:
- Pas de base de données
- Pas d'authentification
- Pas d'upload
- Contenu dans fichiers JSON
```

### Fonctionnalités

**Pages publiques :**
- ✅ Page d'accueil avec hero, dernières actualités, événements
- ✅ Page "Qui sommes-nous" (contenu statique)
- ✅ Galerie photos (images dans `/public/images/`)
- ✅ Actualités (liste + page détail)
- ✅ Contact (formulaire avec validation, pas d'envoi réel)

**Contenu :**
- Articles dans `data/articles.json`
- Photos dans `data/photos.json`
- Événements dans `data/events.json`
- Images dans `/public/images/gallery/`

**Design :**
- Responsive mobile-first
- Design moderne et épuré
- Animations subtiles (optionnel)

### Structure du projet

```
site-association/
├── app/
│   ├── page.tsx              # Accueil
│   ├── about/page.tsx
│   ├── gallery/page.tsx
│   ├── news/
│   │   ├── page.tsx          # Liste articles
│   │   └── [slug]/page.tsx   # Détail article
│   └── contact/page.tsx
├── components/
│   ├── ui/                   # shadcn components
│   └── ...
├── data/
│   ├── articles.json
│   ├── photos.json
│   └── events.json
├── public/
│   └── images/
│       └── gallery/
└── next.config.ts            # output: 'export'
```

### Déploiement

- **Plateforme**: Vercel (gratuit)
- **Build**: `pnpm build` (génère `/out`)
- **Configuration**: Export statique, images non optimisées

### Checklist V0

- [x] Structure du projet
- [ ] Pages publiques (5 pages)
- [ ] Contenu placeholder (articles, photos, événements)
- [ ] Design responsive
- [ ] Formulaire contact avec validation
- [ ] Déploiement Vercel
- [ ] README avec instructions

---

## 🎯 V1 : Admin - Gestion du contenu

### Objectif
Permettre à l'association de gérer son contenu (articles, photos, messages) sans intervention technique.

### Stack technique (ajouts par rapport à V0)

```
Backend:
- Next.js Server Actions (intégré)
- PostgreSQL (Vercel Postgres gratuit)
- Drizzle ORM
- NextAuth.js v5 (authentification admin)

Upload:
- Uploadthing (upload photos avec drag & drop)

Email:
- Resend (envoi emails contact)

Validation:
- Zod (schemas validation)
- React Hook Form
```

### Fonctionnalités ajoutées

**Authentification :**
- Login admin (email/password)
- Protection routes admin
- Session JWT

**Espace admin (`/admin`) :**
- Dashboard avec statistiques
- CRUD articles (éditeur Tiptap)
- Upload photos (drag & drop multiple)
- Gestion messages contact
- Publication/dépublier articles

**Base de données :**
- Tables: users, articles, photos, contact_messages, events
- Migrations Drizzle
- Relations entre tables

### Migration depuis V0

1. Ajouter PostgreSQL (Vercel Postgres)
2. Créer schema Drizzle
3. Migrer données JSON → DB (script de migration)
4. Ajouter NextAuth.js
5. Créer interface admin
6. Ajouter upload photos
7. Migrer formulaire contact (sauvegarde DB + email)

### Checklist V1

- [ ] Base de données PostgreSQL configurée
- [ ] Schema Drizzle créé
- [ ] Migration données V0 → DB
- [ ] Authentification NextAuth.js
- [ ] Interface admin complète
- [ ] CRUD articles avec éditeur
- [ ] Upload photos fonctionnel
- [ ] Gestion messages contact
- [ ] Tests fonctionnels

---

## 🎯 V2 : Espace utilisateurs et services

### Objectif
Ajouter un espace pour les membres authentifiés avec des services (réservations, inscriptions, etc.).

### Stack technique (ajouts par rapport à V1)

```
Authentification:
- Système de rôles (admin, membre, visiteur)
- Inscription/connexion utilisateurs

Services:
- Réservations événements
- Inscriptions activités
- Profil utilisateur
- Historique actions

Notifications:
- Email notifications
- Notifications in-app (optionnel)
```

### Fonctionnalités ajoutées

**Authentification utilisateurs :**
- Inscription publique
- Connexion membres
- Récupération mot de passe
- Profil utilisateur

**Espace membre (`/member`) :**
- Dashboard personnel
- Réservations événements
- Inscriptions activités
- Historique des actions
- Préférences

**Services :**
- Réservation événements (avec places limitées)
- Inscription à des activités
- Téléchargement documents (optionnel)
- Newsletter (optionnel)

**Notifications :**
- Email de confirmation
- Rappels événements
- Notifications importantes

### Migration depuis V1

1. Ajouter système de rôles
2. Créer tables: reservations, inscriptions, user_preferences
3. Créer interface inscription/connexion
4. Créer espace membre
5. Implémenter services (réservations, inscriptions)
6. Ajouter notifications
7. Tests complets

### Checklist V2

- [ ] Système de rôles implémenté
- [ ] Inscription/connexion utilisateurs
- [ ] Espace membre complet
- [ ] Services (réservations, inscriptions)
- [ ] Notifications email
- [ ] Tests utilisateurs
- [ ] Documentation utilisateur

---

## 📊 Comparaison des versions

| Fonctionnalité | V0 | V1 | V2 |
|----------------|----|----|----|
| Pages publiques | ✅ | ✅ | ✅ |
| Contenu statique | ✅ | ❌ | ❌ |
| Base de données | ❌ | ✅ | ✅ |
| Authentification admin | ❌ | ✅ | ✅ |
| Gestion contenu | ❌ | ✅ | ✅ |
| Upload photos | ❌ | ✅ | ✅ |
| Authentification users | ❌ | ❌ | ✅ |
| Espace membre | ❌ | ❌ | ✅ |
| Services (réservations) | ❌ | ❌ | ✅ |
| Notifications | ❌ | ❌ | ✅ |

---

## 🚀 Roadmap de développement

### Phase 1 : V0 MVP (Semaine 1)
- [x] Setup projet
- [ ] Développement pages publiques
- [ ] Contenu placeholder
- [ ] Design et responsive
- [ ] Déploiement Vercel
- [ ] Présentation à l'administration

### Phase 2 : V1 Admin (Semaines 2-3)
- [ ] Setup base de données
- [ ] Migration V0 → V1
- [ ] Authentification admin
- [ ] Interface admin
- [ ] Tests et déploiement

### Phase 3 : V2 Utilisateurs (Semaines 4-6)
- [ ] Système de rôles
- [ ] Authentification utilisateurs
- [ ] Espace membre
- [ ] Services
- [ ] Notifications
- [ ] Tests complets

---

## 📝 Notes importantes

- **V0** : Focus sur la présentation visuelle et la validation du concept
- **V1** : Focus sur l'autonomie de l'association (gestion contenu)
- **V2** : Focus sur l'engagement des membres (services, communauté)

Chaque version est fonctionnelle et déployable indépendamment.

