(function () {
    
    'use strict';

    window.opsp = window.opsp || {};

    var particleEffect;

    opsp['me-in-kg'] = function ($el, html) {

        $el.html(html);

        var chart = echarts.init(document.getElementById('me-in-kg-graph'));

        var option = {
            legend: {
                show: 'true',
                data: ['Interests & Hobbies', 'Skills & Awards', 'Organizations', 'People', 'Places'],
                x: 'right',
                y: 50,
                orient: 'vertical',
                textStyle: {
                    color: 'white'
                }
            },
            series: [{
                type: 'force',
                minRadius: 30,
                maxRadius: 50,
                scaling: 2.5,
                roam: true,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                fontFamily: 'Helvetica, Arial'
                            }
                        },
                        nodeStyle: {
                            borderWidth: 0
                        },
                        linkStyle: {
                            color: 'white',
                            type: 'curve'
                        }
                    },
                    emphasis: {
                        nodeStyle: {
                            borderWidth: 0
                        }
                    }
                },
                categories: [{
                    name: 'Interests & Hobbies',
                    itemStyle: {
                        normal: {
                            color: '#0067A6'
                        }
                    }
                }, {
                    name : 'Skills & Awards',
                    itemStyle: {
                        normal: {
                            color: '#008972'
                        }
                    }
                }, {
                    name: 'Organizations',
                    itemStyle: {
                        normal: {
                            color: '#EFC028'
                        }
                    }
                }, {
                    name: 'People',
                    itemStyle: {
                        normal: {
                            color: '#F2572D'
                        }
                    }
                }, {
                    name: 'Places',
                    itemStyle: {
                        normal: {
                            color: '#0067A6'
                        }
                    }
                }],
                nodes: [
                    {name: 'Me', category: -1, symbolSize: 40, itemStyle: {
                        normal: {
                            label: {
                                textStyle: {
                                    fontSize: 20,
                                    position: 'inside'
                                }
                            },
                            color: '#500095',
                            borderWidth: 10,
                            borderColor: 'rgba(80, 0, 149, 0.5)'
                        }
                    }},
                    {name: 'Mandarin', category: 1},
                    {name: 'English', category: 1},
                    {name: 'Cantonese', category: 1},
                    {name: 'Portuguese', category: 1},
                    {
                        name: 'The Black Horse Award in 9th Baidu Hackthon', category: 1,
                        label: 'The Black\nHorse Award\nin 9th Baidu\nHackthon'
                    },
                    {
                        name: 'The 5th Korea-China Youth Elite Forum Award', category: 1,
                        label: 'The 5th\nKorea-China\nYouth Elite\nForum Award'
                    },
                    {name: 'The National Scholarship', category: 1},
                    {name: 'Certified ScrumMaster', category: 1},

                    {name: 'Piano', category: 0},

                    {
                        name: 'College of Information Science', category: 2,
                        label: 'College of\nInformation\nScience'
                    },
                    {name: 'Baidu', category: 2},
                    {name: 'Korea-China Youth Association', category: 2},
                    {name: 'BLCU', category: 2},
                    {name: 'Confucius Institute', category: 2},
                    {name: 'Scrum Alliance', category: 2},
                    {name: 'Sesame Street', category: 2},
                    {name: 'KBTC', category: 2},
                    {name: 'Grupo Xango', category: 2},
                    {name: 'Chinese Musicians Association', category: 2},
                    {name: 'PSafe', category: 2},
                    {name: 'Qihoo 360', category: 2},
                    {
                        name: 'Polytechnic Institute of Leiria', category: 2,
                        label: 'Polytechnic\nInstitute\nof Leiria\n(PIL)'
                    },

                    {name: 'Robin Li', category: 3, label: 'Robin Li'},

                    {name: 'Brazil', category: 4},
                    {name: 'Portugal', category: 4},
                    {name: 'Fujian', category: 4},
                    {name: 'United States', category: 4},
                    {name: 'Beijing', category: 4},
                    {name: 'Korea', category: 4}
                ],
                links: [
                    {source: 'Me', target: 'English'},
                    {source: 'Me', target: 'Mandarin'},
                    {source: 'Me', target: 'The Black Horse Award in 9th Baidu Hackthon'},
                    {source: 'Me', target: 'The 5th Korea-China Youth Elite Forum Award'},
                    {source: 'Me', target: 'The National Scholarship'},
                    {source: 'Me', target: 'Cantonese'},
                    {source: 'Me', target: 'Portuguese'},
                    {source: 'Me', target: 'Certified ScrumMaster'},

                    {source: 'Me', target: 'Fujian'},
                    {source: 'Me', target: 'Beijing'},

                    {source: 'Me', target: 'College of Information Science'},
                    {source: 'Me', target: 'Korea-China Youth Association'},
                    {source: 'Me', target: 'Confucius Institute'},
                    {source: 'Me', target: 'Polytechnic Institute of Leiria'},
                    {source: 'Me', target: 'KBTC'},
                    {source: 'Me', target: 'Baidu'},

                    {source: 'Me', target: 'Piano'},

                    {source: 'Piano', target: 'Chinese Musicians Association'},

                    {source: 'KBTC', target: 'Grupo Xango'},
                    {source: 'KBTC', target: 'Sesame Street'},
                    {source: 'Sesame Street', target: 'United States'},
                    {source: 'United States', target: 'English'},

                    {source: 'Grupo Xango', target: 'PSafe'},
                    {source: 'PSafe', target: 'Qihoo 360'},
                    {source: 'PSafe', target: 'Brazil'},
                    {source: 'Brazil', target: 'Portuguese'},
                    {source: 'Portuguese', target: 'Portugal'},
                    {source: 'Polytechnic Institute of Leiria', target: 'Portugal'},

                    {source: 'Scrum Alliance', target: 'Certified ScrumMaster'},

                    {source: 'The National Scholarship', target: 'BLCU'},
                    {source: 'College of Information Science', target: 'BLCU'},

                    {source: 'Korea', target: 'The 5th Korea-China Youth Elite Forum Award'},
                    {source: 'Korea-China Youth Association', target: 'The 5th Korea-China Youth Elite Forum Award'},
                    {source: 'Korea-China Youth Association', target: 'Korea'},

                    {source: 'Robin Li', target: 'Baidu'},
                    {source: 'Robin Li', target: 'The Black Horse Award in 9th Baidu Hackthon'}
                ]
            }]
        };

        for (var i = 0; i < option.series[0].nodes.length; i++) {
            var node = option.series[0].nodes[i];
            if (!node.label) {
                node.label = node.name.replace(/\s/g, '\n');
            }
            node.value = node.name.length;
            node.initial = [Math.random() * 1000, Math.random() * 1000];
        }

        chart.setOption(option);


        particleEffect = particlesJS('me-in-kg-bg', {
            particles: {
                color: '#506CBF',
                shape: 'circle', // "circle", "edge" or "triangle"
                opacity: 0.4,
                size: 6,
                size_random: true,
                nb: 80,
                line_linked: {
                    enable_auto: true,
                    distance: 120,
                    color: '#506CBF',
                    opacity: 1,
                    width: 0.5,
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
                enable: false,
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
    };
}) ();