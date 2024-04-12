# SAE_203

Création du dossier avec les itérations qui sert de labs de test
Écriture du resets.css
Écriture du index html de la ^premiére itération qui sert de test

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

Creation du code permettant d'appeler tout les film grace a un boutton "ALL"

Back office fonctionnel pour l'ajout de film

# creation de la deuxiéme branche pour l'itération_2

TODO :
Lorsque l’on clique sur un des films présents dans la zone d’affichage, celle-ci est mise à jour pour faire apparaître le trailer du film sur lequel on a cliqué. Pour faire à nouveau apparaître tous les films dans la zone d’affichage, on cliquera sur “All” comme décrit lors de la précédente itération.

Lorsque l’on clique sur l’élément HTML qui contient l’affichage d’un film, cela déclenche une requête de type fetch en Javascript ciblant l’url script.php?action=getmovie&idmovie=12 qui demande au serveur de renvoyer toutes les données (en JSON) du film sur lequel on a cliqué (dans notre exemple, celui d’identifiant 12). Lorsqu’on les reçoit, on utilise un (autre) template pour formater le player youtube à l’aide des données reçues. Et on insère le tout dans la zone d’affichage à la place de la liste de tous les films. Cette solution nécessitera d’adapter le formatage réalisé dans la précédente itération afin que chaque clique déclenche la bonne requête avec le bon identifiant de film.

---

écriture du script.js du composant

écriture du requestMoviesTrailer() dans le main.js

j'arrive a faire apparaitre mes tout mes template test en appuyant sur un boutton

je reussit en avoir ma template qui aparait en fonction de l'id mis dans la fonction qui se déclenche lors du onclick du bdeuxiéme boutton qui servait de test

j'arrive a load ma template designer correctement qui intergre la video youtube de trailler cepandant je la fait apparaire en bas de la page je ne sait pas comment je peux faire pour que cette template remplace l'ancienne...

creation de variable de style

LA deuxiéme itération fonctionne lorsque l'on clique sur une card cela nous met en display none les cards pour avoir que le trailer et incersement ca nous raffiche tout eles carte quand on reappuis sur le boutton "ALL".

# Itération 3 Pouvoir filtrer l’affichage des films selon leur catégorie.

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

base de données modifier qui fonctionne avec la clef etrangére qui fait reference a unecatégorie dans une table Movies_catégories

j'arrive a lancer une fonction en particuler par rapport au select

Fin de la partie client
debut du bac office

un peu de css

ajout de film a la base de données

# Itération 4 Avoir des profils utilisateur.

TODO:
Site vitrine:
Un (autre) élément <select> permet de choisir un des profils utilisateur présents dans la base de données. Le profil sélectionné sera le profil “actif” (voir itération 5).
backoffice:
Un second formulaire permet à l’administrateur d’ajouter un profil utilisateur à la base de données. Vous pouvez ajouter ce second formulaire sur la même page ou si vous préférez, sur une seconde. Dans ce dernier cas, vous prévoyez un petit menu de navigation basique (de simples liens <a>) pour aller d’un formulaire à un autre.

ajout de la table userprofil a la base de donne qui contient un id_user ainsi que le pseudo de l'utilsateur.

itération 4 fini
le select sur la page client pour choisir le profil est dynamique

# Itération 5 Avoir une liste de lecture par profil utilisateur

TODO:
Site vitrine :
Première modification : Lorsque l’interface présente des films, faites apparaître pour chacun d’eux un symbole “+” (ou autre). Cliquer sur “+” ajoute un film à la playlist de l’utilisateur dont le profil est actif (sélectionné).
Seconde modification : Votre interface doit présenter un menu supplémentaire que l’on appellera “Playlist”. Lorsque l’on clique dessus, les films que l’on a déjà ajoutés à sa playlist apparaissent dans la zone d’affichage. La présentation peut être la même que pour afficher n’importe quel film sauf qu’il n’y a plus de symbole “+” (on ne va pas ajouter une playlist des films qui s’y trouvent déjà…)

Base de données :
Vous devez modifier votre base de données afin de pouvoir enregistrer les données d’une playlist pour chaque profil utilisateur. Vous êtes dans le cas “classique” d’une association entre la table UserProfile et la table Movie. Cette association peut être nommée Playlist. Elle associe un identifiant de profil à un identifiant de film. Playlist est une association “Many-To-Many” au sens où un profil peut être associé à plusieurs films (c’est mieux si on veut plus d’un film dans sa playlist) et un film peut être associé à plusieurs profils (c’est mieux si on veut qu’un film puisse se trouver plusieurs playlist).

Pour matérialiser cette association, créez une table Playlist avec une colonne id_profile qui référence un identifiant de profil et une colonne id_movie qui référence un identifiant de film. N’oubliez pas de définir sa clé primaire.

Backoffice rien a changer

la fonction AddToPlaylist fonctionne

fini

# Itération 6 Pouvoir retirer un film de la liste de lecture d’un profil utilisateur

fini

# itération 7 Pouvoir supprimer un profil utilisateur depuis le back office.

fini

# fin

L'itération 8 ne fonctionne pas je n'est pas reussit a le rendre dynamique cepaendant j'ai quand même fait la barre de recherche
