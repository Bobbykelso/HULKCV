function Q(i){
    return typeof i == "object" ? i : document.querySelector(i);
}

const timelineButton = Q("#timeline");
const experienceButton = Q("#experience");
const skillsButton = Q("#skills");
const timeline = Q("#timeline__content");
const experience = Q("#experience__content");
const skills = Q("#skills__content");
const icon1 = Q("#icon1");
const icon2 = Q("#icon2");
const icon3 = Q("#icon3");

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