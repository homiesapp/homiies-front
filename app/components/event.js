var React = require('react');
var Chat = require('./chat');
var Map = require('./map');
var Votes = require('./votes');
var Swipe = require('./swipe')
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

module.exports = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin("EventsStore","SuggestionsStore")],

	refuseSuggestion: function(){
		this.getFlux().actions.nextSuggestion(0)
	},
	acceptSuggestion: function(){
		this.getFlux().actions.nextSuggestion(0)
	},
	swapIcon: function() {
		var iconState = !this.state.iconState;
		this.setState({
			iconState: iconState
		});
	},
	render: function () {
		console.log("suggestions: ", this.state.suggestions);

		return (
			<div className="col-sm-8 main-center-div abcdefgh">
				<div className="col-md-12 event-info">
					<div className="row top">
						<div className="col-md-6 bred quadrant">
							<div className="component-header">
	                <p className="component-header-text">Suggestions</p>
	            </div>
										{ this.state.suggestions.map(function(anEvent,index) {
										
										
										 return (
							        <Swipe
							          eventTitle={anEvent.title}
							          eventRating={anEvent.rating}
							          eventType={anEvent.type_place}
							          eventPicture={anEvent.photo_req}
							          eventWebsite={anEvent.web_url}
												handleSwapIcon={this.swapIcon}/>
							         
							      );
										
										
							    }.bind(this))
								}
						</div>
						<div className="col-md-6 bblue quadrant">
						<div className="component-header">
                <p className="component-header-text">Votes</p>
            </div>
							<Votes event_id={this.props.event_id} iconState={this.state.iconState} />
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
