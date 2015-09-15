var React = require('react');

module.exports = React.createClass({ 
	handleInputChange: function (event) {
		this.props.inputOnChange(event.target.value);
	},
	render: function () {
		return (
			<input type="text" onChange={this.handleInputChange} value={this.props.value} placeholder="Chat here.." className="chat_input form-control" />
		);
	},

});