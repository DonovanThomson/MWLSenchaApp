

Ext.define('VulaMobi.view.FeedbackActiveSites',{
    extend:	'Ext.dataview.List',

    deselectOnContainerClick: 'false',

    config:{
        items:[

            {
                xtype:'toolbar',
                docked:'bottom'
            },
            {
                xtype: "titlebar",
                docked: "top",
                title: "ActiveSites",
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
            }



        ],



        title: 'Marks',
        onItemDisclosure: 'true',//function(record, btn, index){alert('thats all')},
        styleHtmlContent: 'true',
        store : 'FeedbackActiveSiteStore',
        itemTpl: '<div><strong>{name}</strong> </div>',




        listeners : {
            itemtap : function(item, num, record, ev) {


                //alert(num);
                var mytxt =Ext.data.StoreManager.lookup('FeedbackActiveSiteStore').getAt(num);
                var coursename= ( mytxt.get('name'));
                var courseid=( mytxt.get('siteid'));


                localStorage.setItem("FeedbacksiteName", '');
                localStorage.setItem("FeedbacksiteID", '');

                localStorage.setItem("FeedbacksiteName", coursename);
                localStorage.setItem("FeedbacksiteID", courseid);

                //alert(localStorage.getItem("siteName")+ " " + localStorage.getItem("siteID"));

                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                Ext.Viewport.add(Ext.create('VulaMobi.view.FeedbackCentralView'));

            }

        }



    }

});
