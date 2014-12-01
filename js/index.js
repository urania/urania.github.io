(function () {

    window.opsp = window.opsp || {};

    /*****************************************
     * Load html on hash change
     *****************************************/
    function hashChange() {
        var hash = window.location.hash.substr(1);
        // Default show the index page
        if (!hash || hash === '/') {
            hash = '/index';
        }
        var htmlUrl = 'html/' + hash + '.html';
        
        // Empty page
        $('#main').html('');

        $.get(htmlUrl, function (html) {
            if (opsp[hash]) {
                opsp[hash]($('#main'), html);
            } else {
                // Default handler
                $('#main').html(html);
            }
        }).fail(function () {
            $("#main").html('<h2>404</h2>')
        });
    }

    window.onhashchange = hashChange;
    // First check after page loaded
    hashChange();

    /**
     * Index Particle effects
     */
    opsp['/index'] = function ($el, html) {
        $el.html(etpl.compile(html)({}));

        particlesJS('particle-background', {
            particles: {
                color: '#000',
                shape: 'circle', // "circle", "edge" or "triangle"
                opacity: 0.6,
                size: 4,
                size_random: true,
                nb: 150,
                line_linked: {
                    enable_auto: true,
                    distance: 120,
                    color: '#000',
                    opacity: 1,
                    width: 0.4,
                    condensed_mode: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 600
                    }
                },
                anim: {
                    enable: true,
                    speed: 0.5
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 300
                },
                detect_on: 'window', // "canvas" or "window"
                mode: 'grab',
                line_linked: {
                    opacity: .5
                },
                events: {
                    onclick: {
                        enable: false,
                        mode: 'push', // "push" or "remove"
                        nb: 4
                    }
                }
            },
            /* Retina Display Support */
            retina_detect: true
        });
    }
})();