<?php


require("model.php");



/*  [ Contrôle de la mise à jour d'un menu ]

    Si la requête HTTP comprend un paramètre 'action' de valeur 'Update', alors on comprend que la requête
    provient du formulaire de mise à jour d'un menu du Back Office.
*/
// if (isset($_REQUEST['action']) && $_REQUEST['action']=='Update'){
//   $semaine = $_REQUEST['semaine'];
//   $jour = $_REQUEST['jour'];
//   $entree = $_REQUEST['entree'];
//   $plat = $_REQUEST['plat'];
//   $dessert = $_REQUEST['dessert'];
//   $ok = updateMenu($semaine, $jour, $entree, $plat, $dessert);
//   if ($ok>0){
//     echo "Le menu du $jour de la semaine $semaine est à jour";
//   }
//   else{
//     echo "Un problème est survenu";
//   }
//   exit(); // termine le script (ce qui est en dessous ne s'exécutera pas)
// }


if (isset($_REQUEST['action']) && $_REQUEST['action']=='Update-Movie'){
  $titre = $_REQUEST['titre'];
  $realisateur = $_REQUEST['realisateur'];
  $annee = $_REQUEST['annee'];
  $url_image = $_REQUEST['url_image'];
  $url_trailer = $_REQUEST['url_trailer'];
  $alt_image = $_REQUEST['alt_image'];
  $id_categorie=$_REQUEST['id_categorie'];
  $ok = updateMovie($titre , $realisateur , $annee , $url_image , $url_trailer , $alt_image , $id_categorie);
  if ($ok>0){
    echo "Le film $titre est à jour";
  }
  else{
    echo "Un problème est survenu";
  }
  exit(); // termine le script (ce qui est en dessous ne s'exécutera pas)
}

if (isset($_REQUEST['action']) && $_REQUEST['action']=='Update-profil'){
  $user_name = $_REQUEST['profil'];
  $ok = updateProfil($user_name);
  if ($ok>0){
    echo "Le profil $user_name est a jour";
  }
  else{
    echo "Un problème est survenu";
  }
  exit(); // termine le script (ce qui est en dessous ne s'exécutera pas)
}
/*  [ Contrôle de la demande de suppression d'un menu ]

    Si la requête HTTP comprend un paramètre 'action' de valeur 'Delete'
    alors il s'agit d'une demande de suppression d'un menu
*/
if (isset($_REQUEST['action']) && $_REQUEST['action']=='Delete'){
  $semaine = $_REQUEST['semaine'];
  $jour = $_REQUEST['jour'];
  $ok = deleteMenu($semaine, $jour);
  if ($ok>0){
    echo "Le menu du $jour de la semaine $semaine est supprimé.";
  }
  else{
    echo "Pas de menu supprimé (il n'existe peut être pas dans la BDD).";
  }
  exit(); // termine le script (ce qui est en dessous ne s'exécutera pas)
}

/*  [ Contrôle de la demande d'un menu pour un jour donnée ]

    Si l'on atteint ce point du script, on sait déjà que la requête HTTP n'est pas une mise
    à jour d'un menu. Reste à vérifier s'il s'agit d'obtenir le menu d'un jour donné. C'est
    le cas si la requête comprend un paramètre 'jour'.
*/

/* 
    Si on atteint ce point du script, c'est que la requête HTTP ne correspond ni à une
    demande de mise à jour d'un menu, ni à une demande d'un menu pour un jour donné.
    Dans ce cas le script répond par un code 404 par défaut.
*/
if(isset($_REQUEST['action'])&& $_REQUEST['action']=='getmovies'){
  $card = getMovie();
  echo json_encode($card);
  exit();
}
if(isset($_REQUEST['action'])&& $_REQUEST['action']=='getmoviestrailer' && isset($_REQUEST['id_movies'])){
  $id_movies = $_REQUEST['id_movies'];
  $card_player = getMovieById($id_movies);
  echo json_encode($card_player);
  exit();
}


if(isset($_REQUEST['action'])&& $_REQUEST['action']=='getmoviescategorie' && isset($_REQUEST['id_categorie'])){
  $id_categorie = $_REQUEST['id_categorie'];
  $card_player = getMovieByCategorie($id_categorie);
  echo json_encode($card_player);
  exit();
}

if(isset($_REQUEST['action'])&& $_REQUEST['action']=='getprofil'){
  $user_profil = getProfil();
  echo json_encode($user_profil);
  exit();
}
http_response_code(404);

?>