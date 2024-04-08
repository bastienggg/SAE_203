import { loadTemplate } from '../js/utils';

let template = await loadTemplate('./option_profil/template.html');

let Option_profil_backoffice = {};

Option_profil_backoffice.format = function (obj) {
    let html = template;
    html = html.replace('{{id_user}}', obj.id_user);
    html = html.replace('{{user_name}}', obj.user_name);
    return html;
}

Option_profil_backoffice.render = async function (selector, data) {
    let html = '';
    for (let obj of data) {
        html += Option_profil_backoffice.format(obj);
    }
    let where = document.querySelector(selector);
    where.innerHTML = html;
}
export { Option_profil_backoffice }