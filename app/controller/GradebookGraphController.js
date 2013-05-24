Ext.define('VulaMobi.controller.GradebookGraphController', {
    extend: 'Ext.app.Controller',

   views:['GradebookGraphView'],

    config:{
        refs:{
            ref:'loginForm',
           loginForm:'#loginForm',
            selector: '#loginForm'
        }
    },
    init: function(){
       this.control({
            'button[action=TestG]': {tap: 'TestGr'},
            
            
       });

    },
 
// goes to the gradebook main menu form
TestGr: function(){
	 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
	 Ext.Viewport.add(Ext.create('VulaMobi.view.GradebookMainMenuView'));
	 console.log('Testing Graph');
},

    
});
