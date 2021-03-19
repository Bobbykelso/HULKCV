article = document.querySelector("#article");
timelineButton = document.querySelector("#timeline");
experienceButton = document.querySelector("#experience");
skillsButton = document.querySelector("#skills");
timeline = document.querySelector("#timeline__content");
experience = document.querySelector("#experience__content");
skills = document.querySelector("#skills__content");


timelineButton.addEventListener('click', function(){
    timeline.classList.toggle('display');
    article.classList.toggle('article__timeline');
})

experienceButton.addEventListener('click', function(){
    experience.classList.toggle('display');
})

skillsButton.addEventListener('click', function(){
    skills.classList.toggle('display');
})