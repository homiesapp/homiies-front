var React = require('react');
var FriendInvite = require('./friend_invite');

module.exports = React.createClass({
  render: function() {

    var user = this.props.homie;

    return (
      <div className="friend">
        {user.username}
        <FriendInvite />
      </div>
    );
  }
});