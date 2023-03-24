const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    links.classList.toggle("mobile");
    hamburger.classList.toggle("hamclick");
})


// Team Member Slider
const teams = document.querySelector('.teams');
// const leftArr = document.querySelector('.left-arr');
// const rightArr = document.querySelector('.right-arr');

// leftArr.addEventListener('click', () => {
//     teams.scrollBy(-100, 0);
// })

// rightArr.addEventListener('click', () => {
//     teams.scrollBy(100, 0);
// })

// function slider() {
//     const childElementCount = teams.children.length;
//     teams.scrollBy(100, 0);
//     setTimeout(slider, 1000);
// }
// slider();
jQuery(document).ready(function($) {
    $('.teams').slick({
      speed: 4000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false
    });
  });