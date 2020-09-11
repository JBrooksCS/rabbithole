import React, { Component } from 'react';
import '../App.css';

export class home extends Component {
    render() {
        return (
            <div onClick={
                this.props.travelDown
                // console.log("HI")
            }>
                <div  >
                    <p 
                    
                    
                    style={{ fontSize: "15em", marginTop: "-198px", fontFamily: "Times New Roman" }}></p>
                    
                    <div 
                    className="unit"
                    >
                    </div>
                </div>
            </div>
        );
    }
}

export default home;
