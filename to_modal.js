/* Documentation, source code: https://github.com/bkzl/toModal */

(function($) {
  $.fn.toModal = function(options) {

    var settings = {
      opacity: '0.85',
      zIndex: 100,
      showOnLoad: false,
      openElement: ".toModalOpen",
      closeElement: ".toModalClose",
      overlayElementId: "toModalOverlay"
    };

    return this.each(function() {

      if (options) {
        $.extend(settings, options);
      }

      var popup = $(this);
      var overlay = $('<div id="' + settings.overlayElementId + '" />').prependTo('body');
      var modal = [popup, overlay];

      var isDisplay = function() {
        return (settings.showOnLoad) ? 'block' : 'none';
      }

      overlay.css({
        zIndex: settings.zIndex,
        backgroundColor: '#000',
        opacity: settings.opacity,
        position: 'fixed',
        top: 0, right: 0, bottom: 0, left: 0,
        display: isDisplay
      });

      popup.css({
        zIndex: settings.zIndex += 1,
        marginTop: -(popup.height() / 2),
        marginLeft: -(popup.width() / 2),
        position: 'fixed',
        top: '50%', left: '50%',
        display: isDisplay
      });

      $(settings.openElement).click(function() {
        $.each(modal, function() {this.show()});
        return false;
      });

      $(settings.closeElement).click(function() {
        $.each(modal, function() {this.hide()});
        return false;
      });


    });
  };
})( jQuery );
