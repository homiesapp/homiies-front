var React = require('react');
var Friends = require('./friends');
var SideMenu = require('./sidemenu');
var Event = require('./event');

module.exports = React.createClass({
	render: function() {
		//test data
		var friends =[
			{ username: "Smithy" },
			{ username: "Johnster" },
			{ username: "Bravo" },
			{ username: "Epsilon" },
			{ username: "Smithy" },
			{ username: "Johnster" },
			{ username: "Bravo" },
			{ username: "Epsilon" },
			{ username: "Epsilon" },
			{ username: "Smithy" },
			{ username: "Johnster" },
			{ username: "Bravo" },
			{ username: "Epsilon" }
		];

		return (
			<div className="home row">
				<div className="side-menu close"><SideMenu /></div>
				<div className="col-sm-9 main-center-div">
					<div className="col-md-4"></div>
					<div className="col-md-8 event-circle"></div>
					<div className="col-md-4"></div>
				</div>
        <div className="col-sm-3 friends-column">
					<Friends homies={friends}/>
				</div>
			</div>
		);
	}
});