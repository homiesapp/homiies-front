var React = require('react');
var Picture = require('./picture')

module.exports = React.createClass({
  render: function() {

    //TODO changes between red X or green checkmark???

    return (
      <div className="invited">
          <Picture imageClass="checkmark" imageSource="../../public/check-mark-512.png"/>
      </div>
    );
  }
});