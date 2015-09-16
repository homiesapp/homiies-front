var React = require('react');
var Picture = require('./picture');
var ButtonAction = require('./button_action');

module.exports = React.createClass({
	refuseSuggestion: function(){
		this.props.handleRefuseSuggestion();
	},
	acceptSuggestion: function(){
		this.props.handleAcceptSuggestion();
	},
  render: function() {
    return (
    	<div>
    		<h1>{this.props.eventTitle}</h1>
    		<h1>{this.props.eventRating}</h1>
    		<h1>{this.props.eventType}</h1>
    		<Picture imageSource={this.props.eventPicture} imageClass="swipe-image"/>
    		<div className="btn-group" role="group" aria-label="...">
    			<ButtonAction className="btn btn-danger" text="No" clickHandler={this.refuseSuggestion}/>
    			<ButtonAction className="btn btn-success" text="Yes" clickHandler={this.acceptSuggestion}/>
    		</div>
    	</div>

    );
  }
  
})


