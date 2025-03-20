/*
	Gestion des couleurs JS
	Source : https://www.npmjs.com/package/color-name?activeTab=code
*/
const conversionCouleur = {
	aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255],
	beige: [245, 245, 220], bisque: [255, 228, 196], 	black: [0, 0, 0], blanchedalmond: [255, 235, 205],
	blue: [0, 0, 255], blueviolet: [138, 43, 226], 	brown: [165, 42, 42], burlywood: [222, 184, 135],
	cadetblue: [95, 158, 160], 	chartreuse: [127, 255, 0], chocolate: [210, 105, 30], 	coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255],
	darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34],
	floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255],
	gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128],
	honeydew: [240, 255, 240], hotpink: [255, 105, 180],
	indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240],
	khaki: [240, 230, 140], 
	lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230],
	magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181],
	navajowhite: [255, 222, 173], navy: [0, 0, 128],
	oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214],
	palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128],
	rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225],
	saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180],
	tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208],
	violet: [238, 130, 238],
	wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245],
	yellow: [255, 255, 0]
};

function couleurParDefaut(alpha)
{
	let color = conversionCouleur['black'];
	const RED = color[0].toString();
	const GREEN = color[1].toString();
	const BLUE = color[2].toString();
	const ALPHA = alpha;
	let colorAlpha = "rgba(" + RED + ", " + GREEN + ", " + BLUE + ", " + ALPHA + ")";
	color = "rgb(" + RED + ", " + GREEN + ", " + BLUE + ")";
	return [color, colorAlpha];
}

function choixCouleur(color, alpha)
{
	const ALPHA = alpha.toString();
	let colorAlpha;
	if(typeof(color) == "string")
	{
		color = conversionCouleur[color];
		if(typeof(color) == "undefined")
		{
			console.error("Couleur indéfinie !");
			color = couleurParDefaut(alpha)[0];
			colorAlpha = couleurParDefaut(alpha)[1];
		}
		else
		{
			const RED = color[0].toString();
			const GREEN = color[1].toString();
			const BLUE = color[2].toString();
			colorAlpha = "rgba(" + RED + ", " + GREEN + ", " + BLUE + ", " + ALPHA + ")";
			color = "rgb(" + RED + ", " + GREEN + ", " + BLUE + ")";
		}
	}
	else
	{
		console.info(typeof(color));
		if(typeof(color) == "table")
		{
			if(color.length >= 0 && color.length <= 3)
			{
				const RED = color[0].toString();
				const GREEN = color[1].toString();
				const BLUE = color[2].toString();
				for(element of color)
				{
					if(element >= 0 && element <= 255)
					{
						colorAlpha = "rgba(" + RED + ", " + GREEN + ", " + BLUE + ", " + ALPHA + ")";
						color = "rgb(" + RED + ", " + GREEN + ", " + BLUE + ")";
					}
					else
					{
						console.error("Couleur indéfinie !");
						color = couleurParDefaut(alpha)[0];
						colorAlpha = couleurParDefaut(alpha)[1];
					}
				}
			}
			else
			{
				console.error("Couleur indéfinie !");
				color = couleurParDefaut(alpha)[0];
				colorAlpha = couleurParDefaut(alpha)[1];
			}
		}
		else
		{
			console.error("Couleur indéfinie !");
			color = couleurParDefaut(alpha)[0];
			colorAlpha = couleurParDefaut(alpha)[1];
		}
	}
	return [color, colorAlpha];
}
	
//Fonction de conversion en degrés, minutes, secondes
function dms(latitude, longitude)
{
	this.latitudeChateau = latitude;
	this.longitudeChateau = longitude;
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
	paragraphe2.innerHTML = "Latitude : " + this.latitudeDegre + " degrés " + this.latitudeMinute + "\'" +  this.latitudeSeconde + "\"" + " ; Longitude : " + this.longitudeDegre + " degrés " + this.longitudeMinute + "\'" +  this.longitudeSeconde + "\"" + "<br>";
}

//Affichage des coordonnées d'un point géographique
function clicCarte(event)
{
	console.log(event.coordinate);
	//	console.log(ol.proj.transform(event.coordinate, 'EPSG:3857', 'EPSG:4326'));
	let coord = ol.proj.toLonLat(event.coordinate); // Récupère les coordonnées en Longitude/Latitude
	console.info('Coordonnées du clic : ' + coord);
}

const cont_echelle = new ol.control.ScaleLine({
	// Taille minimum en pixel (défaut : 64)
	minWidth: 100,
	// Unité de l'échelle (défaut : 'metric')
	units: 'metric',
	// Classe de l'élément (défaut : 'ol-scale-line')
	//className: '',
	//Identifiant de l'élément HTML où placer l'élément
	//target: 'jsmap',
});

