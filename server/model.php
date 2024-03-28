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

function getMovieById($id_movies){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("select * from Movies where id_movies='$id_movies'"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}


/*  updateMovie
    > valeur de retour : le nombre de ligne modifié dans Repas (donc 1 si tout va bien, 0 sinon)

    La fonction updateMenu se connecte à votre BDD et met à jour la table Repas
    avec le nouveau menu donné en paramètre pour le jour $j de la semaine $s.
*/

function updateMovie($titre , $realisateur , $annee , $url_image , $url_trailer , $alt_image){
    $cnx = new PDO("mysql:host=localhost;dbname=guitard25", "guitard25", "guitard25");
    $answer = $cnx->query("replace into Movies set titre='$titre', realisateur='$realisateur', annee='$annee', url_image='$url_image', url_trailer='$url_trailer', alt_image='$alt_image'"); 
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
