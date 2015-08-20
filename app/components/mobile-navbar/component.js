import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
		$('.button-collapse').sideNav();
		$('ul li').click(function(){
			$('li').removeClass("active red darken-1");
			$(this).addClass("active red darken-1")
		})
	}
});
