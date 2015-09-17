var React = require('react');


module.exports = React.createClass({
	clickHandler: function () {
		this.props.clickHandler();
	},
	render: function () {
		var text = 'Send';
		var checkmarkSrc = "../../public/check-mark-512.png";
		var deleteSrc = "../../public/delete-2-512.png";
		console.log("ICONSTATE : ", this.props.iconState)
		var eventSuggestions = this.props.eventSuggestions.length > 0 ? this.props.eventSuggestions : "Event";
		return (

			<table className="votes-table table-bordered">

				<tr className="table-header">
			    <th>Homiies</th>
			    <th>{eventSuggestions[2].title}</th>
			    <th>{eventSuggestions[1].title}</th>
			    <th>{eventSuggestions[0].title}</th>
			  </tr>
			  <tr>
			    <td className="name-data andre">Andrea</td>
			    <td className="green-data"><div className="center-checkmark"><img className="checkmark" src={this.props.iconState >= 2 ? checkmarkSrc : deleteSrc }/></div></td> 
			    <td className="red-data"><img className="checkmark saturate" src={this.props.iconState >= 1 ? checkmarkSrc : deleteSrc }/></td>
			    <td className="red-data"><img className="checkmark" src={this.props.iconState >= 0 ? checkmarkSrc : deleteSrc }/></td>
			  </tr>
			  <tr>
			    <td className="name-data">Evert</td>
			    <td className="red-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td>
			    <td className="green-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td> 
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			  </tr>
			   <tr>
			    <td className="name-data">Alex</td>
			    <td className="green-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td> 
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			  </tr>
			  <tr>
			    <td className="name-data">Tim</td>
			    <td className="red-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td>
			    <td className="green-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td> 
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			  </tr>
			   <tr>
			    <td className="name-data">John</td>
			    <td className="green-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td> 
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			    <td className="red-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td>
			  </tr>
			  <tr>
			    <td className="name-data">Ryan</td>
			    <td className="red-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td>
			    <td className="green-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td> 
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			  </tr>
			   
			</table>
		);
	}
});






