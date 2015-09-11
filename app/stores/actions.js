var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');
import request from "superagent";

module.exports = {
	createEvent: function(newEvent) {
		this.dispatch(constants.CREATE_EVENT, {newEvent: newEvent});
	},
	logInfo: function(log) {
		console.log('dispatching');
		this.dispatch(constants.LOG_INFO, {log: log});
	},
	showFriends: function (friends) {
		this.dispatch(constants.SHOW_FRIENDS, {friends: friends});
	},
	addFriend: function (friend) {
		this.dispatch(constants.ADD_FRIEND, {friend: friend});
	},
	loadFriends: function () {
		var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';
		this.dispatch(constants.LOAD_FRIENDS);

		request
      .get(host + '/users/' + 1 + '/homiies')
      .set('Accept', 'application/json')
      .end(function(err, res){
        this.dispatch(constants.LOAD_FRIENDS_SUCCESS, {friends: res.body});
      }.bind(this));
	}
};