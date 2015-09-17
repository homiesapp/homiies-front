var React = require('react');


module.exports = React.createClass({
	clickHandler: function () {
		this.props.clickHandler();
	},
	render: function () {
		var text = 'Send';
		var checkmarkSrc = "../../public/check-mark-512.png";
		var deleteSrc = "../../public/delete-2-512.png";
		return (

			<table className="votes-table table-bordered">

				<tr className="table-header">
			    <th>Homiies</th>
			    <th>Event 1</th>
			    <th>Event 2</th>
			    <th>Event 3</th>
			  </tr>
			  <tr>
			    <td className="name-data">Evert</td>
			    <td className="green-data"><div className="center-checkmark"><img className="checkmark" src={this.props.iconState == true ? deleteSrc : checkmarkSrc}/></div></td> 
			    <td className="red-data"><img className="checkmark saturate" src={this.props.iconState == true ? deleteSrc : checkmarkSrc}/></td>
			    <td className="red-data"><img className="checkmark" src={this.props.iconState == true ? deleteSrc : checkmarkSrc}/></td>
			  </tr>
			  <tr>
			    <td className="name-data">Andrea</td>
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
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
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			    <td className="green-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td> 
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			  </tr>
			   <tr>
			    <td className="name-data">John</td>
			    <td className="green-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td> 
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			  </tr>
			  <tr>
			    <td className="name-data">Ryan</td>
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			    <td className="green-data"><img className="checkmark" src="../../public/check-mark-512.png"/></td> 
			    <td className="red-data"><img className="checkmark" src="../../public/delete-2-512.png"/></td>
			  </tr>
			   
			</table>
		);
	}
});






