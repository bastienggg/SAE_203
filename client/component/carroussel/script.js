import { loadTemplate } from '../../js/utils.js';

let template = await loadTemplate('./component/carroussel/template.html');

let Carroussel = {};

Carroussel.format = function () {
    let html = template;
    // html = html.replace('{{id_user}}', obj.id_user);
    // html = html.replace('{{user_name}}', obj.user_name);
    return html;
}

Carroussel.render = async function (selector,) {
    let html = '';

    html += Carroussel.format();

    let where = document.querySelector(selector);
    where.innerHTML = html;
}
export { Carroussel }