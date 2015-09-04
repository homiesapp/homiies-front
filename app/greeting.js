import React from "react";
import request from "superagent";


export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  },
  componentDidMount: function(){
    var host = process.env.host || 'http://localhost:3000';
    request
      .get(host + '/users.json')
      .set('Accept', 'application/json')
      .end(function(err, res){
        console.log(res);
    // Calling the end function will send the request 
      });
  },
});