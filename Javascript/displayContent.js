timelineButton = document.querySelector("#timeline");
experienceButton = document.querySelector("#experience");
skillsButton = document.querySelector("#skills");
timeline = document.querySelector("#timeline__content");
experience = document.querySelector("#experience__content");
skills = document.querySelector("#skills__content");
icon1 = document.querySelector("#icon1");
icon2 = document.querySelector("#icon2");
icon3 = document.querySelector("#icon3");


timelineButton.addEventListener('click', function(){
    timeline.classList.toggle('display');
    if (timeline.className === 'timeline__content display'){
        icon1.classList.remove('fi-rr-angle-down');
        icon1.classList.add('fi-rr-angle-up');
    } else {
        icon1.classList.add('fi-rr-angle-down')
        icon1.classList.remove('fi-rr-angle-up');
    }
})

experienceButton.addEventListener('click', function(){
    experience.classList.toggle('display');
    if (experience.className === 'experience__content display'){
        icon2.classList.remove('fi-rr-angle-down');
        icon2.classList.add('fi-rr-angle-up');
    } else {
        icon2.classList.add('fi-rr-angle-down')
        icon2.classList.remove('fi-rr-angle-up');
    }
})

skillsButton.addEventListener('click', function(){
    skills.classList.toggle('display');
    if (skills.className === 'skills__content display'){
        icon3.classList.remove('fi-rr-angle-down');
        icon3.classList.add('fi-rr-angle-up');
    } else {
        icon3.classList.add('fi-rr-angle-down')
        icon3.classList.remove('fi-rr-angle-up');
    }
})