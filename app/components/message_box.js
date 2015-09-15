//React + Fluxxor
var React = require('react');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

//Components
var MessageInput = require('./message_input');
var ButtonAction = require('./button_action');

module.exports = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin("MessagesStore")],
	handleInputChange: function (value) {
		console.log(value);
		this.setState({
			chatInputValue: value
		});
	},
	getStateFromFlux: function () {
		var store = this.getFlux().store('MessagesStore');
		return {
			loading: store.loading,
			error: store.error,
			messages: store.messages,
			newMessage: store.newMessage
		};
	},
	componentDidMount: function () {
		this.getFlux().actions.loadMessages(this.props.event_id);
	},
	handleAddMessage: function (event) {
		event.preventDefault();
		this.handleOnSubmit();
	},
	handleOnSubmit: function (event) {
		event.preventDefault();
		this.setState({
			messages: this.state.messages.concat(this.state.chatInputValue),
			chatInputValue: ''
		});
	},
	render: function () {
		var text = "send";
		console.log(this.state.messages);
		return (
			<section className="module">
			  <ol className="discussion">
			  {this.state.loading ? <li>Loading...</li> : null}
			  {
			  	this.state.messages.map(function (message) {
			  		return (
			  			<Message 
			  				className="other"
			  				key={message.id}
			  				text={message.text}
			  				user_id={message.user_id}
			  				created_at={message.created_at} />
			  		);
			  	})
			  }
				</ol>
			  <footer className="footerfooter">
					<form className="form-inline" onSubmit={this.handleOnSubmit} >
						<MessageInput inputOnChange={this.handleInputChange} onKeyUp={this.handleAddMessage} value={this.state.chatInputValue} />
					</form>
				</footer>
			</section>
			  //   <li className="other">
			  //     <div className="avatar">
			  //       <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			  //     </div>
			  //     <div className="messages mymessage">
			  //       <p>yeah, they do early flights cause they connect with big airports.  they wanna get u to your connection </p>
			  //       <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
			  //     </div>
			  //   </li>
			  //   <li className="other">
			  //     <div className="avatar">
			  //       <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			  //     </div>
			  //     <div className="messages mymessage">
			  //       <p>Knock Knock</p>
			  //       <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
			  //     </div>
			  //   </li>
			  //   <li className="self">
			  //     <div className="avatar">
			  //       <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			  //     </div>
			  //     <div className="messages othermessage">
			  //       <p>That makes sense.</p>
			        
			  //       <time datetime="2009-11-13T20:14">37 mins</time>
			  //     </div>
			  //   </li>
			  //   <li className="other">
			  //     <div className="avatar">
			  //       <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			  //     </div>
			  //     <div className="messages mymessage">
			  //      <p> tiny master db, and huge document store</p>
			  //     </div>
			  //   </li>
			  //   <li className="other">
			  //     <div className="avatar">
			  //       <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			  //     </div>
			  //     <div className="messages mymessage">
			  //      <p> tiny master db, and huge document store</p>
			  //     </div>
			  //   </li>
			  //   <li className="other">
			  //     <div className="avatar">
			  //       <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			  //     </div>
			  //     <div className="messages mymessage">
			  //      <p> tiny master db, and huge document store</p>
			  //     </div>
			  //   </li>
			  //   <li className="other">
			  //     <div className="avatar">
			  //       <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			  //     </div>
			  //     <div className="messages mymessage">
			  //      <p> tiny master db, and huge document store</p>
			  //     </div>
			  //   </li>
			  //   <li className="other">
			  //     <div className="avatar">
			  //       <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			  //     </div>
			  //     <div className="messages mymessage">
			  //      <p> tiny master db, and huge document store</p>
			  //     </div>
			  //   </li>
			    
			  // </ol>
		);
	}
});