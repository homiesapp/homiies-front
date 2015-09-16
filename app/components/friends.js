import request from "superagent";
var React = require('react');
var Friend = require('./friend');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

module.exports = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("FriendsStore")],
  render: function() {
    return (
      <div className="friends">
        {this.state.loading ? <li>Loading...</li> : null}
        {this.state.friendsList.map(function(friend, index) {
          return (
            <Friend  key={friend.id} picture={friend.email}/>
          );
        })}
      </div>
    );
  },
  componentDidMount: function () {
    this.getFlux().actions.loadFriends();
  }, 
  getStateFromFlux: function () {
    var store = this.getFlux().store('FriendsStore');
    return {
      loading: store.loading,
      error: store.error,
      friendsList: store.friends
    };
  }
});