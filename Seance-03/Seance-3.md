#  Les commandes de base du langage `JavaScript` avec `Mozilla Developer`

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

> [!NOTE] Pour introduire des guillemets, il suffit d'écrire :
- soit `"` dans un `"` ;
- soit `\'` dans un `'`.

> [!NOTE] On utilise `\\` pour un *backslash*.

Des instructions peuvent se regrouper sous la forme d'un bloc :

`
	{ ... }
`

Il est nécessaire de « labeliser » le programme :

`
	nomDuLabel:
`

> [!WARNING] Il faut éviter les mots réservés suivants :
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

> [!NOTE] **La variable n'a besoin que d'une seule et unique déclaration**. Si on déclare plusieurs fois une variable globale, un message d'erreur s'affiche.

> [!WARNING] Toute variable non déclarée est affectée automatiquement par `JavaScript`, **mais la lecture d'une variable non déclarée entraîne une erreur**. Elle devient automatiquement une variable globale.

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

`
	"42" = 42
`

- `!=` : inégalité (ne tient pas compte du type)
-`===` : identité (tient compte du type)

`
	"42" != 42
`

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

`{`

	*instructions utilisant les paramètres en variables locales*

`}`

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






Deux types d'objets existent :

- les objets natifs, ceux qui sont internes à `JavaScript` ;

- les objets non natifs.

### Le constructeurs

#### Les objets avant l'`ECMAScript6`

#### Les objets depuis l'`ECMAScript6`

## Quelques outils

### `class` et prototype

### Les objets natifs en `JavaScript`

#### Les objets mathématiques

#### L'objet `String`

#### L'objet `Date`

#### L'objet `Array`

#### L'objet `Set`

#### L'objet `Map`

## Le format J.S.O.N.











































































\section{Programmation orientée objet}\markboth{}{Programmation orientée objet}

Les données sont au centre de la programmation orientée objet. On indique aux données avec quelles fonctions (méthodes) elles doivent être traitées.

Toute fonction appartenant à un objet est appelée \textbf{méthodes}.

Toute variable appartenant à un objet est appelée \textbf{attributs} (ou propriétés).

\subsection{Le constructeur}

