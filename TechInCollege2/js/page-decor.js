$(document).ready(function() {
    

    // Только для скроллинга
    (function(){
        $.scrollify({
            section: ".page__main",
            sectionName: "",
            scrollSpeed: 2000,
            scrollbars: false,
			touchScroll: true,
        });
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
        setInterval(function(){
            $(".down-arrow__shape").eq(0).animate({
                top: "-=10px",
            }, 1000, function() {
                $(".down-arrow__shape").eq(0).animate({
                    top: "0",
                }, 1000);
            });
        }, 2000);
        $(".down-arrow__shape").eq(0).click(function(){
            $.scrollify.next();
        });
        $(".links-area__plus-button-tooltip").click(function(){
            var slideNumber = $(this).data("slide");
            $.scrollify.move(slideNumber);
        });
    }());

});