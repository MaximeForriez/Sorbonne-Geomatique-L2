console.clear();
/*1. Manipulation des variables*/
console.info("1. Manipulation des variables");
/*- Créer trois variables pour enregistrer un nom, un prénom et un âge*/
console.info("- Créer trois variables pour enregistrer un nom, un prénom et un âge");
let nom;
let prenom;
let age;
/*- Créer une saisie, l’enregistrer et afficher les valeurs sur la console*/
console.info("- Créer une saisie, l’enregistrer et afficher les valeurs sur la console");
nom = prompt("Quel est ton nom ?");
prenom = prompt("Quel est ton prénom ?");
age = parseInt(prompt("Quel est ton âge ?"));/*parseInt() sera explicité au point 5.*/
console.info(nom);
console.info(prenom);
console.info(age);
/*2. Manipulation des conditions*/
console.info("2. Manipulation des conditions");
/*- Créer une condition vérifiant si la personne est majeure (18 ans)*/
console.info("- Créer une condition vérifiant si la personne est majeure (18 ans)");
if(age >= 18)
{
	console.info("Tu es majeur.");
}
else
{
	console.info("Tu es mineur.");
}
/*- Créer une condition vérifiant si l’âge de la personne est correct (entre 0 et 130 ans)*/
console.info("- Créer une condition vérifiant si l’âge de la personne est correct (entre 0 et 130 ans)");
if(age < 0)
{
	console.error("Tu ne peux pas avoir un âge négatif !");
}
else if(age >= 130)
{
	console.error("Tu ne peux pas être aussi âgé !");
}
else
{
	if(age >= 18)
	{
		console.info("Tu es majeur.");
	}
	else
	{
		console.info("Tu es mineur.");
	}
}
/*- Afficher les résultats sur la console avec des variables booléennes*/
console.info("- Afficher les résultats sur la console avec des variables booléennes");
let verificationAge;
if(age < 0)
{
	verificationAge = false;
}
else if(age >= 130)
{
	verificationAge = false;
}
else
{
	if(age >= 18)
	{
		verificationAge = true;
	}
	else
	{
		verificationAge = false;
	}
}
console.info("Es-tu mineur ? " + verificationAge);

