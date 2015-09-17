var React = require('react');


module.exports = React.createClass({
	render: function () {
		return (
		  <li className={this.props.className}>
		    <div className="avatar">
		      <img src={this.props.avatar} />
		    </div>
		    <div className="messages mymessage">
		      <p>{this.props.text}</p>
		      <time datetime={this.props.created_at}>Timothy • {this.props.created_at}</time>
		    </div>
		  </li>
		);
	}
});