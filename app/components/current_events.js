var React = require('react');
var CurrentEvent = require('./current_event');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

module.exports = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("EventsStore")],
  eventClickHandle: function (event) {

  },
  render: function() {
    return (
      <div className="current-events">
        {this.state.loading ? <li>Loading...</li> : null}
        {
          this.state.events.map(function(anEvent) {
            return (
              <CurrentEvent 
                key={anEvent.id} 
                eventNow={anEvent.title} />
            );
          })
        }
      </div>
    );
  },
  componentDidMount: function () {
    this.getFlux().actions.loadEventsOrder();
  }, 
  getStateFromFlux: function () {
    var store = this.getFlux().store('EventsStore');

    return {
      loading: store.loading,
      error: store.error,
      events: store.events,
      pendingEvents: store.pendingEvents,
      attendingEvents: store.attendingEvents,
      adminEvents: store.adminEvents
    };
  }
});