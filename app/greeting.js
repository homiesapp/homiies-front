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
    var isProduction = process.env.NODE_ENV === 'production';
    var host = isProduction ? 'https://boiling-beyond-5952.herokuapp.com' : 'http://localhost:3000';
    request
      .get(host + '/users.json')
      .set('Accept', 'application/json')
      .end(function(err, res){
        console.log(res);
    // Calling the end function will send the request 
      });
  },
});