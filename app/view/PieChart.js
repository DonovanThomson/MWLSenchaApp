Ext.define("VulaMobi.view.PieChart", {
    extend: "Ext.chart.Chart",
    xtype: "line",
    config: {
        xtype: 'barchart',
        animate: true,
        width:300,
        height:300,
        title: 'Pie Chart',
        store: 'SampleStore',
        themeCls: 'pie1',
        theme: 'Demo',
        shadow: false,
        insetPadding: 20,
        legend: {
            position: 'left'
        },
        interactions: [
            {
                type: 'reset',
                confirm: true
            },
            {
                type: 'rotate'
            },
            'itemhighlight',
            {
                type: 'iteminfo',
                gesture: 'longpress',
                listeners: {
                    show: function (interaction, item, panel) {
                        var storeItem = item.storeItem;
                        panel.setHtml(['<ul><li><b>Movie: </b>' + storeItem.get('name') + '</li>', '<li><b>Fans: </b> ' + storeItem.get('fans') + '</li></ul>'].join(''));
                    }
                }
            }
        ],
        series: [
            {
                type: 'pie',
                field: 'fans',
                showInLegend: true,
                highlight: false,
                listeners: {
                    'labelOverflow': function (label, item) {
                        item.useCallout = true;
                    }
                },
                // Example to return as soon as styling arrives for callouts
                callouts: {
                    renderer: function (callout, storeItem) {
                        callout.label.setAttributes({
                            text: storeItem.get('name')
                        }, true);
                    },
                    filter: function () {
                        return false;
                    },
                    box: {
                        //no config here.
                    },
                    lines: {
                        'stroke-width': 2,
                        offsetFromViz: 20
                    },
                    label: {
                        font: 'italic 14px Arial'
                    },
                    styles: {
                        font: '14px Arial'
                    }
                },
                label: {
                    field: 'name'
                }
            }
        ]
    }
});