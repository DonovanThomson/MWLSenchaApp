Ext.define('VulaMobi.view.GradebookMainMenuView',{
   extend: 'Ext.form.Panel',

    xtype:'gradebookmenuview',
    id:'gradebookmenuForm',

    config:{
        title: 'Gradebook Menu',
        iconCls:'user',

        layout: {
            type:'vbox'
        },

        items:[
                {
                xtype: "toolbar",
                docked: "top",
                title: "Gradebook Central",
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
            { xtype: "spacer" },
            {
                xtype: 'button',
                ui:'confirm',
                text:'View Grades',
                action:'ViewGrades'
              //  id:'loginButton'
            }
            ,
            { xtype: "spacer" },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Grade Modeling',
                action:'GradePlaning'
              //  id:'loginButton'
            },
            { xtype: "spacer" }



        ]
    }
});

