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
      }.bind(this))
      .fail(function (err) {
				this.dispatch(constants.CREATE_EVENT_FAIL, {
					error: err
				});
			}.bind(this))
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

	// FRIENDS STORE
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
      	if (res.ok) {
      		this.dispatch(constants.LOAD_FRIENDS_SUCCESS, {friends: res.body});
      	} else {
      		this.dispatch(constants.LOAD_FRIENDS_FAIL, {error: err});
      	}
      }.bind(this));
	},

	// MESSAGES STORE
	loadMessages: function (chatroom_id) {
		var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';
		this.dispatch(constants.LOAD_MESSAGES);

		$.ajax({
			method: 'GET',
			url: host + '/messages?chatroom_id=' + chatroom_id
		})
			.done(function (res) {
				this.dispatch(constants.LOAD_MESSAGES_SUCCESS, {
					messages: res
				});
			}.bind(this))
			.fail(function (err) {
				this.dispatch(constants.LOAD_MESSAGES_FAIL, {
					error: err
				});
			}.bind(this));
	},
	addMessage: function (newMessage) {
		var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';
		this.dispatch(constants.CREATE_MESSAGE);

		$.ajax({
      method: "POST",
      url: host + '/messages',
      data: newMessage
    })
      .done(function(res) {
        this.dispatch(constants.CREATE_MESSAGE_SUCCESS, {
        	newMessage: res
        });
      }.bind(this))
      .fail(function (err) {
				this.dispatch(constants.CREATE_MESSAGE_FAIL, {
					error: err
				});
			}.bind(this))
	},
	setTextInputValue: function (text) {
		this.dispatch(constants.GET_TEXT_INPUT, {textInput: text});
	}
};





