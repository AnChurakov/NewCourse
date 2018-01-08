$(document).ready(function() {
  // Полная дичь
  var menu = {
    button: $(".js-toggle-menu"),
    links: $(".js-link"),
    open: function() {
      var stepDelay = 100;
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
                  stepDelay + key * 10
                );
              }
            }
          );
          if (key == menu.links.length) {
            stepDelay = 0;
          }
          menu.links.eq(key).addClass("menu__link--show");
        }
      });
      menu.button.addClass("menu--opened");
    },
    close: function() {
      var stepDelay = 100;
      menu.links.each(function(key) {
        if (menu.links.eq(key).hasClass("menu__link--show")) {
          menu.links.eq(key).animate(
            {
              left: "-120px"
            },
            {
              duration: 100,
              step: function() {
                menu.links.eq(key).animate(
                  {
                    opacity: "0"
                  },
                  stepDelay + key * 10
                );
              }
            }
          );
          if (key == menu.links.length) {
            stepDelay = 0;
          }
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
});
