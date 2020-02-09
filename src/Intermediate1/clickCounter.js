import React, { Component } from 'react'

class clickCounter extends Component{
    constructor(){
        super()

        this.state = {
            Counter: 0
        }
    }

    clickHandler = () => {
        this.setState(prevState => {
            return{Counter:prevState.Counter + 1}
        })
    }
    render(){
        const {Counter} = this.state
        return(
            <button onClick={this.clickHandler}>
                click {Counter} times
            </button>
        )
    }
}
export default clickCounter