import React, { Component } from 'react';
import '../App.css';


export class hole extends Component {
    render() {
        return (
            <div >
                <div  >
                    {this.props.door === "Yes" ?
                        <div
                            className="unit"
                            onClick={this.props.travelDown}
                            style={{
                                backgroundColor: "coral", width: "10em", height: "10em", margin: "2em"
                                // marginTop: "-23em" 
                            }}>
                            {/* YES */}
                        </div>
                        :
                        <div onClick={this.props.travelToStart}
                            className="unit"
                            style={{
                                backgroundColor: "coral", width: "10em", height: "10em", margin: "2em"
                                // marginTop: "-23em" 
                            }}>
                            {/* NO */}
                        </div>

                    }

                </div>
            </div>
        );
    }
}

export default hole;
