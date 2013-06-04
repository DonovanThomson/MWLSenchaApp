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
                console.log(xml);
                var Contacts = xml.getElementsByTagName('Contacts');

                for(var i = 0; i < Contacts[0].childNodes.length; i++)
                {
                   var displayName = Contacts[0].childNodes[i].attributes['displayName'].value;
                   var cellnumber = Contacts[0].childNodes[i].attributes['cellNumber'].value;
                    var extensionNumber;
                    var homeNumber;
                    var skypename;
                    var MSN ;
                   //extension
                    var node = Contacts[0].childNodes[i].attributes['extensionNumber'];

                    if (node == null)
                        extensionNumber = 'N/A';
                        else if (Contacts[0].childNodes[i].attributes['extensionNumber'].value == '')
                        extensionNumber = 'N/A';
                        else   extensionNumber = Contacts[0].childNodes[i].attributes['extensionNumber'].value ;




                    //home number
                    var node1 = Contacts[0].childNodes[i].attributes['homeNumber'];
                    if (node1 == null)
                        homeNumber = 'N/A';
                    else if (Contacts[0].childNodes[i].attributes['homeNumber'].value == '')
                        homeNumber = 'N/A';
                    else   homeNumber = Contacts[0].childNodes[i].attributes['homeNumber'].value ;


                    //skype
                    var node2 = Contacts[0].childNodes[i].attributes['skypename'];
                    if (node2 == null)
                        skypename = 'N/A';
                    else if (Contacts[0].childNodes[i].attributes['skypename'].value == '')
                        skypename = 'N/A';
                    else   skypename = Contacts[0].childNodes[i].attributes['skypename'].value ;



                    //msn
                    var node3 = Contacts[0].childNodes[i].attributes['msn'];
                    if (node3 == null)
                        MSN = 'N/A';
                    else if (Contacts[0].childNodes[i].attributes['msn'].value == '')
                        MSN = 'N/A';
                    else   MSN = Contacts[0].childNodes[i].attributes['msn'].value ;


                    //email
                    var email;
                    var node4 = Contacts[0].childNodes[i].attributes['email'];

                    if (node4 == null)
                        email = 'N/A';
                    else if (Contacts[0].childNodes[i].attributes['email'].value == '')
                        email = 'N/A';
                    else   email = Contacts[0].childNodes[i].attributes['email'].value ;


                    ContactsStore.add({name : displayName,cellnum: cellnumber, bsgextension :extensionNumber, homenum : homeNumber, skype : skypename, msn : MSN , email : email });
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
