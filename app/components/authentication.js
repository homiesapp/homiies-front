var React = require('react');
var Login = require('./login');
var Signup = require('./signup');


module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<Login />
			</div>
			);
	}
});