import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


export class ParentComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         parentName: 'Shiny'
    }
    this.greetParent = this.greetParent.bind(this)
}

    greetParent(){
        //alert('hello '+this.state.parentName)
        alert(`Hello ${this.state.parentName}`) //string templates-- es6
    }

    render() {
        return (
            <div>
                <ChildComponent praneshwarHandler = {this.greetParent}/>   {/*i am passing the reference of greet parent method to the child via a props*/}
            </div>
        )
    }
}

export default ParentComponent