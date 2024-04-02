

let requestMovies = async function () {
  let response = await fetch("../server/script.php?action=getmovies");
  let data = await response.json();
  let d1 = document.getElementById("cards");
  let d2 = document.getElementById("player-cards");
  let d3 = document.getElementById("cards-playlist");
  d1.style.display = "flex";
  d2.style.display = "none";
  d3.style.display = "none";
  Card.render('.cards', data);
}
let requestMoviesTrailer = async function (idmovies) {
  let response = await fetch("../server/script.php?action=getmoviestrailer&id_movies=" + idmovies);
  let data = await response.json();
  let d1 = document.getElementById("cards");
  let d2 = document.getElementById("player-cards");
  let d3 = document.getElementById("cards-playlist");
  d1.style.display = "none";
  d2.style.display = "flex";
  d3.style.display = "none";
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
  // Appeler d'autres fonctions ou exécuter d'autres actions en fonction de l'option sélectionnée
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
  await fetch("../server/script.php?action=addtoplaylist&id_movies=" + idmovie + "&id_user=" + iduser);
}

let RemoveToPlaylist = async function (idmovie, iduser) {
  await fetch("../server/script.php?action=removetoplaylist&id_movies=" + idmovie + "&id_user=" + iduser);
  requestPlaylist(iduser)
}















/*  requestMenu

  . paramètre j : le nom d'un jour de la semaine 

  La fonction demande au serveur les données au format JSON sur le menu du jour j.
  Quand les données sont reçues et lues, on les affiche avec le composant Menu.

*/
let requestMenu = async function (j) {
  let semaine = document.querySelector('#semaine');
  // attente de la réponse à la requête demandant les données d'une collection de Lego
  let response = await fetch("../server/script.php?jour=" + j + "&semaine=" + semaine.value);
  // attente de l'extration des données en format json de la réponse à la requête
  let data = await response.json();
  if (data.length == 0) {
    data.push({ entree: "Soon...", plat: "Soon..", dessert: "Soon..." });
  }
  Menu.render('.menus', data);
}


/* requestMenusByWeek

  La fonction demande au serveur les données au format JSON sur les menus de la semaine.
  Quand les données sont reçues et lues, on les affiche avec le composant Menu.
*/
let requestMenusByWeek = async function () {
  let weekMode = document.querySelector('.switch input');
  if (weekMode.checked) {
    let semaine = document.querySelector('#semaine');
    let response = await fetch("../server/script.php?semaine=" + semaine.value);
    let data = await response.json();
    Menu.render('.card', data);
  }
}

/* clearMenus

  La fonction efface les menus affichés.
*/
let clearMenus = function () {
  // selection de l'élément qui contient les menus affichés
  let element = document.querySelector('.menus');
  // effacement du contenu de l'élément
  element.innerHTML = '';
}
