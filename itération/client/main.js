let requestMovies = async function () {
  let response = await fetch("../server/script.php?action=getmovies");
  let data = await response.json();
  let d1 = document.getElementById("cards");
  let d2 = document.getElementById("player-cards");
  let d3 = document.getElementById("cards-playlist");
  // let d4 = document.getElementById("carroussel");
  d1.style.display = "flex";
  d2.style.display = "none";
  d3.style.display = "none";
  // d4.style.display = "flex";
  Card.render('.cards', data);
}
let requestMoviesTrailer = async function (idmovies) {
  let response = await fetch("../server/script.php?action=getmoviestrailer&id_movies=" + idmovies);
  let data = await response.json();
  let d1 = document.getElementById("cards");
  let d2 = document.getElementById("player-cards");
  let d3 = document.getElementById("cards-playlist");
  // let d4 = document.getElementById("carroussel");
  d1.style.display = "none";
  d2.style.display = "flex";
  d3.style.display = "none";
  // d4.style.display = "none";
  Player_card.render('.player-cards', data);
}

let requestMoviesByCategorie = async function (idcategorie) {
  let response = await fetch("../server/script.php?action=getmoviescategorie&id_categorie=" + idcategorie);
  let data = await response.json();
  Card.render('.cards', data);
}


function selectCategorie() {
  var selectElement = document.getElementById("mySelect");
  var selectedValue = selectElement.value;
  if (selectedValue == 'all') {
    requestMovies();
  }
  else {
    requestMoviesByCategorie(selectedValue);
  }
}

let requestPlaylist = async function (iduser) {
  let response = await fetch("../server/script.php?action=getplaylist&id_user=" + iduser);
  let data = await response.json();
  let d1 = document.getElementById("cards");
  let d2 = document.getElementById("player-cards");
  let d3 = document.getElementById("cards-playlist");
  d1.style.display = "none";
  d2.style.display = "none";
  d3.style.display = "flex";
  CardMoin.render('.cards-playlist', data);
}

function recupererValeurProfil() {
  var selectElement = document.getElementById("select-profil");
  var selectedValue = selectElement.value;
  profil = selectedValue;
  console.log("La valeur sélectionnée est :", profil);
}

let requestProfil = async function () {
  let selectElement = document.getElementById("select-profil");
  profil = selectElement.value;
  let response = await fetch("../server/script.php?action=getprofil");
  let data = await response.json();
  Option_profil.render('.select-profil', data);
}

let AddToPlaylist = async function (idmovie, iduser) {
  let svg = document.getElementById(idmovie);
  console.log(svg);
  svg.style.fill = "#121629";
  await fetch("../server/script.php?action=addtoplaylist&id_movies=" + idmovie + "&id_user=" + iduser);
}

let RemoveToPlaylist = async function (idmovie, iduser) {
  await fetch("../server/script.php?action=removetoplaylist&id_movies=" + idmovie + "&id_user=" + iduser);
  requestPlaylist(iduser)
}

let getSearchbar = async function () {

  let searchbar = document.querySelector("#searchbar").value;
  let response = await fetch("../server/script.php?action=getSearchbar&searchbar=" + searchbar);
  let data = await response.json();
  console.log(data);
  Card.render(".search", data);
};
