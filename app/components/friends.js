var React = require('react');
var Friends= require('./friend');

module.exports = React.createClass({
  render: function() {

    var friends = this.props.friends;

    return (
      <div className="friends">
        {friends.map(function(friend, index) {
          return <Friend 
                  homie={friend}/>
        })}
      </div>
    );
  }
});