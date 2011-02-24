(function($) {
  $.fn.toModal = function(options) {

    // TODO: Add default settings
    // var settings = {
    // ...
    // };

    return this.each(function() {

      // if (options) {
      //   $.extend(settings, options);
      // }

      var popup = $(this);
      var overlay = $('<div id="toModalOverlay" />').prependTo('body');
      var modal = [popup, overlay];

      overlay.css({
        'z-index': 100,
        'background-color': '#000',
        'opacity': '0.85',
        'position': 'fixed',
        'top': 0, 'right': 0, 'bottom': 0, 'left': 0,
        'display': 'none'
      });

      popup.css({
        'z-index': 101,
        'margin-top': -(popup.height() / 2),
        'margin-left': -(popup.width() / 2),
        'position': 'fixed',
        'top': '50%', 'left': '50%',
        'display': 'none'
      });
      
      $(".toModalClose").click(function() {
        $.each(modal, function() {this.hide()});
      });
      
      $(".toModalOpen").click(function() {
        $.each(modal, function() {this.show()});
      });

    });
  };
})( jQuery );
