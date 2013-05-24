Ext.define('VulaMobi.controller.FeedbackCentralController', {
    extend: 'Ext.app.Controller',
    config:{
    	 views:['FeedbackCentralView'],
        refs:{
            ref:'loginForm',
           loginForm:'#loginForm',
            selector: '#loginForm'
        }
    },
    init: function(){
       this.control({
            'button[action=GoToGrades]': {tap: 'goToGradesMainMenu'},
            'button[action=GoToWorkload]': {tap: 'goToWorkloadMainMenu'},
            'button[action=backToSite]': {tap: 'goBackToSite'},
            
       });
        console.log('FeedbackCentral Controller initialized');
    },
  //navigates to the workload main menu form form  
goToWorkloadMainMenu: function(){
     Ext.Viewport.mask({xtype:'loadmask', message:'Retrieving Resources'});

	 var MarksStore = Ext.create("VulaMobi.store.Understandings"); 
    //does the ajax call to get the resources and the student understandings
    Ext.Ajax.request({
        url:'http://people.cs.uct.ac.za/~dthomson/WebApp/ajax.php?resource/site/'+localStorage.getItem('FeedbacksiteID'),
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


            console.log(response.responseText);

            //adding the data to the store
            var data = Ext.decode(response.responseText);
            for(var i = 0; i < data.resources.length; i++)
           {
                var NameResource = data.resources[i]['title'];
               console.log(NameResource);
                var understanding = data.resources[i]['understanding'];

                MarksStore.add({name : NameResource, understanding : understanding});
            }




            MarksStore.sync();
            Ext.Viewport.unmask();

          //  console.log(MarksStore);
            console.log('Added');


        },
        failure: function(response) {
            alert("FAILURE");
        }


    });







      Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
	  Ext.Viewport.add(Ext.create('VulaMobi.view.ResourceFeedbackView'));
	  console.log('Go To Workload Main Menu Detected');
  },
// goes to the gradebook main menu form
goToGradesMainMenu: function(){
      var FeedbackSiteStore = Ext.create("VulaMobi.store.TempStore"); //creates the sites store
	 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
	 Ext.Viewport.add(Ext.create('VulaMobi.view.GradebookMainMenuView'));
	 console.log('Go To Gradebook Main Menu Detected');
},
goBackToSite: function(){
	 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
	 Ext.Viewport.add(Ext.create('VulaMobi.view.VulaMobiMainMenu'));
	
	 
},

    
});
