

Ext.define('VulaMobi.view.ContactView',{
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
                title: "grades",
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
                        text: "Grades",

                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.SearchResultsView'));
                        }
                    }


                ]
            }



        ],



        //styleHtmlContent:true,
        title: 'Contact Details',
        store : 'TempStore',
        itemTpl://'{name}' +'        '+ '{mark}'+'       ' +'{date}'
            ['<div>',
                '<h1><b>Name : {name}</b></h1>',
                '<h1>cellphone number: : {cellnum}</h1>',
                '</div>']



    }

});
