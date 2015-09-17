var React = require('react');
var Gmap = require('../../node_modules/gmaps');

module.exports = React.createClass({

  componentDidMount: function(){

    // Only componentDidMount is called when the component is first added.
    // This makes sure that our map initialization code is run the first time.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.componentDidUpdate);
    } else {
      this.componentDidUpdate();
    }
  },

  componentDidUpdate: function(position){
    
    var latLng ={
      lat: 49.281887,
      lng: -123.1207
    }

    if(typeof position.coords !== "undefined"){
      latLng.lat = position.coords.latitude;
      latLng.lng = position.coords.longitude;
    }

    var map = new GMaps({
      div: '#map',
      lat: latLng.lat,
      lng: latLng.lng,
      width: '100%',
      height: '100%',
    });
    
    this.props.suggestions.forEach (function(sug){
      map.addMarker({
        lat: sug.lat,
        lng: sug.long,
      });
    });

   

  },

  render: function(){

    return (
      <div id="map"></div>
    );
  }
});