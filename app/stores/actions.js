var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');
import request from "superagent";
import $ from "jquery";

module.exports = {
// EVENTS STORE
	showEvents: function (events) {
		this.dispatch(constants.SHOW_EVENTS, {events: events});
	},
	createEvent: function (newEvent) {
		var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';
		this.dispatch(constants.CREATE_EVENT);

		$.ajax({
      method: "POST",
      url: host + '/users/' + 1 + '/events',
      data: newEvent
    })
      .done(function(res) {
        this.dispatch(constants.CREATE_EVENT_SUCCESS, {
        	newEvent: res
        });
      }.bind(this));
	},
	loadEventsOrder: function () {
		var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';
		this.dispatch(constants.LOAD_EVENTS);

		request
			.get(host + '/users/' + 1 + '/events?option=time')
			.set('Accept', 'application/json')
			.end(function (err, res) {
				this.dispatch(constants.LOAD_EVENTS_ORDER_SUCCESS, {
					events: res.body
				});
			}.bind(this));
	},
	loadEvents: function () {
		var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';
		this.dispatch(constants.LOAD_EVENTS);

		request
      .get(host + '/users/' + 1 + '/events?option=all')
      .set('Accept', 'application/json')
      .end(function(err, res){
        this.dispatch(constants.LOAD_EVENTS_SUCCESS, {
        	events: res.body
        });
      }.bind(this));
	},
// EVENT STORE
	editEvent: function (event) {
		this.dispatch(constants.EDIT_EVENT, {editEvent: editEvent});
	},
	showEvent: function (events) {
		this.dispatch(constants.SHOW_EVENTS, {events: events});
	},
	addEvent: function (event) {
		this.dispatch(constants.ADD_EVENT, {addEvent: addEvent});
	},
	loadEvent: function () {
		var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';
		this.dispatch(constants.LOAD_EVENT);

		request
      .get(host + '/users/' + 1 + '/events/' + 1)
      .set('Accept', 'application/json')
      .end(function(err, res){
        this.dispatch(constants.LOAD_EVENT_SUCCESS, {
        	event: res.body
        });
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