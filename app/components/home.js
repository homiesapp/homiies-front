//SuperAgent
import request from "superagent";

//React + fluxxor
var React = require('react');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

//Components
var Friends = require('./friends');
var SideMenu = require('./sidemenu');
var Event = require('./event');
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
      newEventId: null
    }
  },
  clickHandleModal: function () {
  	var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';
    request
      .get(host + '/users/1/events/new')
      .set('Accept', 'application/json')
      .end(function (err, res) {
        console.log(res.body);
        this.state.newEventId = res.body;
        this.openModal();
      }.bind(this));
  },
	clickHandler: function() {
	},
	openModal: function() {
		this.setState({
      popup: true,
    });
	},
	closeModal: function(){
		this.setState({
      popup: false,
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
							<div className="event-circle-text" onClick={this.clickHandleModal}>Create Event</div>
							<Modal newEventId={this.state.newEventId} isOpen={this.state.popup} handleCloseModal={this.closeModal} />
						</div>
					</div>
				</div>

				<Event event_id={1} />

        <div className="col-sm-2 friends-column">
        	<buttonAction className="add_friend" />
					<Friends />
				</div>
			</div>
		);
	}
});