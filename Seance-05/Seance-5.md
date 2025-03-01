# Le langage S.Q.L.

- C.M. Le « langage S.Q.L. » (0h30)

- T.D. Manipulation des tables sous `Q-GIS` et `ArcGIS Online` (1h30)

	- Création d'une table à partir de points géolocalisés
	
	- Manipulation des tables

Pour effectuer les savoir-faire que vous devez acquérir, cette présentation rapide des requêtes S.Q.L. par défaut sur n'importe quel logiciel de géomatique, vous montre comment faire sur `Q-GIS` et `ArcGIS Online`.

## Tâche 1 : Savoir-faire un géoréférencement

Le géoréférencement est la base de n'importe quel système d'information géographique. Lors de la séance 2, nous avons injecté des données sans distinguer la couche dessin des données attributaires. Comme expliquer en C.M., cette pratique est à éviter. De fait, il faut bien séparer informations géométriques et informations attributaires. Le géoréférencement permet de réaliser le traitement des informations géométriques.

Reprenons la répartition spatiale des distributeurs de préservatifs masculins dans Paris. J'ai opéré un nettoyage du fichier original qui présentait des problèmes d'encodage, puis, à partir de lui, générer deux nouveaux fichiers :
- `distributeurs-coord.csv` ;
- `distributeurs-attribut.csv`.

Pour le géoréférencement, on utilisera le fichier `distributeurs-coord.csv`.

### Avec `Q-GIS`

> [!WARNING]
> J'ai utilisé la version 2.14.7. Si vous utilisez une version plus récente, il est possible que les commandes ne soient pas placées au même endroit. Il faudra consulter l'aide pour trouver les nouveaux emplacements.

1. Sous `Q-GIS`, le géoréférencement s'opère avec l'ajout d'une couche de texte délimité.

