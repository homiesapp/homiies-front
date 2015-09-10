import React from "react";
require('./css/stylesheet.scss');
require('./css/bootstrap.min.css');
require('./css/font-awesome.min.css');

var Fluxxor = require('../node_modules/fluxxor');
var constants = require('./stores/constants');
var actions = require('./stores/actions');

import Greeting from "./greeting";
import Main from "./components/main";

var FluxMixin = Fluxxor.FluxMixin(React),
	StoreWatchMixin = Fluxxor.StoreWatchMixin;

var EventStore = Fluxxor.createStore({
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

var stores = {
	EventStore: new EventStore()
}

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});
console.log(flux);

React.render(
  <Main flux={flux} />,
  document.body
);

