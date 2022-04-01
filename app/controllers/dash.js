import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Controller.extend({
  queryParams: ['page'],

  page:1,
  actions: {
    signout() {

      fetch('http://localhost:8080/Test/signout', {
        method: 'GET',
        credentials: 'include'
      }).then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.response_code + "," + data.response_message);
          if (data.response_message == "success") {
            this.transitionToRoute('login');
          }
        });
    },
    next()
      { 
        this.set('page', this.get('page') + 1);
        // console.log(this.get('page'));
      },
      previous()
      { 
        this.set('page', this.get('page') - 1);
        // console.log(this.get('page'));
      }
  },

});