![Ajout d'une couche de texte délimité](./Q-GIS/Georeferencement-Q-GIS-Etape-1.png)

2. Une fenêtre s'ouvre, vous devez compléter l'intégralité des options signalées dans l'image ci-dessous.

![Ajout d'une couche de texte délimité](./Q-GIS/Georeferencement-Q-GIS-Etape-2.png)

3. Après avoir tout complété et validé, une nouvelle fenêtre s'ouvre : « Sélectionneur de système de coordonnées de référence ». C'est l'étape la plus importante. En effet, les coordonnées géographiques sont de nature différente d'une carte à l'autre. Il faut choisir le bon système de projection. Par défaut, les données tests présentes dans ce cours sont **toutes** en **degrés décimaux**, mais il faut bien comprendre que de nombreux systèmes utilisent les données métriques comme les systèmes Lambert en France.

Les systèmes de coordonnées géographiques possèdent tous un **code E.P.S.G.**. Il faut connaître les codes principalement utilisés dans son État. Nous allons utilisé le système international `WSG84`, codé `EPSG:4326`.

![Ajout d'un système de coordonnées de référence](./Q-GIS/Georeferencement-Q-GIS-Etape-3.png)

Voilà votre carte est désormais géoréférencée sous la forme d'un ensemble de lieux.

> [!TIP]
> Convertissez toutes vos coordonnées en degrés décimaux dans votre système d'information géographique.

### Avec `ArcGIS Online`

D'un logiciel à l'autre les étapes d'une même action peuvent être plus ou moins longue. Si, en trois étapes, `G-GIS` permettait de valider un géoréférencement, `ArcGIS Online` en nécessite beaucoup plus.

On utilise toujours le fichier `distributeurs-coord.csv`.

1. Après avoir cliqué sur « Ajouter une couche à partir d'un fichier », comme on l'a vu en [séance 2](../Seance-02/Seance-2.md), vous sélectionnez ajouter une couche à partir de votre appareil.

![Ajouter une couche à partir d'un fichier](./ArcGIS%20Online/Georeferencement-ArcGIS-Online-Etape-01.png)

2. Sélectionner le nouveau fichier `distributeurs-coord.csv`

![Ajouter une couche à partir d'un fichier](./ArcGIS%20Online/Georeferencement-ArcGIS-Online-Etape-02.png)

3. Laisser l'option par défaut

![Ajouter une couche à partir d'un fichier](./ArcGIS%20Online/Georeferencement-ArcGIS-Online-Etape-03.png)

4. Vous retrouvez les mêmes paramétrages présentés dans `Q-GIS`. Toutefois, `ArcGIS Online` vous impose de bien définir le type des variables. Par défaut, il prédétermine les bons types.

![Ajouter une couche à partir d'un fichier](./ArcGIS%20Online/Georeferencement-ArcGIS-Online-Etape-04.png)

5. Vous passez à la détermination des champs : latitude (champ `Y`) et longitude (champ `X`).

![Ajouter une couche à partir d'un fichier](./ArcGIS%20Online/Georeferencement-ArcGIS-Online-Etape-05.png)

6. La fenêtre suivante vous permet de remplir les métadonnées.

![Ajouter une couche à partir d'un fichier](./ArcGIS%20Online/Georeferencement-ArcGIS-Online-Etape-06.png)

7. Une fois la dernière étape validée, la carte que vous connaissez bien s'affiche.

![Ajouter une couche à partir d'un fichier](./ArcGIS%20Online/Georeferencement-ArcGIS-Online-Etape-07.png)

> [!NOTE]
> Comme vous le constatez, le format du dessin est différent par rapport à votre premier testé. Des cercles concentriques représentent les lieux des distributeurs, ce qui est une représentation cartographique plus conforme par rapport à la sémiologie graphique.

## Tâche 2 : Savoir-faire une jointure attributaire

Une fois le géoréférencement effectué, vous n'avez plus les données attributaires accessibles. Il faut de fait joindre une table géométrique avec une table attributaire.

Dans le nouveau fichier, `distributeurs-coord.csv`, vous avez certainement remarqué le nouveau champ `ID`. Si vous ouvrez le fichier `distributeurs-attribut.csv`, vous remarquez que ce nouveau champ `ID` est également présenté. L'idée d'une jointure est de faire correspondre les deux identifiants `ID` afin de lier les informations géométriques avec les informations attributaires.

### Avec `Q-GIS`

1. Visualisons les données attributaires sur `Q-GIS`, en faisant un clic droit sur la couche dont on veut les informations géographiques, puis en sélectionnant « Ouvrir la table des attributs »

![Jointure attributaire](./Q-GIS/Jointure-attributaire-Q-GIS-Etape-01.png)

2. La table des attributs s'ouvre. Vous constatez que les données ne comportent que trois champs `ID`, `X` et `Y`. De fait, il faut bien opérer une jointure attributaire afin de lier données géométriques et données attributaires.

![Jointure attributaire](./Q-GIS/Jointure-attributaire-Q-GIS-Etape-02.png)

3. Pour insérer vos données attributaires, on opère la même opération que pour des données géométriques.

![Jointure attributaire](./Q-GIS/Jointure-attributaire-Q-GIS-Etape-03.png)

4. Lors de l'ouverture de la fenêtre qui vous est maintenant familière, il faut bien sélectionner l'option « Pas de géométrie ».

![Jointure attributaire](./Q-GIS/Jointure-attributaire-Q-GIS-Etape-04.png)

5. Une fois validée, on opère de nouveau un clic droit sur la couche dessin sur laquelle on veut faire la jointure, et on sélectionne « Propriétés ».

![Jointure attributaire](./Q-GIS/Jointure-attributaire-Q-GIS-Etape-05.png)

6. La fenêtre « Propriétés » s'ouvre. 

![Jointure attributaire](./Q-GIS/Jointure-attributaire-Q-GIS-Etape-06.png)

7. Cliquer sur l'onglet « Jointure », puis le bouton « + ».

![Jointure attributaire](./Q-GIS/Jointure-attributaire-Q-GIS-Etape-07.png)

8. La fenêtre permettant de paramétrer la jointure apparaît. Dans le cas présent, vous n'avez que deux tables, opérer la liaison entre elles est relativement simple, mais, en cours de votre apprentissage en géomatique, vous serez amené à avoir plusieurs couches en même temps. De fait, il faut bien faire attention à réaliser la bonne liaison.

![Jointure attributaire](./Q-GIS/Jointure-attributaire-Q-GIS-Etape-08.png)

9. On vérifie que la jointure s'est correctement opérée.

![Jointure attributaire](./Q-GIS/Jointure-attributaire-Q-GIS-Etape-09.png)

10. Comme vous le voyez, la liaison entre couche dessin et table attributaire est désormais opérante. On peut maintenant travailler sur la couche.

![Jointure attributaire](./Q-GIS/Jointure-attributaire-Q-GIS-Etape-10.png)

### Avec `ArcGIS Online`

1. Ajouter une couche à partir d'un fichier

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-01.png)

2. Sélectionner le fichier `distributeurs-attribut.csv`

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-02.png)

3. Laisser le paramètre par défaut

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-03.png)

4. Vérifier la pré-sélection des types pour les champs de table attributaire

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-04.png)

5. La nouvelle fenêtre doit afficher l'absence de données spatiales.

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-05.png)

6. Compléter les métadonnées de la table attributaire. Il faut changer le nom pour pouvoir valider la table.

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-06.png)

7. Vérifier que, dans l'onglet « Tables », la table attributaire apparaisse.

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-07.png)

8. Aller dans l'onglet à droite « Analyse »

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-08.png)

9. Choisir l'option « Joindre des entités »

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-09.png)

10. Paramétrer la jointure

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-10.png)

