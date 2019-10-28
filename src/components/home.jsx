import React, { Component } from 'react';

export class home extends Component {
    render() {
        return (
            <div onClick={
                this.props.travelDown
                // console.log("HI")
            }>
                <div >
                    <p 
                    
                    style={{ fontSize: "15em", marginTop: "-198px" }}>^</p>
                    
                    <div 
                    style={{ backgroundColor: "coral", width: "200px", height: "200px", marginTop: "-23em" }}>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;
