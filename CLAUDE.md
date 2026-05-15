# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Aperçu du projet

**Theamah+** est une application de streaming vidéo style Netflix entièrement côté client, construite en HTML/CSS/JavaScript vanilla. Elle s'exécute comme un fichier HTML unique sans backend, bundler, ni dépendances npm.

## Comment lancer le projet

**Option 1 — Python (recommandé)** :
```bash
cd "Theamah project"
python -m http.server 8765
# Ouvrir http://localhost:8765/theamah-streaming.html
```

**Option 2 — VS Code Live Server** :
Clic droit sur `theamah-streaming.html` → "Open with Live Server"

Le protocole `file://` ne fonctionne pas à cause des restrictions CORS sur l'API TMDB.

Il n'y a pas de build, de lint, ni de tests dans ce projet.

## Structure des fichiers

| Fichier | Rôle |
|---|---|
| `theamah-streaming.html` | Application complète : HTML, CSS et JS dans un seul fichier — fichier de travail principal |
| `index.html` | Copie de `theamah-streaming.html` — version GitHub Pages (toujours synchroniser après modification) |
| `bibliotheque.js` | Base de données des films : 5 films locaux + 15 films streaming + 8 séries streaming + 1 série locale |
| `filme/` | Fichiers vidéo films locaux (.mp4, .mkv) — exclus de Git |
| `serie/` | Dossiers de séries locales (ex: `one trillion dollar saison 1/`) — exclus de Git |
| `.gitignore` | Exclut `filme/`, `serie/`, `*.mp4`, `*.mkv` |
| `CORRECTIONS.md` | Journal des bugs trouvés et de leur statut de correction |

**Important** : après chaque modification de `theamah-streaming.html`, copier vers `index.html` :
```bash
cp theamah-streaming.html index.html
```

Après modification de `bibliotheque.js`, **recharger le navigateur avec Ctrl+Shift+R** (vider le cache).

## Constantes clés

```js
var TK  = '4e44d9029b1270a757cddc766a1bcb63'; // Clé API TMDB (publique, lecture seule)
var TB  = 'https://api.themoviedb.org/3';
var IMG = 'https://image.tmdb.org/t/p/';
var LG  = 'fr-FR';
var ADMIN_HASH = 'd956b3c...';  // SHA-256 de "theamah2026"
```

**Mot de passe admin : `theamah2026`**

## Architecture & Fonctions principales

### Navigation (SPA sans routeur)
`showPage(p)` gère les vues : `'home'`, `'catalog'`, `'myfilms'`, `'favs'`, `'search'`.
- Met à jour le lien actif dans la nav (classe `.active`)
- Appelle `loadFavs()`, `loadCatalog()`, ou `loadMyFilms()` selon la page

### Persistence des données (tout côté client)
| Store | Clé | Contenu |
|---|---|---|
| localStorage | `t_favs` | Tableau de favoris |
| localStorage | `t_user` | Utilisateur connecté (sans mot de passe) |
| localStorage | `t_users` | Comptes (mot de passe hashé SHA-256) |
| localStorage | `t_lib` | Films ajoutés via Admin |
| localStorage | `t_history` | Historique de visionnage + progression |
| IndexedDB | `theamah_videos` | Blobs vidéo ET sous-titres uploadés via Admin |

### Sources de contenu
1. **Bibliothèque locale** — `bibliotheque.js` → `window.SHARED_LIBRARY`
   - Films avec `videoUrl: './filme/...'` → vrais fichiers locaux → badge **LOCAL** vert
   - Séries avec `seasons[].episodes[].videoUrl: './serie/...'` → fichiers locaux
   - Films/séries avec `tmdbId` → streaming via embeds → badge **STREAM** rouge
2. **TMDB API** — tendances, catalogue, recherche, détails, bandes-annonces
3. **6 sources d'embed streaming actives** (testées le 15/05/2026) :
   - VidSrc.to ✅ (badge VF — sélecteur de langue intégré)
   - VidSrc.me ✅ (badge VF)
   - AutoEmbed ✅
   - 2Embed.cc ✅
   - 2Embed.skin ✅
   - SuperEmbed ✅
