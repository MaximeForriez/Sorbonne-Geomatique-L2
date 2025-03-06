# A.P.I. OpenLayers (1) - Prise en main

## La géolocalisation avec `JavaScript`

Pour géolocaliser un navigateur, on utilise `navigator.geolocation`, mais ce n'est qu'un objet. Pour accéder aux coordonnées géographiques, on utilise la méthode `getCurrentPosition(...)`. On obtient la latitude avec la propriété `coords.latitude` ; la longitude avec `coords.longitude`.

On écrit la page `HTML` suivant, liée au fichier `script.js`.
```
	<!DOCTYPE html>
	<html lang="fr">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie-edge">
			<title>Tests - JavaScript</title>
		</head>
		<body id="corps">
			<h1>Gestion de la géolocalisation</h1>
			
			<p id="para1"></p>
			<p id="para2"></p>
			
			<script src="script.js"></scrip>
		</body>
	</html>
```

On écrit le code `JavaScript` suivant.
```
	//Fonction lisant la capture des informations géographiques
	function coordonnees(eventGeo)
	{
		this.latitude = eventGeo.coords.latitude;
		this.longitude = eventGeo.coords.longitude;		
		let paragraphe1 = document.getElementById("para1");
		paragraphe1.innerHTML = "Latitude : " + this.latitude + " degré ; Longitude : " + this.longitude + " degré<br>";
	}
	
	//Fonction de conversion en degrés, minutes, secondes
	function dms(latitude, longitude)
	{
		this.latitude = latitude;
		this.longitude = longitude;
		//Transformation en degrés, minutes, secondes de la latitude
		this.latitudeDegre = Math.trunc(this.latitude);
		this.latitudeMinute = (this.latitude - this.latitudeDegre)*60;
		this.latitudeSeconde = (this.latitudeMinute - Math.trunc(this.latitudeMinute))*60;
		this.latitudeMinute = Math.trunc(this.latitudeMinute);
		//Transformation en degrés, minutes, secondes de la longitude
		this.longitudeDegre = Math.trunc(this.longitude);
		this.longitudeMinute = (this.longitude - this.longitudeDegre)*60;
		this.longitudeSeconde = (this.longitudeMinute - Math.trunc(this.longitudeMinute))*60;
		this.longitudeMinute = Math.trunc(this.longitudeMinute);
		
		let paragraphe2 = document.getElementById("para2");
		paragraphe2.innerHTML = "Latitude : " + this.latitudeDegre + "degré " + this.latitudeMinute + "\'" +  this.latitudeSeconde + "\"" + " ; Longitude : " + this.longitudeDegre + "degré" + this.longitudeMinute + "\'" +  this.longitudeSeconde + "\"" + "<br>";
	}
	
	//Evénement de la géolocalisation
	let geolocalisation = navigator.geolocation;
	//Vérification que le navigateur soit en ligne
	let navigateurEnLigne = navigator.onLine;
	console.log(navigateurEnLigne);
	
	//Fonction auto-invoquée permettant de capturer si c'est possible les données géolocalisées du navigateur client
	//Bien la placer après la déclaration de la variable déclencheur de l'événement
	(function()
	{
		if(navigateurEnLigne)
		{
			if(geolocalisation)
			{
				geolocalisation.getCurrentPosition(coordonnees,erreur,options);
			}
			else
			{
				let paragraphe1 = document.getElementById("para1");
				paragraphe1.innerHTML = "Localisation indisponible !" + "<br>";
			}
		}
		else
		{
			let paragraphe1 = document.getElementById("para1");
			paragraphe1.innerHTML = "Navigateur hors ligne !" + "<br>";
		}
	})();
```

En résumé, `navigator.geolocation` dispose de deux méthodes devant être appelée sous la forme d'un événement.
- `getCurrentPosition(event, error, {options});` est une requête de localisation unique.
    - `event` est une fonction qui va traiter l'information géographique, ici `coordonnees(eventGeo)`
    - `error` est facultatif. Il s'agit d'une fonction qui va capturer les erreurs du traitement de la localisation. 
    - `{options}` est facultatif. Il s'agit d'une liste de propriétés renvoyant à un objet `PositionOptions` ; les éléments de la liste sont séparés par des virgules.
        - `enableHighAccurancy: true` demande de fournir une position de haute précision si le matériel le supporte et si l'utilisateur en donne la permission. La valeur `false` est celle par défaut.
        - `timeout: ` *entier* (en millisecondes) spécifie explicitement un délai de temps d'attente au bout duquel la fonction retournera une erreur si la position n'a pu être déterminée. Le calcul débute après l'autorisation de l'utilisateur. La valeur par défaut est `Infinity`.

> [!NOTE]
> En spécifiant une valeur nulle, la fonction retournera immédiatement la dernière position en cache si celle-ci existe, tout en provoquant une erreur avec un code `TIMEOUT`.

        - `maximumAge: 0` autorise le système à répondre immédiatement avec une valeur mémorisée en cache, provenant de la requête précédent. Le nombre est en millisecondes.
- `watchPosition()` permet de suivre en continu la position.
- `clearPosition()` permet de stopper la localisation continue.

Toutes les méthodes sont asynchrones.
1. On déclenche les méthodes dans le problème principal, sauf `clearWatch()` qui est placé dans une fonction d'appel.
2. On renvoie l'événement à une fonction de traitement.

Les méthodes `getCurrentPosition()` et `watchPosition()` font appel à un objet `Position` créé lors de l'appel des méthodes.

