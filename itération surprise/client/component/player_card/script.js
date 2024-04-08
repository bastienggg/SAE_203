import { loadTemplate } from '../../js/utils.js';

let template = await loadTemplate('./component/player_card/template.html');

let Player_card = {};

Player_card.format = function (obj) {
    let html = template;
    html = html.replace('{{titre}}', obj.titre);
    html = html.replace('{{url_image}}', obj.url_image);
    html = html.replace('{{alt_image}}', obj.alt_image);
    html = html.replace('{{url_trailer}}', obj.url_trailer);
    html = html.replace('{{realisateur}}', obj.realisateur);
    html = html.replace('{{annee}}', obj.annee);
    html = html.replace('{{id_movies}}', obj.id_movies);
    return html;
}
Player_card.render = async function (selector, data) {
    let html = '';
    for (let obj of data) {
        html += Player_card.format(obj);
    }
    let where = document.querySelector(selector);
    where.innerHTML = html;
}

export { Player_card }