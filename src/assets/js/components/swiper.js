import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination,Autoplay ]);


(function() {
   
    let swiperContent = new Swiper(".slider-contents", {
        speed: 600,
        loop: false,
        slidesPerView: 1,
        
    });
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
    swiper.on('resize',function(swiper) {
        var height = 0;
        
        if(document.body.clientWidth > 767) {
            
            $('.hero-slider img.d-none').each(function(item){
                var h = $(this).height();
                if(h > height) {
                    height = h;
                }
            })
        } else {
            $('.hero-slider img.d-block').each(function(item){
                var h = $(this).height();
                if(h > height) {
                    height = h;
                }
            })
        }
        
        $('.hero-slider').css('height',height )
    })
    let row_swiper = new Swiper(".row-swiper", {
        speed: 600,
        loop: true,
        slidesPerView: 2.5,
        // centeredSlides: true,   
        spaceBetween: 0,
       
        breakpoints: {
            "768": {
             centeredSlides: false,   
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "992": {
              slidesPerView: 3,
            },
          },
    });

    let  swiper_img = new Swiper(".swiper-img", {
        speed: 600,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1.5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
        "767": {
            slidesPerView: 2,
        },
        "992": {
            slidesPerView: 3,
        },
        },
       
    });

    let  swiper_img_2 = new Swiper(".swiper-img-2", {
        speed: 600,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1.5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
       
    });
   
   
    let swiperBox = new Swiper(".swiper-box", {
        speed: 600,
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 30,
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
        spaceBetween: 30,
        slidesPerView: 1.5,
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
    
    
})();
