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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJzY3JlZW4iLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJnbGlkZSIsIkdsaWRlIiwidHlwZSIsImZvY3VzQXQiLCJtb3VudCIsInVuZGVmaW5lZCIsInBlclZpZXciLCJvbiIsImdsaWRlQWN0aXZlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaG92ZXJwYXVzZSIsImVuYWJsZSIsInBlZWsiLCJicmVha3BvaW50cyIsImJlZm9yZSIsImFmdGVyIiwic2libGluZ3MiLCJjaGlsZHJlbiIsImNoaWxkIiwicGFyZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZCIsInBhcmVudEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsIm1hc2siLCJlYWNoIiwidmFsaWRhdGUiLCJydWxlcyIsInBlb3BsZSIsInBob25lIiwicGhvbmVDb25zdWx0IiwiY2hlY2tNb2RhbDIiLCJjYWxsQ2hlY2siLCJtZXNzYWdlcyIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtIiwiY2l0eSIsInZhbCIsIm9yZGVyIiwiZm9vZCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwic2VyaWFsaXplIiwiZG9uZSIsImZhZGVJbiIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJlbGVtZW50IiwiYXR0ciIsIm5leHQiLCJhcHBlbmQiLCJpbnNlcnRBZnRlciIsIm11bHRpU3RlcEZvcm0iLCJhY3RpdmVJbmRleCIsImhpZGVCYWNrQnV0dG9uIiwiYWxsb3dVbnZhbGlkYXRlZFN0ZXAiLCJhbGxvd0NsaWNrTmF2aWdhdGlvbiIsInByZXZQcm9ncmVzcyIsInByb2dyZXNzIiwiaXNSZXNpemVibGUiLCJldmVudCIsIk1hdGgiLCJyb3VuZCIsImN1cnJlbnRJbmRleCIsInRvdGFsU3RlcHMiLCJjc3MiLCJodG1sIiwibW91c2V1cCIsImNvbnRhaW5lciIsImhhcyIsInRhcmdldCIsImxlbmd0aCIsImhpZGUiLCJmYWRlVG9nZ2xlIiwibWFnbmlmaWNQb3B1cCIsIml0ZW1zIiwic3JjIiwiaWZyYW1lIiwibWFya3VwIiwicGF0dGVybnMiLCJ5b3V0dWJlIiwiaW5kZXgiLCJpZCIsInNyY0FjdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQSxFQUFFLFlBQVc7O0FBRVQ7O0FBRUFBLE1BQUUsc0JBQUYsRUFBMEJDLEtBQTFCLENBQWdDLFVBQVNDLENBQVQsRUFBWTtBQUN4Q0EsVUFBRUMsY0FBRjtBQUNBSCxVQUFFLGNBQUYsRUFBa0JJLFdBQWxCO0FBQ0FKLFVBQUUsSUFBRixFQUFRSyxXQUFSLENBQW9CLE1BQXBCO0FBQ0gsS0FKRDs7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QTs7QUFFQXhGLE1BQUUsY0FBRixFQUFrQnlGLGFBQWxCLENBQWdDO0FBQzVCQyxlQUFPO0FBQ0hDLGlCQUFLO0FBREYsU0FEcUI7QUFJNUIvRSxjQUFNLFFBSnNCO0FBSzVCZ0YsZ0JBQVE7QUFDSkMsb0JBQVEsb0NBQW9DLCtCQUFwQyxHQUFzRSxzRUFBdEUsR0FBK0ksUUFEbko7QUFFSkMsc0JBQVU7QUFDTkMseUJBQVM7QUFDTEMsMkJBQU8sY0FERjtBQUVMQyx3QkFBSSxJQUZDO0FBR0xOLHlCQUFLO0FBSEE7QUFESCxhQUZOO0FBU0pPLHVCQUFXO0FBVFA7QUFMb0IsS0FBaEM7QUFpQkgsQ0EzT0QsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3MvaW5kZXguanNcIik7XG4iLCIkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLU1PQklMRU1FTlUtLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICAkKCcubW9iaWxlLW1lbnVfX3RvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLm1vYmlsZS1tZW51Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS1TTElERVJTLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCkge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLmFkdmFudGFnZXMnLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzbGlkZXInLFxyXG4gICAgICAgICAgICBmb2N1c0F0OiAnY2VudGVyJyxcclxuICAgICAgICB9KS5tb3VudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8IDc2OCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLmtpdGNoZW4tbWVudV9fZGF5LW5hdicsIHtcclxuICAgICAgICAgICAgdHlwZTogJ3NsaWRlcicsXHJcbiAgICAgICAgICAgIGZvY3VzQXQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwZXJWaWV3OiAxXHJcbiAgICAgICAgfSkubW91bnQoKTtcclxuICAgICAgICBnbGlkZS5vbigncnVuLmFmdGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBnbGlkZUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5raXRjaGVuLW1lbnVfX3RhYnMgLmdsaWRlX19zbGlkZS0tYWN0aXZlID4gYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGdsaWRlQWN0aXZlLmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2xpZGUub24oJ3J1bi5iZWZvcmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGdsaWRlQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtpdGNoZW4tbWVudV9fdGFicyAuZ2xpZGVfX3NsaWRlLS1hY3RpdmUgPiBidXR0b24nKTtcclxuICAgICAgICAgICAgZ2xpZGVBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID49IDc2OCAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDEwMjQpIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5wYWNrYWdlc19faXRlbXMtd3JhcCcsIHtcclxuICAgICAgICAgICAgdHlwZTogJ3NsaWRlcicsXHJcbiAgICAgICAgICAgIGhvdmVycGF1c2U6IHRydWUsXHJcbiAgICAgICAgICAgIHBlclZpZXc6IDNcclxuICAgICAgICB9KS5tb3VudCgpO1xyXG4gICAgICAgIGdsaWRlLmVuYWJsZSgpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID49IDEwMjQpIHtcclxuICAgICAgICBsZXQgZ2xpZGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNzY4KSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgbGV0IGdsaWRlID0gbmV3IEdsaWRlKCcuc2xpZGVyJywge1xyXG4gICAgICAgIHR5cGU6ICdjYXJvdXNlbCcsXHJcbiAgICAgICAgaG92ZXJwYXVzZTogdHJ1ZSxcclxuICAgICAgICBwZWVrOiAzNTAsXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICBwZWVrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICAgICAgICBwZWVrOiA1MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxNDAwOiB7XHJcbiAgICAgICAgICAgICAgICBwZWVrOiAyMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pLm1vdW50KCk7XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8IDc2OCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLnJldmlld3NfX3ZpZGVvJywge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2FydXNlbCcsXHJcbiAgICAgICAgICAgIGhvdmVycGF1c2U6IHRydWUsXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICA1NzY6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBlclZpZXc6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA3Njg6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBlclZpZXc6IDNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLm1vdW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDwgNzY4ICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgbGV0IGdsaWRlID0gbmV3IEdsaWRlKCcuZmFxX19pdGVtcycsIHtcclxuICAgICAgICAgICAgdHlwZTogJ3NsaWRlcicsXHJcbiAgICAgICAgICAgIGZvY3VzQXQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBwZXJWaWV3OiAxXHJcbiAgICAgICAgfSkubW91bnQoKTtcclxuICAgICAgICBnbGlkZS5vbigncnVuLmFmdGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBnbGlkZUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXFfX2l0ZW1zIC5nbGlkZV9fc2xpZGUtLWFjdGl2ZSA+IGJ1dHRvbicpO1xyXG4gICAgICAgICAgICBnbGlkZUFjdGl2ZS5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdsaWRlLm9uKCdydW4uYmVmb3JlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBnbGlkZUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXFfX2l0ZW1zICAuZ2xpZGVfX3NsaWRlLS1hY3RpdmUgPiBidXR0b24nKTtcclxuICAgICAgICAgICAgZ2xpZGVBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBnbGlkZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgICQoJy5mYXFfX3F1ZXN0aW9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmZhcV9fYW5zd2VyJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdzcGFuJykudG9nZ2xlQ2xhc3MoJ3JvdGF0ZS1hcnJvdycpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+PSA3NjggJiYgd2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XHJcbiAgICAgICAgdmFyIGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkdmFudGFnZXMnKTtcclxuICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICAgICAgY2hpbGQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUocGFyZW50LCBjaGlsZCk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS1WQUxJREFURS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgICQoJ2lucHV0W25hbWU9cGhvbmVdLCAuY29uc3VsdC1mb3JtX190ZWwnKS5tYXNrKFwiKzcoOTk5KSA5OTktOTktOTlcIik7XHJcblxyXG4gICAgJChcIi52YWxpZGF0ZS1mb3JtIFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykudmFsaWRhdGUoe1xyXG4gICAgICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZTogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgcGhvbmVDb25zdWx0OiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICBjaGVja01vZGFsMjogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgY2FsbENoZWNrOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGU6IFwi0J3RgyDRhdC+0YLRjCDRgdC60L7Qu9GM0LrQviDRgtC+INC00L7Qu9C20L3QviDQsdGL0YLRjCDRh9C10LvQvtCy0LXQulwiLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IFwi0JzQvdC1INC90YPQttC10L0g0YLQstC+0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbiAgICAgICAgICAgICAgICBjaGVja01vZGFsMjogXCJcIixcclxuICAgICAgICAgICAgICAgIHBob25lQ29uc3VsdDogXCJcIixcclxuICAgICAgICAgICAgICAgIGNhbGxDaGVjazogXCJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VibWl0SGFuZGxlcjogZnVuY3Rpb24oZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNpdHkgPSAkKFwiaW5wdXRbbmFtZT0nY2l0eSddOmNoZWNrZWRcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXIgPSAkKFwiaW5wdXRbbmFtZT0nb3JkZXInXTpjaGVja2VkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvb2QgPSAkKFwiaW5wdXRbbmFtZT0nZm9vZCddOmNoZWNrZWRcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvbWFpbGVyL3NtYXJ0LnBocFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6ICQoZm9ybSkuc2VyaWFsaXplKCkgKyBcIiZjaXR5PVwiICsgY2l0eSArIFwiJm9yZGVyPVwiICsgb3JkZXIgKyBcIiZmb29kPVwiICsgZm9vZCwgXHJcbiAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGFua3MnKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvclBsYWNlbWVudDogZnVuY3Rpb24oZXJyb3IsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmF0dHIoXCJ0eXBlXCIpID09IFwiY2hlY2tib3hcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm5leHQoJ2xhYmVsJykuYXBwZW5kKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKCQoZWxlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS1NT0RBTC0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgXHJcbiAgICAkKFwiLm1zZjpmaXJzdFwiKS5tdWx0aVN0ZXBGb3JtKHtcclxuICAgICAgICBhY3RpdmVJbmRleDogMCxcclxuICAgICAgICBoaWRlQmFja0J1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgYWxsb3dVbnZhbGlkYXRlZFN0ZXA6IGZhbHNlLFxyXG4gICAgICAgIGFsbG93Q2xpY2tOYXZpZ2F0aW9uOiBmYWxzZSxcclxuICAgICAgICB2YWxpZGF0ZToge30sXHJcbiAgICB9KTtcclxuICAgIHZhciBwcmV2UHJvZ3Jlc3MsXHJcbiAgICAgICAgcHJvZ3Jlc3M7XHJcbiAgICB2YXIgaXNSZXNpemVibGUgPSBmYWxzZTtcclxuICAgICQoJy5tc2YnKS5vbihcIm1zZjp2aWV3Q2hhbmdlZFwiLCBmdW5jdGlvbihldmVudCwgZGF0YSkge1xyXG4gICAgICAgIHByb2dyZXNzID0gTWF0aC5yb3VuZCgoZGF0YS5jdXJyZW50SW5kZXggLyAoZGF0YS50b3RhbFN0ZXBzIC0gMSkpICogMTAwKTtcclxuICAgICAgICAkKFwiLnByb2dyZXNzXCIpLmNzcyhcIm1hcmdpblwiLCBcIjBcIik7XHJcbiAgICAgICAgJChcIi5idXR0b24tZmFsc2VcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJCgnLnNyLW9ubHknKS5odG1sKCc8c3BhbiBjbGFzcz1cInByb2dyZXNzLXRleHRcIj4g0J/RgNC+0LnQtNC10L3QvjogJyArICc8c3BhbiBjbGFzcz1cInByb2dyZXNzLXByb2NlbnRcIj4nICsgKHByb2dyZXNzKSArICclJyArICc8L3NwYW4+IDwvc3Bhbj4nKTtcclxuICAgICAgICAkKFwiLnByb2dyZXNzLWJhclwiKS5jc3MoXCJ3aWR0aFwiLCBwcm9ncmVzcyArIFwiJVwiKS5hdHRyKCdhcmlhLXZhbHVlbm93JywgcHJvZ3Jlc3MpO1xyXG4gICAgICAgIGlmIChkYXRhLmN1cnJlbnRJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gMS41O1xyXG4gICAgICAgICAgICAkKFwiLmJ1dHRvbi1mYWxzZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICQoXCIucHJvZ3Jlc3MtYmFyXCIpLmNzcyhcIndpZHRoXCIsIHByb2dyZXNzICsgXCIlXCIpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICQoJy5zci1vbmx5JykuaHRtbCgnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy10ZXh0XCI+INCf0YDQvtC50LTQtdC90L46ICcgKyAnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy1wcm9jZW50XCI+JyArIChwcm9ncmVzcyAtIHByb2dyZXNzKSArICclJyArICc8L3NwYW4+IDwvc3Bhbj4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY3VycmVudEluZGV4ID09IGRhdGEudG90YWxTdGVwcyAtIDEpIHtcclxuICAgICAgICAgICAgJChcIi5wcm9ncmVzc1wiKS5jc3MoXCJtYXJnaW5cIiwgXCIzNXB4IDAgMzVweFwiKTtcclxuICAgICAgICAgICAgJChcIi5wcm9ncmVzcy1iYXJcIikuY3NzKFwid2lkdGhcIiwgcHJvZ3Jlc3MgKyBcIiVcIikuYXR0cignYXJpYS12YWx1ZW5vdycsIHByb2dyZXNzKTtcclxuICAgICAgICAgICAgJCgnLnNyLW9ubHknKS5odG1sKCc8c3BhbiBjbGFzcz1cInByb2dyZXNzLXRleHRcIj4g0J/RgNC+0LnQtNC10L3QvjogJyArICc8c3BhbiBjbGFzcz1cInByb2dyZXNzLXByb2NlbnRcIj4nICsgKHByb2dyZXNzKSArICclJyArICc8L3NwYW4+IDwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgJChcIi5wcm9ncmVzcy13cmFwXCIpLmluc2VydEJlZm9yZShcIi5tc2YtY29udGVudFwiKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNTc2ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDU3Nikge1xyXG4gICAgICAgICAgICAgICAgJChcIi5tb2RhbFwiKS5jc3MoXCJwYWRkaW5nXCIsIFwiMjVweCAxNXB4IDExMHB4XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIi5tb2RhbFwiKS5jc3MoXCJwYWRkaW5nXCIsIFwiIDQwcHggMzVweFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiLm1vZGFsXCIpLmNzcyhcIm1heC13aWR0aFwiLCBcIjYwMHB4XCIpO1xyXG4gICAgICAgICAgICAkKFwiLnByb2dyZXNzLXdyYXBcIikuY3NzKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLm1zZi1uYXYtYnV0dG9uW2RhdGEtdHlwZT1iYWNrXSBcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICQoXCIubXNmLW5hdmlnYXRpb25cIikuY3NzKFwibWFyZ2luXCIsIFwiMFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIucHJvZ3Jlc3Mtd3JhcFwiKS5pbnNlcnRBZnRlcihcIi5tc2YtbmF2aWdhdGlvblwiKTtcclxuICAgIHZhciBwcm9ncmVzcyA9IDEuNTtcclxuICAgICQoXCIucHJvZ3Jlc3MtYmFyXCIpLmNzcyhcIndpZHRoXCIsIHByb2dyZXNzICsgXCIlXCIpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwcm9ncmVzcyk7XHJcbiAgICAkKCcuc3Itb25seScpLmh0bWwoJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtdGV4dFwiPiDQn9GA0L7QudC00LXQvdC+OiAnICsgJzxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtcHJvY2VudFwiPicgKyAocHJvZ3Jlc3MgLSBwcm9ncmVzcykgKyAnJScgKyAnPC9zcGFuPiA8L3NwYW4+Jyk7XHJcbiAgIFxyXG4gICAgJChcIi5idG4tb3ZlcmxheSBidXR0b25cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi53cmFwcGVyXCIpLmZhZGVJbignc2xvdycpO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gJChcIi53cmFwcGVyXCIpO1xyXG4gICAgICAgIGlmIChjb250YWluZXIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoJy5tb2RhbF9fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcud3JhcHBlcicpLmZhZGVUb2dnbGUoJ3Nsb3cnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnRoYW5rcy1tb2RhbF9fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcudGhhbmtzJykuZmFkZVRvZ2dsZSgnc2xvdycpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLVBPUFVQLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgJCgnLmJ1dHRvbi1wbGF5JykubWFnbmlmaWNQb3B1cCh7XHJcbiAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj01alREcHo3T1hENCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICdpZnJhbWUnLFxyXG4gICAgICAgIGlmcmFtZToge1xyXG4gICAgICAgICAgICBtYXJrdXA6ICc8ZGl2IGNsYXNzPVwibWZwLWlmcmFtZS1zY2FsZXJcIj4nICsgJzxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj4nICsgJzxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicgKyAnPC9kaXY+JyxcclxuICAgICAgICAgICAgcGF0dGVybnM6IHtcclxuICAgICAgICAgICAgICAgIHlvdXR1YmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogJ3lvdXR1YmUuY29tLycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICd2PScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJWlkJT9hdXRvcGxheT0xJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzcmNBY3Rpb246ICdpZnJhbWVfc3JjJyxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=