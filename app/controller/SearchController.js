Ext.define('VulaMobi.controller.SearchController', {
    extend: 'Ext.app.Controller',
    views:'VulaMobi.view.SearchView',

    config:{
        refs:{
            searchForm:'#searchForm',
            stores: ['ContactsStore']
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
        var form = this.getSearchForm().getValues();
        //populates the active sites store with the users active sites

       localStorage.setItem('SearchedName',  form.searchedName);
        var ContactsStore = Ext.create("VulaMobi.store.ContactsStore");
       // ContactsStore.sync();
        Ext.Ajax.request({
            url:'https://bsg.myworklife.com/app/api/rest//contact/'+localStorage.getItem('SearchedName'),
            method:'GET',
            headers: {
                Authorization: localStorage.getItem('Token')
            },

            success: function(response){
                //   Ext.Msg.alert(response.responseXML);
                var xml = response.responseXML;
                var Contacts = xml.getElementsByTagName('Contacts');

                for(var i = 0; i < Contacts[0].childNodes.length; i++)
                {
                   var displayName = Contacts[0].childNodes[i].attributes['displayName'].value;
                   var cellnumber = Contacts[0].childNodes[i].attributes['cellNumber'].value;
              //     var extensionNumber = Contacts[0].childNodes[i].attributes['extensionNumber'].value;
                 //  var homeNumber = Contacts[0].childNodes[i].attributes['homeNumber'].value;
                //   var workNumber = Contacts[0].childNodes[i].attributes['workNumber'].value;
                //   var skypename = Contacts[0].childNodes[i].attributes['skype'].value;
                //   var MSN = Contacts[0].childNodes[i].attributes['msn'].value;
                    ContactsStore.add({name : displayName,cellnum: cellnumber });
                    ContactsStore.sync();
                    console.log(displayName + "Added") ;
                    console.log(ContactsStore);
                    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                    Ext.Viewport.add(Ext.create('VulaMobi.view.SearchResultsView'));
                }
            },
            failure: function(response){
                Ext.Msg.alert('Logged out of system');
                //  console.log('Success response: ' + response.responseText);


            }

        });


    }
    //other methods go under here -> routing


});
