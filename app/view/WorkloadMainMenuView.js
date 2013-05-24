Ext.define('VulaMobi.view.WorkloadMainMenuView',{
   extend: 'Ext.form.Panel',

    xtype:'gradebookmenuview',
    id:'gradebookmenuForm',

    config:{
        title: 'Workload Management',
        iconCls:'user',

        layout: {
            type:'vbox'
        },

        items:[
                {
                xtype: "toolbar",
                docked: "top",
                title: "Workload Management",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Back",
                        itemId: "backButton",
                        action: "backToFeedbackCentral"
                        	
                    },
                    { xtype: "spacer" },
                    {	iconCls: 'home', 
                    	iconMask: true, 
                    	action : "GoHome"},
                ]
            },
            {
                xtype: 'resourcelist',
            },
            
        ]
    }
});

