var React = require('react');
var MessageInput = require('./message_input');
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
			chatInputValue: "ok"
		};
	},
	render: function () {
		var text = "send";

		return (
			<section className="module">
			  <ol className="discussion">
			    <li className="other">
			      <div className="avatar">
			        <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			      </div>
			      <div className="messages mymessage">
			        <p>yeah, they do early flights cause they connect with big airports.  they wanna get u to your connection </p>
			        <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
			      </div>
			    </li>
			    <li className="other">
			      <div className="avatar">
			        <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			      </div>
			      <div className="messages mymessage">
			        <p>Knock Knock</p>
			        <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
			      </div>
			    </li>
			    <li className="self">
			      <div className="avatar">
			        <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			      </div>
			      <div className="messages othermessage">
			        <p>That makes sense.</p>
			        
			        <time datetime="2009-11-13T20:14">37 mins</time>
			      </div>
			    </li>
			    <li className="other">
			      <div className="avatar">
			        <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			      </div>
			      <div className="messages mymessage">
			       <p> tiny master db, and huge document store</p>
			      </div>
			    </li>
			    <li className="other">
			      <div className="avatar">
			        <img src="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
			      </div>
			      <div className="messages mymessage">
			       <p> tiny master db, and huge document store</p>
			      </div>
			    </li>
			  </ol>
			  <footer className="footerfooter">
					<form className="form-inline">
						<MessageInput inputOnChange={this.handleInputChange} value={this.state.chatInputValue} />
					</form>
				</footer>
			</section>
		);
	}
});