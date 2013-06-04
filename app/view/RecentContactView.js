

Ext.define('VulaMobi.view.RecentContactView',{
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
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.RecentContactsView'));
                        }
                    }


                ]
            }



        ],


        disableSelection: true,
        //styleHtmlContent:true,
        title: 'Contact Details',
        store : 'RecentTempStore',
        itemTpl://'{name}' +'        '+ '{mark}'+'       ' +'{date}'
            [
                '<h1><b><text-align:center>{name}</b></h1>',
                '<h4><span class="label">Cellphone Number</span></h4>',
                '<div class="field">{cellnum}</div>',
                '<h4>Extension Number</h4>',
                '<div class="field">{bsgextension}</div>',
                '<h4>Home Number : </h4>',
                '<div class="field">{homenum}</div>',
                '<h4>Email</h4>',
                '<div class="field">{email}</div>',
                '<h4>Skype Name</h4>',
                '<div class="field">{skype}</div>',
                '<h4>MSN</h4>',
                '<div class="field">{msn}</div>',








            ]



    }

});
