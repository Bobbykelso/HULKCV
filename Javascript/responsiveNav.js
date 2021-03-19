headerIcon = document.querySelector('#nav__icon');

body = document.querySelector('body');

siteCache = document.querySelector('#site-cache');

headerIcon.addEventListener('click', function(e)
{
    e.preventDefault();
    body.classList.toggle('with--sidebar');
})

siteCache.addEventListener('click', function()
{
    body.classList.remove('with--sidebar');
})
