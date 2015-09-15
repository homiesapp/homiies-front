//React + Fluxxor + Jquery
var React = require('react');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
import $ from "jquery";

//Components
var ButtonAction = require('./buttonaction');

module.exports = React.createClass({
  mixins: [FluxMixin],
  handleCloseModal: function(){
    this.props.handleCloseModal();
  },
  componentDidMount: function () {

  },
  handleCreateEvent: function () {
    var date = new Date('December 17, 2015 20:15:00');
    var newEvent = {
      event: {
        title: 'title test',
        address: 'address test',
        time: date,
        postal_code: 'V6J 1J4',
        city: 'Vancouver',
        country: 'Canada'
      }
    };
    this.getFlux().actions.createEvent(newEvent);
  },
  render: function() {

    var modalClass = "modal fade";
    var modalStyle;

    if(this.props.isOpen){
      modalClass += " in";

      modalStyle = {
        display: 'block',
      };
    }

    return (
      <div className={modalClass} id="myModal" role="dialog" style={modalStyle}>
        <div className="modal-dialog">

          <div className="modal-content">
            <div className="modal-header">
              <ButtonAction className="close" clickHandler={this.handleCloseModal} text="&times;" />
              <h4 className="modal-title">Modal Header</h4>
            </div>
            <div className="modal-body">
              <p>Some text in the modal.</p>

            </div>
            <div className="modal-footer">
              <ButtonAction className="btn btn-default" clickHandler={this.handleCreateEvent} text="Close" />
            </div>
          </div>
          
        </div>
      </div>
    );
  }
});