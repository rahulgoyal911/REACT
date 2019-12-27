// rendering a list
import React from 'react'

function NameList() {
    const names = ['rahul','ankit','prince']
    return (
        
        <div>
            {
                names.map(name => <h1>{name}</h1>)
            }
        </div>
    )
}

export default NameList
