var React = require('react');
var Friends = require('./friends');
var SideMenu = require('./sidemenu');
var Event = require('./event');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Map = require('./map');

module.exports = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin("EventStore")],
	getStateFromFlux: function(){
		var flux = this.getFlux();
		console.log('flux is', flux);
		console.log('sotre is', flux.store('EventStore'));
		return flux.store("EventStore").getState();
	},
	clickHandler: function(){
		console.log('click')
		this.getFlux().actions.logInfo('clicking');
	},
	render: function() {
		//test data
		var friends =[
			{ username: "Smithy" },
			{ username: "Johnster" },
			{ username: "Bravo" },
			{ username: "Epsilon" },
			{ username: "Smithy" },
			{ username: "Johnster" },
			{ username: "Bravo" },
			{ username: "Epsilon" },
			{ username: "Epsilon" },
			{ username: "Smithy" },
			{ username: "Johnster" },
			{ username: "Bravo" },
			{ username: "Epsilon" }
		];

		return (
			<div className="home row">
				<div className="col-sm-2 side-menu">
					<SideMenu />
				</div>
				<div className="col-sm-8 main-center-div hide">
					<div className="event-create">
						<div className="col-sm-12 event-circle"><div className="event-circle-text">Create Event</div></div>
					</div>
				</div>
				<div className="col-sm-8 main-center-div">
					<div className="col-md-12 event-info">
						<div className="row">
							<div className="col-md-6 bred"><h1>SWIPE</h1></div>
							<div className="col-md-6 bblue"><h1>VOTES</h1></div>
						</div>
						<div className="row">
							<div className="col-md-6 bgreen"><Map /></div>
							<div className="col-md-6 byellow"><h1>CHAT</h1></div>
						</div>
					</div>
				</div>

        <div className="col-sm-2 friends-column">
					<Friends homies={friends}/>
				</div>
			</div>
		);
	}
});