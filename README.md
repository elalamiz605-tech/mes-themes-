# mes-themes

Sept ambiances pour Claude dans l'app desktop et mobile : couleurs, fond animé et style des messages.

| Nom | Ambiance |
|---|---|
| `neon` (par défaut) | nuit violette, rose et cyan électriques, grille en perspective (sombre) |
| `hologramme` | globe 3D en fil de fer qui tourne, satellite en orbite, socle lumineux (sombre) |
| `hyperespace` | tunnel d'anneaux et traînées d'étoiles qui filent vers toi (sombre) |
| `orbite` | étoile et planètes en relief sur des orbites inclinées (sombre) |
| `ocean` | bleus profonds et turquoise, vagues lentes |
| `couchant` | orange, corail et violet chaud, soleil et nuages |
| `foret` | verts mousse et crème, sapins et lucioles |

## Utilisation

- `/ambiance` : liste les ambiances
- `/ambiance hologramme` (ou `hyperespace`, `orbite`, `neon`, `ocean`, `couchant`, `foret`) : change d'ambiance ; le choix est mémorisé
- `/ambiance off` : revient au look de base de Claude

Les thèmes s'affichent dans l'app desktop et mobile ; le terminal ne les dessine pas.

## Installation

À l'invite d'une session Claude Code dans un terminal :

```
/plugin install mes-themes --marketplace elalamiz605-tech/mes-themes-
```

Réponds `y` pour ajouter le marketplace, puis choisis la portée « user » pour l'avoir dans toutes tes sessions.

Depuis un shell :

```bash
claude plugin install mes-themes --marketplace elalamiz605-tech/mes-themes-
```

Dans l'app desktop, où `/plugin` ne marche pas : clique sur **+** à côté de la zone de saisie, puis **Plugins**, **Add marketplace** avec `elalamiz605-tech/mes-themes-`, puis **Add plugin**.

Le dépôt est privé : l'ordinateur qui installe doit avoir un accès git à GitHub (une clé SSH, ou `gh auth login` puis `gh auth setup-git`).
