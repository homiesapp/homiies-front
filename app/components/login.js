var React = require('react');
var Fieldinput = require('./fieldinput');
var ButtonAction = require('./button_action.js')


module.exports = React.createClass({
	handleLogin: function() {
		this.props.onLogin();
	},
	render: function() {
		return (
			<div className="home">
				<ButtonAction className="login-button btn btn-primary btn-lg" clickHandler={this.handleLogin} text={'Login with Facebook'}/>
			</div>
			);
	}
});




