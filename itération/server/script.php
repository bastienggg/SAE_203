<?php


require("model.php");



if (isset($_REQUEST['action']) && $_REQUEST['action']=='Update-Movie'){
  $titre = $_REQUEST['titre'];
  $realisateur = $_REQUEST['realisateur'];
  $annee = $_REQUEST['annee'];
  $url_image = $_REQUEST['url_image'];
  $url_affiche_carroussel = $_REQUEST['url_affiche_carroussel'];
  $url_trailer = $_REQUEST['url_trailer'];
  $alt_image = $_REQUEST['alt_image'];
  $id_categorie=$_REQUEST['id_categorie'];
  $ok = updateMovie($titre , $realisateur , $annee , $url_image , $url_affiche_carroussel , $url_trailer , $alt_image , $id_categorie);
  if ($ok>0){
    echo "Le film $titre est à jour";
  }
  else{
    echo "Un problème est survenu";
  }
  exit();
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
  exit();
}

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
  exit();
}

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

if(isset($_REQUEST['action'])&& $_REQUEST['action']=='getMoviesName'){
  $user_profil = getMoviesName();
  echo json_encode($user_profil);
  exit();
}


if(isset($_REQUEST['action'])&& $_REQUEST['action']=='getplaylist'){
  $id_user = $_REQUEST['id_user'];
  $card_playlist = getPlaylist($id_user);
  echo json_encode($card_playlist);
  exit();
}

if(isset($_REQUEST['action'])&& $_REQUEST['action']=='addtoplaylist'){
  $id_movies = $_REQUEST['id_movies'];
  $id_user = $_REQUEST['id_user'];
  $card_player = AddToPlaylist($id_movies , $id_user);
  echo json_encode($card_player);
  exit();
}

if(isset($_REQUEST['action'])&& $_REQUEST['action']=='removetoplaylist'){
  $id_movies = $_REQUEST['id_movies'];
  $id_user = $_REQUEST['id_user'];
  $card_player = RemoveToPlaylist($id_movies , $id_user);
  echo json_encode($card_player);
  exit();
}


if (isset($_REQUEST['action']) && $_REQUEST['action']=='Delete-profil'){
  $user_name = $_REQUEST['profil-delete'];
  $ok = DeleteProfil($user_name);
  if ($ok>0){
    echo "Le profil qui a pour id : $user_name est supprimer";
  }
  else{
    echo "Un problème est survenu";
  }
  exit();
}

if (isset($_REQUEST['action']) && $_REQUEST['action']=='Gestion-tendance'){
  $movie1 = $_REQUEST['movie1'];
  $movie2 = $_REQUEST['movie2'];
  $movie3 = $_REQUEST['movie3'];
  $ok = UpdateTendance($movie1, $movie2, $movie3);
  if ($ok>0){
    echo "Les film qui ont pour id $movie1 , $movie2 , $movie3 sont actuellement en tendance";
  }
  else{
    echo "Un problème est survenu";
  }
  
  exit();
}

if (isset($_REQUEST['action']) && ($_REQUEST['action'] == 'getSearchbar') && isset ($_REQUEST["searchbar"]) && !empty($_REQUEST["searchbar"])){
  $searchbar = $_REQUEST["searchbar"];
  $main = getSearchbar($searchbar);
  echo json_encode($main);
  exit(); 
}

http_response_code(404);

?>
