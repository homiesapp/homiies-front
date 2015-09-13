var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="col-sm-8 main-center-div hide">
				<div className="col-md-12 event-info">
					<div className="row">
						<div className="col-md-6 bred quadrant">
							<h1>SWIPE</h1>
						</div>
						<div className="col-md-6 bblue quadrant"><h1>Votes</h1></div>
					</div>
					<div className="row">
						<div className="col-md-6 bgreen quadrant"><h1>MAP</h1></div>
						<div className="col-md-6 byellow quadrant"><h1>CHAT</h1></div>
					</div>
				</div>
			</div>
		);
	},

});