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
	acceptSuggestion: function(){
		this.getFlux().actions.nextSuggestion(1)
	},
	refuseSuggestion: function(){
		this.getFlux().actions.nextSuggestion(0)
	},
	render: function () {
		var suggestions = [{title: "event 3", rating: 5, type: "bar/restaurant", photo_url: "http://static.comedywire.com/unsafe/400x0/http://media.comedywire.com/top10/0002975c-4298-11e5-8374-0a78f6cadc15", currentSuggestion: 0 },
      								{title: "event 2", rating: 3, type: "bar/restaurant", photo_url: "http://static.comedywire.com/unsafe/400x0/http://media.comedywire.com/top10/0002975c-4298-11e5-8374-0a78f6cadc15"}];
		console.log(suggestions);
		return (
			<div className="col-sm-8 main-center-div">
				<div className="col-md-12 event-info">
					<div className="row">
						<div className="col-md-6 bred quadrant">
									{ suggestions.map(function(anEvent,index) {
										
										if(index == suggestions[index].currentSuggestion){
										 return (
							        <Swipe
							          eventTitle={anEvent.title}
							          eventRating={anEvent.rating}
							          eventType={anEvent.type}
							          eventPicture={anEvent.photo_url}
							          handleRefuseSuggestion={this.refuseSuggestion}
							          handleAcceptSuggestion={this.acceptSuggestion} />
							      );
										}
										else {
											<Swipe
							          eventTitle={anEvent.title}
							          eventRating={anEvent.rating}
							          eventType={anEvent.type}
							          eventPicture={anEvent.photo_url}
							          handleRefuseSuggestion={this.refuseSuggestion}
							          handleAcceptSuggestion={this.acceptSuggestion} 
							          eventClass="diplay-none"/>
										}
							    }.bind(this))
								}
						</div>
						<div className="col-md-6 bblue quadrant">
							<Votes event_id={this.props.event_id} />
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 bgreen quadrant">
							<Map />
						</div>
						<div className="col-md-6 byellow quadrant">
							<Chat chatroom_id={this.props.chatroom_id} />
						</div>
					</div>
				</div>
			</div>
		);
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
