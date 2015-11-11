// app/home/controller.js

import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(), // This lets us access the application controller's actions
  actions: {
    openComposeModal: function() {
      this.get('application').send('toggleComposeModal');
    },
    // Our new logout action:
    logout: function() {
      this.get('session').invalidate();
      this.transitionToRoute('index');
    }
  }
});