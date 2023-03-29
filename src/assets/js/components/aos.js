import AOS from 'aos';

(function() {
    // const options = {
    //     duration: 1000,
    //     easing: 'ease-out-quad',
    //     startEvent: 'load',
    //     once: false,
       
    //     // startEvent: 'DOMContentLoaded',
    //     disable: 'mobile'
    // };
    // setTimeout(function() {
    //     AOS.init(options);
    // }, 100);
    $(window).on("load", function() {
        AOS.init();
      });
  
})();
