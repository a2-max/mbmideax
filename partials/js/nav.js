const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    links.classList.toggle("mobile");
    hamburger.classList.toggle("hamclick");
})

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