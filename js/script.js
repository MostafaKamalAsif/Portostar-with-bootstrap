 jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 15,
                time: 1500
            });
        });

        $('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows:false
});