
Ext.define('VulaMobi.store.ResourcesT',{

    extend: 'Ext.data.Store',

    requires: ['VulaMobi.model.ResourcesT','Ext.data.proxy.LocalStorage'],

    config: {
        storeId: 'ResourceStore',
        model: 'VulaMobi.model.ResourcesT',

        proxy: {

            type: 'localstorage',
            id  : 'TheAnnounceStore',
            reader: {
                type: 'json',
                rootProperty: 'resources'
            }
        }
    }
});

/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 9/29/12
 * Time: 4:04 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 11/2/12
 * Time: 10:27 AM
 * To change this template use File | Settings | File Templates.
 */
