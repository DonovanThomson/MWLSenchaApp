Ext.define('VulaMobi.model.Grades', {
    extend: 'Ext.data.Model',
    config:{
        identifier: {
            type: 'uuid'
        },
        fields: [
            {name: 'name', type: 'string'},
            {name: 'date', type: 'string'},
            {name: 'mark', type:'string'}

        ]

    }

});/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 9/29/12
 * Time: 3:17 PM
 * To change this template use File | Settings | File Templates.
 */
