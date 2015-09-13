var React = require('react');
var Login = require('./login');
var Signup = require('./signup');
import request from "superagent";

module.exports = React.createClass({
	onLoginHandler: function () {
		var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';

		request
			.get(host + '/gettofuckingfb')
			.end(function(err, res) {
					console.log('connection to fb', err);
        });
	},
	render: function() {
		return (
			<div>
				<Login onLogin={this.onLoginHandler} />
			</div>
			);
	}
});