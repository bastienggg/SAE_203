import { loadTemplate } from '../../js/utils.js';

let template = await loadTemplate('./component/player_cardMoin/template.html');

let Player_cardMoin = {};

Player_cardMoin.format = function (obj) {
    let html = template;
    html = html.replace('{{titre}}', obj.titre);
    html = html.replace('{{url_trailer}}', obj.url_trailer);
    html = html.replace('{{description}}', obj.description_movie);
    html = html.replace('{{id_movies}}', obj.id_movies);
    return html;
}
Player_cardMoin.render = async function (selector, data) {
    let html = '';
    for (let obj of data) {
        html += Player_cardMoin.format(obj);
    }
    let where = document.querySelector(selector);
    where.innerHTML = html;
}

export { Player_cardMoin }