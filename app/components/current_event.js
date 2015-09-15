var React = require('react');


module.exports = React.createClass({	
	render: function() {
		return (
			<div className="current-event">
				<div>
					<h4>{this.props.eventNow}</h4>
				</div>
			</div>
		);
	}
});


