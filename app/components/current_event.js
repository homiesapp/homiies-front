var React = require('react');


module.exports = React.createClass({	
 getInitialState: function(){
    return {
      showCurrentEvent: false,
    }
  },
  clickHandlerCurrentEvent: function(){
  	this.props.clickHandlerCurrentEvents()
  },
  setClass: function() {
    var invBool = !this.state.showCurrentEvent;
    this.setState({
      showCurrentEvent: invBool,
    });
  },
	render: function() {
    var currentEventClass = "current-event";
    if(this.state.showCurrentEvent){
      currentEventClass = currentEventClass + " clicked"
    }

		return (
			<div className={currentEventClass} onClick={this.clickHandlerCurrentEvent}>
				<div>
					<h4 className="current-event-title">{this.props.eventNow}</h4>

				</div>
			</div>
		);
	}
});







