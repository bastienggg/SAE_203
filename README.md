# SAE_203

20/03

9h :
Création du dossier avec les itérations qui sert de labs de test
Écriture du resets.css
Écriture du index html de la ^premiére itération qui sert de test

10h:
Commencement avant les base de donnés

todo list :

client
changer index.html (fait)
Importer le bon css pour l'index (fait)
Revoir le template card (fait)

script.php
Loader tout les truc de film avec le action=getMovies (fait)

model.php
plus de getMenue mais get Movies (fait)
requete qui vas apparaitre "select \* from Movies" (fait)

10h - 14h55
Creation du code permettant d'appeler tout les film grace a un boutton "ALL"

16h
Back office fonctionnel pour l'ajout de film

# creation de la deuxiéme branche pour l'itération_2

21h30
TODO :
Lorsque l’on clique sur un des films présents dans la zone d’affichage, celle-ci est mise à jour pour faire apparaître le trailer du film sur lequel on a cliqué. Pour faire à nouveau apparaître tous les films dans la zone d’affichage, on cliquera sur “All” comme décrit lors de la précédente itération.

Lorsque l’on clique sur l’élément HTML qui contient l’affichage d’un film, cela déclenche une requête de type fetch en Javascript ciblant l’url script.php?action=getmovie&idmovie=12 qui demande au serveur de renvoyer toutes les données (en JSON) du film sur lequel on a cliqué (dans notre exemple, celui d’identifiant 12). Lorsqu’on les reçoit, on utilise un (autre) template pour formater le player youtube à l’aide des données reçues. Et on insère le tout dans la zone d’affichage à la place de la liste de tous les films. Cette solution nécessitera d’adapter le formatage réalisé dans la précédente itération afin que chaque clique déclenche la bonne requête avec le bon identifiant de film.

---

écriture du script.js du composant

écriture du requestMoviesTrailer() dans le main.js

22h11:
j'arrive a faire apparaitre mes tout mes template test en appuyant sur un boutton

22h30:
ff

22h50
je reussit en avoir ma template qui aparait en fonction de l'id mis dans la fonction qui se déclenche lors du onclick du bdeuxiéme boutton qui servait de test

23h10
j'arrive a load ma template designer correctement qui intergre la video youtube de trailler cepandant je la fait apparaire en bas de la page je ne sait pas comment je peux faire pour que cette template remplace l'ancienne...
