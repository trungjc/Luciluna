'use strict';
const isMobileScreen = function isMobileScreen() {
    return document.body.clientWidth < 992;
};
const isDesktopScreen = function isMobileScreen() {
    return document.body.clientWidth > 1024;
};
const isTableScreen = function isMobileScreen() {
    return (document.body.clientWidth > 767 && document.body.clientWidth < 1025);
};




const app = {
    init: function init() {
        this.mainMenu();
        this.toTop();
        this.scrollTo();
    },
    hero: function() {
      
    },
    mainMenu: function () {
        $('.navbar-toggler').on('click', function () {

            $('html').toggleClass('open-menu');
        });
        $('.navbar-close, .navbar-nav').on('click', function () {
            $('html').removeClass('open-menu');
            $('.main-navbar').removeClass('show')
        });
    },
    toTop: function(){
        $('.move-to').click(function(e){
            var  element = $(this).attr('href');
            var header = $('.app-header').innerHeight();
            if($(element).length) {
                $('html, body').animate({ scrollTop: $(element).offset().top - header }, 'fast');
            }
            
        })
    },
    scrollTo: function(){
        if(isMobileScreen){
            (function($, window) {
                var adjustAnchor = function() {

                    var $anchor = $(':target'),
                        fixedElementHeight = 52;

                    if ($anchor.length > 0) {

                        $('html, body')
                            .stop()
                            .animate({
                                scrollTop: $anchor.offset().top - fixedElementHeight
                            }, 200);

                    }

                };

                $(window).on('hashchange load', function() {
                    adjustAnchor();
                });

            })(jQuery, window);
        }
    }
};

$(document).ready(function () {
    // YouTube Player API adapter
    let resizeId;
    app.init();
    $(window).resize(function () {
        clearTimeout(resizeId);
        resizeId = setTimeout(function () {
        });
    });

});




