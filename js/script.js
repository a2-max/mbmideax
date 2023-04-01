$(document).ready(function(){
    setTimeout(function() {
        $('.site-preloader').fadeOut();
    }, 1900);
});

// hiding options of team filter
const options = document.querySelector('.buttons');
const filterIcon = document.querySelector('.fa-filter');

filterIcon.addEventListener('click', () => {
    options.classList.toggle("buttons-hide");
})