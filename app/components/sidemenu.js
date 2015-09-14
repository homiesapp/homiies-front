//React + Fluxxor
var React = require('react');

//Components
var Profile = require('./profile');
var CurrentEvents = require('./current_events');

//Sidemenu
module.exports = React.createClass({
  render: function() {
  	var text = "New event";
    return (
     	<div>
     			<Profile />
     			<CurrentEvents />
     	</div>
    );
  }
});