# ANALYSE COMPLÈTE — Theamah+ Streaming
> Document destiné aux IA (Claude, GPT, Gemini…) pour prendre en main le projet immédiatement.
> Mis à jour le 02/06/2026. À relire au début de chaque session.

---

## 1. Vue d'ensemble

**Theamah+** est une plateforme de streaming vidéo style Netflix, entièrement côté client (pas de backend, pas de serveur, pas de base de données).

| Propriété | Valeur |
|---|---|
| Type | Application web monopage (SPA) — fichier HTML unique |
| Stack | HTML + CSS + JavaScript vanilla (aucun framework, aucun bundler) |
| Hébergement | GitHub Pages |
| URL production | `https://amadou11doumbouya10-lgtm.github.io/-theamah-streaming/` |
| Lien court | `https://tinyurl.com/27k6aabj` |
| Repo GitHub | `https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming` |
| Mot de passe admin | `theamah2026` |
| Créateur | Amadou Doumbouya |

---

## 2. Architecture — Contraintes absolues

1. **Un seul fichier de travail** : `theamah-streaming.html`. Toute modification se fait ici.
2. **Synchronisation obligatoire** : après chaque modif, copier vers `index.html` (servi par GitHub Pages).
3. **Pas de `file://`** : l'API TMDB refuse les requêtes sans HTTP. Toujours lancer un serveur local :
   ```bash
   python -m http.server 8765
   # Puis ouvrir http://localhost:8765/theamah-streaming.html
   ```
4. **Pas de `npm install`**, pas de `node_modules`, pas de build step.
5. **Le sandbox iframe ne doit JAMAIS être retiré** (sécurité anti-pub/redirection).

---

## 3. Structure des fichiers

```
Theamah project/
├── theamah-streaming.html   ← FICHIER DE TRAVAIL PRINCIPAL
├── index.html               ← Copie synchronisée → GitHub Pages
├── bibliotheque.js          ← Base de données films/séries (~51 entrées)
├── manifest.json            ← PWA manifest
├── sw.js                    ← Service Worker (PWA)
├── icon.svg                 ← Icône app
├── 404.html                 ← Page d'erreur stylisée
├── CLAUDE.md                ← Instructions pour Claude Code
├── ANALYSE-AI.md            ← Ce fichier
├── CORRECTIONS.md           ← Journal des bugs corrigés
├── filme/                   ← Films locaux MP4 (exclus de Git via .gitignore)
│   ├── Cleaner.2025...mp4
│   ├── Dumb.Money...mp4
│   ├── Le_Grand_jeu...mp4
│   ├── Night.Call...mp4
│   ├── frankenstein.MP4
│   └── [ OxTorrent.com ] How_High_DVDRiP11.avi  ← ⚠️ format AVI, non lisible navigateur
├── serie/                   ← Séries locales MP4 (exclues de Git)
│   └── one trillion dollar saison 1/ (6 épisodes E1–E6)
├── AMELIORATIONS/
│   ├── IDEES.md             ← Idées futures (vide)
│   ├── BUGS.md              ← Bugs signalés (vide)
│   ├── NOUVELLES-SERIES.md  ← Séries à ajouter
│   └── Guide-Recherche-VSCode.md
└── PUBLICITE/               ← Visuels marketing HTML
    ├── INDEX.html           ← Hub central marketing
    └── pub-*.html           ← 8 visuels (Instagram, bannière, mobile, etc.)
```

---

## 4. Constantes clés (dans theamah-streaming.html)

```js
var TK   = '4e44d9029b1270a757cddc766a1bcb63'; // Clé API TMDB (publique)
var TB   = 'https://api.themoviedb.org/3';
var IMG  = 'https://image.tmdb.org/t/p/';
var LG   = 'fr-FR';
var ADMIN_HASH = 'd956b3c...'; // SHA-256 de "theamah2026"
```

---

## 5. Sources de streaming — État au 02/06/2026

### 3 sources actives (confirmées navigateur réel depuis github.io)

```js
// Ligne ~1205 dans theamah-streaming.html
var _SRCS=[
  {n:'AutoEmbed',  mu:'https://autoembed.co/movie/tmdb/{id}',   tu:'https://autoembed.co/tv/tmdb/{id}-{s}-{e}',                    vf:false},
  {n:'VidSrc.pm',  mu:'https://vidsrc.pm/embed/movie/{id}',    tu:'https://vidsrc.pm/embed/tv?tmdb={id}&season={s}&episode={e}',  vf:false},
  {n:'VidSrc.lol', mu:'https://vidsrc.lol/embed/movie/{id}',   tu:'https://vidsrc.lol/embed/tv/{id}/{s}/{e}',                     vf:false},
];
```

### Whitelist iframe (ligne ~893)

