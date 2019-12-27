import React, { Component } from 'react'

class userGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        let message
        if(this.isLoggedIn){
            message = <div>Logged in</div> 
        }
        else
        {
                message = <div>Not Logged in</div>
        }
        return message
    }
}

export default userGreeting