11. Une fois exécutée, la requête n'affiche pas la couche. Il faut la rechercher dans l'onglet « Couches » en cliquant directement sur « Ajouter ».

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-11.png)

12. La liste des couches enregistrées dans votre profil apparaît. Choisir celle de la jointure en cliquant sur « Ajouter »a.

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-12.png)

> [!WARNING]
> Le chargement de la couche de la jointure peut prendre un certain temps.

13. Vous pouvez visualiser les champs la jointure en cliquant sur « Couches », puis « output layer ».

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-13.png)

14. La liste des champs apparaît.

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-14.png)

15. Dans « Couches », la couche jointe est disponible.

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-15.png)

16. Vous pouvez visualiser la table attributaire jointe.

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-16.png)

17. Dans la fenêtre qui s'est ouverte, vous pouvez vérifier votre jointure.

![Jointure attributaire](./ArcGIS%20Online/Jointure%20attributaire-ArcGIS-Online-Etape-17.png)

> [!NOTE]
> Il existe plusieurs sortes de jointures S.Q.L. Dans `ArcGIS Online`, deux sont disponibles :
> - la jointure interne : toutes les valeurs dans l'une ou l'autre des tables de la jointure, il existe strictement le même nombre de *tuple*, donc d'identifiant.
> - la jointure à gauche : la couche dessin peut avoir davantage de *tuple* que la table attributaire à lui joindre. Dans ce cas, les valeurs manquantes contiendront des champs `NULL`.

## Tâche 3 : Savoir-faire une requête spatiale 

La notion de requête spatiale permet d'utiliser à son plein potentiel le langage S.Q.L.

Pour réaliser une requête spatiale, il faut **au moins deux couches**. De fait, on va poser un problème nécessitant une nouvelle couche.

**Problème.** Les données brutes des distributeurs ne répondent pas à toutes les questions géographiques que l'on pourrait se poser. Par exemple, combien de distributeurs existent-ils dans un arrondissement donné ? Pour répondre à cette question, il est possible d'opérer une **requête spatiale**.

Téléchargeons la couche des arrondissements de Paris.

### Avec `Q-GIS`

1. Ouvrir la couche des arrondissements de Paris.

![Insertion de la couche des arrondissements de Paris](./Q-GIS/Requete-spatiale-Q-GIS-Etape-1.png)

> [!TIP]
> Si la couche des arrondissements recouvre celle des distributeurs, il faut changer l'ordre des couches dans l'onglet des couches les glissant dans l'ordre voulu. Plus la couche est vers le haut, plus elle est en avant-plan.

2. Aller dans l'onglet « Vecteurs ». Sur `Q-GIS`, cet onglet contient toutes les requêtes spatiales possibles.

