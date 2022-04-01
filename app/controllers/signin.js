import Controller from '@ember/controller';
import Ember from 'ember';
import fetch from 'fetch';


export default Ember.Controller.extend({
  actions: {
    signin() {
      const firstname = this.get("firstname");
      const lastname = this.get("lastname");
      const loginname = this.get("loginname");
      const pass = this.get("pass");
      var arr = { firstName: firstname, lastName: lastname, loginName: loginname, password: pass };

      fetch('http://localhost:8080/Test/signin', {
        method: 'POST',
        body: JSON.stringify(arr)
      }).then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.response_code + "," + data.response_message);
          if (data.response_message == "success") {
            this.transitionToRoute('login');
          }
          else if (data.response_message == "DataAccessException") {
            alert('Account already exists!!Try again.');
          }
          else if (data.response_message == "PasswordException") {
            alert('Password must be minimum of 5 characters!!Try again.');
          }
          else {
            alert('Cannot create an account.Try again!!');
          }
        });
    }
  }
});
