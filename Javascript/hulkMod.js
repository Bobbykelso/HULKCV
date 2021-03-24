const body = Q('body');
const hulkButton = Q('#activate-hulk-mod');

hulkButton.addEventListener('click', function() {
    body.classList.toggle('hulk-mod');
    if(body.className){
        hulkButton.innerHTML = "AU SECOURS";
        experience.innerHTML = "L'un des membres fondateurs du groupe de super-héros les Vengeurs.<br>Plus tard, rejoint l'équipe des Défenseurs.";
        skills.innerHTML = "Sauts de 1000 mètres en hauteur, et d'une distance maximum de 6 kilomètres en longueur.<br>Ne crains ni les chaleurs extrêmes ni le froid, immunisé contre toutes les maladies terrestres.<br>Peut survivre dans le vide et le froid de l'espace.<br>Mes tissus se régénèrent à très grande vitesse.<br>Je suis inépuisable.<br>Soulever des montagnes, provoquer des tremblements de terre en frappant sur le sol ou provoquer des ondes de choc très puissantes en claquant des mains."
    } else {
        hulkButton.innerHTML = "En savoir plus";
    }
});