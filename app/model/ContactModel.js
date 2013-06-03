/**
 * Created with JetBrains WebStorm.
 * User: donovan
 * Date: 2013/05/30
 * Time: 5:13 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('VulaMobi.model.ContactModel', {
    extend: 'Ext.data.Model',
    config:{
        identifier: {
            type: 'uuid'
        },
        fields: [
            {name: 'name', type: 'string'},
            {name: 'bsgextension', type: 'string'},
            {name: 'cellnum', type:'string'},
            {name: 'homenum', type:'string'},
            {name: 'skype', type:'string'},
            {name: 'msn', type:'string'},
            {name: 'email', type:'string'}
        ]

    }

});