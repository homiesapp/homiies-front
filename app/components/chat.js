//React + Fluxxor
var React = require('react');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var MessagesStore = require('../stores/messages_store');
//components
var MessageBox = require('./message_box');


module.exports = React.createClass({
	mixins: [FluxMixin],
	componentWillMount: function () {
		this.getFlux().addStore('MessagesStore', new MessagesStore());
	},
	render: function () {
		var text = 'Send';
		return (
			<section className="chat_container">
				<MessageBox event_id={this.props.event_id} className="conversation" />
			</section>
		);
	}
});






