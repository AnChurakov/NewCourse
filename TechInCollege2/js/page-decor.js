$(document).ready(function() {
    
    // Только для скроллинга
    (function(){
        $.scrollify({
            section: ".page__main",
            scrollSpeed: 1700,
            scrollbars: false,
            touchScroll: true,
            before: function(){
                if ($.scrollify.current().index() == 1) {
                    $(".page__navigation").hide();
                } else {
                    $(".page__navigation").show();
                }
            },
            afterRender: function() {
                if ($.scrollify.current().index() == 1) {
                    $(".page__navigation").hide();
                } else {
                    $(".page__navigation").show();
                }
            },
        });
    }());

    // Только для каруселей
    (function(){
        // TODO: карусель для горизонтальных слайдов
    }());

    // Объект с пунктами меню
    var menuButtons = {
        _buttons: $(".menu__link"),
        _lines: $(".menu__line"),
        fallDown: function() {
            menuButtons._lines.each(function(num) {
                menuButtons._lines.eq(num).css({
                    width: "0",
                });
            });
            menuButtons._buttons.each(function(num) {
                menuButtons._buttons.eq(num).css({
                    top: "-100px",
                    opacity: "0",
                });
            });
            menuButtons._buttons.each(function(num) {
                menuButtons._buttons.eq(num).animate({
                    top: num % 2 == 0 ? "+=100px" : "142px",
                    opacity: ".9",
                }, 700, "linear", function() {
                    menuButtons._lines.each(function(num) {
                        menuButtons._lines.eq(num).animate({
                            width: "245px",
                        }, 1500);
                    });
                });
            });
        },
    }
    menuButtons.fallDown();
    
    // События
    (function(){
        /*setInterval(function(){
            $(".down-arrow__shape").eq(0).animate({
                top: "-=10px",
            }, 1000, function() {
                $(".down-arrow__shape").eq(0).animate({
                    top: "0",
                }, 1000);
            });
        }, 2000);*/

        $(".down-arrow__shape").eq(0).click(function(){
            $.scrollify.next();
        });
        $(".links-area__plus-button-tooltip").click(function(){
            var slideNumber = $(this).data("slide");
            $.scrollify.move(slideNumber);
        });


        // Куда идут ссылки из главного меню
        $(".js-go-to-info").click(function(){
            
        });
		$(".js-go-to-glav").click(function(){
            // К первому и главному слайду
            $.scrollify.move(0);
        });
		
        $(".js-go-to-spec").click(function(){
            // К первому слайду специальностей
            $.scrollify.move(1);
        });
        $(".js-go-to-entrance").click(function(){

        });
        $(".js-go-to-contacts").click(function(){
            // К слайду с контактной информацией
            $.scrollify.move(10);
        });
		
		$("#admission").click(function() {
			
			//К слайду Условия поступления
			$.scrollify.move();
		
		});

        // Навигационное меню
        $('.js-nav-menu-toggle').on('click', function() {
            $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
        });
          
        $('html').on('click', function(e) {
            if(!$(e.target).closest('.js-nav-menu').length &&
              ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
                $('.js-nav-menu').removeClass('navigation-menu--open');
            }
        });

    }());

});