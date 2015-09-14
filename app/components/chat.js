var React = require('react');
var MessageInput = require('./message_input');
var MessageBox = require('./message_box');
var ButtonAction = require('./button_action');

module.exports = React.createClass({
	handleInputChange: function (value) {
		console.log(value);
		this.setState({
			chatInputValue: value
		});
	},
	handleButtonClick: function () {
		console.log('button click!');
	},
	getInitialState: function () {
		return {
			messages: [],
			chatInputValue: ""
		};
	},
	render: function () {
		var text = 'Send';
		return (
			<section className="chat_container">
				<MessageBox className="conversation" />
			</section>
		);
	}
});






