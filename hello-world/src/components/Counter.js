// states

import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increment(){
        // wrong method as it will merge diff functions calls setstate in 1 call
        // this.setState({
        //     count: this.state.count + 1
        // })

        // write
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
    }
    
    render() {
        return (
            <div>
            <div>count - {this.state.count}</div>  
            <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
