//listens for the click of one of the buttons, determines which one was clicked and then saves that course and course ID to local memory
/**
 * This is our main application controller. It basically handles including our Kittens store
 * and KittensList view, and then listens to events in the cuteness slider.
 */
Ext.define('VulaMobi.controller.SitesController', {
    extend: 'Ext.app.Controller',
    config: {
        views:['FeedbackSitesView'],
        stores: ['FeedbackActiveSites'],

        control: {
            /**
             * Listen to the change event in the slider component, inside any kittenslistitem
             * component in our view.
             */
            'sitelistitem button': {
                tap: 'onSiteSelection'
            }
        }
    },

    /**
     * Called when the value changes in the cuteness slider.
     */
    onSiteSelection: function(button) {
        //finds the course name and course ID of the course chosen
        var store = Ext.data.StoreManager.lookup('ActiveSiteStore');
        var Name = button.getText();
       var index = store.findExact('name', Name);
       var record = store.getAt(index);
       var ID = record.get('siteid');

        //saves them to local storage
        localStorage.setItem("CourseName", Name);
        localStorage.setItem("CourseID",ID);


        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('VulaMobi.view.FeedbackCentralView'));


    }
});
