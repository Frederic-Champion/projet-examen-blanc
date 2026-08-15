## Session 67 — React Router : socle Declarative en place

**Durée** : ~3h (samedi, laptop). Énergie bonne. Séance dense, beaucoup de neuf.

**Révision éclair (`fetch` POST)** 🟡 : les trois clés retrouvées (`method`, `headers`, `body`) mais **deux valeurs inversées** (`headers: "POST"`, `method` recevant le Content-Type). Repère donné : le pluriel/singulier trahit le type de valeur — `headers` = objet, `method` = chaîne. Règle `Content-Type` reformulée : **je fabrique le body moi-même → j'annonce le type ; le navigateur le fabrique (FormData) → je me tais**. Reste en rotation.

**✅ Dette n°1 soldée — fonction de mise à jour dans le parent 🟢.** Reconstruite seule en contexte neuf (`PageSav`), et Frédéric a choisi de réécrire l'exercice **en entier** plutôt que la seule fonction demandée. Les trois points cassés en S64 sont sortis sans aide : setter dans la fonction, `.map()` rendant des références dans les deux branches, surcharge `{ ...d, statut: x }`. Correction unique : `[...dossiers].map()` — le spread est superflu devant `map`/`filter` qui fabriquent déjà un nouveau tableau. Repère posé : **nouveau tableau ≠ nouveaux objets** (le `{ ...d }` intérieur, lui, reste indispensable).

**⚠️ Erreur de ma part (§9, récurrence)** : squelette contenant `useState<Dossier[]>(...)` — generics **jamais enseignés**. Frédéric a stoppé. Puis deuxième fois dans la même séance : `type X = ...` utilisé dans l'explication censée corriger la première. Cours de rattrapage donné (canal des types vs canal des valeurs, inférence, quand les chevrons sont nécessaires). Les chevrons étaient de surcroît **superflus** dans mon squelette (valeur de départ remplie).

**🎓 Question de fond posée** : « est-ce que TS est validé ? j'ai l'impression qu'il manque plein de choses ». Réponse cadrée : c'est **TS des props** qui est fermé, pas TypeScript ; `type`, unions, generics, Zod sont explicitement ❌ au §7. Le trou du jour venait de moi, pas de son parcours.

**React Router — cours de fond** :

- SPA vs MPA, ce que la SPA casse (URL, bouton retour, partage) et que le routeur restitue
- Pourquoi une bibliothèque externe (React = interface uniquement)
- Les 3 modes (Declarative / Data / Framework) — reste en **Declarative**, Next.js couvrira le reste
- **Positionnement React Router ↔ Next.js** : deux solutions au **même problème**, pas un empilement. Next.js a son propre routeur. Le passage par React Router est assumé comme pédagogique (forme longue avant version compressée) + marché SPA réel.

**Mise en place (autonomie)** : `npm i react-router` · `BrowserRouter` dans `main.tsx`, correctement placé **à l'intérieur** de `StrictMode` · deux pages de test · `Routes`/`Route` dans `App.tsx` · `Link` + `<nav>` hors de `<Routes>` (barre persistante).

**Trois erreurs corrigées** :

1. `<PageSav />` placé directement dans `<Routes>` sans `<Route>` — l'aiguillage n'accepte que des correspondances.
2. **`path` rempli avec un chemin de fichier** (`./src/components-exercices/PageSav`). Point de fond : le `path` décrit une **URL**, invention libre, sans rapport avec l'arborescence. C'est précisément ce que Next.js masque en imposant la convention fichier→URL.
3. `path="/Sav"` — les URL sont sensibles à la casse, convention = minuscules.

**Notions neuves posées au passage** :

