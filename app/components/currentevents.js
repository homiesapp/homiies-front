var React = require('react');
var CurrentEvent = require('./currentevent')


module.exports = React.createClass({
  render: function() {

  	var currentEvents =[
			{ currentEvent: "Event 1" },
			{ currentEvent: "Event 2" },
			{ currentEvent: "Event 3" },
			{ currentEvent: "Event 4" },
      { currentEvent: "Event 1" },
      { currentEvent: "Event 2" },
      { currentEvent: "Event 3" },
      { currentEvent: "Event 4" }
		];
    return (
     	<div>
          {currentEvents.map(function(currentEvent, index) {
           return <CurrentEvent 
                   key =  {index}
                   currentEvent = {currentEvent}/>
         })}
      </div>
    )
  }
});