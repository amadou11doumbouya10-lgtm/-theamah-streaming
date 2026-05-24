# CORRECTIONS & AMÉLIORATIONS — Theamah+
# Dernière mise à jour : 24/05/2026

---

## ✅ TOUT CORRIGÉ — Récapitulatif

### Critiques
- ✅ C1 — Badge STREAM rouge (tmdbId) vs LOCAL vert (fichier local)
- ✅ C2 — Modal admin HTML stylisée, max 5 tentatives (mot de passe : theamah2026)
- ✅ C3 — Mots de passe utilisateurs hashés SHA-256 + migration automatique
- ✅ C4 — Sauvegarde progression toutes les 30 secondes (startPlyAutoSave)
- ✅ C5 — Lien actif dans la navigation (classe .active dans showPage)

### Importants
- ✅ I1 — Hero 9000ms + pause mouseenter/mouseleave
- ✅ I2 — 4 sources mortes supprimées, 6 actives, auto-essai 8s, badge VF
- ✅ I3 — Bouton "Continuer sans compte" dans la modal auth
- ✅ I4 — Bouton "?" dans le lecteur + modal raccourcis clavier
- ✅ I5 — Message "Aucun résultat" + compteur dans la recherche
- ✅ I6 — Message PiP corrigé pour le streaming
- ✅ I7 — Modal admin HTML (plus de window.prompt)

### Améliorations
- ✅ A1 — Tri A-Z/Z-A + filtre Films/Séries dans Favoris et Bibliothèque
- ✅ A2 — Stats "X films · Y séries" dans Ma Bibliothèque
- ✅ A4 — Bouton ✕ par card dans "Continuer à regarder"
- ✅ A5 — Touch targets 44px, bottom sheets sur mobile
- ✅ A6 — Compteur "X résultats pour '...'" dans la recherche
- ✅ A8 — Validation email regex + indicateur force mot de passe
- ✅ A9 — Sauvegarde progression périodique (même que C4)
- ✅ A10 — Recherche temps réel dans Ma Bibliothèque

### Nouvelles fonctionnalités
- ✅ N1 — Sous-titres VTT/SRT pour fichiers locaux (films + épisodes)
- ✅ N2 — Sections 🇫🇷 Films Français + Séries Françaises sur l'accueil
- ✅ N3 — Série locale One Trillion Dollars S1 (6 épisodes GitHub Releases)
- ✅ N4 — showLocalFileError() si fichier vidéo absent en ligne
- ✅ N5 — Déploiement GitHub Pages en ligne

---

## ✅ SESSION 4 — 16/05/2026

### Nouvelles fonctionnalités
- ✅ S4-1 — PWA : manifest.json + Service Worker (sw.js) + icône SVG → installable sur mobile/bureau
- ✅ S4-2 — Page 404.html stylisée aux couleurs Theamah+
- ✅ S4-3 — Modal Contact dans le footer (EmailJS) — adresse email protégée
- ✅ S4-4 — Bouton 💡 Suggérer un titre (connectés uniquement) + modal suggestion EmailJS
- ✅ S4-5 — Hero aléatoire : ordre des films mélangé à chaque chargement
- ✅ S4-6 — Bouton "＋ Favoris" avec texte dans le Hero
- ✅ S4-7 — og:image corrigée (vraie affiche TMDB)

### Sécurité corrigée
- ✅ SEC-1 — Fonction esc() — échappement HTML sur tous les champs TMDB (XSS)
- ✅ SEC-2 — safeIframeSrc() — whitelist des 6 sources autorisées (vidsrc.to, vidsrc.me...)
- ✅ SEC-3 — Iframes avec sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
- ✅ SEC-4 — showToast() sécurisé : textContent au lieu de innerHTML
- ✅ SEC-5 — Admin : token de session dérivé du hash (28 chars) — bypass console impossible
- ✅ SEC-6 — Admin : délai progressif anti-brute-force (1s→2s→3s→4s→5s par tentative)
- ✅ SEC-7 — Content Security Policy (CSP) dans le <head>

### Limitations connues (inhérentes au site sans backend)
- ⚠️ Clé TMDB visible dans le code source → restreindre au domaine github.io sur themoviedb.org
- ⚠️ Auth utilisateur 100% client-side (localStorage) → acceptable pour usage perso

---

---

## ✅ SESSION 6 — 19/05/2026

### Sources & Lecteurs
- ✅ S6-1 — 7 nouvelles sources ajoutées : VidSrc.fyi, 2Embed, VidLink, MultiEmbed, AutoEmbed, Embed.su, Frembed VF → 9 sources total
- ✅ S6-2 — autoembed.co corrigé → autoembed.cc (domaine officiel actuel)
- ✅ S6-3 — IFRAME_WHITELIST mise à jour avec les 7 nouveaux domaines

### Sécurité & Pubs
- ✅ S6-4 — Sandbox anti-pub sur tous les iframes (bloque popups/redirections sans casser lecture)
- ✅ S6-5 — Astuce VF mise à jour : "Frembed VF" ajouté dans le texte d'aide du lecteur

