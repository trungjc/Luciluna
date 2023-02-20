import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination,Autoplay ]);


(function() {
    let swiper = new Swiper(".hero-slider", {
        direction: 'vertical',
        speed: 600,
        loop: true,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    let swiperBox = new Swiper(".swiper-box", {
        speed: 600,
        loop: false,
        slidesPerView: 1,
       
        autoplay: {
            delay: 2500,
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            "767": {
              slidesPerView: 2,
            },
            "992": {
              slidesPerView: 4,
            },
          },
    });
    let swiperPerson = new Swiper(".persons-swiper", {
        speed: 600,
        loop: true,
        spaceBetween: 20,
        slidesPerView: 2,
        autoplay: {
            delay: 2500,
        },
       
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            "767": {
              slidesPerView: 2,
            },
            "992": {
              slidesPerView: 4,
            },
          },
    });
    
    let swiperContent = new Swiper(".slider-content", {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})();
