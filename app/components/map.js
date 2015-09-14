var React = require('react');
var Gmap = require('../../node_modules/gmaps');

module.exports = React.createClass({

  componentDidMount: function(){

    // Only componentDidMount is called when the component is first added.
    // This makes sure that our map initialization code is run the first time.
    navigator.geolocation.getCurrentPosition(this.componentDidUpdate);
  },

  componentDidUpdate: function(position){
    
    var latLng ={
      lat: 49.281887,
      lng: -123.1207
    }
    console.log(Object.keys(position));

    if(Object.keys(position).length > 0){
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

    map.addMarker({
      lat: latLng.lat,
      lng: latLng.lng,
    });

  },

  render: function(){

    return (
      <div id="map"></div>
    );
  }
});