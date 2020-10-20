$(function(){

    /*========Navbar BG Effect on Scroll========*/
    $(window).scroll(function(){
        if($(this).scrollTop() > 650){
            $(".navbar").addClass("nav-bg");
        }
        else{
            $(".navbar").removeClass("nav-bg");
        }
    });

    /*========Moved to Top on Scroll========*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
        $('.to_top').fadeIn('slow');
        } else {
        $('.to_top').fadeOut('slow');
        }
        });
    
        $('.to_top').click(function() {
            $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
      });

      /*========My Work Section Slider========*/
      $(".all_images").owlCarousel({
        items:1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,	
    });

    /*========Work Section Slider========*/
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })

    /*========Animation On Scroll========*/
    AOS.init({
        duration: 3000,
        once: true
    });
    });    