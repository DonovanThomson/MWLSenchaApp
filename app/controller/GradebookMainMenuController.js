Ext.define('VulaMobi.controller.GradebookMainMenuController', {
    extend: 'Ext.app.Controller',

    views:['GradebookMainMenuView'],

    config:{

    	 models:['Mark'],
    	 stores: ['SampleStore','Marks'],
        refs:{
            ref:'loginForm',
           loginForm:'#loginForm',
            selector: '#loginForm'
        }
    },
    init: function(){
       this.control({
            'button[action=ViewGrades]': {tap: 'goToViewGrades'},
            'button[action=ViewWeightings]': {tap: 'goToViewWeightings'},
            'button[action=GradePlaning]': {tap: 'goToGradeplanning'},
            'button[action=GradeDashboard]': {tap: 'goToDashboard'},
            'button[action=backToFeedbackCentral]': {tap: 'goToFeedbackCentral'},
            'button[action=GoHome]': {tap: 'goBackToSite'}
            
       });
        console.log('Gradebook Controller initialized');
    },
    
  
 
goToViewGrades: function(){
	
//does and ajax request to fetch the grades and stores them in a JSON store
//creates the marks store
                   			var MarksStore = Ext.create("VulaMobi.store.Marks");
    Ext.Viewport.mask({xtype:'loadmask', message:'Retrieving Grades'});
 Ext.Ajax.request({

     url:'http://people.cs.uct.ac.za/~dthomson/WebApp/ajax.php?grade/site/'+localStorage.getItem('FeedbacksiteID'),
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
                

                 
             
                   	//adding the data to the store
    				var data = Ext.decode(response.responseText);
    				for(var i = 0; i < data.grades.length; i++)
    				{
    					var NameTest = data.grades[i]['name'];
    					var Testmark = data.grades[i]['mark'];
                        if  (Testmark =='-')
                        {
                            Testmark =0;
                            console.log('- changed');
                        }
    					var Testdate = data.grades[i]['date'];
    					var Cweighting = data.grades[i]['weighting'];
    					var Csubminimum = data.grades[i]['subminimum'];
    				MarksStore.add({name : NameTest, mark : Testmark, date : Testdate, weighting : Cweighting, subminimum : Csubminimum });
    				}
                   		
                   	
                   		

                	MarksStore.sync();
                	

                   	console.log(MarksStore);
                   		console.log('Added'); Ext.Viewport.unmask();

                   		
                   			},
                   			failure: function(response) {
                   			alert("FAILURE");
                                   Ext.Viewport.unmask();
                   			}
                   
                	
                	});
   
   
    //navigates to the View marks graph
	 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    console.log('strange');
	  Ext.Viewport.add(Ext.create('VulaMobi.view.FeedbackGradesList'));

	  
},
goToViewWeightings: function(){
	
//does and ajax request to fetch the weightings and stores them in a JSON store
//creates the marks store
                 			var MarksStore = Ext.create("VulaMobi.store.Marks");
    var Store2 = Ext.create("VulaMobi.store.Pie");
    Ext.Viewport.mask({xtype:'loadmask', message:'Calculating Grades'});
    Ext.Ajax.request({

                 url:'http://people.cs.uct.ac.za/~dthomson/WebApp/ajax.php?grade/site/'+localStorage.getItem('FeedbacksiteID'),
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




                 	//adding the data to the store
  				var data = Ext.decode(response.responseText);
  				for(var i = 0; i < data.grades.length; i++)
  				{
  					var NameTest = data.grades[i]['name'];
  					var Testmark = data.grades[i]['mark'];
  					var Testdate = data.grades[i]['date'];
  					var Cweighting = data.grades[i]['weighting'];
  					var Csubminimum = data.grades[i]['subminimum'];
  				MarksStore.add({name : NameTest, mark : Testmark, date : Testdate, weighting : Cweighting, subminimum : Csubminimum });
  				}




              	MarksStore.sync();
                Ext.Viewport.unmask();

                 	console.log(MarksStore);
                 		console.log('Added');


                 			},
                 			failure: function(response) {
                 			alert("FAILURE");
                                 Ext.Viewport.unmask();
                 			}


              	});

 
  //navigates to the View grades graph 
	 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
	  Ext.Viewport.add(Ext.create('VulaMobi.view.PieChartView'));
	  console.log('Go To Grades graph Detected');
	  
},

// goes to the gradebook main menu form
goToGradesMainMenu: function(){
	 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
	 Ext.Viewport.add(Ext.create('VulaMobi.view.GradebookMainMenuView'));
	 console.log('Go To Gradebook Main Menu Detected');
},
//navigates to the workload main menu form form  
goToGradeplanning: function(){
    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    Ext.Viewport.add(Ext.create('VulaMobi.view.FeedbackGoalView'));
    console.log('Go To Gradebook Main Menu Detected');

},
goToDashboard: function(){
	 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
	 Ext.Viewport.add(Ext.create('VulaMobi.view.GradebookMainMenuView'));
	 console.log('Go To Gradebook Main Menu Detected');
},
//goes back a screen to feedback central
goToFeedbackCentral: function(){
	 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
	 Ext.Viewport.add(Ext.create('VulaMobi.view.FeedbackCentralView'));
	 console.log('Go To Gradebook Main Menu Detected');
},
//goes back to home (site view) but for now logs out
goBackToSite: function(){
	 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
	 Ext.Viewport.add(Ext.create('VulaMobi.view.VulaMobiMainMenu'));
	 console.log('Go To Gradebook Main Menu Detected');
}

    
});
