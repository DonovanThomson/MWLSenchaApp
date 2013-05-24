Ext.define('VulaMobi.controller.LoginController', {
    extend: 'Ext.app.Controller',


    config:{
        refs:{

           loginForm:'#loginForm'

        }
    },
    init: function(){
        this.control({
            'button[action=submitLogin]': {
                tap: 'submitLoginForm'
            }

        });
       // console.log('Login Controller initialized');
    },

    submitLoginForm: function(){
        var form = this.getLoginForm().getValues();
        localStorage.setItem('Username',form.username)
        localStorage.setItem('Password',form.password)
        Ext.Ajax.request({
            url:'https://bsg.myworklife.com/app/api/rest//contact/Donovan HTTP/1.1 ',
            method:'GET',
            timeout:12000,
            withCredentials: true,
            useDefaultXhrHeader: false,
            params:{
                Username:form.username,
                Password:form.password

            },
            success: function(response){
            //   Ext.Msg.alert(response.responseXML);
                 console.log(response.responseText);


            },
            failure: function(response){
                Ext.Msg.alert('b');
                //  console.log('Success response: ' + response.responseText);


            }

        });
    }


});

