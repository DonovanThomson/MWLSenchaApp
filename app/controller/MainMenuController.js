Ext.define('VulaMobi.controller.MainMenuController', {
    extend: 'Ext.app.Controller',
    config:{
        refs:{
        /**    ref:'loginForm',
            ref:'searchForm',
            searchForm :'#searchForm',
            loginForm:'#loginForm',
            selector: '#loginForm'   **/
        }
    },
    init: function(){
        this.control({
            'button[action=goToFeedback]': {tap: 'goToFeedbackSitesView'}
            //other tap events go under here




        });

    },

    goToFeedbackSitesView: function(){
     console.log('Go To Feedback Sites Detected');
        //populates the active sites store with the users active sites
        var FeedbackSiteStore = Ext.create("VulaMobi.store.FeedbackActiveSites"); //creates the sites store

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
                alert(response.responseText);

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

                //navigates to the feedback central active sites form
                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                Ext.Viewport.add(Ext.create('VulaMobi.view.SitesView'));
                console.log('SHOW ACTIVE SITES');
            },
            failure: function(response) {
                alert("FAILURE");
            }


        });






    }
    //other methods go under here -> routing


});