```js
var IFRAME_WHITELIST=['autoembed.co','vidsrc.pm','vidsrc.lol','www.youtube.com','youtube.com','github.com','raw.githubusercontent.com'];
```

### Sandbox iframe (obligatoire, ne jamais modifier)

```html
sandbox="allow-scripts allow-same-origin allow-forms allow-presentation allow-orientation-lock allow-pointer-lock"
```

`allow-popups` et `allow-top-navigation` sont **absents intentionnellement** pour bloquer les pubs popup et les redirections.

### Pourquoi seulement 3 sources

**Raison principale** : la quasi-totalité des services embed bloquent les iframes depuis des domaines externes (github.io) via l'en-tête HTTP `X-Frame-Options: SAMEORIGIN`. Ces 3 sources ne l'envoient pas.

### Sources mortes / incompatibles (testées navigateur réel le 26/05/2026)

| Source | Raison |
|---|---|
| VidSrc.me, VSembed, 2Embed, VidLink | X-Frame-Options bloque depuis github.io |
| VidAPI (vidapi.xyz) | Détecte `sandbox` iframe et affiche erreur |
| NontonGo, MoviesAPI.to | Catalogue asiatique uniquement |
| VidSrc.cc | Cloudflare bloque les iframes |
| vidsrc.xyz, rive.fun, gomo.stream, Frembed | ECONNREFUSED (serveurs morts) |
| EzVidAPI, VidLux, VikingEmbed | Testées — ne répondent pas |
| VidSrc.io, VidSrc.su, AnyEmbed | Ne répondent pas |
| 40+ autres | Voir memory/project_sources_audit.md |

### Où chercher de nouvelles sources

- `reddit.com/r/Piracy/wiki/megathread` → section "Streaming Sites"
- `github.com/Astralchemist/tmdb-embed-providers`
- `github.com/sussy-code/smov` → liste ses embed providers
- Mots-clés : "tmdb embed", "no X-Frame-Options", "embed api webmaster"
- Si les sources tombent : `https://vidsrc.community/` ou `https://vidsrc.domains/`

### ⚠️ Problème connu — brightadnetwork.com

Les services embed injectent des publicités via des réseaux tiers (dont `brightadnetwork.com`, signalé par Microsoft Defender SmartScreen). C'est inhérent aux services gratuits. **On ne peut pas le bloquer côté page** (les requêtes viennent de l'intérieur de l'iframe). Solution pour les utilisateurs : installer **uBlock Origin**. Un bandeau d'avertissement a été ajouté dans le lecteur le 02/06/2026.

---

## 6. Bibliothèque (`bibliotheque.js`)

- ~51 entrées (films + séries, locaux + streaming)
- Chargée via `<script src="bibliotheque.js">` → disponible sous `window.SHARED_LIBRARY`
- Fusionnée avec `localStorage['t_lib']` dans `mergLib()`

### Types d'entrées

**Film local (MP4 sur le PC)**
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

**Film streaming (embed TMDB)**
```js
{
  id: "stream_xxx_27205",
  title: "...", year: "2010", type: "movie",
  genre: "...", desc: "...", rating: "8.4",
  poster: "https://image.tmdb.org/t/p/w300/...",
  backdrop: "https://image.tmdb.org/t/p/w1280/...",
  videoUrl: "https://vidsrc.pm/embed/movie/27205",
  mimeType: "text/html",
  isLocal: true,
  tmdbId: 27205,
  addedAt: "2026-05-15T00:00:00.000Z"
}
```

**Série locale (épisodes)**
```js
{
  id: "local_xxx", title: "...", type: "tv", isLocal: true,
  seasons: [{ episodes: [
    {title: "Ep 1", videoUrl: "https://github.com/.../releases/download/v1.0/E1.MP4", mimeType: "video/mp4"},
  ]}]
}
```
⚠️ Espaces dans les chemins → encoder en `%20`.

**Hébergement vidéo épisodes** : GitHub Releases `v1.0` sur le repo principal.

---

## 7. Persistence des données

| Store | Clé localStorage | Contenu |
|---|---|---|
| localStorage | `t_favs` | Favoris |
| localStorage | `t_user` | Utilisateur connecté (objet JSON) |
| localStorage | `t_users` | Comptes utilisateurs (mots de passe SHA-256) |
| localStorage | `t_lib` | Films ajoutés via l'admin |
| localStorage | `t_history` | Historique de lecture + progression (currentTime) |
| localStorage | `t_srch_hist` | Historique recherche (5 derniers) |
| localStorage | `t_later` | À regarder plus tard |
| localStorage | `t_rat_<id>` | Notation personnelle 1–5 étoiles |
| localStorage | `t_theme` | Thème clair/sombre |
| localStorage | `t_view` | Vue liste/grille (Ma Bibliothèque) |
| IndexedDB | `theamah_videos` | Blobs vidéo et fichiers de sous-titres |

