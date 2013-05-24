Ext.define('VulaMobi.view.MarkList', {
    extend: 'Ext.dataview.DataView',
    xtype: 'feedbacksiteview',
    alias: ['widget.marklistview'],
    /**
     * We need to require the {@link Example.view.KittensListItem} class so we can
     * use it as the {@link #defaultType} below
     */
    requires: ['VulaMobi.view.MarkListItem'],

    config: {
        /**
         * Tell the dataview to use components for each item
         */
        useComponents: true,

        /**
         * Give is a cls so we can style it
         */
        cls: 'site-list',

        /**
         * Use the {@link Example.store.Kittens} store as it's data source.
         *
         * Note: we can use 'Kittens' because we have defined the store as a store in
         * our {@link Example.controller.Application} controller
         */
        store: 'MarksStore',

        /**
         * Set the default item for this component list to be the {@link Example.view.KittensListItem}
         * class.
         */
        defaultType: 'marklistitem'
    }
});
