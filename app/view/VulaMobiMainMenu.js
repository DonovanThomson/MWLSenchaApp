Ext.define('VulaMobi.view.VulaMobiMainMenu',{
    extend: 'Ext.Panel',


    config:{
        scrollable: true,
        styleHtmlContent: 'true',
        layout: {
            type:'vbox'
        },

        items:[
            {
                xtype: "toolbar",
                docked: "top",
                title: 'VulaMobi',
                items: [

                    { xtype: "spacer" },
                    {
                        xtype: "button",
                        ui: "confirm",
                        text: "LOG OUT",
                        action: "logout"
                    }
                ]
            },

            {
                xtype:'panel',
                html: '<h1><b><center>VulaMobi Home</center></b></h1>'

            },


            { xtype: "spacer" ,    height: 30 },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Gallery',
                action:'goGallery'

            },

            { xtype: "spacer" ,    height: 30 },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Feedback',
                action:'goFeedback'

            }
            ,

            { xtype: "spacer" ,    height: 30 },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Courses',
                action:'goActiveSites'

            },
            {
                xtype:'tabbar',
                docked:'bottom',
                items:[{
                    xtype: 'button',
                    iconCls: 'home',
                    iconMask:true,
                    //align: 'center',
                    text: 'Home',
                     disabled:true

                }]
            }
        ]
    }
});

