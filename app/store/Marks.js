Ext.define('VulaMobi.store.Marks',{
   extend: 'Ext.data.Store',
   requires: 'VulaMobi.model.Mark',
   config: {
	storeId: 'MarksStore',
	model: 'VulaMobi.model.Mark',
	proxy: {
		
    	type: 'localstorage',
    	id  : 'TheMarkStore',
    reader: {
    		type: 'json',
    		rootProperty: 'grades'
			}
}


}
});
