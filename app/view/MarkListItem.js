Ext.define('VulaMobi.view.MarkListItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: ['Ext.Button'],
    xtype: 'marklistitem',

    config: {
        nameButton: true,
        cls: 'mark-list-item',
        dataMap: {
            getNameButton: {
                setText: 'name'
            }
        }
    },

    applyNameButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getNameButton());
        console.log("Adds MarkButton");
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