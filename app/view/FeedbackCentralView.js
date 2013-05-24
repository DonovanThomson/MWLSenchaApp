Ext.define('VulaMobi.view.FeedbackCentralView',{
   extend: 'Ext.form.Panel',

    xtype:'feedbackcentralview',
    id:'feedbackcentralForm',

    config:{
        title: 'Feedback Central',
        iconCls:'user',

        layout: {
            type:'vbox'
        },

        items:[
                {
                xtype: "toolbar",
                docked: "top",
                title: "Feedback Central",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        align:'left',
                        text: "Sites",

                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.FeedbackActiveSites'));
                        }
                    },
                    { xtype: "spacer" },
                    {	iconCls: 'home', 
                    	iconMask: true, 
                    	action: "backToSite"},
                ]
            },
            { xtype: "spacer"},
            {
                xtype: 'button',
                ui:'confirm',
                text:'Grades Tools',
                action:'GoToGrades'
              //  id:'loginButton'
            },
            
            { xtype: "spacer"  },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Workload Tools',
                action:'GoToWorkload'
              //  id:'loginButton'
            }
            ,
            { xtype: "spacer"  }
        ]
    }
});

