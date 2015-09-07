var React = require('react');
var Authentication = require('./authentication');

module.exports = React.createClass({
	handleClick: function() {
		console.log('Click')
	},
	render: function() {
		return (
			<div>
				<h1>Hello World</h1>
				<button onClick={this.handleClick}><p>Click here to go to page 2</p></button>
				<Authentication />
			</div>
		);
	}
});