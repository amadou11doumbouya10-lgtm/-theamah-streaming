# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Aperçu du projet

**Theamah+** est une application de streaming vidéo style Netflix entièrement côté client, construite en HTML/CSS/JavaScript vanilla. Elle s'exécute comme un fichier HTML unique sans backend, bundler, ni dépendances npm.

## Liens importants

- **Site en ligne** : https://amadou11doumbouya10-lgtm.github.io/-theamah-streaming/
- **Repo GitHub** : https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming
- **Lien court** : https://tinyurl.com/27k6aabj
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
| localStorage | `t_srch_hist` | Historique recherche (5 dernières) |
| IndexedDB | `theamah_videos` | Blobs vidéo et sous-titres |

## Sources de streaming actives — État au 19/05/2026

⚠️ **IMPORTANT** : Seules 2 sources répondent actuellement. Toutes les autres ont été testées et retournent 403 ou sont mortes.

| Source | URL Film | URL Série | VF | Statut |
|---|---|---|---|---|
| **VidSrc.me** | `vidsrc.me/embed/movie?tmdb={id}` | `vidsrc.me/embed/tv?tmdb={id}&season={s}&episode={e}` | ✅ | ✅ Actif |
| **VSembed** | `vsembed.ru/embed/movie?tmdb={id}` | `vsembed.ru/embed/tv?tmdb={id}&season={s}&episode={e}` | ✅ | ✅ Actif (ex vidsrc-embed.ru → 301) |

### Sources testées et mortes (403 / ECONNREFUSED)
- vidsrc.to, vidsrc.sbs, vidsrc.fyi, vidsrc.mov, vidsrc.cc (famille VidSrc.to)
- 2Embed.cc, AutoEmbed.co, SuperEmbed/multiembed.mov, 2Embed.skin
- Frembed.com, Embed-API.stream
- vidsrcme.ru, vidsrc-me.ru, vidsrcme.su, vidsrc-embed.su, vsrc.su (miroirs .ru/.su)

### Raison des échecs 403
Les sources embed bloquent les requêtes sans `Referer` navigateur valide ou ont une IP restriction. VidSrc.me et VSembed sont les seules à autoriser l'embed depuis github.io.

### Si les sources tombent
Vérifier la liste officielle des domaines actifs : https://vidsrc.community/ ou https://vidsrc.domains/

## Lecteur vidéo

- **Local** : `playLocal(id, sIdx, eIdx)` → `<video>` HTML5
  - Sauvegarde progression toutes les 30s (`startPlyAutoSave`)
  - Sous-titres `.vtt`/`.srt` via `<track srclang="fr" default>`
  - Auto-play épisode suivant : countdown 10s + bouton Annuler (`startNextEpCountdown`)
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
- Badge **VF** sur VidSrc.me et VSembed (sélecteur langue intégré)

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
  videoUrl: "https://vidsrc.me/embed/movie?tmdb=27205",
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

### Session 3 — 16/05/2026
- Lien court TinyURL : https://tinyurl.com/27k6aabj
- QR Code généré (rouge/noir) → bureau : QRCode-Theamah.png
- Tentative sandbox iframe pour bloquer redirections pubs → annulée (cassait le lecteur)
- Recommandation : installer uBlock Origin pour bloquer les pubs
- Message astuce son ajouté dans le lecteur streaming

### Session 4 — 16/05/2026
- PWA : manifest.json + sw.js + icon.svg → site installable sur mobile/bureau
- Page 404.html stylisée Theamah+
- Modal Contact footer (EmailJS : service_zoosqg8 / template_ehlpyjq)
- Bouton 💡 Suggérer un titre (connectés uniquement) — modal EmailJS (template_s3bd6k2)
- Hero aléatoire + bouton "+ Favoris" avec texte
- og:image corrigée → backdrop Inception TMDB
- Audit sécurité complet + 7 correctifs : esc(), safeIframeSrc(), sandbox iframes, CSP, admin token robuste, délai brute-force, showToast safe

### Session 5 — 19/05/2026
- Analyse comparative vs sites de streaming 2026 (LookMovie, Netflix, FMovies)
- **Badges classement #1 #2 #3** sur sections Tendances Films et Séries
- **Badge NEW** (vert) sur contenus ajoutés dans les 30 derniers jours
- **Titres similaires** "Vous aimerez aussi" dans la modal de détail (TMDB /similar)
- **Historique de recherche** (A3) : 5 dernières recherches en dropdown nav
- **Auto-play épisode suivant** : countdown 10s + bouton Annuler + passage saison suivante
- **Audit des sources streaming** : test de 15+ sources embed
- Seules VidSrc.me et VSembed (vsembed.ru) confirment actives
- Sources mortes retirées : 2Embed, AutoEmbed, SuperEmbed, Frembed, 5 miroirs .ru/.su
- vidsrc-embed.ru → redirige vers vsembed.ru (301) — URL corrigée

### Session 6 — 19/05/2026
- 7 nouvelles sources ajoutées : VidSrc.fyi, 2Embed, VidLink, MultiEmbed, AutoEmbed, Embed.su, Frembed VF
- autoembed.co → autoembed.cc (domaine officiel corrigé)
- Sandbox anti-pub sur tous les iframes (bloque popups/redirections sans casser lecture)
- IFRAME_WHITELIST mise à jour avec les 7 nouveaux domaines

### Session 7 — 20/05/2026
- **Film local ajouté** : How High (2001) — Comédie/Fantasy, TMDB ID 8386, note 6.2
  - Fichier : `./filme/[ OxTorrent.com ] How_High_DVDRiP11.avi`
  - ⚠️ Format `.avi` — conversion en `.mp4` requise pour lecture dans le navigateur
- `bibliotheque.js` : 30 entrées (21 films + 9 séries)

### Session 8 — 22/05/2026
- **⏱ À regarder plus tard** : icône sur cards TMDB + onglet dédié dans Favoris (`t_later`)
- **⭐ Notation personnelle 1-5 étoiles** : dans modal de détail (`t_rat_<id>`)
- **📥 Import JSON** : Admin → Exporter → Importer fichier JSON
- **🚀 Cache TMDB 10 min** : `_apiCache` en mémoire, TTL 600s
- **❓ Page d'aide complète** (A7) : modal footer — raccourcis, guide VF, FAQ, PWA
- **👤 Page Profil** : stats (vus / favoris / biblio) + changer mot de passe
- **☀️ Mode clair/sombre** : toggle menu utilisateur + profil (`t_theme`)
- **⊞☰ Vue liste/grille** dans Ma Bibliothèque (`t_view`)
- **Fix** : `try/catch` manquant sur recherche TMDB (spinner infini)

## ⬜ RESTE À FAIRE

- Trouver de nouvelles sources streaming actives si VidSrc.me tombe
- Convertir `How_High_DVDRiP11.avi` en `.mp4` pour lecture dans le navigateur
