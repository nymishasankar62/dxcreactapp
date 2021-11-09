import React from 'react'

/**
 * this is a stateless component
 * @returns 
 */
function ChildComponent(props) {
    return (
        <div>
            <button onClick = {props.praneshwarHandler}>Greet</button>
        </div>
    )
}

export default ChildComponent