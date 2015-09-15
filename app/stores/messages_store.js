var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.loading = false;
		this.error = null;
		this.messages = [];
		this.errorOnCreate = null;
		this.textInput = '';

		this.bindActions(
			constants.LOAD_MESSAGES, this.onLoadMessages,
			constants.LOAD_MESSAGES_SUCCESS, this.onLoadMessagesSuccess,
			constants.LOAD_MESSAGES_FAIL, this.onLoadMessagesFail,
			constants.CREATE_MESSAGE, this.onCreateMessage,
			constants.CREATE_MESSAGE_SUCCESS, this.onCreateMessageSuccess,
			constants.CREATE_MESSAGE_FAIL, this.onCreateMessageFail,
			constants.GET_TEXT_INPUT, this.onGetTextInput
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
	onCreateMessage: function () {
		this.loading = true;
		this.emit('change');
	},
	onCreateMessageSuccess: function (payload) {
		this.laoding = false;
		this.errorOnCreate = null;
		this.messages = this.messages.concat(payload.newMessage);
		this.textInput = ''
		this.emit('change');
	},
	onCreateMessageFail: function (payload) {
		console.log('in onCreateMessageFail got the error: ', payload.error);
		this.textInput = '';
		this.emit('change');
	},
	onGetTextInput: function (payload) {
		this.textInput = payload.textInput;
		this.emit('change');
	},
	getState: function () {
		return {
			loading: this.loading,
			error: this.error,
			messages: this.messages,
			errorOnCreate: this.errorOnCreate,
			textInput: this.textInput
		};
	}
});
