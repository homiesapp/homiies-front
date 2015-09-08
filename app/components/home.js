var React = require('react');
var Friends = require('./friends');
var SideMenu = require('./sidemenu')

module.exports = React.createClass({
	render: function() {
		//test data
		var friends =[
			{ username: "Smithy" },
			{ username: "Johnster" },
			{ username: "Bravo" },
			{ username: "Epsilon" }
		];

		return (
			<div className="home">
				<div className="col-md-2 side-menu open"><SideMenu /></div>
				<div className="col-md-8 main-center-div">
					<div className="col-md-5"></div>
					<div className="col-md-2"></div>
					<div className="col-md-5"></div>
				</div>
        		<div className="col-md-2 friends-column">
					<Friends homies={friends}/>
				</div>
			</div>
		);
	}
});