hulkButton = document.querySelector('#activate-hulk-mod');
body = document.querySelector('body');
hulkForm= document.querySelector('#hulkForm');

hulkButton.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.toggle('hulk-mod');
    if(body.className){
        hulkButton.textContent = "AU SECOURS";
        hulkForm.style.display="flex";
    } else {
        hulkButton.textContent = "En savoir plus";
        hulkForm.style.display="none";
    }
    //hulkForm.classList.toggle('display');
    
});