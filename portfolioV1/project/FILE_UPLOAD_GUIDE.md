# Guide de Téléchargement de Fichiers - Espace Admin

## 🎯 Comment Ça Marche

Le système de téléchargement de fichiers fonctionne maintenant **en mode local avec stockage d'images en base64**. C'est plus rapide et plus simple!

## ✅ Processus d'Upload

### 1. Cliquer sur "Ajouter un Projet/Certificat/Article"

Un rectangle modal s'ouvre en plein écran.

### 2. Téléverser votre fichier

**3 Options:**

**Option 1: Glisser-Déposer**
- Glissez votre fichier directement dans la zone en pointillé
- La zone devient bleue (feed-back visuel)
- Lâchez la souris

**Option 2: Parcourir les Fichiers**
- Cliquez sur le bouton cyan "Parcourir les fichiers"
- Sélectionnez votre fichier (image ou PDF)
- Confirmez la sélection

**Option 3: Mobile**
- Tapez sur "Parcourir" pour accéder votre galerie

### 3. Aperçu Automatique

**Pour les images:**
- Affichage instantané de la miniature
- Vous voyez exactement ce qui sera sauvegardé

**Pour les PDFs:**
- Icône 📄 avec nom du fichier
- Indication "PDF"

### 4. Confirmer le Fichier

Une fois satisfait avec l'aperçu:
- Cliquez "Confirmer le fichier" (bouton bleu)
- Le fichier est enregistré

### 5. Remplir les Informations

Une nouvelle modale apparaît avec un formulaire:

**Pour Projets:**
- Titre *
- Description *
- Catégorie *
- Technologies *
- Icône *
- GitHub (optionnel)
- Démo (optionnel)

**Pour Certificats:**
- Nom *
- Organisation *
- Date *
- Description *
- Icône *
- Lien (optionnel)

**Pour Veille Technologique:**
- Titre *
- Catégorie *
- Date *
- Résumé *
- Icône *
- Lien vers l'article *

### 6. Sauvegarder

Cliquez "Sauvegarder le Projet/Certificat/Article"

**Le fichier apparaît instantanément** dans la liste!

## 📁 Formats Acceptés

✅ **Images:**
- JPG / JPEG
- PNG
- GIF

✅ **Documents:**
- PDF

❌ **Non acceptés:**
- Word (.doc, .docx)
- Excel (.xlsx, .xls)
- PowerPoint (.ppt, .pptx)
- Autres formats

## 📊 Limitations

- **Taille maximale:** 10 MB par fichier
- **Dimensions image:** Aucune limite (mais sera redimensionnée à l'affichage)
- **Nombre de fichiers:** Illimité

## 🔍 Aperçu des Fichiers

### Images
- Affichées directement en miniature dans le modal
- Stockées en base64 (encodé dans la base de données)
- Affichées correctement sur le portfolio

### PDFs
- Icône visuelle dans le modal
- Nom du fichier affiché
- Stockés également en base64

## 🔄 Modifier un Fichier

### Étapes:

1. Cliquez sur l'icône **Éditer** (crayon) sur la carte
2. La modale d'édition s'ouvre
3. L'aperçu du fichier actuel s'affiche
4. Vous pouvez **changer le fichier** ou **garder l'actuel**
5. Modifiez les autres champs (titre, description, etc.)
6. Cliquez "Sauvegarder"

## 🗑️ Supprimer un Fichier

Pour supprimer un projet/certificat/article avec son fichier:

1. Cliquez sur l'icône **Corbeille** (rouge)
2. Une confirmation apparaît
3. Confirmez la suppression
4. **Tout est supprimé** (fichier + données)

## 👁️ Masquer/Afficher

- Cliquez sur l'icône **Œil** pour basculer la visibilité
- Le fichier est conservé mais **non affiché** sur le portfolio
- Vous pouvez le restaurar quand vous voulez

## ⚠️ Problèmes Courants

### "Le fichier ne peut pas être téléchargé"
- Vérifiez que c'est une image JPG/PNG/GIF ou un PDF
- Vérifiez la taille (max 10 MB)
- Essayez avec un autre fichier

### "Erreur lors du traitement du fichier"
- Le fichier n'est peut-être pas un format valide
- Vérifiez que le fichier n'est pas corrompu
- Essayez de le compresser d'abord

### "Le fichier n'apparaît pas après l'upload"
- Rafraîchissez la page (Ctrl+F5)
- Vérifiez que vous avez cliqué "Sauvegarder"
- Vérifiez que l'élément est "Visible"

### "L'aperçu ne s'affiche pas"
- C'est normal pour les PDFs (icône utilisée)
- Pour les images, le fichier peut être corrompu
- Essayez avec une autre image

## 💾 Où sont Stockés les Fichiers?

Les fichiers sont stockés dans la **base de données Supabase** en format base64:

- **Images:** Convertis en base64
- **PDFs:** Convertis en base64
- **Sauvegarde:** Automatique et sécurisée
- **Accès:** Uniquement via l'admin

## 🚀 Astuces

### Réduire la Taille des Fichiers

**Pour les Images:**
1. Utilisez des outils comme Tinypng.com
2. Convertissez en PNG (mieux compressé)
3. Utilisez Photoshop ou GIMP

**Pour les PDFs:**
1. Utilisez un compresseur PDF en ligne
2. Réduisez la qualité des images dans le PDF
3. Supprimez les pages inutiles

### Noms de Fichiers

Utilisez des noms simples et en minuscules:
- ✅ `infrastructure-serveur.jpg`
- ✅ `certification-comptia.pdf`
- ❌ `Mon Fichier IMPORTANT!.jpg`
- ❌ `Projet@#$%.png`

### Organisation

Gardez vos fichiers organisés dans votre ordinateur:
```
Projets/
├── 1ere-annee/
│   ├── image1.jpg
│   └── document1.pdf
├── 2eme-annee/
│   └── image2.jpg
└── Personnels/
    └── image3.jpg
```

## 📞 Support

**Problème?**
- Email: yanis.zidazi@mediaschool.me
- Tel: 0767286123

---

**Version:** 1.0
**Dernière mise à jour:** Novembre 2025
