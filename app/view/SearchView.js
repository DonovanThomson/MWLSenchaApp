
Ext.define('VulaMobi.view.SearchView', {
    extend: 'Ext.form.Panel',

    xtype:'vulamobi-searchview',
    // We are using Ext.Ajax, so we should require it
    requires: ['Ext.Ajax'],
    id:'searchForm',
    config: {

        styleHtmlContent: 'true',
        scrollable: true,
        items:[{
            xtype: "titlebar",
            docked: "top",
            title: "MWL",
            items: [
                {
                    xtype: "button",
                    ui: "confirm",
                    align:'right',
                    text: "LOG OUT",

                    handler:function(button){
                        localStorage.setItem('Token','')
                        localStorage.clear();
                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                        Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.LoginView'));
                    }
                },

                {
                    xtype: "button",
                    ui: "back",
                    align:'left',
                    text: "Back",

                    handler:function(button){

                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                        Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.MainMenu'));
                    }
                }


            ]
        },
            { xtype: "spacer" ,    height: 50 },
            {
                xtype: 'fieldset',
                title: 'Search For Contact',
                items:[
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'searchedName'

                    }

                ]
            },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Search',
                action:'submitSearch'
                //  id:'loginButton'
            },
            {
                xtype:'tabbar',
                docked:'bottom',
                items:[{
                    xtype: 'button',
                    iconCls: 'home',
                    iconMask:true,
                    text: 'Home',

                    handler:function(button){

                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                        Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.MainMenu'));
                    }


                }]
            }


        ]





    }








});/**
 * Created with JetBrains WebStorm.
 * User: Anda
 * Date: 2012/10/09
 * Time: 9:48 PM
 * To change this template use File | Settings | File Templates.
 */
