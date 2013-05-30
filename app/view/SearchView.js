
Ext.define('VulaMobi.view.SearchView', {

    extend: 'Ext.Panel',

    // We are using Ext.Ajax, so we should require it
    requires: ['Ext.Ajax'],

    config: {
        styleHtmlContent: 'true',
        scrollable: true,
        items:[{
            xtype: "titlebar",
            docked: "top",
            title: "VulaMobi",
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
                    text: "AnnounceList",

                    handler:function(button){

                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                        Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.VulaMobiCourseAnnounce'));
                    }
                }


            ]
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
                        Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.VulaMobiMainMenu'));
                    }


                }]
            }


        ],


        listeners: {
            activate: 'onActivate'

        }


    },

    onActivate: function(me, container)
    {
        var address ='http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?announce/body/'
            +localStorage.getItem("siteID")+'/'+localStorage.getItem("announceID");
        Ext.Viewport.mask({xtype:'loadmask'});
        Ext.Ajax.request({

            url: address,
            method:'POST',
            disableCaching:true,
            withCredentials: true,
            useDefaultXhrHeader: false,
            params:
            {
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            },

            success: function(response, request) {
                //We should use the setter for the HTML config for this
                Ext.Viewport.unmask();
                me.setHtml(response.responseText);
                //alert(localStorage.getItem("siteTitle"))   ;
            },
            failure: function(response, request) {
                me.setHtml("failed -- response: " + response.responseText);
            }
        });

    }






});/**
 * Created with JetBrains WebStorm.
 * User: Anda
 * Date: 2012/10/09
 * Time: 9:48 PM
 * To change this template use File | Settings | File Templates.
 */
