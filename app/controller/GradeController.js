/**
 * This is our main application controller. It basically handles including our Kittens store
 * and KittensList view, and then listens to events in the cuteness slider.
 */
Ext.define('VulaMobi.controller.GradeController', {
    extend: 'Ext.app.Controller',
    config: {


        control: {
            /**
             * Listen to the change event in the slider component, inside any kittenslistitem
             * component in our view.
             */
            'feedbackGradeslist sliderfieldextended': {
                change: 'onUnderstandingChange'
            }
        }
    },

    /**
     * Called when the value changes in the cuteness slider.
     */
    onUnderstandingChange: function(slider, thumb, value) {
        //changes the value of the corresponding store then echos the changed record
        var store = Ext.data.StoreManager.lookup('Understandings');
        var key = slider.getId();
        var num = key.substr(24)
        console.log(slider);
        //	var index = store.findExact('key', key);
        var record = store.getAt(num-1);
        record.set('understanding',value);
        //record.se
        store.sync();

        console.log(num);
        console.log(value);
    }
});
