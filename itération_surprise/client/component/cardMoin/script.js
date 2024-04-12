import { loadTemplate } from '../../js/utils.js';

let template = await loadTemplate('./component/cardMoin/template.html');

let CardMoin = {};

CardMoin.format = function (obj) {
    let html = template;
    html = html.replace('{{url_image}}', obj.url_image);
    html = html.replace('{{alt_image}}', obj.alt_image);
    html = html.replace('{{id_movies}}', obj.id_movies);
    return html;
}
CardMoin.render = async function (selector, data) {
    let html = '';
    for (let obj of data) {
        html += CardMoin.format(obj);
    }
    let where = document.querySelector(selector);
    where.innerHTML = html;
}

export { CardMoin }