import React, { Component } from 'react'
import updatedComponent from './withCounter'

class clickCounter extends Component{
    constructor(){
        super()

        this.state = {
            Counter: null
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
            <button onClick={this.clickHandler}> {this.props.name}
                click {Counter} times
            </button>
        )
    }
}
export default updatedComponent (clickCounter)