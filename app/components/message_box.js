var React = require('react');


module.exports = React.createClass({
	render: function () {
		return (
			<ul> 
				<li className="message self">
					<div>
						<p>Hello Evert</p>
						<time></time>
					</div>
				</li>
				<li className="message other">
					<div>
						<p>Hello Evert</p>
						<time></time>
					</div>
				</li>
				<li className="message self">
					<div>
						<p>Hello Evert</p>
						<time></time>
					</div>
				</li>
				<li className="message other">
					<div>
						<p>Hello Evert</p>
						<time></time>
					</div>
				</li>
				<li className="message self">
					<div>
						<p>Hello Evert</p>
						<time></time>
					</div>
				</li>
			</ul>
		);
	}
});