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
    swapIcon: function(){
        this.props.handleSwapIcon();
        this.props.switchSuggestion();
    },
  render: function() {
    return (
    	<div className={this.props.eventClass}>
            <div className="swipe-row">
            </div>
                <div className="col-sm-6">
                    <Picture imageSource={this.props.eventPicture} imageClass="swipe-image"/>
                    <h3>{this.props.eventTitle} {this.props.eventRating}</h3>
                </div>
                <div className="col-sm-6">
        		  <h3>{this.props.eventType}</h3>
                  <a href={this.props.eventWebsite}>Website</a>
                </div>

    		<div className="btn-group" role="group" aria-label="...">
    			<ButtonAction className="btn btn-danger" text="No" clickHandler={this.swapIcon}/>
    			<ButtonAction className="btn btn-success" text="Yes" clickHandler={this.swapIcon} />
    		</div>
    	</div>

    );
  },
  
})


