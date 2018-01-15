$(document).ready(function() {
  var menu = {
    button: $(".js-toggle-menu"),
    links: $(".js-link"),
    open: function() {
      menu.links.each(function(key) {
        if (!menu.links.eq(key).hasClass("menu__link--show")) {
          menu.links
            .eq(key)
            .parent()
            .animate(
              {
                opacity: "1"
              },
              {
                duration: 100,
                step: function() {
                  menu.links
                    .eq(key)
                    .stop()
                    .animate(
                      {
                        right: "-300px"
                      },
                      parseInt(key + "00", 10) + 250
                    );
                }
              }
            );
          menu.links.eq(key).addClass("menu__link--show");
        }
      });
      menu.button.addClass("menu--opened");
    },
    close: function() {
      menu.links.each(function(key) {
        if (menu.links.eq(key).hasClass("menu__link--show")) {
          menu.links.eq(key).removeClass("menu__link--show");
          menu.links
            .eq(key)
            .parent()
            .animate(
              {
                opacity: "1"
              },
              {
                duration: 100,
                step: function() {
                  menu.links
                    .eq(key)
                    .stop()
                    .animate(
                      {
                        right: "0"
                      },
                      parseInt(key + "00", 10) + 250
                    );
                }
              }
            );
        }
      });
      menu.button.removeClass("menu--opened");
    }
  };
  // Events
  menu.button.click(function() {
    if (menu.button.hasClass("menu--opened")) {
      menu.close();
    } else {
      menu.open();
    }
  });
  // Костыльный аккордеон
  $(".js-open-spec").click(function() {
    if (
      $(this)
        .parent()
        .hasClass("spec__part--show-content")
    ) {
      $(this)
        .parent()
        .removeClass("spec__part--show-content");
      $(this)
        .parent()
        .find(".spec__content")
        .slideUp(500);
      $(this)
        .find(".spec__lever-arrow")
        .removeClass("spec__lever-arrow--opened");
    } else {
      $(".spec__part").each(function(num) {
        if (
          $(".spec__part")
            .eq(num)
            .hasClass("spec__part--show-content")
        ) {
          $(".spec__part")
            .eq(num)
            .removeClass("spec__part--show-content");
          $(".spec__part")
            .eq(num)
            .find(".spec__content")
            .slideUp(500);
          $(".spec__part")
            .eq(num)
            .find(".spec__lever-arrow")
            .removeClass("spec__lever-arrow--opened");
        }
      });
      $(this)
        .parent()
        .addClass("spec__part--show-content");
      $(this)
        .parent()
        .find(".spec__content")
        .slideDown(500);
      $(this)
        .find(".spec__lever-arrow")
        .addClass("spec__lever-arrow--opened");
    }
  });
  // Костыльные табы
  $(".js-open-second-tab").click(function() {
    $(this)
      .parent()
      .parent()
      .find(".spec__tabs")
      .find(".spec__tab")
      .eq(0)
      .addClass("spec__tab--selected");
    $(this)
      .parent()
      .parent()
      .find(".spec__tabs")
      .find(".spec__tab")
      .eq(1)
      .removeClass("spec__tab--selected");
  });
  $(".js-open-third-tab").click(function() {
    $(this)
      .parent()
      .parent()
      .find(".spec__tabs")
      .find(".spec__tab")
      .eq(0)
      .removeClass("spec__tab--selected");
    $(this)
      .parent()
      .parent()
      .find(".spec__tabs")
      .find(".spec__tab")
      .eq(1)
      .addClass("spec__tab--selected");
  });

  $(".conditions__button")
    .eq(0)
    .hide();
  $("#c_pers_info").click(function() {
    if ($("#c_pers_info").is(":checked")) {
      $(".conditions__button")
        .eq(0)
        .show();
    } else {
      $(".conditions__button")
        .eq(0)
        .hide();
    }
  });

  //скролл к блокам

  $("#main").click(function() {
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $(".header__head").offset().top - 75 },
        2000,
        function() {
          if ($(".js-scroll-top").offset().top == $(window).height()) {
            $(".js-scroll-top")
              .stop()
              .animate(
                {
                  bottom: "-75px"
                },
                500
              );
          }
        }
      );
  });

  $("#info").click(function() {
    $("html, body").animate({ scrollTop: $(".info").offset().top - 50 }, 1500);
  });

  $("#spec").click(function() {
    $("html, body").animate({ scrollTop: $(".spec").offset().top - 50 }, 1500);
  });

  $(".js-scroll-to-conditions").click(function() {
    $("html, body").animate(
      { scrollTop: $(".conditions").offset().top - 50 },
      1500
    );
  });

  $("#contact").click(function() {
    $("html, body").animate(
      { scrollTop: $(".contacts").offset().top - 50 },
      1500
    );
  });

  //Кнопка подробнее

  $("#next").hide();

  $("#btn-next").click(function() {
    if (!$("#next").hasClass("active")) {
      $("#next")
        .slideDown(500)
        .addClass("active");
      $("#btn-next").text("Скрыть");
    } else {
      $("#next")
        .slideUp(500)
        .removeClass("active");
      $("#btn-next").text("Подробнее");
    }
  });

  // Кнопка наверх
  $(window).scroll(function() {
    if ($(".js-scroll-top").offset().top > $(window).height()) {
      $(".js-scroll-top")
        .stop()
        .animate(
          {
            bottom: "0"
          },
          500
        );
    } else {
      $(".js-scroll-top")
        .stop()
        .animate(
          {
            bottom: "-75px"
          },
          200
        );
    }
  });
  $(".js-scroll-top")
    .eq(0)
    .click(function() {
      $("html, body").animate(
        { scrollTop: $(".page").offset().top - 75 },
        1500,
        function() {
          if ($(".js-scroll-top").offset().top == $(window).height()) {
            $(".js-scroll-top")
              .stop()
              .animate(
                {
                  bottom: "-75px"
                },
                500
              );
          }
        }
      );
    });
  $("html").on("click", function(e) {
    if (
      !$(e.target).closest(".js-toggle-menu").length &&
      menu.button.hasClass("menu--opened")
    ) {
      menu.close();
    }
  });
});

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