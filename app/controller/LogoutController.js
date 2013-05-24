Ext.define('VulaMobi.controller.LogoutController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'button[action=logout]': {
                tap: 'processLogout'
            }
        }
    },

      processLogout: function(){
        Ext.Viewport.mask({xtype:'loadmask', message:'logging out...'});
        Ext.Ajax.request({
            url:'http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?auth/logout',
            method: 'POST',
            timeout:12000,

            success: function(response){


                if(response.responseText == 'logged_out')
                {
                    // return 'empty';
                    localStorage.clear();
                    Ext.Viewport.unmask();
                   // Ext.Msg.alert(response.responseText);
                   // console.log(response.responseText);
                    // form.reset();
                    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                    Ext.Viewport.setActiveItem(Ext.create('VulaMobi.view.LoginView'));
                }


            }


        });

    }

});
