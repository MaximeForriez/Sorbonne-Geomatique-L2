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









































































