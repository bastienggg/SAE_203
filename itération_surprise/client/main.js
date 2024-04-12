let requestMovies = async function () {
    let response = await fetch("../server/script.php?action=getmovies");
    let data = await response.json();
    let d1 = document.getElementById("carrousel");
    let d2 = document.getElementById("section1");
    let d3 = document.getElementById("section2");
    let d4 = document.getElementById("player-cards");
    let d5 = document.getElementById("favori");
    let favoris_nav = document.getElementById("favori-nav");
    let accueil_nav = document.getElementById("acceuil-nav");
    accueil_nav.classList.add("main-nav__link--active");
    favoris_nav.classList.remove("main-nav__link--active");
    let elements = document.querySelectorAll('[id="categorie"]');
    elements.forEach(function (element) {
        element.style.display = 'block';
    });
    d1.style.display = "block";
    d2.style.display = "block";
    d3.style.display = "block";
    d4.style.display = "none";
    d5.style.display = "none";
    Card.render('.nos-film__cards', data);
}

let requestMoviesTrailer = async function (idmovies) {
    let response = await fetch("../server/script.php?action=getmoviestrailer&id_movies=" + idmovies);
    let data = await response.json();
    let d1 = document.getElementById("carrousel");
    let d2 = document.getElementById("section1");
    let d3 = document.getElementById("section2");
    let d4 = document.getElementById("player-cards");
    let d5 = document.getElementById("favori");
    let elements = document.querySelectorAll('[id="categorie"]');
    elements.forEach(function (element) {
        element.style.display = 'none';
    });
    d1.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "flex";
    d5.style.display = "none";
    Player_card.render('.player-cards', data);
}

let requestMoviesTrailerMoin = async function (idmovies) {
    let response = await fetch("../server/script.php?action=getmoviestrailer&id_movies=" + idmovies);
    let data = await response.json();
    let d1 = document.getElementById("carrousel");
    let d2 = document.getElementById("section1");
    let d3 = document.getElementById("section2");
    let d4 = document.getElementById("player-cards");
    let d5 = document.getElementById("favori");
    let elements = document.querySelectorAll('[id="categorie"]');
    elements.forEach(function (element) {
        element.style.display = 'none';
    });
    d1.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "flex";
    d5.style.display = "none";
    Player_cardMoin.render('.player-cards', data);
}

let requestMoviesByCategorie = async function (idcategorie, classindex) {
    let response = await fetch("../server/script.php?action=getmoviescategorie&id_categorie=" + idcategorie);
    let data = await response.json();
    Card.render(classindex, data);
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
    let d1 = document.getElementById("section1");
    let d2 = document.getElementById("section2");
    d1.style.display = "none";
    d2.style.display = "none";
    let d5 = document.getElementById("favori");
    let favoris_nav = document.getElementById("favori-nav");
    let accueil_nav = document.getElementById("acceuil-nav");
    accueil_nav.classList.remove("main-nav__link--active");
    favoris_nav.classList.add("main-nav__link--active");
    d5.style.display = "block";
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
    let d1 = document.getElementById("carrousel");
    let d2 = document.getElementById("section1");
    let d3 = document.getElementById("section2");
    let d4 = document.getElementById("player-cards");
    let d5 = document.getElementById("favori");
    let favoris_nav = document.getElementById("favori-nav");
    let accueil_nav = document.getElementById("acceuil-nav");
    accueil_nav.classList.add("main-nav__link--active");
    favoris_nav.classList.remove("main-nav__link--active");
    let elements = document.querySelectorAll('[id="categorie"]');
    elements.forEach(function (element) {
        element.style.display = 'block';
    });
    d1.style.display = "block";
    d2.style.display = "block";
    d3.style.display = "block";
    d4.style.display = "none";
    d5.style.display = "none";
}

let RemoveToPlaylist = async function (idmovie, iduser) {
    await fetch("../server/script.php?action=removetoplaylist&id_movies=" + idmovie + "&id_user=" + iduser);
    let d1 = document.getElementById("carrousel");
    let d2 = document.getElementById("section1");
    let d3 = document.getElementById("section2");
    let d4 = document.getElementById("player-cards");
    let d5 = document.getElementById("favori");
    let favoris_nav = document.getElementById("favori-nav");
    let accueil_nav = document.getElementById("acceuil-nav");
    accueil_nav.classList.add("main-nav__link--active");
    favoris_nav.classList.remove("main-nav__link--active");
    let elements = document.querySelectorAll('[id="categorie"]');
    elements.forEach(function (element) {
        element.style.display = 'block';
    });
    d1.style.display = "block";
    d2.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "none";
    d5.style.display = "block";
}

