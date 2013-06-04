/**
 * Created with JetBrains WebStorm.
 * User: donovan
 * Date: 2013/05/31
 * Time: 3:37 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('VulaMobi.store.RecentTempStore',{

    extend: 'Ext.data.Store',


    config: {
        storeId: 'RecentTempStore',
        model: 'VulaMobi.model.ContactModel',

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
