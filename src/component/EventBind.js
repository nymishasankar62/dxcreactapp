import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

clickHandler(){
    console.log(this)
    this.setState({
        message: 'Good Bye'
    })
    
}

    render() {
        
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick = {this.clickHandler.bind(this)}>click</button>  
            </div>
        )
    }
}

export default EventBind