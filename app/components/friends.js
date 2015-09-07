var React = require('react');
var Friend = require('./friend');

module.exports = React.createClass({
  render: function() {

    var friends = this.props.homies;
    console.log(friends);
    return (
      <div className="friends">
        {friends.map(function(friend, index) {
          return <Friend 
                  key =  {index}
                  homie = {friend}/>
        })}
      </div>
    );
  }
});