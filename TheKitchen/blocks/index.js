$(function() {

    /*-------------------MOBILEMENU----------------*/

    $('.mobile-menu__toggle').click(function(e) {
        e.preventDefault();
        $('.mobile-menu').slideToggle();
        $(this).toggleClass('open');
    });

    /*-------------------SLIDERS----------------*/

    if (window.screen.width <= 768) {
        let glide = new Glide('.advantages', {
            type: 'slider',
            focusAt: 'center',
        }).mount();
    } else {
        let glide = undefined;
    }
    if (window.screen.width < 768) {
        let glide = new Glide('.kitchen-menu__day-nav', {
            type: 'slider',
            focusAt: 'center',
            perView: 1
        }).mount();
        glide.on('run.after', function() {
            let glideActive = document.querySelector('.kitchen-menu__tabs .glide__slide--active > button');
            glideActive.click();
        });
        glide.on('run.before', function() {
            let glideActive = document.querySelector('.kitchen-menu__tabs .glide__slide--active > button');
            glideActive.classList.remove('active');
        });
    } else {
        let glide = undefined;
    }
    if (window.screen.width >= 768 ) {
        let glide = new Glide('.packages__items-wrap', {
            type: 'slider',
            hoverpause: true,
            perView: 3
        }).mount();
        glide.enable();
    } else if (window.screen.width >= 1024) {
        let glide = undefined;
    } else if (window.screen.width <= 768) {
        let glide = undefined;
    }
    let glide = new Glide('.slider', {
        type: 'carousel',
        hoverpause: true,
        peek: 350,
        breakpoints: {
            768: {
                peek: {
                    before: 0,
                    after: 0,
                }
            },
            1024: {
                peek: 50
            },
            1400: {
                peek: 200
            }
        }
    }).mount();
    if (window.screen.width < 768) {
        let glide = new Glide('.reviews__video', {
            type: 'carusel',
            hoverpause: true,
            breakpoints: {
                576:{
                    perView: 2
                },
                768:{
                    perView: 3
                }
            }
        }).mount();
    } else {
        let glide = undefined;
    }
    if (window.screen.width < 768) {
        let glide = new Glide('.faq__items', {
            type: 'slider',
            focusAt: 'center',
            perView: 1
        }).mount();
        glide.on('run.after', function() {
            let glideActive = document.querySelector('.faq__items .glide__slide--active > button');
            glideActive.click();
        });
        glide.on('run.before', function() {
            let glideActive = document.querySelector('.faq__items  .glide__slide--active > button');
            glideActive.classList.remove('active');
        });
    } else {
        let glide = undefined;
    }
    $('.faq__question').click(function() {
        $(this).siblings('.faq__answer').slideToggle();
        $(this).children('span').toggleClass('rotate-arrow');
    });
    if (window.screen.width >= 768) {
        var child = document.querySelector('.advantages');
        let parent = document.createElement("div");
        parent.classList.add('container');
        child.parentElement.insertBefore(parent, child);
        parent.appendChild(child);
    }

    /*-------------------VALIDATE----------------*/

    $('input[name=phone], .consult-form__tel').mask("+7(999) 999-99-99");

    $(".validate-form ").each(function() {
        $(this).validate({
            rules: {
                people: "required",
                phone: "required",
                phoneConsult: "required",
                checkModal2: "required",
                callCheck: "required",
            },
            messages: {
                people: "Ну хоть сколько то должно быть человек",
                phone: "Мне нужен твой номер телефона",
                checkModal2: "",
                phoneConsult: "",
                callCheck: "",
            },
            submitHandler: function(form) {
                let city = $("input[name='city']:checked").val();
                let order = $("input[name='order']:checked").val();
                let food = $("input[name='food']:checked").val();
                $.ajax({
                    type: "POST",
                    url: "/mailer/smart.php",
                    data: $(form).serialize() + "&city=" + city + "&order=" + order + "&food=" + food, 
                }).done(function() {
                    $('.thanks').fadeIn('slow');
                });
                return false;
            },
            errorPlacement: function(error, element) {
                if (element.attr("type") == "checkbox") {
                    return element.next('label').append(error);
                }
                error.insertAfter($(element));
            }
        });
    });

    /*-------------------MODAL----------------*/
    
    $(".msf:first").multiStepForm({
        activeIndex: 0,
        hideBackButton: false,
        allowUnvalidatedStep: false,
        allowClickNavigation: false,
        validate: {},
    });
    var prevProgress,
        progress;
    var isResizeble = false;
    $('.msf').on("msf:viewChanged", function(event, data) {
        progress = Math.round((data.currentIndex / (data.totalSteps - 1)) * 100);
        $(".progress").css("margin", "0");
        $(".button-false").css("display", "none");
        $('.sr-only').html('<span class="progress-text"> Пройдено: ' + '<span class="progress-procent">' + (progress) + '%' + '</span> </span>');
        $(".progress-bar").css("width", progress + "%").attr('aria-valuenow', progress);
        if (data.currentIndex == 0) {
            progress = 1.5;
            $(".button-false").css("display", "block");
            $(".progress-bar").css("width", progress + "%").attr('aria-valuenow', progress);
            $('.sr-only').html('<span class="progress-text"> Пройдено: ' + '<span class="progress-procent">' + (progress - progress) + '%' + '</span> </span>');
        } else if (data.currentIndex == data.totalSteps - 1) {
            $(".progress").css("margin", "35px 0 35px");
            $(".progress-bar").css("width", progress + "%").attr('aria-valuenow', progress);
            $('.sr-only').html('<span class="progress-text"> Пройдено: ' + '<span class="progress-procent">' + (progress) + '%' + '</span> </span>');
            $(".progress-wrap").insertBefore(".msf-content");
            $(".modal").css("max-width", "600px");
            $(".progress-wrap").css("width", "100%");
            $(".msf-nav-button[data-type=back] ").css("display", "none");
            $(".msf-navigation").css("margin", "0");
            if (window.screen.width <= 576) {
                $(".modal").css("padding", "25px 15px 110px");
            } else {
                $(".modal").css("padding", " 40px 35px");
            }
        }
    });
    $(".progress-wrap").insertAfter(".msf-navigation");
    var progress = 1.5;
    $(".progress-bar").css("width", progress + "%").attr('aria-valuenow', progress);
    $('.sr-only').html('<span class="progress-text"> Пройдено: ' + '<span class="progress-procent">' + (progress - progress) + '%' + '</span> </span>');
   
    $(".btn-overlay button").click(function() {
        $(".wrapper").fadeIn('slow');
    });
    $(document).mouseup(function(e) {
        var container = $(".wrapper");
        if (container.has(e.target).length === 0) {
            container.hide();
        }
    });
    $('.modal__close').on('click', function() {
        $('.wrapper').fadeToggle('slow');
    });
    $('.thanks-modal__close').on('click', function() {
        $('.thanks').fadeToggle('slow');
    });


    /*-------------------POPUP----------------*/

    $('.button-play').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=5jTDpz7OXD4'
        },
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });
});
