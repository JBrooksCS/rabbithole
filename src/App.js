import React, { Component } from 'react';

import './App.css';
import Home from "./components/home";
import Hole from "./components/hole";

class App extends Component {
  state = {
    level : 0,
    holes : [["Yes"]],
    furthestLevelReached : 0
  }

  travelDown =()=> {

    console.log('Traveling Down..')
    console.log(this.state.level + 1)

    let furthest = this.state.furthestLevelReached
    if (this.state.level + 1 > furthest){
      furthest += 1
    }

    this.setState({
      level : this.state.level + 1,
      furthestLevelReached : furthest
    })
  }
  
  travelToStart =()=> {
    console.log('Traveling Up..')

    this.setState({
      level : 0
    })
  }

  createTree =()=>{

    let numLevels = 20
    let newArray = []

    //For each level, add an array
    for(let j = 0; j < numLevels; j++){
      newArray[j] = []
    }
    //Inside that array, add an amount of No's equal to the level number 
    newArray.forEach((element, index) => {
      
      for(let i = 0; i <= index; i++){
        newArray[index].push("No")
      }
      //Take one random selection from the array at the current index, and set it to Yes
      newArray[index][Math.floor(Math.random()*newArray[index].length)] = "Yes"
    })
    //Probably a good idea to hard code the first element to be Yes
    newArray[0] = ["Yes"]
    console.log(newArray)
    //Add to state
    this.setState({
      holes : newArray
    })
  }

  componentDidMount =()=>{
    this.createTree();

    console.log("Component Mounted")
  }


render(){

  const items = []

  for (const [index, value] of this.state.holes[this.state.level].entries()) {
    items.push(<Hole key={index} door={value}
      travelDown={this.travelDown}
      travelToStart={this.travelToStart}
    />)
  }

    return (
  <div className="App">
      <header className="App-header">
      
      <div style={{margin: "2em"}}> Furthest You've Gone{" ~"+this.state.furthestLevelReached}</div>

        
        {this.state.level === 0 ? 
        
        <Home travelDown={this.travelDown} /> 
        
        :

          <div style={{width: "80%", height:"80%", flexWrap:"wrap", display: "flex", flexDirection:"row", justifyContent:"space-around"}}>{items}</div>
             
        }
        
      </header>
    </div>
  );
}
}

export default App;
