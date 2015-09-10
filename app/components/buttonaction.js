var React = require('react');

var newEvent = {
			time: "payload.eventTime",
			title: "Test Title",
			address: "1 place du trou de balle",
			country: "Canada",
			city: "Vancouver",
			description: "Une super fete de malade mon gars!",
			picture: "test.png",
			category: "Party"
		};

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