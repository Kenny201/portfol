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
    if (window.screen.width >= 768 && window.screen.width <= 1024) {
        var _glide5 = new Glide('.packages__items-wrap', {
            type: 'slider',
            hoverpause: true,
            perView: 3
        }).mount();
        _glide5.enable();
    } else if (window.screen.width >= 1024) {
        var _glide6 = undefined;
    } else if (window.screen.width <= 768) {
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
            if (window.screen.width <= 576 && window.innerWidth <= 576) {
                $(".modal").css("padding", "25px 15px 110px");
            } else {
                $(".modal").css("padding", " 40px 35px");
            }
            $(".modal").css("max-width", "600px");
            $(".progress-wrap").css("width", "100%");
            $(".msf-nav-button[data-type=back] ").css("display", "none");
            $(".msf-navigation").css("margin", "0");
        } else if (data.currentIndex == data.totalSteps - 2) {
            $(".progress-wrap").insertAfter(".msf-navigation");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJzY3JlZW4iLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJnbGlkZSIsIkdsaWRlIiwidHlwZSIsImZvY3VzQXQiLCJtb3VudCIsInVuZGVmaW5lZCIsInBlclZpZXciLCJvbiIsImdsaWRlQWN0aXZlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaG92ZXJwYXVzZSIsImVuYWJsZSIsInBlZWsiLCJicmVha3BvaW50cyIsImJlZm9yZSIsImFmdGVyIiwic2libGluZ3MiLCJjaGlsZHJlbiIsImNoaWxkIiwicGFyZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZCIsInBhcmVudEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsIm1hc2siLCJlYWNoIiwidmFsaWRhdGUiLCJydWxlcyIsInBlb3BsZSIsInBob25lIiwicGhvbmVDb25zdWx0IiwiY2hlY2tNb2RhbDIiLCJjYWxsQ2hlY2siLCJtZXNzYWdlcyIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtIiwiY2l0eSIsInZhbCIsIm9yZGVyIiwiZm9vZCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwic2VyaWFsaXplIiwiZG9uZSIsImZhZGVJbiIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJlbGVtZW50IiwiYXR0ciIsIm5leHQiLCJhcHBlbmQiLCJpbnNlcnRBZnRlciIsIm11bHRpU3RlcEZvcm0iLCJhY3RpdmVJbmRleCIsImhpZGVCYWNrQnV0dG9uIiwiYWxsb3dVbnZhbGlkYXRlZFN0ZXAiLCJhbGxvd0NsaWNrTmF2aWdhdGlvbiIsInByZXZQcm9ncmVzcyIsInByb2dyZXNzIiwiaXNSZXNpemVibGUiLCJldmVudCIsIk1hdGgiLCJyb3VuZCIsImN1cnJlbnRJbmRleCIsInRvdGFsU3RlcHMiLCJjc3MiLCJodG1sIiwibW91c2V1cCIsImNvbnRhaW5lciIsImhhcyIsInRhcmdldCIsImxlbmd0aCIsImhpZGUiLCJmYWRlVG9nZ2xlIiwibWFnbmlmaWNQb3B1cCIsIml0ZW1zIiwic3JjIiwiaWZyYW1lIiwibWFya3VwIiwicGF0dGVybnMiLCJ5b3V0dWJlIiwiaW5kZXgiLCJpZCIsInNyY0FjdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQSxFQUFFLFlBQVc7O0FBRVQ7O0FBRUFBLE1BQUUsc0JBQUYsRUFBMEJDLEtBQTFCLENBQWdDLFVBQVNDLENBQVQsRUFBWTtBQUN4Q0EsVUFBRUMsY0FBRjtBQUNBSCxVQUFFLGNBQUYsRUFBa0JJLFdBQWxCO0FBQ0FKLFVBQUUsSUFBRixFQUFRSyxXQUFSLENBQW9CLE1BQXBCO0FBQ0gsS0FKRDs7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SCxLQUZEO0FBR0F4RixNQUFFLHNCQUFGLEVBQTBCaUIsRUFBMUIsQ0FBNkIsT0FBN0IsRUFBc0MsWUFBVztBQUM3Q2pCLFVBQUUsU0FBRixFQUFhd0YsVUFBYixDQUF3QixNQUF4QjtBQUNILEtBRkQ7O0FBS0E7O0FBRUF4RixNQUFFLGNBQUYsRUFBa0J5RixhQUFsQixDQUFnQztBQUM1QkMsZUFBTztBQUNIQyxpQkFBSztBQURGLFNBRHFCO0FBSTVCL0UsY0FBTSxRQUpzQjtBQUs1QmdGLGdCQUFRO0FBQ0pDLG9CQUFRLG9DQUFvQywrQkFBcEMsR0FBc0Usc0VBQXRFLEdBQStJLFFBRG5KO0FBRUpDLHNCQUFVO0FBQ05DLHlCQUFTO0FBQ0xDLDJCQUFPLGNBREY7QUFFTEMsd0JBQUksSUFGQztBQUdMTix5QkFBSztBQUhBO0FBREgsYUFGTjtBQVNKTyx1QkFBVztBQVRQO0FBTG9CLEtBQWhDO0FBaUJILENBN09ELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL2luZGV4LmpzXCIpO1xuIiwiJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS1NT0JJTEVNRU5VLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgJCgnLm1vYmlsZS1tZW51X190b2dnbGUnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5tb2JpbGUtbWVudScpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tU0xJREVSUy0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5hZHZhbnRhZ2VzJywge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2xpZGVyJyxcclxuICAgICAgICAgICAgZm9jdXNBdDogJ2NlbnRlcicsXHJcbiAgICAgICAgfSkubW91bnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPCA3NjggJiYgd2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5raXRjaGVuLW1lbnVfX2RheS1uYXYnLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzbGlkZXInLFxyXG4gICAgICAgICAgICBmb2N1c0F0OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgcGVyVmlldzogMVxyXG4gICAgICAgIH0pLm1vdW50KCk7XHJcbiAgICAgICAgZ2xpZGUub24oJ3J1bi5hZnRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgZ2xpZGVBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2l0Y2hlbi1tZW51X190YWJzIC5nbGlkZV9fc2xpZGUtLWFjdGl2ZSA+IGJ1dHRvbicpO1xyXG4gICAgICAgICAgICBnbGlkZUFjdGl2ZS5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdsaWRlLm9uKCdydW4uYmVmb3JlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBnbGlkZUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5raXRjaGVuLW1lbnVfX3RhYnMgLmdsaWRlX19zbGlkZS0tYWN0aXZlID4gYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGdsaWRlQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+PSA3NjggJiYgd2luZG93LnNjcmVlbi53aWR0aCA8PSAxMDI0KSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gbmV3IEdsaWRlKCcucGFja2FnZXNfX2l0ZW1zLXdyYXAnLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzbGlkZXInLFxyXG4gICAgICAgICAgICBob3ZlcnBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICBwZXJWaWV3OiAzXHJcbiAgICAgICAgfSkubW91bnQoKTtcclxuICAgICAgICBnbGlkZS5lbmFibGUoKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+PSAxMDI0KSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDc2OCkge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLnNsaWRlcicsIHtcclxuICAgICAgICB0eXBlOiAnY2Fyb3VzZWwnLFxyXG4gICAgICAgIGhvdmVycGF1c2U6IHRydWUsXHJcbiAgICAgICAgcGVlazogMzUwLFxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgcGVlazoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBhZnRlcjogMCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgcGVlazogNTBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTQwMDoge1xyXG4gICAgICAgICAgICAgICAgcGVlazogMjAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KS5tb3VudCgpO1xyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPCA3NjggJiYgd2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5yZXZpZXdzX192aWRlbycsIHtcclxuICAgICAgICAgICAgdHlwZTogJ2NhcnVzZWwnLFxyXG4gICAgICAgICAgICBob3ZlcnBhdXNlOiB0cnVlLFxyXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgNTc2OntcclxuICAgICAgICAgICAgICAgICAgICBwZXJWaWV3OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgICAgICAgICBwZXJWaWV3OiAzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5tb3VudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8IDc2OCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLmZhcV9faXRlbXMnLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzbGlkZXInLFxyXG4gICAgICAgICAgICBmb2N1c0F0OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgcGVyVmlldzogMVxyXG4gICAgICAgIH0pLm1vdW50KCk7XHJcbiAgICAgICAgZ2xpZGUub24oJ3J1bi5hZnRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgZ2xpZGVBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFxX19pdGVtcyAuZ2xpZGVfX3NsaWRlLS1hY3RpdmUgPiBidXR0b24nKTtcclxuICAgICAgICAgICAgZ2xpZGVBY3RpdmUuY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnbGlkZS5vbigncnVuLmJlZm9yZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgZ2xpZGVBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFxX19pdGVtcyAgLmdsaWRlX19zbGlkZS0tYWN0aXZlID4gYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGdsaWRlQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAkKCcuZmFxX19xdWVzdGlvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJy5mYXFfX2Fuc3dlcicpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignc3BhbicpLnRvZ2dsZUNsYXNzKCdyb3RhdGUtYXJyb3cnKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPj0gNzY4ICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCkge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZHZhbnRhZ2VzJyk7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNoaWxkLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHBhcmVudCwgY2hpbGQpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tVkFMSURBVEUtLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICAkKCdpbnB1dFtuYW1lPXBob25lXSwgLmNvbnN1bHQtZm9ybV9fdGVsJykubWFzayhcIis3KDk5OSkgOTk5LTk5LTk5XCIpO1xyXG5cclxuICAgICQoXCIudmFsaWRhdGUtZm9ybSBcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLnZhbGlkYXRlKHtcclxuICAgICAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZTogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgIHBob25lQ29uc3VsdDogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tNb2RhbDI6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgIGNhbGxDaGVjazogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlOiBcItCd0YMg0YXQvtGC0Ywg0YHQutC+0LvRjNC60L4g0YLQviDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0YfQtdC70L7QstC10LpcIixcclxuICAgICAgICAgICAgICAgIHBob25lOiBcItCc0L3QtSDQvdGD0LbQtdC9INGC0LLQvtC5INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tNb2RhbDI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZUNvbnN1bHQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjYWxsQ2hlY2s6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaXR5ID0gJChcImlucHV0W25hbWU9J2NpdHknXTpjaGVja2VkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyID0gJChcImlucHV0W25hbWU9J29yZGVyJ106Y2hlY2tlZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGxldCBmb29kID0gJChcImlucHV0W25hbWU9J2Zvb2QnXTpjaGVja2VkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL21haWxlci9zbWFydC5waHBcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiAkKGZvcm0pLnNlcmlhbGl6ZSgpICsgXCImY2l0eT1cIiArIGNpdHkgKyBcIiZvcmRlcj1cIiArIG9yZGVyICsgXCImZm9vZD1cIiArIGZvb2QsIFxyXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhhbmtzJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKGVycm9yLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5uZXh0KCdsYWJlbCcpLmFwcGVuZChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlcnJvci5pbnNlcnRBZnRlcigkKGVsZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tTU9EQUwtLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIFxyXG4gICAgJChcIi5tc2Y6Zmlyc3RcIikubXVsdGlTdGVwRm9ybSh7XHJcbiAgICAgICAgYWN0aXZlSW5kZXg6IDAsXHJcbiAgICAgICAgaGlkZUJhY2tCdXR0b246IGZhbHNlLFxyXG4gICAgICAgIGFsbG93VW52YWxpZGF0ZWRTdGVwOiBmYWxzZSxcclxuICAgICAgICBhbGxvd0NsaWNrTmF2aWdhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgdmFsaWRhdGU6IHt9LFxyXG4gICAgfSk7XHJcbiAgICB2YXIgcHJldlByb2dyZXNzLFxyXG4gICAgICAgIHByb2dyZXNzO1xyXG4gICAgdmFyIGlzUmVzaXplYmxlID0gZmFsc2U7XHJcbiAgICAkKCcubXNmJykub24oXCJtc2Y6dmlld0NoYW5nZWRcIiwgZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBwcm9ncmVzcyA9IE1hdGgucm91bmQoKGRhdGEuY3VycmVudEluZGV4IC8gKGRhdGEudG90YWxTdGVwcyAtIDEpKSAqIDEwMCk7XHJcbiAgICAgICAgJChcIi5wcm9ncmVzc1wiKS5jc3MoXCJtYXJnaW5cIiwgXCIwXCIpO1xyXG4gICAgICAgICQoXCIuYnV0dG9uLWZhbHNlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoJy5zci1vbmx5JykuaHRtbCgnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy10ZXh0XCI+INCf0YDQvtC50LTQtdC90L46ICcgKyAnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy1wcm9jZW50XCI+JyArIChwcm9ncmVzcykgKyAnJScgKyAnPC9zcGFuPiA8L3NwYW4+Jyk7XHJcbiAgICAgICAgJChcIi5wcm9ncmVzcy1iYXJcIikuY3NzKFwid2lkdGhcIiwgcHJvZ3Jlc3MgKyBcIiVcIikuYXR0cignYXJpYS12YWx1ZW5vdycsIHByb2dyZXNzKTtcclxuICAgICAgICBpZiAoZGF0YS5jdXJyZW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IDEuNTtcclxuICAgICAgICAgICAgJChcIi5idXR0b24tZmFsc2VcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAkKFwiLnByb2dyZXNzLWJhclwiKS5jc3MoXCJ3aWR0aFwiLCBwcm9ncmVzcyArIFwiJVwiKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAkKCcuc3Itb25seScpLmh0bWwoJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtdGV4dFwiPiDQn9GA0L7QudC00LXQvdC+OiAnICsgJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtcHJvY2VudFwiPicgKyAocHJvZ3Jlc3MgLSBwcm9ncmVzcykgKyAnJScgKyAnPC9zcGFuPiA8L3NwYW4+Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmN1cnJlbnRJbmRleCA9PSBkYXRhLnRvdGFsU3RlcHMgLSAxKSB7XHJcbiAgICAgICAgICAgICQoXCIucHJvZ3Jlc3NcIikuY3NzKFwibWFyZ2luXCIsIFwiMzVweCAwIDM1cHhcIik7XHJcbiAgICAgICAgICAgICQoXCIucHJvZ3Jlc3MtYmFyXCIpLmNzcyhcIndpZHRoXCIsIHByb2dyZXNzICsgXCIlXCIpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICQoJy5zci1vbmx5JykuaHRtbCgnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy10ZXh0XCI+INCf0YDQvtC50LTQtdC90L46ICcgKyAnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy1wcm9jZW50XCI+JyArIChwcm9ncmVzcykgKyAnJScgKyAnPC9zcGFuPiA8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgICQoXCIucHJvZ3Jlc3Mtd3JhcFwiKS5pbnNlcnRCZWZvcmUoXCIubXNmLWNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDU3NiAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA1NzYpIHtcclxuICAgICAgICAgICAgICAgICQoXCIubW9kYWxcIikuY3NzKFwicGFkZGluZ1wiLCBcIjI1cHggMTVweCAxMTBweFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIubW9kYWxcIikuY3NzKFwicGFkZGluZ1wiLCBcIiA0MHB4IDM1cHhcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChcIi5tb2RhbFwiKS5jc3MoXCJtYXgtd2lkdGhcIiwgXCI2MDBweFwiKTtcclxuICAgICAgICAgICAgJChcIi5wcm9ncmVzcy13cmFwXCIpLmNzcyhcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICAgICAgICAgICAgJChcIi5tc2YtbmF2LWJ1dHRvbltkYXRhLXR5cGU9YmFja10gXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAkKFwiLm1zZi1uYXZpZ2F0aW9uXCIpLmNzcyhcIm1hcmdpblwiLCBcIjBcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmN1cnJlbnRJbmRleCA9PSBkYXRhLnRvdGFsU3RlcHMgLSAyKSB7XHJcbiAgICAgICAgICAgICQoXCIucHJvZ3Jlc3Mtd3JhcFwiKS5pbnNlcnRBZnRlcihcIi5tc2YtbmF2aWdhdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIucHJvZ3Jlc3Mtd3JhcFwiKS5pbnNlcnRBZnRlcihcIi5tc2YtbmF2aWdhdGlvblwiKTtcclxuICAgIHZhciBwcm9ncmVzcyA9IDEuNTtcclxuICAgICQoXCIucHJvZ3Jlc3MtYmFyXCIpLmNzcyhcIndpZHRoXCIsIHByb2dyZXNzICsgXCIlXCIpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwcm9ncmVzcyk7XHJcbiAgICAkKCcuc3Itb25seScpLmh0bWwoJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtdGV4dFwiPiDQn9GA0L7QudC00LXQvdC+OiAnICsgJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtcHJvY2VudFwiPicgKyAocHJvZ3Jlc3MgLSBwcm9ncmVzcykgKyAnJScgKyAnPC9zcGFuPiA8L3NwYW4+Jyk7XHJcbiAgIFxyXG4gICAgJChcIi5idG4tb3ZlcmxheSBidXR0b25cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi53cmFwcGVyXCIpLmZhZGVJbignc2xvdycpO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gJChcIi53cmFwcGVyXCIpO1xyXG4gICAgICAgIGlmIChjb250YWluZXIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoJy5tb2RhbF9fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcud3JhcHBlcicpLmZhZGVUb2dnbGUoJ3Nsb3cnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnRoYW5rcy1tb2RhbF9fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcudGhhbmtzJykuZmFkZVRvZ2dsZSgnc2xvdycpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLVBPUFVQLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgJCgnLmJ1dHRvbi1wbGF5JykubWFnbmlmaWNQb3B1cCh7XHJcbiAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj01alREcHo3T1hENCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICdpZnJhbWUnLFxyXG4gICAgICAgIGlmcmFtZToge1xyXG4gICAgICAgICAgICBtYXJrdXA6ICc8ZGl2IGNsYXNzPVwibWZwLWlmcmFtZS1zY2FsZXJcIj4nICsgJzxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj4nICsgJzxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicgKyAnPC9kaXY+JyxcclxuICAgICAgICAgICAgcGF0dGVybnM6IHtcclxuICAgICAgICAgICAgICAgIHlvdXR1YmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogJ3lvdXR1YmUuY29tLycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICd2PScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJWlkJT9hdXRvcGxheT0xJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzcmNBY3Rpb246ICdpZnJhbWVfc3JjJyxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=