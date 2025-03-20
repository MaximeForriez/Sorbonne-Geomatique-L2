# A.P.I. OpenLayers (2) - Exercices

`ArcGIS Online` dispose d'outils pour utiliser le langage `JavaScript`.
- [https://developers.arcgis.com/javascript/latest](https://developers.arcgis.com/javascript/latest)
- [https://doc.arcgis.com/fr/arcgis-online/reference/develop-with-agol.htm](https://doc.arcgis.com/fr/arcgis-online/reference/develop-with-agol.htm)

Cette séance vous propose de compléter des bouts de code `JavaScript` afin d'afficher vos cartes.

## Exercice 1. Localiser votre ordinateur et afficher ses coordonnées avec `OpenLayer`

Dans un dossier, télécharger les fichiers communs `index.html`, `index.css` et le fichier `index.js` de l'exercice.

Le fichier `JavaScript` contient  fonctions :
- la fonction `coordonnees()` qui prend en attribut un événement de géolocalisation. Elle initialise la valeur des *getter* et des *setter* avec les coordonnées reçues en degrés décimaux et enclenche l'exécution de la fonction *main()* ;
- la fonction `dms()` qui prend en attributs : la latitude et la longitude en degrés décimaux. Elle convertit les valeurs en degrés, minutes et secondes. Elle affiche le résultat dans l'un des paragraphes du fichier `index.html` ;
- la fonction `clicCarte()` qui prend en attribut un événement de type clic. Elle affiche les coordonnées cliquées sur la carte ;
- la fonction `initOpenLayers()` qui ne prend aucun attribut. Elle paramètre le fond de carte en fonction de la coordonnée de votre ordinateur en utilisant les *getter* et les *setter* ;
- la fonction `afficheCoordonnees()` qui ne prend aucun attribut. Elle affiche la coordonnée de votre ordinateur et le cercle d'erreur autour d'elle ; 
- dix fonctions de type *getter* et *setter*. Elles ont pour mission d'appeler (*getter*) et d'enregistrer (*setter*) les valeurs courantes. Il s'agit d'une technique de programmation permettant de sécuriser l'utilisation des variables nécessaires au bout fonctionnement du code.

1. Au niveau du commentaire `//Evénement de la géolocalisation`, créer la variable `geolocalisation` en utilisant l'A.P.I. *ad hoc*.
2. Comprendre les paramètres de la constante au niveau du commentaire `//Déclaration des options de la localisation`.
3. Pour obtenir la géolocalisation sans événement demandé à l'utilisateur, on doit utiliser une fonction auto-invoquée, c'est-à-dire une fonction qui se déclenche au moment de l'ouverture de la page. Son exécution s'effectue en parallèle d'autres tâches, et ne ralentit pas leurs exécutions. Le code est conçu pour que la synchronisation reprenne une fois la localisation trouvée en utilisant la fonction `main()` dans laquelle vous taperez les commandes de votre `OpenLayers`. Trouver la méthode à appliquer à la variable `geolocalisation` créée dans le point 1 afin de capturer la géolocalisation de votre ordinateur. Cette méthode prend en paramètres trois variables déjà créées : `coordonnees`, `erreur` et `options`
4. Dans la fonction `main()`, choisir le fond de carte que vous souhaitez en décommentant votre choix. Il y en a deux possibles : `OpenStreetMap` et `Stamen`. Il est également possible de grouper les deux fonds.
5. Décommenter la fonction `afficheCoordonnees()` dans la fonction `main()` pour afficher votre coordonnée

Le résultat n'apparaîtra uniquement si vous exécutez les cinq points de l'exercice.

## Exercice 2. Intégrer des couches `GeoJSON` et créer la gestion des couches avec des événements `JavaScript`

Cet exercice vous fait passer à un niveau supérieur. Il consiste à gérer les couches d'information en format `GeoJSON`. Pour ce, utiliser les données de votre projet deux couches suffiront pour tester votre code.

Les fonctions du code de l'exercice 1 sont reprises. Dans un nouveau dossier, placer les deux fichiers `index.html` et `index.css`, puis télécharger le fichier `index.js` correspondant à l'exercice.
- L'objet `conversionCouleur` permet de gérer les couleurs de votre carte. La palette de couleur n'est pas exhaustive, mais elle permet d'accéder à un spectre suffisamment large pour faire l'exercice.
- La fonction `couleurParDefaut()` permet de mettre en place une couleur par défaut. Elle prend en paramètre l'intensité $\alpha$ de la couleur dont la valeur varie entre 0 et 1.
- La fonction `choixCouleur(color, alpha)` permet de paramétrer une couleur avec l'un des noms contenu dans l'objet `conversionCouleur`. Il faut également paramétrer l'intensité $\alpha$.
- La fonction `dms()` est la même que dans l'exercice 1.
- La fonction `clicCarte()` est la même que dans l'exercice 1.
- La fonction `initOpenLayers()` est la même que dans l'exercice 1. Toutefois, elle prend désormais en paramètre le zoom tel qu'il est défini dans la [documentation fournie](../Seance-09/seance-9.md).
- La fonction `reinitialisationCouches()` permet d'effacer l'intégralité des couches créées.
- La fonction `chargementDesCartes()` a besoin de cinq attributs : `carte` correspond au nom de votre fichier `GeoJSON`, `color` correspondant la couleur choisie dans l'objet `conversionCouleur`, `colorAlpha` correspondant à la valeur $\alpha$, `epaisseur` correspondant à l'épaisseur de votre trait, `visible` correspondant une variable booléenne `true` ou `false` indiquant si la couche est visible ou non.

1. Paramétrer votre `OpenLayer` en utilisant les variables `cont_echelle`, `cont_zoom`, `cont_barre_zoom` et `cont_plein_ecran`. Avec la [documentation fournie](../Seance-09/seance-9.md), vous êtes en mesure de créer d'autres paramètres s'ils peuvent vous être utiles.
2. Paramétrer dans la fonction `chargementDesCartes()` l'U.R.L. contenant vos couches.
3. Créer des fonctions pour afficher vos couches en suivant le modèle proposé.
4. Créer tous les *getter* et les *setter* dont vous pourriez avoir besoin dans la manipulation de vos couches en suivant le modèle de ceux présents dans le code l'exercice 1.
5. Créer un formulaire avec des cases à cocher portant le nom de vos couches.
6. Gérer les événements de type clic afin d'afficher ou de masquer sur votre carte vos couches.

## Fichiers communs

Voici le contenu des deux fichiers gérant le code `JavaScript` que vous devez compléter.

> [!TIP]
> Pour l'exercice 2, vous devrez ajouter au fichier `index.html` un formulaire, et rien d'autre.

> [!WARNING]
> En principe, vous n'avez rien à écrire ou modifier dans le fichier C.S.S.

### Fichier `HTML`

```
	<!DOCTYPE html>
	<html lang="fr">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Tests - JavaScript</title>
			<!--API OpenLayers-->
			<script src="https://cdn.jsdelivr.net/npm/ol@v10.3.1/dist/ol.js"></script>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.3.1/ol.css" title="combined">
			<link rel="stylesheet" href="style.css" title="combined">
		</head>
		<body id="corps">
			<h1>Gestion de la géolocalisation</h1>
			
			<p id="para1"></p>
			<p id="para2"></p>
			
			<!--Intégration du fond de carte OpenLayers-->
			<div id="jsmap" class="map"></div>
		
			<script src="script.js"></script>
		</body>
	</html>
```

### Fichier C.S.S.
```
	html,body{
		height:100%;
		width:100%;
		padding:0px;
		margin:20px;
	}
	#jsmap{
		height: 50%;
		width: 50%;
	}
```

### Fichier `JavaScript`
