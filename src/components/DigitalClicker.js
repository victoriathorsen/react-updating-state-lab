import React from "react";

export default class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state ={
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }


    render(){
        return(
            <div>
                {/* <h1>{this.state.timesClicked}</h1> */}
                <button onClick={this.handleClick}>
                {this.state.timesClicked}
                </button>
            </div>
        )
    }
}