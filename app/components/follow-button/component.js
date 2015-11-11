// app/components/follow-button/component.js

import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['follow-container'],

  isFollowing: Ember.computed('profile.followers', 'session.currentUser', function() {
    return this.get('profile.followers').isAny('id', this.get('session.currentUser.id'));
  }),
  
});