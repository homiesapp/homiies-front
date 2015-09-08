var React = require('react');
var Buttonaction = require('./buttonaction.js')
var Fieldinput = require('./fieldinput');

module.exports = React.createClass({
	handleSignup: function() {
		this.props.onSignUp()
	},
	handleLogin: function() {
		this.props.onLogin()
	},
	render: function() {
		return (
			<div className="home">
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<Fieldinput />
						<Fieldinput />
						<Fieldinput />
						<Buttonaction onClick={this.handleLogin} text={'login'}/>
						<Buttonaction onClick={this.handleSignup} text={'Sign Up'}/>
					</div>
					<div className="col-md-4"></div>
				</div>
			</div>
			);
	}
});