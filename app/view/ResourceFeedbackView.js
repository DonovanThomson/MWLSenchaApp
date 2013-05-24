Ext.define('VulaMobi.view.ResourceFeedbackView',{
    extend: 'Ext.Container',

    xtype:'resourcefeedbackview',
    id:'resourcefeedbackForm',
requires: ['VulaMobi.view.ResourceList'],
    config:{
    	views:['ResourceList'],
        title: 'Feedback Central',
        iconCls:'user',

       layout: 'fit',

        items:[
                {
                xtype: "toolbar",
                docked: "top",
                title: "Edit Understanding",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Save",
                        itemId: "backButton",
                        action : "GoBackSave"

                    },
                    { xtype: "spacer" },
                    {	iconCls: 'home', 
                    	iconMask: true,
                    	action : "GoHomeSave"},
                ]
            }, 
                
            {
            	xclass: 'VulaMobi.view.ResourceList',
              
              //  id:'loginButton'
            }

            
        ]
    }
});

