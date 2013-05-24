Ext.define('VulaMobi.store.ModelingStore',{
    extend: 'Ext.data.Store',
    requires: 'VulaMobi.model.ModelingMark',
    config: {
        storeId: 'ModelingStore',
        model: 'VulaMobi.model.ModelingMark',
        proxy: {


            reader: {
                type: 'json',
                rootProperty: 'grades'
            }
        }
    }
});
