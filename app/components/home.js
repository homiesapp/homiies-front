var React = require('react');
var Friends = require('./friends');

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
				<Friends homies={friends}/>
			</div>
		);
	}
});