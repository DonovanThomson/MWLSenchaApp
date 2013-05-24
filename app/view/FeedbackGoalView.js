Ext.define('VulaMobi.view.FeedbackGoalView',{
    extend: 'Ext.form.Panel',
    xtype: 'feedbackgoalview',
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
                        text: "Back",
                        itemId: "backButton",
                        action: "backToSite"
                    },
                    { xtype: "spacer" },
                    {	iconCls: 'home',
                        iconMask: true,
                        action: "backToSite"},
                ]
            },
            {
                xtype: 'label',
                html: 'Select Target Mark' ,
                aling : 'centre'
            },
            { xtype: "spacer" ,    height: 20 },
            
            {
                xtype: 'label',
                html: 'Percent' ,
                aling : 'left'
            },
            {
                xtype: 'sliderfieldextended',
                value : 50,

            },

            { xtype: "spacer" ,    height: 50 },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Calculate Required Grades',
                action :'goToViewGrademodeling'
                //  id:'loginButton'
            }
        ]
    }
});

