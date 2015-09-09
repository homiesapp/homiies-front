var React = require('react');


module.exports = React.createClass({
	handleClick: function() {
				console.log("Accepted");
			},	
	render: function() {
			var currentEvent = this.props.currentEvent;
			return (
				<div className="current-event">
					<div>
						<h4>{currentEvent.currentEvent}</h4>
					</div>
				</div>
				);
	}
});


