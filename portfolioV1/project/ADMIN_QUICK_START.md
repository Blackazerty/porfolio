# Démarrage Rapide - Interface Admin

## 🚀 En 30 Secondes

### 1. Accédez à l'Admin
```
https://votre-site.com/admin
```

### 2. Entrez le Mot de Passe
```
portfolio2025
```

### 3. Vous êtes Connecté!

---

## 📱 4 Onglets Disponibles

| Onglet | Action | Description |
|--------|--------|-------------|
| 📧 Messages | Consulter | Voir tous les messages de contact |
| 📁 Projets | Gérer | Ajouter, modifier, supprimer projets |
| 🎓 Certificats | Gérer | Ajouter, modifier, supprimer certificats |
| 📰 Veille Tech | Gérer | Ajouter, modifier, supprimer articles |

---

## ➕ Ajouter un Élément

**Pour chaque onglet (sauf Messages):**

1. Cliquez **"Ajouter ..."**
2. **Modal s'ouvre** en plein écran
3. **Déposez ou sélectionnez** un fichier (image/PDF)
4. **Cliquez "Confirmer"**
5. **Remplissez le formulaire** (titre, description, etc.)
6. **Cliquez "Sauvegarder"**

✅ **C'est fait!** L'élément apparaît sur le portfolio.

---

## ✏️ Modifier

1. Trouvez l'élément dans la liste
2. Cliquez l'icône **✏️ (crayon)**
3. Modifiez les champs
4. Cliquez **"Sauvegarder"**

---

## 🗑️ Supprimer

1. Cliquez l'icône **🗑️ (corbeille)**
2. Confirmez la suppression
3. **C'est supprimé définitivement**

---

## 👁️ Masquer/Afficher

1. Cliquez l'icône **👁️ ou 👁️‍🗨️**
2. L'élément est **masqué/affiché** sur le portfolio
3. Les données sont **conservées**

---

## 📁 Types de Fichiers

### ✅ Acceptés
- Images: JPG, PNG, GIF
- Documents: PDF

### ❌ Non Acceptés
- Word, Excel, PowerPoint
- Autres formats

### 📊 Limite
- Max 10 MB par fichier

---

## 🎓 Champs par Type

### Projets *
- Titre
- Description
- Catégorie (1ère année / 2ème année / Personnel)
- Technologies
- Icône
- GitHub (optionnel)
- Démo (optionnel)

### Certificats *
- Nom
- Organisation
- Date
- Description
- Icône
- Lien (optionnel)

### Veille Technologique *
- Titre
- Catégorie
- Date
- Résumé
- Icône
- Lien

\* Champs obligatoires

---

## 🎨 Icônes Disponibles

**Projets:**
🖥️ Server | 🌐 Network | 🛡️ Shield | 💾 Database | ☁️ Cloud | ⌨️ Terminal | 💻 Code | 🔒 Lock

**Certificats:**
🏆 Award | 🛡️ Shield | 💻 Code | ⭐ Star | 🔒 Lock

**Veille:**
🛡️ Shield | ⚠️ AlertTriangle | 💻 Cpu | 🌐 Network | 💾 Code | 🔒 Lock

---

## 📊 Messages

### Voir les Statistiques
- **Total:** Tous les messages
- **Non lus:** Nouveaux messages (orange)
- **Lus:** Messages consultés (vert)

### Actions
- 👁️ Marquer comme lu/non lu
- 🗑️ Supprimer le message

---

## 🔐 Sécurité

⚠️ **Important!**

1. **Ne partagez jamais** le mot de passe
2. **Changez le mot de passe** si c'est nécessaire
   - Fichier: `src/components/admin/AdminLayout.tsx`
   - Ligne: 16
   - Changez: `const ADMIN_PASSWORD = 'portfolio2025';`
3. **Utilisez HTTPS** en production

---

## 🚨 Besoin d'Aide?

**Email:** yanis.prv@outlook.com
**Tel:** 0767286123

**Documentation complète:** Voir `FILE_UPLOAD_GUIDE.md`

---

## 📚 Navigation Complète

```
Espace Admin
├── 📧 Messages
│   ├── Consulter les messages
│   ├── Marquer comme lu
│   └── Supprimer
├── 📁 Projets
│   ├── Ajouter
│   ├── Éditer
│   ├── Supprimer
│   └── Masquer/Afficher
├── 🎓 Certificats
│   ├── Ajouter
│   ├── Éditer
│   ├── Supprimer
│   └── Masquer/Afficher
├── 📰 Veille Tech
│   ├── Ajouter
│   ├── Éditer
│   ├── Supprimer
│   └── Masquer/Afficher
└── 🚪 Déconnexion
```

---

**C'est simple, intuitif et ça marche!** 🎉

Version 1.0 - Novembre 2025
