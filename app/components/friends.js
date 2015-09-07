var React = require('react');

module.exports = React.createClass({
  render: function() {

    var friends = this.props.homies;

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