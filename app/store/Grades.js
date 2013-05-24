Ext.define('VulaMobi.store.Grades',{

    extend: 'Ext.data.Store',

    requires: ['VulaMobi.model.Grades','Ext.data.proxy.LocalStorage'],

    config: {
        storeId: 'gradesStore',
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

