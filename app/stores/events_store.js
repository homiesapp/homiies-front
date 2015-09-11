var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function(){
		this.events = {};

		this.bindActions(
			constants.SHOW_EVENTS, this.onShowEvents,
			constants.DELETE_EVENT, this.onDeleteEvent,
			constants.CREATE_EVENT, this.onCreateEvent,
			constants.EDIT_EVENT, this.onEditEvent,
			constants.LOG_INFO, this.onLogInfo
		);
	},

	onLogInfo: function(payload) {
		console.log('Using Floxxor', payload);
	},

	onShowEvents: function(payload) {

	},

	onCreateEvent: function(payload) {
		var newEvent = {
			time: payload.eventTime,
			title: payload.eventTitle,
			address: payload.eventAddress,
			country: "Canada",
			city: "Vancouver",
			description: payload.eventDescription,
			picture: payload.eventPicture,
			category: "Party"
		};
		this.events[id] = newEvent;
		this.emit("change");
	},
	onDeleteEvent: function(payload) {

	},
	onEditEvent: function (payload) {

	},
	getState: function (payload) {
		return {
			events: this.events
		}
	}
})