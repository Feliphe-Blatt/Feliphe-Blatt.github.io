document.addEventListener( 'DOMContentLoaded', function () {

  new Splide('#splide-slider-sobre', {
    type: 'loop',
    arrows: true,
    gap: '1rem',
    keyboard: 'global',
    wheel: false,
    pagination: true,
    perPage: 1,
  }).mount();

} );