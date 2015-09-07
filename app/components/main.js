var React = require('react');
var Authentication = require('./authentication');
var Home = require('./home');
var Event = require('./event');
var Login = require('./login');
var Signup = require('./signup');
var Friends = require('./friend');

module.exports = React.createClass({
	getInitialState: function() {
        return { authenticated: false };
    },
	onClick: function() {
		this.setState({ authenticated:true });
	},
	render: function() {
		//test data
		var homies =[
			{ username: "Smithy" },
			{ username: "Johnster" },
			{ username: "Bravo" },
			{ username: "Epsilon" }
		];

		return (
			<div className="main">
				<button onClick={this.onClick}><p>Authenticate</p></button>	
				{this.state.authenticated ? <Home /> : <Authentication /> }
				<Friends homies={friends}/>
			</div>
		);
	}
});
				// {this.state.main ? <div>
				// 	<h1>Hello World</h1>
				// 	<button onClick={this.onClick}><p>Click here to go to page 2</p></button>
				// </div> : null }
				// {this.state.authentication? <Authentication /> : null }