const cont_zoom = new ol.control.Zoom({
	// Libellé du bouton de zoom avant (défaut : '+')
	//zoomInLabel: '+',
	// Infobulle du bouton de zoom avant (défaut : 'Zoom in')
	zoomInTipLabel: 'Zoomer',
	// Libellé du bouton de zoom arrière (défaut : '-')
	//zoomOutLabel: '-',
	// Infobulle du bouton de zoom arrière (défaut : 'Zoom out')
	zoomOutTipLabel: 'Dézoomer',
	// Nombre de paliers de zoom par clic (défaut : 1)
	//delta: 1,
	// Durée du zoom en millisecondes (défaut : 250)
	//duration: 250,
	// Classe de l'élément (défaut : 'ol-zoom')
	//className: '',
	// Identifiant de l'élément HTML où placer l'élément
	//target: '',
});

const cont_barre_zoom = new ol.control.ZoomSlider({
	// Durée de l'animation de zoom en millisecondes (défaut : 200)
	duration: 200,
	// Classe de l'élément (défaut : 'ol-zoomslider')
	//className: '',
});

const cont_plein_ecran = new ol.control.FullScreen({
	// Libellé du bouton (defaut : '\u2922')
	//label: '\u2922',
	// Infobulle du bouton (défaut : 'Toggle full-screen')
	tipLabel: 'Passez en mode plein-écran',
	// Libellé du bouton lorsque du mode plein-écran (défaut : '\u00d7')
	//labelActive: '\u00d7',
	// Classe de l'élément (défaut : 'ol-full-screen')
	//className: '',
	// Identifiant de l'élément HTML où placer l'élément
	//target: '',
});

/*
	Paramétrer ici toutes les fonctions dont vous pourriez avoir besoin pour votre carte en utilisant le modèle : const cont_...
*/

//Initialisation de la carte
function initOpenLayers(zoom)
{
	this.map = new ol.Map({
		view: new ol.View({
			//Attention ! L'attribut projection peut empêcher l'affichage des cadres vectoriels à cause de la déformation.
			// projection: "EPSG:4326",
			center: ol.proj.fromLonLat([getLongitudeLieu(), getLatitudeLieu()]),
			zoom: zoom
		}),
		controls: [
		cont_echelle,
		cont_barre_zoom,
		cont_plein_ecran,
		cont_zoom
		],
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

//Réinitialisation des couches
function reinitialisationCouches()
{
	for(element of getMap().getAllLayers())
	{
		getMap().removeLayer(element);
	}
	document.getElementById('jsmap').textContent = "";
	initOpenLayers(getZoom());
}
/*
	Créer des fonctions afin de gérer vos couches GeoJSON

*/




























//Cartes en GeoJSON
function chargementDesCartes(carte, color, colorAlpha, epaisseur, visible)
{
	return new ol.layer.Vector({
		//title: nomCouche,
		source: new ol.source.Vector({
			projection: 'EPSG:4326',
			url: /*Mettre l'adresse de votre fichier GeoJSON*/ + carte,
			format: new ol.format.GeoJSON()
		}),
		style: [
		new ol.style.Style({
			stroke: new ol.style.Stroke({
				color: color,
				width: epaisseur
			}),
			fill: new ol.style.Fill({
				color: colorAlpha
			})
		})
		],
		visible: visible
	});
}

/*Créer des fonctions pour afficher vos couches en suivant le modèle suivant : */
function afficheCarte1(color, alpha, epaisseur, visible)
{
	let traitementCouleur = choixCouleur(color, alpha);
	color = traitementCouleur[0];
	let colorAlpha = traitementCouleur[1];
	let couche = chargementDesCartes(/*'nom du fichier GeoJSON'*/, color, colorAlpha, epaisseur, visible);
	getMap().addLayer(couche);
}


























//Getters et setters
/*
Créer tous les getter et les setter dont vous pourriez avoir besoin dans la manipulation de vos couches.
*/








//Affichage du fond de carte
function getMap()
{
	return this.map;
}
function setMap(map)
{
	this.map = map;
}
//Gestion du zoom
function getZoom()
{
	return this.zoom;
}
function setZoom(zoom)
{
	this.zoom = zoom;
}

//Initialisation des getter et des setter
/*
Créer ici toutes les variables nécessaires à la création de vos getter et setter
*/























	
//Ecouteurs
const /*nom de votre écouteur*/ = /*Accéder par le D.O.M. à l'élément de votre formulaire*/;
/*nom de votre écouteur*/.addEventListener('click', () => {
		if(/*nom de votre écouteur*/.checked == true)
		{
			reinitialisationCouches();
			/*Taper les actions à effectuer si la case est cochée*/
		}
		if(/*nom de votre écouteur*/.checked == false)
		{
			reinitialisationCouches();
			/*Taper les actions à effectuer si la case est cochée*/
			couchesParDefaut();//Vous pouvez masquer la fonction si vous n'avez pas de couches par défaut.
		}
	}
);
