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
	onShowFriends: function (payload) {
		console.log('payload is: ', payload);
	},
	onAddFriend: function (payload) {
		console.log('payload is: ', payload);
		this.friends.push(payload);
	},
	getState: function () {
		return {
			firendsList: this.friends,
			loading: this.loading,
			error: this.error
		};
	}
});

