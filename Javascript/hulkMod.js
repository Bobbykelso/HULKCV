hulkButton = document.querySelector('#activate-hulk-mod');
body = document.querySelector('body');

hulkButton.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.toggle('hulk-mod');
    if(body.className){
        hulkButton.textContent = "AU SECOURS";
    } else {
        hulkButton.textContent = "En savoir plus";
    }
});