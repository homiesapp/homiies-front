var React = require('react');
var Picture = require('./picture')

module.exports = React.createClass({
  render: function() {

    return (
      <div className="profile">
        <div className="col-md-12">
          <Picture imageClass="image-profile" imageSource="" />
        </div>
      </div>
    )
  }
});