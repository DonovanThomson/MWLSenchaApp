//this controller listens for events from the ResourceFeedbackView and acts accordingly
Ext.define('VulaMobi.controller.ResourceFeedbackController', {
    extend: 'Ext.app.Controller',



    config:{
        views:['ResourceFeedbackView'],
        stores: ['SampleStore','Marks'],
        refs:{
            ref:'loginForm',
            loginForm:'#loginForm',
            selector: '#loginForm'
        }
    },
    init: function(){
        this.control({
            'button[action=GoBackSave]': {tap: 'goBackSave'},
            'button[action=GoHomeSave]': {tap: 'goHomeSave'}

        });
        console.log('Gradebook Controller initialized');
    },


//does an ajax request and sends the JSOn Object to the php back end for storage, then redirects to the feedback central view
    goBackSave: function(){
        var  allData = new Array();
        var  Name = new Array();
        var  metric = new Array();

        var store = Ext.getStore('Understandings');
        store.each(function(record){

            var object = { };
            object["name"] = record.get('name');
            object["understanding"] = record.get('understanding');
            allData.push(object);
        });
        //  allData = Name+ metric;
        // allData[1] = metric;
        var dataToBeSentToServer = Ext.JSON.encode(allData);

        Ext.Ajax.request({
            //need to change URL

            url:'http://people.cs.uct.ac.za/~dthomson/WebApp/ajax.php?understanding/update',
            method:'POST',
            disableCaching:false,
            withCredentials: true,
            useDefaultXhrHeader: false,

            //get the store and converts it into a JSON object
            params:
            {
                //the JSON Store
                Understandings : dataToBeSentToServer,
                //the student number
                studentNumber:localStorage.getItem("username"),
                //the course ID
                CourseID:localStorage.getItem("FeedbacksiteID"),
                //the course name
                CourseName:localStorage.getItem("FeedbacksiteName")

            },
            success: function(response) {



                alert(response.responseText);


            },
            failure: function(response) {
            	  alert("Updating understandings Failed");

            }


        });



        //navigates to the View grades graph
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('VulaMobi.view.FeedbackCentralView'));
        console.log('Go To Grades graph Detected');

    },
    //does an ajax request and sends the JSOn Object to the php back end for storage, then redirects to the feedback central view
    goHomeSave: function(){

      var  allData = new Array();
      var  Name = new Array();
      var  metric = new Array();

        var store = Ext.getStore('Understandings');
        store.each(function(record){

            var object = { };
            object["name"] = record.get('name');
            object["understanding"] = record.get('understanding');
            allData.push(object);
        });
      //  allData = Name+ metric;
       // allData[1] = metric;
        var dataToBeSentToServer = Ext.JSON.encode(allData);
        Ext.Ajax.request({

            //need to change URL
            url:'http://people.cs.uct.ac.za/~dthomson/WebApp/ajax.php?understanding/update',
            method:'POST',
            disableCaching:false,
            withCredentials: true,
            useDefaultXhrHeader: false,

            //get the store and converts it into a JSON object
            params:
            {
                //the JSON Store
                Understandings : dataToBeSentToServer,
                //the student number
                studentNumber:localStorage.getItem("username"),
                //the course ID
                CourseID:localStorage.getItem("FeedbacksiteID"),
                //the course name
                CourseName:localStorage.getItem("FeedbacksiteName")

            },
            success: function(response) {

            alert(response.responseText);
             //   alert(response.responseText);



            },
            failure: function(response) {
                alert("Updating understandings Failed");
            }


        });



        //navigates to the View grades graph
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('VulaMobi.view.FeedbackCentralView'));
        console.log('Go To Grades graph Detected');

    }


});
