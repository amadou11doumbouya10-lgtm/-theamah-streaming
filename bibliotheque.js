// ════════════════════════════════════════════════════════
// BIBLIOTHEQUE THEAMAH STREAMING
// Mise à jour le 15/05/2026 — Films & Séries avec streaming
// Les films marqués isLocal:true avec videoUrl jouent via embed
// ════════════════════════════════════════════════════════

var BIBLIOTHEQUE = [

  // ── FILMS LOCAUX (sur ton PC) ──────────────────────────
  {
    id: "local_cleaner_2025",
    title: "Cleaner",
    year: "2025",
    type: "movie",
    genre: "Action, Thriller",
    desc: "En plein cœur de Londres, au sommet de la tour Shard, des militants radicaux prennent des otages. Un agent d'élite intervient.",
    rating: "6.3",
    poster: "https://image.tmdb.org/t/p/w300/AvKlFFSMtn4FvYzKecrpDNZIoy6.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/gsQJOfeW45KLiQeEIsom94QPQwb.jpg",
    videoUrl: "./filme/Cleaner.2025.MULTi.1080p.WEB.H264-TFA.mp4",
    mimeType: "video/mp4",
    isLocal: true,
    addedAt: "2026-05-06T00:00:00.000Z"
  },
  {
    id: "local_dumb_money_2023",
    title: "Dumb Money",
    year: "2023",
    type: "movie",
    genre: "Drame, Comédie, Histoire",
    desc: "L'incroyable histoire vraie d'un homme ordinaire qui a ébranlé Wall Street en misant sur GameStop.",
    rating: "6.7",
    poster: "https://image.tmdb.org/t/p/w300/vfqXX7TIwUqk5pepTDhYpMsesIL.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/dTOQaHP4PjDXU2JwDF6UYqGqRT0.jpg",
    videoUrl: "./filme/Dumb.Money.2023.MULTi.VFF.1080p.WEB.H265-FW.mkv.mp4",
    mimeType: "video/mp4",
    isLocal: true,
    addedAt: "2026-05-06T00:00:00.000Z"
  },
  {
    id: "local_grand_jeu_2017",
    title: "Le Grand Jeu",
    year: "2017",
    type: "movie",
    genre: "Drame, Crime",
    desc: "La prodigieuse histoire vraie d'une jeune femme devenue la reine d'un gigantesque empire du jeu clandestin à Hollywood.",
    rating: "7.1",
    poster: "https://image.tmdb.org/t/p/w300/ln3OxFC6v6DviTdU5zuLsgozrRq.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/rHcBZ6ZKCe4FalWHyvBGsyMsh0k.jpg",
    videoUrl: "./filme/Le_Grand_jeu_2017_1080p_FR_X264_AC3-mHDgz.mkv.mp4",
    mimeType: "video/mp4",
    isLocal: true,
    addedAt: "2026-05-06T00:00:00.000Z"
  },
  {
    id: "local_night_call_2014",
    title: "Night Call",
    year: "2014",
    type: "movie",
    genre: "Crime, Drame, Thriller",
    desc: "Lou parcourt Los Angeles la nuit à la recherche d'images choc qu'il vend aux chaînes de TV locales. Ambitieux et sans scrupules.",
    rating: "7.7",
    poster: "https://image.tmdb.org/t/p/w300/pATJSq0OobFU9DmcKQUqQPpzDET.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/bdI6U1mT0kCdTJ6TWtiFxQ42GSn.jpg",
    videoUrl: "./filme/Night.Call.2014.Multi.Truefrench.1080p.HD.Light.AC3.5.1.Dread-Team.mkv.mp4",
    mimeType: "video/mp4",
    isLocal: true,
    addedAt: "2026-05-06T00:00:00.000Z"
  },
  {
    id: "local_frankenstein_2025",
    title: "Frankenstein",
    year: "2025",
    type: "movie",
    genre: "Horreur, Science-Fiction",
    desc: "Victor Frankenstein réussit à recréer la vie à partir de morceaux de cadavres, mais sa créature lui échappe.",
    rating: "7.6",
    poster: "https://image.tmdb.org/t/p/w300/aSMz7X2yQaN0ojeXEmOonbIJFhU.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hpXBJxLD2SEf8l2CspmSeiHrBKX.jpg",
    videoUrl: "./filme/frankenstein.MP4",
    mimeType: "video/mp4",
    isLocal: true,
    addedAt: "2026-05-06T00:00:00.000Z"
  },
  {
    id: "local_how_high_8386",
    title: "How High",
    year: "2001",
    type: "movie",
    genre: "Comédie, Fantasy",
    desc: "Silas et Jamal cultivent une variété de marijuana qui donne la possibilité à quiconque la consomme d'augmenter exponentiellement son Q.I. Les deux amis se retrouvent à Harvard où leurs aventures ne font que commencer.",
    rating: "6.2",
    poster: "https://image.tmdb.org/t/p/w300/6mJqKTfq2i8F2g82yTqKHG4JiUB.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/lFn8azDMDXa1vEhW0DTfY7GNFDi.jpg",
    videoUrl: "./filme/%5B%20OxTorrent.com%20%5D%20How_High_DVDRiP11.avi",
    mimeType: "video/x-msvideo",
    isLocal: true,
    addedAt: "2026-05-20T00:00:00.000Z"
  },

  // ── FILMS POPULAIRES — STREAMING ──────────────────────

  {
    id: "stream_inception_27205",
    title: "Inception",
    year: "2010",
    type: "movie",
    genre: "Action, Science-Fiction, Thriller",
    desc: "Dom Cobb est capable de s'introduire dans les rêves des autres pour leur voler des informations. On lui propose d'accomplir l'inverse : implanter une idée dans l'esprit d'un homme.",
    rating: "8.4",
    poster: "https://image.tmdb.org/t/p/w300/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/27205",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 27205,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_interstellar_157336",
    title: "Interstellar",
    year: "2014",
    type: "movie",
    genre: "Science-Fiction, Aventure, Drame",
    desc: "Les ressources de la Terre s'épuisent. Un groupe d'astronautes reçoit pour mission de vérifier si des planètes situées au-delà d'un trou de ver pourraient accueillir l'humanité.",
    rating: "8.4",
    poster: "https://image.tmdb.org/t/p/w300/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/pbrkL804Y8agVAQKBvBFzdFESFb.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/157336",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 157336,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_dark_knight_155",
    title: "The Dark Knight",
    year: "2008",
    type: "movie",
    genre: "Action, Crime, Drame",
    desc: "Batman, Gordon et Dent unissent leurs forces contre le Joker, un criminel psychopathe qui sème la terreur à Gotham City.",
    rating: "8.5",
    poster: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/155",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 155,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_pulp_fiction_680",
    title: "Pulp Fiction",
    year: "1994",
    type: "movie",
    genre: "Crime, Thriller",
    desc: "L.A. Plusieurs histoires de crime s'entremêlent : deux tueurs à gages, un boxeur, une femme de gangster et deux braqueurs.",
    rating: "8.5",
    poster: "https://image.tmdb.org/t/p/w300/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/680",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 680,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_gladiator_98",
    title: "Gladiator",
    year: "2000",
    type: "movie",
    genre: "Action, Aventure, Drame",
    desc: "Maximus est un général romain trahi par le prince Commode. Réduit en esclavage, il devient gladiateur et cherche à se venger.",
    rating: "8.2",
    poster: "https://image.tmdb.org/t/p/w300/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hND7FFiNDBcf91VlKQOUJSL7wJ5.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/98",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 98,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_matrix_603",
    title: "Matrix",
    year: "1999",
    type: "movie",
    genre: "Action, Science-Fiction",
    desc: "Un hacker découvre que la réalité telle qu'il la perçoit est en fait une simulation appelée « La Matrice », créée par des machines pour contrôler l'humanité.",
    rating: "8.2",
    poster: "https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/603",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 603,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_avengers_endgame_299534",
    title: "Avengers : Endgame",
    year: "2019",
    type: "movie",
    genre: "Action, Aventure, Science-Fiction",
    desc: "Après Thanos, les Avengers rescapés tentent de défaire ses actions et de restaurer l'ordre dans l'univers.",
    rating: "8.4",
    poster: "https://image.tmdb.org/t/p/w300/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/299534",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 299534,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_joker_475557",
    title: "Joker",
    year: "2019",
    type: "movie",
    genre: "Crime, Thriller, Drame",
    desc: "Arthur Fleck, un comédien raté, sombre dans la folie et devient le criminel emblématique de Gotham City : le Joker.",
    rating: "8.2",
    poster: "https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/475557",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 475557,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_parasite_496243",
    title: "Parasite",
    year: "2019",
    type: "movie",
    genre: "Comédie, Thriller, Drame",
    desc: "La famille Kim, pauvre, s'infiltre dans la vie luxueuse de la famille Park. Les deux familles aux antipodes vont se retrouver liées.",
    rating: "8.5",
    poster: "https://image.tmdb.org/t/p/w300/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/496243",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 496243,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_fight_club_550",
    title: "Fight Club",
    year: "1999",
    type: "movie",
    genre: "Drame, Thriller",
    desc: "Un cadre insomniaque rencontre un vendeur de savon charismatique. Ensemble ils fondent un club de combat clandestin.",
    rating: "8.4",
    poster: "https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/550",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 550,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_spiderman_no_way_home_634649",
    title: "Spider-Man: No Way Home",
    year: "2021",
    type: "movie",
    genre: "Action, Aventure, Science-Fiction",
    desc: "Peter Parker demande à Doctor Strange d'effacer sa double identité. Le sortilège ouvre le multivers, libérant des ennemis du passé.",
    rating: "7.9",
    poster: "https://image.tmdb.org/t/p/w300/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/634649",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 634649,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_oppenheimer_872585",
    title: "Oppenheimer",
    year: "2023",
    type: "movie",
    genre: "Drame, Histoire",
    desc: "L'histoire de J. Robert Oppenheimer et de son rôle dans le développement de la première bombe atomique durant la Seconde Guerre mondiale.",
    rating: "8.3",
    poster: "https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/872585",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 872585,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_barbie_346698",
    title: "Barbie",
    year: "2023",
    type: "movie",
    genre: "Comédie, Aventure, Fantasy",
    desc: "Barbie vit dans un monde parfait, Barbieland. Après une crise existentielle, elle part dans le monde réel avec Ken pour trouver le bonheur véritable.",
    rating: "7.0",
    poster: "https://image.tmdb.org/t/p/w300/iuFNMS8vlbhRnMNFdDPcUTHHsiG.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/ctMserH8g2SeOAnCmxGkHHoIBBm.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/346698",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 346698,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_john_wick_245891",
    title: "John Wick",
    year: "2014",
    type: "movie",
    genre: "Action, Thriller",
    desc: "John Wick, ex-tueur à gages légendaire, sort de sa retraite pour venger la mort de son chien et récupérer sa voiture volée.",
    rating: "7.4",
    poster: "https://image.tmdb.org/t/p/w300/fZPSd91pGE1fsli0Wqk5T2rjkH3.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/umC04Cozevu8nn3ZTIU9MZAObE0.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/245891",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 245891,
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_top_gun_maverick_361743",
    title: "Top Gun: Maverick",
    year: "2022",
    type: "movie",
    genre: "Action, Drame",
    desc: "Pete 'Maverick' Mitchell doit former une nouvelle génération de pilotes d'élite pour une mission suicide sans précédent.",
    rating: "8.3",
    poster: "https://image.tmdb.org/t/p/w300/62HCnUTHjWE0KjhqoqBLAszKsia.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/AkB37dSfJFnHjTvDiOVOj1OFZpV.jpg",
    videoUrl: "https://vidsrc.to/embed/movie/361743",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 361743,
    addedAt: "2026-05-15T00:00:00.000Z"
  },

  // ── SÉRIES POPULAIRES — STREAMING ─────────────────────

  {
    id: "stream_breaking_bad_1396",
    title: "Breaking Bad",
    year: "2008",
    type: "tv",
    genre: "Crime, Drame, Thriller",
    desc: "Walter White, professeur de chimie atteint d'un cancer, se transforme en baron de la drogue pour assurer l'avenir de sa famille.",
    rating: "9.5",
    poster: "https://image.tmdb.org/t/p/w300/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    isLocal: true,
    tmdbId: 1396,
    seasons: [
      { episodes: [
        {title:"Pilote", fileData:"https://vidsrc.to/embed/tv/1396/1/1", mimeType:"text/html"},
        {title:"Le Chat dans le sac", fileData:"https://vidsrc.to/embed/tv/1396/1/2", mimeType:"text/html"},
        {title:"...Et le sac dans la rivière", fileData:"https://vidsrc.to/embed/tv/1396/1/3", mimeType:"text/html"},
        {title:"Cancer Man", fileData:"https://vidsrc.to/embed/tv/1396/1/4", mimeType:"text/html"},
        {title:"Gris", fileData:"https://vidsrc.to/embed/tv/1396/1/5", mimeType:"text/html"},
        {title:"Coyote Ugly", fileData:"https://vidsrc.to/embed/tv/1396/1/6", mimeType:"text/html"},
        {title:"A No-Rough-Stuff Type Deal", fileData:"https://vidsrc.to/embed/tv/1396/1/7", mimeType:"text/html"}
      ]},
      { episodes: [
        {title:"Seven Thirty-Seven", fileData:"https://vidsrc.to/embed/tv/1396/2/1", mimeType:"text/html"},
        {title:"Grilled", fileData:"https://vidsrc.to/embed/tv/1396/2/2", mimeType:"text/html"},
        {title:"Bit by a Dead Bee", fileData:"https://vidsrc.to/embed/tv/1396/2/3", mimeType:"text/html"},
        {title:"Down", fileData:"https://vidsrc.to/embed/tv/1396/2/4", mimeType:"text/html"},
        {title:"Breakage", fileData:"https://vidsrc.to/embed/tv/1396/2/5", mimeType:"text/html"},
        {title:"Peekaboo", fileData:"https://vidsrc.to/embed/tv/1396/2/6", mimeType:"text/html"},
        {title:"Negro y Azul", fileData:"https://vidsrc.to/embed/tv/1396/2/7", mimeType:"text/html"},
        {title:"Better Call Saul", fileData:"https://vidsrc.to/embed/tv/1396/2/8", mimeType:"text/html"},
        {title:"4 jours hors du temps", fileData:"https://vidsrc.to/embed/tv/1396/2/9", mimeType:"text/html"},
        {title:"Over", fileData:"https://vidsrc.to/embed/tv/1396/2/10", mimeType:"text/html"},
        {title:"Mandala", fileData:"https://vidsrc.to/embed/tv/1396/2/11", mimeType:"text/html"},
        {title:"Phoenix", fileData:"https://vidsrc.to/embed/tv/1396/2/12", mimeType:"text/html"},
        {title:"ABQ", fileData:"https://vidsrc.to/embed/tv/1396/2/13", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_game_of_thrones_1399",
    title: "Game of Thrones",
    year: "2011",
    type: "tv",
    genre: "Action, Aventure, Drame, Fantasy",
    desc: "Plusieurs maisons nobles se disputent le contrôle du Trône de Fer des Sept Couronnes de Westeros, pendant que d'autres menaces surgissent du Nord.",
    rating: "9.3",
    poster: "https://image.tmdb.org/t/p/w300/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/2OMB0ynKlyIenMJWI2Dy9IER4er.jpg",
    isLocal: true,
    tmdbId: 1399,
    seasons: [
      { episodes: [
        {title:"L'Hiver vient", fileData:"https://vidsrc.to/embed/tv/1399/1/1", mimeType:"text/html"},
        {title:"La Route royale", fileData:"https://vidsrc.to/embed/tv/1399/1/2", mimeType:"text/html"},
        {title:"Lord Snow", fileData:"https://vidsrc.to/embed/tv/1399/1/3", mimeType:"text/html"},
        {title:"L'Estropié", fileData:"https://vidsrc.to/embed/tv/1399/1/4", mimeType:"text/html"},
        {title:"Le Loup et le Lion", fileData:"https://vidsrc.to/embed/tv/1399/1/5", mimeType:"text/html"},
        {title:"Une Couronne d'or", fileData:"https://vidsrc.to/embed/tv/1399/1/6", mimeType:"text/html"},
        {title:"Vous Gagnez ou vous Mourez", fileData:"https://vidsrc.to/embed/tv/1399/1/7", mimeType:"text/html"},
        {title:"La Lame Pointée", fileData:"https://vidsrc.to/embed/tv/1399/1/8", mimeType:"text/html"},
        {title:"Baelor", fileData:"https://vidsrc.to/embed/tv/1399/1/9", mimeType:"text/html"},
        {title:"Fire and Blood", fileData:"https://vidsrc.to/embed/tv/1399/1/10", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_squid_game_93405",
    title: "Squid Game",
    year: "2021",
    type: "tv",
    genre: "Action, Drame, Mystère",
    desc: "Des centaines de joueurs endettés participent à des jeux d'enfants pour un prix de 45,6 milliards de wons. La règle : perdre, c'est mourir.",
    rating: "8.0",
    poster: "https://image.tmdb.org/t/p/w300/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/oaGvjB0DvdhXhOAuADfHb261ZHa.jpg",
    isLocal: true,
    tmdbId: 93405,
    seasons: [
      { episodes: [
        {title:"Le Jeu du calmar", fileData:"https://vidsrc.to/embed/tv/93405/1/1", mimeType:"text/html"},
        {title:"L'Enfer", fileData:"https://vidsrc.to/embed/tv/93405/1/2", mimeType:"text/html"},
        {title:"L'Homme au parapluie", fileData:"https://vidsrc.to/embed/tv/93405/1/3", mimeType:"text/html"},
        {title:"Ensemble ou séparément", fileData:"https://vidsrc.to/embed/tv/93405/1/4", mimeType:"text/html"},
        {title:"Un monde juste", fileData:"https://vidsrc.to/embed/tv/93405/1/5", mimeType:"text/html"},
        {title:"Gganbu", fileData:"https://vidsrc.to/embed/tv/93405/1/6", mimeType:"text/html"},
        {title:"VIPS", fileData:"https://vidsrc.to/embed/tv/93405/1/7", mimeType:"text/html"},
        {title:"Ce que la vie nous réserve", fileData:"https://vidsrc.to/embed/tv/93405/1/8", mimeType:"text/html"},
        {title:"Le Jeu principal", fileData:"https://vidsrc.to/embed/tv/93405/1/9", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_the_office_2316",
    title: "The Office",
    year: "2005",
    type: "tv",
    genre: "Comédie",
    desc: "Vie quotidienne des employés d'une agence de papeterie à Scranton, filmée comme un documentaire. Michael Scott et ses employés vous attendent.",
    rating: "8.9",
    poster: "https://image.tmdb.org/t/p/w300/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/vNpuAxGTl9HsUbHqam3E9CzqCvX.jpg",
    isLocal: true,
    tmdbId: 2316,
    seasons: [
      { episodes: [
        {title:"Pilote", fileData:"https://vidsrc.to/embed/tv/2316/1/1", mimeType:"text/html"},
        {title:"Diversité en journée", fileData:"https://vidsrc.to/embed/tv/2316/1/2", mimeType:"text/html"},
        {title:"Les Récompenses", fileData:"https://vidsrc.to/embed/tv/2316/1/3", mimeType:"text/html"},
        {title:"Le Groupe de parole", fileData:"https://vidsrc.to/embed/tv/2316/1/4", mimeType:"text/html"},
        {title:"Hot Girl", fileData:"https://vidsrc.to/embed/tv/2316/1/5", mimeType:"text/html"},
        {title:"Basketball", fileData:"https://vidsrc.to/embed/tv/2316/1/6", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_dark_83867",
    title: "Dark",
    year: "2017",
    type: "tv",
    genre: "Science-Fiction, Mystère, Thriller",
    desc: "Dans la ville de Winden, la disparition d'enfants met en lumière les liens secrets de quatre familles à travers le temps.",
    rating: "8.8",
    poster: "https://image.tmdb.org/t/p/w300/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/namEjBEj6jPhCXCSABHBiScTjhm.jpg",
    isLocal: true,
    tmdbId: 83867,
    seasons: [
      { episodes: [
        {title:"Origines", fileData:"https://vidsrc.to/embed/tv/83867/1/1", mimeType:"text/html"},
        {title:"Mensonges", fileData:"https://vidsrc.to/embed/tv/83867/1/2", mimeType:"text/html"},
        {title:"Passé et présent", fileData:"https://vidsrc.to/embed/tv/83867/1/3", mimeType:"text/html"},
        {title:"Double réalité", fileData:"https://vidsrc.to/embed/tv/83867/1/4", mimeType:"text/html"},
        {title:"Vérités", fileData:"https://vidsrc.to/embed/tv/83867/1/5", mimeType:"text/html"},
        {title:"Sic Mundus Creatus Est", fileData:"https://vidsrc.to/embed/tv/83867/1/6", mimeType:"text/html"},
        {title:"Kiłometric", fileData:"https://vidsrc.to/embed/tv/83867/1/7", mimeType:"text/html"},
        {title:"As You Sow, So You Shall Reap", fileData:"https://vidsrc.to/embed/tv/83867/1/8", mimeType:"text/html"},
        {title:"À tout prix", fileData:"https://vidsrc.to/embed/tv/83867/1/9", mimeType:"text/html"},
        {title:"Alpha and Omega", fileData:"https://vidsrc.to/embed/tv/83867/1/10", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_money_heist_71446",
    title: "La Casa de Papel",
    year: "2017",
    type: "tv",
    genre: "Crime, Drame, Thriller",
    desc: "Un génie criminel réunit une bande de huit cambrioleurs pour réaliser le plus grand braquage de l'histoire à la Monnaie royale d'Espagne.",
    rating: "8.2",
    poster: "https://image.tmdb.org/t/p/w300/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/1Ds7xy7ons7UEyFJen2X1697Jpc.jpg",
    isLocal: true,
    tmdbId: 71446,
    seasons: [
      { episodes: [
        {title:"Episode 1", fileData:"https://vidsrc.to/embed/tv/71446/1/1", mimeType:"text/html"},
        {title:"Episode 2", fileData:"https://vidsrc.to/embed/tv/71446/1/2", mimeType:"text/html"},
        {title:"Episode 3", fileData:"https://vidsrc.to/embed/tv/71446/1/3", mimeType:"text/html"},
        {title:"Episode 4", fileData:"https://vidsrc.to/embed/tv/71446/1/4", mimeType:"text/html"},
        {title:"Episode 5", fileData:"https://vidsrc.to/embed/tv/71446/1/5", mimeType:"text/html"},
        {title:"Episode 6", fileData:"https://vidsrc.to/embed/tv/71446/1/6", mimeType:"text/html"},
        {title:"Episode 7", fileData:"https://vidsrc.to/embed/tv/71446/1/7", mimeType:"text/html"},
        {title:"Episode 8", fileData:"https://vidsrc.to/embed/tv/71446/1/8", mimeType:"text/html"},
        {title:"Episode 9", fileData:"https://vidsrc.to/embed/tv/71446/1/9", mimeType:"text/html"},
        {title:"Episode 10", fileData:"https://vidsrc.to/embed/tv/71446/1/10", mimeType:"text/html"},
        {title:"Episode 11", fileData:"https://vidsrc.to/embed/tv/71446/1/11", mimeType:"text/html"},
        {title:"Episode 12", fileData:"https://vidsrc.to/embed/tv/71446/1/12", mimeType:"text/html"},
        {title:"Episode 13", fileData:"https://vidsrc.to/embed/tv/71446/1/13", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_stranger_things_66732",
    title: "Stranger Things",
    year: "2016",
    type: "tv",
    genre: "Drame, Fantastique, Horreur",
    desc: "Dans les années 80, la disparition d'un enfant révèle des expériences secrètes et une dimension parallèle terrorisante.",
    rating: "8.6",
    poster: "https://image.tmdb.org/t/p/w300/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    isLocal: true,
    tmdbId: 66732,
    seasons: [
      { episodes: [
        {title:"Le Monde à l'envers", fileData:"https://vidsrc.to/embed/tv/66732/1/1", mimeType:"text/html"},
        {title:"La Bicyclette de Will", fileData:"https://vidsrc.to/embed/tv/66732/1/2", mimeType:"text/html"},
        {title:"Holly, Jolly", fileData:"https://vidsrc.to/embed/tv/66732/1/3", mimeType:"text/html"},
        {title:"Le Corps", fileData:"https://vidsrc.to/embed/tv/66732/1/4", mimeType:"text/html"},
        {title:"La Justice des nains", fileData:"https://vidsrc.to/embed/tv/66732/1/5", mimeType:"text/html"},
        {title:"Le Monstre", fileData:"https://vidsrc.to/embed/tv/66732/1/6", mimeType:"text/html"},
        {title:"La Bouche", fileData:"https://vidsrc.to/embed/tv/66732/1/7", mimeType:"text/html"},
        {title:"Le Portail", fileData:"https://vidsrc.to/embed/tv/66732/1/8", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-15T00:00:00.000Z"
  },
  {
    id: "stream_the_mandalorian_82856",
    title: "The Mandalorian",
    year: "2019",
    type: "tv",
    genre: "Action, Aventure, Science-Fiction",
    desc: "Dans les confins de la galaxie, loin de l'autorité de la Nouvelle République, un chasseur de primes mandalorien entreprend un voyage.",
    rating: "8.5",
    poster: "https://image.tmdb.org/t/p/w300/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
    isLocal: true,
    tmdbId: 82856,
    seasons: [
      { episodes: [
        {title:"Chapitre 1 : Le Mandalorien", fileData:"https://vidsrc.to/embed/tv/82856/1/1", mimeType:"text/html"},
        {title:"Chapitre 2 : L'Enfant", fileData:"https://vidsrc.to/embed/tv/82856/1/2", mimeType:"text/html"},
        {title:"Chapitre 3 : Le Péché", fileData:"https://vidsrc.to/embed/tv/82856/1/3", mimeType:"text/html"},
        {title:"Chapitre 4 : Refuge", fileData:"https://vidsrc.to/embed/tv/82856/1/4", mimeType:"text/html"},
        {title:"Chapitre 5 : Le Fugitif", fileData:"https://vidsrc.to/embed/tv/82856/1/5", mimeType:"text/html"},
        {title:"Chapitre 6 : Le Prisonnier", fileData:"https://vidsrc.to/embed/tv/82856/1/6", mimeType:"text/html"},
        {title:"Chapitre 7 : Le Règlement de comptes", fileData:"https://vidsrc.to/embed/tv/82856/1/7", mimeType:"text/html"},
        {title:"Chapitre 8 : La Rédemption", fileData:"https://vidsrc.to/embed/tv/82856/1/8", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-15T00:00:00.000Z"
  }

  ,{
    id: "local_one_trillion_dollar_234717",
    title: "One Trillion Dollars",
    year: "2023",
    type: "tv",
    genre: "Drame",
    desc: "John Pohlmann, coursier berlinois de 25 ans, hérite de mille milliards de dollars et devient du jour au lendemain l'homme le plus riche du monde. Sa fortune est liée à une prophétie : l'héritier devra restaurer l'avenir perdu de l'humanité — mais de puissants ennemis veulent l'en empêcher.",
    rating: "7.2",
    poster: "https://image.tmdb.org/t/p/w300/uP2YXK8Q7NspFNj2SJ16iXHfxg6.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/zdjKqMFj5lLgglJHi2Pg38TbeLj.jpg",
    isLocal: true,
    addedAt: "2026-05-15T00:00:00.000Z",
    seasons: [
      { episodes: [
        {title: "L'héritage",           videoUrl: "https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming/releases/download/v1.0/E1.MP4",  mimeType: "video/mp4"},
        {title: "La prophétie",         videoUrl: "https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming/releases/download/v1.0/E02.MP4", mimeType: "video/mp4"},
        {title: "L'espoir",             videoUrl: "https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming/releases/download/v1.0/E03.MP4", mimeType: "video/mp4"},
        {title: "La spirale infernale", videoUrl: "https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming/releases/download/v1.0/E04.MP4", mimeType: "video/mp4"},
        {title: "La conspiration",      videoUrl: "https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming/releases/download/v1.0/E05.MP4", mimeType: "video/mp4"},
        {title: "La fin du monde",      videoUrl: "https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming/releases/download/v1.0/E06.MP4", mimeType: "video/mp4"}
      ]}
    ]
  }

  // ── FILMS 2020+ ───────────────────────────────────────────

  ,{
    id: "stream_tenet_577922",
    title: "Tenet",
    year: "2020",
    type: "movie",
    genre: "Action, Science-Fiction, Thriller",
    desc: "Un agent secret traverse le temps pour empêcher une guerre qui menace l'humanité. Christopher Nolan pousse les limites de la narration avec ce thriller temporel époustouflant.",
    rating: "7.4",
    poster: "https://image.tmdb.org/t/p/w300/72SOtZnFhCumLRZhoXlX8g2IkgF.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/7BYtnXUfweV6EryNYDpZFeS31Ia.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/577922",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 577922,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_soul_508442",
    title: "Soul",
    year: "2020",
    type: "movie",
    genre: "Animation, Comédie, Fantastique",
    desc: "Joe Gardner, musicien de jazz, se retrouve dans le monde des âmes avant de naître. Il doit trouver la signification de la vie avant de retourner sur Terre.",
    rating: "8.1",
    poster: "https://image.tmdb.org/t/p/w300/c6Q7te0PPyL4rzlGkDByVeTKFYg.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/rQaHA74pevnGsxcKGaoZVGWe9TC.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/508442",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 508442,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_batman_2022_414906",
    title: "The Batman",
    year: "2022",
    type: "movie",
    genre: "Action, Crime, Drame",
    desc: "Dans sa deuxième année de combat contre le crime, Batman démêle une série de meurtres sadiques perpétrés par l'Énigmiste, tout en exposant la corruption à Gotham City.",
    rating: "7.9",
    poster: "https://image.tmdb.org/t/p/w300/t9JGg10CW1DzXEdWL54ewkUko6N.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/rvtdN5XkWAfGX6xDuPL6yYS2seK.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/414906",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 414906,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_eeaao_545611",
    title: "Everything Everywhere All at Once",
    year: "2022",
    type: "movie",
    genre: "Action, Aventure, Science-Fiction",
    desc: "Une mère de famille débordée découvre qu'elle peut accéder aux vies de ses versions alternatives dans d'autres univers. Oscar du Meilleur Film 2023.",
    rating: "7.9",
    poster: "https://image.tmdb.org/t/p/w300/qHy7BlA1I3iUEIGp7atsMjSNJSK.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/ss0Os3uWJfQAENILHZUdX8Tt1OC.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/545611",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 545611,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_avatar2_76600",
    title: "Avatar : La Voie de l'eau",
    year: "2022",
    type: "movie",
    genre: "Science-Fiction, Aventure, Action",
    desc: "Jake Sully et Neytiri ont fondé une famille sur Pandora. Lorsqu'une ancienne menace ressurgit, ils doivent fuir et explorer les régions des Omaticaya des océans.",
    rating: "7.6",
    poster: "https://image.tmdb.org/t/p/w300/7TOaaKbSYfilIpZsRCS1AyFCxaJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/kJsPVzdyBrYHLomuNv5SJDXUQ2f.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/76600",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 76600,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_wakanda_505642",
    title: "Black Panther : Wakanda Forever",
    year: "2022",
    type: "movie",
    genre: "Action, Aventure, Science-Fiction",
    desc: "Suite à la mort du roi T'Challa, Wakanda doit affronter une nouvelle menace venue des profondeurs de l'océan : le puissant royaume de Talocan.",
    rating: "7.1",
    poster: "https://image.tmdb.org/t/p/w300/7cSyJcUf8twHn05h7PMQHv6tgFV.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/83H0C66AcvkwpG2738VCTHMY9uv.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/505642",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 505642,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_bullet_train_718821",
    title: "Bullet Train",
    year: "2022",
    type: "movie",
    genre: "Action, Thriller, Comédie",
    desc: "Ladybug, un assassin à la malchance légendaire, embarque dans le Shinkansen Tokyo-Kyoto et réalise que son objectif est lié à d'autres tueurs à bord.",
    rating: "7.4",
    poster: "https://image.tmdb.org/t/p/w300/bgyrB7OmVBmqdVxFXjCmh4Q30Ju.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/58D6ZAvOKxlHjyX9S8qNKSBE9Y.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/718821",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 718821,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_glass_onion_661374",
    title: "Glass Onion",
    year: "2022",
    type: "movie",
    genre: "Crime, Comédie, Mystère",
    desc: "Le détective Benoit Blanc enquête sur un meurtre dans la villa d'un milliardaire en Grèce. Tous les invités ont un mobile — mais qui est vraiment coupable ?",
    rating: "7.2",
    poster: "https://image.tmdb.org/t/p/w300/j8mGH7DzwUD9soODpUI64PWNumg.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/661374",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 661374,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_the_menu_593643",
    title: "The Menu",
    year: "2022",
    type: "movie",
    genre: "Horreur, Thriller, Comédie",
    desc: "Un couple se rend dans un restaurant gastronomique sur une île isolée. Le chef Slowik leur a préparé un menu avec de terribles surprises.",
    rating: "7.2",
    poster: "https://image.tmdb.org/t/p/w300/z9KjjwNcY6WhhA2HGCOzNOa0Lg6.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/4vSBj7BYsyuKCx96EJzGyp20WfY.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/593643",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 593643,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_nope_762504",
    title: "Nope",
    year: "2022",
    type: "movie",
    genre: "Horreur, Science-Fiction, Mystère",
    desc: "Les propriétaires d'un ranch en Californie font une découverte terrifiante dans le ciel au-dessus de leur ferme. Jordan Peele signe un thriller extraterrestre haletant.",
    rating: "7.0",
    poster: "https://image.tmdb.org/t/p/w300/b1z84OMbtzmFWsiQWyonoPqWY2Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/yRutvYkM3OP8N9oqqfjSK1VC7fs.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/762504",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 762504,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_guardians3_447365",
    title: "Les Gardiens de la Galaxie Vol. 3",
    year: "2023",
    type: "movie",
    genre: "Action, Aventure, Science-Fiction",
    desc: "Peter Quill et l'équipe partent en mission pour protéger Rocket. Le passé douloureux de leur ami met en jeu l'existence même des Gardiens.",
    rating: "8.0",
    poster: "https://image.tmdb.org/t/p/w300/dnyQnKSSqQ8aOEMiE5hYDNJO4dE.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3D6XGkVA.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/447365",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 447365,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_dune2_693134",
    title: "Dune : Deuxième Partie",
    year: "2024",
    type: "movie",
    genre: "Science-Fiction, Aventure",
    desc: "Paul Atreides s'unit aux Fremen pour mener une guerre de vengeance contre les comploteurs qui ont détruit sa famille. Un film épique de Denis Villeneuve.",
    rating: "8.5",
    poster: "https://image.tmdb.org/t/p/w300/iRNbRAIGQQr5diGnjpwJFm0dgt4.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/eZ239CUp1d6OryZEBPnO2n87gMG.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/693134",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 693134,
    addedAt: "2026-05-27T00:00:00.000Z"
  }

  // ── SÉRIES 2020+ ──────────────────────────────────────────

  ,{
    id: "stream_lupin_96677",
    title: "Lupin",
    year: "2021",
    type: "tv",
    genre: "Crime, Mystère, Thriller",
    desc: "Inspiré par Arsène Lupin, Assane Diop utilise ses talents de gentleman cambrioleur pour se venger de la famille qui a détruit son père. Omar Sy au sommet.",
    rating: "7.5",
    poster: "https://image.tmdb.org/t/p/w300/sOUWMR7GkV8BMbdtbo6TaXkb7Ew.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/aY7zv2pfk9H0QxaaL3PBjvalbKQ.jpg",
    isLocal: true,
    tmdbId: 96677,
    seasons: [
      { episodes: [
        {title:"S1E1 — Le Vol du Collier de la Reine", fileData:"https://autoembed.co/tv/tmdb/96677-1-1", mimeType:"text/html"},
        {title:"S1E2 — Entre les deux, mon cœur balance", fileData:"https://autoembed.co/tv/tmdb/96677-1-2", mimeType:"text/html"},
        {title:"S1E3 — Dans la peau d'Hubert Pellegrini", fileData:"https://autoembed.co/tv/tmdb/96677-1-3", mimeType:"text/html"},
        {title:"S1E4 — Le Fils du Diable", fileData:"https://autoembed.co/tv/tmdb/96677-1-4", mimeType:"text/html"},
        {title:"S1E5 — La Femme au collier de rubis", fileData:"https://autoembed.co/tv/tmdb/96677-1-5", mimeType:"text/html"}
      ]},
      { episodes: [
        {title:"S2E1 — L'Ombre d'Assane", fileData:"https://autoembed.co/tv/tmdb/96677-2-1", mimeType:"text/html"},
        {title:"S2E2 — On ne plaisante pas avec l'amour", fileData:"https://autoembed.co/tv/tmdb/96677-2-2", mimeType:"text/html"},
        {title:"S2E3 — L'homme à la tête de Lupin", fileData:"https://autoembed.co/tv/tmdb/96677-2-3", mimeType:"text/html"},
        {title:"S2E4 — Le Fugitif", fileData:"https://autoembed.co/tv/tmdb/96677-2-4", mimeType:"text/html"},
        {title:"S2E5 — La Justice d'Assane", fileData:"https://autoembed.co/tv/tmdb/96677-2-5", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_wednesday_119051",
    title: "Wednesday",
    year: "2022",
    type: "tv",
    genre: "Comédie, Fantastique, Mystère",
    desc: "Wednesday Addams intègre l'Académie Nevermore, une école pour monstres. Entre meurtres mystérieux et révélations sur ses pouvoirs, elle doit apprendre à faire confiance aux autres.",
    rating: "8.1",
    poster: "https://image.tmdb.org/t/p/w300/1UzED7WZJgzEIeVz1xiuZ1529nb.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    isLocal: true,
    tmdbId: 119051,
    seasons: [
      { episodes: [
        {title:"S1E1 — Attention où tu mets les pieds", fileData:"https://autoembed.co/tv/tmdb/119051-1-1", mimeType:"text/html"},
        {title:"S1E2 — Woe is the Loneliest Number", fileData:"https://autoembed.co/tv/tmdb/119051-1-2", mimeType:"text/html"},
        {title:"S1E3 — Friend or Woe", fileData:"https://autoembed.co/tv/tmdb/119051-1-3", mimeType:"text/html"},
        {title:"S1E4 — Woe What a Night", fileData:"https://autoembed.co/tv/tmdb/119051-1-4", mimeType:"text/html"},
        {title:"S1E5 — You Reap What You Woe", fileData:"https://autoembed.co/tv/tmdb/119051-1-5", mimeType:"text/html"},
        {title:"S1E6 — Quelle barbe !", fileData:"https://autoembed.co/tv/tmdb/119051-1-6", mimeType:"text/html"},
        {title:"S1E7 — If You Don't Woe Me by Now", fileData:"https://autoembed.co/tv/tmdb/119051-1-7", mimeType:"text/html"},
        {title:"S1E8 — A Murder of Woes", fileData:"https://autoembed.co/tv/tmdb/119051-1-8", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_the_bear_136315",
    title: "The Bear",
    year: "2022",
    type: "tv",
    genre: "Drame, Comédie",
    desc: "Carmy, un chef étoilé new-yorkais, rentre à Chicago pour reprendre le sandwich shop de son frère décédé. Il doit gérer une équipe chaotique et un restaurant en faillite.",
    rating: "8.7",
    poster: "https://image.tmdb.org/t/p/w300/iaJfffjCqXATU5msr4PAgOWLMl4.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/wHNwlE6ftEpgjVbdhLXOtv1hLs0.jpg",
    isLocal: true,
    tmdbId: 136315,
    seasons: [
      { episodes: [
        {title:"S1E1 — Système", fileData:"https://autoembed.co/tv/tmdb/136315-1-1", mimeType:"text/html"},
        {title:"S1E2 — Hands", fileData:"https://autoembed.co/tv/tmdb/136315-1-2", mimeType:"text/html"},
        {title:"S1E3 — Brigade", fileData:"https://autoembed.co/tv/tmdb/136315-1-3", mimeType:"text/html"},
        {title:"S1E4 — Dogs", fileData:"https://autoembed.co/tv/tmdb/136315-1-4", mimeType:"text/html"},
        {title:"S1E5 — Sheridan", fileData:"https://autoembed.co/tv/tmdb/136315-1-5", mimeType:"text/html"},
        {title:"S1E6 — Crock", fileData:"https://autoembed.co/tv/tmdb/136315-1-6", mimeType:"text/html"},
        {title:"S1E7 — Review", fileData:"https://autoembed.co/tv/tmdb/136315-1-7", mimeType:"text/html"},
        {title:"S1E8 — Braciole", fileData:"https://autoembed.co/tv/tmdb/136315-1-8", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_house_of_dragon_94997",
    title: "House of the Dragon",
    year: "2022",
    type: "tv",
    genre: "Action, Aventure, Drame, Fantasy",
    desc: "200 ans avant Game of Thrones, la maison Targaryen est déchirée par une guerre civile pour la succession au Trône de Fer.",
    rating: "8.4",
    poster: "https://image.tmdb.org/t/p/w300/lP73xk4HGJ9CPxDWouzKzK6j82o.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/2xGcSLyTAzConiHAByWqhfLiatT.jpg",
    isLocal: true,
    tmdbId: 94997,
    seasons: [
      { episodes: [
        {title:"S1E1 — Les Héritiers du Dragon", fileData:"https://autoembed.co/tv/tmdb/94997-1-1", mimeType:"text/html"},
        {title:"S1E2 — Le Prince Voyou", fileData:"https://autoembed.co/tv/tmdb/94997-1-2", mimeType:"text/html"},
        {title:"S1E3 — Deuxième de ce Nom", fileData:"https://autoembed.co/tv/tmdb/94997-1-3", mimeType:"text/html"},
        {title:"S1E4 — Le Roi du Trône de Fer", fileData:"https://autoembed.co/tv/tmdb/94997-1-4", mimeType:"text/html"},
        {title:"S1E5 — Nous l'Avons Éclairé le Chemin", fileData:"https://autoembed.co/tv/tmdb/94997-1-5", mimeType:"text/html"},
        {title:"S1E6 — La Princesse et la Reine", fileData:"https://autoembed.co/tv/tmdb/94997-1-6", mimeType:"text/html"},
        {title:"S1E7 — Driftmark", fileData:"https://autoembed.co/tv/tmdb/94997-1-7", mimeType:"text/html"},
        {title:"S1E8 — Lord of the Tides", fileData:"https://autoembed.co/tv/tmdb/94997-1-8", mimeType:"text/html"},
        {title:"S1E9 — La Verte Chagrin", fileData:"https://autoembed.co/tv/tmdb/94997-1-9", mimeType:"text/html"},
        {title:"S1E10 — Noir et Vert", fileData:"https://autoembed.co/tv/tmdb/94997-1-10", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_last_of_us_100088",
    title: "The Last of Us",
    year: "2023",
    type: "tv",
    genre: "Action, Aventure, Drame, Science-Fiction",
    desc: "Vingt ans après la fin de la civilisation, Joel est chargé de faire sortir Ellie d'une zone de quarantaine. Un voyage intense qui va transformer les deux survivants.",
    rating: "8.8",
    poster: "https://image.tmdb.org/t/p/w300/4pMd9VAdqm96KA2W4X8yetgc7EF.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/acevLdSl5I2MK5RYAm7gwAndt1w.jpg",
    isLocal: true,
    tmdbId: 100088,
    seasons: [
      { episodes: [
        {title:"S1E1 — Quand tu es perdu dans les ténèbres", fileData:"https://autoembed.co/tv/tmdb/100088-1-1", mimeType:"text/html"},
        {title:"S1E2 — Contaminé", fileData:"https://autoembed.co/tv/tmdb/100088-1-2", mimeType:"text/html"},
        {title:"S1E3 — Long Long Time", fileData:"https://autoembed.co/tv/tmdb/100088-1-3", mimeType:"text/html"},
        {title:"S1E4 — S'il vous plaît garde ta main", fileData:"https://autoembed.co/tv/tmdb/100088-1-4", mimeType:"text/html"},
        {title:"S1E5 — Endure and Survive", fileData:"https://autoembed.co/tv/tmdb/100088-1-5", mimeType:"text/html"},
        {title:"S1E6 — Kin", fileData:"https://autoembed.co/tv/tmdb/100088-1-6", mimeType:"text/html"},
        {title:"S1E7 — Left Behind", fileData:"https://autoembed.co/tv/tmdb/100088-1-7", mimeType:"text/html"},
        {title:"S1E8 — When We Are in Need", fileData:"https://autoembed.co/tv/tmdb/100088-1-8", mimeType:"text/html"},
        {title:"S1E9 — Look for the Light", fileData:"https://autoembed.co/tv/tmdb/100088-1-9", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_euphoria_85552",
    title: "Euphoria",
    year: "2019",
    type: "tv",
    genre: "Drame",
    desc: "Rue, 17 ans, fraîchement sortie de cure de désintoxication, rencontre Jules. Une plongée brute dans le monde de la drogue, du sexe et de l'identité chez les adolescents américains.",
    rating: "8.3",
    poster: "https://image.tmdb.org/t/p/w300/lPmLrzVy5uGz7nNOtruirVz0Q38.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/mez2Z3WqlPKNXpi7mWoiiE5guE9.jpg",
    isLocal: true,
    tmdbId: 85552,
    seasons: [
      { episodes: [
        {title:"S1E1 — Pilote", fileData:"https://autoembed.co/tv/tmdb/85552-1-1", mimeType:"text/html"},
        {title:"S1E2 — Stuntin' Like My Daddy", fileData:"https://autoembed.co/tv/tmdb/85552-1-2", mimeType:"text/html"},
        {title:"S1E3 — Made You Look", fileData:"https://autoembed.co/tv/tmdb/85552-1-3", mimeType:"text/html"},
        {title:"S1E4 — Shook Ones Pt. II", fileData:"https://autoembed.co/tv/tmdb/85552-1-4", mimeType:"text/html"},
        {title:"S1E5 — '03 Bonnie & Clyde", fileData:"https://autoembed.co/tv/tmdb/85552-1-5", mimeType:"text/html"},
        {title:"S1E6 — The Next Episode", fileData:"https://autoembed.co/tv/tmdb/85552-1-6", mimeType:"text/html"},
        {title:"S1E7 — The Trials and Tribulations", fileData:"https://autoembed.co/tv/tmdb/85552-1-7", mimeType:"text/html"},
        {title:"S1E8 — And Salt the Earth Behind You", fileData:"https://autoembed.co/tv/tmdb/85552-1-8", mimeType:"text/html"}
      ]}
    ],
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_john_wick_2_324552",
    title: "John Wick 2",
    year: "2017",
    type: "movie",
    genre: "Action, Thriller",
    desc: "John Wick est contraint de sortir à nouveau de sa retraite par un ancien associé qui veut s'emparer du trône d'une mystérieuse guilde internationale d'assassins.",
    rating: "7.5",
    poster: "https://image.tmdb.org/t/p/w300/r687UV1zQ5KDB9AxRokRscWIRvt.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/r17jFHAemzcWPPtoO0UxjIX0xas.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/324552",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 324552,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_john_wick_3_458156",
    title: "John Wick 3 : Parabellum",
    year: "2019",
    type: "movie",
    genre: "Action, Thriller",
    desc: "John Wick est en fuite après avoir tué un membre de la haute table. Avec 14 millions de dollars sur la tête, il est traqué par des centaines d'assassins à travers New York.",
    rating: "7.4",
    poster: "https://image.tmdb.org/t/p/w300/efS6JZ0RRFxVq8QZ6OheRDMupkF.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/458156",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 458156,
    addedAt: "2026-05-27T00:00:00.000Z"
  }
  ,{
    id: "stream_john_wick_4_603692",
    title: "John Wick 4",
    year: "2023",
    type: "movie",
    genre: "Action, Thriller",
    desc: "John Wick découvre un moyen de vaincre la Haute Table. Mais avant de regagner sa liberté, Wick doit affronter un nouvel ennemi qui noue de puissantes alliances à travers le monde.",
    rating: "7.7",
    poster: "https://image.tmdb.org/t/p/w300/n1YTIyhAqqqFyDGFTzV7WaU1JfK.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    videoUrl: "https://autoembed.co/movie/tmdb/603692",
    mimeType: "text/html",
    isLocal: true,
    tmdbId: 603692,
    addedAt: "2026-05-27T00:00:00.000Z"
  }

];

window.SHARED_LIBRARY = BIBLIOTHEQUE;
