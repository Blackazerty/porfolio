# Guide d'Utilisation du Dashboard Administrateur

## Accès au Dashboard

**URL:** `http://votre-site.com/admin`

**Mot de passe par défaut:** `portfolio2025`

⚠️ **IMPORTANT:** Changez immédiatement le mot de passe dans le fichier:
`src/components/AdminDashboard.tsx` ligne 13

## Fonctionnalités Actuelles

### 1. Gestion des Messages de Contact

**Ce qui fonctionne:**
- ✅ Visualisation de tous les messages reçus
- ✅ Statistiques (Total, Non lus, Lus)
- ✅ Marquer comme lu/non lu
- ✅ Supprimer les messages
- ✅ Actualisation manuelle

**Comment utiliser:**
1. Connectez-vous au dashboard
2. Les messages s'affichent automatiquement
3. Cliquez sur l'icône "œil" pour marquer comme lu/non lu
4. Cliquez sur la corbeille pour supprimer un message

### 2. Base de Données des Projets

**Tables créées:**
- ✅ `projects` - Stocke tous vos projets
- ✅ `veille_articles` - Stocke vos articles de veille
- ✅ `certificates` - Stocke vos certificats

**Structure des données:**

**Projets:**
- title (titre)
- description
- category (year1, year2, personal)
- technologies (array)
- icon (nom de l'icône Lucide)
- github (lien optionnel)
- demo (lien optionnel)
- order_index (ordre d'affichage)
- visible (true/false)

**Articles de Veille:**
- title
- category
- date
- summary
- icon
- link
- order_index
- visible

**Certificats:**
- name
- organization
- date
- icon
- description
- link (optionnel)
- order_index
- visible

## Comment Ajouter/Modifier du Contenu

### Option 1: Via l'interface Supabase (Recommandé pour l'instant)

1. **Connectez-vous à Supabase:**
   - Allez sur [supabase.com](https://supabase.com)
   - Connectez-vous à votre projet

2. **Accédez à Table Editor:**
   - Dans le menu de gauche, cliquez sur "Table Editor"
   - Sélectionnez la table à modifier (`projects`, `veille_articles`, ou `certificates`)

3. **Ajouter une nouvelle entrée:**
   - Cliquez sur "Insert" → "Insert row"
   - Remplissez les champs
   - Cliquez sur "Save"

4. **Modifier une entrée existante:**
   - Cliquez sur la ligne à modifier
   - Modifiez les valeurs
   - Cliquez sur "Save"

5. **Supprimer une entrée:**
   - Cliquez sur la ligne
   - Cliquez sur les 3 points
   - Sélectionnez "Delete row"

### Option 2: Via SQL (pour les utilisateurs avancés)

**Exemple: Ajouter un projet**

```sql
INSERT INTO projects (
  title,
  description,
  category,
  technologies,
  icon,
  github,
  order_index,
  visible
) VALUES (
  'Mon Nouveau Projet',
  'Description détaillée du projet',
  'year2',
  ARRAY['Linux', 'Docker', 'Kubernetes'],
  'Cloud',
  'https://github.com/mon-projet',
  0,
  true
);
```

**Exemple: Ajouter un article de veille**

```sql
INSERT INTO veille_articles (
  title,
  category,
  date,
  summary,
  icon,
  link,
  order_index,
  visible
) VALUES (
  'Nouvelle vulnérabilité critique',
  'Cybersécurité',
  '1 Novembre 2025',
  'Description de la vulnérabilité...',
  'Shield',
  'https://lien-vers-article.com',
  0,
  true
);
```

**Exemple: Ajouter un certificat**

```sql
INSERT INTO certificates (
  name,
  organization,
  date,
  icon,
  description,
  link,
  order_index,
  visible
) VALUES (
  'CompTIA Security+',
  'CompTIA',
  'Décembre 2025',
  'Shield',
  'Certification en sécurité informatique reconnue internationalement',
  'https://lien-certificat.com',
  0,
  true
);
```

## Icônes Disponibles

Pour les champs `icon`, utilisez l'un de ces noms (exactement comme écrit):

**Pour les Projets:**
- `Server` - Icône serveur
- `Network` - Icône réseau
- `Shield` - Icône bouclier (sécurité)
- `Database` - Icône base de données
- `Cloud` - Icône cloud
- `Terminal` - Icône terminal
- `Code` - Icône code
- `Lock` - Icône cadenas

**Pour les Articles de Veille:**
- `Shield` - Sécurité
- `AlertTriangle` - Alerte
- `Cpu` - Processeur/IA
- `Network` - Réseau
- `Code` - Code
- `Lock` - Verrouillage

**Pour les Certificats:**
- `Award` - Récompense
- `Shield` - Sécurité
- `Code` - Code
- `Star` - Étoile
- `Lock` - Cadenas

## Ordre d'Affichage

Le champ `order_index` détermine l'ordre d'affichage:
- **0** = Premier élément affiché
- **1** = Deuxième élément
- **2** = Troisième élément
- etc.

## Visibilité

Le champ `visible`:
- `true` = Affiché sur le portfolio
- `false` = Masqué (mais reste dans la base de données)

## Prochaines Améliorations Suggérées

Pour une interface admin complète directement dans le dashboard, vous pourriez ajouter:

1. **Onglets de navigation** dans le dashboard pour:
   - Messages de contact (déjà implémenté)
   - Gestion des projets
   - Gestion de la veille
   - Gestion des certificats

2. **Formulaires d'édition** pour chaque type de contenu

3. **Upload d'images** pour les projets et certificats

4. **Éditeur markdown** pour les descriptions

5. **Prévisualisation** avant publication

## Dépannage

### Le contenu ne s'affiche pas sur le portfolio

**Vérifiez:**
1. Le champ `visible` est bien à `true`
2. Actualisez le cache du navigateur (Ctrl+F5)
3. Vérifiez qu'il n'y a pas d'erreur dans la console (F12)

### Impossible de modifier

**Solutions:**
1. Vérifiez que vous êtes connecté au dashboard
2. Vérifiez votre connexion internet
3. Consultez les logs dans la console du navigateur

### Les changements ne sont pas enregistrés

**Vérifiez:**
1. Que vous avez cliqué sur "Save"
2. Qu'il n'y a pas d'erreur de validation (tous les champs requis sont remplis)
3. Actualisez la page et revérifiez

## Support

Pour toute question ou problème:
1. Consultez la documentation Supabase: [docs.supabase.com](https://docs.supabase.com)
2. Vérifiez les logs dans la console du navigateur (F12)
3. Consultez le fichier `README_DATABASE.md` pour plus d'informations

## Sécurité

⚠️ **Rappels importants:**
1. Changez le mot de passe admin par défaut
2. Ne partagez jamais vos identifiants Supabase
3. Sauvegardez régulièrement votre base de données
4. Utilisez HTTPS en production
5. Activez l'authentification à deux facteurs sur Supabase

## Sauvegardes

Pour exporter vos données:
1. Connectez-vous à Supabase
2. Allez dans "Database" → "Backups"
3. Créez une sauvegarde manuelle
4. Téléchargez-la en local

---

**Dernière mise à jour:** Octobre 2025
