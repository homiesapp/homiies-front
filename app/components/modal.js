var React = require('react');
var ButtonAction = require('./buttonaction');
import request from "superagent";

module.exports = React.createClass({
  handleCloseModal: function(){
    this.props.handleCloseModal();
  },
  componentDidMount: function () {

  },
  handleCreateEvent: function () {
    var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';
    var title = "Test event creation";
    var newEvent = {
      event: {
        title: title
      }
    };
    request
      .post(host + '/users/' + 1 + '/events')
      .send(newEvent)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (res.ok) {
          console.log(res.body);
          this.handlerCloseModal();
        } else {
          console.log(err.response);
        }
      }.bind(this));
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