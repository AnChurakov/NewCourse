$(document).ready(function() {
  // Полная дичь
  var menu = {
    button: $(".js-toggle-menu"),
    links: $(".js-link"),
    open: function() {
      menu.links.each(function(key) {
        if (!menu.links.eq(key).hasClass("menu__link--show")) {
          menu.links.eq(key).animate(
            {
              opacity: "1"
            },
            {
              duration: 100,
              step: function() {
                menu.links.eq(key).animate(
                  {
                    left: "0"
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
          menu.links.eq(key).animate(
            {
              left: "-120px",
              opacity: "0"
            },
            90
          );
          menu.links.eq(key).removeClass("menu__link--show");
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
        }
      });
      $(this)
        .parent()
        .addClass("spec__part--show-content");
      $(this)
        .parent()
        .find(".spec__content")
        .slideDown(500);
    }
  });
});