---

## ✅ SESSION 7 — 20/05/2026

### Bibliothèque — Ajout de film local
- ✅ S7-1 — Film **How High (2001)** ajouté dans `bibliotheque.js` (id: `local_how_high_8386`)
  - Genre : Comédie, Fantasy · Note TMDB : 6.2
  - Poster et backdrop récupérés depuis TMDB (ID 8386)
  - Fichier local : `./filme/[ OxTorrent.com ] How_High_DVDRiP11.avi`
  - ⚠️ Format `.avi` non supporté nativement par les navigateurs → conversion en `.mp4` recommandée

### Maintenance
- ✅ S7-2 — Vérification syntaxe `bibliotheque.js` (30 entrées, 0 erreur)
- ✅ S7-3 — Vérification structure HTML (balises équilibrées, aucun ID dupliqué)

---

## ✅ SESSION 8 — 22/05/2026

### Nouvelles fonctionnalités

- ✅ S8-1 — **À regarder plus tard** : icône 🕐 sur chaque card TMDB, section dédiée dans Favoris (onglet "Plus tard"), stocké dans `t_later`
- ✅ S8-2 — **Notation personnelle étoiles (1-5)** : dans la modal de détail sous le titre, stocké dans `t_rat_<id>`
- ✅ S8-3 — **Import bibliothèque JSON** : Admin → Exporter → bouton "Importer fichier JSON" (fusionne sans écraser)
- ✅ S8-4 — **Cache TMDB 10 min** : toutes les réponses API stockées en mémoire `_apiCache`, TTL 600s — navigation plus rapide
- ✅ S8-5 — **Page d'aide complète** (A7) : modal depuis footer "❓ Aide" — raccourcis, guide VF, guide Admin, sources streaming, PWA
- ✅ S8-6 — **Page Profil utilisateur** : accessible depuis le menu utilisateur — avatar, stats (films vus / favoris / bibliothèque), changer mot de passe
- ✅ S8-7 — **Mode clair / sombre** : toggle depuis menu utilisateur ou page profil, mémorisé dans `t_theme`
- ✅ S8-8 — **Vue liste / grille** dans Ma Bibliothèque : boutons ⊞/☰, mémorisé dans `t_view`
- ✅ S8-9 — **Tabs Favoris / Plus tard** dans la page Favoris
- ✅ S8-10 — **Fix bug recherche** : `try/catch` manquant sur appel TMDB → spinner infini corrigé

### Améliorations menu utilisateur
- ✅ Lien "Mon Profil" dans le dropdown
- ✅ Lien "Plus tard" dans le dropdown
- ✅ Toggle thème dans le dropdown

---

## ✅ SESSION 9 — 23/05/2026

### Maintenance sources streaming

- ✅ S9-1 — **Audit complet des 9 sources** : test direct de chaque domaine
- ✅ S9-2 — **Frembed VF retiré** : ECONNREFUSED (serveur mort depuis ~2024, dernier message forum : sept. 2023)
- ✅ S9-3 — **AutoEmbed.cc retiré** : ECONNREFUSED confirmé (2 tests)
- ✅ S9-4 — **Embed.su retiré** : ECONNREFUSED confirmé (2 tests)
- ✅ S9-5 — **IFRAME_WHITELIST nettoyée** : frembed.pro, autoembed.co, autoembed.cc, embed.su retirés
- ✅ S9-6 — **streamingnow.mov ajouté** à IFRAME_WHITELIST (redirect 302 de multiembed.mov)
- ✅ S9-7 — **Tooltip VF amélioré** : suppression mention Frembed, guide "Audio/CC en bas à droite" plus clair
- ✅ S9-8 — Commentaire code mis à jour : 9 sources → 6 sources, date 23/05/2026

### Résultat sources

| # | Source | Statut | VF |
|---|---|---|---|
| 1 | VidSrc.me | ✅ Actif | ✅ |
| 2 | VSembed | ✅ Actif | ✅ |
| 3 | VidSrc.fyi | ⚠️ Incertain | — |
| 4 | 2Embed.stream | ✅ Actif | — |
| 5 | VidLink | ✅ Actif | — |
| 6 | MultiEmbed | ⚠️ Redirige → streamingnow.mov | — |

---

---

## ✅ SESSION 10 — 24/05/2026

### Communication & Marketing

