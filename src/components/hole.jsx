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
                        >
                            {/* YES */}
                        </div>
                        :
                        <div onClick={this.props.travelToStart}
                            className="unit"
                            >
                            {/* NO */}
                        </div>

                    }

                </div>
            </div>
        );
    }
}

export default hole;
