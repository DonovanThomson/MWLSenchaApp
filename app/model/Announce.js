Ext.define('VulaMobi.model.Announce', {
    extend: 'Ext.data.Model',
    config:{
        identifier: {
            type: 'uuid'
        },
        fields: [
            {name: 'createdByDisplayName', type: 'string'},
            {name: 'createdOn', type: 'string'},
            {name: 'title', type:'string'},
            {name: 'siteTitle', type:'string'},
            {name: 'site_id', type:'string'},
            {name: 'announce_id', type:'string'}

        ]

    }

});/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 9/29/12
 * Time: 3:17 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 10/4/12
 * Time: 10:45 AM
 * To change this template use File | Settings | File Templates.
 */
