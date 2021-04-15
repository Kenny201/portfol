/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/index.js":
/*!*************************!*\
  !*** ./blocks/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {

    /*-------------------MOBILEMENU----------------*/

    $('.mobile-menu__toggle').click(function (e) {
        e.preventDefault();
        $('.mobile-menu').slideToggle();
        $(this).toggleClass('open');
    });

    /*-------------------SLIDERS----------------*/

    if (window.screen.width <= 768 && window.innerWidth <= 768) {
        var _glide = new Glide('.advantages', {
            type: 'slider',
            focusAt: 'center'
        }).mount();
    } else {
        var _glide2 = undefined;
    }
    if (window.screen.width < 768 && window.innerWidth < 768) {
        var _glide3 = new Glide('.kitchen-menu__day-nav', {
            type: 'slider',
            focusAt: 'center',
            perView: 1
        }).mount();
        _glide3.on('run.after', function () {
            var glideActive = document.querySelector('.kitchen-menu__tabs .glide__slide--active > button');
            glideActive.click();
        });
        _glide3.on('run.before', function () {
            var glideActive = document.querySelector('.kitchen-menu__tabs .glide__slide--active > button');
            glideActive.classList.remove('active');
        });
    } else {
        var _glide4 = undefined;
    }
    if (window.screen.width >= 768 && window.innerWidth >= 768) {
        var _glide5 = new Glide('.packages__items-wrap', {
            type: 'slider',
            hoverpause: true,
            perView: 3
        }).mount();
        _glide5.enable();
    } else if (window.screen.width >= 1024 && window.innerWidth >= 1024) {
        var _glide6 = undefined;
    } else if (window.screen.width <= 768 && window.innerWidth <= 768) {
        var _glide7 = undefined;
    }
    var glide = new Glide('.slider', {
        type: 'carousel',
        hoverpause: true,
        peek: 350,
        breakpoints: {
            768: {
                peek: {
                    before: 0,
                    after: 0
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
    if (window.screen.width < 768 && window.innerWidth < 768) {
        var _glide8 = new Glide('.reviews__video', {
            type: 'carusel',
            hoverpause: true,
            breakpoints: {
                576: {
                    perView: 2
                },
                768: {
                    perView: 3
                }
            }
        }).mount();
    } else {
        var _glide9 = undefined;
    }
    if (window.screen.width < 768 && window.innerWidth < 768) {
        var _glide10 = new Glide('.faq__items', {
            type: 'slider',
            focusAt: 'center',
            perView: 1
        }).mount();
        _glide10.on('run.after', function () {
            var glideActive = document.querySelector('.faq__items .glide__slide--active > button');
            glideActive.click();
        });
        _glide10.on('run.before', function () {
            var glideActive = document.querySelector('.faq__items  .glide__slide--active > button');
            glideActive.classList.remove('active');
        });
    } else {
        var _glide11 = undefined;
    }
    $('.faq__question').click(function () {
        $(this).siblings('.faq__answer').slideToggle();
        $(this).children('span').toggleClass('rotate-arrow');
    });
    if (window.screen.width >= 768 && window.innerWidth >= 768) {
        var child = document.querySelector('.advantages');
        var parent = document.createElement("div");
        parent.classList.add('container');
        child.parentElement.insertBefore(parent, child);
        parent.appendChild(child);
    }

    /*-------------------VALIDATE----------------*/

    $('input[name=phone], .consult-form__tel').mask("+7(999) 999-99-99");

    $(".validate-form ").each(function () {
        $(this).validate({
            rules: {
                people: "required",
                phone: "required",
                phoneConsult: "required",
                checkModal2: "required",
                callCheck: "required"
            },
            messages: {
                people: "Ну хоть сколько то должно быть человек",
                phone: "Мне нужен твой номер телефона",
                checkModal2: "",
                phoneConsult: "",
                callCheck: ""
            },
            submitHandler: function submitHandler(form) {
                var city = $("input[name='city']:checked").val();
                var order = $("input[name='order']:checked").val();
                var food = $("input[name='food']:checked").val();
                $.ajax({
                    type: "POST",
                    url: "/mailer/smart.php",
                    data: $(form).serialize() + "&city=" + city + "&order=" + order + "&food=" + food
                }).done(function () {
                    $('.thanks').fadeIn('slow');
                });
                return false;
            },
            errorPlacement: function errorPlacement(error, element) {
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
        validate: {}
    });
    var prevProgress, progress;
    var isResizeble = false;
    $('.msf').on("msf:viewChanged", function (event, data) {
        progress = Math.round(data.currentIndex / (data.totalSteps - 1) * 100);
        $(".progress").css("margin", "0");
        $(".button-false").css("display", "none");
        $('.sr-only').html('<span class="progress-text"> Пройдено: ' + '<span class="progress-procent">' + progress + '%' + '</span> </span>');
        $(".progress-bar").css("width", progress + "%").attr('aria-valuenow', progress);
        if (data.currentIndex == 0) {
            progress = 1.5;
            $(".button-false").css("display", "block");
            $(".progress-bar").css("width", progress + "%").attr('aria-valuenow', progress);
            $('.sr-only').html('<span class="progress-text"> Пройдено: ' + '<span class="progress-procent">' + (progress - progress) + '%' + '</span> </span>');
        } else if (data.currentIndex == data.totalSteps - 1) {
            $(".progress").css("margin", "35px 0 35px");
            $(".progress-bar").css("width", progress + "%").attr('aria-valuenow', progress);
            $('.sr-only').html('<span class="progress-text"> Пройдено: ' + '<span class="progress-procent">' + progress + '%' + '</span> </span>');
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

    $(".btn-overlay button").click(function () {
        $(".wrapper").fadeIn('slow');
    });
    $(document).mouseup(function (e) {
        var container = $(".wrapper");
        if (container.has(e.target).length === 0) {
            container.hide();
        }
    });
    $('.modal__close').on('click', function () {
        $('.wrapper').fadeToggle('slow');
    });
    $('.thanks-modal__close').on('click', function () {
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
            srcAction: 'iframe_src'
        }
    });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJzY3JlZW4iLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJnbGlkZSIsIkdsaWRlIiwidHlwZSIsImZvY3VzQXQiLCJtb3VudCIsInVuZGVmaW5lZCIsInBlclZpZXciLCJvbiIsImdsaWRlQWN0aXZlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaG92ZXJwYXVzZSIsImVuYWJsZSIsInBlZWsiLCJicmVha3BvaW50cyIsImJlZm9yZSIsImFmdGVyIiwic2libGluZ3MiLCJjaGlsZHJlbiIsImNoaWxkIiwicGFyZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZCIsInBhcmVudEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsIm1hc2siLCJlYWNoIiwidmFsaWRhdGUiLCJydWxlcyIsInBlb3BsZSIsInBob25lIiwicGhvbmVDb25zdWx0IiwiY2hlY2tNb2RhbDIiLCJjYWxsQ2hlY2siLCJtZXNzYWdlcyIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtIiwiY2l0eSIsInZhbCIsIm9yZGVyIiwiZm9vZCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwic2VyaWFsaXplIiwiZG9uZSIsImZhZGVJbiIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJlbGVtZW50IiwiYXR0ciIsIm5leHQiLCJhcHBlbmQiLCJpbnNlcnRBZnRlciIsIm11bHRpU3RlcEZvcm0iLCJhY3RpdmVJbmRleCIsImhpZGVCYWNrQnV0dG9uIiwiYWxsb3dVbnZhbGlkYXRlZFN0ZXAiLCJhbGxvd0NsaWNrTmF2aWdhdGlvbiIsInByZXZQcm9ncmVzcyIsInByb2dyZXNzIiwiaXNSZXNpemVibGUiLCJldmVudCIsIk1hdGgiLCJyb3VuZCIsImN1cnJlbnRJbmRleCIsInRvdGFsU3RlcHMiLCJjc3MiLCJodG1sIiwibW91c2V1cCIsImNvbnRhaW5lciIsImhhcyIsInRhcmdldCIsImxlbmd0aCIsImhpZGUiLCJmYWRlVG9nZ2xlIiwibWFnbmlmaWNQb3B1cCIsIml0ZW1zIiwic3JjIiwiaWZyYW1lIiwibWFya3VwIiwicGF0dGVybnMiLCJ5b3V0dWJlIiwiaW5kZXgiLCJpZCIsInNyY0FjdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQSxFQUFFLFlBQVc7O0FBRVQ7O0FBRUFBLE1BQUUsc0JBQUYsRUFBMEJDLEtBQTFCLENBQWdDLFVBQVNDLENBQVQsRUFBWTtBQUN4Q0EsVUFBRUMsY0FBRjtBQUNBSCxVQUFFLGNBQUYsRUFBa0JJLFdBQWxCO0FBQ0FKLFVBQUUsSUFBRixFQUFRSyxXQUFSLENBQW9CLE1BQXBCO0FBQ0gsS0FKRDs7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QUF4QjtBQUNILEtBRkQ7O0FBS0E7O0FBRUF4RixNQUFFLGNBQUYsRUFBa0J5RixhQUFsQixDQUFnQztBQUM1QkMsZUFBTztBQUNIQyxpQkFBSztBQURGLFNBRHFCO0FBSTVCL0UsY0FBTSxRQUpzQjtBQUs1QmdGLGdCQUFRO0FBQ0pDLG9CQUFRLG9DQUFvQywrQkFBcEMsR0FBc0Usc0VBQXRFLEdBQStJLFFBRG5KO0FBRUpDLHNCQUFVO0FBQ05DLHlCQUFTO0FBQ0xDLDJCQUFPLGNBREY7QUFFTEMsd0JBQUksSUFGQztBQUdMTix5QkFBSztBQUhBO0FBREgsYUFGTjtBQVNKTyx1QkFBVztBQVRQO0FBTG9CLEtBQWhDO0FBaUJILENBM09ELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL2luZGV4LmpzXCIpO1xuIiwiJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS1NT0JJTEVNRU5VLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgJCgnLm1vYmlsZS1tZW51X190b2dnbGUnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5tb2JpbGUtbWVudScpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tU0xJREVSUy0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5hZHZhbnRhZ2VzJywge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2xpZGVyJyxcclxuICAgICAgICAgICAgZm9jdXNBdDogJ2NlbnRlcicsXHJcbiAgICAgICAgfSkubW91bnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPCA3NjggJiYgd2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5raXRjaGVuLW1lbnVfX2RheS1uYXYnLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzbGlkZXInLFxyXG4gICAgICAgICAgICBmb2N1c0F0OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgcGVyVmlldzogMVxyXG4gICAgICAgIH0pLm1vdW50KCk7XHJcbiAgICAgICAgZ2xpZGUub24oJ3J1bi5hZnRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgZ2xpZGVBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2l0Y2hlbi1tZW51X190YWJzIC5nbGlkZV9fc2xpZGUtLWFjdGl2ZSA+IGJ1dHRvbicpO1xyXG4gICAgICAgICAgICBnbGlkZUFjdGl2ZS5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdsaWRlLm9uKCdydW4uYmVmb3JlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBnbGlkZUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5raXRjaGVuLW1lbnVfX3RhYnMgLmdsaWRlX19zbGlkZS0tYWN0aXZlID4gYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGdsaWRlQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+PSA3NjggJiYgd2luZG93LmlubmVyV2lkdGggPj0gNzY4ICkge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLnBhY2thZ2VzX19pdGVtcy13cmFwJywge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2xpZGVyJyxcclxuICAgICAgICAgICAgaG92ZXJwYXVzZTogdHJ1ZSxcclxuICAgICAgICAgICAgcGVyVmlldzogM1xyXG4gICAgICAgIH0pLm1vdW50KCk7XHJcbiAgICAgICAgZ2xpZGUuZW5hYmxlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPj0gMTAyNCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5zbGlkZXInLCB7XHJcbiAgICAgICAgdHlwZTogJ2Nhcm91c2VsJyxcclxuICAgICAgICBob3ZlcnBhdXNlOiB0cnVlLFxyXG4gICAgICAgIHBlZWs6IDM1MCxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIHBlZWs6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXI6IDAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgIHBlZWs6IDUwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDE0MDA6IHtcclxuICAgICAgICAgICAgICAgIHBlZWs6IDIwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSkubW91bnQoKTtcclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDwgNzY4ICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gbmV3IEdsaWRlKCcucmV2aWV3c19fdmlkZW8nLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjYXJ1c2VsJyxcclxuICAgICAgICAgICAgaG92ZXJwYXVzZTogdHJ1ZSxcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgIDU3Njp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyVmlldzogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyVmlldzogM1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkubW91bnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPCA3NjggJiYgd2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5mYXFfX2l0ZW1zJywge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2xpZGVyJyxcclxuICAgICAgICAgICAgZm9jdXNBdDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHBlclZpZXc6IDFcclxuICAgICAgICB9KS5tb3VudCgpO1xyXG4gICAgICAgIGdsaWRlLm9uKCdydW4uYWZ0ZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGdsaWRlQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhcV9faXRlbXMgLmdsaWRlX19zbGlkZS0tYWN0aXZlID4gYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGdsaWRlQWN0aXZlLmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2xpZGUub24oJ3J1bi5iZWZvcmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGdsaWRlQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhcV9faXRlbXMgIC5nbGlkZV9fc2xpZGUtLWFjdGl2ZSA+IGJ1dHRvbicpO1xyXG4gICAgICAgICAgICBnbGlkZUFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgJCgnLmZhcV9fcXVlc3Rpb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZmFxX19hbnN3ZXInKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3NwYW4nKS50b2dnbGVDbGFzcygncm90YXRlLWFycm93Jyk7XHJcbiAgICB9KTtcclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID49IDc2OCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpIHtcclxuICAgICAgICB2YXIgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWR2YW50YWdlcycpO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgICAgICBjaGlsZC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShwYXJlbnQsIGNoaWxkKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLVZBTElEQVRFLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgJCgnaW5wdXRbbmFtZT1waG9uZV0sIC5jb25zdWx0LWZvcm1fX3RlbCcpLm1hc2soXCIrNyg5OTkpIDk5OS05OS05OVwiKTtcclxuXHJcbiAgICAkKFwiLnZhbGlkYXRlLWZvcm0gXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS52YWxpZGF0ZSh7XHJcbiAgICAgICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGU6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgIHBob25lOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZUNvbnN1bHQ6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgIGNoZWNrTW9kYWwyOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICBjYWxsQ2hlY2s6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZTogXCLQndGDINGF0L7RgtGMINGB0LrQvtC70YzQutC+INGC0L4g0LTQvtC70LbQvdC+INCx0YvRgtGMINGH0LXQu9C+0LLQtdC6XCIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZTogXCLQnNC90LUg0L3Rg9C20LXQvSDRgtCy0L7QuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgICAgICAgICAgICAgIGNoZWNrTW9kYWwyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGhvbmVDb25zdWx0OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY2FsbENoZWNrOiBcIlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2l0eSA9ICQoXCJpbnB1dFtuYW1lPSdjaXR5J106Y2hlY2tlZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGxldCBvcmRlciA9ICQoXCJpbnB1dFtuYW1lPSdvcmRlciddOmNoZWNrZWRcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9vZCA9ICQoXCJpbnB1dFtuYW1lPSdmb29kJ106Y2hlY2tlZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9tYWlsZXIvc21hcnQucGhwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogJChmb3JtKS5zZXJpYWxpemUoKSArIFwiJmNpdHk9XCIgKyBjaXR5ICsgXCImb3JkZXI9XCIgKyBvcmRlciArIFwiJmZvb2Q9XCIgKyBmb29kLCBcclxuICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoYW5rcycpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbihlcnJvciwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuYXR0cihcInR5cGVcIikgPT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQubmV4dCgnbGFiZWwnKS5hcHBlbmQoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoJChlbGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLU1PREFMLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBcclxuICAgICQoXCIubXNmOmZpcnN0XCIpLm11bHRpU3RlcEZvcm0oe1xyXG4gICAgICAgIGFjdGl2ZUluZGV4OiAwLFxyXG4gICAgICAgIGhpZGVCYWNrQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICBhbGxvd1VudmFsaWRhdGVkU3RlcDogZmFsc2UsXHJcbiAgICAgICAgYWxsb3dDbGlja05hdmlnYXRpb246IGZhbHNlLFxyXG4gICAgICAgIHZhbGlkYXRlOiB7fSxcclxuICAgIH0pO1xyXG4gICAgdmFyIHByZXZQcm9ncmVzcyxcclxuICAgICAgICBwcm9ncmVzcztcclxuICAgIHZhciBpc1Jlc2l6ZWJsZSA9IGZhbHNlO1xyXG4gICAgJCgnLm1zZicpLm9uKFwibXNmOnZpZXdDaGFuZ2VkXCIsIGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKChkYXRhLmN1cnJlbnRJbmRleCAvIChkYXRhLnRvdGFsU3RlcHMgLSAxKSkgKiAxMDApO1xyXG4gICAgICAgICQoXCIucHJvZ3Jlc3NcIikuY3NzKFwibWFyZ2luXCIsIFwiMFwiKTtcclxuICAgICAgICAkKFwiLmJ1dHRvbi1mYWxzZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKCcuc3Itb25seScpLmh0bWwoJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtdGV4dFwiPiDQn9GA0L7QudC00LXQvdC+OiAnICsgJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtcHJvY2VudFwiPicgKyAocHJvZ3Jlc3MpICsgJyUnICsgJzwvc3Bhbj4gPC9zcGFuPicpO1xyXG4gICAgICAgICQoXCIucHJvZ3Jlc3MtYmFyXCIpLmNzcyhcIndpZHRoXCIsIHByb2dyZXNzICsgXCIlXCIpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwcm9ncmVzcyk7XHJcbiAgICAgICAgaWYgKGRhdGEuY3VycmVudEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAxLjU7XHJcbiAgICAgICAgICAgICQoXCIuYnV0dG9uLWZhbHNlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgJChcIi5wcm9ncmVzcy1iYXJcIikuY3NzKFwid2lkdGhcIiwgcHJvZ3Jlc3MgKyBcIiVcIikuYXR0cignYXJpYS12YWx1ZW5vdycsIHByb2dyZXNzKTtcclxuICAgICAgICAgICAgJCgnLnNyLW9ubHknKS5odG1sKCc8c3BhbiBjbGFzcz1cInByb2dyZXNzLXRleHRcIj4g0J/RgNC+0LnQtNC10L3QvjogJyArICc8c3BhbiBjbGFzcz1cInByb2dyZXNzLXByb2NlbnRcIj4nICsgKHByb2dyZXNzIC0gcHJvZ3Jlc3MpICsgJyUnICsgJzwvc3Bhbj4gPC9zcGFuPicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jdXJyZW50SW5kZXggPT0gZGF0YS50b3RhbFN0ZXBzIC0gMSkge1xyXG4gICAgICAgICAgICAkKFwiLnByb2dyZXNzXCIpLmNzcyhcIm1hcmdpblwiLCBcIjM1cHggMCAzNXB4XCIpO1xyXG4gICAgICAgICAgICAkKFwiLnByb2dyZXNzLWJhclwiKS5jc3MoXCJ3aWR0aFwiLCBwcm9ncmVzcyArIFwiJVwiKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAkKCcuc3Itb25seScpLmh0bWwoJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtdGV4dFwiPiDQn9GA0L7QudC00LXQvdC+OiAnICsgJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtcHJvY2VudFwiPicgKyAocHJvZ3Jlc3MpICsgJyUnICsgJzwvc3Bhbj4gPC9zcGFuPicpO1xyXG4gICAgICAgICAgICAkKFwiLnByb2dyZXNzLXdyYXBcIikuaW5zZXJ0QmVmb3JlKFwiLm1zZi1jb250ZW50XCIpO1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsXCIpLmNzcyhcIm1heC13aWR0aFwiLCBcIjYwMHB4XCIpO1xyXG4gICAgICAgICAgICAkKFwiLnByb2dyZXNzLXdyYXBcIikuY3NzKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLm1zZi1uYXYtYnV0dG9uW2RhdGEtdHlwZT1iYWNrXSBcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICQoXCIubXNmLW5hdmlnYXRpb25cIikuY3NzKFwibWFyZ2luXCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNTc2KSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLm1vZGFsXCIpLmNzcyhcInBhZGRpbmdcIiwgXCIyNXB4IDE1cHggMTEwcHhcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLm1vZGFsXCIpLmNzcyhcInBhZGRpbmdcIiwgXCIgNDBweCAzNXB4XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLnByb2dyZXNzLXdyYXBcIikuaW5zZXJ0QWZ0ZXIoXCIubXNmLW5hdmlnYXRpb25cIik7XHJcbiAgICB2YXIgcHJvZ3Jlc3MgPSAxLjU7XHJcbiAgICAkKFwiLnByb2dyZXNzLWJhclwiKS5jc3MoXCJ3aWR0aFwiLCBwcm9ncmVzcyArIFwiJVwiKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcHJvZ3Jlc3MpO1xyXG4gICAgJCgnLnNyLW9ubHknKS5odG1sKCc8c3BhbiBjbGFzcz1cInByb2dyZXNzLXRleHRcIj4g0J/RgNC+0LnQtNC10L3QvjogJyArICc8c3BhbiBjbGFzcz1cInByb2dyZXNzLXByb2NlbnRcIj4nICsgKHByb2dyZXNzIC0gcHJvZ3Jlc3MpICsgJyUnICsgJzwvc3Bhbj4gPC9zcGFuPicpO1xyXG4gICBcclxuICAgICQoXCIuYnRuLW92ZXJsYXkgYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIud3JhcHBlclwiKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoXCIud3JhcHBlclwiKTtcclxuICAgICAgICBpZiAoY29udGFpbmVyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCcubW9kYWxfX2Nsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLndyYXBwZXInKS5mYWRlVG9nZ2xlKCdzbG93Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJy50aGFua3MtbW9kYWxfX2Nsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnRoYW5rcycpLmZhZGVUb2dnbGUoJ3Nsb3cnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS1QT1BVUC0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgICQoJy5idXR0b24tcGxheScpLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NWpURHB6N09YRDQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaWZyYW1lJyxcclxuICAgICAgICBpZnJhbWU6IHtcclxuICAgICAgICAgICAgbWFya3VwOiAnPGRpdiBjbGFzcz1cIm1mcC1pZnJhbWUtc2NhbGVyXCI+JyArICc8ZGl2IGNsYXNzPVwibWZwLWNsb3NlXCI+PC9kaXY+JyArICc8aWZyYW1lIGNsYXNzPVwibWZwLWlmcmFtZVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nICsgJzwvZGl2PicsXHJcbiAgICAgICAgICAgIHBhdHRlcm5zOiB7XHJcbiAgICAgICAgICAgICAgICB5b3V0dWJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6ICd5b3V0dWJlLmNvbS8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAndj0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogJy8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyVpZCU/YXV0b3BsYXk9MSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3JjQWN0aW9uOiAnaWZyYW1lX3NyYycsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9