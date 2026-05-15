# CORRECTIONS & AMÉLIORATIONS — Theamah+
# Mis à jour le 15/05/2026

---

## 🔴 CRITIQUES

### C1. Badge LOCAL trompeur sur les films de streaming
- **Statut** : ✅ Corrigé — badge STREAM rouge pour tmdbId, LOCAL vert pour fichiers

### C2. Mot de passe admin visible dans le code source
- **Statut** : ✅ Corrigé — modal HTML stylisée avec max 5 tentatives. Mot de passe : `theamah2026`

### C3. Mots de passe utilisateurs stockés en clair
- **Statut** : ✅ Corrigé — hashés SHA-256 via `hashPass()` + migration automatique des anciens comptes

### C4. Progression vidéo sauvegardée seulement à la fermeture
- **Statut** : ✅ Corrigé — `startPlyAutoSave()` sauvegarde toutes les 30 secondes

### C5. Aucun indicateur de page active dans la navigation
- **Statut** : ✅ Corrigé — classe `.active` dans `showPage()`, style CSS dédié

---

## 🟠 IMPORTANTS

### I1. Hero carrousel trop rapide et ne s'arrête pas au survol
- **Statut** : ✅ Corrigé — 9000ms, pause `mouseenter`/`mouseleave`

### I2. Sources streaming : trop de sources, pas d'auto-essai
- **Statut** : ✅ Corrigé — 4 sources mortes supprimées, 6 actives. Auto-essai 8s. Badge VF sur VidSrc et VidSrc.me
- **Sources actives** : VidSrc.to ✅, VidSrc.me ✅, AutoEmbed ✅, 2Embed.cc ✅, 2Embed.skin ✅, SuperEmbed ✅
- **Sources supprimées** : VidSrc.xyz ❌, MoviesAPI ❌, Embed.su ❌, SmashyStream ❌

### I3. Pas de mode invité (obligé de créer un compte)
- **Statut** : ✅ Corrigé — bouton "Continuer sans compte" dans la modal auth

### I4. Raccourcis clavier non documentés
- **Statut** : ✅ Corrigé — bouton "?" dans le lecteur, modal dédiée

### I5. Pas de message "Aucun résultat" pour la recherche
- **Statut** : ✅ Corrigé — message + compteur de résultats dans `handleSearch()`

### I6. Message PiP trompeur
- **Statut** : ✅ Corrigé — "PiP non disponible pour le streaming — uniquement pour vos fichiers locaux"

### I7. Prompt admin style années 2000
- **Statut** : ✅ Corrigé — modal HTML stylisée (voir C2)

---

## 🟡 AMÉLIORATIONS

### A1. Tri et filtre dans Favoris et Bibliothèque
- **Statut** : ✅ Corrigé — Favoris : filtre Films/Séries + tri A-Z/Z-A. Bibliothèque : idem + tri Mieux notés

### A2. Stats en tête de la bibliothèque
- **Statut** : ✅ Corrigé — "X films · Y séries" affiché sous le titre via `#myLibStats`

### A3. Historique de recherche
- **Statut** : ⬜ Non implémenté

### A4. Bouton "Marquer comme vu" dans "Continuer à regarder"
- **Statut** : ✅ Corrigé — bouton ✕ par card via `removeFromHistory(id)`

### A5. Optimisation mobile
- **Statut** : ✅ Corrigé — touch targets 44px, modals auth/raccourcis/admin-pass en bottom sheet sur mobile (<600px)

### A6. Compteur de résultats de recherche
- **Statut** : ✅ Corrigé — "X résultats pour '...'" dans `srchTitle`

### A7. Footer liens morts
- **Statut** : ⬜ Non implémenté

### A8. Validation email et force du mot de passe
- **Statut** : ✅ Corrigé — `validEmail()` regex + indicateur force `passStrength()` (rouge/jaune/vert)

### A9. Section "Continuer à regarder" — sauvegarde périodique
- **Statut** : ✅ Corrigé (même que C4) — `startPlyAutoSave()` toutes les 30s

### A10. Recherche dans la bibliothèque locale
- **Statut** : ✅ Corrigé — barre `#mySearch` temps réel, combinée avec filtres/tri dans `applyMyFilters()`

---

## 🆕 NOUVELLES FONCTIONNALITÉS (session 15/05/2026)

### N1. Sous-titres français pour fichiers locaux
- **Description** : Upload `.vtt` ou `.srt` dans Admin → converti automatiquement en VTT → injecté via `<track>` dans le lecteur
- **Fonctions** : `srtToVtt()`, `onSubFile()`, `onEpSubFile()`, stockage IndexedDB clé `sub_<id>`
- **Statut** : ✅ Implémenté — films ET épisodes de séries supportés

### N2. Section Films/Séries Français sur l'accueil
- **Description** : Deux nouvelles sections "🇫🇷 Films Français" et "🇫🇷 Séries Françaises" via TMDB `with_original_language=fr`
- **Statut** : ✅ Implémenté

### N3. Série locale : One Trillion Dollars
- **Description** : Série allemande (TMDB 234717), 6 épisodes locaux dans `./serie/one trillion dollar saison 1/`
- **Titres des épisodes** : L'héritage, La prophétie, L'espoir, La spirale infernale, La conspiration, La fin du monde
- **Statut** : ✅ Ajoutée dans `bibliotheque.js`

---

## ⬜ RESTE À FAIRE

- A3 — Historique de recherche (5 dernières recherches en dropdown)
- A7 — Page d'aide complète dans le footer
