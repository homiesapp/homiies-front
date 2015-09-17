var React = require('react');
var Picture = require('./picture')

module.exports = React.createClass({
  render: function() {

    //TODO changes between red X or green checkmark???

    return (
      <div className="invited">
          <Picture imageClass="checkmark2" imageSource="../../public/check-mark-5122.png"/>
      </div>
    );
  }
});