!function(){"use strict";var e=function(){$(".js-counter").countTo({formatter:function(e,t){return e.toFixed(t.decimals)}})};$(function(){$(".animate-box").waypoint(function(e){"down"!==e||$(this.element).hasClass("animated-fast")||($(this.element).addClass("item-animate"),setTimeout(function(){$("body .animate-box.item-animate").each(function(e){var t=$(this);setTimeout(function(){var e=t.data("animate-effect");"fadeIn"===e?t.addClass("fadeIn animated-fast"):"fadeInLeft"===e?t.addClass("fadeInLeft animated-fast"):"fadeInRight"===e?t.addClass("fadeInRight animated-fast"):t.addClass("fadeInUp animated-fast"),t.removeClass("item-animate")},200*e,"easeInOutExpo")})},100))},{offset:"85%"}),$(".js-gotop").on("click",function(e){return e.preventDefault(),$("html, body").animate({scrollTop:$("html").offset().top},500,"easeInOutExpo"),!1}),$(window).scroll(function(){$(window).scrollTop()>200?$(".js-top").addClass("active"):$(".js-top").removeClass("active")}),$(".fh5co-loader").fadeOut("slow"),e(),$("#fh5co-counter").length>0&&$("#fh5co-counter").waypoint(function(t){"down"!==t||$(this.element).hasClass("animated")||(setTimeout(e,400),$(this.element).addClass("animated"))},{offset:"90%"})}),$(".slick-slider").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,centerMode:!0,centerPadding:"60px",variableWidth:!0,lazyLoad:"ondemand",autoplay:!0,cssEase:"linear",responsive:[{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!1,dots:!1,centerMode:!1,centerPadding:"0",adaptiveHeight:!0}}]}),$(".slick-slider-wishes").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,lazyLoad:"ondemand",autoplay:!0,cssEase:"linear",arrows:!1,responsive:[{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".venobox").venobox()}();
