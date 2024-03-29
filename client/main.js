let requestMovies = async function () {
  let response = await fetch("../server/script.php?action=getmovies");
  let data = await response.json();
  let d1 = document.getElementById("cards");
  let d2 = document.getElementById("player-cards");
  d1.style.display = "flex";
  d2.style.display = "none";
  Card.render('.cards', data);
}
let requestMoviesTrailer = async function (idmovies) {
  let response = await fetch("../server/script.php?action=getmoviestrailer&id_movies=" + idmovies);
  let data = await response.json();
  let d1 = document.getElementById("cards");
  let d2 = document.getElementById("player-cards");
  d1.style.display = "none";
  d2.style.display = "flex";
  Player_card.render('.player-cards', data);
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
