import { loadTemplate } from '../../js/utils.js';

let template = await loadTemplate('./component/option_profil/template.html');

let Option_profil = {};

Option_profil.format = function (obj) {
    let html = template;
    html = html.replace('{{id_user}}', obj.id_user);
    html = html.replace('{{user_name}}', obj.user_name);
    return html;
}

Option_profil.render = async function (selector, data) {
    let html = '';
    for (let obj of data) {
        html += Option_profil.format(obj);
    }
    let where = document.querySelector(selector);
    where.innerHTML = html;
}
export { Option_profil }