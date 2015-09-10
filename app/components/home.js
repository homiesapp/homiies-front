var React = require('react');
var Friends = require('./friends');
var SideMenu = require('./sidemenu');
var Event = require('./event');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React)
var StoreWatchMixin = Fluxxor.StoreWatchMixin

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
				<div className="col-sm-8 main-center-div">
					<div className="event-create">
						<div className="col-sm-12 event-circle"><div className="event-circle-text">Create Event</div></div>
					</div>
					<div className="event-info">
						<div className="row">
							<div className="col-md-6"></div>
							<div className="col-md-6"></div>
						</div>
						<div className="row">
							<div className="col-md-6"></div>
							<div className="col-md-6"></div>
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