Ext.define('VulaMobi.controller.CameraController', {
    extend: 'Ext.app.Controller',
   views:['AlbumViewPanel'],
    config:{
        refs:{
            // imageTabButton: 'tabbar button[title=Images]',
            addButton: 'button[action=addPicture]'
             },
        control:{
            addButton: {tap:'launchCameraAction'}
                 }
    },
    init: function(){
         console.log('Camera Controller initialized');
//
        document.addEventListener('deviceready',onDeviceReady,false);

        function onDeviceReady(){
            console.log('Phonegap is ready');
        }
    }, // end of init function

    launchCameraAction: function(){

        console.log('In launch Camera Action function');
        var cameraActionSheet = Ext.create ('Ext.ActionSheet',{
            floating:true,
            centered: true,

             items:[
                 {
                     xtype:'titlebar',
                     title: 'Select an action',
                     ui:'light'
                 },
                 {
                     text:'Camera',
                     action:'launchCamera',
                     handler:function()
                     {
                         console.log('Handler for launching camera');
                         cameraActionSheet.hide();
                         cameraActionSheet.destroy();

                         navigator.camera.getPicture(onSuccess, onFail, {quality:50,
                             destinationType:0});

                         function onSuccess(imageData){
                             Ext.Viewport.mask({xtype:'loadmask', message:'Uploading image...'});
                             Ext.Ajax.request({
                                 url:'http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?gallery/upload',
                                 method: 'POST',
                                 timeout: 12000,
                                 params:{
                                     image:imageData,
                                     username:localStorage.getItem("username"),
					                    password:localStorage.getItem("password")
                                 },
                                 success: function(response)
                                 {
                                     Ext.Viewport.unmask();
                                     Ext.Msg.alert(response.responseText);
                                     refreshImages();
                                     console.log(response.responseText);
                                 },
                                 failure: function(response){
                                     Ext.Viewport.unmask();
                                     Ext.Msg.alert(response.responseText);
                                     console.log(response.responseText);
                                 }
                             });
                         }// end of on success function

                         function onFail(){
                             Ext.Msg.alert(message);
                             console.log(message);
                         }

                         function refreshImages()
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
                         }

                     } // end of action sheet camera button
                 },
                 {
                     text:'Gallery',
                     action:'launchGallery',
                     handler:function()
                     {
                         console.log('Handler for launching gallery');
                         cameraActionSheet.hide();
                         cameraActionSheet.destroy();

                         navigator.camera.getPicture(onSuccess, onFail, {quality:50,
                             destinationType:0, sourceType:2 });

                         function onSuccess(imageData){

                             Ext.Viewport.mask({xtype:'loadmask', message:'Uploading image...'});
                             Ext.Ajax.request({
                                 url:'http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?gallery/upload',
                                 method: 'POST',
                                 timeout: 12000,
                                  params:{
                                        image:imageData,
                                      	 username:localStorage.getItem("username"),
						                    password:localStorage.getItem("password")
                                  },
                                 success: function(response)
                                 {
                                     Ext.Viewport.unmask();
                                     Ext.Msg.alert(response.responseText);
                                     refreshImages();
                                     console.log(response.responseText);
                                 },
                                 failure: function(response){
                                     Ext.Viewport.unmask();
                                     Ext.Msg.alert(response.responseText);
                                     console.log(response.responseText);
                                 }
                             });
                         }
                         function onFail(){
                             Ext.Msg.alert(message);
                             console.log('Failed because ' + message);
                         }
                         function refreshImages()
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
                         }
                     }
                 },
                 {
                     text:'Cancel',
                     ui:'decline',
                     handler:function()
                     {
                         cameraActionSheet.hide();
                         cameraActionSheet.destroy();
                     }
                 }
             ]
        });
        Ext.Viewport.add(cameraActionSheet);
        cameraActionSheet.show();
     }

 });

