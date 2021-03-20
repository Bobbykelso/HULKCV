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
    if (timeline.className === 'timeline__content display' || timeline.className === 'timeline__content hide display' ){
        icon1.classList.remove('fi-rr-angle-down');
        icon1.classList.add('fi-rr-angle-up');
    } else if (timeline.className === 'timeline__content') {
        timeline.classList.add('hide');
        icon1.classList.add('fi-rr-angle-down');
        icon1.classList.remove('fi-rr-angle-up');
    } else if (timeline.className === 'timeline__content hide'){
        icon1.classList.add('fi-rr-angle-down');
        icon1.classList.remove('fi-rr-angle-up');
    }
})

experienceButton.addEventListener('click', function(){
    experience.classList.toggle('display');
    if (experience.className === 'experience__content display' || experience.className === 'experience__content hide display' ){
        icon2.classList.remove('fi-rr-angle-down');
        icon2.classList.add('fi-rr-angle-up');
    } else if (experience.className === 'experience__content') {
        experience.classList.add('hide');
        icon2.classList.add('fi-rr-angle-down');
        icon2.classList.remove('fi-rr-angle-up');
    } else if (experience.className === 'experience__content hide'){
        icon2.classList.add('fi-rr-angle-down')
        icon2.classList.remove('fi-rr-angle-up');
    }
})

skillsButton.addEventListener('click', function(){
    skills.classList.toggle('display');
    if (skills.className === 'skills__content display' || skills.className === 'skills__content hide display' ){
        icon3.classList.remove('fi-rr-angle-down');
        icon3.classList.add('fi-rr-angle-up');
    } else if (skills.className === 'skills__content') {
        skills.classList.add('hide');
        icon3.classList.add('fi-rr-angle-down');
        icon3.classList.remove('fi-rr-angle-up');
    } else if(skills.className === 'skills__content hide'){
        icon3.classList.add('fi-rr-angle-down')
        icon3.classList.remove('fi-rr-angle-up');
    }
})