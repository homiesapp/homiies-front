var React = require('react');
var ButtonAction = require('./buttonaction');


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
					<div>
						<div className="col-md-6">
							<ButtonAction className="event-accept-button btn btn-success" onClick={this.handleClick} text={'Accept'} />
						</div>
						<div className="col-md-6">
							<ButtonAction className="event-decline-button btn btn-danger" onClick={this.handleClick} text={'Decline'} />
						</div>
					</div>
				</div>
				);
	}
});


