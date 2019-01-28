module.exports = function(mongoose) {
	return new mongoose.Schema({
		id: Number,
		token: String,
		name: String,
		authLevel: Number,
		phone: String,
		isPaid: Boolean,
		//Storage:[
		//	building: String,
		//	floor: String,
		//	number: Number
		//]
	});
};
