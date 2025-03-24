console.clear();
console.info("Gestion des événements en JavaScript");

//Par convention, on place toutes les fonctions en début de code.

//Fonction à appeler lors de la saisie des données dans la zone de texte
function changeTexte()
{
	console.info(texte.value);
}
function cliqueRadio()
{
	console.info(radio.value);
}
function cliqueCase()
{
	console.info(caseacocher.value);
}
function cliqueListe()
{
	console.info(liste.value);
}

//Fonctions à créer pour les autres éléments du formulaire

//Exemple pour la zone de saisie
//1. Utilisation du D.O.M. / B.O.M.
let texte = document.getElementById("texte");
//2. Utilisation des événements en créant un écouteur adapté
texte.addEventListener("keyup", changeTexte);

//Bouton radio
let radio = document.getElementById("radio");
radio.addEventListener("click", cliqueRadio);

//Case à cocher
let caseacocher = document.getElementById("case");
caseacocher.addEventListener("click", cliqueCase);

//Liste
let liste = document.getElementById("liste");
liste.addEventListener("click", cliqueListe);
