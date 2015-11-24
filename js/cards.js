(function($) {
    $(document).ready(function() {

        $(document).on('click.card', '.ct-card', function(e) {
            if ($(this).find('.__reveal').length) {
                if ($(e.target).is($('.__reveal .__title')) || $(e.target).is($('.__reveal .__title i'))) {
                    // Make Reveal animate down and display none
                    $(this).find('.__reveal').velocity({
                        translateY: 0
                    }, {
                        duration: 225,
                        queue: false,
                        easing: 'easeInOutQuad',
                        complete: function() {
                            $(this).css({
                                display: 'none'
                            });
                        }
                    });
                } else if ($(e.target).is($('.ct-card .--activator')) ||
                    $(e.target).is($('.ct-card .--activator i'))) {
                    $(this).find('.__reveal').css({
                        display: 'block'
                    }).velocity("stop", false).velocity({
                        translateY: '-100%'
                    }, {
                        duration: 300,
                        queue: false,
                        easing: 'easeInOutQuad'
                    });
                }
            }


        });

    });
}(jQuery));
