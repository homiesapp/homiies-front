import React from "react";
import request from "superagent";
import {host} from "../config";

export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  },
  componentDidMount: function(){
    request
      .get(host + '/users.json')
      .set('Accept', 'application/json')
      .end(function(err, res){
        console.log(res);
    // Calling the end function will send the request 
      });
  },
});