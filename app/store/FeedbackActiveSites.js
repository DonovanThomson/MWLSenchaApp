/**
 * A simple store that has predefined data. It uses the {@link Example.model.Kitten}
 * model for it's fields definition.
 */
Ext.define('VulaMobi.store.FeedbackActiveSites', {
    extend: 'Ext.data.Store',
    requires: ['VulaMobi.model.FeedbackSite'],

    config: {
        //storeId: 'MarksStore',
        model: 'VulaMobi.model.FeedbackSite',
        storeId: 'FeedbackActiveSiteStore'
    }
});
