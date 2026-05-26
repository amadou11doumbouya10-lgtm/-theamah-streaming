# 🔍 Guide de Recherche dans Visual Studio Code

## 1. Chercher dans le fichier ouvert — `Ctrl + F`

C'est la recherche la plus simple. Elle cherche **dans le fichier que tu es en train de regarder**.

### Comment l'utiliser
1. Ouvre un fichier (ex: `theamah-streaming.html`)
2. Appuie sur **`Ctrl + F`**
3. Tape ce que tu cherches → les résultats sont surlignés en jaune

### Naviguer dans les résultats
| Touche | Action |
|---|---|
| `Enter` | Résultat suivant |
| `Shift + Enter` | Résultat précédent |
| `Échap` | Fermer la recherche |

### Options de la barre de recherche
| Bouton | Signification |
|---|---|
| `Aa` | Sensible à la casse (ex: distingue "SRCS" et "srcs") |
| `\b` | Mot entier uniquement |
| `.*` | Activer les expressions régulières (avancé) |

### Exemple pratique
Pour trouver toutes les sources dans le projet Theamah+ :
```
Ctrl + F  →  taper "_SRCS"
```
Tu vois directement la liste de toutes les sources de streaming.

---

## 2. Chercher dans tout le projet — `Ctrl + Shift + F`

Cette recherche cherche **dans tous les fichiers du dossier** en même temps.

### Comment l'utiliser
1. Appuie sur **`Ctrl + Shift + F`**
2. Le panneau "Recherche" s'ouvre à gauche
3. Tape ce que tu cherches
4. VS Code liste tous les fichiers qui contiennent ce mot, avec la ligne exacte

### Filtrer les résultats
Sous la barre de recherche, il y a deux champs optionnels :
- **"Fichiers à inclure"** → ex: `*.html` pour chercher que dans les HTML
- **"Fichiers à exclure"** → ex: `node_modules` pour ignorer les dossiers inutiles

### Exemple pratique
Pour trouver partout où `autoembed.co` est mentionné dans le projet :
```
Ctrl + Shift + F  →  taper "autoembed.co"
```
→ VS Code montre chaque fichier et chaque ligne qui contient ce domaine.

---

## 3. Chercher et remplacer — `Ctrl + H`

Pour **modifier un mot** partout dans un fichier d'un seul coup.

### Comment l'utiliser
1. Appuie sur **`Ctrl + H`**
2. Champ du haut → ce que tu cherches
3. Champ du bas → ce que tu veux mettre à la place
4. Clique sur **"Remplacer"** (une occurrence) ou **"Remplacer tout"** (toutes)

### Exemple pratique
Remplacer une ancienne URL par une nouvelle :
```
Chercher  : https://vidsrc.me/embed/movie
Remplacer : https://vidsrc.pm/embed/movie
→ Clique "Remplacer tout"
```

---

## 4. Chercher et remplacer dans tout le projet — `Ctrl + Shift + H`

Même chose que `Ctrl + H`, mais dans **tous les fichiers** du projet en même temps.

⚠️ **Attention** : très puissant, vérifie avant de confirmer.

---

## 5. Aller à une ligne précise — `Ctrl + G`

Si tu sais que l'information est à la ligne 893 :
1. Appuie sur **`Ctrl + G`**
2. Tape `893`
3. Appuie sur `Enter` → le curseur saute directement à cette ligne

### Exemple pratique
Pour aller directement à `IFRAME_WHITELIST` (ligne 893 dans Theamah+) :
```
Ctrl + G  →  893  →  Enter
```

---

## 6. Chercher un fichier par son nom — `Ctrl + P`

Pour ouvrir rapidement un fichier sans naviguer dans les dossiers :
1. Appuie sur **`Ctrl + P`**
2. Tape une partie du nom du fichier
3. Clique ou appuie sur `Enter` pour l'ouvrir

### Exemple pratique
```
Ctrl + P  →  taper "streaming"  →  sélectionner "theamah-streaming.html"
```

---

## 7. Sélectionner toutes les occurrences — `Ctrl + Shift + L`

Si tu cliques sur un mot et appuies sur **`Ctrl + Shift + L`**, VS Code sélectionne **toutes les occurrences** de ce mot dans le fichier. Tu peux ensuite les modifier toutes en même temps.

---

## Récapitulatif — Les raccourcis essentiels

| Raccourci | Ce que ça fait |
|---|---|
| `Ctrl + F` | Chercher dans le fichier ouvert |
| `Ctrl + H` | Chercher et remplacer dans le fichier |
| `Ctrl + Shift + F` | Chercher dans tout le projet |
| `Ctrl + Shift + H` | Chercher et remplacer dans tout le projet |
| `Ctrl + G` | Aller à une ligne précise |
| `Ctrl + P` | Ouvrir un fichier par son nom |
| `Ctrl + Shift + L` | Sélectionner toutes les occurrences |
| `Échap` | Fermer la barre de recherche |

---

## Astuce — Expressions régulières (mode avancé)

En activant le mode `.*` dans la barre de recherche, tu peux utiliser des patterns :

| Pattern | Signification | Exemple |
|---|---|---|
| `.` | N'importe quel caractère | `v.dsrc` trouve "vidsrc", "vadsrc"... |
| `*` | Zéro ou plusieurs fois | `vid.*\.pm` trouve tout entre "vid" et ".pm" |
| `^` | Début de ligne | `^var` trouve les lignes qui commencent par "var" |
| `$` | Fin de ligne | `vf:false\},$` trouve la fin des entrées de sources |

---

*Document créé pour le projet Theamah+ — 26/05/2026*
