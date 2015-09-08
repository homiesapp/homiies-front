var React = require('react');
var Fieldinput = require('./fieldinput');
var Buttonaction = require('./buttonaction.js')


module.exports = React.createClass({
	handleLogin: function() {
		this.props.onLogin()
	},
	render: function() {
		return (
			<div className="home">
				<Buttonaction className="login-button btn btn-primary btn-lg" onClick={this.handleLogin} text={'Login with Facebook'}/>
			</div>
			);
	}
});




