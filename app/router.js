import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('projects', function() {
    this.route('project', { path: ':project_id' }, function() {
      this.route('repositories');
    });
  });
  this.route('repositories', function() {
    this.route('repository', { path: ':repository_id'}, function() {
      this.route('projects');
    });
  });
});

export default Router;
