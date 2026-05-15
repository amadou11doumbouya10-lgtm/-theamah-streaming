# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Aperçu du projet

**Theamah+** est une application de streaming vidéo style Netflix entièrement côté client, construite en HTML/CSS/JavaScript vanilla. Elle s'exécute comme un fichier HTML unique sans backend, bundler, ni dépendances npm.

## Liens importants

- **Site en ligne** : https://amadou11doumbouya10-lgtm.github.io/-theamah-streaming/
- **Repo GitHub** : https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming
- **Mot de passe admin** : `theamah2026`

## Comment lancer le projet en local

```bash
cd "Theamah project"
python -m http.server 8765
# Ouvrir http://localhost:8765/theamah-streaming.html
```

Le protocole `file://` ne fonctionne pas à cause des restrictions CORS sur l'API TMDB.

## Workflow — Après chaque modification

```bash
# 1. Modifier theamah-streaming.html
# 2. Synchroniser vers index.html
cp theamah-streaming.html index.html
# 3. Push sur GitHub
git add . && git commit -m "description" && git push
# 4. Recharger le navigateur avec Ctrl+Shift+R
```

## Structure des fichiers

| Fichier | Rôle |
|---|---|
| `theamah-streaming.html` | Application complète — fichier de travail principal |
| `index.html` | Copie synchronisée — servi par GitHub Pages |
| `bibliotheque.js` | Base de données films/séries (29 entrées) |
| `filme/` | Films locaux MP4 — exclus de Git |
| `serie/` | Séries locales MP4 — exclues de Git |
| `AMELIORATIONS/` | Dossier des idées et demandes de modifications futures |
| `CORRECTIONS.md` | Journal de tous les bugs et corrections |
| `CLAUDE.md` | Ce fichier — guide pour Claude Code |

## Constantes clés

```js
var TK  = '4e44d9029b1270a757cddc766a1bcb63'; // Clé API TMDB
var TB  = 'https://api.themoviedb.org/3';
var IMG = 'https://image.tmdb.org/t/p/';
var LG  = 'fr-FR';
var ADMIN_HASH = 'd956b3c...'; // SHA-256 de "theamah2026"
```

## Persistence des données

| Store | Clé | Contenu |
|---|---|---|
| localStorage | `t_favs` | Favoris |
| localStorage | `t_user` | Utilisateur connecté |
| localStorage | `t_users` | Comptes (mots de passe hashés SHA-256) |
| localStorage | `t_lib` | Films ajoutés via Admin |
| localStorage | `t_history` | Historique + progression |
| IndexedDB | `theamah_videos` | Blobs vidéo et sous-titres |

## Sources de contenu

1. **bibliotheque.js** → `window.SHARED_LIBRARY` (29 entrées)
2. **TMDB API** → tendances, catalogue, recherche, bandes-annonces
3. **6 sources embed actives** (testées 15/05/2026) :

| Source | VF | Statut |
|---|---|---|
| VidSrc.to | ✅ | Actif |
| VidSrc.me | ✅ | Actif |
| AutoEmbed | — | Actif |
| 2Embed.cc | — | Actif |
| 2Embed.skin | — | Actif |
| SuperEmbed | — | Actif |

4. **Auto-essai** : si source ne répond pas en 8s → source suivante automatique

## Lecteur vidéo

- **Local** : `playLocal(id, sIdx, eIdx)` → `<video>` HTML5
  - Sauvegarde progression toutes les 30s (`startPlyAutoSave`)
  - Sous-titres `.vtt`/`.srt` via `<track srclang="fr" default>`
  - Si fichier introuvable en ligne → message `showLocalFileError()`
- **Streaming** : `playTmdb(id, type, title)` → iframe embed
- **Bibliothèque avec tmdbId** → `playTmdb()` automatique

## Pages et filtres

- `showPage(p)` : `home`, `catalog`, `myfilms`, `favs`, `search`
- `applyMyFilters()` : recherche + filtre Films/Séries + tri (A-Z, Z-A, Note)
- `loadFavs()` : filtre Films/Séries + tri A-Z/Z-A

## Contenu en français

