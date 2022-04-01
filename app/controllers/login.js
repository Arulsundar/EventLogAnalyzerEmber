import Controller from '@ember/controller';
import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Controller.extend({
  actions: {
    submit() {
      const name = this.get("name");
      const pass = this.get("pass");
      var arr = { username: name, password: pass };
      console.log(name + "," + pass);
      fetch('http://localhost:8080/Test/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(arr)
      }).then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.response_code + "," + data.response_message);
          if (data.response_message == "success") {
            this.transitionToRoute('dash');
          }
          else {
            alert('Invalid Username or Password');
          }
        });
    },
    signin()
    {
      // auth2.grantOfflineAccess().then(signInCallback);
      window.location.replace(" https://accounts.localzoho.com/oauth/v2/auth?response_type=code&client_id=1000.P4U2QRQOI4MXGJESITQJQYTTC1RQ3M&scope=AaaServer.profile.Read&redirect_uri=http://localhost:8080/Test/zohologin&prompt=consent");
      // window.location.replace(" https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=1000.Q5IQQXHSS4FS4NR0UEB73MC6FDWPFL&scope=AaaServer.profile.Read&redirect_uri=http://localhost:8080/Test/zohologin&prompt=consent");
    }
  }
});
