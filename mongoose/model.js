module.exports = (function() {
	const Integer = require('mongoose-int32');
	const mongoose = require('mongoose');
	const con = mongoose.connection;
	con.on('error', console.error);
	con.once('open', function() {
		console.log("Connected to mongod server");
	});

	mongoose.connect('mongodb://localhost/hihi');

	const schema = {};
	const model = {};

	schema.Post = require('./schema/post')(mongoose);
	schema.User = require('./schema/user')(mongoose);

	for(let k in schema) {
		model[k] = mongoose.model(k,schema[k]);
	}
	return model;
})();
