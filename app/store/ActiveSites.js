Ext.define('VulaMobi.store.ActiveSites',{

    extend: 'Ext.data.Store',

    requires: ['VulaMobi.model.ActiveSites','Ext.data.proxy.LocalStorage'],

    config: {
        storeId: 'ActiveSitesStore',
        model: 'VulaMobi.model.ActiveSites',

        proxy: {

            type: 'localstorage',
            id  : 'TheSitesStore',
            reader: {
                type: 'json',
                rootProperty: 'active_sites'
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
