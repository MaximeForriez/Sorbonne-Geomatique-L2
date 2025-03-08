# La cartographie assistée par ordinateur (C.A.O.)

- T.D. La cartographie assistée par ordinateur (C.A.O.)

	- Manipulation sur `Q-GIS`

	- Manipulation sur `ArcGIS online`

## Gérer les projections

Dans les S.I.G., les systèmes de projection sont codés. C'est l'E.P.S.G. qui s'en est chargé. Pour obtenir les codes, aller sur le site : [https://epsg.io](https://epsg.io).

Les codes les plus utilisés en France et en Europe sont :
- WGS84 : EPSG:4326 (international)
- ED50 : EPSG:4230 (Europe)
- EuroLambert : EPSG:2192 (Europe)
- Lambert 93 : IGNF:LAMB93, EPSG:2156 (version 1), EPSG:9793 (version 2) et EPSG:9794 (version 2b) (France, officiel)
- Lambert I : IGNF:LAMB1 (France, nord)
- Lambert I Carto : IGNF:LAMB1C (France, nord)
- Lambert II : IGNF:LAMB2 (France, centre)
- Lambert II Carto : IGNF:LAMB2C (France, centre)
- Lambert III : IGNF:LAMB3 (France, sud)
- Lambert III Carto : IGNF:LAMB3C (France, sud)
- Lambert IV : IGNF:LAMB4 (France, Corse)
- Lambert IV Carto : IGNF:LAMB4C (France, Corse)
- Lambert II étendu : IGNF:LAMBE (France, compatible avec le système européen)
- RGF93 / CC42 : EPSG:3942 (France, cadastre entre 41°N et 43°N)
- RGF93 / CC43 : EPSG:3943 (France, cadastre entre 42°N et 44°N)
- RGF93 / CC44 : EPSG:3944 (France, cadastre entre 43°N et 45°N)
- RGF93 / CC45 : EPSG:3945 (France, cadastre entre 44°N et 46°N)
- RGF93 / CC46 : EPSG:3946 (France, cadastre entre 45°N et 47°N)
- RGF93 / CC47 : EPSG:3947 (France, cadastre entre 46°N et 48°N)
- RGF93 / CC48 : EPSG:3948 (France, cadastre entre 47°N et 49°N)
- RGF93 / CC49 : EPSG:3949 (France, cadastre entre 48°N et 50°N)
- RGF93 / CC50 : EPSG:3950 (France, cadastre entre 49°N et 51°N)
- *etc*.

La projection figure dans les métadonnées des données que vous avez téléchargées.

> [!TIP]
> Préférez utiliser le **degré décimal** aux degrés, minutes, secondes (D.M.S.) ou aux données métriques (coordonnées du système de projection). En effet, on ne peut bien manipuler les données qu'en degré décimal.

## Exporter une carte composée de plusieurs couches avec :

Officiellement, les S.I.G. ne sont pas des C.A.O. Il existe des logiciels spécifiques pour les pratiquer :
- `Philocarto` ;
- `ScapeToad` ;
- *etc*.

Il faut souvent corriger le dessin sur un D.A.O. comme :
- `Illustrator` ;
- `Inkscape` (gratuit) ;
- *etc*.

### `Q-GIS`

`Q-GIS` offre deux possibilités pour sortir la carte dessinée par les couches :
1. Menu `Projet`, puis `Exporter comme image...` ;
2. Menu `Projet`, puis `Nouveau Compositeur d'impression`.

La première solution est inadaptée, car l'image produite n'a pas d'échelle cartographique, pas de légendes, *etc*. Elle est en format raster, donc inexploitable dans un logiciel de D.A.O.

La seconde solution est complexe, mais elle permet d'obtenir un image vectorielle en `*.pdf` directement exploitable dans un logiciel de D.A.O.
1. Menu `Projet`, puis `Nouveau Compositeur d'impression`

![]()

2. Fenêtre `Titre du composeur`

![]()

3. Fenêtre `Nom du composeur`

![]()

- `Ajouter une nouvelle carte` (onglet à gauche), puis dans la zone blanche étirée votre carte à l'endroit désiré

![]()

- `Ajouter une nouvelle étiquette` (onglet à gauche), puis dans la zone blanche étirée votre carte à l'endroit désiré

![]()

- `Ajouter une nouvelle légende` (onglet à gauche), puis dans la zone blanche étirée votre carte à l'endroit désiré

![]()

- `Ajouter une échelle graphique` (onglet à gauche), puis dans la zone blanche étirée votre carte à l'endroit désiré

![]()

- `Ajouter une flèche` (onglet à gauche), puis dans la zone blanche étirée votre carte à l'endroit désiré

![]()

- *etc*.

> [!TIP]
> Si vous fermez votre composeur, il faudra l'ouvrer avec menu `Projet`, puis `Gestionnaire de composeurs`

- Dans l'onglet de droite, vous réglez le format de votre « impression ».
	- Choisir une taille minimale A3 pour votre feuille
	- Faire attention à la résolution de l'export (supérieure à 300 dpi)

- Dans l'onglet du haut, il y a plein d'options dont `Exporter en PDF`. Une fois votre fichier exporté en P.D.F., vous pourrez le lire sur `Illustrator`, ou un autre logiciel de D.A.O. afin de rendre la carte conforme à la sémiologie graphique, notamment en plaçant l'orientation sur votre carte.

### `ArcGIS Online`


