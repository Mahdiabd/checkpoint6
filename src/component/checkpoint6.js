import React, {Component} from "react";

class Box extends Component{
	render() {
        let situation = 'Retired';
		if(this.props.name === "Chiellini"){
			situation ='still playing'; 
		}
		return(
			
			<div className="box">
				<img src={this.props.img} className="" alt="" />
				<h3>{this.props.name}</h3>
				<p>{this.props.des}</p>
                <p>Situation: {situation}</p>
			</div>
			
		
            
		);
	}
}

export default Box;