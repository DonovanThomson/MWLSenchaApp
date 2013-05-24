

Ext.define('VulaMobi.view.VulaMobiCourseGrade',{
    extend:	'Ext.dataview.List',

    deselectOnContainerClick: 'false',

    config:{
        styleHtmlContent:true,
        scrollable: true,
        items:[

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
            },
            {
                xtype: "titlebar",
                docked: "top",
                //title: "grades",
                title: 'VulaMobi',
                items: [
                    {
                        xtype: "button",
                        ui: "confirm",
                        align:'right',
                        text: "LOG OUT",
                        action: "logout"
                    },

                    {
                        xtype: "button",
                        ui: "back",
                        align:'left',
                        text: "CourseSite",

                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.VulaMobiCourseSite'));
                        }
                    }



                ]
            }  ,
            {
                xtype: 'panel',
                html:'<h2><center><b>Grades</b></center></h2>'

            }



        ],




        title: 'Grades',
        store : 'gradesStore',
        itemTpl://'{name}' +'        '+ '{mark}'+'       ' +'{date}'
                ['<div>',
            '<b>{name}</b><br> mark: {mark}<br> posted: {date}',
            '</div>']



    }

});
/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 10/1/12
 * Time: 11:25 AM
 * To change this template use File | Settings | File Templates.
 */