La méthode `getCurrentPosition()` permet d'accéder aux propriétés *via* l'événement `eventGeo`.
- `eventGeo.timestamp` donne la date de la position en millisecondes.
- `eventGeo.coords` contient sept propriétés de localisation.
    - `.latitude` fournit la latitude en degrés décimaux.
    - `.longitude` fournit la longitude en degrés décimaux.
    - `.accuracy` donne le coefficient de précision en mètres.
    - `.altitude` fournit l'altitude en mètres.
    - `.altitudeAccurancy` donne la précision sur l'altitude en mètres.
    - `.heading` fournit la direction en degrés par rapport au nord dans le sens de aiguilles d'une montre.
    - `.speed` fournit la vitesse en m/s.

> [!NOTE]
> L'ensemble des valeurs sont des nombres. Seules la longitude et la latitude sont systématiquement accessibles. L'ensemble des autres valeurs est optionnel.

> [!NOTE]
> Une propriété adresse est prévue, `address`. Elle aura pour enfants :
> - `.streetNumber`
> - `.street`
> - `.premises`
> - `.city`
> - `.county`
> - `.region`
> - `.country`
> - `.countryCode`
> - `.postalCode`

La méthode `getCurrentPosition()` peut également appeler un objet `PositionError`, qui dispose de deux propriétés.
- `.message` qui renvoie une chaîne de caractères à l'attention du développeur ;
- `.code` qui a plusieurs enfants :
    - `.UNKNOWN_ERROR`. La localisation a échoué pour une raison inconnue.
    - `.PERMISSION_DENIED`. La localisation a échoué, car le navigateur n'a pas la permission.
    - `.POSITION_UNAVAILABLE`. La localisation a échoué à cause de moyens techniques.
    - `.TIMEOUT`. Le temps imparti pour la localisation est écoulé.

Pour mettre en œuvre un objet `PositionError`, il faut créer une fonction `erreur(err)` avec pour argument `err` qui capture l'erreur.
```
	function erreur(err)
	{
		switch(err.code)
		{
			case error.TIMEOUT:
			console.warn("Timout !");
			break;
			case error.PERMISSION_DENIED:
			console.warn("Permission inexistante !");
			break;
			case error.POSITION_UNAVAILABLE:
			console.warn("Position indéterminable !");
			break;
			case error.UNKNOWN_ERROR:
			console.warn("Erreur inconnue !");
			break;
		}
	}
```

## Introduction à la cartographie en ligne

