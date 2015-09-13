var React = require('react');
var ButtonAction = require('./button_action');

module.exports = React.createClass({
  handleCloseModal: function(){
    this.props.handleCloseModal();
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
              <ButtonAction className="btn btn-default" clickHandler={this.handleCloseModal} text="Close" />
            </div>
          </div>
          
        </div>
      </div>
    );
  }
});