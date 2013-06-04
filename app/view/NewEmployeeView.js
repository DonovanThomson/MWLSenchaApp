Ext.define('VulaMobi.view.NewEmployeeView', {
    extend:'Ext.Panel',
    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    dockedItems: [{
        xtype: 'toolbar',
        title: 'View contact',
        items: [
            {
                text: 'Back',
                ui: 'back',
                listeners: {
                    'tap': function () {
                        //Ext.dispatch({
                        //    controller: app.controllers.contacts,
                        //    action: 'index',
                        //    animation: {type:'slide', direction:'right'}
                        //});
                    }
                }
            },
            {xtype:'spacer'},
            {
                id: 'edit',
                text: 'Edit',
                ui: 'action',
                listeners: {
                    'tap': function () {
                        //Ext.dispatch({
                        //    controller: app.controllers.contacts,
                        //    action: 'edit',
                        //    id: this.record.getId()
                        //});
                    }
                }
            }
        ]
    }],
        styleHtmlContent:true,
    scroll: 'vertical',
    items: [


    {tpl:[
        '<h4>Phone</h4>',
        '<tpl for="phoneNumbers">',
        '<div class="field"><span class="label">{type}: </span><a href="tel:{021444444}">0720895561</a></div>',
        '</tpl>'
    ]},
    {tpl:[
        '<h4>Email</h4>',
        '<tpl for="emails">',
        '<div class="field"><span class="label">{type}: </span><a href="mailto:{Don@bsg.com}">Donovan.Thomson@bsg.co.za</a></div>',
        '</tpl>'
    ]}







            ]
});/**
 * Created with JetBrains WebStorm.
 * User: donovan
 * Date: 2013/06/04
 * Time: 8:54 AM
 * To change this template use File | Settings | File Templates.
 */
