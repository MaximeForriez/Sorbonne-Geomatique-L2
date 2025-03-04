# Notions avancées du `JavaScript`

- C.M./T.D. Notions avancées du JavaScript

	- Formulaires

	- Principes du D.O.M.
		
	- Gestion des événements

> [!WARNING] 
> Au terme de cette séance, vous connaîtrez l'essentiel du langage, mais il vous faudra apprendre en permanence de nouvelles fonctions, de nouveaux objets, de nouvelles techniques de codage, *etc*.

L'objectif de la séance est d'apprendre à manipuler les événements en `JavaScript`. Ils vous permettront de gérer des fonctionnalités de base sur vos cartes `OpenLayers` en utilisant les balises `HTML` d'un formulaire.

## Les balises `HTML` d'un formulaire

### Construire un formulaire

```
<form>
	method = "get"
	action = "URL de traitement"
	name = "..."
	target = "_self"
	autocomplete = "on"
	enctype = "multipart/form-data"
	accept-charset = "UTF-8"
	novalidate = "novalidate"
>

	éléments du formulaire
	
</form>
```

- `get` est la valeur par défaut. Vous pouvez également choisir `post+`.
	- `get` envoie les données *via* l'U.R.L. : `&champ1=...;`.
	- `post` envoie les données par l'intermédiaire d'un fichier.
- Si `action = ""`, alors les données sont envoyées à la page elle-même.
- L'attribut `name` donne un nom au formulaire.
- L'attribut `target = "_self"` est la valeur par défaut. Il fixe le contexte d'envoi du formulaire. Il existe également `_blank` ou `_top` ou `_parent`.
- L'attribut `autocomplete = "on"` est la valeur par défaut. On peut également lui mettre `off`. L'attribut active ou désactive l'autocomplétion du formulaire. En général, cela enregistre les choix précédents de l'utilisateur si l'ordinateur client l'a enregistré.
- L'attribut `enctype = "multipart/form-data"` envoie des fichiers d'attribut M.I.M.E.
- L'attribut `accept-charset = "UTF-8"` spécifie un ou plusieurs encodages.
- L'attribut `novalidate = "novalidate"` (ou `""`) désactive l'impératif de validation des données côté client lors de la soumission du formulaire.

### Les attributs universels des éléments du formulaire

`name = "..."` donne un nom à l'élément.

`value = "..."` renvoie la valeur à enregistrer. Elle peut être différente de l'affichage.

`id = "..."` donne un identifiant associé avec l'attribut `for` de `<label>`.
- La balise `<label>` est associée à un élément du formulaire. Elle se place avant celui-ci. Elle décrit le champ. `<label for = "nomDuLabel"><` *élément* `id = "nomDuLabel"></label>`
- `id` et `name` doivent être différents.

`placeholder = "..."` décrit la saisie demandée dans le champ de texte par exemple ; la valeur s'efface lors de la saisie de l'élément.

`disabled` permet de bloquer la saisie d'un élément du formulaire.
- La valeur ne peut être enregistrée sous cette forme.

- [Non standard] `required` permet de demander une saisie obligatoire.

- [Non standard] `maxlength = "..."` permet de fixer un nombre de caractères.

### Les éléments `<input>`

`<input type="text" name="..." id="..." size="..." placeholder="..." autocomplete="on" pattern="...">` : saisir une valeur dans un champ
- `size` : dimension du champ de saisie
- `pattern` : expression régulière

`<input type="password" name="..." id="..." size="..." placeholder="..." autocomplete="off" pattern="...">` : saisir une valeur en mode mot de passe

`<input type="tel" name="..." id="..." value="...">` : saisir un numéro de téléphone

`<input type="url" name="..." id="..." value="...">` : saisir un U.R.L. ou un U.R.I.

`<input type="email" name="..." id="..." value="..." multiple>` : saisir un courriel
- `multiple` signifie que l'on souhaite mettre plusieurs adresses.

`<input type="search" name="..." id="..." value="...">` : saisir un champ de recherche

`<input type="date" name="..." id="..." value="..." min="..." max="..." step="...">` : saisir une date

`<input type="time" name="..." id="..." value="..." min="..." max="..." step="...">` : saisir un horaire

`<input type="datetime" name="..." id="..." value="..." min="..." max="..." step="...">` : saisir une date et un horaire

`<input type="datetime-local" name="..." id="..." value="..." min="..." max="..." step="...">` : saisir une date et un horaire locaux

`<input type="month" name="..." id="..." value="..." min="..." max="..." step="...">` : saisir un mois

`<input type="week" name="..." id="..." value="..." min="..." max="..." step="...">` : saisir une semaine

`<input type="number" name="..." id="..." value="..." min="..." max="..." step="...">` : saisir une valeur numérique

`<input type="range" name="..." id="..." value="..." min="..." max="..." step="...">` : saisir une valeur numérique d'un intervalle

`<input type="color" name="..." id="..." value="...">` : saisir un couleur R.V.B.

`<input type="hidden" name="..." id="...">` : créer un élément caché

`<input type="radio" name="..." id="..." value="..." checked>` : créer un bouton radio
- `checked` pour cocher le bouton radio
- Pour lier plusieurs boutons radio, il faut leur mettre le même `name`.

