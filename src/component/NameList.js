import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Shiny',
            age: 20,
            skill: 'HTML'
        },
        {
            id: 1,
            name: 'Chandu',
            age: 22,
            skill: 'React'
        },
        {
            id: 1,
            name: 'Srija',
            age: 21,
            skill: 'Java'
        },
        {
            id: 1,
            name: 'Honey',
            age: 25,
            skill: 'Spring'
        }
    ]



    /* const names = ['abdul', 'ansari', 'tanveer', 'dxc','react']
    const namesList = names.map(name => <h2>{name}</h2>) */
    const personList = persons.map(person => (<Person human = {person}></Person>))

    return (
        <div>{personList}</div>
    )
}

export default NameList