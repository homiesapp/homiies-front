var React = require('react');
var Chat = require('./chat');
var Map = require('./map');
var Votes = require('./votes');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="col-sm-8 main-center-div">
				<div className="col-md-12 event-info">
					<div className="row">
						<div className="col-md-6 bred quadrant">
							<h1>SWIPE</h1>
						</div>
						<div className="col-md-6 bblue quadrant">
							<Votes />
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 bgreen quadrant">
							<Map />
						</div>
						<div className="col-md-6 byellow quadrant">
							<Chat />
						</div>
					</div>
				</div>
			</div>
		);
	},

});