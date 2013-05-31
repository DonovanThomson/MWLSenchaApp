Ext.define('VulaMobi.controller.SearchController', {
    extend: 'Ext.app.Controller',
    views:'SearchView',
    config:{
        refs:{
            searchForm:'#searchForm'
        }
    },
    init: function(){
        this.control({
            'button[action=submitSearch]': {tap: 'submitSearch'}
            //other tap events go under here




        });

    },

    submitSearch: function(){
        console.log('SearchForContactsDetected');
        //var form = this.getSearchForm().getValue();
        //populates the active sites store with the users active sites
      //  var FeedbackSiteStore = Ext.create("VulaMobi.store.FeedbackActiveSites"); //creates the sites store
       localStorage.setItem('SearchedName',  "Don");
        var ContactsStore = Ext.create("VulaMobi.store.ContactsStore");
       // ContactsStore.sync();



    }
    //other methods go under here -> routing


});
