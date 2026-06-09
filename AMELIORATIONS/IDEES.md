# MES IDÉES ET DEMANDES D'AMÉLIORATION — Theamah+

Écrivez vos idées ici, une par ligne.
Claude Code lira ce fichier et les implémentera.

---

## Format suggéré

### Titre de l'idée
- Ce que je veux : ...
- Pourquoi : ...
- Priorité : haute / moyenne / basse

---

## Mes idées

### Messagerie privée entre utilisateurs
- Ce que je veux : permettre aux utilisateurs de Theamah+ de s'envoyer des messages privés directement dans l'application
- Détails :
  - Icône messagerie 💬 dans la nav (visible uniquement quand connecté)
  - Modal avec liste des utilisateurs + conversations privées
  - Notifications avec badge rouge quand un nouveau message arrive
  - Messages stockés en temps réel via Firebase Realtime Database (gratuit)
  - Utilise les comptes existants (t_user / t_users) — pas de nouveau système d'auth
- Pourquoi : créer une communauté autour du streaming, permettre aux membres de discuter des films entre eux sans quitter le site
- Priorité : moyenne
- Techno : Firebase Realtime Database (JS SDK vanilla, gratuit)

---

### Bandes-annonces (Trailers)
- Ce que je veux : bouton "▶ Trailer" dans la modal de détail de chaque film/série
- Détails :
  - Appel TMDB `/movie/{id}/videos` → récupère la clé YouTube de la bande-annonce
  - Lecture dans une iframe YouTube intégrée dans la modal
  - Fonctionne pour tous les films TMDB (pas les films locaux)
- Pourquoi : énorme amélioration UX — l'utilisateur peut décider de regarder un film avant de le lancer
- Priorité : haute
- Techno : API TMDB (déjà utilisée) + iframe YouTube — zéro dépendance supplémentaire

---

### Mood Filter — "Ce soir j'ai envie de..."
- Ce que je veux : boutons humeur sur la page d'accueil ou catalogue pour filtrer les films selon l'envie du moment
- Détails :
  - 5-6 boutons : 😂 Rire / 😢 Pleurer / 😱 Avoir peur / 🤔 Réfléchir / ❤️ Romance / 💥 Action
  - Chaque humeur correspond à une liste de genres TMDB (ex. Rire → Comédie, Avoir peur → Horreur/Thriller)
  - Filtre le catalogue et les résultats TMDB en temps réel
- Pourquoi : différenciateur unique vs Netflix, rend la découverte de films fun et rapide
- Priorité : haute
- Techno : JS vanilla, genres TMDB déjà mappés dans l'appli

---

### Collections & Sagas
- Ce que je veux : regrouper les films en sagas dans la page catalogue (Marvel, Harry Potter, Fast & Furious, etc.)
- Détails :
  - Nouvelle section "Sagas" sur la home avec les collections populaires
  - Appel TMDB `/collection/{id}` pour récupérer tous les films d'une saga dans l'ordre
  - Cliquer sur une saga → voir tous ses épisodes avec ordre et statut (vu / non vu)
- Pourquoi : améliore la navigation pour les grands fans de franchises
- Priorité : moyenne
- Techno : API TMDB `/collection` (endpoint existant, gratuit)

---

### Swipe mobile — Découverte façon Tinder
- Ce que je veux : mode swipe sur mobile pour découvrir des films rapidement
- Détails :
  - Bouton "Découvrir" → affiche une card plein écran avec poster + titre
  - Swipe droite = ajouter aux favoris, swipe gauche = passer au suivant
  - Puise dans les films tendance TMDB
- Pourquoi : expérience mobile unique et engageante, idéal quand on ne sait pas quoi regarder
- Priorité : moyenne
- Techno : Touch events JS vanilla (touchstart/touchend), pas de bibliothèque nécessaire

---

### Badges & Achievements
- Ce que je veux : système de récompenses débloquées automatiquement selon l'activité de l'utilisateur
- Détails :
  - Badges : "Premier film vu 🎬", "10 favoris ⭐", "50 films regardés 🏆", "Noctambule 🌙" (film regardé après minuit), etc.
  - Visibles sur la page Profil
  - Notification toast au déblocage
  - Stockés dans localStorage `t_badges`
- Pourquoi : gamification simple qui encourage l'engagement et donne envie de revenir
- Priorité : basse
- Techno : localStorage uniquement — zéro backend nécessaire
