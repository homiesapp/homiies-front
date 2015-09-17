var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<img className={this.props.imageClass} src={this.props.imageSource} />
				
			</div>
			);
	}
});