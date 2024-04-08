
/* on importe la fonction loadTemplate depuis le module /js/utils.js */
import { loadTemplate } from '../../js/utils.js';

/* on charge le template du composant Menu */
let template = await loadTemplate('./component/cardMoin/template.html');

/* on crée un objet Menu vide qui va symboliser notre composant */
let CardMoin = {};

/*  Menu.format
    @param obj: object, un objet JS contenant les données à injecter dans le template
    @return string, le template HTML formaté avec les données de l'objet
*/
CardMoin.format = function (obj) {
    let html = template;
    html = html.replace('{{titre}}', obj.titre);
    html = html.replace('{{url_image}}', obj.url_image);
    html = html.replace('{{alt_image}}', obj.alt_image);
    html = html.replace('{{url_trailer}}', obj.url_trailer);
    html = html.replace('{{realisateur}}', obj.realisateur);
    html = html.replace('{{annee}}', obj.annee);
    html = html.replace('{{id_movies}}', obj.id_movies);
    html = html.replace('{{id_movies}}', obj.id_movies);
    return html;
}
/*  Menu.render
    @param selector: string, un sélecteur CSS pour cibler l'élément de la page où placer le composant une fois formaté
    @param data: array, un tableau d'un ou plusieurs objets javascript, chacun décrivant les données d'un menu.
    Le format attendu pour chaque objet est : {entree: string, plat: string, dessert: string}

    Note : pour async et await, voir les explications dans le fichier js/utils.js
*/
CardMoin.render = async function (selector, data) {
    // on formate un composant Menu pour chaque objet du tableau
    let html = '';
    for (let obj of data) {
        html += CardMoin.format(obj); // on concatène (mettre bout à bout) les HTML des composants formatés  
    }
    // on injecte le HTML dans le DOM
    let where = document.querySelector(selector); // on cible l'élément où injecter le HTML
    where.innerHTML = html;
}

// on exporte le composant Menu pour pouvoir l'utiliser ailleurs dans un autre modules JS
export { CardMoin }

// Note : seul Menu est exporté (et donc Menu.render et Menu.format)
// La variable template n'est pas exportée, elle n'est donc pas accessible depuis l'extérieur (et c'est tant mieux)