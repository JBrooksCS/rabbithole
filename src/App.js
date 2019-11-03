import React, { Component } from 'react';

import './App.css';
import Home from "./components/home";
import Hole from "./components/hole";

class App extends Component {
  state = {
    level : 0,
    holes : [["Yes"]] 
  }

  travelDown =()=> {

    console.log('Traveling Down..')
    console.log(this.state.level + 1)
    this.createTree();

    this.setState({
      level : this.state.level + 1
    })
  }

  createTree =()=>{

    let numLevels = 20
    let newArray = []
    let newHoles = []

    //For each level
    for(let j = 0; j < numLevels; j++){

      newArray[j] = []
      // newArray[Math.floor(Math.random()*newArray.length)] = "Yes"
    }
    newArray.forEach((element, index) => {
      
      for(let i = 0; i <= index; i++){
        newArray[index].push("No")
      }
    
    });

    console.log(newArray)

    
  
  }


render(){


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
