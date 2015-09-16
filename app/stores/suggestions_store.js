var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.suggestions = [];
		this.error = null;
		this.loading = false;
		this.currentSuggestion = 0;

		this.bindActions(
			constants.LOAD_SUGGESTIONS, this.onLoadSuggestions,
			constants.LOAD_SUGGESTIONS_SUCCESS, this.onLoadSuggestionsSuccess,
			constants.LOAD_SUGGESTIONS_FAIL, this.onLoadSuggestionsFail,
			constants.MAKE_SUGGESTION, this.onMakeSuggestion,
			constants.MAKE_SUGGESTION_SUCCESS, this.onMakeSuggestionSuccess,
			constants.MAKE_SUGGESTION_FAIL, this.onMakeSuggestionFail
		);
	},
	onLoadSuggestions: function () {
		this.loading = true;
		this.emit('change');
	},
	onLoadSuggestionsSuccess: function (payload) {
		this.loading = false;
		this.suggestions = payload.suggestions;
		this.currentSuggestion = this.suggestions[0]
		this.error = null;
		this.emit('change');
	},
	onLoadSuggestionsFail: function (payload) {
		console.log('in onLoadSuggestionsFail got the error: ', payload.error);
	},
	onMakeSuggestion: function (){

	},
	onMakeSuggestionSuccess: function (payload){

	},
	onMakeSuggestionFail: function (payload){
		console.log("in onMakeSuggestionFail got the error: ", payload.error)
	},
	getState: function () {
		return {
			suggestions: this.suggestions,
			error: this.error,
			loading: this.loading,
			currentSuggestion: this.currentSuggestion
		};
	}
})