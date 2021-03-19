article__timeline = document.querySelector("#article__timeline");
article__experience = document.querySelector("#article__experience");
article__skills = document.querySelector("#article__skills");
timelineButton = document.querySelector("#timeline");
experienceButton = document.querySelector("#experience");
skillsButton = document.querySelector("#skills");
timeline = document.querySelector("#timeline__content");
experience = document.querySelector("#experience__content");
skills = document.querySelector("#skills__content");


timelineButton.addEventListener('click', function(){
    timeline.classList.toggle('display');
    article__timeline.classList.toggle('article__timeline');
})

experienceButton.addEventListener('click', function(){
    experience.classList.toggle('display');
    article__experience.classList.toggle('article__experience');
})

skillsButton.addEventListener('click', function(){
    skills.classList.toggle('display');
    article__skills.classList.toggle('article__skills');
})