- **Assertion non-nulle `!`** 🟡 — `getElementById("root")!`. N'est légitime que sur une garantie **structurelle** (HTML versionné, constante en dur) ; jamais sur API / saisie / paramètre d'URL. Test : « qui garantit que cette valeur existe ? »
- **Majuscule en JSX = règle syntaxique, pas convention** 🟢 — minuscule → chaîne (`createElement("nav")`), majuscule → variable du fichier (`createElement(Link)`). Piège : `<link>` au lieu de `<Link>` ne produit **aucune erreur**, juste un lien mort.
- Import nommé vs par défaut sur une lib (`{ createRoot }` vs `ReactDOM.createRoot`) 🟢 — tree-shaking, l'import nommé est le standard.
- `npm` = 3 choses (outil / registre / paquet) 🟢 · `PATH` 🟢.

**⚠️ Source périmée de ma part** : `npm install react-router-dom` donné de mémoire, alors que le paquet est unifié en `react-router`. Frédéric l'a détecté sur la doc officielle. **La page Installation de la doc fait foi sur un nom de paquet, jamais ma mémoire.**

**Niveaux** : `BrowserRouter`/`Routes`/`Route`/`Link` 🟡 — **montés une seule fois, avec correction sur 3 points. Fragiles, Frédéric le signale lui-même.** Distinction `path` (URL) vs `import` (fichier) 🟢 (ancrée par l'erreur).

**Convention adoptée** : un fichier de composant porte le nom du composant (`PageSav.tsx`).

**🎹 Raccourci** : `Ctrl+.` reconduit cette séance — **rotation à la prochaine**.

**💡 Idée de Frédéric pour la suite** : remplacer le système commenter/décommenter de `App.tsx` par un **menu de navigation vers chaque exercice** du `projet-vite-local`. Excellent terrain : besoin réel, autant de routes que d'exercices, pratique en quantité de `Route`/`Link` sans exercice artificiel. **À faire en priorité S68.**

**⏭️ Prochaine étape** :

1. Refaire le montage React Router **en page blanche** (fragile, vu une seule fois).
2. Menu de navigation vers les exercices (idée de Frédéric) — consolide le point 1 par la pratique.
3. Puis paramètres d'URL (`/sav/A12`) : liste → fiche, motif de base des apps de gestion.
4. En attente : projet CSS Grid (dette n°1 du socle).

## Session 68 — React Router : menu de navigation + layout Grid

**Durée** : ~3h (dimanche, fixe). Énergie bonne au départ, séance dégradée par mes erreurs de construction.

**Rituel** : `npm install` lancé dans `mon-premier-projet` (pas de `package.json` → `ENOENT`). Rappel : le rituel s'applique **par projet**, `npm install` n'a de sens que là où il y a un `package.json`.

**Révision éclair (`reduce` objet — 4ᵉ passage)** 🔴 : structure entièrement juste (outil, ordre `(acc, m)`, `{}` en 2ᵉ argument, crochets dynamiques, `return acc`). Cassé sur **clé vs valeur** : `m.prix` utilisé comme clé. Puis blocage sur le sens de `=` en JS (« qu'est-ce que `m.prix` vient faire dans `acc[m.marque]` ») → cours donné sur l'assignation (`=` = flèche, pas égalité ; la droite s'évalue d'abord ; `x = x + 1`).
**🗑️ DÉCISION : `reduce` objet sort de la rotation de révision éclair.** 4 passages à froid, aucun ancrage, et un coût moral réel. Cette notion ne s'apprend pas hors sol — elle reviendra quand un exercice produira un vrai chiffre à l'écran.

**⚠️ Mes erreurs de construction (les 3, à ne pas reproduire)** :

1. **Page blanche demandée 24h après le premier contact** avec React Router. Trop tôt — Frédéric n'a pas pu commencer et a dû regarder ses fichiers. Repris en exercice à trous, qui a bien fonctionné.
2. **`reduce` tiré en révision** alors qu'il est démontré qu'il ne s'ancre pas par répétition espacée.
3. **`useParams` enseigné sur un terrain où il ne sert à rien** (15 exercices connus et fixes), avec un **argument DRY faux** : la table de correspondance remplace 15 `<Route>` par 15 entrées d'objet — aucun gain. Frédéric a demandé la justification, le décompte lui a donné raison. Bloc abandonné, retour à la version en dur.

**Exercice à trous — montage React Router** 🟡 : **toute la structure sortie de mémoire** (imports nommés, `BrowserRouter` dans `StrictMode`, `Routes` autour des `Route`, `Link` dans un `nav` hors de `Routes`).
**🔴 Seul point cassé, 2 fois : `path` rempli avec un chemin de fichier** (`./components-exercices/PageSav`). Test donné : « est-ce que ça ressemble à une adresse de site web ? ». **Corrigé seul ensuite en contexte réel** — l'erreur n'est pas revenue sur les 4 routes du menu.

**✅ Menu de navigation vers les exercices (son idée, S67) — livré et fonctionnel.** 4 exercices routés, URL en minuscules à tirets, liens stylés. Remplace le système commenter/décommenter.

**✅ Layout Grid en contexte réel** — dette socle entamée. `grid min-h-screen grid-rows-[auto_1fr]`.

- **Erreur puis correction : `grid-cols-2` au lieu de `grid-rows`.** Repère posé : _cols_ = colonnes = côte à côte ↔ / _rows_ = rangées = empilées ↕. Le mot décrit **la forme de la case**, pas le sens de progression.
- `[auto_1fr]` expliqué deux fois (2ᵉ version par le calcul concret : écran − nav = reste). `auto` = la hauteur qu'il faut · `1fr` = tout le reste, calculé après les `auto` · underscore = contrainte Tailwind (pas d'espace dans un nom de classe).

**Notions posées** :

- **`<Routes>` n'accepte pas `className`** 🟢 — observé seul. Un composant qui ne produit pas de DOM ne peut pas être stylé. `<Link>` l'accepte (il fabrique un `<a>`).
- **DRY en React = composant, pas `@apply`** 🟡 — `@apply` factorise des classes ; un composant factorise classes + balisage + comportement. `@apply` reste légitime pour du style de base sur balises nues (`@layer base`). `index.css` = CSS global (importé par `main.tsx`) ; `App.css` = résidu Vite, à supprimer.
- **`children`** — montrée en passant, **non enseignée**. À poser proprement avant toute factorisation de `LienNav`.
- **Emplacement d'un composant** 🟢 : même fichier tant qu'un seul l'utilise → fichier propre dans `components/` (≠ `components-exercices/`) dès qu'un second en a besoin.
- **`useParams` / `path="/x/:id"`** 🔴 — mécanisme vu fonctionner, **non compris et non ancré**. Le critère, lui, est acquis : liste **fixe** connue à l'écriture → une `Route` par élément ; liste **variable** (API, base) → paramètre. **À recroiser uniquement sur un vrai cas API (liste → fiche), jamais à vide.**

**Niveaux** : montage React Router 🟡 (structure sortie seule en guidé, pas encore en page blanche) · `Route`/`Link` en quantité 🟢 (4 écrites sans aide) · URL vs chemin de fichier 🟢 (corrigé en contexte réel) · Grid `rows`/`cols` 🟡 · `1fr` 🟡.

**⚠️ Fin de séance difficile** : « ça a juste eu pour effet de me faire douter de mon niveau réel ». Le doute vient de la construction de la séance, pas du niveau. Points sortis sans aide dans la journée : diagnostic `grid-cols`, 4 routes complètes, layout Grid, observation sur `<Routes>`, et **détection que mon argument DRY était faux** (il a demandé la justification, le décompte lui a donné raison).

---

## 🏖️ CONSIGNE VACANCES — 3 semaines à partir du 04/08/2026

**Instruction explicite de Frédéric, à respecter strictement.**

- **Semaines 1 et 2 : AUCUNE notion nouvelle.** Ni React Router, ni Next.js, ni `children`, ni `useParams`, ni quoi que ce soit d'autre. **Consolidation uniquement.**
- Objectif énoncé : _« me sentir plus solide sur mes appuis »_.
- Sessions **irrégulières** : semaine 1 en déplacement familial (laptop emporté, sessions du soir seulement si tout le monde est couché et si l'énergie y est), semaine 2 à la maison. Ne pas présumer d'un rythme, ne pas relancer sur des sessions manquées.
- Semaine 3 : à décider

## Session 69 — Scaffolding complet + React Router en page blanche

**Durée** : ~2h15 (laptop, semaine 2 de vacances). Énergie bonne. Retour après 8 jours d'arrêt.

**Révision éclair (`sort()` avec comparateur)** 🟢 : comparateur produit juste et sans hésitation (`(a, b) => a.prix - b.prix`) — le blocage de la S65 (flèche oubliée) n'est pas revenu. Une imprécision de vocabulaire corrigée : « la référence est modifiée » → non, **la référence reste constante, c'est le contenu qui est réorganisé en place** (d'où `const` qui ne proteste pas). Cours condensé redonné à sa demande. → sort de la rotation.

**Cap de la séance** : montage d'un projet neuf de bout en bout (`projet-examen-blanc`), le geste le moins réactivé du parcours — dernier montage remontant à l'apprentissage de Vite.

**Scaffolding — 6 étapes livrées** : Vite + React + TS · Tailwind v4 · Prettier + plugin · nettoyage · Git local · dépôt distant relié.

- **Choix TypeScript vs TypeScript + React Compiler** : question posée avant d'agir. Écarté — le compilateur automatise `useMemo`/`useCallback`/`React.memo`, tous ❌ au curriculum. **À revoir après ces trois notions**, c'est aujourd'hui l'hypothèse par défaut du marché.
- **Erreur corrigée** : `@tailwindcss/cli` installé par réflexe Phase 1 au lieu de `@tailwindcss/vite`. Diagnostiqué et réparé (`npm uninstall`) sans aide.
- **🔴 Vrai blocage (~20 min) — le CSS de démo Vite écrase Tailwind.** `text-red-500` présent mais **barré** dans les DevTools, battu par un `h1, h2 { color: var(--text-h) }` du scaffold. Point de fond : **Tailwind v4 range tout son CSS dans des cascade layers ; un CSS hors layer gagne toujours, quelle que soit la spécificité.** Correction : vider `index.css` pour ne garder que `@import "tailwindcss"`. Le preflight se faisait démonter par le même mécanisme.
- **Prettier introuvable dans la doc Tailwind** — normal, ce n'est pas un outil Tailwind. **Leçon de méthode** : la doc d'un paquet npm est son README (npmjs.com / GitHub du paquet), pas la doc de l'outil voisin.
- **Git** : `init` via le panneau Source Control, puis `remote add` + `push -u` au terminal. Passage `master` → `main` assumé après avoir demandé la justification (aucune différence technique, exposition marché).

**Questions de fond posées** (toutes traitées) : `dependencies` vs `devDependencies` et le rôle de `-D` · `prettier` et `prettier-plugin-tailwindcss` = deux paquets distincts · **l'extension VS Code embarque sa propre copie de Prettier — le projet, lui, n'a rien tant qu'on n'installe pas localement** · `main` vs `master`.

**✅ Dette S67 soldée — montage React Router 🟢.** `main.tsx` puis **`App.tsx` écrit intégralement en page blanche, 0 problems, aucune correction** : imports nommés, `BrowserRouter` dans `StrictMode`, `<nav>` hors de `<Routes>`, `path` en minuscules ressemblant à des URL, correspondance exacte `to` ↔ `path`. Le geste n'avait jamais été produit sans squelette. **Le `path` rempli avec un chemin de fichier — erreur revenue 2× en S68 — n'est pas réapparue.**

**Notions éclaircies sur demande** : `<Link>` vs `<a href>` (preventDefault + History API ; produit un vrai `<a>` pour l'accessibilité et le clic droit) · définition de `path` (motif d'URL inventé, indépendant de l'arborescence ; `path` et `to` = deux extrémités du même fil) · **`/` initial = chemin absolu** (sans lui, relatif à l'URL courante) · aucune route par défaut : URL non reconnue = page vide sans erreur.

**Écart doc React Router relevé par Frédéric** : la doc met `Routes` dans `main.tsx` et branche `App` comme page ; notre structure met `Routes` dans `App` qui devient le **layout**. Les deux valides — seule contrainte réelle : `BrowserRouter` enveloppe tout ce qui utilise le routeur. La structure layout est celle qui permet une nav persistante.

**Montré, non enseigné** : `NavLink` (`className` en fonction recevant `{ isActive }`) — écarté volontairement, notion nouvelle.

**⚠️ Erreur de ma part (§9 bis, récurrence)** : j'ai affirmé que le `text-red-500` s'affichait en rouge sur une capture où le texte était **blanc**, et j'ai bâti un diagnostic dessus. Frédéric a recadré. **Ne pas trancher sur une couleur perçue dans une image compressée — demander les fichiers ou le DevTools.**

**Signalé au passage** : message de commit généré par l'IA de VS Code → réécrit à la main (même logique que Copilot désactivé).

**Niveaux** : montage React Router 🟢 (page blanche complète, propre) · scaffolding projet complet 🟢 · cascade layers Tailwind vs CSS hors layer 🟡 (ancré par un vrai blocage) · `Link` vs `<a>` 🟢 · `path` = URL 🟢 · `/` absolu 🟡 · `dependencies`/`devDependencies` 🟢 · `sort()` 🟢.

**🎹 Raccourci** : `Ctrl+.` — peu d'occasions pendant le scaffolding. **Rotation à la prochaine séance.**

**⏭️ Prochaine étape**

1. **Séance suivante, en ouverture** : définir ensemble l'organisation de `projet-examen-blanc` comme support de consolidation/validation — périmètre à trancher (Phase 2 seule ou Phase 1 + 2), et **page d'accueil propre distribuant vers chaque notion/exercice**.
2. Consolidation vacances : réviser, renforcer, valider sur un périmètre large — pas seulement les dernières sessions.
3. **Après les vacances** : approfondir **React Router mode Declarative** (demande explicite de Frédéric — marché SPA réel sans Next.js).
4. Toujours en attente : projet CSS Grid (dette n°1 du socle) · `children` (non enseigné) · `useParams` sur un vrai cas API.

## Session 70 — Organisation `projet-examen-blanc` + démarrage calculatrice

**Durée** : ~3h (vendredi, semaine 2 de vacances). Énergie bonne. Séance de consolidation stricte, aucune notion neuve — conforme à la consigne vacances.

**Révision éclair (`position: fixed` + contexte parent)** 🔴 : **même inversion qu'en S64** — « fixed se fixe par rapport au parent direct ». Deuxième passage identique → règle des trois échecs appliquée par anticipation, cours complet redonné (`fixed` vise le **viewport** ; `transform`/`filter`/`backdrop-filter`/`will-change`/`contain` sur un ancêtre créent un bloc conteneur qui **capture** les descendants `fixed`). La conclusion pratique était juste, la règle sous-jacente fausse. **Reste en rotation.**

**⚠️ Audit exercices types intégré** (livré entre S69 et S70) : recommandation n°2 retenue comme cap du jour. Le Pokédex liste→détail (reco n°1) attend la semaine 3 car il repose sur `useParams` = notion neuve.

---

### 1. Organisation de `projet-examen-blanc` — tranchée

**Périmètre** : React + TS + Tailwind uniquement. Pas de DOM vanilla séparé — le socle Phase 1 se rejoue **dans** les composants (sémantique, Grid, méthodes de tableau, `fetch`).

**Structure actée** : `pages/` (une page routée par exercice) · `data/exercices.ts` (source unique) · `components/` réservé aux composants réellement partagés.

**`App.tsx` = layout permanent** : lien home + `<Routes>`, layout Grid `grid-rows-[auto_1fr]`. `Accueil` = page routée sur `/`, sans statut particulier.

**Ajout d'un exercice = 3 gestes** : créer la page → ajouter une `<Route>` → ajouter une entrée au tableau. Le tableau ne remplace **pas** les routes (correctif explicite de mon erreur DRY de la S68).

**🎓 Blocage d'architecture — le vrai contenu de la séance** : Frédéric plaçait nav + bouton home + `<Routes>` dans `Accueil`, en raisonnant « page d'accueil = point d'entrée » (réflexe `index.html`). Débloqué par les conséquences (boucle infinie, puis perte de la nav au changement de page). **Point posé** : `<Routes>` est une fenêtre qui remplace son contenu → ce qui doit survivre à la navigation vit **au-dessus**. Critère retenu : « cet élément doit-il rester visible quand je change de page ? »

Chaîne `index.html → main.tsx → App.tsx → pages` détaillée à sa demande, ainsi que `<script type="module">`, le chaînage `createRoot(...).render(...)` (forme longue donnée) et la logique des **enveloppes** (`StrictMode`, `BrowserRouter` : une enveloppe contient tous ceux qui s'en servent).

**Décision de design** : carte entièrement cliquable — critère énoncé seul et correct (_la zone de clic doit correspondre à ce que l'œil perçoit comme cliquable_).

**⚠️ Erreur de ma part** : j'ai reconduit une `<nav>` dans `App.tsx` sans la questionner, alors que sa demande initiale ne mentionnait qu'un bouton home. Doublon avec la liste d'accueil. Corrigé après qu'il l'ait relevé. **Récurrence de « demander avant de reconduire » (§9 bis), version design.**

---

### 2. `Accueil.tsx` — page blanche

`.map()` sur `EXERCICES`, `to={path}` branché sur la donnée, structure sortie seule.

- **🔴 `key` oubliée — 3ᵉ fois (S64, S70).** Aggravant : justification explicite (« c'est moi qui ajoute en dur, donc pas important »). **Raisonnement à corriger : la `key` ne dépend pas de l'origine des données.** Réflexe à réinstaller : `key` posée dans la foulée du `.map()`, avant le contenu.
- **🌟 Initiative non demandée** : a proposé de déstructurer directement dans le callback — `({ path, titre, description }) => ...`. Correct, plus propre que ma version, connexion faite seul avec la déstructuration des props (S60). **Sa version retenue.**
- `<article>` autour d'un `<Link>` : imbrication corrigée. Test S61 réappliqué.
- `flex` sans `flex-col` alors qu'il voulait un empilement vertical.

---

### 3. Calculatrice — machine à états (démarrée)

Version 2 validée (afficheur + pavé complet), pas la version « deux champs » qui n'aurait rien drillé. **Comble la famille logique pure, seul vrai trou du canon selon l'audit.**

**✅ Les trois états trouvés — la partie difficile de l'exercice.** Première proposition en `premier`/`second`/`resultat` (découpage par nombre) → reformulée en **rôles** après mise à l'épreuve sur le scénario : `affichage` / `memoire` / `operateur`. Corrections mineures : nommage (un état porte une donnée, pas une action) · valeur de départ `"0"` et non `""`.

**Choix du type chaîne pour l'afficheur** compris via « une variable = un rôle = un type » (S61).

**`<table>` écarté** pour le pavé — critère données tabulaires vs mise en page réappliqué correctement une fois posé. Pavé en `grid grid-cols-4` → entame la dette Grid.

**Arrêté à** : le handler `tapeChiffre` — deux questions posées, non traitées (quel état signale qu'un opérateur vient d'être pressé, et ce test suffit-il après un `=`).

---

**Niveaux** : architecture `main`/`App`/pages 🟢 (débloquée par un vrai contresens) · `<Routes>` = fenêtre, layout au-dessus 🟢 · `.map()` + `Link` sur source unique 🟢 · déstructuration dans un callback 🟢 · `key` 🔴 · identification des états d'une machine à états 🟡 (trouvés avec une reformulation, premier contact) · `position: fixed` 🔴.

**🆕 Dettes ouvertes ce jour** :

- **Generics / `useState<T>`** — demandé explicitement, non enseigné (l'inférence suffit ici). À traiter après React Router. Rejoint la dette S67.
- **`<table>`** — souhaite le repratiquer, peu vu. À caler sur un exercice à vraies données tabulaires.
- `useLocation` (masquer le lien home sur l'accueil) — écarté, notion neuve.

**🎹 Raccourci** : `Ctrl+.` — **non joué cette séance, rotation toujours en attente.** À demander en ouverture s'il est acquis avant d'en poser un nouveau.

**⏭️ Prochaine étape**

1. **Reprendre la calculatrice** au handler `tapeChiffre` (les deux questions en suspens).
2. Puis : opérateurs, `=`, `C`, cas limites (zéro en tête, chaîne d'opérations).
3. Habillage de l'accueil + pavé en Grid — bon créneau basse énergie, entame la dette CSS Grid.
4. **Semaine 3 (à partir du 18/08)** : décision à prendre sur la reprise des notions neuves — `useParams` sur Pokédex liste→détail (reco n°1 de l'audit) et approfondissement React Router Declarative.

## Session 71 — Calculatrice terminée (machine à états complète)

**Durée** : ~2h (soir, PC fixe). Suite directe de la S70, même journée.

**Pas de révision éclair** (séance de continuité, reprise en cours d'exercice).

---

### Calculatrice — terminée et fonctionnelle

**✅ Sorti seul** : les 4 fonctions identifiées par nature de touche (déduction correcte, `efface` en plus après signalement) · structure `switch` complète et juste du premier coup · `tapeChiffre` avec ses deux branches · ternaire du zéro initial (`affichage === "0" ? chiffre : affichage + chiffre`) · pavé complet en `grid grid-cols-4`, `type="button"` posé spontanément · **`<table>` écarté seul** après rappel du critère.

**🔴 Blocages — tous sur du React ancien, pas sur la logique du jour** :

1. **Le contrat `void` des handlers, 3ᵉ fois** (S64, S67, S70-71). `switch` écrit avec `memoire + affichage;` — calcul produit puis jeté, aucun setter. Même famille d'erreur que `return liste.map(...)` en S64. **Le setter va DANS la fonction.** À recroiser.
2. **Handlers qui écrivent dans le mauvais état** : `tapeChiffre` alimentait `memoire`, puis `tapeOperateur` a écrit deux fois dans `affichage` (`memoire + operateur`, puis `""`). Point posé : **chaque fonction n'écrit que dans les états dont elle a la charge.**
3. **Lecture d'un état juste après son setter** dans la même fonction — la photo figée du rendu (S53). Ressorti deux fois.
4. **`!nouveauNombre` au lieu de `true`** : `!x` est fait pour un **basculement**, pas pour une affirmation. Casse sur deux appuis d'opérateur consécutifs.
5. **Coercion string/number** non anticipée : `"12" + "7"` = `"127"`. `Number()` avant, `String()` après.
6. **Un opérateur ne se stocke pas dans une variable** — `a + operateur + b` produit du texte. Il faut tester et écrire les 4 calculs à la main.

**🎓 Question de fond posée — « faut-il un 5ᵉ useState ? »** : critère redonné (un état est nécessaire seulement si l'information n'est pas recalculable depuis les autres). A tranché lui-même pour l'historique persistant après `=`, cas où l'état est effectivement justifié puisque `memoire`/`operateur` sont vidés. **Distinction state vs donnée dérivée réactivée correctement.**

**Fin donnée en entier sur demande** : `calcul()` complète, `efface()`, la ligne `saisie` (donnée dérivée), le JSX de l'afficheur.

**Retour sur `saisie`** : demande explicite de dépliage → forme longue (`if`/`else` + concaténations) donnée avant la version compressée. Template literal 🟢, ternaire dans `${}` 🟢 (même contrainte que les accolades JSX : une valeur, pas une instruction).

---

**✅ Trou de l'audit comblé** : famille logique pure (machine à états, cas limites) — était le seul vrai manque du canon. Quiz / pendu / memory restent ❌ mais le mécanisme central est désormais pratiqué.

**Niveaux** : identification des états d'une machine à états 🟡 (trouvés avec reformulation) · `switch` 🟢 (structure juste sans aide, **sort de la rotation**) · contrat `void` des handlers 🔴 — **3ᵉ récurrence, priorité n°1** · lecture d'un état après son setter 🟡 · coercion string/number 🟡 (neuf en pratique) · state vs donnée dérivée 🟢 · template literal 🟢 · Grid `grid-cols-4` en contexte réel 🟢.

**📌 Reste sur l'exercice** (non fait, optionnel) : habillage Tailwind de l'afficheur · division par zéro · opérations enchaînées sans `=` · **factorisation des 16 boutons en composant `Touche`** — terrain DRY signalé, mécanisme déjà acquis (props + prop fonction, S64), bon exercice à part entière.

**📌 À vérifier en ouverture** : la calculatrice a-t-elle été ajoutée à `EXERCICES` et à `App.tsx` (le 3ᵉ geste de la règle d'ajout) ?

**🎹 Raccourci** : `Ctrl+.` — non joué sur les deux séances. **Demander s'il est acquis avant d'en poser un nouveau.**

**⏭️ Prochaine étape**

1. Recroiser le **contrat `void` des handlers** — page blanche courte, 3ᵉ récurrence.
2. Habillage de l'accueil + de la calculatrice (créneau basse énergie, Tailwind solide).
3. **Semaine 3 (à partir du 18/08)** : décision sur la reprise des notions neuves — `useParams` sur Pokédex liste→détail, approfondissement React Router Declarative.
4. Toujours en attente : projet CSS Grid · `children` · generics (`useState<T>`) · `<table>`.

**📝 Edit post-séance (retour de Frédéric)**

Frustration exprimée en fin de séance : _« j'ai beaucoup galéré sans trouver la réponse, la logique ne venait pas alors que la technique est connue. »_

Recadrage donné, à conserver pour le calibrage : **c'est le premier exercice du parcours sans motif à reconnaître.** Tous les précédents fournissaient la logique (afficher, filtrer, transformer, envoyer) ; il ne restait qu'à brancher le mécanisme. Ici il fallait inventer le comportement — décider ce que le composant doit retenir, quand et pourquoi. Compétence distincte, jamais entraînée, dont c'était le premier contact. **La difficulté ressentie confirme le diagnostic de l'audit, elle ne mesure pas le niveau.**

**Mesure réelle reportée** : refaire la calculatrice en page blanche dans quelques jours. C'est ce passage-là qui vaudra verdict, pas celui-ci.

**🎯 Décidé pour la prochaine session — refactor DRY de la calculatrice** (demande de Frédéric, à faire en priorité)

Zéro notion neuve, conforme à la consigne vacances. Deux niveaux, dans l'ordre :

1. **Composant `Touche`** (props `label` + `onClick`) — la chaîne Tailwind vit à un seul endroit. Échauffement.
2. **Tableau `TOUCHES` + `.map()`** — même pattern que `EXERCICES` sur l'accueil, mais plus exigeant : il faut décider quel handler chaque touche déclenche. C'est le vrai exercice.

Recroise au passage le **contrat `void` des handlers** (récurrence n°1) sur un terrain déjà connu.

---

**🗺️ Famille logique pure — suite du programme (après consolidation de la calculatrice)**

Exercices partageant le même mécanisme (un état invisible qui décide du comportement), par proximité décroissante :

- **Quiz / QCM** — index courant + score ; le même bouton fait deux choses selon qu'on a répondu ou non. **Recommandé comme prochain de la famille** : tableau d'objets typé (terrain fort), résultat présentable en portfolio sur un thème optique.
- **Jeu de mémoire** — mémoriser la première carte + délai avant retournement. Ajoute la dimension temps.
- **Pendu / devine le nombre** — état de partie, tentatives, conditions de fin. Le plus exigeant.
- **Carrousel** — index circulaire, modulo. Le plus rapide (~20 min), jamais fait.

⚠️ **Ne pas confondre** : convertisseur d'unités, calcul de RAC, pourboire = **calculs dérivés**, pas des machines à états. Ils ne drillent pas la même chose.

**Ordre retenu** : consolider la calculatrice (refactor puis page blanche) **avant** d'ouvrir un nouvel exercice de la famille.
