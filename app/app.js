import React from "react";
require('./css/stylesheet.scss');
require('./css/bootstrap.min.css');
require('./css/font-awesome.min.css');

var Fluxxor = require('../node_modules/fluxxor');

import Greeting from "./greeting";
import Main from "./components/main";


var AuthenticateStore = Fluxxor.createStore({
	initialize: function() {
		this.userId = 0;
		this.authenticated = false;
	}
});

var actions = {
	logout: function(){
		this.dispatch('LOGOUT', {} )
	}
};

var stores = {
	AuthenticateStore: new AuthenticateStore()
};

var flux = new Fluxxor.Flux(stores.actions);


React.render(
  <Main flux={flux} />,
  document.body
);

