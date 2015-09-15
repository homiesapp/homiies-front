var Fluxxor = require('../../node_modules/fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
	initialize: function () {
		this.friends = [];
		this.loading = false;
		this.error = null;

		this.bindActions(
			constants.LOAD_FRIENDS, this.onLoadFriends,
			constants.LOAD_FRIENDS_SUCCESS, this.onLoadFriendsSuccess,
			constants.LOAD_FRIENDS_FAIL, this.onLoadFriendsFail,
			constants.SHOW_FRIENDS, this.onShowFriends,
			constants.ADD_FRIEND, this.onAddFriend
		);
	},
	onLoadFriends: function () {
	  this.loading = true;
    this.emit('change');
	},
	onLoadFriendsSuccess: function (payload) {
		this.loading = false;
    this.error = null;
    this.friends = payload.friends;
    this.emit('change');
	},
	onLoadFriendsFail: function (payload) {
		console.log('in onLoadFriendsFail got the error: ', payload.error);
	},
	// STILL TO DO 
	onShowFriends: function (payload) {

	},
	// STILL TO DO 

	onAddFriend: function (payload) {
	

	},
	getState: function () {
		return {
			firendsList: this.friends,
			loading: this.loading,
			error: this.error
		};
	}
});

