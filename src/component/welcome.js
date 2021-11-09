import React, { Component } from "react";

class Welcome extends Component{

    render(){
        const {name,alias} = this.props
        //const{state1,state2} = this.state
        return <h1>welcome mrs {name}  alias is {alias}</h1>
    }

}

export default Welcome