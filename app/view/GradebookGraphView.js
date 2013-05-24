Ext.define('VulaMobi.view.GradebookGraphView',{
   extend: 'Ext.form.Panel',

    xtype:'gradebookgraphview',
    id:'gradebookgraphForm',

    config:{
        title: 'Graph Of Users Marks',
        iconCls:'user',

        layout: {
            type:'vbox'
        },

        items:[
                {
                xtype: "toolbar",
                docked: "top",
                title: "Edit Note",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Back",
                        itemId: "backButton"
                    },
                    { xtype: "spacer" },
                    {	iconCls: 'home', 
                    	iconMask: true, 
                    	action : "GoHome"},
                ]
            },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Test Graph',
                action:'TestG'
              //  id:'loginButton'
            }
        ]
    }
});

