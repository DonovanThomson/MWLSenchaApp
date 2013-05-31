/**
 * Created with JetBrains WebStorm.
 * User: donovan
 * Date: 2013/05/30
 * Time: 4:26 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('VulaMobi.view.MainMenu',{
    extend: 'Ext.Panel',


    config:{
        scrollable: true,
        styleHtmlContent: 'true',
        layout: {
            type:'vbox'
        },

        items:[
            {
                xtype: "toolbar",
                docked: "top",
                title: 'MWL',
                items: [

                    { xtype: "spacer" },
                    {
                        xtype: "button",
                        ui: "confirm",
                        text: "LOG OUT",
                        handler:function(button){
                            localStorage.clear();
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.LoginView'));
                        }


                    }
                ]
            },

            {
                xtype:'panel',
                html: '<h2><b><center>MWL Contact Home</center></b></h2>'

            },


            { xtype: "spacer" ,    height: 50 },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Search For Contact',
                handler:function(button){

                    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                    Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.SearchView'));
                }

            },

            { xtype: "spacer" ,    height: 50 },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Recent Contacts',

                handler:function(button){

                    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                    Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.VulaMobiCourseAnnounce'));
                }

            }
            ,

            {
                xtype:'tabbar',
                docked:'bottom',
                items:[{
                    xtype: 'button',
                    iconCls: 'home',
                    iconMask:true,
                    //align: 'center',
                    text: 'Home',
                    disabled:true

                }]
            }
        ]
    }
});

