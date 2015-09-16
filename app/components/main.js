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
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="#">Homiies</a>
				    </div>

				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav">
				        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
				        <li><a href="#">Link</a></li>
				      </ul>
				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="#">Link</a></li>
				      </ul>
				    </div>
				  </div>
				</nav>
				{this.state.authenticated ? <Home /> : <Authentication /> }
			</div>
		);
	}
});
				