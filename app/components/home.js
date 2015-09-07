var React = require('react');
var Friends = require('./friends');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="home">
				<Friends />
			</div>
		);
	}
});