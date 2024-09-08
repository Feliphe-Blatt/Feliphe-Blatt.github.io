// iniciar splide sliders de index.html
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 1000,
        pauseOnHover: true,
        arrows: false,
        pagination: true,
    }).mount();
});