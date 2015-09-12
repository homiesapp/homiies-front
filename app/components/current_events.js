var React = require('react');
var CurrentEvent = require('./current_event')
var EventsStore = require('../stores/events_store');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

module.exports = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("EventsStore")],
  render: function() {
    var length = this.state.events.length;
    return (
      <div className="current-events">
        {this.state.loading ? <li>Loading...</li> : null}
        {
          this.state.pendingEvents.map(function(pendingEvent) {
            return (
              <CurrentEvent 
                key =  {pendingEvent.id} 
                eventNow = {pendingEvent.title} />
            );
          })
        }
      </div>
    );
  },
  componentDidMount: function () {
    this.getFlux().actions.loadEvents();
  }, 
  getStateFromFlux: function () {
    var store = this.getFlux().store('EventsStore');

    return {
      loading: store.loading,
      error: store.error,
      events: store.events,
      pendingEvents: store.pendingEvents
    };
  }
});