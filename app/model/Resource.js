/**
 * The model used by {@link Examples.store.Kittens}.
 */
Ext.define('VulaMobi.model.Resource', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            "name",
            { name: "understanding", type: 'int' }, // holds the understanding of resource by student

        ]
    }
});
