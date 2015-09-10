import request from "superagent";
var React = require('react');
var Friend = require('./friend');
var FriendsStore = require('../stores/friends_store');
var Fluxxor = require('../../node_modules/fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

module.exports = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("FriendsStore")],
  render: function() {

    var friends = this.props.homies;
    console.log(friends);
    return (
      <div className="friends">
          {friends.map(function(friend, index) {
           return <Friend 
                   key =  {index}
                   homie = {friend}/>
         })}
      </div>
    );
  },
  componentWillMount: function () {
    var host = 'http://localhost:3000';  //'https://boiling-beyond-5952.herokuapp.com';
    var that = this;
    console.log('this 1 is: ',this);
    request
      .get(host + '/users/' + 1 + '/homiies')
      .set('Accept', 'application/json')
      .end(function(err, res){
        console.log('res is: ', JSON.stringify(res.body));
        console.log('that is: ', that);
        console.log('flux is', that.getFlux());
      });
  }, 
  getStateFromFlux: function () {
    var flux = this.getFlux();
    return {
      friendsList: flux.store("FriendsStore").getState()
    };
  }

});