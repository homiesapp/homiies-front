var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.currentEvent = {};
		this.loading = false;
		this.error = null;
		this.eventInviteesNumber = 0;

		this.bindActions(
			constants.LOAD_EVENT, this.onLoadEvent,
			constants.LOAD_EVENT_SUCCESS, this.onLoadEventSuccess,
			constants.SHOW_EVENT, this.onShowEvent,
			constants.ADD_EVENT, this.onAddEvent,
			constants.EDIT_EVENT, this.onEditEvent
		);
	},
	// STILL TO DO 
	onEditEvent: function (editEvent) {
		
	},
	// STILL TO DO 
	onLoadEvent: function () {
	  this.loading = true;
    this.emit('change');
	},
	onLoadEventSuccess: function (payload) {
		this.loading = false;
    this.error = null;
    this.event = payload.event;
    this.emit('change');
    this.eventInviteesNumber = payload.event.homiies_attending.length;
	},
	// STILL TO DO 
	onLoadEventFail: function (payload) {

	},
	// STILL TO DO
	onShowEvent: function (payload) {

	},
	// STILL TO DO
	onAddEvent: function (payload) {


	},
	getState: function () {
		return {
			eventList: this.event,
			loading: this.loading,
			error: this.error,
			eventInviteesNumber: this.eventInviteesNumber
		};
	}
});
