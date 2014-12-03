/**
 * Navigation
 */
(function () {
    var menu = [{
        title: 'My stories',
        submenu: [{
            title: 'Knowledge Engineering',
            subtitle: 'Sands or Gold',
            href: '#/knowledge-engineering'
        }, {
            title: 'Search Engine',
            subtitle: 'From Zillion Data to One Satisfying Result',
            href: '#/search-engine'
        }, {
            title: 'Languages',
            subtitle: 'Climbing the Babel',
            href: '#/languages'
        }]
    }, {
        title: 'Projects',
        submenu: [{
            title: 'Sesame Street E-learning Products',
            subtitle: 'Educational Platform & Apps',
            href: '#/project/sesame-street-e-learning'
        }, {
            title: 'Personalized KMS',
            subtitle: 'Software ·  Internet Entities Extraction & Process',
            href: '#/project/personalized-kms'
        }, {
            title: 'Visualized KG Search',
            subtitle: 'Search Engine Feature · Knowledge Computing',
            href: '#/project/visualized-kg-search'
        }, {
            title: 'Samemail',
            subtitle: 'Online Service · Mailing Website & Product',
            href: '#/project/visualized-kg-search'
        }, {
            title: 'CAS Validator',
            subtitle: 'Software · XBRLTaxnomy Validation',
            href: '#/project/cas-validator'
        }]
    }, {
        title: 'About',
        submenu: [{
            title: 'My Timeline',
            subtitle: 'Since 1990',
            href: '#/timeline'
        }, {
            title: 'Me in Knowlege Graph',
            subtitle: 'Being A Knot in This World',
            href: '#/me-in-kg'
        }, {
            title: 'Resume',
            subtitle: 'Read Or Download',
            href: '#/resume'
        }, {
            title: 'Contact Info',
            subtitle: 'Keep in Touch!',
            href: '#/contact'
        }]
    }];

    $.get('html/partial/menu.html', function (html) {
        $('#menu').html(etpl.compile(html)({
            menu: menu
        }));
        // TODO
        $('#menu nav').css('position', 'absolute');
        $('#menu nav').css('width', $('#menu nav').width() + 10 + 'px');
        $('#menu nav').css('position', 'static');
        $('#menu .close').click(function () {
            $('#menu').removeClass('show');
        });
    });

    $('#nav i.menu').click(function () {
        $('#menu').addClass('show');
    });

    $('#menu').on('click', 'a', function () {
        $('#menu').removeClass('show');
    });
}) ();