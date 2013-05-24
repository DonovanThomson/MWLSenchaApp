Ext.define('VulaMobi.view.ThumbnailPanel',{
    extend:'Ext.dataview.DataView',
    id:'thumbs',
    xtype:'thumbnailpanel',
    layout: 'fit',
    fullscreen:true,
//    fullscreen: true,
    config:{
        styleHtmlContent:true,
//        styleHtmlCls:'home',

        baseCls:'thumb-dataview',
        store:'images_Store',
        itemTpl:'<img src="{thumb}" style="width:75px;height:75px;"/>'
		// itemTpl:['<div class="thumb-dataview-item" style="background:url({thumb});">',
		// 			'</div>'
		// 					]
    }

});
