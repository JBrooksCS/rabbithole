import React, { Component } from 'react';


export class hole extends Component {
    render() {
        return (
            <div onClick={
                this.props.travelDown
                // console.log("HI")
            }>
                <div >
                    {/* <p 
                    
                    style={{ fontSize: "15em", marginTop: "-50px" }}>^</p> */}
                    
                    <div 
                    style={{ backgroundColor: "coral", width: "10em", height: "10em", margin: "2em"
                    // marginTop: "-23em" 
                    }}>
                    </div>
                </div>
            </div>
        );
    }
}

export default hole;
