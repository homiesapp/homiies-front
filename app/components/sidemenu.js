var React = require('react');
var Profile = require('./profile')
var CurrentEvents = require('./current_events')



module.exports = React.createClass({
  render: function() {

    return (
     	<div>
     			<Profile />
     			<CurrentEvents />
     	</div>
    )
  }
});