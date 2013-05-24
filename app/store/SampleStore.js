Ext.define("VulaMobi.store.SampleStore", {
    extend: "Ext.data.JsonStore",
    config: {
        fields: ['name', 'fans'],
        data: [
            {'name':'Exam', 'fans': 9500},
            {'name':'Tests', 'fans': 2050},
            {'name':'Project', 'fans': 6600},
        ]
    }
});