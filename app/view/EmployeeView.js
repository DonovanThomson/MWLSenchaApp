/**
 * Created with JetBrains WebStorm.
 * User: donovan
 * Date: 2013/06/04
 * Time: 8:17 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('VulaMobi.view.EmployeeView', {
    extend:'Ext.Panel',
    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    alias:"widget.contactpage",
    initialize:function () {
        this.callParent(arguments);
    },

    config:{
        items:[
            {
                xtype:'titlebar',
                title:'Contact Us'
            },
            {
                xtype:'panel',
                layout:'hbox',

                items:[
                    {
                        xtype:'button',
                        flex:1,
                        id:'smsButton',
                        handler:function(){
                            document.location.href = 'sms:464646'
                        }
                    },
                    {
                        xtype:'spacer'
                    },
                    {
                        xtype:'button',
                        text: 'Phone',
                        id:'callMeButton',
                        flex:1,
                        handler:function(){
                            document.location.href = 'tel:+1-800-555-1234'
                        }
                    }
                ]
            },
            {
                xtype:'button',
                text:'Email',
                id: 'emailButton',
                handler:function(){
                    document.location.href = 'mailto:webmaster@example.com'
                }
            }
        ]
    },
});