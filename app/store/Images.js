Ext.define('VulaMobi.store.Images',{
   extend: 'Ext.data.Store',
    requires: ['VulaMobi.model.Image'],

    config:{

       storeId:'images_Store',
        model:'VulaMobi.model.Image',
        autoLoad:true,
        autoSync: true,
       clearOnPageLoad:true,
		sorters:['date'],
                proxy: {
                    id: 'imageStoreProxy',
                    type: 'localstorage',
                    actionMethods:'POST',
                    reader: {
                        type: 'json',
                        rootProperty: 'files'
                    }
                }


        }

});
