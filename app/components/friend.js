var React = require('react');

module.exports = React.createClass({
  render: function() {

    var user = this.props.homie;

    return (
      <div className="friend">
        user.username
      </div>
    );
  }
});