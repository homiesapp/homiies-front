var React = require('react');


module.exports = React.createClass({
	clickHandler: function(event){
		this.props.clickHandler();
	},
	render: function() {
		return (
				<button type="button" className={this.props.className} onClick={this.clickHandler} >{this.props.text}</button>
		);
	}
});