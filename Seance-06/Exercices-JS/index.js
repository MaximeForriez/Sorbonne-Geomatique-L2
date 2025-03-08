console.info("Gestion des événements en JavaScript");

//Par convention, on place toutes les fonctions en début de code.

//Fonction à appeler lors de la saisie des données dans la zone de texte
function changeTexte()
{
	console.log(texte.value);
}

//Fonctions à créer pour les autres éléments du formulaire

//Exemple pour la zone de saisie
//1. Utilisation du D.O.M. / B.O.M.
let texte = document.getElementById("texte");
//2. Utilisation des événements en créant un écouteur adapté
texte.addEventListener("keypress", changeTexte);

//Bouton radio

//Case à cocher

//Liste

