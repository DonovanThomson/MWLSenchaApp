Ext.define('VulaMobi.view.AlbumCarouselPanel',{
    extend: 'Ext.carousel.Carousel',
    xtype: 'gallery-imagecarousel',
    id:'imageCarousel',
    layout: 'fit',
	align: 'middle',
	scrollable:true,
    config:{
        title: 'Carousel',
        iconCls:'action',
        cls:'carouselpanel',
        styleHtmlContent:true,
        styleHtmlCls:'carouselpage',
        items:[
            {
                xtype:'titlebar',
                ui:'dark',
//                title:'Carousel',
                docked:'top',
                defaults:{
                    ui:'plain',
                    iconMask: true
                },
                items:[
                    {
                        ui:'back',
                        text:'gallery',
                       // iconMask:true,
                        handler:function(){
                            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
//                            Ext.Viewport.setActiveItem((Ext.create('Gallery.view.AlbumViewPanel')));
                            Ext.Viewport.setActiveItem(1);
                        }
                    }
                ]

            }

        ]
    }

});
