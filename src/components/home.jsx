import React, { Component } from 'react';

export class home extends Component {
    render() {
        return (
            <div >
                <div >
                    <p style={{ fontSize: "15em", marginTop: "-50px" }}>^</p>
                    <div 
                    onClick={(e)=>
                        e.currentTarget.style.background = 'red'}
                    style={{ backgroundColor: "coral", width: "200px", height: "200px", marginTop: "-23em" }}>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;
