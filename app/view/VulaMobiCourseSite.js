Ext.define('VulaMobi.view.VulaMobiCourseSite',{
    extend: 'Ext.Panel',

    config:{
        styleHtmlContent: true,

        layout: {
            type:'vbox'
        },

        items:[
             {


                xtype: "titlebar",
                docked: "top",
               // title: localStorage.getItem("siteName"),
                 title: 'VulaMobi',
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
                        text: "Courses",
                        action: 'backActive'
                    }

                ]
            },
            {
               html:'<h2><center><b>Course Tools</b></center></h2>'
               // html:'<h2><center><b>"localStorage.getItem("siteTitle")"</b></center></h2>'
            },
            { xtype: "spacer" ,    height: 40 },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Announcements',
                action:'goAnnounce'

            },

            { xtype: "spacer" ,    height: 30 },
            {
                xtype: 'button',
                ui:'confirm',
                text:'GradeBook',
                action:'goGrade'

            },
            { xtype: "spacer" ,    height: 30 },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Resources',
                action:'goResource'

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

                    handler:function(button){
                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                        Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.VulaMobiMainMenu'));
                    }


                }]
            }
        ]

    }
});

