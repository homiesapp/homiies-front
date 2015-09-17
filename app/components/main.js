var React = require('react');
var Authentication = require('./authentication');
var Home = require('./home');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

module.exports = React.createClass({
	mixins: [FluxMixin],
	getInitialState: function() {
		console.log('In main' + this.props.flux);
    return { authenticated: true };
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
				