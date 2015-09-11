var React = require('react');
var Friends = require('./friends');
var SideMenu = require('./sidemenu');
var Event = require('./event');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Map = require('./map');
var Modal = require('./modal');

module.exports = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin("EventsStore")],
	getStateFromFlux: function(){
		var flux = this.getFlux();
		return flux.store("EventsStore").getState();
	},
	getInitialState: function(){
    return {
      popup: false,
    }
  },
	clickHandler: function(){
		this.getFlux().actions.logInfo('clicking');
	},
	openModal: function(){
		this.setState({
      popup: true
    });
	},
	closeModal: function(){
		this.setState({
      popup: false
    });
	},
	render: function() {

		return (
			<div className="home row">
				<div className="col-sm-2 side-menu">
					<SideMenu />
				</div>
				<div className="col-sm-8 main-center-div">
					<div className="event-create">
						<div className="col-sm-12 event-circle">
							<div className="event-circle-text" onClick={this.openModal} >Create Event</div>
							<Modal isOpen={this.state.popup} handleCloseModal={this.closeModal}/>
						</div>
					</div>
				</div>
				<div className="col-sm-8 main-center-div hide">
					<div className="col-md-12 event-info">
						<div className="row">
							<div className="col-md-6 bred quadrant">
								<h1>SWIPE</h1>
							</div>
							<div className="col-md-6 bblue quadrant"><h1>Votes</h1></div>
						</div>
						<div className="row">
							<div className="col-md-6 bgreen quadrant"><h1>MAP</h1></div>
							<div className="col-md-6 byellow quadrant"><h1>CHAT</h1></div>
						</div>
					</div>
				</div>

        <div className="col-sm-2 friends-column">
					<Friends />
				</div>
			</div>
		);
	}
});