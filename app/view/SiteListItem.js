Ext.define('VulaMobi.view.SiteListItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: ['Ext.Button'],
    xtype: 'sitelistitem',

    config: {
        nameButton: true,
        cls: 'site-list-item',
        dataMap: {
            getNameButton: {
                setText: 'name'
            }
        }
    },

    applyNameButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getNameButton());
        console.log("Adds Button");
    },

    updateNameButton: function(newNameButton, oldNameButton) {
        if (oldNameButton) {
            console.log("Adds Button");
            this.remove(oldNameButton);
        }

        if (newNameButton) {
            console.log("Adds Button");
            this.add(newNameButton);
        }
    }
});