\subsubsection{Les objets avant l'ECMAScript6}

Un objet peut être défini par ses propriétés. Il s'agit d'attributs statiques publics. C'est une \textbf{déclaration littérale}.
\begin{lstlisting}
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
\end{lstlisting}

\textbf{N.B.} On peut écrire des méthodes dans la déclaration.
\begin{lstlisting}
	{titre: function () {return "Moi";}};
\end{lstlisting}

Un objet peut être construit par une fonction faisant l'office d'un prototype.
\begin{lstlisting}
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
\end{lstlisting}

Au sein de la fonction \verb+Image+, toutes les variables avec \verb+this+ sont publiques, tandis que celles avec \verb+var+ ou \verb+let+ sont privées.

Il est possible de créer un attribut statique.
\begin{lstlisting}
	Image.data = "data";
\end{lstlisting}

Il est possible de créer une méthode statique.
\begin{lstlisting}
	Image.data = function () {return "Data";};
\end{lstlisting}

\subsubsection{Les objets depuis l'ECMAScript6}

L'\verb+ECMAScript6+ est en vigueur depuis 1995. Il introduit le mot-clé \verb+class+.

\verb+class+ ne peut ni créer des attributs privés, ni créer des attributs statiques. Dit autrement, on peut accéder à un attribut en-dehors de la classe. Les accesseurs (\textit{getters} et \textit{setters}) sont de fait inutiles. Néanmoins, il est conseillé d'y recourir afin, non seulement d'avoir un programme propre, mais également parce `JavaScript` évolue très rapidement.

\subsubsection{Quelques outils}

\begin{lstlisting}
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
\end{lstlisting}

\textbf{N.B.} La portée de la variable s'étend sur tout le programme.

Il est possible d'introduire une méthode statique dans \verb+class+.
\begin{lstlisting}
	static data()
	{
		return "Data";
	}
\end{lstlisting}

On poursuit le programme en déclarant l'objet.
\begin{lstlisting}
	let musique = new LecteurMusique("mp3");
	musique.lecteur();
	document.write(musique.getFormat());
\end{lstlisting}

Néanmoins, comme la variable n'est pas privée, il est possible d'écrire.
\begin{lstlisting}
	document.write(musique.format);
\end{lstlisting}

\textbf{N.B.} Le constructeur peut avoir des valeurs par défaut.

\textbf{N.B.} Il est possible d'affecter une variable à une classe comme pour les fonctions fléchées.
\begin{lstlisting}
	let musique = class {};
\end{lstlisting}
	\begin{description}
		\item[\textbf{Attention !}] Il ne faut pas oublier le \verb+;+
		\item[\textbf{Attention !}] Les fonctions \verb+class+ sont implicites. Il ne faut pas mettre le mot-clé \verb+function+.
	\end{description}

\verb+delete+ permet de supprimer les répertoires, les méthodes, les propriétés ou l'objet complet.

\verb+with+ permet d'appeler un objet :
\begin{lstlisting}
	with(musique)
	{
		document.write(format);
	}
\end{lstlisting}

\noindent avec \verb+musique+, un objet instancié et \verb+format+, une propriété ou une méthode.

Les propriétés forment une liste dans l'ordre des arguments instanciés permettant l'initialisation des propriétés. \verb+for... in+ permet de parcourir toutes les propriétés d'un objet.
\begin{lstlisting}
	for(element in musique)
	{
		document.write(musique[element]);
	}
\end{lstlisting}

\textbf{N.B.} On peut créer un objet vide :
\begin{lstlisting}
	let monObjet = new Object();
\end{lstlisting}

\subsubsection{class et prototype}

Un \textbf{prototype} est un objet à part entière qui sert le prototype de définition de la structure interne et des messages. Les autres objets de même type sont créés par \textbf{clonage}. Dans un prototype, il n'existe plus de distinction entre attributs et méthodes : ce sont tous deux des \textbf{\textit{slot}}. Un \textit{slot} est un label de l'objet, privé ou public, auquel est attachée une définition. Cet attachement peut être modifié à l'exécution. Chaque modification d'un \textit{slot} est locale à l'objet concerné et n'affecte par ses ses clones. Un \textbf{trait} permet de modifier un \textit{slot} sur un ensemble de clones. Un trait est un ensemble d'opérations de même catégorie transverse aux objets. L'association d'un objet à un trait fait que l'objet et ses clones sont capables de répondre à toutes les opérations du trait. Un objet est toujours associé à au moins un trait, et les traits sont les parents des objets selon une relation d'héritage. Un trait est un \textit{mixin} doté d'une parenté.

Après avoir instancié une classe, on peut ajouter un attribut.
\begin{lstlisting}
	LecteurMusique.prototype.nomDuMorceau = null;
	musique.nomDuMorceau = "La carioca";
\end{lstlisting}

\noindent De même, on peut ajouter une méthode
\begin{lstlisting}
	LecteurMusique.prototype.data = function ()
	{
		return "Data";
	}
\end{lstlisting}

On peut supprimer un attribut ou une méthode.
\begin{lstlisting}
	delete musique.nomDuMorceau;
	delete musique.data();
\end{lstlisting}

\subsubsection{Les objets natifs de JavaScript}

Il existe beaucoup d'objets prédéfinis dans `JavaScript`, comme \verb+String+.
\begin{lstlisting}
	let chaine = new String("texte");
\end{lstlisting}

\textbf{N.B.} Tout objet natif peut modifié \textit{via} \verb+prototype+.

\subsection{Héritage}

Le `JavaScript` a des définitions particulières. \verb+class+ n'est pas une classe.  Il reste un prototype c'est-à-dire un constructeur par fonction. L'avantage du prototype est qu'il offre davantage de flexibilité.

Il existe une hiérarchie entre les objets natifs de `JavaScript`
	\begin{description}
		\item[] \ldots{} $\rightarrow$ \verb+Object+ $\rightarrow$ \verb+null+
	\end{description}

\subsubsection{Héritage des prototypes}

\begin{lstlisting}
	function ClasseMere(nom = "Inconnu")
	{
		this.nom = nom;
		this.attaque = function () {return "pan !";};
	}
	function ClasseFille(nom = "Inconnu", arme = "pistolet")
	{
		ClasseMere.call(this, nom);
		this.arme = arme;
	}
\end{lstlisting}

La méthode \verb+call()+ permet d'effectuer un lien d'héritage entre une classe mère et sa classe fille.

\paragraph{Clonage}

\begin{lstlisting}
	Classe.Fille.prototype = Object.create(ClasseMere.prototype);
\end{lstlisting}

\textbf{Il s'agit d'un clonage direct}. L'héritage lie les prototypes sans hiérarchie.

\paragraph{Liaison entre deux prototypes}

\begin{lstlisting}
	Classe.Fille.prototype = ClasseMere.prototype;
	Classe.Fille.prototype.age = null;
\end{lstlisting}

\textbf{Il s'agit d'une liaison directe entre deux prototypes}. Tout ce qui est modifié sur l'un, le sera sur l'autre.

\subsubsection{Héritage avec class}

\verb+class+ permet de constituer une hiérarchie.

\begin{lstlisting}
	class ClasseMere
	{
		constructor(nom = "Max")
		{
			this.nom = nom;
		}
	}
	class ClasseFille extends ClasseMere
	{
		constructor(nom = "Juju", arme = "pistolet")
		{
			super(nom);
			this.arme = arme;
		}
	}
	let test = new ClasseFille("Pascal", "carabine");
\end{lstlisting}

\verb+super()+ signifie supérieur.

\section{Les objets mathématiques}\markboth{}{Les objets mathématiques}

\subsection{L'objet Number}

Il existe deux manières de déclarer un objet \verb+Number+.
\begin{lstlisting}
	let num = new Number(nombre);
\end{lstlisting}

\noindent ou, pour convertir une variable :
\begin{lstlisting}
	let num = Number(nombre);
\end{lstlisting}

\subsubsection{Les propriétés statiques de Number}

\begin{description}
	\item[] \verb+Number.NaN+ : (\textit{not a number}) : nombre invalide
	\item[] \verb+Number.MIN_VALUE+ : réel minimal
	\item[] \verb+Number.MAX_VALUE+ : réel maximal
	\item[] \verb+Number.MIN_SAFE_INTEGER+ : entier minimal
	\item[] \verb+Number.MAX_SAFE_INTEGER+ : entier maximal
	\item[] \verb+Number.POSITIVE_INFINITY+ : $+\infty$
	\item[] \verb+Number.NEGATIVE_INFINITY+ : $-\infty$
	\item[] \verb+Number.EPSILON+ : différence entre un et la plus petite valeur supérieure à un qui peut être représentée en `JavaScript`
\end{description}

\subsubsection{Les méthodes statiques de Number}

\verb+let num = 10;+

Il existe des valeurs booléennes testant les nombres.
\begin{lstlisting}
	if(Number.isNaN(num))
	{
		document.write("vrai");
	}
	else
	{
		document.write("faux");
	}
\end{lstlisting}

\verb+Number.isInteger(num);+ teste si \verb+num+ est un entier.
	\begin{description}
		\item[\textbf{Attention !}] \verb+10.0+ est interprété comme un entier.
	\end{description}

\verb+Number.isSafeInteger(num);+ 

\verb+Number.isFinite(num);+ teste si le nombre est fini.

\verb+Number.parseInt(num, base);+ convertit un \verb+string+ en entier dans la \verb+base+ voulue, qui est par défaut 10.

\verb+Number.parseFloat(num);+ convertit un \verb+string+ en nombre flottant. Il est mis en place depuis 2015.

\label{MethodeInstanceNumber}\subsubsection{Les méthodes d'instance de Number}

\begin{lstlisting}
	let num = 10;
\end{lstlisting}

\verb+num.toString()+ convertit le nombre en chaîne de caractères, par défaut en base décimale, mais la méthode accepte pour paramètre une base.
	\begin{itemize}
		\item \verb+num.String()+ $\rightarrow$ base 10
		\item \verb+num.String(10)+ $\rightarrow$ base 10
		\item \verb+num.String(16)+ $\rightarrow$ base 16
		\item \verb+num.String(2)+ $\rightarrow$ base 2
	\end{itemize}

\verb+num.toFixed(+ \textit{nombre} \verb+)+ définit par \textit{nombre} un nombre de décimales, par défaut la valeur est nulle. La méthode arrondit la dernière décimale.

\verb+num.toExponential()+ renvoie une chaîne de caractères représentant l'objet \verb+Number+ en notation exponentielle.

\verb+num.toPrecision(+ \textit{nombre} \verb+)+ renvoie une chaîne de caractères représentant un nombre avec la précision \textit{nombre} donnée.

\verb+num.valueOf()+ renvoie la valeur primitive correspondant à celle représentée par l'objet \verb+Number+.

\verb+num.toLocaleString(string)+ permet de renvoyer une chaîne de caractères représentant un nombre en tenant compte de la valeur locale.
	\begin{itemize}
		\item \verb+string='ar-EG'+ $\rightarrow$ arabe
		\item \verb+string='en-IN'+ $\rightarrow$ anglais
		\item \verb+string='zh-Hans-CN-v-nu-hanidec'+ $\rightarrow$ chinois décimal
	\end{itemize}

\subsection{L'objet BigInt}

L'objet \verb+BigInt+ s'emploie pour les nombres supérieurs à $2^{53}$.

\begin{lstlisting}
	let bigInt = BigInt(nombre);
\end{lstlisting}

\textbf{Attention !} Il n'y a de mot-clé \verb+new+, car il s'agit d'une conversion.

\subsubsection{Les méthodes statiques de BigInt}

\verb+BigInt.asIntN(largeur, nombre)+ permet d'écrêter le nombre \verb+nombre+ pour obtenir un entier signé compris entre $ 2^{\textrm{largeur} - 1} $ et $ 2^{\textrm{largeur} - 1} - 1 $.

\verb+BigInt.asUintN(largeur, nombre)+ permet d'écrêter le nombre \verb+nombre+ pour obtenir un entier non signé compris entre $ 0 $ et $ 2^{\textrm{largeur} - 1} - 1 $.

\subsubsection{Les méthodes d'instance de BigInt}

\verb+nombre.toLocaleString(string)+ $\rightarrow$ cf.page \pageref{MethodeInstanceNumber}

\verb+nombre.toString(base)+ $\rightarrow$ cf.page \pageref{MethodeInstanceNumber}

\verb+nombre.valueOf()+ $\rightarrow$ cf.page \pageref{MethodeInstanceNumber}

\subsection{L'objet Math}

\subsubsection{Les méthodes statiques de Math}

\verb+Math.E+ $\rightarrow$ nombre de Neper $e$

\verb+Math.LN10+ $\rightarrow$ $ \ln \left( 10 \right) $

\verb+Math.LN2+ $\rightarrow$ $ \ln \left( 2 \right) $

\verb+Math.LOG10E+ $\rightarrow$ $ \log \left( e \right) $

\verb+Math.LOG2E+ $\rightarrow$ $ {\log}_2 \left( e \right) $

\verb+Math.PI+ $\rightarrow$ $ \pi $

\verb+Math.SQRT1_2+ $\rightarrow$ $ \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2} = \sqrt{\frac{1}{2}} $

\verb+Math.SQRT2+ $\rightarrow$ $\sqrt{2}$

\subsubsection{Les méthodes statiques pour les fonctions classiques}

\verb+Math.sign(nombre)+ $\rightarrow$ signe de $\textrm{nombre}$

\verb+Math.abs(nombre)+ $\rightarrow$ $ \left| \textrm{nombre} \right| $

\verb+Math.pow(nombre, puissance)+ $\rightarrow$ $ {\textrm{nombre}}^{\textrm{puissance}} $

\verb+Math.sqrt(nombre)+ $\rightarrow$ $ \sqrt{\textrm{nombre}} $

\verb+Math.cbrt(nombre)+ $\rightarrow$ $ \sqrt[3]{\textrm{nombre}} $

\verb+Math.log(nombre)+ $\rightarrow$ $ \ln \left( \textrm{nombre} \right) $

\verb+Math.log10(nombre)+ $\rightarrow$ $ \log \left( \textrm{nombre} \right)$

\verb+Math.log2(nombre)+ $\rightarrow$ $ {\log}\_2 \left( \textrm{nombre} \right) $

\verb+Math.exp(nombre)+ $\rightarrow$ $ e^{\textrm{nombre}} $

\verb+Math.expn1(nombre)+ $\rightarrow$ $ e^{\textrm{nombre}} - 1 $

\subsubsection{Les méthodes statiques pour les fonctions trigonométriques}

Tous les résultats des méthodes sont par défaut en \textbf{radians}.

\verb+Math.cos(nombre)+ $\rightarrow$ $ \cos \left( \textrm{nombre} \right) $

\verb+Math.sin(nombre)+ $\rightarrow$ $ \sin \left( \textrm{nombre} \right) $ 

\verb+Math.tan(nombre)+ $\rightarrow$ $ \tan \left( \textrm{nombre} \right) $

\verb+Math.acos(nombre)+ $\rightarrow$ $ \arccos \left( \textrm{nombre} \right) $

\verb+Math.asin(nombre)+ $\rightarrow$ $ \arcsin \left( \textrm{nombre} \right) $

\verb+Math.atan(nombre)+ $\rightarrow$ $ \arctan \left( \textrm{nombre} \right) $

\verb+Math.acosh(nombre)+ $\rightarrow$ $ \cosh \left( \textrm{nombre} \right) $

\verb+Math.asinh(nombre)+ $\rightarrow$ $ \sinh \left( \textrm{nombre} \right) $

\verb+Math.atanh(nombre)+ $\rightarrow$ $ \tanh \left( \textrm{nombre} \right) $

\verb+Math.atan2(y, x)+ fournit l'angle entre la droite passant par l'origine $\left( 0, 0 \right) $ et le point de coordonnées $ \left( x, y \right) $.

\subsubsection{Les méthodes statiques pour gérer les arrondis}

\verb+Math.trunc(nombre)+ retourne la troncature entière d'un nombre en retirant sa partie décimale (partie entière).

\verb+Math.round(nombre)+ arrondit à l'entier le plus proche.

\verb+Math.ceil(nombre)+ arrondit à l'entier le plus proche supérieur.

\verb+Math.floor(nombre)+ arrondit à l'entier le plus proche inférieur.

\verb+Math.min(nombre1, nombre2)+ donne le plus petit nombre des deux.

\verb+Math.max(nombre1, nombre2)+ donne le plus grand nombre des deux.

\subsubsection{Les méthodes statiques diverses}

\verb+Math.random()+ fournit un nombre pseudo-aléatoire dans la fourchette $ \left[ 0, 1 \right[ $ selon une distribution approximativement uniforme sur cet intervalle.
	\begin{itemize}
		\item Le nombre obtenu doit être multiplié par un autre pour couvrir un autre intervalle.
		\item Le nombre obtenu peut être manipulé avec \verb+parseInt()+ ou \verb+parseFloat()+.
	\end{itemize}

\verb+Math.hypot(a, b, c, ..., z)+ calcule $\sqrt{a^2 + b^2 + c^2 + \ldots{} + z^2}$.

\subsubsection{Les méthodes statiques des nombres binaires}

\verb+Math.clz32(nombre)+ fournit le nombre de zéros de tête dans la représentation binaire sur 32 bits d'un nombre.

\verb+Math.fround(nombre)+ fournit le nombre flottant à précision simple sur 32 bits qui est le plus proche du nombre fourni.

\verb+Math.imul(nombre1, nombre2)+ fournit le résultat de la multiplication de deux nombres, calculée avec la représentation sur 32 bits de ces nombres.

\section{L'objet String}\markboth{}{L'objet String}

\subsection{La déclaration}

\begin{lstlisting}
	let text = "Ceci est une chaîne de caractères";
\end{lstlisting}

\noindent En déclarant de cette manière, le type est un \verb+string+.

\begin{lstlisting}
	let text = new String("Ceci est une chaîne de caractères");
\end{lstlisting}

\noindent En déclarant de cette manière, le type est un \verb+object+.

\textbf{N.B.} Les deux déclarations disposent des \textbf{mêmes} méthodes.

\subsection{La concaténation -- Approfondissement}

\begin{lstlisting}
	let text1 = "Ceci est une chaîne";
	let text2 = " de caractères.";
\end{lstlisting}

\textbf{Méthode 1.} \verb/text = text1 + text2;/

\textbf{Méthode 2.} \verb+text = text1.concat(text2);+
	\begin{description}
		\item[\textbf{N.B.}] On peut mettre plusieurs \verb+string+ à la suite en séparant les variables avec une virgule \verb+,+ Si on définit une variable,
\begin{lstlisting}
	let text3 = " C'est génial !";
\end{lstlisting}
		\noindent alors on peut écrire :
\begin{lstlisting}
	let text = text1.concat(text2, text3);
\end{lstlisting}
	\end{description}

\textbf{Méthode 3.} \verb+`${text1}${text2}`+

\subsection{La comparaison}

\begin{lstlisting}
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
\end{lstlisting}

Il compare l'ordre alphabétique des mots.

\textbf{Attention !} L'égalité a besoin d'avoir la même casse. Ainsi, \verb+"arbre"+ n'équivaut pas à \verb+Arbre+. De fait, l'identité est vivement conseillée dans de nombreux cas.

\subsection{La manipulation des caractères d'une chaîne}

\begin{lstlisting}
	let text = "texte";
\end{lstlisting}

\subsubsection{La propriété d'instance length}

\verb+text.length+ donne la taille de la chaîne de caractères.

La propriété est utile pour parcourir la chaîne.

\begin{lstlisting}
	for(let i = 0 ; i < test.length ; i++)
	{
		document.write(text.chartAt(i));
	}
\end{lstlisting}

\noindent ou

\begin{lstlisting}
	for(element in text)
	{
		document.write(text.chartAt(element));
	}
\end{lstlisting}

\subsubsection{Les méthodes d'instance de String}

\begin{itemize}
	\item \verb+text.char(nombre)+ donne le caractère placé à la position spécifique \verb+nombre+ dans la chaîne de caractères $ \left[ 0, +\infty \right[ $. Dans le cas de \verb+text+, l'intervalle est $ \left[ 0, 4 \right] $.
		\begin{description}
			\item[\textbf{N.B.}] \verb+text.chartCodeAt()+ retourne le code ASCII du caractère.
		\end{description}
	\item \verb+text+ est un \verb+Array+, ce qui permet d'appeler directement les caractères
		\begin{description}
			\item[] \verb+text[0]+ $\rightarrow$ \verb+t+
			\item[] \verb+text[4]+ $\rightarrow$ \verb+e+
		\end{description}
\end{itemize}

\paragraph{Tester le premier ou dernier caractère d'une chaîne}

\begin{description}
	\item[] \verb+text.startsWidth('T')+ $\rightarrow$ Réponse : \verb+true+
	\item[] \verb+text.startsWidth('t')+ $\rightarrow$ Réponse : \verb+false+
	\item[] \verb+text.endsWidth('e')+ $\rightarrow$ Réponse : \verb+true+
	\item[] \verb+text.endsWidth('E')+ $\rightarrow$ Réponse : \verb+false+
\end{description}

\paragraph{Tester la première ou dernière occurrence d'un caractère d'une chaîne}

\begin{description}
	\item[] \verb+text.indexOf('t')+ $\rightarrow$ Réponse : \verb+0+, et non \verb+3+
	\item[] \verb+text.lastIndexOf('e')+ $\rightarrow$ Réponse : \verb+4+, et non \verb+1+
\end{description}

\textbf{N.B.} Si le caractère testé n'existe pas, la réponse est \verb+-1+.

\textbf{Attention !} Il faut bien respecter la casse, car \verb+t+ $\neq$ \verb+T+.

\paragraph{Convertir la casse}

\begin{description}
	\item[] \verb+text.toUpperCase()+ convertit en caractères majuscules \textbf{toute} la chaîne de caractères.
	\item[] \verb+text.toLowerCase()+ convertit en caractères minuscules \textbf{toute} la chaîne de caractères. 
	\item[] \verb+text.toLocateUpperCase(argument)+ 
	\item[] \verb+text.toLocateLowerCase(argument)+ 
\end{description}

\paragraph{Découper une chaîne}

\verb+text.substring(debut, fin)+ retourne la partie de la chaîne de caractères comprise entre \verb+debut+ et \verb+fin+, \verb+fin+ exclu.
	\begin{description}
		\item[] \verb+text.substring(1, 3)+ $\rightarrow$ \verb+ex+
		\item[] \verb+text.substring(1, 2)+ $\rightarrow$ \verb+e+
		\item[] \verb+text.substring(1, 4)+ $\rightarrow$ \verb+ext+
		\item[] \verb+text.substring(1, 5)+ $\rightarrow$ \verb+exte+
	\end{description}

\verb+text.substr(debut, longueur)+ retourne la partie de la chaîne de caractères à partir du nombre \verb+debut+ jusqu'à atteindre la \verb+longueur+ choisie.
	\begin{description}
		\item[] \verb+text.substr(1, 4)+ $\rightarrow$ \verb+exte+
		\item[] \verb+text.substr(1, 2)+ $\rightarrow$ \verb+xe+
	\end{description}

\paragraph{Compléter une chaîne de taille insuffisante}

\verb+text.padStart(10, "-")+, la chaîne de caractères mesurant 5 caractères, le code crée $10 - 5 = 5$ \verb+"-"+ devant la chaîne.
	\begin{description}
		\item[\textbf{Résultat :}] \verb+-----texte+
	\end{description}

\verb+text.padEnd(10, "-")+, la chaîne de caractères mesurant 5 caractères, le code crée $10 - 5 = 5$ \verb+"-"+ après la chaîne.
	\begin{description}
		\item[\textbf{Résultat :}] \verb+texte-----+
	\end{description}

\paragraph{Gérer les espaces}

\begin{lstlisting}
	let text1 = "Ceci est une chaîne";
\end{lstlisting}

\verb+text1.trim()+ enlève tous les espaces au début \textbf{et} à la fin.

\verb+text1.trimStart()+ enlève l'espace au début.

\verb+text1.trimEnd()+ enlève l'espace à la fin.

\textbf{Attention !} `JavaScript` supprime automatiquement avec \verb+document.write(...)+ les espaces en trop en début de chaîne de caractères.

\paragraph{Rechercher un caractère}

\begin{lstlisting}
	let text1 = "Ceci est une chaîne";
\end{lstlisting}

\verb+text1.includes("élément à tester")+ renvoie un booléen.
	\begin{description}
		\item[] \verb+text1.includes("t")+ $\rightarrow$ \verb+true+
		\item[] \verb+text1.includes("Ceci")+ $\rightarrow$ \verb+true+
		\item[] \verb+text1.includes("z")+ $\rightarrow$ \verb+false+
	\end{description}

\paragraph{Répéter une chaîne $n$ fois}

\begin{lstlisting}
	let text1 = "Ceci est une chaîne";
\end{lstlisting}

\verb+text1.repeat(n)+ répète $n$ fois la chaîne de caractères.

\paragraph{Remplacer des caractères}

\begin{lstlisting}
	let text1 = "Ceci est une chaîne";
\end{lstlisting}

\verb+text1.replace("e", "!")+ remplace la première occurrence de \verb+"e"+ par \verb+"!"+ dans la chaîne de caractères.

\verb+text1.replaceAll("e", "!")+ remplace toutes les occurrences de \verb+"e"+ par \verb+"!"+ dans la chaîne de caractères.
	\begin{description}
		\item[\textbf{N.B.}] Cela ne fonctionne pas tout le temps.
		\item[\textbf{Exercice.}] Créer une fonction \verb+remplaceAll+
\begin{lstlisting}
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
\end{lstlisting}
	\end{description}

\paragraph{Transformer une chaîne en la découpant en Array}

\verb+text1.split(" ")+ permet de  découper au niveau des espaces.
	\begin{description}
		\item[\textbf{Résultat :}] \verb+["Ceci","est","une","chaîne",""]+
	\end{description}

\textbf{N.B.} Cette transformation est liée aux expressions régulières, notamment aux caractères spéciaux \verb+\'+, \verb+\"+ et \verb+\\+.

\paragraph{Sélectionner des intervalles de caractères}

\verb+text.slice(2)+ sélectionne les caractères de $ \left[ 3, +\infty \right[ $.
	\begin{description}
		\item[\textbf{Résultat :}] \verb+xte+
	\end{description}

\verb+text.slice(1, 3)+ sélectionne les caractères de $ \left[ 1, 3 \right[ $.
	\begin{description}
		\item[\textbf{Résultat :}] \verb+ex+
	\end{description}

\verb+text.slice(-2)+ sélectionne les caractères de $ \left[ -2, -\infty \right[ $.
	\begin{description}
		\item[\textbf{Résultat :}] \verb+te+
	\end{description}

\verb+text.slice(-3, -2)+ sélectionne les caractères de $ \left[ -3, -2 \right[ $.
	\begin{description}
		\item[\textbf{Résultat :}] \verb+x+
	\end{description}

\subsection{Les méthodes de conversion HTML}

\textbf{Attention !} La plupart des méthodes sont considérées comme obsolètes.

\begin{lstlisting}
	let text = "texte";
\end{lstlisting}

\begin{itemize}
	\item \verb+text.anchor("nom")+ $\rightarrow$ \verb+<a name="nom">texte</a>+
	\item \verb+text.link("url")+ $\rightarrow$ \verb+<a href="url">texte</a>+
\end{itemize}

\noindent Les méthodes pouvant être être obsolètes :
	\begin{itemize}
		\item \verb+text.bold()+ $\rightarrow$ \verb+<b>texte</b>+ (en gras)
		\item \verb+text.italics()+ $\rightarrow$ \verb+<i>texte</i>+ (en italique)
		\item \verb+text.strike()+ $\rightarrow$ \verb+<strike>texte</strike>+ (barré)
		\item \verb+text.blink()+ $\rightarrow$ \verb+<blink>texte</blink>+ (clignotant)
		\item \verb+text.small()+ $\rightarrow$ \verb+<small>texte</small>+ (en petit)
		\item \verb+text.big()+ $\rightarrow$ \verb+<big>texte</big>+ (en grand)
		\item \verb+text.fontcolor("couleur")+ $\rightarrow$ \verb+<font color="couleur">texte</font>+ (en couleur)
		\item \verb+text.fontsize(taille)+ $\rightarrow$ \verb+<font size="taille">texte</font>+ (taille de la police)
		\item \verb+text.sub()+ $\rightarrow$ \verb+<sub>texte</sub>+ (indice)
		\item \verb+text.sup()+ $\rightarrow$ \verb+<sup>texte</sup>+ (exposant)
		\item \verb+text.fixed()+ $\rightarrow$ \verb+<tt>texte</tt>+ affiche le texte de la chaîne de caractères dans une \textbf{fonte à chasse fixe}, c'est-à-dire que chaque caractère et espace occupent le même espace horizontal que les autres.
			\begin{description}
				\item[\textbf{Exemple :}] le texte dans un éditeur de code
			\end{description}
	\end{itemize}

\section{Les expressions régulières}\markboth{}{Les expressions régulières}

Les \textbf{expressions régulières}\footnote{En anglais : \textit{Regular Expressions}}, ou les expressions rationnelles, notées \verb+RegExp+, sont des modèles permettant de représenter des chaînes de caractères. Elles servent à rechercher des données dans les chaînes de caractères composant un texte.

Sur `JavaScript`, il suffit d'écrire le modèle pour une expression régulière entre deux \textit{slash}, \verb+/+. \textbf{Les modèles peuvent être enregistrés dans des variables ordinaires}.
\begin{lstlisting}
	let modele = /RegExp/;
\end{lstlisting}

\subsection{Les méthodes d'instance}

\begin{itemize}
	\item Pour chaque modèle, `JavaScript` met à disposition la méthode \verb+test(...)+
\begin{lstlisting}
	let modele = /JavaScript/;
	let texte = "Expressions régulières en JavaScript";
	if(modele.test(texte))
	{
		document.write(modele + " a été trouvé dans le texte");
	}
	else
	{
		document.write(modele + " n'a pas été trouvé dans le texte");
	}
\end{lstlisting}
		\begin{description}
			\item[\textbf{N.B.}] \verb+modele+ peut être juste un mot à trouver dans \verb+texte+.
		\end{description}
	\noindent Dans l'exemple, le modèle recherché tient compte de la casse. Il recherche `JavaScript`, et non `JavaScript` ou `JavaScript`, ou `JavaScript`, ou `JavaScript`, \textit{etc}.
	\item L'objet \verb+String+ possède la méthode \verb+search()+ pour parcourir une chaîne de caractères.
\begin{lstlisting}
	let position = texte.search(modele);
	document.write(position);
\end{lstlisting}
	\item L'objet \verb+String+ dispose également d'une méthode \verb+replace(...)+
\begin{lstlisting}
	let nouveauTexte = texte.replace(modele, "JAVA-SCRIPT");
	document.write(nouveauTexte);
\end{lstlisting}
	\item L'objet \verb+String+ dispose d'une méthode \verb+split(...)+ qui permet de fractionner une chaîne de caractères en détectant un séparateur.
\begin{lstlisting}
	let liste = "JavaScript, C/C++, Perl";
	let tab = liste.split(/, ?/)
	for(element in tab)
	{
		document.write(tab[element]);
	}
\end{lstlisting}
	\noindent Ici, il y a trois éléments de 0 à 2. On peut poser une variable pour le séparateur.
\begin{lstlisting}
	let separateur = /, ? /;
\end{lstlisting}
\end{itemize}

\subsection{Les drapeaux}

Il existe plusieurs drapeaux\footnote{En anglais : \textit{flags}} se plaçant après le second \textit{slash} de l'expression régulière.
	\begin{itemize}
		\item \verb+i+ définit que la casse ne doit pas être prise en compte. Il est couplé avec la méthode \verb+search()+.
\begin{lstlisting}
	let modele = /javascript/i;
	texte = "Du plaisir avec JavaScript";
	texte2 = texte.search(modele);
\end{lstlisting}
			\begin{description}
				\item[\textbf{Résultat :}] position du texte
			\end{description}
		\item \verb+g+ impose une recherche globale, c'est-à-dire qu'elle est effectuée plusieurs fois. Il est couplé avec la méthode \verb+replace()+.
\begin{lstlisting}
	let modele = /JAVA/g;
	let texte = "JAVASCRIPT et JAVA";
	let texte2 = texte.replace(/JAVA/g, "Java");
\end{lstlisting}
			\begin{description}
				\item[\textbf{Résultat :}] \verb+JavaScript et Java+
			\end{description}
	\end{itemize}

\subsection{Les symboles et les modèles de recherche}

Des symboles spéciaux servent à spécifier une plage de caractères au sein de laquelle un seul doit être trouvé.

\subsubsection{Plusieurs options entre crochets}

\begin{lstlisting}
	let modele = /[Jj]ava[Ss]cript/;
\end{lstlisting}

\noindent \verb+[Jj]+ signifie que l'on peut taper indifféremment \verb+J+ ou \verb+j+, de même pour \verb+[Ss]+, avec \verb+S+ et \verb+s+.

Pour définir une plage de plusieurs caractères, on utilise le signe \verb+-+. Pour faire appel à toutes les lettres de \verb+A+ à \verb+Z+ ou de \verb+a+ à \verb+z+, on écrit :
\begin{lstlisting}
	let modele1 = /[A-Z]/;
	let modele2 = /[a-z]/;
\end{lstlisting}

\noindent On peut combiner les deux casses :
\begin{lstlisting}
	let modele = /[a-zA-Z]/;
\end{lstlisting}

\textbf{Attention !} Tout autre caractère n'est pas recherché : espace, ponctuations, chiffres, caractères spéciaux, \textit{etc}.

\subsubsection{Répétitions et caractères optionnels}

Le signe \verb+*+ indique que le caractère précédent peut intervenir un nombre arbitraire de fois. \verb+a*+ signifie que, en cet endroit, il peut y avoir un nombre quelconque, nul ou non nul, de \verb+a+ successifs.

Le signe \verb/+/ impose la présence du caractère concerné au moins une fois. Le modèle \verb/[Aa]+/ cherche un ou plusieurs \verb+a+ en majuscule ou en minuscule.

Le signe \verb+?+ joue un rôle identique à \verb+*+ : le caractère qui le précède est optionnel.
\begin{lstlisting}
	let modele = /Java-?Script/
\end{lstlisting}

\noindent L'exemple signifie que \verb+-+ est optionnel.

Pour spécifier le nombre de répétitions, on utilise une définition de plage avec des accolades : \verb+{n, m}+. La lettre précédant l'accolade doit intervenir au moins $n$ fois et au plus $m$ fois. En cas d'omission de $m$, la lettre doit intervenir au moins $n$ fois sans limite supérieure.
\begin{lstlisting}
	let modele = /[a-z]{1,6}/g
	let texte = "abcdefgh";
	let nouveauTexte = texte.replace(modele, "-");
	document.write(nouveauTexte);
\end{lstlisting}
	\begin{description}
		\item[\textbf{Résultat :}] \verb+--+
	\end{description}

\textbf{N.B.} Si on écrit \verb+{n}+, la lettre concernée sera recherchée très exactement $n$ fois.

\subsection{L'usage du \textit{pipe} $\mid$}

Le \textit{pipe} $\mid$ permet de spécifier plusieurs possibilités.
\begin{lstlisting}
	let modele = /JavaScript|HTML/g;
\end{lstlisting}

\noindent Le modèle accepte soit \verb+"JavaScript"+, soit \verb+HTML+.

\subsection{La subdivision des modèles en zones}

Les parenthèses \verb+(...)+ permettent de subdiviser un modèle en plusieurs zones. Elles permettent d'identifier un mot complet comme étant optionnel, à l'aide de \verb+?+
\begin{lstlisting}
	let modele = /Java(Script)?/;
\end{lstlisting}

\textbf{N.B.} Il est possible d'imbriquer plusieurs niveaux de parenthèses.

Toutes les parenthèses sont numérotées de la gauche vers la droite. Les caractères trouvés dans la première parenthèse peuvent être rappelés ultérieurement dans le modèle sous la forme \verb+\1+. L'intérêt apparaît si plusieurs possibilités existent pour un caractère, qui doit intervenir à plusieurs reprises.
\begin{lstlisting}
	let modele = /(["'])JavaScript\1/;
\end{lstlisting}

\noindent Avec \verb+(["'])+, on recherche le texte entre guillemets simples ou doubles.
\begin{lstlisting}
	let texte1 = "\'JavaScript\'";
	let texte2 = "\"JavaScript\"";
	let texte3 = "\'JavaScript\"";
\end{lstlisting}

\noindent Seul le guillemet placé avant le mot est recherché.
	\begin{description}
		\item[] \verb+texte1.search(modele)+ $\rightarrow$ Résultat : \verb+true+ (position du premier \verb+\'+)
		\item[] \verb+texte2.search(modele)+ $\rightarrow$ Résultat : \verb+true+ (position du premier \verb+\"+)
		\item[] \verb+texte3.search(modele)+ $\rightarrow$ Résultat : \verb+false+ (retour : \verb+-1+)
	\end{description}

\subsection{Les caractères spéciaux et les symboles}

Le point \verb+.+ représente un caractère quelconque. De fait, n'importe quel caractère peut intervenir au niveau d'un point, sauf \verb+\n+.
\begin{lstlisting}
	let modele = /JavaScript/;
\end{lstlisting}

\verb+.*+ trouve une ligne complète.

\verb+^+ matérialise le début d'une chaîne de caractères.
\begin{lstlisting}
	let modele = /^Texte/;
\end{lstlisting}

\noindent Il trouve uniquement le mot \verb+Texte+ s'il intervient en début de chaîne de caractères.

\verb+$+ représente la fin de la chaîne de caractères.
\begin{lstlisting}
	let modele = /^Texte$/;
\end{lstlisting}

\noindent Il s'agit d'une chaîne de caractères ne contenant que le mot \verb+Texte+.

\textbf{N.B.} Dans une chaîne de caractères, un \textit{slash} ordinaire s'écrit : \verb+\/+ et le \textit{bashslash} s'écrit : \verb+\\+.

%\input{TABLE/table8.txt}

\begin{figure}[!h]
	\centering
	\includegraphics[width=15cm]{IMG/Expression-Reg.jpg}
	\caption{Les caractères spéciaux et les expressions régulières}
	\label{td3fig8}
\end{figure}

\section{L'objet RegExp}\markboth{}{L'objet RegExp}

Les expressions régulières (ou rationnelles) peuvent s'écrire en littéral, mais également en objet.
\begin{lstlisting}
	let modele1 = /ab+c/i;
	let modele2 = new RegExp("ab+c","i");
	let modele3 = new RegExp(/ab+c/,"i");
\end{lstlisting}

\textbf{N.B.} Il existe plusieurs drapeaux : \verb+i+, \verb+g+, \verb+m+, et \verb+y+ que l'on peut combiner.
	\begin{itemize}
		\item \verb+i+ : ignorance de la casse
		\item \verb+g+ : correspondance globale
		\item \verb+m+ : multiligne
			\begin{description}
				\item[] On traite les caractères de début et de fin (\verb+^+ et \verb+$+) de façon à travailler sur plusieurs lignes. Ils correspondent au début et à la fin de chaque ligne, et non au début ou à la fin de la chaîne.
			\end{description}
		\item \verb+y+ : adhérence
			\begin{description}
				\item[] On ne recherche les correspondances qu'à partir de l'indice fourni par la propriété \verb+lastIndex+ de l'expression régulière dans la chaîne cible. La recherche n'est pas effectuée pour les indices suivants.
				\item[\textbf{Attention !}] On écrit :
\begin{lstlisting}
	let modele = /\w+/;
\end{lstlisting}
				\noindent mais :
\begin{lstlisting}
	let modele = new RegExp("\\w+");
\end{lstlisting}
				\noindent La première forme est à privilégier. Toutefois, l'objet \verb+RegExp+ permet de créer en cours d'exécution du programme des expressions régulières.
			\end{description}
	\end{itemize}

\subsection{Les propriétés d'instance}

\begin{lstlisting}
	let text = /texte/;
\end{lstlisting}

\verb+text.flags+ renvoie une chaîne de caractères contenant les drapeaux de l'objet \verb+RegExp+ auquel elle appartient.

\verb+text.dotAll+ indique si le drapeau \verb+S+ est utilisé pour l'expression régulière. Il s'agit d'une propriété en lecture seule et qui renseigne à propos de l'expression régulière courante. Il renvoie un booléen.

\verb+text.global+ indique si le drapeau \verb+g+ est utilisé pour l'expression régulière. Il s'agit d'une propriété accessible en lecture seule pour une expression régulière donnée. Il renvoie un booléen.

\verb+text.hasIndices+ indique si le drapeau \verb+d+ a été utilisé ou non avec l'expression régulière. Il s'agit d'une propriété en lecture seule, rattachée à une instance d'expression régulière. Il renvoie un booléen.

\verb+text.ignoreCase+ indique si le drapeau \verb+i+ est utilisé ou non pour cette expression régulière. Il s'agit d'une propriété accessible en lecture seule d'une instance d'expression régulière donnée. Il renvoie un booléen.

\verb+text.multiline+ indique si le drapeau \verb+m+ a été utilisé ou non pour l'expression régulière. Il s'agit d'une propriété liée à l'instance, accessible en lecture seule. Il renvoie un booléen.

\verb+text.unicode+ indique si le drapeau \verb+u+ a été utilisé avec l'expression régulière. Il s'agit d'une propriété en lecture seule et liée à une instance d'expression régulière. Il renvoie un booléen.

\verb+text.source+ renvoie une chaîne de caractères qui contient le texte du motif à rechercher (le \textit{pattern}), sans les barres obliques (\textit{slash}). Il s'agit d'une propriété en lecture seule liée à l'instance. Il ne contient aucun des drapeaux ou options de l'expression régulière.

\verb+text.sticky+ permet de déterminer si la recherche s'effectue uniquement à partir de l'indice \verb+lastIndex+ lié à l'expression régulière ou non. Il s'agit d'une propriété accessible en lecture seule, rattachée à l'instance.

\verb+text.lastIndex+ est un entier en lecture et écriture qui permet de définir l'indice à partir duquel chercher la prochaine correspondance pour une instance d'expression régulière donnée.

\subsection{Méthodes des instances}

\begin{lstlisting}
	let text = /texte/;
\end{lstlisting}

[obsolète] \verb+text.compile(texte, drapeau)+ est utilisé afin de (re)compiler une expression régulière lors de l'exécution d'un programme. Cette méthode effectue essentiellement les mêmes actions que le construction \verb+RegExp+.

\verb+text.exec(texte)+ exécute la recherche d'une correspondance sur une chaîne de caractères donnée. Elle renvoie un tableau contenant les résultats ou \verb+null+.
	\begin{description}
		\item[\textbf{Attention !}] Si on souhaite uniquement savoir s'il existe une correspondance, on utilisera les méthodes \verb+test()+ ou \verb+search()+.
		\item[] La chaîne de caractères dans laquelle on recherche la correspondance est décrite par l'expression régulière.
	\end{description}

\verb+text.test(texte)+ vérifie s'il existe une correspondance entre un texte et une expression régulière (\verb+text+). Elle retourne un booléen.

\verb+text.toString()+ renvoie une chaîne de caractères représentant l'expression régulière appelante.

\subsection{Méthodes de recherche}

\verb+match()+ récupère les correspondances obtenues lorsque l'on teste une chaîne de caractères par rapport à une expression régulière.

\verb+matchAll()+ renvoie l'ensemble des correspondances d'une expression régulière sur une chaîne de caractères.

\verb+replace()+ remplace toutes ou certaines correspondances d'un motif \verb+this+ dans une chaîne de caractères avec un outil de remplacement. La valeur renvoyée est la nouvelle chaîne de caractères ainsi créée. Cet outil de remplacement peut être une chaîne de caractères ou une fonction appelée pour chacune des correspondances.

\verb+search()+ recherche une correspondance entre une expression régulière décrite par \verb+this+ et une chaîne de caractères donnée.

\verb+split()+ découpe une chaîne de caractères en tableau de sous-chaînes.

\section{L'objet Date}\markboth{}{L'objet Date}

L'objet \verb+Date+ permet de lire la date actuelle, mais également de réaliser d'autres opérations. En interne, `JavaScript` calcule les dates en \textbf{millisecondes} à partir du 1\ier{} janvier 1970 0h00'00{"} ms U.T.C.\footnote{L'U.T.C. est une contraction entre le français, « temps universel coordonné » (T.U.C.) et de l'anglais, \textit{coordinated universal time}. Il correspond à une échelle de temps adoptée comme base du temps civil international par la majorité des pays du globe. L'U.T.C. remplace le (\textit{Greenwich Mean Time}) (G.M.T.), le temps universel.}. De fait, il n'est par conséquent pas possible d'afficher une date avant ce point de départ de référence.

\begin{lstlisting}
	let date = new Date("September 20, 2012 15:00:00");
\end{lstlisting}

\noindent ou

\begin{lstlisting}
	let date = new Date("2022-09-20T15:00:00");
\end{lstlisting}

\noindent ou

\begin{lstlisting}
	let date = new Date(2022, 9, 20);
\end{lstlisting}

\noindent ou

\begin{lstlisting}
	let date = new Date(2022, 0, 20, 15, 0, 0);
\end{lstlisting}

\noindent ou

\begin{lstlisting}
	let date = Date();
\end{lstlisting}

\noindent Ce dernier cas fournit la date du jour en \verb+string+.

\textbf{N.B.} Dans les deux formats \verb+string+, on peut préciser le fuseau horaire.

\textbf{Attention !} Le format par \verb+let date = Date();+ n'est pas une vraie date. Pour utiliser la date du jour, il faut découper la chaîne de caractères obtenue et créer une autre date.

\begin{lstlisting}
	let dateCor = date.substring(0, 28);
	date = new Date(dateCor);
\end{lstlisting}

\noindent Ainsi, la date est au bon format pour utiliser les méthodes statiques et les méthodes d'instance.

\subsection{Les méthodes statiques}

\verb+Date.new()+ renvoie le temps écoulé en millisecondes depuis le 1\ier{} janvier 1970.

\verb+Date.parse(string)+ renvoie la représentation textuelle d'une date sous la forme d'un \verb+string+ en millisecondes représentant le temps écoulé depuis le 1\ier{} janvier 1970.

\verb+Date.UTC(+ \textit{année, mois, jour, heure, minute, seconde} \verb+)+ renvoie le nombre de millisecondes écoulées depuis le 1\ier{} janvier 1970.

\subsection{Les méthodes d'instance}

\begin{lstlisting}
	let date = new Date(2022, 9, 21, 0, 0, 0);
\end{lstlisting}

\subsubsection{Lecture de l'affectation}

[obsolète] \verb+date.getYear()+ livre l'année sur deux chiffres entre 1970 et 1999, sur trois chiffres depuis 2000

\verb+date.getFullYear()+ livre l'année avec quatre chiffres.

\verb+date.getMonth()+ livre le mois (0 pour janvier, 11 pour décembre).

\verb+date.getDate()+ livre le jour du mois de 1 à 31.

\verb+date.getDay()+ livre le jour de la semaine (0 pour dimanche, 6 pour samedi).

\verb+date.getHours()+ livre l'heure de 0 à 23.

\verb+date.getMinutes()+ livre la minute de 0 à 59.

\verb+date.getSeconds()+ livre la seconde de 0 à 59.

\verb+date.getMilliseconds()+ livre la milliseconde de 0 à 999.

\verb+date.getTime()+ livre les millisecondes écoulées depuis le 1\ier{} janvier 1970.

\verb+date.getTimezoneOffSet()+ livre le décalage horaire entre le fuseau horaire G.M.T. et le fuseau horaire de Greenwich U.T.C. en minutes.

\verb+date.toString()+ livre la date sous la forme d'une chaîne de caractères.

\textbf{N.B.} Tous les \textit{getter} ont un équivalent U.T.C.
	\begin{itemize}
		\item \verb+getUTCFullYear()+
		\item \verb+getUTCMonth()+
		\item \verb+getUTCDate()+
		\item \verb+getUTCDay()+
		\item \verb+getUTCHours+
		\item \verb+getUTCMinutes()+
		\item \verb+getUTCSeconds()+
		\item \verb+getUTCMilliseconds+
	\end{itemize}

\subsubsection{Modification des valeurs affectées}

La modification s'effectue par un \textit{setter} sans affecter une nouvelle variable.

\verb+date.setFullYear(+ \textit{année} \verb+)+

\verb+date.setUTCFullYear+ \textit{année} \verb+)+

\verb+date.setMonth(+ \textit{mois} \verb+)+ (0 pour janvier, 11 pour décembre)

\verb+date.setUTCMonth(+ \textit{mois} \verb+)+ (0 pour janvier, 11 pour décembre)

\verb+date.setDate(+ \textit{jour} \verb+)+ (de 1 à 31)

\verb+date.setUTCDate(+ \textit{jour} \verb+)+ (de 1 à 31)

\textbf{Attention !} \verb+date.setDay(+ \textit{jour} \verb+)+ et \verb+date.setUTCDay(+ \textit{jour} \verb+)+ n'existent pas. \verb+setDate()+ et \verb+setUTCDate()+ les affectent directement.

\verb+date.setHours(+ \textit{heure} \verb+)+ (de 0 à 23)

\verb+date.setUTCHours(+ \textit{heure} \verb+)+ (de 0 à 23)

\verb+date.setMinutes(+ \textit{minute} \verb+)+ (de 0 à 59)

\verb+date.setUTCMinutes(+ \textit{minute} \verb+)+ (de 0 à 59)

\verb+date.setSeconds(+ \textit{seconde} \verb+)+ (de 0 à 59)

\verb+date.setUTCSeconds(+ \textit{seconde} \verb+)+ (de 0 à 59)

\verb+date.setMilliseconds(+ \textit{milliseconde} \verb+)+ (de 0 à 999)

\verb+date.setUTCMilliseconds(+ \textit{milliseconde} \verb+)+ (de 0 à 999)

\verb+date.setTime(+ \textit{temps en millisecondes} \verb+)+ définit la date en temps universel.
	\begin{description}
		\item[\textbf{N.B.}] On utilise un temps négatif pour définir une date avant le 1\ier{} janvier 1970.
		\item[\textbf{N.B.}] La limite de l'entier pouvant être saisi est fournie par la limite des \verb+Integer+.
	\end{description}

\subsubsection{Méthodes d'instance}

\verb+date.toDateString()+ renvoie la partie (jour, mois, année) de l'objet \verb+Date+ en chaîne de caractères.

\verb+date.toLocaleDateString('fr-FR')+ définit une date dans le système local, ici la France.
	\begin{itemize}
		\item \verb+'en-US'+ : anglais états-unien
		\item \verb+'en-GB'+ : anglais britannique
		\item \verb+'fr-CA'+ : français canadien
		\item \verb+'ko-KR'+ : coréen
		\item \verb+'fa-IR'+ : persan
		\item \verb+'de-De'+ : allemand
		\item \verb+'ja-JP-u-ca-japanese'+ : japonais
	\end{itemize}

\verb+date.toGMTString()+ renvoie une chaîne de caractères représentant l'objet \verb+Date+ en G.M.T.

\verb+date.toUTCString()+ renvoie une chaîne de caractères représentant l'objet \verb+Date+ en U.T.C.

\verb+date.toTimeString()+ renvoie l'heure, la minute et la seconde d'un objet \verb+Date+ sous la forme d'une chaîne de caractères compréhensible.

\verb+date.toLocaleTimeString('fr-FR')+ renvoie une chaîne de caractères des heures, minutes et secondes d'un objet \verb+Date+ dans le système local, ici la France.

\verb+date.toString()+

\verb+date.toLocaleString()+ renvoie une chaîne de caractères représentant la date sous la forme de la locale courante avec une représentation propre à la locale courante.

\verb+date.toLocaleFormat("weekday, year month day")+ convertit en une chaîne de caractères avec un format décrit en paramètre \textit{via} une chaîne de caractères.
	\begin{description}
		\item[\textbf{N.B.}] \verb+weekday+ renvoie au drapeau \verb+%A+, \verb+year+ au drapeau \verb+%e+, \verb+month+ au drapeau \verb+%B+, et \verb+day+ au drapeau \verb+%Y+.
	\end{description}

\verb+date.toISOString()+ convertit une date en chaîne de caractères selon le format ISO 8601 étendu.

\verb+date.toJSON()+ renvoie une chaîne de caractères représentant l'objet \verb+Date+ avec \\ \verb+toISOString()+.
	\begin{description}
		\item[\textbf{N.B.}] JSON signifie \textit{JavaScript Object Notation}
	\end{description}

\subsection{La méthode globale setTimeout()}

[\verb+Object.+]\verb+setTimeout(+ \textit{fonction à exécuter lorsque la durée est écoulée}, \textit{options} \verb+)+ permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué. Par défaut, le minuteur est à 0 ce qui signifie que la fonction doit s'exécuter le plus rapidement possible.
	\begin{itemize}
		\item \verb+Object+ est facultatif.
		\item Les options, séparées par une virgule, sont :
			\begin{itemize}
				\item[$\blacksquare$] minuteur en millisecondes
				\item[$\blacksquare$] paramètre 1
				\item[$\blacksquare$] paramètre 2
				\item[$\blacksquare$] \textit{etc}.
			\end{itemize}
	\end{itemize}

Les paramètres sont des arguments additionnels passés par l'intermédiaire de la fonction à exécuter.

\section{L'objet Array}\markboth{}{L'objet Array}

\verb+Array+ désigne un champ de données ou une \textbf{table}. En fait, toute table contient éventuellement plusieurs variables, dont chacune constitue un \textbf{élément} ayant sa propre valeur. Chaque élément individuel est numéroté. Le premier élément est l'indice 0. Ainsi, dans une boucle, un compte peut se charger de parcourir successivement tous les éléments.

Une table porte un nom, ici \verb+table+. Il existe deux moyens de déclarer une table.
	\begin{description}
		\item[] \verb+let table = [+ \textit{élément 0}, \textit{élément 1}, \ldots{} \verb+];+
	\end{description}

\noindent ou, pour créer un table vide :
	\begin{description}
		\item[] \verb+let table = new Array();+
	\end{description}

\noindent ou
	\begin{description}
		\item[] \verb+let table = new Array(+ \textit{élément 0}, \textit{élément 1}, \ldots{} \verb+);+
	\end{description}

\noindent ou, pour créer une table remplie de \verb+undefined+
	\begin{description}
		\item[] \verb+let table = new Array(+ \textit{nombre d'élements} \verb+);+
	\end{description}

Pour accéder à un élément, il suffit d'écrire :
\begin{lstlisting}
	table[0];
\end{lstlisting}

\noindent ou

\begin{lstlisting}
	table.at(0);
\end{lstlisting}

\noindent Les indices négatifs sont possibles, mais pas en accès direct.

La longueur de la table est donnée par la propriété d'instance :
\begin{lstlisting}
	table.length;
\end{lstlisting}

Les tableaux acceptent tous les types, mais cela est déconseillé.
	\begin{description}
		\item[\textbf{N.B.}] Il existe des tableaux typés.
	\end{description}

\subsection{Les méthodes d'instance}

\verb+table.join()+ crée une chaîne de caractères contenant tous les éléments de la table. Les éléments sont séparés par des virgules par défaut.

\verb+let table2 = [... , ...];+

\verb+let table3 = table.concat(table2);+ ajoute la table \verb+table2+ fournie en argument à la fin de la table \verb+table+, et livre en retour la nouvelle table \verb+table3+.

\verb+table.push(+ \textit{élément 0}, \textit{élément 1}, \ldots{} \verb+)+ ajoute un élément à la fin de la table \verb+table+.
	\begin{description}
		\item[\textbf{Attention !}] Il est impossible de réaffecter \verb+table.push(...)+
	\end{description}

\verb+table.shift()+ supprime le premier élément et le livre en retour.
	\begin{description}
		\item[\textbf{Attention !}] Il est impossible de réaffecter \verb+table.shift()+
	\end{description}

\verb+table.pop()+ supprime le dernier élément et la livre en retour.
	\begin{description}
		\item[\textbf{Attention !}] Il est impossible de réaffecter \verb+table.pop()+
	\end{description}

\verb+table.unshift(+ \textit{élément 0}, \textit{élément 1}, \ldots{} \verb+)+ ajoute un élément au début de la liste.
	\begin{description}
		\item[\textbf{Attention !}] Il est impossible de réaffecter \verb+table.unshift()+
	\end{description}

\verb+table.sort()+ trie les éléments de la table par ordre naturel ou alphabétique.
	\begin{description}
		\item[\textbf{Attention à la casse !}] Pour être certain du tri alphabétique, on utilise \verb+toLowerCase()+ ou \verb+toUpperCase()+
		\item[\textbf{Attention !}] Il est impossible de réaffecter \verb+table.sort()+
	\end{description}

\verb+table.reverse()+ inverse le sens des indices de la table.
	\begin{description}
		\item[\textbf{Attention !}] Il est impossible de réaffecter \verb+table.reverse()+
	\end{description}

\subsection{Les tables multidimensionnelles}

Les tables multidimensionnelles sont des tables imbriquées.

Exemple :
\begin{lstlisting}
	let table = new Array(8);
	for(let i = 0 ; i < table.length ; i++)
	{
		table[i] = new Array(4);
	}
\end{lstlisting}

\noindent ou

\begin{lstlisting}
	let table = [ [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}], [\ldots{}, \ldots{}, \ldots{}, \ldots{}] ];
\end{lstlisting}

Pour visualiser la table multidimensionnelle, on utilise une double boucle.
\begin{lstlisting}
	for(let i = 0 ; i < table.length ; i++)
	{
		for(let j = 0 ; j < table[i].length ; j++)
		{
			document.write("(" + i + ", " + j + ")" + table[i][j] + "<br>");
		}
	}
\end{lstlisting}

\subsection{Les méthodes statiques}

\verb+Array.of(+ \textit{valeur} \verb+)+ permet de créer une nouvelle instance de \verb+Array+ à partir d'un nombre variable d'arguments (peu importe la quantité ou le type des arguments utilisés). Cela permet de créer une table.
	\begin{description}
		\item[] \verb+Array.of(1, 2, 3);+
		\item[] résultat : \verb+[1, 2, 3]+
	\end{description}

\verb+Array.from(+ \textit{valeur} \verb+)+ permet de créer une nouvelle instance de \verb+Array+ à partir d'un objet semblable à un tableau ou un itérable.
	\begin{description}
		\item[] \verb+Array.from("foo");+
		\item[] résultat : \verb+["f", "o", "o"]+
	\end{description}

\verb+Array.isArray(+ \textit{valeur} \verb+)+ renvoie un booléen.

\subsection{Parcourir une table}

\subsubsection{Parcourir les indices}

\begin{lstlisting}
	for(index in table)
	{
		document.write(index);
	}
\end{lstlisting}

\noindent ou

\begin{lstlisting}
	table.forEach(function(value, index) {document.write(index + ", " + value)});
\end{lstlisting}

\subsubsection*{Parcourir les valeurs}
\addcontentsline{toc}{subsubsection}{Parcourir les valeurs}

\begin{lstlisting}
	for(index of table)
	{
		document.write(index);
	}
\end{lstlisting}

\noindent ou

\begin{lstlisting}
	table.forEach(function(item) {document.write(item)});
\end{lstlisting}

\subsubsection{Parcourir les chaînes de caractères}

\begin{lstlisting}
	let chaine = "Ceci est une chaîne";
	let table = chaine.split(" ");
\end{lstlisting}

\noindent \verb+split+ utilise un séparateur, ici l'espace, pour découper la chaîne de caractères en table.

\begin{lstlisting}
	let chaine2 = table.join(" ");
\end{lstlisting}

\noindent \verb+join+ utilise un séparateur, ici l'espace, pour joindre définissant une chaîne de caractères en table.

\subsection{Remplir une table}

\verb+let table = [1, 2, 3, 4];+

\verb+table.fill(+ \textit{valeur}, \textit{options} \verb+)+ remplit tous les éléments d'une table à partir d'un indice de début jusqu'à un indice de fin avec une valeur statique. La valeur de l'indice de fin n'est pas incluse. Cette méthode renvoie la table modifiée.
	\begin{description}
		\item[] Les options sont :
			\begin{itemize}
				\item début (par défaut : \verb+0+)
				\item fin (par défaut : \verb+this.length+)
			\end{itemize}
	\end{description}

\verb+table.fill(0, 2, 4)+ remplit à partir de l'indice 2.
	\begin{description}
		\item[] \verb+[1, 2, 0, 0]+
	\end{description}

\verb+table.fill(5, 1)+ remplit à partir de l'indice 1.
	\begin{description}
		\item[] \verb+[1, 5, 5, 5]+	
	\end{description}

\verb+table.fill(6)+ remplit à partir de l'indice 0.
	\begin{description}
		\item[] \verb+[6, 6, 6, 6]+
	\end{description}

\subsection{Rechercher dans une table}

\subsubsection{Rechercher l'indice d'un élément ou l'élément}

\verb+table.indexOf(+ \textit{élément 1} \verb+);+ renvoie l'indice de l'élément 1, c'est-à-dire 1.
	\begin{description}
		\item[\textbf{Attention !}] La recherche s'arrête à la première occurrence en partant du début de la table.
	\end{description}

\verb+table.lastIndexOf(+ \textit{élément 1} \verb+);+
	\begin{description}
		\item[\textbf{Attention !}] La recherche s'arrête à la première occurrence en partant de la fin de la table.
	\end{description}

\verb+table.find(+ \textit{fonction fléchée} \verb+);+ renvoie l'élément trouvé dans la table si un des éléments satisfait la condition finie par la fonction passée en paramètre, sinon \verb+undefined+. La méthode retourne la première occurrence rencontrée.

\verb+table.findIndex(+ \textit{fonction fléchée} \verb+);+ renvoie l'indice de l'élément trouvé dans la table si un élément de la table satisfait la condition fixée par la fonction passée en argument, sinon \verb+-1+. La méthode retourne la première occurrence rencontrée.

\verb+table.localeCompare(table2, 'fr', + \textit{options} \verb+);+ renvoie un nombre indiquant si la chaîne de caractères courante se situe avant, après ou est la même que la chaîne placée en paramètre selon l'ordre lexicographique de la locale.
	\begin{description}
		\item[\textbf{N.B.}] \verb+'en'+, \verb+'de'+, \verb+'sv'+, \textit{etc}.
	\end{description}

\subsubsection{Extraire des données}

\verb+table.slice(+ \textit{options} \verb+);+ extrait la table entre le début et la fin choisis.
	\begin{description}
		\item[] Les options sont :
			\begin{itemize}
				\item indice de début
				\item indice de fin
			\end{itemize}
		\item[\textbf{N.B.}] Les indices négatifs sont possibles.
	\end{description}

\verb+table.splice(+ \textit{indice d'insertion}, \textit{nombre d'éléments à supprimer après l'indice}, \textit{ajout} \verb+);+ ajoute ou retire des éléments de la table.
	\begin{description}
		\item[]	\verb+tab = ["Jan", "Mar", "Apr", "Jun"];+
		\item[]	\verb+tab.splice(1, 0, "Feb");+
			\begin{description}
				\item[résultat :] \verb+["Jan", "Feb", "Mar", "Apr", "Jun"]+
			\end{description}
		\item[]	\verb+tab.splice(4, 1, "May");+
			\begin{description}
				\item[résultat :] \verb+["Jan", "Feb", "Mar", "Apr", "May", "Jun"]+
			\end{description}
	\end{description}

\subsubsection{Filtrer les données}

\verb+[-2, 14, 1, 2, -23, -2];+

\verb+table.filter(x => x > 0);+ renvoie un nouveau tableau qui contient tous les éléments de la table courante pour lesquels la fonction filtre passée en argument a renvoyé \verb+true+.
	\begin{description}
		\item[résultat :] \verb+[14, 1, 2]+
	\end{description}

\verb+table.map(value => "Inc");+ remplace tous les éléments par \verb+"Inc"+ et renvoie une table contenant les résultats de l'appel de la fonction passée en argument sur chaque élément de la table.

\subsection{Diminuer les niveaux dans les tableaux multidimensionnels}

\begin{lstlisting}
	table = [1, [1, 1], [[2, 3], [4, 5]]];
\end{lstlisting}

\verb+table.flat(+ \textit{nombre optionnel du nombre de niveaux à fusionner} \verb+);+. Par exemple, si le nombre vaut \verb+2+, alors cela renvoie :
	\begin{description}
		\item[résultat :] \verb+[1, 1, 1, 2, 3, 4, 5]+
	\end{description}

\section{L'objet Set}\markboth{}{L'objet Set}

Un \textbf{ensemble} permet de regrouper des données de différents types. Il est itérable. Les éléments sont mis dans l'ordre de leur insertion.
\begin{lstlisting}
	let ensemble = new Set();
\end{lstlisting}

\noindent ou

\begin{lstlisting}
	let ensemble = new Set(élements de l'ensemble);
\end{lstlisting}

\textbf{Attention !} Les valeurs placées doivent être uniques.

La propriété d'instance \verb+size+ permet de connaître le nombre d'éléments.
\begin{lstlisting}
	ensemble.size();
\end{lstlisting}

Les principales méthodes sont :
	\begin{itemize}
		\item \verb+ensemble.add(élément)+ qui permet d'ajouter un élément ;
		\item \verb+ensemble.delete(élément)+ qui permet de supprimer un élément ;
		\item \verb+ensemble.clear(élément)+ qui efface tous les éléments d'un ensemble ;
		\item \verb+ensemble.has(élément)+ qui vérifie si l'élément est présent dans l'ensemble ;
		\item \verb+ensemble.values()+ qui crée un objet itérable ;
		\item \verb+ensemble.keys()+ qui crée un objet itérable. Par exemple :
\begin{lstlisting}
	const iterValeurs = ensemble.values();
	document.write(interValeurs.next().value);
\end{lstlisting}
			\begin{description}
				\item[\textbf{N.B.}] Il n'y a pas de clés, donc \verb+values = keys+.
			\end{description}
		\item \verb+ensemble.entries()+ qui regroupe l'ensemble des valeurs sous la forme d'une table qui contient deux fois la valeur. Par exemple :
\begin{lstlisting}
	const toutesEntrees = ensemble.entries();
	for(const element of toutesEntres)
	{
		document.write(element + "<br>");
	}
\end{lstlisting}
	\end{itemize}

Pour visualiser tous les éléments de l'ensemble :
\begin{lstlisting}
	for(const element of ensemble)
	{
		document.write(element + "<br>");
	}
\end{lstlisting}

\noindent ou
\begin{lstlisting}
	ensemble.forEach(fonction à tester);
\end{lstlisting}

\textbf{N.B.} \verb+WeakSet+ permet de créer un ensemble dont les \textbf{objets} sont contenus avec des références faibles.

\section{L'objet Map}\markboth{}{L'objet Map}

L'objet \verb+Map+ regroupe une collection de données ayant une clé et une valeur.  Aucun clé n'est mise automatiquement. L'ordre est celui de l'insertion. La clé peut être de n'importe quel type.
\begin{lstlisting}
	let map = new Map();
\end{lstlisting}

La propriété d'instance \verb+size+ permet de connaître le nombre d'éléments
\begin{lstlisting}
	map.size;
\end{lstlisting}

Les méthodes d'instance sont :
	\begin{itemize}
		\item \verb+map.set(+ \textit{clé}, \textit{valeur} \verb+)+ pour ajouter un élément, ou
\begin{lstlisting}
	const map = new Map();
	map[clé 1] = valeur 1;
	map[clé 2] = valeur 2;
	etc.
\end{lstlisting}
		\item \verb+map.delete(+ \textit{clé} \verb+)+ pour supprimer l'élément à partir de sa clé
		\item \verb+map.clear()+ pour supprimer tous les éléments 
		\item \verb+map.has(clé)+ pour chercher une clé 
		\item \verb+map.get(clé)+ pour récupérer la valeur de la clé demandée 
		\item \verb+map.keys()+ pour itérer sur les clés à partir de la fonction \verb+next()+
		\item \verb+map.values()+ pour itérer sur les valeurs à partir de la fonction \verb+next()+
		\item \verb+map.entries+ pour livrer l'ensemble des valeurs sous la forme d'une tableau qui contient deux fois la valeur
		\item \verb+map.forEach(fonction à tester)+
	\end{itemize}

\textbf{N.B.} \verb+WeakMap+ représente une collection de paires clé-valeur dont les clés sont des \textbf{objets} et pour lesquels les références sont « faibles » et les valeurs, des valeurs quelconque.

\section{Les modules}\markboth{}{Les modules}

Le \textbf{module} est chargé après la page web. Le module ne se charge qu'\textbf{une} seule fois.

Pour faire fonctionner le module, il faut un protocole HTTP.
	\begin{description}
		\item[\textbf{N.B.}] Il faut télécharger \verb+NodeJS+.
	\end{description}

Sur la page web
\begin{lstlisting}
	<script type="module" src="main.js"></script>
	<script nomodule>
		<p>JavaScript n'est pas à jour.</p>
	</script>
\end{lstlisting}

Dans un fichier \verb+module.js+
\begin{lstlisting}
	export function hello()
	{
		return "hello";
	}
\end{lstlisting}

\noindent ou
\begin{lstlisting}
	function hello()
	{
		return "hello";
	}
	export{hello, ...}
\end{lstlisting}

Dans un fichier \verb+main.js+
\begin{lstlisting}
	import{hello, ...} from "./module.js";
\end{lstlisting}

\textbf{N.B.} On peut exporter des variables, des fonctions ou des objets, \textit{etc}.

\textbf{N.B.} Il est possible de renommer par sécurité la fonction exportée avec un \verb+as+.
\begin{lstlisting}
	export{hello as bonjour};
\end{lstlisting}

\noindent On l'appelle avec :
\begin{lstlisting}
	import{bonjour} from "./module.js";
\end{lstlisting}

\textbf{N.B.} Il est possible d'importer tous les modules dans un objet :
\begin{lstlisting}
	import * as ObjetANommer from "./module.js";
\end{lstlisting}

\section{Les closures}\markboth{}{Les closures}

Il est possible de protéger une variable en utilisant le système des \textbf{closures}.

Exemple d'un compteur
\begin{lstlisting}
	function compteur()
	{
		let i = 0;
		return function () {return i++;};
	}
\end{lstlisting}

\textbf{Rappel.} Une fonction fille a accès aux variables locales de sa fonction mère.

Pour exécuter la fonction fille anonyme retournée, il suffit de créer une variable :
\begin{lstlisting}
	let plusUn1 = compteur();
\end{lstlisting}

Chaque appel à la variable-fonction \verb+plusUn1+ incrémente la variable locale \verb+i+.

\textbf{N.B.} La déclaration d'une autre variable utilisant la même fonction créé une seconde incrémentation indépendante.
\begin{lstlisting}
	let plusUn2 = compteur();
\end{lstlisting}

\section{Les préférences du système client}\markboth{}{Les préférences du système client}

Chaque ordinateur client dispose de préférences liées à son choix de navigateur, sa résolution de l'écran et ses \textit{plug-in}.

\subsection{L'objet navigator}

Même si cela tend à s'homogénéiser, `JavaScript` est sensible au navigateur. L'interprétation du code d'un navigateur à l'autre peut être différente, même si cela devient de plus en plus rare.

Il s'agit de fait ici de pouvoir récupérer les principales informations du navigateur client afin d'adapter le code avec différentes conditions.

L'objet \verb+navigator+ indique ces choix \textit{via} des propriétés d'instance.
	\begin{itemize}
		\item [obsolète] \verb+navigator.appName+ fournit le nom du navigateur
		\item [obsolète] \verb+navigator.appVersion+ fournit la version du navigateur
		\item \verb+navigator.language+ fournit la langue du navigateur
		\item [obsolète] \verb+navigator.platform+ fournit les renseignements sur le système d'exploitation
		\item \verb+navigator.appCodeName+ fournit le nom de code du navigateur
		\item \verb+navigator.userAgent+ fournit \verb+appName+, \verb+appVersion+ et \verb+platform+ en un seul résultat
			\begin{description}
				\item[\textbf{N.B.}] Certaines propriétés ne marchent pas dans tous les navigateurs.
			\end{description}
		\item \verb+navigator.systemLanguage+ : langue du système d'exploitation
		\item \verb+navigator.connection+ fournit un objet contenant des informations quant à la connexion réseau de l'appareil.
		\item \verb+navigator.cookieEnabled+ renvoie un booléen indiquant si l'ajout d'un cookie sera pris en compte. 
		\item \verb+navigator.geolocation+ renvoie un objet \verb+Geolocation+ permettant l'accès à l'emplacement géographique de l'ordinateur.
		\item \verb+navigator.keyboard+ renvoie un objet \verb+Keyboard+ qui permet d'accéder à des fonctions pour récupérer des informations sur la disposition du clavier et la capture de touches du clavier. 
		\item \verb+navigator.onLine+ renvoie un booléen indiquant si le navigateur est en ligne.
			\begin{description}
				\item[\textbf{Attention !}] Il faut être hors ligne (et non hors connexion).
			\end{description}
		\item \verb+navigator.presentation+ renvoie à une référence de l'A.P.I.
		\item \verb+navigator.permissions+ renvoie un objet \verb+Permissions+ pouvant être utilisé pour demander où mettre à jour les informations de permissions pour les A.P.I. couvertes par l'\verb+API Permissions+. 
		\item \verb+navigator.serial+ renvoie un objet \verb+Serial+ représentant le point d'entrée vers l'\verb+API Web Serial+ qui permet de contrôler les ports séries.
		\item \verb+navigator.storage+ renvoie le sigleton \verb+StorageManager+ utilisé pour la persistance des permissions et la gestion du stockage disponible site par site et application par application.
		\item \verb+navigator.vendor+ renvoie le nom de l'éditeur du navigateur courant.
		\item \verb+navigator.webdriver+ indique si l'agent utilisateur est contrôlé par un outil automatisé.
		\item \verb+navigator.doNotTrack+ indique le choix de l'utilisateur fourni pour la préférence \verb+do-not-track+. Lorsque cette valeur vaut 1, l'application web ne devrait pas pister l'utilisateur.
		\item \verb+navigator.maxTouchPoints+ renvoie le nombre maximum de points de toucher simultanés possible par l'appareil courant.
		\item \verb+navigator.deviceMemory+ renvoie la quantité de mémoire de l'appareil, exprimée en gigaoctets. Cette valeur est une approximation calculée en prenant la plus proche puissance de 2, puis en divisant le résultat par 1024.
		\item \verb+navigator.mediaSession+ renvoie un objet \verb+MediaSession+ pouvant être utilisé afin de fournir des métadonnées utilisées par le navigateur pour présenter des informations sur le média en cours de lecture. 
		\item \verb+navigator.mediaCapabilities+ renvoie un objet \verb+MediaCapabilities+ qui peut exposer des informations sur le décodage et l'encodage d'un format donné.
		\item \verb+navigator.mediaDevices+ renvoie une référence vers un objet \verb+MediaDevices+ permettent d'obtenir des informations à propos des appareils médias disponibles, de déterminer les propriétés et contraintes prises en charge pour les médias sur cet agent utilisateur et cet ordinateur, de demander l'accès au média.
		\item \verb+navigator.locks+ renvoie un objet \verb+LockManager+ qui fournit des méthodes pour demander un nouvel objet \verb+Look+ ou s'enquérir d'un objet \verb+Lock+ existant.
		\item \verb+navigator.credentials+ renvoie l'interface \verb+CredentialsContainer+ qui expose des méthodes pour la demande d'informations d'authentification et qui notifie l'agent utilisateur lors d'événements particuliers tels que les connexions ou déconnexions.
		\item \verb+navigator.serviceWorker+ renvoie un objet \verb+ServiceWorkerContainer+ qui permet d'enregistrer, de supprimer, de mettre à jour ou de communiquer avec des objets \verb+ServiceWorker+ pour le document associé.
		\item \verb+navigator.xr+ renvoie un objet \verb+XRSystem+ qui représente le point d'entrée sur l'\verb+API WebXR+.
	\end{itemize}

\subsection{L'objet screen}

\verb+screen.height+ $\rightarrow$ hauteur de l'écran

\verb+screen.width+ $\rightarrow$ largeur de l'écran

\verb+screen.pixelDepth+ $\rightarrow$ profondeur de pixels (bits/px)

\verb+screen.colorHeight+ $\rightarrow$ profondeur de couleurs

\verb+screen.availHeight+ $\rightarrow$ hauteur disponible à l'écran

\verb+screen.availWidth+ $\rightarrow$ largeur disponible à l'écran

L'objet est complété par quelques propriétés d'instance de \verb+window+.
	\begin{itemize}
		\item \verb+screen.outerWidth+ $\rightarrow$ largeur de la fenêtre actuelle, y compris toutes les barres
		\item \verb+screen.outerHeight+ $\rightarrow$ hauteur de la fenêtre actuelle, y compris toutes les barres
		\item \verb+screen.innerWidth+ $\rightarrow$ largeur de la fenêtre actuelle, à l'exception de toutes les barres, c'est-à-dire la largeur de la fenêtre de \verb+document+
		\item \verb+screen.innerHeight+ $\rightarrow$ hauteur de la fenêtre actuelle, à l'exception de toutes les barres, c'est-à-dire la largeur de la fenêtre de \verb+document+
	\end{itemize}

\subsection{Les objets plugins}

L'installation du navigateur s'est accompagné de celle de toute une série de \textit{plug-in}.
	\begin{itemize}
		\item \verb+navigators.plugins.length+ livre le nombre de \textit{plug-in} installés.
		\item \verb+navigators.plugins[...].name+ livre le nom du \textit{plug-in} (de 0 à \ldots{}).
		\item \verb+navigators.plugins[...].filename+ livre le nom du fichier avec le chemin d'accès (de 0 à \ldots{}).
	\end{itemize}

\section{Le \textit{Document Object Model} (D.O.M.)}\markboth{}{Le \textit{Document Object Model} (D.O.M.)}

Le D.O.M. est séparé en trois parties :
	\begin{itemize}
		\item \textbf{le XML} ;
		\item \textbf{le HTML} ;
		\item \textbf{le c\oe{}ur est accessible par les deux}.
	\end{itemize}

Le D.O.M. est une interface, chargée dès l'ouverture de la page HTML. Il s'agit d'un arbre.

Dans le D.O.M. HTML, tout va être considéré comme un n\oe{}ud\footnote{En anglais : \textit{node}}. \verb+Node+ désigne tout objet contenu dans le D.O.M. :
	\begin{itemize}
		\item \verb+document HTML+
		\item \verb+elements HTML+
		\item \verb+attributes HTML+
		\item \verb+texts HTML+
	\end{itemize}

\noindent Il existe de fait plusieurs types de n\oe{}uds :
	\begin{itemize}
		\item \verb+ElementNode+
		\item \verb+AttributeNode+
		\item \verb+TextNode+
	\end{itemize}

Le D.O.M. HTML est construit comme une hiérarchie de n\oe{}uds (Fig. \ref{td3fig9}).

\begin{figure}[!h]
	\centering
	\includegraphics[width=12.5cm]{IMG/DOM.png}
	\caption{L'arborescence du D.O.M.}
	\label{td3fig9}
\end{figure}

\textbf{N.B.} Tous les navigateurs depuis quelques années ont le même D.O.M., ce qui facilite le codage en `JavaScript`.

\section{L'objet Document}\markboth{}{L'objet Document}

\subsection{Les propriétés d'affichage de l'objet document}

\verb+let doc = new Document();+ permet de créer un objet \verb+document+.

La première propriété d'affichage, largement utilisée, est \verb+document.write(...)+. Elle permet d'afficher dans le \verb+body+ à peu près tous les éléments HTML générés par `JavaScript`, à l'exception de certains éléments comme les images.

\subsubsection{Les accès directs aux éléments}

Le \verb+document+ contient un ensemble de n\oe{}uds, dont certains sont directement accessibles.

\verb+document.head+ renvoie à l'élément \verb+head+ du document courant.

\verb+document.title+ permet d'accéder ou de définir le titre du document courant.
\begin{lstlisting}
	let docTitre = document.title;
	document.title = "Nouveau titre";
\end{lstlisting}

\verb+document.body+ renvoie le n\oe{}ud \verb+body+ ou \verb+frameset+.
	\begin{itemize}
		\item Il est possible de modifier ses attributs.
			\begin{description}
				\item[] \verb+document.body.id+ permet de donner ou de modifier l'identifiant de \verb+body+.
			\end{description}
		\item Il est possible de modifier le corps lui-même.
			\begin{description}
				\item[] \verb+document.body.innerHTML = "..."+ permet de modifier le code HTML de \verb+body+.
				\item[\textbf{Attention !}] Même si \verb+body+ est modifiable, lui affecter une nouvelle valeur retire tous les éléments enfants du \verb+body+ existant.
			\end{description}
	\end{itemize}

Il existe un certain nombre de tables permettant de lister l'accès et de modifier certains éléments. Leur ordre suit leur insertion dans \verb+body+.
	\begin{itemize}
		\item La balise \verb+<a>+ gère les liens internes au document, les \textbf{ancres}, et les liens externes, les \textbf{liens} :
			\begin{itemize}
				\item[$\blacksquare$] [obsolète] [lecture seule] \verb+document.anchors+
				\item[$\blacksquare$] [lecture seule] \verb+document.links+
			\end{itemize}
		\noindent La propriété d'instance \verb+length+ permet d'obtenir la taille de la table.
			\begin{itemize}
				\item[$\blacksquare$] [obsolète] [lecture seule] \verb+document.anchors.length+
				\item[$\blacksquare$] [lecture seule] \verb+document.links.length+
			\end{itemize}
		\noindent Il en existe d'autres affectées aux éléments de la table : \verb+name+ et \verb+href+. Introduire un nouveau lien est simple. Il suffit d'utiliser :
			\begin{itemize}
				\item[$\blacksquare$] \verb+document.write("<a href=\"lien\" name=\"lien1\">nom du lien</a>");+
			\end{itemize}
		\noindent Le lien s'ajoute à la liste des \verb+anchors+ ou des \verb+links+. Cela permet de contourner la lecture seule des tables. Toutefois, il est possible de modifier les attributs d'un lien existant.
			\begin{itemize}
				\item[$\blacksquare$] \verb+document.links[0].href = "...";+
				\item[$\blacksquare$] \verb+document.links[0].name = "...";+
			\end{itemize}
		\noindent \textbf{N.B.} `JavaScript` ne trouve que les liens placés avant la balise \verb+<script>+.
		\item La balise \verb+<form>+ est accessible en lecture seule avec : \verb+document.forms[...]+.
		\item La balise \verb+<img>+ est accessible en lecture seule avec : \verb+document.images[...]+.
	\end{itemize}

\verb+document.activeElement+ renvoie l'objet \verb+Element+, c'est-à-dire à l'élément qui possède le focus, \verb+body+, ou \verb+null+ si aucun élément n'a le focus. Il contient uniquement les propriétés et méthodes communes à l'ensemble des éléments. Le focus détermine l'élément qui recevra les informations saisies. Il se différencie de la sélection, c'est-à-dire la partie actuellement surlignée dans le document.
	\begin{description}
		\item[\textbf{Attention !}] Pour accéder à la sélection courante, on peut utiliser la méthode \\ \verb+window.getSelection()+.
	\end{description}

\verb+document.documentElement+ renvoie l'objet \verb+Element+ correspondant à l'élément qui est un enfant direct du document. Cela fonctionne en lecture seule.

La plupart des propriétés de \verb+document+ sont quasiment toutes accessibles en \textbf{lecture seule}.
	\begin{itemize}
		\item \verb+document.characterSet+ renvoie le jeu de caractères utilisés par le document. Cela fonctionne en lecture seule.
		\item \verb+document.docType+ renvoie la définition type de document\footnote{En anglais : \textit{Document Type Definition} (D.T.D.)} du document courant. Cela fonctionne en lecture seule.
		\item \verb+document.fonts+ renvoie l'interface \verb+FontFaceSet+ pour le document courant.
		\item \verb+document.styleSheets+ renvoie un objet \verb+StyleSheetList+ contenant les objets \verb+CSSStyleSheet+ pour les feuilles de style CSS liées explicitement ou embarquées dans le document. Cela fonctionne en lecture seule.
		\item \verb+document.readyState+ renvoie à l'état de chargement du document. Cela fonctionne en lecture seule. Si le document est chargé, la valeur renvoyée est \verb+loading+.
		\item \verb+document.hidden+ renvoie une valeur booléenne qui indique si la page est considérée masquée ou non. Cela fonctionne en lecture seule.
		\item \verb+document.domain+ retourne ou définit la partie de l'origine du document courant, telle qu'utilisée par la politique d'origine (protocole, port et hôtes identiques).
		\item \verb+document.URL+ renvoie l'emplacement du document sous la forme d'une chaîne de caractères. Cela fonctionne en lecture seule.
		\item \verb+document.URI+ renvoie l'emplacement du document sous la forme d'une chaîne de caractères. Cela fonctionne en lecture seule.
		\item \verb+document.location+ renvoie l'U.R.I. du document courant. Cela fonctionne en lecture seule.
		\item \verb+document.referrer+ renvoie l'U.R.I. de la page qui a lié vers cette page. Cela fonctionne en lecture seule.
		\item \verb+document.children+ renvoie les éléments enfants pour le document courant. Cela fonctionne en lecture seule.
		\item \verb+document.childElementCount+ renvoie le nombre d'éléments enfants pour le document courant. Cela fonctionne en lecture seule.
	\end{itemize}

Il existe de nombreuses propriétés et méthodes obsolètes.
	\begin{itemize}
		\item [obsolète] \verb+document.height+ renvoie la hauteur du document.
		\item [obsolète] \verb+document.width+ renvoie la largeur du document.
		\item [obsolète] \verb+document.fullscreen+ renvoie un booléen indiquant si l'écran est en mode « plein écran ».
		\item [obsolète] \verb+document.linkColor(...)+ définit la couleur des liens non visités
		\item [obsolète] \verb+document.vlinkColor(...)+ définit la couleur des liens visités.
		\item [obsolète] \verb+document.alinkColor(...)+ définit la couleur des liens lors de leur activation.
		\item [obsolète] \verb+document.bgColor = "black"+ permet de contrôler la couleur de fond du \verb+body+.
			\begin{description}
				\item[\textbf{N.B.}] Les méthodes hexadécimales vues auparavant permettant de gérer les codes couleurs des fonds, notamment avec la méthode \verb+toString(16)+.
			\end{description}
		\item[\textbf{N.B.}] L'obsolescence de ces propriétés et méthodes s'explique par la généralisation de l'usage des feuilles et codes C.S.S.
	\end{itemize}

\subsubsection{L'accession aux éléments par les identifiants}

Pour bien comprendre, on va utiliser la page HTML suivante jusqu'à la fin de la partie.
\begin{lstlisting}
	<!DOCTYPE html>
	<html lang="fr">
		<head>
			<meta charset="utf-8">
			<title>Cours de JavaScript</title>
		</head>
		<body>
			<h1 id="titrePage">Gestion de l'objet document avec <span style="font-style:italic;">JavaScript</span></h1>
			<div>
				<p id="para1" class="para">Premier paragraphe</p>
				<p id="para2" class="para">Deuxième paragraphe</p>
			</div>
			<script src="..."></script>
		</body>
	</html>
\end{lstlisting}

Pour accéder à l'identifiant \verb+"titrePage"+, il suffit d'écrire :
\begin{lstlisting}
	let titre = document.getElementById("titrePage");
\end{lstlisting}

\subsubsection{L'accession par les balises}

\begin{lstlisting}
	let tableauParagraphe = document.getElementsByTagName("p");
\end{lstlisting}

\noindent livre tous les éléments de la balise \verb+<p>+. La méthode renvoie une table.

\subsubsection{L'accession par les classes}

\begin{lstlisting}
	let tableauParagraphe = document.getElementsByClassName("para");
\end{lstlisting}

\noindent livre tous les éléments marqués par l'attribut classe \verb+"para"+. La méthode renvoie une table.

\subsubsection{L'accession par les sélecteurs CSS}

\begin{lstlisting}
	let p1 = document.querySelector("p");
\end{lstlisting}

\noindent affiche le premier élément \verb+<p>+ trouvé.

\begin{lstlisting}
	let paragraphes = document.querySelectorAll(".para");
\end{lstlisting}

\noindent livre tous les éléments de la classe \verb+"para"+. La méthode renvoie une table.

\subsubsection{L'accession par la propriété innerHTML}

\verb+innerHTML+ permet de récupérer les informations contenues dans un élément HTML, entre deux balises.
\begin{lstlisting}
	let titre = document.getElementById("titrePage").innerHTML;
\end{lstlisting}

\begin{description}
	\item[résultat :] \verb+Gestion de l'objet document de JavaScript+ (avec italique)
	\item[\textbf{Attention !}] \verb+innerHTML+ est une propriété de \verb+Element+.
	\item[\textbf{N.B.}] \verb+Internet Explorer+ dispose de la propriété \verb+innerText+.
\end{description}

\subsubsection*{L'accession par la propriété textContent}

\verb+textContent+ permet de récupérer le texte, et uniquement le texte, contenu entre deux balises.
\begin{lstlisting}
	let titre = document.getElementById("titrePage").innerHTML;
\end{lstlisting}

\begin{description}
	\item[résultat :] \verb+Gestion de l'objet document de JavaScript+ (sans italique)
	\item[\textbf{Attention !}] \verb+textContent+ est une propriété de \verb+Element+.
	\item[\textbf{N.B.}] Depuis sa version 9, \verb+Internet Explorer+ accepte la propriété \verb+textContent+ qui récupère le texte sans balises.
\end{description}

\subsection{La modification du contenu HTML}

\textbf{N.B.} On utilise toujours la même page HTML.

\subsubsection{Par la propriété innerHTML ou textContent}

\begin{lstlisting}
	document.getElementById("titrePage").innerHTML = "Gestion de l'objet document de JavaScript-v2";
\end{lstlisting}

\noindent ou

\begin{lstlisting}
	document.getElementById("titrePage").textContent = "Gestion de l'objet document de JavaScript-v2";
\end{lstlisting}

\subsubsection{Par l'attribut d'une balise}

\begin{lstlisting}
	let titre = document.getElementById("titrePage");
	titre.id = "titreV2";
\end{lstlisting}

\noindent Dans ce cas, les attributs sont \textbf{directement} accessibles.

\textbf{N.B.} On peut utiliser \verb+getAttribute()+.
\begin{lstlisting}
	titre.getAttribute("id");
\end{lstlisting}

\noindent puis \verb+setAttribute()+
\begin{lstlisting}
	titre.setAttribute("id", valeur de l'attribut);
\end{lstlisting}

\noindent Les méthodes sont celles de l'objet \verb+Element+.

\textbf{Attention !} Les \verb+class+ dans les balises sont modifiées par un \verb+className+, afin de ne pas confondre avec l'objet `JavaScript` du même nom.
\begin{lstlisting}
	let tableauParagraphe = document.getElementsByTagName("p");
	tableauParagraphe[0].className = "para1";
\end{lstlisting}

\textbf{N.B.} On peut créer dans n'importe quelle balise un attribut \verb+data-+\textit{quelque chose}\verb+=...+. Grâce à la propriété \verb+dataset+, on peut récupérer l'attribut créé.
	\begin{description}
		\item[] \textit{élément}\verb+.dataset.+\textit{quelque chose};
	\end{description}

\subsubsection{Par les propriétés CSS}

\begin{lstlisting}
	titre.style.color = "red";
	titre.style.fontFamily = "Arial";
\end{lstlisting}

Voici la liste non exhaustive des propriétés C.S.S. accessibles en `JavaScript` :
	\begin{itemize}
		\item \verb+background+
		\item \verb+backgroundAttachment+
		\item \verb+backgroundColor+
		\item \verb+backgroundImage+
		\item \verb+backgroundPosition+
		\item \verb+backgroundPositionX+
		\item \verb+backgroundPositionY+
		\item \verb+backgroundRepeat+
		\item \verb+border+
		\item \verb+borderBottom+
		\item \verb+borderBottomColor+
		\item \verb+borderBottomStyle+
		\item \verb+borderBottomWidth+
		\item \verb+borderColor+
		\item \verb+borderLeft+
		\item \verb+borderLeftColor+
		\item \verb+borderLeftStyle+
		\item \verb+borderLeftWidth+
		\item \verb+borderRight+
		\item \verb+borderRightColor+
		\item \verb+borderRightStyle+
		\item \verb+borderRightWidth+
		\item \verb+borderStyle+
		\item \verb+borderTop+
		\item \verb+borderTopColor+
		\item \verb+borderTopStyle+
		\item \verb+borderTopWidth+
		\item \verb+clear+
		\item \verb+color+
		\item \verb+cssText+
		\item \verb+cursor+
		\item \verb+display+
		\item \verb+filter+
		\item \verb+font+
		\item \verb+fontFamily+
		\item \verb+fontSize+
		\item \verb+fontStyle+
		\item \verb+fontVariant+
		\item \verb+fontWeight+
		\item \verb+height+
		\item \verb+left+
		\item \verb+letterSpacing+
		\item \verb+lineHeight+
		\item \verb+listStyle+
		\item \verb+listStyleImage+
		\item \verb+listStylePosition+
		\item \verb+listStyleType+
		\item \verb+margin+
		\item \verb+marginBottom+
		\item \verb+marginLeft+
		\item \verb+marginRight+
		\item \verb+marginTop+
		\item \verb+paddingBottom+
		\item \verb+paddingLeft+
		\item \verb+paddingRight+
		\item \verb+paddingTop+
		\item \verb+pageBreakAfter+
		\item \verb+pageBreakBefore+
		\item \verb+pixelHeight+
		\item \verb+pixelLeft+
		\item \verb+pixelTop+
		\item \verb+pixelWidth+
		\item \verb+posHeight+
		\item \verb+position+
		\item \verb+posLeft+
		\item \verb+posTop+
		\item \verb+posWidth+
		\item \verb+styleFloat+
		\item \verb+textAlign+
		\item \verb+textDecoration+
		\item \verb+textIndent+
		\item \verb+textTransform+
		\item \verb+top+
		\item \verb+verticalAlign+
		\item \verb+visibility+
		\item \verb+width+
		\item \verb+whiteSpace+
		\item \verb+zindex+
	\end{itemize}

Pour récupérer un style existant, on utilise \verb+getComputedStyle(...)+ ou \verb+currentStyle+.
\begin{lstlisting}
	getColor = getComputedStyle(titre, null).color;
\end{lstlisting}

\textbf{Attention !} \verb+null+ est obligatoire.

\textbf{N.B.} Avant la version 9 d'\verb+Internet Explorer+, on devait utiliser :
\begin{lstlisting}
	getColor = titre.currentStyle.color;
\end{lstlisting}

Certaines valeurs de positionnement ou de taille des éléments utilisent les propriétés \verb+offset+ :
	\begin{itemize}
		\item \verb+offsetWidth+
		\item \verb+offsetHeight+
		\item \verb+offsetLeft+
		\item \verb+offsetTop+
		\item \verb+offsetParent+
	\end{itemize}

\noindent qui contient l'objet de l'élément parent par rapport auquel est positionné l'élément courant.

On peut ajouter un style à l'élément sélectionné.
\begin{lstlisting}
	const element = document.getElementById("id");
	element.classList.add("classe CSS");
\end{lstlisting}

\textbf{N.B.} On peut mettre plusieurs styles en les séparant par une virgule.

On peut supprimer un style à l'élément sélectionné.
\begin{lstlisting}
	element.classList.remove("classe CSS");
\end{lstlisting}

On peut vérifier l'existence d'une classe C.S.S.
\begin{lstlisting}
	element.classList.contains("classe CSS");
\end{lstlisting}

On peut ajouter ou retirer une classe C.S.S.
\begin{lstlisting}
	element.classList.toggle("classe CSS");
\end{lstlisting}

On peut gérer le \verb+padding+ de l'écran client (largeur et hauteur).
\begin{lstlisting}
	element.clientWidth;
	element.clientHeight;
\end{lstlisting}

On peut gérer le \verb+border+ (épaisseur).
\begin{lstlisting}
	element.clientLeft;
	element.clientTop;
\end{lstlisting}

\subsection{L'ajout et l'insertion d'éléments HTML}

\subsubsection{Création d'un nouvel élément en fin de n\oe{}ud}

\begin{lstlisting}
	let nouveauParagraphe = document.createElement("p");
\end{lstlisting}

\noindent crée un élément \verb+<p>+.

\begin{lstlisting}
	nouveauParagraphe.id = "paraV2";
	let texteNouveauParagraphe = document.createTextNode("Paragraphe inséré");
\end{lstlisting}

\noindent crée le contenu textuel de la balise \verb+<p>+.

\begin{lstlisting}
	nouveauParagraphe.appendChild(texteNouveauParagraphe);
\end{lstlisting}

\noindent insère dans le dernier élément enfant ciblé, ici le texte dans le paragraphe.

\begin{lstlisting}
	document.body.appendChild(nouveauParagraphe)
\end{lstlisting}

\noindent insère la balise \verb+<p>+ et son contenu à la fin du \verb+body+.

\subsubsection{Création d'un nouvel élément placé avant un élément identifié}

\verb+insertBefore(+ \textit{objet à insérer}, \textit{objet avec identifiant devant lequel il est inséré} \verb+)+ L'objet avec identifiant devant lequel il est inséré, doit être obtenu par un \verb+getElementById+, \textbf{et seulement par cette méthode}.

\textbf{Attention !} \verb+insertAfter+ n'existe pas !

\begin{lstlisting}
	let dernierParagraphe = document.getElementById("para2");
	let noeud = dernierParagraphe.parentNode; // ou childNodes, firstChild, lastChild, nextSibling
	let nouveauParagraphe = document.createElement("p");
	let texteNouveauParagraphe = document.createTextNode("Troisième paragraphe");
	nouveauParagraphe.appendChild(texteNouveauParagraphe);
	noeud.insertBefore(nouveauParagraphe, dernierParagraphe);
	nouveauParagraphe.id = "paragraphe4";
	nouveauParagraphe.className = "paragraphe";
	nouveauParagraphe.style = "";
\end{lstlisting}

\subsection{La modification ou la suppression des éléments HTML}

\subsubsection{Suppression d'un élément}

\begin{lstlisting}
	let parent = document.body;
	parent.removeChild(nouveauParagraphe);
\end{lstlisting}

\subsubsection{Suppression d'un élément (ou d'un n\oe{}ud)}

\begin{lstlisting}
	let nouveauTitre = document.create("h1");
	nouveauTitre.id = "titreV2";
	nouveauTitre.innerHTML = "Gestion de l'objet document de JavaScript - version 2";
	parent.replaceChild(nouveauTitre, titre);
\end{lstlisting}

\noindent Avec \verb+replaceChild+, on place en premier la modification et en second l'ancien élément identifié par son \verb+id+.

\subsection{La navigation dans le D.O.M. avec les n\oe{}uds}

\subsubsection{parentNode}

\begin{lstlisting}
	let paragraphe = document.querySelector(".para");
	let div = paragraphe.parentNode;
\end{lstlisting}

\noindent détermine la balise parente avant le premier paragraphe, ici \verb+<div>+. Désormais, la variable \verb+div+ matérialise la balise en `JavaScript`. On peut en modifier ses attributs par exemple :

\begin{lstlisting}
	div.style.color = "darkgreen";
	div.style.background = "yellow";
\end{lstlisting}

\subsubsection{childNodes et nodeValue}

\begin{lstlisting}
	let corps = document.body;
	let div = corps.childNodes[3];
\end{lstlisting}

\noindent \verb+childNodes+ compte le nombre de n\oe{}uds et en fait une table accessible.
	\begin{description}
		\item[\textbf{Attention !}] Tout espace dans le \textbf{code HTML} est compté comme un enfant, un n\oe{}ud textuel, ici 3.
		\item[\textbf{N.B.}] Comme toute table, le premier élément est 0.
	\end{description}

\begin{lstlisting}
	let paragraphe1 = div.childNodes[1];
	let paragraphe2 = div.childNodes[3];
	let texte1 =  paragraphe1.childNodes[0].nodeValue;
\end{lstlisting}

\noindent permet d'obtenir le texte contenu dans le premier paragraphe. \verb+nodeValue+ intervient toujours sur un indice 0.

\begin{lstlisting}
	let texte2 = paragraphe2.childNodes[0].nodeValue;
\end{lstlisting}

\subsubsection{nodeType et nodeName}

Le type de n\oe{}uds retourne un nombre (propriété).
	\begin{itemize}
		\item $ 1 \longrightarrow $ n\oe{}ud d'élément
		\item $ 2 \longrightarrow $ n\oe{}ud d'attribut
		\item $ 3 \longrightarrow $ n\oe{}ud de texte
		\item $ 4 \longrightarrow $ n\oe{}ud pour passage CDATA (cf. XML)
		\item $ 5 \longrightarrow $ n\oe{}ud pour référence d'entité
		\item $ 6 \longrightarrow $ n\oe{}ud pour entité
		\item $ 7 \longrightarrow $ n\oe{}ud pour instruction de traitement
		\item $ 8 \longrightarrow $ n\oe{}ud pour commentaire
		\item $ 9 \longrightarrow $ n\oe{}ud document
		\item $ 10 \longrightarrow $ n\oe{}ud type de document
		\item $ 11 \longrightarrow $ n\oe{}ud de fragment de document
		\item $ 12 \longrightarrow $ n\oe{}ud pour notation
	\end{itemize}

\subsubsection{cloneNode()}

\verb+cloneNode(...)+ requiert un paramètre booléen : \verb+true+ si on désire cloner un n\oe{}ud avec ses enfants ; \verb+false+ si on désire cloner un n\oe{}ud sans ses enfants.

\textbf{N.B.} Il faut insérer le n\oe{}ud cloné dans le document.
	\begin{description}
		\item[] \textit{élément à cloner}\verb+.parentNode.appendChild(+ \textit{élément à cloner} \verb+);+
	\end{description}

\subsubsection{hasChildNodes()}

\verb+hasChildNodes()+ renvoie un booléen qui vérifie s'il existe des n\oe{}uds.
	\begin{description}
		\item[] \textit{élément}\verb+.hasChildNodes();+
	\end{description}

\subsubsection{firstChild et lastChild}

\begin{lstlisting}
	let premierEnfant = paragraphe2.firstChild;
	let dernierEnfant = paragraphe2.lastChild;
\end{lstlisting}

\noindent Le \verb+premierEnfant+ est un texte, le \verb+dernierEnfant+ est un code HTML.

\textbf{N.B.} Pour que cela marche, il faut les balises \verb+<span>+ (ici, mais toute autre balise est valable).

\verb+data+ est une propriété qui permet d'obtenir la valeur du n\oe{}ud.
\begin{lstlisting}
	premierEnfant.data
	dernierEnfant.data
\end{lstlisting}

\subsubsection{nextSibling}

\verb+nextSibling+ permet un accès par les n\oe{}uds frères ciblant le n\oe{}ud voulu. De même, tout espace dans le \textbf{code HTML} est compté. Il faut faire attention aux n\oe{}uds vides.

\begin{lstlisting}
	let div = titre.nextSibling.nextSibling;
\end{lstlisting}

\noindent À partir du titre, identifié par \verb+titre+, il existe un espace, puis la balise \verb+<div>+.

\begin{lstlisting}
	div.innerHTML = "<p>Troisième paragraphe</p>"
\end{lstlisting}

\noindent Le contenu de \verb+<div>+ est alors entièrement modifié.

\textbf{N.B.} Il existe également la propriété \verb+previousSibling+ pour accéder aux n\oe{}uds frères précédents.

\vspace{2cm}

Les n\oe{}uds vont rarement servir, mais cela reste utile à connaître.

\subsection{Le traitement des images}

Dans le document, toute image est numérotée dans son ordre d'insertion à partir de l'indice 0.

Pour récupérer une image, on écrit :
\begin{lstlisting}
	let img = document.images[0];
\end{lstlisting}

\noindent La récupération s'effectue en lecture seule. Toutefois, les propriétés d'instance de l'image choisie ne le sont pas.
	\begin{itemize}
		\item \verb+img.src+ permet de changer l'image par son nouvel U.R.L.
		\item \verb+img.width+ gère la largeur en pixels.
		\item \verb+img.height+ gère la hauteur en pixels. 
		\item \verb+img.complete+ renvoie un booléen indiquant si l'image est entièrement chargée.
		\item \verb+img.border+ contrôle la taille de la bordure externe.
		\item \verb+img.name+ contrôle le nom de l'image.
	\end{itemize}

Il est possible pour `JavaScript` de créer un objet \verb+Image+ si l'image n'a pas été pré-créée.
\begin{lstlisting}
	let img = new Image(largeur, hauteur);
	img.src = nom de l'U.R.L.;
	img.name = nom de l'image;
	img.border = 1;
\end{lstlisting}

\noindent L'image est créée, mais pas insérée dans le \verb+body+. Pour y parvenir, on utilise la méthode \verb+appendChild+ ou \verb+insertBefore+.
\begin{lstlisting}
	document.body.appendChild(img);
\end{lstlisting}

\noindent L'image est insérée, ici, en fin du \verb+body+.

\subsection{Le traitement des cookies}

Les cookies permettent de stocker des données temporaires sur le disque dur de l'utilisateur. Il s'agit d'enregistrer ses préférences afin de lui offrir une navigation personnalisée. Bien que les cookies disposent d'une date d'expiration, il est fortement déconseillé d'y stocker des données sensibles. Les cookies sont exploités par le protocole ou le langage du serveur web afin de garantir leur transfert. Toutefois, `JavaScript` peut enregistrer ou lire les cookies rattachés à une page web ou à un site entier.

Sur le navigateur \verb+FireFox+ en mode \verb+Développement web+, les cookies sont stockés dans l'onglet \verb+Stockage+. Ils sont rangés par pages et par ordre de création.

Un cookie dispose de plusieurs attributs :
	\begin{itemize}
		\item un nom spécifique servant d'identifiant = la valeur rattachée à ce nom
		\item \verb+expires=+ une date d'expiration de la forme suivante :
\begin{lstlisting}
	Mon, 03 Oct 2022 00:00:00 UTC
\end{lstlisting}
			\begin{description}
				\item[\textbf{N.B.}] S'il n'existe pas de date d'expiration, la durée de vie du cookie est limitée à la session actuelle.
			\end{description}
		\item \verb+domain=+ le nom du site
		\item \verb+path=+ le chemin d'accès utilisant le cookie
			\begin{description}
				\item[\textbf{N.B.}] En général, on met \verb+/+ qui informe le navigateur de le placer dans le dossier temporaire \textit{ad hoc} et que le cookie est valable sur tout le site.
			\end{description}
		\item \verb+samesite=+ spécifie l'usage du cookie.
			\begin{itemize}
				\item[$\blacksquare$] \verb+samesite=none+ indique explicitement qu'aucune restriction ne sera appliquée. Le cookie sera envoyé dans toutes les requêtes.
				\item[$\blacksquare$] \verb+samesite=strict+ empêche le cookie d'être envoyé par le navigateur au site cible dans tous les contextes de navigation inter-site, même lorsqu'il suit un lien régulier.
				\item[$\blacksquare$] \verb+samesite=lax+ est la valeur par défaut des navigateurs récents. Le cookie pourra être utilisé pour toutes les requêtes d'un même site et les demandes de type \verb+GET+. Cela est suffisant pour le suivi des utilisateurs. L'option permet d'éviter les attaques par falsification de requêtes inter-sites.
			\end{itemize}
		\item \verb+secure+ indique que le cookie n'est transmis qu'en protocole HTTPS. Il s'agit d'un attribut sans valeur à renseigner.
		\item \verb+HttpOnly+ verrouille le langage au HTML.
		\item \verb+comment=+ indique un commentaire sur le cookie.
		\item \verb+sessionId=+ précise le nom de la session valable.
		\item \verb+partitioned+ indique que le cookie doit être stocké à l'aide d'un stockage partitionné.
	\end{itemize}

\textbf{Tous} les attributs de cookies sont optionnels. L'identifiant doit être explicite afin de bien identifier la valeur associée.

Les cookies sont enregistrés par \verb+document.cookie+ de manière très simple par un \verb+string+ :
\begin{lstlisting}
	document.cookie = "id=20220923;expires=Mon,03 Oct 2022 00:00:00UTC;path=.";
\end{lstlisting}

\noindent Les cookies suivants s'enregistrent de la même manière :
\begin{lstlisting}
	document.cookie = "utilisateur=Maxime Forriez;expires=Mon,03 Oct 2022 00:00:00UTC;path=.";
	document.cookie = "dateDeNaissance=27/06/1983;expires=Mon,03 Oct 2022 00:00:00UTC;path=.";
\end{lstlisting}

Pour afficher les cookies de manière brute, il suffit d'écrire :
\begin{lstlisting}
	document.write(escape(document.cookie));
\end{lstlisting}

\textbf{N.B.} \verb+escape(string)+ supprime tous les espaces, tandis que \verb+unescape(string)+ permet d'inclure des virgules, des points-virgules, des espaces, des sauts de lignes dans le cookies.

\textbf{N.B.} Seuls l'identifiant et sa valeur s'affichent.

Pour compter le nombre de cookies, on utilise \verb+length+.
\begin{lstlisting}
	document.cookie.length
\end{lstlisting}

\verb+document.cookie+ est une chaîne de caractères séparant les cookies avec un point-virgule, et les identifiants et les valeurs sont séparés par un égal.
	\begin{description}
		\item[\textbf{N.B.}] Il est facile de créer un table en séparant d'abord \verb+split(",")+, puis avec \verb+split("=")+.
	\end{description}

\textbf{N.B.} Lors de leur création, il est plus simple de gérer les dates automatiquement avec l'objet \verb+Date+ de \verb+§JavaScript+.

Pour supprimer un cookie, il faut le recréer avec le même identifiant vide et une date d'expiration passée, en général, on choisit le point de référence du temps universel.

Voici un exemple de fonctions pour gérer les cookies.
\begin{lstlisting}
	function fabriquerUnCookie(nomCookie, valeurCookie, nbJour)
	{
		if(navigator.cookieEnabled == true)
		{
			let date = Date();
			//Enlever la partie illisible pour l'utilisation des propriétés et méthodes de Date
			let dateCor = date.substring(0,28);
			//Création d'une date au bon format de traitement
			date = new Date(dateCor);
			date.setDate(date.getDate() + nbJour);
			document.cookie =  nomCookie + " = " + valeurCookie + ";expires=" + date + ";path=/;samesite=lax;"
		}
		else
		{
			console.log("Votre navigateur ne supporte pas les cookies.");
		}
	}
\end{lstlisting}

\begin{lstlisting}
	function supprimerUnCookie(nomCookie)
	{
		document.cookie = nomCookie + "=; expires=" + "01 Jan 1970 00:00:00 UTC;path=/";
		console.log("Le cookie a été supprimé !");
	}
\end{lstlisting}

\begin{lstlisting}
	function lireTousLesCookies()
	{
		if(navigator.cookieEnabled == true)
		{
			let cookies = document.cookie.split(";");
			if(document.cookie != "")
			{
				for(let element in cookie)
				{
					let ligneCookie = cookies[element].split("=");
					document.write(ligneCookie[0] + " = " + ligneCookie[1] + "<br>");
				}
			}
			else
			{
				console.log("Aucun cookie n'a été enregistré.");
			}
		}
		else
		{
			console.log("Votre navigateur ne supporte pas les cookies.");
		}
	}
\end{lstlisting}

\begin{lstlisting}
	function lireTableau()
	{
		if(navigator.cookieEnabled == true)
		{
			let cookies = document.cookie.split(";");
			let tableauNomsCookies =  new Array(cookies.length);
			let tableauValeursCookies =  new Array(cookies.length);
			if(document.cookie != "")
			{
				for(let element in cookies)
				{
					let ligneCookie = cookies[element];split("=");
					tableauNomsCookies[element] = ligneCookie[0];
					tableauValeursCookies[element] = ligneCookie[1];
				}
				let tableauCookie = new Array();
				for(let element in tableauNomsCookies)
				{
					tableauCookie.push([tableauNomsCookies[element].trim(), tableauValeursCookies[element].trim()])
				}
				return tableauCookie;
			}
			else
			{
				console.log("Aucun cookie n'a été enregistré.");
			}
		}
		else
		{
		console.log("Votre navigateur ne supporte pas les cookies.");
		}
	}
\end{lstlisting}

\begin{lstlisting}
	function lireUnCookie(nomCookie)
	{
		if(navigatorr.cookieEnabled == true)
		{
			let tableauCookie = lireTableau();
			if(document.cookie != "")
			{
				for(let element in tableauCookie)
				{
					if(tableauCookie[element][0] == nomCookie)
					{
						return tableauCookie[element][1];
						break;
					}
					else
					{
						continue;
					}
				}
			}
			else
			{
				console.log("Aucun cookie n'a été enregistré.");
			}
		}
		else
		{
			console.log("Votre navigateur ne supporte pas les cookies."):
		}
	}
\end{lstlisting}

\subsection{Les formulaires}

Tout formulaire \verb+<form> ... </form>+ a ses éléments listés dans une table : \\ \verb+document.forms+ qui donne accès aux éléments en \textbf{lecture seule}.
	\begin{description}
		\item[\textbf{Attention !}] Une même page peut contenir plusieurs formulaires qui sont enregistrés dans la même base : \verb+forms[0]+ premier formulaire, \textit{etc}.
	\end{description}

`JavaScript` permet d'accéder à toutes les propriétés du formulaire et de les modifier.
	\begin{itemize}
		\item \verb+forms[0].name+ renvoie le nom du formulaire.
		\item \verb+forms[0].length+ ou \verb+forms.elements.length+ renvoie le nombre d'éléments dans le formulaire.
		\item \verb+forms[0].action+ renvoie l'U.R.L. de transmission.
		\item \verb+forms[0].method+ définit le protocole d'envoi : \verb+"get"+ ou \verb+"post"+. 
		\item \verb+forms[0].enctype+ définit l'encodage de l'envoi du formulaire.
		\item \verb+forms[0].autocomplete+ définit l'autocomplétion, et accepte deux valeurs : \verb+"on"+ ou \verb+"off"+.
		\item \verb+forms[0].acceptCharset+ définit l'encodage du serveur vers lequel est envoyé le formulaire.
		\item \verb+forms[0].novalidate+ accepte deux valeurs : \verb+"novalidate"+ ou \verb+""+.
		\item \verb+forms[0].target+ définit la fenêtre affichant le résultat du formulaire.
	\end{itemize}

\verb+forms+ dispose de deux méthodes.
	\begin{itemize}
		\item \verb+forms[0].reset()+ efface tous les saisies du formulaire
		\item \verb+forms[0].submit()+ transmet le formulaire sous la forme de courriel.
	\end{itemize}

\vspace{2cm}

Tous les éléments contenus dans un \verb+forms+ peuvent être appelé par \verb+elements+. Il s'agit d'une table regroupant tous les éléments du formulaire par ordre d'apparition. Il existe plusieurs propriétés statiques partagées par tous les éléments :
\begin{lstlisting}
	forms[0].elements[0].type
	forms[0].elements[0].name
	forms[0].elements[0].value
\end{lstlisting}

\noindent En fonction des types d'éléments, il en existe d'autres.
	\begin{itemize}
		\item Pour \verb+<input type="text">+ ou \verb+<input type="password">+, il existe \verb+.size+.
		\item Pour \verb+<input type="checkbox">+ ou \verb+<input type="radio">+, il existe \verb+.checked+ qui renvoie un booléen.
		\item Pour \verb+<select>+ ou \verb+<select multiple>+, il existe :
			\begin{itemize}
				\item[$\blacksquare$] \verb+.options[...].selected+ qui renvoie un booléen ;
				\item[$\blacksquare$] \verb+.options.length+ qui renvoie le nombre d'options possibles ;
				\item[$\blacksquare$] \verb+.options[...].disabled+ qui renvoie un booléen.
			\end{itemize}
		\item Pour \verb+>textarea>+, il existe :
			\begin{itemize}
				\item[$\blacksquare$] \verb+.rows+ ;
				\item[$\blacksquare$] \verb+.cols+.
			\end{itemize}
	\end{itemize}

\textbf{N.B.} La rédaction des formulaires HTML change en permanence. Il convient de se tenir informé sur les évolutions du langage.

\textbf{N.B.} Les expressions régulières permettent de vérifier côté client que les données saisies sont correctes. Toutefois, il convient de valider les données côté serveur en \verb+PHP+, car le client peut désactiver le `JavaScript` sur son navigateur.

\textbf{N.B.} La propriété \verb+.validity.valueMissing+ indique si la donnée a été saisie. Elle est associée à \verb+Event.preventDefault()+ pour indiquer l'erreur de saisie et stopper l'envoi du formulaire.

\textbf{N.B.} Il est possible de remettre à zéro le formulaire avec :
\begin{lstlisting}
	for(let i = 0 ; i < document.forms[0].elements.length ; i++)
	{
		if(document.forms[0].elements[i].type == "text")
		{
			document.forms[0].elements[i].value = "";
		}
	}
\end{lstlisting}

\section{L'objet window}\markboth{}{L'objet window}

L'objet \verb+window+ est également appelé le \textit{Browser Object Model}. Il contient les objets suivants :
	\begin{itemize}
		\item \verb+document+ ;
		\item \verb+screen+ ;
		\item \verb+navigator+ ;
		\item \verb+history+ ;
		\item \verb+location+ ;
		\item \textit{etc}.
	\end{itemize}

Le B.O.M. permet d'accéder au navigateur. \textbf{Il n'existe pas de standard B.O.M.}

L'objet \verb+window+ désigne la fenêtre du navigateur contenant un D.O.M. La propriété \verb+document+ pointe vers celui qui est chargé dans ladite fenêtre. Ainsi
\begin{lstlisting}
	window.document = document
\end{lstlisting}

\noindent Une fenêtre pour un document donné peut être obtenu en utilisant la propriété \textbf{obsolète}.
\begin{lstlisting}
	document.defaultView
\end{lstlisting}

L'objet \verb+window+ est \textbf{implicite}. Il n'a pas besoin de le mentionner pour en utiliser les propriétés et les méthodes.
\begin{lstlisting}
	window.alert() = alert()
	etc.
\end{lstlisting}

\subsection{La création d'une fenêtre}

\verb+window.open(...)+ ouvre une nouvelle fenêtre dans le navigateur.
	\begin{description}
		\item[\textbf{Attention !}] Certains navigateurs comme \verb+FireFox+ bloque l'ouverture de nouvelles fenêtres, mais ils peuvent orienter l'action vers l'ouverture d'un nouvel onglet au sein de la même fenêtre.
	\end{description}

\verb+window.close(...)+ ferme une fenêtre.

La méthode \verb+window.open(...)+ permet de créer une fenêtre sans faire appel à une page existante en utilisant pleinement l'objet \verb+window+.
\begin{lstlisting}
	let fenetre = window.open(
		"URL si la page existe" ou sinon "",
		"nouvelle fenêtre" ou "nom de la fenêtre",
		"options",
		true/false
	);
\end{lstlisting}

\noindent Le paramètre \verb+true/false+ permet de remplacer la fenêtre actuelle ou d'ajouter un nouvel onglet.

\textbf{N.B.} Il est possible d'ouvrir plusieurs fenêtres en même temps.

La fenêtre étant vide, on y écrit quelque chose.
\begin{lstlisting}
	fenetre.document.write("Coucou !");
	fenetre.document.close();
\end{lstlisting}

\textbf{N.B.} \verb+fenetre.document.close()+ ferme l'écriture du document, et non de la fenêtre. Avec cette écriture, la fenêtre est acceptée sans aucun souci.

\subsubsection{Les options d'une fenêtre}

Les \verb+options+ sont écrites sous la forme de texte.
	\begin{itemize}
		\item \verb+"width=250,height=250"+
			\begin{description}
				\item[\textbf{Attention !}] Pour des raisons de sécurité, une fenêtre ne peut avoir une taille inférieure à $ 100 \times 100 $. Pour ouvrir une fenêtre plus petit, il faut utiliser :
				\begin{lstlisting}
				"outerWidth=10,outerHeight=10"
				\end{lstlisting}
				\item[\textbf{N.B.}] La taille de la fenêtre est définie sans les bordures et sans la barre de titre.
				\item[\textbf{N.B.}] \verb+innerWidth+ équivaut à \verb+width+, et \verb+innerHeight+ à \verb+height+.
			\end{description}
		\item \verb+"screenX=150,screenY=130"+ définit la position de la fenêtre sur l'écran (Fig. \ref{td3fig10}).
\begin{figure}[!h]
	\centering
	\includegraphics[width=6.25cm]{IMG/Sens-fenetre.png}
	\caption{Rappel : orientation des pixels sur un écran d'ordinateur avec x = screenX et y = screenY}
	\label{td3fig10}
\end{figure}
			\begin{description}
				\item[\textbf{Astuce.}] Comment positionner une fenêtre au centre de l'écran (Fig. \ref{td3fig11}).
\begin{figure}[!h]
	\centering
	\includegraphics[width=6.25cm]{IMG/Centre-ecran.png}
	\caption{Schéma pour positionner une fenêtre au centre de l'écran}
	\label{td3fig11}
\end{figure}
				\noindent Le point central vaut $ \left( \frac{L_E}{2}, \frac{H_E}{2} \right) $.
				\noindent Centrer la fenêtre bleue revient à centrer son centre sur celui de l'écran, or il faut impérativement renseigner le point rouge, dont les coordonnées sont : $ \left( \frac{L_E}{2} - \frac{L_F}{2}, \frac{H_E}{2} - \frac{H_F}{2} \right) $.
				\noindent \textbf{N.B.} Les pixels étant des entiers, il faut arrondir les nombres décimaux avec \verb+Math.trunc(...)+
\begin{lstlisting}
	function positionCentraleFenetre(largeur, hauteur)
	{
		//Mesure de l'écran utilisateur
		let largeurEcran = screen.width;
		let hauteurEcran = screen.height;
		//Récupération des arguments de la fonction avec mise en place d'une sécurité empêchant l'emploi d'une taille supérieure à l'écran
		if(largeur > largeurEcran)
		{
			this.largeur = largeurEcran;
		}
		else
		{
			this.largeur = largeur;
		}
		if(hauteur > hauteurEcran)
		{
			this.hauteur = hauteurEcran;
		}
		else
		{
			this.hauteur = hauteur;
		}
		//Calculer le point qui va centrer la fenêtre
		let posX = Math.trunc(largeurEcran/2) - Math.trunc(this.largeur/2);
		let posY = Math.trunc(hauteurEcran/2) - Math.trunc(this.hauteur/2);
		//Vérifications sur la console
		console.log("Largeur de la fenêtre : " + this.largeur);
		console.log("Hauteur de la fenêtre : " + this.hauteur);
		console.log("Largeur de l'écran : " + largeurEcran);
		console.log("Hauteur de l'écran : " + hauteurEcran);
		console.log("Position de X : " + posX);
		console.log("Position de Y : " + posY);
		//Attention ! Ne pas oublier les virgules de séparation
		return "width=" + this.largeur.toString() + ", height=" + this.hauteur.toString() + ", screenX=" + posX.toString() + ", screenY=" + posY.toString();
	}
\end{lstlisting}
				\end{description}
			\item \verb+"resizable=yes"+ ou \verb+no+ permet ou empêche la mise à l'échelle de la fenêtre.
			\item \verb+"dependent=yes"+ ou \verb+no+ définit la dépendance de la fenêtre fille ouverte par rapport à sa fenêtre mère. Informatiquement, on parle de liens parent-enfant.
				\begin{description}
					\item[\textbf{N.B.}] Les fenêtres filles peuvent dépendre ou non de la fenêtre mère. L'attribut \verb+dependent+ permet de définir cette liaison. La dépendance signifie que la fermeture de la fenêtre mère entraîne celle de sa fenêtre fille. Par défaut, \verb+dependent=no+, il suffit d'écrire \verb+"dependent=yes"+ pour activer le lien.
				\end{description}
			\item \verb+"locationbar=yes"+ active la combinaison de touches.
			\item \verb+"personalbar=yes"+ ou \verb+directories=yes+ [obsolète] affiche la barre d'outils. La valeur est récupérable en lecture seule par `JavaScript`.
			\item \verb+"menubar=yes"+ affiche la barre des menus. La valeur est récupérable en lecture seule par `JavaScript`.
			\item \verb+"scrollbars=yes"+ affiche en cas de besoin des barres de défilement. La valeur est récupérable en lecture seule par `JavaScript`.
			\item \verb+"toolbar=yes"+ affiche la barre d'outils de navigation. La valeur est récupérable en lecture seule par `JavaScript`.
			\item \verb+"statusbar=yes"+ affiche la barre d'état. La valeur est récupérable en lecture seule par `JavaScript`.
	\end{itemize}

\textbf{N.B.} La plupart des options sont définies par l'utilisateur. De fait, il faut utiliser ces choix par défaut.

\subsubsection{La fermeture automatique d'une fenêtre}

Fermer automatiquement une fenêtre est possible en utilisant \verb+setTimeout()+.

\begin{lstlisting}
	let time = fenetre.setTimeout("window.close()", 3600);
\end{lstlisting}

\textbf{N.B.} \verb+fenetre.clearTimeout(time)+ interrompt une procédure \verb+setTimeout()+.

\subsubsection{Les boîtes de dialogue}

\verb+alert(...)+ envoie une information et un bouton « Fermer ».

\verb+prompt(...)+ envoie une information, une boîte de saisie et un bouton « OK ».
	\begin{description}
		\item[\textbf{N.B.}] Il faut lui affecter une variable afin de récupérer la saisie de l'utilisateur et la traiter.
		\item[\textbf{N.B.}] La saisie renvoie un \verb+string+.
	\end{description}

\verb+confirm(...)+ envoie une boîte de dialogue avec une information et deux boutons « OK » et « Annuler ».
	\begin{description}
		\item[\textbf{N.B.}] Il faut lui affecter une variable afin de récupérer la saisie de l'utilisateur et la traiter.
		\item[\textbf{N.B.}] La saisie renvoie un booléen : \verb+true+ pour « OK » et \verb+false+ pour « Annuler ».
	\end{description}

[obsolète] \verb+window.openDialog("URL", "nom", "fonctionnalité", argument 0,+ \verb+argument 1, ...)+ ouvre une nouvelle boîte de dialogue, mais la méthode n'est pas lisible par tous les navigateurs.

\subsection{Les propriétés d'instance de window}

En utilisant la variable fenêtre \verb+fenetre+ créée, il est possible de modifier ou créer une couleur d'arrière-plan ou d'avant-plan.
	\begin{description}
		\item[] [obsolète] \verb+fenetre.document.bgColor = "blue";+ pour l'arrière-plan ;
		\item[] [obsolète] \verb+fenetre.document.fgColor = "black";+ pour l'avant-plan ;
		\item[\textbf{N.B.}] Ces choix sont désormais gérés par les styles C.S.S.
	\end{description}

La plupart des propriétés d'instance fonctionnent en \textbf{lecture seule}. Si c'est le cas, L.S. sera notée à côté de la propriété.
	\begin{itemize}
		\item [L.S.] \verb+window.document+ fait référence à l'objet \verb+document+.
		\item [L.S.] \verb+window.frames[...]+ fait référence à la table de la balise \verb+<frameset>+.
		\item [L.S.] \verb+window.frameElement+ renvoie l'élément dans lequel la fenêtre est intégrée ou renvoie sinon \verb+null+.
		\item [L.S.] \verb+window.parent+ représente la fenêtre de niveau supérieur à laquelle appartient le cadre ou la fenêtre en cours.
		\item [L.S.] \verb+window.self+ fait référence à l'objet \verb+window+ lui-même. \verb+self+ est équivalent à \verb+window+.
		\item [L.S.] \verb+window.window+ fait référence à l'objet \verb+window+ lui-même.
		\item [L.S.] \verb+window.length + ou \verb+window.frames.length+ renvoie le nombre de cadres dans la fenêtre.
		\item \verb+window.name+ définit ou récupère le nom de la fenêtre.
		\item [L.S.] \verb+window.navigator+ fait référence à l'objet \verb+navigator+.
		\item [L.S.] \verb+window.history+ fait référence à l'objet \verb+history+.
		\item [L.S.] \verb+window.console+ renvoie une référence à l'objet \verb+console+ qui fournit l'accès à la console de débogage du navigateur.
		\item \verb+window.location+ fait référence à l'objet \verb+location+ qui récupère ou définit l'emplacement U.R.L. en cours de la fenêtre.
		\item \verb+window.Math+ fait référence à l'objet \verb+Math+.
		\item [L.S.] \verb+window.crypto+ renvoie l'objet \verb+crypto+ du navigateur.
		\item [L.S.] \verb+window.isSecureContext+ indique si un contexte est capable d'utiliser des fonctionnalités nécessitant des contextes sécurisés.
		\item [L.S.] \verb+window.localStorage+ renvoie une référence à l'objet \verb+storage+ en local utilisé pour stocker les données accessibles uniquement par l'origine qui les a créées.
		\item [L.S.] \verb+window.sessionStorage+ renvoie un objet de stockage pour stocker des données dans une session de page unique.
		\item \verb+window.offscreenBuffering+ indique le type de tampon utilisé par le navigateur. Il renvoie trois valeurs : \verb+true+, \verb+false+ ou \verb+auto+ (par défaut).
		\item \verb+window.status+ représente la barre d'état de la fenêtre ou la modifie.
		\item \verb+window.opener+ indique si la fenêtre en cours est fermée ou non.
		\item [L.S.] \verb+window.screen+ fait référence à l'objet \verb+screen+ associé à la fenêtre.
		\item \verb+window.fullScreen+ indique si la fenêtre est affichée en plein écran ou non.
		\item [L.S.] \verb+window.innerHeight+ indique la hauteur de la partie visible d'une fenêtre avec la barre de défilement horizontale.
		\item [L.S.] \verb+window.innerWidth+ indique la largeur de la partie visible d'une fenêtre avec la barre de défilement verticale.
		\item [L.S.] \verb+window.outerHeight+ indique la hauteur de l'extérieur de la fenêtre du navigateur.
		\item [L.S.] \verb+window.outerWidth+ indique la largeur de l'extérieur de la fenêtre du navigateur.
		\item [L.S.] \verb+window.pageXOffset+ ou \verb+window.scrollX+ renvoie le nombre de pixels dont le document a déjà été décalé horizontalement.
		\item [L.S.] \verb+window.pageYOffset+ ou \verb+window.scrollY+ renvoie le nombre de pixels dont le document a déjà été décalé verticalement. 
		\item \verb+window.clientInformation+ équivant à \verb+navigator+.
		\item \verb+window.event+ reçoit un objet \verb+event+.
		\item [obsolète] \verb+window.defaultStatus+ indique le message par défaut de la barre d'état pour la fenêtre donnée.
		\item [L.S.] \verb+window.top+ représente la fenêtre de plus haut niveau à laquelle appartient un cadre ou à une hiérarchie de fenêtre.
	\end{itemize}

\subsection{Les méthodes d'instance de window}

\verb+window.setInterval("instruction 1, instruction 2, ...", intervalle)+ active l'exécution périodique d'un programme partiel.

\verb+window.clearInterval(valeur du setInterval)+ arrête l'exécution périodique d'un programme partiel.

\verb+window.moveBy(x, y)+ déplace une fenêtre relativement à sa position actuelle en pixels.

\verb+window.moveTo(x, y)+ déplace une fenêtre relativement à sa position absolue en pixels.

\verb+window.resizeBy(x, y)+ modifie la taille relative d'une fenêtre en pixels.

\verb+window.resizeTo(x, y)+ modifie la taille d'une fenêtre de façon absolue en pixels.

\verb+window.scroll()+ fait défiler la fenêtre à un endroit particulier dans le document en pixels.

\verb+window.scrollBy(x, y)+ déplace un document dans une fenêtre relativement à celle-ci en pixels.

\verb+window.scrollTo(x, y))+ déplace un document dans une fenêtre de façon absolue en pixels.

[obsolète] \verb+window.back()+ renvoie à la page précédente (équivaut aux boutons du navigateur).

[obsolète] \verb+window.forward()+ renvoie à la page suivante (équivaut aux boutons du navigateur).

[obsolète] \verb+window.home()+ renvoie à la page de démarrage (non standard).

\verb+window.print()+ imprime le document actuel.

\verb+window.stop()+ interrompt le chargement de la page ou de la fenêtre.

\verb+window.blur()+ déplace la focalisation hors de la fenêtre.

\verb+window.focus()+ donne la focalisation à la fenêtre en cours.

\verb+window.dump()+ écrit un message sur la console (non standard).

\verb+window.getComputedStyle()+ récupère un style calculé par l'élément donné. Un style calculé indique les valeurs de toutes les propriétés C.S.S. de l'élément.

\verb+window.find()+ recherche la chaîne de caractères donnée dans une fenêtre.

\verb+window.fetch()+ démarre le processus de récupération d'une ressource à partir du réseau.

\verb+window.getSelection()+ renvoie l'objet de sélection représentant les éléments donnés.

\verb+window.postMessage()+ fournit un moyen sécurisé pour une fenêtre d'envoyer une chaîne de données à une autre fenêtre, qui n'a pas besoin d'être dans le même domaine que la première.

\verb+window.setImmediate()+ exécute une fonction après que le navigateur a terminé d'autres tâches lourdes.

\verb+window.clearImmediate()+ annule l'exécution répétée définie en utilisant \verb+setImmediate+.

[obsolète] \verb+window.captureEvents(Event.action)+ intercepte des événements.

[obsolète] \verb+window.releaseEvents(Event.action)+ libère les événements.

\verb+window.handleEvents(Event.action)+ exploite les événements.

[obsolète] \verb+window.routeEvents(Event.action)+ transmet des événements qui seront intercepté à la proche instance.

\section{L'objet history}\markboth{}{L'objet history}

L'objet \verb+history+ permet de naviguer dans la liste de tous les sites visités dans le même onglet ou la même fenêtre.

\verb+history+ a une propriété d'instance :
\begin{lstlisting}
	history.length
\end{lstlisting}

\noindent Elle compte le nombre d'U.R.L. visité dans le même onglet.

\verb+history+ dispose de trois méthodes.
	\begin{itemize}
		\item \verb+history.back()+ charge le document précédent.
		\item \verb+history.forward()+ charge le document suivant.
		\item \verb+history.go(+ \textit{nombre} \verb+)+ charge un document précis. Le nombre à saisir est un entier relatif (Fig. \ref{td3fig12}).
	\end{itemize}

\begin{figure}[!h]
	\centering
	\includegraphics[width=6.25cm]{IMG/Objet-history.png}
	\caption{Fonctionnement de l'objet history}
	\label{td3fig12}
\end{figure}

\section{L'objet location}\markboth{}{L'objet location}

\subsection{Les propriétés d'instance}

\verb+location.hash+ enregistre un lien \verb+anchor+ d'un U.R.L. sous la forme d'une chaîne de caractères (adresse avec \verb+href="#"+).

\verb+location.host+ enregistre la partie « hôte » de l'adresse web (sans HTTP).

\verb+location.hostname+ enregistre les parties « hôte » (sans HTTP) et « port » de l'adresse web.

\verb+location.href+ enregistre toute l'adresse web (avec HTTP).

\verb+location.pathname+ enregistre le chemin d'accès d'un U.R.L. (sans HTTP, sans \verb+www.nonDuDomaine.com+).

\verb+location.port+ enregistre le port d'U.R.L.

\verb+location.protocol+ enregistre le protocole d'un U.R.L. (HTTP en général).

\verb+location.search+ enregistre une chaîne de recherche pour l'U.R.L. (adresse avec \verb+?+). Cela vient du contenu d'une barre de recherche en général.

\subsection{Les méthodes d'instance}

\verb+location.assign(nom de l'U.R.L.)+ charge une page web. Le retour en arrière est possible.

\verb+location.reload()+ recharge le document actuel.

\verb+location.replace(nom de l'U.R.L.)+ remplace la page chargée par une autre page. Le retour en arrière est impossible.

\section{La gestion du registre avec localStorage}\markboth{}{La gestion du registre avec localStorage}

La propriété \verb+localStorage+ permet d'accéder à l'objet local \verb+Storage+. Les données stockées dans le \verb+localStorage+ n'ont \textbf{pas de délai d'expiration}, alors que les données stockées dans \verb+sessionStorage+ sont nettoyées lorsque la session navigateur prend fin.

Dans les deux cas, les données stockées sont \textbf{spécifiques au protocole de la page}.

\verb+localStorage+ utilise un système de clés-valeurs qui sont tous deux \textbf{toujours des chaînes de caractères}.

\verb+localStorage+ concerne toutes les pages.

On peut déclarer \verb+localStorage+ dans une variable.
\begin{lstlisting}
	let monStockage = localStorage;
\end{lstlisting}

\textbf{N.B.} Un objet \verb+Storage+ peut être utilisé pour accéder à l'espace de stockage local de l'origine actuelle.

Il peut y avoir une levée d'exception avec \verb+SecurityError+. La requête peut alors :
	\begin{itemize}
		\item soit violer une décision politique ;
		\item soit avoir une origine qui n'est pas un schéma : hôte/port valide.
	\end{itemize}

Exemple d'exception : l'utilisateur a refusé la permission de conserver des données pour l'origine spécifique.

\begin{enumerate}
	\item Il est possible d'ajouter une entrée avec la méthode d'instance \verb+setItem()+.
\begin{lstlisting}
	localStorage.setItem("prenom", "Max");
\end{lstlisting}
	\item Il est possible de visualiser une valeur par sa clé.
\begin{lstlisting}
	localStorage.getItem("prenom");
\end{lstlisting}
	\item Il est possible de chercher la clé d'une valeur.
\begin{lstlisting}
	localStorage.key("Max");
\end{lstlisting}
	\item Il est possible de connaître le nombre d'éléments stockés.
\begin{lstlisting}
	localStorage.length;
\end{lstlisting}
	\item Il est possible de supprimer une entrée.
\begin{lstlisting}
	localStorage.removeItem("prenom");
\end{lstlisting}
	\item Il est possible de nettoyer les éléments de l'objet \verb+Storage+.
\begin{lstlisting}
	localStorage.clear();
\end{lstlisting}
\end{enumerate}

\section{La gestion des sessions avec sessionStorage}\markboth{}{La gestion des sessions avec sessionStorage}

\textbf{N.B} La session `JavaScript` n'a aucun lien avec une session \verb+PHP+.

La propriété \verb+sessionStorage+ permet d'accéder à l'objet local \verb+Storage+. Les données stockées dans le \verb+sessionStorage+ sont nettoyées lorsque la session navigateur prend fin.

\verb+sessionStorage+ concerne un onglet, une fenêtre.

On peut déclarer \verb+sessionStorage+ dans une variable.
\begin{lstlisting}
	let maSession = sessionStorage;
\end{lstlisting}

\begin{enumerate}
	\item Il est possible d'ajouter une entrée avec la méthode d'instance \verb+setItem()+.
\begin{lstlisting}
	sessionStorage.setItem("prenom", "Max");
\end{lstlisting}
	\item Il est possible de visualiser une valeur par sa clé.
\begin{lstlisting}
	sessionlStorage.getItem("prenom");
\end{lstlisting}
	\item Il est possible de chercher la clé d'une valeur.
\begin{lstlisting}
	sessionStorage.key("Max");
\end{lstlisting}
	\item Il est possible de connaître le nombre d'éléments stockés.
\begin{lstlisting}
	sessionStorage.length;
\end{lstlisting}
	\item Il est possible de supprimer une entrée.
\begin{lstlisting}
	sessionStorage.removeItem("prenom");
\end{lstlisting}
	\item Il est possible de nettoyer les éléments de l'objet \verb+Storage+.
\begin{lstlisting}
	sessionStorage.clear();
\end{lstlisting}
\end{enumerate}

\section{La gestion des bases de données IndexedDB}\markboth{}{La gestion des bases de données IndexedDB}

\subsection{Présentation de IndexedDB}

\verb+IndexedDB+ est un A.P.I. qui permet le stockage côté client de quantités importantes de données structurées, incluant fichiers et blobs. Il utilise des index afin de permettre des recherches performantes sur ces données. Il permet de stocker de grandes quantités de données structurées. Il s'agit d'un \textbf{système de gestion de base de données transactionnelles} sous la forme de clé/valeur.

\verb+IndexedDB+ suit la politique \verb+Same-Origin Policy+ (S.D.P.).

Les opérations effectuées par \verb+IndexedDB+ sont réalisées de manière \textbf{asynchrone} afin de ne pas bloquer l'application.

Pour accéder à une base de données, il faut appeler \verb+open()+ sur l'attribut \verb+IndexedDB+ d'un objet \verb+Window+. Cette méthode retourne un objet \verb+IDBRequest+. Les opérations asynchrones communiquent avec l'application appelante en déclenchant des événements sur les objets \verb+IDBRequest+.

\subsubsection{Se connecter à la base de données}

\verb+IDBEnvironment+ fournit un accès aux fonctionnalités de \verb+IndexedDB+.

\verb+IDBFactory+ fournit un accès à la base de données.

\verb+IDBOpenDBRequest+ représente une requête d'ouverture de la base de données.

\verb+IDBDatabase+ représente une connexion à la base de données. Il s'agit du seul moyen d'obtenir une transaction sur la base de données.

\subsubsection{Récupérer et modifier les données}

\verb+IDBTransaction+ représente une transaction. Pour créer une transaction sur la base de données, il faut spécifier la portée et déterminer le type d'accès désiré (lecture seule, ou lecture et écriture). 

\verb+IDBRequest+ est une interface générique qui récupère les requêtes à la base de données et fournit un accès aux résultats. 

\verb+IDBObjectStore+ représente une collection d'objets qui permet l'accès à un ensemble de données d'une base de données \verb+IndexedDB+, recherché par clé primaire.

\verb+IDBIndex+ permet d'accéder à un sous-ensemble de données d'une base \verb+IndexedDB+, mais elle utilise un index pour récupérer les enregistrements, au lieu d'une clé primaire. C'est parfois plus rapide qu'un usage de \verb+IDBObjectStore+.

\verb+IDBCursor+ est un itérateur sur les collections d'objets et les index.

\verb+IDBCursorWithValue+ est un itérateur sur les collections d'objets et les index. Il retourne la valeur courante du curseur.

\verb+IDBKeyRange+ définit une portée de valeurs qui peut être utilisée pour récupérer des données de la base de données dans une certaine portée.

\verb+IDBLocaleAwareKeyRange+ définit une portée de valeurs qui peut être utilisée pour récupérer des données de la base de données dans une certaine portée, triées en fonction des règles de la localisation spécifiée pour un certain index.

\subsubsection{Utiliser les interfaces d'événements personnalisées}

\verb+IDBVersionChangeEvent+ indique que la version de la base de données a changé. Il correspond au résultat de la fonction de saisie d'un événement.

\subsubsection{Faire attention aux interfaces obsolète}

\begin{itemize}
	\item \verb+IDBVersionChangeRequest+
	\item \verb+IDBDatabaseException+
	\item \verb+IDBTransactionSync+
	\item \verb+IDBObjectStoreSync+
	\item \verb+IDBIndexSync+
	\item \verb+IDBFactorySync+
	\item \verb+IDBEnvironmentSync+
	\item \verb+IDBDatabaseSync+
	\item \verb+IDBCursusSync+
\end{itemize}

\subsection{Utiliser IndexedDB}

Pour utiliser \verb+IndexedDB+, on réalise les tâches suivantes :
	\begin{enumerate}
		\item ouvrir une connexion à la base de données ;
		\item créer un objet de stockage ;
		\item initier une transaction ;
		\item effectuer des requêtes ;
		\item créer des gestionnaires d'événements liés au résultat de requêtes.
	\end{enumerate}

\subsubsection{Ouvrir une connexion à la base de données}

\begin{lstlisting}
	let openRequest = indexedDB.open(
		"nom de la base de données",
		version de la base de données
	);
\end{lstlisting}

\textbf{N.B.} Le numéro de la version commence par 1, qui est la valeur par défaut. Il est facultatif.

La méthode \verb+open()+ renvoie un objet \verb+IDBOpenRequest+. Elle effectue l'opération d'ouverture de la connexion à la base de données de manière \textbf{asynchrone}.

Trois cas sont alors possibles.
	\begin{enumerate}
		\item Si l'ouverture est un succès, un événement \verb+success+ est déclenché sur l'objet \verb+IDBOpenRequest+ et renvoyé par \verb+open()+. La propriété \verb+result+ de cet événement a la valeur de l'objet \verb+IDBDatabase+ associé à la connexion.
		\item Si l'ouverture est un échec, un événement \verb+error+ est déclenché sur l'objet \verb+IDBOpenRequest+ renvoyé par \verb+open()+.
		\item Si le numéro de version de la base de données est inférieur au numéro fourni par \verb+open()+, un événement \verb+upgradeneeded+ est déclenché pour mettre à jour la base de données. Si cette mise à jour est un succès, un événement \verb+success+ est déclenché.
	\end{enumerate}

De fait, il faut créer \textbf{trois gestionnaires d'événement}.

\begin{lstlisting}
	let db = '';
	const DBOpenRequest = window.indexedDB.open('db', 1);
	DBOpenRequest.onupgradeneeded = () => {
		db = DBOpenRequest.result;
	};
\end{lstlisting}

\noindent Dans ce cas, la base de données est prête, mais sa version est obsolète. L'événement se déclenche si le numéro de la version de la base de données locale est inférieure à  celui spécifié dans \verb+open()+ ou si sa version est à 0.

\begin{lstlisting}
	DBOpenRequest.onerror = (e) => {
		db = DBOpenRequest.result;
		console.log(e.target.errorCode);
	};
\end{lstlisting}

\noindent Dans ce cas, l'ouverture de la base de données a échoué.

\begin{lstlisting}
	DBOpenRequest.onsuccess = () => {
		db = DBOpenRequest.result;
	};
\end{lstlisting}

\noindent Dans ce cas, la base de données est prête dans l'objet \verb+openRequest.result+.

\subsubsection{Créer un objet de stockage}

L'objet de stockage (ou \textit{Object Store}) stocke les données sous la forme d'un magasin d'objets.
	\begin{description}
		\item[\textbf{N.B.}] Un \textbf{magasin} équivaut aux tables ou aux collections.
	\end{description}

Une base de données peut avoir plusieurs objets de stockage. Ces objets de stockage peuvent stocker quasiment toutes formes de données. Ils peuvent stocker plusieurs valeurs. Chaque valeur est associée à une clé unique au sein d'un objet de stockage. \verb+IndexedDB+ utilise l'algorithme standard de sérialisation pour cloner ou stocker un objet.

On peut :
	\begin{itemize}
		\item soit passer la clé manuellement en même temps que l'on ajoute une valeur dans l'objet de stockage ;
		\item soit définir une propriété qui servira de clé dans le cas où l'on stocke des objets ;
		\item soit générer les clés automatiquement.
	\end{itemize}

\noindent Toutefois, la clé doit être \textbf{unique} pour chaque valeur du magasin.

\textbf{La création ou la modification des objets de stockage s'effectue toujours lors de la mise à jour de la version de la base de données,} \verb+upgradeneeded+.

Pour créer un objet de stockage, on utilise la méthode \verb+createObjectStore()+ :

\begin{lstlisting}
	createObjectStore(
		"nom de l'objet de stockage",
		clé
	);
\end{lstlisting}

\noindent La clé est optionnelle. Elle contient un objet ayant l'une des propriétés suivantes : \verb+keyPath+ ou \verb+autoIncrement+.
	\begin{enumerate}
		\item \verb+keyPath+ permet de définir une propriété que \verb+IndexedDB+ utilisera comme clé.
		\item \verb+autoIncrement+ prend une valeur booléenne. Si sa valeur est \verb+true+, alors la clé pour chaque objet stocké est générée automatiquement en s'incrémentant à chaque fois. L'ensemble de l'objet créé est renvoyé à l'interface \verb+IDBObjectStore+.
	\end{enumerate}

\begin{lstlisting}
	DBOpenRequest.onupgradeneeded = () => {
		db = DBOpenRequest.result;
		if(!db.objectStoreNames.contains('data'))
		{
			let objectStore = db.createObjectStore('data', {keyPath: 1});
			objectStore.createIndex(
				'data',
				'data',
				{unique: true}
			);
		}
	};
\end{lstlisting}

\textbf{N.B.} \verb+'data'+ est le nom du magasin.

\textbf{N.B.} \verb+{unique: true}+ peut être remplacé par \verb+{multiEntry: true}+ si la valeur est un tableau.

\begin{lstlisting}
	DBOpenRequest.onsuccess = () => {
		db = DBOpenRequest.result;
		console.log(db.objectStoreNames);
	};
\end{lstlisting}

\noindent Cela affiche la modification.

Chaque modification est déclenchée par une nouvelle version de la base de données à modifier. En effet, \verb+IndexedDB+ possède un mécanisme intégré de « versionnage de schéma ».

\subsubsection{Initier une transaction}

Une \textbf{transaction} est un groupe d'opérations liées. Les différentes opérations doivent toutes réussir indépendamment pour que la transition soit un succès. Si l'une d'entre elles échoue, alors la transaction échoue.

Les transactions s'effectuent à partir de l'objet symbolisant la connexion à la base de données grâce à l'instance \verb+IDBDatabase+. Pour démarrer une nouvelle transaction, on utilise la méthode \verb+transaction()+ à partir de cet objet. Elle prend deux arguments :
	\begin{enumerate}
		\item la liste d'objets de stockage que la transaction traite obligatoirement ;
		\item le type ou mode de transaction souhaité (facultatif) :
			\begin{itemize}
				\item \verb+readonly+ $\rightarrow$ lecture seule (par défaut)
				\item \verb+readwrite+ $\rightarrow$ lecture et écriture
				\item \verb+versionchange+ $\rightarrow$ changement de version, changement de la structure de la base de données (ou schéma).
			\end{itemize} 
	\end{enumerate}

\textbf{Toutes les opérations sur les données doivent être effectuées dans une transaction dans} \verb+IndexedDB+.
	\begin{description}
		\item[] \verb+transaction(+ \textit{magasin}\verb+,+ \textit{type} \verb+)+
	\end{description}

Pour ajouter des données :
\begin{lstlisting}
	let db = openRequest.result;
	let transaction = db.transaction('data', 'readwrite');
	let datas = transaction.objectStore('data');
	let data = {
		id: identifiant,
		name: nom,
		age: âge,
		created: new Date()
	};
	let request = datas.add(data);
	request.onsuccess = () => {
		console.log("Add a new data!", request.result);	
	};
	request.onerror = () => {
		console.log("Error! New data does not add", request.error);
	}
\end{lstlisting}

\textbf{N.B.} Il existe également \verb+oncompte+.

\begin{lstlisting}
	request.oncomplete = () => {
		console.log("Transacton is completed!");
	}
\end{lstlisting}

\noindent \textbf{Seule} \verb+complete+ \textbf{garantit que la transaction est enregistrée dans son ensemble}.

\textbf{N.B.} Il est possible d'abandonner manuellement une transaction avec :
\begin{lstlisting}
	transaction.abort()
\end{lstlisting}

\noindent qui déclenche un événement \verb+transaction.onabort+.

Les magasins d'objets prennent en charge deux méthodes pour stocker une valeur :
	\begin{itemize}
		\item \verb+put(+ \textit{valeur}\verb+,+ \textit{clé} \verb+)+ qui ajoute la valeur au magasin. La clé est facultative. Elle est nécessaire si le magasin d'objets n'a pas l'option \verb+keyPath+ ou \verb+autoIncrement+. S'il existe déjà une valeur avec la même clé, elle sera remplacée ;
		\item \verb+add(+ \textit{valeur}\verb+,+ \textit{clé} \verb+)+ qui ajoute la valeur au magasin, mais, s'il existe une valeur avec la même clé, la requête échoue et une erreur de type \verb+ConstraintError+ est générée. \textbf{Lorsque toutes les requêtes de transaction sont terminées et que la file d'attente de microtâches est vide, elle est validée automatiquement}.
	\end{itemize}

\textbf{Attention !} Les transactions ne supportent pas les tâches asynchrones (\verb+fetch+, \verb+setTimeout+, \textit{etc}.) au milieu d'une transaction.

Les demandes d'écriture peuvent échouer. \textbf{Une requête ayant échoué annule automatiquement la transaction, donc toutes les modifications}. Il est possible de gérer cet échec sans annuler les modifications existantes, et poursuivre la transaction. Par exemple, le gestion \verb+request.onerror+ est capable d'empêcher l'abandon de la transaction en appelant la méthode \verb+preventDefault()+ sur l'événement.

\begin{lstlisting}
	let transaction = db.transaction('data', 'readwrite');
	let datas = {id: 1, name: "Forriez", age: 41, created new Date()};
	let request = transaction.objectStore('data').add(datas);
	request.onerror = (event) => {
		if(request.error.name === 'ConstraintError')
		{
			console.log('Data with such id adready exists');
			event.preventDefault();
			event.stopPropagation();
		}
		else
		{
			...
		}
	};
	transaction.onabort = () => {
		console.log('Error!', transaction.error);
	};
\end{lstlisting}

\textbf{N.B.} \verb+stopPropagation()+ empêche la propagation de l'erreur sur l'ensemble du code.

\subsubsection{Effectuer des requêtes}

Pour ajouter, supprimer, récupérer et mettre à jour des données dans une base de données \verb+IndexedDB+, il faut :
	\begin{enumerate}
		\item créer une transaction ;
		\item récupérer l'objet de stockage de cette transaction ;
		\item effectuer des requêtes à partir d'un objet \verb+IDBObjectStore+ ;
		\item gérer les cas de succès ou d'erreur liés au résultat des requêtes.
	\end{enumerate}

L'interface \verb+IDBObjectStore+ fournit différentes méthodes pour manipuler les objets de stockage :
	\begin{itemize}
		\item pour stocker
			\begin{itemize}
				\item[$\blacksquare$] \verb+put(+ \textit{donnée} \verb+)+
				\item[$\blacksquare$] \verb+add(+ \textit{donnée} \verb+)+
			\end{itemize}
		\item 
			\begin{itemize}
				\item[$\blacksquare$] \verb+get(+ \textit{requête} \verb+)+
				\item[$\blacksquare$] \verb+getAll()+
			\end{itemize}
		
		\item 
			\begin{itemize}
				\item[$\blacksquare$] \verb+delete(+)+
				\item[$\blacksquare$] \verb+clear()+
			\end{itemize}
		
		\item 
			\begin{itemize}
				\item[$\blacksquare$] \verb+getKey(+ \textit{requête} \verb+)+
				\item[$\blacksquare$] \verb+getAllKey()+
			\end{itemize}
		
		\item 
			\begin{itemize}
				\item[$\blacksquare$] \verb+count()+
			\end{itemize}
	\end{itemize}

\begin{description}
	\item[] \verb+db = DBOpenRequest.result;+
	\item[] \verb+let transaction = db.transaction(+
		\begin{description}
			\item[] \verb+["data"],+ $\rightarrow$ liste des objets de stockage traités par la transaction.
				\begin{description}
					\item[\textbf{N.B.}] Si on a un tableau, alors la transaction traite l'ensemble des objets de stockage.
				\end{description}
			\item[] \verb+"readwrite"+ $\rightarrow$ (option)
		\end{description}
	\item[] \verb+);+
\end{description}

\noindent Le code permet de créer un objet \verb+transaction+.

Les transactions peuvent recevoir des événements du D.O.M. de trois types :
	\begin{itemize}
		\item \verb+error+ $\rightarrow$ erreur ;
		\item \verb+abort+ $\rightarrow$ abandon ;
		\item \verb+complete+ $\rightarrow$ terminée.
	\end{itemize}

\begin{lstlisting}
	let transaction = db.transaction(['data'], 'readwrite').objectStore('data').getAll();
	transaction.onerror = () => {
		console.log('Transaction error');
	};
	transaction.onsuccess = () => {
		console.log('Transaction OK');
	};
\end{lstlisting}

\noindent \textbf{N.B.} On peut remplacer \verb+getAll()+ par \verb+get('data')+.

\noindent \textbf{N.B.} On peut chaîner toutes les méthodes.

Pour mettre à jour une donnée, il faut réaliser deux transactions :
	\begin{enumerate}
		\item chercher la donnée avec \verb+get+ ;
		\item modifier la donnée avec \verb+put+.
	\end{enumerate}

Pour utiliser les index, on tape :
\begin{lstlisting}
	let index = objectStore.index('name');
	index.get('...').onsuccess = (e) => {
		console.log(e.target.result);
	};
\end{lstlisting}

\textbf{N.B.} Un index équivaut à un champ en S.Q.L.

Pour récupérer des onglets ouverts :
\begin{lstlisting}
	let DBOpenRequest = window.indexedDB.open('db', 1);
		DBOpenRequest.onblocked = (e) => {
		console.log('Close all windows');
	};
\end{lstlisting}

\subsubsection{Supprimer une base de données}

\begin{lstlisting}
	let deleteRequest = indexedDB.deleteDatabase(nom);
\end{lstlisting}

\subsubsection{Gérer le changement de version}

Si, par exemple, un onglet est en version 1, et que l'utilisateur ouvre un autre onglet en version 2, il existe un conflit de version à gérer par le code suivant :
\begin{lstlisting}
	openRequest.onsuccess = () => {
		let db = openResult.result;
		db.onversionchange = () => {
			db.close();
			console.log('Base de données obsolète, recharger la page');
		};
	};
	openRequest.onblocked = () => {
		console.log('Base de données bloquée');
	};
\end{lstlisting}

\noindent \verb+db.onversionchange+ tente de mettre à jour en parallèle, rendant les données obsolètes. \verb+openRequest.onblocked+ se connecte à une version obsolète dans un autre onglet qui n'est pas  fermé ou qui ne se ferme pas.

\subsubsection{Mettre à jour les données}

En dehors de la comparaison de version, il est possible d'examiner la base de données en obtenant une liste des magasins d'objets existants sous le nom de \verb+db.objectStoreNames+. La méthode \verb+contains(+ \textit{nom} \verb+)+ permet de vérifier l'existence d'un magasin.

\subsubsection{Effacer un magasin}

\begin{lstlisting}
	indexedDB.deleteObjectStore('data');
\end{lstlisting}

\noindent efface un magasin de données.

\subsubsection{Rechercher des données}

Il existe deux types de recherche dans un magasin d'objets :
	\begin{enumerate}
		\item par une valeur de clé ou une place de clés ;
\begin{lstlisting}
	data.id
\end{lstlisting}
		\item par un autre champ d'objet.
	\end{enumerate}

\paragraph{La recherche par la clé}

\begin{lstlisting}
	let transaction = db.transaction('data', 'readwrite');
	let datas = transaction.objectStore('data');
	datas.get(1);
	request.onsuccess = () => {
		console.log(request.result);
	};
	request.error = () => {
		console.error('Error! Data does not exist');
		console.error(request.error);
	};
\end{lstlisting}

Autres exemples :
	\begin{itemize}
		\item \verb+datas.getAll(+ \verb+IDBKeyRange.bound(+ \verb+'css'+ (\textit{lower})\verb+,+ \verb+'html'+ (\textit{upper}) \verb+));+ 
		\item \verb+datas.getAll(+ \verb+IDBKeyRange.upperBound(+ \verb+'html'+ (\textit{upper})\verb+,+ \verb+true+ (strictement) \verb+));+
		\item \verb+datas.getAllKeys(+ \verb+IDBKeyRange.lowerBound(+ \verb+'css'+ (\textit{lower})\verb+,+ \verb+true+ (strictement) \verb+));+
		\item \verb+datas.getAll(+ \verb+IDBKeyRange.only(+ \textit{clé} \verb+));+ 
	\end{itemize}

\paragraph{La recherche par un champ utilisant un index}

Pour rechercher par d'autres champs d'objets, on doit créer une structure de données supplémentaire nommé \verb+index+. Un \textbf{index} est un « module complémentaire » au magasin qui suit un champ d'objet donné. Pour chaque valeur de ce champ, il stocke une liste de clés pour les objets qui possèdent cette valeur.
\begin{lstlisting}
	let transaction = db.transaction('data');
	let datas = transaction.objectStore('data');
	let searchByIndex = datas.index('id');
	let request = searchByIndex.getAll(...);
	request.onsuccess = () => {
		if(request.result !== undefined)
		{
			console.log(...);
		}
		else
		{
			console.log(...);
		}
	};
\end{lstlisting}

\subsubsection{Supprimer un magasin}

\begin{lstlisting}
	let transaction = db.transaction('data');
	let datas = transaction.objectStore('data');
	let request = datas.index('id');
	request.onsuccess = () => {
		datas.delete(request.result);
	};
\end{lstlisting}

Pour effacer le stockage, on tape :
\begin{lstlisting}
	datas.clear();
\end{lstlisting}

\subsubsection{Utiliser les curseurs}

Plusieurs méthodes comme \verb+getAll()+ et \verb+getAllKeys()+ retournent un tableau de clés/valeurs.

\textbf{Problème.} Un magasin d'objets peut être volumineux, plus grand que la mémoire disponible. Dans ce cas, \verb+getAll()+, par exemple, échouera.

\textbf{Solution.} Un \textbf{curseur} est un objet spécial qui traverse le magasin d'objets, étant donné une requête, et renvoie une clé/valeur à la fois, économisant ainsi de la mémoire. Les clés suivent un ordre ascendant.
	\begin{itemize}
		\item \verb+let request = + \textit{magasin}\verb+open(+ \textit{requête}\verb+,+ \textit{direction} \verb+);+
			\begin{itemize}
				\item[$\blacksquare$] La requête est une clé ou sans plage de clés.
				\item[$\blacksquare$] La direction est optionnelle. Cela peut être :
					\begin{itemize}
						\item[$\blacklozenge$] \verb+next+ $\rightarrow$ Le curseur remonte à partir de l'enregistrement avec la clé la plus basse (par défaut).
						\item[$\blacklozenge$] \verb+prev+ $\rightarrow$ Le curseur remonte à partir de l'enregistrement avec la clé la plus haute.
						\item[$\blacklozenge$] \verb+nextunique+ $\rightarrow$ Le curseur remonte à partir de l'enregistrement avec la clé la plus basse unique
						\item[$\blacklozenge$] \verb+prevunique+ $\rightarrow$ Le curseur remonte à partir de l'enregistrement avec la clé la plus haute unique.
					\end{itemize}
			\end{itemize}
	\end{itemize}

Avec un curseur, \verb+request.onsuccess+ se déclenche \textbf{plusieurs fois} : une fois pour chaque résultat.
\begin{lstlisting}
	request.onsuccess = () => {
		let cursor = request.result;
		if(cursor)
		{
			let key = cursor.key;
			let value = cursor.value;
			cursor.continue();
		}
		else
		{
			...
		}
	};	
\end{lstlisting}

\noindent \textbf{N.B.} \verb+cursor.continue()+ lance la valeur suivante.

Les principales méthodes sur le curseur sont :
	\begin{itemize}
		\item \verb+advance(+ \textit{nombre} \verb+)+ pour avancer le curseur avec un certain nombre de fois ;
		\item \verb+continue(+ \textit{clé} \verb+)+ pour avancer à la valeur suivante ou sauter à la valeur de la clé (qui est une option).
	\end{itemize}

\section{Gestion des cadres}\markboth{}{Gestion des cadres}

Cela s'effectue en deux étapes.
	\begin{enumerate}
		\item Il faut créer une page avec des balises \verb+<frameset> ... </frameset>+, remplaçant les balises \verb+<body> ... </body>+. La conséquence de ce changement est importante, car il est impossible de placer une balise \verb+<script>+ entre les balises \verb+<frameset>+.
		\item Les pages contenues dans les cadres peuvent accueillir du code `JavaScript` qui pourra contrôler les cadres et leur contenu. Ils sont contrôlés par :
			\begin{itemize}
				\item[$\blacksquare$] \verb+parent.frames[...].location.href = + \textit{nom de l'U.R.L. du cadre} ;
				\item[$\blacksquare$] \verb+parent.frames.length+ qui compte le nombre de cadres.
			\end{itemize}
	\end{enumerate}

\textbf{N.B.} La numérotation commence à gauche, puis en haut (Fig. \ref{td3fig13}).

\begin{figure}[!h]
	\centering
	\includegraphics[width=12.5cm]{IMG/Cadres-Exemples.png}
	\caption{Exemple de cadres}
	\label{td3fig13}
\end{figure}

\verb+parent+ peut être remplacé par \verb+top+ qui désigne la page de niveau le plus haut, à partir de laquelle toutes les autres sont ouvertes.

Il est possible de balayer la table \verb+frames+ de la manière suivante :
\begin{lstlisting}
	for(let element in parent.frames)
	{
		document.write(parent.frames[element].location.href + "<br>");
		document.write(parent.frames[element].location.name + "<br>");
	}
\end{lstlisting}

\textbf{Attention !} Il existe un cadre supplémentaire dans la liste : \verb+name:close+.

En changeant l'arrière-plan du \verb+document+, il est possible de faire entre \verb+frameset+ et \verb+body+.
\begin{lstlisting}
	parent.frames[...].document.body.style.background = "couleur";
\end{lstlisting}

\textbf{N.B.} \verb+parent.frames[...].location.href+ permet également d'ouvrir des fichiers sons ou vidéos, mais il ferme la page HTML du cadre ciblé. De fait, mieux vaut utiliser \verb+<audio>+ ou \verb+<video>+.

\section{Gestion des sons}\markboth{}{Gestion des sons}

Désormais, il existe en `JavaScript` un objet \verb+Audio+ pour gérer les sons. On peut charger une musique de fonds à l'ouverture de la page en faisant une fonction.
\begin{lstlisting}
	function musiqueDOuverture()
	{
		const sonDebut = new Audio("nom de l'U.R.L.");
		sonDebut.play();
	}
\end{lstlisting}

\textbf{Attention !} Aucun lecture n'apparaît comme avec \verb+<audio>+.

\textbf{Attention !} L'utilisateur ne peut pas stopper le son. Toutefois, il peut le couper.

\vspace{2cm}

Désormais, il existe plein de \textit{widgets} pour contrôler l'audio et la vidéo. Toutefois, il n'existe qu'objet \verb+Audio+.

\section{Gestion des événements}\markboth{}{Gestion des événements}

Le programme réagit à des signaux particuliers, nommés \verb+events+. En principe, un événement est déclenché par l'utilisateur. Pour y parvenir, il est possible d'installer un \textbf{gestionnaire d'événements}, c'est-à-dire une fonction (ou instruction `JavaScript` quelconque), exécutée dès que l'événement est déclenché.

Le gestionnaire le plus simple est \verb+onclick+ ; il intervient lorsque l'on clique sur un bouton.
	\begin{itemize}
		\item Dans le code HTML, on crée un bouton.
			\begin{description}
				\item[] \verb+<button name="bouton1" onclick="+ \textit{code JavaScript} \verb+">Cliquer ici</button>+
			\end{description}
		\item On place \verb+onclick+ dans la baliseHTML \verb+button+. À partir de là, plusieurs solutions sont possibles.
			\begin{itemize}
				\item[$\blacksquare$] On place directement un code `JavaScript` dans la balise HTML.
					\begin{description}
						\item[Exemple.] \verb+onclick="alert('Coucou !')"+ 
					\end{description}
				\item[$\blacksquare$] On crée une solution dans un partie \verb+script+ interne ou externe à la page.
\begin{lstlisting}
	function coucou()
	{
		return alert("Coucou !");
	}
\end{lstlisting}
			\end{itemize}
	\end{itemize}
	\begin{description}
		\item[\textbf{N.B.}] Le choix de l'intégration dans la balise ou par une fonction dépend du contexte, mais la fonction reste préférable dans la majorité des cas.
			\begin{description}
				\item[Dans la balise :] \verb+onclick="coucou();"+
			\end{description}
		\item[\textbf{N.B.}] Dans le code, il est intéressant de regrouper les gestionnaires d'événement au même endroit.
		\item[\textbf{N.B.}] Il est possible d'utiliser \verb+this+ pour désigner le document. Par exemple :
\begin{lstlisting}
	<p onclick="this.textContent='Ça marche !'">Premier paragraphe</p>
\end{lstlisting}
	\end{description}

Vu la nature des événements, ils s'associent naturellement avec un formulaire HTML.

\textbf{N.B.} \verb+onclick+ = \verb+onClick+ = \verb+OnClick+ = \verb+ONCLICK+. La casse n'a aucune importance.

\subsection{La liste des gestionnaires}

\input{TABLE/table9.txt}

\textbf{N.B.} \verb+onerror+ sert dans la balise \verb+script+ pour afficher un message d'erreur.

\textbf{N.B.} \verb+onload+ ou \verb+unonload+ se placent souvent dans \verb+body+.

\textbf{N.B.} \verb+onresize+ est utile avec les calques \verb+<div>+ et \verb+<span>+.

\textbf{N.B.} \verb+onmouseover+ et \verb+onmouseout+ ont souvent utilisés pour changer d'image lorsque l'utilisateur survole un lien avec son pointeur.

\subsection{La construction d'un événement}

\subsubsection{Par une fonction anonyme}

Cette méthode est à proscrire, car elle a d'importantes limitations. Il s'agit de la méthode historique du `JavaScript`.
	\begin{enumerate}
		\item Créer un paragraphe dans la page HTML
\begin{lstlisting}
	<p id="para">...</p>
\end{lstlisting}
		\item Dans le code `JavaScript`
\begin{lstlisting}
	let p1 = document.getElementById("para");
	p1.onclick = function ()
	{
		this.innerHTML = "<span style='font-style:italic;'>Salut !</span>";
		this.style.color = "red";
	};
\end{lstlisting}
		\noindent La fonction anonyme se déclenche dès que l'événement se produit. On peut également construire une vraie fonction.
\begin{lstlisting}
	p1.onclick = bravo;
	function bravo()
	{
		this.innerHTML = "<span style='font-style:italic;'>Salut !</span>";
		this.style.color = "red";
	}
\end{lstlisting}
		\noindent \textbf{N.B.} Dans \verb+p1.onclick = bravo;+, on ne met pas de parenthèses, car on ne veut pas que la fonction se déclenche tant que l'événement ne se déclenche pas.	
	\end{enumerate}

\subsubsection{Par la méthode addEventListener}

\begin{lstlisting}
	let p1 = document.getElementById("para");
	p1.addEventListener("click", changeTexte);
	function changeTexte()
	{
		this.innerHTML = "<span style='font-style:italic;'>Salut !</span>";
	}
\end{lstlisting}

\verb+p1.addEventListener()+ est appelé un \textbf{écouteur}.
	\begin{itemize}
		\item \verb+p1.addEventListener(+ \textit{nom de l'événement sans} \verb+on+ \verb+,+ \textit{fonction sans parenthèses} \verb+)+
	\end{itemize}

\noindent L'événement \verb+load+ guette l'exécution et le chargement de l'objet sur lequel on applique \verb+addEventListener+.
	\begin{description}
		\item[\textbf{Attention !}] Il faut faire attention aux \verb+getElementById+ employés.
	\end{description}

On peut également utiliser une fonction fléchée.
\begin{lstlisting}
	p1.addEventListener("click", (event) => {...});
\end{lstlisting}

\verb+addEventListener+ peut d'une part lier plusieurs événements de même type sur un élément HTML, tels que plusieurs messages en un clic, d'autre part plusieurs événements de type différent sur un élément HTML, tels que deux actions différentes sur un même élément HTML.

\verb+p1+ peut avoir \textbf{plusieurs écouteurs}.

\textbf{N.B.} \verb+removeEventListener("click", changerTexte)+ supprime l'écouteur. Il admet tous les arguments de \verb+addEventListener+.

\textbf{N.B.} Sur \verb+Internet Explorer+, on utilise avec la même syntaxe.
	\begin{itemize}
		\item \verb+attachEvent+ = \verb+addEventListener+
		\item \verb+detachEvent+ = \verb+removeEventListener+
	\end{itemize}

Exemple de deux boutons qui ouvrent et ferment une fenêtre.
	\begin{enumerate}
		\item 
\begin{lstlisting}
	<button type="button" id="ouvrir">Ouvrir</button>
	<button type="button" id="fermer">Fermer</button>
\end{lstlisting}
		\item 
\begin{lstlisting}
	let ouvrir = document.getElementById("ouvrir");
	let fermer = document.getElementById("fermer");
	let fenetre = "";
\end{lstlisting}
		\noindent \textbf{Attention !} Ne pas oublier d'initier la valeur.
\begin{lstlisting}
	ouvrir.addEventListener("click", ouvrirFenetre);
	fermer.addEventListener("click", fermerFenetre);
	function ouvrirFenetre()
	{
		fenetre = window.open("", "_blank", "width=300,height=300");
	}
	function fermerFenetre()
	{
		fenetre = window.close();
	}
\end{lstlisting}
	\end{enumerate}

\noindent On peut créer un troisième bouton pour modifier la taille de la fenêtre avec \verb+resizeTo(x, y)+.

\subsection{La propagation des événements}

La propagation des événements dans le D.O.M. s'effectue de la racine, la balise \verb+<html>+ jusqu'aux éléments les plus éloignés dans la hiérarchie. C'est la \textbf{phase de capture}\footnote{En anglais : \textit{capture}} (Fig. \ref{{td3fig14}} : étape\no{}1). L'élément le plus éloigné atteint, le flux remonte jusqu'à la racine. C'est la \textbf{phase de bouillonnement}\footnote{En anglais : \textit{bubbling}} (Fig. \ref{{td3fig14}} : étape\no{}2). Par défaut, les événements s'exécutent dans l'ordre du bouillonnement.

\begin{figure}[!h]
	\centering
	\includegraphics[width=12.5cm]{IMG/JS-Propagation-des-evenements.png}
	\caption{La propagation des événements dans le D.O.M.}
	\label{td3fig14}
\end{figure}

Il est possible de contrôler l'ordre d'exécution des événements :
	\begin{description}
		\item[] \verb+addEventListener(... , ... , booléen)+
			\begin{itemize}
				\item \verb+false+ pour gérer l'événement lors de la capture ;
				\item \verb+true+ pour gérer l'événement lors du bouillonnement.
			\end{itemize}
		\item[\textbf{N.B.}] \verb+removeEventListener+ dispose également de cette option.
		\item[\textbf{N.B.}] \verb+attachEvent+ et \verb+detachEvent+ ont également cette option.
	\end{description}

\section{L'objet Event}\markboth{}{L'objet Event}

Il est possible d'intercepter un événement à un niveau plus élevé en définissant un gestionnaire d'événements pour l'objet \verb+document+, capable d'intercepter les événements pour l'ensemble du \verb+document+.

L'objet \verb+event+ n'est accessible que lors du déclenchement de l'événement.

\textbf{N.B.} \verb+event+ est un objet \verb+Event+ instancié. On peut utiliser simplement \verb+e+.

\subsection{Les propriétés d'instance}

\verb+event.x+ livre la coordonnée de la largeur de l'événement.

\verb+event.y+ livre la coordonnée de la hauteur de l'événement.

\verb+event.screenX+ livre la coordonnée de la largeur relative à l'ensemble de l'écran.

\verb+event.screenY+ livre la coordonnée de la hauteur relative à l'ensemble de l'écran.

\verb+event.type+ livre le type d'événement dont il s'agit.

\verb+event.width+ livre la largeur de la fenêtre après modification.

\verb+event.height+ livre la hauteur de la fenêtre après modification.

\verb+event.pageX+ ou \verb+event.clientX+ livre la coordonnée de la largeur de l'événement relativement à la fenêtre.

\verb+event.pageY+ ou \verb+event.clientY+ livre la coordonnée de la hauteur de l'événement relativement à la fenêtre.

\verb+event.target+ livre la fenêtre, le document ou le calque. Il retourne le type de l'élément déclenchant l'événement.

\verb+event.currentTarget+ retourne la phase de propagation déclenchant l'événement.

\textbf{N.B.} \verb+event.relatedTarget+ ne s'utilise qu'avec \verb+onmouseover+ et \verb+onmouseout+. Avec \verb+onmouseover+, il équivaut à \verb+fromElement+. Avec \verb+onmouseout+, il équivaut à \verb+toElement+.

\verb+event.which+ livre la touche ou le bouton de la souris qui a été activé.

\verb+event.altKey+ précise si la touche \verb+alt+ activée et renvoie un booléen.

\verb+event.ctrlKey+ précise si la touche \verb+ctrl+ a été activée et renvoie un booléen.

\verb+event.shift+ précise si la touche \verb+maj+ a été activée et renvoie un booléen.

\verb+event.keyCode+ retourne le code de la touche activée.

\verb+event.button+ indique quel bouton de la souris a été activé.

\verb+event.fromElement+ indique d'où vient le pointeur de souris.

\verb+event.toElement+ indique vers quoi pointe le pointeur de souris.

\subsection{Les méthodes d'instance}

\verb+event.stopPropagation()+ stoppe la propagation des événements, utile lorsqu'il existe des événements emboîtés.

\verb+event.preventDefault()+ stoppe un événement, mais ne stoppe pas la propagation.

\textbf{N.B.} Ces deux méthodes sont utiles pour les formulaires.

\subsection{La capture d'un événement avec event}

Il existe deux méthodes pour capturer un événement avec \verb+event+ :
	\begin{enumerate}
		\item soit directement avec \verb+event+ ;
		\item soit avec une étape en ajoutant à la fonction un argument \verb+event+ qui est ici une variable.
	\end{enumerate}

La fonction appelée dans \verb+addEventListener+ reste sans parenthèses.
\begin{lstlisting}
	p1.addEventListener("click", changeTexte);
	function changeTexte(event)
	{
		...
	}
\end{lstlisting}

Historiquement, il existait plusieurs méthodes de \verb+window+, \verb+document+ ou \verb+div+ pour capturer des événements \verb+event+.
	\begin{itemize}
		\item [obsolète] \verb+captureEvents()+
\begin{lstlisting}
	document.captureEvents(Event.MOUSEMOVE);
	document.onmousemove = function (event) { ... };
\end{lstlisting}
		\item [obsolète] \verb+releaseEvents()+ pour \verb+window+ libère les événements.
		\item [obsolète] \verb+routeEvents()+ pour \verb+window+ transmet les événements.
		\item \verb+handleEvents()+ pour \verb+window+ exploite les événements.
	\end{itemize}

\section{Gestion des exceptions en JavaScript}\markboth{}{Gestion des exceptions en JavaScript}

Il s'agit de gérer les problèmes externes au programme :
	\begin{itemize}
		\item \textbf{la connexion à un réseau} ;
		\item \textbf{l'ouverture d'un fichier externe} ;
		\item \textbf{la gestion des fichiers sensibles} (saisies de formulaire).
	\end{itemize}

Il existe dix erreurs pouvant être capturées :
	\begin{itemize}
		\item \verb+Error+ $\rightarrow$ erreur générale
		\item \verb+TypeError+ $\rightarrow$ erreur de type (invalidité de type)
		\item \verb+InternalError+ $\rightarrow$ erreur interne au `JavaScript`
		\item \verb+RangeError+ $\rightarrow$ valeur hors de l'intervalle
		\item \verb+ReferenceError+ $\rightarrow$ déréférencement d'un référence invalide
		\item \verb+AggregateError+ $\rightarrow$ différentes erreurs agrégées par une opération
		\item \verb+SyntaxError+ $\rightarrow$ erreur de syntaxe
		\item \verb+SystemError+ $\rightarrow$ erreur système
		\item \verb+EvalError+ $\rightarrow$ erreur en relation avec la fonction globale \verb+eval()+
		\item \verb+URIError+ $\rightarrow$ paramètres invalides dans un \verb+encodeURI()+ ou un \verb+decodeURI()+
	\end{itemize}

\subsection{Lever une exception}

Il est possible de créer une exception avec \verb+throw+ en introduisant dans une condition.
\begin{lstlisting}
	throw new Error("...");
\end{lstlisting}

\noindent On dit qu'on lève une exception.

\subsection{Capturer une exception}

Lorsque le programme exécute une partie susceptible de générer une exception, on le teste et capture l'éventuelle erreur.
\begin{lstlisting}
	try
	{
		if(erreur1)
		{
			throw ... ;
		}
			elseif(erreur2)
		{
			throw ... ;
		}
		else
		{
			throw ... ;
		}
	}
	catch(erreur)
	{
		console.warn(erreur.message);
		console.warn(erreur.stack);
		console.warn(erreur.name);
		console.warn(erreur.lineNumber);
	}
	finally
	{
		...
	}
\end{lstlisting}

\verb+catch+ permet de capturer :
	\begin{itemize}
		\item un message d'erreur avec \verb+message+ ;
		\item une trace avec \verb+stack+ (non standard) ;
		\item un nom d'erreur avec \verb+name+ ;
		\item une ligne de l'erreur avec \verb+lineNumber+ (non standard).
	\end{itemize}

\verb+finally+ est facultatif. Le code qui s'y trouve, s'exécute quoi qu'il se produise :
	\begin{itemize}
		\item la fermeture d'un fichier ;
		\item la fin d'un code ;
		\item la réintroduction des valeurs ;
		\item \textit{etc}.
	\end{itemize}

Il est possible de tester les erreurs.
\begin{lstlisting}
	if(erreur instanceof TypeError)
	{
		console.log("Erreur Type");
	}
\end{lstlisting}

\subsection{Créer ses exceptions}

Exemple : la division par zéro

Le plus simple est de créer une fonction.
\begin{lstlisting}
	function monErreur(message)
	{
		const err = new Error(message);
		err.logfile = "... .log";
		err.code = "...";
		err.message = "C'est une erreur !";
		return err;
	}
	throw new monErreur("Problème !");
\end{lstlisting}

À partir d'une fonction, on crée un objet :
\begin{lstlisting}
	CustomException.prototype = Object.create(Error.prototype);
\end{lstlisting}

On peut créer une classe.
\begin{lstlisting}
	class monErreur extends Error
	{
		constructor(code, ...params)
		{
			super(...params);
			this.name = "Mon exception";
			this.code = code;
		}
	}
	throw new monErreur();
\end{lstlisting}

\textbf{Attention !} Les assertions n'existent pas en `JavaScript`, mais on peut créer une fonction \verb+assert+.

\section{Gestion des délais d'exécution}\markboth{}{Gestion des délais d'exécution}

Exemple : faire une horloge.

En HTML :
\begin{lstlisting}
	<p><span id="horloge"></span></p>
\end{lstlisting}

En `JavaScript`
\begin{lstlisting}
	let hms = document.getElementById("horloge");
	//Déclenchement de la fonction ecoulement() toutes les secondes
	let affichageHeureEnTempsReel = setInterval(ecoulement, 1000);
	function ecoulement()
	{
		let date = new Date();
		//Affichage de l'heure locale
		hms.innerHTML = date.toLocaleTimeString();
	}
\end{lstlisting}

Stopper l'horloge
\begin{lstlisting}
	clearInterval(affichageHeureEnTempsReel);
\end{lstlisting}

Changer la couleur de la page à un temps constant :
\begin{lstlisting}
	setTimeout(function () {body.style.backgroundColor = "..."}, 200);
\end{lstlisting}

\textbf{Attention !} \verb+setTimeout+ est \textbf{asynchrone}. Pour exécuter une série d'instructions à pas de temps précis, il faut en mettre plusieurs avec un écoulement augmenté.
	\begin{itemize}
		\item \verb+setTimeout("instruction1", 2000);+ signifie que, au bout de deux secondes, l'instruction 1 est exécutée.
		\item \verb+setTimeout("instruction2", 4000);+ signifie que, au bout de quatre secondes, l'instruction 1 est exécutée.
		\item Si les temps de l'instruction 1 et de l'instruction 2 sont identiques, alors seule l'instruction 2 sera exécutée.
	\end{itemize}

Programme
\begin{lstlisting}
	let tableCouleur = ["purple", "darkblue", "blue", "red", "orange", "yellow", "green", "darkgreen", "white", "brown", "black", "white"];
	let corps = document.body;
	let nb = tableCouleur.length;
	for(let i = 0 ; i < nb ; i++)
	{
		//Chargement de couleur toutes les deux secondes
		setTimeout("corps.style.backgroundColor = tableCouleur[" + i + "]", i*2000);
	}
\end{lstlisting}

On peut améliorer le code en appelant infiniment le changement de couleurs.
	\begin{enumerate}
		\item On crée la variable
			\begin{lstlisting}
				let pasDeTemps = 2000;//millisecondes
			\end{lstlisting}
		\item On crée un \verb+setInterval+
			\begin{lstlisting}
				setInterval("changementDeCouleur()", pasDeTemps * nb);
			\end{lstlisting}
		\item On place la boucle \verb+for+ dans une fonction d'appel \verb+changementDeCouleur()+.
	\end{enumerate}

\section{Le mode Strict}\markboth{}{Le mode Strict}

Le mode strict rend le `JavaScript` moins permissif.

Exemple : \verb+a = 1;+ est toléré. Cela ne déclenche aucune erreur, alors qu'il manque la déclaration \verb+let+ ou \verb+var+. En mode strict, cela déclenche une erreur.

Pour activer le mode strict, on place \verb+'use strict';+ au début du code ou de la fonction.

Le \verb+TypeScript+ est une surcouche du `JavaScript` de ce mode strict.

\section{L'objet Canvas}\markboth{}{L'objet Canvas}

L'objet \verb+Canvas+ permet de dessiner des formes géométriques. La \verb+canvas+ contient les graphiques codés par `JavaScript`. L'objet a besoin de deux attributs minimaux : la largeur et la hauteur du rectangle contenant le \verb+canvas+.

Le \verb+canvas+ est créé dans une page HTML par une balise \verb+<canvas>...</canvas>+. Pour l'appeler, il est conseillé de mettre un identifiant.
\begin{lstlisting}
	<canvas id="canvas1" width="250" height="100"></canvas>
\end{lstlisting}

\textbf{Attention !} \verb+width+ et \verb+height+ n'ont \textbf{pas d'unités}, car \verb+canvas+ gère l'équivalent pixel.

\textbf{N.B.} Entre les balises \verb+canvas+, on place un texte alternatif à destination des navigations ne supportant pas la balise.

La mise à jour de la balise s'effectue en C.S.S. et `JavaScript`.
	\begin{enumerate}
		\item Réinitialiser les marges automatiques du navigateur en C.S.S.
\begin{lstlisting}
	body
	{
	margin:0px;
	padding:0px;
	}
	#canvas1
	{
		background-color:orange;
	}
\end{lstlisting}
		\item Récupérer le \verb+canvas+ en `JavaScript`
\begin{lstlisting}
	let canvas = document.getElementById("canvas1");
\end{lstlisting}
		\item Définir le contexte en `JavaScript`
\begin{lstlisting}
	let contexte = canvas.getContext("2D");
\end{lstlisting}
		\noindent \textbf{N.B.} Le contexte dispose pour l'instant d'un attribut unique \verb+"2D"+, mais il n'est pas impossible qu'un jour l'attribut \verb+"3D"+ voie le jour.
	\end{enumerate}

\subsection{Le système de coordonnées}

Le système de coordonnées est le suivant (Fig. \ref{td3fig7}).

\begin{figure}[!h]
	\centering
	\includegraphics[width=6.25cm]{IMG/Objet-Canvas.png}
	\caption{Le système de coordonnées de l'objet Canvas}
	\label{td3fig7}
\end{figure}

\textbf{N.B.} Il est possible d'utiliser un demi-pixel.

\subsection{Dessiner un rectangle}

\subsubsection{Rectangle plein}

\begin{enumerate}
	\item Définir un style :
\begin{lstlisting}
	contexte.fillStyle = "couleur";
\end{lstlisting}
	\item Déclarer les coordonnées du rectangle :
\begin{lstlisting}
	contexte.fillRect(décalage à gauche du canvas, décalage par rapport au haut du canvas, largeur, hauteur);
\end{lstlisting}
\end{enumerate}

\subsubsection{Rectangle vide}

\begin{enumerate}
	\item Définir une bordure par son épaisseur :
\begin{lstlisting}
	contexte.lineWidth = "5";
\end{lstlisting}
	\item Définir un style :
\begin{lstlisting}
	contexte.strokeStyle = "couleur";
\end{lstlisting}
	\item Déclarer les coordonnées du rectangle :
\begin{lstlisting}
	contexte.strokeRect(x, y, l, h);
\end{lstlisting}
\end{enumerate}

\textbf{N.B.} On peut superposer les formes, mais il faut faire attention à l'ordre des déclarations :
	\begin{enumerate}
		\item rectangle \no{}1 (arrière-plan)
		\item rectangle \no{}2
		\item rectangle \no{}3 (premier plan)
	\end{enumerate}

\subsubsection{Effacement du rectangle}

\begin{lstlisting}
	contexte.clearRect();
\end{lstlisting}

\subsection{Dessiner des lignes (ou des chemins)}

\subsubsection{Méthode 1}

\begin{enumerate}
	\item Définir un style :
\begin{lstlisting}
	contexte.strokeStyle = "couleur";
\end{lstlisting}
	\item Définir les coordonnées du premier point de la ligne :
\begin{lstlisting}
	contexte.moveTo(décalage à gauche du canvas, décalage par rapport au haut du canvas);
\end{lstlisting}
	\item Définir les coordonnées du dernier point de la ligne :
\begin{lstlisting}
	contexte.lineTo(x, y);
\end{lstlisting}
	\item Tracer la ligne :
\begin{lstlisting}
	contexte.stroke();
\end{lstlisting}
\end{enumerate}

\textbf{N.B.} À l'étape \no{}3, si on place plusieurs \verb+lineTo+, la nouvelle ligne se sert du dernier point de la ligne précédente pour tracer la ligne suivante, d'où l'idée de chemin.

\textbf{Attention !} Si on change les styles des lignes, il faut créer chacun des tracés par la méthode 2.

\subsubsection{Méthode 2}

\begin{enumerate}
	\item Déclarer un nouveau chemin :
\begin{lstlisting}
	contexte.beginPath();
\end{lstlisting}
	\item Donner une épaisseur à la ligne :
\begin{lstlisting}
	contexte.lineWidth = "5":
\end{lstlisting}
	\item Définir un style :
\begin{lstlisting}
	contexte.strokeStyle = "couleur";
\end{lstlisting}
	\item Définir un point de départ :
\begin{lstlisting}
	contexte.moveTo(x, y);
\end{lstlisting}
	\item Définir un point d'arrivée :
\begin{lstlisting}
	contexte.lineTo(x, y);
\end{lstlisting}
	\item Tracer la ligne :
\begin{lstlisting}
	contexte.stroke();
\end{lstlisting}
\end{enumerate}

\subsubsection{Fermeture d'un chemin}

\begin{lstlisting}
	contexte.closePath();
\end{lstlisting}

\subsection{Dessiner des arcs de cercle}

Les angles sont définis en radians.

Le sens du traçage suit les aiguilles d'une montre par défaut.

\textbf{N.B.} Pour convertir les degrés en radians, il suffit de taper :
\begin{lstlisting}
	let degre = "...";
	let radian = degre * (Math.PI/180);
\end{lstlisting}

\subsubsection*{Cercle plein}
\addcontentsline{toc}{subsubsection}{Cercle plein}

\begin{lstlisting}
	contexte.beginPath();
	contexte.lineWidth = "5";
	contexte.fillStyle = "couleur";
	contexte.arc(décalage à gauche du canvas, décalage par rapport au haut du canvas, rayon, angle de départ par rapport au cercle trigonométrique, angle d'arrivée);
\end{lstlisting}

\textbf{N.B.} \verb+x+ et \verb+y+ définissent le centre du cercle

\begin{lstlisting}
	contexte.fill();
\end{lstlisting}

\subsubsection{Cercle vide}

\begin{lstlisting}
	contexte.beginPath();
	contexte.lineWidth = "5";
	contexte.strokeStyle = "couleur";
	contexte.arc(x, y, r, angle1, angle2);
	contexte.troke();
\end{lstlisting}

\textbf{N.B.} \verb+arc+ a un sixième argument, un booléen indique si on tourne dans le sens des aiguilles d'une montre (\verb+true+), ou non (\verb+false+).

\subsection{Styles de traits, remplissages et couleurs (propriétés)}

\verb+fillStyle+ définit le style de remplissage à l'intérieur des formes.

\verb+strokeStyle+ définit le style pour les lignes autour des formes.

\verb+lineWidth+ définit la largeur des lignes avec un nombre positif.

\verb+lineJoin+ définit le style de jointure des lignes avec \verb+bevel+, \verb+round+ et \verb+miter+.

\verb+lineCap+ définit la forme de fin de ligne avec \verb+butt+ (par défaut), \verb+round+ ou \verb+square+.

\verb+miterLimit+ définit la limite de fin avec \verb+miter+ par un nombre positif.

\verb+globalAlpha+ définit une transparence générale par un nombre positif compris entre 0 et 1.

\subsection{Créer des dégradés}

\subsubsection{Le dégradé linéaire}

\begin{lstlisting}
	let lineaire = contexte.createLinearGradient(décalage à gauche du canvas, décalage par rapport au haut du canvas, décalage à droite, décalage par rapport au bas);
\end{lstlisting}

Mettre des points d'arrêts :
	\begin{itemize}
		\item \verb+lineaire.addColorStop(0, "purple");+
		\item \verb+lineaire.addColorStop(0.5, "blue");+
		\item \verb+lineaire.addColorStop(1, "green");+
	\end{itemize}

Placer le dégradé dans une figure géométrique

\subsubsection{Le dégradé radial}

\begin{lstlisting}
	let radial = contexte.createRadialGradient(décalage à gauche du canvas, taille du dégradé, décalage par rapport au haut du canvas, taille du dégradé);
\end{lstlisting}

Mettre des points d'arrêts :
	\begin{itemize}
		\item \verb+lineaire.addColorStop(0, "purple");+
		\item \verb+lineaire.addColorStop(0.5, "blue");+
		\item \verb+lineaire.addColorStop(1, "green");+
	\end{itemize}

\textbf{N.B.} Les codes couleurs sont : \verb+rgb+, \verb+hsl+, \verb+hsla+, et \verb+rgba+.

Placer le dégradé dans une figure géométrique

\textbf{N.B.} Il faut bien faire attention à la taille et à la position entre dégradé et forme.

\subsection{Créer un texte}

\subsubsection{Texte creux}

\begin{lstlisting}
	contexte.font = "bold 20px Verdana,Arial,Serif";
	contexte.strokeStyle = "couleur";
	contexte.strokeText("Texte creux", x, y);
\end{lstlisting}

\subsubsection{Texte plein}

\begin{lstlisting}
	contexte.fillStyle = "couleur";
	contexte.fillText("Texte plein", x, y);
\end{lstlisting}

\subsubsection{Propriétés graphiques}

\verb+contexte.textAlign = + définit l'alignement horizontal avec \verb+start+ (par défaut), \verb+end+, \verb+left+, \verb+center+ et \verb+right+.

\verb+contexte.textBaselines = + définit l'alignement vertical avec \verb+top+, \verb+hanging+, \verb+middle+, \verb+alphabetic+ (par défaut), \verb+ideographic+ et \verb+bottom+.

\subsubsection{Méthode}

\verb+measureText("texte")+ renvoie l'espace nécessaire pour un texte (en pixels).

\subsection{Créer une image}

L'image à charger doit être déclarée normalement dans le \verb+body+ avec \verb+img+, identifiée par son identifiant \verb+id=image+
\begin{lstlisting}
	#image
	{
		diplay:none;
	}
\end{lstlisting}

En `JavaScript`,
	\begin{enumerate}
		\item on récupère l'image
\begin{lstlisting}
	let image = document.getElementById("image");
\end{lstlisting}
		\item on attend le chargement de l'image avec un événement
\begin{lstlisting}
	image.addEventListener('load', afficheImage);
	function afficheImage()
	{
		contexte.drawImage(image, x, y, tailleX, tailleY)
	}
\end{lstlisting}
		\noindent \textbf{N.B.} \verb+tailleX+ et \verb+tailleY+ sont facultatifs.
	\end{enumerate}


\subsection{Modifier et gérer les pixels}

L'objet \verb+ImageData+ dispose de plusieurs propriétés.

\verb+createImageData(l, h)+ crée un objet \verb+ImageData+ avec une largeur et une hauteur.

\verb+createImageData(imgdata)+ crée un objet \verb+ImageData+ \verb+imgdata+ est un objet dont les dimensions servent à recréer un objet vide de mêmes dimensions. Par défaut, les pixels sont fixés au noir transparent.

\verb+getImageData(x, y, l, h)+ lit une zone de pixels et renvoie un objet \verb+ImageData+ avec \verb+x+ et \verb+y+ les coordonnées de départ, et la largeur \verb+l+ et la hauteur \verb+h+.

\verb+putImageData(imageData, x, y)+ remplace par les données de pixels à remplacer dans la zone \verb+imageData+ et les coordonnées de destination \verb+x+ et \verb+y+.

\verb+putImageData(imageData, x, y, dirtyX, dirtyY, dirtyWidth, dirtyHeight)+ remplace par les données de pixels dans la zone du canvas \verb+imageData+, \verb+x+ et \verb+y+ les coordonnées de destination, \verb+dirtyX+, \verb+dirtyY+, \verb+dirtyWidth+ et \verb+dirtyHeight+ la spécification d'une zone de destination de dimensions différentes.

\verb+ImageData+ a trois propriétés : \verb+width+, \verb+height+ et \verb+data+. \verb+data+ renvoie à un objet \verb+CanvasPixelArray+ stockant les données par pixel sous la forme d'une table par laquelle on accède aux pixels individuellement de la manière suivante :
	\begin{itemize}
		\item \verb+imageData.data[0]+ : pixel 1, rouge
		\item \verb+imageData.data[1]+ : pixel 1, vert
		\item \verb+imageData.data[2]+ : pixel 1, bleu
		\item \verb+imageData.data[3]+ : pixel 1, alpha
		\item Le pixel 2 est représenté par 4, 5, 6 et 7. Le pixel 2 est représenté par 8, 9, 10 et 11. \textit{etc}.
	\end{itemize}

\subsection{Transformer une figure géométrique}

\subsubsection{Rotation}

Elle s'opère dans le sens des aiguilles d'une montre.

Elle s'opère à partir du bord supérieur gauche des dessins.

La méthode se place avant le dessin.

\verb+contexte.rotate(angle de rotation en radian);+

\verb+contexte.fillStyle = "couleur";+

\verb+contexte.fillRect(x, y, l, h);+

\textbf{Attention !} Si on place plusieurs \verb+rotate(...)+, les angles de rotation s'accumulent.

\subsubsection{Translation}

Elle fixe un point de  référence pour les dessins.

Elle se place avant le dessin.

\verb+contexte.translate(x, y);+

\verb+contexte.fillStyle = "couleur";+

\verb+contexte.fillRect(x, y, l, h);+

\textbf{N.B.} On peut combiner \verb+rotate+ et \verb+translate+ en définissant un point de référence : \verb+translate+, puis \verb+rotate+.

\subsubsection{Mise à l'échelle}

\verb+contexte.scale(+ \textit{coefficient appliqué à l'horizontal} \verb+,+ \textit{coefficient appliqué à la verticale} \verb+);+

\textbf{N.B.} \verb+coefficient = 1+ signifie qu'on ne redimensionne pas.

\subsubsection{Sauvegarde et restauration}

\verb+contexte.save()+ sauve l'état graphique courant dans la pile.

\verb+contexte.restore()+ restaure l'état présent sur le haut de la pile.

\subsection{Motifs et sprites}

Un \textbf{motif} consiste en une répétition de la même image, sur les deux axes, ou sur un axe seulement.

Un \textbf{sprite} est un artifice consistant à stocker dans un seul fichier plusieurs images afin de les « découper » après chargement et de les utiliser de façon séparée.

\verb+createPattern(image, + \textit{répétition} \verb+);+

La répétition peut être :
	\begin{itemize}
		\item \verb+repeat(+ \textit{x et y par défaut} \verb+)+
		\item \verb+repeat-x(+ \textit{x seulement} \verb+)+
		\item \verb+repeat-y(+ \textit{y seulement} \verb+)+
		\item \verb+no-repeat(+ \textit{pas de répétition} \verb+)+
	\end{itemize}

\subsection{Ombrages}

\verb+contexte.shadowOffsetX = + \textit{nombre relatif fixant l'étendue de l'ombrage sur l'axe horizontal}

\verb+contexte.shadowOffsetY = + \textit{nombre relatif fixant l'étendue de l'ombre sur l'axe vertical}

\verb+contexte.shadowBlur = + \textit{entier positif fixant la valeur du flou}

\verb+contexte.shadowColor = + \textit{couleur de l'ombrage}

\subsection{Transparence générale}

\verb+contexte.globalAlpha = + \textit{un nombre entre 0 et 1}

\subsection{Composition}

\verb+context.globalCompositeOperation = +
	\begin{itemize}
		\item \verb+"source-over"+ : la source se retrouve par-dessus la destination (par défaut).
		\item \verb+"source-in"+ : la source est visible uniquement là où la source et la destination se recouvrent. Tout le reste est rendu transparent.
		\item \verb+"source-out"+ : la source est visible uniquement là où elle ne recouvre pas la destination.
		\item \verb+"source-atop"+ : la source est visible uniquement là où source et destination se recouvrent.
		\item \verb+"destination-over"+ : la source est dessinée derrière le contenu existant.
		\item \verb+"destination-in"+ : le contenu existant reste visible uniquement là où source et destination se recouvrent. Tout le reste est rendu transparent.
		\item \verb+"destination-out"+ : le contenu existant reste visible uniquement là où il ne recouvre pas la source.
		\item \verb+"destination-atop"+ : le contenu existant reste visible uniquement là où source et destination se recouvrent. La source est dessinée derrière le contenu existant.
		\item \verb+lighter+ : la couleur est déterminée par addition là où source et destination se recouvrent.
		\item \verb+darker+ : la couleur est déterminée par soustraction là où source et destination se recouvrent.
		\item \verb+copy+ : seule la source est dessinée, tout le reste est retiré.
		\item \verb+xor+ : source et destination sont rendus transparentes là où elles se recouvrent, et dessinées de façon normale sinon.
	\end{itemize}

\subsection{Masques}

\verb+contexte.clip()+ utilise le chemin courant comme masque.

\subsection{Vidéo et audio}

\verb+Canvas+ peut répliquer le contenu graphique d'une vidéo en opérant un zoom par exemple.

\verb+Canvas+ peut être associé à un son.

\section{Les \textit{Polyfills} et les \textit{Wrappers}}\markboth{}{Les \textit{Polyfills} et les \textit{Wrappers}}

Un \textbf{\textit{polyfill}} est un script qui a pour but de fournir une technologie à tous les navigateurs existants. Une fois implémenté dans le code, un \textit{polyfill} a deux manière de réagir.
	\begin{enumerate}
		\item Si le navigateur est récent et supporte la technologie souhaitée, le \textit{polyfill} ne fera strictement rien.
		\item Si le navigateur est trop vieux et ne supporte pas la technologie souhaitée, le \textit{polyfill} va alors « imiter » cette technologie grâce à diverses astuces et permettra de l'utiliser comme si elle était disponible nativement.
	\end{enumerate}

Exemple :
\begin{lstlisting}
	if(!Array.isArray)
	{
		Array.isArray = function (element)
		{
			return Object.prototype.toString.call(element) = '[object Array]';
		};
	}
\end{lstlisting}

\noindent La méthode \verb+isArray+ est alors implantée dans le prototype de l'objet \verb+Array+.

Le site MDN contient beaucoup de \textit{polyfill} :
	\begin{itemize}
		\item \verb+trim()+ de \verb+String+ ;
		\item \verb+isArray()+ de \verb+Array+ ;
		\item \verb+forEach()+ de \verb+Array+.
	\end{itemize}

Un \textbf{\textit{wrapper}} doit permettre au développeur de se passer de l'élément original. De fait, le travail ne s'effectuera que par le biais de la surcouche que constitue le \textit{wrapper}.

En effet, sans \textit{wrapper}, il est possible de créer une méthode supplémentaire pour certains objets natifs de `JavaScript` comme :
\begin{lstlisting}
	Array.prototype.maMethode = function () {...};
	[].maMethode();
\end{lstlisting}

\noindent Toutefois, modifier un objet natif est déconseillé. De fait, un \textit{wrapper}, c'est-à-dire un code ayant pour but d'encadrer l'utilisation de certains éléments du `JavaScript`, peut ainsi contrôler la manière dont ils sont employés et peut réagir en conséquence pour fournir des fonctionnalités supplémentaires aux développeurs.

Exemple : \verb+complete+ de l'objet \verb+Image+
\begin{lstlisting}
	function Img()
	{
		let objet = this;
		this.originalImg = new Image();
		this.complete = false;
		this.onload = function () {};
		this.originalImg.onload = function ()
		{
			obj.complet = true;
			obj.onload();
		};
	}
\end{lstlisting}

On peut introduire un \textit{setter} et un \textit{getter}.
\begin{lstlisting}
	Img.prototype.set = function (name, valeur)
	{
		let allowed = ['width', 'height', 'src'], wrapperProperties = ['complete', 'onload'];
		if(allowed.indexOf(name) != 1)
		{
			this.originalImg[name] = value;
		}
		elseif(wrapperProperties.indexOf(name) != 1)
		{
			this[name] = value;
		}
	};
	Img.prototype.get = function (name)
	{
		return typeof(this[name] != 'undefined' ? this[name] : this.originalImg[name]);
	};
\end{lstlisting}

Les \textit{wrapper} ont de nombreuses bibliothèques `JavaScript`. Ils ont l'avantage de permettre une gestion simple du langage sans pour autant l'altérer.

\section{Introduction au XML}\markboth{}{Introduction au XML}

Le XML permet de structurer un document avec des noms de balises personnalisés. Il est par conséquent possible de réduire drastiquement le poids d'un transfert simplement grâce à l'utilisation de noms de balise plutôt courts et \textbf{explicite}.
\begin{lstlisting}
	<?xml version="1.0" encoding="utf-8"?>
	<table>
		<line>
			<cel>...</cel>
			...
		</line>
		...
	</table>
\end{lstlisting}

En utilisant la requête appropriée, l'utilisation du XML est intéressante pour parcourir son code avec les méthodes que le D.O.M. HTML, comme \verb+getElementByTagName()+
	\begin{enumerate}
		\item requête
		\item lecture du fichier dans un \textbf{parseur} (ou analyseur syntaxique)
		\item reconstitution du document XML sous la forme d'arbre D.O.M.
	\end{enumerate}

\section{Introduction à l'A.J.A.X.}\markboth{}{Introduction à l'A.J.A.X.}

A.J.A.X. signifie \textit{Asynchronous JavaScript and XML}. Il s'agit d'un \textbf{ensemble de technologies} destinées à réaliser de rapides mises à jour du contenu d'une page web. Elles sont diverses et variées, mais le transfert de données est géré \textbf{exclusivement} par le `JavaScript`, et utilise certaines technologies de formatage de données, comme le XML ou le \verb+JavaScript Object Notation+ (J.S.O.N.).

L'A.J.A.X. permet d'utiliser des données sans avoir besoin du moindre rechargement visible par l'utilisateur de la page web :
	\begin{enumerate}
		\item pour l'auto-complétion ;
		\item pour le sauvegarde des textes.
	\end{enumerate}

L'A.J.A.X. permet des requêtes rapides.

Les quatre formats principaux de données sont :
	\begin{itemize}
		\item \textbf{le format texte} ;
		\item \textbf{le format HTML} ;
		\item \textbf{le format XML} ;
		\item \textbf{le format J.S.O.N.} (le plus courant).
			\begin{description}
				\item[\textbf{N.B.}] Il segmente les données dans un objet `JavaScript`. Il est très avantageux pour de petits transferts de données segmentées et est de plu en plus utilisé dans de très nombreux langages.
			\end{description}
	\end{itemize}

\label{td3json}\section*{Introduction au J.S.O.N.}\markboth{}{Introduction au J.S.O.N.}

L'inventeur du J.S.O.N. est Douglas Crockford\marginpar{Douglas Crockford (né en )}. Il maintient toujours le site officiel : \href{https://JSON.org}{https://JSON.org}. Officiellement, le J.S.O.N. date de 2013, mais il est utilisé sans nom depuis 2002?

Le J.S.O.N. est un \textbf{format de données textuelles} dérivé de la notation `JavaScript`. Il représente une \textbf{série d'informations structurées} sous la forme de paires clé/valeur. Chaque paire est séparée par une virgule \verb+,+

Le J.S.O.N. formate les données sous la forme d'un objet `JavaScript`.
\begin{lstlisting}
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
\end{lstlisting}

Toutefois, il existe deux différents majeures entre J.S.O.N. et un objet `JavaScript`.
\begin{enumerate}
	\item Toutes les clés sont représentées sous forme de chaînes de caractères. Les guillemets sont obligatoires pour créer une clé, à la différence d'un objet `JavaScript`.
\begin{lstlisting}
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
\end{lstlisting}
	\item Le J.S.O.N. peut stocker de nombreux types de valeur :
		\begin{itemize}
			\item \verb+string+ ;
			\item \verb+number+ ;
			\item \verb+object+ ;
			\item \verb+array+ ;
			\item \verb+true+ ;
			\item \verb+false+ ;
			\item \verb+null+.
		\end{itemize}
\end{enumerate}

Le format J.S.O.N. peut facilement être stocké :
	\begin{itemize}
		\item soit côté client sous la forme de cookies ou par l'intermédiaire de l'objet \\ \verb+localStorage+ ;
		\item soit par l'intermédiaire d'un fichier muni d'une extension \verb+*.json+.
	\end{itemize}

J.S.O.N. est un objet `JavaScript` possédant deux méthodes statiques.
	\begin{itemize}
		\item \verb+JSON.parse(...)+ prend en paramètre la chaîne de caractères à analyser et retourne sous forme d'objet J.S.O.N.
		\item \verb+JSON.stringify(...)+ prend en paramètre un objet JSON et retourne son équivalent sous forme de chaîne de caractères.
	\end{itemize}

\textbf{N.B.} Le J.S.O.N. est décodé par le PHP depuis sa version 5.2 par la fonction \verb+json_decode()+ et \verb+json_encode()+.

\textbf{N.B.} Le J.S.O.N. n'est pas supporté par \verb+Internet Explorer+ avant sa version 8. Il faut ainsi utiliser un \textit{polyfill}.

\section{Méthode de requête HTTP}\markboth{}{Méthode de requête HTTP}

Les méthodes de requête HTTP sont également appelées \textbf{verbes HTTP}. Elles peuvent être sûre (\verb+safe+), idempotente ou mise en cache (\verb+cacheable+).

\verb+GET+ demande une représentation de la ressource spécifiée. Elle permet de récupérer les données.

\verb+POST+ envoie une entité vers la ressource indiquée. Cella entraîne généralement un changement d'état ou des effets de bord sur le serveur.

\verb+HEAD+ demande une réponse identique à une requête \verb+GET+ pour laquelle le corps de la réponse est omis ; seul l'entête est récupéré.

\verb+PUT+ remplace toutes les représentations actuelles de la ressource visée par le contenu de la requête.

\verb+DELETE+ supprime la ressource indiquée.

\verb+CONNECT+ établit un tunnel vers le serveur identifié par la ressource cible.

\verb+OPTIONS+ est utilisé pour décrire les options de communication avec la ressource visée.

\verb+TRACE+ réalise un message de test aller/retour en suivant le chemin de la ressource visée.

\verb+PATCH+ est utilisé pour appliquer des modifications partielles à une ressource.

\section{Les statuts des chargements}\markboth{}{Les statuts des chargements}

\verb+100+ : informatif. La requête a bien été reçue et le processus est en marche.

\verb+200+ : succès. La requête a bien été reçue et marche correctement.

\verb+300+ : redirection. La requête a bien été reçue, mais une étape supplémentaire est nécessaire pour qu'elle soit complétée.
	\begin{itemize}
		\item \verb+301+ : \verb+Moved Permanently+. La page demandée a été assignée à un nouvel U.R.L. permanent ce qui signifie que toute référence à cette source devrait utiliser l'U.R.L. renvoyé. Cette redirection est utilisée lorsqu'un U.R.L. doit rediriger vers un autre. 
		\item \verb+302+ : \verb+Found+. Le serveur répond à une requête avec une page provenant d'un emplacement différent pendant que le demandeur continue d'utiliser l'emplacement original pour une demande future. Ainsi, ce processus n'est pas optimal, car il n'informe pas les moteurs de recherche de la bonne manière qu'une page a changé d'emplacement. Utiliser ce code statut oblige les moteurs de recherche à utiliser la redirection temporairement sans donner le jeu de lien des redirections \verb+301+.
	\end{itemize}

\verb+400+ : erreur client. La requête a été demandée par un client, mais la page de destination est incorrecte.
	\begin{itemize}
		\item \verb+404+ : \verb+File Not Found+. Ce statut signifie que le serveur n'a rien trouvé en rapport à l'U.R.L. demandé, ce qui peut être permanent ou temporaire. Dans la plupart des cas, un message d'erreur \verb+404+ est affiché par les webmasters.
		\item \verb+410+ : \verb+Gone+. De façon permanent, l'U.R.L. demandé n'est plus disponible et aucune adresse de répétition n'est connue.
	\end{itemize}

\verb+500+ : erreur serveur. La requête fournie par le client est correcte, mais le serveur a échoué dans la transmission de sa réponse.
	\begin{itemize}
		\item \verb+503+ : \verb+Service unavailable+. La requête demandée ne peut pas être réalisée à cause de problèmes de serveur dus à une surcharge ou de la maintenance. Ce code statut devrait être utilisé lorsque le serveur est hors d'usage pour une période temporaire. Ce code statut communique aux moteurs de recherche de revenir plus tard, car la page n'est hors d'usage que pour un court instant.
	\end{itemize}

\section{L'objet XMLHttpRequest}\markboth{}{L'objet XMLHttpRequest}

L{}objet \verb+XMLHttpRequest+ fut conçu par \verb+Microsoft+ et implémenté dans \\ \verb+Internet Explorer+ et \verb+Outlook+ sous la forme d'un contrôle \verb+ActiveX+. Initialement nommé \verb+XMLHTTP+, il fut repris par les autres navigateurs sous son nom actuel, puis standardisé par le W3.C. Il constitue la technique la plus courant de l'A.J.A.X.

L'objet \verb+XMLHttpRequest+ permet d'interagir avec des \textbf{serveurs}. Pour fonctionner, il lui faut un protocole HTTP. On peut récupérer des données à partir d'un U.R.L. sans avoir à rafraîchir complètement la page. Cela permet à une page web d'être mise à jour sans perturber les actions de l'utilisateur.

Malgré son nom, l'objet peut être utilisé afin de récupérer \textbf{tout type} de données, et non uniquement de XML.
	\begin{description}
		\item[\textbf{N.B.}] \verb+FireFox+ et \verb+Chrome+ considèrent que les fichiers locaux ont par défaut des origines opaques. Leurs changements entraînent des erreurs \textbf{\textit{Cross-origin resource sharing}} (C.O.R.S.). Il faut par conséquent mettre en place un serveur local pour réaliser des tests.
	\end{description}

\begin{lstlisting}
	let xhr = new XMLHttpRequest();
\end{lstlisting}

\subsection{Les propriétés d'instance}

\textbf{N.B.} L.S. signifie en lecture seule.

\verb+xhr.onreadystatechange+ invoque un gestionnaire d'événement \verb+event handler+ à chaque fois que l'attribut \verb+readyState+ change. Il peut transmettre :
	\begin{itemize}
		\item \verb+abort+
		\item \verb+error+
		\item \verb+load+ $\rightarrow$ chargement de la requête
		\item \verb+loadstart+ $\rightarrow$ début du chargement de la requête
		\item \verb+loadend+ $\rightarrow$ fin du chargement de la requête
		\item \verb+progress+ $\rightarrow$ réception de données supplémentaires à intervalles réguliers
		\item \verb+timeout+
	\end{itemize}

[L.S.] \verb+xhr.readyState+ fournit l'état de la requête sous la forme d'un \verb+unsigned short+.

[L.S.] \verb+xhr.response+ déclenche un objet \verb+ArrayBuffer+, \verb+Blob+, \verb+Document+, un objet `JavaScript` ou une chaîne de caractères (\verb+DOMString+) selon la valeur de \\ \verb+XMLHttpRequest.responseType+. Cet objet contient le corps de la réponse.

[L.S.] \verb+xhr.responseText+ renvoie une chaîne de caractères \verb+DOMString+ qui contient la réponse à la requête sous forme du texte ou valeur \verb+null+ si la requête a échoué ou n'a pas encore été envoyée.

\verb+xhr.responseType+ donne une valeur parmi une liste qui définit le type de réponse.

[L.S.] \verb+xhr.responseURL+ donne un U.R.L. sérialisée de la réponse ou la chaîne vide si l'U.R.L. est nul.

[L.S.] \verb+xhr.responseXML+ renvoie un objet \verb+Document+ qui contient la réponse de la requête ou \verb+null+ si la requête a échoué, qu'elle n'a pas encore été envoyée ou qu'elle ne peut pas être analysée comme XML ou HTML.
	\begin{description}
		\item[\textbf{Attention !}] Cette propriété n'est pas disponible dans les \verb+workers+.
	\end{description}

[L.S.] \verb+xhr.status+ renvoie une valeur numérique \verb+unsigned short+ qui décrit le statut de la réponse à la requête.

[L.S.] \verb+xhr.statusText+ renvoie une chaîne de caractères, la réponse renvoyée par le serveur HTTP. À la différence de \verb+XMLHttpRequest.status+, tout le texte du statut est inclus (\verb+200 OK+ au lieu de \verb+200+ par exemple).

\verb+xhr.timeout+ renvoie un entier \verb+unsigned long+ qui représente le nombre de millisecondes qu'une requête peut prendre avant d'être terminée automatiquement.
	\begin{description}
		\item[] \verb+xhr.timeout = 10000;+ (millisecondes)
	\end{description}

[L.S.] \verb+xhr.upload+ renvoie un objet \verb+XMLHttpRequestUpload+ qui représente le processus d'\verb+upload+.

\verb+xhr.withCredentials+ renvoie un booléen qui indique si des requêtes \verb+Access-Control+ d'origines différentes peuvent être effectuées avec des informations d'authentification telles que des cookies ou des entêtes d'autorisation.

\subsection{Les méthodes d'instance}

\verb+xhr.abort()+ interrompt la requête si elle a déjà été envoyée.

\verb+xhr.getAllResponseHeaders(...)+ renvoie, \textit{via} une chaîne de caractères, l'ensemble des entêtes de la réponse, séparés par un \textit{Carriage Return Line Feed} (C.R.L.F.) ou la valeur \verb+null+ si aucune réponse n'a été reçue.

\verb+xhr.getResponseHeader(...)+ renvoie la chaîne de caractères contenant le texte de l'entête voulue ou \verb+null+ si aucune des réponses n'a été reçue ou si l'entête n'existe pas dans la réponse. Elle prend pour paramètre le nom de l'entête comme \verb+"Content-Type"+.

\verb+xhr.open(...)+ initialise une requête. Cette méthode doit être utilisée par du code `JavaScript`. Elle prend pour paramètres la méthode HTTP, l'U.R.L., le booléen précisant si l'asynchrone est accepté (facultatif), l'utilisateur (facultatif) et le mot de passe (facultatif).

\verb+xhr.overrideMimeType(...)+ surcharge le type \verb+MIME+ renvoyé par le serveur. Elle prend pour paramètre le type \verb+MIME+ comme \verb+"text/plain"+, \verb+"text/html"+, \verb+text/xml+, \textit{etc}.

\verb+xhr.send(...)+ envoie a requête. Si la requête est asynchrone (le comportement par défaut), la méthode renvoie un résultat dès que la requête est envoyée. Elle prend pour paramètre \verb+null+ ou l'élément à envoyer.

\verb+xhr.setRequestHeader(...)+ définit la valeur d'un entête de requête HTTP. Cette méthode doit être appelée après \verb+open()+, mais avant \verb+send()+. Elle prend pour paramètres l'\verb+header+ choisi et la valeur de l'\verb+header+.

\subsection{La récupération de données}

\begin{lstlisting}
	let methode = "GET";
	let url = "...";
	xhr.open(methode, url, true);
	//Système d'événements donnant l'état de la requête si l'asynchronie est enclenchée.
	xhr.onreadystatechange =  function () {if(xhr.readyState === 4 && xhr.status === 200) {response = xhr.responseText;}};
	xhr.send();
\end{lstlisting}

Ici, \verb+xhr.send()+ sert juste à récupérer les données et fermer la requête.

\textbf{N.B.} On peut aussi écrire \verb+xhr.send(null)+.

\vspace{1cm}

On peut récupérer des fichiers C.S.V., J.S.O.N., \textit{etc}.

\vspace{1cm}

\textbf{N.B.} En développement asynchrone, \verb+readyState+ passe par quatre événements (Tab. \ref{tab10}).

\input{TABLE/table10.txt}

\subsection{L'envoi de données à une page PHP}

Il est possible d'envoyer des données de formulaire directement en utilisant \verb+GET+ ou \verb+POST+.
\begin{lstlisting}
	xhr.open("POST", "... .php", true);
\end{lstlisting}

Il faut préciser que les données envoyées sont de type formulaire.
\begin{lstlisting}
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
\end{lstlisting}

Il faut sécuriser les données envoyées avec \verb+encodeURIComponent()+.
\begin{lstlisting}
	let param1 = encodeURIComponent(valeur1);
	let param2 = encodeURIComponent(valeur2);
\end{lstlisting}

\noindent La méthode échappe les caractères spéciaux et empêche l'injection d'un code malveillant.
\begin{lstlisting}
	let requete = "param1=" + param1 + "&param2=" + param2;
	xhr.send(requete);
\end{lstlisting}

\vspace{1cm}

\textbf{N.B.} On peut faire des entêtes pour soumettre en A.J.A.X.
\begin{lstlisting}
	xhr.setRequestHeader("X-Requested-With", "xmlhttprequest");
\end{lstlisting}

\subsection{La requête \textit{cross-domain}}

Les requêtes \textit{cross-domain} sont effectuées depuis un nom de domaine A vers un nom de domaine B. Elles se heurtent souvent au principe de sécurité \verb+same origin policy+ qui autorise les requêtes XHR qu'entre les pages web possédant le même nom de domaine. Toutefois, tout doit être identique : protocole, port, sous-domaine, \textit{etc}.

La solution consiste à ajouter un entête dans la page PHP appelée par la requête pour autoriser le \textit{cross-domain}.
\begin{lstlisting}
	<?php
		header("Access-Control-Allow-Origin: nom du site 1 | nom du site 2");
	?>
\end{lstlisting}

\noindent ou
\begin{lstlisting}
	<?php
		header("Access-Control-Allow-Origin:*");
	?>
\end{lstlisting}

\noindent permet d'ouvrir tous les domaines à la page PHP.
	\begin{description}
		\item[\textbf{Attention !}] C'est la porte ouverte au piratage.
	\end{description}

Pour accéder aux cookies, on doit ajouter un entête : \\ \verb+Access-Control-Allow-Credentials: true+ dans \verb+PHP+.
	\begin{description}
		\item[\textbf{Attention !}] \verb+Allow-Origin+ ne doit avoir qu'un seul domaine, et pas d'astérique. Cet entête est également une méthode \verb+xhr+.
\begin{lstlisting}
	xhr.withCredentials = true;
\end{lstlisting}
		\noindent Il faut le définir entre \verb+open+ et \verb+send+.
	\end{description}

\subsection{L'objet FormData}

L'objet \verb+FormData+ permet d'envoyer des données binaires au serveur avec la méthode \verb+POST+.
\begin{lstlisting}
	let form = new FormData();
	form.append("champ1", "valeur1");
	form.append("champ2", "valeur2");
\end{lstlisting}

\noindent On place ce code entre \verb+open()+ et \verb+send()+.

Côté serveur, on peut récupérer les données.
\begin{lstlisting}
	<?php
		echo $_POST["champ1"]."_".$_POST["champ2"];
	?>
\end{lstlisting}

\textbf{N.B.} On peut mettre un élément du D.O.M. en paramètre de \verb+FormData+, comme un formulaire.

\section{A.J.A.X. avec fetch}\markboth{}{A.J.A.X. avec fetch}

\subsection{Tester l'existence de fetch}

Tous les navigateurs n'acceptent pas \verb+fetch+, il est possible de tester l'existence de \verb+fetch+.
\begin{lstlisting}
	if(window.fetch)
	{
		...
	}
	else
	{
		...
	}
\end{lstlisting}

\subsection{Tester l'A.J.A.X.}

Le site \href{https://jsonplaceholder.typicode.com}{https://jsonplaceholder.typicode.com} teste l'A.J.A.X. des fonctions :
	\begin{itemize}
		\item \verb+XMLHttpRequest+
		\item \verb+fetch+
	\end{itemize}

\verb+fetch+ retourne une promesse.

Exemple :
\begin{lstlisting}
	fetch("URL")
		.then((response) => {
			if(response.ok)
			{
				console.log(response);
				return response.json();
			}
			else
			{
				console.log('Erreur : données non transmises');
			}
		})
		.then((data) => {
			console.log(data);
		});
\end{lstlisting}

Les propriétés des réponses sont :
	\begin{itemize}
		\item \verb+response.ok+ $\rightarrow$ retourne vrai si le statut vaut entre 200 et 299
		\item \verb+response.status+ $\rightarrow$ retourne le code H.T.T.P. de la réponse
		\item \verb+response.headers+ $\rightarrow$ retourne un objet \verb+Map+ avec les entêtes H.T.T.P.
	\end{itemize}

\textbf{Rappel.} L'enchaînement des \verb+then+ est stoppé si l'une des promesses est un échec.

Le type de réponse peut être :
	\begin{itemize}
		\item \verb+response.json()+ ;
		\item \verb+response.text()+ ;
		\item \verb+response.formData()+ ;
		\item \verb+response.blob()+ ;
		\item \verb+response.arrayBuffer()+.
	\end{itemize}

La réponse \verb+response+ est également une promesse. Il faut enchaîner avec un autre \verb+then+.

\subsection{Connaître les propriétés de fetch}

Par défaut, la méthode H.T.T.P. est \verb+GET+, mais il est possible de créer une autre requête, et de préciser un certain nombre de paramètres.
	\begin{description}
		\item[] \verb+fetch("URL", {+
			\begin{description}
				\item[] \verb+method: "POST",+ $\rightarrow$ choix entre \verb+GET+, \verb+POST+, \verb+PUT+, \verb+PATCH+; \verb+DELETE+, \textit{etc}.
				\item[] \verb+mode: "cors",+ $\rightarrow$ choix entre \verb+cors+, \verb+no-cors+, \verb+same-origin+
				\item[] \verb+cache: "default",+
					\begin{itemize}
						\item \verb+no-cache+ vérifie le contenu du cache.
						\item \verb+reload+ recharge le cache.
						\item \verb+force-cache+ force l'utilisation du cache.
						\item \verb+only-if-cached+
						\item \verb+no-store+ n'utilise pas le cache. Il y a une interrogation systématique du serveur.
					\end{itemize}
				\item[] \verb+credentials: "same-origine",+ $\rightarrow$ choix entre \verb+same-origin+, \verb+include+, \verb+omit+
				\item[] \verb+headers: {+
					\begin{description}
						\item[] \verb+"Content-type": "application/json"+
					\end{description}
				\item[] \verb+},+
				\item[] \verb+redirect: "follow",+ $\rightarrow$ choix entre \verb+follow+, \verb+manual+, \verb+error+
				\item[] \verb+referrerPolicy: "no-referrer-when-downgrade",+
					\begin{itemize}
						\item \verb+no-referrer+
						\item \verb+no-referrer-when-downgrade+
						\item \verb+origin+
						\item \verb+origin-when-cross-origin+
						\item \verb+same-origin+
						\item \verb+strict-origin-when-cross-origin+
						\item \verb+unsafe-url+
					\end{itemize}
				\item[] \verb+body: JSON.stringify({message: "OK"})+
			\end{description}
		\item[] \verb+});+
	\end{description}

\subsection{Utiliser le cache de fetch}

Le cache évite d'interroger le serveur. Il faut impérativement l'utiliser pour les données très dynamiques.

\subsection{Connaître quelques headers}

\verb+"Authorization": "Bearer token JWT"+

\verb+"Authentification": ...+

\verb+"Content-Type": "application/json;charset=utf-8"+ pour les données J.S.O.N.

\verb+"Content-Type": "multipart/form-data"+ pour les données \verb+FormData+

\verb+"Content-Type": "Blob/BufferSource"+ pour les données binaires
	\begin{description}
		\item[\textbf{N.B.}] \verb+BufferSource+ est utilisé pour les images.
	\end{description}

\verb+"Content-Type": "text/plain;charset=utf-8"+ pour les données textes

\verb+Access-Control-Max-Age"+ fixe la durée maximale.
	\begin{description}
		\item[\textbf{Exemple.}] $ 86400 \Leftrightarrow 1$ an
	\end{description}

Il est impossible d'utiliser les entêtes suivantes, car ils sont contrôlés par le navigateur :
	\begin{itemize}
		\item \verb+Accept-Charset+
		\item \verb+Accept-Encoding+
		\item \verb+Access-Control-Request-Method+
		\item \verb+Access-Control-Request-Headers+
		\item \verb+Connection+
		\item \verb+Content-Length+
		\item \verb+Cookie-Length+
		\item \verb+Cookie+
		\item \verb+Cookie2+
		\item \verb+Date+
		\item \verb+DNT+
		\item \verb+Except+
		\item \verb+Host+
		\item \verb+Keep-Alive+
		\item \verb+Origin+
		\item \verb+Referrer+
		\item \verb+TE+
		\item \verb+Trailer+
		\item \verb+Transfer-Encoding+
		\item \verb+Upgrade+
		\item \verb+Via+
		\item \verb+Proxy-*+
		\item \verb+Sec-*+
	\end{itemize}

\subsection{Utiliser le code asynchrone avec fetch}

Le code asynchrone permet de simplifier les \verb+then+ en les remplaçant par \verb+async+ et \verb+await+.

\section{La communication inter-domaine sécurisée avec postMessage()}\markboth{}{La communication inter-domaine sécurisée avec postMessage()}

La méthode \verb+window.postMessage()+ provoque l'envoi d'un \verb+MessageEvent+ à la fonction ciblée une fois que tout script en attente a terminée son exécution.

L'objet \verb+MessageEvent+ est un type de message. Il possède :
	\begin{itemize}
		\item une propriété \verb+data+ qui est initialisée à la valeur du premier argument passé à \verb+window.postMessage()+ ;
		\item une propriété \verb+origin+ correspondant à l'origine du document principal de la fenêtre appelant \verb+window.postMessage()+ au moment où \verb+window.postMessage()+ a été appelé ;
		\item une propriété \verb+source+ qui est la fenêtre depuis laquelle \verb+window.postMessage()+ est appelé.
	\end{itemize}

\verb+window.postMessage(+ $\rightarrow$ \verb+contentWindow+ d'un élément \verb+<iframe>+ (fenêtre à atteindre)
	\begin{description}
		\item[] \verb+message,+ $\rightarrow$ donnée à envoyer
		\item[] \verb+targetOrigin,+ $\rightarrow$ origine de \verb+window+ pour l'événement à envoyer :
		\begin{itemize}
			\item \verb+"*"+ signifie « pas de préférence » (à éviter).
			\item U.R.I. (toujours à privilégier)
		\end{itemize}
		\item[] \verb+transfer(+ \textit{option} \verb+)+ $\rightarrow$ séquence d'objets qui sera transmise avec le message. La possession de ces objets est cédée à la destination, et ils ne sont plus utilisables du côté de l'expéditeur.
	\end{description}
\verb+)+

\textbf{La communication avec} \verb+postMessage()+ \textbf{permet de contrôler à quelle destination les messages sont envoyés}.

\subsection{L'événement envoyé}

Il est possible de surveiller les messages envoyés en exécutant le code suivant :
\begin{lstlisting}
	window.addEventListener('message', receiveMessage, false);
	function receiveMessage(event)
	{
		if(event.origin !== 'https://example.org:8080')
		{
			return;
		}
	}
\end{lstlisting}

\verb+event.data+ récupère l'objet passé depuis une autre fenêtre.

\verb+event.origin+ précise la fenêtre qui a envoyé le message au moment où \verb+postMessage()+ a été appelé.

\verb+event.source+ fournit la référence à l'objet \verb+window+ qui a envoyé le message.
	\begin{description}
		\item[\textbf{N.B.}] On peut utiliser \verb+source+ pour établir une communication dans les deux sens entre deux fenêtres ayant différentes origines.
	\end{description}

\subsection{Les précautions de sécurité}

\begin{enumerate}
	\item Si on ne prévoit pas recevoir de message depuis d'autres sites, il ne faut pas ajouter de gestionnaire d'événement pour les événements \verb+message+.
	\item Si on prévoit de recevoir des messages depuis d'autres sites, il faut vérifier toujours l'identité de l'expéditeur à l'aide des propriétés \verb+origin+, et si possible \verb+source+. Toute fenêtre peut envoyer un message à toute autre fenêtre, et il n'existe aucune garantie qu'un expéditeur inconnu ne va pas envoyer de message malicieuse.
		\begin{description}
			\item[\textbf{Attention !}] Même si on vérifie l'identité, on doit toujours vérifier la syntaxe du message reçu, sinon il existe une faille XSS.
		\end{description}
	\item Il faut toujours spécifier explicitement une origine de destination, et jamais \verb+'*'+.
\end{enumerate}

\section{Upload \textit{via} une iframe}\markboth{}{Upload \textit{via} une iframe}

Il s'agit d'une autre utilisation de l'A.J.A.X. avec la balise \verb+<iframe>+.

\subsection{Manipulation JavaScript des iframe}

La règle de sécurité \verb+same origin policy+ s'applique pour les \verb+iframe+. On ne peut manipuler que les pages appartenant à un même domaine.

On utilise soit un identifiant pour récupérer le contenu de la balise, soit l'objet `JavaScript` \verb+frames[...]+.

\subsection{Chargement de contenu des iframe en JavaScript}

Il existe deux techniques pour charger une page dans un \verb+iframe+ : \begin{inparaenum} \item utiliser l'attribut \verb+src+ dans sa balise ; \item utiliser `JavaScript` \textit{via} l'attribut \verb+target+. \end{inparaenum}
\begin{lstlisting}
	<iframe id="myFrame" name="myFrame">
		...
	</iframe>
\end{lstlisting}

\subsubsection{Charger une iframe}

\begin{enumerate}
	\item Le chargement de l'U.R.L. :
\begin{lstlisting}
	document.getElementById("myFrame").src = "request.php?name=Max";
\end{lstlisting}
	\item Le chargement avec \verb+target+ et au formulaire en méthode \verb+POST+
\begin{lstlisting}
	<form id="myForm" method="post" action="request.php" target="myFrame">
		<div>
		formulaire
			<input type="submit" value="Envoyer">
		</div>
	</form>
	<iframe src="#" name="myFrame" id="myFrame"></iframe>
\end{lstlisting}
	\noindent L'attribut \verb+target+ indique au formulaire que son contenu doit être envoyé au sein de l'\verb+iframe+ dont l'attribut \verb+name+ et \verb+myFrame+. Ainsi, le contenu du formulaire y est envoyé, et la page courant ne sera pas rechargés.
\end{enumerate}

Le formulaire peut être envoyé en `JavaScript` avec \verb+submit()+.
\begin{lstlisting}
	document.getElementById("myForm").submit();
\end{lstlisting}

\subsubsection{Détecter le chargement}

L'\verb+iframe+ possède un événement \verb+load+, déclenché une fois que le contenu de l'\verb+iframe+ est chargé. À chaque contenu chargé, \verb+load+ est déclenché. Cela permet de savoir si le document est chargé, et ainsi de pouvoir le récupérer.

Il est possible d'appeler une fonction présente dans la page mère depuis l'\verb+iframe+. Il suffit d'écrire :
\begin{lstlisting}
	window.top.window.nom_de_la_fonction();
\end{lstlisting}

\subsection{Récupérer le contenu}

Il est possible de charger \textbf{n'importe quelle donnée dans un} \verb+iframe+ : page HTML, texte brut, `JavaScript`, format J.S.O.N., \textit{etc}.

Pour récupérer des données `JavaScript`, il suffit d'utiliser du \verb+PHP+ pour construire un objet qui sera transmis en paramètre de la fonction de rappel qui utilisera une variable du type :
\begin{lstlisting}
	"<?php echo htmlspecialchars($_POST['name']); ?>"
\end{lstlisting}

\subsection{Le système d'upload}

Par le biais d'un formulaire et d'un \verb+iframe+, on peut créer un système d'\verb+upload+. On utilise l'attribut \verb+enctype="multipart/form-data"+. On crée un \\ \verb+<input id="uploadFile" name="uploadFile" type="file">+. On utilise une balise :
\begin{lstlisting}
	<div id="uploadInfos">
		<div id="uploadStatus">Aucun upload en cours</div>
		<iframe id="uploadFrame" name="uploadFrame"></iframe>
	</div>
\end{lstlisting}

L'ensemble est géré par un code `JavaScript` :
\begin{lstlisting}
	function uploadEnd(error, path)
	{
		if(error === "OK")
		{
			document.getElementById("uploadStatus").innerHTML = '<a href="' + path +'">Upload done !</a><br><br><a href="' + path + '"><img src="' + path + '"></a>';
		}
		else
		{
			document.getElementById("uploadStatus").innerHTML = error;
		}
	}
	document.getElementById("uploadForm").addEventListener("submit"), function () {document.getElementById("uploadStatus").innerHTML = 'Loading...';}, true);
\end{lstlisting}

Lors de l'envoi du formulaire, la fonction anonyme de l'événement \verb+submit+ est exécutée. Elle va remplacer le texte du \verb+<div>#uploadStatus+ pour indiquer que le changement est en cours. En fonction de la taille du fichier à envoyer, l'attente peut être longue. L'argument \verb+error+ contiendra soit \verb+"OK"+, soit une explication sur une erreur éventuelle. L'argument \verb+path+ contiendra l'U.R.L. du fichier venant d'être téléchargé. L'appel vers la fonction \verb+uploadEnd+ sera opéré par l'\verb+iframe+.

Côté serveur, un fichier \verb+upload.php+ a été créé :
\begin{lstlisting}
	<?php
		$error = NULL;
		$filename = NULL;
		if(isset($_FILES['uploadFile']) && !empty($_FILES['uploadFile']['error'] === 0))
		{
			$filename = $_FILES['uploadFile']['name'];
			$targetpath = getcwd().'/'.$filename; // On stocke le chemin où enregistrer le fichier.
			if(@move_uploaded_file($_FILES['uploadFile']['tmp_name'], $targetpath)) // Déplacement du fichier dans le dossier temporaire
			{
				$error = "OK";
			}
			else
			{
				$error = "Échec de l'enregistrement";
			}
		}
		else
		{
			$error = "Aucun fichier réceptionné !";
		}
	?>
	<script>
		window.top.window.uploadEnd("<?php echo $error; ?>", "<?php echo $filename; ?>");
	</script>
\end{lstlisting}

\textbf{Attention !} Il faut prévoir des éléments de sécurité :
	\begin{itemize}
		\item détecter le type \verb+MIME+ du fichier ;
		\item afficher à la suite les fichiers téléchargés s'il y en a plusieurs.
	\end{itemize}

\section{Le \textit{Dynamic Script Loading} (D.S.L.)}\markboth{}{Le \textit{Dynamic Script Loading} (D.S.L.)}

Il s'agit d'une manière astucieuse de dialoguer avec le serveur sans être limité par le principe du \verb+same origin policy+.

Avec le D.O.M., il est possible de lier et d'exécuter un fichier `JavaScript` après que la page a été chargée :
\begin{lstlisting}
	window.addEventListener('load', function () {
		let scriptElement = document.createElement('script');
		scriptElement.src = 'url/du/fichier.js';
		document.body.appendChild(scriptElement);
	}, false);
\end{lstlisting}

Si le changement d'un fichier `JavaScript` est possible, on peut s'en servir pour charger les données et faire de l'A.J.A.X.

On peut créer un fichier `JavaScript` \textit{via} un fichier \verb+PHP+.

\subsection{PHP et JavaScript}

On peut appeler une page \verb+PHP+ :
\begin{lstlisting}
	scriptElement = 'dsl-script.php?name' + prompt('Quel est votre pseudo ?');
\end{lstlisting}

On peut créer du `JavaScript` avec \verb+PHP+ :
\begin{lstlisting}
	<?php
		header("Content-type: text/javascript");
	?>
\end{lstlisting}

\noindent et, en `JavaScript`, récupérer les données.
\begin{lstlisting}
	let string = "Bonjour <?php echo $_GET['name']' ?> !";
\end{lstlisting}

\subsection{D.S.L. et J.S.O.N.}

Le D.S.L. permet de récupérer du contenu sous forme d'objets `JavaScript` : tableau, objet littéral ou J.S.O.N.

Si on récupère des données J.S.O.N. \textit{via} \verb+XMLHttpRequest+, ces données sont livrées sous la forme de texte brut, récupérées \textit{via} la propriété \verb+responseText+. Il faut par la suite utiliser la méthode \verb+parse()+ de l'objet J.S.O.N. pour pouvoir les interpréter. Avec le D.S.L., ce problème n'existe pas, puisque le format `JavaScript` est transmis, et non le texte !

\subsection{Charger du J.S.O.N.}

Une page \verb+PHP+ est utilisée pour générer le contenu du fichier `JavaScript`, donc le J.S.O.N. Les données J.S.O.N. contiennent une liste d'éditeurs et pour chacun une liste de programmes qu'ils éditent \verb+dsl-script-json.php+ :
\begin{lstlisting}
	<?php
		header("Content-type: text/javascript");
		echo 'let softwares = {
			"Adobe": [
				"Acrobat",
				"Dreamweaver",
				"Photoshop",
				"Flash"
			],
			"Mozilla": [
				"FireFox",
				"Thunderbird",
				"Lightning"
			],
			"Microsoft": [
				"Office",
				"Visual C# Express",
				"Azure"
			]
		};';
\end{lstlisting}

\subsection{Recevoir les données}

Le `JavaScript` reçoit les données en créant le fichier \verb+JavaScript/PHP+
\begin{lstlisting}
	function sendDSL()
	{
		let scriptElement = document.createElement('script');
		scriptElement.src = 'dsl_script_json.php';
		document.body.appendChild(scriptElement);
	}
	function receiveMessage(json)
	{
		let tree = '', nbItems, i;
		for(node in json)
		{
			tree += node + "\n";
			nbItems = json[node].length;
			for(i = 0 ; i <nbItems ; i++)
			{
				tree += "\t" + json[node][i] + "\n";
			}
		}
	}
\end{lstlisting}

On appelle \verb+sendDSL()+ avec bouton dans la page web.
\begin{lstlisting}
	<button type="button" onclick="sendDSL()">Charger le J.S.O.N.</button>
\end{lstlisting}

\section{HTML5 et A.P.I. JavaScript}\markboth{}{HTML5 et A.P.I. JavaScript}

\verb+History+

Sélecteurs C.S.S.

\verb+Timers+

\verb+ContentEditable+ $\rightarrow$ éditer un élément HTML

\verb+WebStorage+

\verb+WebSQLDatabase+

\verb+WebSocket+

\verb+Geolocation+

\verb+Workers+ et \verb+Messaging+ $\rightarrow$ exécution parallèle

\verb+Offline Web Application+

\verb+Canvas+

\verb+Drag & Drop+ $\rightarrow$ réalisation du glisser/déposer

\verb+File+

\verb+Audio/Video+ $\rightarrow$ manipulation de fichiers standard

\section{Les outils à connaître}\markboth{}{Les outils à connaître}

Les \textit{framework} :
	\begin{itemize}
		\item \verb+jQuery+
		\item \verb+MooTools+
		\item \verb+Dojo+
		\item \verb+YUI+
		\item \verb+Prototype+
	\end{itemize}

Les bibliothèques : \href{http://microjs.com}{http://microjs.com}
	\begin{itemize}
		\item \verb+Sizzle+ et \verb+Query+
		\item \verb+Popcorn.js+ $\rightarrow$ \verb+<audio>+ et \verb+<video>+
		\item \verb+Raphaël+, \verb+CAKE+ et \verb+Three.js+ $\rightarrow$ graphisme
		\item \verb+Underscore.js+ $\rightarrow$ \textit{polyfill}
		\item \verb+Modernizr+ $\rightarrow$ \textit{polyfill}
	\end{itemize}

\verb+NodeJS+ permet de faire du `JavaScript` côté serveur.

\section{L'audio et la vidéo}\markboth{}{L'audio et la vidéo}

Les éléments \verb+<audio>+ et \verb+<video>+ sont représentés par le même objet \verb+HTMLMediaElement+. Ils possèdent ainsi les mêmes propriétés et les mêmes méthodes.

\subsection{L'audio}

Il existe deux manières d'insérer de l'audio.
\begin{lstlisting}
	<audio id="audioPlayer" src="... .mp3"></audio>
\end{lstlisting}

\noindent ou
\begin{lstlisting}
	<audio id="audioPlayer">
		<source src="... .mp3"></source>
		<source src="... .ogg"></source>
	</audio>
\end{lstlisting}

\noindent L'usage de \verb+source+ dans la seconde possibilité permet de proposer plusieurs formats au navigateur. Si le premier ne fonctionne pas, il passe au second.

L'attribut \verb+controls+ permet d'afficher les boutons de contrôle.
\begin{lstlisting}
	<audio controls="controls"></audio>
\end{lstlisting}

\noindent Toutefois, avec `JavaScript`, il est possible de créer son propre contrôleur.

\subsubsection{Le bouton play}

\begin{enumerate}
	\item Créer une variable appelant la balise \verb+<audio>+ par son \verb+id+.
\begin{lstlisting}
	let player ) document.querySelector("#audioPlayer");
\end{lstlisting}
	\item Lancer la lecture :
\begin{lstlisting}
	player.play();
\end{lstlisting}
\end{enumerate}

\subsubsection{Le bouton pause}

\begin{lstlisting}
	player.pause();
\end{lstlisting}

\subsubsection{Le bouton stop}

La méthode \verb+stop()+ n'existe pas. Il faut combiner \verb+pause+ et \verb+currentTime+ (en secondes) pour arrêter la lecture et la positionner à 0 s.
\begin{lstlisting}
	player.pause();
	player.currentTime = 0;
\end{lstlisting}

\subsubsection{Les outils de lecture}

\verb+player.paused+ vérifie si la lecture est en pause ou non.

\subsubsection{Le contrôle du volume}

La propriété \verb+volume+ règle l'intensité sonore sur une échelle allant de 0 à 1.

\subsubsection{La barre de progression}

La barre de progression s'obtient avec la balise \verb+<progress>+ ou avec des \verb+<div>+.
\begin{lstlisting}
	<div>
		<div id="progressBarControl">
			<div id="progressBar">Pas de lecture</div>
		</div>
	</div>
\end{lstlisting}

\noindent Il est facile d'indiquer le pourcentage de lecture. Pour ce, on utilise l'événement \\ \verb+ontimeupdate+ pour détecter si le média est en train de lire le morceau.
\begin{lstlisting}
	function progression(player)
	{
		let dureeTotale = player.duration;
		let tempsEcoule = player.currentTime;
		let rapportTD = tempsEcoule / dureeTotale;
		let pourcentTD = Math.ceil(rapportTD * 100);
		let progress = document.querySelector('#progressBar');
		//Largeur de la barre de progression
		progress.style.width = pourcentTD + " %";
		progress.innerHTML = pourcentTD + " %";
	}
\end{lstlisting}

\subsubsection{Le temps écoulé}

Pour afficher le temps écoulé, il suffit d'utiliser \verb+currentTime+. La propriété affiche du secondes décimales. Il faut de fait formater la durée de lecture.
\begin{lstlisting}
	function formatTempsEcoule(time)
	{
		let heure = Math.floor(time / 3600);
		let minute = Math.floor((time % 3600) / 60);
		let seconde = Math.floor(time % 60);
		if(seconde < 10)
		{
			seconde += "0" + seconde;
		}
		if(heure)
		{
			if(minute < 10)
			{
				minute = "0" + minute;
			}
			return heure + ":" + minute + ":" + seconde;
		}
		else
		{
			return minute + ":" + seconde;
		}
	}
\end{lstlisting}

\noindent On place cette fonction dans \verb+progression(player)+, puis l'appeler avec :
\begin{lstlisting}
	let tempsEcoule = player.currentTime;
	formatTempsEcoule(tempsEcoule);
\end{lstlisting}

\subsubsection{La barre de progression cliquable}

Pour connaître l'endroit où l'on clique, il faut établir : les coordonnées de la souris et les coordonnées de l'élément. Le principe est simple, mais la programmation peut être complexe.
\begin{enumerate}
	\item L'événement des coordonnées de la souris
\begin{lstlisting}
	function getSourisPosition(event)
	{
		if(event.pageX)
		{
			return {
				x: event.pageX,
				y: event.pageY
			};
		}
		else
		{
			//Pour Internet Explorer
			return {
				x: event.clientX + document.body.scrollLeft + document.documentElement.srollLeft,
				y: event.clientY + document.body.scrollTop + document.documentElement.srollTop
			};
		}
	}
\end{lstlisting}
	\item La récupération des coordonnées de l'événement
\begin{lstlisting}
	function getPosition(element)
	{
		let top = 0;
		let left = 0;
		while(element)
		{
			left += element.offsetLeft;
			top += element.offsetTop;
			element = element.offsetParent;
		}
		return {x: left, y:top};
	}
\end{lstlisting}
	\item La combinaison des deux fonctions permet d'obtenir une barre cliquable.
\begin{lstlisting}
	function clicProgress(idPlayer, control, event)
	{
		let parent = getPosition(control);
		let target = getSourisPosition(event);
		let player = document.querySelector("#" + idPlayer);
		let x = target.x - parent.x;
		let tailleDeLaBarre = document.querySelector("#progressBarControl").offsetWidth;
		let pourcent = Math.ceil((x / tailleDeLaBarre) * 100);
		player.currentTime = (tempsEcoule * pourcent) / 100;
	}
\end{lstlisting}
\end{enumerate}

On ajoute dans la page web :
\begin{lstlisting}
	<div id="progressBar" onclick="clicProgress('audioPlayer', this, event)">Pas de lecture</div>
\end{lstlisting}

\subsection{La vidéo}

L'élément \verb+<video>+ a plusieurs propriétés supplémentaires :
	\begin{itemize}
		\item \verb+height+ $\rightarrow$ hauteur de la zone de lecture
		\item \verb+width+ $\rightarrow$ largeur de la zone de lecture
		\item \verb+poster+ $\rightarrow$ attribut \verb+poster+
		\item \verb+videoHeight+ $\rightarrow$ hauteur de la vidéo
		\item \verb+videoWidth+ $\rightarrow$ largeur de la vidéo
	\end{itemize}

Il fonctionne comme \verb+<audio>+ pour le reste.

\section{L'A.P.I. File}\markboth{}{L'A.P.I. File}

L'A.P.I. n'est pas utilisable seule. Elle utilise diverses technologies.

\textbf{Attention !} L'\verb+API File+ ne permet pas d'écrire un fichier stocké sur l'ordinateur du client ou de le modifier ou télécharger sur un serveur.

La balise \verb+<input type="file">+ permet d'accéder aux propriétés de l'\verb+API File+On y ajoute un \verb+id="file"+.

En `JavaScript`, on lui affecte un événement.
\begin{lstlisting}
	document.getElementById("file").onchange = function () {...};
\end{lstlisting}

La propriété \verb+files+ permet de transformer le fichier en objet. La balise HTML5 permet d'ajouter l'attribut \verb+multiple+. Il autorise le téléchargement de plusieurs fichiers. Chacun d'eux est un objet. L'appel du premier objet s'effectue par \verb+files[0]+. Chaque objet a plusieurs propriétés (\verb+name+, \ldots{}).

\subsection{Les interfaces Blob et File}

\subsubsection{Blob}

\verb+Blob+ est une structure représentant des données binaires disponibles uniquement en lecture seule. Elle est utilisée lors de la manipulation de fichiers.

\verb+BlobBuilder+ permet de créer un \verb+Blob+. Cela est rarement utilisé, car les fichiers existent déjà.

\verb+Blob+ a deux propriétés : \verb+size+ et \verb+type+. Le premier donne la taille en octets du fichier. Le second fournit le type \verb+MIME+.

\verb+Blob+ a une méthode : \verb+slice()+.

\subsubsection{File}

\verb+File+ permet de manipuler les fichiers. Il hérite des propriétés et des méthodes de \verb+Blob+.

Elle possède deux méthodes supplémentaires : \verb+name+ et \verb+lastModifiedDate+. Elles fournissent respectivement le nom du fichier et la date de sa dernière modification.

La lecture d'un fichier utilise \verb+FileReader+.

\subsection{La lecture des fichiers}

\begin{lstlisting}
	let lecture = new FileReader();
\end{lstlisting}

\noindent \verb+FileReader+ lit les fichiers de manière asynchrone. Il possède trois méthodes qui prennent chacune en paramètre un argument de type \verb+Blob+ ou \verb+File+.

\verb+readArrayBuffer()+ stocke les données dans un objet de type \verb+ArrayBuffer+. Ils permettent l'écriture et la lecture de données binaires directement dans leur forme native.

\verb+readAsDataURL()+ convertit les données dans un format nommé \verb+DataURL+ consistant à convertir toutes les données binaires d'un fichier en base 64 pour stocker le résultat dans une chaîne de caractères, complétée par la spécification du type \verb+MIME+ du fichier. Les \verb+DataURL+ permettent de stocker un fichier sous forme d'U.R.L. lisible par les navigateurs récents, leur utilisation est de plus en plus fréquente sur le web.

\verb+readAsText()+ possède un argument facultatif permettant de spécifier l'encodage du fichier. Avec cette méthode, les données ne subissent aucune modification. Elles sont tout simplement lues, puis stockées sous forme d'une chaîne de caractères.
\begin{lstlisting}
	lecture.readAsText(file, "UTF8");
\end{lstlisting}

Toutes ces méthodes disposent de six événements :
	\begin{itemize}
		\item \verb+loadstart+ : la lecture commence ;
		\item \verb+progress+ : l'événement se déclenche à intervalles réguliers pendant la progression de la lecture. Il possède un objet en paramètre possédant deux propriétés (\verb+loaded+ et \verb+total()+) indiquant le nombre d'octets lus ou à lire au total ;
		\item \verb+load+ : la lecture est terminée avec succès ;
		\item \verb+abort+ : la lecture est interrompue ;
		\item \verb+error+ : une erreur a été rencontrée. La propriété contient alors un objet de type \verb+FileError+.
	\end{itemize}

Les données lues, la propriété \verb+result+ permet de récupérer les données.
\begin{lstlisting}
	lecture.result
\end{lstlisting}

\verb+FileReader()+ possède également une propriété \verb+readyState+ matérialisant trois états de lecture.
	\begin{itemize}
		\item 0 $\rightarrow$ \verb+EMPTY+ $\rightarrow$ aucune donnée n'a été chargée
		\item 1 $\rightarrow$ \verb+LOADING+ $\rightarrow$ les données sont en cours de téléchargement
		\item 2 $\rightarrow$ \verb+DONE+ $\rightarrow$ toutes les données ont été chargées
	\end{itemize}

\noindent On peut écrire :
\begin{lstlisting}
	lecture.readyState == reader.LOADING;
\end{lstlisting}

\noindent ou
\begin{lstlisting}
	lecture.readyState == 1;
\end{lstlisting}

\section{\textit{Drag} \& \textit{Drop}}\markboth{}{\textit{Drag} \& \textit{Drop}}

\textit{Drag} \& \textit{Drop}, ou « glisser-déposer » en français, est une interface permettant le déplacement de certains éléments vers d'autres conteneurs.

En temps normal, un élément d'une page web ne peut pas être déplacé. Pour rendre un élément déplaçable, il faut utiliser l'attribut \verb+draggable = "true"+.

L'\verb+API Drag & Drop+ fournit huit événements. L'élément déplaçable peut en utiliser deux : \verb+dragstart+ et \verb+dragend+. Le premier se déclenche lorsque l'élément ciblé commence à être déplacé. L'événement est particulièrement utilisé pour initialiser certains détails utilisés tout au long du processus de déplacement. Il est couplé avec l'objet \verb+dateTransfer+. Le second permet de signaler la fin du déplacement, que le résultat soit un succès ou non.

Le déplacement est initialisé avec l'objet \verb+dataTransfer+ au travers deux événements \verb+drop+ et \verb+dragstart+. Il permet de définir et de récupérer les informations relatives au déplacement en cours d'exécution. Dans le cadre de l'\textbf{initialisation du déplacement}, il permet de réaliser trois actions facultatives :
	\begin{enumerate}
		\item sauvegarder une chaîne de caractères qui sera transmise à l'élément HTML qui accueillera l'élément déplacé. La méthode \verb+setData()+. Elle prend deux arguments en paramètres : le type \verb+MIME+ des données et une chaîne de caractères ;
\begin{lstlisting}
	e.dataTransfer.setData("text/plain", "...");
	draggableElement.addEventListener("dragstart", function (e) {e.dataTransfer.setData("text/plain", "...");}, false);
\end{lstlisting}
		\item définir une image utilisée lors du déplacement grâce à la méthode \verb+setDragImage()+. elle permet de définir une image qui se placera sous le premier curseur pendant le déplacement de l'élément concerné. La méthode prend trois arguments en paramètres : un élément \verb+<img>+ contenant l'image souhaitée, la position horizontale de l'image et la position verticale ;
		\item spécifier le type de déplacement autorisé avec la propriété \verb+effectAllowed+. Elle possède un usage assez restreint. Elle est similaire à \verb+dropEffect+.
	\end{enumerate}

Un élément en cours de déplacement ne peut pas être déposé n'importe où. Il faut définir \textbf{une zone de « \textit{drop} »} pour déposer les éléments par une balise \verb+<div>+.

Les zones de \verb+drop+ prennent en charge quatre événements.
	\begin{itemize}
		\item \verb+dragenter+ se déclenche lorsqu'un élément en cours de déplacement \textbf{entre} dans la zone de \verb+drop+.
		\item \verb+dragover+ se déclenche lorsqu'un élément en cours de déplacement \textbf{se déplace} dans la zone de \verb+drop+.
		\item \verb+dragleave+ se déclenche lorsqu'un élément en cours de déplacement \textbf{quitte} la zone de \textit{drop}.
		\item \verb+drop+ se déclenche lorsqu'un élément en cours de déplacement \textbf{est déposé} dans le zone de \verb+drop+.
	\end{itemize}

Par défaut, le navigateur interdit de déposer un quelconque élément où que ce soit dans la page web.
\begin{lstlisting}
	<div id="draggable" draggable="true">...</div>
\end{lstlisting}

\noindent `JavaScript` peut le déclencher en utilisant l'événement \verb+dragover+
\begin{lstlisting}
	<div id="dropper">...</div>
\end{lstlisting}

\noindent Dans ce cas,
\begin{lstlisting}
	let dropper = document.getElementById("dropper");
	dropper.addEventListener("dragover", function (e) {e.preventDefault();}, false);
\end{lstlisting}
	\begin{description}
		\item[\textbf{N.B.}] \verb+preventDefault()+ annule l'interdiction par défaut.
	\end{description}

\noindent Il faut ultérieurement définir la manière dont la zone de \verb+drop+ doit gérer les éléments qu'elle reçoit.

Il faut en premier lieu détecter le \verb+drop+.
\begin{lstlisting}
	dropper.addEventListener('drop', function (e) {
		e.preventDefault();
		alert("Vous avez bien déposé votre élément");
		dropper.style.borderStyle = 'solid'; // Pour visualiser la zone
	}, false);
\end{lstlisting}

Il faut en deuxième lieu définir trois événements : \verb+dragenter+, \verb+dragleave+ et \verb+dragend+.
\begin{lstlisting}
	dropper.addEventListener('dragenter', function () {dropper.style.borderStyle = 'dashed';}, false);
	dropper.addEventListener('dragleave', function () {dropper.style.borderStyle = 'solid';}, false);
	dropper.addEventListener('dragend', function () {alert("Fin de l'événement Drag & Drop");}, false);
\end{lstlisting}
	\begin{description}
		\item[\textbf{N.B.}] L'événement détecte n'importe quel \verb+drag & drop+ qui s'achève.
	\end{description}

L'objet \verb+dataTransfer+ permet de terminer le déplacement. Il récupère dans un premier temps le texte sauvegardé avec la méthode \verb+setData()+ lors de l'initialisation du \verb+drag & drop+ par la méthode \verb+getData()+.
\begin{lstlisting}
	dropZone.addEventListener('drop', function (e) {alert(e.dataTransfer.getData("text/plain"));}, false);
\end{lstlisting}

Dans un second temps, \verb+dataTransfer+ récupère les éventuels fichiers qui été déposés par l'utilisation \textit{via} une balise \verb+<input type="file">+.
\begin{lstlisting}
	dropZone.addEventListener('drop', function (e) {
		e.preventDefault();
		let files = e.dataTransfer.files;
		let filesLen = files.length;
		let filenames = "";
		for(let i = 0 ; i < filesLen ; i++)
		{
			filenames += '\n' + files[i].name;
		}
	}, false);
\end{lstlisting}

\section{La programmation asynchrone en JavaScript}\markboth{}{La programmation asynchrone en JavaScript}

\subsection{Les fonctions de rappel avec setTimeout}

Une \textbf{fonction de rappel} renvoie vers une autre fonction.

Exemple :
\begin{lstlisting}
	function get()
	{
		return "toto";
	}
	function rappel(callback)
	{
		data =callback();
		console.log(data);
	}
\end{lstlisting}
	\begin{description}
		\item[\textbf{N.B.}] La variable d'une fonction de rappel est par convention appelée \verb+callback+.
	\end{description}

On peut appeler la fonction.
\begin{lstlisting}
	rappel(get);
\end{lstlisting}

\noindent La fonction est appelée sans parenthèses.

On peut utiliser \verb+setTimeout+.
\begin{lstlisting}
	setTimeout(fonction de rappel, temps en millisecondes, paramètres de la fonction);
\end{lstlisting}

\noindent Les paramètres de la fonction sont facultatifs.

Cette technique génère un problème, la \textit{callback hell}, provoqué par le chaînage des fonctions de rappel.

\subsection{Les promesses Promise}

Les \textbf{promesses} permettent de séquencer les traitements asynchrones.

Toute fonction asynchrone fonctionne avec des promesses. La valeur n'est pas nécessairement connue au moment de la création de la promesse.

L'objet dispose de trois états possibles :
	\begin{itemize}
		\item \verb+pending+ $\rightarrow$ promesse en attente, en cours ;
		\item \verb+fulfilled+ $\rightarrow$ promesse validée, réussie ;
		\item \verb+rejected+ $\rightarrow$ promesse rejetée.
	\end{itemize}

Les \textbf{consommateurs} sont en attente de la valeur promise.
\begin{enumerate}
	\item Promesse tenue, résolue
\begin{lstlisting}
	let promesse = new Promise(
		(resolve, reject) => {
			resolve("Résolue !");
		}
	);
\end{lstlisting}
	\item Promesse rompue
\begin{lstlisting}
	let promesse = new Promise(
		(resolve, reject) => {
			reject("Non résolue !");
		}
	);
\end{lstlisting}
\end{enumerate}

Les promesses sont gérées par des \textbf{compositions}, c'est-à-dire un chaînage de méthodes \verb+.then(...)+, \verb+.catch(...)+ et \verb+finally(...)+.
\begin{lstlisting}
	promesse
		.then(valeur => {console.log("OK !");})
		.catch(raison => {console.log("Échec !");})
		.finally(fin => {console.log("C'est fini !");});
\end{lstlisting}

Il existe trois méthodes statiques très pratiques concernant l'objet \verb+Promise+ : \verb+all(...)+, \verb+any(...)+ et \verb+race(...)+.
\begin{lstlisting}
	const p1 = Promise.resolve("Promesse 1 tenue");
	const p2 = Promise.reject("Promesse 2 rejetée");
	const p3 = Promise.resolve("Promesse 3 tenue");
\end{lstlisting}
	\begin{enumerate}
		\item Valider plusieurs promesses en même temps
\begin{lstlisting}
	let promesse = Promise.all([p1, p2]); // résultat : rejet
	let promesse = Promise.all([p1, p3]); // résultat : validation
	\end{lstlisting}
		\item Valider au moins une promesse
\begin{lstlisting}
	let promesse = Promise.any([p1, p2]); // résultat : validation
\end{lstlisting}
		\item Valider au moins une promesse tenue ou une promesse rejetée.
\begin{lstlisting}
	let promesse = Promise.race([p1, p2]); // résultat : validation
\end{lstlisting}
	\end{enumerate}

\subsection{L'utilisation des promesses avec l'A.P.I. fetch}

L'\verb+API fetch(...)+ remplace \verb+XMLHttpRequest+. Elle permet de rechercher un U.R.L.
\begin{description}
	\item[\textbf{N.B.}] Certain navigateur bloque l'usage de la méthode \verb+fetch()+. C'est pour cela que l'on utilise des A.P.I. pour l'autoriser.
\end{description}

L'\verb+API fetch(...)+ utilise les promesses. Il teste les U.R.L.
\begin{lstlisting}
	const fetchPromise = fetch(lien);
	console.log(fetchPromise);
	fetchPromise.then((response) => {
		console.log(`Réponse reçue : ${response.status}`);
	});
	console.log("Requête initiée");
\end{lstlisting}

\textbf{N.B.} Il est possible de \textbf{chaîner les promesses}.

Il existe des propriétés.
	\begin{itemize}
		\item \verb+response.ok+ pour confirmer que l'U.R.L. fonctionne.
		\item \textit{etc}.
	\end{itemize}

\subsection{Les modifications async et await}

\begin{lstlisting}
	async function nomDeLaFonction()
	{
		try
		{
			const data = await nomDeLaFonction2();
		}
		catch(erreur)
		{
			...
		}
	}
	function nomDeLaFonction()
	{
		return new Promise((resolve, reject) => {
			...
		});
	}
	nomDeLaFonction();
\end{lstlisting}

\section{Les \textit{worker}}\markboth{}{Les Worker}

Les \textbf{\textit{worker}} permettent d'exécuter certaines tâches dans un fil d'exécution séparé (\textit{thread}).

Un \textbf{fil d'exécution} est une séquence d'instructions suivie par un programme. Un programme s'exécutent sur un seul fil n'effectue qu'une tâche à la fois. À l'opposé, le code parallélisé peut générer des changements dans une variable de manière inattendue. Pour éviter ce problème, le code principal et les \textit{worker} s'exécutent de manière complètement séparée ; ils interagissent en s'envoyant des messages.

\textbf{Attention !} Les \textit{worker} ne peuvent pas accéder au D.O.M.

\textbf{Attention !} Pour utiliser les \textit{worker}, il faut un serveur H.T.T.P. local, car \verb+file:///+ n'est pas autorisé.

Il existe trois types de \textit{worker} :
	\begin{itemize}
		\item les \textit{worker} dédiés ;
		\item les \textit{worker} partagés ;
		\item les \textit{service workers}.
	\end{itemize}

\subsection{Les \textit{worker} dédiés}

Dans \verb+main.js+, on écrit :
\begin{lstlisting}
	const worker = new Worker('worker.js'); /*global Worker*/
	worker.postMessage('test');
\end{lstlisting}

\textbf{N.B.} \verb+postMessage()+ ne peut contenir qu'une seule valeur (une variable, un objet, \textit{etc}.).

\begin{lstlisting}
	worker.onmessage = (e) => {
		console.log(event.data);
	};
\end{lstlisting}

La propriété récupère le retour de \verb+worker.js+

Dans \verb+worker.js+, on écrit :
\begin{lstlisting}
	onmessage = (event) => {
		console.log(event.data);
		postMessage(...);
	};
\end{lstlisting}

\noindent \verb+onmessage+ est une variable du \textit{worker} déclenché.

Le constructeur \verb+Worker()+ crée le \textit{worker} à partir du fichier renseigné dans le paramètre du constructeur.

\verb+postMessage()+ permet une communication entre \verb+main.js+ et \verb+worker.js+. Il s'agit d'une fonction globale dans le contexte d'un \textit{worker}.

Le \textit{worker} écoute les messages provenant du script principal. On peut le réaliser simplement avec \verb+addEventListener()+.

\subsection{Les \textit{worker} partagés}

Les \textit{worker} partagés peuvent être partagés par plusieurs scripts différents s'exécutant dans différentes fenêtres.
\begin{lstlisting}
	let workerpartage = new SharedWorker('worker.js');
\end{lstlisting}

Pour communiquer, il faut utiliser un objet \verb+port+ qui doit être démarré par une méthode \verb+start()+.
\begin{lstlisting}
	workerpartage.port.start();
\end{lstlisting}

L'envoi de message \verb+postMessage()+ doit utiliser \verb+port+ :
\begin{lstlisting}
	workerpartage.port.postMessage();
\end{lstlisting}

Pour recevoir le message :
\begin{lstlisting}
	onconnect = (e) => {
		let port = exports[0];
			port.onmessage = (e) => {
			port.postMessage(e.data);
		};
	};
\end{lstlisting}

\subsection{Les \textit{service workers}}

Les \textit{service workers} agissent comme des serveurs intermédiaires mettant en cache les ressources afin que les applications web puissent fonctionner même hors ligne. Il s'agit d'un élément clé des applications web progressives\footnote{En anglais : \textit{Progressive Web App} (P.W.A.)}. Ils permettent un usage hors ligne des \textit{worker}. Ils fonctionnent comme un serveur intermédiaire (ou \textit{proxy}) en permettant de modifier les requêtes et les réponses en utilisant les éléments que le serveur a en cache.

\subsection{Tester la possibilité des \textit{worker}}

\begin{lstlisting}
	if(window.worker)
	{
		console.log("Workers OK");
	}
\end{lstlisting}

\subsection{Éteindre un \textit{worker}}

\begin{lstlisting}
	worker.terminate()
\end{lstlisting}

La méthode ne doit uniquement être utilisée que si l'on a besoin d'arrêter le \textit{worker} en cours d'exécution.

\subsection{Gérer les erreurs dans un \textit{worker}}

On utilise l'événement \verb+onerror+ qui possèdent trois propriétés intéressantes :
	\begin{itemize}
		\item \verb+message+ $\rightarrow$ afficher l'erreur ;
		\item \verb+filename+ $\rightarrow$ indiquer le fichier contenant l'erreur ;
		\item \verb+lineno+ $\rightarrow$ afficher le numéro de ligne responsable de l'erreur.
	\end{itemize}

\subsection{Initier les \textit{worker} fils}

Il est possible de créer des dépendances entre \textit{worker} père et \textit{worker} fils.

\subsection{Importer des scripts et les bibliothèques}

Les \textit{thread} des \textit{worker} ont accès à la fonction globale \verb+importScripts()+ qui leur permet d'importer des scripts. La fonction peut prendre plusieurs U.R.L.

\subsection{Utiliser document.worker}

\subsection{Usage des \textit{worker}}

\begin{enumerate}
	\item Calcul en arrière-plan
	\item Répartition de plusieurs tâches
\end{enumerate}

\section{Media Queries}\markboth{}{Media Queries}

\begin{lstlisting}
	let media500= window.matchMedia("(min-width: 500px)");
\end{lstlisting}

\noindent Cela définit une largeur d'écran (ici minimale).

On peut conditionner la taille de l'écran
\begin{lstlisting}
	if(media500.matches)
	{
		console.log("L'écran fait au moins 500 px de large");
	}
\end{lstlisting}

On peut détecter les changements d'état.
\begin{lstlisting}
	media500.addEventListener("change", (e) => {console.log(e);});
\end{lstlisting}

\noindent On peut ainsi conditionner la taille des écrans.

\section*{Les générateurs}\markboth{}{Les générateurs}
\addcontentsline{toc}{section}{Les générateurs}

Un \textbf{générateur} permet de contrôler une itération par l'intermédiaire d'une fonction.
\begin{lstlisting}
	function* generateur()
	{
		yield "valeur 1";
		yield "valeur 2";
		yield "valeur 3";
	}
\end{lstlisting}

On appelle le générateur avec la création d'une variable.
\begin{lstlisting}
	const gen = generateur();
\end{lstlisting}

On appelle les valeurs en utilisant la méthode \verb+next()+.
\begin{lstlisting}
	const valeur1 = gen.next();
	const valeur2 = gen.next();
	const valeur3 = gen.next();
\end{lstlisting}

On peut lister le contenu du générateur avec une boucle de parcours.
\begin{lstlisting}
	for(let element of gen)
	{
		console.log(element);
	}
\end{lstlisting}

On peut convertir le générateur en tableau
\begin{lstlisting}
	Array.from(gen);
\end{lstlisting}

On peut imbriquer plusieurs générateurs.
\begin{lstlisting}
	function* generateur1()
	{
		yield* generateur2();
	}
	function* generateur2()
	{
		yield "valeur21";
		yield "valeur22";
	}
\end{lstlisting}

Il existe des \textbf{générateurs asynchrones}.
\begin{lstlisting}
	async function* generateurAsynchrone()
	{
		...
	}
\end{lstlisting}

\noindent Il est utilisé avec les A.P.I. L'objectif est d'éviter la surcharge du serveur.

Les méthodes utilisables sont :
	\begin{itemize}
		\item \verb+gen.next(n)+ $\rightarrow$ appel la valeur suivant $n$
		\item \verb+gen.return()+ $\rightarrow$ création d'un point d'arrêt pour le générateur
		\item \verb+gen.throw(...)+ $\rightarrow$ création du déclenchement d'une erreur
		\item[Non universel] \verb+gen.take(n)+ $\rightarrow$ prise des $n$ premiers éléments
		\item[Non universel] \verb+gen.drop(n)+ $\rightarrow$ saut des $n$ premiers éléments
	\end{itemize}

Les générateurs peuvent rendre le code plus performant pour le traitement de données massives.
