import Controller from '@ember/controller';
import Ember from 'ember';
import fetch from 'fetch';


export default Ember.Controller.extend({
  actions: {
    reset() {
      const name = this.get("username");
      const currentpassword = this.get("currentpassword");
      const newpassword = this.get("newpassword");
      var arr = { loginName: name, currentPassword: currentpassword, newPassword: newpassword };
      console.log(name + "," + currentpassword + "," + newpassword);
      fetch('http://localhost:8080/Test/changepassword', {
        method: 'POST',
        body: JSON.stringify(arr)
      }).then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.response_code + "," + data.response_message);
          if (data.response_message == "success") {
            alert('password changed successfully');
          }
          else {
            alert('Invalid Username or Password');
          }
        });
    }
  }
});
