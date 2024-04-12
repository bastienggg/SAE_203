
import { loadTemplate } from '../../js/utils.js';

let template = await loadTemplate('./component/card/template.html');

let Card = {};

Card.format = function (obj) {
    let html = template;
    html = html.replace('{{url_image}}', obj.url_image);
    html = html.replace('{{alt_image}}', obj.alt_image);
    html = html.replace('{{id_movies}}', obj.id_movies);
    return html;
}

Card.render = async function (selector, data) {
    let html = '';
    for (let obj of data) {
        html += Card.format(obj);
    }
    let where = document.querySelector(selector);
    where.innerHTML = html;
}

export { Card }
