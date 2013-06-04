function base64_encode (data) {
    // http://kevin.vanzonneveld.net
    // +   original by: Tyler Akins (http://rumkin.com)
    // +   improved by: Bayron Guevara
    // +   improved by: Thunder.m
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Pellentesque Malesuada
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Rafał Kukawski (http://kukawski.pl)
    // *     example 1: base64_encode('Kevin van Zonneveld');
    // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    // mozilla has this native
    // - but breaks in 2.0.0.12!
    //if (typeof this.window['btoa'] == 'function') {
    //    return btoa(data);
    //}
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        enc = "",
        tmp_arr = [];

    if (!data) {
        return data;
    }

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1 << 16 | o2 << 8 | o3;

        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    var r = data.length % 3;

    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

}


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
        window.localStorage.removeItem('Token');

        var form = this.getLoginForm().getValues();
        var username = form.username;
        var password = form.password;
        localStorage.setItem('Token', 'Basic '+ base64_encode(username+':'+password))
        var OtherSitesStore = Ext.create("VulaMobi.store.RecentlySearchedStore");
        Ext.Ajax.request({
            url:'https://bsg.myworklife.com/app/api/rest//contact/Devlin',
            method:'GET',
            headers: {
                Authorization: 'Basic '+ base64_encode(username+':'+password)
            },

            success: function(response){
                //   Ext.Msg.alert(response.responseXML);
                var ContactsStore = Ext.create("VulaMobi.store.RecentlySearchedStore");
                var ContactsStore = Ext.create("VulaMobi.store.RecentTempStore");
                console.log(response.responseText);
                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                Ext.Viewport.add(Ext.create('VulaMobi.view.MainMenu'));

            },
            failure: function(response){
                Ext.Msg.alert('Details Incorrect');
                //  console.log('Success response: ' + response.responseText);


            }

        });
    }


});

