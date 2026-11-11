# 📓 Journal de progression — Phase 2

**État arrêté à la Session 141 · 4 novembre 2026 · ~414h de formation (estimé)**

> ⚖️ **Temporalité** : le §7 des instructions porte la carte de niveau par domaine, **datée S141**. Ce journal ne la redouble pas — il la **corrige au fil des séances**. En cas de divergence, **la source la plus récente fait foi** : une entrée de session postérieure prime sur le §7, sans qu'il soit nécessaire de réécrire les instructions.

> **Documents de référence** — `Archive-progression-Phase2-ter.md` (S94→S141) · `Archive-progression-Phase2-bis.md` (S60→S93) · `Archive-progression-Phase2.md` (S36→S59) · `Archive-progression-Phase1.md` (S1→S35) · `dettes-apprentissage.md` (registre, actualisé S119 bis — ⚠️ **5 lignes périmées depuis S129**, voir plus bas) · `audit-exercices-types.md` (partie A vérifiée, partie B non sourcée) · `revision.md` (mesures fin Phase 1) · `Projets_realises_Frederic_S119.md` (⚠️ à régénérer : Shopping Cart, calculatrice `useReducer`, Memory Card `@keyframes`).
> Les archives sont consultables directement : pour tout détail sur une séance ou une notion antérieure à la S137, aller les lire plutôt que reconstruire de mémoire.
> *Compte d'heures : ~357h au 08/10 (S119 bis) + ~57h calculées sur les durées notées de S120 à S141.*

---

## 🧭 Où on en est — Phase 2

**Séquence Phase 2** : React ✅ → TypeScript des props ✅ → React Router (mode Declarative) ✅ → **bloc React complet ✅** → **Todo List (Odin) 🔄** → **`class` / `this` 🔄** → **Library (Odin), JS pur** → traduction composant classe → hooks → **Next.js** → base de données + authentification → Zod + React Hook Form → shadcn/ui → **SaaS optique** → tests, puis déploiement → Figma → Phase 3.

**🎯 Cap décidé (S119 bis)** : **fin de Phase 2 au 31 janvier 2027**, puis Phase 3 allégée (une fonctionnalité IA greffée sur le SaaS). Pas de retard réel : le planning d'origine était ambitieux, aucun impératif de délai. Critère de candidature : « compétent et confiant », à traduire en conditions concrètes en fin de Phase 2.

**Ce qui a été fermé depuis la S93** :
- **Bloc React avant Next.js** : `children`, `useRef`, Context API, hooks personnalisés, `useReducer` (+ union discriminée), `useMemo` / `useCallback` / `React.memo`, portails, `<dialog>`, propagation des événements, ErrorBoundary (`react-error-boundary`).
- **Projets canoniques** : Memory Card (S101→S104, + secousse `@keyframes` S133-S134) · Shopping Cart (S106→S119, + dark mode en Context et audit accessibilité S131-S132) · calculatrice passée en `useReducer` + mémoïsation (S130).
- **Dettes du registre soldées** : Git branches + PR (cycle refait seul S104) · coercion + hoisting + `var` · Debugger Chrome (pratiqué S105, à refaire au prochain vrai bug) · `<table>` · types fonction avec paramètres · `unknown` / `instanceof` · `localStorage` · `Promise.all` / `.then` · `@keyframes` · `clamp()`.

**En cours** : Todo List cadrée (énoncé vérifié, mise en page mobile first conçue, branche `todo-list` poussée) · séance `class` / `this` étapes 1 à 5 faites + erreur personnalisée, `bind` à reprendre.

**Domaines verrouillés 🔒 (mode entretien, ne pas réenseigner)** : `useEffect` (S55) · socle fetch async/await (S90) · TS des props (S64) · React Router Declarative (cycles fermés S105-S110) · `useRef` (cycle fermé S108) · Context API + hook personnalisé (cycle fermé S131, écrit seul sur 3 terrains) · circuit `useReducer` + Context (écrit seul S128, N+5 tenu S130).
⚠️ Le verrou porte sur le **mécanisme**, pas sur les APIs navigateur qu'on y branche — celles-là s'oublient.

---

## 🔥 Dettes chaudes

_Ce ne sont plus des notions incomprises, mais des **règles sues qui ne se déclenchent pas au clavier**. Le remède est la pratique en contexte, pas le réenseignement._

**Réflexes non déclenchés à l'écriture**

- **Tri des dépendances** (`useEffect` / `useMemo` / `useCallback`) 🔴 — règle posée en cours complet S131 (lu **et** peut changer d'un rendu à l'autre ; l'origine d'une prop ne compte pas). Juste sur du vrai code S132 et S134, **rechute S141** : props exclues parce que « fournies par le parent ».
- **`??` vs `||` entre deux conditions** 🔴 — `??` posé entre deux comparaisons (S141). Repère : comparaisons des deux côtés → `||` ; `??` ne sert qu'à une valeur par défaut sur `null` / `undefined`.
- **`bind`** 🔴 — oublié en deux jours (S141). **Petit cours demandé en ouverture.**
- **`memo` : la raison** 🟡 — résultats justes, raison fausse deux fois (S135, S136), juste S137. Geste : lire la balise de l'enfant, prop par prop, « même référence qu'au rendu précédent ? ».
- **State = donnée, pas phrase** 🟡 (S138).
- **Vider l'état opposé dans `try` / `catch`** — sorti (décision S139), à surveiller.

**Familles récurrentes à surveiller**

- **Setter mal placé** — setter dans le corps (S104), setter appelé dans `value` (S117). Le setter va **dans** une fonction appelée par un événement.
- **Consigne lue trop vite** — étapes sautées (`console.log` demandé non posé S129, prédiction non faite S141). Pas une incompréhension, mais une mesure perdue.
- `return` oublié / `return` seul sur sa ligne / `undefined` + nombre → `NaN` : **connus, sortis de rotation** (décision post-S140). Un oubli ponctuel n'est pas un manque de connaissance.

**Neuf, un seul passage — ne pas surévaluer**

- `extends` / `super` / `extends Error` + `this.name` 🟢 (juste du premier coup S141, un passage) · pourquoi `super` avant `this` 🟡.
- Fonction rangée dans un objet 🟡 (« ça me perturbe », S141).
- `onReset` vs `resetKeys` 🟡 (expliqué S139, non pratiqué) · `Array.isArray` / `every` 🟡 · `inert` 🟡 · `focus-visible` 🟡.

---

## 🔁 Cycles de reprise ouverts

_Règle §6 : ouverte en N → rejouée en N+2 → puis en N+5. Une notion ouverte passe **avant** l'ouverture d'une nouvelle._

| Notion | Ouverte | Prochaine reprise | État |
|---|---|---|---|
| `class` / `this` / `extends` / `super` | S140-S141 | **N+2 ≈ S143**, puis la Library | 🟢 écrit seul, `bind` 🔴 |
| `bind` | S140 | **ouverture S142** (cours + exercice court) | 🔴 oublié |
| `<dialog>` / `showModal()` | S135 | **N+5 ≈ S143** | 🟢 sans squelette S138 |
| Propagation + ErrorBoundary | S137-S138 | **N+5 ≈ S144** | 🟢 N+2 tenu S139 |
| Portails (`createPortal`) | S135 | à recroiser (N+2 non joué) | 🟡 |
| `@keyframes` / `animate` | S133-S134 | ⚠️ **N+5 ≈ S139 dépassé** — demande explicite de recroiser | 🟡 « pas du tout acquis » (ressenti) |
| `Map` / `Set` | rotation | à froid (relu avant de répondre S141) | 🟡 |

---

## 📋 File d'attente des notions repoussées

_Liste **complète**, triée par importance. À croiser avec `dettes-apprentissage.md` lors de sa prochaine mise à jour._

### 🔴 Groupe 1 — prérequis réels de la suite (à programmer)

