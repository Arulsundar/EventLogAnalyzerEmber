import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  this.route('signin');
  this.route('changepassword');
  this.route('new');
  this.route('dash');
});
