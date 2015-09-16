var React = require('react');
var FriendInvite = require('./friend_invite');
var Picture = require('./picture');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      invited: false,
    }
  },

  setClass: function() {
    var invBool = !this.state.invited;

    this.setState({
      invited: invBool,
    });
  },

  render: function() {

    var user = this.props.homiie;
    var friendClass = "friend";

    if(this.state.invited){
      friendClass = friendClass + " clicked"
    }

    return (
      <div className={friendClass} onClick={this.setClass}>
        <div className="row">
          <div className="col-md-4">
            <Picture imageClass="friend-picture" imageSource={this.props.picture} />
          </div>
          <div className="col-md-3 friend-username">
          </div>
          <div className="col-md-5">
            <FriendInvite />
          </div>
        </div>
      </div>
    );
  }
});