Il existe plusieurs bibliothèques `JavaScript`.
- `API GoogleMaps` (payant) fonctionnent avec `GoogleMaps`.
    - [https://developers.google.com/maps/](https://developers.google.com/maps/)
- `OpenLayers` fonctionne avec `OpenStreetMap`.
    - [http://www.openlayers.org/en/lastest/apidoc](http://www.openlayers.org/en/lastest/apidoc)
- `Leaflet` est un autre outil possible.

On utilise `OpenLayers` en tant que bibliothèque `JavaScript`. Cela consiste à gérer les tuiles de la carte (`tile`). La carte est mise en forme en C.S.S. La bibliothèque est disponible sur tous les navigateurs acceptant `JavaScript`.
- [https://tile.openstreetmap.fr](https://tile.openstreetmap.fr) (en France)

Une carte en `OpenLayers` se décompose en trois éléments :
1. `View` : une vue (centre, projection, échelle) ;
2. `Layer` : une couche dessin (données) ;
3. `Target Container` : l'élément `HTML` contenant la carte, en général une balise `<div>`.

Les projections sont codées en suivant la norme *European Petroleum Survey Group* (E.P.S.G.).
- `EPSG:4326` $\rightarrow$ WGS84 en degrés décimaux ;
- `EPSG:27572` $\rightarrow$ Lambert 2 étendu en mètre.

Le standard `OpenSIG` est 100 % codé en `JavaScript`.
1. *Web Map Service* (W.M.S.) a une interface `XML`.
2. *Web Feature Service* (W.F.S.) est une base de données de positionnement.

Il existe une séparation totale entre les données de l'affichage (`OpenLayersMap`) et les données attributaires (`OpenLayersData`).

`OpenLayers` est simple, très personnalisable et très puissant, à la différence d'autres outils comme `GoogleMaps`.

## Documentation d'OpenLayers

- [https://openlayers.org/](https://openlayers.org/)
- [https://blog.arthurbazin.com/programmation/open-layer-le-sig-web-a-portee-de-main](https://blog.arthurbazin.com/programmation/open-layer-le-sig-web-a-portee-de-main)
## Principes de base

Une page `HTML` accueille une balise `<div id="jsmap"></div>` dans le corps du document pour afficher la carte. Un fichier `CSS` permet de mettre en forme la carte. Ces fichiers seront donnés dans le cadre de ce cours. Si vous voulez apprendre à les manipuler, je vous invite à vous documenter par vous-même.

Comme les cours précédents, nous allons créer un fichier JavaScript, qui va contrôler les couches de la carte `OpenLayers` créée. Le fichier appelle l'A.P.I. `OpenLayers`, et configure la carte. Chaque élément de la carte sera créé sous la forme d'une fonction.

### Fichier `HTML`

```
	<!DOCTYPE html>
	<html lang="fr">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title></title>
			<!--API OpenLayers-->
			<script id="lien" src="https://cdn.jsdelivr.net/npm/ol@v10.3.1/dist/ol.js"></script>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.3.1/ol.css">
			<!--Style de la carte personnalisé-->
			<link rel="stylesheet" href="cartographie.css" title="combined">
		</head>
		<body id="corps">
			<p id="para1""></p>
			<p id="para2"></p>
			<!--Intégration du fond de carte OpenLayers-->
			<div id="jsmap" class="map"></div>
			<script src='cartographie.js'></script>
		</body>
	</html>
```

### Fichier C.S.S.

Nous n'avons pas le temps de voir en détail le fonctionnement d'un fichier C.S.S. Par conséquent, il faut juste recopier ce bout de code.

```
	/*Effacer le style par défaut*/
	* {box-sizing:border-box;}
	/*Macros*/
	@charset "UTF-8";
	/*Page, corps*/
	html,body{
		width:100%;
		height:100%;
		margin-top:0px;
		margin-bottom:0px;
		margin-left:0px;
		margin-right:0px;
		color:black;
		font: 100% Verdana, Arial, Helvetica, sans-serif;
		text-align:center;
	}
	/*Conteneur de la classe*/
	#jsmap{
		height: 500px;
		width: 80%;
		text-align:center;
		vertical-align:middle;		
		background-color:rgb(75,75,255);
	}	
```

> [!NOTE]
> Exceptionnellement, il est très important de définir la valeur `height` en pixels, et non en valeur relative.

## Créer une carte

L'objet créant une carte est : `ol.Map()`. Pour afficher des données, il est nécessaire de définir au moins quatre autres objets :
- `ol.View` ;
- `ol.layer.Tile` ;
- `ol.source.Vector` ;
- `ol.layer.Vector`.
	\end{itemize}

De manière optionnelle, il est conseillé pour une bonne visualisation d'utiliser un objet de type `ol.Control`.
```
	let map;
	function initOpenLayers()
	{
		this.map = new ol.Map({
			view: new ol.View({
				projection: "EPSG:4326",
				center: ol.proj.fromLonLat([2.3466771784787492, 48.89968061763333]),
				zoom: 7
			}),
			controls: [],
			layers: [
				new ol.layer.Tile({
					title: "Fond de carte OpenStreetMap",
					source: new ol.source.OSM(),
					visible: true,
					opacity: 1
				})
			],
			target: 'jsmap',
		});
		setMap(this.map);
	}
	function getMap()
	{
		return this.map;
	}
	function setMap(map)
	{
		this.map = map;
	}
```

Chaque objet prend en argument des objets `JavaScript`.
- `view` définit la vue de la carte. Elle est définie par un objet `ol.View`. Ce dernier prend en paramètre un objet ayant pour attributs : la projection, ici WGS84, le point central de la carte, ici l'université de Clignancourt, le zoom de la carte (plus le chiffre est petit, plus la carte est étendue), *etc*.
- `controls` définit les contrôleurs disponibles donnés à l'utilisateur pour définir des choix personnalisés dans les vues de la carte.
- `layers` définit les couches. En général, on y définit un fond de carte, ici `OpenStreetMap` par l'intermédiaire d'un objet `ol.layer.Tile`, paramétré par un objet contenant un titre, la source, la visibilité, l'opacité, *etc*.

> [!NOTE]
> Les sources disponibles se trouvent à l'adresse suivante : [https://tile.openstreetmap.fr](https://tile.openstreetmap.fr) (en France).

- L'objet `ol.layer.Tile` prend en paramètres :
    - `source:` avec au choix :
        - `new ol.source.OSM()` pour `OpenStreetMap` ;
        - `new ol.source.XYZ({url: ..., attributions: ..., params: ...})` pour avoir les courbes de niveau du relief ;
        - `new ol.source.TileWMS()` ;
        - *etc*.
    - `visible: false` pour rendre visible ou invisible la couche ;
    - `title: "..."` pour donner et afficher un titre à la carte ;
    - `opacity:` *nombre entre 0 et 1* pour contrôler la transparence de la couche.
- `target` définit l'élément de la page `HTML` vers lequel la carte codée sera affichée.

Les deux autres fonctions sont appelées un *getter* et un *setter*. Techniquement, elles sont facultatives. On pourrait simplement utiliser la variable `map` prédéfinie en début de code. Pourquoi mettre en place de telles fonctions ? Elle permet de rendre les variables globales. Dit autrement, cela permet d'appeler ou de modifier la variable par une autre fonction pour l'ensemble des fonctions. C'est une bonne pratique de codage.

Voilà, il ne faut écrire que ça pour créer une carte `OpenLayers`.

### L'objet `ol.Map`

Il existe également d'autres propriétés :
- `pixelRatio` qui définit le rapport entre le pixel physique et le pixel de l'écran ;
- `keyboardEventTarget` qui définit l'action d'une touche ;
- `maxTilesLoading` qui définit le nombre du tuiles chargées simultanément (par défaut : 16) ;
- `loadTilesWhileAnimating` qui autorise le chargement des tuiles pendant les animations (par défaut : `false`) ;
- `loadTilesWhileInteracting` qui autorise le chargement des tuiles pendant les interactions (par défaut : `false`) ;
- `moveTolerance` qui définit la tolérance de détection des mouvements du curseur en pixel (défaut : 1) ;
- `interactions` qui définit les interactions possibles avec un objet `ol.Interaction` ;
- `overlays` qui définit la superposition des couches avec un objet `ol.Overlay`.

### L'objet `ol.Control`

La table de la propriété `controls` peut être définie par neuf objets :
- `ol.control.Attribution` qui affiche les mentions légales ;
- `ol.control.FullScreen` qui offre la possibilité d'afficher la carte en plein écran ;
- `ol.control.MousePosition` qui offre la possibilité d'affiche la position de la souris ;
- `ol.control.OverviewMap` qui crée une mini-carte facilitant la navigation. Il est défini par deux propriétés : `layers` et `view` ;
- `ol.control.Rotate` qui définit une rotation ;
- `ol.control.ScaleLine` qui affiche l'échelle de la carte ;
- `ol.control.ZoomSlider` qui affiche une barre de zoom ;
- `ol.control.ZoomToExtent` qui définit l'emprise initiale ;
- `ol.control.Zoom` qui définit les zooms (avant ou arrière).

En général, les contrôleurs sont placés dans des variables constantes afin de rendre le code maintenable et plus lisible. En cas de besoin, il est possible de créer des *setter* et *getter*.

On définit `controls` par les variables suivantes :
```
	controls: [
		cont_zoom,
		cont_rotation,
		cont_zoom_sur_emprise,
		cont_barre_zoom,
		cont_mini_carte,
		cont_echelle,
		cont_position_cuseur,
		cont_plein_ecran,
		cont_mention_legale,
		cont_control_couche,
	],
```

`ol.control.Zoom` définit un bouton de zoom et de dézoom.
```
	const cont_zoom = new ol.control.Zoom({
		// Libellé du bouton de zoom avant (défaut : '+')
		zoomInLabel: '+',
		// Infobulle du bouton de zoom avant (défaut : 'Zoom in')
		zoomInTipLabel: 'Zoomer',
		// Libellé du bouton de zoom arrière (défaut : '-')
		zoomOutLabel: '-',
		// Infobulle du bouton de zoom arrière (défaut : 'Zoom out')
		zoomOutTipLabel: 'Dézoomer',
		// Nombre de paliers de zoom par clic (défaut : 1)
		delta: 1,
		// Durée du zoom en millisecondes (défaut : 250)
		duration: 250,
		// Classe de l'élément (défaut : 'ol-zoom')
		className: '',
		// Identifiant de l'élément `HTML` où placer l'élément
		target: '',
	});
```

`ol.control.Rotate` crée un bouton de réinitialisation de la rotation de la carte. Elle s'obtient en tapant simultanément sur `shift` + `alt` + `clic droit`.
```
	const cont_rotation = new ol.control.Rotate({
		// Libellé du bouton (défaut : '/*flèche vers le haut*/')
		label: '/*flèche vers le haut*/',
		// Infobulle du bouton (défaut : 'Reset rotation')
		tipLabel: 'Réinitialiser la rotation - Maintenez alt+shift pour tourner la carte',
		// Durée du zoom en millisecondes (défaut : 250)
		duration: 250,
		// Cacher le bouton lorsque la rotation est de 0 degré (défaut : true)
		autoHide: false,
		// Classe de l'élément (défaut : 'ol-rotate')
		className: '',
		// Identifiant de l'élément `HTML` où placer l'élément
		target: '',
	});
```

`ol.control.OverviewMap` crée une mini carte avec `ol.layer.Tile`, la couche présente dans celle-ci, et `ol.View`, qui paramètre sa vue.
```
	const cont_mini_carte = new ol.control.OverviewMap({
		// Possibilité de replier l'élément (défaut : true)
		collapsible: true,
		// Replié au démarrage ? (défaut : true)
		collapsed: true,
		// Libellé du bouton lorsque l'élément est déplié (défaut : '«')
		collapseLabel: '«',
		// Libellé du bouton lorsque l'élément est replié (défaut : '»')
		label: '»',
		// Infobulle du bouton
		tipLabel: 'Afficher la mini-carte',
		// Couches à afficher dans la minicarte. Attention, la même couche ne doit pas être utilisée dans la carte. Il faut une couche spécifiquement créée pour la mini carte
		layers: [
			data_raster_osm_minimap,
		],
		// Vue spécifique à utiliser (défaut : EPSG:3857 avec centrage par défaut)
		view: new ol.View({
			zoom: 13,
		}),
		// La mini carte doit-elle tourner avec la carte principale (défaut : false)
		rotateWithView: true,
		// Classe de l'élément (défaut : 'ol-overviewmap')
		className: '',
		// Identifiant de l'élément `HTML` où placer l'élément
		target: '',
	})
```

`ol.control.ZoomToExtent` crée un bouton de recentrage de la carte.
```
	const cont_zoom_sur_emprise = new ol.control.ZoomToExtent({
		// Emprise sur laquelle zoomer. Par exemple xmin, ymin, xmax, ymax en 3857
		extent: [
			516540, 5687190,
			801228, 5837958
		],
		// Libellé du bouton (défaut : 'E')
		label: 'E',
		// Infobulle du bouton (défaut : 'Fit to extent')
		tipLabel: 'Zoomer sur l\'emprise initiale',
		// Classe de l'élément (défaut : 'ol-zoom-extent')
		className: '',
		// Identifiant de l'élément `HTML` où placer l'élément
		target: '',
	});
```

`ol.control.ZoomSlider` crée une barre de zoom (*slider*).
```
	const cont_barre_zoom = new ol.control.ZoomSlider({
		// Durée de l'animation de zoom en millisecondes (défaut : 200)
		duration: 200,
		// Classe de l'élément (défaut : 'ol-zoomslider')
		className: '',
	});
```

`ol.control.ScaleLine` affiche l'échelle de la carte.
```
	const cont_echelle = new ol.control.ScaleLine({
		// Taille minimum en pixel (défaut : 64)
		minWidth: 0,
		// Unité de l'échelle (défaut : 'metric')
		units: '',
		// Classe de l'élément (défaut : 'ol-scale-line')
		className: '',
		// Identifiant de l'élément `HTML` où placer l'élément
		target: '',
	});
```

`ol.control.MousePosition` donne les coordonnées géographiques du pointeur.
```
	const cont_position_cuseur = new ol.control.MousePosition({	
		// Format des coordonnées
		coordinateFormat: function(coordinate) {
			return ol.coordinate.format(coordinate, '<span><i class="fas fa-map-marker-alt"></i> {x} degré | {y} degré</span>', 6);
		},
		// Projection des coordonnées (défaut : projection de la vue)
		projection: 'EPSG:4326',
		// Texte affiché lorsqu'aucune coordonnées n'est disponible (défaut : ' ')
		undefinedHTML: ' ',
		// Classe de l'élément (défaut : 'ol-mouse-position')
		className: '',
		// Identifiant de l'élément HTML où placer l'élément
		target: '',
	});
```

`ol.control.FullScreen` crée un bouton de passage en mode plein écran.
```
	const cont_plein_ecran = new ol.control.FullScreen({
		// Libellé du bouton (defaut : '\u2922')
		label: '\u2922',
		// Infobulle du bouton (défaut : 'Toggle full-screen')
		tipLabel: 'Passez en mode plein-écran',
		// Libellé du bouton lorsque du mode plein-écran (défaut : '\u00d7')
		labelActive: '\u00d7',
		// Classe de l'élément (défaut : 'ol-full-screen')
		className: '',
		// Identifiant de l'élément HTML où placer l'élément
		target: '',
	});
```

`ol.control.Attribution` affiche les mentions légales (ou les crédits) du fond de carte.
```
	const cont_mention_legale = new ol.control.Attribution({
		// Possibilité de replier l'élément
		collapsible: true,
		// Etat "de repliage" au démarrage
		collapsed: true,
		// Libellé du bouton lorsque l'élément est déplié (défaut : '»')
		collapseLabel: '»',
		// Libellé du bouton lorsque l'élément est replié (défaut : 'i')
		label: 'i',
		// Infobulle du bouton
		tipLabel: 'Attributions',
		// Classe de l'élément (défaut : 'ol-attribution')
		className: '',
		// Identifiant de l'élément HTML où placer l'élément
		target: '',
	});
```

`ol.control.LayerSwitcher` : extension d'Open Layer permettant d'afficher une légende
```
	const cont_control_couche = new ol.control.LayerSwitcher({
		// Infobulle du bouton
		tipLabel: 'Légende',
		// Visibilité des groupes (défaut : 'children') 'none' : les groupes n'ont pas de case à cocher ; 'children' : le changement d'état de visibilité d'un groupe change l'état de ses enfants vers le même état ; 'group' : le changement d'état de visibilité d'un groupe ne change pas l'état de visibilité de ses enfants
		groupSelectStyle:'children'
	});
```

### L'objet `ol.layer.Base`

L'objet `ol.layer.Base` est la classe-mère des sept objets fils :
- `ol.layer.Image` qui est une couche de type image. Il a pour propriété `source`, elle-même définie par un objet `ol.source.Image` ;
- `ol.layer.Tile` qui est une couche de type tuile. Il a pour propriété `source`, elle-même définie par un objet `ol.source.Tile` ;
- `ol.layer.Vector` qui est une couche vecteur mise à jour à chaque image. Il a pour propriétés `source`, elle-même définie par un objet `ol.source.Vector`, et `style`, elle-même définie par un objet `ol.style.Style` ;
- `ol.layer.VectorImage` qui est une couche vecteur mise à jour mise à jour hors animation. Il a pour propriétés `source`, elle-même définie par un objet `ol.source.Vector`, et `style`, elle-même définie par un objet `ol.style.Style` ;
- `ol.layer.VectorTile` qui est une couche vecteur tuilée. Il a pour propriétés `source`, elle-même définie par un objet `ol.source.Vector`, et `style`, elle-même définie par un objet `ol.style.Style` ;
- `ol.layer.Graticule` qui crée un quadrillage ;
- `ol.layer.Heatmap` qui crée une carte de chaleur.

### L'objet `ol.Source`

Les objets de type `ol.source.Image` possibles sont :
- `ol.source.ImageArcGISRest` pour un service `ArcGIS Rest` ;
- `ol.source.ImageCanvas` pour un image `canvas` ;
- `ol.source.ImageMapGuide` pour un service `Mapguide Server` ;
- `ol.source.ImageStatic` pour une simple image statique ;
- `ol.source.ImageWMS` pour un serveur W.M.S. ;
- `ol.source.Raster` pour une image raster créée à partir d'autres données ;
- *etc*.

Les objets de type `ol.source.Tile` possibles sont :
- `ol.source.BingMaps` qui ouvre une image tuilée `Bing Maps` ;
- `ol.source.IIIF` qui ouvre une image tuilée `IIF Image API` ;
- `ol.source.TileArcGISRest` qui ouvre une image tuilée `ArcGIS Rest` ;
- `ol.source.TileJSON` qui ouvre une image tuilée J.S.O.N. ;
- `ol.source.TileWMS` qui ouvre une image tuilée de serveur W.M.S. ;
- `ol.source.WMTS` qui ouvre une image de serveur W.M.S. ;
- `ol.source.XYZ` qui ouvre une image au format `XYZ` ;
- `ol.source.Zoomify` qui ouvre une image tuilée au format `Zoomify` ;
- `ol.source.VectorTile` qui ouvre des données vectorielles tuilées ;
- `ol.source.UTFGrid` qui ouvre des données d'interaction `UTFGrid` ;
- `ol.source.OSM` qui ouvre une image `OpenStreetMap` ;
- *etc*.

L'objet `ol.source.Vector` définit une source de type vecteur. Elle prend en propriété `format`, elle-même définie par un objet `ol.format.Feature`.

L'objet `ol.source.Cluster` définit une source de données vectorielles ponctuelles clustérisées.

### L'objet `ol.format.Feature`

L'objet `ol.format.Feature` est la classe-mère des quatre objets fils :
- `ol.format.JSONFeature` pour un format J.S.O.N., lui-même décomposé en trois objets fils :
    - `ol.format.EsriJSON` ;
    - `ol.format.GeoJSON` ;
    - `ol.format.TopoJSON`.
- `ol.format.MVT` pour un format MVT de `MapBox` ;
- `ol.format.TextFeature` pour un format texte, lui-même décomposé en trois objets fils :
    - `ol.format.IGC` ;
    - `ol.format.Polyline` (données encodées par l'algorithme `Polyline`) ;
    - `ol.format.WKT` (données en *Well Down Text*).
- `ol.format.XMLFeature` pour un format de données `XML`, lui-même décomposé en cinq objets fils :
    - `ol.format.GPX` ;
    - `ol.format.KML` ;
    - `ol.format.OSMXML` ;
    - `ol.format.WFS` ;
    - `ol.format.WMSGetFeatureInfo`.

### L'objet `ol.style.Style`

L'objet `ol.style.Style` est défini par cinq propriétés :
- `geometry` qui définit la forme du symbole géométrique avec soit un objet `ol.geom.Geometry`, soit un objet `ol.style.Style` ;
- `fill` qui définit le remplissage du symbole par un objet `ol.style.Fill` ;
- `image` qui définit le symbole de type image par un objet `ol.style.Image` ;
- `stroke` qui définit le contour du symbole par un objet `ol.style.Stroke` ;
- `text` qui définit l'étiquette de l'objet par un objet `ol.style.Text`.

### L'objet `ol.geom.Geometry`

L'objet `ol.geom.Geometry` est la classe-mère des neuf objets fils :
- `ol.geom.GeometryCollection` qui définit une collection de géométries ;
- `ol.geom.Point` qui définit un point ;
- `ol.geom.MultiPoint` qui définit un ensemble de point ;
- `ol.geom.LinearRing` qui définit un contour circulaire ;
- `ol.geom.LineString` qui définit une ligne ;
- `ol.geom.MultiLineString` qui définit plusieurs lignes ;
- `ol.geom.Polygon` qui définit un polygone ;
- `ol.geom.MultiPolygon` qui définit plusieurs polygones ;
- `ol.geom.Circle` qui définit un cercle.

Hormis `ol.geom.GeometryCollection` et `ol.geom.Circle`, l'ensemble des objets prennent en propriété, `coordinates`, défini par un objet `ol.coordinate`.
- `ol.geom.GeometryCollection` est défini par une propriété `geometries`, défini par un objet `ol.geom.Geometry`.
- `ol.geom.Circle` est défini par une propriété `center`, centre du cercle, défini par un objet `ol.coordinate`.

### L'objet `ol.style.Image`

L'objet `ol.style.Image` est la classe-mère des trois objets fils :
- `ol.style.Icon` qui définit une image ;
- `ol.style.RegularShape` qui définit un polygone régulier par l'intermédiaire de deux propriétés : `fill` pour le remplissage, défini par un objet `ol.style.Fill`, et `stroke` pour le contour, défini par un objet `ol.style.Stroke` ;
- `ol.style.Circle` qui définit un cercle par l'intermédiaire de deux propriétés : `fill` pour le remplissage, défini par un objet `ol.style.Fill`, et `stroke` pour le contour, défini par un objet `ol.style.Stroke` ;

### Les objets `ol.style.Fill` et `ol.style.Stroke`

Les objets `ol.style.Fill` et `ol.style.Stroke` sont définis par une propriété `color`, définie par un objet `ol.color`.

### L'objet `ol.style.Text`

L'objet `ol.style.Text` est défini par quatre propriétés :
- `fill` pour le remplissage, défini par un objet `ol.style.Fill` ;
- `stroke` pour le contour, défini par un objet `ol.style.Stroke` ;
- `backgroundFill` pour le remplissage, défini par un objet `ol.style.Fill` ;
- `backgroundStrole` pour le contour, défini par un objet `ol.style.Stroke`.

### Les objets `ol.layerTile` et `ol.layer.Vector`

L'objet `ol.layerTile` est défini par huit propriétés :
- `source` qui définit la source de la couche avec un objet `ol.Source` ;
- `opacity` qui définit l'opacité de la couche avec une valeur allant de 0 à 1 ;
- `visible` qui définit la visibilité de la couche. La valeur par défaut est `true`.
- `minResolution` qui définit la résolution minimale (niveau de zoom) incluse d'affichage de la couche en unité de carte par pixel ;
- `maxResolution` qui définit la résolution maximale (niveau de dézoom) exclue d'affichage de la couche en unité de carte par pixel ;
- `zIndex` qui définit le niveau de superposition de la couche. La valeur par défaut est `0` ;
- `title` qui définit le titre de la couche ;
- `type` qui définit un fond de plan. Une seule couche de type `base` est affichée à la fois.

Pour faciliter la création des couches de type « fond de carte », il est conseillé de créer une fonction gérant la création de chaque couche avec en paramètres avec option de la couche. L'objet `ol.Map` possède de nombreuses méthodes, dont `addLayer()`. Comme on a crée un *getter*, on le modifie en utilisant `getMap()`.
```
	function creerCouche(source, opacite, visibilite, minResolution, maxResoltion, zIndex, titre, type)
	{
		const couche = new ol.layer.Tile({
			source: source,
			opacity: opacite,
			visible: visibilite,
			minResolution: minResolution,
			maxResolution: maxResolution,
			zIndex: zIndex,
			title: titre,
			type: type
		});
		getMap().addLayer(couche);
	}	
```

Il est possible de créer des couches vectorielles avec le format `GeoJSON`.
```
	function creerCouche(...) // Définir les paramètres voulus
	{
		const couche = new ol.layer.Vector({
			// Opacité de la couche (défaut : 1)
			opacity: 1,
			// Visibilité de la couche (défaut : true)
			visible: true,
			// Résolutions minimum (niveau de zoom) incluse d'affichage de la couche en unité de carte par pixel
			minResolution:25,
			// Résolutions maximum (niveau de dézoom) exclue d'affichage de la couche en unité de carte par pixel
			maxResolution:500,
			// Niveau de superposition de la couche (défaut : 0)
			zIndex: 0,
			// Emprise de rendu maximum. Emprise en xmin, ymin, xmax, ymax en 3857
			extent: [],
			// Ordre de rendu de la couche (ordre de dessin des couches)
			renderOrder: 1,
			// Zone en pixel autour de la carte jusqu'ou la couche sera dessinée après chaque déplacement (défaut : 100)
			renderBuffer: 100,
			// Mode de rendu de la couche (défaut : 'vector')
			// 		'vector' : Rendu vecteur : plus précis durant les animations mais plus lourd
			// 		'image' : Rendu image : moins précis durant les animations mais plus léger, les point et les étiquettes tournent avec la vue
			renderMode: 'vector',***
			// Gestion des conflits entre les objets (défaut : false). Lorsque la propriété est activée, la priorité des objets est définit avec la propriété zIndex du style
			//declutter: false,
			// Extension LayerSwitcher : Titre de la couche
			title: 'Couche exemple',
			// Source de la données
			source: new ol.source.Vector({
				features: new ol.format.GeoJSON().readFeatures(
					//Données en format GeoJSON
				)
			}),
			// Style de la couche
			style: new ol.style.Style({
				// Remplissage des objets de la couche (fill)
				// Utilisation d'une image
				image: new ol.style.Icon({
					// Image source à utiliser
					src:'https://ressource.arthurbazin.com/demo/open_layer/ressource/placeholder_black.svg',
					// Dimension de l'image en pixel (défaut : [50, 50])
					size:[50,50],
					// Point d'ancrage de l'image (défaut : [0.5, 0.5])
					anchor: [0.5, 46],
					// Unité d'ancrage en X (défaut : 'fraction')
					anchorXUnits: 'fraction',
					// Unité d'ancrage en Y (défaut : 'fraction')
					anchorYUnits: 'pixels',
					// Opacité de l'image (défaut : 1)
					opacity: 1,
					// Echelle de l'image (défaut : 1)
					scale:0.5,
					// Rotation de l'icone avec la vue (défaut : false)
					rotateWithView: true,
					// Rotation de l'icone en radian dans le sens des aiguille d'une montre (défaut : 0)
					rotation:0,
				}),
				// Contour des objets (stroke)
				// Etiquette des objets
				text: new ol.style.Text({
					// Texte à afficher
					text: 'Salut',
					// Police (défaut : '10px sans-serif')
					font:'10px sans-serif',
					// Décalage du texte en X en pixel (défaut : 0)
					offsetX:0,
					// Décalage du texte en Y en pixel (défaut : 0)
					offsetY:19,
					// Le texte peut-il dépasser de l'opbjet ? (défaut : false)
					overflow:false,
					// Placement du texte (défaut : 'point'). Valeur : 'point' ou 'line' si la forme est de type ligne ou polygone
					placement:'point',
					// Echelle
					scale:1,
					// Rotation du texte avec la carte (défault : false)
					rotateWithView:true,
					// Rotation du texte en radian (défaut : 0)
					rotation:0,
					// Alignement du texte (défaut : 'center' si placement: 'point'). Valeur : 'left', 'right', 'center', 'end' ou 'start'
					textAlign:'center',
					// Alignement vertical du texte (défault : middle). Valeur : 'bottom', 'top', 'middle', 'alphabetic', 'hanging' ou 'ideographic'
					textBaseline: middle,
					// Remplissage du texte
					fill:,
					// Contour du texte
					stroke: new ol.style.Stroke({
						color:[255, 255, 255, 0.7],
						//lineCap:round,
						//lineJoin:round,
						//lineDash
						//lineDashOffset
						//miterLimit
						width:3,
					}),
					// Remplissage du fond
					backgroundFill:,
					// Contour du fond
					//backgroundStroke:,
					// Espacement autour du texte en pixel (Défaut : [0, 0, 0, 0]) (Ordre : [haut, droite, milieu, gauche])
					padding:[5, 5, 5, 5],
				}),
			})
		});
		getMap().addLayer(couche);
	}	
```

### Le format `GeoJSON`

Il existe plusieurs types de dessin :
- `Point` ;
- `LineString` ;
- `Polygon` ;
- `MultiPoint` ;
- `MultiLineString` ;
- `MultiPolygon` ;
- `Circle`.

Le `GeoJSON` se code comme le J.S.O.N.
```
	{
		"properties": "informations géographiques",
		"type": "FeatureCollection",
		"feature": [{
			"type": "Feature",
			"properties": {},
			"geometry": {
				"type": "LineString",
				"coordinates": [
					[longitude, latitude],
					etc.
				]
			}
		}]
	}
```

Le dessin vectoriel a pour base `Canvas`.
```
	const fillStyle = new ol.style.fill({
		color: [R, G, B, a]
	});
	etc.
	const coucheVectorielle = new ol.layer.VectorImage({
		source: new ol.source.Vector({
			url: "lien.geojson",
			format: new ol.format.GeoJSON()
		}),
		style: new ol.style.Style({
			fill: fillStyle,
			stroke: strokeStyle,
			image: circleStyle
		}),
		visible: true,
		title: "..."
	});
	map.addLayer(coucheVectorielle);
```

> [!NOTE]
> `strokeStyle` et `circleStyle` sont des variables. `map` est un objet `ol.Map`.

On peut créer différents types de vecteurs comme un carré :
```
	new ol.layer.Vector({
		source: new ol.source.Vector({
			features: [new ol.Feature(
				new ol.geom.Point([longitude, latitude])
			)]
		})
	});
```

> [!NOTE]
> Il existe également :
> - `TopoJSON` ;
> - `KML` ;
> - `GML`.

### L'objet `ol.layer.Group`

L'objet `ol.layer.Group` permet de créer un groupe de couches.
```
	const couches = new ol.layer.Group({
		// Opacité de la couche (défaut : 1)
		opacity: 1,
		// Visibilité de la couche (défaut : true)
		visible: true,
		// Résolutions minimum (niveau de zoom) incluse d'affichage de la couche en unité de carte par pixel
		minResolution:25,
		// Résolutions maximum (niveau de dézoom) exclue d'affichage de la couche en unité de carte par pixel
		maxResolution:500,
		// Niveau de superposition du groupe (défaut : 0)
		zIndex: 0,
		// Extension LayerSwitcher : Titre de la couche : Extension LayerSwitcher
		title: 'Fond de plan',
		// Extension LayerSwitcher : Dépliage du groupe (défaut : 'open')
		fold: 'open',
		// Extension LayerSwitcher : Combiner plusieurs couches en une seule : le groupe fait office de "couche"
		combine: true,
		// Couches de données contenues dans le groupe
		layers: [
			//nom de la variable représentant la couche 1,
			//nom de la variable représentant la couche 2,
			//etc.
		]
	});
```

### L'objet `ol.View`

L'objet `ol.View` permet de créer une vue.
```
	const vue = new ol.View({
		// Projection de la carte (défaut : 'EPSG:3857'). WGS 84 / Pseudo-Mercator -- Spherical Mercator, Google Maps, OpenStreetMap, Bing, ArcGIS, ESRI.
		projection:'EPSG:3857',
		// Centre de la carte. On récupère les coordonnées depuis des coordonnées longitude/lattitude
		center: ol.proj.fromLonLat([5.918861, 45.888972]),
		// Extension maximale permise pour le centre de la carte. Emprise en xmin, ymin, xmax, ymax en 3857
		extent: [],
		// Résolution à l'ouverture en unité de carte par pixel
		resolution: 432,
		// Résolutions possibles pour l'utilisateur (en ordre décroissant) en unité de carte par pixel
		resolutions: [110693, 55346, 27673, 13837, 6918, 3459, 1730, 865, 432, 216, 108, 54, 27, 14, 7, 3.3, 1.6, 0.8, 0.4, 0.2, 0.1],
		// Résolution maximale représentée par un nombre entier
		maxResolution: 10,
		// Niveau de zoom maximum (défaut : 28)
		maxZoom: 0,
		// Niveau de zoom minimum (défaut : 0)
		minZoom: 0,
		// Niveau de zoom à l'ouverture (0 : dézoomé - 20 : très zoomé)
		zoom: 8,
		// Autoriser la rotation de la carte (défaut : true)
		enableRotation: true,
		// Contrainde la rotation de la carte (défaut : true) / true = sans contrainte mais accrochage automatique vers 0 degré / nombre : nombre d'étapes possibles (4 étape = 0, 90, 180 et 270 degrés)
		constrainRotation: true,
		// Rotation de la carte en radian dans le sens des aiguilles d'une montre (défaut : 0)
		rotation: 0,***
	});
```

> [!NOTE]
> Pour connaître la projection, on tape l'U.R.L. [https://epsg.io/](https://epsg.io/) et on la complète avec le numéro de projection, EPSG3857, soit [https://epsg.io/](https://epsg.io/3857).

## Les méthodes utilisables avec un objet `ol.Map`

Tous les objets peuvent être écrits avec des méthodes, mais, dans la pratique, seules les méthodes de l'objet `ol.Map` sont utilisées. En voici quelques unes. Pour le reste, il faut se référer la documentation officielle. Soit `let map = new ol.Map(...)`.
- `map.addControl(` *contrôle* `)` : ajouter un contrôle
- `map.addInteraction(` *interaction* `)` : ajouter une interaction
- `map.addLayer(` *couche* `)` : ajouter une couche
- `map.addOverlay(` *couche* `)` : ajouter une mini-carte
- `map.getAllLayers()` : obtenir toutes les couches d'un groupe
- `map.getControls()` : obtenir tous les contrôleurs
- `map.getEventCoordinate(` *événement* `)` : obtenir la coordonnée dans la projection de la carte
- `map.getInteractions()` : obtenir toutes les interactions
- `map.getLayerGroup()` : obtenir le groupe de couches associé à la carte
- `map.getLayers()` : obtenir les couches associées à la carte
- `map.getSize()` : obtenir la taille de la carte
- `map.getTarget()` : obtenir la cible dans le document `HTML`
- `map.getTargetElement()` : obtenir la cible dans le document `HTML`
- `map.getView()` : obtenir la vue associée à la carte
- `map.getViewport()` : obtenir la vue associée à la carte
- `map.removeControl(` *contrôle* `)` : supprimer un contrôleur par sa clé
- `map.removeInteraction(` *interaction* `)` : supprimer une interaction par sa clé
- `map.removeLayer(` *couche* `)` : supprimer une couche par sa clé
- `map.removeOverlay(` *couche* `)` : supprimer une couche par sa clé
- `map.setLayerGroup(` *couche* `)` : créer ou modifier un groupe de couche
- `map.setLayers(` *couche* `)` : effacer les couches existantes, puis les recréer
- `map.setSize(` *taille* `)` : définir ou modifier la taille de la carte
- `map.setTarget(` *cible* `)` : définir ou modifier la cible `HTML` de la carte
- `map.setView(` *vue* `)` : définir ou modifier une vue de la carte

**Il est inutile de passer en revue les méthodes des autres objets**. Leur utilisation dépend d'un besoin particulier. Il faut avoir le réflexe de consulter la documentation.

## Les outils pratiques à mettre en œuvre

### Création d'une nouvelle tuile

Pour créer une nouvelle tuile : `ol.layerTile()`
```
	map.addLayer(nom de la variable de la couche à ajouter);
```

### Création d'un groupe de tuiles

Si on insère un groupe de tuiles, on crée une variable intermédiaire avant d'insérer les calques créés avec `new ol.layer.Tile()`
```
	let group = new ol.layer.group({
		layers: [
			layer1, layer2, etc.
		]
	});
	map.addLayer(group);
```

L'ordre des couches de `group` est important : la dernière créée est celle du premier plan.

### Permission d'afficher les coordonnées cliquées sur la carte

- Afficher les coordonnées cliquées sur la carte sur la console en créant un événement `click`
```
	map.on('click', function (event) {
		console.log(event.coordinate);
	});
```
- Créer un *layer switcher* avec des boutons radio pour changer les couches raster utilisées.
