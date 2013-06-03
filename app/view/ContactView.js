

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
                title: "Employee Details" ,
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
                        text: "Back",

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
                '<h1>Cellphone Number: : {cellnum}</h1>',
                '<h1>Extension Number : {bsgextension}</h1>',
                '<h1>Home Number : {homenum}</h1>',
                '<h1>Skype Name : {skype}</h1>',
                '<h1>MSN : {msn}</h1>',
                '<h1>Email : {email}</h1>',
                '</div>']



    }

});
