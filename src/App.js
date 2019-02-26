import React, { Component } from 'react';

import './App.css';
import Box from './component/checkpoint6';


class App extends Component {
  render() {
    
    const legend ={
      fontSize: 20, margin: 8, backgroundColor: 'black',  borderColor:'goldenrod',textAlign:'center',
         color: 'goldenrod', display:'inline-block', verticalAlign:'top', width:310, height:360, borderStyle:'dotted'  
        }
    const head ={
      textAlign:'center'
    }
    
    return (
      <div className="test">
    
         <h1 style={head} className="header" >Juventus</h1>
         <div className="test-part">
         <span style={legend} ><Box  name='Delpiero' des="El Capitano" img="./delpiero.jpg"/></span>
         <span style={legend}> <Box name='Buffon' des="The Spider" img="./buffon.jpg"/></span>
         <span style={legend}><Box name='Nedved' des="Golden Boy" img="./nedved.jpg"/> </span>
         <span style={legend}> <Box name='Chiellini' des="Go Gorilla" img="./chiellini.jpg"/></span>
        </div>
      </div>
    );
  }
}
export default App;