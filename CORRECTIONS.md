# CORRECTIONS & AMÉLIORATIONS — Theamah+
# Dernière mise à jour : 16/05/2026

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

## ⬜ RESTE À FAIRE

- A3 — Historique de recherche (5 dernières recherches en dropdown)
- A7 — Page d'aide complète dans le footer

---

## 🔴 PROBLÈME CONNU — Pubs et redirections

- **Problème** : Les sources streaming gratuites (VidSrc, 2Embed...) affichent des pubs qui interceptent les clics et redirigent vers d'autres sites.
- **Tentative** : Attribut `sandbox` sur les iframes → annulé car cassait le lecteur.
- **Solution recommandée** : Installer **uBlock Origin** dans le navigateur.
  - Chrome : https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
  - Firefox : https://addons.mozilla.org/fr/firefox/addon/ublock-origin/
- **Statut** : ⬜ Pas de solution technique côté code possible sans casser le lecteur.

---

## 🌐 ACCÈS AU SITE — 16/05/2026

- **Lien complet** : https://amadou11doumbouya10-lgtm.github.io/-theamah-streaming/
- **Lien court** : https://tinyurl.com/27k6aabj
- **QR Code** : QRCode-Theamah.png sur le bureau

---

## 📋 DEMANDES EN ATTENTE

→ Voir le dossier AMELIORATIONS/ pour les nouvelles demandes

---

## 🔧 SOURCES STREAMING — État au 15/05/2026

| Source | Statut | VF |
|---|---|---|
| VidSrc.to | ✅ Actif | ✅ Oui |
| VidSrc.me | ✅ Actif | ✅ Oui |
| AutoEmbed | ✅ Actif | — |
| 2Embed.cc | ✅ Actif | — |
| 2Embed.skin | ✅ Actif | — |
| SuperEmbed | ✅ Actif | — |
| VidSrc.xyz | ❌ Mort | — |
| MoviesAPI | ❌ Mort | — |
| Embed.su | ❌ Mort | — |
| SmashyStream | ❌ Mort | — |
