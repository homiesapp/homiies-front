var React = require('react');


module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<button className={this.props.className} onClick={this.props.onClick} >{this.props.text}</button>
			</div>
			);
	}
});