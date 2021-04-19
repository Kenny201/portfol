$(function() {

    $('.prices__item-xs-more').click(function(){
        $('.prices__item:not(:nth-child(1))').css('display', 'block');
        $(this).css("display", "none");
    })
    $('.header__menu-toggle ').click(function(){
        $('body').toggleClass('overflow-hidden');
    });
    /*--------SLIDER--------------*/
    const glide = new Glide('.gazel', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
    }).mount();
    
    const glide2 = new Glide('.cabluk', {
            type: 'carousel',
            perView: 1,
            focusAt: 'center',
        }).mount();
    const glide3 = new Glide('.truck', {
            type: 'carousel',
            perView: 1,
            focusAt: 'center',
        }).mount();

 

    // $('.nav-link.active').map(function(){
    //     new Glide('.tab-pane.active > .glide', {
    //         type: 'carousel',
    //         perView: 1,
    //         focusAt: 'center',
    //     }).mount();
    // })
  
    // if ($('.tab-pane').hasClass('active')){}
    // new Glide('.tab-pane.active > .glide', {
    //     type: 'carousel',
    //     perView: 1,
    //     focusAt: 'center',
    // }).mount();
    //  $('.nav-link').click(function() {
    //     new Glide('.tab-pane.active > .glide', {
    //         type: 'carousel',
    //         perView: 1,
    //         focusAt: 'center',
    //     }).mount();
        

    //  });
});

