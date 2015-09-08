var React = require('react');
var Profile = require('./profile')
var CurrentEvents = require('./currentevents')



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