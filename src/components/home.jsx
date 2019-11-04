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
                    
                    
                    style={{ fontSize: "15em", marginTop: "-198px" }}>^</p>
                    
                    <div 
                    className="unit"
                    style={{ backgroundColor: "coral", width: "10em", height: "10em", marginTop: "-23em" }}>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;
