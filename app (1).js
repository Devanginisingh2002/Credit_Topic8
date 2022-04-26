Highcharts.chart('container', {

    chart: {
        type: 'lollipop'
    },

    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {xDescription}, {point.y}.'
        }
    },

    legend: {
        enabled: false
    },

    subtitle: {
        text: '2018'
    },

    title: {
        text: 'Top 10 Countries by Population'
    },

    tooltip: {
        shared: true
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: 'Population'
        }
    },

    series: [{
        name: 'Population',
        data: [{
            name: 'Punjab',
            low: 1427647786
        }, {
            name: 'Haryana',
            low: 1352642280
        }, {
            name: 'Uttar perdesh',
            low: 327096265
        }, {
            name: 'Rajasthan',
            low: 267670543
        }, {
            name: 'Uttrakhand',
            low: 212228286
        }, {
            name: 'Kerala',
            low: 209469323
        }, {
            name: 'Assam',
            low: 195874683
        }, {
            name: 'Chennai',
            low: 161376708
        }, {
            name: 'Tamil nadu',
            low: 145734038
        }, {
            name: 'Gujrat',
            low: 126190788
        }]
    }]

});