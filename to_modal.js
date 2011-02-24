(function($) {
  $.fn.toModal = function(type) {
    return this.each(function() {
      
      var $this = $(this);
      var overlay = $('<div id="toModalOverlay" />').prependTo('body');
      
      overlay.css({
        'z-index': 100,
        'background-color': '#000',
        'opacity': '0.85',
        'position': 'fixed',
        'top': 0, 'right': 0, 'bottom': 0, 'left': 0
      });
      
      $this.css({
        'z-index': 101,
        'margin-top': -($this.height() / 2),
        'margin-left': -($this.width() / 2),
        'position': 'fixed',
        'top': '50%', 'left': '50%'
      });

    });
  };
})( jQuery );