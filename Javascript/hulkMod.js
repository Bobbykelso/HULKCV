hulkButton = document.querySelector('#activate-hulk-mod');
body = document.querySelector('body');
hulkForm = document.querySelector('#hulkForm');
textHuman = document.querySelectorAll('.textHuman');
textHulk = document.querySelectorAll('.textHulk');
bannerPicture = document.querySelector('.bannerPicture');
hulkPicture = document.querySelector('.hulkPicture');
descriptionBanner = document.querySelector('.descriptionBanner');
descriptionHulk = document.querySelector('.descriptionHulk');


hulkButton.addEventListener('click', function (e) {
    e.preventDefault();
    body.classList.toggle('hulk-mod');
    if (body.className) {
        hulkButton.textContent = "AU SECOURS";
        hulkForm.style.display = "flex";
        for(i=0; i<textHuman.length; i++) {
            textHuman[i].style.display = "none";
            textHulk[i].style.display = "block";
        };
        hulkPicture.style.opacity = "1";
        bannerPicture.style.opacity ="0";
        descriptionBanner.style.display = "none";
        descriptionHulk.style.display = "block";
    } else {
        hulkButton.textContent = "En savoir plus";
        hulkForm.style.display = "none";
        for(i=0; i<textHulk.length; i++) {
            textHuman[i].style.display = "block";
            textHulk[i].style.display = "none";
        };
        hulkPicture.style.opacity = "0";
        bannerPicture.style.opacity ="1";
        descriptionBanner.style.display = "block";
        descriptionHulk.style.display = "none";

    }

});