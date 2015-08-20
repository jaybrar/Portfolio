import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
    $('.parallax').parallax();
  }
});
