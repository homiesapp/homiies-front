var React = require('react');
var Fieldinput = require('./fieldinput');
var Buttonaction = require('./buttonaction.js')


module.exports = React.createClass({
	handleLogin: function() {
		this.props.onLogin()
	},
	render: function() {
		return (
			<div className="login">
				<Buttonaction onClick={this.handleLogin} text={'Login'}/>
			</div>
			);
	}
});




