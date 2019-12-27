import React from 'react'
const  Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>
                Helloa {props.name}
            </h1>
            {props.children}
        </div>
    )
} 
export default Greet