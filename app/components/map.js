var React = require('react');
var Gmap = require('../../node_modules/gmaps');

module.exports = React.createClass({
  componentDidMount: function(){

    // Only componentDidMount is called when the component is first added.
    // This makes sure that our map initialization code is run the first time.

    this.componentDidUpdate();
  },

  componentDidUpdate: function(){
    
    var map = new GMaps({
      div: '#map',
      lat: -12.043333,
      lng: -77.028333,
      width: '100%',
      height: '100%',
    });
  },

  render: function(){

    return (
      <div id="map"></div>
    );
  }
});