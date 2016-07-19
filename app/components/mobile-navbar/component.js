import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
		$('.button-collapse').sideNav();
		// $('.nav-wrapper ul li').click(function(){
		// 	if($(this).text() != 'LinkedIn' && $(this).text() != "GitHub"){
		// 	$('li').removeClass("active red darken-1");
		// 	$(this).addClass("active red darken-1");
		// 	}
		// })
	}
});
