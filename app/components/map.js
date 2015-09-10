var React = require('react');

module.exports = React.createClass({
  clickHandler: function(){
    this.props.clickHandler(newEvent);
  },
  render: function() {
    return (
      <div>
        This is a map
      </div>
      );
  }
});