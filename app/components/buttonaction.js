var React = require('react');

module.exports = React.createClass({
	clickHandler: function(){
		this.props.clickHandler(newEvent);
	},
	render: function() {
		return (
			<div>
				<button className={this.props.className} onClick={this.clickHandler} >{this.props.text}</button>
			</div>
			);
	}
});