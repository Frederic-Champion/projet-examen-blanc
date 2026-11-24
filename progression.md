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

## Session 150 — Révisions `reduce` / `super` + cours-résumé (date-fns, `<select>`, `sort`) + habillage : mise en page et panneaux mobiles

**Durée** : 3h15 (jeudi, 12h50-15h15 + ~1h15 en fin de journée). Énergie bonne. Agacement passager sur la mise en page du bouton du bas.

**🎹 Raccourci** : `Alt+Maj+→` / `←` — peu utilisé, reconduit.

---

### Révision éclair (2 items)

- **Écrire — `reduce` accumulateur objet (total par vendeur)** 🟡 : structure entièrement juste (accumulateur `{}`, crochets avec clé variable, `?? 0`, `return acc`). **Une clé fausse** : `acc[a.montant]` lu au lieu de `acc[a.vendeur]` → lire et écrire **la même case**. N+1 de la dette, autre forme.
- **Prédire — `super.methode()` vs `this.methode()`** 🟢 2/2, à froid, le lendemain du cours.

### Point sur les nouveautés + cours-résumé (à sa demande)

Liste des notions neuves de S149-S150 avec niveaux, puis résumé de cours : **`date-fns`** (circuit `parseISO` → `format` / `isBefore` / `compareAsc`, motifs, `locale`, trois pièges) · **`<select>` dynamique** (`value` identifie, texte affiche, `defaultValue` = correspondance) · **stabilité de `sort`** (critère secondaire trié en premier ; forme à comparateur unique plus courante en production).

### Habillage — mené par lui (travail libre)

- **Décision** : l'habillage est son terrain ; je ne cadre que les pièges techniques. Donnés : **ne jamais construire une classe Tailwind par morceaux** (table de classes complètes `Record<Priorite, string>`) · chevron du `<details>` (`list-none`, `group` / `group-open:rotate-90`, expliqué à sa demande 🟢) · `<label>` visibles · travail en mode appareil de Chrome · Lighthouse en fin d'habillage.
- **Mise en page** : `w-full` vs `flex-1` dans un `flex-col` (axe principal = hauteur) 🟡 · **une marge éloigne, elle n'agrandit pas** 🟢 · `self-stretch` + marges vs `w-full` + marges (débordement) 🟡.
- **Bouton « Ajouter un projet » en bas, comme un footer** : trois propositions successives (`mt-auto` + `self-end` → `fixed` refusé → chaîne `h-screen` + `flex-1` + `min-h-0` + `overflow-y-auto`, puis correction après capture : barre de navigation `fixed`). **Résolu par lui, autrement.** `min-h-screen` = plancher (la liste ne défile pas) vs `h-screen` 🟡.
- **Panneaux mobiles — option A retenue** (clic sur un projet → tâches, bouton de retour), **B possible ensuite** (`scroll-snap`, neuf, non vu). Recommandation « tâches d'abord à l'ouverture » donnée ; **état initial sur les projets (son choix)**. Icônes : `ChevronLeft` / `Folder` + un mot.
- **Écrit seul** : booléen `voirProjet` · `inert` sur le panneau caché + **variante `inert:opacity-0`** (provisoire, pour observer) · **titre de la vue** `find(...)?.nom || "Toutes"` 🟢 · clic sur un projet ou « Toutes » → panneau des tâches.
- **Corrigés** : panneau projets `fixed inset-0` sans `inert:opacity-0` (superposition) · classe `inert` seule (inexistante en Tailwind) · `inert={!voirProjet && true}` → `inert={!voirProjet}` · bouton « Ajouter une tache » branché sur `refProjet` (copier-coller).
- **Carte entière cliquable** : bouton de choix en `flex-1` avec le padding **sur le bouton**, poubelle à côté (**un bouton dans un bouton est interdit**) — code donné.

### Décisions

- **Calendrier** : jugé indispensable par lui → appris plus tard avec le **composant Calendar de shadcn/ui** (React DayPicker + `date-fns`, à vérifier) sur le SaaS (rendez-vous), pas dans la Todo List.

---

**Niveaux** : `reduce` accumulateur objet 🟡 (structure 🟢, clé 🔴) · `super.methode()` 🟢 (à froid) · `group` / `group-open:` 🟢 compris · `w-full` / `flex-1` / `self-stretch` en `flex-col` 🟡 · marge vs taille 🟢 · `h-screen` vs `min-h-screen` + `min-h-0` pour un défilement interne 🟡 · `inert` + variante `inert:` 🟢 · `find` + `?.` + `||` pour un libellé 🟢 · bouton dans un bouton 🟢 compris.

**⚠️ Mes erreurs**
1. **Trois solutions de mise en page à la suite** pour le bouton du bas, chacune interprétant son besoin (« en bas », « ne bouge pas », « comme un footer ») au lieu de le faire préciser. Puis une consigne écrite **sans connaître le layout parent** (barre `fixed`). **Correctif** : avant toute solution de mise en page, demander **le comportement attendu au défilement** et **la chaîne des parents** (capture des Éléments).

**🔄 Cycle de reprise** : `reduce` accumulateur objet → N+2 ≈ S151 (autre forme) · `super.methode()` → N+5 · `date-fns` → couleur « En retard » à l'habillage · `FormData` + `fromEntries` → ≈ 15 novembre · `Map` / `Set` → ≈ 18 novembre.

**🔄 Rotation** : **entrent** — `flex-1` agit sur l'axe principal (hauteur en `flex-col`) · `self-stretch` vs `w-full` avec marges · `min-h-screen` (plancher) vs `h-screen` + `min-h-0` + `overflow-y-auto` · pas de classe Tailwind construite par morceaux · bouton dans un bouton interdit. **Restent en priorité haute** — `reduce` sous plusieurs formes · crochets / table de traduction · `parseISO` avant toute échéance.

**⏭️ Prochaine étape**
1. **Glissement** : `translate-x` + `transition` à la place de `inert:opacity-0` · panneau des tâches en hauteur fixe (liste qui défile) · boutons de bascule en valeur explicite (`false` / `true`) · deux colonnes à `md`.
2. Habillage libre (couleurs de priorité, libellés, chevron, `<label>`), puis Lighthouse.
3. PR de `todo-list`, puis **la Library**. Créneau court **event loop** toujours en attente.

## Session 151 — Révisions crochets / `reduce` + habillage Todo List : glissement, liste qui défile, deux colonnes à `md`, palette sombre

