//React + Fluxxor
var React = require('react');
var Profileright = require('./rightprofile');

//Components
var Profile = require('./profile');
var CurrentEvents = require('./current_events');

//Sidemenu
module.exports = React.createClass({
	clickHandlerSideMenu: function(){
		console.log("in SideMenu")
		this.props.clickHandlerHome()
	},
  render: function() {
  	var text = "New event";
    return (
     	<div>
     			<Profileright />
     			<CurrentEvents clickHandlerSideMenu={this.clickHandlerSideMenu} />
     	</div>
    );
  }
});