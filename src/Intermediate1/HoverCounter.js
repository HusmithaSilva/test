import React, {Component} from 'react'
import updatedComponent from './withCounter'

class HoverCounter extends Component{

    constructor(){
        super()

        this.state = {
            Counter: null
        }
    }

    headinghandler = () => {
        this.setState(prevState => {
            return{Counter: prevState.Counter + 1}
        })
    }
    
    render(){
        const {Counter} = this.state
        return(
            <div>
                <h2 onMouseOver={this.headinghandler}>{this.props.name} Clicked {Counter} times</h2>
            </div>
        )
    }
}
export default updatedComponent(HoverCounter)