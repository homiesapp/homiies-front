var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.events = [];
		this.pendingEvents = [];
		this.loading = false;
		this.error = null;
		this.eventInviteesNumber = 0;

		this.bindActions(
			constants.LOAD_EVENTS, this.onLoadEvents,
			constants.LOAD_EVENTS_SUCCESS, this.onLoadEventsSuccess,
			constants.SHOW_EVENTS, this.onShowEvents
		);
	},
	onLoadEvents: function () {
	  this.loading = true;
    this.emit('change');
	},
	onLoadEventsSuccess: function (payload) {
		this.loading = false;
    this.error = null;
    this.events = payload.events;
    this.pendingEvents = payload.pendingEvents;
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
			events: this.events,
			loading: this.loading,
			error: this.error,
			pendingEvents: this.pendingEvents
		};
	}
});