- TMDB avec `language=fr-FR`
- Sections **🇫🇷 Films Français** et **🇫🇷 Séries Françaises** (`with_original_language=fr`)
- Badge **VF** sur VidSrc.to et VidSrc.me

## Structure bibliotheque.js

### Film local
```js
{
  id: "local_xxx",
  title: "...", year: "2025", type: "movie",
  genre: "Action", desc: "...", rating: "7.5",
  poster: "https://image.tmdb.org/t/p/w300/...",
  backdrop: "https://image.tmdb.org/t/p/w1280/...",
  videoUrl: "./filme/film.mp4",
  mimeType: "video/mp4",
  isLocal: true,
  addedAt: "2026-05-15T00:00:00.000Z"
}
```

### Série locale (épisodes hébergés en ligne ou locaux)
```js
{
  id: "local_xxx",
  title: "...", year: "2023", type: "tv",
  genre: "Drame", desc: "...", rating: "7.2",
  poster: "https://image.tmdb.org/t/p/w300/...",
  backdrop: "https://image.tmdb.org/t/p/w1280/...",
  isLocal: true,
  addedAt: "2026-05-15T00:00:00.000Z",
  seasons: [{ episodes: [
    {title: "Ep 1", videoUrl: "https://github.com/.../releases/download/v1.0/E1.MP4", mimeType: "video/mp4"},
  ]}]
}
```
⚠️ Espaces dans les chemins locaux → encoder en `%20`

### Film streaming (embed)
```js
{
  id: "stream_xxx_27205",
  title: "...", year: "2010", type: "movie",
  genre: "...", desc: "...", rating: "8.4",
  poster: "https://image.tmdb.org/t/p/w300/...",
  backdrop: "https://image.tmdb.org/t/p/w1280/...",
  videoUrl: "https://vidsrc.to/embed/movie/27205",
  mimeType: "text/html",
  isLocal: true,
  tmdbId: 27205,
  addedAt: "2026-05-15T00:00:00.000Z"
}
```

## Hébergement vidéo — GitHub Releases

Les épisodes de séries locales sont hébergés dans les releases GitHub :
- Release : `v1.0`
- URL pattern : `https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming/releases/download/v1.0/<fichier.MP4>`
- Pour ajouter de nouveaux fichiers : créer une nouvelle release (v1.1, v2.0...)

## Raccourcis clavier lecteur

| Touche | Action |
|---|---|
| Espace | Lecture / Pause |
| ← / → | -10s / +10s |
| ↑ / ↓ | Volume + / - |
| M | Muet |
| F | Plein écran |
| P | Picture-in-Picture |
| N | Source suivante |
| Échap | Fermer |

## Système de design

```css
--bg: #080c14    --bg2: #0f1521    --bg3: #161d2e
--accent: #e50914 (rouge)    --gold: #f5c518    --green: #1db954
--text: #eef0f4    --text2: #8892a4
```
Breakpoints : `900px` (nav mobile) · `600px` (bottom sheets)

## Historique des sessions

### Session 1
- Favicon, meta OG, index.html GitHub Pages
- Gestion erreur TMDB, confirmation suppression, Échap ferme modals
- PiP, plein écran, badge STREAM/LOCAL, modal admin, hash mots de passe
- Sauvegarde progression 30s, nav active, hero 9s+pause
- Raccourcis clavier, message aucun résultat, mode invité
- Force mot de passe, 15 films + 8 séries pré-chargés

### Session 2 — 15/05/2026
- A1 : Tri/filtre Favoris + Bibliothèque
- A2 : Stats "X films · Y séries"
- A4 : Bouton ✕ par card "Continuer à regarder"
- A5 : Mobile — touch targets 44px, bottom sheets
- A10 : Recherche temps réel dans Bibliothèque
- I2 : Auto-essai sources 8s + 4 sources mortes supprimées
- Badge VF, message astuce langue
- Sections 🇫🇷 Films/Séries Français
- Support sous-titres VTT/SRT (films + épisodes)
- Série locale : One Trillion Dollars S1 (6 épisodes)
- Déploiement GitHub Pages
- Vidéos hébergées sur GitHub Releases (v1.0)
- `showLocalFileError()` si fichier absent en ligne
