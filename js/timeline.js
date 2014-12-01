(function () {
    
    window.opsp = window.opsp || {};

    var data = [{
        year: 1990,
        title: 'Born',
        description: ''
    }, {
        year: 1993,
        title: 'Started learning the piano'
    }, {
        year: 2001,
        title: '10th Grade Certification of Piano Performance(10/10)',
        subtitle: 'from Chinese Musicians Association',
        description: ''
    }, {
        year: 2007,
        title: 'The Bronze Medal in Provincial Youth Robot Innovation Contest',
        subtitle: '',
        description: ''
    }, {
        year: 2008,
        title: 'Undergraduate Student in Information Management and Information System',
        subtitle: 'College of Information Science, Beijing Language and Culture University (Comprehensive Score Rank: #1/58)',
        description: ''
    }, {
        year: 2010,
        title: 'The National Scholarship',
        subtitle: 'Ministry of Education of the People\'s Republic of China',
        description: ''
    }, {
        year: 2010.1,
        title: 'Exchange student in Instituto Politécnico de Leiria'
    }, {
        year: 2011,
        title: 'Intern in Confucius Institute Online',
        subtitle: 'As Project Assistant of the Chinese Bridge Project',
        description: ''
    }, {
        year: 2012,
        title: 'The 5th Korea-China Youth Elite Forum Award',
        subtitle: 'Korea-China Youth Association',
        description: ''
    }, {
        year: 2013,
        title: 'Intern in Baidu, Inc.',
        description: 'As Data Engineer and Product Manager'
    }, {
        year: 2014,
        title: 'Host the 2014 New Year Gala of Baidu\'s Technical System',
        description: ''
    }, {
        year: 2014.1,
        title: 'Certified ScrumMaster, Scrum Alliance'
    }, {
        year: 2014.2,
        title: 'The Black Horse Award of Baidu'
    }, {
        year: 2014.3,
        title: 'Participant in KBTC- Sesame Street Joint Producs Project',
        subtitle: 'As project manager'
    }];

    opsp['/timeline'] = function ($el, html) {
        $el.html(etpl.compile(html)({
            timeline: data
        }));
    }
}) ();