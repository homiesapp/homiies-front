var React = require('react');
var Picture = require('./picture')

module.exports = React.createClass({
  render: function() {

    return (
      <div className="profile">
        <div className="col-md-12">
        		  <Picture imageClass="image-profile" imageSource="http://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg" />
        </div>
      </div>
    )
  }
});