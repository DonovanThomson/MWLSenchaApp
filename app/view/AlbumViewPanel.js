Ext.define('VulaMobi.view.AlbumViewPanel',{
    extend: 'Ext.Panel',
    id:'thumbnails',
    xtype: 'gallery-thumbnailview',
    fullscreen: true,
    scrollable:true,
    config:{
       layout:'fit',
       title: 'Gallery',
        iconCls:'star',
        styleHtmlContent:true,
        styleHtmlCls:'albumpanel',
            items: [
            {
                title: 'Gallery',
                xtype: 'titlebar',
                ui:'dark',
                itemId: 'albumToolbar',
                docked: 'top',
                defaults:{
                    iconMask: true,
                    ui: 'plain'
                },
                items:[
                   
                    {
                        itemId:'backToHome',
                        action:'getRecent',
                        align:'left',
						text:'back',
						ui:'back'
                    }, 
					{
                        itemId:'addButton',
                        action:'addPicture',
                        align:'left',
                        iconCls:'add'
                    },
                    {
                        itemId:'refreshButton',
                        action:'refreshGallery',
                        align:'right',
                        iconCls:'refresh'
                    }
                ]
            },
               {
               xclass:'VulaMobi.view.ThumbnailPanel'
                }
        ]//end of items

    }


});

