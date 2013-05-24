

Ext.define('VulaMobi.view.FeedbackGradeView',{
    extend:	'Ext.dataview.List',

    deselectOnContainerClick: 'false',

    config:{
        items:[

            {
                xtype:'toolbar',
                docked:'bottom'
            },
            {
                xtype: "titlebar",
                docked: "top",
                title: "grades",
                items: [
                    {	iconCls: 'home',
                        iconMask: true,
                        align : 'right',
                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.VulaMobiMainMenu'));
                        }
                    },

                    {
                        xtype: "button",
                        ui: "back",
                        align:'left',
                        text: "Grades",

                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.FeedbackGradesList'));
                        }
                    }


                ]
            }



        ],



        //styleHtmlContent:true,
        title: 'Grades',
        store : 'TempStore',
        itemTpl://'{name}' +'        '+ '{mark}'+'       ' +'{date}'
            ['<div>',
                '<h1><b>Component Name : {name}</b></h1>',
                '<h1>Mark Achieved : {mark}</h1>',
                '<h1>Class Average : 62%</h1>',
                '<h1>Sub Minimum: {subminimum}%</h1>',
                '<h1>Weighting of Final Mark : {weighting}%</h1>',
                '<h1>Date Released: {date}</h1>',
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
