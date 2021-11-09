import React from 'react'

/**
 * this is a stateless component
 * @returns 
 */
function ChildComponent(props) {
    return (
        <div>
            <button onClick = {() => props.NymishaHandler('Harsha')}>Greet</button>
        </div>
    )
}

export default ChildComponent