---

## 8. Fonctions clés

| Fonction | Rôle |
|---|---|
| `showPage(p)` | Navigation : `home`, `catalog`, `myfilms`, `favs`, `search` |
| `playLocal(id, sIdx, eIdx)` | Lance le lecteur vidéo HTML5 local |
| `playTmdb(id, type, title)` | Lance le lecteur iframe embed TMDB |
| `_loadEmbed()` | Charge l'iframe embed avec la source courante (`_SRCS[_tSrc]`) |
| `_buildSrcBar()` | Génère la barre de sources + bandeaux informatifs dans le lecteur |
| `nextSrc()` | Passe à la source suivante (touche N) |
| `switchSrc(idx)` | Change de source manuellement |
| `safeIframeSrc(url)` | Valide l'URL contre `IFRAME_WHITELIST` avant injection dans l'iframe |
| `esc(s)` | Échappe le HTML (sécurité XSS) |
| `api(path)` | Appel TMDB avec cache 10 min (`_apiCache`) |
| `loadHome()` | Charge la page d'accueil (sections TMDB + bibliothèque locale) |
| `applyMyFilters()` | Filtre/tri dans Ma Bibliothèque |
| `startPlyAutoSave()` | Sauvegarde progression toutes les 30s |
| `startNextEpCountdown()` | Compte à rebours 10s avant épisode suivant |
| `showLocalFileError()` | Affiche message si fichier local introuvable |
| `mergLib(shared, local)` | Fusionne SHARED_LIBRARY + localStorage t_lib |

---

## 9. Sections de l'accueil (TMDB)

| Section | Endpoint TMDB |
|---|---|
| Tendances Films | `/trending/movie/week` |
| Tendances Séries | `/trending/tv/week` |
| Films Populaires | `/movie/popular` |
| Séries Populaires | `/tv/popular` |
| 🇫🇷 Films Français | `/discover/movie?with_original_language=fr` |
| 🇫🇷 Séries Françaises | `/discover/tv?with_original_language=fr` |
| Ma Bibliothèque | `bibliotheque.js` + localStorage |

---

## 10. Système de design (CSS)

```css
/* Variables racine */
--bg:#080c14      /* fond principal (très sombre) */
--bg2:#0f1521     /* fond secondaire */
--bg3:#161d2e     /* fond cartes/modals */
--accent:#e50914  /* rouge Netflix */
--gold:#f5c518    /* or (notes) */
--green:#1db954   /* vert (Spotify / badges NEW) */
--text:#eef0f4    /* texte principal */
--text2:#8892a4   /* texte secondaire */
--card-w:155px    /* largeur des cartes */
--radius:10px     /* border-radius global */
```

Breakpoints : `900px` (nav mobile → hamburger) · `600px` (bottom sheets)

---

## 11. Raccourcis clavier — Lecteur vidéo

| Touche | Action |
|---|---|
| Espace | Lecture / Pause |
| ← / → | -10s / +10s |
| ↑ / ↓ | Volume + / - |
| M | Muet / Son |
| F | Plein écran |
| P | Picture-in-Picture |
| N | Source suivante (embed) |
| Échap | Fermer le lecteur |

---

## 12. Sécurité — Mesures en place

| Mesure | Description |
|---|---|
| `esc(s)` | Échappe toutes les insertions HTML (anti-XSS) |
| `safeIframeSrc(url)` | Whitelist des domaines autorisés pour les iframes |
| Sandbox iframe | Bloque popups et navigation parent (voir §5) |
| SHA-256 mots de passe | Hashage côté client (pas de mot de passe en clair) |
| Admin token | Token aléatoire 64 hex, expire après 30 min |
| Délai brute-force | 3s de délai après 3 tentatives échouées |
| `referrerpolicy="origin"` | N'envoie que l'origine dans le Referer des iframes |

---

## 13. Workflow — Modifier le site

```bash
# 1. Modifier theamah-streaming.html
# 2. Tester en local
python -m http.server 8765
# 3. Synchroniser
cp theamah-streaming.html index.html   # Linux/Mac
copy theamah-streaming.html index.html  # Windows CMD
# 4. Push GitHub
git add theamah-streaming.html index.html
git commit -m "Description claire"
git push
# 5. Vérifier sur https://amadou11doumbouya10-lgtm.github.io/-theamah-streaming/
#    avec Ctrl+Shift+R (rechargement forcé)
```

---

## 14. Bugs connus / Reste à faire

