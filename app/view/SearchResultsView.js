/**
 * Created with JetBrains WebStorm.
 * User: donovan
 * Date: 2013/05/30
 * Time: 4:47 PM
 * To change this template use File | Settings | File Templates.
 */
/**Ext.define('VulaMobi.view.SearchResultsView',{
    extend:	'Ext.dataview.NestedList',

    xtype:'searchResultsView',
    id:'MarksForm',

    config:{
        title: 'Contacts',
        store : 'ContactsStore',
        //   itemTpl: 'Test Name :"{name}"',
        itemTpl: '"{name}" | "{cellnum}"'
    }
});

Ext.define('VulaMobi.view.SearchResultsView', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'searchResultsView',
    //id: 'mainlist',



    config: {
        title: 'Found Contacts',
        useTitleAsBackText: false,
        onItemDisclosure: true,
        store: 'ContactsStore',

        zIndex: 0
    },

    getTitleTextTpl: function() {
        return '<div>{name}</div>';
    },
    getItemTextTpl: function(node) {
        return '<div><strong>{name}:</strong> <em>{cellnum}</em></div>';
    }
});    **/

Ext.define('VulaMobi.view.SearchResultsView',{
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
                title: "Grade Book",
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
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.SearchView'));
                        }
                    }


                ]
            }



        ],



        title: 'Contacts Found',
        onItemDisclosure: 'true',//function(record, btn, index){alert('thats all')},
        styleHtmlContent: 'true',
        store : 'ContactsStore',
        itemTpl: '<div><strong>{name}</strong> </div>' ,

        listeners : {
            itemtap : function(view, index, item, e) {
                console.log(index);
                var mytxt =Ext.data.StoreManager.lookup('ContactsStore').getAt(index);
                var SelectedSiteStore = Ext.data.StoreManager.lookup('TempStore')  ;
                SelectedSiteStore.removeAll();
                SelectedSiteStore.add(mytxt);
                SelectedSiteStore.sync();
                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                Ext.Viewport.add(Ext.create('VulaMobi.view.ContactView'));

            }

        }



    }

});