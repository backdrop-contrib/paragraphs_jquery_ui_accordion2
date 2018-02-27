/**
 * @file
 * Paragraphs accordion script
 */

(function ($) {
  Drupal.behaviors.paragraphs_jquery_ui_accordion = {
    attach: function (context, settings) {
      var accordion_id = '#' + Drupal.settings.paragraphs_jquery_ui_accordion.id;
      var autoscroll = Drupal.settings.paragraphs_jquery_ui_accordion.autoscroll;

      if (window.location.hash) {
        var activeParagraph = false;
      } else {
        var activeParagraph = 0;
      }

      $(accordion_id, context).accordion({
        active: activeParagraph,
        collapsible: true,
        animated: 'slide',
        autoHeight: false,
        navigation: true,
        heightStyle: "content"
      });

      $(accordion_id, context).on( "accordionactivate", function( event, ui ) {
        var newHash = $(ui.newHeader).find('a').attr('href');
        changeHash(newHash);
      });

      // open content that matches the hash
      $( window ).on('hashchange', function() {
        activateParagraph(accordion_id);
      }).trigger('hashchange');

      function changeHash(newHash) {
        if (newHash !== 'undefined' && newHash) {
          var target = $(newHash);
          if (autoscroll === 1) {
            $('html, body').animate({
              scrollTop: target.offset().top - 50
            }, 250);
          }
          return false;
        }
      }

      function activateParagraph(accordion_id) {
        var hash = window.location.hash;
        if (hash) {
          var thash = hash.substring(hash.lastIndexOf('#'), hash.length);
          var paragraph = $(accordion_id).find('a[href*='+ thash + ']').closest('h3');
          if (!$(paragraph).hasClass("ui-state-active")) {
            $(paragraph).trigger('click');
          }
        }
      }
    }
  };
}(jQuery));