Ext.define('VulaMobi.model.ModelingMark', {
    extend: 'Ext.data.Model',
    config:{
        identifier: {
            type: 'uuid'
        },
        fields: [
            {name: 'name', type: 'string'},
            {name: 'date', type: 'string'},
            {name: 'mark'},
            {name: 'status', type:'string'}
        ]

    }

});
