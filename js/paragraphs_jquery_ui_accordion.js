/**
 * @file
 * Paragraphs accordion script.
 */

(function ($) {
  Backdrop.behaviors.paragraphs_jquery_ui_accordion = {
    attach: function (context, settings) {
    $('.para-jq-acc', context).each(function (id) {
        var accordion_id = $(this).attr('id');
        var autoscroll = Backdrop.settings.paragraphs_jquery_ui_accordion.autoscroll;
        var startclosed = Backdrop.settings.paragraphs_jquery_ui_accordion.startclosed;
        if (window.location.hash) {
          var activeParagraph = false;
        } else {
          if (startclosed) {
            var activeParagraph = false;
          } else {
            var activeParagraph = 0;
          }
        }

        $('#' + accordion_id, context).accordion({
          active: activeParagraph,
          collapsible: true,
          animated: 'slide',
          autoHeight: false,
          navigation: true,
          heightStyle: "content"
        });

        $(accordion_id, context).on("accordionactivate", function (event, ui) {
          var newHash = $(ui.newHeader).find('a').attr('href');
          changeHash(newHash, autoscroll);
        });
        // Open content that matches the hash.
        $( window ).on('hashchange', function() {
          activateParagraph(accordion_id);
        }).trigger('hashchange');
      });

      function changeHash(newHash, autoscroll) {
        if (newHash !== 'undefined' && newHash) {
          var target = $(newHash);
          if (autoscroll === 1) {
            setTimeout(function() {
              $('html, body').animate({
                scrollTop: target.offset().top - 50
              }, 250);
            }, 310); // Ensure the collapse animation is done.
          }
          return false;
        }
      }

      /**
       * Helper function for activation accordion paragraphs from hash.
       *
       * @param accordion_id
       */
      function activateParagraph(accordion_id) {
        var hash = window.location.hash;
        if (hash) {
          var thash = hash.substring(hash.lastIndexOf('#'), hash.length);
          var paragraph = $(accordion_id).find('a[href*="+ thash + "]').closest('h3');
          if (!$(paragraph).hasClass("ui-state-active")) {
            $(paragraph).trigger('click');
          }
        }
      }
    }
  };
}(jQuery));
