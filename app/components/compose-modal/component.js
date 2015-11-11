// app/components/compose-modal/component.js

import Ember from 'ember';

export default Ember.Component.extend({
  
  focusOnTextarea: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', () => {
      this.$().find('textarea').focus();
    });
  })
  
});