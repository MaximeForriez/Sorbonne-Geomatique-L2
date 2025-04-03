//Fonction lisant la capture des informations géographiques
function coordonnees(eventGeo)
{
	this.date = eventGeo.timestamp;
	let date2 = new Date();
	date2.setTime(this.date);
	this.date = date2.toString();
	
	this.latitude = eventGeo.coords.latitude;
	this.longitude = eventGeo.coords.longitude;
	this.altitude = eventGeo.coords.altitude;
	
	this.erreurLatitudeLongitude = eventGeo.coords.accuracy;
	this.erreurAltitude = eventGeo.coords.altitudeAccuracy;
	
	this.angleVersLeNord = eventGeo.coords.heading;
	
	let paragraphe1 = document.getElementById("para1");
	paragraphe1.innerHTML = "Date de la requete : " + this.date + "<br><br>" + "Latitude : " + this.latitude + "degré ; Longitude : " + this.longitude + "degré<br>" + "Altitude : " + this.altitude + " m<br>" + "Erreur sur la longitude et la latitude : " + this.erreurLatitudeLongitude + " m<br>" + "Erreur sur l'altitude : " + this.erreurAltitude + " m<br>" + "Orientation par rapport au nord : " + this.angleVersLeNord + "degré<br>";
	dms(this.latitude, this.longitude);
	setLatitude(this.latitude);
	setLongitude(this.longitude);
	setErreurLatitudeLongitude(this.erreurLatitudeLongitude);
	main();
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
	paragraphe2.innerHTML = "Latitude : " + this.latitudeDegre + "degré " + this.latitudeMinute + "\'" +  this.latitudeSeconde + "\"" + " ; Longitude : " + this.longitudeDegre + "degré " + this.longitudeMinute + "\'" +  this.longitudeSeconde + "\"" + "<br>";
}

function erreur(err)
{
	switch(err.code)
	{
		case error.TIMEOUT:
		console.warn("Timout ! !");
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

//Affichage des coordonnées d'un point géographique
function clicCarte(event)
{
	console.log(event.coordinate);
}

//Initialisation de la carte
function initOpenLayers()
{
	this.map = new ol.Map({
		view: new ol.View({
		//Attention ! L'attribut projection peut empêcher l'affichage des cadres vectoriels à cause de la déformation.
		//			projection: "EPSG:4326",
		center: ol.proj.fromLonLat([getLongitude(), getLatitude()]),
			zoom: 14
		}),
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM(),
				visible: true,
				opacity: 1
			})
		],
		target: 'jsmap',
	});
	setMap(this.map);
}

//Affichage des coordonnées du point géographie ciblé
function afficheCoordonnees()
{	
	let centrerLongitudeLatitude = ol.proj.fromLonLat([getLongitude(), getLatitude()]);
	let couche = new ol.layer.Vector({
		source: new ol.source.Vector({
			projection: 'EPSG:4326',
			features: [new ol.Feature(new ol.geom.Circle(centrerLongitudeLatitude, getErreurLatitudeLongitude()))]
		}),		
		style: [
			new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: 'blue',
					width: 3
				}),
				fill: new ol.style.Fill({
					color: 'rgba(0, 0, 255, 0.1)'
				})
			})
		]
	});
	getMap().addLayer(couche);
}

//Getters et setters
function getLatitude()
{
	return this.latitude;
}

function setLatitude(latitude)
{
	this.latitude = latitude;
}

function getLongitude()
{
	return this.longitude;
}

function setLongitude(longitude)
{
	this.longitude = longitude;
}

function getErreurLatitudeLongitude()
{
	return this.erreurLatitudeLongitude;
}

function setErreurLatitudeLongitude(erreur)
{
	this.erreurLatitudeLongitude = erreur;
}

function getMap()
{
	return this.map;
}

function setMap(map)
{
	this.map = map;
}

//Evénement de la géolocalisation
let geolocalisation = navigator.geolocation;
//Déclaration des options de la localisation
const options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};

//Initialisation des getters et des setters de latitude et de la longitude
let latitude = 0;
let longitude = 0;
let erreurLatitudeLongitude = 0
setLatitude(latitude);
setLongitude(longitude);
setErreurLatitudeLongitude(erreurLatitudeLongitude);
//Initialisation de la variable de la carte
let map;

//Fonction auto-invoquée permettant de capturer si c'est possible les données géolocalisées du navigateur client
//Bien la placer après la déclaration de la variable déclencheur de l'événement
(function()
{
	// if(navigateurEnLigne)
	// {
		if(geolocalisation)
		{
			geolocalisation.getCurrentPosition(coordonnees,erreur,options);
		}
		else
		{
			let paragraphe1 = document.getElementById("para1");
			paragraphe1.innerHTML = "Localisation indisponible !" + "<br>";
		}
		// }
		// else
		// {
			// let paragraphe1 = document.getElementById("para1");
			// paragraphe1.innerHTML = "Navigateur hors ligne !" + "<br>";
		// }
	}
)();

//Afin d'éviter les retards dus au multithread de la géolocalisation, on crée une fonction main() dans laquelle le programme principal va s'exécuter.
function main()
{
	//Initialisation de la carte
	initOpenLayers();
	
	//Tester des couches raster
	const openStreetMapHumanitarian = new ol.layer.Tile({
		source: new ol.source.OSM({
			url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
		}),
		visible: true,
		opacity: 0.5,
		title: "OSMStandard"
	});
	getMap().addLayer(openStreetMapHumanitarian);
	/*		
	const stamenTerrain = new ol.layer.Tile({
		source: new ol.source.XYZ({
			url: "http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg"
		}),
		visible: true,
		opacity: 0.5,
		title: "StamenTerrain"
	});
	//	getMap().addLayer(stamenTerrain);
	*/
	/*
	const groupe = new ol.layer.Group({
		layers: [openStreetMapHumanitarian, stamenTerrain]	
	});
	getMap().addLayer(groupe);
	*/
	//Tester des couches vectorielles
	afficheCoordonnees();
	
	console.log(getLatitude());
	console.log(getLongitude());
	console.log(getErreurLatitudeLongitude());
	console.log(getMap());
	
	//Obtenir les coordonnées des points cliqués sur la console
	getMap().on('click', clicCarte);
}