Ext.define('VulaMobi.view.MarksView',{
   extend:	'Ext.dataview.DataView',

    xtype:'marksview',
    id:'MarksForm',

    config:{
        title: 'Marks',
        store : 'MarksStore',
 //   itemTpl: 'Test Name :"{name}"',
    itemTpl: '"{name}" | "{mark}" | "{weighting}" | "{subminimum}" |',
    }
});

