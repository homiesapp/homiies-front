//React + related components
import React from "react";
import Greeting from "./greeting";
import Main from "./components/main";

//Fluxxor + related components
var Fluxxor = require('../node_modules/fluxxor');
var constants = require('./stores/constants');
var actions = require('./stores/actions');
var EventsStore = require('./stores/events_store');
var FriendsStore = require('./stores/friends_store');

//CSS
require('./css/stylesheet.scss');
require('./css/bootstrap.min.css');
require('./css/font-awesome.min.css');

//stores
var stores = {
	EventsStore: new EventsStore(),
	FriendsStore: new FriendsStore()
}

//create single instance of flux
var flux = new Fluxxor.Flux(stores, actions);

//listen for dspatch event from the dispatcher
flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

//render Main component
React.render(
  <Main flux={flux} />,
  document.body
);

