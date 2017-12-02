$(document).ready(function() {
    
    // Только для скроллинга
    (function(){
        $.scrollify({
            section: ".page__main",
            scrollSpeed: 1500,
            scrollbars: false,           
            touchScroll: true,
            before: function(){
                //if ($.scrollify.current().index() == 1) {
                    //$(".page__navigation").hide();
               // } else
				$(".page__navigation").show();
            },
            afterRender: function() {
                //if ($.scrollify.current().index() == 1) {
                    //$(".page__navigation").hide();
                //} else 
				$(".page__navigation").show();
            },
        });
    }());

    // Только для каруселей
    (function(){
        // Переключение пока что реализовано стрелками на клавиатуре
        $(".carousel").each(function(num){
            
            $(".carousel").eq(num).owlCarousel({
                items: 1,
                dots: false,
            });

            $(".js-go-to-who-work").click(function(){
                
            });
            $(".js-go-to-what-teach").click(function(){
                
            }); 
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
        /*setInterval(function(){
            $(".down-arrow__shape").eq(0).animate({
                top: "-=10px",
            }, 1000, function() {
                $(".down-arrow__shape").eq(0).animate({
                    top: "0",
                }, 1000);
            });
        }, 2000);*/

        //Отправка письма
        /* var btn = $("#btnSub").hide();
        var name = $("#userName").val();
        var select = $("#specSelect").val();
        var selectStatus = $("#statusSelect").val();
        var tel = $("#contacts").val();
        var check = $("#personalInfo").val();

        $("#personalInfo").blur(function() {

            if ($(this).is(":checked") && name != null && select != null && selectStatus != null && tel != null) {
                alert(1);
                btn.show();
            
                btn.click(function() {
                    $.ajax({
                        url: "mail.php",
                        dataType: "text",
                        type: "POST",
                        data: "name="+name+"&select="+select+"&selectStatus="+selectStatus+"&tel="+tel,
                        success: function(data) {
                            if (data != null) {
                                alert(data);
                            }                
                        }
                    });
                });     
            } else {
                alert("Вы заполнили не все поля!");
            }
        }); */
        $("#btnSub").hide();
        $("#personalInfo").click(function(){
            if ($("#personalInfo").is(":checked")) {
                $("#btnSub").show();
            } else {
                $("#btnSub").hide();
            }
        });

        $("#btnSub").click(function(){
            // TODO: Ajax
        });
			
        $(".down-arrow__shape").eq(0).click(function(){
            $.scrollify.next();
        });
        $(".links-area__plus-button-tooltip").click(function(){
            var slideNumber = $(this).data("slide");
            $.scrollify.move(slideNumber);
        });

        // Autoplay loop при наведении на "+"
        $(".js-link-hover").mouseenter(function(){
            $(this).find(".js-link-video").attr("autoplay", "");
            $(this).find(".js-link-video").attr("loop", "");
        });
        $(".js-link-hover").mouseleave(function(){
            $(this).find(".js-link-video").removeAttr("autoplay");
            $(this).find(".js-link-video").removeAttr("loop");
        });

        // Куда идут ссылки из главного меню
        $(".js-go-to-info").click(function(){
            $.scrollify.move(1);
        });
		$(".js-go-to-main").click(function(){
            // К первому и главному слайду
            $.scrollify.move(0);
        });
		
        $(".js-go-to-spec").click(function(){
            // К первому слайду специальностей
            $.scrollify.move(2);
        });
        $(".js-go-to-entrance").click(function(){
			$.scrollify.move(11);
        });
        $(".js-go-to-contacts").click(function(){
            // К слайду с контактной информацией
            $.scrollify.move(12);
        });
		
		$(".admission").click(function() {
			//К слайду Условия поступления
			$.scrollify.move(11);
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