# Guide d'utilisation de la Base de Données

## Configuration Supabase

Votre portfolio utilise **Supabase** comme base de données hébergée et sécurisée.

### Informations de connexion

Les variables d'environnement sont déjà configurées dans le fichier `.env`:
- `VITE_SUPABASE_URL`: URL de votre instance Supabase
- `VITE_SUPABASE_ANON_KEY`: Clé d'API publique

## Structure de la Base de Données

### Table: `contact_messages`

Stocke tous les messages reçus via le formulaire de contact.

**Colonnes:**
- `id` (uuid) - Identifiant unique
- `name` (text) - Nom de l'expéditeur
- `email` (text) - Email de l'expéditeur
- `message` (text) - Contenu du message
- `created_at` (timestamp) - Date de création automatique
- `read` (boolean) - Statut de lecture (false par défaut)
- `ip_address` (text) - Adresse IP (optionnel)

### Table: `portfolio_views`

Permet de suivre les statistiques de visite (optionnel).

**Colonnes:**
- `id` (uuid) - Identifiant unique
- `page` (text) - Page visitée
- `visited_at` (timestamp) - Date de visite
- `ip_address` (text) - Adresse IP du visiteur

## Sécurité (Row Level Security - RLS)

### Politiques de sécurité configurées:

1. **Messages de contact:**
   - ✅ Tout le monde peut INSÉRER des messages (formulaire public)
   - ❌ Personne ne peut LIRE les messages sans authentification
   - ✅ Seuls les utilisateurs authentifiés peuvent LIRE et MODIFIER les messages

2. **Statistiques de visite:**
   - ✅ Tout le monde peut enregistrer une visite
   - ✅ Seuls les utilisateurs authentifiés peuvent consulter les stats

## Dashboard Admin

### Accès au Dashboard

**URL:** `http://votre-site.com/admin`

**Mot de passe par défaut:** `portfolio2025`

⚠️ **IMPORTANT:** Changez ce mot de passe dans le fichier `src/components/AdminDashboard.tsx` ligne 13:
```typescript
const ADMIN_PASSWORD = 'votre_nouveau_mot_de_passe';
```

### Fonctionnalités du Dashboard

1. **Statistiques en temps réel:**
   - Nombre total de messages
   - Nombre de messages non lus
   - Nombre de messages lus

2. **Gestion des messages:**
   - Affichage de tous les messages reçus
   - Marquer comme lu/non lu
   - Supprimer un message
   - Actualiser la liste

3. **Détails des messages:**
   - Nom et email de l'expéditeur
   - Date et heure de réception
   - Contenu complet du message
   - Statut de lecture visuel

## Comment surveiller votre base de données

### Option 1: Dashboard Admin intégré (Recommandé)

Utilisez le dashboard créé à l'URL `/admin` pour:
- Consulter tous les messages
- Gérer les statuts de lecture
- Supprimer les messages

### Option 2: Interface Supabase

1. Connectez-vous à [supabase.com](https://supabase.com)
2. Sélectionnez votre projet
3. Allez dans "Table Editor"
4. Consultez les tables `contact_messages` et `portfolio_views`

### Option 3: Notifications par Email (À configurer)

Vous pouvez configurer des triggers Supabase pour recevoir un email à chaque nouveau message:

1. Allez dans "Database" → "Functions"
2. Créez une fonction qui envoie un email
3. Créez un trigger sur `contact_messages` (INSERT)

## Hébergement de la Base de Données

Votre base de données est hébergée sur **Supabase** avec:

- ✅ **Hébergement gratuit** (jusqu'à 500 MB de stockage)
- ✅ **Sauvegardes automatiques**
- ✅ **SSL/TLS par défaut**
- ✅ **Haute disponibilité**
- ✅ **Authentification sécurisée**
- ✅ **Row Level Security (RLS)**
- ✅ **API REST et Realtime automatiques**

## Maintenance

### Sauvegardes

Supabase effectue des sauvegardes automatiques. Pour exporter manuellement:

1. Connectez-vous à Supabase
2. Allez dans "Database" → "Backups"
3. Téléchargez une sauvegarde

### Nettoyage des données

Pour supprimer d'anciens messages via SQL:

```sql
DELETE FROM contact_messages
WHERE created_at < NOW() - INTERVAL '6 months';
```

## Support et Documentation

- **Documentation Supabase:** [docs.supabase.com](https://docs.supabase.com)
- **Support:** [supabase.com/support](https://supabase.com/support)

## Conseils de Sécurité

1. ⚠️ Changez le mot de passe admin par défaut
2. ⚠️ Ne partagez jamais votre `SUPABASE_SERVICE_ROLE_KEY`
3. ✅ Gardez `VITE_SUPABASE_ANON_KEY` publique (elle est sécurisée par RLS)
4. ✅ Vérifiez régulièrement les logs d'accès
5. ✅ Limitez les permissions au strict nécessaire

## Dépannage

### Problème: Les messages ne s'enregistrent pas

**Solution:**
1. Vérifiez que les variables d'environnement sont correctes
2. Vérifiez que RLS est bien configuré
3. Consultez la console du navigateur pour les erreurs

### Problème: Impossible d'accéder au dashboard

**Solution:**
1. Vérifiez que vous accédez à `/admin`
2. Utilisez le bon mot de passe
3. Videz le cache du navigateur

### Problème: Erreur d'authentification

**Solution:**
1. Vérifiez votre connexion internet
2. Vérifiez que votre instance Supabase est active
3. Régénérez les clés API si nécessaire
