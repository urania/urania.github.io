(function () {

    window.opsp = window.opsp || {};

    var lastPage = '';
    /*****************************************
     * Load html on hash change
     *****************************************/
    function hashChange() {
        var hash = window.location.hash.substr(1);
        // Default show the index page
        if (!hash || hash === '/') {
            hash = '/index';
        }
        var hashArr = hash.split('/');
        var page = hashArr[1];
        var anchor = hashArr[2];

        var htmlUrl = 'html/' + page + '.html';
        
        // Empty page
        $('#main').html('');
        if (lastPage) {
            if (opsp[page] && opsp[page].destroy) {
                opsp[page].destroy();
            }
        }
        $(document.body).removeClass(lastPage).addClass(page);
        lastPage = page;

        $.get(htmlUrl, function (html) {
            if (opsp[page]) {
                opsp[page]($('#main'), html);
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
    opsp['index'] = function ($el, html) {
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
                detect_on: 'canvas', // "canvas" or "window"
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