- **Todo List (Odin)** en React + TS, hooks — greffes prévues : fonction factory `creerTodo` · reducer + fonctions pures (« séparer la logique du DOM ») · `localStorage` validé (motif `lirePanier`) · **`reduce` accumulateur objet** (compteur par projet) · **dates** (`Date` natif ou `date-fns`, à décider ensemble) · **erreur personnalisée** (`class ErreurDonnees extends Error`). Pas de tests, pas de déploiement.
- **Library (Odin), JS pur** — écrire des classes. **Avancée avant Next.js** (décision S140).
- **Traduction composant classe → fonction + hooks** — après la Library (lire du React d'avant 2019).
- **Event loop** · **récursion** — créneaux courts. Le « `setTimeout` planifie, ne bloque pas » (S134) est l'entrée de l'event loop.
- **Exercices de typage TS réguliers** — demande explicite S86. Axe de travail continu, pas une dette.
- **Utility types au-delà des quatre** — décision S81/S86 : **en lecture uniquement**, avant la phase de candidature.

### 🟡 Groupe 2 — après Next.js / au moment du SaaS (ne pas encombrer l'ouverture de séance)

- Zod + React Hook Form · shadcn/ui (prérequis déjà acquis : Tailwind, `cn()`, tokens par rôle).
- **Tests** (Vitest, React Testing Library, Playwright) — **avant le déploiement du SaaS**.
- **CI simple** (GitHub Actions : lint + typecheck + tests) + **Sentry** — fin de Phase 2, au déploiement (décision S139).
- **React Compiler** — décision d'activation au moment du SaaS (v1.0 stable, supporté par Next.js 16, source vérifiée S129).
- **Figma** — en Phase 2, avant le passage en Phase 3.
- Regex (formulaires du SaaS) · `IntersectionObserver` version React · `useErrorBoundary` · `useOutletContext` (acquis en usage, non revu depuis Shopping Cart).
- `peer` (Tailwind) · `@utility` (v4, non vérifié) · CSS d'impression (`@media print` / `print:`) — écarté volontairement S88.

### 🗑️ Item mort — à retirer

- Aucun cette fois. Retirés lors de cette refonte car soldés : `children`, `useRef`, `<table>`, Git branches + PR, `useReducer`, `useMemo` / `useCallback` / `React.memo`, Context API, custom hooks, types fonction avancés, `unknown` / `instanceof`, hoisting.

---

## 🔄 Rotation de révision éclair active

Une révision éclair = **2 à 3 items, tous avec du code** (écrire 3 à 15 lignes · déboguer · prédire), ~15 min. Jamais sur le sujet du jour, **jamais la même question d'une séance à l'autre** (même notion, autre code). Une réponse juste formulée avec ses mots est une réponse juste.
**Décision post-S140** : la rotation sert à **entretenir la mémoire dans le temps**, pas seulement à réparer des échecs. Les notions neuves du jour y entrent quelques jours après leur ouverture.

**🔴 Priorité haute**
- Tri des dépendances (`useEffect` / `useMemo` / `useCallback`) — rechute S141
- **`bind`** (cours en ouverture S142) · `this` : devant le point / dans `new` · flèche vs `bind`
- **`??` vs `||`** : valeur par défaut / « ou » entre deux conditions (S141)
- Mémoïsation : gardien / fournisseur · `useMemo` rôle 1 / rôle 2 · objet littéral = nouvelle référence · un composant se rend en entier
- `Map` et `Set` (demande, à froid)
- `FormData`
- `Object.assign` / `structuredClone` (demande)
- Reducer : sources de valeur (`etat` / `action` / constante) · état initial « en chargement » · annotation de `ETAT_INITIAL` · reducer pur · ordre `(état, action)`
- Règle → formule (cas en tableau d'abord)

**🟡 Priorité moyenne**
- ErrorBoundary : ne protège pas le code du parent · `onReset` vs `resetKeys` · `onReset` sur un formulaire vs `onClick`
- `!` assertion vs négation (à confirmer une fois) · `throw` / `try` / `catch` : place du `catch` (à confirmer une fois)
- Erreur personnalisée : `this.name` / `stack` · fonction rangée dans un objet (S141)
- `<dialog>` : `show()` vs `showModal()` · `::backdrop` appartient au dialog · fond blanc par défaut · `m-auto` (preflight)
- `Array.isArray` / `every` · state = donnée, pas phrase
- TS : élargissement des littéraux / annotation de retour · shorthand vs `clé: valeur` · annotation d'un paramètre déstructuré (à confirmer une fois) · Context typé `null` + garde
- `cn()` : paramètre rest, `ClassValue`, ordre `twMerge(clsx())`
- `@keyframes` / `animate` (demande — cycle N+5 dépassé)
- `setTimeout` planifie, ne bloque pas
- Lazy initializer (le *pourquoi*) · `??` sur chaîne vide · template literal qui écrit `null` · précédence `&&` / `||`
- `trim()` · `startsWith` · `contains` / `onFocus` / `onBlur` · setter dans `value` · objet par nom / paramètres par position · `useParams`

**🟢 Priorité basse (entretien)**
- Positionnement : `relative` / `absolute` / `inset-0` · `top-full`, `left-0`, `w-full`, décalages négatifs, `z-10` · `inset-y-0` · `overflow-y-auto` + `min-h-0`
- Flex / grid : flex-grow / shrink / basis · `items` / `self` · `items` vs `justify-items` · `stretch` vs `items-start` en colonne · `mt-auto` + chaîne `flex-1` · `order`
- Texte et image : `truncate` + `min-w-0` + `shrink-0` · `object-cover` · `tabular-nums` · hauteur fixe sur un texte responsive · `clamp()` + `vw`
- Tailwind divers : `border-transparent` au survol · `inline-flex` · sélecteur d'attribut et pseudo-éléments natifs · préfixes `@theme` · propriété vs valeur arbitraire
- CSS : `@layer base` vs hors étage · `@theme` vs `:root` · `:root` = `<html>` · `color-scheme` · CSS pur dans un `@keyframes` · deux durées dans la forme courte · `motion-safe:`
- Accessibilité : `focus-visible` vs `focus` · `inert` · tests clavier hors de l'aperçu VS Code
- Outils : peer dependency / `~` vs `^` · `npm ci` vs `npm install` · chemins `./` / `../` · lien relatif vs absolu · Git `restore` / `revert`
- `.then` en écriture (fetch simple et `Promise.all`), entretien

### Sortis de rotation (à surveiller, ne plus tirer)

`return` oublié / branche silencieuse · `return` seul sur sa ligne · `undefined` + nombre → `NaN` · argument manquant → `undefined` · `react` vs `react-dom` · `<Routes>` n'accepte que des `<Route>` · `.tsx` de composants n'exporte que des composants · `ring` vs `border` · vider l'état opposé dans `try` / `catch` · De Morgan · `toFixed` renvoie une chaîne · `e.key` vs `e.code` (le principe compte, les noms se vérifient dans la doc) · `memo` : lire la balise de l'enfant · élément toujours rendu pour l'animer · `focus-within` · chaînes truthy · coercion `+` et priorité des opérateurs · `var` / `let` · critère de nettoyage d'un effet · `setInterval` / `clearInterval` · `NavLink` / `end` · `fetch` POST · inline vs block · `Object.entries` · `sort()` non mutant · `position: fixed` · `IntersectionObserver` · `slice` / `splice` · `rem` / `px` · échelle Tailwind · closures / valeur-référence / scope · `fn` vs `fn()`.

### 🚫 Interdit de tirage

**`reduce` accumulateur objet** — sorti en S68 après 4 passages à froid sans ancrage. Ne revient que porté par un exercice produisant un vrai chiffre à l'écran : **c'est prévu dans la Todo List** (compteur de tâches par projet).

---

## ⚠️ Points de vigilance actifs

- **Écrire des consignes claires — toujours la récurrence n°1.** Relevé encore en S124, S125 (« avec des consignes floues je ne comprends rien »), S129, S131, S137 (« très mauvaises, de pire en pire »). **Format engagé (S137)** : une consigne = **livrable · résultat attendu à l'écran · tests**, rien d'autre. Compléments qui ont marché : tableau action / données / retour / bouton pour `useReducer` (S124) · visuel ASCII du résultat dès la première consigne (S125) · dans un exercice d'assemblage, indiquer la notion de chaque étape (S126) · écrire le **geste**, pas l'intention (S99) · dire ce qui est un paramètre et ce qui ne l'est pas (S141).
- **Ne jamais donner un exercice sur un mécanisme non enseigné.** Vérifier chaque notion d'un squelette **avant** de l'écrire.
- **Dosage.** L'empilement reste une cause d'arrêt net (S106 `useOutletContext`, S112 positionnement, S120 Context, S129 warning, S139 classes). Redécouper avant de recombiner. **Sur une notion abstraite qui ne passe pas, revenir à une image ou à l'observation, jamais ajouter du mécanisme** (S130).
- **Pas de diagnostic sans la source.** Vider la console avant de lire un résultat de test (S117). Ne pas affirmer de mémoire ce que l'écran peut contredire (S100 `state` au F5).
- **Commencer par ce qui est réussi.** Les encouragements sur un point réussi sont attendus (S105, rappelé S129).
- **Ne pas présenter une préférence comme une correction** (S104), ni proposer la refonte d'un code qui fonctionne en séance tardive (S111).
- **Il se sous-note** — recalibrer vers le haut quand la mesure dépasse l'auto-évaluation. **Symétrie** : un exercice réussi au prix d'un effort long est **fragile**, et le ressenti ne prédit pas la restitution dans les deux sens (S103).
- **Fatigue de fond.** Vérifier l'énergie **avant** de charger, caler le lourd sur les créneaux frais. Il signale lui-même ses blocages — le prendre au mot.

**Règles de travail** : toutes remontées dans les instructions du projet lors de la refonte S141 (§1, §2, §5, §6, §9, §10). Ne pas les chercher ailleurs.

**🎹 Raccourci en cours** : `Alt+Maj+M` (Emmet : Remove Tag, assigné manuellement, fonctionne sur un fragment `<>`). Actés depuis S93 : `Ctrl+Maj+L` · `Alt+Maj+↓` · `Ctrl+Entrée`. Abandonnés : `Ctrl+Maj+\` · Remove Brackets.

---

## ➡️ Prochaine étape

1. **Petit cours `bind`** en ouverture, avec un exercice court.
2. **Todo List** : glissement des panneaux (mobile ~375 px puis `md`) + `types.ts` (`Priorite`, `Todo`, `Projet`, `EtatTodo`, `ETAT_INITIAL` + la phrase « comment une tâche sait à quel projet elle appartient »).
3. Reprise `class` / `extends` (N+2 ≈ S143), puis la **Library**.
4. À glisser en reprise : `<dialog>` (≈ S143) · propagation + ErrorBoundary (≈ S144) · `@keyframes` (dépassé).
5. Registre `dettes-apprentissage.md` à mettre à jour en fin de chapitre React : Context API, hooks personnalisés, `useReducer`, `useMemo` / `useCallback` / `React.memo` soldés ; ajout ESLint de `projet-vite-local` réparé (S132).

Vérifier l'énergie en ouverture.

---

---

# Sessions

## Session 137 — Propagation des événements (fermeture du dialog au clic sur le fond) + ouverture d'ErrorBoundary

**Durée** : 2h (mercredi). Énergie bonne au départ, **agacement en fin de séance** (assertion `!`, consignes).

**🎹 Raccourci** : `Alt+Maj+M` (Emmet : Remove Tag) — utilisé une fois, « pratique ». Reconduit.

**Git deux machines** : versions `node` / `npm` non comparées (resté sur le portable jusqu'au week-end). **À demander au changement de PC**, avec l'adoption de `npm ci`.

---

### Révision éclair (2 items)

- **Prédire — `memo`** 🟢 : 3 rendus, **props prises une par une sur la balise de l'enfant**, `VERRES` et `choisir` éliminés, objet littéral identifié, deux corrections justes. **Le point raté en S135 et S136 ressort seul.**
- **Déboguer — `try` / `catch`** 🟡 : `setErreur` manquant dans le `try` trouvé. Cas symétrique (`setResultat(null)` dans le `catch`) non vu. **Consigne ambiguë de ma part** (relevé par lui).

### 1. Propagation des événements — notion neuve, ouverte

- **Remontée** 🟢 2/2 · **`e.target` vs `e.currentTarget`** + test `target === currentTarget` 🟢 2/2 (dont la marge intérieure).
- **Dialog** : un clic sur `::backdrop` est attribué au `<dialog>` lui-même · piège du padding du dialog · parade : dialog `p-0`, contenu dans une `div` intérieure.
- **Écrit avec un indice** (squelette à deux trous) : **early return** `if (e.target !== e.currentTarget) return;` choisi de lui-même 🟢. **Lecture de sa propre condition inversée difficile** → tableau des deux cas (`currentTarget` vaut toujours le dialog) 🟡.
- **Bords blancs remarqués par lui** → fond blanc par défaut du dialog visible dans les coins (`bg-transparent`) · `backdrop:bg-black/50` déplacé par erreur sur la `div` (le `::backdrop` appartient au dialog). Règle : la boîte → la `div` · la fenêtre modale → le dialog. **5 tests passés.**
- Question : `onClick` sur tout ? → oui techniquement, mais une action va sur un `<button>` (clavier) ; le fond du dialog est un raccourci souris acceptable (Échap au clavier).
- **PR + fusion de la branche : à confirmer.**

### 2. ErrorBoundary — ouvert

- **Décision prise ensemble : `react-error-boundary`** (option A). La classe écrite à la main empilerait `class` / `this` / `extends` / `static`. Classes prévues avec le projet Library. _Sources : articles concordants + ancienne doc officielle ; page react.dev non lue directement._
- **Attrapé / non attrapé** : rendu ✅ · `onClick` ❌ · code différé ❌ (b et c justes). Repère : erreur de rendu → ErrorBoundary · erreur d'action ou d'attente → `try` / `catch`.
- 🔴 **Assertion `!` non comprise** : lue comme une garde. Deux `!` distingués (`!verre` JS = test · `verre!` TS = effacé), **sans succès, agacement**. Laissé de côté au profit de l'observation à l'écran.
- **Exercice préparé seul** (`Exercice-ErrorBoundary.tsx`) : structure juste, ErrorBoundary autour de la carte seulement. 🔴 **`({ verre }: Verre | undefined)`** — annotation portée sur ce qui est extrait, **6ᵉ occurrence**.
- **Principe reformulé juste** : « on fait planter une partie précise seulement, comme un try catch avec message ».
- Question de fond : pourquoi une erreur sur du code en dur ? → l'exercice provoque la panne à la demande ; en vrai, données inattendues (champ absent d'une API, ancien `localStorage`, bug imprévu). **Ce qu'on prévoit → garde · ce qu'on ne prévoit pas → ErrorBoundary.**
- **Tests 1 et 2 : non confirmés.**

---

**Niveaux** : `memo` — lire la balise de l'enfant 🟢 · vider l'état opposé 🟡 · propagation 🟢 · `target` / `currentTarget` 🟢 · fermeture au clic sur le fond 🟢 (indice) · lecture d'une condition inversée 🟡 · fond par défaut du dialog / `::backdrop` sur le dialog 🟡 · ErrorBoundary : principe 🟢 / périmètre 🟡 · **assertion `!` vs négation `!` 🔴** · annotation d'un paramètre déstructuré 🔴 (6ᵉ).

**🆕 Notions ouvertes ce jour** : propagation · ErrorBoundary (`react-error-boundary`).

**⚠️ Mes erreurs**

1. **Consignes jugées « très mauvaises, de pire en pire »** par Frédéric. Celle de l'ErrorBoundary était longue et faisait écrire un code volontairement fautif sans le dire clairement. **Engagement : une consigne = livrable · résultat attendu à l'écran · tests. Rien d'autre.**
2. Item 2 de révision sans dire quoi prédire précisément.
3. Explication de l'assertion `!` reprise deux fois sans changer d'angle.

**🔄 Cycle de reprise** : propagation → N+2 · ErrorBoundary → partie 3 en ouverture · `<dialog>` terrain neuf sans squelette ≈ S138 (toujours attendu) · portails ≈ S138.

**🔄 Rotation** : **entrent** — `!` après la variable (assertion TS) vs `!` avant (négation JS) · `::backdrop` appartient au dialog · fond par défaut du `<dialog>`. **Sort** — `memo` : lire la balise de l'enfant (confirmé une fois, à revoir plus tard). **Restent** — annotation d'un paramètre déstructuré (priorité, 6ᵉ) · vider l'état opposé dans `try` / `catch` · `show()` vs `showModal()` · `m-auto` sur un dialog · `npm ci` vs `npm install` · le reste de la liste S136.

---

### 🗺️ Avant Next.js — état

1. Calculatrice `useReducer` + mémoïsation ✅
2. Dark mode Shopping Cart + audit accessibilité ✅
3. `@keyframes` sur Memory Card ✅
4. Portails ✅ · `<dialog>` ✅ · **propagation ✅** · **ErrorBoundary 🔄 (bouton « Réessayer » à faire)**
5. Todo List (Odin) (+ `reduce` accumulateur objet, dates) ⏳
6. Créneaux courts : event loop · récursion ⏳
7. **Next.js**

**⏭️ Prochaine étape**

1. Confirmer : PR de la branche dialog · tests 1 et 2 de l'ErrorBoundary.
2. **ErrorBoundary, partie 3** : bouton « Réessayer » (`resetErrorBoundary`), puis un ErrorBoundary dans le Shopping Cart.
3. Reprise `<dialog>` + portails sur terrain neuf.
4. Puis Todo List → Next.js.

## Session 138 — ErrorBoundary terminé (reset, Shopping Cart, validation du `localStorage`) + reprise `<dialog>` sans squelette

**Durée** : 2h (jeudi, 1h10 le midi + 50 min le soir). Énergie bonne, frustration passagère le midi (extraction de la bande latérale).

**🎹 Raccourci** : `Alt+Maj+M` — peu utilisé, reconduit.

**Confirmés en ouverture** : PR de la branche dialog faite · tests 1 et 2 de l'ErrorBoundary passés.

---

### Révision éclair (2 items)

- **Écrire — signature de composant** 🟢 : `({ client, onModifier }: { client: Client; onModifier: … })`. **L'annotation porte enfin sur ce qui arrive, du premier coup, après 6 occurrences.** Seul écart : `() => void` au lieu de `(nom: string) => void`.
- **Écrire — tri sans mutation** 🟢 : `toSorted` + `localeCompare`. Nommage (`trier` = verbe → `triees`).

### 1. ErrorBoundary — fin du cycle

- **`resetKeys`** : 1ᵉʳ jet `resetKeys={verre}` → tableau attendu, `[id]` (la source plutôt que la valeur déduite). Questions posées : pourquoi un tableau (plusieurs valeurs possibles, même raison que les dépendances d'un effet) · `{[id]}` = accolades JSX + crochets du tableau. 🟢
- **`fallbackRender` + `resetErrorBoundary`** : structure juste, rattachée au motif `NavLink`. 🔴 **`onReset` sur un `<button>`** (événement de formulaire, échec silencieux, famille `onSubmit` sur un bouton) → `onClick`. Test « Réessayer replante tant que la cause est là » compris. 🟢
- Points donnés sans exercice : placement par zone (pas un seul en haut) · dev / prod · `onError` + Sentry · `useErrorBoundary` (mentionné).
- **Shopping Cart** : question de fond fondée (« à quoi ça sert, les fetch sont déjà traités ? ») → cas réel du **panier `localStorage` d'une ancienne version**. Schéma « disjoncteur par pièce » pour le rôle autour de `<Outlet />`. **Initiative de sa part : vider le panier dans le bouton** → corrigé en `setPanier([])` (le state est déjà chargé, `localStorage.clear()` effaçait tout) + `resetKeys={[location.pathname, panier]}`.
- **Test réel** (panier cassé dans l'onglet Application) → page blanche malgré l'ErrorBoundary : le `reduce` et le `.map()` de l'`<aside>` sont **exécutés par `LayoutPage`**. Règle : **un ErrorBoundary protège les composants qu'il enveloppe, pas le code calculé par le parent dans son JSX.** Expliquée le soir avec un schéma en deux temps. 🟡
- **Extraction `BandePanier` refusée par lui** (retour en arrière). **Solution pro retenue : valider à l'entrée** → fonction pure `lirePanier()` (`try` / `catch` autour de `JSON.parse`, `Array.isArray`, `every`) passée en lazy initializer. **Test passé** : panier cassé remplacé par `[]`. Solutions entreprise données par ordre : valider à l'entrée (Zod, clé versionnée) → ErrorBoundary par zone → ErrorBoundary racine + suivi. Ne pas semer des `?.` pour masquer.
- **Neuf** : `Array.isArray` 🟡 (cours détaillé demandé : `JSON.parse` renvoie ce que le texte décrit ; `typeof` ne distingue pas tableau / objet / `null`) · `every` 🟡.

### 2. Reprise `<dialog>` — terrain neuf, sans squelette ✅

Ref typée, `showModal()` / `close()`, `backdrop:`, fermeture au clic sur le fond en `&&`, bouton masqué après annulation. **6 tests passés dans Chrome.** Échap ne fonctionne pas dans l'**aperçu de VS Code**, qui intercepte la touche → repère : clavier et accessibilité se testent dans un vrai navigateur.

### 3. `===` vs `!==` dans le test du fond — enfin compris ✅

Bloqué depuis S137. Deux explications par tableau n'avaient pas suffi. **Ce qui a débloqué** : sa lecture supposait le fond **en dehors** du dialog ; or **le fond appartient au dialog** (un clic dessus est rapporté comme un clic sur le dialog lui-même), tandis que la boîte est couverte d'enfants. Vérification proposée par `console.log(e.target)`. Repère annexe : `&&` / `if` → condition pour **agir** · early return → condition pour **partir**.

---

**Niveaux** : annotation d'un paramètre déstructuré 🟢 (enfin) · type fonction avec paramètre 🟡 · `toSorted` / `localeCompare` 🟢 · `resetKeys` 🟢 · `fallbackRender` 🟢 · `onReset` vs `onClick` 🔴 → corrigé · placement d'un ErrorBoundary 🟢 · ce que protège un ErrorBoundary (composants vs code du parent) 🟡 · valider à l'entrée 🟢 (appliqué, compris) · `Array.isArray` / `every` 🟡 · **`<dialog>` 🟢 (sans squelette, terrain neuf)** · fermeture au clic sur le fond 🟢 · `target === currentTarget` sur un dialog 🟢 (compris) · state = donnée, pas phrase 🟡.

**⚠️ Mes erreurs**

1. **Extraction de `BandePanier` proposée trop vite**, en fin de créneau et sur un code non vu en entier → rejetée, retour en arrière. La validation à l'entrée était la solution la plus simple et la plus pro : elle aurait dû venir en premier.
2. Explications de `===` / `!==` reprises deux fois sous le même angle avant de chercher où était le malentendu.

**🔄 Cycle de reprise** : ErrorBoundary → N+2 · `<dialog>` → N+5 ≈ S143 · propagation → N+2 ≈ S139 · portails → à recroiser.

**🔄 Rotation** : **entrent** — ErrorBoundary ne protège pas le code du parent · `onReset` (formulaire) vs `onClick` · `Array.isArray` / `every` · state = donnée, pas phrase · tests clavier hors aperçu VS Code. **Sortent** — annotation d'un paramètre déstructuré (à confirmer une fois, plus en priorité) · `toSorted` / `localeCompare`. **Restent** — `!` assertion vs négation · `::backdrop` appartient au dialog · vider l'état opposé dans `try` / `catch` · `show()` vs `showModal()` · `npm ci` vs `npm install` · le reste de la liste S136.

---

### 🗺️ Avant Next.js — état

1. Calculatrice `useReducer` + mémoïsation ✅
2. Dark mode Shopping Cart + audit accessibilité ✅
3. `@keyframes` sur Memory Card ✅
4. Portails ✅ · `<dialog>` ✅ · propagation ✅ · **ErrorBoundary ✅**
5. **Todo List (Odin)** (+ `reduce` accumulateur objet, dates) ⏳
6. Créneaux courts : event loop · récursion ⏳
7. **Next.js**

**⏭️ Prochaine étape**

1. **Todo List (The Odin Project)** : énoncé à vérifier sur theodinproject.com avant de cadrer, en React + TS, sur branche.
2. En ouverture : reprises propagation et ErrorBoundary (N+2).

## Session 139 — Reprises propagation / ErrorBoundary + cadrage de la Todo List (mobile first) + question `class` / `this`

**Durée** : ~3h (vendredi, 1h + 1h35 avec pause, puis 25 min de relecture de code en solo). Énergie bonne.

**🎹 Raccourci** : `Alt+Maj+M` (Emmet : Remove Tag) — peu utilisé, reconduit.

**Deux machines** : toujours sur le portable. Comparaison `node -v` / `npm -v` + adoption de `npm ci` → **dimanche**, au retour sur le fixe.

**Ressenti en ouverture** : propagation / ErrorBoundary 5-6/10 → **sous-évalué** (les deux reprises 🟢).

---

### Révision éclair (2 items)

- **Prédire — `!` assertion vs négation + `Array.isArray`** 🟢 : `false` / `false` / `"object"` justes. **Distinction des deux `!` expliquée seul** (assertion TS effacée à la compilation, négation JS exécutée). Bloqué en S137. Précision : le `!` retire `null` **et** `undefined`.
- **Déboguer — vider l'état opposé dans `try` / `catch`** : 1ᵉʳ cas trouvé (`setErreur(null)`), cas inverse trouvé en une question → principe « repartir d'un état propre au début du calcul ». **Passé au vert sur décision de Frédéric.**

### 1. Reprises (N+2) — 🟢 toutes les deux

- **Propagation** : ordre bouton → article → section ✅ · `e.target === e.currentTarget &&` ✅. Précision : un clic dans la `section` hors article déclenche son propre handler.
- **ErrorBoundary** (fiches clients, `mutuelle!`) : `key` sur l'ErrorBoundary (élément le plus extérieur du `.map()`) ✅ · `fallback` en `<li>` pour garder un `<ul>` valide ✅ · test sans ErrorBoundary (toute l'app démontée) ✅ · `!` = silence de TS, `TypeError` à l'exécution ✅.
- **Props de `react-error-boundary` expliquées à sa demande** (autocomplétion) : `fallback` / `fallbackRender` / `FallbackComponent` (une seule des trois) · `onError` (suivi d'erreurs) · `resetKeys` (reset automatique quand une valeur change, **seulement en état d'erreur**) · **`onReset`** (réparer la cause avant de retenter ; utile surtout avec `FallbackComponent`) 🟡 expliqué, non pratiqué · `children` = la zone protégée. Snippets VS Code ≠ props.

### 2. Tests, CI, CD, Sentry — questions de fond

Trois moments différents, complémentaires : tests (avant) · CI (vérifs automatiques à chaque PR) · CD (mise en ligne automatique, Vercel) · Sentry (erreurs des vrais utilisateurs).
**🎓 Décision** : **CI simple (GitHub Actions : lint + typecheck + tests) et Sentry en fin de Phase 2**, au déploiement du SaaS.

### 3. Todo List — cadrage

- **Énoncé vérifié sur theodinproject.com** : projet du module « Organiser son code JavaScript » (JS pur, factories/classes, webpack).
- **🎓 Décision** : adaptation **React + TS** (synthèse du bloc React). Point 1 → **fonction factory** `creerTodo`, pas de classes · point 4 « séparer la logique du DOM » → reducer + fonctions pures · point 8 → `localStorage` validé (motif `lirePanier`). Pas de tests, pas de déploiement. `date-fns` ou `Date` natif : à décider ensemble au moment des dates (ressenti « moyen chaud »).
- **Inspirations retenues** : Apheiro (React, design épuré) + Cambuchi (couleur par priorité, modale de confirmation).
- **Fait** : page + `<Route>`. ⚠️ Travail commencé **sur `main`** → `git switch -c todo-list` proposé. **Branche créée ? Entrée d'accueil faite ? À demander.**
- **Mise en page conçue par lui, mobile first** : un seul panneau visible sur mobile avec **glissement projets ↔ tâches**, deux colonnes à `md`. Remarques retenues : `<select>` redondant avec la colonne de projets · **projet par défaut (une tâche appartient toujours à un projet) ≠ vue « Toutes » (filtre)** · cocher / déplier / supprimer à prévoir · calendrier et couleurs en **bonus** (« Paramètre des couleurs » : question ouverte).
- **Outils prévus, tous connus** : union `"projets" | "taches"` · panneaux toujours rendus + `translate-x` · `inert` sur le panneau caché · `md:grid` · Retour en `md:hidden` · `<dialog>` pour « Nouvelle tâche ».
- **Mobile first — question de fond** : en Tailwind, le **code** est toujours mobile first (doc officielle vérifiée : classes sans préfixe = toutes tailles, `sm:` ≠ « mobile ») · la **conception** dépend du produit (outil métier souvent pensé ordinateur) · méthode pro : aperçu étroit (~375 px, mode appareil des DevTools), puis élargir jusqu'à ce que ça casse et ajouter le préfixe là. Composant par composant.

### 4. `class` / `this` — question de Frédéric

Croisés dans du vieux React (`extends Component`) et en lisant du code, sans comprendre → sentiment d'un **« gros manque »** et d'un frein au recrutement (lire du code de 5 ans).
Recalibrage : `class` = ES6 (2015), pas du « JS classique » ; il lit déjà le reste du JS. Composants classes = React d'avant 2019, encore présents en entreprise.
⚠️ Explication donnée en un bloc (classe JS + `this` + héritage + composant classe React) → **« je me sens perdu »**.
**🎓 Décision** : **séance dédiée rapidement, avant Library** : savoir **lire** une classe JS (une idée à la fois, forme longue d'abord), puis lire un composant classe React par traduction (`this.state` ↔ `useState`, cycle de vie ↔ `useEffect`). Library reste pour l'**écrire**.

---

**Niveaux** : `!` assertion vs négation 🟢 · `Array.isArray` 🟢 · vider l'état opposé 🟢 (décision) · propagation 🟢 · `target` / `currentTarget` 🟢 · ErrorBoundary 🟢 (placement, `key`, `fallback`) · `onReset` 🟡 (expliqué) · tests / CI / CD / Sentry 🟢 (compris) · mobile first : code vs conception 🟢 · `class` / `this` 🔴 (jamais enseigné).

**⚠️ Mes erreurs**
1. **Classes et `this` expliqués d'un bloc** (quatre notions dans un message) → perdu. Récurrence du dosage.
2. Squelette lu comme un écran de bureau alors qu'il était pensé mobile first.

**🔄 Cycle de reprise** : propagation + ErrorBoundary → **N+5 ≈ S144**.

**🔄 Rotation** : **entrent** — **`Map` et `Set`** (demande explicite) · **`FormData`** (oublié) · `onReset` vs `resetKeys`. **Sort** — vider l'état opposé dans `try` / `catch`. **À confirmer une fois** — `!` assertion vs négation. **Restent** — ErrorBoundary ne protège pas le code du parent · `onReset` (formulaire) vs `onClick` · `Array.isArray` / `every` · state = donnée, pas phrase · `::backdrop` appartient au dialog · `show()` vs `showModal()` · `npm ci` vs `npm install` · le reste de la liste S136.

---

### 🗺️ Avant Next.js — état
1. Calculatrice `useReducer` + mémoïsation ✅
2. Dark mode Shopping Cart + audit accessibilité ✅
3. `@keyframes` sur Memory Card ✅
4. Portails ✅ · `<dialog>` ✅ · propagation ✅ · ErrorBoundary ✅
5. **Todo List (Odin)** 🔄 (cadrée, mise en page conçue) (+ `reduce` accumulateur objet, dates)
6. **Séance `class` / `this` (lecture)** ⏳ — avancée à sa demande
7. Créneaux courts : event loop · récursion ⏳
8. **Next.js**

**⏭️ Prochaine étape — demain (1h minimum, 2h si possible)**
1. Vérifier : branche `todo-list` + entrée d'accueil.
2. **Glissement des panneaux** (mobile ~375 px puis `md`), données en dur.
3. **`types.ts`** : `Priorite`, `Todo`, `Projet`, `EtatTodo`, `ETAT_INITIAL` + la phrase « comment une tâche sait à quel projet elle appartient ».
4. **Séance `class` / `this`** au prochain créneau frais (dimanche ou lundi).

## Session 139 bis — Lecture solo : `this` et `class`

**Durée** : 2h (samedi, en solo). Lecture seule (javascript.info, Grafikart, MDN), pas de code. Objectif : préparer le terrain de la séance dédiée. **Ressenti : tout reste obscur, « très abstrait ».** Notion classée **non vue** au registre (règle S94) : séance complète à faire ensemble.

## Session 140 — Lecture solo « Objets : les bases » + séance `class` / `this` (étapes 1 à 4) + décision Library avancée

**Durée** : ~4h (dimanche, PC fixe) : 1h30 de lecture solo le matin + ~2h30 avec Claude l'après-midi. Énergie bonne.

**🎹 Raccourci** : `Alt+Maj+M` — non renseigné, reconduit.

**Deux machines** : les versions du §5 (Node 24.15.0 / npm 11.12.1) sont celles du **fixe**. Portable à relever **mardi** (hypothèse : version plus ancienne, installé en premier). **`npm ci` adopté** dans le rituel, fonctionne. Rapport d'audit (12 « moderate ») lu et ignoré pour l'instant : jamais `npm audit fix` sur une seule machine (il réécrit le lock). Branches `main` et `todo-list` poussées depuis le portable, tirées sur le fixe ✅.

---

### 1. Lecture solo — javascript.info, « Objets : les bases » (page entière)

Ressenti : **3/4 compris, 1/4 abstrait**. Questions traitées : `Symbol` (rare dans le code d'application, sert au langage et aux bibliothèques : `Symbol.iterator`, marquage des éléments React) · « primitive » = le nom de la famille copiée par valeur · conversion objet → primitive : à retenir pour ses effets (`"[object Object]"`, `date2 - date1` en millisecondes). Les deux en **basse priorité**.
**Découverts, entrent en rotation** : `Object.assign` (ancêtre du spread, copie superficielle) · `structuredClone` (copie profonde native).
**🎓 Objectif posé par Frédéric** : combler les trous du socle JS pour une compréhension plus stable. Démarche validée (lu = ouvert, pas acquis).

### 2. Décision — où apprendre les classes

**Déclencheur** : code GitHub d'Apheiro illisible pour lui (« presque démoralisé ») + conviction qu'un junior maintiendra du code ancien (comme `async`/`await` vs `.then`).
**Idée de Frédéric** : faire la Todo List en composants classes. **Écartée d'un commun accord** : les hooks ne fonctionnent pas dans une classe (perte des cycles `useReducer` / Context / hooks personnalisés), on n'écrit plus de composants classes en entreprise, et trois difficultés empilées.
**🎓 Décision** : Todo List en hooks · **Library (Odin) en JS pur avancée juste après la Todo List, avant Next.js** (au lieu de la fin de Phase 2) · **exercice de traduction composant classe → fonction + hooks** après la Library · bonus : une erreur personnalisée (`class ErreurDonnees extends Error`) dans la Todo List.

### 3. Séance `class` / `this` — étapes 1 à 4 (fichier `.js` lancé avec `node`, hors TS sur sa décision)

- **Étape 1 — méthode et `this`** 🟢 : 3/3 en prédiction, dont la méthode prêtée à un autre objet (règle « `this` = l'objet devant le point au moment de l'appel »). `estCher()` : `if` sans `else` → `undefined` au lieu de `false` → `return this.prix > 200`.
- **Étape 2 — fonction constructeur et `new`** 🟢 : `Client` écrit seul et juste. Les trois temps de `new`, convention de la majuscule, « instance » = objet + lien vers son moule (`instanceof`). TS refuse `new` sur une fonction ordinaire, ce qui pousse vers `class`.
- **Étape 3 — `class`** 🟢 : traduction de `Client` juste · classe `Verre` écrite seul (`constructor`, méthodes sans `function` ni virgule). Accroches : `};` après les méthodes · `remise` calculant le montant de la remise au lieu du prix remisé · **`return` oublié dans `prixRemise`** (2ᵉ branche silencieuse de la séance). Classe = sucre syntaxique sur la fonction constructeur, méthode écrite une fois et partagée, erreur claire sans `new`.
- **Étape 4 — `this` perdu** 🟢 : B prédit en erreur ✅ (raison précisée : rien devant le point au moment de l'appel). Réparations : `() => cpt.ajouter` sans parenthèses, puis `bind(cpt.ajouter)` mal placé → **corrigés après indices** (`() => cpt.ajouter()` · `cpt.ajouter.bind(cpt)`). Lien fait avec `this.ajouter = this.ajouter.bind(this)` du vieux React.
- **Outillage** : `node chemin/fichier.js` depuis la racine (`MODULE_NOT_FOUND` sinon) · **`node --watch`** pour relancer à chaque sauvegarde · flèche ↑.

**Ressenti de fin** : « pas la pleine lumière, mais je distingue dans la pénombre ».

---

**Niveaux** : méthode + `this` 🟢 · fonction constructeur + `new` 🟢 · `class` / `constructor` / méthodes 🟢 (écrit seul) · instance / `instanceof` 🟢 · `this` perdu + flèche / `bind` 🟡 (réparé avec indices) · `extends` ❌ (étape 5) · `npm ci` 🟢 · lecture d'un rapport `npm audit` 🟡.

**🆕 Notions ouvertes ce jour** : `class` · `constructor` · `this` (deux règles) · `new` · `bind`.

**⚠️ Mes erreurs** : consigne « `node classes.js` » donnée sans préciser qu'elle suppose un fichier à la racine → `MODULE_NOT_FOUND`.

**🔄 Cycle de reprise** : `class` / `this` → **N+2 ≈ S142**, puis la Library · propagation + ErrorBoundary → N+5 ≈ S144.

**🔄 Rotation** : **entrent** — `Object.assign` / `structuredClone` · `this` = devant le point / `this` dans `new` · flèche vs `bind` · `return` oublié dans une méthode. **Restent** — `Map` / `Set` · `FormData` · `onReset` vs `resetKeys` · `!` assertion vs négation (à confirmer une fois) · ErrorBoundary ne protège pas le code du parent · `Array.isArray` / `every` · state = donnée, pas phrase · `::backdrop` appartient au dialog · `show()` vs `showModal()` · le reste de la liste S136.

---

### 🗺️ Avant Next.js — état
1. Calculatrice `useReducer` + mémoïsation ✅
2. Dark mode Shopping Cart + audit accessibilité ✅
3. `@keyframes` sur Memory Card ✅
4. Portails ✅ · `<dialog>` ✅ · propagation ✅ · ErrorBoundary ✅
5. **Todo List (Odin)** 🔄 (cadrée, mise en page conçue) (+ `reduce` accumulateur objet, dates, erreur personnalisée)
6. **`class` / `this`** 🔄 (étapes 1-4 ✅, `extends` ⏳)
7. **Library (Odin), JS pur** ⏳ — avancée avant Next.js
8. Traduction composant classe → hooks ⏳
9. Créneaux courts : event loop · récursion ⏳
10. **Next.js**

**⏭️ Prochaine étape**
1. **Étape 5 : `extends`** (+ `super`), avec l'erreur personnalisée comme cas réel.
2. **Todo List** : glissement des panneaux (mobile ~375 px puis `md`) + `types.ts`.
3. Mardi sur le portable : relever `node -v` / `npm -v`.

_La liste de rotation consolidée post-S140 (01/11) a été remontée dans l'en-tête. Version d'origine dans `Archive-progression-Phase2-ter.md`._

## Session 141 — Reprise `class` / `this` + `extends` / `super` + erreur personnalisée

**Durée** : ~2h (mardi, 1h05 le midi + ~55 min le soir). Énergie bonne. Portable.

**🎹 Raccourci** : `Alt+Maj+M` (Emmet : Remove Tag) — pas encore utilisé, reconduit.

**Deux machines** : versions **identiques** (Node 24.15.0 / npm 11.12.1). La piste « npm différent » pour le `package-lock.json` réécrit est écartée. Cause non identifiée, non bloquante : `npm ci` dans le rituel empêche le problème de revenir.

---

### Révision éclair (2 items)

- **Écrire — dépendances d'un `useEffect`** 🔴 : `[statut]` seul. `numero` et `client` exclus parce que « fournis par le parent ». **Rechute sur la règle posée en S131** : l'origine d'une valeur ne compte pas, seulement si elle peut changer d'un rendu à l'autre. `CLE` exclue à raison. Réponse : `[numero, client.nom, statut]`.
- **Prédire — `Set`** 🟢 4/4, **après 20 min de relecture de la page Map / Set** (oubliée). Pas une mesure à froid. Bon réflexe d'aller à la doc.

### 1. Reprise `class` / `this` (N+1)

- **Classe `Commande` écrite seule** 🟢 (`constructor`, `this.articles = []`, `push`, `reduce`). Question avant d'écrire : une propriété créée par le constructeur sans être un paramètre → expliquée, comprise.
- **`this` perdu** : prédiction non faite (lancé directement, « consigne lue trop vite »). **Réparation par flèche juste, avec le paramètre transmis** `(prix) => cmd.ajouter(prix)` 🟢. Ce qu'il y a devant le point au moment de l'appel (`bouton`) : donné.
- **`bind` oublié en deux jours** 🔴 → **petit cours demandé en ouverture de la prochaine séance**, puis à recroiser.
- **Fonction rangée dans un objet** (`{ onClick: () => … }`) : « ça me perturbe, peu croisé ». Forme longue donnée + rattachement à ce qu'il utilise déjà (props fonction, `value` d'un Context, méthodes d'une classe). 🟡
- Retouches : `return` inutile devant `push` · paramètres du `reduce` inversés (`(acc, prix)`). Corrigés.

### 2. `extends` + `super` — notion neuve, ouverte

- **`CommandeLentilles` juste du premier coup** 🟢 : `extends`, `super` avant `this`, propriété propre. **`this.total()` réutilisé spontanément** dans `prixMensuel()` au lieu de refaire le `reduce`.
- Test `super` en commentaire : `ReferenceError` lu. Explication imprécise (« pas de chemin vers les données ») → précisé : **l'objet n'existe pas encore**, c'est le constructeur parent qui le fabrique. 🟡
- Accent dans un nom de variable (`numéro`) : convention rappelée.

### 3. Erreur personnalisée (`extends Error`)

- Classe `ErreurOrdonnance` + `verifierSphere` + `try` / `catch` avec `instanceof`.
- 🔴 **`??` au lieu de `||` entre deux comparaisons.** Réponse demandée et donnée. Confusion de fond : `??` lu comme « renvoie la droite quand la gauche est fausse », puis « `0` est une valeur qu'on veut garder ». Débloqué par **les deux usages de `||`** (valeur par défaut / « ou » entre deux conditions). Reformulation juste de sa part : « on compare `true` ou `false`, pas des valeurs ». Repère : comparaisons des deux côtés → `||`.
- **Nom de classe différent entre la déclaration et le `throw`** (`ErrorOrdonnance` / `ErreurOrdonnance`) → `ReferenceError` attrapée et classée « Bug inattendu » : démonstration involontaire de l'intérêt de l'exercice.
- **Questions de fond** : pourquoi trois textes ? → `this.name` est l'étiquette de l'erreur (affichée par le terminal quand personne ne l'attrape), les deux `console.log` sont les réactions du `catch` · que contient `Error` ? → MDN (préféré par lui), `Ctrl+clic` vers le fichier de types (« illisible »), inspection d'une instance.
- **Test hors `try`** 🟢 : `name` affiché en tête, lecture de la pile (`stack`) jusqu'à la ligne d'origine, script arrêté (les `tester()` jamais exécutés).
- `this.name` avec espace (`"Erreur Ordonnance"`) : convention du nom exact de la classe rappelée, non appliquée.

---

**Niveaux** : tri des dépendances 🔴 (rechute : props exclues) · `Set` 🟢 (après relecture) · `class` / `constructor` / méthodes 🟢 · `this` perdu + flèche 🟢 · `bind` 🔴 (oublié) · fonction rangée dans un objet 🟡 · `extends` / `super` 🟢 (juste du premier coup) · pourquoi `super` avant `this` 🟡 · `extends Error` + `name` 🟢 · `instanceof` pour trier les erreurs 🟢 · **`??` vs `||` entre deux conditions 🔴** · lecture d'une pile d'erreur 🟢.

**🆕 Notions ouvertes ce jour** : `extends` · `super` · erreur personnalisée (`extends Error`, `this.name`).

**⚠️ Mes erreurs** : consigne « `articles` qui démarre en tableau vide » sans préciser que ce n'était pas un paramètre → question nécessaire.

**🔄 Cycle de reprise** : `class` / `this` / `extends` → **N+2 ≈ S143**, puis la Library · propagation + ErrorBoundary → N+5 ≈ S144.

**🔄 Rotation** : **entrent** — `bind` (cours en ouverture, priorité) · `??` vs `||` : valeur par défaut / « ou » entre deux conditions (priorité) · fonction rangée dans un objet · `this.name` / `stack` d'une erreur. **Restent** — tri des dépendances (priorité haute, rechute) · `Map` / `Set` (à froid) · le reste de la liste consolidée post-S140.

---

### 🗺️ Avant Next.js — état
1. Calculatrice `useReducer` + mémoïsation ✅
2. Dark mode Shopping Cart + audit accessibilité ✅
3. `@keyframes` sur Memory Card ✅
4. Portails ✅ · `<dialog>` ✅ · propagation ✅ · ErrorBoundary ✅
5. **Todo List (Odin)** 🔄 (cadrée, mise en page conçue) (+ `reduce` accumulateur objet, dates, erreur personnalisée)
6. **`class` / `this`** 🔄 (étapes 1-5 ✅ + erreur personnalisée ✅ · `bind` à reprendre)
7. **Library (Odin), JS pur** ⏳ — avant Next.js
8. Traduction composant classe → hooks ⏳
9. Créneaux courts : event loop · récursion ⏳
10. **Next.js**

**⏭️ Prochaine étape**
1. **Petit cours `bind`** en ouverture, avec un exercice court.
2. **Todo List** : glissement des panneaux (mobile ~375 px puis `md`) + `types.ts`.

<!-- Les nouvelles entrées de session commencent ici -->

## Session 142 — `bind` (cours + trois formes) + révisions de dettes chaudes

**Durée** : 2h (mercredi) : 1h le midi (refonte des instructions + `progression.md`, autre conversation) + 1h le soir ensemble. Énergie bonne.

**🎹 Raccourci** : `Alt+Maj+M` — non renseigné, reconduit.

---

### Révision éclair (2 items)

- **Prédire — `Object.assign` / `structuredClone`** 🟢 3/3 : copie superficielle (objet imbriqué partagé) vs copie profonde.
- **Écrire — `Map`** 🟢 code juste (`set` / `get` / `has` / `size` sans parenthèses), **mais après relecture de javascript.info** : pas une mesure à froid. **Demande de Frédéric : recroiser dans ~2 semaines** ou en contexte (Todo List).

### 1. `bind` — rouvert

- Cours : `bind` fabrique une **nouvelle fonction** au `this` collé, **n'appelle rien** · lecture en trois morceaux (fonction / `.bind` / objet) · forme longue en flèche · sens d'écriture (`cpt.ajouter.bind(cpt)`, piège S140).
- **Prédiction juste avec la raison** 🟢 (rien devant le point au moment de l'appel → `TypeError`).
- **Trois réparations écrites** : à l'appel avec `bind` 🟢 · en flèche 🟡 (`() => carte.ajouterPoints(10)` : valeur en dur, l'argument reçu est ignoré → `(n) => carte.ajouterPoints(n)`) · **dans le constructeur** 🟢, sur sa question « pas possible de réparer dans la classe ? » (motif du vieux React compris : la méthode reste écrite dans la classe, la copie collée est rangée sur l'objet).
- Méthode déclarée en flèche dans la classe (champ de classe) : **nommée seulement**, gardée pour la Library.

### 2. Révisions de dettes chaudes

- **`??` vs `||`** 🟢 : prédiction `true` / `false` juste, bug identifié, corrigé, raison avec ses mots (`??` ne passe à droite que sur `null` / `undefined`).
- **Tri des dépendances (`useMemo`)** 🟢 : `[prixVerre, quantite, remise]`, **props incluses** (rechute de S141 non reproduite), `TAUX_TVA` exclue à raison.
- **`.then` en écriture (fetch simple)** 🟡 : réussi seul, **avec un effort long**. `.then` imbriquée dans la `.then` au lieu d'une chaîne plate · **`.catch` accroché à la chaîne intérieure** → n'attrape ni le `throw` de `!res.ok` ni la panne réseau · `async` inutile (aucun `await`). Image donnée : une erreur saute toutes les `.then` restantes jusqu'au `.catch` final.

### 3. Décision — Todo List

**`types.ts` en premier refusé par Frédéric** : impossible d'écrire des types sans savoir comment l'application fonctionnera. Objection fondée. **Démarche retenue : partir du fonctionnement** (actions de l'utilisateur, ce qui change à l'écran, où vit chaque donnée), les types en découlent.

---

**Niveaux** : `Object.assign` / `structuredClone` 🟢 · `Map` 🟡 (avec la doc) · `bind` 🟢 (trois formes, un passage) · flèche qui transmet l'argument 🟡 · `??` vs `||` 🟢 · tri des dépendances 🟢 (à confirmer à froid) · `.then` en écriture 🟡 (place du `.catch`, chaîne plate).

**🔄 Cycle de reprise** : `bind` → N+2 ≈ S144 · `class` / `extends` → N+2 ≈ S143, puis la Library · `<dialog>` → N+5 ≈ S143 · propagation + ErrorBoundary → N+5 ≈ S144 · `@keyframes` → dépassé, à glisser.

**🔄 Rotation** : **entre** — `.then` : place du `.catch` en bout de chaîne. **Restent en priorité haute** — `bind` (à froid) · tri des dépendances (à confirmer à froid) · `??` vs `||` (à confirmer une fois). **`Map` / `Set`** → dans ~2 semaines (≈ 18 novembre) ou en contexte. **Sortent** — `Object.assign` / `structuredClone` (à revoir plus tard).

**⏭️ Prochaine étape — demain (2h)**
1. **Todo List** : décrire le fonctionnement (actions, écrans, données), puis en tirer les types.
2. Glissement des panneaux si le temps le permet.
3. À glisser : `@keyframes` · reprise `class` / `extends`.

## Session 143 — Reprises `class` / `extends` et `<dialog>` + Todo List : specs (fonctionnement avant le code)

**Durée** : 2h (jeudi, ~40 min le midi + ~1h15 en fin de journée). Énergie bonne. **Agacement en fin de séance** sur les specs.

**🎹 Raccourci** : `Alt+Maj+M` (Emmet : Remove Tag) — maintenu.

---

### Révision éclair (2 items)

- **Écrire — formulaire non contrôlé** 🟢 / 🔴 : solution juste avec deux `useRef` + garde, mais **`FormData` (notion visée) non revenu**. ⚠️ Consigne qui ne nommait pas l'outil → erreur de ma part. Repère donné : un ou deux éléments à piloter → `useRef` · lire un formulaire entier à l'envoi → `FormData`.
- **Prédire — `setTimeout(..., 0)`** 🔴 : `2` placé en deuxième. **Trou de type A, jamais enseigné** (pas un oubli) : le code en cours se termine entièrement avant la file d'attente. Image : une seule main, puis la file. → justifie le créneau **event loop**.

### 1. Reprise `class` / `extends` (N+2) — sans squelette 🟢

Deux classes, `extends`, `super` avant `this`, `instanceof` justes. Deux écarts : `prixTTC()` **divise** par 1,2 au lieu de multiplier · `description()` lit `this.prix` au lieu d'appeler `this.prixTTC()` (consigne demandait de réutiliser la méthode).

### 2. Reprise `<dialog>` (N+5) — 🟢, 6 tests passés

Ref typée, `showModal()` / `close()`, clic sur le fond en `target === currentTarget &&`, dialog transparent + `div` intérieure qui porte le fond (piège du fond blanc évité seul), state puis fermeture dans le même handler. Remarques : « message ou rien » → `&&` plutôt que ternaire · booléen nommé en affirmation (`estSupprimee`).
⚠️ Squelette « esthétique » trop complet (structure du dialog donnée) : il demandait seulement la monture. Non lu par lui.

### 3. Todo List — specs

- **Énoncé Odin revérifié sur le site** (factories / classes, propriétés minimales, projet par défaut, séparer logique et DOM, 4 exigences d'interface, `date-fns` suggéré, `localStorage` avec données absentes à gérer).
- **Décision** : supprimer un projet supprime ses tâches (confirmation par `<dialog>`). **Question ouverte** : le projet par défaut est-il supprimable ?
- **Specs** (`src/pages/todo-list/specs.md`) : tableau geste / écran mobile / écran PC / retenu. Colonne mobile / PC **ajoutée par lui**. **Rejeté** (« long, redondant, je ne vois pas l'intérêt ») → **tableau rempli par moi à sa demande**.
- **Ce que l'app retient** (5) : liste des projets · liste des tâches (chacune connaît son projet et son état fait) · projet choisi · tâche dépliée · panneau visible (mobile). Modale : pilotée par ref, pas un state.
- **Point débloqué en partie** : la priorité est une **propriété d'une tâche**, la couleur **se calcule**, décocher = même information que cocher.
- **Passerelle donnée** : colonne « Retenu » → forme du state · geste qui change une liste → action du reducer · geste visuel → `useState` local.
- **Arrêt** sur l'écriture de la liste des actions : « je n'y arrive pas », **difficulté à visualiser l'app**. Il part lire de la doc.

**Pourquoi ça a bloqué** : concevoir une app entière sans code est une compétence neuve. Le format tableau a été vécu comme une rédaction sans but ; l'intérêt (state + actions) n'a été montré **qu'après** avoir demandé l'effort.

---

**Niveaux** : `useRef` sur formulaire 🟢 · `FormData` 🔴 (non revenu) · `setTimeout` / file d'attente 🔴 (jamais vu) · `class` / `extends` / `super` 🟢 (sans squelette, N+2 tenu) · appeler une méthode héritée via `this` 🟡 · `<dialog>` 🟢 (N+5 tenu) · specs → state / actions 🔴 (concept neuf, non visualisé).

**⚠️ Mes erreurs**
1. Item `FormData` sans nommer l'outil attendu.
2. Squelette du dialog trop complet alors qu'il demandait seulement la monture.
3. **Specs imposées par le format avant d'en montrer l'intérêt** : tableau à 10 lignes, puis réduction, puis passerelle vers le reducer. **Correctif** : montrer d'abord **où mène l'exercice** (state + actions) sur un exemple, puis demander l'effort, et garder le livrable minimal.

**🔄 Cycle de reprise** : `class` / `extends` → **N+5 ≈ S146**, puis Library · `<dialog>` → **fermé** (N+5 tenu) · `bind` → N+2 ≈ S144 · propagation + ErrorBoundary → N+5 ≈ S144 · `@keyframes` → dépassé, toujours à glisser.

**🔄 Rotation** : **entrent** — `FormData` (priorité haute) · `setTimeout` / file d'attente (en attendant le créneau event loop) · appeler une méthode héritée (`this.methode()`). **Sort** — `<dialog>` (cycle fermé, entretien basse priorité).

**⏭️ Prochaine étape**
1. Todo List : **liste des actions du reducer** (5-6), en partant des deux exemples donnés (`AJOUTER_PROJET`, `BASCULER_FAIT`). Si la visualisation bloque encore : **coder d'abord le squelette visuel avec des données en dur**, puis en déduire state et actions.
2. Créneau court **event loop** (trou réel révélé ce jour).
3. `bind` à froid · `@keyframes`.

## Session 144 — Todo List : modèle de données, reducer complet, premières briques de la page

**Durée** : ~3h (vendredi). Énergie bonne. Pas d'arrêt net, malgré une longue explication de `projetChoisi`.

**🎹 Raccourci** : `Alt+Maj+M` — peu utilisé, reconduit.

---

### Révision éclair (2 items)

- **Prédire — `bind`** 🟢 : `1`, `2`, `TypeError` + raison juste. **Reprise N+2 de `bind` tenue, à froid.**
- **Déboguer — `@keyframes`** 🔴 : délai corrigé après lecture MDN, mais `opacity-0` (classe Tailwind dans un scénario CSS) non vu ; `alternate` perdu. **Décision de Frédéric : `@keyframes` sort de la rotation jusqu'à un usage réel** (une animation dans la Todo List, par exemple).

### Reprises

- **Propagation** (N+5) 🟢 3/3, marge intérieure comprise. **Cycle fermé.**
- **ErrorBoundary** (N+5) 🟡 : principe retrouvé **après relecture** ; piège manqué (un `reduce` dans le parent fait planter toute la page, l'ErrorBoundary ne protège que ce qu'il enveloppe). Image donnée : le disjoncteur ne coupe que la pièce qui lui est branchée. Parade : valider à l'entrée.

### Todo List — modèle de données et reducer

- **Question de Frédéric en ouverture : plusieurs `useReducer` ?** Possible, mais pas ici : supprimer un projet touche projets **et** tâches → **ce qui change ensemble vit dans le même reducer**. Intuition juste de sa part.
- **Types d'abord ou code d'abord ?** Les deux existent en entreprise ; le **modèle de données** se pose tôt, les types restent un **brouillon qui bouge** pendant le code. Frédéric veut « la façon pro », pas « sa façon » → il avait déjà préparé `types.ts` seul, ce qui est la façon pro.
- **Décisions** : un seul reducer · modèle **à plat** (`projets` + `taches`, chaque tâche porte `idProjet`, comme une base de données) · `priorite` en union de valeurs · échéance stockée en **chaîne `"AAAA-MM-JJ"`** (format de `<input type="date">`, survit à `localStorage`) · projet par défaut à **`id` fixe dans une constante** (`ID_PROJET_DEFAUT`), `nom` affiché « Général » · garde dans le reducer contre la suppression du projet par défaut (l'interface empêchera aussi).
- **Ce qui va dans le reducer — règle retenue (formulée par lui)** : « ça touche une donnée → reducer, c'est de l'affichage → `useState` local », **sauf** si une action du reducer doit modifier cet affichage en même temps (→ reducer). Tâche dépliée et panneau mobile restent locaux.
- **`fait` vs déplié** : débloqué par « est-ce que ça décrit la tâche, ou ma façon de la regarder ? » + image de la fiche client papier. Le nombre (plusieurs cochées / plusieurs dépliées) ne départage rien.
- **`projetChoisi` : 3 explications sans succès**, débloqué par un tableau clic par clic (« marque-page ») et **renommé par lui `projetAffiche`** (« afficher à l'écran ! »). Le nom faisait obstacle.
- **Reducer écrit seul, complet** 🟢 : 7 actions avec leurs données, objet complet renvoyé (erreur `Projet[] is missing…` lue et corrigée), `map` + copie `{ ...t, fait: !t.fait }` pour cocher, `supprimerProjet` changeant les trois clés. Spread superflu devant `filter` / `map` retiré.
- **Page** : `useReducer` branché, `ETAT_INITIAL` annoté avec le projet par défaut, liste des projets (`key={p.id}`), **modale d'ajout de projet fonctionnelle** (`<dialog>`, `crypto.randomUUID()`, `dispatch`).
- **Bugs connus, à reprendre** : `"General"` encore en dur dans `supprimerProjet` (garde inopérante, marque-page cassé) → `ID_PROJET_DEFAUT` (**fait**, à confirmer) · case à cocher `checked` sans `onChange` (avertissement) → reportée au branchement de `cocher` · champ du nom non vidé après validation.

---

**Niveaux** : `bind` 🟢 (à froid) · `@keyframes` 🔴 (sorti de rotation jusqu'à usage réel) · propagation 🟢 · ErrorBoundary / code du parent 🟡 · plusieurs reducers 🟢 (compris) · reducer : objet complet renvoyé 🟢 · copie d'objet avec propriété modifiée dans un `map` 🟢 · state reducer vs `useState` local 🟡 (règle formulée, à appliquer seul) · modèle à plat 🟢 (compris) · constante pour un `id` fixe 🟡 (posée, pas encore utilisée partout).

**⚠️ Mes erreurs**
1. « On fait à ta façon » : présenté comme une préférence alors qu'il demandait la pratique pro. Correctif : répondre par la norme, dire ensuite si son choix y correspond.
2. Critère « survivre au F5 » donné comme question 1 → l'a embrouillé. La règle « une donnée est en jeu » suffisait.
3. **`projetChoisi` expliqué trois fois sous le même angle** avant le tableau clic par clic : la règle des trois échecs aurait dû s'appliquer plus tôt. Le mot choisi par moi bloquait la compréhension.

**🔄 Cycle de reprise** : `bind` → N+5 ≈ S147 · propagation → **fermé** · ErrorBoundary → recroiser (code du parent) · `class` / `extends` → N+5 ≈ S146, puis Library · `@keyframes` → en attente d'usage réel.

**🔄 Rotation** : **entrent** — ErrorBoundary ne protège pas le code du parent (priorité haute) · règle reducer / `useState` local · `{ ...objet, cle: valeur }` dans un `map`. **Sortent** — `@keyframes` (décision) · propagation (cycle fermé). **Restent** — `FormData` · `setTimeout` / file d'attente · tri des dépendances (à froid) · `??` vs `||` · `Map` / `Set` (≈ 18 novembre).

**⏭️ Prochaine étape**
1. Todo List : confirmer `ID_PROJET_DEFAUT` partout · clic sur un projet → `choisirProjet` · tâches **du projet affiché** (`filter`) · vider le champ après validation.
2. Modale « Nouvelle tâche » (formulaire → `ajouterTache`) — terrain naturel de `FormData`.
3. Créneau court **event loop**.

## Session 145 — Composant `<Dialog />` réutilisable (Todo List)

**Durée** : 1h (samedi midi, dont 15 min seul avant d'ouvrir la conversation). Pas de révision éclair (manque de temps, décision de Frédéric). **Séance mal vécue : énervement sur mes explications.**

**🎹 Raccourci** : `Alt+Maj+M` — non renseigné, reconduit.

---

### `<Dialog />` réutilisable — conçu par lui

- **Question de Frédéric** : créer un composant `<Dialog />` ? → oui, troisième occurrence (ajout de projet, ajout de tâche, confirmation de suppression).
- **Sa conception** : la page garde ses refs (`refProjet`, `refTache`) et appelle `showModal()` ; le composant reçoit `ref`, `title`, `textBtnClose`, `textBtnValid`, `functionReducer`, `children`, et porte les boutons Valider / Retour + la fermeture au clic sur le fond. **Fonctionne, modale « Ajouter un projet » réécrite avec.** 🟢
- **`ref` en prop** : possible tel quel en **React 19** (avant : `forwardRef`). Donné de mémoire → à vérifier : version de `react` dans `package.json` + blog react.dev « React 19 », section « ref as a prop ».
- Erreurs corrigées en route : prop fonction absente de la déstructuration · `{functionReducer};` (bloc vide, pas d'appel) → `functionReducer();` · `myref` déclaré deux fois (paramètre + `const`).
- **Version déclarative** (`ouvert` + `onFermer`, `useEffect` + `onClose` pour Échap) : présentée comme la forme des bibliothèques (shadcn/ui). **Décision : sa version reste pour la Todo List** ; la forme déclarative viendra toute faite avec shadcn/ui.
- Rappel de la règle reducer appliquée seul : `projetASupprimer` (confirmation) = affichage temporaire → `useState` local, la donnée ne change qu'au `dispatch`.

---

**Niveaux** : composant réutilisable avec `children` + props fonction 🟢 · prop fonction : désigner vs appeler 🟡 (rechute `{fn}`) · ref passée en prop (React 19) 🟡 · impératif (ref) vs déclaratif (booléen) 🟡 (compris en fin de séance, pas utilisé).

**⚠️ Mes erreurs**
1. **Comparaison faussée** : j'ai comparé sa modale d'ajout (boutons intégrés) à ma modale de suppression (boutons dans la page). La différence de lisibilité venait des boutons intégrés, pas de ref vs booléen.
2. **« Pourquoi c'est mieux » répondu par du mécanisme** (code, trajet clic par clic) au lieu de la réponse simple. Trois tours avant la bonne forme.
3. Mal compris son intention (« attribuer des refs différentes » = passer la ref de la page), deux allers-retours.

**📏 Règle de travail posée par Frédéric** (à remonter dans les instructions §1, « Communication ») :
> Quand il demande « la version pro » ou « pourquoi c'est mieux » : répondre d'abord en 3-4 lignes simples — **version pro · ce qu'elle apporte · pourquoi c'est utile · ce que ça change pour lui aujourd'hui**. Le détail seulement s'il pose d'autres questions. Ne jamais comparer deux choses différentes à la fois.

**🔄 Cycle de reprise** : inchangé depuis S144 (`bind` ≈ S147 · `class` / `extends` ≈ S146 · ErrorBoundary / code du parent à recroiser).

**🔄 Rotation** : **entre** — prop fonction : `fn` vs `fn()` dans un handler (rechute en position inhabituelle). **Révision éclair de S145 non jouée → à reporter en ouverture S146.**

**⏭️ Prochaine étape**
1. Todo List : `ID_PROJET_DEFAUT` partout (à confirmer) · clic sur un projet → `choisirProjet` · tâches du projet affiché (`filter`) · vider le champ après validation.
2. Modale « Nouvelle tâche » avec `<Dialog />` (formulaire → `ajouterTache`, terrain de `FormData`).
3. Créneau court **event loop**.

## Session 146 — Révisions `fn` / `FormData` + reprise `class` / `extends` (cycle fermé) + `<Dialog />` en formulaire

**Durée** : 2h (dimanche matin, PC fixe). Énergie bonne. Un agacement passager (« ne refais pas comme hier ») sur la question `<form>`.

**Deux machines** : `git pull` refusé (`progression.md` modifié localement par un espace involontaire) → `git restore` puis pull · `npm ci` relancé après le pull · rituel fait dans les deux projets.

**🎹 Raccourci** : `Alt+Maj+M` **acté** (utilisé, « très pratique »). Nouveau : **`Alt+Maj+→` / `←` (Expand / Shrink Selection)** — de mémoire, à vérifier dans la Command Palette.

---

### Révision éclair (2 items, celle de S145 reportée)

- **Déboguer — prop fonction `fn` vs `fn()`** 🟢 : deux corrections justes. Effets précisés : `onValider;` ne fait rien sans erreur · `onClick={fn()}` s'exécute au rendu (boucle infinie possible si la fonction modifie un state du parent).
- **Écrire — `FormData`** 🟡 : juste (`preventDefault`, `e.currentTarget`, `Object.fromEntries` trouvé seul), mais **30 min sur MDN** → fragile, pas revenu à froid. Mini-cours demandé : `FormData` = contenu interne invisible dans la console (`[...dataForm]` pour le voir) · `preventDefault` annule la navigation native (rechargement) · `fromEntries` = inverse d'`Object.entries` (paires → objet). Forme longue réécrite seul juste (`for...of` + `Record<string, FormDataEntryValue>`). **Demande de Frédéric : recroiser dans une semaine, pas avant (≈ 15 novembre).**

### Reprise `class` / `extends` (N+5) — 🟢, cycle fermé

`Ordonnance` / `OrdonnanceEnfant` sans squelette, 4 tests passés, `super(...)` avant `this`, `||` entre deux comparaisons juste. Écart : **`super.estForte()` au lieu de `this.estForte()`** (une méthode héritée se trouve par `this` ; `super.methode()` sert quand l'enfant redéfinit une méthode du même nom) · `=== true` redondant. Prochain terrain : la Library.

### Todo List

- `ID_PROJET_DEFAUT` confirmé partout ✅.
- **Usages de `<Dialog />` identifiés par lui** : ajouter un projet · ajouter une tâche · modifier une tâche (champs pré-remplis par `defaultValue`) · confirmer une suppression (formulaire sans champ). Même forme pour les quatre. **Boutons gardés dans le composant** (mêmes deux boutons partout, seul le texte change).
- **`<Dialog />` passé en `<form>`** : `onSubmit` + `preventDefault` + `FormData` transmis à la page + `reset()` · state `input` supprimé · `name` + `required` + `String(data.get(...))` côté page. Deux bugs non vus, **réponse demandée et donnée** : `close()` dans le `onClick` de Valider (Entrée ne fermait pas, champ vide bloqué sans message) → fermeture dans `onSubmit` · **`<button>` de type `submit` par défaut** dans un formulaire → `type="button"` sur Retour. **5 tests passés.**
- Questions de fond : forme pro = `<form>` dans chaque modale · React Hook Form (bibliothèque, après Next.js, repose sur la même base).
- **Non fait** : clic sur un projet → `choisirProjet` · filtre des tâches du projet affiché · surbrillance · tâches de test dans `ETAT_INITIAL`. Point « vider le champ » réglé par `reset()`.

---

**Niveaux** : `fn` vs `fn()` 🟢 · `FormData` / `Object.fromEntries` 🟡 · `preventDefault` (pourquoi) 🟢 compris · `class` / `extends` / `super` 🟢 (cycle fermé) · `this.methode()` vs `super.methode()` 🟡 · `<form>` dans un `<dialog>` 🟢 compris · action dans `onSubmit` vs `onClick` 🟡 · type par défaut d'un `<button>` 🔴 → corrigé.

**⚠️ Mes erreurs**
1. À « faut-il un `<form>` ? », réponse par un plan de séquençage au lieu de la forme pro → recadré. **Règle S145 appliquée ensuite** : version pro · ce qu'elle apporte · pourquoi c'est utile · ce que ça change aujourd'hui, en 4 lignes.
2. Consigne des points 1-4 envoyée sans avoir anticipé que le passage en `<form>` rendrait le point 4 caduc.

**🔄 Cycle de reprise** : `class` / `extends` → **fermé** (entretien) · `bind` → N+5 ≈ S147 · ErrorBoundary / code du parent → à recroiser · `Map` / `Set` → ≈ 18 novembre · `FormData` + `fromEntries` → ≈ 15 novembre.

**🔄 Rotation** : **entrent** — dans un formulaire : action dans `onSubmit`, jamais dans le `onClick` · type par défaut d'un `<button>` (`submit`) · `this.methode()` vs `super.methode()`. **Sort** — `class` / `extends` (cycle fermé, basse priorité). **Restent** — tri des dépendances (à froid) · `setTimeout` / file d'attente · ErrorBoundary ne protège pas le code du parent · règle reducer / `useState` local.

**⏭️ Prochaine étape**
1. Todo List : tâches de test dans `ETAT_INITIAL` · clic sur un projet → `choisirProjet` · filtre des tâches du projet affiché (donnée dérivée) · surbrillance du projet affiché.
2. Modale « Nouvelle tâche » avec `<Dialog />` (4 champs). ⚠️ `String(data.get("priorite"))` donne une `string`, pas l'union `Priorite` : conversion à traiter.
3. Créneau court **event loop**.

## Session 147 — Todo List : choix du projet, création de tâches, vue « Toutes », filtre, suppression avec confirmation

**Durée** : 3h (dimanche soir 1h20 + lundi matin 1h40). Énergie bonne. Pas d'arrêt net.

**🎹 Raccourci** : `Alt+Maj+→` / `←` (Expand / Shrink Selection) — adoption non renseignée, **à demander**.

---

### Révision éclair (2 items)

- **`bind` à froid** 🟢 : `m.tic.bind(m)` juste, dans le bon sens. **Cycle `bind` fermé (N+5 tenu).** Question de Frédéric : le régler dans la classe → `bind` dans le constructeur (déjà écrit) ou **méthode en flèche comme propriété** (le `this` de l'objet en construction). Champ en flèche : **à pratiquer dans la Library**.
- **Dépendances d'un `useEffect`** 🟢 (validé par lui) : props incluses, constante hors composant exclue. Écart : `terme` au lieu de `filtre` (l'effet lit `filtre` ; « Ray » / « Ray␣ » relançait la requête pour rien).

### Todo List

- **Choisir un projet** : 1ᵉʳ jet avec un `useState` local (doublon de `state.projetAffiche`) comparant des **noms** à un `id` → test 1 en échec. **Réponse demandée et donnée** : comparer des `id` · `dispatch({ type: "choisirProjet" })`, pas de second propriétaire. Repère : **avant de créer un state, vérifier que la donnée n'existe pas déjà**. 🟡
- **Ordre corrigé par lui** : le glissement mobile (consigne déjà donnée) repoussé après les tâches — fonctionnel avant mise en page. Objection fondée.
- **Créer une tâche** 🟢 : 2ᵉ `<Dialog />` sans toucher le composant · `value` (stockée) vs texte de l'`<option>` (affiché) — trouvé seul : sans `value`, le texte est envoyé · `as Priorite` (**réponse demandée**) : légitime car les valeurs viennent des `<option>` écrites dans le JSX · `idProjet` = l'`id` du projet affiché. Case à cocher : `onChange={() => !t.fait}` faisait taire l'avertissement sans rien faire → `dispatch({ type: "cocher" })`. **6 tests passés**, vérification dans React DevTools (installé sur le fixe ✅).
- **Vue « Toutes »** : conception hésitante (Général = tout / vue séparée, 3 allers-retours). **Choix final : « Toutes » = vue (`ID_VUE_TOUTES`, absente des projets), Général = projet par défaut** · état de départ et retour après suppression sur la vue · tâche créée depuis « Toutes » → Général (ternaire écrit seul).
- **Filtre** 🟡 : constante **demandée et donnée** (`tachesAffichees = state.taches.filter(… || …)`, donnée dérivée). Ternaire liste vide / liste écrit seul. Corrigés : `<p>` dans un `<ul>` (le ternaire choisit le `<ul>` entier) · `supprimerProjet` envoyé par la poubelle d'une tâche.
- **Accessibilité** : `aria-label` sur boutons-icônes, case à cocher, champs et `<select>` (un champ porte son **nom**, pas l'action ; un placeholder n'est pas un libellé — `<label>` visible = forme pro, à l'habillage).
- **Suppression d'un projet avec confirmation** : `<Dialog />` sans champ · **idée de sa part : stocker le projet entier** (`useState<Projet | null>(null)`) pour avoir le nom sans le rechercher · poubelle absente sur Général. **Correction demandée** : garde `if (!projetSupprimer) return` avant le `dispatch` + remise à `null` · template literal écrit en texte JSX (backticks affichés tels quels) → texte + `{valeur}` dans un `<p>` · `children` obligatoire dans ses props. **3 tests passés.**
- **Reporté à l'habillage (sa décision)** : titre de la vue (« Toutes les tâches » / nom du projet affiché).

---

**Niveaux** : `bind` 🟢 (cycle fermé) · méthode en flèche dans une classe 🟡 (nommée) · tri des dépendances 🟢 · un seul propriétaire par donnée 🟡 (rechute) · comparer des `id` 🟡 · `<Dialog />` réutilisable 🟢 · `value` / texte d'une `<option>` 🟢 · `as` sur garantie structurelle 🟡 · donnée dérivée filtrée 🟡 · `filter` avant `map` 🟡 · HTML valide dans un `<ul>` 🟢 (corrigé) · texte + `{}` en JSX vs template literal 🔴 → corrigé · state `T | null` + garde 🟢.

**⚠️ Mes erreurs**
1. Consigne du glissement donnée avant la création de tâches, alors que le fonctionnel passe d'abord → recadré par lui.
2. Vue « Toutes » : trois consignes successives au gré de ses hésitations, dont une présentée comme « la forme la plus propre » → a pesé sur son choix (« tu es convaincant »). **Correctif** : poser les deux options et leurs conséquences en une fois, puis laisser trancher, sans réécrire la consigne à chaque aller-retour.

**🔄 Cycle de reprise** : `bind` → **fermé** · `FormData` + `fromEntries` → ≈ 15 novembre · `Map` / `Set` → ≈ 18 novembre · ErrorBoundary / code du parent → à recroiser.

**🔄 Rotation** : **entrent** — avant de créer un state, vérifier qu'il n'existe pas · texte JSX + `{}` vs template literal · `filter` dans une constante avant le `map` · `as` : qui garantit la valeur ? · un `onChange` qui ne fait rien. **Sort** — `bind` (cycle fermé, basse priorité). **Restent** — `setTimeout` / file d'attente · action dans `onSubmit` vs `onClick` · type par défaut d'un `<button>` · `this.methode()` vs `super.methode()` · règle reducer / `useState` local.

**⏭️ Prochaine étape — Todo List, fonctionnel restant**
1. **Déplier une tâche** (détails, exigence Odin) — `useState` local.
2. **Modifier une tâche** — `<Dialog />` pré-rempli (`defaultValue`), action `modifierTache` existante.
3. **`localStorage`** (exigence Odin) : lecture validée au démarrage + écriture à chaque changement + **erreur personnalisée** `ErreurDonnees`.
4. Factory `creerTodo` · compteur par projet (`reduce` accumulateur objet) · dates (`Date` natif ou `date-fns`, à décider).
5. Puis l'habillage : titre de la vue, couleur par priorité, glissement mobile, `<label>` visibles.
6. Créneau court **event loop** toujours en attente.

## Session 148 — Révisions formulaire / JSX + déplier et modifier une tâche + factory + `localStorage` (écriture et lecture)

**Durée** : 2h30 (mardi midi ~1h45 avec pause repas + ~45 min en fin de journée). Énergie bonne au départ. **Agacement fort vers 13h40** (voir plus bas), puis reprise en micro-étapes sans accroc.

**🎹 Raccourci** : `Alt+Maj+→` / `←` (Expand / Shrink Selection) — oublié, rappelé. Reconduit.

---

### Révision éclair (2 items)

- **Déboguer — formulaire** 🟢 : action déplacée dans `onSubmit`, `type="button"` sur Effacer, `type="submit"` explicite. Question préalable légitime (« quelle méthode tu veux me faire travailler ? ») → consigne qui ne nommait pas les notions visées.
- **Prédire — texte JSX / template literal / `&&` sur `0`** 🟢 4/4. Sa ligne 1 (`` `Monture $Ray-Ban` ``) était **plus juste que mon explication de S147** : en JSX, `{nom}` reste une expression même au milieu d'un texte entre backticks.

### Todo List

- **Déplier une tâche** : `<details>` / `<summary>` (MDN relu, « première fois je crois »). 1ᵉʳ jet avec case et poubelle **dans** le `<summary>` → sorties (élément interactif dans un `<summary>` annoncé comme bouton = imbrication interdite). `flex` gardé sur le `<summary>` (le `<h3>` bloc passait sous le triangle). Version pro du marqueur (`list-none` + chevron `group-open:rotate-90`) → **habillage**.
- **Modifier une tâche** : state `Tache | null` + `showModal()` + 4 `defaultValue` (dont `defaultValue` sur le `<select>`, question posée) 🟢. 🔴 `id`, `idProjet`, `fait` **recalculés** au lieu d'être conservés (`data.get("id")` → `"null"`, tâche déplacée, case décochée) → `{ ...tacheAModifier, … }` + garde, **donné**.
- **`key` pour remonter des champs à `defaultValue`** 🟡 : **3 explications écrites échouées** (« je ne comprends pas pourquoi c'est indispensable, le state transporte déjà les infos »). **Débloqué par l'observation** : même parcours sans `key` (priorité figée sur Faible) puis avec. Repère : `defaultValue` ne se lit qu'à la naissance du champ, la `key` le fait renaître. `key` sur une `<div>` autour des champs, **pas sur le `<Dialog />`** (la modale se refermerait).
- **Factory** (`Todo-utils.ts`) : `lireChampsTache(data)` 🟢 · utilisée dans Modifier : `lireChampsTache(data)` **sans `...`** dans l'objet → `PARSE_ERROR` (lu comme une déclaration de méthode) → formes possibles d'une ligne d'objet expliquées 🟡 · `creerTodo(data, idProjet)` : `state` inaccessible hors du composant → le calcul reste à l'appel, la fonction reçoit le résultat (**donné**) · `{ ...creerTodo(…) }` superflu (un seul objet, rien à combiner). Type de retour en utility type : **non fait**.
- **`localStorage`** : `setItem` d'abord pensé dans le reducer → **dans un `useEffect` sur `[state]`** (reducer pur) 🟢 · clé renommée `"todo-list"` (les deux projets partagent `localhost:5173`) · lecture au démarrage par le **3ᵉ argument de `useReducer`** (`init`), écrit seul en flèche 🟢 · version nommée `lireEtat(etatParDefaut)` donnée pour comparaison · React passe le 2ᵉ argument au 3ᵉ 🟡 (deux questions). Validation des données : **pas encore faite**.
- **Décisions** : compteur par projet en `.length` d'abord (proposé par lui, légitime), puis réécrit en `reduce` pour comparer (rattrapage de la dette) · **dates = cours complet** (« pas du tout maîtrisé ») · soulignés rouges dans le `<textarea>` → `lang="en"` du scaffold, passer `index.html` en **`lang="fr"`** (de mémoire, à appliquer).

---

**Niveaux** : action dans `onSubmit` / type d'un `<button>` 🟢 (à confirmer une fois) · texte JSX + `{}` 🟢 · `<details>` / `<summary>` 🟢 · interactif hors du `<summary>` 🟡 · `defaultValue` (+ `<select>`) 🟢 · spread pour conserver des propriétés 🟡 · **`key` pour remonter un champ 🟡** (compris par l'observation) · spread d'un appel dans un objet 🟡 · fonction hors composant ne voit pas le state 🟡 · `useEffect` + `setItem` 🟢 · `init` de `useReducer` 🟢 écrit / 🟡 compris.

**⚠️ Retour de Frédéric (13h40)** — « Ça fait plusieurs sessions que je n'apprécie plus travailler avec toi. Tu as changé radicalement ta façon d'expliquer et de donner les exercices. C'est illisible, je n'y arrive plus, je perds mon sang-froid. » À la question « quelle période marchait bien ? » : « Je ne sais pas, mais ça se dégrade, c'est beaucoup moins lisible qu'avant. »
**Ce qui a marché juste après** : micro-étapes (une fonction, un squelette à un trou, un test), réponses de 3 à 6 lignes.

**⚠️ Mes erreurs**
1. **Consigne de la factory empilant 4 choses** (deux fonctions, un utility type, le refactor de deux dialogs) — déclencheur direct de l'agacement.
2. **`key` expliquée trois fois par écrit** avant de passer à l'observation, alors que la règle (§6) dit d'observer dès que l'abstrait ne passe pas.
3. **Corrections de 3-4 points d'un coup** sur chaque rendu.


**🔄 Cycle de reprise** : `FormData` + `fromEntries` → ≈ 15 novembre · `Map` / `Set` → ≈ 18 novembre · ErrorBoundary / code du parent → à recroiser.

**🔄 Rotation** : **entrent** — `key` pour remonter un champ à `defaultValue` (priorité haute) · formes d'une ligne dans un objet (`clé: valeur` / raccourci / `...` / méthode) · une fonction hors composant ne voit pas le state · `init` de `useReducer`. **Descendent** — action dans `onSubmit` / type de `<button>` · texte JSX vs template literal (justes à froid). **Restent** — `setTimeout` / file d'attente · avant de créer un state, vérifier qu'il n'existe pas · `as` : qui garantit la valeur ? · tri des dépendances.

**⏭️ Prochaine étape**
1. **Valider les données lues** dans `lireEtat` (`try` / `catch`, `Array.isArray`, `every`) + `class ErreurDonnees extends Error`.
2. Compteur de tâches par projet : `.length`, puis la version `reduce` pour comparer.
3. **Cours complet sur les dates** (`Date` natif ou `date-fns`).
4. Habillage : `lang="fr"` · titre de la vue · couleur par priorité · chevron du `<details>` · `<label>` visibles · glissement mobile.
5. Puis la Library.

## Session 149 — Todo List : validation du `localStorage` + `ErreurDonnees`, compteur (`reduce`), cours sur les dates (`date-fns`), tri, changement de projet

**Durée** : 5h15 (mercredi : 9h35-12h05 + 13h30-16h35). Énergie bonne, fatigue en toute fin de séance. Pas d'arrêt net. Deux reproches justifiés sur mes explications (voir plus bas).

**🎹 Raccourci** : `Alt+Maj+→` / `←` (Expand / Shrink Selection) — peu utilisé, reconduit.

---

### Révision éclair (2 items)

- **Prédire — `memo`** 🟡 : « se rend de nouveau » ✅ + objet littéral identifié comme cause ✅. **`verre` jugé faussement comme nouvelle référence** (`VERRES[0]`, constante hors composant = même objet). Piste `useMemo` juste ; règle donnée : objet fixe → constante hors composant · objet calculé → `useMemo`.
- **Déboguer — `this.methode()` vs `super.methode()`** 🔴 : récursion infinie non vue, piste `bind` (problème de `this` perdu, hors sujet). Réponse demandée. **La syntaxe `super.methode()` lui était inconnue** (seul `super(...)` du constructeur connu) → cours : deux usages de `super` (fonction dans le constructeur / objet devant un point dans une méthode).

### Todo List

**Validation des données lues (`lireEtat`)**
- `try` / `catch` autour de `JSON.parse` 🟢 (`catch` sans paramètre, bonne forme) · retouche : renvoyer `etatParDefaut` (le paramètre) et pas `ETAT_INITIAL`.
- Validation de forme par early returns (`Array.isArray`, `typeof`) 🟢 après un indice : 1ᵉʳ jet `typeof stockage === "object"` (insuffisant, `{"a":1}` est un objet).
- **`ErreurDonnees`** 🟢 après corrections : `throw new Error` au lieu de `ErreurDonnees` (le `instanceof` ne pouvait jamais être vrai) · `name` passé en paramètre au lieu d'être fixé · `e! instanceof` (assertion inutile). Classe en TS expliquée à sa demande : seule différence ici = annotation du paramètre ; propriétés propres à déclarer en tête de classe (non pratiqué). `console.warn` découvert. Double appel de l'initialiseur par `StrictMode` observé dans la console.
- **`every` décrit, non fait (décision commune)** : la validation vérifie la forme, pas le contenu des tâches. **Démontré en direct** l'après-midi : une ancienne tâche mal formée a fait planter `formaterEcheance` → c'est le trou que comblera Zod.

**Compteur de tâches par projet**
- `.length` + `filter` dans le `.map()` 🟢 · `<p>` dans un `<button>` → `<span>`.
- **`reduce` accumulateur objet trouvé seul** 🟡 (`(acc[id] ?? 0) + 1`) — **dette historique rattrapée en contexte**, mais au prix d'un effort très long (recherches MDN plutôt que demander un 2ᵉ indice). Repère donné : au-delà de 15 min, demander un indice.
- `Record<string, number>` **recopié sans comprendre** → expliqué (clés inconnues à l'avance vs `interface` ; `{}` sans annotation = objet sans clé, TS refuse l'écriture). 🟡
- `.length` vs `reduce` : en production, `filter` + `.length` pour une petite liste (lisibilité) ; `reduce` = un seul passage.

**Cours sur les dates — `date-fns` adopté (installé)**
- `Date` natif : nombre de millisecondes · mois à 0 🟢 · `getDate()` (jour du mois) vs `getDay()` (semaine), jamais vu · une date seule (`"2026-11-15"`) est lue en UTC, alors qu'une échéance se compare **en jours**.
- `date-fns` : `parseISO` (jour local) · `format` + motif + `{ locale: fr }` · `isBefore` + `startOfToday` · `compareAsc`. Doc officielle (date-fns.org) difficile à parcourir pour lui ; README npm lu.
- ⚠️ **Première explication trop succincte** (outil présenté comme connu) → « recommence » → cours détaillé, qui a fonctionné.
- `formaterEcheance` 🟢 après correction : **formatage appliqué au stockage** au lieu de l'affichage 🔴 (modale Modifier cassée, `parseISO` impossible) → règle : **stocker la donnée brute, formater à l'affichage** · cas de la chaîne vide ajouté seul.
- `estEnRetard` 🟢 : `||` entre deux conditions **du premier coup** (dette `??` / `||`) · `parseISO` oublié deux fois (`isBefore`, `sort`) : sa version de `date-fns` accepte une chaîne sans que TS ne réagisse, et le décalage UTC tombe du bon côté en France.
- `lang="fr"` appliqué dans `index.html` ✅. Le champ date en `mm/dd/yyyy` venait de **l'aperçu de VS Code** (langue anglaise), pas de Chrome.

**Tri des tâches**
- `compareAsc` dans `sort` 🟢 · tâches sans échéance en bas : comparateur avec cas en tableau → **correction demandée et donnée** · `NaN` traité comme égalité par `sort` (tâche sans date « en bas » par coïncidence).
- **Choix de Frédéric : priorité, puis date**, via **deux `sort` chaînés** (sa solution, valide grâce à la stabilité de `sort`).
- Table de traduction `ORDRE_PRIORITE: Record<Priorite, number>` + **crochets avec une clé variable** 🔴 : `Object.values` proposé → **réponse complète donnée alors qu'il demandait un indice** (reproche justifié). Constante laissée dans le `sort` (son choix, pour la lisibilité).
- Mots plutôt que nombres dans `value` (sens de la donnée, évolutivité) : compris.
- **Initiative produit** : priorité sortie du `<details>` pour être visible dans la liste. À l'habillage : libellé stocké (`basse`) ≠ libellé affiché (« Faible »).

**Autres**
- Type de retour `Omit<Tache, "id" | "idProjet" | "fait">` écrit seul 🟢.
- DRY `creerTodo` / `lireChampsTache` **refusé (son choix, assumé)**.
- **Changer une tâche de projet** : `<select>` + `.map()` + `value={p.id}` + `defaultValue` 🟢 (après rappel de `value`) · `defaultValue` d'un `select` = recherche par correspondance (compris) · ligne `idProjet: String(data.get("projet"))` donnée (fatigue). 4 tests passés.
- Confirmation avant suppression d'une tâche : **jugée inutile par lui**.

---

**Niveaux** : `memo` / constante hors composant 🟡 · `super.methode()` 🔴 (syntaxe neuve) · `try` / `catch` + validation de forme 🟢 · `ErreurDonnees` en TS 🟢 · `reduce` accumulateur objet 🟡 (seul, effort long) · `Record` (pourquoi) 🟡 · `Date` natif (mois à 0, `getDate`) 🟢 · `date-fns` : `parseISO` / `format` / `isBefore` / `startOfToday` 🟢 compris, `parseISO` 🟡 (oublié deux fois) · donnée brute vs affichage 🔴 → corrigé · `||` entre deux conditions 🟢 · comparateur de `sort` à plusieurs cas 🟡 · stabilité de `sort` 🟢 (son idée) · crochets avec clé variable 🔴 · `Omit` 🟢 · `<select>` dynamique 🟢.

**🆕 Notions ouvertes ce jour** : `date-fns` · `super.methode()` · tri à plusieurs critères · table de traduction (`Record` + crochets).

**⚠️ Mes erreurs**
1. **Cours `date-fns` d'abord trop succinct**, comme si l'outil était connu. **Correctif** : un outil neuf = cours complet (ce que reçoit et renvoie chaque fonction, forme longue puis compressée), même s'il paraît simple.
2. **Indice des crochets mal formulé, puis réponse entière** au lieu d'un meilleur indice. **Correctif** : un indice qui débloque = **suivre une seule valeur concrète** (`a.priorite` vaut `"haute"` → que vaut `ORDRE_PRIORITE["haute"]` ?) et laisser écrire la ligne.

**🔄 Cycle de reprise** : `reduce` accumulateur objet → N+2 ≈ S151 (autre forme) · `date-fns` → N+2 (couleur « En retard » à l'habillage) · `super.methode()` → recroiser · `FormData` + `fromEntries` → ≈ 15 novembre · `Map` / `Set` → ≈ 18 novembre · ErreurBoundary / code du parent → à recroiser.

**🚫 Interdit de tirage levé** : `reduce` accumulateur objet a été porté par un vrai chiffre à l'écran. **Demande de Frédéric : `reduce` entre en rotation sous plusieurs formes, de plus en plus complexes.**

**🔄 Rotation** : **entrent** — `reduce` sous plusieurs formes (priorité haute) · crochets avec une clé variable / table de traduction (priorité haute) · `Record<A, B>` : pourquoi l'annoter · `super.methode()` vs `this.methode()` (reste, priorité haute) · stocker brut / formater à l'affichage · `Date` : mois à 0, `getDate` / `getDay`, date seule lue en UTC · comparateur de `sort` à plusieurs cas · objet fixe → constante hors composant (`memo`). **Sort** — `??` vs `||` (juste en contexte, à confirmer une fois plus tard).

**⏭️ Prochaine étape**
1. **Habillage de la Todo List** : titre de la vue · couleur par priorité et pour « En retard » · libellés de priorité (stocké → affiché) · chevron du `<details>` · `<label>` visibles · glissement mobile (~375 px puis `md`).
2. PR de la branche `todo-list`, puis **la Library** (JS pur, classes, champ en flèche).
3. Créneau court **event loop** (toujours en attente).