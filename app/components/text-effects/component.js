import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
		 $('.welcome').textillate({in: { effect: 'flip'}, shuffle: true});
		 $('.thanks').textillate({in: { effect: 'fadeInLeftBig'}, out: { effect: 'fadeOutRightBig'}, loop: true });
		 $('.tlt').textillate({ 
		 	in:  { 
			 		effect: 'fadeIn',
			 		delayScale: 6.5,
				    delay: 50,
				    sync: false,
				    shuffle: true,
				    reverse: false
			 	   }, 
		 	out: {
				    effect: 'fadeOut',
				    delayScale: 2.5,
				    delay: 50,
				    sync: false,
				    shuffle: false,
				    reverse: false
				  },
			type: 'word',
		    loop: true });
	}
});
