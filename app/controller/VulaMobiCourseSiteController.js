Ext.define('VulaMobi.controller.VulaMobiCourseSiteController', {
    extend: 'Ext.app.Controller',

    requires: ['VulaMobi.store.Announce','VulaMobi.store.Grades','VulaMobi.store.ResourcesT'
    ],

    config: {
        control: {
            'button[action=backActive]': {
                tap: 'back'
            },
            'button[action=goAnnounce]': {
                tap: 'announce'
            },
            'button[action=goGrade]': {
                tap: 'grade'
            },
            'button[action=goResource]': {
                tap: 'resource'
            }
        }
    },

    back: function(){

        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('VulaMobi.view.VulaMobiActiveSites'));
    },//end back


    announce: function(){

        Ext.Viewport.mask({xtype:'loadmask'});
        //does and ajax request to fetch the course announcements and stores them in a JSON store

        var announceStore = Ext.create("VulaMobi.store.Announce");
        var address ='http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?announce/site/'+localStorage.getItem("siteID");


        Ext.Ajax.request
            ({
                async: false,
                url: address,
                method:'POST',
                disableCaching:true,
                withCredentials: true,
                useDefaultXhrHeader: false,
                params:
                {
                    username:localStorage.getItem("username"),
                    password:localStorage.getItem("password")
                },
                success: function(response) {

                  // alert(response.responseText);


                  // var data = Ext.decode(response.responseText);
                   //alert(data.announcements_site[0].announce_id[0]);
                   // alert(data.announcements_site[0].site_id[0]);

                     //adding the data to the store
                     var data = Ext.decode(response.responseText);
                     for(var i = 0; i < data.announcements_site.length; i++)
                     {
                     var creator = data.announcements_site[0].createdByDisplayName[0];
                     var creationdate = new Date(data.announcements_site[i].createdOn[0]);
                    //
                    var creationdate= Ext.Date.format(creationdate, 'l,  jS  F  h:i:s A');
                    var guy=creationdate;
                     var  ttle= data.announcements_site[i].title[0];
                     var site_Title = data.announcements_site[i].siteTitle[0];
                    var site_ID = data.announcements_site[i].site_id[0];
                    var announc_ID = data.announcements_site[i].announce_id[0];



                     //announceStore.add({title : siteName, site_id : siteID });

                     announceStore.add({createdByDisplayName: creator,
                                        createdOn: guy,
                                        title: ttle,
                                        siteTitle: site_Title,
                                        site_id: site_ID,
                                        announce_id: announc_ID

                     });
                     }




                    announceStore.sync();


                },
                failure: function(response) {
                    alert("FAILURE to load sites");
                }


            });
        Ext.Viewport.unmask();
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('VulaMobi.view.VulaMobiCourseAnnounce'));



    },//end announce


    grade: function(){

         //does and ajax request to fetch the grades and stores them in a JSON store

        var gradesStore = Ext.create("VulaMobi.store.Grades");
        var address ='http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?grade/site/'+localStorage.getItem("siteID");


        Ext.Ajax.request
            ({

                url: address,
                method:'POST',
                disableCaching:true,
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
                        var nme = data.grades[i]['name'];
                        var dte = data.grades[i]['date'];
                        var mrk = data.grades[i]['mark'];

                        gradesStore.add({name : nme, date : dte, mark: mrk });
                    }




                    gradesStore.sync();

                },
                failure: function(response) {
                    alert("FAILURE to load sites");
                }


            });

        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('VulaMobi.view.VulaMobiCourseGrade'));


    },//end grade


    resource: function(){

        var resourceStore = Ext.create("VulaMobi.store.ResourcesT");
        var address ='http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?resource/site/'+localStorage.getItem("siteID");

        Ext.Viewport.mask({xtype:'loadmask'});
        Ext.Ajax.request
            ({

                async: false,
                url: address,
                method:'POST',
                disableCaching:true,
                withCredentials: true,
                useDefaultXhrHeader: false,
                params:
                {
                    username:localStorage.getItem("username"),
                    password:localStorage.getItem("password")
                },
                success: function(response) {
                    Ext.Viewport.unmask();
                   // alert(response.responseText);
                    //adding the data to the store
                    var data = Ext.decode(response.responseText);
                    for(var i = 0; i < data.resources.length; i++)
                    {

                        var typ = data.resources[i]['type'];
                        var ttle = data.resources[i]['title'];
                        var hrf = data.resources[i]['href'];



                        resourceStore.add({type: typ,
                            title: ttle,
                            href: hrf

                        });
                    }




                    resourceStore.sync();


                },
                failure: function(response) {
                    alert("FAILURE to load sites");
                }


            });
        Ext.Viewport.unmask();
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('VulaMobi.view.VulaMobiResourceView'));




    }

});
/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 9/30/12
 * Time: 12:28 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 10/1/12
 * Time: 10:04 AM
 * To change this template use File | Settings | File Templates.
 */
