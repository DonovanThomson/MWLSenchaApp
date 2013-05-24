
Ext.define('VulaMobi.store.Announce',{

    extend: 'Ext.data.Store',

    requires: ['VulaMobi.model.ActiveSites','Ext.data.proxy.LocalStorage'],

    config: {
        storeId: 'AnnounceStore',
        model: 'VulaMobi.model.Announce',

        proxy: {

            type: 'localstorage',
            id  : 'TheAnnounceStore',
            reader: {
                type: 'json',
                rootProperty: 'announcements_site'
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
