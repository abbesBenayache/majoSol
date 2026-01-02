# Guide de déploiement sur Vercel (Gratuit)

## Prérequis

1. Un compte GitHub, GitLab ou Bitbucket (gratuit)
2. Un compte Vercel (gratuit) : [vercel.com](https://vercel.com)

## Méthode 1 : Déploiement via l'interface Vercel (Recommandé)

### Étape 1 : Préparer le projet

1. **Pousser votre code sur GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/site-association.git
   git push -u origin main
   ```

### Étape 2 : Déployer sur Vercel

1. **Aller sur [vercel.com](https://vercel.com)** et se connecter avec GitHub
2. **Cliquer sur "Add New Project"**
3. **Importer votre repository** :
   - Sélectionner le repository `site-association`
   - Vercel détecte automatiquement Next.js
4. **Configuration du projet** :
   - **Framework Preset** : Next.js (détecté automatiquement)
   - **Root Directory** : `./` (par défaut)
   - **Build Command** : `npm run build` (par défaut)
   - **Output Directory** : `.next` (Vercel gère automatiquement)
   - **Install Command** : `npm install` (par défaut)
5. **Variables d'environnement** (optionnel mais recommandé) :
   - Cliquer sur "Environment Variables"
   - Ajouter : `NEXT_PUBLIC_SITE_URL` = `https://votre-projet.vercel.app`
   - (Vous pourrez mettre votre domaine personnalisé plus tard)
6. **Cliquer sur "Deploy"**

### Étape 3 : Configuration post-déploiement

1. **Attendre la fin du build** (2-3 minutes)
2. **Votre site est en ligne** à l'adresse : `https://votre-projet.vercel.app`
3. **Configurer un domaine personnalisé** (optionnel) :
   - Aller dans "Settings" > "Domains"
   - Ajouter votre domaine (ex: `majosol.fr`)
   - Suivre les instructions DNS

## Méthode 2 : Déploiement via CLI Vercel

### Installation de Vercel CLI

```bash
npm i -g vercel
```

### Déploiement

```bash
# Se connecter à Vercel
vercel login

# Déployer (première fois)
vercel

# Pour les déploiements suivants
vercel --prod
```

## Configuration importante

### Variables d'environnement

Dans Vercel Dashboard > Settings > Environment Variables, ajouter :

```
NEXT_PUBLIC_SITE_URL=https://votre-projet.vercel.app
```

Ou si vous avez un domaine personnalisé :

```
NEXT_PUBLIC_SITE_URL=https://majosol.fr
```

### Build automatique

Vercel déploie automatiquement à chaque push sur la branche `main` :

- Chaque commit = nouveau déploiement
- Pull Requests = preview deployments (URLs temporaires)

## Plan gratuit Vercel

✅ **Inclus gratuitement** :

- Déploiements illimités
- Bandwidth : 100 GB/mois
- Builds : 6000 minutes/mois
- Domaine personnalisé gratuit
- SSL automatique (HTTPS)
- CDN global
- Preview deployments pour chaque PR

## Vérification post-déploiement

1. ✅ Vérifier que le site charge correctement
2. ✅ Tester toutes les pages (/, /about, /contact, /news, /gallery)
3. ✅ Vérifier les images
4. ✅ Tester le formulaire de contact
5. ✅ Vérifier le sitemap : `https://votre-site.vercel.app/sitemap.xml`
6. ✅ Vérifier robots.txt : `https://votre-site.vercel.app/robots.txt`

## Problèmes courants

### Build échoue

- Vérifier que `npm run build` fonctionne en local
- Vérifier les logs dans Vercel Dashboard
- S'assurer que toutes les dépendances sont dans `package.json`

### Images ne s'affichent pas

- Vérifier que les images sont dans `/public`
- Vérifier les chemins (commencer par `/images/...`)

### Variables d'environnement

- Les variables doivent être préfixées par `NEXT_PUBLIC_` pour être accessibles côté client
- Redéployer après avoir ajouté des variables

## Support

- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Support Vercel : [vercel.com/support](https://vercel.com/support)
