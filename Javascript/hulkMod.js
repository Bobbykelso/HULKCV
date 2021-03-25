hulkButton = document.querySelector('#activate-hulk-mod');
body = document.querySelector('body');
hulkForm = document.querySelector('#hulkForm');
textHuman = document.querySelectorAll('.textHuman');
textHulk = document.querySelectorAll('.textHulk');
bannerPicture = document.querySelector('.bannerPicture');
hulkPicture = document.querySelector('.hulkPicture');
descriptionBanner = document.querySelector('.descriptionBanner');
descriptionHulk = document.querySelector('.descriptionHulk');
shake = document.querySelector('#shake');
carouselBanner = document.querySelector('.image');
carouselHulk = document.querySelector('.imageHulk');


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
        hulkPicture.classList.add('shake');
        bannerPicture.style.transition = "opacity 5s";
        hulkPicture.style.transition = "opacity 5s";
        descriptionBanner.style.display = "none";
        descriptionHulk.style.display = "block";
        shake.classList.add('shake');
        carouselBanner.style.opacity = "0";
        carouselHulk.style.opacity = "1";
        
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
        carouselBanner.style.opacity = "1";
        carouselHulk.style.opacity = "0";

    }

});