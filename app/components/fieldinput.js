var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="input-group input-group-lg">
			  <span className="input-group-addon" id="sizing-addon1">@</span>
			  <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon1" />
			</div>
			);
	}
});