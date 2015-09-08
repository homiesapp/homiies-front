var React = require('react');
var Authentication = require('./authentication');
var Home = require('./home');
var Fluxxor = require('../../node_modules/fluxxor');

module.exports = React.createClass({
	getInitialState: function() {
        return { authenticated: false };
    },
	handleClick: function() {
		this.setState({ authenticated: true });
	},
	render: function() {
		return (
			<div className="main container-fluid">
				{this.state.authenticated ? <Home /> : <Authentication /> }
			</div>
		);
	}
});
				