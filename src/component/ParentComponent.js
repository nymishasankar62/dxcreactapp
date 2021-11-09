import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

/**
 * this parent component is a stateful/content-partition
 */
export class ParentComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         parentName: 'Shiny'
    }
    this.greetParent = this.greetParent.bind(this)
}


    greetParent(childName){
        //alert('hello '+this.state.parentName)
        alert(`Hello ${this.state.parentName} from  ${childName}`) 
    }

    render() {
        return (
            <div>
                <ChildComponent NymishaHandler = {this.greetParent}/>   
            </div>
        )
    }
}

export default ParentComponent