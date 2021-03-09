$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()> 80 ){
            $('.navbar').addClass('solid bg-dark');
        } else {
            $('.navbar').removeClass('solid bg-dark');
        }
    
    });

    $('.dropdown-item, .nav-link'). on('click', function (e) {
        if (this.hash !== ""){
            e.preventDefault();
            const anchor = this.hash; 

            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            },150, function (){
                window.location.harh = anchor ;
            });
        }
    });

    $('.carousel').carousel({
        interval: false,
      });


});