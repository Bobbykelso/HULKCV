timelineButton = document.querySelector("#timeline");
experienceButton = document.querySelector("#experience");
skillsButton = document.querySelector("#skills");
timeline = document.querySelector("#timeline__content");
experience = document.querySelector("#experience__content");
skills = document.querySelector("#skills__content");
icon1 = document.querySelector("#icon1");
icon2 = document.querySelector("#icon2");
icon3 = document.querySelector("#icon3");

function displayToggle(content, icon, contentText){
    content.classList.toggle('display');
    if (content.className === contentText + '__content display' || content.className === contentText + '__content hide display' ){
        icon.classList.remove('fi-rr-angle-down');
        icon.classList.add('fi-rr-angle-up');
    } else if (content.className === contentText + '__content') {
        content.classList.add('hide');
        icon.classList.add('fi-rr-angle-down');
        icon.classList.remove('fi-rr-angle-up');
    } else if (content.className === contentText + '__content hide'){
        icon.classList.add('fi-rr-angle-down');
        icon.classList.remove('fi-rr-angle-up');
    }
}

timelineButton.addEventListener('click', function(){
    displayToggle(timeline, icon1, 'timeline');
})

experienceButton.addEventListener('click', function(){
    displayToggle(experience, icon2, 'experience');
})

skillsButton.addEventListener('click', function(){
    displayToggle(skills, icon3, 'skills');
})