var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.loading = false;
		this.error = null;
		this.messages = [];
		this.newMessage = '';

		this.bindActions(
			constants.LOAD_MESSAGES, this.onLoadMessages,
			constants.LOAD_MESSAGES_SUCCESS, this.onLoadMessagesSuccess,
			constants.LOAD_MESSAGES_FAIL, this.onLoadMessagesFail
		);
	},
	onLoadMessages: function () {
	  this.loading = true;
    this.emit('change');
	},
	onLoadMessagesSuccess: function (payload) {
		this.loading = false;
    this.error = null;
    this.messages = payload.messages;
    this.emit('change');
    // debugger;
	},
	onLoadMessagesFail: function (payload) {
		console.log('onLoadMessagesFail: error is: ', payload.error);
	},
	getState: function () {
		return {
			loading: this.loading,
			error: this.error,
			messages: this.messages,
			newMessage: this.newMessage
		};
	}
});
