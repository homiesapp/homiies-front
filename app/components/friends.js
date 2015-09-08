var React = require('react');
var Friend = require('./friend');

module.exports = React.createClass({
  render: function() {

    var friends = this.props.homies;
    console.log(friends);
    return (
      <div className="friends">
        <div className="col-md-10"></div>
        <div className="col-md-2 friends-column">
          {friends.map(function(friend, index) {
           return <Friend 
                   key =  {index}
                   homie = {friend}/>
         })}
        </div>
      </div>
    );
  }
});