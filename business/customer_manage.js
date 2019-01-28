module.exports = (function() {
	const model = require('../mongoose/model');

	async function getUser(email) {
		return await model.User.findOne({email: email});
	}
	async function getAllUsers() {
		return await model.User.find();
	}
	async function joinUser(email, pwd) {
		if(await getUser(email)) throw "email is existed";
		const newUser = new model.User({email: email, pwd: pwd});
		const result = await newUser.save();

		return result;
	}
	return {
		getUser: getUser,
		getAllUsers: getAllUsers,
		joinUser: joinUser,
	};

})();
