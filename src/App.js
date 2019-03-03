import React, { Component } from 'react';

import './App.css';
import Box from './component/checkpoint6';


class App extends Component {
  render() {
    
    const legend ={
      fontSize: 20, margin: 8, textAlign:'center',
         color: 'goldenrod', display:'inline-block', verticalAlign:'top', width:319, height:360,
        }
    const head ={
      textAlign:'center'
    }
    
    return (
      <div className="test">
    
         <h1 style={head} className="header" >Juventus</h1>
         <div className="test-part">
         <div style={legend} ><Box position="Forwarder" name='Delpiero' des="El Capitano" img="./delpiero.jpg"/></div>
         <div style={legend}> <Box position="GoalKeeper" name='Buffon' des="The Spider" img="./buffon.jpg"/></div>
         <div style={legend}><Box position="Forwarder" name='Nedved' des="Golden Boy" img="./nedved.jpg"/> </div>
         <div style={legend}> <Box position="Defender" name='Chiellini' des="Go Gorilla" img="./chiellini.jpg"/></div>
        </div>
      </div>
    );
  }
}
export default App;