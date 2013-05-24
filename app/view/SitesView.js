// A View that displays the users sites as buttons
Ext.define("VulaMobi.view.SitesView", {
    extend: 'Ext.dataview.component.DataItem',
    requires: [
        'Ext.TitleBar',

    ],
    config: {
        tabBarPosition: 'bottom',
        layout: 'fit',

        items: [
           {
                xtype: "toolbar",
                docked: "top",
                title: "Sites",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Back",
                        itemId: "backButton"
                    },
                    { xtype: "spacer"},
                    {	iconCls: 'home', 
                    	iconMask: true, 
                    	action : "GoHome"},
                ]
            },
           //adds the buttons dynamicly after Ajax request


            {
                xclass: 'VulaMobi.view.FeedbackSitesView'


            }





        ]
    }
});
