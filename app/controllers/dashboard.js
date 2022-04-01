import Controller from '@ember/controller';
import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Controller.extend({
  actions: {
    signout() {
      fetch('http://localhost:8080/Test/signout', {
        method: 'GET',
        credentials: 'include'
      }).then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // console.log(data.response_code + "," + data.response_message);
          if (data.response_message == "success") {
            this.transitionToRoute('login');
          }
        });
    }
  }
});
