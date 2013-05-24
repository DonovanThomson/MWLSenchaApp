

Ext.define('VulaMobi.view.VulaMobiCourseAnnounce',{
    extend:	'Ext.dataview.List',

    deselectOnContainerClick: 'false',

    config:{
        styleHtmlContent: 'true',
        items:[

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
            },
            {
                xtype: "titlebar",
                docked: "top",
                //title: "Announcements",
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
                       // text: localStorage.getItem("siteName") +" page",
                        text: 'Back',

                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.VulaMobiCourseSite'));
                        }
                    }


                ]
            },
            {
                xtype: 'panel',
                html:'<h2><center><b>Announcements</b></center></h2>'

            }




        ],



        onItemDisclosure: 'true',
        title: 'Announcements',
        store : 'AnnounceStore',

        itemTpl: [
            '<div>',
            '<b>{title}</b> <br>created by {createdByDisplayName}<br>{createdOn}',
            '</div>'
        ],
        listeners : {
            itemtap : function(item, num, record, ev) {



                var mytxt =Ext.data.StoreManager.lookup('AnnounceStore').getAt(num);
                //var ttle= ( mytxt.get('title'));
                var ttle= ( mytxt.get('siteTitle'));
                var ance_id=( mytxt.get('announce_id'));

                localStorage.setItem("siteTitle", ttle);
                localStorage.setItem("announceID", ance_id);



                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                Ext.Viewport.add(Ext.create('VulaMobi.view.VulaMobiAnnounceView'));



            }


        }


    }

});

