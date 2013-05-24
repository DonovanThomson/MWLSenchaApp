Ext.define('VulaMobi.model.ActiveSites', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.identifier.Uuid'

    ],

    config:{
        identifier: {
            type: 'uuid'
        },
        fields: [
            {name: 'title', type: 'string'},
            {name: 'site_id', type: 'string'}


        ]

    }

});
