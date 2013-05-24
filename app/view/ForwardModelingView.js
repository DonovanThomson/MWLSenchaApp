Ext.define('VulaMobi.view.ForwardModelingView',{
    extend:	'Ext.dataview.List',

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
                        text: "Back",

                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.FeedbackGoalView'));
                        }
                    }


                ]
            }



        ],



        title: 'Mark Projection',
        store : 'ModelingStore',
        itemTpl: 
        ['<div>',
         '<h1><b>{name}</b></h1>',
         '<h1>Status : {status}</h1>',
         '<h1>Mark : {mark}</h1>',
         '</div>']






    }

});
