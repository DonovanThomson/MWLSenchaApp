Ext.define('VulaMobi.controller.Album', {
    extend: 'Ext.app.Controller',
    views:['ThumbnailPanel','AlbumViewPanel','AlbumCarouselPanel'],

    config:{
        refs:{
            ref: '#thumbs',
			thumbnails: '#thumbnails',
			
			galleryTab:'tabbar button[title=Gallery]'
			
//            thumbs:'#thumbs',
//            selector:'#thumbs'
        }
    },
    init: function(){
        console.log('Album Controller initialized');

       this.control({
           'thumbnailpanel':{
               itemtap:'viewCarousel',
               itemtaphold:'loadOptions'

           },
           'button[action=refreshGallery]':{
               tap:'refreshImages'
           },
               'button[action=getRecent]': {
                // tap:'loadGallery'
				tap:'loadHome'
            }
       });

    },


    viewCarousel: function(view, index, item ,e)
    {
		// if(!view.lastTapHold || (view.lastTapHold - new Date() > 1000)){
		// 		console.log('itemtap');}
	
        var rec = view.getStore('VulaMobi.store.Images').data.items;
        // console.log(rec);
        var albumCarousel = Ext.create('VulaMobi.view.AlbumCarouselPanel');
        Ext.Viewport.mask({xtype:'loadmask'});
        for(var i=0; i< rec.length; i++)
        {
            albumCarousel.add({
                html:'<img  id="carouselImage" src="'+ rec[i].data.path+'"/>'
				  // html:'<div class="img" style="background-image:url('+ rec[i].data.path+');"></div>'
            });

        }
	
        Ext.Viewport.unmask();
    //    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.setActiveItem(albumCarousel);
        albumCarousel.setActiveItem(index);
	

    },
    refreshImages: function()
    {
        var imageStore = Ext.getStore('images_Store');
     //   console.log(imageStore);
        imageStore.removeAll();
        Ext.Viewport.mask({xtype:'loadmask', message: 'Refreshing gallery ...'});
        Ext.Ajax.request({
            url:'http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?gallery/dir',
            method:'POST',
            disableCaching:false,
            withCredentials:true,
            useDefaultXhrHeader:false,
            params:{
                //change these to localhost params
                 username:localStorage.getItem("username"),
                 password:localStorage.getItem("password")
            },
            success:function(response){
                Ext.Viewport.unmask();
                //   alert(response.responseText);
                var json = Ext.decode(response.responseText);
             //   console.log(json);
                for(var i=0; i< json.files.length; i++){
                    var date = json.files[i]['date'];
                    var name = json.files[i]['name'];
                    var path = json.files[i]['path'];
                    var size = json.files[i]['size'];
                    var thumb = json.files[i]['thumb'];

                    imageStore.add({name:name, date:date, path:path,
                        size:size, thumb:thumb});
                }
                imageStore.sync();
                var thumbview = Ext.getCmp('thumbs');
                thumbview.refresh();
            }, // end of success function
            failure: function(response){
                console.log(response.responseText);
                Ext
            }
        });
        console.log('Image Gallery refreshed');
    },


    loadGallery: function(){
        var imageStore = Ext.getStore('images_Store');
        // add a loading mask on the viewport
        Ext.Viewport.mask({xtype:'loadmask'});
        //Ajax request to retrieve the json object and put in the image store
        imageStore.removeAll();
        Ext.Ajax.request({
            url:'http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?gallery/dir',
			timeout:12000,
            method:'POST',
            disableCaching:false,
            withCredentials:true,
            useDefaultXhrHeader:false,
            params:{
                 username:localStorage.getItem("username"),
                    password:localStorage.getItem("password")
            },
            success:function(response){
                Ext.Viewport.unmask();
				
                var json = Ext.decode(response.responseText);
                var date, name, path, size, thumb;
                for(var i=0; i< json.files.length; i++){
                     date = json.files[i]['date'];
                     name = json.files[i]['name'];
                     path = json.files[i]['path'];
                     size = json.files[i]['size'];
                     thumb = json.files[i]['thumb'];


                    imageStore.add({name:name, date:date, path:path,
                        size:size, thumb:thumb});
                }
                imageStore.sync();
				imageStore.sort();
                var thumbview = Ext.getCmp('thumbs');
                thumbview.refresh();
				var storeCount = imageStore.getCount();
				console.log(storeCount);
				// var galleryTab = this.getGalleryTab();
				// 			console.log(galleryTab);
				 console.log('Gallery loaded');
            }, // end of success function
            failure: function(response){
                Ext.Viewport.unmask();
				Ext.Msg.alert('Error: Failed to load gallery');
                console.log(response.responseText);
            }
        });
       
    },

    loadOptions: function(list, index, item ,e)
    {
		// list.lastTapHold = new Date();
		// console.log('itemtaphold');
        var overlay = Ext.Viewport.add({
           xtype:'panel',
            modal: true,
            hideOnMaskTap:true,
            showAnimation:{
                type:'popIn',
                duration: 250,
                easing:'ease-out'
            },
            hideAnimation:{
                type:'popOut',
                duration: 250,
                easing:'ease-out'
            },
            centered:true,
            width: Ext.os.deviceType == 'Phone' ? 260 : 400,
            height: Ext.os.deviceType == 'Phone' ? 220 : 400,
            styleHtmlContent:true,
            items:[
                {
                    docked: 'top',
                    xtype:'toolbar',
                    title:'Image'
                }
            ],
            scrollable: true
        });
        overlay.show();
    },
	
	loadHome: function(){
		 	Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
         Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.VulaMobiMainMenu'));
	}
	


});
