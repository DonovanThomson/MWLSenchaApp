Ext.define('VulaMobi.model.Mark', {
   extend: 'Ext.data.Model',
    config:{
    	identifier: {
        type: 'uuid'
    },
        fields: [
                 {name: 'name', type: 'string'},
                 {name: 'date', type: 'string'},
                 {name: 'mark', type:'string'},
                 {name: 'weighting', type:'string'},
                 {name: 'subminimum', type:'string'}
                 ],
        		 
        }
    
});
