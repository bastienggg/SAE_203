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

23h30
creation de variable de style

29 mars
9h :
LA deuxiéme itération fonctionne lorsque l'on clique sur une card cela nous met en display none les cards pour avoir que le trailer et incersement ca nous raffiche tout eles carte quand on reappuis sur le boutton "ALL".

# Itération 3 Pouvoir filtrer l’affichage des films selon leur catégorie.

9h10:
TODO - front :
Le menu permet désormais de choisir si l’on veut afficher tous les films ou bien uniquement les films d’une catégorie donnée (par exemple : Fantasy, Comedy, Sci-Fi, Animation, etc…) Vous pouvez par exemple ajouter des boutons ou bien utiliser un élément <select> pour que votre menu ne soit pas dépendant du nombre de catégories. Cette solution vous est recommandée. L’option “All” fait partie des options de votre <select> si l’utilisateur ne souhaite pas filtrer. Et c’est l’option par défaut.

TODO - back :
La partie serveur doit savoir répondre aux requêtes HTTP supplémentaires suivantes :
script.php?action=getmovies&idcategory=45
Il s’agit d’une adaptation du traitement de la première requête réalisé à la première itération. Soit la requête ne comporte pas de paramètre idcategory et dans ce cas, la réponse demeure l’ensemble des films de la base de données au format JSON. Par contre, si un paramètre idcategory est présent, alors on sélectionne uniquement les films qui sont de cette catégorie. Les données sont toujours transmises au format JSON.
script.php?action=addmovie&idcategory=7&title=Interstellar&direction=christopher_nolan&...
Il s’agit aussi d’une adaptation du traitement de la seconde requête réalisé à la première itération. Quand l’administrateur enregistre un nouveau film depuis le back office, le navigateur va transmettre, en plus des informations déjà traitées, un identifiant de catégorie. Vous devez en tenir compte et faire en sorte que ce dernier soit correctement enregistré dans la base de données.

Base de données :
La base de données doit être modifiée pour que chaque film soit associé à une (et une seule) catégorie. Via phpMyAdmin, vous ajouterez une table Category. Chaque catégorie sera caractérisée par :
un identifiant unique
un nom de catégorie
Toujours via phpMyAdmin, vous ajouterez quelques catégories dans cette table, à minima celles qui correspondent aux films déjà enregistrés dans la table Movie.Vous ajouterez ensuite une colonne id_category à la table Movie. Cette colonne fait référence à un identifiant de catégorie présent dans la table Category.

9h50:
base de données modifier qui fonctionne avec la clef etrangére qui fait reference a unecatégorie dans une table Movies_catégories

10h20:
j'arrive a lancer une fonction en particuler par rapport au select

11h10:
Fin de la partie client
debut du bac office

20h50:
un peu de css

30 mars:
ajout de film a la base de données
