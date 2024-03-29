
/*  autoCompleteMenu


  La fonction demande au serveur les données au format JSON sur le menu du jour j.
  Quand les données sont reçues et lues, on les affiche avec la fonction V.updateForm.

*/
let autoCompleteMenu = async function () {
  // on récupère les valeurs des champs d'identifiant semaine et jour
  let semaine = document.querySelector('#semaine');
  let jour = document.querySelector('#jour');

  // attente de la réponse à la requête demandant les données d'une collection de Lego
  let response = await fetch("../server/script.php?jour=" + jour.value + "&semaine=" + semaine.value);
  // attente de l'extraction des données en format json de la réponse à la requête
  let data = await response.json();

  if (data.length > 0) {
    V.updateForm(data[0]);
  }
  else {
    V.updateForm({ entree: "Soon...", plat: "Soon..", dessert: "Soon..." });
  }

}


/* V : la vue de l'application
  Objet dans lequel on placera les fonctions permettant de mettre à jour l'interface utilisateur
*/
let V = {};


/*  V.updateForm

    paramètre menu : un objet contenant les informations sur un menu (entrée plat dessert)

    La fonction pré-remplit le premier formulaire du backoffice avec les données de menu
*/
V.updateForm = function (menu) {
  // on récupère les champs du formulaire
  let input_entree = document.querySelector('input[name="entree"]');
  let input_plat = document.querySelector('input[name="plat"]');
  let input_dessert = document.querySelector('input[name="dessert"]');
  // on met à jour les champs du formulaire
  input_entree.value = menu.entree;
  input_plat.value = menu.plat;
  input_dessert.value = menu.dessert;
}


V.updateMovie = function (menu) {
  // on récupère les champs du formulaire
  let input_titre = document.querySelector('input[name="titre"]');
  let input_realisateur = document.querySelector('input[name="realisateur"]');
  let input_annee = document.querySelector('input[name="annee"]');
  let input_url_image = document.querySelector('input[name="url_image"]');
  let input_url_trailer = document.querySelector('input[name="url_trailer"]');
  let input_alt_image = document.querySelector('input[name="alt_image"]');
  let input_id_categorie = document.querySelector('input[name="id_categorie"]');
  // on met à jour les champs du formulaire
  input_titre.value = menu.titre;
  input_realisateur.value = menu.realisateur;
  input_annee.value = menu.annee;
  input_url_image.value = menu.url_image;
  input_url_trailer.value = menu.url_trailer;
  input_alt_image.value = menu.alt_image;
  input_id_categorie.value = menu.id_categorie;
}
