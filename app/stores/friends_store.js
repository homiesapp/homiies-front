var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.friends = [];

		this.bindActions(
			constants.SHOW_FRIENDS, this.onShowFriends
		);
	},
	onShowFriends: function (payload) {
		console.log('payload is: ', payload);
	},
	getState: function (payload) {
		return {
			firendsList: this.friends	
		};
	}
});

