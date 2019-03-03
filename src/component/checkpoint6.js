import React, {Component} from "react";

class Box extends Component{

	


	render() {
		return(
			
			<div className="box" style={ {border: this.props.position=="Forwarder" ? "5px solid black" :"5px solid yellow"} }>
				<img src={this.props.img} className="" alt="" />
				<h3>{this.props.name}</h3>
				<p>{this.props.des}</p>
                <p>{this.props.position}</p>
			</div>
			
		
            
		);
	}
}

export default Box;