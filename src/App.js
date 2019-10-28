import React, { Component } from 'react';

import './App.css';
import Home from "./components/home";
import Hole from "./components/hole";

class App extends Component {
  state = {
    level : 0,
    holes : [0]
  }

  travelDown =()=> {
    console.log('Traveling Down..')
    // let boxes = []
    console.log(this.state.level + 1)

    this.setState({
      level : this.state.level + 1
    })
  }
  populateHoles=()=>{
    
    let holesTemp = this.state.level
    
    for(let i = 0; i < this.state.level + 1; i++ ){
      

      // holes.push(i)
    }
  }

render(){
  let holes = this.populateHoles()

  return (
    <div className="App">
      <header className="App-header">
        {this.state.level === 0 ? 
        
        <Home travelDown={this.travelDown} /> 
        
        :

              <Hole travelDown={this.travelDown}  />

        
        // 'Level ' + this.state.level 

        
        
        }
        
        {/* <Home  /> */}
      </header>
    </div>
  );
}
}

export default App;
