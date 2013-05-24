Ext.define('VulaMobi.controller.MarkListController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'button[action=backMarkList]': {
                tap: 'BackToMarksList'
            }
        }
    },

    BackToMarksList: function(){

        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('VulaMobi.view.VulaMobiActiveSites'));
    }//end back



});
/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 9/30/12
 * Time: 12:28 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: tshumba
 * Date: 10/1/12
 * Time: 10:04 AM
 * To change this template use File | Settings | File Templates.
 */
