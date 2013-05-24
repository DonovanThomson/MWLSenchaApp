Ext.define('VulaMobi.controller.VulaMobiMainMenuController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'button[action=goRecent]': {
                tap: 'recent'
            },
            'button[action=goGallery]': {
                tap: 'gallery'
            },
            'button[action=goFeedback]': {
                tap: 'feedback'
            },
            'button[action=goActiveSites]': {
                tap: 'activesites'
            }
        }
    },

    recent: function(){
       alert('Recent');

    },
    gallery: function(){
        console.log('In gallery function');
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
		
		// change the viewport to the gallery
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('VulaMobi.view.AlbumViewPanel'));


    },
    feedback: function(){
        console.log('Go To Feedback Sites Detected');
        //populates the active sites store with the users active sites
        var FeedbackSiteStore = Ext.create("VulaMobi.store.FeedbackActiveSites"); //creates the sites store
        Ext.Viewport.mask({xtype:'loadmask', message:'Loading Active Sites'});
        Ext.Ajax.request({
            url:'http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?student/sites',
            method:'POST',
            disableCaching:false,
            withCredentials: true,
            useDefaultXhrHeader: false,
            params:
            {
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            },
            success: function(response) {


                console.log('Site store added');

                //adding the data to the store
                var data = Ext.decode(response.responseText);
                var temp = data.active_sites.length;
                for(var i = 0; i < data.active_sites.length; i++)
                {

                    var NameSite = data.active_sites[i]['title'];
                    var IDSite = data.active_sites[i]['site_id'];
                    FeedbackSiteStore.add({name : NameSite, siteid : IDSite});
                }



                FeedbackSiteStore.sync();
                console.log(FeedbackSiteStore);
                Ext.Viewport.unmask();
                //navigates to the feedback central active sites form
                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                Ext.Viewport.add(Ext.create('VulaMobi.view.FeedbackActiveSites'));
                console.log('SHOW ACTIVE SITES');
            },
            failure: function(response) {
                alert("FAILURE");
                Ext.Viewport.unmask();
            }


        });


    },
    activesites: function(){

        //does and ajax request to fetch the grades and stores them in a JSON store
        //creates the marks store
        var sitesStore = Ext.create("VulaMobi.store.ActiveSites");

        Ext.Ajax.request
            ({

                url:'http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?student/sites',
                method:'POST',
                disableCaching:false,
                withCredentials: true,
                useDefaultXhrHeader: false,
                params:
                {
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
                },
                success: function(response) {

                        //alert(response.responseText);


                    //adding the data to the store
                    var data = Ext.decode(response.responseText);
                    for(var i = 0; i < data.active_sites.length; i++)
                    {
                        var siteName = data.active_sites[i]['title'];
                        var siteID = data.active_sites[i]['site_id'];

                        sitesStore.add({title : siteName, site_id : siteID });
                    }




                    sitesStore.sync();

                },
                failure: function(response) {
                    alert("FAILURE to load sites");
                }


            });

        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('VulaMobi.view.VulaMobiActiveSites'));
    }

});
/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 9/30/12
 * Time: 12:28 PM
 * To change this template use File | Settings | File Templates.
 */
