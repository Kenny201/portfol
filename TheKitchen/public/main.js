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

    if (window.screen.width <= 768) {
        var _glide = new Glide('.advantages', {
            type: 'slider',
            focusAt: 'center'
        }).mount();
    } else {
        var _glide2 = undefined;
    }
    if (window.screen.width < 768) {
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
    if (window.screen.width >= 768) {
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
    if (window.screen.width < 768) {
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
    if (window.screen.width < 768) {
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
    if (window.screen.width >= 768) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJzY3JlZW4iLCJ3aWR0aCIsImdsaWRlIiwiR2xpZGUiLCJ0eXBlIiwiZm9jdXNBdCIsIm1vdW50IiwidW5kZWZpbmVkIiwicGVyVmlldyIsIm9uIiwiZ2xpZGVBY3RpdmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJob3ZlcnBhdXNlIiwiZW5hYmxlIiwicGVlayIsImJyZWFrcG9pbnRzIiwiYmVmb3JlIiwiYWZ0ZXIiLCJzaWJsaW5ncyIsImNoaWxkcmVuIiwiY2hpbGQiLCJwYXJlbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwicGFyZW50RWxlbWVudCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwibWFzayIsImVhY2giLCJ2YWxpZGF0ZSIsInJ1bGVzIiwicGVvcGxlIiwicGhvbmUiLCJwaG9uZUNvbnN1bHQiLCJjaGVja01vZGFsMiIsImNhbGxDaGVjayIsIm1lc3NhZ2VzIiwic3VibWl0SGFuZGxlciIsImZvcm0iLCJjaXR5IiwidmFsIiwib3JkZXIiLCJmb29kIiwiYWpheCIsInVybCIsImRhdGEiLCJzZXJpYWxpemUiLCJkb25lIiwiZmFkZUluIiwiZXJyb3JQbGFjZW1lbnQiLCJlcnJvciIsImVsZW1lbnQiLCJhdHRyIiwibmV4dCIsImFwcGVuZCIsImluc2VydEFmdGVyIiwibXVsdGlTdGVwRm9ybSIsImFjdGl2ZUluZGV4IiwiaGlkZUJhY2tCdXR0b24iLCJhbGxvd1VudmFsaWRhdGVkU3RlcCIsImFsbG93Q2xpY2tOYXZpZ2F0aW9uIiwicHJldlByb2dyZXNzIiwicHJvZ3Jlc3MiLCJpc1Jlc2l6ZWJsZSIsImV2ZW50IiwiTWF0aCIsInJvdW5kIiwiY3VycmVudEluZGV4IiwidG90YWxTdGVwcyIsImNzcyIsImh0bWwiLCJtb3VzZXVwIiwiY29udGFpbmVyIiwiaGFzIiwidGFyZ2V0IiwibGVuZ3RoIiwiaGlkZSIsImZhZGVUb2dnbGUiLCJtYWduaWZpY1BvcHVwIiwiaXRlbXMiLCJzcmMiLCJpZnJhbWUiLCJtYXJrdXAiLCJwYXR0ZXJucyIsInlvdXR1YmUiLCJpbmRleCIsImlkIiwic3JjQWN0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkFBLEVBQUUsWUFBVzs7QUFFVDs7QUFFQUEsTUFBRSxzQkFBRixFQUEwQkMsS0FBMUIsQ0FBZ0MsVUFBU0MsQ0FBVCxFQUFZO0FBQ3hDQSxVQUFFQyxjQUFGO0FBQ0FILFVBQUUsY0FBRixFQUFrQkksV0FBbEI7QUFDQUosVUFBRSxJQUFGLEVBQVFLLFdBQVIsQ0FBb0IsTUFBcEI7QUFDSCxLQUpEOztBQU1BOztBQUVBLFFB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QUFESCxhQUZOO0FBU0pPLHVCQUFXO0FBVFA7QUFMb0IsS0FBaEM7QUFpQkgsQ0EzT0QsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3MvaW5kZXguanNcIik7XG4iLCIkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLU1PQklMRU1FTlUtLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICAkKCcubW9iaWxlLW1lbnVfX3RvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLm1vYmlsZS1tZW51Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS1TTElERVJTLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gbmV3IEdsaWRlKCcuYWR2YW50YWdlcycsIHtcclxuICAgICAgICAgICAgdHlwZTogJ3NsaWRlcicsXHJcbiAgICAgICAgICAgIGZvY3VzQXQ6ICdjZW50ZXInLFxyXG4gICAgICAgIH0pLm1vdW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gbmV3IEdsaWRlKCcua2l0Y2hlbi1tZW51X19kYXktbmF2Jywge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2xpZGVyJyxcclxuICAgICAgICAgICAgZm9jdXNBdDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHBlclZpZXc6IDFcclxuICAgICAgICB9KS5tb3VudCgpO1xyXG4gICAgICAgIGdsaWRlLm9uKCdydW4uYWZ0ZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGdsaWRlQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtpdGNoZW4tbWVudV9fdGFicyAuZ2xpZGVfX3NsaWRlLS1hY3RpdmUgPiBidXR0b24nKTtcclxuICAgICAgICAgICAgZ2xpZGVBY3RpdmUuY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnbGlkZS5vbigncnVuLmJlZm9yZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgZ2xpZGVBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2l0Y2hlbi1tZW51X190YWJzIC5nbGlkZV9fc2xpZGUtLWFjdGl2ZSA+IGJ1dHRvbicpO1xyXG4gICAgICAgICAgICBnbGlkZUFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPj0gNzY4ICkge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLnBhY2thZ2VzX19pdGVtcy13cmFwJywge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2xpZGVyJyxcclxuICAgICAgICAgICAgaG92ZXJwYXVzZTogdHJ1ZSxcclxuICAgICAgICAgICAgcGVyVmlldzogM1xyXG4gICAgICAgIH0pLm1vdW50KCk7XHJcbiAgICAgICAgZ2xpZGUuZW5hYmxlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPj0gMTAyNCkge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA3NjgpIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5zbGlkZXInLCB7XHJcbiAgICAgICAgdHlwZTogJ2Nhcm91c2VsJyxcclxuICAgICAgICBob3ZlcnBhdXNlOiB0cnVlLFxyXG4gICAgICAgIHBlZWs6IDM1MCxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIHBlZWs6IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXI6IDAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgIHBlZWs6IDUwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDE0MDA6IHtcclxuICAgICAgICAgICAgICAgIHBlZWs6IDIwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSkubW91bnQoKTtcclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gbmV3IEdsaWRlKCcucmV2aWV3c19fdmlkZW8nLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjYXJ1c2VsJyxcclxuICAgICAgICAgICAgaG92ZXJwYXVzZTogdHJ1ZSxcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgIDU3Njp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyVmlldzogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyVmlldzogM1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkubW91bnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPCA3NjgpIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5mYXFfX2l0ZW1zJywge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2xpZGVyJyxcclxuICAgICAgICAgICAgZm9jdXNBdDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHBlclZpZXc6IDFcclxuICAgICAgICB9KS5tb3VudCgpO1xyXG4gICAgICAgIGdsaWRlLm9uKCdydW4uYWZ0ZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGdsaWRlQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhcV9faXRlbXMgLmdsaWRlX19zbGlkZS0tYWN0aXZlID4gYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGdsaWRlQWN0aXZlLmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2xpZGUub24oJ3J1bi5iZWZvcmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGdsaWRlQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhcV9faXRlbXMgIC5nbGlkZV9fc2xpZGUtLWFjdGl2ZSA+IGJ1dHRvbicpO1xyXG4gICAgICAgICAgICBnbGlkZUFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgJCgnLmZhcV9fcXVlc3Rpb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZmFxX19hbnN3ZXInKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3NwYW4nKS50b2dnbGVDbGFzcygncm90YXRlLWFycm93Jyk7XHJcbiAgICB9KTtcclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID49IDc2OCkge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZHZhbnRhZ2VzJyk7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNoaWxkLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHBhcmVudCwgY2hpbGQpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tVkFMSURBVEUtLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICAkKCdpbnB1dFtuYW1lPXBob25lXSwgLmNvbnN1bHQtZm9ybV9fdGVsJykubWFzayhcIis3KDk5OSkgOTk5LTk5LTk5XCIpO1xyXG5cclxuICAgICQoXCIudmFsaWRhdGUtZm9ybSBcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLnZhbGlkYXRlKHtcclxuICAgICAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZTogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgIHBob25lQ29uc3VsdDogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tNb2RhbDI6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgIGNhbGxDaGVjazogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlOiBcItCd0YMg0YXQvtGC0Ywg0YHQutC+0LvRjNC60L4g0YLQviDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0YfQtdC70L7QstC10LpcIixcclxuICAgICAgICAgICAgICAgIHBob25lOiBcItCc0L3QtSDQvdGD0LbQtdC9INGC0LLQvtC5INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tNb2RhbDI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZUNvbnN1bHQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjYWxsQ2hlY2s6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaXR5ID0gJChcImlucHV0W25hbWU9J2NpdHknXTpjaGVja2VkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyID0gJChcImlucHV0W25hbWU9J29yZGVyJ106Y2hlY2tlZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGxldCBmb29kID0gJChcImlucHV0W25hbWU9J2Zvb2QnXTpjaGVja2VkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL21haWxlci9zbWFydC5waHBcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiAkKGZvcm0pLnNlcmlhbGl6ZSgpICsgXCImY2l0eT1cIiArIGNpdHkgKyBcIiZvcmRlcj1cIiArIG9yZGVyICsgXCImZm9vZD1cIiArIGZvb2QsIFxyXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhhbmtzJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKGVycm9yLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5uZXh0KCdsYWJlbCcpLmFwcGVuZChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlcnJvci5pbnNlcnRBZnRlcigkKGVsZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tTU9EQUwtLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIFxyXG4gICAgJChcIi5tc2Y6Zmlyc3RcIikubXVsdGlTdGVwRm9ybSh7XHJcbiAgICAgICAgYWN0aXZlSW5kZXg6IDAsXHJcbiAgICAgICAgaGlkZUJhY2tCdXR0b246IGZhbHNlLFxyXG4gICAgICAgIGFsbG93VW52YWxpZGF0ZWRTdGVwOiBmYWxzZSxcclxuICAgICAgICBhbGxvd0NsaWNrTmF2aWdhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgdmFsaWRhdGU6IHt9LFxyXG4gICAgfSk7XHJcbiAgICB2YXIgcHJldlByb2dyZXNzLFxyXG4gICAgICAgIHByb2dyZXNzO1xyXG4gICAgdmFyIGlzUmVzaXplYmxlID0gZmFsc2U7XHJcbiAgICAkKCcubXNmJykub24oXCJtc2Y6dmlld0NoYW5nZWRcIiwgZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBwcm9ncmVzcyA9IE1hdGgucm91bmQoKGRhdGEuY3VycmVudEluZGV4IC8gKGRhdGEudG90YWxTdGVwcyAtIDEpKSAqIDEwMCk7XHJcbiAgICAgICAgJChcIi5wcm9ncmVzc1wiKS5jc3MoXCJtYXJnaW5cIiwgXCIwXCIpO1xyXG4gICAgICAgICQoXCIuYnV0dG9uLWZhbHNlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoJy5zci1vbmx5JykuaHRtbCgnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy10ZXh0XCI+INCf0YDQvtC50LTQtdC90L46ICcgKyAnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy1wcm9jZW50XCI+JyArIChwcm9ncmVzcykgKyAnJScgKyAnPC9zcGFuPiA8L3NwYW4+Jyk7XHJcbiAgICAgICAgJChcIi5wcm9ncmVzcy1iYXJcIikuY3NzKFwid2lkdGhcIiwgcHJvZ3Jlc3MgKyBcIiVcIikuYXR0cignYXJpYS12YWx1ZW5vdycsIHByb2dyZXNzKTtcclxuICAgICAgICBpZiAoZGF0YS5jdXJyZW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IDEuNTtcclxuICAgICAgICAgICAgJChcIi5idXR0b24tZmFsc2VcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAkKFwiLnByb2dyZXNzLWJhclwiKS5jc3MoXCJ3aWR0aFwiLCBwcm9ncmVzcyArIFwiJVwiKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAkKCcuc3Itb25seScpLmh0bWwoJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtdGV4dFwiPiDQn9GA0L7QudC00LXQvdC+OiAnICsgJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtcHJvY2VudFwiPicgKyAocHJvZ3Jlc3MgLSBwcm9ncmVzcykgKyAnJScgKyAnPC9zcGFuPiA8L3NwYW4+Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmN1cnJlbnRJbmRleCA9PSBkYXRhLnRvdGFsU3RlcHMgLSAxKSB7XHJcbiAgICAgICAgICAgICQoXCIucHJvZ3Jlc3NcIikuY3NzKFwibWFyZ2luXCIsIFwiMzVweCAwIDM1cHhcIik7XHJcbiAgICAgICAgICAgICQoXCIucHJvZ3Jlc3MtYmFyXCIpLmNzcyhcIndpZHRoXCIsIHByb2dyZXNzICsgXCIlXCIpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICQoJy5zci1vbmx5JykuaHRtbCgnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy10ZXh0XCI+INCf0YDQvtC50LTQtdC90L46ICcgKyAnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy1wcm9jZW50XCI+JyArIChwcm9ncmVzcykgKyAnJScgKyAnPC9zcGFuPiA8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgICQoXCIucHJvZ3Jlc3Mtd3JhcFwiKS5pbnNlcnRCZWZvcmUoXCIubXNmLWNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWxcIikuY3NzKFwibWF4LXdpZHRoXCIsIFwiNjAwcHhcIik7XHJcbiAgICAgICAgICAgICQoXCIucHJvZ3Jlc3Mtd3JhcFwiKS5jc3MoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgICAgICAgICAgICQoXCIubXNmLW5hdi1idXR0b25bZGF0YS10eXBlPWJhY2tdIFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgJChcIi5tc2YtbmF2aWdhdGlvblwiKS5jc3MoXCJtYXJnaW5cIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA1NzYpIHtcclxuICAgICAgICAgICAgICAgICQoXCIubW9kYWxcIikuY3NzKFwicGFkZGluZ1wiLCBcIjI1cHggMTVweCAxMTBweFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIubW9kYWxcIikuY3NzKFwicGFkZGluZ1wiLCBcIiA0MHB4IDM1cHhcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIucHJvZ3Jlc3Mtd3JhcFwiKS5pbnNlcnRBZnRlcihcIi5tc2YtbmF2aWdhdGlvblwiKTtcclxuICAgIHZhciBwcm9ncmVzcyA9IDEuNTtcclxuICAgICQoXCIucHJvZ3Jlc3MtYmFyXCIpLmNzcyhcIndpZHRoXCIsIHByb2dyZXNzICsgXCIlXCIpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwcm9ncmVzcyk7XHJcbiAgICAkKCcuc3Itb25seScpLmh0bWwoJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtdGV4dFwiPiDQn9GA0L7QudC00LXQvdC+OiAnICsgJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtcHJvY2VudFwiPicgKyAocHJvZ3Jlc3MgLSBwcm9ncmVzcykgKyAnJScgKyAnPC9zcGFuPiA8L3NwYW4+Jyk7XHJcbiAgIFxyXG4gICAgJChcIi5idG4tb3ZlcmxheSBidXR0b25cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi53cmFwcGVyXCIpLmZhZGVJbignc2xvdycpO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gJChcIi53cmFwcGVyXCIpO1xyXG4gICAgICAgIGlmIChjb250YWluZXIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoJy5tb2RhbF9fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcud3JhcHBlcicpLmZhZGVUb2dnbGUoJ3Nsb3cnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnRoYW5rcy1tb2RhbF9fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcudGhhbmtzJykuZmFkZVRvZ2dsZSgnc2xvdycpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLVBPUFVQLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgJCgnLmJ1dHRvbi1wbGF5JykubWFnbmlmaWNQb3B1cCh7XHJcbiAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj01alREcHo3T1hENCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICdpZnJhbWUnLFxyXG4gICAgICAgIGlmcmFtZToge1xyXG4gICAgICAgICAgICBtYXJrdXA6ICc8ZGl2IGNsYXNzPVwibWZwLWlmcmFtZS1zY2FsZXJcIj4nICsgJzxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj4nICsgJzxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicgKyAnPC9kaXY+JyxcclxuICAgICAgICAgICAgcGF0dGVybnM6IHtcclxuICAgICAgICAgICAgICAgIHlvdXR1YmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogJ3lvdXR1YmUuY29tLycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICd2PScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJWlkJT9hdXRvcGxheT0xJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzcmNBY3Rpb246ICdpZnJhbWVfc3JjJyxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=