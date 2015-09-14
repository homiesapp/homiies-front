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
				<div className="col-sm-8 main-center-div hide">
					<div className="event-create">
						<div className="col-sm-12 event-circle">
							<div className="event-circle-text" onClick={this.openModal} >Create Event</div>
							<Modal isOpen={this.state.popup} handleCloseModal={this.closeModal}/>
						</div>
					</div>
				</div>

				
				<Event />

        <div className="col-sm-2 friends-column">
        	<buttonAction className="add_friend" />
					<Friends />
				</div>
			</div>
		);
	}
});