var React = require('react');
var Picture = require('./picture')

module.exports = React.createClass({
  render: function() {

    return (
      <div className="profile">
        <div className="col-md-12">
          <Picture imageClass="image-profile" imageSource="https://photos-1.dropbox.com/t/2/AAC4R39xlBoeVVh1eVX-hjR3PX6OKJeCojF_u_3FD6lngg/12/389166994/jpeg/32x32/1/1441756800/0/2/Jill%20Greenwood.jpg/CJLvyLkBIAEgAiADIAcoAigDKAc/al8WS61UJTVoTDEW91GrsFseioGo0THIvVjg5NHZfZQ?size=1280x960&size_mode=2" />
        </div>
      </div>
    )
  }
});