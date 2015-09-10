var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.friends = [];

		this.bindAction(
			constants.SHOW_FRIENDS, this.onShowFriends
		);
	},
	onShowFriends: function (payload) {
		console.log('payload is: ', payload);
	}
});

