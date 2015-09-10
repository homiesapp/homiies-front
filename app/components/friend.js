var React = require('react');
var FriendInvite = require('./friend_invite');
var Picture = require('./picture');

module.exports = React.createClass({
  render: function() {

    var user = this.props.homie;

    return (
      <div className="friend">
        <div className="row">
          <div className="col-md-6">
            <Picture imageClass="friend-picture" imageSource="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
          </div>
          <div className="col-md-6">
            

            <FriendInvite />
          </div>
        </div>
      </div>
    );
  }
});