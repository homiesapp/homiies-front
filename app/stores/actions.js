var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = {
	createEvent: function(newEvent) {
		this.dispatch(constants.CREATE_EVENT, {newEvent: newEvent});
	},
	logInfo: function(log) {
		console.log('dispatching');
		this.dispatch(constants.LOG_INFO, {log: log});
	},
	showFriends: function () {
		this.dispatch(constants.SHOW_FRIENDS, {friends: friends});
	}
};