4. **Auto-essai** : si une source ne répond pas en 8s, passage automatique à la suivante

### Lecteur vidéo
- **Fichiers locaux** : `playLocal(id, sIdx, eIdx)` → `<video>` HTML5
  - Sauvegarde progression toutes les **30 secondes** via `startPlyAutoSave()`
  - Reprend à la position sauvegardée au relancement
  - Supporte les sous-titres `.vtt`/`.srt` via `<track>` (ajoutés depuis Admin)
- **Films TMDB / streaming** : `playTmdb(id, type, title)` → iframe embed avec sélecteur de sources
- **Films bibliothèque avec tmdbId** : `buildLocalCard()` appelle `playTmdb()` automatiquement

### Sous-titres (fichiers locaux uniquement)
- Upload `.vtt` ou `.srt` dans Admin → converti en VTT si besoin via `srtToVtt()`
- Stocké dans IndexedDB avec clé `sub_<filmId>` (film) ou `sub_ep_<key>` (épisode)
- Restauré au chargement via `restoreVideoURLs()` → `film.subtitleUrl`
- Injecté dans le lecteur via `<track kind="subtitles" srclang="fr" default>`

### Contenu en français
- TMDB API appelé avec `language=fr-FR` → titres et synopsis en français
- Section **🇫🇷 Films Français** et **🇫🇷 Séries Françaises** sur l'accueil (`with_original_language=fr`)
- Sources streaming avec badge **VF** : sélecteur de langue dans le lecteur

### Ma Bibliothèque — filtres
`applyMyFilters()` combine :
- Recherche texte (`#mySearch`) en temps réel
- Filtre type (`#myFilter`) : Tout / Films / Séries
- Tri (`#mySort`) : Ordre ajout / A-Z / Z-A / Mieux notés

### Favoris — filtres
`loadFavs()` lit `#favFilter` (Tout/Films/Séries) et `#favSort` (Ordre ajout/A-Z/Z-A).

### Authentification Admin
- `openAdmin()` → ouvre modal HTML stylisée (pas `window.prompt()`)
- `checkAdminPass()` → hash SHA-256, max 5 tentatives
- Session stockée dans `sessionStorage` (`t_admin_ok = '1'`)
- Mot de passe : `theamah2026`

### Authentification Utilisateurs
- Inscription : hash SHA-256 du mot de passe via `hashPass()`
- Connexion : compare hash (migration automatique si ancien compte en clair)
- Session : localStorage `t_user` (sans mot de passe, juste `{name, email}`)

### `bibliotheque.js` — Structure d'une entrée film local
```js
{
  id: "local_cleaner_2025",
  title: "Cleaner",
  year: "2025",
  type: "movie",
  genre: "Action, Thriller",
  desc: "...",
  rating: "6.3",
  poster: "https://image.tmdb.org/t/p/w300/...",
  backdrop: "https://image.tmdb.org/t/p/w1280/...",
  videoUrl: "./filme/Cleaner.mp4",   // chemin relatif depuis la racine du projet
  mimeType: "video/mp4",
  isLocal: true,
  addedAt: "2026-05-15T00:00:00.000Z"
}
```

### `bibliotheque.js` — Structure d'une série locale
```js
{
  id: "local_one_trillion_dollar_234717",
  title: "One Trillion Dollars",
  year: "2023",
  type: "tv",
  genre: "Drame",
  desc: "...",
  rating: "7.2",
  poster: "https://image.tmdb.org/t/p/w300/...",
  backdrop: "https://image.tmdb.org/t/p/w1280/...",
  isLocal: true,
  addedAt: "2026-05-15T00:00:00.000Z",
  seasons: [
    { episodes: [
      {title: "L'héritage", videoUrl: "./serie/one%20trillion%20dollar%20saison%201/E1.MP4", mimeType: "video/mp4"},
      // ... autres épisodes
    ]}
  ]
}
```
**Note** : les espaces dans les chemins de fichiers doivent être encodés `%20`.

