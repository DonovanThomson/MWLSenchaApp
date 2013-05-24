

Ext.define('VulaMobi.view.VulaMobiActiveSites',{
    extend:	'Ext.dataview.List',

    deselectOnContainerClick: 'false',
    styleHtmlContent: 'true',
    config:{
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
                //title: "ActiveSites",
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
                        text: "Home",

                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.VulaMobiMainMenu'));
                        }
                    }



                ]
            },
            {
                xtype:'panel',
                html: '<h2><b><center>Courses</center><br></b></h2>'

            }




        ],



        title: 'Marks',
        onItemDisclosure: 'true',//function(record, btn, index){alert('thats all')},
        styleHtmlContent: 'true',
        store : 'ActiveSitesStore',
        itemTpl: '<div><strong>{title}</strong> </div>',




        listeners : {
            itemtap : function(item, num, record, ev) {


                //alert(num);
                var mytxt =Ext.data.StoreManager.lookup('ActiveSitesStore').getAt(num);
                var coursename= ( mytxt.get('title'));
                var courseid=( mytxt.get('site_id'));

                localStorage.setItem("siteName", coursename);
                localStorage.setItem("siteID", courseid);

//                alert(localStorage.getItem("siteName")+ " " + localStorage.getItem("siteID"));

                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                Ext.Viewport.add(Ext.create('VulaMobi.view.VulaMobiCourseSite'));

            }

        }



    }

});
