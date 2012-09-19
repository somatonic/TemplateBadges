/**
 * Tiny preset color-picker (minified < 1K)
 */
(function($) {
    var
        NAME = 'preset-picker',
        CHECKMARK = '&#10004;',
        COLORS = '#C00000,#FF0000,#FFC000,#92D050,#00B050,#00B0F0,#0070C0,#7030A0,#000000';

    $.fn.presetpicker = function(options) {
        $input = $(this);

        if (!$input.data(NAME)) {
            //$input.data(NAME, true).css('display', 'none');

            $div = $input.wrap('<div/>').parent().addClass(NAME);

            var colors = ($input.attr('data-colors') || COLORS).split(',');

            var _select = function($span) {
                $div.find('i').html('');
                $span.find('i').html(CHECKMARK);

                $input.val($span.data('color'));
            };

            $.each(colors, function(i,c) {
                var $span = $('<span><i style="background:'+c+'"></i></span>')
                    .bind('click', function(e) {
                        _select($(this));
                    });
                $span.data('color', c);
                if (c == $input.val()) {
                    _select($span);
                }
                $div.append($span);
            });

            $div.append($('<span><i style="background:white"></i></span>').bind('click', function(e) {
                        _select($(this));
                    }).data('color',''));

            $div.append('<br style="clear:both"/>'); // clearfix

            // $div.live('click', function(e) {
            //     _select($(e.target));
            // });
        }

        return this;
    };

})(jQuery);

$(document).ready(function(){TemplateBadges.init();});
TemplateBadges = {
    init: function() {
        $('#badge_color').presetpicker();

        $('#template-badge-icons').bind('click', function(e) {
            $('#badge_icon').val($(e.target).attr('data-icon'));
        });
    }
};
