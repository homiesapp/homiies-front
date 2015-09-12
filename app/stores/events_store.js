var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.events = [];
		this.pendingEvents = [];
		this.attendingEvents = [];
		this.adminEvents = []
		this.loading = false;
		this.error = null;
		this.eventInviteesNumber = 0;

		this.bindActions(
			constants.LOAD_EVENTS, this.onLoadEvents,
			constants.LOAD_EVENTS_SUCCESS, this.onLoadEventsSuccess,
			constants.SHOW_EVENTS, this.onShowEvents,
			constants.LOAD_EVENTS_ORDER_SUCCESS, this.onLoadEventsOrderSuccess
		);
	},
	onLoadEvents: function () {
	  this.loading = true;
    this.emit('change');
	},
	onLoadEventsOrderSuccess: function (payload) {
		this.loading = false;
    this.error = null;
		this.events = payload.events;
		this.emit('change');
	},
	onLoadEventsSuccess: function (payload) {
		this.loading = false;
    this.error = null;
    this.events = payload.events;
    this.attendingEvents = payload.attendingEvents;
    this.pendingEvents = payload.pendingEvents;
    this.adminEvents = payload.adminEvents;
    this.emit('change');
	},
	// STILL TO DO 
	onLoadEventsFail: function (payload) {

	},
	// STILL TO DO
	onShowEvents: function (payload) {

	},
	getState: function () {
		return {
			loading: this.loading,
			error: this.error,
			events: this.events,
			pendingEvents: this.pendingEvents,
			attendingEvents: this.attendingEvents,
			adminEvents: this.adminEvents
		};
	},
	orderEventsByDate: function () {

	}

});
