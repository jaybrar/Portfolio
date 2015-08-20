import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model){
		controller.set('model', ['HTML', 'CSS3', 'JavaScript','Ajax','Git','PHP','SQL','Ruby','CodeIgnighter','Express.js','Angular.js','Ember.js','Rails','Node.js','Github','Sinatra','Soket.io','MongoDb','PostgreSql','Sqlite3','jQuery','Bootstrap','Foundation','Materialize']);
	}
});
