
Ext.define('VulaMobi.view.RecentContactsView',{
    extend:	'Ext.dataview.List',
    xtype: 'searchResultsView',
    //deselectOnContainerClick: 'false',

    config:{
        items:[

            {
                xtype:'toolbar',
                docked:'bottom'
            },
            {
                xtype: "titlebar",
                docked: "top",
                title: "Employee's",
                items: [
                    {	iconCls: 'home',
                        iconMask: true,
                        align : 'right',
                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.MainMenu'));
                        }
                    },

                    {
                        xtype: "button",
                        ui: "back",
                        align:'left',
                        text: "back",

                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.MainMenu'));
                        }
                    }


                ]
            }



        ],



        title: 'Contacts Found',
        onItemDisclosure: 'true',//function(record, btn, index){alert('thats all')},
        styleHtmlContent: 'true',
        store : 'RecentlySearchedStore',
        itemTpl: '<div><strong>{name}</strong> </div>' ,

        listeners : {
            itemtap : function(view, index, item, e) {
                console.log(index);
                var mytxt =Ext.data.StoreManager.lookup('RecentlySearchedStore').getAt(index);
                var SelectedSiteStore = Ext.data.StoreManager.lookup('RecentTempStore')  ;
                SelectedSiteStore.removeAll();
                SelectedSiteStore.add(mytxt);
                SelectedSiteStore.sync();
                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                Ext.Viewport.add(Ext.create('VulaMobi.view.RecentContactView'));

            }

        }



    }

});