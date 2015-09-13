var React = require('react');
var Login = require('./login');
var Signup = require('./signup');
import request from "superagent";

module.exports = React.createClass({
	onLoginHandler: function () {
		console.log('bring me to fb!');
	},
	render: function() {
		return (
			<div>
				<Login onLogin={this.onLoginHandler} />
			</div>
		);
	}
});