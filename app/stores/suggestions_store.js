var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.suggestions = [];
		this.error = null;
		this.laoding = false;

		this.bindActions(
			constants.LOAD_SUGGESTIONS, this.onLoadSuggestions,
			constants.LOAD_SUGGESTIONS_SUCCESS, this.onLoadSuggestionsSuccess,
			constants.LOAD_SUGGESTIONS_FAIL, this.onLoadSuggestionsFail,
		);
	},
	onLoadSuggestions: function () {
		this.loading = true;
		this.emit('change');
	},
	onLoadSuggestionsSuccess: function (payload) {
		this.loading = false;
		this.suggestions = payload.suggestions;
		this.error = null;
		this.emit('change');
	},
	onLoadSuggestionsFail: function (payload) {
		console.log('in onLoadSuggestionsFail got the error: ', payload.error);
	},
	getState: function () {
		return {
			suggestions: this.suggestions,
			error: this.error,
			loading: this.loading
		};
	}
})