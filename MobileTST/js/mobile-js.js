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
  
  
  //Кнопка подробнее
  
  $("#next").hide();
  
  $("#btn-next").click(function() {
	
	$("#next").slideToggle("slow");
  
  }); 
});
