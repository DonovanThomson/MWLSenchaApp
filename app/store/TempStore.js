Ext.define('VulaMobi.store.TempStore',{

    extend: 'Ext.data.Store',

    requires: ['VulaMobi.model.Grades','Ext.data.proxy.LocalStorage'],

    config: {
        storeId: 'TempStore',
        model: 'VulaMobi.model.Grades',

        proxy: {

            type: 'localstorage',
            id  : 'TheGradeStore',
            reader: {
                type: 'json',
                rootProperty: 'grades'
            }
        }
    }
});

