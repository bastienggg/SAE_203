<?php

function getMovie(){
    $cnx = new PDO("mysql:host=localhost;dbname=SAE203", "root", "4JaF:bt33$4mH");
    $answer = $cnx->query("select * from Movies"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function getProfil(){
    $cnx = new PDO("mysql:host=localhost;dbname=SAE203", "root", "4JaF:bt33$4mH");
    $answer = $cnx->query("select * from UserProfile"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function getMovieById($id_movies){
    $cnx = new PDO("mysql:host=localhost;dbname=SAE203", "root", "4JaF:bt33$4mH");
    $answer = $cnx->query("select * from Movies where id_movies='$id_movies'"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function getMovieByCategorie($id_categorie){
    $cnx = new PDO("mysql:host=localhost;dbname=SAE203", "root", "4JaF:bt33$4mH");
    $answer = $cnx->query("SELECT * FROM `Movies` WHERE id_categorie='$id_categorie';"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function getPlaylist($id_user){
    $cnx = new PDO("mysql:host=localhost;dbname=SAE203", "root", "4JaF:bt33$4mH");
    $answer = $cnx->query("select * from Movies join Playlist on Movies.id_movies = Playlist.id_movies where Playlist.id_user = '$id_user'"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function getMoviesName(){
    $cnx = new PDO("mysql:host=localhost;dbname=SAE203", "root", "4JaF:bt33$4mH");
    $answer = $cnx->query("select * from Movies"); 
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function AddToPlaylist($id_movies , $id_user){
    $cnx = new PDO("mysql:host=localhost;dbname=SAE203", "root", "4JaF:bt33$4mH");
    $answer = $cnx->query("insert into Playlist ( id_movies, id_user) values ($id_movies , $id_user);"); 
    $res = $answer->rowcount();
    return $res;
}

function RemoveToPlaylist($id_movies , $id_user){
    $cnx = new PDO("mysql:host=localhost;dbname=SAE203", "root", "4JaF:bt33$4mH");
    $answer = $cnx->query("delete from Playlist where id_movies='$id_movies' and id_user='$id_user';"); 
    $res = $answer->rowcount();
    return $res;
}

function updateMovie($titre, $description, $realisateur, $annee, $url_image, $url_image_carrousel , $url_trailer, $alt_image, $tendance ,$id_categorie)
{
    try {
        $db_host = "localhost";
        $db_name = "SAE203";
        $db_user = "root";
        $db_password = "4JaF:bt33$4mH";

        $cnx = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_password);
        $cnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $id_categorie = intval($id_categorie);

        $stmt = $cnx->prepare("REPLACE INTO Movies (titre, description_movie, realisateur, annee, url_image, url_affiche_carroussel, url_trailer, alt_image, tendance, id_categorie) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$titre, $description, $realisateur, $annee, $url_image, $url_image_carrousel, $url_trailer, $alt_image, $tendance, $id_categorie]);

        return $stmt->rowCount();
    } catch (PDOException $e) {
        echo "Erreur: " . $e->getMessage();
        return 0;
    }
}

function updateProfil($user_name){
    $cnx = new PDO("mysql:host=localhost;dbname=SAE203", "root", "4JaF:bt33$4mH");
    $answer = $cnx->query("replace into UserProfile set user_name='$user_name';"); 
    $res = $answer->rowCount();
    return $res;
}

function DeleteProfil($user_name){
    $cnx = new PDO("mysql:host=localhost;dbname=SAE203", "root", "4JaF:bt33$4mH");
    $answer = $cnx->query("DELETE FROM UserProfile WHERE `UserProfile`.`id_user` = '$user_name';"); 
    $res = $answer->rowCount();
    return $res;
}

function UpdateTendance($movie1, $movie2, $movie3){
    $cnx = new PDO("mysql:host=localhost;dbname=SAE203", "root", "4JaF:bt33$4mH");
    $answer = $cnx->query("UPDATE Movies SET tendance = 1 WHERE id_movies = '$movie1';
    UPDATE Movies SET tendance = 1 WHERE id_movies = '$movie2';
    UPDATE Movies SET tendance = 1 WHERE id_movies = '$movie3';");
    $res = $answer->rowCount();
    return $res;
}