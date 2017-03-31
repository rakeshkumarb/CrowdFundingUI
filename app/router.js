import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('login');
  this.route('sign-up');
  this.route('coming-soon');
  this.route('start-campaign');
  this.route('reward');
  this.route('fund-raiser');
  this.route('service-provider', function() {
      this.route('participants', {
          path: '/participants'
      });
      this.route('campaigns', {
          path: '/campaigns'
      });
  });
  this.route('browse');
  this.route('funder-history');
  this.route('fund-raiser', function(){
      this.route('list-approve-bids', {
          path: '/list-approve-bids'
      });
      this.route('status-of-fund-transfer', {
          path: '/status-of-fund-transfer'
      });
      this.route('execute-campaign', {
          path: '/execute-campaign'
      });
      this.route('deliver-commitments', {
          path: '/deliver-commitments'
      });
  })
});

export default Router;