**Durée** : ~3h (vendredi, 13h05-14h10 + 16h45-18h50). Énergie bonne. Agacement passager (« tu t'enflammes ») sur la solution `matchMedia`, puis incompréhension sur `@layer theme` / `@theme`.

**🎹 Raccourci** : `Alt+Maj+→` / `←` (Expand / Shrink Selection) — peu utilisé, reconduit.

---

### Révision éclair (2 items)

- **Prédire — crochets vs point** 🟡 : `LIBELLES[priorite]` juste. Lignes `LIBELLES.priorite` / `LIBELLES["priorite"]` prédites en **erreur** au lieu de `undefined` → lire une clé absente renvoie `undefined` sans planter (le plantage vient de lire une propriété **sur** `undefined`). Son réflexe correspond à TS (souligné à l'écriture), pas à l'exécution.
- **Écrire — `reduce` qui regroupe dans des tableaux** 🔴 → 🟡 : bloqué, indice demandé (tableau tour par tour + squelette à un trou, rapproché de `(acc[k] ?? 0) + 1`). 2ᵉ jet `(acc[k] || []) + [v.monture]` → `+` convertit les tableaux en chaînes. **Réponse donnée** : `[...(acc[k] ?? []), v.monture]`. Structure du `reduce` juste, geste « ajouter à un tableau » absent. Frustration (« après tout ce temps »). 3ᵉ forme de `reduce`, effort long → fragile.

### Todo List — habillage

**Étape 1 — glissement des deux panneaux** 🟢
- Panneau Projets déjà en `inert:-translate-x-full` (son idée : le déplacement suit l'état `inert`, pas de désynchronisation possible).
- Panneau Tâches en miroir : `fixed inset-0`, `bg-*`, `transition-transform`, **`inert:translate-x-full` trouvé seul** · `mx-4` → `px-4` (avec une marge, le fond laissait voir l'autre panneau sur les bords) · `ChevronRight` sur TACHES (direction réelle). Tests passés, barre de nav d'`App.tsx` reste au-dessus.

**Étape 2 — liste qui défile** 🟢 : `min-h-0` **trouvé seul** en comparant ses deux listes · `min-h-screen` retiré (redondant avec `fixed inset-0`, `100vh` peut dépasser la zone visible sur mobile). Tests passés.

**Étape 3 — deux colonnes à `md`**
- Piège : `inert` est un attribut posé par le JS, aucune classe `md:` ne l'annule.
- **Ma première proposition (`matchMedia` + hook `useEstLarge`) refusée par lui** : « tiré par les cheveux ». **Objection fondée.** Solution retenue, CSS seul : `invisible` (`visibility: hidden` = ni clic, ni Tab, ni lecteur d'écran, annulable par `md:visible`) + translate dans `cn(...)` conditionnel · `transition-all` pour que la visibilité attende la fin du glissement.
- 1ᵉʳ jet du panneau Tâches avec `visible` au lieu d'`invisible` → corrigé.
- Consigne `md:` : `md:flex md:h-screen` sur le conteneur · `md:static md:visible md:translate-x-0` sur les panneaux · `md:hidden` sur les boutons de bascule. **Deux colonnes visibles sur capture ; tests 3a / 3b non confirmés ; boutons de bascule encore visibles à `md` → `md:hidden` à vérifier.**
- `visibility` (et pas `inert`) pour un blocage qui dépend de la largeur : motif pro compris. `inert` reste l'outil quand le blocage ne dépend pas de l'écran (fond d'une modale).

**Palette sombre (tokens par rôle, `Todo-list.css`)**
- Palette proposée (fond / surface / bordure / texte ×2 / accent / priorités / retard) : **identique à ce qu'il comptait faire seul.**
- 🔴 → 🟡 **`@layer theme { --color-… }` au lieu de `@theme`** → erreurs `{ expected`. Deux explications par image (étagère / bon de commande) **sans succès** (« rien compris, change l'angle »). **Ce qui a débloqué : partir de ses propres fichiers** (`shopping-cart.css` et le CSS du portfolio collés par lui) → `@theme` **crée** les couleurs (fabrique les classes) · `.dark { }` (emballé ou non dans `@layer theme`) **change leur valeur**. Vérification par l'autocomplétion : classes `bg-todo-*` présentes (capture). Compris, à confirmer.
- `var(--color-sky-400/15)` invalide (`/15` = syntaxe de classe) → opacité dans la classe (`bg-todo-accent/15`) · fond et surface sur la même valeur signalés.
- `var()` expliqué : la palette Tailwind v4 est elle-même faite de variables CSS, `var()` en lit une (CSS natif). Variante `@theme inline` à lire sur la page « Theme variables » (non vérifiée).
- Sélecteur de couleur de VS Code : ni sur une classe, ni sur un `var()` (renvoi, pas une couleur) → seulement sur une valeur écrite. `var()` gardé.
- **Ombre sur les quatre côtés** : décalages à `0` + flou + étalement, token `--shadow-todo-carte`. Sur fond sombre : halo clair léger ou couleur d'accent.
- **Ombre coupée sur les côtés** : hypothèse donnée sans le code à jour, `overflow-y-auto` force aussi l'axe x en `auto` → la liste découpe l'ombre des cartes en `w-full` → padding sur le `<ul>`. **Vérification (retirer `overflow-y-auto`) non faite.**

---

**Niveaux** : crochets avec variable 🟢 · clé absente → `undefined` 🟡 · `reduce` regroupement en tableaux 🔴 (réponse donnée) · `+` sur des tableaux → chaîne 🟡 · `translate-x` + `transition` sur deux panneaux 🟢 · variante `inert:` 🟢 · marge vs padding pour un fond 🟢 · `min-h-0` sur une liste qui défile 🟢 · `inert` non pilotable en CSS 🟢 compris · `invisible` / `visibility` 🟢 compris, appliqué avec un écart · `transition-all` pour la visibilité 🟡 · deux colonnes à `md` 🟡 (tests à confirmer) · `@theme` vs `@layer theme` / `.dark` 🟡 (compris par ses fichiers) · `var()` 🟢 · opacité `/` = classe, pas CSS 🟡 · `box-shadow` (décalage / flou / étalement) 🟢 · `overflow` un axe → l'autre `auto` 🟡 (hypothèse non vérifiée).

**🆕 Notions ouvertes ce jour** : `visibility` comme alternative responsive à `inert` · `transition-all` + `visibility` · `box-shadow` à quatre côtés.

**⚠️ Mes erreurs**
1. **`matchMedia` + hook personnalisé proposé avant de chercher une solution CSS native**, avec une notion neuve (API navigateur) au milieu d'une étape d'habillage. Recadré par lui. **Correctif** : pour un problème de mise en page, chercher d'abord la solution CSS / Tailwind ; ne sortir du JS que si le CSS ne peut pas.
2. **`@layer theme` / `@theme` expliqué deux fois par une image abstraite** avant de partir de son propre code. **Correctif** : quand une notion touche quelque chose qu'il a déjà écrit, montrer d'abord ses fichiers (deux blocs côte à côte), l'image ne vient qu'après.

**🔄 Cycle de reprise** : `FormData` + `fromEntries` → ≈ 15 novembre · `Map` / `Set` → ≈ 18 novembre · `reduce` → regroupement en tableaux à reprendre sur un autre code · ErrorBoundary / code du parent → à recroiser · `date-fns` → couleur « En retard » à l'habillage.

**🔄 Rotation** : **entrent** — `reduce` regroupement dans des tableaux (`[...(acc[k] ?? []), x]`, priorité haute) · `+` entre deux tableaux → chaîne · lire une clé absente → `undefined`, pas d'erreur · `@theme` (crée) vs `.dark` / `@layer theme` (change la valeur) · `inert` (attribut JS) vs `invisible` (classe, annulable par `md:`) · `overflow` sur un axe → l'autre passe en `auto`. **Restent** — crochets / table de traduction · `parseISO` avant toute échéance · `super.methode()` vs `this.methode()` · `setTimeout` / file d'attente.

**⏭️ Prochaine étape**
1. **Il partage le code à jour.** Confirmer : tests 3a / 3b · `md:hidden` sur les boutons de bascule · ombre coupée (retirer `overflow-y-auto` pour vérifier, puis padding sur le `<ul>`).
2. **Habillage libre** : couleurs de priorité (table `Record<Priorite, string>` de classes complètes) · libellés stocké → affiché · couleur « En retard » · chevron du `<details>` · `<label>` visibles · contraste texte secondaire / surface (DevTools) · Lighthouse.
3. PR de la branche `todo-list`, puis **la Library** (JS pur, classes, champ en flèche).
4. En révision : `FormData` (≈ 15 novembre) · `reduce` regroupement · créneau court **event loop** toujours en attente.

## Session 152 — Révisions `FormData` / `reduce` + clôture de la Todo List : compteur, pluriel, chevron, `<label>`, modales, `@keyframes`, Lighthouse, PR

**Durée** : 3h (mardi, 13h-16h50 avec pauses). Énergie bonne. **Frustration forte sur `reduce`** (« je ne suis pas un idiot, il y a forcément un truc que tu m'expliques mal »), puis séance fluide.

**🎹 Raccourci** : `Alt+Maj+→` / `←` (Expand / Shrink Selection) — maintenu à sa demande.

---

### Révision éclair (2 items)

- **Écrire — `FormData`** 🟡 : `preventDefault`, `new FormData`, boucle `for...of` sur les paires justes. Oublis : **`new FormData()` sans `e.currentTarget`** (formulaire vide) · puis **`Object.entries` au lieu d'`Object.fromEntries`** → réponse demandée et donnée (tableau `entries` démonte / `fromEntries` remonte). Pas revenu à froid à l'échéance prévue (≈ 15 novembre).
- **Déboguer — `reduce` qui regroupe** 🔴 : `[...acc[k], c.nom] || [c.nom]` → le spread de `undefined` plante **avant** que le `||` soit lu. **3ᵉ échec sur le regroupement (S150, S151, S152) → cours direct, autre angle** : le problème n'est pas `reduce` (structure juste), c'est **la place du repli** (sur la case, avant l'étalement, pas sur le résultat). **Recette en 3 temps** donnée (lire la case ou valeur vide → fabriquer → ranger), avec tableau compter / additionner / regrouper. **Forme en deux lignes (`const dejaLa = acc[k] ?? []`) recommandée** tant que la ligne compressée ne vient pas seule.
- Question de suivi : pourquoi pas de spread de `undefined` → le spread de tableau exige quelque chose de **parcourable** · `{...undefined}` (objet) ne plante pas, ce qui brouille l'intuition. 🟢 compris.

### Todo List — fin du fonctionnel et de l'habillage

- **Couleur de priorité** 🔴 → 🟢 : `` `border-todo-${...}` `` = **classe construite par morceaux** (rechute de la règle S150) → table `PRIORITE_COULEUR: Record<Priorite, string>` de classes complètes, sortie du composant, passée à `cn()`. `md` isolé retiré des `className`.
- **Compteur « en cours »** 🟢 : comptait aussi les tâches faites → constante dérivée `tacheEnCours` (`filter`) utilisée pour « Toutes » et le `reduce`. `=== false` → `!t.fait` signalé.
- **Pluriel** 🟢 : fonction pure `libelleCompteur(n)` dans `Todo-utils.ts` (chaîne, pas du JSX) · condition `n <= 0` corrigée en `n <= 1` **par l'observation** (« 1 tâches » à l'écran) · `?? "0"` → `?? 0`. Version pro : fonction simple pour une app monolingue ; i18n / `Intl.PluralRules` pour plusieurs langues (de mémoire).
- **Badge « Retard »** : token `todo-retard`. `<p>` autour du `&&` **gardé (son choix, il tient la mise en page)**.
- **Chevron du `<details>`** 🟢 : `group` / `list-none` / `group-open:rotate-90` / `transition-transform`, écrit seul. **Case à cocher revenue dans le `<summary>`** : test passé (se coche sans déplier) → compromis assumé ; Tab non vérifié.
- **Orthographe / accents des textes affichés** ✅.
- **Modales** : `blur-lg` sur `::backdrop` sans effet → **`backdrop:backdrop-blur-*`** (`filter` floute l'élément / `backdrop-filter` floute ce qui est derrière) 🟢 · **`<label>` visibles** : forme enveloppante recommandée et retenue (les modales Ajouter / Modifier coexistent dans le DOM → `htmlFor` + `id` = doublons) · `aria-label` des champs retirés · **habillage des trois modales donné par moi à sa demande** (« aucune idée de comment habiller ») : constantes `CHAMP` / `LIBELLE`, champ plus sombre que la surface, `focus:ring` d'accent · questions posées et comprises : `[color-scheme:dark]` (éléments natifs dessinés par le navigateur, **placé une fois sur la racine**) · `resize-y` + `min-h-24` · largeur déplacée dans `Dialog` (`w-full max-w-sm`) au lieu d'un `w-72` en dur. Tests passés (focus par libellé, `key` des champs Modifier, changement de projet).
- **`@keyframes` — usage réel enfin** 🟡 : apparition d'une tâche (fondu + `translateY`) · `transition` impossible pour un élément qui naît (pas d'état « avant ») · token `--animate-apparition` + scénario en CSS pur · `motion-safe:` ajouté après remarque · `@keyframes` dans / hors `@theme` (dans = écrit seulement si utilisé, de mémoire) · émulation `prefers-reduced-motion` dans le panneau Rendering, faite. **Ressenti : « fébrile, risque de s'oublier »** → rotation.
- **Priorité en toutes lettres** 🟢 : une information ne passe jamais par la couleur seule → table `PRIORITE_LIBELLE`, mêmes mots que les `<option>`. **Tâche faite barrée** 🟢 : `t.fait && "line-through"` dans `cn()`.
- **Case à cocher** : `accent-*` + taille faits · rond = `appearance-none` + `rounded-full` + `checked:` (expliqué, non fait).
- **Lighthouse (mobile)** : **Accessibilité 100 · Bonnes pratiques 100** · SEO 82 (probablement `meta description`, hors sujet). Boutons Accueil / Retour d'`App.tsx` qui recouvrent le titre en mobile : signalé, habillage à sa main.
- **PR `todo-list` → fusion : faite.**

### Décisions

- **Calendrier** : pas dans la Todo List, **mais demande explicite : savoir le faire** → au SaaS (Calendar de shadcn/ui, rendez-vous).
- **Glissement au doigt (`scroll-snap`)** : cours léger donné (conteneur `overflow-x-auto snap-x snap-mandatory`, panneaux `w-full shrink-0 snap-start`, boutons en `scrollIntoView`, plus de state ni de `translate`) ; **à pratiquer plus tard**, il remplacerait le système actuel.

---

**Niveaux** : `FormData(e.currentTarget)` 🟡 · `entries` / `fromEntries` 🟡 · `reduce` : structure 🟢 / **place du repli 🔴 (cours donné)** · spread de tableau exige un itérable 🟢 · classe Tailwind par morceaux 🔴 → corrigé (rechute) · donnée dérivée `filter` 🟢 · fonction pure de libellé 🟢 · `group-open:` 🟢 · `blur` vs `backdrop-blur` 🟢 · `<label>` enveloppant 🟢 · `color-scheme` 🟡 · `@keyframes` + token `--animate-*` 🟡 (fébrile) · `motion-safe:` 🟢 · information pas par la couleur seule 🟢 · `appearance-none` 🟡 (expliqué) · `scroll-snap` 🟡 (cours léger, non pratiqué).

**🆕 Notions ouvertes ce jour** : `backdrop-filter` · `color-scheme` · `<label>` enveloppant · token `--animate-*` · `appearance-none` · `scroll-snap` (lecture).

**⚠️ Mes erreurs**
1. **Le placement du repli dans un `reduce` qui regroupe n'avait jamais été expliqué comme tel** : deux séances à corriger la ligne sans nommer le vrai problème (évaluation de gauche à droite, le spread plante avant le `||`). La règle des trois échecs est arrivée au 3ᵉ, pas avant.
2. Test 3 de la consigne « couleur de priorité » incompréhensible (« tape `"prio` dans un `<select>` »).

**🔄 Cycle de reprise** : `@keyframes` → N+2 ≈ S154 (demande) · `FormData` + `fromEntries` → recroiser ≈ S154 · `Map` / `Set` → ≈ 18 novembre (prochaine séance) · `reduce` regroupement → forme en deux lignes, sur un autre code · ErrorBoundary / code du parent → à recroiser.

**🔄 Rotation** : **entrent** — `reduce` : recette en 3 temps / place du repli (priorité haute) · `new FormData(e.currentTarget)` + `fromEntries` (priorité haute) · spread de tableau sur `undefined` vs spread d'objet · `@keyframes` + `--animate-*` + `motion-safe:` (demande) · `blur` vs `backdrop-blur` · `color-scheme` · `<label>` enveloppant vs `htmlFor` (ids en double) · pas de classe construite par morceaux (rechute, reste). **Sortent** — crochets avec variable / clé absente → `undefined` (justes en contexte).

**🗂️ Documents à mettre à jour** : `Projets_realises_Frederic` (Todo List terminée) · `dettes-apprentissage.md` (fin du chapitre Todo List : `reduce` accumulateur objet rattrapé en contexte, `@keyframes` en usage réel).

**⏭️ Prochaine étape**
1. **La Library (The Odin Project), JS pur** : énoncé à vérifier sur le site avant de cadrer · classes, champ en flèche, `this`.
2. Puis traduction composant classe → fonction + hooks.
3. Créneau court **event loop** toujours en attente.
4. Plus tard : calendrier (SaaS, shadcn/ui) · `scroll-snap`.

🆕 **Le chapitre Todo List est terminé.** Tu peux créer une nouvelle conversation pour la suite : **Library (Odin, JS pur, classes)**.

## Session 153 — Révisions `Map` / `reduce` + Library (Odin) : cadrage, projet `odin-library`, classe `Livre` en TS, début de l'affichage DOM

**Durée** : ~2h30 (mercredi, 13h-15h20 + ~20 min le soir). Énergie bonne. Pas d'arrêt net.

**🎹 Raccourci** : `Alt+Maj+→` / `←` (Expand / Shrink Selection) — non utilisé, **gardé à sa demande**.

---

### Révision éclair (2 items)

- **Prédire — `Map` / `Set`** 🟡 : `Set` 3/3 (doublon supprimé, ordre conservé). `Map` 0/3 : **lecture trop rapide** (3ᵉ `set("Ray-Ban", 7)` non vu, `get` d'une clé absente mal lu). Règle énoncée juste par lui ensuite (`set` sur une clé existante remplace la valeur). Famille « consigne lue trop vite », pas un trou.
- **Écrire — `reduce` qui regroupe** 🟢 : `[...(acc[a.type] || []), a.reference]`, **repli placé sur la case avant l'étalement, du premier coup, en forme compressée**. Après 3 échecs (S150-S152). `||` correct ici, `??` plus précis.

### Library (The Odin Project) — cadrage

- **Énoncé vérifié sur theodinproject.com** : tableau de livres + constructeur `Book` · fonction d'ajout hors du constructeur · `id` par `crypto.randomUUID()` · affichage séparé des données · bouton « New Book » + formulaire (`<dialog>` possible, `preventDefault`) · bouton supprimer relié par attribut `data-` portant l'`id` · bascule « lu » sur le prototype. Stockage facultatif.
- **Question de fond** : pourquoi pas de classe en React ? → une méthode qui modifie l'objet garde la même référence, React ne réaffiche pas ; composant classe = forme ancienne. Le DOM est le terrain naturel de l'exercice.
- **🎓 Décisions** : JS pur sur le **DOM, en TypeScript** (Vite `vanilla-ts`) · **CSS classique, sans Tailwind** (réactiver la Phase 1 ; habillage à la fin) · livres (pas l'optique) · nouveau dépôt **`odin-library`**, branche principale `main`, une branche par étape · `class Livre` à la place du constructeur (une méthode de classe vit sur le prototype : conforme à l'étape 6).
- **📏 Condition posée par Frédéric** : après la Library, **apprendre à lire et comprendre un composant classe React**. Test final : le dépôt d'Apheiro (`todo_list_react`), **confirmé en composants classes** (`extends React.Component`, `bind` dans le constructeur, `this.setState`).
- 3 dépôts de référence donnés (dak79, TomekLeszczynski, alternateved) — choisis sur leur description, **non vérifiés**.

### Mise en place du projet

- Scaffolding `vanilla-ts` seul ✅. Lecture du `main.ts` de démo : parallèle `#app` ↔ `#root` fait seul. **`innerHTML` en entreprise** : structure fixe dans `index.html`, JS seulement pour la partie qui change, `createElement` + `textContent` pour toute saisie (XSS) · `innerHTML` réservé au vidage.
- Prettier `--save-exact` ✅ (doc suivie).
- 🔴 **`npm audit fix` lancé** (sans effet, « up to date »). Rapport lu ensemble : le `--force` aurait **rétrogradé Vite en 6.2.7** ; faille `picomatch` = serveur de dev seulement → on attend une mise à jour. Rappel : lire avant de lancer.
- **Git** : « Commit & Push » bloqué (aucun dépôt distant) → `git branch -M main` + `remote add` + `push -u` au terminal ✅ · bouton figé débloqué par `Developer: Reload Window`.
- `lang="fr"` ✅. CSS de démo non nettoyé (son choix : habillage à la fin).

### Étape 2 — classe `Livre` (TS) ✅ 3 tests passés

- **Propriétés déclarées en tête de classe + remplissage dans le constructeur** 🟢 du premier coup (notion neuve, cours avec exemple `Monture`). `id` généré hors paramètres ✅.
- `basculerLu()` **renvoyait `!this.lu` sans modifier** → test 2 → `return this.lu = !this.lu` (fonctionne) → forme `(): void { this.lu = !this.lu; }` proposée.
- **Une classe = un moule + un type** (`Livre[]` sans interface) 🟢 compris.
- 🔴 **`import type` sur une classe utilisée avec `new`** → corrigé (repère : `new` ou appel → import normal).
- 🔴 **Paramètres déstructurés comme des props React** (`({ titre, … }: Livre)`) et corps en dur → corrigé (fonction ordinaire = arguments par position). Paramètres non annotés → **correction demandée et donnée** (la déclaration fixe le contrat, TS ne remonte pas de l'appel ; `any` implicite refusé en strict).
- **`npm run build`** (`tsc && vite build`) 🟢 compris : vérification des types complète + `dist/` de production. Passe.

### Étape 3 — affichage (commencée, écrite seul, non relue)

Rappel donné : vider → créer → remplir (`textContent`) → assembler, + `querySelector<HTMLUListElement>(…)!` (garantie structurelle). Code collé en fin de séance, **à relire ensemble** : auteur absent · `pages` sans « pages » · `if (!listeLivre) return` après une assertion `!` (les deux se contredisent) · tests 2-4 et `index.html` non montrés.
Démonstration XSS proposée (titre `<img onerror>` en `innerHTML` puis en `textContent`) : **faite ? à demander.**

---

**Niveaux** : `Set` 🟢 · `Map` 🟡 (règle sue, lecture rapide) · `reduce` regroupement 🟢 (à confirmer une fois) · propriétés de classe en TS 🟢 (un passage) · méthode qui modifie vs renvoie 🟡 · classe = moule + type 🟢 compris · `import type` vs import 🔴 → corrigé · paramètres de fonction ordinaire vs props 🔴 → corrigé · annotation des paramètres 🟡 (donnée) · `npm run build` 🟢 · lecture d'un `npm audit` 🟡 · `textContent` vs `innerHTML` 🟢 compris · `createElement` / `append` 🟡 (réécrit seul, à relire).

**🆕 Notions ouvertes ce jour** : classe TS (déclaration des propriétés) · classe comme type · DOM vanilla en TS (`querySelector<…>`) · XSS.

**⚠️ Mes erreurs**
1. Tentative d'accès au dépôt d'Apheiro par outil sans le demander → refusée. **Correctif** : demander avant, ou lui faire coller le code.

**🔄 Cycle de reprise** : classe TS → N+2 dans la suite de la Library · `FormData` + `fromEntries` → **étape 4 (formulaire), terrain naturel ≈ S154** · `@keyframes` → N+2 ≈ S154 (habillage) · `Map` → autre code · `reduce` regroupement → à confirmer une fois.

**🔄 Rotation** : **entrent** — `Map` : `set` sur clé existante remplace (autre code) · `import type` vs import d'une classe utilisée avec `new` · classe = moule + type · paramètres d'une fonction ordinaire (position + annotation) vs props déstructurées · méthode qui modifie l'objet (`void`) vs qui renvoie · `textContent` vs `innerHTML` (XSS). **Descend** — `reduce` regroupement (priorité moyenne, à confirmer une fois). **Restent** — `new FormData(e.currentTarget)` + `fromEntries` · `setTimeout` / file d'attente · pas de classe Tailwind construite par morceaux.

**⏭️ Prochaine étape**
1. **Relecture de l'étape 3** (code de fin de séance) + tests 2-4 + `index.html` · vérifier : branche `affichage` créée et commit fait ?
2. **Étape 4** : bouton « Nouveau livre » + `<dialog>` + formulaire (`FormData`, `preventDefault`), puis rappel de `afficherBibliotheque()`.
3. Étapes 5 (supprimer, `data-id`) et 6 (bascule « lu »), puis habillage CSS classique.
4. Ensuite : **lecture des composants classes React** (condition posée), test final sur Apheiro.
5. Créneau court **event loop** toujours en attente.

## Session 154 — Révisions `setTimeout` / dépendances + Library : fin de l'affichage, formulaire `<dialog>` (étape 4 ✅), cours `data-*` raté puis refait

**Durée** : ~1h45 (jeudi, 13h-13h55 + reprise l'après-midi, interrompue). Énergie bonne. Pas d'arrêt net.

**🎹 Raccourci** : `Alt+Maj+→` / `←` (Expand / Shrink Selection) — maintenu à sa demande.

---

### Révision éclair (2 items)

- **Prédire — `setTimeout(…, 0)` / file d'attente** 🟢 : `A C0 C1 C2 E B D`, à froid. Trou de type A révélé en S143, désormais juste.
- **Déboguer — dépendances d'un `useEffect`** 🟢 : props incluses, constante hors composant exclue avec la bonne raison. Précision donnée : l'effet lit `verre.prix` → `[verre.prix]` plutôt que `[verre]` (objet recréé par le parent = relance inutile). **2ᵉ fois juste à froid** (S147, S154).

### Library — étape 3 (affichage) ✅

- Retouches faites seul : auteur ajouté · « N pages » (+ pluriel page / pages, initiative) · **`!` + `if (!liste) return` redondants** : rôle de chacun énoncé juste par lui → `!` gardé (garantie structurelle, l'autre devient du code mort).
- Tests passés, dont la **démonstration XSS** : titre `<img onerror>` affiché en texte, sans alerte.
- **`npm run build` alors que rien n'est rouge** : soulignés = fichiers analysés (ouverts) / build = tout le projet → réflexe avant un commit de fin d'étape ou une PR. Compris.
- **Dev vs build** expliqué à sa demande : dev = traduction à la volée en mémoire, rien sur le disque · build = regroupé, compressé, noms avec code, écrit dans `dist/` (régénérable). `dist/` supprimé par lui, sans conséquence. `.gitignore` contenant `dist` : **non vérifié**.
- Git : PR `affichage` → `main` fusionnée (commit d'hier) · branche `formulaire` créée · retouches non validées de l'étape 3 passées sur `formulaire` (mécanisme compris).

### Library — étape 4 (bouton + `<dialog>` + formulaire) ✅ 6/6

- Tableau de correspondance React → DOM donné (`useRef` ↔ `querySelector`, `onClick` / `onSubmit` ↔ `addEventListener`, `new FormData(formulaire)` au lieu de `e.currentTarget`, typé `EventTarget | null`).
- **Dialog qui ne s'ouvrait pas** : code juste, mais écrit dans un **nouveau fichier `ajout-livre.ts` jamais importé** → jamais exécuté. Diagnostic mené par observation (`console.log` absent, pas d'attribut `open`). Règle : le navigateur ne charge que le `<script>` de `index.html`, puis suit les `import`. **Décision** : tout dans `main.ts` pour l'instant (éviter un import circulaire), **découpage en modules (données / affichage / assemblage) à la fin**.
- 🔴 **`?.` qui masque un `null`** : un écouteur posé avec `btn?.` échoue en silence. Remplacer par `!` sur une garantie structurelle. **Demandé 3 fois, `btn` et `btnRetour` encore en `?.`.**
- 🟡 **Écouteur `submit` posé sur le bouton** → un seul indice (« quel élément émet `submit` ? ») a suffi. Rechute de la famille « seul `<form>` émet `submit` ».
- 🟡 **Conversions `FormData`** : « rien dans le cours que je puisse utiliser » → point redonné (l'info était noyée dans le message de l'étape 4) avec l'exemple `String(...)`. **Écrit seul ensuite** : `String` ×2, `Number`, `Boolean(form.get("lu"))` (fonctionne) → `form.has("lu")` proposé (dit l'intention). `name` sur chaque champ, `type` explicite sur les deux boutons, `reset()` puis `close()` ✅.
- « Plus pro ? » → c'est déjà la forme standard (conversion à l'entrée) ; Zod au SaaS ; `<form method="dialog">` écarté (complique Retour + `required`).
- **Commit sur `formulaire` : à confirmer.**

### Étape 5 (supprimer) — cours raté, refait, non lu

- 1ᵉʳ cours : `data-*` / `dataset` + délégation + deux façons de retirer (`findIndex` / `splice` ou `filter`) **dans le même message** → « je ne comprends pas tes explications ».
- Cours refait sur **`data-*` / `dataset` seul** : le problème d'abord (deux mondes : tableau / DOM ; le bouton cliqué ne sait pas quel livre il représente) · image de l'étiquette de référence sur une monture en vitrine · forme longue `setAttribute` / `getAttribute` → forme courte `dataset` · trajet écrire → lire → retrouver · observation `li.dataset.id` + `$0.dataset` dans la console. **Non lu (interruption) → à lire en ouverture.**
- Délégation : **pas encore réexpliquée seule.**

---

**Niveaux** : `setTimeout` / file d'attente 🟢 (à froid) · tri des dépendances 🟢 (2ᵉ fois à froid) · `!` vs garde `if` 🟢 compris · `npm run build` (portée) 🟢 · dev vs build 🟢 compris · fichier non importé = jamais exécuté 🟡 · `?.` qui masque une erreur 🟡 (compris, pas appliqué) · `submit` sur le `<form>` 🟡 (rechute, un indice) · conversions `FormData` 🟢 (écrites seul après rappel) · `<dialog>` + formulaire en DOM 🟢 · `data-*` / `dataset` ❌ (cours non reçu) · délégation ❌.

**⚠️ Mes erreurs**
1. **Cours de l'étape 5 empilant trois notions** (`dataset`, délégation, deux façons de retirer). Récurrence du dosage. **Correctif** : une notion par message, le problème avant le code, la notion suivante seulement quand la première est comprise.
2. **Point neuf (conversions `FormData`) placé dans un long message de cours**, puis indice qui renvoyait à ce message. **Correctif** : mettre le point neuf dans la consigne elle-même, et le redonner directement quand il manque.

**🔄 Cycle de reprise** : classe TS → N+2 avec l'étape 6 (bascule « lu » par la méthode de la classe) · `FormData` → recroisé en contexte (conversions) ; `fromEntries` non rejoué · `@keyframes` → N+2 non joué, reporté à l'habillage · `Map` → autre code · `reduce` regroupement → à confirmer une fois.

**🔄 Rotation** : **entrent** — fichier non importé = jamais exécuté · `?.` qui masque un `null` (préférer `!` sur garantie structurelle) · `submit` écouté sur le `<form>` (rechute) · conversions à la sortie de `FormData` (`String` / `Number` / `has`) · `npm run build` vs soulignés (portée) · dev vs build. **Descendent** — `setTimeout` / file d'attente (entretien, basse) · tri des dépendances (priorité moyenne).

**⏭️ Prochaine étape**
1. **Lire le cours `data-*` / `dataset`** (dernier message de la conversation) + observation `$0.dataset`.
2. **Délégation expliquée seule**, puis exercice de l'étape 5 (bouton « Supprimer », `supprimerLivre(id)`, un seul écouteur sur la liste). Choix `splice` / `filter` à poser à ce moment-là.
3. Étape 6 : bascule « lu » par le même écouteur + `basculerLu()`.
4. À confirmer : commit `formulaire` · `?.` → `!` sur `btn` / `btnRetour` · `dist` dans `.gitignore`.
5. Puis : habillage CSS classique (+ `@keyframes`) · découpage en modules · **lecture des composants classes React** (condition posée, test final sur Apheiro) · créneau **event loop**.

## Session 155 — Révisions `memo` / CSS flex + Library : étapes 5 et 6 (délégation, `data-*`, case à cocher) ✅, classe `Bibliotheque`, découpage en modules, `localStorage`

**Durée** : 3h15 (vendredi, 12h50-18h55 avec pauses). Énergie bonne. **Frustration forte vers 16h45** (« STOP », « tout ça pour deux paragraphes »), puis reprise fluide en réponses courtes.

**🎹 Raccourci** : `Alt+Maj+→` / `←` jamais adopté → **remplacé par `Ctrl+Alt+↓` / `↑` (Add Cursor Below / Above)**, couplé à `Fin` / `Début` et `Ctrl+←` / `→` pour aligner les curseurs sur des lignes de longueurs différentes : « très bien ». Adopté.

---

### Révision éclair (2 items)

- **Prédire — `memo`** 🟢 : seule la carte qui reçoit un objet littéral recréé se rend, raison juste (constante hors composant = même référence). **La raison de `memo`, 🟡 depuis S135, juste à froid.** ⚠️ Consigne ambiguë (« un des boutons » sans dire qu'ils faisaient la même chose) — relevé par lui.
- **Écrire — carte flex en CSS classique** 🟢 / 🟡 : `display: flex` + `gap` + `align-items` + `flex: 1` justes. Image : idées justes (largeur fixe + ne pas rétrécir) mais **`shrink: 0` au lieu de `flex-shrink: 0`** et sélecteur absent → **réflexe Tailwind** à surveiller pendant l'habillage.

### Étape 5 — supprimer ✅

- **`data-*` : 3ᵉ explication avant que ça passe.** Le cours d'hier (non lu) puis un « exemple complet » demandé → j'ai répondu sur le **fonctionnement de l'exercice** au lieu du cours `data-*` (« tu ne réponds qu'à moitié »). Cours `data-*` complet → « rien compris ». **Ce qui a débloqué : partir de son propre code** (`setAttribute("id", …)` / `getAttribute("id")` qui fonctionnait) et ne changer que le nom → `"data-id"`. Puis tableau forme longue / forme courte côte à côte + pourquoi `"dataId"` échoue (`getAttribute` = nom HTML, `dataset` = clé sans préfixe en camelCase). 🟢 compris.
- **Préférence de Frédéric : la forme longue** (`setAttribute` / `getAttribute`), « comme le `localStorage` ». Légitime.
- `id` au lieu de `data-id` → corrigé (un `id` est unique dans la page ; deux boutons par livre à l'étape 6).
- `findIndex` + `splice` 🟢 · **garde `-1` oubliée** → question « comment pourrait-il ne pas le trouver ? » : honnêtement jamais dans ce code, mais la fonction ne connaît pas ses appelants + `splice(-1, 1)` supprime le dernier en silence. Ajoutée.
- **Délégation** (un écouteur sur la `<ul>`, `e.target instanceof HTMLButtonElement`) 🟢 appliquée.
- `?.` → `!` sur `btn` / `btnRetour` ✅.

### Étape 6 — bascule « lu » ✅ 6/6

- **Choix de Frédéric : une case à cocher dans un `<label>`** au lieu d'un bouton → écouteur **`change`** (souris, clavier, clic sur le libellé ; `click` aurait déclenché deux fois via le label).
- 🔴 → 🟢 **Imbriquer avec `append`** : case et label ajoutés côte à côte dans le `<li>` → « je ne comprends pas » → image des boîtes (de l'intérieur vers l'extérieur, comme `li.append` / `liste.appendChild` déjà écrits) → **correction demandée et donnée**. Piège : `textContent` efface les enfants.
- Écouteur `change` copié de celui de suppression (appelait `supprimerLivre`) → corrigé. Méthode `basculerLu()` de la classe oubliée puis retrouvée par lui.
- **`?.` légitime sur `livre?.basculerLu()`** (absence réelle possible, ne rien faire = bon comportement) vs `?.` masquant sur un élément structurel. Compris.
- **Question de fond** : pourquoi pas `supprimer` dans `Livre` ? → **une méthode agit sur l'objet qui la porte** ; supprimer touche la collection (image : la fiche et le classeur). 🟢

### Classe `Bibliotheque` + modules ✅

- **Recadrage de Frédéric** : « ne me donne pas toutes les réponses », « guide-moi et explique-moi », puis **« simple, synthétique, concis »**.
- **« Propriété de classe » : le mot ne lui parlait pas** → expliqué à partir des 5 propriétés de `Livre` (propriété = donnée, méthode = action). Valeur de départ `[]` et pas `null` (une liste n'est jamais absente). 1ᵉʳ jet avec paramètre dans le constructeur → corrigé seul. Nom `livres` retenu.
- 🔴 **`trouver` : confusion et frustration.** Je l'avais imposée dans la consigne alors qu'elle ne servait qu'à un endroit. Débloqué en réponse courte : `findIndex` → une **position** (pour `splice`) · `find` → **l'objet** (pour agir dessus) · `trouver` ne peut pas servir aux deux. **Écrite quand même par lui « pour la forme »** + `validerLecture(id)` via `this.trouverId(id)?.basculerLu()` 🟢. `this.autreMethode()` expliqué. Types de retour (`: void`, `: Livre | undefined`) : facultatifs (TS déduit), bonne pratique de contrat — compris et appliqués.
- `main.ts` adapté **seul** 🟢 (`new Bibliotheque()`, appels de méthodes, boucle sur `.livres`, import inutile retiré). **Formulé par lui** : « tout est défini dans d'autres fichiers, `main` sert uniquement à brancher les câbles ».
- **Module `affichage.ts`** : 1ᵉʳ jet en **import circulaire** (`affichage` importe `main`) → indice « recevoir au lieu d'aller chercher » non compris → **paramètres donnés** (`afficherBibliotheque(liste, livres)`). `import type` pour un import qui ne sert que de type ✅ (règle inverse de `new`).

### `localStorage` — initiative de Frédéric

- Lecture dans le constructeur + sauvegarde après chaque modification, **dans la classe** 🟢 (bon endroit).
- Page vide : clé contenant `"[object Object]"` (valeur rangée sans `stringify`, essai antérieur ou autre projet sur `localhost:5173`) → `JSON.parse` plante dans le constructeur → script arrêté → formulaire envoyé nativement (`?titre=…` dans l'URL, faute de `preventDefault`). Clé supprimée via Application → **Local storage** (il était dans Session storage, aperçu VS Code).
- Livres de démonstration réajoutés à chaque chargement → condition `bibliotheque.livres.length === 0` (**code demandé et donné**).
- **Non fait** : test 2 (cocher une case après rechargement → erreur attendue : `JSON.parse` rend des objets simples, sans les méthodes de `Livre`) · protection `try` / `catch` du `JSON.parse`.

---

**Niveaux** : `memo` (raison) 🟢 · flex CSS 🟢 / noms de propriétés CSS classique 🟡 · `data-*` forme longue 🟢 / forme courte 🟢 compris · `id` unique vs `data-*` 🟢 · délégation 🟢 · garde `-1` 🟢 (compris) · `change` vs `click` 🟢 compris · `append` imbriqué 🟡 (donné) · `textContent` efface les enfants 🟡 · `?.` légitime vs masquant 🟢 · méthode = agit sur l'objet qui la porte 🟢 · propriété de classe (vocabulaire) 🟢 · `find` (objet) vs `findIndex` (position) 🟢 · `this.autreMethode()` 🟡 · types de retour 🟢 compris · classe qui possède une collection 🟢 · import circulaire → paramètres 🟡 (donné) · `import type` 🟢 · `localStorage` dans une classe 🟢 · `JSON.parse` non protégé 🔴 (motif connu, non appliqué).

**🆕 Notions ouvertes ce jour** : `data-*` / `dataset` · délégation d'événements · événement `change` · classe qui possède une collection · modules en JS pur (sens unique des dépendances) · instances perdues après `JSON.parse` (à voir).

**⚠️ Mes erreurs**
1. **Consigne de révision ambiguë**.
2. **Réponse sur l'exercice au lieu du cours `data-*` demandé**, puis cours abstraits avant de partir de son propre code. **Correctif** : quand il a déjà écrit une forme proche, partir de son code et ne changer qu'une chose.
3. **`trouver` imposé sans besoin réel** (un seul usage), puis explications longues → STOP. **Correctif : réponses de deux paragraphes maximum, et ne pas exiger une méthode ou une abstraction qui ne sert pas encore** (règle de la 3ᵉ occurrence).
4. **Trop de code fourni au début de l'étape classe** → « ne me donne pas les réponses ». **Correctif** : guider par questions, ne donner le code que sur demande explicite.

**📏 Règle de travail rappelée par Frédéric** : **simple, synthétique, concis** · guider sans donner la réponse, sauf demande explicite.

**🔄 Cycle de reprise** : classe TS → rejouée (classe `Bibliotheque` écrite) · `data-*` + délégation → N+2 · `Map` → autre code · `FormData` + `fromEntries` → `fromEntries` non rejoué · `@keyframes` → habillage.

**🔄 Rotation** : **entrent** — `getAttribute("data-id")` vs `dataset.id` (noms) · `id` unique vs `data-*` · délégation (`e.target` + `instanceof`) · `change` vs `click` sur une case · imbriquer avec `append` / `textContent` efface les enfants · `find` vs `findIndex` · une méthode agit sur l'objet qui la porte · import circulaire → paramètres · `import type` si le nom ne sert que de type · `flex-shrink` (nom CSS) · `?.` légitime vs masquant. **Descend** — raison de `memo` (juste à froid, priorité basse).

**🗂️ Documents à mettre à jour** : `Projets_realises_Frederic` (Library en cours : étapes Odin 1-6 faites, classe `Bibliotheque`, modules, `localStorage`).

**⏭️ Prochaine étape**
1. **Test 2** : cocher une case après rechargement → erreur attendue (objets relus sans les méthodes de `Livre`) → reconstruire de vraies instances à la lecture.
2. **Protéger le `JSON.parse`** (`try` / `catch`, repli sur `[]`).
3. À confirmer : commits + PR `formulaire` et `bibliotheque` → `main`.
4. **Habillage en CSS classique** (+ `@keyframes`).
5. **Lecture des composants classes React**, test final sur Apheiro.
6. Créneau court **event loop**.

## Session 156 — Révisions `Map` / `FormData` + Library : instances perdues après `JSON.parse` (reconstruction, `id` conservé, `try` / `catch`), habillage CSS classique (palette, `<table>`, points 1 à 5)

**Durée** : 3h (samedi, 11h-16h50 avec pauses). Énergie bonne. **Déception exprimée vers 14h30** : « je connais toutes ces notions et je n'arrive pas encore à faire seul ».

**🎹 Raccourci** : `Ctrl+Alt+↓` / `↑` (Add Cursor Below / Above) — non renseigné, reconduit.

**Git** : commit + push faits sur `bibliotheque` ; **PR `formulaire` et `bibliotheque` → `main` : pas faites** (« plus tard »).

---

### Révision éclair (2 items)

- **Prédire — `Map`** 🟢 4/4 à froid : `set` sur une clé existante (remplace) et `get` d'une clé absente (`undefined`), ratés en S153, justes. `has` sur une valeur `0` → `true`, raison juste (`has` regarde la clé, pas la valeur). Représentation mentale en tableau d'objets → forme `Map(2) { 'Oakley' => 9 }` montrée.
- **Écrire — `FormData` + `fromEntries`** 🟢 à froid, **pour la première fois** (`new FormData(client)` avec le formulaire, raté en S152). Seul écart : `client?.` au lieu de `!` sur un élément structurel.
- Questions de fond : forme et usage de `Map` (clés de tout type, `.size`, perdue par `JSON.stringify` ; objet = norme, `Map` quand la clé n'est pas une chaîne — exemple `Map<Livre, HTMLLIElement>`) · `entries` (démonte un objet simple) vs `fromEntries` (remonte des paires) · **`Object.entries(formData)` → `[]`** (champs internes, pas des propriétés) · un `FormData` parcouru livre des paires (`[...data]`). Usage de `Map` : « encore abstrait » (jamais utilisée).

### Library — instances perdues après rechargement

- **Test 2** : `TypeError: … basculerLu is not a function` observé (non repéré par lui sans aide). Case cochée par le navigateur malgré l'erreur → écran ≠ données. TS muet : `JSON.parse` renvoie `any`, `livres: Livre[]` le croit.
- Raison : le texte JSON ne garde que les données, la méthode vit sur la classe → **compris et reformulé**.
- Reconstruction `.map((l: Livre) => new Livre(...))` : consigne longue → « je ne comprends rien », version courte → bloqué → **réponse demandée et donnée**.
- **Nouvel `id` à chaque F5** : problème compris (identité dans le temps : URL, base, références). **Paramètre `id?` + `this.id = id ?? crypto.randomUUID()` écrit seul, du premier coup** 🟢.
- **`try` / `catch` autour du `JSON.parse`** 🔴 : 1ᵉʳ jet `this.livres = try { … }` + `typeof saved !== "object"` (une chaîne, `throw` systématique) + aucun repli dans le `catch`. Débloqué sur « `this.livres` dans chaque branche » → toujours bloqué → **réponse demandée et donnée** (`donnees` → `Array.isArray` → `map`, repli `[]`). Erreurs TS lues : `2564` (propriété non assignée) causée par `1109` (`Expression expected`, reste de `this.livres = try`).
- **Tests non confirmés** : `id` identique après F5 · valeur `abc` dans le `localStorage` → page vide sans plantage.

**Pourquoi ça a bloqué** : les trois notions sont connues séparément ; c'est leur **assemblage** dans un même bloc, sans modèle, qui ne vient pas encore. Ma consigne les empilait.

### Habillage — CSS classique

- **Reset** : `*, *::before, *::after { box-sizing: border-box }` (variante `inherit` lue par lui, comparée : rare, utile avec une bibliothèque en `content-box`) · 🔴 `margin: auto` sur `*` → `margin: 0` (`auto` absorbe l'espace en flex) · centrage par `max-width` + `margin-inline: auto` sur `body`, pas sur `html` 🟢 compris.
- « Centré à gauche » → **aperçu VS Code plus étroit que `60rem`**, vu par `outline` temporaire (méthode d'observation).
- **Références** (3 démos ouvertes et vérifiées) : choix du **style tableau sombre** (deanwagner).
- **Palette** donnée à sa demande (tokens par rôle dans `:root`, `color-scheme: dark`) + `body` par défaut.
- **`<ul>` → `<table>`** 🟢 : `<thead>` en dur, `<tbody>` rempli par le JS, titre en `<th>`, écrit seul (MDN relu). Retouches : `scope="row"`, type `HTMLTableSectionElement` (`<HTMLUListElement>` + `!` mentaient à TS), « Statut ». Pourquoi un tableau aligne seul (largeur de colonne = cellule la plus large) 🟢.
- `tbody tr:nth-child(even)` · `border-spacing: 0` (vs `border-collapse`, qui ignore `border-radius`) — expliqués, appliqués par lui.
- **Points 1 à 5 donnés en fichier complet à sa demande (manque de temps)** : bouton d'accent, `:focus-visible`, `[data-action="supprimer"]`, `label:has(input:checked)`, `accent-color`, `:nth-child(3)` + `tabular-nums`, modale (`margin: auto` à remettre après le reset, `::backdrop`, champs en colonne). **Rendu non vérifié à l'écran.**

---

**Niveaux** : `Map` 🟢 (à froid) / usage 🟡 · `FormData` + `fromEntries` 🟢 (à froid, 1ʳᵉ fois) · `entries` vs `fromEntries` sur un `FormData` 🟢 compris · `?.` → `!` 🟡 (rechute) · méthodes perdues par JSON 🟢 compris · reconstruction d'instances par `map` 🟡 (donnée) · paramètre optionnel + `??` 🟢 · `try` / `catch` qui affecte une valeur 🔴 (donné) · `JSON.parse` protégé 🔴 → donné · reset CSS (`margin: 0` vs `auto`) 🟡 · `margin-inline: auto` 🟢 · `<table>` / `scope` 🟢 · `:nth-child` 🟢 · `border-spacing` 🟢 compris · `:has()` / sélecteur d'attribut 🟡 (donnés, non pratiqués).

**🆕 Notions ouvertes ce jour** : reconstruction d'instances après `JSON.parse` · `:has()` · sélecteur d'attribut `[data-…]` · `:nth-child` · `border-spacing` · `margin-inline`.

**⚠️ Mes erreurs**
1. **Consigne `try` / `catch` empilant trois choses** (instruction sans valeur, validation, reconstruction). Récurrence du dosage.
2. **Consigne de reconstruction trop longue** (deux étapes + piège de l'`id` d'un coup) → « je ne comprends rien ». Ce qui a marché : 3 lignes, avant / après sur sa propre ligne de code. **Correctif : une étape, sur son code, en quelques lignes.**

**🔄 Cycle de reprise** : `@keyframes` → **demain** (modale, puis nouvelle ligne) · classe TS → rejouée (constructeur à paramètre optionnel) · `Map` → usage à recroiser · `reduce` regroupement → à confirmer une fois.

**🔄 Rotation** : **entrent** — `try` / `catch` qui affecte une valeur dans chaque branche (autre code, priorité haute) · `JSON.parse` perd les méthodes → reconstruire · paramètre optionnel + `??` · `Object.entries(formData)` → `[]` · reset `margin: 0` vs `auto` · `:has()` / sélecteur d'attribut / `:nth-child`. **Descendent** — `Map` (juste à froid) · `FormData` + `fromEntries` (juste à froid, à confirmer une fois). **Restent** — `?.` masquant vs `!` · pas de classe Tailwind construite par morceaux · `setTimeout` / file d'attente.

**🗂️ Documents à mettre à jour** : `Projets_realises_Frederic` (Library : reconstruction des instances, `localStorage` protégé, habillage en cours).

**⏭️ Prochaine étape**
1. Confirmer : tests `id` après F5 et `abc` dans le `localStorage` · rendu des points 1 à 5 à l'écran.
2. **`@keyframes`** : ouverture de la modale, puis apparition d'une nouvelle ligne (piège : `afficherBibliotheque` reconstruit tout le tableau) · enveloppe `prefers-reduced-motion`. Survol des lignes en `transition` (option).
3. Mobile (tableau qui défile horizontalement) · Lighthouse · PR `formulaire` + `bibliotheque`.
4. **Lecture des composants classes React** (condition posée, test final sur Apheiro).
5. Créneau court **event loop**.

## Session 157 — Révisions `try` / `catch` / `??` + Library : `@keyframes` (modale, nouvelle ligne), tableau sur mobile, bouton-icône, Lighthouse

**Durée** : 2h (dimanche, 10h-12h30, PC fixe). **Énergie moyenne (malade)**, séance efficace. Pas d'arrêt net ; un agacement passager sur le bouton « supprimer » (« il n'y a pas plus simple ? »).

**🎹 Raccourci** : `Ctrl+Alt+↓` / `↑` — non renseigné, reconduit.

**Deux machines** : `odin-library` cloné sur le fixe pour la première fois (panneau Source Control → Clone Repository → Clone from GitHub, autorisation de l'extension GitHub) · `npm ci` + `npm run dev` ✅ · **PR `formulaire` + `bibliotheque` fusionnées hier soir** depuis le portable. **Décision de Frédéric : la fin du projet se fait directement sur `main`.**

**Confirmés en ouverture** : `id` identique après F5 ✅ · `abc` dans le `localStorage` → page vide sans plantage ✅ · rendu des points 1 à 5 (S156) ✅.

---

### Révision éclair (2 items)

- **Écrire — `try` / `catch` qui affecte une valeur** 🟢 : 1ᵉʳ jet avec `JSON.parse` **hors du `try`** (le `catch` ne le rattrape pas) → corrigé seul : `let nombre = 0`, affectation dans chaque branche, un seul `return`. **La forme bloquée hier, écrite seule en deux essais.** Reste : ternaire utilisé pour deux actions (`if` attendu).
- **Prédire — `||` vs `??`** 🟢 4/4 (`0 ?? 10` → `0`).
- ⚠️ Les deux items lus comme un seul (variables de l'item 2 passées à la fonction de l'item 1) : consigne qui ne disait pas qu'ils étaient indépendants.

### `@keyframes` — rejoué en usage réel 🟢

- **Ouverture de la modale** écrite seule : bloc `@media (prefers-reduced-motion: no-preference)`, scénario en **CSS pur**, propriété `scale` seule, `dialog[open]`, puis **second `@keyframes` sur `dialog[open]::backdrop` de lui-même**. Retouches : `ease-in` → `ease-out` (courbe d'entrée) · `scale: 0` → `0.9` (son choix) · 🟡 **`opacity: 100` → `1` : deux rappels nécessaires** (le navigateur ramène silencieusement à `1`).
- **Nouvelle ligne** : 1ᵉʳ jet sur `tr` (toutes les lignes) → classe `.ligne-nouvelle` · **partie TS non vue** (« comment cibler la dernière ligne ? ») → `corpsTableau.lastElementChild?.classList.add(…)` donné après `afficherBibliotheque`. 3 tests passés.
- Questions de fond, comprises : `lastElementChild` (éléments) vs `lastChild` (nœuds de texte compris, typé `ChildNode` sans `classList`) · **pourquoi rien ne se rejoue au F5** : c'est la classe qui déclenche, pas la position ; le F5 jette tout le DOM, le `localStorage` ne garde que les données. **Reformulé juste par lui.**

### Tableau sur mobile

- Deux options posées : **A** conteneur défilant · **B** tableau → cartes par `@media` (HTML inchangé, `data-label` + `td::before { content: attr(data-label) }`). **Choix A** (forme recommandée pour un vrai tableau de données ; B jugée trop longue pour le gain, piège d'accessibilité des `display: block` sur un tableau).
- A posée seule : `div.tableau-defilant` + `overflow-x: auto` + `tabindex="0"`, `role="region"`, `aria-label` ✅ · `@media (max-width: 40rem)` : `padding` réduit sur `body` et les cellules → tout tient à 375 px.
- `prefers-…` (préférences) vs `min-width` / `max-width` (largeur) : distingué.
- `::before` + `attr()` : expliqué, non pratiqué.

### Bouton « supprimer » → icône

- Demande : texte sur grand écran, icône sur mobile. Mal compris une fois, puis version complète (SVG + `<span>` masqué visuellement + `closest`) → « il n'y a pas plus simple, plus pro ? » → **icône seule partout + `aria-label` « Supprimer {titre} » + `pointer-events: none` sur le SVG** (le clic traverse l'icône, la délégation fonctionne sans `closest`). **TS écrit seul, juste.**
- `innerHTML` acceptable pour une constante SVG écrite par soi (pas une saisie utilisateur).
- Icône décalée → **`<svg>` est inline par défaut** (ligne de base) → `display: block`. Découvert.
- `setAttribute("class", …)` / `className` (remplacent) vs `classList.add` (ajoute) : compris.

### Lighthouse (mobile, serveur de dev)

**Performances 95 · Accessibilité 100 · Bonnes pratiques 100 · SEO 82** (probablement `meta description`, hors sujet).

---

**Niveaux** : `try` / `catch` qui affecte une valeur 🟢 (seul, deux essais) · un `try` ne protège que son intérieur 🟢 · `||` vs `??` 🟢 · `@keyframes` + `prefers-reduced-motion` 🟢 (écrit seul, usage réel) · plage d'`opacity` (0 à 1) 🟡 · courbe `ease-out` pour une entrée 🟢 compris · `::backdrop` animé 🟢 · classe d'animation posée par le JS 🟡 (donnée) · `lastElementChild` vs `lastChild` 🟢 compris · DOM jeté au F5 / `localStorage` = données 🟢 · conteneur `overflow-x` + région accessible 🟢 · `@media (max-width)` 🟢 · `aria-label` sur un bouton-icône 🟢 · `pointer-events: none` en délégation 🟢 compris · SVG inline → `display: block` 🟡 (neuf) · `className` / `classList` / `setAttribute` 🟢 compris · `attr()` 🟡 (lu).

**🆕 Notions ouvertes ce jour** : `lastElementChild` · `pointer-events` · `<svg>` inline · `attr()` (lecture) · `role="region"` + `tabindex` sur une zone défilante.

**⚠️ Mes erreurs**
1. **Révision : deux items sans dire qu'ils étaient indépendants.**
2. **Bouton « supprimer » : sa demande mal comprise, puis la version la plus complète proposée en premier** (quatre étapes, `closest`, texte masqué). Récurrence de la règle S145. **Correctif : donner d'abord la version pro la plus simple, le reste seulement s'il le demande.**

**🔄 Cycle de reprise** : `@keyframes` → **rejoué en usage réel, 🟢** (à garder en entretien) · `try` / `catch` qui affecte une valeur → à confirmer une fois · champ en flèche dans une classe → **toujours pas pratiqué** · `Map` → usage à recroiser.

**🔄 Rotation** : **entrent** — `lastElementChild` vs `lastChild` · c'est la classe qui déclenche une animation, pas la position (F5 = DOM jeté) · `opacity` de 0 à 1 · `ease-out` pour une entrée · `<svg>` inline → `display: block` · `pointer-events: none` / `closest` en délégation · `className` / `classList.add` / `setAttribute("class")`. **Descendent** — `try` / `catch` qui affecte une valeur (juste, à confirmer une fois) · `||` vs `??` (juste). **Restent** — reset `margin: 0` vs `auto` · `:has()` / sélecteur d'attribut / `:nth-child` · `?.` masquant vs `!`.

**🗂️ Documents à mettre à jour** : `Projets_realises_Frederic` (Library : reconstruction des instances, `localStorage` protégé, habillage CSS classique, Lighthouse 100 / 100) · `dettes-apprentissage.md` (`@keyframes` en usage réel deux fois).

**⏭️ Prochaine étape**
1. **Champ en flèche dans une classe** (`basculerLu = () => { … }`) : exercice court, dernier point prévu pour la Library.
2. *Option* : survol des lignes en `transition`.
3. **Lecture des composants classes React** (condition posée), test final sur le dépôt d'Apheiro.
4. Créneau court **event loop**.
5. Puis **Next.js**.