- ✅ S10-1 — **Dossier `PUBLICITE/`** créé — tous les visuels regroupés au même endroit
- ✅ S10-2 — **Affiche carrée 1080×1080** (`pub-theamah.html`) — logo, fonctionnalités, fond sombre, bouton rouge
- ✅ S10-3 — **Bannière PC côte à côte** (`pub-theamah-v2.html`) — texte promo gauche + interface du site droite (1400×700)
- ✅ S10-4 — **Format téléphone** (`pub-theamah-mobile.html`) — maquette phone avec encoche + interface + QR code intégré (900×1600)
- ✅ S10-5 — **Format laptop** (`pub-theamah-pc.html`) — maquette laptop 3 colonnes + QR code (1600×900)
- ✅ S10-6 — **Carte QR seule** (`pub-theamah-qr.html`) — QR code grand format scannable + lien GitHub (800×800 + 1000×420)
- ✅ S10-7 — **Carte Créateur** (`pub-theamah-createur.html`) — Amadou Doumbouya · @TheAmah · bio · compétences · projet phare + QR
- ✅ S10-8 — **Before/After** (`pub-before-after.html`) — Netflix+Disney++Prime=39,97€/mois vs Theamah+=0€ · économie 479€/an (1080×1080 + story verticale)
- ✅ S10-9 — **INDEX.html** dans `PUBLICITE/` — hub central avec accès à tous les visuels + 6 idées vidéo + 4 textes prêts à copier
- ✅ S10-10 — **Stratégie marketing complète** — 10 idées chef marketer : cercle privé, défi communautaire, diaspora africaine, thread LinkedIn dev, before/after, micro-influenceurs, tutoriel PWA, commentaires stratégiques, calendrier hebdo

### Contenu publicitaire créé

| Fichier | Format | Usage |
|---|---|---|
| `pub-theamah.html` | 1080×1080 | Instagram · Facebook · WhatsApp |
| `pub-theamah-v2.html` | 1400×700 | LinkedIn · Twitter/X |
| `pub-theamah-mobile.html` | 900×1600 | Story · TikTok · Snap |
| `pub-theamah-pc.html` | 1600×900 | LinkedIn · Twitter/X · Facebook cover |
| `pub-theamah-qr.html` | 800×800 + 1000×420 | WhatsApp · SMS · Print |
| `pub-theamah-createur.html` | 900px portrait | LinkedIn · Portfolio · Instagram |
| `pub-before-after.html` | 1080×1080 + story | Instagram · Pinterest · TikTok |
| `INDEX.html` | Hub | Menu central du dossier PUBLICITE |

---

## ⬜ RESTE À FAIRE

- ⚠️ Convertir `How_High_DVDRiP11.avi` en `.mp4` pour lecture dans le navigateur

---

## ✅ PROBLÈME RÉSOLU — Pubs et redirections

- **Problème** : Les sources streaming gratuites (VidSrc, 2Embed...) affichent des pubs qui interceptent les clics et redirigent vers d'autres sites.
- **Solution appliquée (19/05/2026)** : `sandbox` ciblé sur tous les iframes — bloque les popups et redirections sans casser la lecture :
  ```
  sandbox="allow-scripts allow-same-origin allow-forms allow-presentation allow-orientation-lock allow-pointer-lock"
  ```
  - ✅ Popups publicitaires bloqués
  - ✅ Redirections de page bloquées
  - ✅ Lecture vidéo et fullscreen conservés
- **Recommandation bonus** : Installer **uBlock Origin** pour bloquer les pubs dans le lecteur lui-même.
  - Chrome : https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
  - Firefox : https://addons.mozilla.org/fr/firefox/addon/ublock-origin/

---

## 🌐 ACCÈS AU SITE — 16/05/2026

- **Lien complet** : https://amadou11doumbouya10-lgtm.github.io/-theamah-streaming/
- **Lien court** : https://tinyurl.com/27k6aabj
- **QR Code** : QRCode-Theamah.png sur le bureau

---

## 📋 DEMANDES EN ATTENTE

→ Voir le dossier AMELIORATIONS/ pour les nouvelles demandes

---

## 🔧 SOURCES STREAMING — État au 19/05/2026

9 sources actives dans le lecteur :

| # | Source | Domaine | Statut | VF |
|---|---|---|---|---|
| 1 | VidSrc.me | vidsrc.me | ✅ Actif | ✅ Oui |
| 2 | VSembed | vsembed.ru | ✅ Actif | ✅ Oui |
| 3 | VidSrc.fyi | vidsrc.fyi | ✅ Actif | — |
| 4 | 2Embed | 2embed.stream | ✅ Actif | — |
| 5 | VidLink | vidlink.pro | ✅ Actif | — |
| 6 | MultiEmbed | multiembed.mov | ✅ Actif | — |
| 7 | AutoEmbed | autoembed.cc | ✅ Actif | — |
| 8 | Embed.su | embed.su | ✅ Actif | — |
| 9 | Frembed VF | frembed.pro | ✅ Actif | ✅ Oui |

Sources mortes / supprimées :

| Source | Statut | Raison |
|---|---|---|
| autoembed.co | ❌ Obsolète | Migré vers autoembed.cc |
| VidSrc.to | ❌ Supprimé | Remplacé par vidsrc.fyi |
| 2Embed.cc / .skin | ❌ Supprimés | Remplacés par 2embed.stream |
| SuperEmbed | ❌ Supprimé | Instable |
| SmashyStream | ❌ Mort | Fermé |
