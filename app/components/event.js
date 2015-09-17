var React = require('react');
var Chat = require('./chat');
var Map = require('./map');
var Votes = require('./votes');
var Swipe = require('./swipe')
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var counter = 0;
var suggestionCounter = 0;

module.exports = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin("EventsStore","SuggestionsStore")],

	refuseSuggestion: function(){
		this.getFlux().actions.nextSuggestion(0)
	},
	acceptSuggestion: function(){
		this.getFlux().actions.nextSuggestion(0)
	},
	switchSuggestion: function(){
		suggestionCounter += 1;
	},
	swapIcon: function() {
		var iconState = !this.state.iconState;
		if(counter == 0) {	
			this.setState({
			iconState: 0
		});
		}
		if (counter == 1) {	
			this.setState({
			iconState: 1
		});
		}
		if (counter == 2) {	
			this.setState({
			iconState: 2
		});
		}
		counter += 1
		

	},
	render: function () {
		console.log("suggestions: ", this.state.suggestions);
		console.log("suggestioncounter: ", suggestionCounter)
    if(this.state.suggestions.length > 0){
    	 var anEvent = this.state.suggestions[suggestionCounter] 
    	 var rendering = true
    }
   
		console.log("anEvent: ", anEvent)

		return (
			<div className="col-sm-8 main-center-div abcdefgh">
				<div className="col-md-12 event-info">
					<div className="row top">
						<div className="col-md-6 bred quadrant">
							<div className="component-header">
	                <p className="component-header-text">Suggestions</p>
	            </div>
										
										
							        <Swipe
							          eventTitle={rendering ? anEvent.title : ""}
							          eventRating={rendering ? anEvent.rating : ""}
							          eventType={rendering ? anEvent.type_place : ""}
							          eventPicture={rendering ? anEvent.photo_req : ""}
							          eventWebsite={rendering ? anEvent.web_url : ""}
												handleSwapIcon={rendering ? this.swapIcon : ""}
												switchSuggestion={rendering ? this.switchSuggestion : ""}/>
										
								
					  </div>
							<div className="col-md-6 bblue quadrant">
								<div className="component-header">
	             	   <p className="component-header-text">Votes</p>
	           		</div>
								<Votes eventSuggestions={this.state.suggestions} event_id={this.props.event_id} iconState={this.state.iconState} />
							</div>
					</div>
					<div className="row">
						<div className="col-md-6 bgreen quadrant">
							<div className="component-header">
	                <p className="component-header-text">Map</p>
	            </div>
								<Map suggestions={this.state.suggestions}/>
						</div>
						<div className="col-md-6 byellow quadrant">
							<div className="component-header">
	                <p className="component-header-text">Chat</p>
	            </div>
							<Chat chatroom_id={this.props.chatroom_id} />
						</div>
					</div>
				</div>
			</div>
		);
	}, 
	componentDidMount: function() {
		this.getFlux().actions.loadSuggestions(1);
	},
  getStateFromFlux: function () {
    var store = this.getFlux().store('SuggestionsStore');
    return {
      loading: store.loading,
      error: store.error,
      suggestions: store.suggestions,
      currentSuggestion: store.currentSuggestion
    };
}})
