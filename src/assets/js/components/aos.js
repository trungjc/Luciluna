import AOS from 'aos';

(function() {
    const options = {
        duration: 1000,
        easing: 'ease-out-quad',
        once: false,
        startEvent: 'DOMContentLoaded',
        disable: 'mobile'
    };

    AOS.init(options);
})();
