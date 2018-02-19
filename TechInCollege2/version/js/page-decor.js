$(document).ready(function() {
  // Только для скроллинга
  (function() {
    var currentSlide = 0;
    $(".full-page")
      .eq(0)
      .fullpage({
        css3: true,
        scrollingSpeed: 1000,
        keyboardScrolling: true,
        recordHistory: false,
        sectionSelector: ".page__main",
        slideSelector: ".slide",
        controlArrows: false,
        lazyLoading: true,
        afterLoad: function(anchorLink, index) {
          if (index == 1) {
            $(".page__navigation").hide();
            $(".page__arrow").hide();
          } else {
            $(".page__navigation").show();
            $(".page__arrow").show();
          }
          if (currentSlide == 0) {
            $(this)
              .parent()
              .parent()
              .parent()
              .find(".arrow-left")
              .hide();
          }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
          if (slideIndex == 0) {
            $(this)
              .parent()
              .parent()
              .parent()
              .find(".arrow-left")
              .hide();
            $(this)
              .parent()
              .parent()
              .parent()
              .find(".arrow-right")
              .show();
            if ((index + 1) % 2 == 0) {
              $(this)
                .parent()
                .parent()
                .parent()
                .find(".arrow-right")
                .removeClass("arrow-right-white");
            }
          } else if (slideIndex == 2) {
            $(this)
              .parent()
              .parent()
              .parent()
              .find(".arrow-left")
              .show();
            $(this)
              .parent()
              .parent()
              .parent()
              .find(".arrow-right")
              .hide();
          } else {
            $(this)
              .parent()
              .parent()
              .parent()
              .find(".arrow-left")
              .show();
            $(this)
              .parent()
              .parent()
              .parent()
              .find(".arrow-right")
              .show();
            if (
              !$(this)
                .parent()
                .parent()
                .parent()
                .find(".arrow-right")
                .hasClass("arrow-right-white")
            ) {
              $(this)
                .parent()
                .parent()
                .parent()
                .find(".arrow-right")
                .addClass("arrow-right-white");
            }
          }
          currentSlide = slideIndex;
        },
        onLeave: function(index, nextIndex, direction) {
          if (
            index == 2 &&
            $(".info-tech-modal-wrap").css("display") == "flex"
          ) {
            if (confirm("Точно точно точно покинуть слайд?")) {
              $(".info-tech-modal-wrap").hide();
              stopVideo();
            }
          }
        }
      });
  })();

  // --- YouTube Iframe API

  // ---

  // Переключение слайдов на специальностях
  (function() {
    $(".js-go-to-right").click(function() {
      $.fn.fullpage.moveSlideRight();
    });
    $(".js-go-to-left").click(function() {
      $.fn.fullpage.moveSlideLeft();
    });
  })();

  // Объект с пунктами меню
  var menuButtons = {
    _buttons: $(".menu__link"),
    _lines: $(".menu__line"),
    fallDown: function() {
      menuButtons._lines.each(function(num) {
        menuButtons._lines.eq(num).css({
          width: "0"
        });
      });
      menuButtons._buttons.each(function(num) {
        menuButtons._buttons.eq(num).css({
          top: "-100px",
          opacity: "0"
        });
      });
      menuButtons._buttons.each(function(num) {
        menuButtons._buttons.eq(num).animate(
          {
            top: num % 2 == 0 ? "+=100px" : "142px",
            opacity: ".9"
          },
          700,
          "linear",
          function() {
            menuButtons._lines.each(function(num) {
              menuButtons._lines.eq(num).animate(
                {
                  width: "245px"
                },
                1500
              );
            });
          }
        );
      });
    }
  };
  menuButtons.fallDown();

  // События
  (function() {
    /* setInterval(function(){
            $(".down-arrow__shape").eq(0).animate({
                top: "-=10px",
            }, 1000, function() {
                $(".down-arrow__shape").eq(0).animate({
                    top: "0",
                }, 1000);
            });
        }, 2000); */
   

   var btn = $("#btnSub").hide();
      //Отправка письма
        

        $("#personalInfo").on("click", function() {

        var name = $("#userName").val();
        var select = $("#specSelect").val();
        var selectStatus = $("#statusSelect").val();
        var tel = $("#contacts").val();
        var check = $("#personalInfo").val();

        if ($(this).is(":checked") && name != "" && tel != "")
        {
          btn.show();
          btn.click(function() {

              $.ajax({
            url:"mail.php",
            type:"POST",
            dataType:"text",
            data:"name="+name+"&select="+select+"&status="+selectStatus+"&tel="+tel,
            success:function(data)
            {
              alert(data);
            }

          });

          });
        
        }
        else{
          alert("Вы заполнили не все поля!");
        }


        });


    $(".down-arrow__shape")
      .eq(0)
      .click(function() {
        $.fn.fullpage.moveSectionDown();
      });
    $(".js-go-to-spec-slide").click(function() {
      var slideNumber = $(this).data("slide");
      $.fn.fullpage.moveTo(slideNumber + 1);
    });

    $(".js-go-to-top").click(function() {
      $.fn.fullpage.moveTo(1);
    });

    // Autoplay loop при наведении на "+"
    $(".js-link-hover").mouseenter(function() {
      $(this)
        .find(".js-link-video")
        .get(0)
        .play();
    });
    $(".js-link-hover").mouseleave(function() {
      $(this)
        .find(".js-link-video")
        .get(0)
        .pause();
    });

    // Запуск видео в модальном окне
    $(".js-open-video-modal").click(function() {
      $(".info-tech-modal-wrap").css({
        display: "flex"
      });
    });
    $(".js-modal-overlay").click(function() {
      if (confirm("Закрыть видео?")) {
        $(".info-tech-modal-wrap").hide();
        stopVideo();
      }
    });

    // Куда идут ссылки из главного меню
    $(".js-go-to-info").click(function() {
      $.fn.fullpage.moveTo(2);
    });
    $(".js-go-to-main").click(function() {
      // К первому и главному слайду
      $.fn.fullpage.moveTo(1);
    });

    $(".js-go-to-spec").click(function() {
      // К первому слайду специальностей
      $.fn.fullpage.moveTo(3);
    });
    $(".js-go-to-entrance").click(function() {
      $.fn.fullpage.moveTo(13);
    });
    $(".js-go-to-contacts").click(function() {
      // К слайду с контактной информацией
      $.fn.fullpage.moveTo(14);
    });

    $(".admission").click(function() {
      //К слайду Условия поступления
      $.fn.fullpage.moveTo(13);
    });

    // Навигационное меню
    $(".js-nav-menu-toggle").on("click", function() {
      $(this)
        .parents(".navigation-menu")
        .toggleClass("navigation-menu--open");
    });

    $("html").on("click", function(e) {
      if (
        !$(e.target).closest(".js-nav-menu").length &&
        $(".js-nav-menu").hasClass("navigation-menu--open")
      ) {
        $(".js-nav-menu").removeClass("navigation-menu--open");
      }
    });
  })();
});