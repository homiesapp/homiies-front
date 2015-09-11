var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');
import request from "superagent";

module.exports = {
	// EVENTS STORE
	listEventInvitees: function (){
		this.dispatch(constants.LOAD_EVENT_INVITEES, {eventInvitees: eventInvitees});
	},
	editEvent: function (event) {
		this.dispatch(constants.EDIT_EVENT, {editEvent: editEvent});
	},
	showEvents: function (events) {
		this.dispatch(constants.SHOW_EVENTS, {events: events});
	},
	addEvent: function (event) {
		this.dispatch(constants.ADD_EVENT, {addEvent: addEvent});
	},
	loadEvents: function () {
		var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';
		this.dispatch(constants.LOAD_EVENTS);

		request
      .get(host + '/users/' + 1 + '/events')
      .set('Accept', 'application/json')
      .end(function(err, res){
        this.dispatch(constants.LOAD_EVENT_SUCCESS, {events: res.body});
      }.bind(this));
	},
	// FRIENDS STORE
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