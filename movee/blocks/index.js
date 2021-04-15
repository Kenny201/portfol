$(function() {
    /*-------------------MOBILEMENU----------------*/
    $(window).scroll(function(){
            if($(this).scrollTop()>40){
                $('.header').addClass('fixed');
            }
            else if ($(this).scrollTop()<140){
                $('.header').removeClass('fixed');
            }
        });
    /*-------------------SLIDERS----------------*/
});
