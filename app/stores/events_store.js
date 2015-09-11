var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.events = [];
		this.loading = false;
		this.error = null;

		this.bindActions(
			constants.LOAD_EVENTS, this.onLoadEvents,
			constants.LOAD_EVENTS_SUCCESS, this.onLoadEventsSuccess,
			constants.SHOW_EVENTS, this.onShowEvents,
			constants.ADD_EVENT, this.onAddEvent,
			constants.EDIT_EVENT, this.onEditEvent
		);
	},
	// STILL TO DO 
	onEditEvent: function (editEvent) {

	},
	// STILL TO DO 
	onLoadEventInvitees: function (){

	},
	onLoadEvents: function () {
	  this.loading = true;
    this.emit('change');
	},
	onLoadEventsSuccess: function (payload) {
		this.loading = false;
    this.error = null;
    this.events = payload.events;
    this.emit('change');
	},
	// STILL TO DO 
	onLoadEventsFail: function (payload) {

	},
	// STILL TO DO
	onShowEvents: function (payload) {

	},
	// STILL TO DO
	onAddEvent: function (payload) {


	},
	getState: function () {
		return {
			eventsList: this.events,
			loading: this.loading,
			error: this.error
		};
	}
});
