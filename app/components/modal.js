var React = require('react');

module.exports = React.createclass({
  render: function() {
    if(this.props.isOpen){
        return (
          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">

              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Modal Header</h4>
                </div>
                <div className="modal-body">
                  <p>Some text in the modal.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
              
            </div>
          </div>
        );
    }else{
      return (
        <div></div>
      );
    }
  }
});