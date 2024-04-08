<?php

/* getMenusByWeek
    
        . paramètre $s : le numéro de la semaine demandée
        > valeur de retour : un tableau de 7 objets, chaque objet décrivant le menu d'un jour de la semaine $s
    
        La fonction getMenusByWeek se connecte à votre BDD et récupère de la table Repas 
        les menus de la semaine $s.
*/
function getMenusByWeek($s){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("select * from Repas where semaine='$s'"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

/*  getMovie

    > valeur de retour : un objet avec 3 propriétés entree, plat dessert décrivant le menu du jour $j

    La fonction getMenu se connecte à votre BDD et récupère de la table Repas 
    le menu du jour $j de la semaine $s.
*/

function getMovie(){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("select * from Movies"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function getProfil(){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("select * from UserProfile"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function getMovieById($id_movies){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("select * from Movies where id_movies='$id_movies'"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function getMovieByCategorie($id_categorie){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("SELECT Movies.*, Movies_categories.categorie AS categorie FROM Movies JOIN Movies_categories ON Movies.id_categorie = Movies_categories.id_categorie WHERE categorie='$id_categorie';"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}



function getPlaylist($id_user){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("select * from Movies join Playlist on Movies.id_movies = Playlist.id_movies where Playlist.id_user = '$id_user'"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function getMoviesName(){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("select * from Movies"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}




function AddToPlaylist($id_movies , $id_user){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("insert into Playlist ( id_movies, id_user) values ($id_movies , $id_user);"); 
    $res = $answer->rowcount();
    return $res;
}

function RemoveToPlaylist($id_movies , $id_user){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("delete from Playlist where id_movies='$id_movies' and id_user='$id_user';"); 
    $res = $answer->rowcount();
    return $res;
}







/*  updateMovie
    > valeur de retour : le nombre de ligne modifié dans Repas (donc 1 si tout va bien, 0 sinon)

    La fonction updateMenu se connecte à votre BDD et met à jour la table Repas
    avec le nouveau menu donné en paramètre pour le jour $j de la semaine $s.
*/

function updateMovie($titre , $realisateur , $annee , $url_image , $url_trailer , $alt_image , $id_categorie){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("replace into Movies set titre='$titre', realisateur='$realisateur', annee='$annee', url_image='$url_image', url_affiche_carroussel='$url_affiche_carroussel' , url_trailer='$url_trailer', alt_image='$alt_image', id_categorie='$id_categorie';"); 
    $res = $answer->rowCount();
    return $res;
}
function updateProfil($user_name){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("replace into UserProfile set user_name='$user_name';"); 
    $res = $answer->rowCount();
    return $res;
}

function DeleteProfil($user_name){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("DELETE FROM UserProfile WHERE `UserProfile`.`id_user` = '$user_name';"); 
    $res = $answer->rowCount();
    return $res;
}


function UpdateTendance($movie1, $movie2, $movie3){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("UPDATE Movies SET tendance = 1 WHERE id_movies = '$movie1';
    UPDATE Movies SET tendance = 1 WHERE id_movies = '$movie2';
    UPDATE Movies SET tendance = 1 WHERE id_movies = '$movie3';");
    $res = $answer->rowCount();
    return $res;
}



/*  deleteMenu

    . paramètre $s : le numéro de la semaine demandée
    . paramètre $j : le jour du menu concerné
    > valeur de retour : le nombre de ligne modifié dans Repas (donc 1 si tout va bien, 0 sinon)

    La fonction deleteMenu se connecte à votre BDD et supprime le menu du jour $j de la semaine $s.
*/
function deleteMenu($s, $j){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("delete from Repas where semaine='$s' and jour='$j'"); 
    $res = $answer->rowCount();
    return $res;
}
