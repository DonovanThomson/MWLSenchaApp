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
        storeId: 'ContactsStore',
        model: 'VulaMobi.model.ContactModel',

        proxy: {
            id  : 'ContactsStore',
            url:'https://bsg.myworklife.com/app/api/rest//contact/'+ localStorage.getItem('SearchedName'),
            headers: {
                Authorization: localStorage.getItem('Token')
            },
            reader: {
                type: 'xml',
                rootProperty: 'Contacts'
            }
        }
    }
});

