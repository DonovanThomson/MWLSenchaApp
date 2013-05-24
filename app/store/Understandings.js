/**
 * A simple store that has predefined data. It uses the {@link Example.model.Kitten}
 * model for it's fields definition.
 */
Ext.define('VulaMobi.store.Understandings', {
    extend: 'Ext.data.Store',
    requires: ['VulaMobi.model.Resource'],

    config: {
	storeId: 'Understandings',
        model: 'VulaMobi.model.Resource',


    }
});
