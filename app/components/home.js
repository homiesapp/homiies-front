//SuperAgent
import request from "superagent";

//React + fluxxor
var React = require('react');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var SuggestionsStore = require('../stores/suggestions_store');

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
      newEventId: null,
      showCenterEvent: false

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
	clickHandlerHome: function() {
		console.log("in home.js")
		var invBool = !this.state.showCenterEvent;
		this.setState({
		  showCenterEvent: invBool,
		});
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
	componentWillMount: function () {
		this.getFlux().addStore('SuggestionsStore', new SuggestionsStore());
	},
	render: function() {
		var centerEventClass = "center-event";
    var mainCenterDiv = "col-sm-8 main-center-div creating-event";

    if(this.state.showCenterEvent){
      centerEventClass = "hidden-event"
      mainCenterDiv = mainCenterDiv + " show"
    }
    else {
    	centerEventClass = "appearing-event";
    	mainCenterDiv = mainCenterDiv
    }

		return (
			<div className="home row">
				<div className="col-sm-2 side-menu">
					<SideMenu clickHandlerHome={this.clickHandlerHome}/>
				</div>
				<div className={mainCenterDiv}>
				
						<div className="col-sm-12 event-circle">
							<div className="event-circle-text" onClick={this.clickHandleModal}>Create Event</div>
							<Modal newEventId={this.state.newEventId} isOpen={this.state.popup} handleCloseModal={this.closeModal} />

					</div>
				</div>
					<div className= {centerEventClass}>
						<Event event_id={1} chatroom_id={1} />
					</div>
				
        <div className="col-sm-2 friends-column">
        	<buttonAction className="add_friend" />
					<Friends />
				</div>
			</div>
		);
	}
});