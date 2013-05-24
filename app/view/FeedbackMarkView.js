Ext.define('VulaMobi.view.FeedbackMarkView',{
    extend: 'Ext.Panel',

    config:{


        layout: {
            type:'vbox'
        },

        items:[
            {
                xtype: "titlebar",
                docked: "top",
                title: localStorage.getItem("GradeName"),
                items: [


                    {
                        xtype: "button",
                        align: 'right',
                        ui: "confirm",
                        text: "LOG OUT",
                        action: "logout"
                    },
                    {
                        xtype: "button",
                        align: 'left',
                        ui: "back",
                        text: "MarksList",

                        handler:function(button){
                            localStorage.removeItem("GradeName");
                            localStorage.removeItem("GradeDate");
                            localStorage.removeItem("GradSub");
                            localStorage.removeItem("Weighting");
                            localStorage.removeItem("Grademark");
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.FeedbackGradesList'));
                        }
                    }

                ]
            },
            { xtype: "spacer" ,    height: 40 },
            {
                xtype: 'label',

                html: 'Mark Achieved : ' +localStorage.getItem("Grademark")

            },

            { xtype: "spacer" ,    height: 30 },
            {
                xtype: 'label',

                html: 'Date : ' + localStorage.getItem("GradeDate")


            },
            { xtype: "spacer" ,    height: 30 },
            {
                xtype: 'label',

                html: 'Sub Minimum : ' + localStorage.getItem("GradSub")

            },
            { xtype: "spacer" ,    height: 30 },
            {
                xtype: 'label',

                html: 'Class Average : 67%'
            } ,
            { xtype: "spacer" ,    height: 30 },
            {
                xtype: 'label',

                html: 'Weighting : ' + localStorage.getItem("Weighting")

            },
        ]
    }
});

