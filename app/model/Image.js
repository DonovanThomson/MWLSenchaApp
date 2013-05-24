Ext.define('VulaMobi.model.Image', {
   extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],
    config:{
        identifier:{
          type:'uuid'
        },
		
        fields: [
            {name: 'name', type: 'string'},
            {name: 'size', type: 'string'},
            {name: 'date', type: 'string'},
            {name: 'path', type:'string'},
            {name: 'thumb', type: 'string'}
       ]

    }
});
