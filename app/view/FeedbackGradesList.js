

Ext.define('VulaMobi.view.FeedbackGradesList',{
    extend:	'Ext.dataview.List',
    xtype: 'feedbackGradeslist',
    //deselectOnContainerClick: 'false',

    config:{
        items:[

            {
                xtype:'toolbar',
                docked:'bottom'
            },
            {
                xtype: "titlebar",
                docked: "top",
                title: "Grade Book",
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
                        text: "back",

                        handler:function(button){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                            Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.GradebookMainMenuView'));
                        }
                    }


                ]
            }



        ],



        title: 'Marks',
        onItemDisclosure: 'true',//function(record, btn, index){alert('thats all')},
        styleHtmlContent: 'true',
        store : 'MarksStore',
        itemTpl: '<div><strong>{name} --- {date}</strong> </div>' ,

        listeners : {
            itemtap : function(view, index, item, e) {
                console.log(index);
                var mytxt =Ext.data.StoreManager.lookup('MarksStore').getAt(index);
                var FeedbackSiteStore = Ext.data.StoreManager.lookup('TempStore')  ;
                FeedbackSiteStore.removeAll();
                FeedbackSiteStore.add(mytxt);
                FeedbackSiteStore.sync();
                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                Ext.Viewport.add(Ext.create('VulaMobi.view.FeedbackGradeView'));

            }

        }



    }

});