### `bibliotheque.js` — Structure d'une entrée streaming
```js
{
  id: "stream_inception_27205",
  title: "Inception",
  year: "2010",
  type: "movie",
  genre: "Action, Sci-Fi",
  desc: "...",
  rating: "8.4",
  poster: "https://image.tmdb.org/t/p/w300/...",
  backdrop: "https://image.tmdb.org/t/p/w1280/...",
  videoUrl: "https://vidsrc.to/embed/movie/27205",
  mimeType: "text/html",
  isLocal: true,
  tmdbId: 27205,                  // Présent → playTmdb(), badge STREAM
  addedAt: "2026-05-15T00:00:00.000Z"
}
```

### Raccourcis clavier (lecteur)
| Touche | Action |
|---|---|
| Espace | Lecture / Pause |
| ← / → | -10s / +10s |
| ↑ / ↓ | Volume + / - |
| M | Muet |
| F | Plein écran |
| P | Picture-in-Picture |
| N | Source suivante |
| Échap | Fermer (tous les modals) |

## Système de design

Thème sombre avec variables CSS :
```css
--bg: #080c14        /* fond principal */
--bg2: #0f1521       /* fond secondaire */
--bg3: #161d2e       /* fond tertiaire */
--accent: #e50914    /* rouge Netflix */
--gold: #f5c518      /* jaune/or */
--green: #1db954     /* vert Spotify */
--text: #eef0f4      /* texte principal */
--text2: #8892a4     /* texte secondaire */
```

Breakpoints : `900px` (mobile nav) et `600px` (compact + bottom sheets).
Interface entièrement en **français**.

## GitHub Pages

- URL du dépôt : `https://github.com/amadou11doumbouya10-lgtm/<nom-repo>`
- URL du site : `https://amadou11doumbouya10-lgtm.github.io/<nom-repo>/`
- Fichier servi : `index.html` (copie synchronisée de `theamah-streaming.html`)
- Les fichiers vidéo locaux (`filme/`, `serie/`) sont exclus via `.gitignore`

## Historique des corrections appliquées

### Session 1 (initial)
- ✅ Favicon + meta Open Graph
- ✅ `index.html` pour GitHub Pages
- ✅ Gestion d'erreur TMDB avec bouton "Réessayer"
- ✅ Confirmation avant suppression d'un film
- ✅ Échap ferme tous les modals
- ✅ Bouton PiP + Plein écran dans le lecteur
- ✅ Badge STREAM rouge (tmdbId) vs LOCAL vert (fichier)
- ✅ Modal mot de passe admin stylisée (max 5 tentatives)
- ✅ Mots de passe utilisateurs hashés SHA-256
- ✅ Sauvegarde progression toutes les 30 secondes
- ✅ Lien page active dans la nav
- ✅ Hero pause au survol + 9 secondes
- ✅ Bouton "?" raccourcis clavier dans le lecteur
- ✅ Message "Aucun résultat" avec compteur dans la recherche
- ✅ Bouton "Continuer sans compte" dans la modal auth
- ✅ Indicateur force du mot de passe (rouge/jaune/vert)
- ✅ Films et séries populaires pré-chargés (15 films, 8 séries)

### Session 2 (15/05/2026)
- ✅ A1 — Tri/filtre dans Favoris (A-Z, Z-A, Films/Séries) et Bibliothèque (+ Mieux notés)
- ✅ A2 — Stats "X films · Y séries" sous le titre de Ma Bibliothèque
- ✅ A4 — Bouton ✕ par card dans "Continuer à regarder"
- ✅ A5 — Optimisation mobile : touch targets 44px, bottom sheets sur mobile
- ✅ A10 — Recherche en temps réel dans Ma Bibliothèque
- ✅ I2 — Auto-essai des sources streaming (8s, s'arrête si choix manuel)
- ✅ Sources nettoyées : 4 sources mortes supprimées, 6 actives conservées
- ✅ Badge VF sur VidSrc et VidSrc.me + message astuce langue dans le lecteur
- ✅ Section 🇫🇷 Films Français et 🇫🇷 Séries Françaises sur l'accueil
- ✅ Support sous-titres .vtt/.srt pour fichiers locaux (films et épisodes)
- ✅ Série locale ajoutée : One Trillion Dollars S1 (6 épisodes, ./serie/)
