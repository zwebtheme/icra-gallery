(function ($) {
    "use strict";
    
    
    
   
    
    /* ---------------------------------------------------- */
    /*	 HoverItem (Image item, courses item etc)										*/
    /* ---------------------------------------------------- */
    if ($('#gallery-items').length) {
        $('#gallery-items').mixitup();
    }
    
    /* ---------------------------------------------------- */
    /*	Fancybox											*/
    /* ---------------------------------------------------- */
    (function () {
        if ($('.single-image').length) {
            var $images = $('.single-image');
            $images.each(function () {
                $(this).append('<span class="curtain"></span>');
            });
            // Single Image
            $images.filter('.plus-icon').fancybox({
                'titleShow': true
                , 'padding': '10'
                , 'transitionIn': 'fade'
                , 'transitionOut': 'fade'
                , 'easingIn': 'easeOutBack'
                , 'easingOut': 'easeInBack'
                , helpers: {
                    title: {
                        type: 'over'
                    }
                }
            });
        }
    }());
    
    
})(window.jQuery);

