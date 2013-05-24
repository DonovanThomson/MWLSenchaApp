Ext.define('VulaMobi.view.ResourceListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype : 'resourcelistitem',

    /**
     * we are including both Ext.Img component for the image, and the Ext.slider.Slider
     * component for the cuteness slider.
     */
    requires: [
      'Ext.field.SliderExtended'
    ],

    config: {
        /**
         * A custom cls for each item
         */
        cls: 'resouce-list-item',

        /**
         * setup the dataMap. each property is a method in 'this' class, and then
         * inside that config, it will call the method you pass with the value you
         * want, form the record
         */
   
       dataMap: {
            //this will call: this.getImage()     

            getName: {
                setHtml: 'name'
            },

            getSlider: {
                setValue: 'understanding',
                setHelperValue : 'understanding'
            }
        },
        	 /**
        	         * @cfg {Boolean/Object/Ext.Component} name
        	         * The component used to show an image. It is an Ext.Component, so we
        	         * just want to add a cls so we can style it, and add some flex so it
        	         * looks good.
        	         */
        	        name: {
        	            cls: 'x-name',
        	            flex: 1
        	        },

        /**
         * @cfg {Boolean/Object/Ext.slider.Slider} slider
         * The slider component to show the cuteness of the kitten. We just want to
         * add some flex to make it look good.
         */
        slider: {
            flex: 2,
            setValue: 50
        },

        /**
         * We give it a hbox layout so the items are horizontally displayed, and then
         * give it an align of center so they are vertically centered.
         */
        layout: {
            type: 'hbox',
            align: 'center'
        }
    },
    /**
     * Called when you set the {@link #name} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    applyName: function(config) {
        return Ext.factory(config, Ext.Component, this.getName());
    },

    /**
     * Called when you set the {@link #name} configuration, and is passed both the new value
     * (from applyName) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    updateName: function(newName, oldName) {
        if (newName) {
            this.add(newName);
        }

        if (oldName) {
            this.remove(oldName);
        }
    },

    /**
     * Called when you set the {@link #slider} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setSlider}.
     * @private
     */
    applySlider: function(config) {
    	 console.log("Hey Ho");
        return Ext.factory(config,Ext.field.SliderExtended, this.getSlider());
    },

    /**
     * Called when you set the {@link #slider} configuration, and is passed both the new value
     * (from applySlider) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setSlider}.
     * @private
     */
    updateSlider: function(newSlider, oldSlider) {
        if (newSlider) {
            this.add(newSlider);
        }

        if (oldSlider) {
            this.remove(oldSlider);
        }
    }
});
