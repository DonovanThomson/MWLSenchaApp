

Ext.define('VulaMobi.view.VulaMobiResourceView',{
    extend:	'Ext.dataview.List',

    deselectOnContainerClick: 'false',

    config:{
        styleHtmlContent:true,
        scrollable: true,
        items:[

            {
                xtype:'tabbar',
                docked:'bottom',
                items:[{
                    xtype: 'button',
                    iconCls: 'home',
                    iconMask:true,
                    //align: 'center',
                    text: 'Home',

                    handler:function(button){
                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                        Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.VulaMobiMainMenu'));
                    }


                }]
            },
            {
                xtype: "titlebar",
                docked: "top",
                //title: "grades",
                title: 'VulaMobi',
                items: [
                    {
                        xtype: "button",
                        ui: "confirm",
                        align:'right',
                        text: "LOG OUT",
                        action: "logout"
                    },

                    {
                        xtype: "button",
                        ui: "back",
                        align:'left',
                        text: "CourseSite",

                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.VulaMobiCourseSite'));
                        }
                    }


                ]
            }



        ],




        title: 'Grades',
        store : 'ResourceStore',
        itemTpl://'{name}' +'        '+ '{mark}'+'       ' +'{date}'
            ['<div>',
                '<b>{title}</b><br>' +
                '<a><href>{href}</href></a>'+
                '</div>']



    }      /* ,
            listeners : {
            itemtap : function(item, num, record, ev) {
                       alert(num);
             }

            }*/

});
/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 10/1/12
 * Time: 11:25 AM
 * To change this template use File | Settings | File Templates.
 */