\verb+<input+ \verb+type="checkbox"+ \verb+name="..."+ \verb+id="..."+ \verb+value="..."+ \verb+checked>+ : créer une case à cocher
	\begin{description}
		\item[\textbf{N.B.}] Pour lier plusieurs cases à cocher, il faut leur mettre le même \verb+name+.
	\end{description}

\vspace{1cm}

\verb+<input+ \verb+type="file"+ \verb+name="..."+ \verb+id="..."+ \verb+accept=".csv" \verb+multiple>+ : faire télécharger un fichier
	\begin{description}
		\item[\textbf{N.B.}] \verb+accept+ définit le format de fichier demandé :
			\begin{itemize}
				\item \verb+application/und.ms-excel+
				\item \verb+application/und.openxmlformats-officedocument.spreadsheetml.sheet+
				\item \verb+sheet+
				\item \verb+text/plain+
				\item \verb+text/html+
				\item \verb+image/*+ avec \verb+*+ signifiant tous les formats
				\item \verb+video/*+
				\item \verb+audio/*+
				\item \verb+.pdf+
				\item \textit{etc}.
			\end{itemize}
		\item[\textbf{N.B.}] On peut en mettre plusieurs si on les sépare par une virgule.
	\end{description}

\vspace{1cm}

\verb+<input+ \verb+type="image"+ \verb+name="..."+ \verb+id="..."+ \verb+alt="..."+ \verb+src="...">+ : créer une image cliquable
	\begin{description}
		\item[\textbf{N.B.}] Les attributs suivants sont obsolètes : \verb+height+, \verb+width+, \verb+hspace+, \verb+vspace+ et \verb+border+.
	\end{description}

\vspace{1cm}

\verb+<input+ \verb+type="button"+ \verb+name="..."+ \verb+id="..."+ \verb+value="...">+ : créer un bouton

\vspace{1cm}

\verb+<input+ \verb+type="reset"+ \verb+name="..."+ \verb+id="..."+ \verb+value="...">+ : créer un bouton effaçant les données saisies

\vspace{1cm}

\verb+<input+ \verb+type="submit"+ \verb+name="..."+ \verb+id="..."+ \verb+value="...">+ : créer un bouton soumettant les données saisies

### Les autres éléments

\verb+<textarea+ \verb+name="..."+ \verb+rows="..."+ \verb+cols="..."+ \verb+placeholder="..."+ \verb+wrap="soft"+ \verb+minlength="..."+ \verb+maxlength="...">...</textarea>+ : créer une zone de texte
	\begin{description}
		\item[\textbf{N.B.}] \verb+rows+ : fixer le nombre de lignes
		\item[\textbf{N.B.}] \verb+cols+ : fixer le nombre de colonnes
		\item[\textbf{N.B.}] \verb+wrap+ : gérer les retours à la ligne avec \verb+"soft"+ par défaut et \verb+"hard"+
		\item[\textbf{N.B.}] \verb+minlength+ : fixer un nombre minimal de caractères
		\item[\textbf{N.B.}] \verb+maxlength+ : fixer un nombre maximal de caractères
	\end{description}

\vspace{1cm}

\begin{lstlisting}
	<select name="..." size="..." multiple>
		<optgroup label="...">
			<option selected label="..." name="..." value="...">...</option>
			<option>...</option>
			...
		</optgroup>
		<optgroup>
			<option>...</option>
			...
		</optgroup>
	</select>
\end{lstlisting}
	\begin{description}
		\item[\textbf{N.B.}] Si l'attribut \verb+multiple+ est autorisé, la saisie multiple s'opère avec \verb+ctrl+.
		\item[\textbf{N.B.}] \verb+<optgroup>+ est une balise facultative.
		\item[\textbf{N.B.}] \verb+selected+ signifie que la valeur est sélectionnée.
	\end{description}

\vspace{1cm}

\verb+<button type="..." name="..." value="...">+ : créer un bouton en-dehors d'un formulaire
	\begin{description}
		\item[\textbf{N.B.}] \verb+type+ a pour valeurs au choix : \verb+button+, \verb+reset+ ou \verb+submit+.
		\item[\textbf{N.B.}] Il possède quelques options empruntées aux formulaires :
			\begin{itemize}
				\item \verb+formmethod="post"+ ou \verb+formmethod="get"+ ;
				\item \verb+formaction="page URL"+.
			\end{itemize}
	\end{description}

\vspace{1cm}

\begin{lstlisting}
	<input list="nom">
	<datalist id="nom">
		<option value="...">valeur</option>
		...
	</datalist>
\end{lstlisting}

\noindent Elle permet d'ajouter un champ de saisie (\verb+list+) en plus de valeurs proposées par défaut (\verb+datalist+).
	\begin{description}
		\item[\textbf{Attention !}] Ce n'est pas standard. Le navigateur \verb+Safari+ refuse cette option.
	\end{description}

\vspace{1cm}

\verb+<keygen name="..." id="..." challenge="..." keytype="...">...</keygen>+ : créer une clé cryptée.

\vspace{1cm}

\begin{lstlisting}
	<fieldset name="..." id="..." form="nom de l'id" disabled>
		<legend>titre de la section</legend>
		éléments du formulaire
	</fieldset>
\end{lstlisting}

\noindent Cela permet de définir des sections. \verb+form+ assure la liaison avec le bon formulaire qui s'opère par l'\verb+id+ renseigné dans les balises \verb+<form>+.





## Le *Document Object Model* (D.O.M.)

## L'objet `window`

## La gestion des événements

## L'introduction au `XML`
