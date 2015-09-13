var React = require('react');
var MessageInput = require('./message_input');
var MessageBox = require('./message_box');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="chat-container">
				<MessageBox className="" />
				<MessageInput className="" />
			</div>
		);
	}
});






