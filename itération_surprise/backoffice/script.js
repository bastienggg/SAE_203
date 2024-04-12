let V = {};


V.updateProfil = function (data) {
  let input_profil = document.querySelector('input[name="profil"]');
  input_profil.value = data.user_name;
}


V.updateMovie = function (data) {
  let input_titre = document.querySelector('input[name="titre"]');
  let input_description = document.querySelector('input[name="description"]');
  let input_realisateur = document.querySelector('input[name="realisateur"]');
  let input_annee = document.querySelector('input[name="annee"]');
  let input_url_image = document.querySelector('input[name="url_image"]');
  let input_url_trailer = document.querySelector('input[name="url_trailer"]');
  let input_alt_image = document.querySelector('input[name="alt_image"]');
  let input_id_categorie = document.querySelector('input[name="id_categorie"]');
  input_titre.value = data.titre;
  input_description.value = data.description;
  input_realisateur.value = data.realisateur;
  input_annee.value = data.annee;
  input_url_image.value = data.url_image;
  input_url_trailer.value = data.url_trailer;
  input_alt_image.value = data.alt_image;
  input_id_categorie.value = data.id_categorie;
}

let requestProfilBackoffice = async function () {
  let response = await fetch("../server/script.php?action=getprofil");
  let data = await response.json();
  Option_profil_backoffice.render('.select-profil', data);
}

let requestMoviesName = async function () {
  let response = await fetch("../server/script.php?action=getMoviesName");
  let data = await response.json();
  OptionMovies.render('.selectMovie1', data);
  OptionMovies.render('.selectMovie2', data);
  OptionMovies.render('.selectMovie3', data);
  OptionMovies.render('.selectMovie4', data);
}