var React = require('react');
var Picture = require('./picture')

module.exports = React.createClass({
  render: function() {

    return (
      <div className="profile">
        <div className="col-md-12">
        		  <Picture imageClass="image-profile" imageSource="../../public/image3.jpeg" />
        		  <h3 className="andrea">Andrea</h3>
        </div>
      </div>
    )
  }
});