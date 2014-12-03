exports.modules = {
    main: {name: 'echarts/echarts'},
    parts: [
        {name: 'echarts/chart/chord', weight: 100},
        {name: 'echarts/chart/force', weight: 100}
    ]
};

exports.amd = {
    baseUrl: process.cwd(),
    packages: [
        {
            name: 'echarts',
            location: '../../../echarts/src',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: '../../../zrender/src',
            main: 'zrender'
        }
    ]
};