| Priorité | Description |
|---|---|
| 🔴 URGENT | `How_High_DVDRiP11.avi` dans `filme/` → format `.avi` non lisible dans le navigateur. Besoin de conversion en `.mp4`. |
| 🟡 À corriger | Modal d'aide (ligne ~894) mentionne encore "VidSrc.me · VSembed" (sources mortes). |
| 🟡 À faire | Trouver de nouvelles sources streaming compatibles github.io (actuellement seulement 3). |
| 🟢 Informatif | `brightadnetwork.com` chargé par les embed services (non bloquable depuis notre page). Bandeau uBlock Origin ajouté le 02/06/2026. |
| 🟢 Fait | Barre tactile mobile ajoutée le 02/06/2026 — classe `embed-mode` sur `#plyOv`, CSS `.ply-mob-bar` / `.ply-mob-btn`. |
| 🟢 Fait | Hash routing ajouté le 02/06/2026 — `initHashRouting()`, format `#tmdb=ID` ou `#tmdb=ID&type=tv`. |
| 🟡 À tester | **Frembed.click** VF native — `https://frembed.click/api/film.php?id={id}&lang=vf` — rotation domaine (.pro→.bond→.click→.one). Si confirmé : ajouter `var FB_BASE='https://frembed.click'` et les deux entrées `_SRCS`. |
| 🟡 À tester | **VidSrc.icu** — `https://vidsrc.icu/embed/movie/{id}` (même format que VidSrc.pm). |
| 🟡 À tester | **Embed.su** — `https://embed.su/embed/movie/{id}` — était mort le 26/05, peut avoir repris. |
| 🟡 À tester | **VidSrc.fyi** — `https://vidsrc.fyi/embed/movie/{id}` — récent, 1080p. |

---

## 15. Historique des sessions (résumé)

| Session | Date | Ce qui a été fait |
|---|---|---|
| 1 | avant 15/05 | Base : favicon, OG, auth, PiP, raccourcis, 23 films initiaux |
| 2 | 15/05/2026 | Tri/filtres, stats, mobile touch, recherche temps réel, sous-titres, déploiement GitHub Pages |
| 3 | 16/05/2026 | Lien court TinyURL, QR Code, message anti-pub, conseil uBlock Origin |
| 4 | 16/05/2026 | PWA (manifest+sw), 404.html, modal Contact EmailJS, modal Suggérer un titre, audit sécurité |
| 5 | 19/05/2026 | Badges #1/#2/#3, badge NEW, titres similaires, historique recherche, auto-play épisode suivant |
| 6 | 19/05/2026 | 7 nouvelles sources (dont autoembed.cc), sandbox anti-pub iframes |
| 7 | 20/05/2026 | Film How High (2001) ajouté en local (AVI) |
| 8 | 22/05/2026 | À regarder plus tard, notation 1–5 étoiles, import JSON, cache TMDB 10min, page aide, profil, thème clair/sombre, vue liste/grille |
| 9 | 23/05/2026 | Audit sources — 3 retirées (ECONNREFUSED) |
| 10 | 24/05/2026 | Dossier PUBLICITE/ : 8 visuels marketing HTML |
| 11 | 24/05/2026 | Audit navigateur réel → AutoEmbed seule confirmée. Nouveaux candidats ajoutés |
| 12 | 26/05/2026 | Audit 40+ sources — 3 confirmées : AutoEmbed + VidSrc.pm + VidSrc.lol |
| 13 | 02/06/2026 | Bandeau uBlock Origin dans lecteur, message VF corrigé, investigation brightadnetwork.com, ANALYSE-AI.md créé |
| 14 | 02/06/2026 | Barre tactile mobile dans le lecteur embed (3 boutons : Suivante / Plein écran / Fermer) — visible uniquement sur mobile <600px et uniquement en mode streaming (classe `embed-mode`) |
| 15 | 02/06/2026 | Hash routing : `#tmdb=27205` ou `#tmdb=1396&type=tv` ou `#local=xxx` — `initHashRouting()` au DOMContentLoaded, `playTmdb()` écrit le hash, `closePly()` le nettoie |

---

## 16. Règles absolues pour l'IA

1. **Ne jamais retirer le `sandbox` des iframes** — casse la sécurité anti-pub.
2. **Tester les nouvelles sources EN NAVIGATEUR RÉEL depuis github.io** — WebFetch retourne 403 même si la source est vivante.
3. **Ne pas ajouter de sources sans vérification** — 90% des embed services bloquent github.io via X-Frame-Options.
4. **Toujours synchroniser `theamah-streaming.html` → `index.html`** avant de push.
5. **Ne pas supprimer de films de `bibliotheque.js`** sans confirmation explicite de l'utilisateur.
6. **Utiliser `esc()` sur toute valeur utilisateur** insérée dans le HTML.
7. **Toujours mettre à jour `CLAUDE.md` et `memory/MEMORY.md`** après une modification majeure.
