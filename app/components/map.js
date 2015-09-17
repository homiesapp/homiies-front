var React = require('react');
var Gmap = require('../../node_modules/gmaps');

module.exports = React.createClass({

  getInitialState: function(){
    return{
      lat: 49.281887,
      lng: -123.1207
    }
  },

  setLatLong: function(position){
    if(typeof position.coords !== "undefined"){
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }
  },

  componentDidMount: function(){
    console.log('didmount: ', this.props)
    // Only componentDidMount is called when the component is first added.
    // This makes sure that our map initialization code is run the first time.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setLatLong);
    } 
  },

  componentDidUpdate: function(){
    var latLng = {
      lat: this.state.lat,
      lng: this.state.lng
    }

    var map = new GMaps({
      div: '#map',
      lat: latLng.lat,
      lng: latLng.lng,
      width: '100%',
    });

    map.addMarker({
      lat: latLng.lat,
      lng: latLng.lng,
      icon: "https://lh3.ggpht.com/A0x3jzuH1qRkE10HcTiT4qQr_6iAqVg-CTsoIqxnoIFyv92V91WI3KqiVlOvLtfoMRg=w40"
    });

    console.log("suggestions", this.props.suggestions);
    this.props.suggestions.forEach (function(sug){
      map.addMarker({
        lat: sug.lat,
        lng: sug.long,
        infoWindow: {
          content: "<div class=\"iw-text\">"+sug.title+"</div>"
        }
      });
    });

  },

  render: function(){
    console.log('render', this.props)
    return (
      <div id="map"></div>
    );
  }
});