/*3. Manipulation des boucles*/
console.info("3. Manipulation des boucles");
/*- Faire un sapin sur la console*/
console.info("- Faire un sapin sur la console");
//Définir la taille maximale
const TAILLEMAX = 20;
//Initialisation des valeurs
let init = "*";
while(init.length < TAILLEMAX)
{
	init = "* " + init + " *";
}
const TAILLESAPIN = parseInt(init.length/2);
let sapin = new Array(TAILLESAPIN);
sapin[0] = init;
//Remplissage du tableau (à l'envers)
for(let i = 0 ; i < TAILLESAPIN ; i++)
{
	sapin[i + 1] = " " + init.substring(0, init.length - 2);
}
//Inversion de l'ordre dans le tableau
sapin = sapin.reverse();
//Affichage des valeurs inversées
for(valeur of sapin)
{
	console.log(valeur);
}
/*- Faire un compteur de 0 à 9 qui n’a pas le droit d’afficher la valeur 5 sur la console*/
console.info("- Faire un compteur de 0 à 9 qui n’a pas le droit d’afficher la valeur 5 sur la console");
for(let i = 0 ; i < 10 ; i++)
{
	if(i == 5)
	{
		continue;
	}
	console.info(i);
}
/*- Faire un compteur de 0 à 9 qui s’arrête après l’afficher de la valeur 5 sur la console*/
console.info("- Faire un compteur de 0 à 9 qui s’arrête après l’afficher de la valeur 5 sur la console");
for(let i = 0 ; i < 10 ; i++)
{
	if(i == 5)
	{
		break;
	}
	console.info(i);
}
/*4. Manipulation des tableaux*/
console.info("4. Manipulation des tableaux");
/*- Faire un tableau contenant la liste des prénoms suivants : AMINA, ANDREAS, ANGELE, ANNE-LISE, AXELLE, BLANCHE, DASSE, DORIAN, ELIA-HELENE, ELOISE, EMEL, GABRIEL, GABRIELA, GASPARD, HELIE, HERVELINE, KAMIL, LAURA, LELILEI, LENKA, LETICIA, LIILAN, LISA, LOUNA, LUCILLE, LYLIA, MA, MAEL, MAHER, MANON, MARIAM, MARIAME, MARIO, MELINA, MERLIN, MIKA, MIORA, NATHAN, NAWEL, NDEYE, NINA, REMI, ROMANE, SAFAE, SALAH, SANAE, SOFIA, TALITA, THIBAULT, TOMMY, TRINITY, VERA, VIKTOR, VIRGILE, YASMINE, YOUSRA et ZITA*/
console.info("- Faire un tableau contenant la liste des prénoms suivants : AMINA, ANDREAS, ANGELE, ANNE-LISE, AXELLE, BLANCHE, DASSE, DORIAN, ELIA-HELENE, ELOISE, EMEL, GABRIEL, GABRIELA, GASPARD, HELIE, HERVELINE, KAMIL, LAURA, LELILEI, LENKA, LETICIA, LIILAN, LISA, LOUNA, LUCILLE, LYLIA, MA, MAEL, MAHER, MANON, MARIAM, MARIAME, MARIO, MELINA, MERLIN, MIKA, MIORA, NATHAN, NAWEL, NDEYE, NINA, REMI, ROMANE, SAFAE, SALAH, SANAE, SOFIA, TALITA, THIBAULT, TOMMY, TRINITY, VERA, VIKTOR, VIRGILE, YASMINE, YOUSRA et ZITA");
let tableauPrenom = ["AMINA", "ANDREAS", "ANGELE", "ANNE-LISE", "AXELLE", "BLANCHE", "DASSE", "DORIAN", "ELIA-HELENE", "ELOISE", "EMEL", "GABRIEL", "GABRIELA", "GASPARD", "HELIE", "HERVELINE", "KAMIL", "LAURA", "LELILEI", "LENKA", "LETICIA", "LIILAN", "LISA", "LOUNA", "LUCILLE", "LYLIA", "MA", "MAEL", "MAHER", "MANON", "MARIAM", "MARIAME", "MARIO", "MELINA", "MERLIN", "MIKA", "MIORA", "NATHAN", "NAWEL", "NDEYE", "NINA", "REMI", "ROMANE", "SAFAE", "SALAH", "SANAE", "SOFIA", "TALITA", "THIBAULT", "TOMMY", "TRINITY", "VERA", "VIKTOR", "VIRGILE", "YASMINE", "YOUSRA", "ZITA"];
/*- Parcourir les prénoms et afficher la liste des prénoms...*/
console.info("- Parcourir les prénoms et afficher la liste des prénoms...");
/*... avec une boucle while*/
console.info("... avec une boucle while");
let count = 0;
while(count < tableauPrenom.length)
{
	console.info(tableauPrenom[count]);
	count++;
}
/*... avec une boucle for*/
console.info("... avec une boucle for");
for(let i = 0 ; i < tableauPrenom.length ; i++)
{
	console.info(tableauPrenom[i]);
}
/*... avec une boucle for... of...*/
console.info("... avec une boucle for... of...");
for(let element of tableauPrenom)
{
	console.info(element);
}
/*- Afficher sur la console le numéro de chaque élément et le prénom associé*/
console.info("- Afficher sur la console le numéro de chaque élément et le prénom associé");
for(let element in tableauPrenom)
{
	console.info(element + "," + tableauPrenom[element]);
}
/*5. Manipulation des fonctions*/
console.info("5. Manipulation des fonctions");
/*- Faire une fonction additionnant deux nombres saisis par l’utilisateur*/
console.info("- Faire une fonction additionnant deux nombres saisis par l’utilisateur");
//Par convention, on écrit les fonctions avant le code.
function addition(nb1, nb2)
{
	return nb1 + nb2;
}
//prompt ne saisit que des chaînes de caractères. Il faut convertir la valeur pour obtenir un nombre avec la fonction parseInt().
let nombre1 = parseInt(prompt("Choisis un premier nombre."));
let nombre2 = parseInt(prompt("Choisis un second nombre."));
console.info(addition(nombre1, nombre2));
/*- Faire une fonction concaténant le prénom et le nom de l’utilisateur obtenus par
saisie*/
console.info("- Faire une fonction concaténant le prénom et le nom de l’utilisateur obtenus par saisie");
function concatenation(prenom, nom)
{
	return prenom + " " + nom;
}
console.info(concatenation(prenom, nom));
/*6. Manipulation des objets*/
console.info("6. Manipulation des objets");
/*- Faire un objet contenant des latitudes, des longitudes et des toponymes à partir...*/
console.info("- Faire un objet contenant des latitudes, des longitudes et des toponymes à partir...");
/*... d’une déclaration*/
console.info("... d’une déclaration");
let objet1 = {
	latitude: 0,
	longitude: 0,
	toponyme: "Quelque part sur l'Équateur"
};
//console.dir permet d'afficher les objets
console.dir(objet1);
/*... d’une fonction*/
console.info("... d’une fonction");
function Objet2(latitude, longitude, toponyme)
{
	this.latitude = latitude;
	this.longitude = longitude;
	this.toponyme = toponyme;
}
//Créer l'objet en l'initialisant
let objet2 = new Objet2(0, 0, "Quelque part sur l'Équateur");
console.dir(objet2);
/*... d’une « classe »*/
console.info("... d’une « classe »");
class Objet3
{
	constructor(latitude, longitude, toponyme)
	{
		this.latitude = latitude;
		this.longitude = longitude;
		this.toponyme = toponyme;	
	}
}
let objet3 = new Objet3(0, 0, "Quelque part sur l'Équateur");
console.dir(objet3);
/*- Mettre en place des getter et des setter, et les tester avec un affichage sur la console*/
console.info("- Mettre en place des getter et des setter, et les tester avec un affichage sur la console");
class Objet4
{
	constructor(latitude, longitude, toponyme)
	{
		this.setLatitude(latitude);
		this.setLongitude(longitude);
		this.setToponyme(toponyme);	
	}
	getLatitude()
	{
		return this.latitude;
	}
	setLatitude(latitude)
	{
		this.latitude = latitude;
	}
	getLongitude()
	{
		return this.longitude;
	}
	setLongitude(longitude)
	{
		this.longitude = longitude;
	}
	getToponyme()
	{
		return this.toponyme;
	}
	setToponyme(toponyme)
	{
		this.toponyme = toponyme;
	}
}
let objet4 = new Objet4(0, 0, "Quelque part sur l'Équateur");
//Test des getter
console.info("Affichage des valeurs par les getter");
console.info(objet4.getLatitude());
console.info(objet4.getLongitude());
console.info(objet4.getToponyme());
//Test des setter : on corrige les valeurs saisies
objet4.setLatitude(45);
objet4.setLongitude(45);
objet4.setToponyme("Quelque part au milieu de nulle part");
console.info("Affichage des valeurs par les getter après modification par les setter");
console.info(objet4.getLatitude());
console.info(objet4.getLongitude());
console.info(objet4.getToponyme());
/*7. Manipulation des objets natifs*/
console.info("7. Manipulation des objets natifs");
/*À vous de jouer !*/
console.info("À vous de jouer !");
