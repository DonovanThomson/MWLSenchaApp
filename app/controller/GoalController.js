Ext.define('VulaMobi.controller.GoalController', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            /**
             * Listen to the change event in the slider component, inside any kittenslistitem
             * component in our view.
             */
            'feedbackgoalview sliderfieldextended': {
                change: 'onGoalChange'
            },
            'button[action=goToViewGrademodeling]': {tap: 'goToViewModelings'}

        }
    },

    onGoalChange: function(slider, thumb, value) {
        // saves the new value to local storage
        localStorage.setItem("Goal",value) ;
        console.log(value);

    },

    goToViewModelings: function(){
        console.log('called') ;

        var ModelingMarksStore = Ext.create("VulaMobi.store.ModelingStore");
        Ext.Viewport.mask({xtype:'loadmask', message:'Calculating Marks'});
        Ext.Ajax.request({



            url:'http://people.cs.uct.ac.za/~dthomson/WebApp/ajax.php?modeling/site/'+localStorage.getItem('FeedbacksiteID'),
            method:'POST',
            disableCaching:false,
            withCredentials: true,
            useDefaultXhrHeader: false,
            params:
            {
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password"),
                goal:localStorage.getItem("Goal")
            },
            success: function(response) {

                console.log(response);


                // adding the data to the store
                var data = Ext.decode(response.responseText);
                console.log(response.responseText);
                for(var i = 0; i < data.grades.length; i++)
                {
                    var NameTest = data.grades[i]['name'];
                    var Testmark = data.grades[i]['mark'];
                    var Testdate = data.grades[i]['date'];
                    var Status =   data.grades[i]['status'];
                    console.log(Status);
                    ModelingMarksStore.add({name : NameTest, mark : Testmark, date : Testdate, status : Status });
                }




                ModelingMarksStore.sync();
                Ext.Viewport.unmask();

                //   console.log(MarksStore);
                //    console.log('Added');
                //navigates to the View marks graph
                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                Ext.Viewport.add(Ext.create('VulaMobi.view.ForwardModelingView'));

            },
            failure: function(response) {
                alert("FAILURE");
                Ext.Viewport.unmask();
            }


        });

    }
});
