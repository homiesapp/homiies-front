var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.events = [];
		this.pendingEvents = [];
		this.attendingEvents = [];
		this.adminEvents = []
		this.loading = false;
		this.creating = false;
		this.error = null;
		this.eventInviteesNumber = 0;

		this.bindActions(
			constants.CREATE_EVENT, this.onCreateEvent,
			constants.CREATE_EVENT_SUCCESS, this.onCreateEventSuccess,
			constants.CREATE_EVENT_FAIL, this.onCreateEventFail,
			constants.LOAD_EVENTS, this.onLoadEvents,
			constants.LOAD_EVENTS_SUCCESS, this.onLoadEventsSuccess,
			constants.LOAD_EVENTS_ORDER_SUCCESS, this.onLoadEventsOrderSuccess
		);
	},
	onCreateEvent: function () {
		this.creating = true;
		this.emit('change');
	},
	onCreateEventSuccess: function (payload) {
		this.creating = false;
		this.events = this.events.concat(payload.newEvent);
		this.emit('change');
	},
	onCreateEventFail: function () {
		console.log('From EventsStore: create event failed');
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
		console.log('From EventsStore: load events failed');
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
