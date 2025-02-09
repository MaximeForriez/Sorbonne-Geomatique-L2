# Les commandes de base du langage `JavaScript` avec `Mozilla Developer`

Le contenu ici présent résume l'intégralité des éléments vus ou pouvant être utiles dans le cadre des `OpenLayers`. Ce texte ne suit pas forcément l'ordre d'énoncé de la présentation du langage en cours.

## Les ressources

- [Cours de `HTML` et `CSS`](https://www.youtube.com/watch?v=u5W2NWItytc&list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO)

- [Approfondissements sur le `HTML` et le `CSS`](https://www.youtube.com/watch?v=bLPONCBPDeQ&list=PLrSOXFDHBtfG1_4HrfPttdwF8aLpgdsRL)

- [Cours de `HTML` et `CSS`](https://www.youtube.com/watch?v=Y80juYcu3ZI&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3)

- [Cours de `JavaScript`](https://www.youtube.com/watch?v=02Xs2ySaXcs&list=PLrSOXFDHBtfGxf_PtXLu_OrjFKt4_dqB_)

- [Cours de `JavaScript`](https://www.youtube.com/watch?v=VZLflMqC6dI&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI)

- [Page officielle sur le site de `Mozilla`](https://developper.mozilla.org/fr/docs/web/JavaScript/Reference)

- [Tout `JavaScript`](https://www.toutjavascript.com/main/index.php3)

- [Documentation non officielle](https://devdocs.io/)

## La présentation du `JavaScript`

Le `JavaScript` est un langage orienté objet de type « prototype ». La maîtrise du `HTML` est indispensable pour utiliser pleinement le `JavaScript`, car les programmes s'exécutent dans ce cadre ; ils sont totalement intégrées aux pages `HTML`.

Historiquement, `JavaScript` a été développé par `Netscape Navigator v2` en 1995 par Brendan Eich (né en 1961). `JavaScript` respecte la norme [E.C.M.A.-262](https://ecma-international.org/) pour un langage script, l'`ECMAScript`, standard respecté par tous les navigateurs dit ISO-16262.

`JavaScript` s'utilise tout aussi bien **côté client** que **côté serveur**, à la place du PHP.

`JavaScript` s'est considérablement enrichi grâce à :
- **des bibliothèques** : `jQuery`, `React` ;
- **des plateformes** : `NodeJS` ;
- **des *framework*** : `AngularJS`, `VueJS`, `Electron`, `ReactJS` ;
- **des surcouches** : `TypeScript`.


## Quelques éléments rapides sur les langages `HTML` et `CSS`

### Panorama rapide sur les balises `HTML`

### Panorama rapide sur les feuilles de style `CSS`

## L'intégration du `JavaScript` dans les pages `HTML`

### Méthode 1 : intégrer le code dans les balises HTML

`<button onclick="alert('Coucou !')">Cliquez ici !</button>`

Ce code gère un événement qui affiche une fenêtre avec le message `Coucou !` et un bouton `OK`.

### Méthode 2 : intégrer le code dans les balises `<script>...</script>`

```
<script>
	alert('Coucou !');
</script>
```

> [!WARNING]
> La balise `<script>` est bloquante. Tant que le `<script>` n'est pas exécuté, la page s'arrête de charger. Il faut de fait mettre ces balises au plus proche de `</body>`.Il faut éviter de les mettre dans `<head>`.

### Méthode 3 : créer un fichier externe `*.js`

On appelle le fichier dans une balise `<script>` par un attribut `src`.

```
<!DOCTYPE>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
		<title>Tests JavaScript</title>
	</head>
	<body>
		<h1>Tests JavaScript</h1>
		<script src="nomDuScript.js"></script>
	</body>
</html>
```

> [!NOTE]
> C'est la solution à privilégier au maximum.

## Les éléments syntaxiques de base

Toute commande doit tenir sur une ligne et s'achever par un point-virgule (même s'il est facultatif).

Les instructions, les variables et les fonctions doivent être écrites en minuscule.

Les constantes doivent être écrites en majuscule.

Il existe deux manières d'écrire des commentaires :
- sur une ligne (ou en fin de commande après le `;`) : `//...` ;
- sur plusieurs lignes : `/* ... */`.

Les nombres réels s'écrivent avec un point `.`, et non une virgule.

Il existe deux manières de construire des chaînes de caractères.
- soit `"..."` ;
- soit `'...'`.

> [!NOTE]
> Pour introduire des guillemets, il suffit d'écrire :
> - soit `"` dans un `"` ;
> - soit `\'` dans un `'`.

> [!NOTE]
> On utilise `\\` pour un *backslash*.

Des instructions peuvent se regrouper sous la forme d'un bloc :

```
{ ... }
```

Il est nécessaire de « labeliser » le programme :

```
nomDuLabel:
```

> [!WARNING]
> Il faut éviter les mots réservés suivants :
> - `abstract`
> - `boolean`
> - `break`
> - `byte`
> - `case`
> - `catch`
> - `char`
> - `class`
> - `const`
> - `continue`
> - `debugger`
> - `default`
> - `delete`
> - `do`
> - `double`
> - `else`
> - `enum`
> - `export`
> - `extends`
> - `false`
> - `finally`
> - `float`
> - `for`
> - `function`
> - `goto`
> - `if`
> - `implements`
> - `import`
> - `instanceof`
> - `in`
> - `int`
> - `interface`
> - `let`
> - `long`
> - `native`
> - `new`
> - `null`
> - `package`
> - `private`
> - `protected`
> - `public`
> - `return`
> - `short`
> - `static`
> - `super`
> - `switch`
> - `synchronized`
> - `this`
> - `throws`
> - `try`
> - `transient`
> - `true`
> - `typeof`
> - `var`
> - `void`
> - `while`
> - `with`
> - `yield`

La plupart de ces mots réservés sont eux-mêmes suivis par deux points `:`

`e` ou `E` est utilisé pour les puissances.

## Les outils de débogage

Tous les navigateurs standard ont une console de débogage.

Sur `FireFox`, elle se trouve dans le menu `Outils`.

$\rightarrow$ `Développement web`
    $\rightarrow$ `Console web`

 ou taper `F12`.

Il est possible d'afficher des messages sur la `Console web` avec l'objet `console`.
- `console.log(...)` affiche un message sur la console.
- `console.error(...)` affiche un message d'erreur sur la console. 
- `console.clear(...)` efface les messages affichés sur la console.
- `console.dir(...)` affiche un objet sur la console.

## Les variables

Contrairement à beaucoup de langages de programmation, les variables `JavaScript` sont `untyped`, **c'est-à-dire que le type de la variable est automatiquement affecté par** `JavaScript`.

La variable doit être déclarée par les mots-clés `var` et `let`, suivi d'un identificateur :

```
var i;
var j;
let i;
let j;
```

> [!NOTE]
> `var` est utilisé pour les variables globales, tandis que `let` est utilisé pour les variables locales dans un bloc d'instructions.

> [!NOTE] 
> Il est possible de déclarer plusieurs variables en même temps.

```
var i, j;
let i, j;
```

La variable peut alors être affectée d'une valeur \textit{via} un signe `=`, l'opérateur d'affectation.

```
let i;
i = 7;
let j;
j = "Max";
let k;
k = true;
let l;
l = null;
```

> [!NOTE]
> Il est possible de déclarer et d'affecter une variable.

```
let i = 7;
let j = "Max";
let k = true;
let l = null;
```

> [!NOTE]
>**La variable n'a besoin que d'une seule et unique déclaration**. Si on déclare plusieurs fois une variable globale, un message d'erreur s'affiche.

> [!WARNING]
>Toute variable non déclarée est affectée automatiquement par `JavaScript`, **mais la lecture d'une variable non déclarée entraîne une erreur**. Elle devient automatiquement une variable globale.

> [!NOTE]
> Une valeur d'une variable déclarée non affectée est `undefined`.

`JavaScript` dispose de **variables locales et globales**.
1. Les variables globales sont accessibles dans tout le programme tant que faire ce peut, il faut les éviter.
2. Les variables locales ont une portée qui ne dépasse pas le cadre de la fonction dans laquelle elles sont déclarées.

> [!NOTE]
> Pour ne pas écraser par mégarde une variable globale, il faut déclarer systématiquement toutes les variables locales avant de les employer la première fois.

Il est possible d'afficher sur la page `HTML` n'importe quelle variable en utilisant l'objet `document` et sa méthode `write()`.

```
let text = "Coucou !";
document.write(text);
document.write("<br>");
```

Toutefois, il faut éviter de l'utiliser pour des raisons de sécurité.

Le typage est **faible** et **dynamique. Le type peut être :
- `undefined` ;
- `boolean` ;
- `number` ;
- `string` ;
- `function` ;
- `object` ;
- *etc*.

Pour obtenir le type de variable, on utilise `typeof`

```
typeof text;
```

 ou

```
typeof(text);
```

Il est possible de demander une information *via* une fenêtre *pop-up*.

```
let nom = prompt("Comment t'appelles-tu ?");
```

> [!NOTE]
> Par défaut, `prompt` saisit une variable de type `string`.

Il est possible de convertir un type en un autre :
- `parseInt(age)` qui convertit en entier de base 10 ;
- `parseInt(age, 2)` qui convertit en entier de base 2 ;
- `parseFloat(age)` qui convertit en nombre flottant.

Il est possible de définir des constantes, notées en majuscules, avec `const`

```
const PI = 3.1415;
```

> [!NOTE]
> Une constante ne peut pas être modifiée, sauf s'il s'agit d'un tableau dans lequel `const` affecte non pas les valeurs, mais le type de données ; le contenu reste modifiable. Il en va de même pour les objets.

Le modificateur `void` exécute une expression, mais annule sa valeur de retour. Toutes les commandes suivantes renvoient `undefined`.

```
void(7);
void("sept");
void(document.write("text"));
```

> [!NOTE]
> Dans le dernier cas, le texte sera bien affiché, mais sa valeur de retour est annulée.

## Les opérateurs

### Les opérateurs d'affectation

Pour affecter une variable, on utilise l'opérateur `=`, mais il en existe d'autres :
- `+=` : ajout d'une valeur
- `-=` : soustraction d'une valeur
- `*=` : multiplication d'une valeur
- `/=` : division d'une valeur
- `%=` : modulo d'une valeur (reste d'une division)

### Les opérateurs arithmétiques

- `+` : addition
- `-` : soustraction et signe opposé
- `*` : multiplication
- `/` : division
- `%` : modulo
- `**` : exponentiation
- `++` : incrément de 1
	- post-incrémentation : `N++`
			1. Affectation : `N = N`
			2. Calcul : `N + 1`
	- pré-incrémentation : `++N`
			1. Calcul : `N + 1`
			2. Affectation : `N = N + 1`
- `--` : décrément de 1
	- post-décrémentation : `N--`
	- pré-décrémentation : `--N`
- `(...)` : parenthèses pour garantir les priorités de calcul

### Les opérateurs de comparaison

- `==` : égalité (ne tient pas compte du type)

```
	"42" = 42
```

- `!=` : inégalité (ne tient pas compte du type)
-`===` : identité (tient compte du type)

```
	"42" != 42
```

`!==` : non identité (tient compte du type)
	- `8 !== 8`, réponse : `false`
	- `\verb+8 !== "8"`, réponse : `true`
`>` : strictement supérieur
`<` : strictement inférieur
`>=` : supérieur ou égal
`<=` : inférieur ou égal

### Les opérateurs de chaîne de caractères

- `+` : `texte1 + texte2;`
- `==` : `texte1 == texte2;`, réponse `true` ou `false`
- `!=` : `texte1 != texte2;`, réponse `true` ou `false`
- `<`, `>`, `>=` et `=<` : comparaison de première lettre de chaque mot

### Les opérateurs conditionnels

`?` est proche d'une condition de type `if`.

La syntaxe est la suivante :

```
resultat = ((condition) ? valeur1 : valeur2)
```

Exemple :

```
let text = "Dans le dossier " + ((nombre == 1) ? "se trouve " : "se trouvent ") + nombre + ((nombre == 1) ? "fichier." : "fichiers.") +
```

### Les opérateurs logiques

- `&&` : ET (AND)
- `||` : OU (OR)
- `!` : NON LOGIQUE (NOT)
	- Exemple 1. `! 3 > 7`, réponse `true` (non logique) 
	- Exemple 2. `! 3 < 7`, réponse `false` (logique) 

## Les conditions

### La condition `if`

```
if(test1)
{
	instructions si vrai
}
else if(test2)
{
	instruction si test1 est faux, mais test2 est vrai
}
else
{
	instruction si test1 et test2 sont faux
}
```

Le test s'effectue avec les opérateurs de comparaison ou logiques.

> [!NOTE]
> `else if` et `else` sont facultatifs.

### La condition `switch`

```
switch(test d'une variable)
{
	case valeur1:
		instructions;
		break;
	case valeur2:
		instructions;
		break;
	[...]
	default:
		instructions;
		break;
}
```

La commande `break` permet de quitter le bloc `switch`.

Les valeurs testées sont celles que peut prendre la variable.

> [!NOTE]
> `switch` teste seulement des nombres ou du texte.

> [!NOTE]
> Il est possible d'imbriquer des solutions.

## Les boucles

### La boucle `while`

```
let i = 0;
while(test)
{
	instructions;
	i++;
}
```

### La boucle `do... while...`

Cette boucle exécute au moins une fois les instructions du bloc, même si la condition n'existe pas.

```
let i = 0;
do(test)
{
	instructions;
	i++;
} while(test);
```

### La boucle `for`

```
for(initialisation ; condition d'arrêt ; incrément)
{
	instructions;
}
```

Exemple :

```
for(let i = 0 ; i < 5 ; i++)
{
	instructions;
}
```

> [!NOTE]
> `break` permet d'interrompre la boucle.

> [!NOTE]
> `continue` permet de relancer une itération de la boucle en ignorant le reste des instructions.

### Les boucles de parcours

Il existe deux boucles de parcours en `JavaScript` :
- `for... in...` ;
- `for... of...`+.

`for... in...` permet de parcourir les éléments d'un objet.

```
for(element in objet)
{
	instructions;
}
```

`for... of...` permet de parcourir les variables d'un objet.

```
for(valeur of objet)
{
	instructions;
}
```

Les deux boucles parcourent une liste automatiquement. La boucle `for... in...` parcourt toutes les propriétés et les méthodes de l'objet.

> [!NOTE]
> Il est possible d'imbriquer des boucles.

## Les fonctions

Une **fonction** affecte un bloc d'instructions qui ne fait qu'un traitement.

### Notation classique

`function nomDeLaFonction(paramètre1, paramètre2, ...)`

```{```

*instructions utilisant les paramètres en variables locales*

```}```

`nomDeLaFonction` est l'identificateur de la fonction.

On peut mettre autant de paramètres que l'on veut.

Les fonctions sont en principe définies **au début** du programme.

> [!NOTE]
> Lorsque `JavaScript` rencontre une fonction, il ne l'exécute pas directement ; il enregistre le bloc d'instructions sous le nom de la fonction.

> [!NOTE]
> Une fonction peut utiliser les variables d'une portée globale.

### Fonctions anonymes

Il est possible de faire une expression de fonction (ou une fermeture), c'est-à-dire affecter une fonction à une variable.
- `let fonctionCarree = function (x) {return x*x;};`
- Appel : `fonctionCarree(2);`

### Fonctions fléchées

```
let fonctionCarree = (x) => {return x*x};
```

### Arguments d'une fonction

Tous les arguments d'une fonction sont stockés sous la forme d'un tableau `Array` appelé `arguments`. Le premier argument est indicé 0, le deuxième 1, *etc*. Le nombre d'arguments est obtenu grâce à `argument.length`. Cela permet de prendre en compte un nombre libre d'arguments avec `i < argument.length`

```
function f(x)
{
	return x*x;
}
let a = f(2);
```

Affichage : `2`

 ou

```
function g(x)
{
	return arguments[0]*arguments[0];
}
let a = g(2);
```

Affichage : `2`

### Fonctions avec un retour

`return` sert à terminer une fonction, tout comme `break` pour une boucle, mais il renvoie également une valeur.
- Si aucun \verb+return+ n'est placé en fin de fonction, la valeur de retour est par défaut `undefined`.
- Pour livrer une autre valeur, il suffit de l'indiquer après `return`
	- `return false;` retourne un booléen.
	- `return 2;` retourne un nombre.
	- `return "Max";` retourne une chaîne de caractères.
	- `return alert("...")` retourne un événement.

Exemple de la fonction carrée $ f \left( x \right) = x^2 $

```
function f(x)
{
	return x*x;
}
let a = f(2);
```

> [!NOTE]
> `x` est un paramètre, tandis que `2` est un argument appelant la fonction `f`.

> [!NOTE]
> Les fonctions peuvent s'imbriquer, mais il faut faire attention à leur portée. La fonction fille dans une fonction mère ne peut pas être appelée en-dehors de la fonction mère.

### Fonctions auto-invoquées

Les fonctions auto-invoquées s'appellent elles-mêmes ou s'exécutent d'elles-mêmes. Elles sont souvent couplées avec les fonctions anonymes.

```
(function (...) {...})();
```

Exemple de fonction auto-invoquée :

```
(
	function (x)
	{
		x = prompt("Entrez un nombre : ");
		alert("Le carré de " + x + " est " + "x*x");
	}
)();
```

### Notation objet

Il s'agit d'une anticipation par rapport aux objets. Il est possible de créer une fonction grâce au constructeur `Function("` *argument 1* `", "` *argument 2* `", ..., "` *bloc d'instruction* `")`.

```
let f = new Function("x", "return x*x;");
```

> [!NOTE]
> Les fonctions créées par le constructeur `Function()` sont **compilées** de façon dynamique, c'est-à-dire **au moment de leur appel**. Cela permet de créer des fonctions pendant l'exécution même su programme. C'est typique d'un langage orienté prototype.

## Programmation orientée objet

Le `JavaScript` est un langage orienté objet de type prototype. Il utilise une syntaxe différente d'un langage orienté objet de type classe, qui est le langage objet le plus courant. Dit autrement, il existe des spécificités pour l'un comme pour l'autre. Pourtant, depuis quelques années, le `JavaScript` a décidé d'utiliser le mot-clé `class` pour déclarer plus simples des objets de type prototype. C'est un point important à comprendre si vous utilisez l'année prochaine un langage orienté objet de type classe comme le `Python`.

Quelle approche est la plus simple ? En réalité, aucune. Dans les deux cas, pour bien comprendre la notion d'objet, il faut manipuler, tester et ne rien lâcher avant de les maîtriser.

Comme `Python`, il faut retenir que tout est objet en `JavaScript`, y compris les cartes qui seront étudiées en séances 9 et 10.

Les données sont au centre de la programmation orientée objet. On indique aux données avec quelles fonctions (méthodes) elles doivent être traitées.

- Toute fonction appartenant à un objet est appelée **méthodes**.

- Toute variable appartenant à un objet est appelée **attributs** (ou propriétés).

Deux types d'objets existent :

- les objets natifs, ceux qui sont internes à `JavaScript` ;

- les objets non natifs, définis par un constructeur.

### Le constructeur

#### Les objets avant l'`ECMAScript6`

Un objet peut être défini par ses propriétés. Il s'agit d'attributs statiques publics. C'est une **déclaration littérale**.

```
let photo = {
	source: "photo.jpg",
	titre: "Moi",
	largeur: 80,
	hauteur: 120
};
document.write(photo.source + "<br>");
document.write(photo.titre + "<br>");
document.write(photo.largeur + "<br>");
document.write(photo.hauteur + "<br>");
```

> [!NOTE]
> On peut écrire des méthodes dans la déclaration.

```
{titre: function () {return "Moi";}};
```

Un objet peut être construit par une fonction faisant l'office d'un prototype.

```
function Image(source, titre, largeur, hauteur)
{
	this.source = source;
	this.titre = titre;
	this.largeur = largeur;
	this.hauteur = hauteur;
}
let photo = new Image("Photo.jpg", "Moi", 80, 120);
document.write(photo.source + "<br>");
document.write(photo.titre + "<br>");
document.write(photo.largeur + "<br>");
document.write(photo.hauteur + "<br>");
```

Au sein de la fonction `Image`, toutes les variables avec `this` sont publiques, tandis que celles avec `var` ou `let` sont privées.

Il est possible de créer un attribut statique.

```
Image.data = "data";
```

Il est possible de créer une méthode statique.

```
Image.data = function () {return "Data";};
```

#### Les objets depuis l'`ECMAScript6`

L'`ECMAScript6` est en vigueur depuis 1995. Il introduit le mot-clé `class`.

`class` ne peut ni créer des attributs privés, ni créer des attributs statiques. Dit autrement, on peut accéder à un attribut en-dehors de la classe. Les accesseurs (*getters* et *setters*) sont de fait inutiles. Néanmoins, il est conseillé d'y recourir afin, non seulement d'avoir un programme propre, mais également parce `JavaScript` évolue très rapidement.

## Quelques outils

```
class LecteurMusique
{
	constructor(format)
	{
		this.setFormat(format);
	}
	lecteur()
	{
		console.log("Lecteur en cours...");
	}
	getFormat()
	{
		return this.format;
	}
	setFormat(format)
	{
		this.format = format;
	}
}
```

> [!NOTE]
> La portée de la variable s'étend sur tout le programme.

Il est possible d'introduire une méthode statique dans `class`.

```
static data()
{
	return "Data";
}
```

On poursuit le programme en déclarant l'objet.

```
let musique = new LecteurMusique("mp3");
musique.lecteur();
document.write(musique.getFormat());
```

Néanmoins, comme la variable n'est pas privée, il est possible d'écrire.

```
document.write(musique.format);
```

> [!NOTE]
> Le constructeur peut avoir des valeurs par défaut.

> [!NOTE]
> Il est possible d'affecter une variable à une classe comme pour les fonctions fléchées.

```
let musique = class {};
```
> [!WARNING]
> Il ne faut pas oublier le `;`

> [!WARNING]
> Les fonctions `class` sont implicites. Il ne faut pas mettre le mot-clé `function`.

`delete` permet de supprimer les répertoires, les méthodes, les propriétés ou l'objet complet.

`with` permet d'appeler un objet :

```
with(musique)
{
	document.write(format);
}
```

 avec `musique`, un objet instancié et `format`, une propriété ou une méthode.

Les propriétés forment une liste dans l'ordre des arguments instanciés permettant l'initialisation des propriétés. `for... in...` permet de parcourir toutes les propriétés d'un objet.

```
for(element in musique)
{
	document.write(musique[element]);
}
```

> [!NOTE]
> On peut créer un objet vide :

`
let monObjet = new Object();
`

### `class` et prototype

Un **prototype** est un objet à part entière qui sert le prototype de définition de la structure interne et des messages. Les autres objets de même type sont créés par **clonage**. Dans un prototype, il n'existe plus de distinction entre attributs et méthodes : ce sont tous deux des ***slot***. Un *slot* est un label de l'objet, privé ou public, auquel est attachée une définition. Cet attachement peut être modifié à l'exécution. Chaque modification d'un *slot* est locale à l'objet concerné et n'affecte par ses ses clones. Un **trait** permet de modifier un *slot* sur un ensemble de clones. Un trait est un ensemble d'opérations de même catégorie transverse aux objets. L'association d'un objet à un trait fait que l'objet et ses clones sont capables de répondre à toutes les opérations du trait. Un objet est toujours associé à au moins un trait, et les traits sont les parents des objets selon une relation d'héritage. Un trait est un *mixin* doté d'une parenté.

Après avoir instancié une classe, on peut ajouter un attribut.

`
LecteurMusique.prototype.nomDuMorceau = null;
musique.nomDuMorceau = "La carioca";
`

 De même, on peut ajouter une méthode

`
LecteurMusique.prototype.data = function ()
{
	return "Data";
}
`

On peut supprimer un attribut ou une méthode.

`
delete musique.nomDuMorceau;
delete musique.data();
`

### Les objets natifs en `JavaScript`

Il existe beaucoup d'objets prédéfinis dans `JavaScript`, comme `String`.

`
let chaine = new String("texte");
`

> [!NOTE]
> Tout objet natif peut modifié par l'intermédiaire de `prototype`.

#### Les objets mathématiques

##### L'objet `Number`

Il existe deux manières de déclarer un objet `Number`.

`
let num = new Number(nombre);
`

 ou, pour convertir une variable :

`
let num = Number(nombre);
`

###### Les propriétés statiques de `Number`

- `Number.NaN` : (\textit{not a number}) : nombre invalide
- `Number.MIN_VALUE` : réel minimal
- `Number.MAX_VALUE` : réel maximal
- `Number.MIN_SAFE_INTEGER` : entier minimal
- `Number.MAX_SAFE_INTEGER` : entier maximal
- `Number.POSITIVE_INFINITY` : $+\infty$
- `Number.NEGATIVE_INFINITY` : $-\infty$
- `Number.EPSILON` : différence entre un et la plus petite valeur supérieure à un qui peut être représentée en `JavaScript`

###### Les méthodes statiques de `Number`

`let num = 10;`

Il existe des valeurs booléennes testant les nombres.

`
if(Number.isNaN(num))
{
	document.write("vrai");
}
else
{
	document.write("faux");
}
`

`Number.isInteger(num);` teste si `num` est un entier.

> [!WARNING]
> `10.0` est interprété comme un entier.

`Number.isSafeInteger(num);` teste si la valeur passée en argument est un entier représentable correctement en `JavaScript`.

`Number.isFinite(num);` teste si le nombre est fini.

`Number.parseInt(num, base);` convertit un `string` en entier dans la `base` voulue, qui est par défaut 10.

`Number.parseFloat(num);` convertit un `string` en nombre flottant. Il est mis en place depuis 2015.

###### <a name="methodeInstanceNumber">Les méthodes d'instance de `Number`</a>

```
let num = 10;
```

`num.toString()` convertit le nombre en chaîne de caractères, par défaut en base décimale, mais la méthode accepte pour paramètre une base.
- `num.String()` $\rightarrow$ base 10
- `num.String(10)` $\rightarrow$ base 10
- `num.String(16)` $\rightarrow$ base 16
- `num.String(2)` $\rightarrow$ base 2

`num.toFixed(` *nombre* `)` définit par *nombre* un nombre de décimales, par défaut la valeur est nulle. La méthode arrondit la dernière décimale.

`num.toExponential()` renvoie une chaîne de caractères représentant l'objet `Number` en notation exponentielle.

`num.toPrecision(` *nombre* `)` renvoie une chaîne de caractères représentant un nombre avec la précision *nombre* donnée.

`num.valueOf()` renvoie la valeur primitive correspondant à celle représentée par l'objet `Number`.

`num.toLocaleString(string)` permet de renvoyer une chaîne de caractères représentant un nombre en tenant compte de la valeur locale.
- `string='ar-EG'` $\rightarrow$ arabe
- `string='en-IN'` $\rightarrow$ anglais
- `string='zh-Hans-CN-v-nu-hanidec'` $\rightarrow$ chinois décimal

##### L'objet `BigInt`

L'objet `BigInt` s'emploie pour les nombres supérieurs à $2^{53}$.

```
let bigInt = BigInt(nombre);
```

> [!WARNING]
> Il n'y a de mot-clé \verb+new+, car il s'agit d'une conversion.

###### Les méthodes statiques de `BigInt`

`BigInt.asIntN(largeur, nombre)` permet d'écrêter le nombre `nombre` pour obtenir un entier signé compris entre $ 2^{\textrm{largeur} - 1} $ et $ 2^{\textrm{largeur} - 1} - 1 $.

`BigInt.asUintN(largeur, nombre)` permet d'écrêter le nombre `nombre` pour obtenir un entier non signé compris entre $ 0 $ et $ 2^{\textrm{largeur} - 1} - 1 $.

###### Les méthodes d'instance de `BigInt`

`nombre.toLocaleString(string)` $\rightarrow$ cf. les <a href="#methodeInstanceNumber">méthodes d'instance de `Number`</a>

`nombre.toString(base)` $\rightarrow$ cf. les <a href="#methodeInstanceNumber">méthodes d'instance de `Number`</a>

`nombre.valueOf()` $\rightarrow$ cf. les <a href="#methodeInstanceNumber">méthodes d'instance de `Number`</a>

##### L'objet `Math`

Les méthodes statiques de `Math`

`Math.E` $\rightarrow$ nombre de Neper $e$

`Math.LN10` $\rightarrow$ $ \ln \left( 10 \right) $

`Math.LN2` $\rightarrow$ $ \ln \left( 2 \right) $

`Math.LOG10E` $\rightarrow$ $ \log \left( e \right) $

`Math.LOG2E` $\rightarrow$ $ {\log}_2 \left( e \right) $

`Math.PI` $\rightarrow$ $ \pi $

`Math.SQRT1_2` $\rightarrow$ $ \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2} = \sqrt{\frac{1}{2}} $

`Math.SQRT2` $\rightarrow$ $\sqrt{2}$

###### Les méthodes statiques pour les fonctions classiques

`Math.sign(nombre)` $\rightarrow$ signe de $\textrm{nombre}$

`Math.abs(nombre)` $\rightarrow$ $ \left| \textrm{nombre} \right| $

`Math.pow(nombre, puissance)` $\rightarrow$ $ {\textrm{nombre}}^{\textrm{puissance}} $

`Math.sqrt(nombre)` $\rightarrow$ $ \sqrt{\textrm{nombre}} $

`Math.cbrt(nombre)` $\rightarrow$ $ \sqrt[3]{\textrm{nombre}} $

`Math.log(nombre)` $\rightarrow$ $ \ln \left( \textrm{nombre} \right) $

`Math.log10(nombre)` $\rightarrow$ $ \log \left( \textrm{nombre} \right)$

`Math.log2(nombre)` $\rightarrow$ $ {\log}\_2 \left( \textrm{nombre} \right) $

`Math.exp(nombre)` $\rightarrow$ $ e^{\textrm{nombre}} $

`Math.expn1(nombre)` $\rightarrow$ $ e^{\textrm{nombre}} - 1 $

###### Les méthodes statiques pour les fonctions trigonométriques

Tous les résultats des méthodes sont par défaut en **radians**.

`Math.cos(nombre)` $\rightarrow$ $ \cos \left( \textrm{nombre} \right) $

`Math.sin(nombre)` $\rightarrow$ $ \sin \left( \textrm{nombre} \right) $ 

`Math.tan(nombre)` $\rightarrow$ $ \tan \left( \textrm{nombre} \right) $

`Math.acos(nombre)` $\rightarrow$ $ \arccos \left( \textrm{nombre} \right) $

`Math.asin(nombre)` $\rightarrow$ $ \arcsin \left( \textrm{nombre} \right) $

`Math.atan(nombre)` $\rightarrow$ $ \arctan \left( \textrm{nombre} \right) $

`Math.acosh(nombre)` $\rightarrow$ $ \cosh \left( \textrm{nombre} \right) $

`Math.asinh(nombre)` $\rightarrow$ $ \sinh \left( \textrm{nombre} \right) $

`Math.atanh(nombre)` $\rightarrow$ $ \tanh \left( \textrm{nombre} \right) $

`Math.atan2(y, x)` fournit l'angle entre la droite passant par l'origine $\left( 0, 0 \right) $ et le point de coordonnées $ \left( x, y \right) $.

###### Les méthodes statiques pour gérer les arrondis

`Math.trunc(nombre)` retourne la troncature entière d'un nombre en retirant sa partie décimale (partie entière).

`Math.round(nombre)` arrondit à l'entier le plus proche.

`Math.ceil(nombre)` arrondit à l'entier le plus proche supérieur.

`Math.floor(nombre)` arrondit à l'entier le plus proche inférieur.

`Math.min(nombre1, nombre2)` donne le plus petit nombre des deux.

`Math.max(nombre1, nombre2)` donne le plus grand nombre des deux.

###### Les méthodes statiques diverses

`Math.random()` fournit un nombre pseudo-aléatoire dans la fourchette $ \left[ 0, 1 \right[ $ selon une distribution approximativement uniforme sur cet intervalle.
- Le nombre obtenu doit être multiplié par un autre pour couvrir un autre intervalle.
- Le nombre obtenu peut être manipulé avec `parseInt()` ou `parseFloat()`.

`Math.hypot(a, b, c, ..., z)` calcule $\sqrt{a^2 + b^2 + c^2 + \ldots{} + z^2}$.

###### Les méthodes statiques des nombres binaires

`Math.clz32(nombre)` fournit le nombre de zéros de tête dans la représentation binaire sur 32 bits d'un nombre.

`Math.fround(nombre)` fournit le nombre flottant à précision simple sur 32 bits qui est le plus proche du nombre fourni.

`Math.imul(nombre1, nombre2)` fournit le résultat de la multiplication de deux nombres, calculée avec la représentation sur 32 bits de ces nombres.

#### L'objet `String`

##### La déclaration

```
let text = "Ceci est une chaîne de caractères";
```

 En déclarant de cette manière, le type est un `string`.

```
let text = new String("Ceci est une chaîne de caractères");
```

 En déclarant de cette manière, le type est un `object`.

> [!NOTE]
> Les deux déclarations disposent des **mêmes** méthodes.

##### La concaténation -- Approfondissement

```
let text1 = "Ceci est une chaîne";
let text2 = " de caractères.";
```

**Méthode 1.** `text = text1 + text2;`

**Méthode 2.** `text = text1.concat(text2);`

> [!NOTE]
> On peut mettre plusieurs \verb+string+ à la suite en séparant les variables avec une virgule \verb+,+ Si on définit une variable,

> ```
let text3 = " C'est génial !";
```

> alors on peut écrire :

>```
let text = text1.concat(text2, text3);
```

**Méthode 3.** ``` `${text1}${text2}` ```

##### La comparaison

```
let text1 = "arbre";
let text2 = "bol";
if(text1 < text2)
{
	document.write("vrai");
}
else
{
	document.write("faux");
}
```

Il compare l'ordre alphabétique des mots.

> [!WARNING]
> L'égalité a besoin d'avoir la même casse. Ainsi, `"arbre"` n'équivaut pas à `Arbre`. De fait, l'identité est vivement conseillée dans de nombreux cas.

##### La manipulation des caractères d'une chaîne

```
let text = "texte";
```

###### La propriété d'instance `length`

`text.length` donne la taille de la chaîne de caractères.

La propriété est utile pour parcourir la chaîne.

```
for(let i = 0 ; i < test.length ; i++)
{
	document.write(text.chartAt(i));
}
```

\noindent ou

```
for(element in text)
{
	document.write(text.chartAt(element));
}
```

###### Les méthodes d'instance de `String`

- `text.char(nombre)` donne le caractère placé à la position spécifique \verb+nombre+ dans la chaîne de caractères $ \left[ 0, +\infty \right[ $. Dans le cas de \verb+text+, l'intervalle est $ \left[ 0, 4 \right] $.

> [!NOTE]
> `text.chartCodeAt()` retourne le code ASCII du caractère.

- `text` est un `Array`, ce qui permet d'appeler directement les caractères
	- `text[0]` $\rightarrow$ `t`
	- `text[4]` $\rightarrow$ `e`

1. Tester le premier ou dernier caractère d'une chaîne

- `text.startsWidth('T')` $\rightarrow$ Réponse : `true`
- `text.startsWidth('t')` $\rightarrow$ Réponse : `false`
- `text.endsWidth('e')` $\rightarrow$ Réponse : `true`
- `text.endsWidth('E')` $\rightarrow$ Réponse : `false`

2. Tester la première ou dernière occurrence d'un caractère d'une chaîne

- `text.indexOf('t')` $\rightarrow$ Réponse : `0`, et non `3`
- `text.lastIndexOf('e')` $\rightarrow$ Réponse : `4`, et non `1`

> [!NOTE]
> Si le caractère testé n'existe pas, la réponse est `-1`.

> [!WARNING]
> Il faut bien respecter la casse, car `t` $\neq$ `T`.

3. Convertir la casse

- `text.toUpperCase()` convertit en caractères majuscules **toute** la chaîne de caractères.
- `text.toLowerCase()` convertit en caractères minuscules **toute** la chaîne de caractères. 
- `text.toLocateUpperCase(argument)`
- `text.toLocateLowerCase(argument)`

4. Découper une chaîne

`text.substring(debut, fin)` retourne la partie de la chaîne de caractères comprise entre `debut` et `fin`, `fin` exclu.
- `text.substring(1, 3)` $\rightarrow$ `ex`
- `text.substring(1, 2)` $\rightarrow$ `e`
- `text.substring(1, 4)` $\rightarrow$ `ext`
- `text.substring(1, 5)` $\rightarrow$ `exte`

`text.substr(debut, longueur)` retourne la partie de la chaîne de caractères à partir du nombre `debut` jusqu'à atteindre la `longueur` choisie.
- `text.substr(1, 4)` $\rightarrow$ `exte`
- `text.substr(1, 2)` $\rightarrow$ `xe`

5. Compléter une chaîne de taille insuffisante

`text.padStart(10, "-")`, la chaîne de caractères mesurant 5 caractères, le code crée $10 - 5 = 5$ \verb+"-"+ devant la chaîne.
- **Résultat :** `-----texte`

`text.padEnd(10, "-")`, la chaîne de caractères mesurant 5 caractères, le code crée $10 - 5 = 5$ `"-"` après la chaîne.
- **Résultat :** `texte-----`

6. Gérer les espaces

```
	let text1 = "Ceci est une chaîne";
```

`text1.trim()` enlève tous les espaces au début **et** à la fin.

`text1.trimStart()` enlève l'espace au début.

`text1.trimEnd()` enlève l'espace à la fin.

> [!WARNING]
> `JavaScript` supprime automatiquement avec `document.write(...)` les espaces en trop en début de chaîne de caractères.

7. Rechercher un caractère

```
	let text1 = "Ceci est une chaîne";
```

`text1.includes("` *élément à tester* `")` renvoie un booléen.
- `text1.includes("t")` $\rightarrow$ `true`
- `text1.includes("Ceci")` $\rightarrow$ `true`
- `text1.includes("z")` $\rightarrow$ `false`

8. Répéter une chaîne $n$ fois

```
	let text1 = "Ceci est une chaîne";
```

`text1.repeat(n)` répète $n$ fois la chaîne de caractères.

9. Remplacer des caractères

```
	let text1 = "Ceci est une chaîne";
```

`text1.replace("e", "!")` remplace la première occurrence de `"e"` par `"!"` dans la chaîne de caractères.

`text1.replaceAll("e", "!")` remplace toutes les occurrences de `"e"` par `"!"` dans la chaîne de caractères.

> [!NOTE]
> Cela ne fonctionne pas tout le temps.

**Exercice.** Créer une fonction \verb+remplaceAll+

```
function replaceAll(texte, caractereARemplacer, nouveauCaractere)
{
	texte = texte.toString();
	caractereARemplacer = caractereARemplacer.toString();
	nouveauCaractere = nouveauCaractere.toString();
	let texte2 = "";
	for(element in texte)
	{
		if(texte[element] == caractereARemplacer)
		{
			texte2 = texte2.concat(nouveauCaractere);
		}
		else
		{
			texte2 = texte2.concat(texte[element]);
		}
	}
	return texte2;
}
```

10. Transformer une chaîne en la découpant en `Array`

`text1.split(" ")` permet de  découper au niveau des espaces.
- **Résultat :** `["Ceci","est","une","chaîne",""]`

> [!NOTE]
> Cette transformation est liée aux expressions régulières, notamment aux caractères spéciaux `\'`, `\"` et `\\`.

11. Sélectionner des intervalles de caractères

`text.slice(2)` sélectionne les caractères de $ \left[ 3, +\infty \right[ $.
- **Résultat :** `xte`

`text.slice(1, 3)` sélectionne les caractères de $ \left[ 1, 3 \right[ $.
- **Résultat :** `ex`

`text.slice(-2)` sélectionne les caractères de $ \left[ -2, -\infty \right[ $.
- **Résultat :** `te`

`text.slice(-3, -2)` sélectionne les caractères de $ \left[ -3, -2 \right[ $.
- **Résultat :** `x`

###### Les méthodes de conversion `HTML`

> [!WARNING]
> La plupart des méthodes sont considérées comme obsolètes.

```
let text = "texte";
```

- `text.anchor("nom")` $\rightarrow$ `<a name="nom">texte</a>`
- `text.link("url")` $\rightarrow$ `<a href="url">texte</a>`

Les méthodes pouvant être être obsolètes :
- `text.bold()` $\rightarrow$ \verb+<b>texte</b>+ (en gras)
- `text.italics()` $\rightarrow$ `<i>texte</i>` (en italique)
- `text.strike()` $\rightarrow$ `<strike>texte</strike>` (barré)
- `text.blink()` $\rightarrow$ `<blink>texte</blink>` (clignotant)
- `text.small()` $\rightarrow$ `<small>texte</small>` (en petit)
- `text.big()` $\rightarrow$ `<big>texte</big>` (en grand)
- `text.fontcolor("couleur")` $\rightarrow$ `<font color="couleur">texte</font>` (en couleur)
- `text.fontsize(taille)` $\rightarrow$ `<font size="taille">texte</font>` (taille de la police)
- `text.sub()` $\rightarrow$ `<sub>texte</sub>` (indice)
- `text.sup()` $\rightarrow$ `<sup>texte</sup>` (exposant)
- `text.fixed()` $\rightarrow$ `<tt>texte</tt>` affiche le texte de la chaîne de caractères dans une **fonte à chasse fixe**, c'est-à-dire que chaque caractère et espace occupent le même espace horizontal que les autres.
	- **Exemple :** le texte dans un éditeur de code

#### L'objet `Date`

L'objet `Date` permet de lire la date actuelle, mais également de réaliser d'autres opérations. En interne, `JavaScript` calcule les dates en **millisecondes** à partir du 1<sup>er</sup> janvier 1970 0h00'00" ms U.T.C. L'U.T.C. est une contraction entre le français, « temps universel coordonné » (T.U.C.) et de l'anglais, *coordinated universal time*. Il correspond à une échelle de temps adoptée comme base du temps civil international par la majorité des pays du globe. L'U.T.C. remplace le (*Greenwich Mean Time*) (G.M.T.), le temps universel. De fait, il n'est par conséquent pas possible d'afficher une date avant ce point de départ de référence.

```
let date = new Date("September 20, 2012 15:00:00");
```

 ou

```
let date = new Date("2022-09-20T15:00:00");
```

 ou

```
let date = new Date(2022, 9, 20);
```

 ou

```
let date = new Date(2022, 0, 20, 15, 0, 0);
```

 ou

```
let date = Date();
```

Ce dernier cas fournit la date du jour en `string`.

> [!NOTE]
> Dans les deux formats `string`, on peut préciser le fuseau horaire.

> [!WARNING]
> Le format par `let date = Date();` n'est pas une vraie date. Pour utiliser la date du jour, il faut découper la chaîne de caractères obtenue et créer une autre date.

```
let dateCor = date.substring(0, 28);
date = new Date(dateCor);
```

 Ainsi, la date est au bon format pour utiliser les méthodes statiques et les méthodes d'instance.

##### Les méthodes statiques

`Date.new()` renvoie le temps écoulé en millisecondes depuis le 1<sup>er</sup> janvier 1970.

`Date.parse(string)` renvoie la représentation textuelle d'une date sous la forme d'un `string` en millisecondes représentant le temps écoulé depuis le 1<sup>er</sup> janvier 1970.

`Date.UTC(` *année, mois, jour, heure, minute, seconde* `)` renvoie le nombre de millisecondes écoulées depuis le 1<sup>er</sup> janvier 1970.

##### Les méthodes d'instance

```
let date = new Date(2022, 9, 21, 0, 0, 0);
```

###### Lecture de l'affectation

[obsolète] `date.getYear()` livre l'année sur deux chiffres entre 1970 et 1999, sur trois chiffres depuis 2000

`date.getFullYear()` livre l'année avec quatre chiffres.

`date.getMonth()` livre le mois (0 pour janvier, 11 pour décembre).

`date.getDate()` livre le jour du mois de 1 à 31.

`date.getDay()` livre le jour de la semaine (0 pour dimanche, 6 pour samedi).

`date.getHours()` livre l'heure de 0 à 23.

`date.getMinutes()` livre la minute de 0 à 59.

`date.getSeconds()` livre la seconde de 0 à 59.

`date.getMilliseconds()` livre la milliseconde de 0 à 999.

`date.getTime()` livre les millisecondes écoulées depuis le 1<sup>er</sup> janvier 1970.

`date.getTimezoneOffSet()` livre le décalage horaire entre le fuseau horaire G.M.T. et le fuseau horaire de Greenwich U.T.C. en minutes.

`date.toString()` livre la date sous la forme d'une chaîne de caractères.

> [!NOTE]
> Tous les \textit{getter} ont un équivalent U.T.C.
> - `getUTCFullYear()`
> - `getUTCMonth()`
> - `getUTCDate()`
> - `getUTCDay()`
> - `getUTCHours()`
> - `getUTCMinutes()`
> - `getUTCSeconds()`
> - `getUTCMilliseconds`

###### Modification des valeurs affectées

La modification s'effectue par un *setter* sans affecter une nouvelle variable.

`date.setFullYear(` *année* `)`

`date.setUTCFullYear` *année* `)`

`date.setMonth(` *mois* `)` (0 pour janvier, 11 pour décembre)

`date.setUTCMonth(` *mois* `)` (0 pour janvier, 11 pour décembre)

`date.setDate(` *jour* `)` (de 1 à 31)

`date.setUTCDate(` *jour* `)` (de 1 à 31)

> [!WARNING]
> `date.setDay(` *jour* `)` et `date.setUTCDay(` *jour* `)` n'existent pas. `setDate()` et `setUTCDate()` les affectent directement.

`date.setHours(` *heure* `)` (de 0 à 23)

`date.setUTCHours(` *heure* `)` (de 0 à 23)

`date.setMinutes(` *minute* `)` (de 0 à 59)

`date.setUTCMinutes(` *minute* `)` (de 0 à 59)

`date.setSeconds(` *seconde* `)` (de 0 à 59)

`date.setUTCSeconds(` *seconde* `)` (de 0 à 59)

`date.setMilliseconds(` *milliseconde* `)` (de 0 à 999)

`date.setUTCMilliseconds(` *milliseconde* `)` (de 0 à 999)

`date.setTime(` \textit{temps en millisecondes* `)` définit la date en temps universel.

> [!NOTE]
> On utilise un temps négatif pour définir une date avant le 1<sup>er</sup> janvier 1970.

> [!NOTE]
> La limite de l'entier pouvant être saisi est fournie par la limite des `Integer`.

###### Méthodes d'instance

`date.toDateString()` renvoie la partie (jour, mois, année) de l'objet `Date` en chaîne de caractères.

`date.toLocaleDateString('fr-FR')` définit une date dans le système local, ici la France.
- `'en-US'` : anglais états-unien
- `'en-GB'` : anglais britannique
- `'fr-CA'` : français canadien
- `'ko-KR'` : coréen
- `'fa-IR'` : persan
- `'de-De'` : allemand
- `'ja-JP-u-ca-japanese'` : japonais

`date.toGMTString()` renvoie une chaîne de caractères représentant l'objet `Date` en G.M.T.

`date.toUTCString()` renvoie une chaîne de caractères représentant l'objet `Date` en U.T.C.

`date.toTimeString()` renvoie l'heure, la minute et la seconde d'un objet `Date` sous la forme d'une chaîne de caractères compréhensible.

`date.toLocaleTimeString('fr-FR')` renvoie une chaîne de caractères des heures, minutes et secondes d'un objet `Date` dans le système local, ici la France.

`date.toString()`

`date.toLocaleString()` renvoie une chaîne de caractères représentant la date sous la forme de la locale courante avec une représentation propre à la locale courante.

`date.toLocaleFormat("weekday, year month day")` convertit en une chaîne de caractères avec un format décrit en paramètre *via* une chaîne de caractères.

> [!NOTE]
> `weekday` renvoie au drapeau `%A`, `year` au drapeau `%e`, `month` au drapeau `%B`, et `day` au drapeau `%Y`.

`date.toISOString()` convertit une date en chaîne de caractères selon le format ISO 8601 étendu.

`date.toJSON()` renvoie une chaîne de caractères représentant l'objet `Date` avec `toISOString()`.

> [!NOTE]
> J.S.O.N. signifie *JavaScript Object Notation*.

##### La méthode globale `setTimeout()`

[`Object.`]`setTimeout(` *fonction à exécuter lorsque la durée est écoulée*, *options* `)` permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué. Par défaut, le minuteur est à 0 ce qui signifie que la fonction doit s'exécuter le plus rapidement possible.
- `Object` est facultatif.
- Les options, séparées par une virgule, sont :
	- minuteur en millisecondes
	- paramètre 1
	- paramètre 2
	*etc*.

Les paramètres sont des arguments additionnels passés par l'intermédiaire de la fonction à exécuter.

#### L'objet `Array`

`Array` désigne un champ de données ou une **table**. En fait, toute table contient éventuellement plusieurs variables, dont chacune constitue un **élément** ayant sa propre valeur. Chaque élément individuel est numéroté. Le premier élément est l'indice 0. Ainsi, dans une boucle, un compte peut se charger de parcourir successivement tous les éléments.

Une table porte un nom, ici `table`. Il existe deux moyens de déclarer une table.

`let table = [` *élément 0*, *élément 1*, ... `];`

 ou, pour créer un table vide :

```
let table = new Array();
```

 ou

`let table = new Array(` *élément 0*, *élément 1*, ... `);`

 ou, pour créer une table remplie de `undefined`

`let table = new Array(` *nombre d'élements* `);`

Pour accéder à un élément, il suffit d'écrire :

```
	table[0];
```

 ou

```
table.at(0);
```

 Les indices négatifs sont possibles, mais pas en accès direct.

La longueur de la table est donnée par la propriété d'instance :

```
table.length;
```

Les tableaux acceptent tous les types, mais cela est déconseillé.

> [!NOTE]
> Il existe des tableaux typés.

##### Les méthodes d'instance

`table.join()` crée une chaîne de caractères contenant tous les éléments de la table. Les éléments sont séparés par des virgules par défaut.

`let table2 = [... , ...];`

`let table3 = table.concat(table2);` ajoute la table `table2` fournie en argument à la fin de la table `table`, et livre en retour la nouvelle table `table3`.

`table.push(` *élément 0*, *élément 1*, ... `)` ajoute un élément à la fin de la table `table`.

> [!WARNING]
> Il est impossible de réaffecter `table.push(...)`

`table.shift()` supprime le premier élément et le livre en retour.

> [!WARNING]
> Il est impossible de réaffecter `table.shift()`

`table.pop()` supprime le dernier élément et la livre en retour.

> [!WARNING]
> Il est impossible de réaffecter `table.pop()`

`table.unshift(` *élément 0*, *élément 1*, ... `)` ajoute un élément au début de la liste.

> [!WARNING]
> Il est impossible de réaffecter `table.unshift()`

`table.sort()` trie les éléments de la table par ordre naturel ou alphabétique.

> [!WARNING]
> **Attention à la casse !** Pour être certain du tri alphabétique, on utilise `toLowerCase()` ou `toUpperCase()`

> [!WARNING]
> Il est impossible de réaffecter `table.sort()`

`table.reverse()` inverse le sens des indices de la table.

> [!WARNING]
> Il est impossible de réaffecter `table.reverse()`

##### Les tables multidimensionnelles

Les tables multidimensionnelles sont des tables imbriquées.

Exemple :

```
let table = new Array(8);
for(let i = 0 ; i < table.length ; i++)
{
	table[i] = new Array(4);
}
```

 ou

```
let table = [ [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}] ];
```

Pour visualiser la table multidimensionnelle, on utilise une double boucle.

```
for(let i = 0 ; i < table.length ; i++)
{
	for(let j = 0 ; j < table[i].length ; j++)
	{
		document.write("(" + i + ", " + j + ")" + table[i][j] + "<br>");
	}
}
```

##### Les méthodes statiques

`Array.of(` *valeur* `)` permet de créer une nouvelle instance de `Array` à partir d'un nombre variable d'arguments (peu importe la quantité ou le type des arguments utilisés). Cela permet de créer une table.
- `Array.of(1, 2, 3);`
- **Résultat :** `[1, 2, 3]`

`Array.from(` *valeur* `)` permet de créer une nouvelle instance de `Array` à partir d'un objet semblable à un tableau ou un itérable.
- `Array.from("foo");`
- **Résultat :** `["f", "o", "o"]`

`Array.isArray(` *valeur* `)` renvoie un booléen.

##### Parcourir une table

###### Parcourir les indices

```
for(index in table)
{
	document.write(index);
}
```

 ou

```
table.forEach(function(value, index) {document.write(index + ", " + value)});
```

###### Parcourir les valeurs

```
for(index of table)
{
	document.write(index);
}
```

 ou

```
table.forEach(function(item) {document.write(item)});
```

###### Parcourir les chaînes de caractères

```
let chaine = "Ceci est une chaîne";
let table = chaine.split(" ");
```

 `split` utilise un séparateur, ici l'espace, pour découper la chaîne de caractères en table.

```
let chaine2 = table.join(" ");
```

 `join` utilise un séparateur, ici l'espace, pour joindre définissant une chaîne de caractères en table.

##### Remplir une table

`let table = [1, 2, 3, 4];`

`table.fill(` *valeur*, *options* `)` remplit tous les éléments d'une table à partir d'un indice de début jusqu'à un indice de fin avec une valeur statique. La valeur de l'indice de fin n'est pas incluse. Cette méthode renvoie la table modifiée.
- Les options sont :
	- début (par défaut : `0`)
	- fin (par défaut : `this.length`)

`table.fill(0, 2, 4)` remplit à partir de l'indice 2.

```
1, 2, 0, 0]
```

`table.fill(5, 1)` remplit à partir de l'indice 1.

```
[1, 5, 5, 5]
```

`table.fill(6)` remplit à partir de l'indice 0.

```
[6, 6, 6, 6]+
```

##### Rechercher dans une table

###### Rechercher l'indice d'un élément ou l'élément

`table.indexOf(` *élément 1* `);` renvoie l'indice de l'élément 1, c'est-à-dire 1.

> [!WARNING]
> La recherche s'arrête à la première occurrence en partant du début de la table.

`table.lastIndexOf(` *élément 1* `);`

> [!WARNING]
> La recherche s'arrête à la première occurrence en partant de la fin de la table.

`table.find(` *fonction fléchée* `);` renvoie l'élément trouvé dans la table si un des éléments satisfait la condition finie par la fonction passée en paramètre, sinon `undefined`. La méthode retourne la première occurrence rencontrée.

`table.findIndex(` *fonction fléchée* `);` renvoie l'indice de l'élément trouvé dans la table si un élément de la table satisfait la condition fixée par la fonction passée en argument, sinon `-1`. La méthode retourne la première occurrence rencontrée.

`table.localeCompare(table2, 'fr',` *options* `);` renvoie un nombre indiquant si la chaîne de caractères courante se situe avant, après ou est la même que la chaîne placée en paramètre selon l'ordre lexicographique de la locale.

> [!NOTE]
> `'en'`, `'de'`, `'sv'`, *etc*.

###### Extraire des données

`table.slice(` *options* `);` extrait la table entre le début et la fin choisis.
- Les options sont :
	- indice de début
	- indice de fin

> [!NOTE]
> Les indices négatifs sont possibles.

`table.splice(` *indice d'insertion*, *nombre d'éléments à supprimer après l'indice*, *ajout* `);` ajoute ou retire des éléments de la table.
- `tab = ["Jan", "Mar", "Apr", "Jun"];`
- `tab.splice(1, 0, "Feb");`
	- **Résultat :** `["Jan", "Feb", "Mar", "Apr", "Jun"]`
- `tab.splice(4, 1, "May");`
	- **Résultat :** `["Jan", "Feb", "Mar", "Apr", "May", "Jun"]`

###### Filtrer les données

`[-2, 14, 1, 2, -23, -2];`

`table.filter(x => x > 0);` renvoie un nouveau tableau qui contient tous les éléments de la table courante pour lesquels la fonction filtre passée en argument a renvoyé `true`.
- **Résultat :** `[14, 1, 2]`

`table.map(value => "Inc");` remplace tous les éléments par `"Inc"` et renvoie une table contenant les résultats de l'appel de la fonction passée en argument sur chaque élément de la table.

##### Diminuer les niveaux dans les tableaux multidimensionnels

```
table = [1, [1, 1], [[2, 3], [4, 5]]];
```

`table.flat(` *nombre optionnel du nombre de niveaux à fusionner* `);`. Par exemple, si le nombre vaut `2`, alors cela renvoie :
	- **Résultat :** `[1, 1, 1, 2, 3, 4, 5]`

#### L'objet `Set`

Un **ensemble** permet de regrouper des données de différents types. Il est itérable. Les éléments sont mis dans l'ordre de leur insertion.

```
let ensemble = new Set();
```

 ou

```
let ensemble = new Set(élements de l'ensemble);
```

> [!WARNING]
> Les valeurs placées doivent être uniques.

La propriété d'instance `size` permet de connaître le nombre d'éléments.

```
ensemble.size();
```

Les principales méthodes sont :
- `ensemble.add(` *élément* `)` qui permet d'ajouter un élément ;
- `ensemble.delete(` *élément* `)` qui permet de supprimer un élément ;
- `ensemble.clear(` *élément* `)` qui efface tous les éléments d'un ensemble ;
- `ensemble.has(` *élément* `)` qui vérifie si l'élément est présent dans l'ensemble ;
- `ensemble.values()` qui crée un objet itérable ;
- `ensemble.keys()` qui crée un objet itérable. Par exemple :

```
const iterValeurs = ensemble.values();
document.write(interValeurs.next().value);
```
> [!NOTE]
> Il n'y a pas de clés, donc `values = keys`.

- `ensemble.entries()` qui regroupe l'ensemble des valeurs sous la forme d'une table qui contient deux fois la valeur. Par exemple :

```
const toutesEntrees = ensemble.entries();
for(const element of toutesEntres)
{
	document.write(element + "<br>");
}
```

Pour visualiser tous les éléments de l'ensemble :

```
for(const element of ensemble)
{
	document.write(element + "<br>");
}
```

\noindent ou

```
ensemble.forEach(fonction à tester);
```

> [!NOTE]
> `WeakSet` permet de créer un ensemble dont les **objets** sont contenus avec des références faibles.

#### L'objet `Map`

L'objet `Map` regroupe une collection de données ayant une clé et une valeur.  Aucun clé n'est mise automatiquement. L'ordre est celui de l'insertion. La clé peut être de n'importe quel type.

```
let map = new Map();
```

La propriété d'instance \verb+size+ permet de connaître le nombre d'éléments

```
map.size;
```

Les méthodes d'instance sont :
- `map.set(` *clé*, *valeur* `)` pour ajouter un élément, ou
```
const map = new Map();
map[clé 1] = valeur 1;
map[clé 2] = valeur 2;
etc.
```
- `map.delete(` *clé* `)` pour supprimer l'élément à partir de sa clé
- `map.clear()` pour supprimer tous les éléments 
- `map.has(` *clé* `)` pour chercher une clé 
- `map.get(` *clé* `)` pour récupérer la valeur de la clé demandée 
- `map.keys()` pour itérer sur les clés à partir de la fonction `next()`
- `map.values()` pour itérer sur les valeurs à partir de la fonction \verb+next()`
- `map.entries` pour livrer l'ensemble des valeurs sous la forme d'une tableau qui contient deux fois la valeur
- `map.forEach(` *fonction à tester* `)`

> [!NOTE]
> `WeakMap` représente une collection de paires clé-valeur dont les clés sont des **objets** et pour lesquels les références sont « faibles » et les valeurs, des valeurs quelconque.

## Le format J.S.O.N.

L'inventeur du J.S.O.N. est Douglas Crockford. Il maintient toujours le site officiel : [https://JSON.org](https://JSON.org). Officiellement, le J.S.O.N. date de 2013, mais il est utilisé sans nom depuis 2002.

Le J.S.O.N. est un **format de données textuelles** dérivé de la notation `JavaScript`. Il représente une **série d'informations structurées** sous la forme de paires clé/valeur. Chaque paire est séparée par une virgule `,`

Le J.S.O.N. formate les données sous la forme d'un objet `JavaScript`.

```
{
	Membre1: {
		prenom: ...,
		nom: ...,
		date: ...
	}
	Membre2: {
		prenom: ...,
		nom: ...,
		date: ...
	}
}
```

Toutefois, il existe deux différents majeures entre J.S.O.N. et un objet `JavaScript`.

1. Toutes les clés sont représentées sous forme de chaînes de caractères. Les guillemets sont obligatoires pour créer une clé, à la différence d'un objet `JavaScript`.

```
{
	"Membre1": {
		"prenom": ...,
		"nom": ...,
		"date": ...
	}
	"Membre2": {
		"prenom": ...,
		"nom": ...,
		"date": ...
	}
}
```

2. Le J.S.O.N. peut stocker de nombreux types de valeur :
	- `string` ;
	- `number` ;
	- `object` ;
	- `array` ;
	- `true` ;
	- `false` ;
	- `null`.

Le format J.S.O.N. peut facilement être stocké :
- soit côté client sous la forme de cookies ou par l'intermédiaire de l'objet `localStorage` ;
- soit par l'intermédiaire d'un fichier muni d'une extension `*.json`.

J.S.O.N. est un objet `JavaScript` possédant deux méthodes statiques.
- `JSON.parse(...)` prend en paramètre la chaîne de caractères à analyser et retourne sous forme d'objet J.S.O.N.
- `JSON.stringify(...)` prend en paramètre un objet J.S.O.N. et retourne son équivalent sous forme de chaîne de caractères.

> [!NOTE]
> Le J.S.O.N. est décodé par le `PHP` depuis sa version 5.2 par la fonction `json_decode()` et `json_encode()`.

> [!NOTE]
> Le J.S.O.N. n'est pas supporté par `Internet Explorer` avant sa version 8. Il faut ainsi utiliser un *polyfill*.
