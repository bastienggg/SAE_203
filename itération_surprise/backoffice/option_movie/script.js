import { loadTemplate } from '../js/utils.js';

let template = await loadTemplate('./option_movie/template.html');

let OptionMovies = {};

OptionMovies.format = function (obj) {
    let html = template;
    html = html.replace('{{id_movies}}', obj.id_movies);
    html = html.replace('{{titre}}', obj.titre);
    return html;
}

OptionMovies.render = async function (selector, data) {
    let html = '';
    for (let obj of data) {
        html += OptionMovies.format(obj);
    }
    let where = document.querySelector(selector);
    where.innerHTML = html;
}
export { OptionMovies }