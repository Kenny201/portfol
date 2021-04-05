if( window.innerWidth <= 575 || window.Width <= 575){
    $('.catalog__content-wrap .active').slick({
        arrows: false,
        autoplay: true,
    });
    $(' .advantage__item-inner').slick({
        arrows: false,
        autoplay: true,
    });
    $('.catalog .nav-tabs .nav-link').click(function(){
        $(".catalog__content-wrap .active").not('.slick-initialized').slick();
    });
} 
$('.slides').slick({
    arrows: true,
    autoplay: false,
});

/*-----map-----*/
var myMap;
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map_canvas', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.7635305, 37.563800], // Москва
        zoom: 18,
        controls: [],
    }, {
        searchControlProvider: 'yandex#search'
    }),
    myMap.behaviors.disable( [ 'scrollZoom', 'drag', 'rightMouseButtonMagnifier' ] ),
    myPlacemark = new ymaps.Placemark([55.763275, 37.564967], {});
    myMap.geoObjects.add(myPlacemark);
    myMap.balloon.open([55.763275, 37.564967], "Красная Пресня ул., 44 строение 3", {
        // Опция: не показываем кнопку закрытия.
        closeButton: false
    });
}
/*--------FORM--------*/
$('[data-modal=consultation]').on('click', function(){
    $('#consulting').fadeIn('slow');
})
$('.modal-b__close').on('click', function(){
    $('#consulting, #thanks, #order').fadeOut('slow');
});

$('.catalog__btn').each(function(i){
    $(this).on('click', function(){
        $('#order .modal-b__descr').text($('.catalog__item-title').eq(i).text());
        $('#order').fadeIn('slow');
    })
})
// validate
function validateForms(form){
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages:{
            name: "Пожалуйста, введите своё имя",
            phone: "Введите номер телефона",
            email:{
                required: "Пожалуйста введите свою почту",
                email: " Вы ввели не корректный почтовый адрес"
            }
        }
    });
}
$('input[name=phone]').mask("+7(999) 999-99-99");
validateForms("#consulting form");
validateForms("#thank__wrap > form");
validateForms("#order form");
$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function(){
        $(this).find("input").val("");
        $('#consulting, #order').fadeOut();
        $('#thanks').fadeIn('slow');
    });
    return false;
});


