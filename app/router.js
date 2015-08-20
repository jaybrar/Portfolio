import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects');
  this.route('about', {path: '/'});
  this.route('resume');
  this.route('skills');
});

export default Router;