![Compter les points dans un polygone](./Q-GIS/Requete-spatiale-Q-GIS-Etape-2.png)

3. Il faut bien paramétrer la requête. Sur `Q-GIS`, il faut impérativement nommer et créer une nouvelle couche, ici `test.shp`, mais vous pouvez lui donner un nom plus clair.

![Compter les points dans un polygone](./Q-GIS/Requete-spatiale-Q-GIS-Etape-3.png)

4. La nouvelle couche apparaît en avant-plan. Il faut la placer sous la couche des distributeurs pour que vous voyez de nouveau les points.

![Compter les points dans un polygone](./Q-GIS/Requete-spatiale-Q-GIS-Etape-4.png)

5. Faire un clic droit sur la couche `Test` et cliquer sur « Ouvrir la table d'attributs »

![Compter les points dans un polygone](./Q-GIS/Requete-spatiale-Q-GIS-Etape-5.png)

6. Comme vous le constatez, le nouveau champ est apparu dans les données attributaires de la table des arrondissements de Paris originale.

![Compter les points dans un polygone](./Q-GIS/Requete-spatiale-Q-GIS-Etape-6.png)

> [!TIP]
> Chaque requête spatiale dépend à la fois de la forme géométrique :
> - point ;
> - polyligne ;
> - polygone.
> mais également de ce que l'on souhaite créer.

### Avec `ArcGIS Online`






























## Tâche 4 : Savoir-faire une statistique spatiale

On a compté les distributeurs par arrondissement. Maintenant, peut-on spatialiser le résultat avec des cercles proportionnels par exemple ? La réponse est affirmative. Pour ce, on utilise des outils de statistique spatiale.

### Avec `Q-GIS`

1. Clic droit sur la couche, et ouvrir « Propriétés »

![Faire une requête spatiale](./Q-GIS/Statistiques-spatiales-Q-GIS-Etape-1.png)

2. Aller dans l'onglet « Diagrammes »

![Faire une requête spatiale](./Q-GIS/Statistiques-spatiales-Q-GIS-Etape-2.png)

3. Cliquer sur « Montrer les diagrammes pour cette couche »

![Faire une requête spatiale](./Q-GIS/Statistiques-spatiales-Q-GIS-Etape-3.png)

4. Sélectionner les champs dont on veut faire la statistique

![Faire une requête spatiale](./Q-GIS/Statistiques-spatiales-Q-GIS-Etape-4.png)

5. Paramétrer les cercles proportionnels

![Faire une requête spatiale](./Q-GIS/Statistiques-spatiales-Q-GIS-Etape-5.png)

6. Une fois validée, une cartographie statistique a été opérée. Les cercles proportionnels avec la valeur de l'attribut est apparu. Toutefois, la position du cercle est par défaut légèrement décalé, ce qui peut être une source d'erreurs à la lecture de la carte produite. Il faut par conséquent modifier ce résultat.

![Faire une requête spatiale](./Q-GIS/Statistiques-spatiales-Q-GIS-Etape-6.png)

7. Ouvrir les propriétés de la couche, et centrer la couche sur le centroïde. Ce dernier correspond mathématiquement au barycentre de la forme polygonale, ici un arrondissement.

![Faire une requête spatiale](./Q-GIS/Statistiques-spatiales-Q-GIS-Etape-7.png)

8. Le résultat obtenu est plus conforme à la sémiologie graphique en cartographie.

![Faire une requête spatiale](./Q-GIS/Statistiques-spatiales-Q-GIS-Etape-8.png)

### Avec `ArcGIS Online`






























## Approfondissement : les requêtes S.Q.L. en console

### Ressources

- [Cours de `SQL`](https://www.youtube.com/playlist?list=PLjwdMgw5TTLXXpRlzDZq7d8iS6YXgnslt)

- [Cours de `SQL`](https://www.youtube.com/watch?v=3KwmNNucIjA&list=PLrSOXFDHBtfGl66sXijiN8SU9YJaM_EQg)

- [Approfondissement sur le `SQL`](https://www.youtube.com/watch?v=jxSgB4UQiY0&list=PLrSOXFDHBtfHxLnX_BvHrcKkLh8sBRcHe)
