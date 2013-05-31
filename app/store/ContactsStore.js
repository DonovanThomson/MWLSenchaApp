/**
 * Created with JetBrains WebStorm.
 * User: donovan
 * Date: 2013/05/30
 * Time: 5:15 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('VulaMobi.store.ContactsStore',{

    extend: 'Ext.data.Store',

    requires: ['VulaMobi.model.ContactModel','Ext.data.proxy.LocalStorage'],

    config: {
        id  : 'ContactsStore',
        storeId: 'ContactsStore',
        model: 'VulaMobi.model.ContactModel',
        type: 'localstorage',

        proxy: {

            type: 'localstorage',
            id  : 'TheContactsStore'

        }
    }
});

